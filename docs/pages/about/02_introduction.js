<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_what_is_the_coherence_operator"><span class="merged" id="all.46lM5x" title="原文 : What is the Coherence Operator?">Coherence Operatorとは何ですか。</span></h2>
<div class="section">
<p><span class="merged" id="all.4e4Itn.spl1" title="原文 : The Coherence Operator is a Kubernetes Operator that is used to manage Oracle Coherence clusters in Kubernetes.">Coherence Operatorとは、Kubernetesで<a href="https://oracle.github.io/coherence" id="" target="_blank" >Oracle Coherence</a>クラスタを管理するために使用される<a href="https://kubernetes.io/docs/concepts/extend-kubernetes/operator/" id="" target="_blank" >Kubernetes Operator</a>です。</span> <span class="merged" id="all.4e4Itn.spl2" title="原文 : The Coherence Operator takes on the tasks of that human DevOps resource might carry out when managing Coherence clusters, such as configuration, installation, safe scaling, management and metrics.">Coherence Operatorは、構成、インストール、安全なスケーリング、管理およびメトリクスなどのCoherenceクラスタを管理するときに発生する可能性がある、そのDevOpsリソースのタスクを取ります。</span> </p>

<p><span class="merged" id="all.1zVc8O.spl1" title="原文 : The Coherence Operator is a Go based application built using the Operator SDK.">Coherence Operatorは、<a href="https://github.com/operator-framework/operator-sdk" id="" target="_blank" >「オペレータSDK」</a>を使用して構築されたGoベースのアプリケーションです。</span> <span class="merged" id="all.1zVc8O.spl2" title="原文 : It is distributed as a Docker image and Helm chart for easy installation and configuration.">インストールおよび構成を容易にするために、DockerイメージとHelmチャートとして配布されます。</span> </p>

</div>

<h2 id="_why_use_the_coherence_kubernetes_operator"><span class="merged" id="all.1neq7A" title="原文 : Why use the Coherence Kubernetes Operator">Coherence Kubernetes Operatorを使用する理由</span></h2>
<div class="section">
<p><span class="merged" id="all.1vvEZR.spl1" title="原文 : Using the Coherence Operator to manage Coherence clusters running in Kubernetes has many advantages over just deploying and running clusters with the resources provided by Kubernetes.">Coherence Operatorを使用して、Kubernetesで実行中のCoherenceクラスタを管理する場合、Kubernetesが提供するリソースを使用してクラスタをデプロイおよび実行する場合よりも多くの利点があります。</span> <span class="merged" id="all.1vvEZR.spl2" title="原文 : Coherence can be treated as just another library that your application depends on and uses and hence, a Coherence application can run in Kubernetes without requiring the Operator, but in this case there are a number of things that the DevOps team for an application would need to build or do manually.">Coherenceは、アプリケーションが依存する別のライブラリとして処理できるため、オペレータを必要とせずにKubernetesでCoherenceアプリケーションを実行できますが、この場合、アプリケーションのDevOpsチームが構築または手動で行う必要があることが多数あります。</span> </p>


<h3 id="_cluster_discovery"><span class="merged" id="all.4HaWbB"  title="原文:: Cluster Discovery">クラスタの検出</span></h3>
<div class="section">
<p><span class="merged" id="all.VHVGq.spl1" title="原文 : JVMs that run as Coherence cluster members need to discover the other members of the cluster.">Coherenceクラスタ・メンバーとして実行されるJVMでは、クラスタの他のメンバーを検出する必要があります。</span> <span class="merged" id="all.VHVGq.spl2" title="原文 : This is discussed in the Coherence Well Known Addressing section of the documentation.">これについては、ドキュメントの<router-link to="/coherence/070_wka">「Coherenceの既知のアドレス指定」</router-link>の項を参照してください。</span> <span class="merged" id="all.VHVGq.spl3" title="原文 : When using the Operator the well known addressing configuration for clusters is managed automatically to allow a Coherence deployment to create its own cluster or to join with other deployments to form larger clusters.">Operatorを使用すると、クラスタの既知のアドレス指定の構成が自動的に管理され、Coherenceデプロイメントが独自のクラスタを作成したり、他のデプロイメントと結合してより大きなクラスタを形成できます。</span> </p>

</div>

<h3 id="_better_fault_tolerant_data_distribution"><span class="merged" id="all.2vOY1w" title="原文 : Better Fault Tolerant Data Distribution">優れたフォルト・トレラントなデータ分散</span></h3>
<div class="section">
<p><span class="merged" id="all.27UzBn.spl1" title="原文 : The Operator configures the Coherence site and rack properties for cluster members based on Kubernetes Node topology labels.">オペレータは、Kubernetesノードのトポロジ・ラベルに基づいて、クラスタ・メンバーのCoherenceサイトおよびラック・プロパティを構成します。</span> <span class="merged" id="all.27UzBn.spl2" title="原文 : This allows Coherence to better distribute data across sites when a Kubernetes cluster spans availability domains.">これにより、Kubernetesクラスタが可用性ドメインにまたがる場合、Coherenceはサイト間でデータをより適切に分散できます。</span> </p>

</div>

<h3 id="_safe_scaling"><span class="merged" id="all.3IenmW" title="原文 : Safe Scaling">安全なスケーリング</span></h3>
<div class="section">
<p><span class="merged" id="all.3J2KSm.spl1" title="原文 : When scaling down a Coherence cluster, care must be taken to ensure that there will be no data loss.">Coherenceクラスタのスケール・ダウン時には、データ損失がないように注意する必要があります。</span> <span class="merged" id="all.3J2KSm.spl2" title="原文 : This typically means scaling down by a single Pod at a time and waiting for the cluster to become &quot;safe&quot; before scaling down the next Pod.">これは通常、1回に1つのポッドでスケール・ダウンし、次のポッドをスケール・ダウンする前にクラスタが「安全」になるまで待機することを意味します。</span> <span class="merged" id="all.3J2KSm.spl3" title="原文 : The Operator has built in functionality to do this, so scaling a Coherence cluster is as simple as scaling any other Kubernetes Deployment or StatefulSet.">オペレータにはこれを実行する機能が組み込まれているため、Coherenceクラスタのスケーリングは、他のKubernetes DeploymentやStatefulSetのスケーリングと同様に簡単です。</span> </p>

</div>

<h3 id="_autoscaling"><span class="merged" id="all.bnOQq"  title="原文:: Autoscaling">オートスケール</span></h3>
<div class="section">
<p><span class="merged" id="all.4UiZD3" title="原文 : Alongside safe scaling, because the Coherence CRD supports the Kubernetes scale sub-resource it is possible to configure the Kubernetes Horizontal Pod Autoscaler to scale Coherence clusters based on metrics.">Coherence CRDではKubernetesスケール・サブリソースがサポートされるため、メトリクスに基づいてCoherenceクラスタをスケーリングするようにKubernetes水平ポッド自動スケーリングを構成できます。</span></p>

</div>

<h3 id="_readiness_probes"><span class="merged" id="all.45zhcU" title="原文 : Readiness Probes">レディネス・プローブ</span></h3>
<div class="section">
<p><span class="merged" id="all.1MnFim" title="原文 : The Operator has an understanding of when a Coherence JVM is &quot;ready&quot;, so it configures a readiness probe that k8s will use to signal whether a Pod is ready or not.">オペレータは、Coherence JVMがいつ"準備完了"かを理解しているため、ポッドの準備ができているかどうかを示すためにk8sが使用するレディネス・プローブを構成します。</span></p>

</div>

<h3 id="_persistence"><span class="merged" id="all.2EaGxO"  title="原文:: Persistence">永続性</span></h3>
<div class="section">
<p><span class="merged" id="all.CeGNT" title="原文 : Using the Operator makes it simple to configure and use Coherence Persistence, storing data on Kubernetes Persistent Volumes to allow state to be maintained between cluster restarts.">オペレータを使用すると、Coherenceの永続性を構成して使用しやすくなり、KubernetesのPersistent Volumesにデータを格納して、クラスタ再起動間の状態を維持できます。</span></p>

</div>

<h3 id="_graceful_shutdown"><span class="merged" id="all.4cp7zB"  title="原文:: Graceful Shutdown">正常な停止</span></h3>
<div class="section">
<p><span class="merged" id="all.dSeX.spl1" title="原文 : When a Coherence cluster is deployed with persistence enabled, the Operator will gracefully shutdown a cluster by suspending services before stopping all the Pods.">Coherenceクラスタが永続性を有効にしてデプロイされると、すべてのPodを停止する前にサービスを一時停止することで、オペレータはクラスタを正常に停止します。</span> <span class="merged" id="all.dSeX.spl2" title="原文 : This ensures that all persistence files are properly closed and allows for quicker recovery and restart of the cluster.">これにより、すべての永続性ファイルが適切に閉じられ、クラスタの迅速なリカバリと再起動が可能になります。</span> <span class="merged" id="all.dSeX.spl3" title="原文 : Without the Operator, if a cluster is shutdown, typically by removing the controlling StatefulSet from Kubernetes then the Pods will be shutdown but not all at the same time.">オペレータがないと、クラスタが停止している場合、通常、制御するStatefulSetをKubernetesから削除すると、ポッドは停止されますが、同時にすべて停止されません。</span> <span class="merged" id="all.dSeX.spl4" title="原文 : It is obviously impossible for k8s to kill all the Pods at the exact same instant in time.">k8sがまったく同じ時間にすべてのポッドを強制終了することは明らかに不可能です。</span> <span class="merged" id="all.dSeX.spl5" title="原文 : As some Pods die the remaining storage enabled Pods will be trying to recover data for the lost Pods, this can cause a lot of needles work and moving of data over the network.">一部のポッドが死んだため、残りのストレージが有効なポッドは失われたポッドのデータをリカバリしようとしています。このため、多くのニーズが生じ、ネットワーク上でデータが移動する可能性があります。</span> <span class="merged" id="all.dSeX.spl6" title="原文 : It is much cleaner to suspend all the services before shutdown.">停止前に、すべてのサービスを一時停止するのはかなりクリーンです。</span> </p>

</div>

<h3 id="_simpler_configuration"><span class="merged" id="all.SDnTw" title="原文 : Simpler Configuration">シンプルな構成</span></h3>
<div class="section">
<p><span class="merged" id="all.i0QiN.spl1" title="原文 : The Coherence CRD is designed to make the more commonly used configuration parameters for Coherence, and the JVM simpler to configure.">Coherence CRDは、より一般的に使用されるCoherence構成パラメータを作成するように設計され、JVMの構成が簡単になります。</span> <span class="merged" id="all.i0QiN.spl2" title="原文 : The Coherence CRD is simple to use, in fact none of its fields are mandatory, so an application can be deployed with nothing more than a name, and a container image.">Coherence CRDは簡単に使用でき、実際にはどのフィールドも必須ではないため、アプリケーションは名前とコンテナ・イメージとともにデプロイできます。</span> </p>

</div>

<h3 id="_consistency"><span class="merged" id="all.5S5Qx"  title="原文:: Consistency">一貫性</span></h3>
<div class="section">
<p><span class="merged" id="all.4KDQ5M" title="原文 : By using the Operator to manage Coherence clusters all clusters are configured and managed the same way making it easier for DevOps to manage multiple clusters and applications.">オペレータを使用してCoherenceクラスタを管理することにより、すべてのクラスタが構成および管理されるため、DevOpsで複数のクラスタとアプリケーションの管理が容易になります。</span></p>

</div>

<h3 id="_expertise"><span class="merged" id="all.2w8ngO"  title="原文:: Expertise">専門</span></h3>
<div class="section">
<p><span class="merged" id="all.43hMst" title="原文 : The Operator has been built and tested by the Coherence engineering team, who understand Coherence and the various scenarios and edge cases that can occur when managing Coherence clusters at scale in Kubernetes.">オペレータは、KubernetesでCoherenceクラスタを管理するときに発生する可能性があるCoherenceおよび様々なシナリオとエッジ・ケースを理解するCoherenceエンジニアリング・チームによって構築およびテストされています。</span></p>

</div>
</div>

<h2 id="_coherence_clusters"><span class="merged" id="all.1ziNUv"  title="原文:: Coherence Clusters">Coherenceクラスタ</span></h2>
<div class="section">
<p><span class="merged" id="all.UpjEJ.spl1" title="原文 : A Coherence cluster is a number of distributed Java Virtual Machines (JVMs) that communicate to form a single coherent cluster.">Coherenceクラスタは、単一のまとまったクラスタを形成するために通信する多数の分散Java Virtual Machines (JVM)です。</span> <span class="merged" id="all.UpjEJ.spl2" title="原文 : In Kubernetes, this concept can be related to a number of Pods that form a single cluster.">Kubernetesでは、この概念は、1つのクラスタを形成する多数のポッドに関連させることができます。</span> <span class="merged" id="all.UpjEJ.spl3" title="原文 : In each Pod is a JVM running a Coherence DefaultCacheServer, or a custom application using Coherence.">各<code>Pod</code>は、Coherence <code>DefaultCacheServer</code>を実行するJVMか、Coherenceを使用するカスタム・アプリケーションです。</span> </p>

<p><span class="merged" id="all.2E77dp.spl1" title="原文 : The operator uses a Kubernetes Custom Resource Definition (CRD) to represent a group of members in a Coherence cluster.">このオペレータは、Kubernetesカスタム・リソース定義(CRD)を使用して、Coherenceクラスタのメンバー・グループを表します。</span> <span class="merged" id="all.2E77dp.spl2" title="原文 : Typically, a deployment would be used to configure one or more members of a specific role in a cluster.">通常、デプロイメントを使用して、クラスタ内の特定のロールの1つ以上のメンバーを構成します。</span> <span class="merged" id="all.2E77dp.spl3" title="原文 : Every field in the Coherence CRD Spec is optional, so a simple cluster can be defined in yaml as:"><code>Coherence</code> CRD <code>Spec</code>の各フィールドはオプションであるため、単純なクラスタをyamlで定義できます:</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: my-cluster <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3834Dk" title="原文 : In this case the metadata.name field in the Coherence resource yaml will be used as the Coherence cluster name.">この場合、<code>Coherence</code>リソースyamlの<code>metadata.name</code>フィールドがCoherenceクラスタ名として使用されます。</span></li>
</ul>
<p><span class="merged" id="all.2e79Te" title="原文 : The operator will use default values for fields that have not been entered, so the above yaml will create a Coherence deployment using a StatefulSet with a replica count of three, which means that will be three storage enabled Coherence Pods.">オペレータでは、入力されていないフィールドのデフォルト値が使用されるため、前述のYamlではレプリカ数が3の<code>StatefulSet</code>を使用してCoherenceデプロイメントが作成されます。これは、3つのストレージでCoherence <code>Pods</code>が有効になっていることを意味します。</span></p>

<p><span class="merged" id="all.p5Tay" title="原文 : See the Coherence CRD spec page for details of all the fields in the CRD.">CRDのすべてのフィールドの詳細は、<router-link to="/about/04_coherence_spec">「Coherence CRD仕様」</router-link>ページを参照してください。</span></p>

<p><span class="merged" id="all.dCNQG.spl1" title="原文 : In the above example no spec.image field has been set, so the Operator will use a publicly available Coherence CE image as its default.">前述の例では、<code>spec.image</code>フィールドが設定されていないため、オペレータはデフォルトとしてパブリックに使用可能なCoherence CEイメージを使用します。</span> <span class="merged" id="all.dCNQG.spl2" title="原文 : These images are meant for demos, POCs and experimentation, but for a production application you should build your own image.">これらのイメージはデモ、POCおよび実験を目的としていますが、本番アプリケーションについては独自のイメージを作成する必要があります。</span> </p>

</div>

<h2 id="_using_commercial_coherence_versions"><span class="merged" id="all.1cmsGU" title="原文 : Using Commercial Coherence Versions">商用Coherenceバージョンの使用</span></h2>
<div class="section">
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1s9kbn" title="原文 : Whilst the Coherence CE version can be freely deployed anywhere, if your application image uses a commercial version of Oracle Coherence then you are responsible for making sure your deployment has been properly licensed.">Coherence CEのバージョンはどこでも自由にデプロイできます。アプリケーション・イメージで商用バージョンのOracle Coherenceが使用されている場合は、デプロイメントが正しくライセンスされていることを確認する責任があります。</span></p>
</div>
<p><span class="merged" id="all.2xL7Op.spl1" title="原文 : Oracle&rsquo;s current policy is that a license will be required for each Kubernetes Node that images are to be pulled to.">Oracleの現在のポリシーは、イメージのプル先となるKubernetesノードごとにライセンスが必要となることです。</span> <span class="merged" id="all.2xL7Op.spl2" title="原文 : While an image exists on a node it is effectively the same as having installed the software on that node.">イメージはノード上に存在しますが、そのノードにソフトウェアをインストールしたと実質的に同じです。</span> </p>

<p><span class="merged" id="all.4M8MhC.spl1" title="原文 : One way to ensure that the Pods of a Coherence deployment only get scheduled onto nodes that meet the license requirement is to configure Pod scheduling, for example a node selector.">Coherenceデプロイメントのポッドがライセンス要件を満たすノードにのみスケジュールされるようにするための1つの方法は、ノード・セレクタなどのポッド・スケジューリングを構成することです。</span> <span class="merged" id="all.4M8MhC.spl2" title="原文 : Node selectors, and other scheduling, is simple to configure in the Coherence CRD, see the scheduling documentation">ノード・セレクタおよびその他のスケジューリングは、<code>Coherence</code> CRDで構成するだけで簡単です。<router-link to="/other/090_pod_scheduling">「スケジュールのドキュメント」</router-link>を参照してください</span> </p>

<p><span class="merged" id="all.3x0cDU" title="原文 : For example, if a commercial Coherence license exists such that a sub-set of nodes in a Kubernetes cluster have been covered by the license then those nodes could all be given a label, e.g. coherenceLicense=true">たとえば、Kubernetesクラスタ内のノードのサブセットをライセンスでカバーするように商用Coherenceライセンスが存在する場合、これらのノードにはすべてラベルを付けることができます(例: <code>coherenceLicense=true</code>)</span></p>

<p><span class="merged" id="all.4DHTiY" title="原文 : When creating a Coherence deployment specify a node selector to match the label:"><code>Coherence</code>デプロイメントの作成時に、ラベルに一致するノード・セレクタを指定します:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: my-app:1.0.0         <span class="conum" data-value="1" />
  nodeSelector:
    coherenceLicense: 'true'  <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1WiUVF" title="原文 : The my-app:1.0.0 image contains a commercial Coherence version."><code>my-app:1.0.0</code>イメージには、商用Coherenceバージョンが含まれています。</span></li>
<li data-value="2"><span class="merged" id="all.1hzKRf" title="原文 : The nodeSelector will ensure Pods only get scheduled to nodes with the coherenceLicense=true label."><code>nodeSelector</code>では、ポッドが<code>coherenceLicense=true</code>ラベルを持つノードにのみスケジュールされるようになります。</span></li>
</ul>
<p><span class="merged" id="all.dtarG.spl1" title="原文 : There are other ways to configure Pod scheduling supported by the Coherence Operator (such as taints and tolerations) and there are alternative ways to restrict nodes that Pods can be schedule to, for example a namespace in kubernetes can be restricted to a sub-set of the cluster&rsquo;s nodes.">Coherence Operator (taintsやtolerationsなど)でサポートされているポッド・スケジューリングを構成する方法は他にもありますが、ポッドをスケジュールできるノードを制限する方法もあります。たとえば、kubernetesのネームスペースはクラスタ・ノードのサブセットに限定できます。</span> <span class="merged" id="all.dtarG.spl2" title="原文 : Using a node selector as described above is probably the simplest approach.">前述のようにノード・セレクタを使用すると、最も単純なアプローチである可能性があります。</span> </p>

</div>
</doc-view>
