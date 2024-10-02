<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coherence_in_kubernetes_without_the_operator"><span class="merged" id="all.3Vd2Lf" title="原文 : Coherence in Kubernetes Without the Operator">オペレータを使用しないKubernetesのCoherence</span></h2>
<div class="section">
<p><span class="merged" id="all.1MeDP0.spl1" title="原文 : Although this project is all about the Coherence Kubernetes Operator, there are occasions where using an Operator is not possible.">このプロジェクトはすべてCoherence Kubernetes Operatorに関するものですが、オペレータを使用できない場合があります。</span> <span class="merged" id="all.1MeDP0.spl2" title="原文 : For example, some corporate or cloud security policies ban the use of CRDs, or have very restrictive RBAC policies that ultimately make it impossible to run Operators that uses their own CRDs or require cluster roles (or even just namespace roles).">たとえば、企業またはクラウドのセキュリティ・ポリシーによっては、CRDの使用を禁止したり、独自のCRDを使用するオペレータを実行したり、クラスタ・ロール(またはネームスペース・ロールのみ)を必要としたりできないようにする非常に限定的なRBACポリシーがあります。</span> <span class="merged" id="all.1MeDP0.spl3" title="原文 : These example shows how to run a Coherence clusters in Kubernetes manually.">次の例は、KubernetesでCoherenceクラスタを手動で実行する方法を示しています。</span> <span class="merged" id="all.1MeDP0.spl4" title="原文 : Obviously the features of the Operator such as safe scaling, safe rolling upgrades, etc. will not be available.">明らかに、セーフ・スケーリング、安全なローリング・アップグレードなどのオペレータの機能は利用できません。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.18"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.1d1YDX.spl1" title="原文 : We really recommend that you try and use the Coherence Operator for managing Coherence clusters in Kubernetes.">KubernetesでCoherenceクラスタを管理するには、Coherence Operatorを使用することをお薦めします。</span> <span class="merged" id="all.1d1YDX.spl2" title="原文 : It is possible to run the Operator with fewer RBAC permissions, for example without ClusterRoles and only using Roles restricted to a single namespace."><code>ClusterRoles</code>を使用せず、単一のネームスペースに制限された<code>Roles</code>のみを使用するなど、RBAC権限が少ないオペレータを実行できます。</span> <span class="merged" id="all.1d1YDX.spl3" title="原文 : The Operator can also run without installing its web-hooks.">オペレータは、webフックをインストールせずに実行することもできます。</span> <span class="merged" id="all.1d1YDX.spl4" title="原文 : Ultimately though it requires the CRD to be installed, which could be done manually instead of allowing the Operator to install it.">最終的には、CRDをインストールする必要がありますが、オペレータによるインストールを許可するかわりに手動で行うことができます。</span> <span class="merged" id="all.1d1YDX.spl5" title="原文 : If you really cannot change the minds of those dictating policies that mean you cannot use the Operator then these examples may be useful.">オペレータを使用できないことをこれらの決定するポリシーの考えを実際に変更できない場合は、これらの例が役立つことがあります。</span> </p>
</p>
</div>
<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.14"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.1fxxJ5" title="原文 :  The complete source code for the examples is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />例のソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/no-operator/" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>

<h3 id="_prerequisites"><span class="merged" id="all.2LZvWc.6"  title="原文:: Prerequisites">前提条件</span></h3>
<div class="section">
<p><span class="merged" id="all.3N9KGw" title="原文 : There are some common prerequisites used by all the examples.">すべての例で使用される一般的な前提条件があります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.C04Hp" title="原文 : The Server Image"><strong>サーバー・イメージ</strong></span></p>

</li>
</ul>
<p><span class="merged" id="all.1PAo2q.spl1" title="原文 : These examples use the image built in the Build a Coherence Server Image example.">これらの例では、<router-link to="/examples/015_simple_image/README">「Coherenceサーバー・イメージのビルド」</router-link>の例で作成したイメージを使用します。</span> <span class="merged" id="all.1PAo2q.spl2" title="原文 : The image is nothing more than a cache configuration file that has an Extend proxy along with Coherence metrics and management over REST.">イメージは、REST上のCoherenceメトリクスおよび管理とともにExtendプロキシを持つキャッシュ構成ファイルのみです。</span> <span class="merged" id="all.1PAo2q.spl3" title="原文 : We will use this image in the various examples we cover here.">ここで説明する様々な例でこのイメージを使用します。</span> <span class="merged" id="all.1PAo2q.spl4" title="原文 : When we run the image it will start a simple storage enabled Coherence server.">イメージを実行すると、単純なストレージ対応のCoherenceサーバーが起動します。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3Ucl63" title="原文 : The Test Client In the test-client/ directory is a simple Maven project that we will use to run a simple Extend client."><strong>「テスト・クライアント」</strong> <router-link to="/examples/no-operator/test-client/README"><code>test-client/</code></router-link>ディレクトリには、単純なExtendクライアントの実行に使用する単純なMavenプロジェクトがあります。</span></p>

</li>
<li>
<p><span class="merged" id="all.1NWyYw.spl1" title="原文 : Network Policies When running in Kubernetes cluster where NetworkPolicy rules are applied there are certain ingress and egress policies required to allow Coherence to work."><strong>「ネットワーク・ポリシー」</strong> <code>NetworkPolicy</code>ルールが適用されているKubernetesクラスタで実行する場合、Coherenceが機能するために必要な特定のイングレスおよびエグレス・ポリシーがあります。</span> <span class="merged" id="all.1NWyYw.spl2" title="原文 : These are covered in the Network Policies Example">これらは<router-link to="/examples/095_network_policies/README">「ネットワーク・ポリシーの例」</router-link>で説明されています</span> </p>

</li>
</ul>
</div>
</div>

<h2 id="_the_examples"><span class="merged" id="all.4c8ujc" title="原文 : The Examples">例</span></h2>
<div class="section">
<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/no-operator/01_simple_server/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">簡易サーバー</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.BPKR7" title="原文 : Run a simple Coherence storage enabled cluster as a StatefulSet and connect an Extend client to it.">単純なCoherenceストレージ対応クラスタをStatefulSetとして実行し、Extendクライアントを接続します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/no-operator/02_metrics/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">メトリクス付きの簡易サーバー</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1T1G2V" title="原文 : Expands the simple storage enabled server to expose metrics that can be scraped by Prometheus.">Prometheusによってスクレイプ可能なメトリクスを公開するために、単純なストレージ対応サーバーを展開します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/no-operator/03_extend_tls/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">TLSによる拡張の保護</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.niqCr" title="原文 : Expands the simple storage enabled server to secure Extend using TLS.">TLSを使用して拡張を保護するために、単純なストレージ対応サーバーを展開します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/examples/no-operator/04_istio/README"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">Istioを使用したCoherenceの実行</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.niqCr.1" title="原文 : Expands the simple storage enabled server to secure Extend using TLS.">TLSを使用して拡張を保護するために、単純なストレージ対応サーバーを展開します。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>
</div>
</doc-view>
