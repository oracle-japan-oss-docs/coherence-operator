<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_using_coherence_with_istio"><span class="merged" id="all.4OqKpf" title="原文 : Using Coherence with Istio">IstioでのCoherenceの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.496Nkv.spl1" title="原文 : You can run the Coherence cluster and manage them using the Coherence Operator alongside Istio.">Coherenceクラスタを実行し、<a href="https://istio.io" id="" target="_blank" >Istio</a>とともにCoherence Operatorを使用して管理できます。</span> <span class="merged" id="all.496Nkv.spl2" title="原文 : Coherence clusters managed with the Coherence Operator 3.5.0 and later work with Istio 1.9.1 and later out of the box.">Coherence Operator 3.5.0で管理されるCoherenceクラスタは、Istio 1.9.1以降で即時利用可能な状態で動作します。</span> <span class="merged" id="all.496Nkv.spl3" title="原文 : Coherence caches can be accessed from outside the Coherence cluster via Coherence*Extend, REST, and other supported Coherence clients.">Coherenceキャッシュには、Coherence*Extend、REST、およびサポートされているその他のCoherenceクライアントを介して、Coherenceクラスタの外部からアクセスできます。</span> <span class="merged" id="all.496Nkv.spl4" title="原文 : Using Coherence clusters with Istio does not require the Coherence Operator to also be using Istio (and vice-versa) .">IstioでCoherenceクラスタを使用する場合、Coherence OperatorもIstioを使用する必要はありません(逆も同様)。</span> <span class="merged" id="all.496Nkv.spl5" title="原文 : The Coherence Operator can manage Coherence clusters independent of whether those clusters are using Istio or not.">Coherence Operatorは、これらのクラスタがIstioを使用しているかどうかに関係なく、Coherenceクラスタを管理できます。</span> </p>

<p><span class="merged" id="all.13sF9t" title="原文 : Although Coherence itself can be configured to use TLS, when using Istio Coherence cluster members and clients can just use the default socket configurations and Istio will control and route all the traffic over mTLS.">Coherence自体はTLSを使用するように構成できますが、Istio Coherenceクラスタ・メンバーおよびクライアントを使用する場合、デフォルトのソケット構成のみを使用でき、IstioはmTLSを介してすべてのトラフィックを制御およびルーティングします。</span></p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.12"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.M214a.spl1" title="原文 : Coherence clusters can be manually configured to work with Istio, even if not using the Operator.">Coherenceクラスタは、オペレータを使用していなくても、Istioと連携するように手動で構成できます。</span> <span class="merged" id="all.M214a.spl2" title="原文 : See the Istio example in the No Operator Examples"><router-link to="/examples/no-operator/04_istio/README">「オペレータなしの例」</router-link>のIstioの例を参照してください</span> </p>
</p>
</div>
<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p.8"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.LZMrK" title="原文 : Upgrading Istio"><strong>Istioのアップグレード</strong></span></p>

<p><span class="merged" id="all.46jX5m.spl1" title="原文 : The Istio documentations states that the recommended way to upgrade Istio is to use Istio revisions and canary upgrades.">Istioのドキュメントでは、Istioをアップグレードするための推奨される方法は<a href="https://istio.io/latest/docs/setup/upgrade/canary/" id="" target="_blank" >「Istioのリビジョンとカナリア・アップグレード」</a>を使用することです。</span> <span class="merged" id="all.46jX5m.spl2" title="原文 : If Istio is upgraded using a simple in-place upgrade option this will cause Coherence Pods to have communication issues and ultimately make the Coherence cluster unusable.">単純なインプレース・アップグレード・オプションを使用してIstioをアップグレードすると、Coherenceポッドに通信の問題が発生し、最終的にCoherenceクラスタが使用できなくなります。</span> <span class="merged" id="all.46jX5m.spl3" title="原文 : This is because an in-place Istio upgrade will cause the Istio Proxy in the side-car containers to receive config updates and then to drain all the TCP connections it is managing, hence causing Coherence containers to disconnect from each other.">これは、インプレースIstioアップグレードによって、サイドカ・コンテナのIstioプロキシが構成更新を受信し、管理しているすべてのTCP接続をドレインするため、Coherenceコンテナが相互に切断されるためです。</span> </p>

<p><span class="merged" id="all.4fjBJ4" title="原文 : This issue is not just related to Coherence but can impact any long-lived TCP connections, for example connections to a database.">この問題は、Coherenceに関連するだけでなく、データベースへの接続など、存続期間の長いTCP接続に影響する可能性があります。</span></p>

<p><span class="merged" id="all.yZmBJ" title="原文 : If you are using Istio in a managed environment where you do not control its life-cycle, you must ensure that the people that are responsible for managing Istio use the recommended upgrade approach.">ライフサイクルを制御しないマネージド環境でIstioを使用している場合は、Istioを管理する担当者が推奨されるアップグレード・アプローチを使用していることを確認する必要があります。</span></p>
</p>
</div>

<h3 id="_how_does_coherence_work_with_istio"><span class="merged" id="all.2nSZrv" title="原文 : How Does Coherence Work with Istio?">CoherenceとIstioの連携方法</span></h3>
<div class="section">
<p><span class="merged" id="all.28ymnv.spl1" title="原文 : Istio is a &quot;Service Mesh&quot; so the clue to how Istio works in Kubernetes is in the name, it relies on the configuration of Kubernetes Services.">Istioは「サービス・メッシュ」であるため、KubernetesでIstioがどのように機能するかの手がかりは名前にあり、Kubernetesサービスの構成に依存します。</span> <span class="merged" id="all.28ymnv.spl2" title="原文 : This means that any ports than need to be accessed in Pods, including those using in &quot;Pod to Pod&quot; communication must be exposed via a Service.">つまり、PodからPodへの通信を使用するポートを含め、Podでアクセスする必要があるポートは、サービスを介して公開される必要があります。</span> <span class="merged" id="all.28ymnv.spl3" title="原文 : Usually a Pod can reach any port on another Pod even if it is not exposed in the container spec, but this is not the case when using Istio as only ports exposed by the Envoy proxy are allowed.">通常、ポッドはコンテナ仕様で公開されていない場合でも、別のポッド上の任意のポートに到達できますが、Envoyプロキシによって公開されているポートのみが許可されるため、Istioを使用する場合にはそうではありません。</span> </p>

<p><span class="merged" id="all.UjcnF.spl1" title="原文 : For Coherence cluster membership, this means the cluster port and the local port must be exposed on a Service.">Coherenceクラスタ・メンバーシップの場合、これはクラスタ・ポートとローカル・ポートをサービスで公開する必要があることを意味します。</span> <span class="merged" id="all.UjcnF.spl2" title="原文 : To do this the local port must be configured to be a fixed port instead of the default ephemeral port.">これを行うには、デフォルトのエフェメラル・ポートではなく固定ポートとしてローカル・ポートを構成する必要があります。</span> <span class="merged" id="all.UjcnF.spl3" title="原文 : The Coherence Operator uses the default cluster port of 7574 and there is no reason to ever change this.">Coherence Operatorは、<code>7574</code>のデフォルトのクラスタ・ポートを使用しますが、これを変更する必要はありません。</span> <span class="merged" id="all.UjcnF.spl4" title="原文 : The Coherence Operator always configures a fixed port for the local port so this works with Istio out of the box.">Coherence Operatorは、ローカル・ポートの固定ポートを常に構成するため、Istioとともに動作します。</span> <span class="merged" id="all.UjcnF.spl5" title="原文 : In addition, the Operator uses the health check port to determine the status of a cluster, so this needs to be exposed so that the Operator can reach Coherence Pods.">また、オペレータはヘルス・チェック・ポートを使用してクラスタのステータスを判断するため、オペレータがCoherenceポッドに到達できるように、これを公開する必要があります。</span> </p>

<p><span class="merged" id="all.3aC6fM.spl1" title="原文 : The Coherence localhost property can be set to the name of the Pod.">Coherenceのlocalhostプロパティは、ポッドの名前に設定できます。</span> <span class="merged" id="all.3aC6fM.spl2" title="原文 : This is easily done using the container environment variables, which the Operator does automatically.">これは、オペレータが自動的に行うコンテナ環境変数を使用して簡単に実行できます。</span> </p>

<p><span class="merged" id="all.v7Dka.spl1" title="原文 : Coherence clusters are run as a StatefulSet in Kubernetes.">Coherenceクラスタは、KubernetesでStatefulSetとして実行されます。</span> <span class="merged" id="all.v7Dka.spl2" title="原文 : This means that the Pods are configured with a host name and a subdomain based on the name of the StatefulSet headless service name, and it is this name that should be used to access Pods.">つまり、ポッドは、StatefulSetヘッドレス・サービス名の名前に基づいてホスト名とサブドメインで構成され、この名前はポッドへのアクセスに使用する必要があります。</span> <span class="merged" id="all.v7Dka.spl3" title="原文 : For example for a Coherence resource named storage the Operator will create a StatefulSet named storgage with a headless service named storage-sts.">たとえば、<code>storage</code>という名前のCoherenceリソースの場合、オペレータは<code>storage-sts</code>という名前のヘッドレス・サービスを使用して、<code>storgage</code>という名前のStatefulSetを作成します。</span> <span class="merged" id="all.v7Dka.spl4" title="原文 : Each Pod in a StatefulSet is numbered with a fixed identity, so the first Pod in this cluster will be storage-0.">StatefulSet内の各ポッドには固定アイデンティティが付けられているため、このクラスタ内の最初のポッドは<code>storage-0</code>になります。</span> <span class="merged" id="all.v7Dka.spl5" title="原文 : The Pod has a number of DNS names that it is reachable with, but the fully qualified name using the headless service will be storage-0.storage-sts or storage-0.storage-sts.&lt;namespace&gt;.svc`.">Podには、到達可能なDNS名が多数ありますが、ヘッドレス・サービスを使用する完全修飾名は、<code>storage-0.storage-sts</code>またはstorage-0.storage-sts.&lt;namespace>.svc`になります。</span> </p>

<p><span class="merged" id="all.1wch35.spl1" title="原文 : By default, the Operator will expose all the ports configured for the Coherence resource on the StatefulSet headless service.">デフォルトでは、オペレータは、StatefulSetヘッドレス・サービスで<code>Coherence</code>リソースに構成されているすべてのポートを公開します。</span> <span class="merged" id="all.1wch35.spl2" title="原文 : This allows Coherence Extend and gRPC clients to use this service name as the WKA address when using the Coherence NameService to lookup endpoints (see the client example below).">これにより、Coherence NameServiceを使用してエンドポイントを検索するときに、Coherence ExtendおよびgRPCクライアントでこのサービス名をWKAアドレスとして使用できます(次のクライアントの例を参照)。</span> </p>

</div>

<h3 id="_prerequisites"><span class="merged" id="all.2LZvWc.5"  title="原文:: Prerequisites">前提条件</span></h3>
<div class="section">
<p><span class="merged" id="all.2G7Qr4" title="原文 : The instructions assume that you are using a Kubernetes cluster with Istio installed and configured already.">この手順では、Istioがインストールされ、すでに構成されているKubernetesクラスタを使用していることを前提としています。</span></p>


<h4 id="_enable_istio_strict_mode"><span class="merged" id="all.7ms5Q" title="原文 : Enable Istio Strict Mode">Istio Strict Modeの有効化</span></h4>
<div class="section">
<p><span class="merged" id="all.45tmvL.spl1" title="原文 : For this example we make Istio run in &quot;strict&quot; mode so that it will not allow any traffic between Pods outside the Envoy proxy.">この例では、Istioを"strict"モードで実行して、Envoyプロキシ外のPod間のトラフィックを許可しないようにします。</span> <span class="merged" id="all.45tmvL.spl2" title="原文 : If other modes are used, such as permissive, then Istio allows Pod to Pod communication so a cluster may appear to work in permissive mode, when it would not in strict mode.">許容モードなどの他のモードが使用されている場合、IstioはPodからPodへの通信を許可するため、クラスタは厳密モードではない場合に許容モードで動作するように見えます。</span> </p>

<p><span class="merged" id="all.2ipiUk" title="原文 : To set Istio to strict mode create the following yaml file.">Istioをstrictモードに設定するには、次のyamlファイルを作成します。</span></p>

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

<p><span class="merged" id="all.3RfKqi" title="原文 : Install this yaml into the Istio system namespace with the following command:">次のコマンドを使用して、このyamlをIstioシステム・ネームスペースにインストールします:</span></p>

<markup
lang="bash"

>kubectl -n istio-system apply istio-strict.yaml</markup>

</div>
</div>

<h3 id="_using_the_coherence_operator_with_istio"><span class="merged" id="all.4XxsVx" title="原文 : Using the Coherence operator with Istio">IstioでのCoherenceオペレータの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3dHXz2.spl1" title="原文 : To use Coherence operator with Istio, you can deploy the operator into a namespace which has Istio automatic sidecar injection enabled.">IstioでCoherenceオペレータを使用するには、Istio自動サイドカー・インジェクションが有効になっているネームスペースにオペレータをデプロイできます。</span> <span class="merged" id="all.3dHXz2.spl2" title="原文 : Before installing the operator, create the namespace in which you want to run the Coherence operator and label it for automatic injection.">オペレータをインストールする前に、Coherenceオペレータを実行するネームスペースを作成し、自動インジェクション用にラベル付けします。</span> </p>

<markup
lang="bash"

>kubectl create namespace coherence
kubectl label namespace coherence istio-injection=enabled</markup>

<p><span class="merged" id="all.1KxioB" title="原文 : Istio Sidecar AutoInjection is done automatically when you label the coherence namespace with istio-injection.">Istio Sidecar AutoInjectionは、istioインジェクションでコヒーレンス・ネームスペースにラベル付けすると自動的に実行されます。</span></p>


<h4 id="_exclude_the_operator_web_hook_from_the_envoy_proxy"><span class="merged" id="all.lOg7u" title="原文 : Exclude the Operator Web-Hook from the Envoy Proxy">オペレータWebフックをEnvoyプロキシから除外</span></h4>
<div class="section">
<p><span class="merged" id="all.n0wKm.spl1" title="原文 : The Coherence Operator uses an admissions web-hook, which Kubernetes will call to validate Coherence resources.">Coherence Operatorは、CoherenceリソースをバリデートするためにKubernetesがコールする入学webフックを使用します。</span> <span class="merged" id="all.n0wKm.spl2" title="原文 : This web-hook binds to port 9443 in the Operator Pods and is already configured to use TLS as is standard for Kubernetes admissions web-hooks.">このwebフックはオペレータ・ポッドのポート<code>9443</code>にバインドされ、Kubernetes入学Webフックの標準としてTLSを使用するようにすでに構成されています。</span> <span class="merged" id="all.n0wKm.spl3" title="原文 : If this port is routed through the Envoy proxy Kubernetes will be unable to access the web-hook.">このポートがEnvoyプロキシを介してルーティングされる場合、Kubernetesはwebフックにアクセスできません。</span> </p>

<p><span class="merged" id="all.48D4No.spl1" title="原文 : The Operator yaml manifests and Helm chart already add the traffic.sidecar.istio.io/excludeInboundPorts annotation to the Operator Pods.">オペレータのyamlマニフェストおよびHelmチャートは、すでに<code>traffic.sidecar.istio.io/excludeInboundPorts</code>注釈をオペレータ・ポッドに追加しています。</span> <span class="merged" id="all.48D4No.spl2" title="原文 : This should exclude the web-hook port from being Istio.">これにより、webフック・ポートがIstioから除外されます。</span> </p>

<p><span class="merged" id="all.Kl2WF" title="原文 : Another way to do this is to add a PeerAuthentication resource to the Operator namespace.">これを行うもう1つの方法は、オペレータ・ネームスペースに<code>PeerAuthentication</code>リソースを追加することです。</span></p>

<p><span class="merged" id="all.3z4FkP" title="原文 : Before installing the Operator, create the following PeerAuthentication yaml."><strong>「オペレータをインストールする前に」</strong>、次の<code>PeerAuthentication</code> yamlを作成します。</span></p>

<markup
lang="yaml"
title="istio-operator.yaml"
>apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: "coherence-operator"
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: coherence-operator
      app.kubernetes.io/instance: coherence-operator-manager
      app.kubernetes.io/component: manager
  mtls:
    mode: STRICT
  portLevelMtls:
    9443:
      mode: PERMISSIVE</markup>

<p><span class="merged" id="all.1rI3Sp.spl1" title="原文 : Then install this PeerAuthentication resource into the same namespace that the Operator will be installed into.">次に、オペレータがインストールされるのと同じネームスペースに、この<code>PeerAuthentication</code>リソースをインストールします。</span> <span class="merged" id="all.1rI3Sp.spl2" title="原文 : For example, if the Operator will be in the coherence namespace:">たとえば、オペレータが<code>coherence</code>ネームスペース内にある場合:</span> </p>

<markup
lang="bash"

>kubectl -n coherence apply istio-operator.yaml</markup>

<p><span class="merged" id="all.13a4Er" title="原文 : You can then install the operator using your preferred method in the Operator Installation Guide.">次に、オペレータ<router-link to="/docs/installation/01_installation">「インストール・ガイド」</router-link>の任意のメソッドを使用してオペレータをインストールできます。</span></p>

<p><span class="merged" id="all.8zuvh" title="原文 : After installed operator, use the following command to confirm the operator is running:">オペレータのインストール後、次のコマンドを使用して、オペレータが実行中であることを確認します:</span></p>

<markup
lang="bash"

>kubectl get pods -n coherence

NAME                                                     READY   STATUS    RESTARTS   AGE
coherence-operator-controller-manager-7d76f9f475-q2vwv   2/2     Running   1          17h</markup>

<p><span class="merged" id="all.3x1F6P.spl1" title="原文 : The output should show 2/2 in READY column, meaning there are 2 containers running in the Operator pod.">出力では、READY列に2/2と表示されます。つまり、Operatorポッドで実行されているコンテナが2つあります。</span> <span class="merged" id="all.3x1F6P.spl2" title="原文 : One is Coherence Operator and the other is Envoy Proxy.">1つはCoherence Operatorで、もう1つはEnvoyプロキシです。</span> </p>

<p><span class="merged" id="all.1WcySn" title="原文 : If we use the Istio Kiali addon to visualize Istio we can see the Operator in the list of applications">Istio Kialiアドオンを使用してIstioをビジュアル化すると、アプリケーションのリストにOperatorが表示されます</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="kiali operator app" src="./images/images/kiali-operator-app.png" width="1024" /> </v-card-text> </v-card>

<p><span class="merged" id="all.cFhGn" title="原文 : We can also see on the detailed view, that the Operator talks to the Kubernetes API server">オペレータがKubernetes APIサーバーと通信する詳細なビューも確認できます</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="kiali operator app graph" src="./images/images/kiali-operator-app-graph.png" width="1024" /> </v-card-text> </v-card>

</div>
</div>

<h3 id="_creating_a_coherence_cluster_with_istio"><span class="merged" id="all.4VO6QC" title="原文 : Creating a Coherence cluster with Istio">Istioを使用したCoherenceクラスタの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.3b92Fg.spl1" title="原文 : You can configure a cluster to run with Istio automatic sidecar injection enabled.">Istioの自動サイドカー・インジェクションを有効にして実行するようにクラスタを構成できます。</span> <span class="merged" id="all.3b92Fg.spl2" title="原文 : Before creating the cluster, create the namespace in which the cluster will run and label it for automatic injection.">クラスタを作成する前に、クラスタが実行されるネームスペースを作成し、自動インジェクション用にラベルを付けます。</span> </p>

<markup
lang="bash"

>kubectl create namespace coherence-example
kubectl label namespace coherence-example istio-injection=enabled</markup>

<p><span class="merged" id="all.2NsvP5" title="原文 : Now create a Coherence resource as normal, there is no additional configuration required to work in Istio.">ここで、通常どおりCoherenceリソースを作成します。Istioでの作業に必要な追加の構成はありません。</span></p>

<p><span class="merged" id="all.4WGVmw" title="原文 : For example using the yaml below to create a three member cluster with management and metrics enabled:">たとえば、次のyamlを使用して、管理およびメトリクスが有効な3つのメンバー・クラスタを作成します:</span></p>

<markup
lang="yaml"
title="storage.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  image: container-registry.oracle.com/middleware/coherence-ce:14.1.2-0-1
  labels:
    app: storage      <span class="conum" data-value="1" />
    version: 1.0.0    <span class="conum" data-value="2" />
  coherence:
    management:
      enabled: true
    metrics:
      enabled: true
  ports:
    - name: management  <span class="conum" data-value="3" />
    - name: metrics
    - name: extend
      port: 20000
      appProtocol: tcp  <span class="conum" data-value="4" />
    - name: grpc-proxy
      port: 1408
      appProtocol: grpc <span class="conum" data-value="5" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2a1ELc" title="原文 : Istio prefers applications to have an app label">Istioは、アプリケーションが<code>app</code>ラベルを持つことを優先</span></li>
<li data-value="2"><span class="merged" id="all.2gsrtv" title="原文 : Istio prefers applications to have a version label">Istioは、アプリケーションが<code>version</code>ラベルを持つことを優先</span></li>
<li data-value="3"><span class="merged" id="all.3taM7Q" title="原文 : The Coherence Pods will expose ports for Management over REST, metrics, a Coherence*Extend proxy and a gRPC proxy">Coherenceポッドは、REST、メトリクス、Coherence*ExtendプロキシおよびgRPCプロキシを介した管理用のポートを公開</span></li>
<li data-value="4"><span class="merged" id="all.22UtcO" title="原文 : The Operator will set the appProtocol for the management and metrics ports to http, but the Extend port must be set manually to tcp so that Istio knows what sort of traffic is being used by that port">オペレータは、管理ポートおよびメトリクス・ポートの<code>appProtocol</code>を<code>http</code>に設定しますが、拡張ポートを<code>tcp</code>に手動で設定して、Istioがそのポートで使用されているトラフィックの種類を認識できるようにする必要があります</span></li>
<li data-value="5"><span class="merged" id="all.3fsYV5" title="原文 : The gRPC port’s appProtocol field is set to grpc">gRPCポートの<code>appProtocol</code>フィールドが<code>grpc</code>に設定されている</span></li>
</ul>
<p><span class="merged" id="all.26b2Ww" title="原文 : Using the Kiali console, we can now see two applications, the Coherence Operator in the &quot;coherence&quot; namespace and the &quot;storage&quot; application in the &quot;coherence-example&quot; namespace.">Kialiコンソールを使用すると、「coherence」ネームスペースのCoherence Operatorと「coherence-example」ネームスペースの「storage」という2つのアプリケーションを表示できます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="kiali storage app" src="./images/images/kiali-storage-app.png" width="1024" /> </v-card-text> </v-card>

<p><span class="merged" id="all.4d3w91" title="原文 : If we look at the graph view we can see all the traffic between the different parts of the system">グラフ・ビューを見ると、システムのさまざまな部分間のすべてのトラフィックを確認できます</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="kiali post deploy" src="./images/images/kiali-post-deploy.png" width="1024" /> </v-card-text> </v-card>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2jamDT" title="原文 : We can see the Kubernetes API server accessing the Operator web-hook to validate the yaml">オペレータwebフックにアクセスしてyamlをバリデートするKubernetes APIサーバーが表示されます</span></p>

</li>
<li>
<p><span class="merged" id="all.K5FiN" title="原文 : We can see tge storage pods (the box marked &quot;storage 1.0.0&quot;) communicate with each other via the storage-sts service to from a Coherence cluster">ストレージ・ポッド(「storage 1.0.0」とマークされたボックス)が、storage-stsサービスを介してCoherenceクラスタから相互に通信していることがわかります</span></p>

</li>
<li>
<p><span class="merged" id="all.16Li73" title="原文 : We can see the storage pods communicate with the Operator REST service to request their Coherence site and rack labels">ストレージ・ポッドがオペレータRESTサービスと通信してCoherenceサイトおよびラック・ラベルをリクエストしているのがわかります</span></p>

</li>
<li>
<p><span class="merged" id="all.jUFtT" title="原文 : We can see the Operator ping the storage pods health endpoints via the storage-sts service">storage-stsサービスを介してストレージ・ポッドのヘルス・エンドポイントをpingするオペレータを確認できます</span></p>

</li>
</ul>
<p><span class="merged" id="all.3zI696" title="原文 : All of this traffic is using mTLS controlled by Istio">このトラフィックはすべて、Istioによって制御されるmTLSを使用しています</span></p>

</div>

<h3 id="_coherence_clients_running_in_kubernetes"><span class="merged" id="all.2t3Bn" title="原文 : Coherence Clients Running in Kubernetes">Kubernetesで実行されているCoherenceクライアント</span></h3>
<div class="section">
<p><span class="merged" id="all.3KLxXB" title="原文 : Coherence Extend clients and gRPC clients running inside the cluster will also work with Istio.">Coherence Extendクライアントおよびクラスタ内で実行されているgRPCクライアントもIstioと連携します。</span></p>

<p><span class="merged" id="all.3cd0MA" title="原文 : For this example the clients will be run in the coherence-client namespace, so it needs to be created and labelled so that Istio injection works in that namespace.">この例では、クライアントは<code>coherence-client</code>ネームスペースで実行されるため、Istioインジェクションがそのネームスペースで動作するように作成およびラベル付けする必要があります。</span></p>

<markup
lang="bash"

>kubectl create namespace coherence-client
kubectl label namespace coherence-client istio-injection=enabled</markup>

<p><span class="merged" id="all.30UqI2" title="原文 : To simulate a client application a CoherenceJob resource will be used with different configurations for the different types of client.">クライアント・アプリケーションをシミュレートするために、<code>CoherenceJob</code>リソースは、様々なタイプのクライアントに対して異なる構成で使用されます。</span></p>

<p><span class="merged" id="all.ODdFb.spl1" title="原文 : The simplest way to configure a Coherence extend client in a cache configuration file is a default configuration similar to that shown below.">Coherence拡張クライアントをキャッシュ構成ファイルで構成する最も簡単な方法は、次に示すようなデフォルト構成です。</span> <span class="merged" id="all.ODdFb.spl2" title="原文 : No ports or addresses need to be configured.">ポートまたはアドレスを構成する必要はありません。</span> <span class="merged" id="all.ODdFb.spl3" title="原文 : Coherence will use the JVM’s configured cluster name and well know addresses to locate to look up the Extend endpoints using the Coherence NameService.">Coherenceでは、JVMの構成済クラスタ名とよく知られたアドレスを使用して、Coherence NameServiceを使用してExtendエンドポイントを検索します。</span> </p>

<markup
lang="xml"

>&lt;remote-cache-scheme&gt;
  &lt;scheme-name&gt;thin-remote&lt;/scheme-name&gt;
  &lt;service-name&gt;RemoteCache&lt;/service-name&gt;
  &lt;proxy-service-name&gt;Proxy&lt;/proxy-service-name&gt;
&lt;/remote-cache-scheme&gt;</markup>

<p><span class="merged" id="all.3iUOf1" title="原文 : We can configure a CoherenceJob to run an Extend client with this configuration as shown below:">次に示すように、この構成でExtendクライアントを実行するように<code>CoherenceJob</code>を構成できます:</span></p>

<markup
lang="yaml"
title="extend-client.yaml"
>apiVersion: coherence.oracle.com/v1
kind: CoherenceJob
metadata:
  name: client
spec:
  image: container-registry.oracle.com/middleware/coherence-ce:14.1.2-0-1  <span class="conum" data-value="1" />
  restartPolicy: Never
  cluster: storage  <span class="conum" data-value="2" />
  coherence:
    wka:
      addresses:
        - "storage-sts.coherence-example.svc"  <span class="conum" data-value="3" />
  application:
    type: operator  <span class="conum" data-value="4" />
    args:
      - sleep
      - "300s"
  env:
    - name: COHERENCE_CLIENT    <span class="conum" data-value="5" />
      value: "remote"
    - name: COHERENCE_PROFILE   <span class="conum" data-value="6" />
      value: "thin"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4bg5oQ" title="原文 : The client will use the CE image published on GitHub, which will use the default cache configuration file from Coherence jar.">クライアントは、GitHubで公開されているCEイメージを使用します。このイメージでは、Coherence jarのデフォルトのキャッシュ構成ファイルが使用されます。</span></li>
<li data-value="2"><span class="merged" id="all.1xTf1z" title="原文 : The cluster name must be set to the cluster name of the cluster started above, in this case storage">クラスタ名は、上で起動したクラスタのクラスタ名に設定する必要があります(この場合は<code>storage</code>)</span></li>
<li data-value="3"><span class="merged" id="all.9sk8z.spl1" title="原文 : The WKA address needs to be set to the DNS name of the headless service for the storage cluster created above.">WKAアドレスは、上で作成したストレージ・クラスタのヘッドレス・サービスのDNS名に設定する必要があります。</span> <span class="merged" id="all.9sk8z.spl2" title="原文 : As this Job is running in a different name space this is the fully qualified name &lt;service-name&gt;.&lt;namespace&gt;.svc which is storage-sts.coherence-example.svc">このジョブは別のネームスペースで実行されているため、<code>storage-sts.coherence-example.svc</code>の完全修飾名<code>&lt;service-name>.&lt;namespace>.svc</code>です</span> </li>
<li data-value="4"><span class="merged" id="all.4F8z4s" title="原文 : Instead of running a normal command this Job will run the Operator’s sleep command and sleep for 300s (300 seconds).">通常のコマンドを実行するかわりに、このジョブはオペレータの<code>sleep</code>コマンドを実行し、<code>300s</code> (300秒)の間スリープします。</span></li>
<li data-value="5"><span class="merged" id="all.3VDU8w" title="原文 : The COHERENCE_CLIENT environment variable value of remote sets the Coherence cache configuration to be an Extend client using the NameService"><code>remote</code>の<code>COHERENCE_CLIENT</code>環境変数値は、NameServiceを使用してCoherenceキャッシュ構成を拡張クライアントとして設定</span></li>
<li data-value="6"><span class="merged" id="all.wiEYw" title="原文 : The COHERENCE_PROFILE environment variable value of thin sets the Coherence cache configuration not to use a Near Cache."><code>thin</code>の<code>COHERENCE_PROFILE</code>環境変数値は、ニア・キャッシュを使用しないCoherenceキャッシュ構成を設定します。</span></li>
</ul>
<p><span class="merged" id="all.3KYBtA" title="原文 : The yaml above can be deployed into Kubernetes:">上のyamlは、Kubernetesにデプロイできます:</span></p>

<markup
lang="bash"

>kubectl -n coherence-client apply -f extend-client.yaml</markup>

<markup
lang="bash"

>$ kubectl -n coherence-client get pod
NAME           READY   STATUS    RESTARTS   AGE
client-qgnw5   2/2     Running   0          80s</markup>

<p><span class="merged" id="all.20eJzo.spl1" title="原文 : The Pod is now running but not doing anything, just sleeping.">ポッドは走っているが、何もしていない、ただ眠っているだけだ。</span> <span class="merged" id="all.20eJzo.spl2" title="原文 : If we look at the Kiali dashboard we can see the client application started and communicated wth the Operator.">Kialiのダッシュボードを見ると、クライアント・アプリケーションがOperatorで起動され、通信されていることがわかります。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="kiali client started graph" src="./images/images/kiali-client-started-graph.png" width="1024" /> </v-card-text> </v-card>

<p><span class="merged" id="all.1k09Pu.spl1" title="原文 : We can use this sleeping Pod to exec into and run commands.">このスリープしているPodを使用して、コマンドを実行したり実行したりできます。</span> <span class="merged" id="all.1k09Pu.spl2" title="原文 : In this case we will create a Coherence QueryPlus client and run some CohQL commands.">この場合、Coherence QueryPlusクライアントを作成し、いくつかのCohQLコマンドを実行します。</span> <span class="merged" id="all.1k09Pu.spl3" title="原文 : The command below will exec into the sleeping Pod.">次のコマンドは、スリープしているポッドに実行されます。</span> </p>

<markup
lang="bash"

>kubectl -n coherence-client exec -it client-qgnw5 -- /coherence-operator/utils/runner queryplus</markup>

<p><span class="merged" id="all.2intam" title="原文 : A QueryPlus client will be started and eventually display the CohQL&gt; prompt.">QueryPlusクライアントが起動され、最終的に<code>CohQL></code>プロンプトが表示されます。</span></p>

<markup
lang="bash"

>Coherence Command Line Tool

CohQL&gt;</markup>

<p><span class="merged" id="all.465efc.spl1" title="原文 : A simple command to try is just creating a cache, so at the prompt type the command create cache test which will create a cache named test.">試行する簡単なコマンドはキャッシュの作成のみであるため、プロンプトで、<code>test</code>という名前のキャッシュを作成するコマンド<code>create cache test</code>を入力します。</span> <span class="merged" id="all.465efc.spl2" title="原文 : If all is configured correctly this client will connect to the cluster over Extend and create the cache called test and return to the CohQL prompt.">すべてが正しく構成されている場合、このクライアントはExtendを介してクラスタに接続し、<code>test</code>というキャッシュを作成し、<code>CohQL</code>プロンプトに戻ります。</span> </p>

<markup
lang="bash"

>Coherence Command Line Tool

CohQL&gt; create cache test</markup>

<p><span class="merged" id="all.soAJw" title="原文 : We can also try selecting data from the cache using the CohQL query select * from test (which will return nothing as the cache is empty).">また、CohQL問合せ<code>select * from test</code>を使用してキャッシュからデータを選択することもできます(キャッシュが空であるため、何も返されません)。</span></p>

<markup
lang="bash"

>CohQL&gt; select * from test
Results

CohQL&gt;</markup>

<p><span class="merged" id="all.32o0Tv.spl1" title="原文 : If we now look at the Kiali dashboard we can see that the client has communicated with the storage cluster.">Kialiダッシュボードを見ると、クライアントがストレージ・クラスタと通信していることがわかります。</span> <span class="merged" id="all.32o0Tv.spl2" title="原文 : All of this communication was using mTLS but without configuring Coherence to use TLS.">この通信はすべてmTLSを使用していましたが、TLSを使用するようにCoherenceを構成していませんでした。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="kiali client storage" src="./images/images/kiali-client-storage.png" width="1024" /> </v-card-text> </v-card>

<p><span class="merged" id="all.4bBAYC" title="原文 : To exit from the CohQL&gt; prompt type the bye command."><code>CohQL></code>プロンプトから終了するには、<code>bye</code>コマンドを入力します。</span></p>

<p><span class="merged" id="all.2CJoWp.spl1" title="原文 : Coherence Extend clients can connect to the cluster also using Istio to provide mTLS support.">Coherence Extendクライアントは、Istioを使用してクラスタに接続し、mTLSサポートを提供することもできます。</span> <span class="merged" id="all.2CJoWp.spl2" title="原文 : Coherence clusters work with mTLS and Coherence clients can also support TLS through the Istio Gateway with TLS termination to connect to Coherence cluster running inside kubernetes.">CoherenceクラスタはmTLSで動作し、Coherenceクライアントは、TLS終端を持つIstio Gatewayを介してTLSをサポートして、kubernetes内で実行されているCoherenceクラスタに接続することもできます。</span> <span class="merged" id="all.2CJoWp.spl3" title="原文 : For example, you can apply the following Istio Gateway and Virtual Service in the namespace of the Coherence cluster.">たとえば、次のIstio Gatewayおよび仮想サービスをCoherenceクラスタのネームスペースに適用できます。</span> <span class="merged" id="all.2CJoWp.spl4" title="原文 : Before applying the gateway, create a secret for the credential from the certificate and key (e.g. server.crt and server.key) to be used by the Gateway:">ゲートウェイを適用する前に、ゲートウェイで使用される証明書およびキー(例、server.crtおよびserver.key)から資格証明のシークレットを作成します:</span> </p>

</div>

<h3 id="_coherence_clients_running_outside_kubernetes"><span class="merged" id="all.2cdt3p" title="原文 : Coherence Clients Running Outside Kubernetes">Kubernetes外で実行されているCoherenceクライアント</span></h3>
<div class="section">
<p><span class="merged" id="all.2rfhg3.spl1" title="原文 : Coherence clients running outside the Kubernetes can be configured to connect to a Coherence cluster inside Kubernetes using any of the ingress or gateway features of Istio and Kubernetes.">Kubernetesの外部で実行されているCoherenceクライアントは、IstioおよびKubernetesのいずれかのイングレスまたはゲートウェイ機能を使用して、Kubernetes内のCoherenceクラスタに接続するように構成できます。</span> <span class="merged" id="all.2rfhg3.spl2" title="原文 : All the different ways to do this are beyond the scope of this simple example as there are many and they depend on the versions of Istio and Kubernetes being used.">これを行うすべての方法は、この単純な例の範囲外です。多くの例があり、使用されるIstioおよびKubernetesのバージョンに依存するためです。</span> </p>

<p><span class="merged" id="all.38W1FT.spl1" title="原文 : When connecting Coherence Extend or gRPC clients from outside Kubernetes, the Coherence NameService cannot be used by clients to look up the endpoints.">Coherence ExtendクライアントまたはgRPCクライアントをKubernetes外部から接続する場合、Coherence NameServiceをクライアントがエンドポイントを検索するために使用することはできません。</span> <span class="merged" id="all.38W1FT.spl2" title="原文 : The clients must be configured with fixed endpoints using the hostnames and ports of the configured ingress or gateway services.">クライアントは、構成されたイングレスまたはゲートウェイ・サービスのホスト名およびポートを使用して固定エンドポイントで構成する必要があります。</span> </p>

</div>
</div>
</doc-view>
