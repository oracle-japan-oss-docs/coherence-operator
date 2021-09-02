<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_well_known_addressing_and_cluster_discovery"><span class="merged" id="all.PL4IZ" title="原文 : Well Known Addressing and Cluster Discovery">よく知られたアドレス指定およびクラスタ検出</span></h2>
<div class="section">
<p><span class="merged" id="all.33N08z.spl1" title="原文 : A Coherence cluster is made up of one or more JVMs.">Coherenceクラスタは1つ以上のJVMで構成されます。</span> <span class="merged" id="all.33N08z.spl2" title="原文 : In order for these JVMs to form a cluster they need to be able to discover other cluster members.">これらのJVMがクラスタを形成するには、他のクラスタ・メンバーを検出できる必要があります。</span> <span class="merged" id="all.33N08z.spl3" title="原文 : The default mechanism for discovery is multicast broadcast but this does not work in most container environments.">検出のデフォルトのメカニズムはマルチキャスト・ブロードキャストですが、ほとんどのコンテナ環境では機能しません。</span> <span class="merged" id="all.33N08z.spl4" title="原文 : Coherence provides an alternative mechanism where the addresses of the hosts where the members of the cluster will run is provided in the form of a &quot;well known address&quot; (or WKA) list.">Coherenceでは、クラスタのメンバーが実行されるホストのアドレスが<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/develop-applications/setting-cluster.html#GUID-E8CC7C9A-5739-4D12-B88E-A3575F20D63B" id="" target="_blank" >「既知のアドレス」(またはWKA)リスト」</a>の形式で提供される代替メカニズムが提供されます。</span> <span class="merged" id="all.33N08z.spl5" title="原文 : This address list is then used by Coherence when it starts in a JVM to discover other cluster members running on the hosts in the WKA list.">このアドレス・リストは、JVMで開始する際にCoherenceで使用され、WKAリスト内のホストで実行されている他のクラスタ・メンバーを検出します。</span> </p>

<p><span class="merged" id="all.3dmpPC.spl1" title="原文 : When running in containers each container is effectively a host and has its own host name and IP address (or addresses) and in Kubernetes it is the Pod that is effectively a host.">コンテナで実行する場合、各コンテナは実質的にホストであり、独自のホスト名とIPアドレス(またはアドレス)を持ち、Kubernetesには実質的にホストである<code>Pod</code>があります。</span> <span class="merged" id="all.3dmpPC.spl2" title="原文 : When starting a container it is usually not possible to know in advance what the host names of the containers or Pods will be so there needs to be another solution to providing the WKA list.">コンテナの起動時には、通常、コンテナまたは<code>Pods</code>のホスト名を事前に把握できないため、WKAリストを提供する別のソリューションが必要です。</span> </p>

<p><span class="merged" id="all.phg8.spl1" title="原文 : Coherence processes a WKA list it by performing a DNS lookup for each host name in the list.">Coherenceは、リスト内の各ホスト名に対してDNS検索を実行して、WKAリストを処理します。</span> <span class="merged" id="all.phg8.spl2" title="原文 : If a host name resolves to more than one IP address then all of those IP addresses will be used in cluster discovery.">ホスト名が複数のIPアドレスに解決される場合、それらのIPアドレスの<em>「すべて」</em>がクラスタ検出で使用されます。</span> <span class="merged" id="all.phg8.spl3" title="原文 : This feature of Coherence when combined with Kubernetes Services allows discovery of cluster members without resorting to a custom discovery mechanism.">Kubernetes <code>Services</code>と組み合せてCoherenceの機能を使用すると、カスタム検出メカニズムにリゾートすることなくクラスタ・メンバーを検出できます。</span> </p>

<p><span class="merged" id="all.1Ab4X4.spl1" title="原文 : A Kubernetes Service has a DNS name and that name will resolve to all the IP addresses of the Pods that match that Service selector.">Kubernetes <code>Service</code>にはDNS名があり、その名前は<code>Service</code>セレクタに一致する<code>Pods</code>のすべてのIPアドレスに解決されます。</span> <span class="merged" id="all.1Ab4X4.spl2" title="原文 : This means that a Coherence JVM only needs to be given the DNS name of a Service as the single host name in its WKA list so that it will form a cluster with any other JVM using in a Pod matching the selector.">つまり、Coherence JVMは、セレクタに一致するPodで使用されるその他のJVMを持つクラスタを形成するために、WKAリスト内の単一ホスト名として<code>Service</code>のDNS名のみを指定する必要があります。</span> </p>

<p><span class="merged" id="all.qmBg5" title="原文 : When the Coherence Operator creates reconciles a Coherence CRD configuration to create a running set of Pods it creates a headless service specifically for the purposes of WKA for that Coherence resource with a selector that matches any Pod with the same cluster name.">Coherence Operatorが<code>Coherence</code> CRD構成を調整して<code>Pods</code>の実行セットを作成すると、同じクラスタ名を持つ任意のポッドに一致するセレクタを使用して、その<code>Coherence</code>リソースに対するWKAの目的専用のヘッドレス・サービスが作成されます。</span></p>

<p><span class="merged" id="all.2pLTFq" title="原文 : For example, if a Coherence resource is created with the following yaml:">たとえば、<code>Coherence</code>リソースが次のyamlで作成されている場合:</span></p>

<markup
lang="yaml"
title="test-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  cluster: test-cluster <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3jJVMH" title="原文 : In this yaml the Coherence resource has a cluster name of test-cluster">このYamlでは、<code>Coherence</code>リソースのクラスタ名は<code>test-cluster</code>です</span></li>
</ul>
<p><span class="merged" id="all.3IoYlW.spl1" title="原文 : The Operator will create a Service for the Coherence resource using the same name as the deployment with a -wka suffix.">オペレータは、<code>-wka</code>サフィクスを持つデプロイメントと同じ名前を使用して、<code>Coherence</code>リソースの<code>Service</code>を作成します。</span> <span class="merged" id="all.3IoYlW.spl2" title="原文 : So in the example above the Operator would create a Service with the name storage-wka.">したがって、上の例では、オペレータによって<code>storage-wka</code>という名前の<code>Service</code>が作成されます。</span> </p>

<p><span class="merged" id="all.41k8sQ" title="原文 : The yaml for the WKA Service would look like the following:">WKA <code>Service</code>のYamlは次のようになります:</span></p>

<markup
lang="yaml"
title="wka-service.yaml"
>apiVersion: v1
kind: Service
metadata:
  name: storage-wka                                                  <span class="conum" data-value="1" />
  labels:
    coherenceCluster: test-cluster
    component: coherenceWkaService
spec:
  clusterIP: None                                                    <span class="conum" data-value="2" />
  publishNotReadyAddresses: true                                     <span class="conum" data-value="3" />
  ports:
    - name: coherence                                                <span class="conum" data-value="4" />
      protocol: TCP
      port: 7
      targetPort: 7
  selector:
    coherenceCluster: test-cluster                                   <span class="conum" data-value="5" />
    component: coherencePod</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3bBDzG" title="原文 : The Service name is made up of the cluster name with the suffix -wka so in this case storage-wka"><code>Service</code>名は、サフィクス<code>-wka</code>を持つクラスタ名で構成されるため、この場合、<code>storage-wka</code></span></li>
<li data-value="2"><span class="merged" id="all.2Wdc3v" title="原文 : The service has a clusterIP of None so it is headless">サービスには<code>None</code>の<code>clusterIP</code>があるため、ヘッドレスになります</span></li>
<li data-value="3"><span class="merged" id="all.3dzPXK.spl1" title="原文 : The Service is configured to allow unready Pods so that all Pods matching the selector will be resolved as members of this service regardless of their ready state."><code>Service</code>は、セレクタに一致するすべての<code>Pods</code>が、準備完了状態に関係なく、このサービスのメンバーとして解決されるように、準備できない<code>Pods</code>を許可するように構成されています。</span> <span class="merged" id="all.3dzPXK.spl2" title="原文 : This is important so that Coherence JVMs can discover other members before they are fully ready.">これは、Coherence JVMが他のメンバーを完全に準備する前に検出できるようにするために重要です。</span> </li>
<li data-value="4"><span class="merged" id="all.2uMJIW.spl1" title="原文 : A single port is exposed, in this case the echo port (7), even though nothing in the Coherence Pods binds to this port.">Coherenceの<code>Pods</code>に何もバインドされていない場合でも、単一のポートが公開されます。この場合、エコー・ポート(7)。</span> <span class="merged" id="all.2uMJIW.spl2" title="原文 : Ideally no port would be included, but a Kubernetes service has to have at least one port defined.">理想的にはポートが含まれていませんが、Kubernetesサービスには少なくとも1つのポートを定義する必要があります。</span> </li>
<li data-value="5"><span class="merged" id="all.20ALDa" title="原文 : The selector will match all Pods with the labels coherenceCluster=test-cluster and component=coherencePod which are labels that the Coherence Operator will assign to all Pods in this cluster">セレクタはすべての<code>Pods</code>をラベル<code>coherenceCluster=test-cluster</code>および<code>component=coherencePod</code>と照合します。これは、Coherence Operatorがこのクラスタのすべての<code>Pods</code>に割り当てるラベルです</span></li>
</ul>
<p><span class="merged" id="all.mOrij" title="原文 : Because this Service is created in the same Namespace as the deployment&rsquo;s Pods the JVMs can use the raw Service name as the WKA list, in the example above the WKA list would just be test-cluster-wka.">この<code>Service</code>はデプロイメントの<code>Pods</code>と同じ<code>Namespace</code>で作成されるため、JVMはWKAリストとしてRAW <code>Service</code>名を使用できます。前述の例では、WKAリストは<code>test-cluster-wka</code>です。</span></p>

</div>

<h2 id="_exclude_a_deployment_from_wka"><span class="merged" id="all.2aHNEJ" title="原文 : Exclude a Deployment From WKA">WKAからデプロイメントを除外</span></h2>
<div class="section">
<p><span class="merged" id="all.1f2EAp.spl1" title="原文 : In some situations it may be desirable to exclude the Pods belonging to certain deployments in the cluster from being members of the well known address list.">状況によっては、クラスタ内の特定のデプロイメントに属するポッドを、既知のアドレス・リストのメンバーから除外することが望ましい場合があります。</span> <span class="merged" id="all.1f2EAp.spl2" title="原文 : For example certain K8s network configurations such as host networking can cause issues with WKA if other deployments in the cluster are using host networking.">たとえば、ホスト・ネットワーキングなどの特定のK8sネットワーク構成では、クラスタ内の他のデプロイメントがホスト・ネットワーキングを使用している場合に、WKAで問題が発生する可能性があります。</span> </p>

<p><span class="merged" id="all.4biOea" title="原文 : A role can be excluded from the WKA list by setting the excludeFromWKA field of the coherence section of the deployment&rsquo;s spec to true.">デプロイメントのスペックの<code>coherence</code>セクションの<code>excludeFromWKA</code>フィールドを<code>true</code>に設定することで、ロールをWKAリストから除外できます。</span></p>

<markup
lang="yaml"
title="test-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-client
spec:
  cluster: `my-cluster`    <span class="conum" data-value="1" />
  coherence:
    excludeFromWKA: true   <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1YcmEm" title="原文 : The cluster field is set to the name of the Coherence cluster that this deployment wil be part of (there is no point in excluding a deployment from WKA unless it is part of a wider cluster)."><code>cluster</code>フィールドは、このデプロイメントに含まれるCoherenceクラスタの名前に設定されます(より広範なクラスタの一部でないかぎり、WKAからデプロイメントを除外するポイントはありません)。</span></li>
<li data-value="2"><span class="merged" id="all.3BA4j0" title="原文 : The excludeFromWKA field is true so that Pods in the test-client deployment will not form part of the WKA list for the Coherence cluster."><code>test-client</code>デプロイメントの<code>Pods</code>がCoherenceクラスタのWKAリストの一部にならないように、<code>excludeFromWKA</code>フィールドは<code>true</code>です。</span></li>
</ul>
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.2zq8NB" title="原文 : The operator does not validate the excludeFromWKA field for a deployment so it is possible to try to create a cluster where all of the deployment have excludeFromWKA set to true which will cause the cluster fail to start.">オペレータはデプロイメントの<code>excludeFromWKA</code>フィールドをバリデートしないため、すべてのデプロイメントで<code>excludeFromWKA</code>が<code>true</code>に設定されているクラスタを作成して、クラスタの起動に失敗する可能性があります。</span></p>
</div>
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.3TaWJk.spl1" title="原文 : When excluding a deployment from WKA it is important that at least one deployment that is part of the WKA list has been started first otherwise the non-WKA role members cannot start.Eventually the K8s readiness probe for these Pods would time-out causing K8s to restart them but this would not be a desirable way to start a cluster.">WKAからデプロイメントを除外する場合、WKAリストの一部である少なくとも1つのデプロイメントが最初に開始され、それ以外の場合、非WKAロール・メンバーは開始できません。最終的に、これらのポッドのK8sレディネス・プローブはタイムアウトになり、K8sは再起動しますが、クラスタを起動するのに望ましい方法ではありません。</span> <span class="merged" id="all.3TaWJk.spl2" title="原文 : The start-up order can be controlled by configuring the deployment&rsquo;s startQuorum list, as described in the documentation section on deployment start-up ordering.">起動順序は、<router-link to="/ordering/010_overview">「デプロイメントの起動順序」</router-link>のドキュメント・セクションの説明に従って、デプロイメントの<code>startQuorum</code>リストを構成することで制御できます。</span> </p>
</div>
</div>

<h2 id="_multi_namespace_clusters"><span class="merged" id="all.4d5awb" title="原文 : Multi-Namespace Clusters">マルチ・ネーム・スペース・クラスタ</span></h2>
<div class="section">
<p><span class="merged" id="all.1e7FAy" title="原文 : It is possible to configure a Coherence cluster made up of multiple Coherence deployments that are deployed into different namespaces in the same Kubernetes cluster (with some caveats).">同じKubernetesクラスタ内の異なるネームスペース(一部の警告)にデプロイされる複数の<code>Coherence</code>デプロイメントで構成されるCoherenceクラスタを構成できます。</span></p>

<p><span class="merged" id="all.3OJmmj" title="原文 : The coherence.wka section of the Coherence CRD spec can be used to override the default WKA behaviour.">Coherence CRD仕様の<code>coherence.wka</code>セクションを使用して、デフォルトのWKA動作をオーバーライドできます。</span></p>

<p><span class="merged" id="all.1hhB0R.spl1" title="原文 : For example, suppose that there is a Coherence deployment named data that is the storage enabled cluster members holding data for an online store.">たとえば、オンライン・ストアのデータを保持しているストレージが有効なクラスタ・メンバーである<code>data</code>という名前の<code>Coherence</code>デプロイメントがあるとします。</span> <span class="merged" id="all.1hhB0R.spl2" title="原文 : This data deployment will be deployed into the back-end namespace in a Kubernetes cluster.">この<code>data</code>デプロイメントは、Kubernetesクラスタの<code>back-end</code>ネームスペースにデプロイされます。</span> <span class="merged" id="all.1hhB0R.spl3" title="原文 :  Another Coherence deployment of storage disabled members will provide the front end REST API for the online store."><br>ストレージが無効になっているメンバーのもう1つの<code>Coherence</code>デプロイメントによって、オンライン・ストアのフロントエンドREST APIが提供されます。</span> <span class="merged" id="all.1hhB0R.spl4" title="原文 : This will be named web-store and deployed in the front-end namespace.">これは<code>web-store</code>という名前で、<code>front-end</code>ネームスペースにデプロイされます。</span> <span class="merged" id="all.1hhB0R.spl5" title="原文 :  Although both the data and web-store deployments are in different namespaces they need to form a single Coherence cluster."><br><code>data</code>と<code>web-store</code>の両方のデプロイメントが異なるネームスペースにありますが、1つのCoherenceクラスタを形成する必要があります。</span> </p>

<markup
lang="yaml"
title="data-deployment.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: data
  namespace: back-end      <span class="conum" data-value="1" />
spec:
  cluster: `shop`          <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2IHErC" title="原文 : The data deployment is deployed into the back-end namespace"><code>data</code>デプロイメントは、<code>back-end</code>ネームスペースにデプロイされます</span></li>
<li data-value="2"><span class="merged" id="all.3AFe2d" title="原文 : The Coherence cluster name is set to shop">Coherenceクラスタ名は<code>shop</code>に設定されます</span></li>
</ul>
<markup
lang="yaml"
title="web-store-deployment.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: web-store
  namespace: front-end     <span class="conum" data-value="1" />
spec:
  cluster: `shop`          <span class="conum" data-value="2" />
  coherence:
    wka:                   <span class="conum" data-value="3" />
      deployment: data
      namespace: back-end</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.26mbw3" title="原文 : The web-store deployment is deployed into the front-end namespace."><code>web-store</code>デプロイメントは、<code>front-end</code>ネームスペースにデプロイされます。</span></li>
<li data-value="2"><span class="merged" id="all.4Jr8cw" title="原文 : The Coherence cluster name is set to shop to match the data deployment">Coherenceクラスタ名は、<code>data</code>デプロイメントと一致するように<code>shop</code>に設定されます</span></li>
<li data-value="3"><span class="merged" id="all.1jT469" title="原文 : The coherence.wka section specifies the name of the Coherence deployment to use for WKA so in this case the data deployment in the back-end namespace."><code>coherence.wka</code>セクションは、WKAに使用する<code>Coherence</code>デプロイメントの名前を指定します。この場合、<code>back-end</code>ネームスペースの<code>data</code>デプロイメントを指定します。</span></li>
</ul>
<p><span class="merged" id="all.4BD0ah.spl1" title="原文 : As described already above the data deployment will have a headless Service created for WKA named data-wka, which will be in the back-end namespace.">すでに<code>data</code>デプロイメントの上に説明されているように、<code>data-wka</code>という名前の<code>WKA</code>に対してヘッドレス<code>Service</code>が作成されます。これは、<code>back-end</code>ネームスペース内にあります。</span> <span class="merged" id="all.4BD0ah.spl2" title="原文 : The full name of this Service in Kubernetes will be data-wka.back-end.svc.cluster.local and this will be the name that the members of the web-store deployment will be configured to use for WKA.">Kubernetesのこの<code>Service</code>の完全名は<code>data-wka.back-end.svc.cluster.local</code>で、これは、<code>web-store</code>デプロイメントのメンバーがWKA用に構成される名前になります。</span> </p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.mwQ8V" title="原文 : When using WKA in this way the Coherence deployment that is providing the WKA Service should be running before any deployment that depends on it is deployed.">このようにWKAを使用する場合、WKA <code>Service</code>を提供している<code>Coherence</code>デプロイメントは、それに依存するデプロイメントの前に実行する必要があります。</span></p>
</div>
</div>
</doc-view>
