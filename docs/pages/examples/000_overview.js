<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_examples_overview"><span class="merged" id="all.1jTEjx"  title="原文:: Examples Overview">例の概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3GQ4Wu" title="原文 : There are a number of examples which show you how to build and deploy applications for the Coherence Operator.">Coherence Operatorのアプリケーションのビルドおよびデプロイ方法を示す例がいくつかあります。</span></p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.VKwLf" title="原文 :  The complete source code for the examples is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />例のソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>
<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/015_simple_image/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">JIBを使用したシンプルなCoherenceイメージ</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4e4Xw" title="原文 : Building a simple Coherence server image with JIB using Maven or Gradle.">MavenまたはGradleを使用して、<a href="https://github.com/GoogleContainerTools/jib/blob/master/README.md" id="" target="_blank" >JIB</a>を使用した単純なCoherenceサーバー・イメージをビルドします。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/016_simple_docker_image/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">Dockerfileを使用したシンプルなCoherenceイメージ</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3BzIMm" title="原文 : Building a simple Coherence image with a Dockerfile, that works out of the box with the Operator.">Dockerfileを使用して単純なCoherenceイメージを作成します。このイメージは、オペレータとともにすぐに使用できます。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/020_hello_world/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">こんにちは世界</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.vbpYz" title="原文 : Deploying the most basic Coherence cluster using the Operator.">オペレータを使用した最も基本的なCoherenceクラスタのデプロイ。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/025_extend_client/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">Coherence*Extendクライアント</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.mRTvz" title="原文 : An example demonstrating various ways to configure and use Coherence*Extend with Kubernetes.">Kubernetesを使用してCoherence*Extendを構成および使用するための様々な方法を示す例。</span></p>
</v-card-text> </v-card> </v-flex> </v-layout> </v-container> </v-flex> </v-layout> <v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link @click.native="this.scrollFix('#examples/020_deployment/README.adoc')" to="#examples/020_deployment/README.adoc"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">デプロイメント</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1cUQRp" title="原文 : This example shows how to deploy Coherence applications using the Coherence Operator.">この例では、Coherence Operatorを使用してCoherenceアプリケーションをデプロイする方法を示します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/090_tls/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"> <span style="text-align:center">TLS</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.LzPx6" title="原文 : Securing Coherence clusters using TLS.">TLSを使用してCoherenceクラスタを保護します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/095_network_policies/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">ネットワーク・ポリシー</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4et6Rg" title="原文 : An example covering the use of Kubernetes NetworkPolicy rules with the Operator and Coherence clusters.">Kubernetes <code>NetworkPolicy</code>ルールと、OperatorクラスタおよびCoherenceクラスタの使用について説明する例。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/100_federation/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">フェデレーション</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2NxmvF.spl1" title="原文 : This example shows configuring federation using Oracle Cloud.">この例では、Oracle Cloudを使用したフェデレーションの構成を示します。</span> <span class="merged" id="all.2NxmvF.spl2" title="原文 : (OCI) The federation feature requires Coherence Grid Edition.">(OCI)フェデレーション機能には、Coherence Grid Editionが必要です。</span> </p>
</v-card-text> </v-card> </v-flex> </v-layout> </v-container> </v-flex> </v-layout> <v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/200_autoscaler/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">自動スケーリング</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4MsEdH" title="原文 : Scaling Coherence clusters using the horizontal Pod Autoscaler.">水平なPod Autoscalerを使用したCoherenceクラスタのスケーリング。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/300_helm/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"> <span style="text-align:center">Helm</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2bOPYe" title="原文 : Manage Coherence resources using Helm.">Helmを使用してCoherenceリソースを管理します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/400_Istio/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"> <span style="text-align:center">Istio</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3BJaXa" title="原文 : Istio Support">Istioサポート</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/900_demo/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">Coherenceデモ・アプリケーション</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.47amyD" title="原文 : Deploying the Coherence demo application.">Coherenceデモ・アプリケーションのデプロイ。</span></p>
</v-card-text> </v-card> </v-flex> </v-layout> </v-container> </v-flex> </v-layout> <v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/910_polyglot_demo/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">多言語クライアント・デモ</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2wYTXG" title="原文 : Deploy Python, JavaScript or Go applications using the Operator.">オペレータを使用してPython、JavaScriptまたはGoアプリケーションをデプロイします。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>
</div>
</doc-view>
