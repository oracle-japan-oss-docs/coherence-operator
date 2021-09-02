<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1Tb5TG" title="原文 : Coherence Operator Installation">Coherence Operatorのインストール</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2gKuFR" title="原文 : The Coherence Operator is available as a Docker image oracle/coherence-operator:3.2.1 that can easily be installed into a Kubernetes cluster.">Coherence Operatorは、Kubernetesクラスタに簡単にインストールできるDockerイメージ<code>oracle/coherence-operator:3.2.1</code>として使用できます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_coherence_operator_installation"><span class="merged" id="all.1Tb5TG.1" title="原文 : Coherence Operator Installation">Coherence Operatorのインストール</span></h2>
<div class="section">

<h3 id="_prerequisites"><span class="merged" id="all.2LZvWc.4"  title="原文:: Prerequisites">前提条件</span></h3>
<div class="section">
<p><span class="merged" id="all.G9aDD" title="原文 : The prerequisites apply to all installation methods.">前提条件はすべてのインストール・メソッドに適用されます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3cxx4I" title="原文 : Access to Oracle Coherence Operator images.">Oracle Coherenceオペレータ・イメージにアクセスします。</span></p>

</li>
<li>
<p><span class="merged" id="all.2s4OC3.spl1" title="原文 : Access to a Kubernetes v1.16.0+ cluster.">Kubernetes v1.16.0+クラスタにアクセスします。</span> <span class="merged" id="all.2s4OC3.spl2" title="原文 : The Operator test pipeline is run using Kubernetes versions v1.16 upto v1.21">オペレータ・テスト・パイプラインは、Kubernetesバージョンv1.16から1.21まで実行可能です。</span> </p>

</li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3RVmWs.spl1" title="原文 : ARM Support: As of version 3.2.0, the Coherence Operator is build as a multi-architecture image that supports running in Kubernetes on both Linux/amd64 and Linux/arm64.">ARMサポート: バージョン3.2.0では、Coherence Operatorは、Linux/amd64とLinux/arm64の両方でのKubernetesでの実行をサポートするマルチ・アーキテクチャ・イメージとして構築されます。</span> <span class="merged" id="all.3RVmWs.spl2" title="原文 : The prerequisite is that the Coherence application image used has been built to support ARM.">前提条件は、使用するCoherenceアプリケーション・イメージがARMをサポートするように構築されていることです。</span> </p>
</div>
<p><span class="merged" id="all.19HFNX" title="原文 : There are a few ways to install the Coherence Operator documented below:">Coherence Operatorをインストールするには、次に示すいくつかの方法があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.Ck2Yr" title="原文 : Simple installation using Kubectl"><router-link @click.native="this.scrollFix('#manifest')" to="#manifest">Kubectlを使用したシンプルなインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.28yMoG" title="原文 : Install the Helm chart"><router-link @click.native="this.scrollFix('#helm')" to="#helm">Helmチャートのインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4Gho1H" title="原文 : Kubectl with Kustomize"><router-link @click.native="this.scrollFix('#kubectl')" to="#kubectl">Kubectl with Kustomize</router-link></span></p>

</li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3Okwn0.spl1" title="原文 : Installing the Coherence Operator using the methods above will create a number of ClusterRole RBAC resources.">前述のメソッドを使用してCoherence Operatorをインストールすると、多数の<code>ClusterRole</code> RBACリソースが作成されます。</span> <span class="merged" id="all.3Okwn0.spl2" title="原文 : Some corporate security policies do not like to give cluster wide roles to third-party products.">企業セキュリティ・ポリシーの中には、サード・パーティ製品にクラスタ全体のロールを提供しないものもあります。</span> <span class="merged" id="all.3Okwn0.spl3" title="原文 : To help in this situation the operator can be installed without cluster roles, but with caveats (see the RBAC documentation) for more details.">この状況を支援するために、オペレータはクラスタ・ロールなしでインストールできますが、注意(<router-link to="/installation/09_RBAC">RBAC</router-link>ドキュメントを参照)して詳細を確認してください。</span> </p>
</div>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1IQrtq.spl1" title="原文 : OpenShift - the Coherence Operator works without modification on OpenShift, but some versions of the Coherence images will not work out of the box.">OpenShift - Coherence OperatorはOpenShiftで変更せずに動作しますが、一部のバージョンのCoherenceイメージはそのままでは動作しません。</span> <span class="merged" id="all.1IQrtq.spl2" title="原文 : See the OpensShift section of the documentation that explains how to run Coherence clusters with the Operator on OpenShift.">OpenShiftでオペレータを使用してCoherenceクラスタを実行する方法については、ドキュメントの<router-link to="/installation/06_openshift">OpensShift</router-link>セクションを参照してください。</span> </p>
</div>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2GGxkJ.spl1" title="原文 : Whilst Coherence works out of the box on many Kubernetes installations, some Kubernetes installations may configure iptables in a way that causes Coherence to fail to create clusters.">Coherenceは、多くのKubernetesインストールですぐに動作しますが、一部のKubernetesインストールでは、Coherenceでクラスタの作成に失敗するようにiptablesを構成できます。</span> <span class="merged" id="all.2GGxkJ.spl2" title="原文 : See the O/S Network Configuration section of the documentation for more details if you have well-known-address issues when Pods attempt to form a cluster.">ポッドがクラスタを形成しようとしたときの既知のアドレスの問題がある場合は、詳細については、ドキュメントの<router-link to="/installation/08_networking">「O/Sネットワーク構成」</router-link>セクションを参照してください。</span> </p>
</div>
<div class="admonition warning">
<p class="admonition-textlabel"><span class="merged" id="all.2dRYIU.1"  title="原文:: Warning">警告</span></p>
<p ><p><span class="merged" id="all.1lUQoE" title="原文 : Upgrading from version 3.1.0"><strong>バージョン3.1.0からのアップグレード</strong></span></p>

<p><span class="merged" id="all.4VYkd2.spl1" title="原文 : Due to a CRD incompatibility that was initially un-noticed in v3.1.0 we deprecated v3.1.0 and recommended that it not be used.">v3.1.0で最初に認識されないCRD非互換性のため、v3.1.0は非推奨となり、使用しないことをお薦めします。</span> <span class="merged" id="all.4VYkd2.spl2" title="原文 : If you did install v3.1.0 and are upgrading to the latest version you must manually uninstall the coherences.coherence.oracle.com CRD from your Kubernetes cluster before installing the new Operator version.">v3.1.0をインストールし、最新バージョンにアップグレードしている場合は、新しいOperatorバージョンをインストールする前に、Kubernetesクラスタから<code>coherences.coherence.oracle.com</code> CRDを手動でアンインストールする必要があります。</span> </p>

<markup
lang="bash"

>kubectl delete crd coherences.coherence.oracle.com</markup>

<p><span class="merged" id="all.319CDe" title="原文 : Note that the CRD name in the 3.1.0 CRD being uninstalled has a plural coherences for the first part of the name.">アンインストールされる3.1.0 CRDのCRD名には、名前の最初の部分に複数の<code>coherences</code>があります。</span></p>
</p>
</div>
</div>
</div>

<h2 id="manifest"><span class="merged" id="all.4Dp4iH" title="原文 : Default Install with Kubectl">Kubectlでのデフォルト・インストール</span></h2>
<div class="section">
<p><span class="merged" id="all.1v0YpD.1" title="原文 : If you want the default Coherence Operator installation then the simplest solution is use kubectl to apply the manifests from the Operator release.">デフォルトのCoherence Operatorインストールが必要な場合、最も単純な解決策は<code>kubectl</code>を使用して、オペレータ・リリースからのマニフェストを適用します。</span></p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.2.2/coherence-operator.yaml</markup>

<p><span class="merged" id="all.2vyxRX.1.spl1" title="原文 : This will create a namespace called coherence and install the Operator into it along with all the required ClusterRole and RoleBinding resources.">これにより、<code>coherence</code>というネームスペースが作成され、必要なすべての<code>ClusterRole</code>および<code>RoleBinding</code>リソースとともにオペレータがインストールされます。</span> <span class="merged" id="all.2vyxRX.1.spl2" title="原文 : The coherence namespace can be changed by downloading and editing the yaml file."><code>coherence</code>ネームスペースは、yamlファイルをダウンロードおよび編集することによって変更できます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.Ipng.1.spl1" title="原文 : Because the coherence-operator.yaml manifest also creates the namespace, the corresponding kubectl delete command will remove the namespace and everything deployed to it!"><code>coherence-operator.yaml</code>マニフェストもネームスペースを作成するため、対応する<code>kubectl delete</code>コマンドは<em>「ネームスペースとそれにデプロイされているすべてのものを削除」</em>します。</span> <span class="merged" id="all.Ipng.1.spl2" title="原文 : If you do not want this behaviour you should edit the coherence-operator.yaml to remove the namespace section from the start of the file.">この動作が不要な場合は、<code>coherence-operator.yaml</code>を編集して、ファイルの先頭からネームスペース・セクションを削除する必要があります。</span> </p>
</div>
<p><span class="merged" id="all.4ZBpBq" title="原文 : Instead of using a hard coded version in the command above you can find the latest Operator version using curl:">前述のコマンドでハードコード・バージョンを使用するかわりに、<code>curl</code>を使用して最新のオペレータ・バージョンを検索できます:</span></p>

<markup
lang="bash"

>export VERSION=$(curl -s \
  https://api.github.com/repos/oracle/coherence-operator/releases/latest \
  | grep '"name": "v' \
  | cut -d '"' -f 4 \
  | cut -b 2-10)</markup>

<p><span class="merged" id="all.2HFASk" title="原文 : Then download with:">その後、以下でダウンロードします:</span></p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/${VERSION}/coherence-operator.yaml</markup>

</div>

<h2 id="_installing_with_helm"><span class="merged" id="all.1SBcfm" title="原文 : Installing With Helm">Helmによるインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.3fBKC6.spl1" title="原文 : For more flexibility but the simplest way to install the Coherence Operator is to use the Helm chart.">柔軟性が増しますが、Coherence Operatorをインストールする最も簡単な方法は、Helmチャートを使用することです。</span> <span class="merged" id="all.3fBKC6.spl2" title="原文 : This ensures that all the correct resources will be created in Kubernetes.">これにより、すべての正しいリソースがKubernetesに作成されます。</span> </p>


<h3 id="helm"><span class="merged" id="all.2LiYhP" title="原文 : Add the Coherence Helm Repository">Coherence Helmリポジトリの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.34cW7K" title="原文 : Add the coherence helm repository using the following commands:">次のコマンドを使用して、<code>coherence</code> helmリポジトリを追加します:</span></p>

<markup
lang="bash"

>helm repo add coherence https://oracle.github.io/coherence-operator/charts

helm repo update</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1Gm9Vn.1.spl1" title="原文 : To avoid confusion, the URL https://oracle.github.io/coherence-operator/charts is a Helm repo, it is not a web site you open in a browser.">混乱を避けるため、URL <code><a href="https://oracle.github.io/coherence-operator/charts" id="" target="_blank" >https://oracle.github.io/coherence-operator/charts</a></code>はHelmリポジトリであり、ブラウザで開くwebサイトではありません。</span> <span class="merged" id="all.1Gm9Vn.1.spl2" title="原文 : You may think we shouldn&rsquo;t have to say this, but you&rsquo;d be surprised.">こんなこと言う必要はないと思うかもしれませんが。</span> </p>
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
<li data-value="1"><span class="merged" id="all.3sabbS" title="原文 : where &lt;namespace&gt; is the namespace that the Coherence Operator will be installed into."><code>&lt;namespace></code>は、Coherence Operatorをインストールするネームスペースです。</span></li>
<li data-value="2"><span class="merged" id="all.253KRR" title="原文 : coherence is the name of this Helm installation."><code>coherence</code>は、このHelmインストールの名前です。</span></li>
</ul>

<h4 id="_uninstall_the_coherence_operator_helm_chart"><span class="merged" id="all.xWyRu" title="原文 : Uninstall the Coherence Operator Helm chart">Coherence Operator Helmグラフのアンインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.4Kyu3l" title="原文 : To uninstall the operator:">オペレータをアンインストールするには:</span></p>

<markup
lang="bash"

>helm delete coherence-operator --namespace &lt;namespace&gt;</markup>

</div>
</div>
</div>

<h2 id="_operator_scope"><span class="merged" id="all.2YIaHI" title="原文 : Operator Scope">オペレータ・スコープ</span></h2>
<div class="section">
<p><span class="merged" id="all.1SB65k.spl1" title="原文 : The recommended way to install the Coherence Operator is to install a single instance of the operator into a namespace and where it will then control Coherence resources in all namespaces across the Kubernetes cluster.">Coherence Operatorをインストールする推奨の方法は、オペレータの1つのインスタンスをネームスペースにインストールし、そのインスタンスがKubernetesクラスタ全体のすべてのネームスペースの<code>Coherence</code>リソースを制御することです。</span> <span class="merged" id="all.1SB65k.spl2" title="原文 : Alternatively it may be configured to watch a sub-set of namespaces by setting the WATCH_NAMESPACE environment variable.">または、<code>WATCH_NAMESPACE</code>環境変数を設定してネームスペースのサブセットを監視するように構成できます。</span> <span class="merged" id="all.1SB65k.spl3" title="原文 : The watch namespace(s) does not have to include the installation namespace.">ウォッチ・ネイティブにはインストール・ネームスペースを含める必要はありません。</span> </p>

<p><span class="merged" id="all.2D8r8e.spl1" title="原文 : In theory, it is possible to install multiple instances of the Coherence Operator into different namespaces, where each instances monitors a different set of namespaces.">理論的には、Coherence Operatorの複数のインスタンスを異なるネームスペースにインストールでき、各インスタンスが異なるネームスペースのセットを監視します。</span> <span class="merged" id="all.2D8r8e.spl2" title="原文 : There are a number of potential issues with this approach, so it is not recommended.">このアプローチには潜在的な問題が数多くあるため、推奨されません。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.30PLC2.spl1" title="原文 : Only one CRD can be installed - Different releases of the Operator may use slightly different CRD versions, for example a new version may introduce extra fields not in the previous version.">CRDは1つのみインストールできます - オペレータの各リリースでは、CRDバージョンが若干異なる場合があります。たとえば、新しいバージョンでは、前のバージョンに含まれない追加のフィールドが導入される可能性があります。</span> <span class="merged" id="all.30PLC2.spl2" title="原文 : As the CRD version is v1 there is no guarantee which CRD version has actually installed, which could lead to subtle issues.">CRDバージョンが<code>v1</code>であるため、実際にどのCRDバージョンがインストールされているかは保証されず、微妙な問題が発生する可能性があります。</span> </p>

</li>
<li>
<p><span class="merged" id="all.RkRmn.spl1" title="原文 : The operator creates and installs defaulting and validating web-hooks.">オペレータは、webフックのデフォルト設定および検証を作成してインストールします。</span> <span class="merged" id="all.RkRmn.spl2" title="原文 : A web-hook is associated to a CRD resource so installing multiple web-hooks for the same resource may lead to issues.">webフックはCRDリソースに関連付けられているため、同じリソースに複数のWebフックをインストールすると問題が発生する可能性があります。</span> <span class="merged" id="all.RkRmn.spl3" title="原文 : If an operator is uninstalled, but the web-hook configuration remains, then Kubernetes will not accept modifications to resources of that type as it will be unable to contact the web-hook.">オペレータがアンインストールされてもwebフック構成が残っている場合、KubernetesはWebフックに接続できないため、そのタイプのリソースに対する変更を受け入れません。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.3e8B11" title="原文 : To set the watch namespaces when installing with helm set the watchNamespaces value, for example:">ヘルプとともにインストールするときにウォッチ・ネームスペースを設定するには、<code>watchNamespaces</code>値を設定します。次に例を示します:</span></p>

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
<p><span class="merged" id="all.4IFHL7.spl1" title="原文 : The Helm chart uses a default registry to pull the Operator image from.">Helmチャートでは、デフォルトのレジストリを使用してオペレータ・イメージをプルします。</span> <span class="merged" id="all.4IFHL7.spl2" title="原文 : If the image needs to be pulled from a different location (for example an internal registry) then the image field in the values file can be set, for example:">イメージを別のロケーション(内部レジストリなど)からプルする必要がある場合、値ファイルの<code>image</code>フィールドを設定できます。次に例を示します:</span> </p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set image=images.com/coherence-operator:0.1.2 <span class="conum" data-value="1" />
    coherence-operator \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.40Kc7m" title="原文 : The image used to run the Operator will be images.com/coherence-operator:0.1.2.">オペレータの実行に使用されるイメージは<code>images.com/coherence-operator:0.1.2</code>です。</span></li>
</ul>

<h3 id="_image_pull_secrets"><span class="merged" id="all.MUXab.1" title="原文 : Image Pull Secrets">イメージ・プル・シークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.1eXQf4.spl1" title="原文 : If the image is to be pulled from a secure repository that requires credentials then the image pull secrets can be specified.">資格証明を必要とするセキュア・リポジトリからイメージをプルする場合は、イメージ・プル・シークレットを指定できます。</span> <span class="merged" id="all.1eXQf4.spl2" title="原文 : See the Kubernetes documentation on Pulling from a Private Registry."><a href="https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/" id="" target="_blank" >「プライベート・レジストリからのプル」</a>のKubernetesドキュメントを参照してください。</span> </p>


<h4 id="_add_pull_secrets_using_a_values_file"><span class="merged" id="all.4FZ6dN" title="原文 : Add Pull Secrets Using a Values File">値ファイルを使用したプル・シークレットの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.1RwZcr" title="原文 : Create a values file that specifies the secrets, for example the private-repo-values.yaml file below:">シークレットを指定する値ファイルを作成します。たとえば、次の<code>private-repo-values.yaml</code>ファイルがあります:</span></p>

<markup
lang="yaml"
title="private-repo-values.yaml"
>imagePullSecrets:
- name: registry-secrets</markup>

<p><span class="merged" id="all.4XkK8C" title="原文 : Now use that file in the Helm install command:">Helmインストール・コマンドでそのファイルを使用します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    -f private-repo-values.yaml <span class="conum" data-value="1" />
    coherence-operator \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.17BX2K" title="原文 : the private-repo-values.yaml values fle will be used by Helm to inject the settings into the Operator deployment"><code>private-repo-values.yaml</code>値がHelmによって使用され、設定がオペレータ・デプロイメントにインジェクトされます</span></li>
</ul>
</div>

<h4 id="_add_pull_secrets_using_set"><span class="merged" id="all.1a29iS" title="原文 : Add Pull Secrets Using --Set">--Setを使用したプル・シークレットの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.2Rjtfu" title="原文 : Although the imagePullSecrets field in the values file is an array of name to value pairs it is possible to set these values with the normal Helm --set parameter.">値ファイルの<code>imagePullSecrets</code>フィールドは<code>name</code>と値のペアの配列ですが、これらの値を通常のHelm <code>--set</code>パラメータで設定できます。</span></p>

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

<h2 id="kubectl"><span class="merged" id="all.g4cZe" title="原文 : Install with Kubectl and Kustomize">KubectlとKustomizeでインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.3cgz9c" title="原文 : If you want to use yaml directly to install the operator, with something like kubectl, you can use the manifest files published with the GitHub release at this link: 3.2.2 Manifests">yamlを使用してオペレータを直接インストールする場合、<code>kubectl</code>のようなものであれば、このリンクでGitHubリリースで公開されているマニフェスト・ファイルを使用できます: <a href="https://github.com/oracle/coherence-operator/releases/download/v3.2.2/coherence-operator-manifests.tar.gz" id="" target="_blank" >3.2.2 マニフェスト</a></span></p>

<p><span class="merged" id="all.3iFoWt" title="原文 : These manifest files are for use with a tool called Kustomize, which is built into kubectl see the documentation here: https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/">これらのマニフェスト・ファイルは、<code>kubectl</code>に組み込まれているKustomizeツールで使用され、このドキュメントはこちらを参照してください : <a href="https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/" id="" target="_blank" >https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/</a></span></p>

<p><span class="merged" id="all.1wMD9z" title="原文 : Download the 3.2.2 Manifests from the release page and unpack the file, which should produce a directory called manifests with a structure like this:">リリース・ページから<a href="https://github.com/oracle/coherence-operator/releases/download/v3.2.2/coherence-operator-manifests.tar.gz" id="" target="_blank" >「3.2.2 マニフェスト」</a>をダウンロードし、ファイルを解凍します。これにより、次のような構造を持つ<code>manifests</code>というディレクトリが生成されます:</span></p>

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

<p><span class="merged" id="all.4cbMdu" title="原文 : There are two ways to use these manifest files, either install using kustomize or generate the yaml and manually install with kubectl.">これらのマニフェスト・ファイルを使用するには、<code>kustomize</code>を使用してインストールするか、またはyamlを生成し、<code>kubectl</code>を使用して手動でインストールします。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.nBQpe" title="原文 : All the commands below are run from a console in the manifests/ directory from the extracted file above.">次のコマンドはすべて、前述の抽出ファイルから<code>manifests/</code>ディレクトリのコンソールから実行されます。</span></p>
</div>

<h3 id="_install_with_kustomize"><span class="merged" id="all.2DgR7T" title="原文 : Install with Kustomize">Kustomizeでインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.4Awmqj" title="原文 : If you have Kustomize installed (or can install it from https://github.com/kubernetes-sigs/kustomize) you can use Kustomize to configure the yaml and install.">Kustomizeをインストールしている場合(または<a href="https://github.com/kubernetes-sigs/kustomize" id="" target="_blank" >https://github.com/kubernetes-sigs/kustomize</a>からインストール可能)は、Kustomizeを使用してYamlの構成とインストールができます。</span></p>


<h4 id="_set_image_names"><span class="merged" id="all.KM6PA" title="原文 : Set Image Names">イメージ名の設定</span></h4>
<div class="section">
<p><span class="merged" id="all.49bQcp" title="原文 : If you need to use different iamge names from the defaults kustomize can be used to specify different names:">デフォルト<code>kustomize</code>とは異なるiamge名を使用する必要がある場合は、異なる名前を指定できます:</span></p>

<p><span class="merged" id="all.1YqnFj" title="原文 : Change the name of the Operator image by running the command below, changing the image name to the registry and image name that you are using for the Operator">次のコマンドを実行して、オペレータ・イメージの名前を変更し、イメージ名をオペレータに使用するレジストリおよびイメージ名に変更</span></p>

<markup
lang="bash"

>cd ./manager &amp;&amp; kustomize edit set image controller=container-registry.oracle.com/middleware/coherence-operator:3.2.2</markup>

<p><span class="merged" id="all.2bCBzy" title="原文 : Change the name of the Operator utilities image by running the command below, changing the image name to the registry and image name that you are using for the Operator utilities image">次のコマンドを実行して、オペレータ・ユーティリティのイメージの名前を変更し、イメージ名を、オペレータ・ユーティリティのイメージに使用するレジストリ名とイメージ名に変更</span></p>

<markup
lang="bash"

>cd ./manager &amp;&amp; kustomize edit add configmap env-vars --from-literal UTILS_IMAGE=container-registry.oracle.com/middleware/coherence-operator:3.2.2-utils</markup>

<p><span class="merged" id="all.3AmH2f.spl1" title="原文 : Change the name of the default Coherence image.">デフォルトのCoherenceイメージの名前を変更します。</span> <span class="merged" id="all.3AmH2f.spl2" title="原文 : If you are always going to be deploying your own application images then this does not need to change.">常に独自のアプリケーション・イメージをデプロイする場合、これを変更する必要はありません。</span> </p>

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
<p><span class="merged" id="all.1u9XQn.spl1" title="原文 : The Operator requires a Secret for its web-hook certificates.">オペレータは、webフック証明書に<code>Secret</code>が必要です。</span> <span class="merged" id="all.1u9XQn.spl2" title="原文 : This Secret needs to exist but can be empty.">この<code>Secret</code>は存在する必要がありますが、空にすることができます。</span> <span class="merged" id="all.1u9XQn.spl3" title="原文 : The Secret must be in the same namespace that the Operator will be deployed to."><code>Secret</code>は、オペレータをデプロイするネームスペースと同じである必要があります。</span> <span class="merged" id="all.1u9XQn.spl4" title="原文 : For example, if the Operator namespace is coherence-test, then the Secret can be created with this command:">たとえば、Operatorネームスペースが<code>coherence-test</code>の場合は、次のコマンドで<code>Secret</code>を作成できます:</span> </p>

<markup
lang="bash"

>kubectl -n coherence-test create secret generic coherence-webhook-server-cert</markup>

<p><span class="merged" id="all.zekjR" title="原文 : The Operator can now be installed by running the following command from the manifests directory:">オペレータは、<code>manifests</code>ディレクトリから次のコマンドを実行してインストールできるようになりました:</span></p>

<markup
lang="bash"

>kustomize build ./default | kubectl apply -f -</markup>

</div>
</div>

<h3 id="_generate_yaml_install_with_kubectl"><span class="merged" id="all.2RQkSV" title="原文 : Generate Yaml - Install with Kubectl">Yamlの生成 - Kubectlでインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2PdPjI.spl1" title="原文 : Instead of using Kustomize to modify and install the Operator we can use kubectl to generate the yaml from the manifests.">Kustomizeを使用してオペレータの変更およびインストールする代わりに、<code>kubectl</code>を使用してマニフェストからyamlを生成できます。</span> <span class="merged" id="all.2PdPjI.spl2" title="原文 : You can then edit this yaml and manually deploy it with kubectl.">その後、このYamlを編集して、<code>kubectl</code>を使用して手動でデプロイできます。</span> </p>

<p><span class="merged" id="all.1CFxDo" title="原文 : Run the following command from the manifests directory:"><code>manifests</code>ディレクトリから次のコマンドを実行します:</span></p>

<markup
lang="bash"

>kubectl create --dry-run -k default/ -o yaml &gt; operator.yaml</markup>

<p><span class="merged" id="all.Fq8xT.spl1" title="原文 : This will create a file in the manifests directory called operator.yaml that contains all the yaml required to install the Operator.">これにより、オペレータのインストールに必要なYamlがすべて含まれている<code>operator.yaml</code>という<code>manifests</code>ディレクトリにファイルが作成されます。</span> <span class="merged" id="all.Fq8xT.spl2" title="原文 : You can then edit this yaml to change image names or add other settings.">その後、このYamlを編集してイメージ名を変更したり、その他の設定を追加したりできます。</span> </p>

<p><span class="merged" id="all.1dWh3I" title="原文 : The Operator can be installed using the generated yaml.">オペレータは、生成されたYamlを使用してインストールできます。</span></p>

<p><span class="merged" id="all.4ftdmp" title="原文 : For example if the Operator is to be deployed to the coherence-test namespace:">たとえば、オペレータを<code>coherence-test</code>ネームスペースにデプロイする場合:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test create secret generic coherence-webhook-server-cert
kubectl -n coherence-test create -f operator.yaml</markup>

</div>
</div>
</doc-view>
