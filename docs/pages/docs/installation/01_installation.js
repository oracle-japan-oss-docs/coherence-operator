<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1Tb5TG" title="原文 : Coherence Operator Installation">Coherence Operatorインストール</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3VjuBq" title="原文 : The Coherence Operator is available as a Docker image oracle/coherence-operator:3.2.8 that can easily be installed into a Kubernetes cluster.">Coherence Operatorは、Kubernetesクラスタに簡単にインストールできるDockerイメージ<code>oracle/coherence-operator:3.2.8</code>として使用できます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_coherence_operator_installation"><span class="merged" id="all.1Tb5TG.1" title="原文 : Coherence Operator Installation">Coherence Operatorインストール</span></h2>
<div class="section">

<h3 id="_prerequisites"><span class="merged" id="all.2LZvWc.1"  title="原文:: Prerequisites">前提条件</span></h3>
<div class="section">
<p><span class="merged" id="all.G9aDD" title="原文 : The prerequisites apply to all installation methods.">前提条件は、すべてのインストール・メソッドに適用されます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3cxx4I" title="原文 : Access to Oracle Coherence Operator images.">Oracle Coherenceオペレータ・イメージにアクセスします。</span></p>

</li>
<li>
<p><span class="merged" id="all.1br2M3.spl1" title="原文 : Access to a Kubernetes v1.18.0+ cluster.">Kubernetes v1.18.0+クラスタにアクセスします。</span> <span class="merged" id="all.1br2M3.spl2" title="原文 : The Operator test pipeline is run using Kubernetes versions v1.18 upto v1.24">オペレータ・テスト・パイプラインは、Kubernetesバージョンv1.18を使用してv1.24まで実行されます</span> </p>

</li>
<li>
<p><span class="merged" id="all.1olm7F.spl1" title="原文 : A Coherence application image using Coherence version 12.2.1.3 or later.">Coherenceバージョン12.2.1.3以降を使用するCoherenceアプリケーション・イメージ。</span> <span class="merged" id="all.1olm7F.spl2" title="原文 : Note that some functionality (e.g. metrics) is only available in Coherence 12.2.1.4 and later.">一部の機能(例、メトリクス)は、Coherence 12.2.1.4以降でのみ使用できます。</span> </p>

</li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3RVmWs.spl1" title="原文 : ARM Support: As of version 3.2.0, the Coherence Operator is build as a multi-architecture image that supports running in Kubernetes on both Linux/amd64 and Linux/arm64.">ARMサポート: バージョン3.2.0では、Coherence Operatorは、Linux/amd64とLinux/arm64の両方でKubernetesでの実行をサポートする複数アーキテクチャ・イメージとしてビルドされます。</span> <span class="merged" id="all.3RVmWs.spl2" title="原文 : The prerequisite is that the Coherence application image used has been built to support ARM.">前提条件として、使用されるCoherenceアプリケーション・イメージがARMをサポートするようにビルドされています。</span> </p>
</div>
<p><span class="merged" id="all.3E8ipL" title="原文 : There are a number of ways to install the Coherence Operator documented below:">次に示すCoherence Operatorをインストールする方法はいくつかあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.Ck2Yr" title="原文 : Simple installation using Kubectl"><router-link @click.native="this.scrollFix('#manifest')" to="#manifest">Kubectlを使用したシンプルなインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.28yMoG" title="原文 : Install the Helm chart"><router-link @click.native="this.scrollFix('#helm')" to="#helm">Helmチャートのインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4Gho1H" title="原文 : Kubectl with Kustomize"><router-link @click.native="this.scrollFix('#kubectl')" to="#kubectl">KubectlとKustomize</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.48YUjU" title="原文 : VMWare Tanzu Package (kapp-controller)"><router-link @click.native="this.scrollFix('#tanzu')" to="#tanzu">VMWare Tanzuパッケージ(kapp-controller)</router-link></span></p>

</li>
</ul>
</div>

<h3 id="_high_availability"><span class="merged" id="all.ZIA7x"  title="原文:: High Availability">高可用性</span></h3>
<div class="section">
<p><span class="merged" id="all.BEmRf.spl1" title="原文 : The Coherence Operator runs in HA mode by default.">Coherence Operatorは、デフォルトでHAモードで実行されます。</span> <span class="merged" id="all.BEmRf.spl2" title="原文 : The Deployment created by the installation will have a replica count of 3.">インストールによって作成された<code>Deployment</code>のレプリカ数は3です。</span> <span class="merged" id="all.BEmRf.spl3" title="原文 : In reduced capacity Kubernetes clusters, for example, local laptop development and test, the replica count can be reduced.">ローカル・ラップトップの開発やテストなど、容量の削減Kubernetesクラスタでは、レプリカ数を減らすことができます。</span> <span class="merged" id="all.BEmRf.spl4" title="原文 : It is recommended to leave the default of 3 for production environments.">本番環境では、デフォルトの3のままにすることをお薦めします。</span> <span class="merged" id="all.BEmRf.spl5" title="原文 : Instructions on how to change the replica count for the different install methods are included below.">異なるインストール・メソッドのレプリカ数を変更するメソッドの手順を次に示します。</span> </p>

<p><span class="merged" id="all.17ZQAu.spl1" title="原文 : The Coherence Operator runs a REST server that the Coherence cluster members will query to discover the site and rack names that should be used by Coherence.">Coherence Operatorは、Coherenceクラスタ・メンバーがクエリーして、Coherenceで使用されるサイト名とラック名を検出するRESTサーバーを実行します。</span> <span class="merged" id="all.17ZQAu.spl2" title="原文 : If the Coherence Operator is not running when a Coherence Pod starts, then the Coherence member in that Pod will be unable to properly configure its site and rack names, possibly leading to data distribution that is not safely distributed over sites.">Coherenceポッドの起動時にCoherence Operatorが実行されていない場合、そのポッドのCoherenceメンバーはサイト名とラック名を正しく構成できず、サイト間で安全に分散されないデータ分散につながる可能性があります。</span> <span class="merged" id="all.17ZQAu.spl3" title="原文 : In production, and in Kubernetes clusters that are spread over multiple availability zones and failure domains, it is important to run the Operator in HA mode.">本番では、複数の可用性ゾーンおよび障害ドメインに分散しているKubernetesクラスタでは、オペレータをHAモードで実行することが重要です。</span> </p>

<p><span class="merged" id="all.3mugzJ.spl1" title="原文 : The Operator yaml files and Helm chart include a default Pod scheduling configuration that uses anti-affinity to distribute the three replicas onto nodes that have different topology.kubernetes.io/zone labels.">オペレータyamlファイルおよびHelmチャートには、アンチ・アフィニティを使用して、異なる<code>topology.kubernetes.io/zone</code>ラベルを持つノードに3つのレプリカを分散するデフォルトのポッド・スケジューリング構成が含まれています。</span> <span class="merged" id="all.3mugzJ.spl2" title="原文 : This label is a standard Kubernetes label used to describe the zone the node is running in, and is typically applied by Kubernetes cloud vendors.">このラベルは、ノードが実行されているゾーンを記述するために使用される標準のKubernetesラベルで、通常はKubernetesクラウド・ベンダーによって適用されます。</span> </p>

</div>

<h3 id="_notes"><span class="merged" id="all.3Wy1iS"  title="原文:: Notes">ノート</span></h3>
<div class="section">
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3ph3bL.spl1" title="原文 : Installing the Coherence Operator using the methods below will create a number of ClusterRole RBAC resources.">次のメソッドを使用してCoherence Operatorをインストールすると、多数の<code>ClusterRole</code> RBACリソースが作成されます。</span> <span class="merged" id="all.3ph3bL.spl2" title="原文 : Some corporate security policies do not like to give cluster wide roles to third-party products.">一部の企業セキュリティ・ポリシーでは、サード・パーティ製品にクラスタ全体のロールを与えることは好ましくありません。</span> <span class="merged" id="all.3ph3bL.spl3" title="原文 : To help in this situation the operator can be installed without cluster roles, but with caveats (see the RBAC documentation) for more details.">この状況では、クラスタ・ロールなしでオペレータをインストールできますが、詳細は注意事項(<router-link to="/docs/installation/09_RBAC">RBAC</router-link>のドキュメントを参照)を参照してください。</span> </p>
</div>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.szuas.spl1" title="原文 : OpenShift - the Coherence Operator works without modification on OpenShift, but some versions of the Coherence images will not work out of the box.">OpenShift - Coherence OperatorはOpenShiftで変更せずに機能しますが、一部のバージョンのCoherenceイメージはボックスからは機能しません。</span> <span class="merged" id="all.szuas.spl2" title="原文 : See the OpensShift section of the documentation that explains how to run Coherence clusters with the Operator on OpenShift.">OpenShiftのオペレータを使用してCoherenceクラスタを実行する方法を説明するドキュメントの<router-link to="/docs/installation/06_openshift">OpensShift</router-link>セクションを参照してください。</span> </p>
</div>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1KCibn.spl1" title="原文 : Whilst Coherence works out of the box on many Kubernetes installations, some Kubernetes installations may configure iptables in a way that causes Coherence to fail to create clusters.">Coherenceが多くのKubernetesインストールですぐに機能しなくなる一方、一部のKubernetesインストールでは、Coherenceがクラスタの作成に失敗するような方法でiptablesを構成できます。</span> <span class="merged" id="all.1KCibn.spl2" title="原文 : See the O/S Network Configuration section of the documentation for more details if you have well-known-address issues when Pods attempt to form a cluster.">Podsがクラスタを形成しようとしたときに既知のアドレスの問題がある場合の詳細は、ドキュメントの<router-link to="/docs/installation/08_networking">「O/Sネットワーク構成」</router-link>セクションを参照してください。</span> </p>
</div>
</div>
</div>

<h2 id="_coherence_operator_images"><span class="merged" id="all.3laiyk" title="原文 : Coherence Operator Images">Coherence Operatorイメージ</span></h2>
<div class="section">
<p><span class="merged" id="all.E2qRz" title="原文 : The Coherence Operator uses a single images, the Operator also runs as an init-container in the Coherence cluster Pods.">Coherence Operatorでは単一のイメージが使用され、OperatorはCoherenceクラスタ・ポッドのinitコンテナとしても実行されます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3AgJtv" title="原文 : ${operator.image} - The Operator image."><code>${operator.image}</code> - オペレータ・イメージ。</span></p>

</li>
</ul>
<p><span class="merged" id="all.BRwc8" title="原文 : If no image is specified in the Coherence yaml, then the default Coherence image will also be used,"><code>Coherence</code> yamlにイメージが指定されていない場合、デフォルトのCoherenceイメージも使用されます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.8b6HL" title="原文 : ${coherence.image} - The default Coherence image."><code>${coherence.image}</code> - デフォルトのCoherenceイメージ。</span></p>

</li>
</ul>
<p><span class="merged" id="all.1VDzOA.spl1" title="原文 : If using a private image registry then these images will all need to be pushed to that registry for the Operator to work.">プライベート・イメージ・レジストリを使用している場合、オペレータが機能するには、これらのイメージをすべてそのレジストリにプッシュする必要があります。</span> <span class="merged" id="all.1VDzOA.spl2" title="原文 : The default Coherence image may be omitted if all Coherence applications will use custom Coherence images.">すべてのCoherenceアプリケーションがカスタムCoherenceイメージを使用する場合、デフォルトのCoherenceイメージは省略できます。</span> </p>

</div>

<h2 id="manifest"><span class="merged" id="all.4Dp4iH" title="原文 : Default Install with Kubectl">Kubectlでのデフォルト・インストール</span></h2>
<div class="section">
<p><span class="merged" id="all.1v0YpD.1" title="原文 : If you want the default Coherence Operator installation then the simplest solution is use kubectl to apply the manifests from the Operator release.">デフォルトのCoherence Operatorインストールが必要な場合は、最も単純なソリューションは<code>kubectl</code>を使用して、Operatorリリースからのマニフェストを適用します。</span></p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.2.8/coherence-operator.yaml</markup>

<p><span class="merged" id="all.2vyxRX.1.spl1" title="原文 : This will create a namespace called coherence and install the Operator into it along with all the required ClusterRole and RoleBinding resources.">これにより、<code>coherence</code>というネームスペースが作成され、必要なすべての<code>ClusterRole</code>および<code>RoleBinding</code>リソースとともにオペレータがインストールされます。</span> <span class="merged" id="all.2vyxRX.1.spl2" title="原文 : The coherence namespace can be changed by downloading and editing the yaml file."><code>coherence</code>ネームスペースは、yamlファイルをダウンロードおよび編集することによって変更できます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.Ipng.1.spl1" title="原文 : Because the coherence-operator.yaml manifest also creates the namespace, the corresponding kubectl delete command will remove the namespace and everything deployed to it!"><code>coherence-operator.yaml</code>マニフェストではネームスペースも作成されるため、対応する<code>kubectl delete</code>コマンドは<em>「ネームスペースおよびそれにデプロイされたすべてのネームスペースを削除」</em>になります。</span> <span class="merged" id="all.Ipng.1.spl2" title="原文 : If you do not want this behaviour you should edit the coherence-operator.yaml to remove the namespace section from the start of the file.">この動作を行わない場合は、<code>coherence-operator.yaml</code>を編集して、ファイルの先頭からネームスペース・セクションを削除する必要があります。</span> </p>
</div>
<p><span class="merged" id="all.4ZBpBq" title="原文 : Instead of using a hard coded version in the command above you can find the latest Operator version using curl:">前述のコマンドでハードコードされたバージョンを使用するかわりに、<code>curl</code>を使用して最新のオペレータ・バージョンを検索できます:</span></p>

<markup
lang="bash"

>export VERSION=$(curl -s \
  https://api.github.com/repos/oracle/coherence-operator/releases/latest \
  | grep '"name": "v' \
  | cut -d '"' -f 4 \
  | cut -b 2-10)</markup>

<p><span class="merged" id="all.2HFASk" title="原文 : Then download with:">次でダウンロード:</span></p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/${VERSION}/coherence-operator.yaml</markup>


<h3 id="_change_the_operator_replica_count"><span class="merged" id="all.1w2ScV" title="原文 : Change the Operator Replica Count">オペレータ・レプリカ数の変更</span></h3>
<div class="section">
<p><span class="merged" id="all.2SLjj8" title="原文 : When installing with single manifest yaml file, the replica count can be changed by editing the yaml file itself to change the occurrence of replicas: 3 in the manifest yaml to replicas: 1">単一のマニフェストyamlファイルでインストールする場合、マニフェストyaml内の<code>replicas: 3</code>の出現を<code>replicas: 1</code>に変更するようにyamlファイル自体を編集することによって、レプリカ・カウントを変更できます</span></p>

<p><span class="merged" id="all.K7Kp1" title="原文 : For example, this could be done using sed">たとえば、<code>sed</code>を使用してこれを実行できます</span></p>

<markup
lang="bash"

>sed -i -e 's/replicas: 3/replicas: 1/g' coherence-operator.yaml</markup>

<p><span class="merged" id="all.cP0pn" title="原文 : Or on MacOS, where sed is slightly different:">または、MacOSで、<code>sed</code>は少し異なります:</span></p>

<markup
lang="bash"

>sed -i '' -e 's/replicas: 3/replicas: 1/g' coherence-operator.yaml</markup>

</div>
</div>

<h2 id="_installing_with_helm"><span class="merged" id="all.1SBcfm" title="原文 : Installing With Helm">Helmを使用したインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.3fBKC6.spl1" title="原文 : For more flexibility but the simplest way to install the Coherence Operator is to use the Helm chart.">柔軟性を高めるために、Coherence Operatorをインストールする最も簡単な方法は、Helmチャートを使用することです。</span> <span class="merged" id="all.3fBKC6.spl2" title="原文 : This ensures that all the correct resources will be created in Kubernetes.">これにより、すべての正しいリソースがKubernetesに作成されます。</span> </p>


<h3 id="helm"><span class="merged" id="all.2LiYhP" title="原文 : Add the Coherence Helm Repository">Coherence Helmリポジトリの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.34cW7K" title="原文 : Add the coherence helm repository using the following commands:">次のコマンドを使用して、<code>coherence</code> helmリポジトリを追加します:</span></p>

<markup
lang="bash"

>helm repo add coherence https://oracle.github.io/coherence-operator/charts

helm repo update</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.bLbzF.spl1" title="原文 : To avoid confusion, the URL https://oracle.github.io/coherence-operator/charts is a Helm repo, it is not a website you open in a browser.">混乱を避けるために、URL <code><a href="https://oracle.github.io/coherence-operator/charts" id="" target="_blank" >https://oracle.github.io/coherence-operator/charts</a></code>はHelmリポジトリであり、ブラウザで開くwebサイトではありません。</span> <span class="merged" id="all.bLbzF.spl2" title="原文 : You may think we shouldn&rsquo;t have to say this, but you&rsquo;d be surprised.">知らない方のために。</span> </p>
</div>
</div>

<h3 id="_install_the_coherence_operator_helm_chart"><span class="merged" id="all.4IuD5z.1" title="原文 : Install the Coherence Operator Helm chart">Coherence Operator Helmチャートのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.tJHr4" title="原文 : Once the Coherence Helm repo has been configured the Coherence Operator can be installed using a normal Helm 3 install command:">Coherence Helmリポジトリが構成されると、通常のHelm 3インストール・コマンドを使用してCoherence Operatorをインストールできます:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \      <span class="conum" data-value="1" />
    coherence \                    <span class="conum" data-value="2" />
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3sabbS" title="原文 : where &lt;namespace&gt; is the namespace that the Coherence Operator will be installed into."><code>&lt;namespace></code>は、Coherence Operatorがインストールされるネームスペースです。</span></li>
<li data-value="2"><span class="merged" id="all.253KRR" title="原文 : coherence is the name of this Helm installation."><code>coherence</code>は、このHelmインストールの名前です。</span></li>
</ul>
</div>

<h3 id="_change_the_operator_replica_count_2"><span class="merged" id="all.1w2ScV.1" title="原文 : Change the Operator Replica Count">オペレータ・レプリカ数の変更</span></h3>
<div class="section">
<p><span class="merged" id="all.1hJJIo" title="原文 : To change the replica count when installing the Operator using Helm, the replicas value can be set.">Helmを使用してオペレータをインストールするときにレプリカ数を変更するには、<code>replicas</code>値を設定できます。</span></p>

<p><span class="merged" id="all.3BtSTW" title="原文 : For example, to change the replica count from 3 to 1, the --set replicas=1 option can be used.">たとえば、レプリカ数を3から1に変更するには、<code>--set replicas=1</code>オプションを使用できます。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set replicas=1
    coherence \
    coherence/coherence-operator</markup>

</div>

<h3 id="_run_the_operator_as_a_non_root_user"><span class="merged" id="all.44sbPA" title="原文 : Run the Operator as a Non-Root User">ルート以外のユーザーとしてのオペレータの実行</span></h3>
<div class="section">
<p><span class="merged" id="all.4aVdMx" title="原文 : The Operator container can be configured with a securityContext so that it runs as a non-root user.">オペレータ・コンテナは、root以外のユーザーとして実行されるように<code>securityContext</code>で構成できます。</span></p>

<p><span class="merged" id="all.2uqFQU" title="原文 : This can be done using a values file:">これは、値ファイルを使用して実行できます:</span></p>

<markup
lang="yaml"
title="security-values.yaml"
>securityContext:
  runAsNonRoot: true
  runAsUser: 1000</markup>

<p><span class="merged" id="all.3Mljgx" title="原文 : Then the security-values.yaml values file above can be used in the Helm install command.">次に、前述の<code>security-values.yaml</code>値ファイルをHelmインストール・コマンドで使用できます。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --values security-values.yaml \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.3Kmjh0" title="原文 : Alternatively, the securityContext values can be set on the command line as --set parameters:">または、<code>securityContext</code>値をコマンドラインで<code>--set</code>パラメータとして設定できます:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set securityContext.runAsNonRoot=true \
    --set securityContext.runAsUser=1000 \
    coherence \
    coherence/coherence-operator</markup>

</div>

<h3 id="_uninstall_the_coherence_operator_helm_chart"><span class="merged" id="all.xWyRu" title="原文 : Uninstall the Coherence Operator Helm chart">Coherence Operator Helmチャートをアンインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.4Kyu3l" title="原文 : To uninstall the operator:">オペレータをアンインストールするには:</span></p>

<markup
lang="bash"

>helm delete coherence-operator --namespace &lt;namespace&gt;</markup>

</div>
</div>

<h2 id="_operator_scope"><span class="merged" id="all.2YIaHI" title="原文 : Operator Scope">オペレータ・スコープ</span></h2>
<div class="section">
<p><span class="merged" id="all.1SB65k.spl1" title="原文 : The recommended way to install the Coherence Operator is to install a single instance of the operator into a namespace and where it will then control Coherence resources in all namespaces across the Kubernetes cluster.">Coherence Operatorをインストールするには、オペレータの単一インスタンスをネームスペースにインストールし、Kubernetesクラスタのすべてのネームスペースの<code>Coherence</code>リソースを制御することをお薦めします。</span> <span class="merged" id="all.1SB65k.spl2" title="原文 : Alternatively it may be configured to watch a sub-set of namespaces by setting the WATCH_NAMESPACE environment variable.">または、<code>WATCH_NAMESPACE</code>環境変数を設定して、ネームスペースのサブセットを監視するように構成できます。</span> <span class="merged" id="all.1SB65k.spl3" title="原文 : The watch namespace(s) does not have to include the installation namespace.">ウォッチ・ネームスペースには、インストール・ネームスペースを含める必要はありません。</span> </p>

<p><span class="merged" id="all.2D8r8e.spl1" title="原文 : In theory, it is possible to install multiple instances of the Coherence Operator into different namespaces, where each instances monitors a different set of namespaces.">理論的には、Coherence Operatorの複数のインスタンスを様々なネームスペースにインストールでき、各インスタンスは異なるネームスペース・セットをモニターします。</span> <span class="merged" id="all.2D8r8e.spl2" title="原文 : There are a number of potential issues with this approach, so it is not recommended.">このアプローチには多くの潜在的な問題があるため、推奨されません。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.30PLC2.spl1" title="原文 : Only one CRD can be installed - Different releases of the Operator may use slightly different CRD versions, for example a new version may introduce extra fields not in the previous version.">1つのCRDのみをインストールできます - オペレータのリリースによって、若干異なるCRDバージョンが使用されることがあります。たとえば、新しいバージョンでは、前のバージョン以外の追加フィールドが導入される可能性があります。</span> <span class="merged" id="all.30PLC2.spl2" title="原文 : As the CRD version is v1 there is no guarantee which CRD version has actually installed, which could lead to subtle issues.">CRDバージョンは<code>v1</code>であるため、どのCRDバージョンが実際にインストールされているのかは保証されません。これにより、問題が生じる可能性があります。</span> </p>

</li>
<li>
<p><span class="merged" id="all.RkRmn.spl1" title="原文 : The operator creates and installs defaulting and validating web-hooks.">オペレータは、webフックのデフォルト設定および検証を作成およびインストールします。</span> <span class="merged" id="all.RkRmn.spl2" title="原文 : A web-hook is associated to a CRD resource so installing multiple web-hooks for the same resource may lead to issues.">webフックはCRDリソースに関連付けられているため、同じリソースに複数のWebフックをインストールすると問題が発生する可能性があります。</span> <span class="merged" id="all.RkRmn.spl3" title="原文 : If an operator is uninstalled, but the web-hook configuration remains, then Kubernetes will not accept modifications to resources of that type as it will be unable to contact the web-hook.">オペレータがアンインストールされ、webフック構成が残っている場合、KubernetesはWebフックに接続できないため、そのタイプのリソースに対する変更を受け入れません。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.3e8B11" title="原文 : To set the watch namespaces when installing with helm set the watchNamespaces value, for example:">helmでインストールするときにウォッチ・ネームスペースを設定するには、<code>watchNamespaces</code>値を設定します。次に例を示します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set watchNamespaces=payments,catalog,customers <span class="conum" data-value="1" />
    coherence-operator \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2XUFDk" title="原文 : The payments, catalog and customers namespaces will be watched by the Operator."><code>payments</code>、<code>catalog</code>および<code>customers</code>ネームスペースは、オペレータによって監視されます。</span></li>
</ul>
</div>

<h2 id="_operator_image"><span class="merged" id="all.1RfYmi" title="原文 : Operator Image">オペレータ・イメージ</span></h2>
<div class="section">
<p><span class="merged" id="all.4IFHL7.spl1" title="原文 : The Helm chart uses a default registry to pull the Operator image from.">Helmチャートでは、デフォルトのレジストリを使用して、オペレータ・イメージをプルします。</span> <span class="merged" id="all.4IFHL7.spl2" title="原文 : If the image needs to be pulled from a different location (for example an internal registry) then the image field in the values file can be set, for example:">イメージを別のロケーション(内部レジストリなど)からプルする必要がある場合は、値ファイルの<code>image</code>フィールドを設定できます。次に例を示します:</span> </p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set image=images.com/coherence-operator:0.1.2 <span class="conum" data-value="1" />
    coherence-operator \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.40Kc7m" title="原文 : The image used to run the Operator will be images.com/coherence-operator:0.1.2.">オペレータの実行に使用されるイメージは、<code>images.com/coherence-operator:0.1.2</code>になります。</span></li>
</ul>

<h3 id="_image_pull_secrets"><span class="merged" id="all.MUXab.1" title="原文 : Image Pull Secrets">イメージ・プル・シークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.1eXQf4.spl1" title="原文 : If the image is to be pulled from a secure repository that requires credentials then the image pull secrets can be specified.">資格証明を必要とするセキュアなリポジトリからイメージをプルする場合は、イメージ・プル・シークレットを指定できます。</span> <span class="merged" id="all.1eXQf4.spl2" title="原文 : See the Kubernetes documentation on Pulling from a Private Registry."><a href="https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/" id="" target="_blank" >「プライベート・レジストリからのプル」</a>のKubernetesドキュメントを参照してください。</span> </p>


<h4 id="_add_pull_secrets_using_a_values_file"><span class="merged" id="all.4FZ6dN" title="原文 : Add Pull Secrets Using a Values File">値ファイルを使用したプル・シークレットの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.1RwZcr" title="原文 : Create a values file that specifies the secrets, for example the private-repo-values.yaml file below:">次の<code>private-repo-values.yaml</code>ファイルなど、シークレットを指定する値ファイルを作成します:</span></p>

<markup
lang="yaml"
title="private-repo-values.yaml"
>imagePullSecrets:
- name: registry-secrets</markup>

<p><span class="merged" id="all.4XkK8C" title="原文 : Now use that file in the Helm install command:">次に、Helm installコマンドでそのファイルを使用します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    -f private-repo-values.yaml <span class="conum" data-value="1" />
    coherence-operator \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.17BX2K" title="原文 : the private-repo-values.yaml values fle will be used by Helm to inject the settings into the Operator deployment"><code>private-repo-values.yaml</code>値fleは、Helmがオペレータ・デプロイメントに設定をインジェクトするために使用されます</span></li>
</ul>
</div>

<h4 id="_add_pull_secrets_using_set"><span class="merged" id="all.210nlY" title="原文 : Add Pull Secrets Using --set">--setを使用したプル・シークレットの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.2Rjtfu" title="原文 : Although the imagePullSecrets field in the values file is an array of name to value pairs it is possible to set these values with the normal Helm --set parameter.">値ファイルの<code>imagePullSecrets</code>フィールドは、値ペアに対する<code>name</code>の配列ですが、これらの値を通常のHelm <code>--set</code>パラメータで設定できます。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set imagePullSecrets[0].name=registry-secrets <span class="conum" data-value="1" />
    coherence-operator \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2GksBu" title="原文 : this creates the same imagePullSecrets as the values file above.">これにより、前述の値ファイルと同じimagePullSecretsが作成されます。</span></li>
</ul>
</div>
</div>
</div>

<h2 id="kubectl"><span class="merged" id="all.g4cZe" title="原文 : Install with Kubectl and Kustomize">KubectlおよびKustomizeでインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.4duetQ" title="原文 : If you want to use yaml directly to install the operator, with something like kubectl, you can use the manifest files published with the GitHub release at this link: 3.2.8 Manifests">yamlを直接使用してオペレータをインストールする場合は、<code>kubectl</code>のように、このリンクでGitHubリリースで公開されたマニフェスト・ファイルを使用できます: <a href="https://github.com/oracle/coherence-operator/releases/download/v3.2.8/coherence-operator-manifests.tar.gz" id="" target="_blank" >3.2.8 マニフェスト</a></span></p>

<p><span class="merged" id="all.3iFoWt" title="原文 : These manifest files are for use with a tool called Kustomize, which is built into kubectl see the documentation here: https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/">これらのマニフェスト・ファイルは、<code>kubectl</code>に組み込まれたKustomizeと呼ばれるツールで使用します。ここにあるドキュメントを参照してください: <a href="https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/" id="" target="_blank" >https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/</a></span></p>

<p><span class="merged" id="all.qaDOg" title="原文 : Download the 3.2.8 Manifests from the release page and unpack the file, which should produce a directory called manifests with a structure like this:">リリース・ページから<a href="https://github.com/oracle/coherence-operator/releases/download/v3.2.8/coherence-operator-manifests.tar.gz" id="" target="_blank" >「3.2.8 マニフェスト」</a>をダウンロードし、ファイルを解凍します。これにより、次のような構造を持つ<code>manifests</code>というディレクトリが生成されます:</span></p>

<markup


>manifests
    default
        config.yaml
        kustomization.yaml
    manager
        kustomization.yaml
        manager.yaml
        service.yaml
    rbac
        coherence_editor_role.yaml
        coherence_viewer_role.yaml
        kustomization.yaml
        leader_election_role.yaml
        leader_election_role_binding.yaml
        role.yaml
        role_binding.yaml</markup>

<p><span class="merged" id="all.4cbMdu" title="原文 : There are two ways to use these manifest files, either install using kustomize or generate the yaml and manually install with kubectl.">これらのマニフェスト・ファイルを使用するには、<code>kustomize</code>を使用してインストールするか、yamlを生成し、<code>kubectl</code>を使用して手動でインストールする方法が2つあります。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.nBQpe" title="原文 : All the commands below are run from a console in the manifests/ directory from the extracted file above.">次のコマンドはすべて、前述の抽出ファイルの<code>manifests/</code>ディレクトリのコンソールから実行されます。</span></p>
</div>

<h3 id="_install_with_kustomize"><span class="merged" id="all.2DgR7T" title="原文 : Install with Kustomize">Kustomizeでのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.4Awmqj" title="原文 : If you have Kustomize installed (or can install it from https://github.com/kubernetes-sigs/kustomize) you can use Kustomize to configure the yaml and install.">Kustomizeをインストールしている場合(または<a href="https://github.com/kubernetes-sigs/kustomize" id="" target="_blank" >https://github.com/kubernetes-sigs/kustomize</a>からインストールできる場合)は、Kustomizeを使用してyamlを構成し、インストールできます。</span></p>


<h4 id="_change_the_operator_replica_count_3"><span class="merged" id="all.1w2ScV.2" title="原文 : Change the Operator Replica Count">オペレータ・レプリカ数の変更</span></h4>
<div class="section">
<p><span class="merged" id="all.ou9NB.spl1" title="原文 : To change the replica count using Kustomize a patch file needs to be applied.">Kustomizeを使用してレプリカ数を変更するには、パッチ・ファイルを適用する必要があります。</span> <span class="merged" id="all.ou9NB.spl2" title="原文 : The Operator manifests include a patch file, named manager/single-replica-patch.yaml, that changes the replica count from 3 to 1.">Operatorマニフェストには、レプリカ数を3から1に変更する<code>manager/single-replica-patch.yaml</code>という名前のパッチ・ファイルが含まれています。</span> <span class="merged" id="all.ou9NB.spl3" title="原文 : This patch can be applied with the following Kustomize command.">このパッチは、次のKustomizeコマンドで適用できます。</span> </p>

<markup
lang="bash"

>cd ./manager &amp;&amp; kustomize edit add patch \
  --kind Deployment --name controller-manager \
  --path single-replica-patch.yaml</markup>

</div>

<h4 id="_set_image_names"><span class="merged" id="all.KM6PA" title="原文 : Set Image Names">イメージ名の設定</span></h4>
<div class="section">
<p><span class="merged" id="all.49bQcp" title="原文 : If you need to use different iamge names from the defaults kustomize can be used to specify different names:">デフォルトとは異なるiamge名を使用する必要がある場合は、<code>kustomize</code>を使用して別の名前を指定できます:</span></p>

<p><span class="merged" id="all.s2gq7" title="原文 : Change the name of the Operator image by running the command below, changing the image name to the registry and image name that you are using for the Operator, for example if you have the images in a custom registry">次のコマンドを実行してOperatorイメージの名前を変更し、イメージ名をOperatorに使用するレジストリおよびイメージ名に変更します(カスタム・レジストリにイメージがある場合など)</span></p>

<markup
lang="bash"

>cd ./manager &amp;&amp; kustomize edit set image controller=myregistry/coherence-operator:3.2.8</markup>

<p><span class="merged" id="all.325mTV" title="原文 : Change the name of the Operator image by running the command below, changing the image name to the registry and image name that you are using for the Operator utilities image">次のコマンドを実行してOperatorイメージの名前を変更し、そのイメージ名を、Operatorユーティリティのイメージに使用するレジストリおよびイメージ名に変更</span></p>

<markup
lang="bash"

>cd ./manager &amp;&amp; kustomize edit add configmap env-vars --from-literal OPERATOR_IMAGE=myregistry/coherence-operator:3.2.8</markup>

<p><span class="merged" id="all.3AmH2f.spl1" title="原文 : Change the name of the default Coherence image.">デフォルトのCoherenceイメージの名前を変更します。</span> <span class="merged" id="all.3AmH2f.spl2" title="原文 : If you are always going to be deploying your own application images then this does not need to change.">独自のアプリケーション・イメージを常にデプロイする場合、これを変更する必要はありません。</span> </p>

<markup
lang="bash"

>cd ./manager &amp;&amp; $(GOBIN)/kustomize edit add configmap env-vars --from-literal COHERENCE_IMAGE=$(COHERENCE_IMAGE)</markup>

<p><span class="merged" id="all.1o8CEh" title="原文 : Set the namespace to install into, the example below sets the namespace to coherence-test:">インストールするネームスペースを設定します。次の例では、ネームスペースを<code>coherence-test</code>に設定します:</span></p>

<markup
lang="bash"

>cd ./default &amp;&amp; /kustomize edit set namespace coherence-test</markup>

</div>

<h4 id="_install"><span class="merged" id="all.46rSDN"  title="原文:: Install">インストール</span></h4>
<div class="section">
<p><span class="merged" id="all.1u9XQn.spl1" title="原文 : The Operator requires a Secret for its web-hook certificates.">オペレータは、webフック証明書に<code>Secret</code>が必要です。</span> <span class="merged" id="all.1u9XQn.spl2" title="原文 : This Secret needs to exist but can be empty.">この<code>Secret</code>は存在する必要がありますが、空にできます。</span> <span class="merged" id="all.1u9XQn.spl3" title="原文 : The Secret must be in the same namespace that the Operator will be deployed to."><code>Secret</code>は、オペレータのデプロイ先と同じネームスペースに存在する必要があります。</span> <span class="merged" id="all.1u9XQn.spl4" title="原文 : For example, if the Operator namespace is coherence-test, then the Secret can be created with this command:">たとえば、オペレータ・ネームスペースが<code>coherence-test</code>の場合、次のコマンドを使用して<code>Secret</code>を作成できます:</span> </p>

<markup
lang="bash"

>kubectl -n coherence-test create secret generic coherence-webhook-server-cert</markup>

<p><span class="merged" id="all.zekjR" title="原文 : The Operator can now be installed by running the following command from the manifests directory:"><code>manifests</code>ディレクトリから次のコマンドを実行して、オペレータをインストールできるようになりました:</span></p>

<markup
lang="bash"

>kustomize build ./default | kubectl apply -f -</markup>

</div>
</div>

<h3 id="_generate_yaml_install_with_kubectl"><span class="merged" id="all.2RQkSV" title="原文 : Generate Yaml - Install with Kubectl">Yamlを生成 - Kubectlでインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2PdPjI.spl1" title="原文 : Instead of using Kustomize to modify and install the Operator we can use kubectl to generate the yaml from the manifests."><code>kubectl</code>を使用してマニフェストからyamlを生成するには、Kustomizeを使用してオペレータを変更およびインストールするかわりに使用できます。</span> <span class="merged" id="all.2PdPjI.spl2" title="原文 : You can then edit this yaml and manually deploy it with kubectl.">その後、このyamlを編集し、<code>kubectl</code>を使用して手動でデプロイできます。</span> </p>

<p><span class="merged" id="all.1CFxDo" title="原文 : Run the following command from the manifests directory:"><code>manifests</code>ディレクトリから次のコマンドを実行します:</span></p>

<markup
lang="bash"

>kubectl create --dry-run -k default/ -o yaml &gt; operator.yaml</markup>

<p><span class="merged" id="all.Fq8xT.spl1" title="原文 : This will create a file in the manifests directory called operator.yaml that contains all the yaml required to install the Operator.">これにより、オペレータのインストールに必要なすべてのyamlを含む<code>operator.yaml</code>という<code>manifests</code>ディレクトリにファイルが作成されます。</span> <span class="merged" id="all.Fq8xT.spl2" title="原文 : You can then edit this yaml to change image names or add other settings.">その後、このyamlを編集してイメージ名を変更したり、他の設定を追加したりできます。</span> </p>

<p><span class="merged" id="all.1dWh3I" title="原文 : The Operator can be installed using the generated yaml.">オペレータは、生成されたyamlを使用してインストールできます。</span></p>

<p><span class="merged" id="all.4ftdmp" title="原文 : For example if the Operator is to be deployed to the coherence-test namespace:">たとえば、オペレータを<code>coherence-test</code>ネームスペースにデプロイする場合:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test create secret generic coherence-webhook-server-cert
kubectl -n coherence-test create -f operator.yaml</markup>

</div>
</div>

<h2 id="tanzu"><span class="merged" id="all.rVQEp" title="原文 : Install as a VMWare Tanzu Package (Carvel kapp-controller)">VMWare Tanzuパッケージとしてインストールする(Carvel kapp-controller)</span></h2>
<div class="section">
<p><span class="merged" id="all.pXaDI.spl1" title="原文 : If using VMWare Tanzu the Coherence Operator can be installed as a package."><a href="https://tanzucommunityedition.io" id="" target="_blank" >VMWare Tanzu</a>を使用する場合、Coherence Operatorをパッケージとしてインストールできます。</span> <span class="merged" id="all.pXaDI.spl2" title="原文 : Under the covers, Tanzu uses the Carvel tool set to deploy packages.">カバーでは、Tanzuは<a href="https://carvel.dev" id="" target="_blank" >Carvel</a>ツール・セットを使用してパッケージをデプロイします。</span> <span class="merged" id="all.pXaDI.spl3" title="原文 : The Carvel tools can be used outside Tanzu, so the Coherence Operator repo and package images could also be deployed using a standalone Carvel kapp-controller.">CarvelはTanzu外部で使用できるため、Coherence Operatorリポジトリおよびパッケージ・イメージは、スタンドアロンのCarvel <a href="https://carvel.dev/kapp-controller/" id="" target="_blank" >kapp-controller</a>を使用してデプロイすることもできます。</span> </p>

<p><span class="merged" id="all.1QjwLD" title="原文 : The Coherence Operator release published two images required to deploy the Operator as a Tanzu package.">Coherence Operatorリリースでは、OperatorをTanzuパッケージとしてデプロイするために必要な2つのイメージが公開されました。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.wsMyg" title="原文 : ghcr.io/oracle/coherence-operator-package:3.2.8 - the Coherence Operator package"><code>ghcr.io/oracle/coherence-operator-package:3.2.8</code> - Coherence Operatorパッケージ</span></p>

</li>
<li>
<p><span class="merged" id="all.3HDkpP" title="原文 : ghcr.io/oracle/coherence-operator-repo:3.2.8 - the Coherence Operator repository"><code>ghcr.io/oracle/coherence-operator-repo:3.2.8</code> - Coherence Operatorリポジトリ</span></p>

</li>
</ul>

<h3 id="_install_the_coherence_repository"><span class="merged" id="all.24VnWu" title="原文 : Install the Coherence Repository">Coherenceリポジトリをインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.4FL8kd.spl1" title="原文 : The first step to deploy the Coherence Operator package in Tanzu is to add the repository.">TanzuでCoherence Operatorパッケージをデプロイする最初のステップは、リポジトリを追加することです。</span> <span class="merged" id="all.4FL8kd.spl2" title="原文 : This can be done using the Tanzu CLI.">これは、Tanzu CLIを使用して実行できます。</span> </p>

<markup
lang="bash"

>tanzu package repository add coherence-repo \
    --url ghcr.io/oracle/coherence-operator-repo:3.2.8 \
    --namespace coherence \
    --create-namespace</markup>

<p><span class="merged" id="all.r5IJz" title="原文 : The installed repositories can be listed using the CLI:">インストールされたリポジトリは、CLIを使用して一覧表示できます:</span></p>

<markup
lang="bash"

>tanzu package repository list --namespace coherence</markup>

<p><span class="merged" id="all.3XKtX2" title="原文 : which should display something like the following">次のようなものを表示</span></p>

<markup
lang="bash"

>NAME            REPOSITORY                              TAG  STATUS               DETAILS
coherence-repo  ghcr.io/oracle/coherence-operator-repo  1h   Reconcile succeeded</markup>

<p><span class="merged" id="all.Gxtib" title="原文 : The available packages in the Coherence repository can also be displayed using the CLI">Coherenceリポジトリで使用可能なパッケージは、CLIを使用して表示することもできます</span></p>

<markup
lang="bash"

>tanzu package available list --namespace coherence</markup>

<p><span class="merged" id="all.338Pby" title="原文 : which should include the Operator package, coherence-operator.oracle.github.com something like the following"><code>coherence-operator.oracle.github.com</code>というオペレータ・パッケージを含める必要があります</span></p>

<markup
lang="bash"

>NAME                                  DISPLAY-NAME               SHORT-DESCRIPTION                                             LATEST-VERSION
coherence-operator.oracle.github.com  Oracle Coherence Operator  A Kubernetes operator for managing Oracle Coherence clusters  3.2.8</markup>

</div>

<h3 id="_install_the_coherence_operator_package"><span class="merged" id="all.4ddwvV" title="原文 : Install the Coherence Operator Package">Coherence Operatorパッケージのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.38JRZy" title="原文 : Once the Coherence Operator repository has been installed, the coherence-operator.oracle.github.com package can be installed, which will install the Coherence Operator itself.">Coherence Operatorリポジトリがインストールされると、<code>coherence-operator.oracle.github.com</code>パッケージをインストールでき、Coherence Operator自体がインストールされます。</span></p>

<markup
lang="bash"

>tanzu package install coherence \
    --package-name coherence-operator.oracle.github.com \
    --version 3.2.8 \
    --namespace coherence</markup>

<p><span class="merged" id="all.HoaXg" title="原文 : The Tanzu CLI will display the various steps it is going through to install the package and if all goes well, finally display Added installed package &apos;coherence&apos; The packages installed in the coherence namespace can be displayed using the CLI.">Tanzu CLIでは、パッケージのインストールに使用する様々なステップが表示され、すべてうまくいけば<code>Added installed package 'coherence'</code>が表示されます。<code>coherence</code>ネームスペースにインストールされたパッケージは、CLIを使用して表示できます。</span></p>

<markup
lang="bash"

>tanzu package installed list --namespace coherence</markup>

<p><span class="merged" id="all.1NCzuP" title="原文 : which should display the Coherence Operator package.">Coherence Operatorパッケージを表示します。</span></p>

<markup
lang="bash"

>NAME       PACKAGE-NAME                          PACKAGE-VERSION  STATUS
coherence  coherence-operator.oracle.github.com  3.2.8            Reconcile succeeded</markup>

<p><span class="merged" id="all.3WbWXb" title="原文 : The Operator is now installed and ready to mage Coherence clusters.">オペレータがインストールされ、Coherenceクラスタを形成する準備ができました。</span></p>

</div>
</div>
</doc-view>
