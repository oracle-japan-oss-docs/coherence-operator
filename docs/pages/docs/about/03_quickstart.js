<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2FbcJI"  title="原文:: Quick Start">クイック・スタート</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2BlMhd" title="原文 : This guide is a simple set of steps to install the Coherence Operator and then use that to install a simple Coherence cluster.">このガイドは、Coherence Operatorをインストールし、それを使用して単純なCoherenceクラスタをインストールするための単純なステップのセットです。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.Ofv4i" title="原文 : Ensure that the Coherence Operator prerequisites are available."><router-link to="/docs/installation/01_installation">「Coherence Operatorの前提条件」</router-link>が使用可能であることを確認します。</span></p>

</div>

<h2 id="_1_install_the_coherence_operator"><span class="merged" id="all.2CLSny" title="原文 : 1. Install the Coherence Operator">1. Coherence Operatorのインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.1v0YpD" title="原文 : If you want the default Coherence Operator installation then the simplest solution is use kubectl to apply the manifests from the Operator release.">デフォルトのCoherence Operatorインストールが必要な場合は、最も単純なソリューションは<code>kubectl</code>を使用して、Operatorリリースからのマニフェストを適用します。</span></p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.2.8/coherence-operator.yaml</markup>

<p><span class="merged" id="all.2vyxRX.spl1" title="原文 : This will create a namespace called coherence and install the Operator into it along with all the required ClusterRole and RoleBinding resources.">これにより、<code>coherence</code>というネームスペースが作成され、必要なすべての<code>ClusterRole</code>および<code>RoleBinding</code>リソースとともにオペレータがインストールされます。</span> <span class="merged" id="all.2vyxRX.spl2" title="原文 : The coherence namespace can be changed by downloading and editing the yaml file."><code>coherence</code>ネームスペースは、yamlファイルをダウンロードおよび編集することによって変更できます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.Ipng.spl1" title="原文 : Because the coherence-operator.yaml manifest also creates the namespace, the corresponding kubectl delete command will remove the namespace and everything deployed to it!"><code>coherence-operator.yaml</code>マニフェストではネームスペースも作成されるため、対応する<code>kubectl delete</code>コマンドは<em>「ネームスペースおよびそれにデプロイされたすべてのネームスペースを削除」</em>になります。</span> <span class="merged" id="all.Ipng.spl2" title="原文 : If you do not want this behaviour you should edit the coherence-operator.yaml to remove the namespace section from the start of the file.">この動作を行わない場合は、<code>coherence-operator.yaml</code>を編集して、ファイルの先頭からネームスペース・セクションを削除する必要があります。</span> </p>
</div>

<h3 id="_alternatively_install_using_helm"><span class="merged" id="all.32m5kl" title="原文 : Alternatively Install Using Helm">Helmを使用する別手段のインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.I48id" title="原文 : Alternatively you can install the Operator using the Helm chart.">または、Helmチャートを使用してオペレータをインストールすることもできます。</span></p>


<h4 id="_add_the_coherence_operator_helm_repository"><span class="merged" id="all.2z5JGp" title="原文 : Add the Coherence Operator Helm repository">Coherence Operator Helmリポジトリを追加</span></h4>
<div class="section">
<p><span class="merged" id="all.2TTbme" title="原文 : Add the Coherence Operator Helm repo to your local Helm.">Coherence Operator HelmリポジトリをローカルのHelmに追加します。</span></p>

<markup
lang="bash"

>helm repo add coherence https://oracle.github.io/coherence-operator/charts

helm repo update</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1Gm9Vn.spl1" title="原文 : To avoid confusion, the URL https://oracle.github.io/coherence-operator/charts is a Helm repo, it is not a web site you open in a browser.">混乱を避けるために、URL <code><a href="https://oracle.github.io/coherence-operator/charts" id="" target="_blank" >https://oracle.github.io/coherence-operator/charts</a></code>はHelmリポジトリであり、ブラウザで開くwebサイトではありません。</span> <span class="merged" id="all.1Gm9Vn.spl2" title="原文 : You may think we shouldn’t have to say this, but you’d be surprised.">知らない方のために。</span> </p>
</div>
</div>

<h4 id="_install_the_coherence_operator_helm_chart"><span class="merged" id="all.4IuD5z" title="原文 : Install the Coherence Operator Helm chart">Coherence Operator Helmチャートのインストール</span></h4>
<div class="section">
<markup
lang="bash"
title="helm v3 install command"
>helm install  \
    --namespace &lt;namespace&gt; \
    &lt;release-name&gt; \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.1UP3T2" title="原文 : e.g. if the Kubernetes namespace is coherence-test the command would be:">例、Kubernetesネームスペースが<code>coherence-test</code>の場合、コマンドは次のようになります:</span></p>

<markup
lang="bash"
title="helm v3 install command"
>helm install --namespace coherence-test  operator coherence/coherence-operator</markup>

<p><span class="merged" id="all.3oocQh" title="原文 : or with Helm v2">またはHelm v2を使用</span></p>

<markup
lang="bash"

>helm install --namespace coherence-test  --name operator coherence/coherence-operator</markup>

<p><span class="merged" id="all.4Scp2H" title="原文 : See the full install guide for more details.">詳細は、<router-link to="/docs/installation/01_installation">「フル・インストール・ガイド」</router-link>を参照してください。</span></p>

</div>
</div>
</div>

<h2 id="_2_install_a_coherence_deployment"><span class="merged" id="all.1yBLKz" title="原文 : 2. Install a Coherence Deployment">2. Coherenceデプロイメントのインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.2gTFgF.spl1" title="原文 : Ensure that the Coherence images can be pulled by the Kubernetes cluster, see Obtain Coherence Images.">CoherenceイメージをKubernetesクラスタによってプルできることを確認します。<router-link to="/docs/installation/04_obtain_coherence_images">「Coherenceイメージの取得」</router-link>を参照してください。</span> <span class="merged" id="all.2gTFgF.spl2" title="原文 : By default, a Coherence resource will use the OSS Coherence CE image from Docker Hub.">デフォルトでは、<code>Coherence</code>リソースは、Docker HubのOSS Coherence CEイメージを使用します。</span> <span class="merged" id="all.2gTFgF.spl3" title="原文 : If a different image is to be used the image name will need to be specified in the Coherence yaml, see Setting the Application Image for documentation on how to specify a different images to use.">別のイメージを使用する場合は、<code>Coherence</code> yamlにイメージ名を指定する必要があります。使用する別のイメージの指定方法については、<router-link to="/docs/applications/010_overview">「アプリケーション・イメージの設定」</router-link>を参照してください。</span> </p>


<h3 id="_2_1_install_a_coherence_resource_using_the_minimal_required_configuration"><span class="merged" id="all.cVvds" title="原文 : 2.1 Install a Coherence resource using the minimal required configuration.">2.1 最小限必要な構成を使用してCoherenceリソースをインストールします。</span></h3>
<div class="section">
<p><span class="merged" id="all.1LZI6D" title="原文 : The minimal required yaml to create a Coherence resource is shown below."><code>Coherence</code>リソースを作成するために必要な最小限のyamlを次に示します。</span></p>

<markup
lang="yaml"
title="my-deployment.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: my-deployment <span class="conum" data-value="1" /></markup>

<p><span class="merged" id="all.3m31Mr" title="原文 : The only required field is metadata.name which will be used as the Coherence cluster name, in this case my-deployment">必要なフィールドは、Coherenceクラスタ名として使用される<code>metadata.name</code>のみです(この場合は<code>my-deployment</code>)</span></p>

<markup
lang="bash"

>kubectl -n &lt;namespace&gt; apply -f my-deployment.yaml</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.EoLS7" title="原文 : Use the same namespace that the operator was installed into, e.g. if the namespace is coherence-test the command would be kubectl -n coherence-test create -f my-deployment.yaml">オペレータがにインストールされたものと同じネームスペースを使用します。例、ネームスペースが<code>coherence-test</code>の場合、コマンドは<code>kubectl -n coherence-test create -f my-deployment.yaml</code>になります</span></p>
</div>
</div>

<h3 id="_2_2_list_the_coherence_resources"><span class="merged" id="all.1091MR" title="原文 : 2.2 List the Coherence Resources">2.2 Coherenceリソースのリスト</span></h3>
<div class="section">
<p><span class="merged" id="all.2A9Eh4" title="原文 : After installing the my-deployment.yaml above here should be a single Coherence resource named my-deployment in the Coherence Operator namespace.">前述の<code>my-deployment.yaml</code>をインストールした後、Coherence Operatorネームスペースで<code>my-deployment</code>という名前の単一の<code>Coherence</code>リソースである必要があります。</span></p>

<markup
lang="bash"

>kubectl -n &lt;namespace&gt; get coherence</markup>

<p><span class="merged" id="all.2JDKAh" title="原文 : or alternatively using the Coherence CRD a short name of coh">または、<code>Coherence</code> CRDを<code>coh</code>の短縮名として使用</span></p>

<markup
lang="bash"

>kubectl -n &lt;namespace&gt; get coh</markup>

<p><span class="merged" id="all.46gDUE" title="原文 : e.g. if the namespace is coherence-test the command would be kubectl -n coherence-test get coherence">例、ネームスペースが<code>coherence-test</code>の場合、コマンドは<code>kubectl -n coherence-test get coherence</code>になります</span></p>

<markup
lang="bash"

>NAME                                                  AGE
coherence.coherence.oracle.com/my-deployment   19s</markup>

</div>

<h3 id="_2_3_list_all_of_the_pods_for_the_coherence_resource"><span class="merged" id="all.lMISt" title="原文 : 2.3 List all of the Pods for the Coherence resource.">2.3 Coherenceリソースのすべての<code>Pods</code>をリストします。</span></h3>
<div class="section">
<p><span class="merged" id="all.36kgvv" title="原文 : The Coherence Operator applies a coherenceDeployment label to all Pods so this label can be used with the kubectl command to find Pods for a CoherenceCoherence resource.">Coherence Operatorは、すべての<code>Pods</code>に<code>coherenceDeployment</code>ラベルを適用するため、<code>kubectl</code>コマンドでこのラベルを使用して<code>CoherenceCoherence</code>リソースの<code>Pods</code>を検索できます。</span></p>

<markup
lang="bash"

>kubectl -n &lt;namespace&gt; get pod -l coherenceDeployment=my-deployment</markup>

<p><span class="merged" id="all.2c1HBi" title="原文 : e.g. if the namespace is coherence the command would be: kubectl -n coherence get pod -l coherenceDeployment=my-deployment">例、ネームスペースが<code>coherence</code>の場合、コマンドは: <code>kubectl -n coherence get pod -l coherenceDeployment=my-deployment</code></span></p>

<markup
lang="bash"

>NAME              READY   STATUS    RESTARTS   AGE
my-deployment-0   1/1     Running   0          2m58s
my-deployment-1   1/1     Running   0          2m58s
my-deployment-2   1/1     Running   0          2m58s</markup>

</div>

<h3 id="_2_3_list_all_the_pods_for_the_coherence_cluster"><span class="merged" id="all.iTN1m" title="原文 : 2.3 List all the Pods for the Coherence cluster.">2.3 Coherenceクラスタのすべての<code>Pods</code>をリストします。</span></h3>
<div class="section">
<p><span class="merged" id="all.42DrA2" title="原文 : The Coherence Operator applies a coherenceCluster label to all Pods, so this label can be used with the kubectl command to find all Pods for a Coherence cluster, which will be made up of multiple Coherence resources.">Coherence Operatorは、すべての<code>Pods</code>に<code>coherenceCluster</code>ラベルを適用するため、このラベルを<code>kubectl</code>コマンドとともに使用して、Coherenceクラスタのすべての<code>Pods</code>を検索できます。これは、複数の<code>Coherence</code>リソースで構成されます。</span></p>

<markup
lang="bash"

>kubectl -n &lt;namespace&gt; get pod -l coherenceCluster=my-cluster</markup>

<p><span class="merged" id="all.4OCDUz" title="原文 : e.g. If there is a cluster named my-cluster made up of two Coherence resources in the namespace coherence-test, one named storage and one named front-end then the kubectl command to list all Pods for the cluster would be:">例、ネームスペース<code>coherence-test</code>内に2つの<code>Coherence</code>リソースで構成された<code>my-cluster</code>という名前のクラスタがある場合、<code>storage</code>という名前のリソースと<code>front-end</code>という名前のクラスタが1つずつ構成されている場合、クラスタのすべてのポッドをリストする<code>kubectl</code>コマンドは次のようになります:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test get pod -l coherenceCluster=my-cluster</markup>

<p><span class="merged" id="all.2mbAp8" title="原文 : The result of which might look something like this">結果は次のようになります</span></p>

<markup
lang="bash"

>NAME          READY   STATUS    RESTARTS   AGE
storage-0     1/1     Running   0          2m58s
storage-1     1/1     Running   0          2m58s
storage-2     1/1     Running   0          2m58s
front-end-0   1/1     Running   0          2m58s
front-end-1   1/1     Running   0          2m58s
front-end-2   1/1     Running   0          2m58s</markup>

</div>
</div>

<h2 id="_3_scale_the_coherence_cluster"><span class="merged" id="all.2hr7Qm" title="原文 : 3. Scale the Coherence Cluster">3. Coherenceクラスタのスケーリング</span></h2>
<div class="section">

<h3 id="_3_1_use_kubectl_to_scale_up"><span class="merged" id="all.ucL7v" title="原文 : 3.1 Use kubectl to Scale Up">3.1 kubectlを使用したスケール・アップ</span></h3>
<div class="section">
<p><span class="merged" id="all.27tglj" title="原文 : Using the kubectl scale command a specific Coherence resource can be scaled up or down."><code>kubectl scale</code>コマンドを使用すると、特定の<code>Coherence</code>リソースをスケール・アップまたはスケール・ダウンできます。</span></p>

<markup
lang="bash"

>kubectl -n &lt;namespace&gt; scale coherence/my-deployment --replicas=6</markup>

<p><span class="merged" id="all.1RvSxt" title="原文 : e.g. if the namespace is coherence-test the command would be: kubectl -n coherence scale coherence/my-deployment --replicas=6">例、ネームスペースが<code>coherence-test</code>の場合、コマンドは: <code>kubectl -n coherence scale coherence/my-deployment --replicas=6</code></span></p>

</div>
</div>
</doc-view>
