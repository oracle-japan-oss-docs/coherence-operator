<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1Tb5TG" title="原文 : Coherence Operator Installation">Coherence Operatorインストール</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3Qw6GA" title="原文 : The Coherence Operator is available as an image from the GitHub container registry container-registry.oracle.com/middleware/coherence-operator:3.5.0 that can easily be installed into a Kubernetes cluster.">Coherence Operatorは、Kubernetesクラスタに簡単にインストールできるGitHub Container Registry <code>container-registry.oracle.com/middleware/coherence-operator:3.5.0</code>のイメージとして使用できます。</span></p>
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
<p><span class="merged" id="all.t9CKG"  title="原文:: Contents"><strong>目次</strong></span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2qXR83" title="原文 : Prerequisites before installation"><router-link @click.native="this.scrollFix('#prereq')" to="#prereq">インストール前の前提条件</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.opOQH" title="原文 : Operator High Availability"><router-link @click.native="this.scrollFix('#ha')" to="#ha">オペレータの高可用性</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2eT6sK" title="原文 : Coherence Operator Images"><router-link @click.native="this.scrollFix('#images')" to="#images">Coherence Operatorイメージ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4fFd5p" title="原文 : Operator Scope - monitoring all or a fixed set of namespaces"><router-link @click.native="this.scrollFix('#scope')" to="#scope">オペレータ・スコープ - すべてまたは固定のネームスペース・セットのモニタリング</router-link></span></p>

</li>
</ul>

<h3 id="prereq"><span class="merged" id="all.2LZvWc.1"  title="原文:: Prerequisites">前提条件</span></h3>
<div class="section">
<p><span class="merged" id="all.G9aDD" title="原文 : The prerequisites apply to all installation methods.">前提条件は、すべてのインストール・メソッドに適用されます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3cxx4I" title="原文 : Access to Oracle Coherence Operator images.">Oracle Coherence Operatorイメージにアクセスします。</span></p>

</li>
<li>
<p><span class="merged" id="all.3QdgZU.spl1" title="原文 : Access to a Kubernetes cluster.">Kubernetesクラスタへのアクセス。</span> <span class="merged" id="all.3QdgZU.spl2" title="原文 : The Operator test pipeline is run using against all the currently supported Kubernetes versions.">オペレータ・テスト・パイプラインは、現在サポートされているすべてのKubernetesバージョンに対して実行されます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1olm7F.spl1" title="原文 : A Coherence application image using Coherence version 12.2.1.3 or later.">Coherenceバージョン12.2.1.3以降を使用するCoherenceアプリケーション・イメージ。</span> <span class="merged" id="all.1olm7F.spl2" title="原文 : Note that some functionality (e.g. metrics) is only available in Coherence 12.2.1.4 and later.">一部の機能(例、メトリクス)は、Coherence 12.2.1.4以降でのみ使用できます。</span> </p>

</li>
</ul>
<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.5"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.38XHW4" title="原文 : Istio (or similar service meshes)">Istio (または同様のサービス・メッシュ)</span></p>

<p><span class="merged" id="all.17baAE.spl1" title="原文 : When installing the Operator and Coherence into Kubernetes cluster that use Istio or similar meshes there are a number of pre-requisites that must be understood.">Istioまたは類似のメッシュを使用するKubernetesクラスタにオペレータおよびCoherenceをインストールする場合、理解する必要がある前提条件がいくつかあります。</span> <span class="merged" id="all.17baAE.spl2" title="原文 : See the Istio example for more details.">詳細は、<router-link to="/examples/400_Istio/README">「Istioの例」</router-link>を参照してください。</span> </p>
</p>
</div>
</div>

<h3 id="_installation_options"><span class="merged" id="all.s2FFb"  title="原文:: Installation Options">インストール・オプション</span></h3>
<div class="section">
<p><span class="merged" id="all.1MgDsf" title="原文 : There are a number of ways to install the Coherence Operator.">Coherence Operatorをインストールする方法はいくつかあります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1gnpG9" title="原文 : Install using the yaml manifest file"><router-link to="/docs/installation/011_install_manifests">yamlマニフェスト・ファイルを使用してインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.h9V3n" title="原文 : Install using Helm"><router-link to="/docs/installation/012_install_helm">Helmを使用したインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1u1tF0" title="原文 : Install using Kustomize"><router-link to="/docs/installation/013_install_kustomize">Kustomizeを使ってインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4OuA3M" title="原文 : Install on OpenShift"><router-link to="/docs/installation/014_install_openshift">OpenShiftにインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2yJUZ" title="原文 : Install using the Operator Lifecycle Manager (OLM)"><router-link to="/docs/installation/015_install_olm">Operator Lifecycle Manager (OLM)を使用してインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.mKzGE" title="原文 : Install on VMWare Tanzu"><router-link to="/docs/installation/016_install_tanzu">VMWare Tanzuにインストール</router-link></span></p>

</li>
</ul>
</div>

<h3 id="ha"><span class="merged" id="all.ZIA7x"  title="原文:: High Availability">高可用性</span></h3>
<div class="section">
<p><span class="merged" id="all.BEmRf.spl1" title="原文 : The Coherence Operator runs in HA mode by default.">Coherence Operatorは、デフォルトでHAモードで実行されます。</span> <span class="merged" id="all.BEmRf.spl2" title="原文 : The Deployment created by the installation will have a replica count of 3.">インストールによって作成された<code>Deployment</code>のレプリカ数は3です。</span> <span class="merged" id="all.BEmRf.spl3" title="原文 : In reduced capacity Kubernetes clusters, for example, local laptop development and test, the replica count can be reduced.">ローカル・ラップトップの開発やテストなど、容量の削減Kubernetesクラスタでは、レプリカ数を減らすことができます。</span> <span class="merged" id="all.BEmRf.spl4" title="原文 : It is recommended to leave the default of 3 for production environments.">本番環境では、デフォルトの3のままにすることをお薦めします。</span> <span class="merged" id="all.BEmRf.spl5" title="原文 : Instructions on how to change the replica count for the different install methods are included below.">異なるインストール・メソッドのレプリカ数を変更するメソッドの手順を次に示します。</span> </p>

<p><span class="merged" id="all.17ZQAu.spl1" title="原文 : The Coherence Operator runs a REST server that the Coherence cluster members will query to discover the site and rack names that should be used by Coherence.">Coherence Operatorは、Coherenceクラスタ・メンバーがクエリーして、Coherenceで使用されるサイト名とラック名を検出するRESTサーバーを実行します。</span> <span class="merged" id="all.17ZQAu.spl2" title="原文 : If the Coherence Operator is not running when a Coherence Pod starts, then the Coherence member in that Pod will be unable to properly configure its site and rack names, possibly leading to data distribution that is not safely distributed over sites.">Coherenceポッドの起動時にCoherence Operatorが実行されていない場合、そのポッドのCoherenceメンバーはサイト名とラック名を正しく構成できず、サイト間で安全に分散されないデータ分散につながる可能性があります。</span> <span class="merged" id="all.17ZQAu.spl3" title="原文 : In production, and in Kubernetes clusters that are spread over multiple availability zones and failure domains, it is important to run the Operator in HA mode.">本番では、複数の可用性ゾーンおよび障害ドメインに分散しているKubernetesクラスタでは、オペレータをHAモードで実行することが重要です。</span> </p>

<p><span class="merged" id="all.3mugzJ.spl1" title="原文 : The Operator yaml files and Helm chart include a default Pod scheduling configuration that uses anti-affinity to distribute the three replicas onto nodes that have different topology.kubernetes.io/zone labels.">オペレータyamlファイルおよびHelmチャートには、アンチ・アフィニティを使用して、異なる<code>topology.kubernetes.io/zone</code>ラベルを持つノードに3つのレプリカを分散するデフォルトのポッド・スケジューリング構成が含まれています。</span> <span class="merged" id="all.3mugzJ.spl2" title="原文 : This label is a standard Kubernetes label used to describe the zone the node is running in, and is typically applied by Kubernetes cloud vendors.">このラベルは、ノードが実行されているゾーンを記述するために使用される標準のKubernetesラベルで、通常はKubernetesクラウド・ベンダーによって適用されます。</span> </p>

</div>

<h3 id="_notes"><span class="merged" id="all.3Wy1iS"  title="原文:: Notes">ノート</span></h3>
<div class="section">
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3M69WF.spl1" title="原文 : Installing the Coherence Operator using the methods below will create a number of ClusterRole RBAC resources.">次のメソッドを使用してCoherence Operatorをインストールすると、多数の<code>ClusterRole</code> RBACリソースが作成されます。</span> <span class="merged" id="all.3M69WF.spl2" title="原文 : Some corporate security policies do not like to give cluster wide roles to third-party products.">一部の企業セキュリティ・ポリシーでは、サード・パーティ製品にクラスタ全体のロールを与えることは好ましくありません。</span> <span class="merged" id="all.3M69WF.spl3" title="原文 : To help in this situation the operator can be installed without cluster roles, but with caveats (see the RBAC documentation) for more details.">この状況では、クラスタ・ロールなしでオペレータをインストールできますが、詳細は注意事項(<router-link @click.native="this.scrollFix('#docs/installation/09_RBAC.adoc')" to="#docs/installation/09_RBAC.adoc">RBAC</router-link>のドキュメントを参照)を参照してください。</span> </p>
</div>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1DKZ05.spl1" title="原文 : OpenShift - the Coherence Operator works without modification on OpenShift, but some versions of the Coherence images will not work out of the box.">OpenShift - Coherence OperatorはOpenShiftで変更せずに機能しますが、一部のバージョンのCoherenceイメージはボックスからは機能しません。</span> <span class="merged" id="all.1DKZ05.spl2" title="原文 : See the OpensShift section of the documentation that explains how to run Coherence clusters with the Operator on OpenShift.">OpenShiftのオペレータを使用してCoherenceクラスタを実行する方法を説明するドキュメントの<router-link @click.native="this.scrollFix('#docs/installation/06_openshift.adoc')" to="#docs/installation/06_openshift.adoc">OpensShift</router-link>セクションを参照してください。</span> </p>
</div>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1RstH3.spl1" title="原文 : Whilst Coherence works out of the box on many Kubernetes installations, some Kubernetes installations may configure iptables in a way that causes Coherence to fail to create clusters.">Coherenceが多くのKubernetesインストールですぐに機能しなくなる一方、一部のKubernetesインストールでは、Coherenceがクラスタの作成に失敗するような方法でiptablesを構成できます。</span> <span class="merged" id="all.1RstH3.spl2" title="原文 : See the O/S Network Configuration section of the documentation for more details if you have well-known-address issues when Pods attempt to form a cluster.">Podsがクラスタを形成しようとしたときに既知のアドレスの問題がある場合の詳細は、ドキュメントの<router-link @click.native="this.scrollFix('#docs/installation/08_networking.adoc')" to="#docs/installation/08_networking.adoc">「O/Sネットワーク構成」</router-link>セクションを参照してください。</span> </p>
</div>
</div>
</div>

<h2 id="images"><span class="merged" id="all.3laiyk" title="原文 : Coherence Operator Images">Coherence Operatorイメージ</span></h2>
<div class="section">
<p><span class="merged" id="all.4xCXs" title="原文 : The Coherence Operator uses a single image, the Operator also runs as an init-container in the Coherence cluster Pods.">Coherence Operatorは単一のイメージを使用し、オペレータはCoherenceクラスタ・ポッドでinitコンテナとしても実行されます。</span></p>

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

<h2 id="scope"><span class="merged" id="all.2YIaHI" title="原文 : Operator Scope">オペレータ・スコープ</span></h2>
<div class="section">
<p><span class="merged" id="all.1SB65k.spl1" title="原文 : The recommended way to install the Coherence Operator is to install a single instance of the operator into a namespace and where it will then control Coherence resources in all namespaces across the Kubernetes cluster.">Coherence Operatorをインストールするには、オペレータの単一インスタンスをネームスペースにインストールし、Kubernetesクラスタのすべてのネームスペースの<code>Coherence</code>リソースを制御することをお薦めします。</span> <span class="merged" id="all.1SB65k.spl2" title="原文 : Alternatively it may be configured to watch a sub-set of namespaces by setting the WATCH_NAMESPACE environment variable.">または、<code>WATCH_NAMESPACE</code>環境変数を設定して、ネームスペースのサブセットを監視するように構成できます。</span> <span class="merged" id="all.1SB65k.spl3" title="原文 : The watch namespace(s) does not have to include the installation namespace.">ウォッチ・ネームスペースには、インストール・ネームスペースを含める必要はありません。</span> </p>

<div class="admonition caution">
<p class="admonition-textlabel"><span class="merged" id="all.4Pmf1N.3"  title="原文:: Caution">注意</span></p>
<p ><p><span class="merged" id="all.3M7kAk.spl1" title="原文 : In theory, it is possible to install multiple instances of the Coherence Operator into different namespaces, where each instance monitors a different set of namespaces.">理論上、Coherence Operatorの複数のインスタンスを異なるネームスペースにインストールでき、各インスタンスで異なるネームスペース・セットが監視されます。</span> <span class="merged" id="all.3M7kAk.spl2" title="原文 : There are a number of potential issues with this approach, so it is not recommended.">このアプローチには多くの潜在的な問題があるため、推奨されません。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4MB0eW.spl1" title="原文 : Only one version of a CRD can be installed - There is currently only a single version of the CRD, but different releases of the Operator may use slightly different specs of this CRD version, for example a new Operator release may introduce extra fields not in the previous releases.">インストールできるCRDのバージョンは1つのみです - 現在、CRDのバージョンは1つだけですが、オペレータのリリースによって、このCRDバージョンの仕様が若干異なる場合があります。たとえば、新しいOperatorリリースでは、以前のリリースにない追加のフィールドが導入される可能性があります。</span> <span class="merged" id="all.4MB0eW.spl2" title="原文 : As the CRD version is fixed at v1 there is no guarantee which CRD version has actually installed, which could lead to subtle issues.">CRDバージョンが<code>v1</code>で修正されるため、どのCRDバージョンが実際にインストールされているかは保証されず、微妙な問題につながる可能性があります。</span> </p>

</li>
<li>
<p><span class="merged" id="all.RkRmn.spl1" title="原文 : The operator creates and installs defaulting and validating web-hooks.">オペレータは、webフックのデフォルト設定および検証を作成およびインストールします。</span> <span class="merged" id="all.RkRmn.spl2" title="原文 : A web-hook is associated to a CRD resource so installing multiple web-hooks for the same resource may lead to issues.">webフックはCRDリソースに関連付けられているため、同じリソースに複数のWebフックをインストールすると問題が発生する可能性があります。</span> <span class="merged" id="all.RkRmn.spl3" title="原文 : If an operator is uninstalled, but the web-hook configuration remains, then Kubernetes will not accept modifications to resources of that type as it will be unable to contact the web-hook.">オペレータがアンインストールされ、webフック構成が残っている場合、KubernetesはWebフックに接続できないため、そのタイプのリソースに対する変更を受け入れません。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.26BEv3" title="原文 : It is possible to run the Operator without web-hooks, but this has its own caveats see the Web Hooks documentation for how to do this.">webフックなしでOperatorを実行できますが、これには独自の注意事項があります。この方法については、<router-link @click.native="this.scrollFix('#docs/installation/07_webhooks.adoc')" to="#docs/installation/07_webhooks.adoc">「Webフック」</router-link>のドキュメントを参照してください。</span></p>
</p>
</div>
<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p.2"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.32L8vf.spl1" title="原文 : If multiple instances of the Operator are installed, where they are monitoring the same namespaces, this can cause issues.">オペレータの複数のインスタンスがインストールされていて、それらが同じネームスペースをモニタリングしている場合、問題が発生する可能性があります。</span> <span class="merged" id="all.32L8vf.spl2" title="原文 : For example, when a Coherence resource is then changed, all the Operator deployments will receive the same events from Etcd and try to apply the same changes.">たとえば、<code>Coherence</code>リソースが変更されると、すべてのオペレータ・デプロイメントはEtcdから同じイベントを受信し、同じ変更を適用しようとします。</span> <span class="merged" id="all.32L8vf.spl3" title="原文 : Sometimes this may work, sometimes there may be errors, for example multiple Operators trying to remove finalizers and delete a Coherence cluster.">場合によっては、ファイナライザを削除してCoherenceクラスタを削除しようとする複数のオペレータなど、エラーが発生することがあります。</span> </p>
</p>
</div>
</div>
</doc-view>
