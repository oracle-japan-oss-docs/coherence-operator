<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coherence_federation"><span class="merged" id="all.bI7fe"  title="原文:: Coherence Federation">Coherenceフェデレーション</span></h2>
<div class="section">
<p><span class="merged" id="all.4f3AVW.spl1" title="原文 : This example demonstrates the Coherence federation feature which allows you to federate cache data asynchronously across multiple geographically dispersed clusters.">この例では、地理的に分散した複数のクラスタ間でキャッシュ・データを非同期にフェデレートできるCoherenceフェデレーション機能を示します。</span> <span class="merged" id="all.4f3AVW.spl2"  title="原文: Cached data is federated across clusters to provide redundancy, off-site backup, and multiple points of access for application users in different geographical locations.">キャッシュ内のデータはクラスタ間で結合され、地理的に異なる場所のアプリケーション・ユーザーに対して冗長性、オフサイト・バックアップおよび複数のアクセス・ポイントを提供します。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2BXmtv" title="原文 : Coherence federation feature requires Coherence Grid Edition."><strong>Coherenceフェデレーション機能には、Coherence Grid Editionが必要です。</strong></span></p>
</div>
<p><span class="merged" id="all.2cHa6l.spl1" title="原文 : To demonstrate this feature, we will deploy two Coherence clusters, using the Coherence Operator, located on separate OKE (Kubernetes Engine) clusters on Oracle Cloud (OCI).">この機能を示すために、Oracle Cloud (OCI)上の個別のOKE (Kubernetesエンジン)クラスタにある<a href="https://github.com/oracle/coherence-operator" id="" target="_blank" >Coherence Operator</a>を使用して、2つのCoherenceクラスタをデプロイします。</span> <span class="merged" id="all.2cHa6l.spl2" title="原文 : It is assumed that you have two OCI regions, with these OKE clusters already configured, and have configured Dynamic Routing Gateways (DRGs) to connect the two regions together.">2つのOCIリージョンがあり、これらのOKEクラスタがすでに構成されており、2つのリージョンを接続するようにDynamic Routing Gateways (DRG)が構成されていることを前提としています。</span> </p>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.2kWuIy" title="原文 : Although this example uses OCI, the concepts can be applied to other cloud providers to achieve the same result.">この例ではOCIを使用していますが、同じ結果を得るために、他のクラウド・プロバイダに概念を適用できます。</span></p>
</div>
<p><span class="merged" id="all.4MnH0b" title="原文 : They key (cloud platform-agnostic) aspects of the example are:">この例の主な側面(クラウド・プラットフォームに依存しない)は次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4VihZ3" title="原文 : The two Kubernetes clusters are located in separate cloud regions">2つのKubernetesクラスタは、別々のクラウド・リージョンに配置されます</span></p>

</li>
<li>
<p><span class="merged" id="all.2n3jP8" title="原文 : Each region must be able to be connected with or communicate with the other region">各リージョンは、他のリージョンと接続または通信できる必要があります</span></p>

</li>
<li>
<p><span class="merged" id="all.M2BEB" title="原文 : Each region must have a network load balancer (LB), created either via deployment yaml or configured, that can forward traffic on port 40000, in our case, to the federation service in the OKE cluster">各リージョンにはネットワーク・ロード・バランサ(LB)が必要です。LBはデプロイメントyamlを介して作成されるか、構成されていて、この場合はポート40000のトラフィックをOKEクラスタのフェデレーション・サービスに転送できます</span></p>

</li>
<li>
<p><span class="merged" id="all.2dK2v1" title="原文 : Routing rules must be setup to allow LBs to send traffic over the specified ports between the regions">LBがリージョン間で指定したポートを介してトラフィックを送信できるように、ルーティング・ルールを設定する必要があります</span></p>

</li>
</ul>
<p><span class="merged" id="all.4VgEHL" title="原文 : The diagram below outlines the setup for this example and uses the following OCI regions that have been configured with the relevant Kubernetes contexts.">次の図では、この例の設定の概要を示し、関連するKubernetesコンテキストで構成されている次のOCIリージョンを使用します。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1kt8lP" title="原文 : Melbourne region has a Kubernetes context of c1">メルボルン・リージョンには、<code>c1</code>のKubernetesコンテキストがあります</span></p>

</li>
<li>
<p><span class="merged" id="all.1TPcVz" title="原文 : Sydney region has a Kubernetes context of c3">シドニー・リージョンには、<code>c3</code>のKubernetesコンテキストがあります</span></p>

</li>
</ul>


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="フェデレーテッド設定" src="./images/images/federated-coherence.png" width="100%" /> </v-card-text> </v-card>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1hjnLO.spl1" title="原文 : Although some network setup information is outlined below, it is assumed you have knowledge of, or access to Oracle Cloud Infrastructure (OCI) administrators who can set up cross region networking using Dynamic Routing Gateways (DRG’s) and Remote Peering Connections."><strong>ネットワーキング設定情報の一部を次に概説しますが、Dynamic Routing Gateways (DRG)およびリモート・ピアリング接続を使用してクロス・リージョン・ネットワーキングを設定できるOracle Cloud Infrastructure (OCI)管理者について知識があるか、またはアクセスできるものとします。</span> <span class="merged" id="all.1hjnLO.spl2" title="原文 : DRG Documentation below for more information.">情報の詳細は、次のDRGドキュメントを参照してください。</strong></span> </p>
</div>
<p><span class="merged" id="all.3JrnIz" title="原文 : See the links below for more information on various topics described above:">前述の各種トピックの詳細は、次のリンクを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2Y1rtx" title="原文 : Coherence Operator on GitHub"><a href="https://github.com/oracle/coherence-operator" id="" target="_blank" >GitHubのCoherence Operator</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3GnMRy" title="原文 : Creating OKE Clusters"><a href="https://docs.oracle.com/en-us/iaas/Content/ContEng/Tasks/create-cluster.htm" id="" target="_blank" >OKEクラスタの作成</a></span></p>

</li>
<li>
<p><span class="merged" id="all.YZcud" title="原文 : Dynamic Routing Gateway Documentation"><a href="https://www.oracle.com/au/cloud/networking/dynamic-routing-gateway/" id="" target="_blank" >Dynamic Routing Gatewayのドキュメント</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3qT7RA" title="原文 : Coherence Federation Documentation"><a href="https://docs.oracle.com/en/middleware/fusion-middleware/coherence/14.1.2/administer/federating-caches-clusters.html" id="" target="_blank" >Coherenceフェデレーションのドキュメント</a></span></p>

</li>
<li>
<p><span class="merged" id="all.EjR5o" title="原文 : Obtaining Commercial Coherence Images"><router-link @click.native="this.scrollFix('#docs/installation/04_obtain_coherence_images.adoc')" to="#docs/installation/04_obtain_coherence_images.adoc">商用Coherenceイメージの取得</router-link></span></p>

</li>
</ul>
<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.9"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.frKe" title="原文 : The complete source code for this example is in the Coherence Operator GitHub repository.">この例の完全なソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/100_federation" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>

<h3 id="_what_the_example_will_cover"><span class="merged" id="all.2Qjxxs.1" title="原文 : What the Example will Cover">例でカバーされる内容</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1y0Gua" title="原文 : Prerequisites and Network Setup"><router-link @click.native="this.scrollFix('#prereqs')" to="#prereqs">前提条件とネットワーク設定</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3aSQfI" title="原文 : Obtain your container registry Auth token"><router-link @click.native="this.scrollFix('#container-registry')" to="#container-registry">コンテナ・レジストリ認証トークンの取得</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1EW2xo" title="原文 : Create OKE clusters"><router-link @click.native="this.scrollFix('#create-oke')" to="#create-oke">OKEクラスタの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.u4U8A" title="原文 : Complete Network Setup"><router-link @click.native="this.scrollFix('#network-setup')" to="#network-setup">ネットワーク設定の完了</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.18FxOX" title="原文 : Prepare the OKE clusters"><router-link @click.native="this.scrollFix('#prepare')" to="#prepare">OKEクラスタの準備</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.OLysA.1" title="原文 : Install the Coherence Operator"><router-link @click.native="this.scrollFix('#install-operator')" to="#install-operator">Coherence Operatorのインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3bRBBu.1" title="原文 : Create the example namespace"><router-link @click.native="this.scrollFix('#create-the-example-namespace')" to="#create-the-example-namespace">サンプルのネームスペースの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.130ZYo" title="原文 : Create image pull secrets and configmaps"><router-link @click.native="this.scrollFix('#create-secret')" to="#create-secret">イメージ・プル・シークレットおよび構成マップの作成</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.3EDzaY" title="原文 : Explore the Configuration"><router-link @click.native="this.scrollFix('#explore')" to="#explore">構成の確認</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3x3bZD" title="原文 : Coherence Configuration"><router-link @click.native="this.scrollFix('#explore-coherence')" to="#explore-coherence">Coherence構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1DTq05" title="原文 : Coherence Operator YAML"><router-link @click.native="this.scrollFix('#expore-yaml')" to="#expore-yaml">Coherence Operator YAML</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.3oZbA7" title="原文 : Deploy the Example"><router-link @click.native="this.scrollFix('#deploy')" to="#deploy">例のデプロイ</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.38TjOZ" title="原文 : Update the OCID’s for the federation service"><router-link @click.native="this.scrollFix('#update-ocid')" to="#update-ocid">フェデレーション・サービスのOCIDの更新</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1iefwi" title="原文 : Install the Primary Coherence cluster"><router-link @click.native="this.scrollFix('#install-primary')" to="#install-primary">プライマリCoherenceクラスタのインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4Yn0pp" title="原文 : Install the Secondary Coherence cluster"><router-link @click.native="this.scrollFix('#install-secondary')" to="#install-secondary">セカンダリCoherenceクラスタのインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.132Ibm" title="原文 : Re-apply the yaml for both clusters"><router-link @click.native="this.scrollFix('#re-apply')" to="#re-apply">両方のクラスタのyamlを再適用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.44amWh" title="原文 : Check federation status"><router-link @click.native="this.scrollFix('#check-federation')" to="#check-federation">フェデレーション・ステータスの確認</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.1sDOcG" title="原文 : Run the example"><router-link @click.native="this.scrollFix('#run')" to="#run">例の実行</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.5cotR" title="原文 : Add Data in the primary cluster"><router-link @click.native="this.scrollFix('#add-data-p')" to="#add-data-p">プライマリ・クラスタへのデータの追加</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4evod4" title="原文 : Validate data in the secondary cluster"><router-link @click.native="this.scrollFix('#validate-data-p')" to="#validate-data-p">セカンダリ・クラスタ内のデータのバリデート</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3gcM4s" title="原文 : Add Data in the secondary cluster"><router-link @click.native="this.scrollFix('#add-data-s')" to="#add-data-s">セカンダリ・クラスタにデータを追加</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3ZGMFX" title="原文 : Validate data in the primary cluster"><router-link @click.native="this.scrollFix('#validate-data-s')" to="#validate-data-s">プライマリ・クラスタ内のデータのバリデート</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.2b7AjH" title="原文 : Cleaning Up"><router-link @click.native="this.scrollFix('#cleanup')" to="#cleanup">クリーン・アップしています</router-link></span></p>

</li>
</ul>
</div>

<h3 id="prereqs"><span class="merged" id="all.2ui5Eq" title="原文 : Prerequisites and Network Setup">前提条件とネットワーク設定</span></h3>
<div class="section">

<h4 id="container-registry"><span class="merged" id="all.3WOwFJ" title="原文 : Obtain your container registry Auth token">コンテナ・レジストリ認証トークンの取得</span></h4>
<div class="section">
<p><span class="merged" id="all.kJifS" title="原文 : In this example we are using the Coherence Grid Edition container from Oracle’s container registry.">この例では、Oracleのコンテナ・レジストリからCoherence Grid Editionコンテナを使用しています。</span></p>

<ul class="ulist">
<li>
<p><code>container-registry.oracle.com/middleware/coherence:14.1.2.0.0</code></p>

</li>
</ul>
<p><span class="merged" id="all.1EMZM9" title="原文 : To be able to pull the above image you need to do the following:">前述のイメージをプルできるようにするには、次の操作を行う必要があります:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.ng1a9.spl1" title="原文 : Sign in to the Container Registry at https://container-registry.oracle.com/."><code><a href="https://container-registry.oracle.com/" id="" target="_blank" >https://container-registry.oracle.com/</a></code>でコンテナ・レジストリにサインインします。</span> <span class="merged" id="all.ng1a9.spl2" title="原文 : (If you don’t have an account, with Oracle you will need to create one)">(アカウントがない場合は、Oracleを使用してアカウントを作成する必要があります)</span> 

</li>
<li>
<span class="merged" id="all.1VAc4z" title="原文 : Once singed in, search for coherence and select the link for Oracle Coherence">シングル・インしたら、<code>coherence</code>を検索し、<code>Oracle Coherence</code>のリンクを選択</span>

</li>
<li>
<span class="merged" id="all.33uuA7" title="原文 : If you have not already, you will need to accept the &apos;Oracle Standard Terms and Conditions&apos; on the right before you are able to pull the image">イメージをプルできるようにするには、右側の「Oracle Standard Terms and Conditions」に同意する必要があります</span>

</li>
<li>
<span class="merged" id="all.XQlS2" title="原文 : Once you have accepted the terms and condition click on the drop-down next to your name on the top right and select Auth Token.">条件に同意したら、右上の名前の横にあるドロップダウンをクリックし、<code>Auth Token</code>を選択します。</span>

</li>
<li>
<span class="merged" id="all.33hExF" title="原文 : Click on Generate Token and save this in a secure place for use further down."><code>Generate Token</code>をクリックし、さらに下で使用するために安全な場所に保存します。</span>

</li>
</ol>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.39hSMF" title="原文 : See the OCI documentation for more information on creating your Auth token.">認証トークンの作成の詳細は、<a href="https://docs.oracle.com/en-us/iaas/Content/Registry/Tasks/registrygettingauthtoken.htm" id="" target="_blank" >「OCIのドキュメント」</a>を参照してください。</span></p>
</div>
</div>

<h4 id="create-oke"><span class="merged" id="all.VmxRE" title="原文 : Create OKE clusters">OKEクラスタの作成</span></h4>
<div class="section">
<p><span class="merged" id="all.2JgSwy" title="原文 : This example assumes you have already created two OKE clusters in separate regions.">この例では、別々のリージョンに2つのOKEクラスタがすでに作成されていることを前提としています。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.40u6yt" title="原文 : For more information on creating OKE clusters, see the OCI documentation.">OKEクラスタの作成の詳細は、<a href="https://docs.oracle.com/en-us/iaas/Content/devops/using/create_oke_environment.htm" id="" target="_blank" >「OCIのドキュメント」</a>を参照してください。</span></p>
</div>
</div>

<h4 id="network-setup"><span class="merged" id="all.vqkA7" title="原文 : Complete Network Setup">ネットワーク設定の完了</span></h4>
<div class="section">
<p><span class="merged" id="all.3AApn1" title="原文 : You must ensure you have the following for each region:">リージョンごとに次のものがあることを確認する必要があります:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.gvYiG" title="原文 : A Dynamic Routing Gateway must be setup and must have a remote peering connection to the other region">Dynamic Routing Gatewayが設定されており、他のリージョンへのリモート・ピアリング接続が必要です</span>

</li>
<li>
<span class="merged" id="all.1ffK5K" title="原文 : The routing table associated with the worker nodes (OKE cluster) subnet for each region needs to have a rule to route traffic to the other region VCN via the Dynamic Routing Gateway">各リージョンのワーカー・ノード(OKEクラスタ)サブネットに関連付けられているルーティング表には、Dynamic Routing Gatewayを介してトラフィックを他のリージョンVCNにルーティングするルールが必要です</span>

</li>
<li>
<span class="merged" id="all.3Oj6hS" title="原文 : In this example, we are exposing coherence on port 40000 for federation, we require the following Security rules:">この例では、フェデレーションのポート40000にcoherenceを公開しています。次のセキュリティ・ルールが必要です:</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.7W7b6" title="原文 : Egress for worker nodes to get other cluster load balancer via the DRG on port 40000">ワーカー・ノードがポート40000でDRGを介して他のクラスタ・ロード・バランサを取得するためのエグレス</span>

</li>
<li>
<span class="merged" id="all.mRhrg" title="原文 : Ingress from worker to receive from their own load balancer on port 40000">ポート40000の独自のロード・バランサから受信するワーカーからのイングレス</span>

</li>
<li>
<span class="merged" id="all.2UKmQs" title="原文 : Ingress rule on own LBR to receive traffic from other region on port 40000">ポート40000の他のリージョンからのトラフィックを受信する独自のLBRのイングレス・ルール</span>

</li>
</ol>
</li>
<li>
<span class="merged" id="all.2V4xMo" title="原文 : Each region has a dedicated private subnet for the network load balancer">各リージョンには、ネットワーク・ロード・バランサ専用のプライベート・サブネットがあります</span>

</li>
</ol>
<p><span class="merged" id="all.1hugxq" title="原文 : Item 3 above is available via the OCI console via VCN→Security→Network Security Group Information→Worker Node Subnet→Security Rules.">前述の項目3は、「VCN」→「セキュリティ」→「ネットワーク・セキュリティ・グループ情報」→「ワーカー・ノード・サブネット」→「セキュリティ・ルール」を介してOCIコンソールから入手できます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1dDfX1" title="原文 : Refer to the DRG Documentation for more information.">詳細は、<a href="https://www.oracle.com/au/cloud/networking/dynamic-routing-gateway/" id="" target="_blank" >「DRGドキュメント」</a>を参照してください。</span></p>
</div>
</div>
</div>

<h3 id="prepare"><span class="merged" id="all.2y1fnB" title="原文 : Prepare the OKE clusters">OKEクラスタの準備</span></h3>
<div class="section">
<p><span class="merged" id="all.3wrwmi" title="原文 : For each of the OKE clusters, carry out the following">OKEクラスタごとに、次を実行</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.LO8kI.1" title="原文 : Install the Coherence Operator">Coherence Operatorのインストール</span>

</li>
<li>
<span class="merged" id="all.3ezoGY.1" title="原文 : Create the example namespace">サンプルのネームスペースの作成</span>

</li>
<li>
<span class="merged" id="all.2IU2oA" title="原文 : Create image pull secrets and configmaps">イメージ・プル・シークレットおよび構成マップの作成</span>

</li>
</ol>

<h4 id="install-operator"><span class="merged" id="all.2CLSny.1" title="原文 : 1. Install the Coherence Operator">1. Coherence Operatorのインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.3vzQcc" title="原文 : To run the examples below, you will need to have installed the Coherence Operator, do this using whatever method you prefer from the Installation Guide.">次の例では、Coherence Operatorをインストールし、<a href="https://oracle.github.io/coherence-operator/docs/latest/#/docs/installation/001_installation" id="" target="_blank" >「インストール・ガイド」</a>から必要なメソッドを使用してインストールする必要があります。</span></p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.4.3/coherence-operator.yaml</markup>

<p><span class="merged" id="all.2R6fzo" title="原文 : Once you complete, confirm the operator is running, for example:">完了したら、次のようにオペレータが実行中であることを確認します:</span></p>

<markup
lang="bash"

>kubectl get pods -n coherence

NAME                                                    READY   STATUS    RESTARTS   AGE
coherence-operator-controller-manager-846887895-d7wzg   1/1     Running   0          40s
coherence-operator-controller-manager-846887895-l7dcl   1/1     Running   0          40s
coherence-operator-controller-manager-846887895-rtsjv   1/1     Running   0          40s</markup>

</div>

<h4 id="create-the-example-namespace"><span class="merged" id="all.1hBbD4" title="原文 : 2. Create the example namespace">2. サンプル・ネームスペースの作成</span></h4>
<div class="section">
<p><span class="merged" id="all.3GQp8e" title="原文 : First, run the following command to create the namespace, coherence-example, for the example:">まず、次のコマンドを実行して、例のようにネームスペース、coherence-exampleを作成します:</span></p>

<markup
lang="bash"

>kubectl create namespace coherence-example

namespace/coherence-example created</markup>

</div>

<h4 id="create-secret"><span class="merged" id="all.1wRW4L" title="原文 : 3. Create image pull secrets and configmaps">3. イメージ・プル・シークレットおよび構成マップの作成</span></h4>
<div class="section">
<p><span class="merged" id="all.4dmWFS" title="原文 : This example requires a number of secrets:">この例では、いくつかのシークレットが必要です:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2hW3cl" title="原文 : An image pull secret named ocr-pull-secret containing your OCR credentials to be used by the example.">例で使用されるOCR資格証明を含む<code>ocr-pull-secret</code>という名前のイメージ・プル・シークレット。</span></p>

</li>
</ul>
<p><span class="merged" id="all.2EBCmf" title="原文 : Use a command similar to the following to create the image pull secret:">イメージ・プル・シークレットを作成するには、次のようなコマンドを使用します:</span></p>

<markup
lang="bash"

>kubectl create secret docker-registry ocr-pull-secret \
    --docker-server=container-registry.oracle.com \
    --docker-username="&lt;username&gt;" --docker-password="&lt;password&gt;" \
    --docker-email="&lt;email&gt;" -n coherence-example</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1HQK79" title="原文 : A store secret named storage-config to store the Coherence configuration files.">Coherence構成ファイルを格納する<code>storage-config</code>という名前のストア・シークレット。</span></p>

</li>
</ul>
<p><span class="merged" id="all.vEywF" title="原文 : Run the following command to create the config secret:">次のコマンドを実行して、構成シークレットを作成します:</span></p>

<markup
lang="bash"

>kubectl create secret generic storage-config -n coherence-example \
    --from-file=src/main/resources/tangosol-coherence-override.xml \
    --from-file=src/main/resources/storage-cache-config.xml</markup>

</div>
</div>

<h3 id="explore"><span class="merged" id="all.2pCyE" title="原文 : Explore the Configuration">構成の確認</span></h3>
<div class="section">

<h4 id="explore-coherence"><span class="merged" id="all.1ZFdm9"  title="原文:: Coherence Configuration">コヒーレンス構成</span></h4>
<div class="section">
<p><span class="merged" id="all.2B7Tkg" title="原文 : In this example there are two Coherence Configuration files.">この例では、2つのCoherence構成ファイルがあります。</span></p>

<p><span class="merged" id="all.1rmLmU" title="原文 : Coherence Operational Override"><strong>Coherence操作オーバーライド</strong></span></p>

<p><span class="merged" id="all.1t9ZzD.spl1" title="原文 : The Coherence override file typically contains information regarding the cluster configuration.">Coherenceオーバーライド・ファイルには、通常、クラスタ構成に関する情報が含まれます。</span> <span class="merged" id="all.1t9ZzD.spl2" title="原文 : In this case we are specifying the edition and the federation configuration.">この場合、エディションとフェデレーション構成を指定します。</span> </p>

<markup
lang="xml"

>&lt;?xml version="1.0"?&gt;
&lt;!--
  ~ Copyright (c) 2021, 2025 Oracle and/or its affiliates.
  ~ Licensed under the Universal Permissive License v 1.0 as shown at
  ~ http://oss.oracle.com/licenses/upl.
  --&gt;

&lt;!--
  Grid Edition version of the override file which includes Federation.
--&gt;
&lt;coherence xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xmlns="http://xmlns.oracle.com/coherence/coherence-operational-config"
           xsi:schemaLocation="http://xmlns.oracle.com/coherence/coherence-operational-config coherence-operational-config.xsd"&gt;

  &lt;license-config&gt;
    &lt;edition-name system-property="coherence.edition"&gt;GE&lt;/edition-name&gt;
  &lt;/license-config&gt;

  &lt;!--
    Define a federation configuration for PrimaryCluster and SecondaryCluster
    where the default topology is Active-Active.
    --&gt;
  &lt;federation-config&gt;
    &lt;participants&gt;
      &lt;participant&gt;
        &lt;name system-property="primary.cluster"/&gt; <span class="conum" data-value="1" />
        &lt;initial-action&gt;start&lt;/initial-action&gt;
        &lt;remote-addresses&gt;
          &lt;socket-address&gt;
            &lt;address system-property="primary.cluster.address"/&gt;
            &lt;port    system-property="primary.cluster.port"/&gt;
          &lt;/socket-address&gt;
        &lt;/remote-addresses&gt;
      &lt;/participant&gt;
      &lt;participant&gt;
        &lt;name system-property="secondary.cluster"/&gt; <span class="conum" data-value="2" />
        &lt;initial-action&gt;start&lt;/initial-action&gt;
        &lt;remote-addresses&gt;
          &lt;socket-address&gt;
            &lt;address system-property="secondary.cluster.address"/&gt;
            &lt;port    system-property="secondary.cluster.port"/&gt;
          &lt;/socket-address&gt;
        &lt;/remote-addresses&gt;
      &lt;/participant&gt;
    &lt;/participants&gt;
    &lt;topology-definitions&gt;
      &lt;active-active&gt;
        &lt;name&gt;Active&lt;/name&gt; <span class="conum" data-value="3" />
        &lt;active system-property="primary.cluster"/&gt;
        &lt;active system-property="secondary.cluster"/&gt;
      &lt;/active-active&gt;
    &lt;/topology-definitions&gt;
  &lt;/federation-config&gt;
&lt;/coherence&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3GuV7o.spl1" title="原文 : Defines the primary-cluster name, address and port.">プライマリ・クラスタの名前、アドレス、およびポートを定義します。</span> <span class="merged" id="all.3GuV7o.spl2" title="原文 : These are overridden by environment variables in the deployment yaml.">これらは、デプロイメントyamlの環境変数によってオーバーライドされます。</span> </li>
<li data-value="2"><span class="merged" id="all.3TpS4z" title="原文 : Defines the secondary-cluster name, address and port.">セカンダリ・クラスタの名前、アドレス、およびポートを定義します。</span></li>
<li data-value="3"><span class="merged" id="all.3dXbhd" title="原文 : Sets the topology to be active-active">トポロジをアクティブ/アクティブに設定</span></li>
</ul>
<p><span class="merged" id="all.2V7at3"  title="原文:: Coherence Cache Configuration"><strong>Coherenceキャッシュ構成</strong></span></p>

<p><span class="merged" id="all.4Le87C.spl1" title="原文 : The Coherence cache configuration file contains the cache definitions.">Coherenceキャッシュ構成ファイルには、キャッシュ定義が含まれます。</span> <span class="merged" id="all.4Le87C.spl2" title="原文 : In this case we are specifying that all caches are federated.">この場合、すべてのキャッシュがフェデレートされるように指定します。</span> </p>

<markup
lang="xml"

>&lt;?xml version='1.0'?&gt;

&lt;!--
  ~ Copyright (c) 2021, 2025 Oracle and/or its affiliates.
  ~ Licensed under the Universal Permissive License v 1.0 as shown at
  ~ http://oss.oracle.com/licenses/upl.
  --&gt;

&lt;cache-config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xmlns="http://xmlns.oracle.com/coherence/coherence-cache-config"
              xsi:schemaLocation="http://xmlns.oracle.com/coherence/coherence-cache-config coherence-cache-config.xsd"&gt;

  &lt;caching-scheme-mapping&gt;
    &lt;cache-mapping&gt; <span class="conum" data-value="1" />
      &lt;cache-name&gt;*&lt;/cache-name&gt;
      &lt;scheme-name&gt;server&lt;/scheme-name&gt;
    &lt;/cache-mapping&gt;
  &lt;/caching-scheme-mapping&gt;

  &lt;caching-schemes&gt;

    &lt;federated-scheme&gt; <span class="conum" data-value="2" />
      &lt;scheme-name&gt;server&lt;/scheme-name&gt;
      &lt;backing-map-scheme&gt;
        &lt;local-scheme&gt;
          &lt;unit-calculator&gt;BINARY&lt;/unit-calculator&gt;
        &lt;/local-scheme&gt;
      &lt;/backing-map-scheme&gt;
      &lt;autostart&gt;true&lt;/autostart&gt;
      &lt;address-provider&gt;
        &lt;local-address&gt;  <span class="conum" data-value="3" />
          &lt;address system-property="coherence.extend.address"/&gt;
          &lt;port system-property="coherence.federation.port"&gt;40000&lt;/port&gt;
        &lt;/local-address&gt;
      &lt;/address-provider&gt;
      &lt;topologies&gt;
        &lt;topology&gt;
          &lt;name&gt;Active&lt;/name&gt;  <span class="conum" data-value="4" />
        &lt;/topology&gt;
      &lt;/topologies&gt;
    &lt;/federated-scheme&gt;
  &lt;/caching-schemes&gt;
&lt;/cache-config&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1IlQYp" title="原文 : Defines the cache mapping for all caches, &apos;*&apos;, to map to the server scheme."><code>server</code>スキームにマップする、すべてのキャッシュのキャッシュ・マッピング'*'を定義します。</span></li>
<li data-value="2"><span class="merged" id="all.1kmkmR" title="原文 : The server scheme is a federated cache scheme"><code>server</code>スキームはフェデレーテッド・キャッシュ・スキームです</span></li>
<li data-value="3"><span class="merged" id="all.1nwu6i.spl1" title="原文 : Defines the local address and port on which to listen.">リスニングするローカル・アドレスおよびポートを定義します。</span> <span class="merged" id="all.1nwu6i.spl2" title="原文 : Empty address will translate to 0.0.0.0">空のアドレスは<code>0.0.0.0</code>に変換されます</span> </li>
<li data-value="4"><span class="merged" id="all.2XoDQP" title="原文 : Specifies the topology, referenced above, to use.">使用するトポロジを指定します(前述の参照)。</span></li>
</ul>
</div>

<h4 id="expore-yaml"><span class="merged" id="all.1HPPL9" title="原文 : Coherence Operator YAML">Coherence Operator YAML</span></h4>
<div class="section">
<p><span class="merged" id="all.25ietD"  title="原文:: Primary Cluster"><strong>プライマリ・クラスタ</strong></span></p>

<p><span class="merged" id="all.4dFofp" title="原文 : The following yaml file is used by the Coherence Operator to deploy the primary cluster.">次のyamlファイルは、プライマリ・クラスタをデプロイするためにCoherence Operatorで使用されます。</span></p>

<markup
lang="yaml"

>#
# Copyright (c) 2021, 2025 Oracle and/or its affiliates.
# Licensed under the Universal Permissive License v 1.0 as shown at
# http://oss.oracle.com/licenses/upl.
#
# Federation Example
# Primary cluster in an Active/Active topology
apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: primary-cluster <span class="conum" data-value="1" />
spec:
  jvm:
    classpath:
      - /config
      - /u01/oracle/oracle_home/coherence/lib/coherence.jar
  env: <span class="conum" data-value="2" />
    - name: "PRIMARY_CLUSTER"
      value: "primary-cluster"
    - name: "PRIMARY_CLUSTER_ADDRESS"
      value: ""
    - name: "PRIMARY_CLUSTER_PORT"
      value: "40000"
    - name: "SECONDARY_CLUSTER"
      value: "secondary-cluster"
    - name: "SECONDARY_CLUSTER_ADDRESS"
      value: ""
    - name: "SECONDARY_CLUSTER_PORT"
      value: "40000"
  secretVolumes: <span class="conum" data-value="3" />
    - mountPath: /config
      name: storage-config
  ports:
    - name: "federation" <span class="conum" data-value="4" />
      port: 40000
      protocol: TCP
      service:
        port: 40000
        type: LoadBalancer
        annotations: <span class="conum" data-value="5" />
          oci.oraclecloud.com/load-balancer-type: "nlb"
          oci-network-load-balancer.oraclecloud.com/internal: "true"
          oci-network-load-balancer.oraclecloud.com/subnet: "(Internal subnet OCID - REPLACE ME)"
          oci-network-load-balancer.oraclecloud.com/oci-network-security-groups: "(OCID of the NSG - REPLACE ME)"
    - name: management
  coherence:  <span class="conum" data-value="6" />
    cacheConfig: /config/storage-cache-config.xml
    overrideConfig: /config/tangosol-coherence-override.xml
    logLevel: 9
  image: container-registry.oracle.com/middleware/coherence:14.1.2.0.0 <span class="conum" data-value="7" />
  imagePullSecrets:
    - name: ocr-pull-secret
  replicas: 3</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.MdZRM"  title="原文:: The cluster name">クラスタ名</span></li>
<li data-value="2"><span class="merged" id="all.2ZsR5P" title="原文 : Environment variables to override the settings in the tangosol-coherence-override.xml."><code>tangosol-coherence-override.xml</code>の設定をオーバーライドする環境変数。</span></li>
<li data-value="3"><span class="merged" id="all.Z6eQu" title="原文 : The /config path containing the xml files">xmlファイルを含む<code>/config</code>パス</span></li>
<li data-value="4"><span class="merged" id="all.3ekx8X" title="原文 : The federation port definitions">フェデレーション・ポート定義</span></li>
<li data-value="5"><span class="merged" id="all.4NjyqY" title="原文 : The annotations to instruct OCI where to create the load balancer">OCIにロード・バランサを作成する場所に指示する注釈</span></li>
<li data-value="6"><span class="merged" id="all.1ekhtO" title="原文 : The cache config and override files">キャッシュ構成ファイルおよびオーバーライド・ファイル</span></li>
<li data-value="7"><span class="merged" id="all.4TutTp" title="原文 : The image and pull secrets">イメージおよびプル・シークレット</span></li>
</ul>
<p><span class="merged" id="all.1n5iBa" title="原文 : Secondary Cluster"><strong>セカンダリ・クラスタ</strong></span></p>

<p><span class="merged" id="all.33wYCo" title="原文 : The following yaml is for the secondary cluster.">次のyamlは、セカンダリ・クラスタ用です。</span></p>

<markup
lang="yaml"

>#
# Copyright (c) 2021, 2025 Oracle and/or its affiliates.
# Licensed under the Universal Permissive License v 1.0 as shown at
# http://oss.oracle.com/licenses/upl.
#
# Federation Example
# Primary cluster in an Active/Active topology
apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: primary-cluster <span class="conum" data-value="1" />
spec:
  jvm:
    classpath:
      - /config
      - /u01/oracle/oracle_home/coherence/lib/coherence.jar
  env: <span class="conum" data-value="2" />
    - name: "PRIMARY_CLUSTER"
      value: "primary-cluster"
    - name: "PRIMARY_CLUSTER_ADDRESS"
      value: ""
    - name: "PRIMARY_CLUSTER_PORT"
      value: "40000"
    - name: "SECONDARY_CLUSTER"
      value: "secondary-cluster"
    - name: "SECONDARY_CLUSTER_ADDRESS"
      value: ""
    - name: "SECONDARY_CLUSTER_PORT"
      value: "40000"
  secretVolumes: <span class="conum" data-value="3" />
    - mountPath: /config
      name: storage-config
  ports:
    - name: "federation" <span class="conum" data-value="4" />
      port: 40000
      protocol: TCP
      service:
        port: 40000
        type: LoadBalancer
        annotations: <span class="conum" data-value="5" />
          oci.oraclecloud.com/load-balancer-type: "nlb"
          oci-network-load-balancer.oraclecloud.com/internal: "true"
          oci-network-load-balancer.oraclecloud.com/subnet: "(Internal subnet OCID - REPLACE ME)"
          oci-network-load-balancer.oraclecloud.com/oci-network-security-groups: "(OCID of the NSG - REPLACE ME)"
    - name: management
  coherence:  <span class="conum" data-value="6" />
    cacheConfig: /config/storage-cache-config.xml
    overrideConfig: /config/tangosol-coherence-override.xml
    logLevel: 9
  image: container-registry.oracle.com/middleware/coherence:14.1.2.0.0 <span class="conum" data-value="7" />
  imagePullSecrets:
    - name: ocr-pull-secret
  replicas: 3</markup>

</div>
</div>

<h3 id="deploy"><span class="merged" id="all.lMA9p" title="原文 : Deploy the Example">例のデプロイ</span></h3>
<div class="section">

<h4 id="update-ocid"><span class="merged" id="all.27GYC4" title="原文 : 1. Update the OCID’s for the federation service">1. フェデレーション・サービスのOCIDの更新</span></h4>
<div class="section">
<p><span class="merged" id="all.M0vyW" title="原文 : Before we apply the yaml for the primary AND secondary clusters, we must update the annotations in the definition of the federation port to ensure we create the load balancer in the correct subnet.">プライマリおよびセカンダリ・クラスタにyamlを適用する前に、フェデレーション・ポートの定義で注釈を更新して、正しいサブネットにロード・バランサを確実に作成する必要があります。</span></p>

<p><span class="merged" id="all.1fzJQp" title="原文 : The existing entry looks like the following:">既存のエントリは次のようになります:</span></p>

<markup
lang="yaml"

>  ports:
    - name: "federation"
      port: 40000
      protocol: TCP
      service:
        port: 40000
        type: LoadBalancer
        annotations:
          oci.oraclecloud.com/load-balancer-type: "nlb"
          oci-network-load-balancer.oraclecloud.com/internal: "true"
          oci-network-load-balancer.oraclecloud.com/subnet: "(Internal subnet OCID - REPLACE ME)"
          oci-network-load-balancer.oraclecloud.com/oci-network-security-groups: "(OCID of the NSG - REPLACE ME)"</markup>

<p><span class="merged" id="all.1XNzO3" title="原文 : The following values should be changed:">次の値を変更する必要があります:</span></p>

<p><code>oci-network-load-balancer.oraclecloud.com/subnet</code></p>

<p><span class="merged" id="all.sxXSn.spl1" title="原文 : This value should be set to the OCID of the subnet created for the network load balancer.">この値は、ネットワーク・ロード・バランサ用に作成されたサブネットのOCIDに設定する必要があります。</span> <span class="merged" id="all.sxXSn.spl2" title="原文 : In our case in Sydney region (c1) the subnet int_lb-xkhplh is used for the load balancer.">シドニー・リージョン(c1)では、サブネット<code>int_lb-xkhplh</code>がロード・バランサに使用されます。</span> <span class="merged" id="all.sxXSn.spl3" title="原文 : (Virtual Cloud Networks→ Subnets)">(Virtual Cloud Networks→サブネット)</span> </p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="サブネットOCI" src="./images/images/subnet-ocid.png" /> </v-card-text> </v-card>

<p><code>oci-network-load-balancer.oraclecloud.com/oci-network-security-groups</code></p>

<p><span class="merged" id="all.SC3qA.spl1" title="原文 : This value should be set to the OCID of the network security group for the above subnet that has the security rules for ingress/egress defined previously.">この値は、前述のサブネットのネットワーク・セキュリティ・グループのOCIDに設定する必要があります。このサブネットには、以前に定義したイングレス/エグレスに対するセキュリティ・ルールがあります。</span> <span class="merged" id="all.SC3qA.spl2" title="原文 : In our case in Sydney region (c1) the network security group int_lb-xkhplh is used to apply the security rules we discussed previously.">シドニー・リージョン(c1)の場合、ネットワーク・セキュリティ・グループ<code>int_lb-xkhplh</code>を使用して、前に説明したセキュリティ・ルールを適用します。</span> <span class="merged" id="all.SC3qA.spl3" title="原文 : (Virtual Cloud Networks→ Security → Network Security Groups)">(Virtual Cloud Networks→Security→Network Security Groups)</span> </p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="NSG OCI" src="./images/images/nsg-ocid.png" /> </v-card-text> </v-card>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3mjjos" title="原文 : You should switch to the secondary region, Melbourne (c3), and change the values in secondary-cluster.yaml to reflect the OCID values in this region.">セカンダリ・リージョンのメルボルン(c3)に切り替えて、<code>secondary-cluster.yaml</code>の値を変更して、このリージョンのOCID値を反映する必要があります。</span></p>
</div>
</div>

<h4 id="install-primary"><span class="merged" id="all.1ZWkx8" title="原文 : 2. Install the Primary Coherence cluster">2. プライマリCoherenceクラスタのインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.22JasI.spl1" title="原文 : Ensure you are in the examples/federation directory to run the example.">例を実行するには、<code>examples/federation</code>ディレクトリにいることを確認します。</span> <span class="merged" id="all.22JasI.spl2" title="原文 : This example uses the yaml files src/main/yaml/primary-cluster.yaml and src/main/yaml/secondary-cluster.yaml, which you modified in the previous step.">この例では、前のステップで変更したyamlファイル<code>src/main/yaml/primary-cluster.yaml</code>および<code>src/main/yaml/secondary-cluster.yaml</code>を使用します。</span> </p>

<p><span class="merged" id="all.4JPKOV" title="原文 : Ensure your Kubernetes context is set to the primary cluster, which is c1 or Sydney in our case, and run the following commands to create the primary cluster and load balancer for the federation port:">Kubernetesコンテキストが<strong>「プライマリ」</strong>クラスタ(ここでは<code>c1</code>またはシドニー)に設定されていることを確認し、次のコマンドを実行してフェデレーション・ポートのプライマリ・クラスタおよびロード・バランサを作成します:</span></p>

<markup
lang="bash"

>kubectx c1
Switched to context "c1".</markup>

<markup
lang="bash"

>kubectl -n coherence-example apply -f src/main/yaml/primary-cluster.yaml

coherence.coherence.oracle.com/primary-cluster created</markup>

<p><span class="merged" id="all.4ZLUcN" title="原文 : Issue the following command to view the pods:">ポッドを表示するには、次のコマンドを発行します:</span></p>

<markup
lang="bash"

> kubectl -n coherence-example get pods

NAME                READY   STATUS    RESTARTS   AGE
primary-cluster-0   1/1     Running   0          2m
primary-cluster-1   1/1     Running   0          2m
primary-cluster-2   1/1     Running   0          2m</markup>

<p><span class="merged" id="all.3xIHOA.spl1" title="原文 : Once all the pods are ready, view the services and wait for an external IP for the primary-cluster-federation service as we have defined this as a load balancer.">すべてのポッドの準備ができたら、サービスを表示し、これをロード・バランサとして定義した<code>primary-cluster-federation</code>サービスの外部IPを待機します。</span> <span class="merged" id="all.3xIHOA.spl2" title="原文 : Once this has been populated, update the PRIMARY_CLUSTER_ADDRESS in both yaml files to this value.">これが移入されたら、両方の<code>yaml</code>ファイルの<code>PRIMARY_CLUSTER_ADDRESS</code>をこの値に更新します。</span> <span class="merged" id="all.3xIHOA.spl3" title="原文 : In our example this is 10.1.2.22.">この例では、<code>10.1.2.22</code>です。</span> </p>

<markup
lang="bash"

>kubectl get svc -n coherence-example

NAME                         TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)                                                AGE
primary-cluster-federation   LoadBalancer   10.101.77.23    10.1.2.22     40000:30876/TCP                                        60s
primary-cluster-management   ClusterIP      10.101.202.62   &lt;none&gt;        30000/TCP                                              60s
primary-cluster-sts          ClusterIP      None            &lt;none&gt;        7/TCP,7575/TCP,7574/TCP,6676/TCP,40000/TCP,30000/TCP   60s
primary-cluster-wka          ClusterIP      None            &lt;none&gt;        7/TCP,7575/TCP,7574/TCP,6676/TCP                       60s</markup>

<markup
lang="bash"

>  env:
    - name: "PRIMARY_CLUSTER"
      value: "primary-cluster"
    - name: "PRIMARY_CLUSTER_ADDRESS"
      value: "10.1.2.22"</markup>

</div>

<h4 id="install-secondary"><span class="merged" id="all.4QFbsu" title="原文 : 3. Install the Secondary Coherence cluster">3. セカンダリCoherenceクラスタのインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.1jOE0z" title="原文 : Ensure your Kubernetes context is set to the secondary cluster, which is c3 or Melbourne in our case, and run the following commands to create the secondary cluster and load balancer for federation port:">Kubernetesコンテキストが<strong>「セカンダリ」</strong>クラスタ(この場合は<code>c3</code>またはメルボルン)に設定されていることを確認し、次のコマンドを実行してフェデレーション・ポートのセカンダリ・クラスタおよびロード・バランサを作成します:</span></p>

<markup
lang="bash"

>kubectx c3
Switched to context "c3".</markup>

<markup
lang="bash"

>kubectl -n coherence-example apply -f src/main/yaml/secondary-cluster.yaml

coherence.coherence.oracle.com/primary-cluster created</markup>

<p><span class="merged" id="all.4ZLUcN.1" title="原文 : Issue the following command to view the pods:">ポッドを表示するには、次のコマンドを発行します:</span></p>

<markup
lang="bash"

>kubectl -n coherence-example get pods

NAME                  READY   STATUS    RESTARTS   AGE
secondary-cluster-0   1/1     Running   0          2m
secondary-cluster-1   1/1     Running   0          2m
secondary-cluster-2   1/1     Running   0          2m</markup>

<p><span class="merged" id="all.3d6ZEG" title="原文 : Wait for an external-ip for the secondary-cluster-federation service."><code>secondary-cluster-federation</code>サービスの外部IPを待機します。</span></p>

<markup
lang="bash"

>kubectl get svc -n coherence-example

NAME                           TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                                                AGE
secondary-cluster-federation   LoadBalancer   10.103.205.128   10.3.2.14     40000:30186/TCP                                        43s
secondary-cluster-management   ClusterIP      10.103.96.216    &lt;none&gt;        30000/TCP                                              43s
secondary-cluster-sts          ClusterIP      None             &lt;none&gt;        7/TCP,7575/TCP,7574/TCP,6676/TCP,40000/TCP,30000/TCP   43s
secondary-cluster-wka          ClusterIP      None             &lt;none&gt;        7/TCP,7575/TCP,7574/TCP,6676/TCP                       43s</markup>

<p><span class="merged" id="all.17wvZd.spl1" title="原文 : Once this has been populated then update the SECONDARY_CLUSTER_ADDRESS in both yaml files to this value.">これが移入されたら、両方の<code>yaml</code>ファイルの<code>SECONDARY_CLUSTER_ADDRESS</code>をこの値に更新します。</span> <span class="merged" id="all.17wvZd.spl2" title="原文 : In our example this is 10.3.2.14.">この例では、<code>10.3.2.14</code>です。</span> </p>

<markup
lang="bash"

>    - name: "SECONDARY_CLUSTER"
      value: "secondary-cluster"
    - name: "SECONDARY_CLUSTER_ADDRESS"
      value: "10.3.2.14"</markup>

</div>

<h4 id="re-apply"><span class="merged" id="all.4dkYNt" title="原文 : 4. Re-apply the yaml for both clusters">4. 両方のクラスタのyamlを再適用</span></h4>
<div class="section">
<p><span class="merged" id="all.ccmAX.spl1" title="原文 : Run the following to re-apply the yaml in both regions to correctly set the load balancer addresses for each cluster.">次を実行して、両方のリージョンでyamlを再適用し、各クラスタのロード・バランサ・アドレスを正しく設定します。</span> <span class="merged" id="all.ccmAX.spl2" title="原文 : Making a change to the yaml will be carried out in a safe manner via a rolling redeploy of the stateful set.">yamlの変更は、ステートフル・セットのローリング再デプロイを介して安全な方法で実行されます。</span> </p>

<p><span class="merged" id="all.25ietD.1"  title="原文:: Primary Cluster"><strong>プライマリ・クラスタ</strong></span></p>

<markup
lang="bash"

>kubectx c1
Switched to context "c1".

kubectl -n coherence-example apply -f src/main/yaml/primary-cluster.yaml</markup>

<p><span class="merged" id="all.2lBbWs.spl1" title="原文 : Issue the following command and wait until the PHASE is ready which indicates the rolling upgrade has been completed.">次のコマンドを発行し、ローリング・アップグレードが完了したことを示す<code>PHASE</code>の準備ができるまで待機します。</span> <span class="merged" id="all.2lBbWs.spl2" title="原文 : Once it is ready, you can use CTRL-C to exit the command.">準備ができたら、<code>CTRL-C</code>を使用してコマンドを終了できます。</span> </p>

<markup
lang="bash"

>kubectl get coh -n coherence-example -w

NAME              CLUSTER           ROLE              REPLICAS   READY   PHASE
primary-cluster   primary-cluster   primary-cluster   3          2       RollingUpgrade
primary-cluster   primary-cluster   primary-cluster   3          3       RollingUpgrade
primary-cluster   primary-cluster   primary-cluster   3          2       RollingUpgrade
primary-cluster   primary-cluster   primary-cluster   3          3       RollingUpgrade
primary-cluster   primary-cluster   primary-cluster   3          2       RollingUpgrade
primary-cluster   primary-cluster   primary-cluster   3          3       Ready</markup>

<p><span class="merged" id="all.1n5iBa.1" title="原文 : Secondary Cluster"><strong>セカンダリ・クラスタ</strong></span></p>

<p><span class="merged" id="all.1XwW0x" title="原文 : Change to the secondary cluster context and run the following to restart secondary cluster using a rolling restart.">セカンダリ・クラスタ・コンテキストに変更し、次を実行して、ローリング再起動を使用してセカンダリ・クラスタを再起動します。</span></p>

<markup
lang="bash"

>kubectx c3
Switched to context "c3".

kubectl -n coherence-example apply -f src/main/yaml/secondary-cluster.yaml</markup>

<p><span class="merged" id="all.28aOB9" title="原文 : Wait for the cluster to be ready.">クラスタの準備ができるまで待ちます。</span></p>

<markup
lang="bash"

>kubectl get coh -n coherence-example -w

NAME                CLUSTER             ROLE                REPLICAS   READY   PHASE
secondary-cluster   secondary-cluster   secondary-cluster   3          2       RollingUpgrade
secondary-cluster   secondary-cluster   secondary-cluster   3          3       RollingUpgrade
secondary-cluster   secondary-cluster   secondary-cluster   3          2       RollingUpgrade
secondary-cluster   secondary-cluster   secondary-cluster   3          3       RollingUpgrade
secondary-cluster   secondary-cluster   secondary-cluster   3          2       RollingUpgrade
secondary-cluster   secondary-cluster   secondary-cluster   3          3       Ready</markup>

</div>

<h4 id="check-federation"><span class="merged" id="all.mInai" title="原文 : 5. Check federation status">5. フェデレーション・ステータスの確認</span></h4>
<div class="section">
<p><span class="merged" id="all.Jiwqr" title="原文 : When both clusters have completed the rolling upgrade, open two terminals, to view the federation status of the primary and secondary clusters.">両方のクラスタがローリング・アップグレードを完了したら、2つのターミナルを開き、プライマリ・クラスタとセカンダリ・クラスタのフェデレーション・ステータスを表示します。</span></p>

<p><span class="merged" id="all.4bJ7dv.spl1" title="原文 : This command uses the Coherence CLI, which is embedded in the operator.">このコマンドは、オペレータに組み込まれているCoherence CLIを使用します。</span> <span class="merged" id="all.4bJ7dv.spl2" title="原文 : For more information on the CLI, see here.">CLIの詳細は、<a href="https://github.com/oracle/coherence-cli" id="" target="_blank" >「こちら」</a>を参照してください。</span> </p>

<p><span class="merged" id="all.3OU1HE.spl1" title="原文 : Run the following command using --context c1 to view the Federation status."><code>--context c1</code>を使用して次のコマンドを実行し、フェデレーションのステータスを表示します。</span> <span class="merged" id="all.3OU1HE.spl2" title="原文 : Because we have not yet added data, we should see it showing the STATES as [INITIAL].">まだデータを追加していないため、<code>STATES</code>が<code>[INITIAL]</code>として表示されるはずです。</span> <span class="merged" id="all.3OU1HE.spl3" title="原文 : The -W option will continuously display the federation output until you use CTRL-C to exit."><code>-W</code>オプションは、<code>CTRL-C</code>を使用して終了するまで、フェデレーション出力を継続的に表示します。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.MpWr2" title="原文 : From now on when we use --context parameter, you should replace this with the appropriate context for your environment.">これからは、<code>--context</code>パラメータを使用するときに、環境に適したコンテキストに置き換える必要があります。</span></p>
</div>
<markup
lang="bash"

>kubectl --context c1 exec -it -n coherence-example primary-cluster-0 -- /coherence-operator/utils/cohctl get federation all -o wide -W

2025-03-18 06:20:01.645984469 +0000 UTC m=+20.337976443
Using cluster connection 'default' from current context.

SERVICE         OUTGOING           MEMBERS  STATES     DATA SENT  MSG SENT  REC SENT  CURR AVG BWIDTH  AVG APPLY  AVG ROUND TRIP  AVG BACKLOG DELAY  REPLICATE  PARTITIONS  ERRORS  UNACKED
FederatedCache  secondary-cluster        3  [INITIAL]       0 MB         0         0          0.0Mbps        0ms             0ms                0ms      0.00%           0       0        0</markup>

<p><span class="merged" id="all.CYIjM" title="原文 : In a second window, change the context and run the second command:">2番目のウィンドウで、コンテキストを変更して2番目のコマンドを実行します:</span></p>

<markup
lang="bash"

>kubectl --context c3 exec -it -n coherence-example secondary-cluster-0 -- /coherence-operator/utils/cohctl get federation all -o wide -W

2025-03-18 06:20:46.142911529 +0000 UTC m=+10.337433424
Using cluster connection 'default' from current context.

SERVICE         OUTGOING         MEMBERS  STATES     DATA SENT  MSG SENT  REC SENT  CURR AVG BWIDTH  AVG APPLY  AVG ROUND TRIP  AVG BACKLOG DELAY  REPLICATE  PARTITIONS  ERRORS  UNACKED
FederatedCache  primary-cluster        3  [INITIAL]       0 MB         0         0          0.0Mbps        0ms             0ms                0ms      0.00%           0       0        0</markup>

</div>
</div>

<h3 id="run"><span class="merged" id="all.oJSYR"  title="原文:: Run the Example">サンプルの実行</span></h3>
<div class="section">

<h4 id="add-data-p"><span class="merged" id="all.4KuUHB" title="原文 : 1. Add Data in the primary cluster">1. プライマリ・クラスタへのデータの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.3FM51G" title="原文 : In a separate terminal, on the primary-cluster, run the following command to run the console application to add data.">別個の端末で、プライマリ・クラスタ上で次のコマンドを実行して、コンソール・アプリケーションを実行してデータを追加します。</span></p>

<markup
lang="bash"

>kubectl exec --context c1 -it -n coherence-example primary-cluster-0 -- /coherence-operator/utils/runner console</markup>

<p><span class="merged" id="all.1g0TaI" title="原文 : At the Map: prompt, type the following to create a new cache called test."><code>Map:</code>プロンプトで、次のように入力して、<code>test</code>という新しいキャッシュを作成します。</span></p>

<markup
lang="bash"

>cache test</markup>

<p><span class="merged" id="all.eGq9r" title="原文 : Then, issue the command put key1 primary to add an entry with key=key1, and value=primary">次に、コマンド<code>put key1 primary</code>を発行して、key=key1およびvalue=primaryのエントリを追加</span></p>

<markup
lang="bash"
title="Output"
>Map (test): put key1 primary
null

Map (test): list
key1 = primary</markup>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.3VxTSz.3" title="原文 : Type bye to exit the console."><code>bye</code>と入力してコンソールを終了します。</span></p>
</div>
<p><span class="merged" id="all.2NUjET" title="原文 : Once you run the command, switch back to the terminals with the federation all commands running for the primary cluster, and you should see data has being sent from the primary to secondary cluster.">コマンドを実行したら、プライマリ・クラスタに対して実行されている<code>federation all</code>コマンドを使用してターミナルに切り替えると、プライマリ・クラスタからセカンダリ・クラスタにデータが送信されていることがわかります。</span></p>

<markup
lang="bash"
title="Primary Cluster"
>2025-03-18 06:25:22.649699832 +0000 UTC m=+341.341691816
Using cluster connection 'default' from current context.

SERVICE         OUTGOING           MEMBERS  STATES          DATA SENT  MSG SENT  REC SENT  CURR AVG BWIDTH  AVG APPLY  AVG ROUND TRIP  AVG BACKLOG DELAY  REPLICATE  PARTITIONS  ERRORS  UNACKED
FederatedCache  secondary-cluster        3  [INITIAL IDLE]       0 MB         1         1          0.0Mbps       20ms             7ms               88ms      0.00%           0       0        0</markup>

<p><span class="merged" id="all.3mxdSw" title="原文 : You should also see something similar on the secondary cluster, which shows data being received.">また、受信されているデータを表示するセカンダリ・クラスタにも同様のものが表示されます。</span></p>

<markup
lang="bash"
title="Secondary Cluster"
>2025-03-18 06:28:07.5999651 +0000 UTC m=+451.794486974
Using cluster connection 'default' from current context.

SERVICE         OUTGOING         MEMBERS  STATES     DATA SENT  MSG SENT  REC SENT  CURR AVG BWIDTH  AVG APPLY  AVG ROUND TRIP  AVG BACKLOG DELAY  REPLICATE  PARTITIONS  ERRORS  UNACKED
FederatedCache  primary-cluster        3  [INITIAL]       0 MB         0         0          0.0Mbps        0ms             0ms                0ms      0.00%           0       0        0

SERVICE         INCOMING         MEMBERS RECEIVING  DATA REC  MSG REC  REC REC  AVG APPLY  AVG BACKLOG DELAY
FederatedCache  primary-cluster                  1      0 MB        1        1       60ms              265ms</markup>

</div>

<h4 id="validate-data-s"><span class="merged" id="all.xDaMt" title="原文 : 2. Validate data in the secondary cluster">2. セカンダリ・クラスタ内のデータのバリデート</span></h4>
<div class="section">
<p><span class="merged" id="all.2Fh5vK" title="原文 : Run the following command against the secondary cluster to validate the data has been received:">セカンダリ・クラスタに対して次のコマンドを実行して、データが受信されたことをバリデートします:</span></p>

<markup
lang="bash"

>kubectl exec --context c3 -it -n coherence-example secondary-cluster-0 -- /coherence-operator/utils/runner console</markup>

<p><span class="merged" id="all.4385Wk" title="原文 : At the Map: prompt, type cache test and then list to see the data that was transfered."><code>Map:</code>プロンプトで、<code>cache test</code>、<code>list</code>の順に入力して、転送されたデータを表示します。</span></p>

<markup
lang="bash"

>Map (test): list
key1 = primary</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.yV24M" title="原文 : If you do not see any data, then you should check the pod logs to see if there are any errors.">データが表示されない場合は、ポッド・ログをチェックして、エラーがあるかどうかを確認する必要があります。</span></p>
</div>
<markup
lang="bash"

>size</markup>

</div>

<h4 id="add-data-s"><span class="merged" id="all.2rxIvY" title="原文 : 3. Add Data in the secondary cluster">3. セカンダリ・クラスタにデータを追加</span></h4>
<div class="section">
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.Mp0ww" title="原文 : Since we have configured federation to be active-active, any changes in either cluster will be replicated to the other.">フェデレーションがアクティブ/アクティブになるように構成されているため、いずれかのクラスタ内の変更はもう一方のクラスタにレプリケートされます。</span></p>
</div>
<p><span class="merged" id="all.104dA9" title="原文 : Without leaving the console, run the command put key2 secondary and then list:">コンソールを終了せずに、コマンド<code>put key2 secondary</code>を実行してから、<code>list</code>を実行します:</span></p>

<markup
lang="bash"

>Map (test): put key2 secondary
null

Map (test): list
key1 = primary
key2 = secondary</markup>

</div>

<h4 id="validate-data-p"><span class="merged" id="all.1uXaQu" title="原文 : 4. Validate data in the primary cluster">4. プライマリ・クラスタ内のデータのバリデート</span></h4>
<div class="section">
<p><span class="merged" id="all.S2WpV" title="原文 : Switch back to the primary cluster, and start the console to validate that the data has been receieved:">プライマリ・クラスタに切り替えてコンソールを起動し、データが受信されたことをバリデートします:</span></p>

<markup
lang="bash"

>kubectl exec --context c1 -it -n coherence-example primary-cluster-0 -- /coherence-operator/utils/runner console</markup>

<p><span class="merged" id="all.yccot" title="原文 : At the Map: prompt, type cache test and the list"><code>Map:</code>プロンプトで、<code>cache test</code>および<code>list</code>と入力</span></p>

<markup
lang="bash"

>Map (test): list
key2 = secondary
key1 = primary</markup>

<p><span class="merged" id="all.3xSlOK" title="原文 : Use the following command to add 100,000 entries to the cache with random data:">次のコマンドを使用して、ランダム・データを含むキャッシュに100,000エントリを追加します:</span></p>

<markup
lang="bash"

>bulkput 100000 100 0 100</markup>

<p><span class="merged" id="all.1jSH7W" title="原文 : If you view the federation all commands that are still running you should see the data being federated.">実行中の<code>federation all</code>コマンドを表示すると、フェデレートされているデータが表示されます。</span></p>

<markup
lang="bash"
title="Primary Cluster"
>2025-03-18 06:34:04.272571513 +0000 UTC m=+862.964563476
Using cluster connection 'default' from current context.

SERVICE         OUTGOING           MEMBERS  STATES     DATA SENT  MSG SENT  REC SENT  CURR AVG BWIDTH  AVG APPLY  AVG ROUND TRIP  AVG BACKLOG DELAY  REPLICATE  PARTITIONS  ERRORS  UNACKED
FederatedCache  secondary-cluster        3  [SENDING]       3 MB    12,128    14,973          1.2Mbps      278ms            25ms              132ms      0.00%           0       0        0

SERVICE         INCOMING           MEMBERS RECEIVING  DATA REC  MSG REC  REC REC  AVG APPLY  AVG BACKLOG DELAY
FederatedCache  secondary-cluster                  1      0 MB        1        1       20ms              285ms</markup>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.1IV5Su" title="原文 : Run the console against the secondary cluster and validate that the cache size is 100,000.">セカンダリ・クラスタに対してコンソールを実行し、キャッシュ・サイズが100,000であることをバリデートします。</span></p>
</div>
</div>
</div>

<h3 id="cleanup"><span class="merged" id="all.3918q1"  title="原文:: Cleaning up">クリーンアップ</span></h3>
<div class="section">
<p><span class="merged" id="all.35Kt3C" title="原文 : Use the following commands to delete the primary and secondary clusters:">プライマリおよびセカンダリ・クラスタを削除するには、次のコマンドを使用します:</span></p>

<markup
lang="bash"

>kubectx c1
Switched to context "c1".

kubectl -n coherence-example delete -f src/main/yaml/primary-cluster.yaml

kubectx c3
Switched to context "c3".

kubectl -n coherence-example delete -f src/main/yaml/secondary-cluster.yaml</markup>

<p><span class="merged" id="all.1IfmoJ.1" title="原文 : Uninstall the Coherence operator using the undeploy commands for whichever method you chose to install it.">インストールするために選択したメソッドに対してアンデプロイ・コマンドを使用して、Coherenceオペレータをアンインストールします。</span></p>

</div>
</div>
</doc-view>
