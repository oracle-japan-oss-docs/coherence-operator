<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.wGvY3" title="原文 : Coherence Grafana Dashboards">Coherence Grafanaダッシュボード</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1jvjMX" title="原文 : The Coherence Operator provides detailed Grafana dashboards to provide insight into your running Coherence Clusters.">Coherence Operatorには、実行中のCoherenceクラスタに関するインサイトを提供する詳細なGrafanaダッシュボードが用意されています。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_coherence_grafana_dashboards"><span class="merged" id="all.wGvY3.1" title="原文 : Coherence Grafana Dashboards">Coherence Grafanaダッシュボード</span></h2>
<div class="section">
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.D3icp" title="原文 : Note: The Grafana dashboards require Coherence metrics, which is available only when using Coherence version 12.2.1.4 or above.">ノート: GrafanaダッシュボードにはCoherenceメトリクスが必要です。これは、Coherenceバージョン12.2.1.4以上を使用している場合にのみ使用できます。</span></p>
</div>
</div>

<h2 id="_table_of_contents"><span class="merged" id="all.2jNfVE.2"  title="原文:: Table of Contents">目次</span></h2>
<div class="section">
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4ZBAES" title="原文 : Navigation"><router-link @click.native="this.scrollFix('#navigation')" to="#navigation">ナビゲーション</router-link></span>

</li>
<li>
<span class="merged" id="all.1LD6qN.1" title="原文 : Dashboards"><router-link @click.native="this.scrollFix('#dashboards')" to="#dashboards">ダッシュボード</router-link></span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.USOzz" title="原文 : Coherence Dashboard Main"><router-link @click.native="this.scrollFix('#main')" to="#main">Coherenceダッシュボード・メイン</router-link></span>

</li>
<li>
<span class="merged" id="all.3WOFuz" title="原文 : Members Summary &amp; Details Dashboards"><router-link @click.native="this.scrollFix('#members')" to="#members">メンバー・サマリー&amp;詳細ダッシュボード</router-link></span>

</li>
<li>
<span class="merged" id="all.GOaxT" title="原文 : Services Summary &amp; Details Dashboards"><router-link @click.native="this.scrollFix('#services')" to="#services">サービス・サマリー&amp;詳細ダッシュボード</router-link></span>

</li>
<li>
<span class="merged" id="all.3bUYNs" title="原文 : Caches Summary &amp; Detail Dashboards"><router-link @click.native="this.scrollFix('#caches')" to="#caches">キャッシュ・サマリー&amp;詳細ダッシュボード</router-link></span>

</li>
<li>
<span class="merged" id="all.QNIFM" title="原文 : Proxy Servers Summary &amp; Detail Dashboards"><router-link @click.native="this.scrollFix('#proxies')" to="#proxies">プロキシ・サーバー・サマリー&amp;詳細ダッシュボード</router-link></span>

</li>
<li>
<span class="merged" id="all.4WeErH" title="原文 : Persistence Summary Dashboard"><router-link @click.native="this.scrollFix('#persistence')" to="#persistence">永続性サマリー・ダッシュボード</router-link></span>

</li>
<li>
<span class="merged" id="all.42WUcq" title="原文 : Federation Summary &amp; Details Dashboards"><router-link @click.native="this.scrollFix('#federation')" to="#federation">フェデレーション・サマリー&amp;詳細ダッシュボード</router-link></span>

</li>
<li>
<span class="merged" id="all.1dlqhn" title="原文 : Machines Summary Dashboard"><router-link @click.native="this.scrollFix('#machines')" to="#machines">マシン・サマリー・ダッシュボード</router-link></span>

</li>
<li>
<span class="merged" id="all.iCq4S" title="原文 : HTTP Servers Summary Dashboard"><router-link @click.native="this.scrollFix('#http')" to="#http">HTTPサーバー・サマリー・ダッシュボード</router-link></span>

</li>
<li>
<span class="merged" id="all.c3lQa" title="原文 : Elastic Data Summary Dashboard"><router-link @click.native="this.scrollFix('#ed')" to="#ed">エラスティック・データ・サマリー・ダッシュボード</router-link></span>

</li>
<li>
<span class="merged" id="all.413s41" title="原文 : Executors Summary &amp; Details Dashboards"><router-link @click.native="this.scrollFix('#executors')" to="#executors">エグゼキュータ・サマリー&amp;詳細ダッシュボード</router-link></span>

</li>
<li>
<span class="merged" id="all.3AbFAs" title="原文 : gRPC Proxy Summary &amp; Details Dashboards"><router-link @click.native="this.scrollFix('#grpc')" to="#grpc">gRPCプロキシ・サマリー&amp;詳細ダッシュボード</router-link></span>

</li>
<li>
<span class="merged" id="all.265tPd" title="原文 : Topics, Subscribers and Subscriber Groups Dashboards"><router-link @click.native="this.scrollFix('#topics')" to="#topics">トピック、サブスクライバおよびサブスクライバ・グループ・ダッシュボード</router-link></span>

</li>
</ol>
</li>
</ol>
</div>

<h2 id="navigation"><span class="merged" id="all.7GuPH"  title="原文:: Navigation">ナビゲーション</span></h2>
<div class="section">
<p><span class="merged" id="all.2KT7sl" title="原文 : The pre-loaded Coherence Dashboards provide a number of common features and navigation capabilities that appear at the top of most dashboards.">事前ロード済のCoherenceダッシュボードには、ほとんどのダッシュボードの上部に表示される多くの共通機能およびナビゲーション機能があります。</span></p>


<h3 id="_variables"><span class="merged" id="all.BcB4E"  title="原文:: Variables">変数</span></h3>
<div class="section">
<p><img alt="変数" src="./images/grafana-variables.png" width="450" />
</p>

<p><span class="merged" id="all.3SUfnI" title="原文 : Allows for selection of information to be displayed where there is more than one item.">複数のアイテムがある場所に表示される情報の選択を許可します。</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2PMFtp.spl1" title="原文 : Namespace - Allows selection of a namespace if you have multiple Coherence clusters with the same name in multipled namespaces.">ネームスペース - 複数のネームスペースに同じ名前を持つ複数のCoherenceクラスタがある場合、ネームスペースの選択を許可します。</span> <span class="merged" id="all.2PMFtp.spl2" title="原文 : Will default to None if you are not running in Kubernetes">Kubernetesで実行していない場合は、デフォルトで<code>None</code>に設定されます</span> 

</li>
<li>
<span class="merged" id="all.1C4Xjo" title="原文 : Cluster Name - Allows selection of the specific cluster to view metrics for">クラスタ名 - 特定のクラスタを選択してメトリクスを表示できます</span>

</li>
<li>
<span class="merged" id="all.29WWGo" title="原文 : Top N Limit - Limits the display of Top values for tables that support it">上位N制限 - それをサポートする表の<code>Top</code>値の表示を制限</span>

</li>
<li>
<span class="merged" id="all.UTLHK" title="原文 : Service Name, Member Name, Cache Name - These will appear on various dashboards">サービス名、メンバー名、キャッシュ名 - これらは様々なダッシュボードに表示されます</span>

</li>
</ol>
<p><span class="merged" id="all.3N2rdR" title="原文 : See the Grafana Documentation for more information on Variables.">変数の詳細は、<a href="https://grafana.com/docs/reference/templating/" id="" target="_blank" >「Grafanaドキュメント」</a>を参照してください。</span></p>

</div>

<h3 id="_annotations"><span class="merged" id="all.3lxl1W"  title="原文:: Annotations">注釈</span></h3>
<div class="section">
<p><img alt="注釈" src="./images/grafana-annotations.png" width="350" />
</p>

<p><span class="merged" id="all.jO5Rb" title="原文 : Vertical red lines on a graph to indicate a change in a key markers such as:">グラフの垂直赤線で、次のようなキー・マーカーの変更を示します:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2gnaAM" title="原文 : Show Cluster Size Changes - Displays when the cluster size has changed">クラスタ・サイズの変更の表示 - クラスタ・サイズが変更された場合に表示されます</span>

</li>
<li>
<span class="merged" id="all.OO8Hg" title="原文 : Show Partition Transfers - Displays when partition transfers have occurred">パーティション転送の表示 - パーティション転送が発生した日時を表示</span>

</li>
</ol>
<p><span class="merged" id="all.3Tunbk" title="原文 : See the Grafana Documentation for more information on Annotations.">注釈の詳細は、<a href="https://grafana.com/docs/reference/annotations/" id="" target="_blank" >「Grafanaドキュメント」</a>を参照してください。</span></p>

</div>

<h3 id="_navigation"><span class="merged" id="all.7GuPH.1"  title="原文:: Navigation">ナビゲーション</span></h3>
<div class="section">
<p><img alt="ナビゲーション" src="./images/grafana-navigation.png" width="250" />
</p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3asTzv" title="原文 : Select Dashboard - In the top right a drop-down list of dashboards is available selection">ダッシュボードの選択 - 右上には、ダッシュボードのドロップダウン・リストが選択可能です</span>

</li>
<li>
<span class="merged" id="all.1JFLAH" title="原文 : Drill Through - Ability to drill through based upon service, member, node, etc on highlighted columns.">ドリル・スルー - 強調表示された列のサービス、メンバー、ノードなどに基づいてドリル・スルーする機能。</span>

</li>
</ol>
</div>
</div>

<h2 id="dashboards"><span class="merged" id="all.4EkGaY.1"  title="原文:: Dashboards">ダッシュボード</span></h2>
<div class="section">

<h3 id="main"><span class="merged" id="all.4SNhmR" title="原文 : 1. Coherence Dashboard Main">1. Coherenceダッシュボード・メイン</span></h3>
<div class="section">
<p><span class="merged" id="all.4UmL4d" title="原文 : Shows a high-level overview of the selected Coherence cluster including metrics such as:">次のようなメトリクスを含む、選択したCoherenceクラスタの概要を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1h5l1e" title="原文 : Cluster member count, services, memory and health">クラスタ・メンバー数、サービス、メモリーおよびヘルス</span></p>

</li>
<li>
<p><span class="merged" id="all.3oUTuA" title="原文 : Top N loaded members, Top N heap usage and GC activity">上位Nロード済メンバー、上位Nヒープ使用量およびGCアクティビティ</span></p>

</li>
<li>
<p><span class="merged" id="all.xRGJf" title="原文 : Service backlogs and endangered or vulnerable services">サービスのバックログおよび危険にさらされた、または脆弱なサービス</span></p>

</li>
<li>
<p><span class="merged" id="all.2emxMH" title="原文 : Top query times, non-optimized queries">上位クエリー時間、最適化されていないクエリー</span></p>

</li>
<li>
<p><span class="merged" id="all.3Jgsv4" title="原文 : Guardian recoveries and terminations">Guardianのリカバリと終了</span></p>

</li>
</ul>


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="ダッシュボード・メイン" src="./images/grafana-main.png" width="1024" /> </v-card-text> </v-card>

</div>

<h3 id="members"><span class="merged" id="all.2lf1sj" title="原文 : 2. Members Summary &amp; Details Dashboards">2. メンバー・サマリー&amp;詳細ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.xXN0U" title="原文 : Shows an overview of all cluster members that are enabled for metrics capture including metrics such as:">メトリクス取得に対して有効になっているすべてのクラスタ・メンバーの概要を示します。は次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3vDERL" title="原文 : Member list include heap usage">メンバー・リストにはヒープ使用量が含まれます</span></p>

</li>
<li>
<p><span class="merged" id="all.1cgI96" title="原文 : Top N members for GC time and count">GC時間とカウントの上位Nメンバー</span></p>

</li>
<li>
<p><span class="merged" id="all.2f6AjD" title="原文 : Total GC collection count and time by Member">メンバー別総GC収集件数および時間</span></p>

</li>
<li>
<p><span class="merged" id="all.3CbR8f" title="原文 : Publisher and Receiver success rates">パブリッシャおよびレシーバの成功率</span></p>

</li>
<li>
<p><span class="merged" id="all.1p8KVP" title="原文 : Guardian recoveries and send queue size">Guardianのリカバリおよび送信キュー・サイズ</span></p>

</li>
</ul>

<h4 id="_members_summary"><span class="merged" id="all.V9hTZ" title="原文 : Members Summary">メンバー・サマリー</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="メンバー" src="./images/grafana-members.png" width="1024" /> </v-card-text> </v-card>

</div>

<h4 id="_member_details"><span class="merged" id="all.3PjWCs"  title="原文:: Member Details">メンバーの詳細</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="メンバーの詳細" src="./images/grafana-member.png" width="1024" /> </v-card-text> </v-card>

</div>
</div>

<h3 id="services"><span class="merged" id="all.478dZs" title="原文 : 3. Services Summary &amp; Details Dashboards">3. サービス・サマリー&amp;詳細ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.4OQGnp" title="原文 : Shows an overview of all cluster services including metrics such as:">次のようなメトリクスを含むすべてのクラスタ・サービスの概要を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.ns04f" title="原文 : Service members for storage and non-storage services">ストレージおよび非ストレージ・サービスのサービス・メンバー</span></p>

</li>
<li>
<p><span class="merged" id="all.YvyVT" title="原文 : Service task count">サービス・タスク数</span></p>

</li>
<li>
<p><span class="merged" id="all.LBINp" title="原文 : StatusHA values as well as endangered, vulnerable and unbalanced partitions">StatusHA値、危険にさらされる、脆弱な、バランスのれないパーティション</span></p>

</li>
<li>
<p><span class="merged" id="all.2dsTo9" title="原文 : Top N services by task count and backlog">タスク数およびバックログ別の上位Nサービス</span></p>

</li>
<li>
<p><span class="merged" id="all.1yGnKa" title="原文 : Task rates, request pending counts and task and request averages">タスク率、待ち状態の棚卸のリクエストおよびタスクと平均のリクエスト</span></p>

</li>
</ul>

<h4 id="_services_summary"><span class="merged" id="all.2Wplcn"  title="原文:: Services Summary">サービス・サマリー</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="サービス" src="./images/grafana-services.png" width="1024" /> </v-card-text> </v-card>

</div>

<h4 id="_service_details"><span class="merged" id="all.2d7XRY"  title="原文:: Service Details">サービス詳細</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="サービス詳細" src="./images/grafana-service.png" width="1024" /> </v-card-text> </v-card>

</div>
</div>

<h3 id="caches"><span class="merged" id="all.1RORbc" title="原文 : 4. Caches Summary &amp; Detail Dashboards">4. キャッシュ・サマリー&amp;詳細ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.1IieE8" title="原文 : Shows an overview of all caches including metrics such as:">次のようなメトリクスを含むすべてのキャッシュの概要を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2il2us" title="原文 : Cache entries, memory and index usage">キャッシュ・エントリ、メモリーおよび索引の使用</span></p>

</li>
<li>
<p><span class="merged" id="all.4Rm8Sn" title="原文 : Cache access counts including gets, puts and removed, max query times">取得、棚入、削除、最大クエリー時間などのキャッシュ・アクセス数</span></p>

</li>
<li>
<p><span class="merged" id="all.3SHNdJ" title="原文 : Front cache hit and miss rates">フロント・キャッシュ・ヒット率およびミス率</span></p>

</li>
</ul>

<h4 id="_caches_summary"><span class="merged" id="all.K5rUG" title="原文 : Caches Summary">キャッシュ・サマリー</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="キャッシュ" src="./images/grafana-caches.png" width="1024" /> </v-card-text> </v-card>

</div>

<h4 id="_cache_details"><span class="merged" id="all.2D3t6W"  title="原文:: Cache Details">キャッシュ詳細</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="キャッシュ詳細" src="./images/grafana-cache.png" width="1024" /> </v-card-text> </v-card>

</div>
</div>

<h3 id="proxies"><span class="merged" id="all.2zijYN" title="原文 : 5. Proxy Servers Summary &amp; Detail Dashboards">5. プロキシ・サーバー・サマリー&amp;詳細ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.hqeaU" title="原文 : Shows and overview of Proxy servers including metrics such as:">次のようなメトリクスを含むプロキシ・サーバーの表示および概要:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.PDP8y" title="原文 : Active connection count and service member count">アクティブな接続数およびサービス・メンバー数</span></p>

</li>
<li>
<p><span class="merged" id="all.qlzJ7" title="原文 : Total messages sent/ received">送信/ 受信されたメッセージの合計</span></p>

</li>
<li>
<p><span class="merged" id="all.3Hgh4l" title="原文 : Proxy server data rates">プロキシ・サーバーのデータ・レート</span></p>

</li>
<li>
<p><span class="merged" id="all.2UYjNc" title="原文 : Individual connection details abd byte backlogs">個々の接続の詳細abdバイト・バックログ</span></p>

</li>
</ul>

<h4 id="_proxy_servers_summary"><span class="merged" id="all.4E06P5" title="原文 : Proxy Servers Summary">プロキシ・サーバー・サマリー</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="プロキシ・サーバー" src="./images/grafana-proxies.png" width="1024" /> </v-card-text> </v-card>

</div>

<h4 id="_proxy_servers_detail"><span class="merged" id="all.3cLiZf" title="原文 : Proxy Servers Detail">プロキシ・サーバー詳細</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="プロキシ・サーバーの詳細" src="./images/grafana-proxy.png" width="1024" /> </v-card-text> </v-card>

</div>
</div>

<h3 id="persistence"><span class="merged" id="all.2CPKKI" title="原文 : 6. Persistence Summary Dashboard">6. 永続性サマリー・ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.4KDzCM" title="原文 : Shows and overview of Persistence including metrics such as:">次のようなメトリクスを含む永続性の表示および概要を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3whVme" title="原文 : Persistence enabled services">永続性対応のサービス</span></p>

</li>
<li>
<p><span class="merged" id="all.33eSbh" title="原文 : Maximum active persistence latency">最大アクティブ永続性レイテンシ</span></p>

</li>
<li>
<p><span class="merged" id="all.aINpY" title="原文 : Active space total usage and by service">アクティブ領域の合計使用量およびサービス別</span></p>

</li>
</ul>


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="永続性" src="./images/grafana-persistence.png" width="1024" /> </v-card-text> </v-card>

</div>

<h3 id="federation"><span class="merged" id="all.2rjcc5" title="原文 : 7. Federation Summary &amp; Details Dashboards">7. フェデレーション・サマリー&amp;詳細ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.1QVOgr" title="原文 : Shows overview of Federation including metrics such as:">次のようなメトリクスを含むフェデレーションの概要を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3yrS3L" title="原文 : Destination and Origins details">搬送先および当初詳細</span></p>

</li>
<li>
<p><span class="merged" id="all.1c3Hm0" title="原文 : Entries, records and bytes send and received">エントリ、レコード、および送受信バイト数</span></p>

</li>
</ul>

<h4 id="_federation_summary"><span class="merged" id="all.3ksVCd" title="原文 : Federation Summary">フェデレーション・サマリー</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="フェデレーション・サマリー" src="./images/grafana-federation-summary.png" width="1024" /> </v-card-text> </v-card>

</div>

<h4 id="_federation_details"><span class="merged" id="all.24OaBu" title="原文 : Federation Details">フェデレーション詳細</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="フェデレーション詳細" src="./images/grafana-federation-detail.png" width="1024" /> </v-card-text> </v-card>

</div>
</div>

<h3 id="machines"><span class="merged" id="all.E9Jq2" title="原文 : 8. Machines Summary Dashboard">8. マシン・サマリー・ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.4UoZV6" title="原文 : Shows an overview of all machines that make up the Kubernetes cluster underlying the Coherence cluster including metrics such as:">Coherenceクラスタの基礎となるKubernetesクラスタを構成する、次のようなメトリクスを含むすべてのマシンの概要を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.13kY9F" title="原文 : Machine processors, free swap space and physical memory">機械プロセッサ、空きスワップ領域および物理メモリー</span></p>

</li>
<li>
<p><span class="merged" id="all.4Mk8RL" title="原文 : Load averages">平均のロード</span></p>

</li>
</ul>


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="マシン" src="./images/grafana-machines.png" width="1024" /> </v-card-text> </v-card>

</div>

<h3 id="http"><span class="merged" id="all.38sIVi" title="原文 : 9. HTTP Servers Summary Dashboard">9. HTTPサーバー・サマリー・ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.1LoajY" title="原文 : Shows an overview of all HTTP Servers running in the cluster including metrics such as:">次のようなメトリクスを含む、クラスタで実行されているすべてのHTTPサーバーの概要を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.MLxSy" title="原文 : Service member count, requests, error count and average request time">サービス・メンバー数、リクエスト、エラー数および平均リクエスト時間</span></p>

</li>
<li>
<p><span class="merged" id="all.419yCY" title="原文 : HTTP Request rates and response codes">HTTPリクエスト率およびレスポンス・コード</span></p>

</li>
</ul>


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="HTTPサーバー" src="./images/grafana-http.png" width="1024" /> </v-card-text> </v-card>

</div>

<h3 id="ed"><span class="merged" id="all.SbYWY" title="原文 : 10. Elastic Data Summary Dashboard">10. エラスティック・データ・サマリー・ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.1LoajY.1" title="原文 : Shows an overview of all HTTP Servers running in the cluster including metrics such as:">次のようなメトリクスを含む、クラスタで実行されているすべてのHTTPサーバーの概要を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3EDFGj" title="原文 : RAM and Flash journal files in use">使用中のRAMおよびFlash仕訳ファイル</span></p>

</li>
<li>
<p><span class="merged" id="all.DBklh" title="原文 : RAM and Flash compactions">RAMとフラッシュの圧縮</span></p>

</li>
</ul>


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="エラスティック・データ" src="./images/grafana-elastic-data.png" width="1024" /> </v-card-text> </v-card>

</div>

<h3 id="executors"><span class="merged" id="all.2CZzDS" title="原文 : 11. Executors Summary &amp; Details Dashboards">11. エグゼキュータ・サマリー&amp;詳細ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.2WiBhi" title="原文 : Shows an overview of all Executors running in the cluster including metrics such as:">次のようなメトリクスを含む、クラスタで実行されているすべてのエグゼキュータの概要を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.27iKeQ" title="原文 : Tasks in Progress">進行中のタスク</span></p>

</li>
<li>
<p><span class="merged" id="all.3gdZN5" title="原文 : Completed and Rejected Tasks">完了済および否認済タスク</span></p>

</li>
<li>
<p><span class="merged" id="all.1VPURv" title="原文 : Individual Executor status">個々のエグゼキュータ・ステータス</span></p>

</li>
</ul>

<h4 id="_executors_summary"><span class="merged" id="all.1TlCsD" title="原文 : Executors Summary">エグゼキュータ・サマリー</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="エグゼキュータ・サマリー" src="./images/grafana-executors-summary.png" width="1024" /> </v-card-text> </v-card>

</div>

<h4 id="_executor_details"><span class="merged" id="all.ZMNYh" title="原文 : Executor Details">エグゼキュータ詳細</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="エグゼキュータ詳細" src="./images/grafana-executor-detail.png" width="1024" /> </v-card-text> </v-card>

</div>
</div>

<h3 id="grpc"><span class="merged" id="all.2pDyJN" title="原文 : 12. gRPC Proxy Summary &amp; Details Dashboards">12. gRPCプロキシ・サマリー&amp;詳細ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.49VkaN" title="原文 : Shows an overview of all gRPC Proxies running in the cluster including metrics such as:">次のようなメトリクスを含む、クラスタで実行されているすべてのgRPCプロキシの概要を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.13BoY6"  title="原文:: Connections">接続</span></p>

</li>
<li>
<p><span class="merged" id="all.1uFgus" title="原文 : Requests and responses">リクエストおよびレスポンス</span></p>

</li>
<li>
<p><span class="merged" id="all.40Xs3r"  title="原文:: Proxy list">「プロキシ」リスト</span></p>

</li>
</ul>

<h4 id="_grpc_proxies_summary"><span class="merged" id="all.1byU6K" title="原文 : gRPC Proxies Summary">gRPCプロキシ・サマリー</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="gRPCプロキシ・サマリー" src="./images/grafana-grpc-proxies.png" width="1024" /> </v-card-text> </v-card>

</div>

<h4 id="_grpc_proxies_details"><span class="merged" id="all.4At0Q5" title="原文 : gRPC Proxies Details">gRPCプロキシ詳細</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="gRPCプロキシ詳細" src="./images/grafana-proxy.png" width="1024" /> </v-card-text> </v-card>

</div>
</div>

<h3 id="topics"><span class="merged" id="all.4JRRL1" title="原文 : 13. Topics, Subscribers and Subscriber Groups Dashboards">13. トピック、サブスクライバおよびサブスクライバ・グループ・ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.CY9D" title="原文 : Shows an overview of all Topics running in the cluster including metrics such as:">次のようなメトリクスを含む、クラスタで実行されているすべてのトピックの概要を示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.UyJzM" title="原文 : Topics, Subscribers and Subscriber Groups">トピック、サブスクライバおよびサブスクライバ・グループ</span></p>

</li>
<li>
<p><span class="merged" id="all.OujW6" title="原文 : Published and received messages counts">公開済および受信済メッセージ数</span></p>

</li>
<li>
<p><span class="merged" id="all.2BoaNl" title="原文 : Topic channel allocations">トピック・チャネル割当</span></p>

</li>
</ul>

<h4 id="_topics_summary"><span class="merged" id="all.1k8Xmp" title="原文 : Topics Summary">トピック・サマリー</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="トピック・サマリー" src="./images/grafana-topics.png" width="1024" /> </v-card-text> </v-card>

</div>

<h4 id="_topic_details"><span class="merged" id="all.4SBKaQ"  title="原文:: Topic Details">トピックの詳細</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="トピック詳細" src="./images/grafana-topic.png" width="1024" /> </v-card-text> </v-card>

</div>

<h4 id="_topic_subscriber_group"><span class="merged" id="all.2Bxm4Q" title="原文 : Topic Subscriber Group">トピック・サブスクライバ・グループ</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="トピック・サブスクライバ・グループ詳細" src="./images/grafana-topic-subscriber-group.png" width="1024" /> </v-card-text> </v-card>

</div>

<h4 id="_topic_subscriber"><span class="merged" id="all.1idRnf" title="原文 : Topic Subscriber">トピック・サブスクライバ</span></h4>
<div class="section">


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="トピック・サブスクライバ詳細" src="./images/grafana-topic-subscriber.png" width="1024" /> </v-card-text> </v-card>

</div>
</div>
</div>
</doc-view>
