<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_importing_the_coherence_dashboards"><span class="merged" id="all.3xUzQ4" title="原文 : Importing the Coherence Dashboards">Coherenceダッシュボードのインポート</span></h2>
<div class="section">
<p><span class="merged" id="all.vXjuz.spl1" title="原文 : The Coherence Operator provides a set of dashboards for Coherence that may be imported into Grafana.">Coherence Operatorには、GrafanaにインポートできるCoherence用の一連のダッシュボードが用意されています。</span> <span class="merged" id="all.vXjuz.spl2" title="原文 : The Coherence dashboards are explained in detail on the Coherence Grafana Dashboards page.">Coherenceダッシュボードの詳細は、<router-link @click.native="this.scrollFix('#040_dashboards.adoc')" to="#040_dashboards.adoc">「Coherence Grafanaダッシュボード」</router-link>ページで説明します。</span> </p>

<p><span class="merged" id="all.22pVn" title="原文 : There are two ways to obtain the dashboards:">ダッシュボードを取得するには、次の2つの方法があります:</span></p>

<p><span class="merged" id="all.33off2" title="原文 : 1 - Download the .tar.gz dashboards package for the release you want to use.">1 - 使用するリリースの<code>.tar.gz</code>ダッシュボード・パッケージをダウンロードします。</span></p>

<markup
lang="bash"

>curl https://oracle.github.io/coherence-operator/dashboards/latest/coherence-dashboards.tar.gz \
    -o coherence-dashboards.tar.gz
tar -zxvf coherence-dashboards.tar.gz</markup>

<p><span class="merged" id="all.mKukc.spl1" title="原文 : The above commands will download the coherence-dashboards.tar.gz file and unpack it resulting in a directory named dashboards/ in the current working directory.">前述のコマンドは、<code>coherence-dashboards.tar.gz</code>ファイルをダウンロードし、解凍して、現在の作業ディレクトリに<code>dashboards/</code>という名前のディレクトリを作成します。</span> <span class="merged" id="all.mKukc.spl2" title="原文 : This dashboards/ directory will contain the various Coherence dashboard files.">この<code>dashboards/</code>ディレクトリには、様々なCoherenceダッシュボード・ファイルが含まれます。</span> </p>

<p><span class="merged" id="all.s3P58" title="原文 : 2 - Clone the Coherence Operator GitHub repo, checkout the branch or tag for the version you want to use and then obtain the dashboards from the dashboards/ directory.">2 - Coherence Operator GitHubリポジトリをクローニングし、使用するバージョンのブランチまたはタグをチェックアウトし、<code>dashboards/</code>ディレクトリからダッシュボードを取得します。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.xWyRP.spl1" title="原文 : The recommended versions of Grafana to use are: 8.5.6 or 6.7.4.">使用するGrafanaの推奨バージョンは次のとおりです: <code>8.5.6</code>または<code>6.7.4</code>。</span> <span class="merged" id="all.xWyRP.spl2" title="原文 : It is not yet recommended to use the 9.x versions of Grafana as there are a number of bugs that cause issues when using the dashboards.">ダッシュボードの使用時に問題が発生するバグが多数あるため、<code>9.x</code>バージョンのGrafanaを使用することはまだお薦めしません。</span> </p>
</div>
</div>

<h2 id="_import_the_dashboards_into_grafana"><span class="merged" id="all.3RkvGU" title="原文 : Import the Dashboards into Grafana.">ダッシュボードをGrafanaにインポートします。</span></h2>
<div class="section">
<p><span class="merged" id="all.48acbp.spl1" title="原文 : This section shows you how to import the Grafana dashboards into your own Grafana instance.">この項では、Grafanaダッシュボードを独自のGrafanaインスタンスにインポートする方法を示します。</span> <span class="merged" id="all.48acbp.spl2" title="原文 : Once you have obtained the dashboards using one of the methods above, the Grafana dashboard .json files will be in the dashboards/grafana/ subdirectory">前述のメソッドのいずれかを使用してダッシュボードを取得すると、Grafanaダッシュボードの<code>.json</code>ファイルが<code>dashboards/grafana/</code>サブディレクトリに格納されます</span> </p>

<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p.3"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.1ShKUZ.spl1" title="原文 : By default, the Coherence dashboards require a datasource in Grafana named prometheus (which is case-sensitive).">デフォルトでは、Coherenceダッシュボードには<code>prometheus</code>という名前のGrafanaのデータソースが必要です(大/小文字が区別されます)。</span> <span class="merged" id="all.1ShKUZ.spl2" title="原文 : This datasource usually exists in an out-of-the-box Prometheus Operator installation.">通常、このデータソースは、すぐに使用できるPrometheusオペレータ・インストールに存在します。</span> <span class="merged" id="all.1ShKUZ.spl3" title="原文 : If your Grafana environment does not have this datasource, then there are two choices.">Grafana環境にこのデータソースがない場合は、2つの選択肢があります。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2PAp2E" title="原文 : Create a Prometheus datasource named prometheus as described in the Grafana Add a Datasource documentation and make this the default datasource."><a href="https://grafana.com/docs/grafana/latest/datasources/add-a-data-source/" id="" target="_blank" >「Grafanaデータソースの追加」</a>ドキュメントの説明に従って、<code>prometheus</code>という名前のPrometheusデータソースを作成し、これをデフォルト・データソースにします。</span></p>

</li>
<li>
<p><span class="merged" id="all.3EAS5m.spl1" title="原文 : If you have an existing Prometheus datasource with a different name then you will need to edit the dashboard json files to change all occurrences of &quot;datasource&quot;: &quot;prometheus&quot; to have the name of your Prometheus datasource.">別の名前の既存のPrometheusデータソースがある場合、ダッシュボードのjsonファイルを編集して、<code>"datasource": "prometheus"</code>のすべての出現箇所をPrometheusデータソースの名前に変更する必要があります。</span> <span class="merged" id="all.3EAS5m.spl2" title="原文 : For example, running the script below in the directory containing the datasource .json files to be imported will change the datasource name from prometheus to Coherence-Prometheus.">たとえば、インポートするデータソース<code>.json</code>ファイルを含むディレクトリで次のスクリプトを実行すると、データソース名が<code>prometheus</code>から<code>Coherence-Prometheus</code>に変更されます。</span> </p>

</li>
</ul>
<div class="listing">
<markup>for file in *.json
do
    sed -i '' -e 's/"datasource": "prometheus"/"datasource": "Coherence-Prometheus"/g' $file;
done</markup>
</div>

<p><span class="merged" id="all.2nmn94" title="原文 : The above sed command works for MacOS, but if you are running on Linux you need to remove the &apos;&apos; after the -i.">前述のsedコマンドはMacOSに対して機能しますが、Linuxで実行している場合は、<code>-i</code>の後に<code>''</code>を削除する必要があります。</span></p>
</p>
</div>

<h3 id="_manually_import_grafana_dashboards"><span class="merged" id="all.1pVGp4" title="原文 : Manually Import Grafana Dashboards">Grafanaダッシュボードの手動インポート</span></h3>
<div class="section">
<p><span class="merged" id="all.4RCzH9" style='background-color:yellow' title="原文 : The dashboard .json files can be manually imported into Grafana using the Grafana UI following the instructions in the Grafana Import Dashboards documentation.">♪ダッシュボード<code>.json</code>ファイルは、<a href="https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/import-dashboards/" id="" target="_blank" >「Grafanaダッシュボードのインポート」</a>ドキュメントの指示に従ってGrafana UIを使用して、Grafanaに手動でインポートできます。</span></p>

</div>

<h3 id="_bulk_import_grafana_dashboards"><span class="merged" id="all.l3Q8b" title="原文 : Bulk Import Grafana Dashboards">Grafanaダッシュボードの一括インポート</span></h3>
<div class="section">
<p><span class="merged" id="all.33L9Wq.spl1" title="原文 : At the time of writing, for whatever reason, Grafana does not provide a simple way to bulk import a set of dashboard files.">書込み時に、なんらかの理由で、Grafanaでは一連のダッシュボード・ファイルを一括インポートする簡単な方法はありません。</span> <span class="merged" id="all.33L9Wq.spl2" title="原文 : There are many examples and scripts on available in the community that show how to do this.">この方法を示す多くの例とスクリプトがコミュニティで使用可能です。</span> <span class="merged" id="all.33L9Wq.spl3" title="原文 : The Coherence Operator source contains a script that can be used for this purpose grafana-import.sh">Coherence Operatorソースには、この目的のために<a href="https://github.com/oracle/coherence-operator/raw/main/hack/grafana-import.sh" id="" target="_blank" >grafana-import.sh</a>に使用できるスクリプトが含まれています</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4L3zT7" title="原文 : The grafana-import.sh script requires the JQ utility to parse json."><code>grafana-import.sh</code>スクリプトでは、jsonを解析するために<a href="https://stedolan.github.io/jq/" id="" target="_blank" >JQ</a>ユーティリティが必要です。</span></p>
</div>
<p><span class="merged" id="all.Rc3aU.spl1" title="原文 : The commands below will download and run the shell script to import the dashboards.">次のコマンドは、ダッシュボードをインポートするためにシェル・スクリプトをダウンロードして実行します。</span> <span class="merged" id="all.Rc3aU.spl2" title="原文 : Change the &lt;GRAFANA-USER&gt; and &lt;GRAFANA_PWD&gt; to the Grafana credentials for your environment."><code>&lt;GRAFANA-USER></code>および<code>&lt;GRAFANA_PWD></code>を環境のGrafana資格証明に変更します。</span> <span class="merged" id="all.Rc3aU.spl3" title="原文 : For example if using the default Prometheus Operator installation they are as specified on the Access Grafana section of the Quick Start page.">たとえば、デフォルトのPrometheusオペレータ・インストールを使用する場合、<a href="https://prometheus-operator.dev/docs/getting-started/quick-start/#access-grafana" id="" target="_blank" >「クイック・スタートのGrafanaセクションにアクセス」</a>ページで指定されているようになります。</span> <span class="merged" id="all.Rc3aU.spl4" title="原文 : We do not document the credentials here as the default values have been known to change between Prometheus Operator and Grafana versions.">PrometheusオペレータとGrafanaバージョン間で変更することがわかっているため、ここで資格証明を文書化しません。</span> </p>

<markup
lang="bash"

>curl -Lo grafana-import.sh https://github.com/oracle/coherence-operator/raw/main/hack/grafana-import.sh
chmod +x grafana-import.sh</markup>

<markup
lang="bash"

>./grafana-import.sh -u &lt;GRAFANA-USER&gt; -w &lt;GRAFANA_PWD&gt; -d dashboards/grafana -t localhost:3000</markup>

<p><span class="merged" id="all.yBs4L.spl1" title="原文 : Note: the command above assumes you can reach Grafana on localhost:3000 (for example, if you have a kubectl port forward process running to forward localhost:3000 to the Grafana service in Kubernetes).">ノート: 前述のコマンドは、<code>localhost:3000</code>でGrafanaに到達できることを前提としています(たとえば、kubectlポート転送プロセスがlocalhost:3000をKubernetesのGrafanaサービスに転送するために実行されている場合)。</span> <span class="merged" id="all.yBs4L.spl2" title="原文 : You may need to change the host and port to match however you are exposing your Grafana instance.">Grafanaインスタンスを公開していますが、一致するようにホストおよびポートを変更する必要がある場合があります。</span> </p>

<p><span class="merged" id="all.3gcKMR.spl1" title="原文 : Coherence clusters can now be created as described in the Publish Metrics page, and metrics will eventually appear in Prometheus and Grafana."><router-link to="/docs/metrics/020_metrics">「メトリクスの公開」</router-link>ページの説明に従ってCoherenceクラスタを作成できるようになり、メトリクスは最終的にPrometheusおよびGrafanaに表示されます。</span> <span class="merged" id="all.3gcKMR.spl2" title="原文 : It can sometimes take a minute or so for Prometheus to start scraping metrics and for them to appear in Grafana.">Prometheusがメトリクスのスクレイピングを開始し、Grafanaに表示されるまで、1分間かかる場合があります。</span> </p>

</div>
</div>
</doc-view>
