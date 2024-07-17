<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_using_kibana_dashboards"><span class="merged" id="all.2tpApa" title="原文 : Using Kibana Dashboards">Kibanaダッシュボードの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3Dk67H.spl1" title="原文 : Kibana is often used to anyalze log files that have been collected into Elasticsearch.">Kibanaは、Elasticsearchに収集されたログ・ファイルを凍結するためによく使用されます。</span> <span class="merged" id="all.3Dk67H.spl2" title="原文 : The Coherence Operator provides a number of Kibana dashboards and queries to allow you to view and analyze logs from your Coherence clusters.">Coherence Operatorには、Coherenceクラスタからのログを表示および分析できる多数のKibanaダッシュボードおよび問合せが用意されています。</span> </p>


<h3 id="_importing_kibana_dashboards"><span class="merged" id="all.1VLgtf" title="原文 : Importing Kibana Dashboards">Kibanaダッシュボードのインポート</span></h3>
<div class="section">
<p><span class="merged" id="all.1eEZp9" title="原文 : The Kibana dashboard files are located in the Coherence operator source in the dashboards/kibana directory.">Kibanaダッシュボード・ファイルは、<code>dashboards/kibana</code>ディレクトリのCoherenceオペレータ・ソースにあります。</span></p>

<p><span class="merged" id="all.1YF3vg.spl1" title="原文 : The method of importing the dashboards into Kibana will depend on how Kibana is being run.">ダッシュボードをKibanaにインポートするメソッドは、Kibanaの実行メソッドによって異なります。</span> <span class="merged" id="all.1YF3vg.spl2" title="原文 : The simplest method is just to import the json file using the Kibana web UI.">最も簡単なメソッドは、Kibana web UIを使用してjsonファイルをインポートすることです。</span> <span class="merged" id="all.1YF3vg.spl3" title="原文 : An alternative approach is to load the dashboard into a ConfigMap in Kubernetes that is mounted into the Kibana Pod and then trigger an import when Kibana starts.">別の方法として、KibanaポッドにマウントされたKubernetesの<code>ConfigMap</code>にダッシュボードをロードし、Kibanaの起動時にインポートをトリガーする方法があります。</span> <span class="merged" id="all.1YF3vg.spl4" title="原文 : As there are many ways to do this depending on the specifics of the version of Kibana being used, exact instructions are beyond the scope fo this guide.">使用されているKibanaのバージョンの詳細によっては、これを行う方法がたくさんあるため、正確な手順は、このガイドの範囲外です。</span> </p>

</div>

<h3 id="_kibana_dashboards_searches"><span class="merged" id="all.3pjt0M" title="原文 : Kibana Dashboards &amp; Searches">Kibanaダッシュボード&amp;検索</span></h3>
<div class="section">

</div>

<h3 id="_table_of_contents"><span class="merged" id="all.2jNfVE.1"  title="原文:: Table of Contents">目次</span></h3>
<div class="section">
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1LD6qN" title="原文 : Dashboards"><router-link @click.native="this.scrollFix('#dashboards')" to="#dashboards">ダッシュボード</router-link></span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1HJtlR" title="原文 : Coherence Cluster - All Messages"><router-link @click.native="this.scrollFix('#all')" to="#all">Coherenceクラスタ - すべてのメッセージ</router-link></span>

</li>
<li>
<span class="merged" id="all.2vYukc" title="原文 : Coherence Cluster - Errors and Warnings"><router-link @click.native="this.scrollFix('#errors')" to="#errors">Coherenceクラスタ - エラーおよび警告</router-link></span>

</li>
<li>
<span class="merged" id="all.2GHxFL" title="原文 : Coherence Cluster - Persistence"><router-link @click.native="this.scrollFix('#persistence')" to="#persistence">Coherenceクラスタ - 永続性</router-link></span>

</li>
<li>
<span class="merged" id="all.1ukQ0c" title="原文 : Coherence Cluster - Configuration Messages"><router-link @click.native="this.scrollFix('#config')" to="#config">Coherenceクラスタ - 構成メッセージ</router-link></span>

</li>
<li>
<span class="merged" id="all.1uHfgr" title="原文 : Coherence Cluster - Network"><router-link @click.native="this.scrollFix('#network')" to="#network">Coherenceクラスタ - ネットワーク</router-link></span>

</li>
<li>
<span class="merged" id="all.37BrPh" title="原文 : Coherence Cluster - Partitions"><router-link @click.native="this.scrollFix('#partitions')" to="#partitions">Coherenceクラスタ - パーティション</router-link></span>

</li>
<li>
<span class="merged" id="all.18PZeQ" title="原文 : Coherence Cluster - Message Sources"><router-link @click.native="this.scrollFix('#sources')" to="#sources">Coherenceクラスタ - メッセージ・ソース</router-link></span>

</li>
</ol>
</li>
<li>
<span class="merged" id="all.3j4x1v" title="原文 : Searches"><router-link @click.native="this.scrollFix('#searches')" to="#searches">検索</router-link></span>

</li>
</ol>
</div>

<h3 id="dashboards"><span class="merged" id="all.4EkGaY"  title="原文:: Dashboards">ダッシュボード</span></h3>
<div class="section">
<p><span class="merged" id="all.3SKTgU" title="原文 : Information from all dashboards (and queries) can be filtered using the standard Kibana date/time filtering in the top right of the UI, as well as the Add a filter button.">すべてのダッシュボード(および問合せ)からの情報は、UIの右上にある標準のKibana日時フィルタリングと<code>Add a filter</code>ボタンを使用してフィルタできます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="フィルタ" src="./images/kibana-filters.png" width="600" /> </v-card-text> </v-card>


<h4 id="all"><span class="merged" id="all.4JjKF6" title="原文 : 1. Coherence Cluster - All Messages">1. Coherenceクラスタ - すべてのメッセージ</span></h4>
<div class="section">
<p><span class="merged" id="all.4F1ix4" title="原文 : This dashboard shows all messages captured for the given time period for all clusters.">このダッシュボードには、すべてのクラスタの指定された期間に取得されたすべてのメッセージが表示されます。</span></p>

<p><span class="merged" id="all.3gCb50" title="原文 : Users can drill-down by cluster, host, message level and thread.">ユーザーは、クラスタ、ホスト、メッセージ・レベルおよびスレッドごとにドリルダウンできます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="すべてのメッセージ" src="./images/kibana-all-messages.png" width="900" /> </v-card-text> </v-card>

</div>

<h4 id="errors"><span class="merged" id="all.2XOGU2" title="原文 : 2. Coherence Cluster - Errors and Warnings">2. Coherenceクラスタ - エラーおよび警告</span></h4>
<div class="section">
<p><span class="merged" id="all.3XiGG0" title="原文 : This dashboard shows errors and warning messages only.">このダッシュボードには、エラーおよび警告メッセージのみが表示されます。</span></p>

<p><span class="merged" id="all.3gCb50.1" title="原文 : Users can drill-down by cluster, host, message level and thread.">ユーザーは、クラスタ、ホスト、メッセージ・レベルおよびスレッドごとにドリルダウンできます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="エラーおよび警告" src="./images/kibana-errors-warnings.png" width="900" /> </v-card-text> </v-card>

</div>

<h4 id="persistence"><span class="merged" id="all.4NzwNM" title="原文 : 3. Coherence Cluster - Persistence">3. Coherenceクラスタ - 永続性</span></h4>
<div class="section">
<p><span class="merged" id="all.2Bk9fz" title="原文 : This dashboard shows Persistence related messages including failed and successful operations.">このダッシュボードには、失敗した操作や成功した操作を含む永続性関連メッセージが表示されます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="永続性" src="./images/kibana-persistence.png" width="900" /> </v-card-text> </v-card>

</div>

<h4 id="config"><span class="merged" id="all.2eW8D3" title="原文 : 4. Coherence Cluster - Configuration Messages">4. Coherenceクラスタ - 構成メッセージ</span></h4>
<div class="section">
<p><span class="merged" id="all.1jYh3G" title="原文 : This dashboard shows configuration related messages such as loading of operational, cache configuration and POF configuration files.">このダッシュボードには、操作、キャッシュ構成およびPOF構成ファイルのロードなどの構成関連メッセージが表示されます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="構成" src="./images/kibana-configuration.png" width="900" /> </v-card-text> </v-card>

</div>
</div>

<h3 id="network"><span class="merged" id="all.te1zP" title="原文 : 5. Coherence Cluster - Network">5. Coherenceクラスタ - ネットワーク</span></h3>
<div class="section">
<p><span class="merged" id="all.1iEWbL" title="原文 : This dashboard hows network related messages, such as communication delays and TCP ring disconnects.">このダッシュボードは、通信の遅延やTCPリングの切断などのネットワーク関連メッセージを表示します。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="ネットワーク" src="./images/kibana-network.png" width="900" /> </v-card-text> </v-card>


<h4 id="partitions"><span class="merged" id="all.aTeUX" title="原文 : 6. Coherence Cluster - Partitions">6. Coherenceクラスタ - パーティション</span></h4>
<div class="section">
<p><span class="merged" id="all.IeW7b" title="原文 : Shows partition transfer and partition loss messages.">パーティション転送およびパーティション損失メッセージを表示します。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="パーティション" src="./images/kibana-partitions.png" width="900" /> </v-card-text> </v-card>

</div>

<h4 id="sources"><span class="merged" id="all.1BGofM" title="原文 : 7. Coherence Cluster - Message Sources">7. Coherenceクラスタ - メッセージ・ソース</span></h4>
<div class="section">
<p><span class="merged" id="all.2WpKvf" title="原文 : Shows the source (thread) for messages">メッセージのソース(スレッド)を表示</span></p>

<p><span class="merged" id="all.295EOw" title="原文 : Users can drill-down by cluster, host and message level.">ユーザーは、クラスタ、ホストおよびメッセージ・レベルでドリルダウンできます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="ソース" src="./images/kibana-message-sources.png" width="900" /> </v-card-text> </v-card>

</div>
</div>

<h3 id="searches"><span class="merged" id="all.2oCqzv"  title="原文:: Searches">検索</span></h3>
<div class="section">
<p><span class="merged" id="all.3uUjUb.spl1" title="原文 : A number of searches are automatically includes which can help assist in diagnosis and troubleshooting a Coherence cluster.">Coherenceクラスタの診断およびトラブルシューティングに役立つ多数の検索が自動的に含まれます。</span> <span class="merged" id="all.3uUjUb.spl2" title="原文 : They can be accessed via the Discover side-bar and selecting `Open."><code>Discover</code> <code>side-bar and selecting `Open</code>を介してアクセスできます。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="検索" src="./images/kibana-search.png" width="700" /> </v-card-text> </v-card>

<p><span class="merged" id="all.3nhWZp" title="原文 : These are grouped into the following general categories:">これらは、次の一般的なカテゴリにグループ化されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.yLQ89" title="原文 : Cluster - Cluster join, discovery, heartbeat, member joining and stopping messages">クラスタ - クラスタへの参加、検出、ハートビート、メンバーの参加と停止</span></p>

</li>
<li>
<p><span class="merged" id="all.1H8LLN" title="原文 : Cache - Cache restarting, exceptions and index exception messages">キャッシュ - キャッシュの再起動、例外および索引例外メッセージ</span></p>

</li>
<li>
<p><span class="merged" id="all.3hJNKp" title="原文 : Configuration - Configuration loading and not loading messages">構成 - 構成のロードおよびメッセージのロードなし</span></p>

</li>
<li>
<p><span class="merged" id="all.xRjfU" title="原文 : Persistence - Persistence success and failure messages">永続性 - 永続性成功および失敗メッセージ</span></p>

</li>
<li>
<p><span class="merged" id="all.3N2GFJ" title="原文 : Network - Network communications delays, disconnects, timeouts and terminations">ネットワーク - ネットワーク通信の遅延、切断、タイムアウトおよび終了</span></p>

</li>
<li>
<p><span class="merged" id="all.3zUpM1" title="原文 : Partition - Partition loss, ownership and transfer related messages">パーティション - パーティションの損失、所有権および転送関連メッセージ</span></p>

</li>
<li>
<p><span class="merged" id="all.YhTmD" title="原文 : Member - Member thread dump, join and leave messages">メンバー - メンバー・スレッド・ダンプ、結合およびメッセージを残します</span></p>

</li>
<li>
<p><span class="merged" id="all.4SkRyr" title="原文 : Errors - All Error messages only">エラー - すべてのエラー・メッセージのみ</span></p>

</li>
<li>
<p><span class="merged" id="all.1IrPYb" title="原文 : Federation - Federation participant, disconnection, connection, errors and other messages">フェデレーション - フェデレーション参加者、切断、接続、エラーおよびその他のメッセージ</span></p>

</li>
</ul>
</div>
</div>
</doc-view>
