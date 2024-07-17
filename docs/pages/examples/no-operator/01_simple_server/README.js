<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_a_simple_coherence_cluster_in_kubernetes"><span class="merged" id="all.3UBS2S" title="原文 : A Simple Coherence Cluster in Kubernetes">Kubernetesの単純なCoherenceクラスタ</span></h2>
<div class="section">
<p><span class="merged" id="all.2hRFrs" title="原文 : This example shows how to deploy a simple Coherence cluster in Kubernetes manually, without using the Coherence Operator.">この例では、Coherence Operatorを使用せずに、Kubernetesに単純なCoherenceクラスタを手動でデプロイする方法を示します。</span></p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.15"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.1Ja7TA" title="原文 :  The complete source code for this example is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />この例の完全なソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/no-operator/01_simple_server" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>
<p><span class="merged" id="all.3Hthfg"  title="原文:: Prerequisites"><strong>前提条件</strong></span></p>

<p><span class="merged" id="all.3yNzBq" title="原文 : This example assumes that you have already built the example server image.">この例では、サンプル・サーバー・イメージがすでにビルドされていることを前提としています。</span></p>

</div>

<h2 id="_create_the_kubernetes_resources"><span class="merged" id="all.3N5M6P" title="原文 : Create the Kubernetes Resources">Kubernetesリソースの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.2LcsWY" title="原文 : Now we have an image we can create the yaml files required to run the Coherence cluster in Kubernetes.">これで、KubernetesでCoherenceクラスタを実行するために必要なyamlファイルを作成できます。</span></p>


<h3 id="_statefulset_and_services"><span class="merged" id="all.hUUsN" title="原文 : StatefulSet and Services">StatefulSetおよびサービス</span></h3>
<div class="section">
<p><span class="merged" id="all.t97ug" title="原文 : We will run Coherence using a StatefulSet and in Kubernetes all StatefulSet resources also require a headless Service."><code>StatefulSet</code>を使用してCoherenceを実行し、Kubernetesでは、すべての<code>StatefulSet</code>リソースにもヘッドレス<code>Service</code>が必要です。</span></p>


<h4 id="_statefulset_headless_service"><span class="merged" id="all.1hbxdP" title="原文 : StatefulSet Headless Service">StatefulSetヘッドレス・サービス</span></h4>
<div class="section">
<markup
lang="yaml"
title="coherence.yaml"
>apiVersion: v1
kind: Service
metadata:
  name: storage-sts
  labels:
    coherence.oracle.com/cluster: test-cluster
    coherence.oracle.com/deployment: storage
    coherence.oracle.com/component: statefulset-service
spec:
  type: ClusterIP
  clusterIP: None
  ports:
  - name: tcp-coherence
    port: 7
    protocol: TCP
    targetPort: 7
  publishNotReadyAddresses: true
  selector:
    coherence.oracle.com/cluster: test-cluster
    coherence.oracle.com/deployment: storage</markup>

<p><span class="merged" id="all.2TViYR.spl1" title="原文 : The Service above named storage-sts has a selector that must match labels on the Pods in the StatefulSet."><code>storage-sts</code>という名前の<code>Service</code>には、<code>StatefulSet</code>の<code>Pods</code>のラベルと一致する必要があるセレクタがあります。</span> <span class="merged" id="all.2TViYR.spl2" title="原文 : We use port 7 in this Service because all services must define at least one port, but we never use this port and nothing in the Coherence Pods will bind to port 7.">この<code>Service</code>ではポート7を使用します。これは、すべてのサービスが1つ以上のポートを定義する必要があるが、このポートを使用せず、Coherence <code>Pods</code>ではポート7にバインドされないためです。</span> </p>

</div>

<h4 id="_coherence_well_known_address_headless_service"><span class="merged" id="all.1f9Th0" title="原文 : Coherence Well Known Address Headless Service">Coherenceのよく知られたアドレス・ヘッドレス・サービス</span></h4>
<div class="section">
<p><span class="merged" id="all.457Elz.spl1" title="原文 : When running Coherence clusters in Kubernetes we need to use well-known-addressing for Coherence cluster discovery.">KubernetesでCoherenceクラスタを実行する場合、Coherenceクラスタの検出に既知のアドレス指定を使用する必要があります。</span> <span class="merged" id="all.457Elz.spl2" title="原文 : For this to work we create a Service that we can use for discovery of Pods that are in the cluster.">これを行うには、クラスタ内にある<code>Pods</code>の検出に使用できる<code>Service</code>を作成します。</span> <span class="merged" id="all.457Elz.spl3" title="原文 : In this example we only have a single StatefulSet, so we could just use the headless service above for WKA too.">この例では、<code>StatefulSet</code>が1つのみであるため、前述のヘッドレス・サービスもWKAに使用できます。</span> <span class="merged" id="all.457Elz.spl4" title="原文 : But in Coherence clusters where there are multiple StatefulSets in the cluster we would have to use a separate Service.">ただし、クラスタに複数の<code>StatefulSets</code>があるCoherenceクラスタでは、個別の<code>Service</code>を使用する必要があります。</span> </p>

<markup
lang="yaml"
title="coherence.yaml"
>apiVersion: v1
kind: Service
metadata:
  name: storage-wka
  labels:
    coherence.oracle.com/cluster: test-cluster
    coherence.oracle.com/deployment: storage
    coherence.oracle.com/component: wka-service
spec:
  type: ClusterIP
  clusterIP: None
  ports:
  - name: tcp-coherence
    port: 7
    protocol: TCP
    targetPort: 7
  publishNotReadyAddresses: true
  selector:
    coherence.oracle.com/cluster: test-cluster</markup>

<p><span class="merged" id="all.i6CH4.spl1" title="原文 : The Service above named storage-wka is almost identical to the StatefulSet service.">前述の<code>storage-wka</code>という名前の<code>Service</code>は、<code>StatefulSet</code>サービスとほとんど同じです。</span> <span class="merged" id="all.i6CH4.spl2" title="原文 : It only has a single selector label, so will match all Pods with the label coherence.oracle.com/cluster: test-cluster regardless of which StatefulSet they belong to.">セレクタ・ラベルは1つのみであるため、<code>Pods</code>が属する<code>StatefulSet</code>に関係なく、すべてのラベルが<code>coherence.oracle.com/cluster: test-cluster</code>と一致します。</span> </p>

<p><span class="merged" id="all.420Nkh" title="原文 : The other important property of the WKA Service is that it must have the field publishNotReadyAddresses: true so that Pods with matching labels are assigned to the Service even when those Pods are not ready.">WKA <code>Service</code>の他の重要なプロパティは、<code>Pods</code>の準備ができていない場合でも、一致するラベルを持つ<code>Pods</code>が<code>Service</code>に割り当てられるように、フィールド<code>publishNotReadyAddresses: true</code>が必要であることです。</span></p>

</div>

<h4 id="_the_statefulset"><span class="merged" id="all.2HBpXt" title="原文 : The StatefulSet">StatefulSet</span></h4>
<div class="section">
<p><span class="merged" id="all.2vUjK5" title="原文 : We can now create the StatefulSet yaml.">これで、<code>StatefulSet</code> yamlを作成できます。</span></p>

<markup
lang="yaml"
title="coherence.yaml"
>apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: storage
spec:
  selector:
    matchLabels:
      coherence.oracle.com/cluster: test-cluster
      coherence.oracle.com/deployment: storage
  serviceName: storage-sts
  replicas: 3
  template:
    metadata:
      labels:
        coherence.oracle.com/cluster: test-cluster
        coherence.oracle.com/deployment: storage
    spec:
      containers:
        - name: coherence
          image: simple-coherence:1.0.0
          command:
            - java
          args:
            - -cp
            - "@/app/jib-classpath-file"
            - -Xms1800m
            - -Xmx1800m
            - "@/app/jib-main-class-file"
          env:
            - name: COHERENCE_CLUSTER
              value: storage
            - name: COHERENCE_WKA
              value: storage-wka.svc
            - name: COHERENCE_CACHECONFIG
              value: "test-cache-config.xml"
          ports:
            - name: extend
              containerPort: 20000</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2GYfyZ" title="原文 : The StatefulSet above will create a Coherence cluster with three replicas (or Pods).">前述の<code>StatefulSet</code>は、3つのレプリカ(または<code>Pods</code>)を持つCoherenceクラスタを作成します。</span></p>

</li>
<li>
<p><span class="merged" id="all.3mQWVg" title="原文 : There is a single container in the Pod named coherence that will run the image simple-coherence:1.0.0 we created above."><code>coherence</code>という名前の<code>Pod</code>には、前述で作成したイメージ<code>simple-coherence:1.0.0</code>を実行する単一の<code>container</code>があります。</span></p>

</li>
<li>
<p><span class="merged" id="all.kVX0T" title="原文 : The command line used to run the container will be java -cp @/app/jib-classpath-file -Xms1800m -Xmx1800m @/app/jib-main-class-file">コンテナの実行に使用されるコマンドラインは、<code>java -cp @/app/jib-classpath-file -Xms1800m -Xmx1800m @/app/jib-main-class-file</code>になります</span></p>

</li>
<li>
<p><span class="merged" id="all.2cKSc3.spl1" title="原文 : Because we used JIB to create the image, there will be a file named /app/jib-classpath-file that contains the classpath for the application.">JIBを使用してイメージを作成したため、アプリケーションのクラスパスを含む<code>/app/jib-classpath-file</code>という名前のファイルがあります。</span> <span class="merged" id="all.2cKSc3.spl2" title="原文 : We can use this to set the classpath on the JVM command line using -cp @/app/jib-classpath-file so in our yaml we know we will have the correct classpath for the image we built.">これを使用して、<code>-cp @/app/jib-classpath-file</code>を使用してJVMコマンドラインにクラスパスを設定できるため、yamlでは、作成したイメージに正しいクラスパスがあることがわかります。</span> <span class="merged" id="all.2cKSc3.spl3" title="原文 : If we change the classpath by changing project dependencies in the pom.xml file for our project and rebuild the image the container in Kubernetes will automatically use the changed classpath.">プロジェクトの<code>pom.xml</code>ファイルのプロジェクト依存関係を変更してクラスパスを変更し、イメージを再ビルドすると、Kubernetesのコンテナで変更されたクラスパスが自動的に使用されます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.4Xglb9.spl1" title="原文 : JIB also creates a file in the image named /app/jib-main-class-file which contains the name of the main class we specified in the JIB Maven plugin.">JIBは、JIB Mavenプラグインで指定したメイン・クラスの名前を含む<code>/app/jib-main-class-file</code>というイメージにファイルを作成します。</span> <span class="merged" id="all.4Xglb9.spl2" title="原文 : We can use @/app/jib-main-class-file in place of the main class in our command line so that we run the correct main class in our container.">コンテナ内で正しいメイン・クラスを実行できるように、コマンドラインでメイン・クラスのかわりに<code>@/app/jib-main-class-file</code>を使用できます。</span> <span class="merged" id="all.4Xglb9.spl3" title="原文 : If we change the main class in the JIB settings when we build the image our container in Kubernetes will automatically run the correct main class.">JIB設定でメイン・クラスを変更すると、Kubernetesのコンテナで正しいメイン・クラスが自動的に実行されます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.2tZTi5" title="原文 : We set both the min and max heap to 1.8 GB (it is a Coherence recommendation to set both min and max heap to the same value rather than set a smaller -Xms).">最小ヒープと最大ヒープの両方を1.8 GBに設定します(小さい -Xmsを設定するのではなく、最小ヒープと最大ヒープの両方を同じ値に設定することをお薦めします)。</span></p>

</li>
<li>
<p><span class="merged" id="all.3xPUKF" title="原文 : The main class that will run will be com.tangosol.net.Coherence.">実行されるメイン・クラスは<code>com.tangosol.net.Coherence</code>です。</span></p>

</li>
<li>
<p><span class="merged" id="all.1lnFSR.spl1" title="原文 : The cache configuration file configures a Coherence Extend proxy service, which will listen on port 20000.">キャッシュ構成ファイルは、ポート<code>20000</code>でリスニングするCoherence Extendプロキシ・サービスを構成します。</span> <span class="merged" id="all.1lnFSR.spl2" title="原文 : We need to expose this port in the container’s ports section.">このポート・コンテナのポート・セクションで公開する必要があります。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1lsnPo" title="原文 : We set a number of environment variables for the container:">コンテナに多数の環境変数を設定します:</span></p>

</li>
</ul>

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4eTLuy"  title="原文:: Name">名前</span></th>
<th><span class="merged" id="all.42bBIm.1"  title="原文:: Value">値</span></th>
<th><span class="merged" id="all.4JM9z7.46"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3ffl6H" title="原文 : COHERENCE_CLUSTER">COHERENCE_CLUSTER</span></td>
<td class=""><span class="merged" id="all.1XunTw"  title="原文:: storage">ストレージ</span></td>
<td class=""><span class="merged" id="all.3PSY9v" title="原文 : This sets the cluster name in Coherence (the same as setting -Dcoherence.cluster=storage)">これにより、Coherenceでクラスタ名が設定されます(<code>-Dcoherence.cluster=storage</code>の設定と同じ)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2MdIYR" title="原文 : COHERENCE_WKA">COHERENCE_WKA</span></td>
<td class=""><span class="merged" id="all.1Kp2Wk" title="原文 : storage-wka">storage-wka</span></td>
<td class=""><span class="merged" id="all.dSVIR.spl1" title="原文 : This sets the DNS name Coherence will use for discovery of other Pods in cluster.">これにより、Coherenceがクラスタ内の他のポッドの検出に使用するDNS名が設定されます。</span> <span class="merged" id="all.dSVIR.spl2" title="原文 : It is set to the name of the WKA Service created above.">前に作成したWKA <code>Service</code>の名前に設定されます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3rBCG" title="原文 : COHERENCE_CACHECONFIG">COHERENCE_CACHECONFIG</span></td>
<td class=""><span class="merged" id="all.3OybXX" title="原文 : &quot;test-cache-config.xml&quot;">"test-cache-config.xml"</span></td>
<td class=""><span class="merged" id="all.3yOvXY" title="原文 : This tells Coherence the name of the cache configuration file to use (the same as setting -Dcoherence.cacheconfig=test-cache-config.xml);">これは、使用するキャッシュ構成ファイルの名前をCoherenceに通知します(<code>-Dcoherence.cacheconfig=test-cache-config.xml</code>の設定と同じ)</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h4 id="_coherence_extend_service"><span class="merged" id="all.1fcedW" title="原文 : Coherence Extend Service">Coherence拡張サービス</span></h4>
<div class="section">
<p><span class="merged" id="all.uLvDb.spl1" title="原文 : In the cache configuration used in the image Coherence will run a Coherence Extend proxy service, listening on port 20000.">イメージCoherenceで使用されるキャッシュ構成では、ポート20000でリスニングするCoherence Extendプロキシ・サービスが実行されます。</span> <span class="merged" id="all.uLvDb.spl2" title="原文 : This port has been exposed in the Coherence container in the StatefulSet and we can also expose it via a Service.">このポートは、<code>StatefulSet</code>のCoherenceコンテナで公開されており、<code>Service</code>を介して公開することもできます。</span> </p>

<markup
lang="yaml"
title="coherence.yaml"
>apiVersion: v1
kind: Service
metadata:
  name: storage-extend
  labels:
    coherence.oracle.com/cluster: test-cluster
    coherence.oracle.com/deployment: storage
    coherence.oracle.com/component: wka-service
spec:
  type: ClusterIP
  ports:
  - name: extend
    port: 20000
    protocol: TCP
    targetPort: extend
  selector:
    coherence.oracle.com/cluster: test-cluster
    coherence.oracle.com/deployment: storage</markup>

<p><span class="merged" id="all.2OfBEt.spl1" title="原文 : The type of the Service above is ClusterIP, but we could just as easily use a different type depending on how the service will be used.">上記の<code>Service</code>のタイプは<code>ClusterIP</code>ですが、サービスの使用方法に応じて、異なるタイプを使用することもできます。</span> <span class="merged" id="all.2OfBEt.spl2" title="原文 : For example, we might use ingress, or Istio, or a load balancer if the Extend clients were connecting from outside the Kubernetes cluster.">たとえば、ExtendクライアントがKubernetesクラスタの外部から接続している場合、イングレス、Istioまたはロード・バランサを使用できます。</span> <span class="merged" id="all.2OfBEt.spl3" title="原文 : In local development we can just port forward to the service above.">ローカル開発では、上のサービスに移植できます。</span> </p>

</div>
</div>
</div>

<h2 id="_deploy_to_kubernetes"><span class="merged" id="all.41fqoB" title="原文 : Deploy to Kubernetes">Kubernetesにデプロイ</span></h2>
<div class="section">
<p><span class="merged" id="all.Z6U6X.spl1" title="原文 : We can combine all the snippets of yaml above into a single file and deploy it to Kubernetes.">前述のyamlのすべてのスニペットを1つのファイルに結合し、Kubernetesにデプロイできます。</span> <span class="merged" id="all.Z6U6X.spl2" title="原文 : The source code for this example contains a file named coherence.yaml containing all the configuration above.">この例のソース・コードには、前述のすべての構成を含む<code>coherence.yaml</code>という名前のファイルが含まれています。</span> <span class="merged" id="all.Z6U6X.spl3" title="原文 : We can deploy it with the following command:">次のコマンドを使用してデプロイできます:</span> </p>

<markup
lang="bash"

>kubectl apply -f coherence.yaml</markup>

<p><span class="merged" id="all.2VF36S" title="原文 : We can see all the resources created in Kubernetes by running the following command:">次のコマンドを実行すると、Kubernetesで作成されたすべてのリソースを表示できます:</span></p>

<markup
lang="bash"

>kubectl get all</markup>

<p><span class="merged" id="all.3pkFbl" title="原文 : Which will display something like the following:">次のような内容が表示されます:</span></p>

<markup


>NAME            READY   STATUS    RESTARTS   AGE
pod/storage-0   1/1     Running   0          19s
pod/storage-1   1/1     Running   0          17s
pod/storage-2   1/1     Running   0          16s

NAME                     TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)     AGE
service/storage-extend   ClusterIP   10.105.78.34   &lt;none&gt;        20000/TCP   19s
service/storage-sts      ClusterIP   None           &lt;none&gt;        7/TCP       19s
service/storage-wka      ClusterIP   None           &lt;none&gt;        7/TCP       19s

NAME                       READY   AGE
statefulset.apps/storage   3/3     19s</markup>

<p><span class="merged" id="all.kDGmp.spl1" title="原文 : We can see there are three Pods as we specified three replicas.">3つのレプリカを指定しているため、<code>Pods</code>が3つあることがわかります。</span> <span class="merged" id="all.kDGmp.spl2" title="原文 : The three Services we specified have been created.">指定した3つの<code>Services</code>が作成されました。</span> <span class="merged" id="all.kDGmp.spl3" title="原文 : Finally, the StatefulSet exists and has three ready replicas.">最後に、<code>StatefulSet</code>が存在し、3つの準備ができたレプリカがあります。</span> </p>

</div>

<h2 id="_connect_an_extend_client"><span class="merged" id="all.3cdXip" title="原文 : Connect an Extend Client">拡張クライアントの接続</span></h2>
<div class="section">
<p><span class="merged" id="all.3H5wgY.spl1" title="原文 : Now we have a Coherence cluster running in Kubernetes we can try connecting a simple Extend client.">これで、KubernetesでCoherenceクラスタが実行され、単純なExtendクライアントの接続を試みます。</span> <span class="merged" id="all.3H5wgY.spl2" title="原文 : For this example we will use the test client Maven project to run the client.">この例では、テスト・クライアントのMavenプロジェクトを使用してクライアントを実行します。</span> </p>

<p><span class="merged" id="all.17KV74.spl1" title="原文 : To connect from our local dev machine into the server we will use port-forward in this example.">ローカル開発マシンからサーバーに接続するには、この例ではポート・フォワードを使用します。</span> <span class="merged" id="all.17KV74.spl2" title="原文 : We could have configured ingress and load balancing, etc. but for local dev and test port-forward is simple and easy.">イングレスや負荷分散などを構成できましたが、ローカルな開発とテスト用ポート転送は簡単で簡単です。</span> </p>

<p><span class="merged" id="all.1Dtnly.spl1" title="原文 : The client is configured to connect to an Extend proxy listening on 127.0.0.1:20000.">クライアントは、<code>127.0.0.1:20000</code>でリスニングしているExtendプロキシに接続するように構成されています。</span> <span class="merged" id="all.1Dtnly.spl2" title="原文 : The server we have deployed into Kubernetes is listening also listening on port 20000 via the storage-extend service.">Kubernetesにデプロイしたサーバーは、<code>storage-extend</code>サービスを介してポート20000でリスニングしています。</span> <span class="merged" id="all.1Dtnly.spl3" title="原文 : If we run a port-forward process that forwards port 20000 on our local machine to port 20000 of the service we can connect the client without needing any other configuration.">ポート20000をローカル・マシン上のポート20000に転送するポート・フォワード・プロセスを実行すると、その他の構成を必要とせずにクライアントを接続できます。</span> </p>

<markup
lang="bash"

>kubectl port-forward service/storage-extend 20000:20000</markup>

<p><span class="merged" id="all.39Wklj" title="原文 : Now in another terminal window, we can run the test client from the test-client/ directory execute the following command:">別の端末ウィンドウで、<code>test-client/</code>ディレクトリからテスト・クライアントを実行して次のコマンドを実行できます:</span></p>

<markup
lang="bash"

>mvn exec:java</markup>

<p><span class="merged" id="all.2n6oZx.spl1" title="原文 : This will start a Coherence interactive console which will eventually print the Map (?): prompt.">これにより、最終的に<code>Map (?):</code>プロンプトが出力されるCoherence対話型コンソールが起動します。</span> <span class="merged" id="all.2n6oZx.spl2" title="原文 : The console is now waiting for commands, so we can go ahead and create a cache.">コンソールがコマンドを待機しているため、先に進んでキャッシュを作成できます。</span> </p>

<p><span class="merged" id="all.49DVjn.spl1" title="原文 : At the Map (?): prompt type the command cache test and press enter."><code>Map (?):</code>プロンプトで、コマンド<code>cache test</code>を入力し、Enterを押します。</span> <span class="merged" id="all.49DVjn.spl2" title="原文 : This will create a cache named test">これにより、<code>test</code>という名前のキャッシュが作成されます</span> </p>

<markup


>Map (?): cache test</markup>

<p><span class="merged" id="all.33AoGe" title="原文 : We should see output something like this:">次のように出力されます:</span></p>

<markup


>2021-09-17 12:25:12.143/14.600 Oracle Coherence CE 21.12.1 &lt;Info&gt; (thread=com.tangosol.net.CacheFactory.main(), member=1): Loaded cache configuration from "file:/Users/jonathanknight/dev/Projects/GitOracle/coherence-operator-3.0/examples/no-operator/test-client/target/classes/client-cache-config.xml"
2021-09-17 12:25:12.207/14.664 Oracle Coherence CE 21.12.1 &lt;D5&gt; (thread=com.tangosol.net.CacheFactory.main(), member=1): Created cache factory com.tangosol.net.ExtensibleConfigurableCacheFactory

Cache Configuration: test
  SchemeName: remote
  ServiceName: RemoteCache
  ServiceDependencies: DefaultRemoteCacheServiceDependencies{RemoteCluster=null, RemoteService=Proxy, InitiatorDependencies=DefaultTcpInitiatorDependencies{EventDispatcherThreadPriority=10, RequestTimeoutMillis=30000, SerializerFactory=null, TaskHungThresholdMillis=0, TaskTimeoutMillis=0, ThreadPriority=10, WorkerThreadCount=0, WorkerThreadCountMax=2147483647, WorkerThreadCountMin=0, WorkerThreadPriority=5}{Codec=null, FilterList=[], PingIntervalMillis=0, PingTimeoutMillis=30000, MaxIncomingMessageSize=0, MaxOutgoingMessageSize=0}{ConnectTimeoutMillis=30000, RequestSendTimeoutMillis=30000}{LocalAddress=null, RemoteAddressProviderBldr=com.tangosol.coherence.config.builder.WrapperSocketAddressProviderBuilder@35f8cdc1, SocketOptions=SocketOptions{LingerTimeout=0, KeepAlive=true, TcpNoDelay=true}, SocketProvideBuilderr=com.tangosol.coherence.config.builder.SocketProviderBuilder@1e4cf40, isNameServiceAddressProvider=false}}{DeferKeyAssociationCheck=false}

Map (test):</markup>

<p><span class="merged" id="all.fh6Nl" title="原文 : The cache named test has been created and prompt has changed to Map (test):, so this confirms that we have connected to the Extend proxy in the server running in Kubernetes."><code>test</code>という名前のキャッシュが作成され、プロンプトが<code>Map (test):</code>に変更されたため、Kubernetesで実行されているサーバーのExtendプロキシに接続していることが確認されます。</span></p>

<p><span class="merged" id="all.3hbsad" title="原文 : We can not put data into the cache using the put command"><code>put</code>コマンドを使用してキャッシュにデータを配置することはできません</span></p>

<markup


>Map (test): put key-1 value-1</markup>

<p><span class="merged" id="all.3T6neG" title="原文 : The command above puts an entry into the test cache with a key of &quot;key-1&quot; and a value of &quot;value-1&quot; and will print the previous value mapped to the &quot;key-1&quot; key, which in this case is null.">前述のコマンドは、<code>"key-1"</code>のキーと<code>"value-1"</code>の値を使用して<code>test</code>キャッシュにエントリを配置し、<code>"key-1"</code>キーにマップされた前の値を出力します(この場合は<code>null</code>)。</span></p>

<markup


>Map (test): put key-1 value-1
null

Map (test):</markup>

<p><span class="merged" id="all.1g63tO" title="原文 : We can now do a get command to fetch the entry we just put, which should print value-1 and re-display the command prompt."><code>get</code>コマンドを実行して、先ほど入力したエントリを取得できるようになりました。<code>value-1</code>を出力し、コマンド・プロンプトを再表示します。</span></p>

<markup


>Map (test): get key-1
value-1

Map (test):</markup>

<p><span class="merged" id="all.zAEtu" title="原文 : To confirm we really have connected to the server we can kill the console wil ctrl-C, restart it and execute the cache and get commands again.">サーバーに実際に接続していることを確認するために、コンソールwil ctrl-Cを強制終了し、再起動して、<code>cache</code>および<code>get</code>コマンドを再度実行できます。</span></p>

<markup


>Map (?): cache test

... output removed for brevity ...

Map (test): get key-1
value-1

Map (test):</markup>

<p><span class="merged" id="all.1eGhLJ" title="原文 : We can see above that the get command returned value-1 which we previously inserted.">前述のとおり、getコマンドは以前に挿入した<code>value-1</code>を返しました。</span></p>

</div>

<h2 id="_clean_up"><span class="merged" id="all.yltYa" title="原文 : Clean-UP">クリーンアップ</span></h2>
<div class="section">
<p><span class="merged" id="all.2D53a" title="原文 : We can now exit the test client by pressing ctrl-C, stop the port-forward process with crtl-C and undeploy the server:">ctrl-Cキーを押してテスト・クライアントを終了し、crtl-Cでポート転送プロセスを停止し、サーバーをアンデプロイできるようになりました:</span></p>

<markup
lang="bash"

>kubectl delete -f coherence.yaml</markup>

</div>
</doc-view>
