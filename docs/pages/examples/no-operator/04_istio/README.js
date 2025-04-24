<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_running_coherence_with_istio"><span class="merged" id="all.1QFdQT" title="原文 : Running Coherence with Istio">Istioを使用したCoherenceの実行</span></h2>
<div class="section">
<p><span class="merged" id="all.3a6pqe" title="原文 : This example shows how to deploy a simple Coherence cluster in Kubernetes with Istio.">この例は、Istioを使用してKubernetesに単純なCoherenceクラスタをデプロイする方法を示しています。</span></p>

<p><span class="merged" id="all.2rc0Qi.spl1" title="原文 : Coherence can be configured to work with Istio, even if Istio is configured in Strict Mode.">IstioがStrictモードで構成されている場合でも、Coherenceは<a href="https://istio.io" id="" target="_blank" >Istio</a>で動作するように構成できます。</span> <span class="merged" id="all.2rc0Qi.spl2" title="原文 : Coherence caches can be accessed from inside or outside the Kubernetes cluster via Coherence*Extend, REST, and other supported Coherence clients.">Coherenceキャッシュには、Coherence*Extend、RESTおよびその他のサポートされているCoherenceクライアントを介して、Kubernetesクラスタの内部または外部からアクセスできます。</span> <span class="merged" id="all.2rc0Qi.spl3" title="原文 : Although Coherence itself can be configured to use TLS, when using Istio Coherence cluster members and clients can just use the default socket configurations and Istio will control and route all the traffic over mTLS.">Coherence自体はTLSを使用するように構成できますが、Istio Coherenceクラスタ・メンバーおよびクライアントを使用する場合、デフォルトのソケット構成のみを使用でき、IstioはmTLSを介してすべてのトラフィックを制御およびルーティングします。</span> </p>

</div>

<h2 id="_how_does_coherence_work_with_istio"><span class="merged" id="all.2nSZrv.1" title="原文 : How Does Coherence Work with Istio?">CoherenceとIstioの連携方法</span></h2>
<div class="section">
<p><span class="merged" id="all.28ymnv.1.spl1" title="原文 : Istio is a &quot;Service Mesh&quot; so the clue to how Istio works in Kubernetes is in the name, it relies on the configuration of Kubernetes Services.">Istioは「サービス・メッシュ」であるため、KubernetesでIstioがどのように機能するかの手がかりは名前にあり、Kubernetesサービスの構成に依存します。</span> <span class="merged" id="all.28ymnv.1.spl2" title="原文 : This means that any ports than need to be accessed in Pods, including those using in &quot;Pod to Pod&quot; communication must be exposed via a Service.">つまり、PodからPodへの通信を使用するポートを含め、Podでアクセスする必要があるポートは、サービスを介して公開される必要があります。</span> <span class="merged" id="all.28ymnv.1.spl3" title="原文 : Usually a Pod can reach any port on another Pod even if it is not exposed in the container spec, but this is not the case when using Istio as only ports exposed by the Envoy proxy are allowed.">通常、ポッドはコンテナ仕様で公開されていない場合でも、別のポッド上の任意のポートに到達できますが、Envoyプロキシによって公開されているポートのみが許可されるため、Istioを使用する場合にはそうではありません。</span> </p>

<p><span class="merged" id="all.3O018H.spl1" title="原文 : For Coherence cluster membership, this means the cluster port and the local port must be exposed on a Service.">Coherenceクラスタ・メンバーシップの場合、これはクラスタ・ポートとローカル・ポートをサービスで公開する必要があることを意味します。</span> <span class="merged" id="all.3O018H.spl2" title="原文 : To do this the local port must be configured to be a fixed port instead of the default ephemeral port.">これを行うには、デフォルトのエフェメラル・ポートではなく固定ポートとしてローカル・ポートを構成する必要があります。</span> <span class="merged" id="all.3O018H.spl3" title="原文 : The default cluster port is 7574 and there is no reason to ever change this when running in containers.">デフォルトのクラスタ・ポートは<code>7574</code>で、コンテナで実行するときにこれを変更する必要はありません。</span> <span class="merged" id="all.3O018H.spl4" title="原文 : A fixed local port has to be configured for Coherence to work with Istio out of the box.">CoherenceがIstioと連携するように、固定ローカル・ポートをあらかじめ構成しておく必要があります。</span> <span class="merged" id="all.3O018H.spl5" title="原文 : Additional ports, management port, metrics port, etc. also need to be exposed if they are being used.">追加のポート、管理ポート、メトリクス・ポートなども使用されている場合は公開する必要があります。</span> </p>

<p><span class="merged" id="all.MvZ73.spl1" title="原文 : Ideally, Coherence clusters are run as a StatefulSet in Kubernetes.">理想的には、CoherenceクラスタはKubernetesでStatefulSetとして実行されます。</span> <span class="merged" id="all.MvZ73.spl2" title="原文 : This means that the Pods are configured with a host name and a subdomain based on the name of the StatefulSet headless service name, and it is this name that should be used to access Pods.">つまり、ポッドは、StatefulSetヘッドレス・サービス名の名前に基づいてホスト名とサブドメインで構成され、この名前はポッドへのアクセスに使用する必要があります。</span> </p>


<h3 id="_prerequisites"><span class="merged" id="all.2LZvWc.7"  title="原文:: Prerequisites">前提条件</span></h3>
<div class="section">
<p><span class="merged" id="all.2G7Qr4.1" title="原文 : The instructions assume that you are using a Kubernetes cluster with Istio installed and configured already.">この手順では、Istioがインストールされ、すでに構成されているKubernetesクラスタを使用していることを前提としています。</span></p>


<h4 id="_enable_istio_strict_mode"><span class="merged" id="all.7ms5Q.1" title="原文 : Enable Istio Strict Mode">Istio Strict Modeの有効化</span></h4>
<div class="section">
<p><span class="merged" id="all.45tmvL.1.spl1" title="原文 : For this example we make Istio run in &quot;strict&quot; mode so that it will not allow any traffic between Pods outside the Envoy proxy.">この例では、Istioを"strict"モードで実行して、Envoyプロキシ外のPod間のトラフィックを許可しないようにします。</span> <span class="merged" id="all.45tmvL.1.spl2" title="原文 : If other modes are used, such as permissive, then Istio allows Pod to Pod communication so a cluster may appear to work in permissive mode, when it would not in strict mode.">許容モードなどの他のモードが使用されている場合、IstioはPodからPodへの通信を許可するため、クラスタは厳密モードではない場合に許容モードで動作するように見えます。</span> </p>

<p><span class="merged" id="all.2ipiUk.1" title="原文 : To set Istio to strict mode create the following yaml file.">Istioをstrictモードに設定するには、次のyamlファイルを作成します。</span></p>

<markup
lang="yaml"
title="istio-strict.yaml"
>apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: "default"
spec:
  mtls:
    mode: STRICT</markup>

<p><span class="merged" id="all.3RfKqi.1" title="原文 : Install this yaml into the Istio system namespace with the following command:">次のコマンドを使用して、このyamlをIstioシステム・ネームスペースにインストールします:</span></p>

<markup
lang="bash"

>kubectl -n istio-system apply istio-strict.yaml</markup>

</div>
</div>
</div>

<h2 id="_create_a_coherence_cluster"><span class="merged" id="all.1nXToc"  title="原文: Create a Coherence Cluster">Coherenceクラスタの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.YZQ0r.spl1" title="原文 : The best way to run Coherence cluster members is to use a StatefulSet.">Coherenceクラスタ・メンバーを実行する最適な方法は、StatefulSetを使用することです。</span> <span class="merged" id="all.YZQ0r.spl2" title="原文 : Multiple StatefulSets can be created that are all part of the same Coherence cluster.">同じCoherenceクラスタの一部である複数のStatefulSetsを作成できます。</span> </p>

<p><span class="merged" id="all.2ehoaH.spl1" title="原文 : In this example we will run a Coherence cluster using the CE image.">この例では、CEイメージを使用してCoherenceクラスタを実行します。</span> <span class="merged" id="all.2ehoaH.spl2" title="原文 : This image starts Coherence with health checks enabled on port 6676, an Extend proxy listening on port 20000, a gRPC proxy on port 1408, the cluster port set to 7574.">このイメージは、ポート6676でヘルス・チェックを有効にし、ポート20000でリスニングする拡張プロキシ、ポート1408でgRPCプロキシ、クラスタ・ポートを7574に設定してCoherenceを起動します。</span> <span class="merged" id="all.2ehoaH.spl3" title="原文 : We will also enable Coherence Management over REST on port 30000, and metrics on port 9612.">また、ポート30000でCoherence Management over RESTを有効にし、ポート9612でメトリクスを有効にします。</span> <span class="merged" id="all.2ehoaH.spl4" title="原文 : We will set the Coherence local port to a fixed value of 7575.">Coherenceローカル・ポートを固定値7575に設定します。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.28"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.Afdwp.spl1" title="原文 : Istio has a few requirements for how Kubernetes resources are configured.">Istioには、Kubernetesリソースの構成方法に関するいくつかの要件があります。</span> <span class="merged" id="all.Afdwp.spl2" title="原文 : One of those is labels, where an app and version label are required to specify the application name that the resource is part of and the version of that application.">その1つはラベルで、リソースが属するアプリケーション名およびアプリケーションのバージョンを指定するには、<code>app</code>および<code>version</code>ラベルが必要です。</span> <span class="merged" id="all.Afdwp.spl3" title="原文 : All the resources in this example contains those labels.">この例のすべてのリソースには、これらのラベルが含まれています。</span> </p>
</p>
</div>

<h3 id="_cluster_discovery_service"><span class="merged" id="all.r45n9" title="原文 : Cluster Discovery Service">クラスタ検出サービス</span></h3>
<div class="section">
<p><span class="merged" id="all.2hndcp.spl1" title="原文 : For Coherence cluster discovery to work in Kubernetes we have to configure Coherence well-known-addresses which requires a headless service.">Coherenceクラスタの検出がKubernetesで機能するには、ヘッドレス・サービスを必要とするCoherenceの既知のアドレスを構成する必要があります。</span> <span class="merged" id="all.2hndcp.spl2" title="原文 : We cannot use the same headless service then we will create for the StatefulSet because the WKA service must have the publishNotReadyAddresses field set to true, whereas the StatefulSet service does not.">同じヘッドレス・サービスを使用できないため、WKAサービスの<code>publishNotReadyAddresses</code>フィールドは<code>true</code>に設定される必要があり、StatefulSetサービスは設定されないため、StatefulSetに対して作成します。</span> <span class="merged" id="all.2hndcp.spl3" title="原文 : We would not want the ports accessed via the StatefulSet service to route to unready Pods, but for cluster discovery we must allow unready Pods to be part of the Service.">StatefulSetサービスを介してアクセスされるポートを、準備されていないポッドにルーティングすることは望んでいませんが、クラスタ検出では、準備されていないポッドをサービスの一部にすることを許可する必要があります。</span> </p>

<p><span class="merged" id="all.MMN8O" title="原文 : The discovery service can be created with yaml like that shown below.">次に示すようなyamlを使用して検出サービスを作成できます。</span></p>

<markup
lang="yaml"
title="wka-service.yaml"
>apiVersion: v1
kind: Service
metadata:
  name: storage-wka    <span class="conum" data-value="1" />
spec:
  clusterIP: None
  publishNotReadyAddresses: true  <span class="conum" data-value="2" />
  selector:                       <span class="conum" data-value="3" />
    app: my-coherence-app
    version: 1.0.0
  ports:
    - name: coherence    <span class="conum" data-value="4" />
      port: 7574
      targetPort: coherence
      appProtocol: tcp</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.45BgmK" title="原文 : The service name is storeage-wka and this will be used to configure the Coherence WKA address in the cluster.">サービス名は<code>storeage-wka</code>で、これはクラスタ内のCoherence WKAアドレスを構成するために使用されます。</span></li>
<li data-value="2"><span class="merged" id="all.2XsXBK" title="原文 : The publishNotReadyAddresses field must be set to true"><code>publishNotReadyAddresses</code>フィールドを<code>true</code>に設定する必要があります</span></li>
<li data-value="3"><span class="merged" id="all.3lF1CU" title="原文 : The selector is configured to match a sub-set of the Pod labels configured in the StatefulSet"><code>selector</code>は、StatefulSetで構成されたポッド・ラベルのサブセットと一致するように構成されます</span></li>
<li data-value="4"><span class="merged" id="all.2QB1OF.spl1" title="原文 : We do not really need or care about the port for the cluster discovery service, but all Kubernetes services must have at least one port, so here we use the cluster port.">クラスタ検出サービスのポートは実際には必要ありませんが、すべてのKubernetesサービスには少なくとも1つのポートが必要であるため、ここではクラスタ・ポートを使用します。</span> <span class="merged" id="all.2QB1OF.spl2" title="原文 : We could use any random port, even one that nothing is listening on">ランダムなポートを使用でき、何も聞いていないポートも使用できます</span> </li>
</ul>
</div>

<h3 id="_statefulset_headless_service"><span class="merged" id="all.1hbxdP.1" title="原文 : StatefulSet Headless Service">StatefulSetヘッドレス・サービス</span></h3>
<div class="section">
<p><span class="merged" id="all.2LGzeI.spl1" title="原文 : All StatefulSets require a headless Service creating and the name of this Service is specified in the StatefulSet spec.">すべてのStatefulSetsにはヘッドレス・サービスの作成が必要であり、このサービスの名前はStatefulSet仕様で指定されます。</span> <span class="merged" id="all.2LGzeI.spl2" title="原文 : All the ports mentioned above will be exposed on this service.">前述のすべてのポートが、このサービスで公開されます。</span> <span class="merged" id="all.2LGzeI.spl3" title="原文 : The yaml for the service could look like this:">サービスのyamlは次のようになります:</span> </p>

<markup
lang="yaml"
title="storage-service.yaml"
>apiVersion: v1
kind: Service
metadata:
  name: storage-headless
spec:
  clusterIP: None
  selector:
    app: my-coherence-app  <span class="conum" data-value="1" />
    version: 1.0.0
  ports:
    - name: coherence              <span class="conum" data-value="2" />
      port: 7574
      targetPort: coherence
      appProtocol: tcp
    - name: coh-local              <span class="conum" data-value="3" />
      port: 7575
      targetPort: coh-local
      appProtocol: tcp
    - name: extend-proxy           <span class="conum" data-value="4" />
      port: 20000
      targetPort: extend-proxy
      appProtocol: tcp
    - name: grpc-proxy             <span class="conum" data-value="5" />
      port: 1408
      targetPort: grpc-proxy
      appProtocol: grpc
    - name: management             <span class="conum" data-value="6" />
      port: 30000
      targetPort: management
      appProtocol: http
    - name: metrics                <span class="conum" data-value="7" />
      port: 9612
      targetPort: metrics
      appProtocol: http</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.u6ytY" title="原文 : The selector labels will match a sub-set of the labels specified for the Pods in the StatefulSet">セレクタ・ラベルは、StatefulSetのポッドに指定されたラベルのサブセットと一致</span></li>
<li data-value="2"><span class="merged" id="all.xYYSb.spl1" title="原文 : The Coherence cluster port 7574 is exposed with the name coherence mapping to the container port in the StatefulSet named coherence.">Coherenceクラスタ・ポート7574は、<code>coherence</code>という名前のStatefulSetのコンテナ・ポートへの<code>coherence</code>マッピングという名前で公開されます。</span> <span class="merged" id="all.xYYSb.spl2" title="原文 : This port has an appProtocol of tcp to tell Istio that the port traffic is raw TCP traffic.">このポートの<code>appProtocol</code>は<code>tcp</code>で、ポート・トラフィックがRAW TCPトラフィックであることをIstioに伝えます。</span> </li>
<li data-value="3"><span class="merged" id="all.1rOxIi" title="原文 : The Coherence local port 7575 is exposed with the name coh-local mapping to the container port in the StatefulSet named coh-local This port has an appProtocol of tcp to tell Istio that the port traffic is raw TCP traffic.">Coherenceローカル・ポート7575は、<code>coh-local</code>という名前のStatefulSetのコンテナ・ポートへの<code>coh-local</code>マッピングという名前で公開されます。このポートには、ポート・トラフィックがRAW TCPトラフィックであることをIstioに知らせる<code>appProtocol</code>が<code>tcp</code>です。</span></li>
<li data-value="4"><span class="merged" id="all.2msG3w" title="原文 : The Coherence Extend proxy port 20000 is exposed with the name extend-proxy mapping to the container port in the StatefulSet named extend-proxy This port has an appProtocol of tcp to tell Istio that the port traffic is raw TCP traffic.">Coherence Extendプロキシ・ポート20000は、<code>extend-proxy</code>という名前のStatefulSetのコンテナ・ポートへの<code>extend-proxy</code>マッピングという名前で公開されます。このポートには、ポート・トラフィックがRAW TCPトラフィックであることをIstioに知らせる<code>appProtocol</code>が<code>tcp</code>です。</span></li>
<li data-value="5"><span class="merged" id="all.3H5j6V" title="原文 : The Coherence gRPC proxy port 1408 is exposed with the name grpc-proxy mapping to the container port in the StatefulSet named grpc-proxy This port has an appProtocol of grpc to tell Istio that the port traffic is gRPC traffic.">Coherence gRPCプロキシ・ポート1408は、<code>grpc-proxy</code>という名前のStatefulSetのコンテナ・ポートへの<code>grpc-proxy</code>マッピングという名前で公開されます。このポートには、ポート・トラフィックがgRPCトラフィックであることをIstioに知らせる<code>appProtocol</code>が<code>grpc</code>です。</span></li>
<li data-value="6"><span class="merged" id="all.144EpA" title="原文 : The Coherence Management over REST port 30000 is exposed with the name management mapping to the container port in the StatefulSet named management This port has an appProtocol of http to tell Istio that the port traffic is http traffic.">Coherence Management over RESTポート30000は、StatefulSet <code>management</code>という名前のコンテナ・ポートへの<code>management</code>マッピングという名前で公開されます。このポートには、ポート・トラフィックがhttpトラフィックであることをIstioに知らせる<code>appProtocol</code>が<code>http</code>です。</span></li>
<li data-value="7"><span class="merged" id="all.j0V5F" title="原文 : The Coherence Metrics port 9612 is exposed with the name metrics mapping to the container port in the StatefulSet named metrics This port has an appProtocol of http to tell Istio that the port traffic is http traffic.">Coherenceメトリクス・ポート9612は、<code>metrics</code>という名前のStatefulSetのコンテナ・ポートへの<code>metrics</code>マッピングという名前で公開されています。このポートには、ポート・トラフィックがhttpトラフィックであることをIstioに知らせる<code>appProtocol</code>が<code>http</code>です。</span></li>
</ul>
<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.29"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.Q5DgR.spl1" title="原文 : Istio requires ports to specify the protocol used for their traffic, and this can be done in two ways.">Istioは、トラフィックに使用するプロトコルを指定するためにポートを必要とします。これは2つの方法で実行できます。</span> <span class="merged" id="all.Q5DgR.spl2" title="原文 : Either using the appProtocol field for the ports, as shown above.">前述のように、ポートに<code>appProtocol</code>フィールドを使用します。</span> <span class="merged" id="all.Q5DgR.spl3" title="原文 : Or, prefix the port name with the protocol, so instead of management the port name would be http-management">または、ポート名の前にプロトコルを付けるため、<code>management</code>のかわりに、ポート名は<code>http-management</code>になります</span> </p>
</p>
</div>
</div>

<h3 id="_the_statefulset"><span class="merged" id="all.2HBpXt.2" title="原文 : The StatefulSet">StatefulSet</span></h3>
<div class="section">
<p><span class="merged" id="all.2e4S8D.spl1" title="原文 : With the two Services defined, the StatefulSet can now be configured.">2つのサービスを定義すると、StatefulSetを構成できるようになります。</span> <span class="merged" id="all.2e4S8D.spl2"  title="原文:: Istio">Istio</span> </p>

<markup
lang="yaml"
title="storage.yaml"
>apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: storage
  labels:
    app: my-coherence-app
    version: 1.0.0
spec:
  selector:
    matchLabels:
        app: my-coherence-app
        version: 1.0.0
  serviceName: storage-headless  <span class="conum" data-value="1" />
  replicas: 3
  podManagementPolicy: Parallel
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
  template:
    metadata:
      labels:
        app: my-coherence-app
        version: 1.0.0
    spec:
      containers:
        - name: coherence
          image: container-registry.oracle.com/middleware/coherence-ce:14.1.2-0-1   <span class="conum" data-value="2" />
          env:
            - name: COHERENCE_CLUSTER          <span class="conum" data-value="3" />
              value: "test-cluster"
            - name: NAMESPACE                  <span class="conum" data-value="4" />
              valueFrom:
                fieldRef:
                  fieldPath: "metadata.namespace"
            - name: COHERENCE_WKA                   <span class="conum" data-value="5" />
              value: "storage-wka.${NAMESPACE}.svc"
            - name: COHERENCE_LOCALPORT        <span class="conum" data-value="6" />
              value: "7575"
            - name: COHERENCE_LOCALHOST        <span class="conum" data-value="7" />
              valueFrom:
                fieldRef:
                  fieldPath: "metadata.name"
            - name: COHERENCE_MACHINE          <span class="conum" data-value="8" />
              valueFrom:
                fieldRef:
                  fieldPath: "spec.nodeName"
            - name: COHERENCE_MEMBER           <span class="conum" data-value="9" />
              valueFrom:
                fieldRef:
                  fieldPath: "metadata.name"
            - name: COHERENCE_EXTEND_PORT
              value: "20000"
            - name: COHERENCE_GRPC_SERVER_PORT
              value: "1408"
          ports:
           - name: coherence         <span class="conum" data-value="10" />
             containerPort: 7574
           - name: coh-local
             containerPort: 7575
           - name: extend-proxy
             containerPort: 20000
           - name: grpc-proxy
             containerPort: 1408
           - name: management
             containerPort: 30000
           - name: metrics
             containerPort: 9162
          readinessProbe:            <span class="conum" data-value="11" />
            httpGet:
              path: "/ready"
              port: 6676
              scheme: "HTTP"
          livenessProbe:
            httpGet:
              path: "/healthz"
              port: 6676
              scheme: "HTTP"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.U0MJx" title="原文 : All StatefulSets require a headless service, in this case the service will be named storage-headless to match the service above">すべてのStatefulSetsにはヘッドレス・サービスが必要です。この場合、サービスは前述のサービスと一致するように<code>storage-headless</code>という名前になります</span></li>
<li data-value="2"><span class="merged" id="all.4L2bGc" title="原文 : This example is using the CE 22.06 image">この例では、CE 22.06イメージを使用しています</span></li>
<li data-value="3"><span class="merged" id="all.47rNuF" title="原文 : The COHERENCE_CLUSTER environment variable sets the Coherence cluster name to test-cluster"><code>COHERENCE_CLUSTER</code>環境変数は、Coherenceクラスタ名を<code>test-cluster</code>に設定</span></li>
<li data-value="4"><span class="merged" id="all.3OS6vA.spl1" title="原文 : The NAMESPACE environment variable contains the namespace the StatefulSet is deployed into."><code>NAMESPACE</code>環境変数には、StatefulSetがデプロイされるネームスペースが含まれます。</span> <span class="merged" id="all.3OS6vA.spl2" title="原文 : The value is taken from the matadata.namespace field of the Pod.">値は、ポッドの<code>matadata.namespace</code>フィールドから取得されます。</span> <span class="merged" id="all.3OS6vA.spl3" title="原文 : This is then used to create a fully qualified well known address value">これを使用して、完全修飾の既知の住所値を作成</span> </li>
<li data-value="5"><span class="merged" id="all.1uC6V7.spl1" title="原文 : The COHERENCE_WKA environment variable sets address Coherence uses to perform a DNS lookup for cluster member IP addresses."><code>COHERENCE_WKA</code>環境変数は、Coherenceがクラスタ・メンバーIPアドレスのDNSルックアップを実行するために使用するアドレスを設定します。</span> <span class="merged" id="all.1uC6V7.spl2" title="原文 : In this case we use the name of the WKA service created above combined with the NAMESPACE environment variable to give a fully qualified service name.">この場合、前述で作成したWKAサービスの名前を<code>NAMESPACE</code>環境変数と組み合せて使用して、完全修飾サービス名を指定します。</span> </li>
<li data-value="6"><span class="merged" id="all.18CTAq" title="原文 : The COHERENCE_LOCALPORT environment variable sets the Coherence localport to 7575, which matches what was exposed in the Service ports and container ports"><code>COHERENCE_LOCALPORT</code>環境変数は、Coherenceローカル・ポートを7575に設定します。これは、サービス・ポートおよびコンテナ・ポートで公開された内容と一致</span></li>
<li data-value="7"><span class="merged" id="all.AhkQY" title="原文 : The COHERENCE_LOCAHOST environment variable sets the hostname that Coherence binds to, in this case it will be the same as the Pod name by using the &quot;valueFrom&quot; setting to get the value from the Pod’s metadata.name field"><code>COHERENCE_LOCAHOST</code>環境変数は、Coherenceがバインドするホスト名を設定します。この場合、ポッドの<code>metadata.name</code>フィールドから値を取得するために"valueFrom"設定を使用してポッド名と同じになります</span></li>
<li data-value="8"><span class="merged" id="all.3BsvI2.spl1" title="原文 : It is best practice to use the COHERENCE_MACHINE environment variable to set the Coherence machine label to the Kubernetes Node name."><code>COHERENCE_MACHINE</code>環境変数を使用して、Coherenceマシン・ラベルをKubernetesノード名に設定することをお薦めします。</span> <span class="merged" id="all.3BsvI2.spl2" title="原文 : The machine name is used by Coherence when assigning backup partitions, so a backup of a partition will not be on the same Node as the primary owner of the partition. the same as the Pod name by using the &quot;valueFrom&quot; setting to get the value from the Pod’s metadata.name field">マシン名は、バックアップ・パーティションの割当て時にCoherenceによって使用されるため、パーティションのバックアップは、パーティションのプライマリ所有者と同じノード上にはありません。"valueFrom"設定を使用してポッドの<code>metadata.name</code>フィールドから値を取得することで、ポッド名と同じです</span> </li>
<li data-value="9"><span class="merged" id="all.1pxdh9" title="原文 : It is best practice to use the COHERENCE_MEMBER environment variable to set the Coherence member name to the Pod name."><code>COHERENCE_MEMBER</code>環境変数を使用して、Coherenceメンバー名をポッド名に設定することをお薦めします。</span></li>
<li data-value="10"><span class="merged" id="all.3xlWJH.spl1" title="原文 : All the ports required are exposed as container ports.">必要なポートはすべてコンテナ・ポートとして公開されます。</span> <span class="merged" id="all.3xlWJH.spl2" title="原文 : The names must correspond to the names used for the container ports in the Service spec.">名前は、サービス仕様のコンテナ・ポートに使用される名前に対応している必要があります。</span> </li>
<li data-value="11"><span class="merged" id="all.4CQqF5" title="原文 : As we are using Coherence CE 22.06 we can use Coherence built in health check endpoints for the readiness and liveness probes.">Coherence CE 22.06を使用しているため、レディネスおよびリブネス・プローブにCoherenceの組込みヘルス・チェック・エンドポイントを使用できます。</span></li>
</ul>
<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.30"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.2aRiFQ.spl1" title="原文 : The example above is using Coherence 22.06 which has built in health checks and health check endpoints which can be used as readiness and liveness probes in Kubernetes.">前述の例は、Coherence 22.06を使用しています。このCoherenceには、Kubernetesでレディネスおよびリブネス・プローブとして使用できるヘルス・チェックおよびヘルス・チェック・エンドポイントが組み込まれています。</span> <span class="merged" id="all.2aRiFQ.spl2" title="原文 : These endpoints are only available if you start Coherence correctly using the Bootstrap API introduced in 22.06.">これらのエンドポイントは、22.06で導入されたブートストラップAPIを使用してCoherenceを正しく起動した場合にのみ使用できます。</span> </p>

<p><span class="merged" id="all.3norm9" title="原文 : Start Coherence using com.tangosol.net.Coherence as the main class.">メイン・クラスとして<code>com.tangosol.net.Coherence</code>を使用してCoherenceを起動します。</span></p>

<markup
lang="bash"

>java --class-path coherence.jar com.tangosol.net.Coherence</markup>

<p><span class="merged" id="all.447JKq" title="原文 : Start Coherence in code:">コードでCoherenceを起動します:</span></p>

<markup
lang="java"

>Coherence coherence = Coherence.clusterMember().start().join();</markup>

<p><span class="merged" id="all.vCpxN" title="原文 : See the Coherence Bootstrap API documentation for more details">詳細は、Coherenceの<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.2206/develop-applications/starting-and-stopping-cluster-members.html#GUID-A74280C1-AB23-48DB-8C0D-E494230ABFCA" id="" target="_blank" >「ブートストラップAPI」</a>ドキュメントを参照してください</span></p>
</p>
</div>
</div>

<h3 id="_deploy_the_cluster"><span class="merged" id="all.2yd3h4.1" title="原文 : Deploy the Cluster">クラスタのデプロイ</span></h3>
<div class="section">
<p><span class="merged" id="all.3kfmBQ.spl1" title="原文 : We will deploy the cluster into a Kubernetes namespace names coherence.">クラスタをKubernetesネームスペース名<code>coherence</code>にデプロイします。</span> <span class="merged" id="all.3kfmBQ.spl2" title="原文 : Before deploying the cluster we need to ensure it has been labeled so that Istio will inject the Envoy proxy sidecar into the Pods.">クラスタをデプロイする前に、IstioがEnvoyプロキシ・サイドカーをポッドにインジェクトするように、ラベルが付けられていることを確認する必要があります。</span> </p>

<markup
lang="bash"

>kubectl create namespace coherence
kubectl label namespace coherence istio-injection=enabled</markup>

<p><span class="merged" id="all.2GwrLY.spl1" title="原文 : To deploy the cluster we just apply all three yaml files to Kubernetes.">クラスタをデプロイするには、3つのyamlファイルをすべてKubernetesに適用します。</span> <span class="merged" id="all.2GwrLY.spl2" title="原文 : We could combine them into a single yaml file if we wanted to.">1つのyamlファイルに結合できます。</span> </p>

<markup
lang="bash"

>kubectl -n coherence apply -f wka-service.yaml
kubectl -n coherence apply -f storage-service.yaml
kubectl -n coherence apply -f storage.yaml</markup>

<p><span class="merged" id="all.4CEzf0" title="原文 : If we list the services, we see the two services we created">サービスをリストすると、作成した2つのサービスが表示されます</span></p>

<markup
lang="bash"

>$ kubectl get svc
NAME               TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                                                   AGE
storage-headless   ClusterIP   None         &lt;none&gt;        7574/TCP,7575/TCP,20000/TCP,1408/TCP,30000/TCP,9612/TCP   37m
storage-wka        ClusterIP   None         &lt;none&gt;        7574/TCP                                                  16m</markup>

<p><span class="merged" id="all.2xgZIB" title="原文 : If we list the Pods, we see three Pods, as the StatefulSet replicas field is set to three.">ポッドをリストすると、StatefulSetレプリカ・フィールドが3に設定されているため、3つのポッドが表示されます。</span></p>

<markup
lang="bash"

>$ kubectl get pod
NAME        READY   STATUS    RESTARTS   AGE
storage-0   2/2     Running   0          7m47s
storage-1   2/2     Running   0          7m47s
storage-2   2/2     Running   0          7m47s</markup>

<p><span class="merged" id="all.1YOLVB" title="原文 : We can use Istio’s Kiali dashboard to visualize the cluster we created.">IstioのKialiダッシュボードを使用して、作成したクラスタをビジュアル化できます。</span></p>

<p><span class="merged" id="all.34JfEp.spl1" title="原文 : We labelled the resources with the app label with a value of my-coherence-app and we can see this application in the Kiali dashboard.">リソースに<code>app</code>ラベルと値<code>my-coherence-app</code>のラベルを付けたため、このアプリケーションをKialiダッシュボードに表示できます。</span> <span class="merged" id="all.34JfEp.spl2" title="原文 : The graph shows the cluster member Pods communicating with each other via the storage-headless service.">グラフには、<code>storage-headless</code>サービスを介して相互に通信するクラスタ・メンバー・ポッドが表示されます。</span> <span class="merged" id="all.34JfEp.spl3" title="原文 : The padlock icons show that this traffic is using mTLS even though Coherence has not been configured with TLS, this is being provided by Istio.">南京錠アイコンは、CoherenceがTLSで構成されていなくても、このトラフィックがmTLSを使用していることを示しています。これはIstioによって提供されています。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="kiali cluster start" src="./images/images/kiali-cluster-start.png" width="1024" /> </v-card-text> </v-card>

</div>
</div>

<h2 id="_coherence_clients"><span class="merged" id="all.UWPlx"  title="原文:: Coherence Clients">Coherenceクライアント</span></h2>
<div class="section">
<p><span class="merged" id="all.4MvGGG" title="原文 : Coherence clients (Extend or gRPC) can be configured to connect to the Coherence cluster.">Coherenceクライアント(拡張またはgRPC)は、Coherenceクラスタに接続するように構成できます。</span></p>


<h3 id="_extend_proxy_configuration"><span class="merged" id="all.1IOXDw" title="原文 : Extend Proxy Configuration">プロキシ構成の拡張</span></h3>
<div class="section">
<p><span class="merged" id="all.1ZUCAL.spl1" title="原文 : To work correctly with Istio a Coherence Extend proxy in the server’s cache configuration file must be configured to use a fixed port.">Istioで正しく動作するには、サーバーのキャッシュ構成ファイルでCoherence Extendプロキシが固定ポートを使用するように構成されている必要があります。</span> <span class="merged" id="all.1ZUCAL.spl2" title="原文 : For example, the XML snippet below configures the proxy to bind to all interfaces (0.0.0.0) on port 20000.">たとえば、次のXMLスニペットは、ポート20000のすべてのインタフェース(<code>0.0.0.0</code>)にバインドするようにプロキシを構成します。</span> </p>

<markup
lang="xml"

>    &lt;proxy-scheme&gt;
      &lt;service-name&gt;Proxy&lt;/service-name&gt;
      &lt;acceptor-config&gt;
        &lt;tcp-acceptor&gt;
          &lt;local-address&gt;
            &lt;address system-property="coherence.extend.address"&gt;0.0.0.0&lt;/address&gt;
            &lt;port system-property="coherence.extend.port"&gt;20000&lt;/port&gt;
          &lt;/local-address&gt;
        &lt;/tcp-acceptor&gt;
      &lt;/acceptor-config&gt;
      &lt;autostart&gt;true&lt;/autostart&gt;
    &lt;/proxy-scheme&gt;</markup>

<p><span class="merged" id="all.2cf7jN" title="原文 : The port could be changed by setting the COHERENCE_EXTEND_PORT environment variable in the server yaml.">ポートは、サーバーyamlで<code>COHERENCE_EXTEND_PORT</code>環境変数を設定することで変更できます。</span></p>

<markup
lang="yaml"

>    spec:
      containers:
        - name: coherence
          image: container-registry.oracle.com/middleware/coherence-ce:14.1.2-0-1
          env:
            - name: COHERENCE_EXTEND_PORT
              value: "20001"</markup>

<p><span class="merged" id="all.2PuIM3" title="原文 : The Extend port should be exposed on the StatefulSet (as shown in the StatefulSet yaml above) and on the StatefulSet headless service so that clients can discover it and connect to it (as shown in the Service yaml above).">Extendポートは、StatefulSet (前述の<router-link @click.native="this.scrollFix('#sts')" to="#sts">StatefulSet yaml</router-link>を参照)およびStatefulSetヘッドレス・サービスで公開し、クライアントがそれを検出して接続できるようにします(前述の<router-link @click.native="this.scrollFix('#headless-svc')" to="#headless-svc">「サービスyaml」</router-link>を参照)。</span></p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.18"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.2JJ6Mn" title="原文 : The default cache configuration file used by Coherence, and used in the Coherence images published on GitHub, contains an Extend Proxy service that uses the COHERENCE_EXTEND_PORT environment variable to set the port.">Coherenceで使用されるデフォルトのキャッシュ構成ファイルで、GitHubで公開されたCoherenceイメージで使用されます。<code>COHERENCE_EXTEND_PORT</code>環境変数を使用してポートを設定する拡張プロキシ・サービスが含まれています。</span></p>
</p>
</div>
</div>

<h3 id="_grpc_proxy_configuration"><span class="merged" id="all.2EWafl" title="原文 : gRPC Proxy Configuration">gRPCプロキシ構成</span></h3>
<div class="section">
<p><span class="merged" id="all.WA5Ex.spl1" title="原文 : The Coherence gRPC proxy binds to an ephemeral port by default.">Coherence gRPCプロキシは、デフォルトでエフェメラル・ポートにバインドされます。</span> <span class="merged" id="all.WA5Ex.spl2" title="原文 : This port can be changed by using the COHERENCE_GRPC_SERVER_PORT environment variable;">このポートは、<code>COHERENCE_GRPC_SERVER_PORT</code>環境変数を使用して変更できます</span> </p>

<markup
lang="yaml"

>    spec:
      containers:
        - name: coherence
          image: container-registry.oracle.com/middleware/coherence-ce:14.1.2-0-1
          env:
            - name: COHERENCE_GRPC_SERVER_PORT
              value: "1408"</markup>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.19"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.3C3xos" title="原文 : The default configuration used by Coherence images published on GitHub sets the gRPC port to 1408.">GitHubで公開されたCoherenceイメージで使用されるデフォルト構成では、gRPCポートが1408に設定されます。</span></p>
</p>
</div>
<p><span class="merged" id="all.yYWVE.spl1" title="原文 : Once the server StatefulSet and Service have been properly configured the clients can be configured.">サーバーStatefulSetとサービスが適切に構成されると、クライアントを構成できます。</span> <span class="merged" id="all.yYWVE.spl2" title="原文 : The options available for this will depend on where the client will run.">これに使用できるオプションは、クライアントが実行される場所によって異なります。</span> </p>

</div>

<h3 id="_clients_inside_kubernetes"><span class="merged" id="all.3MBN8M" title="原文 : Clients Inside Kubernetes">Kubernetes内のクライアント</span></h3>
<div class="section">
<p><span class="merged" id="all.4SjYvy.spl1" title="原文 : If the clients are also inside the cluster they can be configured to connect using the StatefulSet headless service as the hostname for the proxy endpoints.">クライアントもクラスタ内にある場合は、プロキシ・エンドポイントのホスト名としてStatefulSetヘッドレス・サービスを使用して接続するように構成できます。</span> <span class="merged" id="all.4SjYvy.spl2" title="原文 : There are two options for configuring Extend and">Extendの構成には2つのオプションがあります</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3yC8Ub" title="原文 : Clients inside Kubernetes can also use the minimal Coherence NameService configuration where the StatefulSet service name is used as the client’s WKA address and the same cluster name is configured.">Kubernetes内のクライアントは、StatefulSetサービス名がクライアントのWKAアドレスとして使用され、同じクラスタ名が構成されている最小のCoherence NameService構成を使用することもできます。</span></p>

</li>
<li>
<p><span class="merged" id="all.Rhboj.spl1" title="原文 : Clients external to the Kubernetes cluster can be configured using any of the ingress or gateway features of Istio and Kubernetes.">Kubernetesクラスタ外部のクライアントは、IstioおよびKubernetesのイングレス機能またはゲートウェイ機能を使用して構成できます。</span> <span class="merged" id="all.Rhboj.spl2" title="原文 : All the different ways to do this are beyond the scope of this simple example as there are many, and they depend on the versions of Istio and Kubernetes being used.">これを行うすべての方法は、この単純な例の範囲を超えて多くあり、使用されるIstioおよびKubernetesのバージョンによって異なります。</span> </p>

</li>
</ul>

<h4 id="_build_a_client_image"><span class="merged" id="all.3LFzmM" title="原文 : Build a Client Image">クライアント・イメージのビルド</span></h4>
<div class="section">
<p><span class="merged" id="all.4KvC99.spl1" title="原文 : For this example we need a simple client image that can be run with different configurations.">この例では、異なる構成で実行できる単純なクライアント・イメージが必要です。</span> <span class="merged" id="all.4KvC99.spl2" title="原文 : Instead of building an application we will use a Coherence Image from GitHub combined with the utilities from the Coherence Operator.">アプリケーションを作成するかわりに、GitHubのCoherenceイメージをCoherence Operatorのユーティリティと組み合せて使用します。</span> </p>

<p><span class="merged" id="all.1UpfiY.spl1" title="原文 : The simple Dockerfile below is a multistage build file.">次の単純なDockerfileは、マルチ・ステージ・ビルド・ファイルです。</span> <span class="merged" id="all.1UpfiY.spl2" title="原文 : It uses the Operator image as a &quot;builder&quot; and then the Coherence image as the base.">オペレータ・イメージをビルダーとして使用し、次にCoherenceイメージをベースとして使用します。</span> <span class="merged" id="all.1UpfiY.spl3" title="原文 : Various utilities are copied from the Operator image into the base.">オペレータ・イメージからベースにさまざまなユーティリティがコピーされます。</span> </p>

<markup

title="Dockerfile"
>FROM container-registry.oracle.com/middleware/coherence-operator:3.5.0 AS Builder

FROM container-registry.oracle.com/middleware/coherence-ce:14.1.2-0-1
COPY --from=Builder /files /files
COPY --from=Builder /files/lib/coherence-operator.jar /app/libs/coherence-operator.jar
COPY coherence-java-client-14.1.2-0-1.jar /app/libs/coherence-java-client-14.1.2-0-1.jar

ENTRYPOINT ["files/runner"]
CMD ["-h"]</markup>

<p><span class="merged" id="all.1Xrjk9.spl1" title="原文 : As we are going to show both the Coherence Extend client and gRPC client we need to add the Coherence gRPC client jar.">Coherence ExtendクライアントとgRPCクライアントの両方を表示するため、Coherence gRPCクライアントjarを追加する必要があります。</span> <span class="merged" id="all.1Xrjk9.spl2" title="原文 : We can download this with curl to the same directory as the Dockerfile.">これは、<code>curl</code>を使用してDockerfileと同じディレクトリにダウンロードできます。</span> </p>

<markup
lang="bash"

>curl -s https://repo1.maven.org/maven2/com/oracle/coherence/ce/coherence-java-client/14.1.2-0-1/coherence-java-client-14.1.2-0-1.jar \
  -o coherence-java-client-14.1.2-0-1.jar</markup>

<p><span class="merged" id="all.47IsV3" title="原文 : Build the image with the following command:">次のコマンドを使用してイメージをビルドします:</span></p>

<markup
lang="bash"

>docker build -t coherence-client:1.0.0 -f Dockerfile .</markup>

<p><span class="merged" id="all.43ZWML.spl1" title="原文 : There will now be an imaged named coherence-client:1.0.0 which can be pushed somewhere Kubernetes can see it.">これで、Kubernetesが参照できる場所にプッシュできる<code>coherence-client:1.0.0</code>という名前のイメージが作成されます。</span> <span class="merged" id="all.43ZWML.spl2" title="原文 : We will use this example below.">次の例では使用します。</span> </p>

</div>

<h4 id="_using_the_coherence_nameservice_configuration"><span class="merged" id="all.38k2YB" title="原文 : Using the Coherence NameService Configuration">Coherence NameService構成の使用</span></h4>
<div class="section">
<p><span class="merged" id="all.W4FQm.spl1" title="原文 : The minimal configuration in a client’s cache configuration file is shown below.">クライアントのキャッシュ構成ファイルの最小構成を次に示します。</span> <span class="merged" id="all.W4FQm.spl2" title="原文 : This configuration will use the Coherence NameService to look up the endpoints for the Extend Proxy services running in the Coherence cluster.">この構成では、Coherence NameServiceを使用して、Coherenceクラスタで実行されているExtendプロキシ・サービスのエンドポイントを検索します。</span> </p>

<markup
lang="xml"

>&lt;remote-cache-scheme&gt;
  &lt;scheme-name&gt;thin-remote&lt;/scheme-name&gt;
  &lt;service-name&gt;RemoteCache&lt;/service-name&gt;
  &lt;proxy-service-name&gt;Proxy&lt;/proxy-service-name&gt;
&lt;/remote-cache-scheme&gt;</markup>

<p><span class="merged" id="all.ZSoWz.spl1" title="原文 : For the NameService to work in Kubernetes, the client must be configured with the same cluster name, the same well known addresses and same cluster port as the server.">NameServiceをKubernetesで機能させるには、サーバーと同じクラスタ名、既知のアドレスおよびクラスタ・ポートでクライアントを構成する必要があります。</span> <span class="merged" id="all.ZSoWz.spl2" title="原文 : When using Istio the server’s cluster port, local port and Extend port should be exposed on the StatefulSet headless service.">Istioを使用する場合、サーバーのクラスタ・ポート、ローカル・ポートおよび拡張ポートは、StatefulSetヘッドレス・サービスで公開する必要があります。</span> <span class="merged" id="all.ZSoWz.spl3" title="原文 : The client’s well known address is then set to the qualified Kubernetes DNS name for the server’s StatefulSet headless service.">次に、クライアントの既知のアドレスは、サーバーのStatefulSetヘッドレス・サービスの修飾されたKubernetes DNS名に設定されます。</span> </p>

<p><span class="merged" id="all.18c0Ts" title="原文 : These can all be set using environment variables in the yaml for the client.">これらはすべて、クライアントのyamlの環境変数を使用して設定できます。</span></p>

<p><span class="merged" id="all.1wwZ0H" title="原文 : For example, assuming the client will connect to the Coherence cluster configured in the StatefulSet above:">たとえば、クライアントが前述の<router-link @click.native="this.scrollFix('#sts')" to="#sts">StatefulSet</router-link>で構成されたCoherenceクラスタに接続するとします:</span></p>

<markup
lang="yaml"

>  env:
    - name: COHERENCE_CLUSTER             <span class="conum" data-value="1" />
      value: "test-cluster"
    - name: COHERENCE_WKA                 <span class="conum" data-value="2" />
      value: "storage-headless.coherence.svc"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2zfh69" title="原文 : The cluster name is set to test-cluster the same as the StatefulSet">クラスタ名は、StatefulSetと同じように<code>test-cluster</code>に設定されます</span></li>
<li data-value="2"><span class="merged" id="all.39m0jO" title="原文 : The COHERENCE_WKA value is set to the DNS name of the StatefulSet headless service, which has the format &lt;service-name&gt;.&lt;namespace&gt;.svc so in this case storage-headless.coherence.svc"><code>COHERENCE_WKA</code>値は、StatefulSetヘッドレス・サービスのDNS名に設定されます。このサービスの形式は<code>&lt;service-name>.&lt;namespace>.svc</code>であるため、この場合は<code>storage-headless.coherence.svc</code>です</span></li>
</ul>
</div>

<h4 id="_run_an_extend_client_pod"><span class="merged" id="all.Loaen" title="原文 : Run an Extend Client Pod">Extendクライアント・ポッドの実行</span></h4>
<div class="section">
<p><span class="merged" id="all.3pd7El" title="原文 : Using the coherence-client:1.0.0 image created above, we can run a simple Coherence client Pod.">上で作成した<code>coherence-client:1.0.0</code>イメージを使用して、単純なCoherenceクライアント・ポッドを実行できます。</span></p>

<markup
lang="yaml"
title="extend-client-pod.yaml"
>apiVersion: v1
kind: Pod
metadata:
  name: client
  labels:
    app: coherence-client
    version: 1.0.0
spec:
  containers:
    - name: coherence
      image: coherence-client:1.0.0  <span class="conum" data-value="1" />
      command:
        - /files/runner   <span class="conum" data-value="2" />
        - sleep
        - "15m"
      env:
        - name: COHERENCE_CLUSTER              <span class="conum" data-value="3" />
          value: "test-cluster"
        - name: COHERENCE_WKA                  <span class="conum" data-value="4" />
          value: "storage-headless.coherence.svc"
        - name: COHERENCE_CLIENT               <span class="conum" data-value="5" />
          value: "remote"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4PpWvj" title="原文 : The container image is set to the client image built above coherence-client:1.0.0">コンテナ・イメージは、<code>coherence-client:1.0.0</code>の上に構築されたクライアント・イメージに設定されます</span></li>
<li data-value="2"><span class="merged" id="all.3yNoTQ" title="原文 : The command line the container will run is /files/runner sleep 15m which will just sleep for 15 minutes">コンテナが実行するコマンドラインは、15分間スリープする<code>/files/runner sleep 15m</code>です</span></li>
<li data-value="3"><span class="merged" id="all.e9WAM" title="原文 : The Coherence cluster name is set to the same name as the server deployed above in the StatefulSet yaml">Coherenceクラスタ名は、前述の<router-link @click.native="this.scrollFix('#sts')" to="#sts">StatefulSet yaml</router-link>にデプロイされたサーバーと同じ名前に設定されます</span></li>
<li data-value="4"><span class="merged" id="all.OxbGk" title="原文 : The WKA address is set to the StatefulSet’s headless service name storage-headless.coherence.svc">WKAアドレスは、StatefulSetのヘッドレス・サービス名<code>storage-headless.coherence.svc</code>に設定されます</span></li>
<li data-value="5"><span class="merged" id="all.gggof" title="原文 : For this example the COHERENCE_CLIENT which sets the default cache configuration file to run as an Extend client, using the NameService to look up the proxies.">この例では、NameServiceを使用してプロキシを検索し、デフォルトのキャッシュ構成ファイルをExtendクライアントとして実行するように設定する<code>COHERENCE_CLIENT</code>です。</span></li>
</ul>
<p><span class="merged" id="all.hz3nw" title="原文 : We can deploy the client into Kubernetes">クライアントをKubernetesにデプロイできます</span></p>

<markup
lang="bash"

>kubectl -n coherence apply -f extend-client-pod.yaml</markup>

<p><span class="merged" id="all.3pAzUo.spl1" title="原文 : We deployed the client into the same namespace as the cluster, we could easily have deployed it to another namespace.">クライアントをクラスタと同じネームスペースにデプロイしたため、別のネームスペースに簡単にデプロイできました。</span> <span class="merged" id="all.3pAzUo.spl2" title="原文 : If we list the Pods we will see the cluster and the client.">Podをリストすると、クラスタとクライアントが表示されます。</span> <span class="merged" id="all.3pAzUo.spl3" title="原文 : All Pods has two containers, one being the Istio side-car.">すべてのPodには2つのコンテナがあり、1つはIstioサイドカです。</span> </p>

<markup
lang="bash"

>$ k -n coherence get pod
NAME        READY   STATUS    RESTARTS   AGE
storage-0   2/2     Running   0          105m
storage-1   2/2     Running   0          105m
storage-2   2/2     Running   0          105m
client      2/2     Running   0          8m27s</markup>

<p><span class="merged" id="all.39RkqW" title="原文 : Now we can exec into the Pod and start a Coherence QueryPlus console session using the following command:">これで、次のコマンドを使用してPodを実行し、CoherenceのQueryPlusコンソール・セッションを開始できます:</span></p>

<markup
lang="bash"

>kubectl -n coherence exec -it client -- /files/runner queryplus</markup>

<p><span class="merged" id="all.konWy" title="原文 : The QueryPlus session will start and eventually display the CohQL&gt; prompt:">QueryPlusセッションが起動し、最終的に<code>CohQL></code>プロンプトが表示されます:</span></p>

<markup
lang="bash"

>Coherence Command Line Tool

CohQL&gt;</markup>

<p><span class="merged" id="all.465efc.1.spl1" title="原文 : A simple command to try is just creating a cache, so at the prompt type the command create cache test which will create a cache named test.">試行する簡単なコマンドはキャッシュの作成のみであるため、プロンプトで、<code>test</code>という名前のキャッシュを作成するコマンド<code>create cache test</code>を入力します。</span> <span class="merged" id="all.465efc.1.spl2" title="原文 : If all is configured correctly this client will connect to the cluster over Extend and create the cache called test and return to the CohQL prompt.">すべてが正しく構成されている場合、このクライアントはExtendを介してクラスタに接続し、<code>test</code>というキャッシュを作成し、<code>CohQL</code>プロンプトに戻ります。</span> </p>

<markup
lang="bash"

>Coherence Command Line Tool

CohQL&gt; create cache test</markup>

<p><span class="merged" id="all.soAJw.1" title="原文 : We can also try selecting data from the cache using the CohQL query select * from test (which will return nothing as the cache is empty).">また、CohQL問合せ<code>select * from test</code>を使用してキャッシュからデータを選択することもできます(キャッシュが空であるため、何も返されません)。</span></p>

<markup
lang="bash"

>CohQL&gt; select * from test
Results

CohQL&gt;</markup>

<p><span class="merged" id="all.45d1YV.spl1" title="原文 : If we now look at the Kiali dashboard we can see that the client application has communicated with the storage cluster.">Kialiダッシュボードを見ると、クライアント・アプリケーションがストレージ・クラスタと通信していることがわかります。</span> <span class="merged" id="all.45d1YV.spl2" title="原文 : All of this communication was using mTLS but without configuring Coherence to use TLS.">この通信はすべてmTLSを使用していましたが、TLSを使用するようにCoherenceを構成していませんでした。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="kiali client remote app" src="./images/images/kiali-client-remote-app.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.1iP9KY" title="原文 : If we look at the Kiali dashboard traffic tab for the client application we can see the traffic was TCP over mTLS.">クライアント・アプリケーションの「Kiali」ダッシュボードの「トラフィック」タブを見ると、トラフィックがmTLS経由のTCPであることがわかります。</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="kiali client remote traffic" src="./images/images/kiali-client-remote-traffic.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.2bskoa.spl1" title="原文 : To exit from the CohQL&gt; prompt type the bye command."><code>CohQL></code>プロンプトから終了するには、<code>bye</code>コマンドを入力します。</span> <span class="merged" id="all.2bskoa.spl2" title="原文 : The delete the client Pod">クライアント・ポッドの削除</span> </p>

<markup
lang="bash"

>kubectl -n coherence delete -f extend-client-pod.yaml</markup>

</div>

<h4 id="_run_a_grpc_client_pod"><span class="merged" id="all.4JWiew" title="原文 : Run a gRPC Client Pod">gRPCクライアント・ポッドの実行</span></h4>
<div class="section">
<p><span class="merged" id="all.3HY9t8.spl1" title="原文 : We can run the same image as a gRPC client.">gRPCクライアントと同じイメージを実行できます。</span> <span class="merged" id="all.3HY9t8.spl2" title="原文 : For this example, instead of the NameService we will configure Coherence to">この例では、NameServiceのかわりにCoherenceを次のように構成</span> </p>

<markup
lang="yaml"
title="grpc-client-pod.yaml"
>apiVersion: v1
kind: Pod
metadata:
  name: client
  labels:
    app: coherence-client
    version: 1.0.0
spec:
  containers:
    - name: coherence
      image: coherence-client:1.0.0
      command:
        - /files/runner
        - sleep
        - "15m"
      env:
        - name: COHERENCE_CLIENT
          value: "grpc-fixed"
        - name: COHERENCE_GRPC_ADDRESS
          value: "storage-headless.coherence.svc"
        - name: COHERENCE_GRPC_PORT
          value: "1408"</markup>

<p><span class="merged" id="all.3WNAiu" title="原文 : We can now deploy the gRPC client Pod">gRPCクライアントPodをデプロイできるようになりました</span></p>

<markup
lang="bash"

>kubectl -n coherence delete -f grpc-client-pod.yaml</markup>

<p><span class="merged" id="all.1olKIX" title="原文 : And exec into the Pod to create a QueryPlus session.">そして、ポッドにexecしてQueryPlusセッションを作成します。</span></p>

<markup
lang="bash"

>kubectl -n coherence exec -it client -- /files/runner queryplus</markup>

<p><span class="merged" id="all.4H587M.spl1" title="原文 : We can run the same create cache test and select * from test command that we ran above to connect the client to the cluster.">クライアントをクラスタに接続するために、上で実行したものと同じ<code>create cache test</code>および<code>select * from test</code>コマンドを実行できます。</span> <span class="merged" id="all.4H587M.spl2" title="原文 : This time the client should be connecting over gRPC.">今回、クライアントはgRPCを介して接続する必要があります。</span> </p>

<p><span class="merged" id="all.QxbEK.spl1" title="原文 : If we now look at the Kiali dashboard we can see again that the client application has communicated with the storage cluster.">ここでKialiダッシュボードを見ると、クライアント・アプリケーションがストレージ・クラスタと通信していることがわかります。</span> <span class="merged" id="all.QxbEK.spl2" title="原文 : All of this communication was using mTLS but without configuring Coherence to use TLS.">この通信はすべてmTLSを使用していましたが、TLSを使用するようにCoherenceを構成していませんでした。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="kiali client grpc app" src="./images/images/kiali-client-grpc-app.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.2XAYfn" title="原文 : If we look at the Kiali dashboard traffic tab for the client application we can see that this time the traffic was gRPC over mTLS.">クライアント・アプリケーションの「Kiali」ダッシュボードの「トラフィック」タブを見ると、今回はトラフィックがmTLS経由でgRPCであることがわかります。</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="kiali client grpc traffic" src="./images/images/kiali-client-grpc-traffic.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.2bskoa.1.spl1" title="原文 : To exit from the CohQL&gt; prompt type the bye command."><code>CohQL></code>プロンプトから終了するには、<code>bye</code>コマンドを入力します。</span> <span class="merged" id="all.2bskoa.1.spl2" title="原文 : The delete the client Pod">クライアント・ポッドの削除</span> </p>

<markup
lang="bash"

>kubectl -n coherence delete -f extend-client-pod.yaml</markup>

</div>
</div>

<h3 id="_clients_outside_kubernetes"><span class="merged" id="all.3aoC01" title="原文 : Clients Outside Kubernetes">Kubernetes外のクライアント</span></h3>
<div class="section">
<p><span class="merged" id="all.49z7dH.spl1" title="原文 : When connecting Coherence Extend or gRPC clients from outside Kubernetes, the Coherence NameService cannot be used by clients to look up the endpoints.">Coherence ExtendクライアントまたはgRPCクライアントをKubernetes外部から接続する場合、Coherence NameServiceをクライアントがエンドポイントを検索するために使用することはできません。</span> <span class="merged" id="all.49z7dH.spl2" title="原文 : The clients must be configured with fixed endpoints using the hostnames and ports of the configured ingress or gateway services.">クライアントは、構成されたイングレスまたはゲートウェイ・サービスのホスト名およびポートを使用して固定エンドポイントで構成する必要があります。</span> <span class="merged" id="all.49z7dH.spl3" title="原文 : Exactly how this is done will depend on the versions of Istio and Kubernetes being used and whether Ingress or the Kubernetes Gateway API is used.">これを正確に実行する方法は、使用されているIstioのバージョンとKubernetes、およびIngressまたはKubernetes Gateway APIのどちらが使用されているかによって異なります。</span> <span class="merged" id="all.49z7dH.spl4" title="原文 : The different options available make it impossible to build an example that can cover all these scenarios.">使用可能なオプションによって、これらすべてのシナリオをカバーする例を作成することはできません。</span> </p>

</div>
</div>
</doc-view>
