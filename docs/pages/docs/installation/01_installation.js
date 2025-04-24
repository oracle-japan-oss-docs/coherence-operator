<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1Tb5TG" title="原文 : Coherence Operator Installation">Coherence Operatorインストール</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3NG3b1" title="原文 : The Coherence Operator is available as an image from the GitHub container registry container-registry.oracle.com/middleware/coherence-operator:3.4.3 that can easily be installed into a Kubernetes cluster.">Coherence Operatorは、Kubernetesクラスタに簡単にインストールできるGitHub Container Registry <code>container-registry.oracle.com/middleware/coherence-operator:3.4.3</code>のイメージとして使用できます。</span></p>
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
<li>
<p><span class="merged" id="all.s2FFb"  title="原文:: Installation Options">インストール・オプション</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.Ck2Yr" title="原文 : Simple installation using Kubectl"><router-link @click.native="this.scrollFix('#manifest')" to="#manifest">Kubectlを使用したシンプルなインストール</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.RSmjh" title="原文 : Installing Without Cluster Roles"><router-link @click.native="this.scrollFix('#manifest-restrict')" to="#manifest-restrict">クラスタ・ロールなしのインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2u993D" title="原文 : Manually Install the CRDs"><router-link @click.native="this.scrollFix('#manual-crd')" to="#manual-crd">CRDを手動でインストール</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.28yMoG" title="原文 : Install the Helm chart"><router-link @click.native="this.scrollFix('#helm')" to="#helm">Helmチャートのインストール</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3yEUhK" title="原文 : Set the Operator Image"><router-link @click.native="this.scrollFix('#helm-operator-image')" to="#helm-operator-image">オペレータ・イメージの設定</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2n3oPj" title="原文 : Image Pull Secrets"><router-link @click.native="this.scrollFix('#helm-pull-secrets')" to="#helm-pull-secrets">イメージ・プル・シークレット</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3wewco" title="原文 : Set the Watch Namespaces"><router-link @click.native="this.scrollFix('#helm-watch-ns')" to="#helm-watch-ns">ウォッチ・ネームスペースの設定</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2GD70l" title="原文 : Install the Operator with a Security Context"><router-link @click.native="this.scrollFix('#helm-sec-context')" to="#helm-sec-context">セキュリティ・コンテキストを使用したオペレータのインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1mD035" title="原文 : Set Additional Labels"><router-link @click.native="this.scrollFix('#helm-labels')" to="#helm-labels">追加ラベルの設定</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1iGGea" title="原文 : Set Additional Annotations"><router-link @click.native="this.scrollFix('#helm-annotations')" to="#helm-annotations">追加注釈の設定</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.nieDr" title="原文 : CoherenceJob CRD Support"><router-link @click.native="this.scrollFix('#helm-job')" to="#helm-job">CoherenceJob CRDのサポート</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3RKEYf" title="原文 : Uninstall the Coherence Operator Helm chart"><router-link @click.native="this.scrollFix('#helm-uninstall')" to="#helm-uninstall">Coherence Operator Helmチャートをアンインストール</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.4Gho1H" title="原文 : Kubectl with Kustomize"><router-link @click.native="this.scrollFix('#kubectl')" to="#kubectl">KubectlとKustomize</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.48YUjU" title="原文 : VMWare Tanzu Package (kapp-controller)"><router-link @click.native="this.scrollFix('#tanzu')" to="#tanzu">VMWare Tanzuパッケージ(kapp-controller)</router-link></span></p>

</li>
</ul>
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
<p><span class="merged" id="all.3E8ipL" title="原文 : There are a number of ways to install the Coherence Operator documented below:">次に示すCoherence Operatorをインストールする方法はいくつかあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.Ck2Yr.1" title="原文 : Simple installation using Kubectl"><router-link @click.native="this.scrollFix('#manifest')" to="#manifest">Kubectlを使用したシンプルなインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.28yMoG.1" title="原文 : Install the Helm chart"><router-link @click.native="this.scrollFix('#helm')" to="#helm">Helmチャートのインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4Gho1H.1" title="原文 : Kubectl with Kustomize"><router-link @click.native="this.scrollFix('#kubectl')" to="#kubectl">KubectlとKustomize</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.48YUjU.1" title="原文 : VMWare Tanzu Package (kapp-controller)"><router-link @click.native="this.scrollFix('#tanzu')" to="#tanzu">VMWare Tanzuパッケージ(kapp-controller)</router-link></span></p>

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
<p><span class="merged" id="all.2cwJP6" title="原文 : It is possible to run the Operator without web-hooks, but this has its own caveats see the Web Hooks documentation for how to do this.">webフックなしでOperatorを実行できますが、これには独自の注意事項があります。この方法については、<router-link to="/docs/installation/07_webhooks">「Webフック」</router-link>のドキュメントを参照してください。</span></p>
</p>
</div>
<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p.2"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.3Q04gp.spl1" title="原文 : If multiple instance of the Operator are installed, where they are monitoring the same namespaces, this can cause issues.">オペレータの複数のインスタンスがインストールされていて、それらが同じネームスペースをモニターしている場合、これによって問題が発生する可能性があります。</span> <span class="merged" id="all.3Q04gp.spl2" title="原文 : For example, when a Coherence resource is then changed, all the Operator deployments will receive the same events from Etcd and try to apply the same changes.">たとえば、<code>Coherence</code>リソースが変更されると、すべてのオペレータ・デプロイメントはEtcdから同じイベントを受信し、同じ変更を適用しようとします。</span> <span class="merged" id="all.3Q04gp.spl3" title="原文 : Sometimes this may work, sometimes there may be errors, for example multiple Operators trying to remove finalizers and delete a Coherence cluster.">場合によっては、ファイナライザを削除してCoherenceクラスタを削除しようとする複数のオペレータなど、エラーが発生することがあります。</span> </p>
</p>
</div>
</div>

<h2 id="manifest"><span class="merged" id="all.4Dp4iH" title="原文 : Default Install with Kubectl">Kubectlでのデフォルト・インストール</span></h2>
<div class="section">
<p><span class="merged" id="all.1v0YpD.1" title="原文 : If you want the default Coherence Operator installation then the simplest solution is use kubectl to apply the manifests from the Operator release.">デフォルトのCoherence Operatorインストールが必要な場合は、最も単純なソリューションは<code>kubectl</code>を使用して、Operatorリリースからのマニフェストを適用します。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.6"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.1PM3cO.spl1" title="原文 : As of v3.5.0 of the Operator the manifest yaml also installs the two CRDs that the Operator uses.">オペレータのv3.5.0以降、マニフェストyamlはオペレータが使用する2つのCRDもインストールします。</span> <span class="merged" id="all.1PM3cO.spl2" title="原文 : In previous releases the Operator would install the CRDs when it started but this behaviour is disabled by default when installing with the manifest yaml.">以前のリリースでは、オペレータは起動時にCRDをインストールしていましたが、マニフェストyamlを使用してインストールすると、この動作はデフォルトで無効になっています。</span> </p>
</p>
</div>
<p><span class="merged" id="all.3MEUKf.spl1" title="原文 : The following command will install the Operator.">次のコマンドによってオペレータがインストールされます。</span> <span class="merged" id="all.3MEUKf.spl2" title="原文 : This assumes that the Kubernetes account being used to perform the installation has all the RBAC permissions required to install all the resource types in the yaml file.">ここでは、インストールの実行に使用されるKubernetesアカウントに、すべてのリソース・タイプをyamlファイルにインストールするために必要なすべてのRBAC権限があることを前提としています。</span> </p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.5.0/coherence-operator.yaml</markup>

<p><span class="merged" id="all.H99fG.spl1" title="原文 : This will create a namespace called coherence and install the CRDs and the Operator into the namespace, along with all the required ClusterRole and RoleBinding resources.">これにより、<code>coherence</code>というネームスペースが作成され、必要なすべての<code>ClusterRole</code>および<code>RoleBinding</code>リソースとともに、CRDおよびオペレータがネームスペースにインストールされます。</span> <span class="merged" id="all.H99fG.spl2" title="原文 : The coherence namespace can be changed by downloading and editing the yaml file."><code>coherence</code>ネームスペースは、yamlファイルをダウンロードおよび編集することによって変更できます。</span> </p>

<p><span class="merged" id="all.2bCzj2.spl1" title="原文 : In some restricted environments, a Kubernetes user might not have RBAC permissions to install CRDs.">一部の制限付き環境では、KubernetesユーザーにCRDをインストールするためのRBAC権限がない場合があります。</span> <span class="merged" id="all.2bCzj2.spl2" title="原文 : In this case the coherence-operator.yaml file will need to be edited to remove the two CRDs from the beginning of the file.">この場合、<code>coherence-operator.yaml</code>ファイルを編集して、ファイルの先頭から2つのCRDを削除する必要があります。</span> <span class="merged" id="all.2bCzj2.spl3" title="原文 : The CRDs must be manually installed before the Operator is installed, as described below in Manually Install the CRDs.">下記の<router-link @click.native="this.scrollFix('#manual-crd')" to="#manual-crd">「CRDを手動でインストール」</router-link>で説明されているとおり、CRDは、<strong><em>オペレータをインストールする前に手動でインストールする必要があります</em></strong>。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.7"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.Ipng.1.spl1" title="原文 : Because the coherence-operator.yaml manifest also creates the namespace, the corresponding kubectl delete command will remove the namespace and everything deployed to it!"><code>coherence-operator.yaml</code>マニフェストではネームスペースも作成されるため、対応する<code>kubectl delete</code>コマンドは<em>「ネームスペースおよびそれにデプロイされたすべてのネームスペースを削除」</em>になります。</span> <span class="merged" id="all.Ipng.1.spl2" title="原文 : If you do not want this behaviour you should edit the coherence-operator.yaml to remove the namespace section from the start of the file.">この動作を行わない場合は、<code>coherence-operator.yaml</code>を編集して、ファイルの先頭からネームスペース・セクションを削除する必要があります。</span> </p>
</p>
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


<h3 id="manifest-restrict"><span class="merged" id="all.4gI65F" title="原文 : Installing Without Cluster Roles">クラスタ・ロールなしのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2hB9ja.spl1" title="原文 : The default install for the Operator is to have one Operator deployment that manages all Coherence resources across all the namespaces in a Kubernetes cluster.">オペレータのデフォルト・インストールでは、1つのオペレータ・デプロイメントを使用して、Kubernetesクラスタ内のすべてのネームスペースのすべてのCoherenceリソースを管理します。</span> <span class="merged" id="all.2hB9ja.spl2" title="原文 : This requires the Operator to have cluster role RBAC permissions to manage and monitor all the resources.">これには、オペレータがすべてのリソースを管理およびモニターするためのクラスタ・ロールのRBAC権限を持っている必要があります。</span> </p>

<p><span class="merged" id="all.2IYyzw.spl1" title="原文 : Sometimes, for security reasons or for example in a shared Kubernetes cluster this is not desirable.">セキュリティ上の理由から、または共有Kubernetesクラスタなどでは、これは望ましくない場合があります。</span> <span class="merged" id="all.2IYyzw.spl2" title="原文 : The Operator can therefore be installed with plain namespaced scoped roles and role bindings.">したがって、オペレータは、ネームスペースの付いたプレーンなロールとロールのバインドを使用してインストールできます。</span> <span class="merged" id="all.2IYyzw.spl3" title="原文 : The Operator release includes a single yaml file named coherence-operator-restricted.yaml that may be used to install the Operator into a single namespace without any cluster roles.">オペレータ・リリースには、<code>coherence-operator-restricted.yaml</code>という名前の単一のyamlファイルが含まれています。このファイルは、オペレータをクラスタ・ロールなしで単一のネームスペースにインストールするために使用できます。</span> </p>

<p><span class="merged" id="all.3xYTUR" title="原文 : The Operator installed with this yaml">オペレータがこのyamlとともにインストールされました</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1zDY3G" title="原文 : will not use WebHooks">WebHooksは使用しません</span></p>

</li>
<li>
<p><span class="merged" id="all.3mePJB" title="原文 : will not look-up Node labels for Coherence site and rack configurations">Coherenceサイトおよびラック構成のノード・ラベルは参照されません</span></p>

</li>
</ul>
<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.8"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.4gZcgz.spl1" title="原文 : As of v3.5.0 of the Operator the coherence-operator-restricted.yaml also installs the two CRDs that the Operator uses.">オペレータのv3.5.0以降、<code>coherence-operator-restricted.yaml</code>はオペレータが使用する2つのCRDもインストールします。</span> <span class="merged" id="all.4gZcgz.spl2" title="原文 : In previous releases the Operator would install the CRDs when it started but this behaviour is disabled by default when installing with the manifest yaml.">以前のリリースでは、オペレータは起動時にCRDをインストールしていましたが、マニフェストyamlを使用してインストールすると、この動作はデフォルトで無効になっています。</span> </p>
</p>
</div>
<p><span class="merged" id="all.3MEUKf.1.spl1" title="原文 : The following command will install the Operator.">次のコマンドによってオペレータがインストールされます。</span> <span class="merged" id="all.3MEUKf.1.spl2" title="原文 : This assumes that the Kubernetes account being used to perform the installation has all the RBAC permissions required to install all the resource types in the yaml file.">ここでは、インストールの実行に使用されるKubernetesアカウントに、すべてのリソース・タイプをyamlファイルにインストールするために必要なすべてのRBAC権限があることを前提としています。</span> </p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.5.0/coherence-operator-restricted.yaml</markup>

<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p.3"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.2bCzj2.1.spl1" title="原文 : In some restricted environments, a Kubernetes user might not have RBAC permissions to install CRDs.">一部の制限付き環境では、KubernetesユーザーにCRDをインストールするためのRBAC権限がない場合があります。</span> <span class="merged" id="all.2bCzj2.1.spl2" title="原文 : In this case the coherence-operator.yaml file will need to be edited to remove the two CRDs from the beginning of the file.">この場合、<code>coherence-operator.yaml</code>ファイルを編集して、ファイルの先頭から2つのCRDを削除する必要があります。</span> <span class="merged" id="all.2bCzj2.1.spl3" title="原文 : The CRDs must be manually installed before the Operator is installed, as described below in Manually Install the CRDs.">下記の<router-link @click.native="this.scrollFix('#manual-crd')" to="#manual-crd">「CRDを手動でインストール」</router-link>で説明されているとおり、CRDは、<strong><em>オペレータをインストールする前に手動でインストールする必要があります</em></strong>。</span> </p>
</p>
</div>
</div>

<h3 id="manual-crd"><span class="merged" id="all.69n36" title="原文 : Manually Install the CRDs">CRDを手動でインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.9fcSC.spl1" title="原文 : Although by default the Operator will install its CRDs, they can be manually installed into Kubernetes.">オペレータはデフォルトでCRDをインストールしますが、手動でKubernetesにインストールできます。</span> <span class="merged" id="all.9fcSC.spl2" title="原文 : This may be required where the Operator is running with restricted permissions as described above.">これは、前述のとおり、オペレータが制限付き権限で実行されている場合に必要になる場合があります。</span> </p>

<p><span class="merged" id="all.BlPTJ" title="原文 : The Operator release artifacts include small versions of the two CRDs which can be installed with the following commands:">オペレータ・リリース・アーティファクトには、次のコマンドを使用してインストールできる2つのCRDの小さなバージョンが含まれています:</span></p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.5.0/coherence.oracle.com_coherence_small.yaml
kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.5.0/coherencejob.oracle.com_coherence_small.yaml</markup>

<p><span class="merged" id="all.2UQZFN" title="原文 : The small versions of the CRDs are identical to the full versions but hav a cut down OpenAPI spec with a lot of comments removed so that the CRDs are small enough to be installed with kubectl apply">CRDの小さなバージョンはフル・バージョンと同じですが、CRDが<code>kubectl apply</code>でインストールできるほど小さくなるように、多くのコメントが削除されたOpenAPI仕様の削減があります</span></p>

</div>

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

<h2 id="helm"><span class="merged" id="all.1SBcfm" title="原文 : Installing With Helm">Helmを使用したインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.ddGSo.spl1" title="原文 : For more flexibility the simplest way to install the Coherence Operator is to use the Helm chart.">柔軟性を高めるために、Coherence Operatorをインストールする最も簡単な方法は、Helmチャートを使用することです。</span> <span class="merged" id="all.ddGSo.spl2" title="原文 : This ensures that all the correct resources will be created in Kubernetes.">これにより、すべての正しいリソースがKubernetesに作成されます。</span> </p>


<h3 id="_add_the_coherence_helm_repository"><span class="merged" id="all.2LiYhP" title="原文 : Add the Coherence Helm Repository">Coherence Helmリポジトリの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.34cW7K" title="原文 : Add the coherence helm repository using the following commands:">次のコマンドを使用して、<code>coherence</code> helmリポジトリを追加します:</span></p>

<markup
lang="bash"

>helm repo add coherence https://oracle.github.io/coherence-operator/charts

helm repo update</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.bLbzF.spl1" title="原文 : To avoid confusion, the URL https://oracle.github.io/coherence-operator/charts is a Helm repo, it is not a website you open in a browser.">混乱を避けるために、URL <code><a href="https://oracle.github.io/coherence-operator/charts" id="" target="_blank" >https://oracle.github.io/coherence-operator/charts</a></code>はHelmリポジトリであり、ブラウザで開くwebサイトではありません。</span> <span class="merged" id="all.bLbzF.spl2" title="原文 : You may think we shouldn’t have to say this, but you’d be surprised.">知らない方のために。</span> </p>
</div>
<p><span class="merged" id="all.1tyTbE.spl1" title="原文 : Unlike the manifest files described above, the Helm chart does not install the CRDs the Operator requires.">前述のマニフェスト・ファイルとは異なり、Helmチャートではオペレータが必要とするCRDはインストールされません。</span> <span class="merged" id="all.1tyTbE.spl2" title="原文 : By default, the Operator will install the CRDs when it starts.">デフォルトでは、オペレータは起動時にCRDをインストールします。</span> <span class="merged" id="all.1tyTbE.spl3" title="原文 : Whilst it would have been more consistent to make the Helm chart also install the CRDs the same as the manifest yaml files, this would break Helm upgrades from a previous Operator version.">HelmチャートでCRDもマニフェストyamlファイルと同じようにインストールする方が一貫性がありましたが、これにより、以前のOperatorバージョンからのHelmアップグレードが中断されます。</span> <span class="merged" id="all.1tyTbE.spl4" title="原文 : Helm would refuse to perform the upgrade because the existing CRDs were not installed by Helm.">既存のCRDがHelmによってインストールされなかったため、Helmはアップグレードの実行を拒否します。</span> </p>

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

<h3 id="helm-operator-image"><span class="merged" id="all.3NvRwL" title="原文 : Set the Operator Image">オペレータ・イメージの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.1C1hrw.spl1" title="原文 : The Helm chart uses a default Operator image from container-registry.oracle.com/middleware/coherence-operator:3.4.3.">Helmチャートでは、<code>container-registry.oracle.com/middleware/coherence-operator:3.4.3</code>のデフォルトのオペレータ・イメージが使用されます。</span> <span class="merged" id="all.1C1hrw.spl2" title="原文 : If the image needs to be pulled from a different location (for example an internal registry) then there are two ways to override the default.">イメージを別のロケーション(内部レジストリなど)からプルする必要がある場合は、デフォルトを上書きする方法が2つあります。</span> <span class="merged" id="all.1C1hrw.spl3" title="原文 : Either set the individual image.registry, image.name and image.tag values, or set the whole image name by setting the image value.">個別の<code>image.registry</code>、<code>image.name</code>および<code>image.tag</code>値を設定するか、<code>image</code>値を設定してイメージ名全体を設定します。</span> </p>

<p><span class="merged" id="all.3vxeEg" title="原文 : For example, if the Operator image has been deployed into a private registry named foo.com but with the same image name coherence-operator and tag 3.4.3 as the default image, then just the image.registry needs to be specified.">たとえば、オペレータ・イメージが<code>foo.com</code>という名前のプライベート・レジストリにデプロイされているが、デフォルト・イメージと同じイメージ名<code>coherence-operator</code>およびタグ<code>3.4.3</code>の場合は、<code>image.registry</code>のみを指定する必要があります。</span></p>

<p><span class="merged" id="all.4TMJny" title="原文 : In the example below, the image used to run the Operator will be foo.com/coherence-operator:3.4.3.">次の例では、オペレータの実行に使用されるイメージは<code>foo.com/coherence-operator:3.4.3</code>です。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set image.registry=foo.com \
    coherence-operator \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.2omWLr.spl1" title="原文 : All three of the image parts can be specified individually using --set options.">3つのイメージ・パーツはすべて、<code>--set</code>オプションを使用して個別に指定できます。</span> <span class="merged" id="all.2omWLr.spl2" title="原文 : In the example below, the image used to run the Operator will be foo.com/operator:1.2.3.">次の例では、オペレータの実行に使用されるイメージは<code>foo.com/operator:1.2.3</code>です。</span> </p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set image.registry=foo.com \
    --set image.name=operator \
    --set image.tag=1.2.3
    coherence-operator \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.4NBaDS.spl1" title="原文 : Alternatively, the image can be set using a single image value.">または、単一の<code>image</code>値を使用してイメージを設定できます。</span> <span class="merged" id="all.4NBaDS.spl2" title="原文 : For example, the command below will set the Operator image to images.com/coherence-operator:0.1.2.">たとえば、次のコマンドは、オペレータ・イメージを<code>images.com/coherence-operator:0.1.2</code>に設定します。</span> </p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set image=images.com/coherence-operator:0.1.2 \
    coherence-operator \
    coherence/coherence-operator</markup>

</div>

<h3 id="helm-pull-secrets"><span class="merged" id="all.MUXab.1" title="原文 : Image Pull Secrets">イメージ・プル・シークレット</span></h3>
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

<h3 id="helm-watch-ns"><span class="merged" id="all.3ZRPoT" title="原文 : Set the Watch Namespaces">ウォッチ・ネームスペースの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3e8B11" title="原文 : To set the watch namespaces when installing with helm set the watchNamespaces value, for example:">helmでインストールするときにウォッチ・ネームスペースを設定するには、<code>watchNamespaces</code>値を設定します。次に例を示します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set watchNamespaces=payments,catalog,customers \
    coherence-operator \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.2XUFDk" title="原文 : The payments, catalog and customers namespaces will be watched by the Operator."><code>payments</code>、<code>catalog</code>および<code>customers</code>ネームスペースは、オペレータによって監視されます。</span></p>


<h4 id="_set_the_watch_namespace_to_the_operators_install_namespace"><span class="merged" id="all.45ohWm" title="原文 : Set the Watch Namespace to the Operator’s Install Namespace">監視ネームスペースをオペレータのインストール・ネームスペースに設定</span></h4>
<div class="section">
<p><span class="merged" id="all.2p0ISm.spl1" title="原文 : When installing the Operator using the Helm chart, there is a convenience value that can be set if the Operator should only monitor the same namespace that it is installed into.">Helmチャートを使用してオペレータをインストールする場合、オペレータがインストールされているネームスペースと同じネームスペースのみをモニターする必要がある場合に設定できる便利な値があります。</span> <span class="merged" id="all.2p0ISm.spl2" title="原文 : By setting the onlySameNamespace value to true the watch namespace will be set to the installation namespace."><code>onlySameNamespace</code>値を<code>true</code>に設定すると、ウォッチ・ネームスペースはインストール・ネームスペースに設定されます。</span> <span class="merged" id="all.2p0ISm.spl3" title="原文 : If the onlySameNamespace value is set to true then any value set for the watchNamespaces value will be ignored."><code>onlySameNamespace</code>値が<code>true</code>に設定されている場合、<code>watchNamespaces</code>値に設定された値は無視されます。</span> </p>

<p><span class="merged" id="all.Mqgar" title="原文 : For example, the command below will set onlySameNamespace to true, and the Operator will be installed into, and only monitor the coh-testing namespace.">たとえば、次のコマンドは、<code>onlySameNamespace</code>をtrueに設定し、Operatorをインストールして、<code>coh-testing</code>ネームスペースのみをモニターします。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace coh-testing \
    --set onlySameNamespace=true \
    coherence-operator \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.4IyFRm.spl1" title="原文 : In the example below, the onlySameNamespace is set to true, so the Operator will be installed into, and only monitor the coh-testing namespace.">次の例では、<code>onlySameNamespace</code>がtrueに設定されているため、Operatorはインストールされ、<code>coh-testing</code>ネームスペースのみを監視します。</span> <span class="merged" id="all.4IyFRm.spl2" title="原文 : Even though the watchNamespaces value is set, it will be ignored."><code>watchNamespaces</code>値が設定されていても、無視されます。</span> </p>

<markup
lang="bash"

>helm install  \
    --namespace coh-testing \
    --set watchNamespaces=payments,catalog,customers \
    --set onlySameNamespace=true \
    coherence-operator \
    coherence/coherence-operator</markup>

</div>
</div>

<h3 id="helm-sec-context"><span class="merged" id="all.2FZhLM" title="原文 : Install the Operator with a Security Context">セキュリティ・コンテキストを使用したオペレータのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.37fvA8" title="原文 : The Operator container can be configured with a Pod securityContext or a container securityContext, so that it runs as a non-root user.">オペレータ・コンテナは、ポッド<code>securityContext</code>またはコンテナ<code>securityContext</code>で構成して、非rootユーザーとして実行できます。</span></p>

<p><span class="merged" id="all.2uqFQU" title="原文 : This can be done using a values file:">これは、値ファイルを使用して実行できます:</span></p>

<p><span class="merged" id="all.2dhgZ2" title="原文 : Set the Pod securityContext"><strong>ポッドの設定securityContext</strong></span></p>

<markup
lang="yaml"
title="security-values.yaml"
>podSecurityContext:
  runAsNonRoot: true
  runAsUser: 1000</markup>

<p><span class="merged" id="all.kbaNs" title="原文 : Set the Container securityContext"><strong>コンテナsecurityContextの設定</strong></span></p>

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

<p><span class="merged" id="all.2nn9ac" title="原文 : Alternatively, the Pod or container securityContext values can be set on the command line as --set parameters:">または、ポッドまたはコンテナの<code>securityContext</code>値をコマンドラインで<code>--set</code>パラメータとして設定できます:</span></p>

<p><span class="merged" id="all.2dhgZ2.1" title="原文 : Set the Pod securityContext"><strong>ポッドの設定securityContext</strong></span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set podSecurityContext.runAsNonRoot=true \
    --set podSecurityContext.runAsUser=1000 \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.kbaNs.1" title="原文 : Set the Container securityContext"><strong>コンテナsecurityContextの設定</strong></span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set securityContext.runAsNonRoot=true \
    --set securityContext.runAsUser=1000 \
    coherence \
    coherence/coherence-operator</markup>

</div>

<h3 id="helm-labels"><span class="merged" id="all.1X6N5U" title="原文 : Set Additional Labels">追加ラベルの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.450GmD" title="原文 : When installing the Operator with Helm, it is possible to set additional labels to be applied to the Operator Pods and to the Operator Deployment.">Helmを使用してOperatorをインストールする場合、オペレータ・ポッドおよびオペレータ・デプロイメントに適用する追加のラベルを設定できます。</span></p>


<h4 id="_adding_pod_labels"><span class="merged" id="all.2nGABN" title="原文 : Adding Pod Labels">ポッド・ラベルの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.2HdWxr" title="原文 : To add labels to the Operator Pods set the labels value, either on the command line using --set or in the values file.">オペレータ・ポッドにラベルを追加するには、コマンドラインで<code>--set</code>を使用するか、値ファイルで<code>labels</code>値を設定します。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.9"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3w23N8" title="原文 : Setting labels will only apply the additional labels to the Operator Pods, they will not be applied to any other resource created by the Helm chart."><code>labels</code>を設定すると、追加のラベルがオペレータ・ポッドにのみ適用され、Helmチャートによって作成された他のリソースには適用されません。</span></p>
</p>
</div>
<p><span class="merged" id="all.2zuz5R" title="原文 : For example, using the command line:">たとえば、次のコマンドラインを使用します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set labels.one=value-one \
    --set labels.two=value-two \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.jrqdO" title="原文 : The command above would add the following additional labels one and two to the Operator Pod as shown below:">前述のコマンドでは、次に示すように、オペレータ・ポッドに次のラベル<code>one</code>および<code>two</code>が追加されます:</span></p>

<markup
lang="yaml"

>apiVersion: v1
kind: Pod
metadata:
  name: coherence-operator
  labels:
    one: value-one
    two: value-two</markup>

<p><span class="merged" id="all.1Ay9lA" title="原文 : The same labels could also be specified in a values file:">同じラベルを値ファイルで指定することもできます:</span></p>

<markup

title="add-labels-values.yaml"
>labels:
  one: value-one
  two: value-two</markup>

</div>

<h4 id="_adding_deployment_labels"><span class="merged" id="all.HLULy" title="原文 : Adding Deployment Labels">デプロイメント・ラベルの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.3HA9p9" title="原文 : To add labels to the Operator Deployment set the deploymentLabels value, either on the command line using --set or in the values file.">オペレータ・デプロイメントにラベルを追加するには、コマンドラインで<code>--set</code>を使用するか、値ファイルで<code>deploymentLabels</code>値を設定します。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.10"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.eHe7w" title="原文 : Setting deploymentLabels will only apply the additional labels to the Deployment, they will not be applied to any other resource created by the Helm chart."><code>deploymentLabels</code>を設定すると、追加のラベルがデプロイメントにのみ適用され、Helmチャートによって作成された他のリソースには適用されません。</span></p>
</p>
</div>
<p><span class="merged" id="all.2zuz5R.1" title="原文 : For example, using the command line:">たとえば、次のコマンドラインを使用します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set deploymentLabels.one=value-one \
    --set deploymentLabels.two=value-two \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.jrqdO.1" title="原文 : The command above would add the following additional labels one and two to the Operator Pod as shown below:">前述のコマンドでは、次に示すように、オペレータ・ポッドに次のラベル<code>one</code>および<code>two</code>が追加されます:</span></p>

<markup
lang="yaml"

>apiVersion: apps/v1
kind: Deployment
metadata:
  name: coherence-operator
  labels:
    one: value-one
    two: value-two</markup>

<p><span class="merged" id="all.1Ay9lA.1" title="原文 : The same labels could also be specified in a values file:">同じラベルを値ファイルで指定することもできます:</span></p>

<markup

title="add-labels-values.yaml"
>deploymentLabels:
  one: value-one
  two: value-two</markup>

</div>
</div>

<h3 id="helm-annotations"><span class="merged" id="all.ctz0o" title="原文 : Set Additional Annotations">追加注釈の設定</span></h3>
<div class="section">
<p><span class="merged" id="all.2HE8Re" title="原文 : When installing the Operator with Helm, it is possible to set additional annotations to be applied to the Operator Pods and to the Operator Deployment.">Helmを使用してOperatorをインストールする場合、オペレータ・ポッドおよびオペレータ・デプロイメントに適用される追加の注釈を設定できます。</span></p>


<h4 id="_adding_pod_annotations"><span class="merged" id="all.1PevBK" title="原文 : Adding Pod Annotations">ポッド注釈の追加</span></h4>
<div class="section">
<p><span class="merged" id="all.1NeKgb" title="原文 : To add annotations to the Operator Pods set the annotations value, either on the command line using --set or in the values file.">オペレータ・ポッドに注釈を追加するには、コマンドラインで<code>--set</code>を使用するか、値ファイルで<code>annotations</code>値を設定します。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.11"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.2kJ2CK" title="原文 : Setting annotations will only apply the additional annotations to the Operator Pods, they will not be applied to any other resource created by the Helm chart."><code>annotations</code>を設定すると、オペレータ・ポッドに追加の注釈のみが適用され、Helmチャートによって作成された他のリソースには適用されません。</span></p>
</p>
</div>
<p><span class="merged" id="all.2zuz5R.2" title="原文 : For example, using the command line:">たとえば、次のコマンドラインを使用します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set annotations.one=value-one \
    --set annotations.two=value-two \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.YvWEt" title="原文 : The command above would add the following additional annotations one and two to the Operator Pod as shown below:">前述のコマンドでは、次に示すように、オペレータ・ポッドに次の注釈<code>one</code>および<code>two</code>が追加されます:</span></p>

<markup
lang="yaml"

>apiVersion: v1
kind: Pod
metadata:
  name: coherence-operator
  annotations:
    one: value-one
    two: value-two</markup>

<p><span class="merged" id="all.1aHXze" title="原文 : The same annotations could also be specified in a values file:">同じ注釈を値ファイルで指定することもできます:</span></p>

<markup

title="add-annotations-values.yaml"
>annotations:
  one: value-one
  two: value-two</markup>

</div>

<h4 id="_adding_deployment_annotations"><span class="merged" id="all.2Y3cEV" title="原文 : Adding Deployment Annotations">デプロイメント注釈の追加</span></h4>
<div class="section">
<p><span class="merged" id="all.3RGv6C" title="原文 : To add annotations to the Operator Deployment set the deploymentAnnotations value, either on the command line using --set or in the values file.">オペレータ・デプロイメントに注釈を追加するには、コマンドラインで<code>--set</code>を使用して、または値ファイルで<code>deploymentAnnotations</code>値を設定します。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.12"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.P1hvE" title="原文 : Setting deploymentAnnotations will only apply the additional annotations to the Deployment, they will not be applied to any other resource created by the Helm chart."><code>deploymentAnnotations</code>を設定すると、追加の注釈のみがデプロイメントに適用され、Helmチャートによって作成された他のリソースには適用されません。</span></p>
</p>
</div>
<p><span class="merged" id="all.2zuz5R.3" title="原文 : For example, using the command line:">たとえば、次のコマンドラインを使用します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set deploymentAnnotations.one=value-one \
    --set deploymentAnnotations.two=value-two \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.YvWEt.1" title="原文 : The command above would add the following additional annotations one and two to the Operator Pod as shown below:">前述のコマンドでは、次に示すように、オペレータ・ポッドに次の注釈<code>one</code>および<code>two</code>が追加されます:</span></p>

<markup
lang="yaml"

>apiVersion: apps/v1
kind: Deployment
metadata:
  name: coherence-operator
  annotations:
    one: value-one
    two: value-two</markup>

<p><span class="merged" id="all.1aHXze.1" title="原文 : The same annotations could also be specified in a values file:">同じ注釈を値ファイルで指定することもできます:</span></p>

<markup

title="add-annotations-values.yaml"
>deploymentAnnotations:
  one: value-one
  two: value-two</markup>

</div>
</div>

<h3 id="helm-job"><span class="merged" id="all.ryYBR" title="原文 : CoherenceJob CRD Support">CoherenceJob CRDのサポート</span></h3>
<div class="section">
<p><span class="merged" id="all.zIJXV.spl1" title="原文 : By default, the Operator will install both CRDs, Coherence and CoherenceJob.">デフォルトでは、オペレータはCRD (<code>Coherence</code>および<code>CoherenceJob</code>)の両方をインストールします。</span> <span class="merged" id="all.zIJXV.spl2" title="原文 : If support for CoherenceJob is not required then it can be excluded from being installed setting the Operator command line parameter --enable-jobs to false."><code>CoherenceJob</code>のサポートが不要な場合は、オペレータ・コマンドライン・パラメータ<code>--enable-jobs</code>を<code>false</code>に設定して、インストールから除外できます。</span> </p>

<p><span class="merged" id="all.1G3c44" title="原文 : When installing with Helm, the allowCoherenceJobs value can be set to false to disable support for CoherenceJob resources (the default value is true).">Helmを使用してインストールする場合、<code>allowCoherenceJobs</code>値を<code>false</code>に設定して、<code>CoherenceJob</code>リソースのサポートを無効にできます(デフォルト値は<code>true</code>です)。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set allowCoherenceJobs=false \
    coherence \
    coherence/coherence-operator</markup>

</div>

<h3 id="helm-uninstall"><span class="merged" id="all.xWyRu" title="原文 : Uninstall the Coherence Operator Helm chart">Coherence Operator Helmチャートをアンインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.4Kyu3l" title="原文 : To uninstall the operator:">オペレータをアンインストールするには:</span></p>

<markup
lang="bash"

>helm delete coherence-operator --namespace &lt;namespace&gt;</markup>

</div>
</div>

<h2 id="kubectl"><span class="merged" id="all.g4cZe" title="原文 : Install with Kubectl and Kustomize">KubectlおよびKustomizeでインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.36XeVT" title="原文 : If you want to use yaml directly to install the operator, with something like kubectl, you can use the manifest files published with the GitHub release at this link: 3.5.0 Manifests">yamlを直接使用してオペレータをインストールする場合は、<code>kubectl</code>のように、このリンクでGitHubリリースで公開されたマニフェスト・ファイルを使用できます: <a href="https://github.com/oracle/coherence-operator/releases/download/v3.5.0/coherence-operator-manifests.tar.gz" id="" target="_blank" >3.5.0 マニフェスト</a></span></p>

<p><span class="merged" id="all.3iFoWt" title="原文 : These manifest files are for use with a tool called Kustomize, which is built into kubectl see the documentation here: https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/">これらのマニフェスト・ファイルは、<code>kubectl</code>に組み込まれたKustomizeと呼ばれるツールで使用します。ここにあるドキュメントを参照してください: <a href="https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/" id="" target="_blank" >https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/</a></span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.13"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.1PM3cO.1.spl1" title="原文 : As of v3.5.0 of the Operator the manifest yaml also installs the two CRDs that the Operator uses.">オペレータのv3.5.0以降、マニフェストyamlはオペレータが使用する2つのCRDもインストールします。</span> <span class="merged" id="all.1PM3cO.1.spl2" title="原文 : In previous releases the Operator would install the CRDs when it started but this behaviour is disabled by default when installing with the manifest yaml.">以前のリリースでは、オペレータは起動時にCRDをインストールしていましたが、マニフェストyamlを使用してインストールすると、この動作はデフォルトで無効になっています。</span> </p>
</p>
</div>
<p><span class="merged" id="all.4E19RD" title="原文 : Download the 3.5.0 Manifests from the release page and unpack the file, which should produce a directory called manifests with a structure like this:">リリース・ページから<a href="https://github.com/oracle/coherence-operator/releases/download/v3.5.0/coherence-operator-manifests.tar.gz" id="" target="_blank" >「3.5.0 マニフェスト」</a>をダウンロードし、ファイルを解凍します。これにより、次のような構造を持つ<code>manifests</code>というディレクトリが生成されます:</span></p>

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

>cd ./manager &amp;&amp; kustomize edit set image controller=myregistry/coherence-operator:3.5.0</markup>

<p><span class="merged" id="all.325mTV" title="原文 : Change the name of the Operator image by running the command below, changing the image name to the registry and image name that you are using for the Operator utilities image">次のコマンドを実行してOperatorイメージの名前を変更し、そのイメージ名を、Operatorユーティリティのイメージに使用するレジストリおよびイメージ名に変更</span></p>

<markup
lang="bash"

>cd ./manager &amp;&amp; kustomize edit add configmap env-vars --from-literal OPERATOR_IMAGE=myregistry/coherence-operator:3.5.0</markup>

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

<h2 id="tanzu"><span class="merged" id="all.rVQEp" title="原文 : Install as a VMWare Tanzu Package (Carvel kapp-controller)">VMWare Tanzuパッケージとしてインストール (Carvel kapp-controller)</span></h2>
<div class="section">
<p><span class="merged" id="all.pXaDI.spl1" title="原文 : If using VMWare Tanzu the Coherence Operator can be installed as a package."><a href="https://tanzucommunityedition.io" id="" target="_blank" >VMWare Tanzu</a>を使用する場合、Coherence Operatorをパッケージとしてインストールできます。</span> <span class="merged" id="all.pXaDI.spl2" title="原文 : Under the covers, Tanzu uses the Carvel tool set to deploy packages.">カバーの下では、Tanzuは<a href="https://carvel.dev" id="" target="_blank" >Carvel</a>ツール・セットを使用してパッケージをデプロイします。</span> <span class="merged" id="all.pXaDI.spl3" title="原文 : The Carvel tools can be used outside Tanzu, so the Coherence Operator repo and package images could also be deployed using a standalone Carvel kapp-controller.">CarvelはTanzu外部で使用できるため、Coherence Operatorリポジトリおよびパッケージ・イメージは、スタンドアロンのCarvel <a href="https://carvel.dev/kapp-controller/" id="" target="_blank" >kapp-controller</a>を使用してデプロイすることもできます。</span> </p>

<p><span class="merged" id="all.1QjwLD" title="原文 : The Coherence Operator release published two images required to deploy the Operator as a Tanzu package.">Coherence Operatorリリースでは、OperatorをTanzuパッケージとしてデプロイするために必要な2つのイメージが公開されました。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.16AJbS" title="原文 : container-registry.oracle.com/middleware/coherence-operator-package:3.4.3 - the Coherence Operator package"><code>container-registry.oracle.com/middleware/coherence-operator-package:3.4.3</code> - Coherence Operatorパッケージ</span></p>

</li>
<li>
<p><span class="merged" id="all.OSei6" title="原文 : container-registry.oracle.com/middleware/coherence-operator-repo:3.4.3 - the Coherence Operator repository"><code>container-registry.oracle.com/middleware/coherence-operator-repo:3.4.3</code> - Coherence Operatorリポジトリ</span></p>

</li>
</ul>

<h3 id="_install_the_coherence_repository"><span class="merged" id="all.24VnWu" title="原文 : Install the Coherence Repository">Coherenceリポジトリをインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.4FL8kd.spl1" title="原文 : The first step to deploy the Coherence Operator package in Tanzu is to add the repository.">TanzuでCoherence Operatorパッケージをデプロイする最初のステップは、リポジトリを追加することです。</span> <span class="merged" id="all.4FL8kd.spl2" title="原文 : This can be done using the Tanzu CLI.">これは、Tanzu CLIを使用して実行できます。</span> </p>

<markup
lang="bash"

>tanzu package repository add coherence-repo \
    --url container-registry.oracle.com/middleware/coherence-operator-repo:3.5.0 \
    --namespace coherence \
    --create-namespace</markup>

<p><span class="merged" id="all.r5IJz" title="原文 : The installed repositories can be listed using the CLI:">インストールされたリポジトリは、CLIを使用して一覧表示できます:</span></p>

<markup
lang="bash"

>tanzu package repository list --namespace coherence</markup>

<p><span class="merged" id="all.3XKtX2" title="原文 : which should display something like the following">次のようなものを表示します</span></p>

<markup
lang="bash"

>NAME            REPOSITORY                                                        TAG  STATUS               DETAILS
coherence-repo  container-registry.oracle.com/middleware/coherence-operator-repo  1h   Reconcile succeeded</markup>

<p><span class="merged" id="all.Gxtib" title="原文 : The available packages in the Coherence repository can also be displayed using the CLI">Coherenceリポジトリで使用可能なパッケージは、CLIを使用して表示することもできます</span></p>

<markup
lang="bash"

>tanzu package available list --namespace coherence</markup>

<p><span class="merged" id="all.338Pby" title="原文 : which should include the Operator package, coherence-operator.oracle.github.com something like the following"><code>coherence-operator.oracle.github.com</code>というオペレータ・パッケージを含める必要があります</span></p>

<markup
lang="bash"

>NAME                                  DISPLAY-NAME               SHORT-DESCRIPTION                                             LATEST-VERSION
coherence-operator.oracle.github.com  Oracle Coherence Operator  A Kubernetes operator for managing Oracle Coherence clusters  3.5.0</markup>

</div>

<h3 id="_install_the_coherence_operator_package"><span class="merged" id="all.4ddwvV" title="原文 : Install the Coherence Operator Package">Coherence Operatorパッケージのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.38JRZy" title="原文 : Once the Coherence Operator repository has been installed, the coherence-operator.oracle.github.com package can be installed, which will install the Coherence Operator itself.">Coherence Operatorリポジトリがインストールされると、<code>coherence-operator.oracle.github.com</code>パッケージをインストールでき、Coherence Operator自体がインストールされます。</span></p>

<markup
lang="bash"

>tanzu package install coherence \
    --package-name coherence-operator.oracle.github.com \
    --version 3.5.0 \
    --namespace coherence</markup>

<p><span class="merged" id="all.HoaXg" title="原文 : The Tanzu CLI will display the various steps it is going through to install the package and if all goes well, finally display Added installed package &apos;coherence&apos; The packages installed in the coherence namespace can be displayed using the CLI.">Tanzu CLIでは、パッケージのインストールに使用する様々なステップが表示され、すべてうまくいけば<code>Added installed package 'coherence'</code>が表示されます。<code>coherence</code>ネームスペースにインストールされたパッケージは、CLIを使用して表示できます。</span></p>

<markup
lang="bash"

>tanzu package installed list --namespace coherence</markup>

<p><span class="merged" id="all.1NCzuP" title="原文 : which should display the Coherence Operator package.">Coherence Operatorパッケージを表示します。</span></p>

<markup
lang="bash"

>NAME       PACKAGE-NAME                          PACKAGE-VERSION  STATUS
coherence  coherence-operator.oracle.github.com  3.5.0            Reconcile succeeded</markup>

<p><span class="merged" id="all.3WbWXb" title="原文 : The Operator is now installed and ready to mage Coherence clusters.">オペレータがインストールされ、Coherenceクラスタを形成する準備ができました。</span></p>

</div>
</div>
</doc-view>
