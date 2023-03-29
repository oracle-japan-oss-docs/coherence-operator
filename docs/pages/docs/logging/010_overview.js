<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_overview"><span class="merged" id="all.YrpRV.3"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.9wJTt.spl1" title="原文 : In a container environment like Kubernetes, or any cloud, it is often a requirement to centralize log files to allow easier analysis and debugging.">Kubernetesやクラウドなどのコンテナ環境では、多くの場合、ログ・ファイルを一元化して分析およびデバッグを容易に行えるようにする必要があります。</span> <span class="merged" id="all.9wJTt.spl2" title="原文 : There are many ways to do this, including collecting container logs, parsing and shipping log files with something like Fluentd, or using a specialized log appender specific to your logging framework.">これには、コンテナ・ログの収集、Fluentdのようなものを使用したログ・ファイルの解析および出荷、またはロギング・フレームワークに固有の特殊なログ・アペンダの使用など、様々な方法があります。</span> </p>

<p><span class="merged" id="all.TJXUs.spl1" title="原文 : The Coherence Operator does not proscribe any particular method of log capture.">Coherence Operatorは、ログ取得の特定のメソッドを発行しません。</span> <span class="merged" id="all.TJXUs.spl2" title="原文 : The Coherence CRD is flexible enough to allow any method of log capture that an application or specific cloud environment requires."><code>Coherence</code> CRDは、アプリケーションまたは特定のクラウド環境に必要なあらゆるログ取得メソッドを許可できる柔軟性があります。</span> <span class="merged" id="all.TJXUs.spl3" title="原文 : This could be as simple as adding JVM arguments to configure the Java logger, or it could be injecting a whole side-car container to run something like Fluentd.">これは、JVM引数を追加してJavaロガーを構成するのと同じくらい簡単な場合もあれば、Fluentdのようなものを実行するためにサイドカー・コンテナ全体をインジェクトする場合もあります。</span> <span class="merged" id="all.TJXUs.spl4" title="原文 : Different approaches have their own pros and cons that need to be weighed up on a case by case basis.">さまざまなアプローチには、ケースごとに重点を置く必要がある独自の案件と短所があります。</span> </p>


<h3 id="_logging_guides"><span class="merged" id="all.484afc" title="原文 : Logging Guides">ロギング・ガイド</span></h3>
<div class="section">
<p><span class="merged" id="all.3hi1EZ.spl1" title="原文 : The use of Elasticsearch, Fluentd and Kibana is a common approach.">Elasticsearch、FluentdおよびKibanaの使用は一般的な方法です。</span> <span class="merged" id="all.3hi1EZ.spl2" title="原文 : For this reason the Coherence Operator has a set of Kibana dashboards that support the common Coherence logging format.">このため、Coherence Operatorには、共通Coherenceロギング形式をサポートする一連のKibanaダッシュボードがあります。</span> <span class="merged" id="all.3hi1EZ.spl3" title="原文 : The logging guides below show one approach to shipping Coherence logs to Elasticsearch and importing the Coherence dashboards into Kibana.">次のロギング・ガイドは、CoherenceログをElasticsearchに送信し、CoherenceダッシュボードをKibanaにインポートする1つの方法を示しています。</span> <span class="merged" id="all.3hi1EZ.spl4" title="原文 : If this approach does not meet your needs you are obviously free to configure an alternative.">このアプローチがニーズを満たさない場合は、明らかに代替方法を構成することができます。</span> </p>

<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/logging/020_logging"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">ログ・キャプチャの有効化</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3zwGpb" title="原文 : Capturing and viewing Coherence cluster Logs in Elasticsearch using a Fluentd side-car.">Fluentdサイドカーを使用して、ElasticsearchでCoherenceクラスタ・ログを取得および表示します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/logging/030_kibana"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">Kibanaダッシュボード</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.F5tFE" title="原文 : Importing and using the Kibana Dashboards available.">使用可能なKibanaダッシュボードのインポートおよび使用。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>
</div>
</div>
</doc-view>
