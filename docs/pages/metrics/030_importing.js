<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.18onNK" title="原文 : Importing Grafana Dashboards">Grafanaダッシュボードのインポート</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1PSTxl" title="原文 : The Operator has a set of Grafana dashboards that can be imported into a Grafana instance.">オペレータには、Grafanaインスタンスにインポートできる一連のGrafanaダッシュボードがあります。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2AfV9D.1" title="原文 : Note: Use of metrics is available only when using the operator with clusters running Coherence 12.2.1.4 or later version.">ノート: メトリクスの使用は、Coherence 12.2.1.4以上のバージョンを実行しているクラスタでオペレータを使用している場合にのみ使用できます。</span></p>
</div></dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_obtain_the_coherence_dashboards"><span class="merged" id="all.3kxeWz" title="原文 : Obtain the Coherence Dashboards">Coherenceダッシュボードの取得</span></h2>
<div class="section">
<p><span class="merged" id="all.1qgr12.spl1" title="原文 : The Coherence Operator provides a set of dashboards for Coherence that may be imported into Grafana.">Coherence Operatorは、Grafanaにインポート可能なCoherence用の一連のダッシュボードを提供します。</span> <span class="merged" id="all.1qgr12.spl2" title="原文 : There are two ways to obtain the dashboards:">ダッシュボードを取得するには、次の2つの方法があります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2hZqJT" title="原文 : Clone the Coherence Operator GitHub repo, checkout the branch or tag for the version you want to use and then obtain the dashboards from the dashboards/ directory.">Coherence Operator GitHubリポジトリをクローニングし、使用するバージョンのブランチまたはタグをチェックアウトしてから、<code>dashboards/</code>ディレクトリからダッシュボードを取得します。</span></p>

</li>
<li>
<p><span class="merged" id="all.B6O0F" title="原文 : Download the .tar.gz dashboards package for the release you want to use.">使用するリリースの<code>.tar.gz</code>ダッシュボード・パッケージをダウンロードします。</span></p>

</li>
</ul>
<markup
lang="bash"

>curl https://oracle.github.io/coherence-operator/dashboards/latest/coherence-dashboards.tar.gz \
    -o coherence-dashboards.tar.gz
tar -zxvf coherence-dashboards.tar.gz</markup>

<p><span class="merged" id="all.mKukc.spl1" title="原文 : The above commands will download the coherence-dashboards.tar.gz file and unpack it resulting in a directory named dashboards/ in the current working directory.">前述のコマンドは、<code>coherence-dashboards.tar.gz</code>ファイルをダウンロードして解凍し、現在の作業ディレクトリに<code>dashboards/</code>という名前のディレクトリを作成します。</span> <span class="merged" id="all.mKukc.spl2" title="原文 : This dashboards/ directory will contain the various Coherence dashboard files.">この<code>dashboards/</code>ディレクトリには、様々なCoherenceダッシュボード・ファイルが含まれます。</span> </p>

</div>

<h2 id="_importing_grafana_dashboards"><span class="merged" id="all.3g6Rzy" title="原文 : Importing Grafana Dashboards.">Grafanaダッシュボードのインポート</span></h2>
<div class="section">
<p><span class="merged" id="all.2madOy" title="原文 : This example shows you how to import the Grafana dashboards into your own Grafana instance.">この例では、Grafanaダッシュボードを独自のGrafanaインスタンスにインポートする方法を示します。</span></p>

<p><span class="merged" id="all.40ukeB" title="原文 : By default, the Coherence dashboards require a datasource named Prometheus which should also be the default datasource.">デフォルトでは、Coherenceダッシュボードには<code>Prometheus</code>というデータソースが必要ですが、これはデフォルトのデータソースでもあります。</span></p>

<p><span class="merged" id="all.45hy9N" title="原文 : If this datasource is already used, and you cannot add another datasource as the default, then please go to Importing with a different datasource.">このデータソースがすでに使用されており、別のデータソースをデフォルトとして追加できない場合は、<router-link @click.native="this.scrollFix('#different')" to="#different">「異なるデータソースでのインポート」</router-link>に進みます。</span></p>


<h3 id="importing"><span class="merged" id="all.1PWXj5" title="原文 : Manually Importing Using the Defaults">デフォルトを使用した手動インポート</span></h3>
<div class="section">
<p><span class="merged" id="all.2WXNPK" title="原文 : In your Grafana environment, ensure you either:">Grafana環境で、次のいずれかを確認します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.318paO" title="原文 : have a Prometheus datasource named Prometheus which is also marked as the default datasource">デフォルトのデータソースとしてもマークされている<code>Prometheus</code>という名前のPrometheusデータソースがあります</span></p>

</li>
<li>
<p><span class="merged" id="all.J4VJO" title="原文 : have added a new Prometheus datasource which you have set as the default">新しいPrometheusデータソースが追加され、デフォルトとして設定しました</span></p>

</li>
</ul>
<p><span class="merged" id="all.TEPfD" title="原文 : Then continue below.">次に次に進みます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2nURpQ" title="原文 : Clone the git repository using">使用してgitリポジトリをクローン</span></p>

</li>
</ul>
<div class="listing">
<markup>git clone https://github.com/oracle/coherence-operator.git</markup>
</div>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.4"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.20iKOz" title="原文 : There are three sets of dashboards available">使用可能なダッシュボードには3つのセットがあります</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1kQZ5v" title="原文 : Default - these are dashboards under the dashboards/grafana/ directory that are compatible with the metric names produced by the Coherence metrics publisher">デフォルト - これらは、Coherenceメトリクス・パブリッシャによって生成されるメトリック名と互換性のある<code>dashboards/grafana/</code>ディレクトリの下のダッシュボードです</span></p>

</li>
<li>
<p><span class="merged" id="all.3R6tV3" title="原文 : Microprofile - these are dashboards under the dashboards/grafana-microprofile/ directory that are compatible with the metric names produced by the Coherence MP Metrics module.">マイクロ・ファイル - これらは、Coherence MP Metricsモジュールによって生成されるメトリック名と互換性のある<code>dashboards/grafana-microprofile/</code>ディレクトリの下のダッシュボードです。</span></p>

</li>
<li>
<p><span class="merged" id="all.4Lsn2o.spl1" title="原文 : Micrometer - these are dashboards under the dashboards/grafana-micrometer/ directory that are compatible with the metric names produced by the Coherence Micrometer Metrics module.">Micrometer - これらは、Coherence Micrometerメトリクス・モジュールによって生成されるメトリック名と互換性のある、<code>dashboards/grafana-micrometer/</code>ディレクトリの下のダッシュボードです。</span> <span class="merged" id="all.4Lsn2o.spl2" title="原文 : These are metrics commonly used with Microprofile applications such as Helidon.">これらは、Helidonなどのマイクロ・ファイル・アプリケーションで一般的に使用されるメトリクスです。</span> </p>

</li>
<li>
<p><span class="merged" id="all.2aOTtD.spl1" title="原文 : Micrometer - these are dashboards under the dashboards/grafana-micrometer/ directory that are compatible with the metric names produced by the Coherence Micrometer Metrics module.">Micrometer - これらは、Coherence Micrometerメトリクス・モジュールによって生成されるメトリック名と互換性のある、<code>dashboards/grafana-micrometer/</code>ディレクトリの下のダッシュボードです。</span> <span class="merged" id="all.2aOTtD.spl2" title="原文 : Micrometer is a common metrics framework used with applications such as Spring, Micronaut etc.">Micrometerは、Spring、Micronautなどのアプリケーションで使用される共通メトリクス・フレームワークです。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.33Ntq6.spl1" title="原文 : If you do not see metrics on the dashboards as expected you might be using the wrong dashboards version for how Coherence has been configured.">予期したとおりにダッシュボードにメトリクスが表示されない場合は、Coherenceの構成方法に誤ったダッシュボード・バージョンを使用している可能性があります。</span> <span class="merged" id="all.33Ntq6.spl2" title="原文 : The simplest way to find out which version corresponds to your Coherence cluster is to query the metrics endpoint with something like curl.">Coherenceクラスタに対応するバージョンを調べる最も簡単な方法は、<code>curl</code>のようなメトリクス・エンドポイントを問い合せます。</span> <span class="merged" id="all.33Ntq6.spl3" title="原文 : If the metric names are in the format vendor:coherence_cluster_size, i.e. prefixed with vendor: then this is the default Coherence format.">メトリック名の形式が<code>vendor:coherence_cluster_size</code>の場合(プレフィクスが<code>vendor:</code>の場合など)、これはデフォルトのCoherence形式です。</span> <span class="merged" id="all.33Ntq6.spl4" title="原文 : If metric names are in the format vendor_Coherence_Cluster_Size, i.e. prefixed with vendor_ then this is Microprofile format.">メトリック名の形式が<code>vendor_Coherence_Cluster_Size</code>、つまりプレフィクスが<code>vendor_</code>の場合、これはMicroprofile形式です。</span> </p>
</p>
</div>
<ul class="ulist">
<li>
<p><span class="merged" id="all.44YWkA" title="原文 : Decide which dashboards you will import, depending on how metrics are being published (see the note above).">メトリクスの公開方法に応じて、インポートするダッシュボードを決定します(前述のノートを参照)。</span></p>

</li>
<li>
<p><span class="merged" id="all.3ZH3nk" title="原文 : Login to Grafana and for each dashboard in the chosen dashboard directory carry out the following to upload to Grafana:">Grafanaにログインし、選択したダッシュボード・ディレクトリの各ダッシュボードについて、次のように実行し、Grafanaにアップロードします:</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.Z2CWl" title="原文 : Highlight the &apos;+&apos; (plus) icons and click on import">+(プラス)アイコンを強調表示し、インポートをクリック</span></p>

</li>
<li>
<p><span class="merged" id="all.3K1bQN" title="原文 : Click `Upload Json file&apos; button to select a dashboard">Jsonファイルのアップロード・ボタンをクリックしてダッシュボードを選択</span></p>

</li>
<li>
<p><span class="merged" id="all.oz3Rf" title="原文 : Leave all the default values and click on Import">すべてのデフォルト値のままにして、<code>Import</code>をクリック</span></p>

</li>
</ul>
</li>
</ul>
</div>

<h3 id="different"><span class="merged" id="all.WuDz" title="原文 : Manually Importing With a Different Datasource">別のデータソースによる手動インポート</span></h3>
<div class="section">
<p><span class="merged" id="all.4KUEnJ" title="原文 : If your Grafana environment has a default datasource that you cannot change or already has a datasource named Prometheus, follow these steps to import the dashboards:">Grafana環境に、変更できないデフォルトのデータソースがある場合、またはすでに<code>Prometheus</code>というデータソースがある場合は、次のステップに従ってダッシュボードをインポートします:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.fEeSX" title="原文 : Login to Grafana">Grafanaにログイン</span></p>

</li>
<li>
<p><span class="merged" id="all.2fn3sq" title="原文 : Create a new datasource named Coherence-Prometheus and point to your Prometheus endpoint"><code>Coherence-Prometheus</code>という名前の新しいデータソースを作成し、Prometheusエンドポイントを指す</span></p>

</li>
<li>
<p><span class="merged" id="all.imc3C" title="原文 : Create a temporary directory and copy all the dashboards from the cloned directory &lt;DIR&gt;/dashboards/grafana to this temporary directory">一時ディレクトリを作成し、クローニングされたディレクトリ<code>&lt;DIR>/dashboards/grafana</code>のすべてのダッシュボードをこの一時ディレクトリにコピー</span></p>

</li>
<li>
<p><span class="merged" id="all.3Oeio2" title="原文 : Change to this temporary directory and run the following to update the datasource to Coherence-Prometheus or the datasource of your own choice:">この一時ディレクトリに移動し、次を実行して、データソースを<code>Coherence-Prometheus</code>または独自の選択肢のデータソースに更新します:</span></p>

</li>
</ul>
<div class="listing">
<markup>for file in *.json
do
    sed -i '' -e 's/"datasource": "Prometheus"/"datasource": "Coherence-Prometheus"/g' \
              -e 's/"datasource": null/"datasource": "Coherence-Prometheus"/g' \
              -e 's/"datasource": "-- Grafana --"/"datasource": "Coherence-Prometheus"/g' $file;
done</markup>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.10OQRA" title="原文 : Once you have completed the script, proceed to upload the dashboards as described above.">スクリプトが完了したら、前述のようにダッシュボードをアップロードします。</span></p>

</li>
</ul>
</div>
</div>

<h2 id="_automatically_importing_dashboards"><span class="merged" id="all.2xMyFY" title="原文 : Automatically Importing Dashboards">ダッシュボードの自動インポート</span></h2>
<div class="section">
<p><span class="merged" id="all.2mX1vW.spl1" title="原文 : There are ways to automatically import dashboards into Grafana, the exact method would depend on how Grafana is to be installed and run.">ダッシュボードをGrafanaに自動的にインポートするメソッドはありますが、正確なメソッドはGrafanaのインストールおよび実行メソッドによって異なります。</span> <span class="merged" id="all.2mX1vW.spl2" title="原文 : The Coherence Operator test pipeline, for example, uses the Prometheus Operator to install Prometheus and Grafana and automatically imports the Coherence dashboards from a ConfigMap.">たとえば、Coherence Operatorテスト・パイプラインは、<a href="https://github.com/coreos/prometheus-operator" id="" target="_blank" >「Prometheusオペレータ」</a>を使用してPrometheusおよびGrafanaをインストールし、<code>ConfigMap</code>からCoherenceダッシュボードを自動的にインポートします。</span> <span class="merged" id="all.2mX1vW.spl3" title="原文 :  The examples below show how to create the dashboards as a ConfigMap and then install them into a Grafana instances started with the Prometheus Operator."><br>次の例では、ダッシュボードを<code>ConfigMap</code>として作成し、Prometheusオペレータで開始したGrafanaインスタンスにインストールする方法を示します。</span> </p>

<p><span class="merged" id="all.Skk4v" title="原文 : There are two ways to create the ConfigMap containing the dashboard files:">ダッシュボード・ファイルを含む<code>ConfigMap</code>を作成するには、次の2つの方法があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1MeIeK" title="原文 : Use the ConfigMap yaml available directly from GitHub">GitHubから直接利用可能な<code>ConfigMap</code> yamlを使用</span></p>

</li>
<li>
<p><span class="merged" id="all.3987bi" title="原文 : Obtain the dashboards as described above and create a ConfigMap from those files.">前述のようにダッシュボードを取得し、これらのファイルから<code>ConfigMap</code>を作成します。</span></p>

</li>
</ul>

<h3 id="_create_a_configmap_from_github_yaml"><span class="merged" id="all.3mrLJP" title="原文 : Create a ConfigMap from GitHub Yaml">GitHub YamlからConfigMapを作成</span></h3>
<div class="section">
<p><span class="merged" id="all.1kz6y1" title="原文 : To create a ConfigMap with the Grafana dashboards directly from the ConfigMap yaml for a specific Operator release the following commands can be used:">特定のオペレータ・リリースの<code>ConfigMap</code> yamlから直接Grafanaダッシュボードを使用して<code>ConfigMap</code>を作成するには、次のコマンドを使用します:</span></p>

<markup
lang="bash"

>kubectl -n monitoring create \
    -f https://oracle.github.io/coherence-operator/dashboards/latest/coherence-grafana-dashboards.yaml</markup>

<p><span class="merged" id="all.1VxTPj" title="原文 : In this example the dashboards will be installed into the monitoring namespace.">この例では、ダッシュボードが<code>monitoring</code>ネームスペースにインストールされます。</span></p>

<p><span class="merged" id="all.1PnoKI.spl1" title="原文 : The example above installs the dashboards configured to use the default Coherence metrics format.">上の例では、デフォルトのCoherenceメトリクス形式を使用するように構成されたダッシュボードをインストールします。</span> <span class="merged" id="all.1PnoKI.spl2" title="原文 : Coherence provides integrations with Microprofile metrics and Micrometer metrics, which produce metrics with slightly different name formats.">Coherenceでは、Microprofileメトリクスおよび<a href="https://micrometer.io" id="" target="_blank" >Micrometer</a>メトリクスとの統合が提供され、名前形式が若干異なるメトリクスが生成されます。</span> <span class="merged" id="all.1PnoKI.spl3" title="原文 : The operator provides dashboards compatible with both of these formats.">オペレータは、これらの両方の形式と互換性のあるダッシュボードを提供します。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1HBImw" title="原文 : Microprofile change the URL to coherence-grafana-microprofile-dashboards.yaml, for example:">MicroprofileはURLを<code>coherence-grafana-microprofile-dashboards.yaml</code>に変更します。次に例を示します:</span></p>

</li>
</ul>
<markup
lang="bash"

>kubectl -n monitoring create \
    -f https://oracle.github.io/coherence-operator/dashboards/latest/coherence-grafana-microprofile-dashboards.yaml</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2MxeOt" title="原文 : Micrometer change the URL to coherence-grafana-micrometer-dashboards.yaml, for example:">Micrometerは、URLを<code>coherence-grafana-micrometer-dashboards.yaml</code>に変更します。たとえば:</span></p>

</li>
</ul>
<markup
lang="bash"

>kubectl -n monitoring create \
    -f https://oracle.github.io/coherence-operator/dashboards/latest/coherence-grafana-micrometer-dashboards.yaml</markup>

</div>

<h3 id="_create_a_configmap_from_the_dashboard_package_file"><span class="merged" id="all.1Yj1KM" title="原文 : Create a ConfigMap from the Dashboard Package File">ダッシュボード・パッケージ・ファイルからのConfigMapの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.1nu0De" title="原文 : To create a ConfigMap with the Grafana dashboards in directly from .tar.gz dashboard package for a specific Operator release the following commands can be used:">特定のオペレータ・リリースの<code>.tar.gz</code>ダッシュボード・パッケージから直接Grafanaダッシュボードを使用して<code>ConfigMap</code>を作成するには、次のコマンドを使用します:</span></p>

<markup
lang="bash"

>curl https://oracle.github.io/coherence-operator/dashboards/latest/coherence-dashboards.tar.gz \
    -o coherence-dashboards.tar.gz
tar -zxvf coherence-dashboards.tar.gz
kubectl -n monitoring create configmap coherence-grafana-dashboards --from-file=dashboards/grafana</markup>

<p><span class="merged" id="all.3XFew5.spl1" title="原文 : The VERSION variable has been set to the version of the dashboards to be used (this corresponds to an Operator release version but dashboards can be used independently of the Operator)."><code>VERSION</code>変数は、使用するダッシュボードのバージョンに設定されています(これはオペレータ・リリースのバージョンに対応していますが、ダッシュボードはオペレータとは別に使用できます)。</span> <span class="merged" id="all.3XFew5.spl2" title="原文 :  In this example the dashboards ConfigMap named coherence-grafana-dashboards will be installed into the monitoring namespace."><br>この例では、<code>coherence-grafana-dashboards</code>という名前のダッシュボード<code>ConfigMap</code>が<code>monitoring</code>ネームスペースにインストールされます。</span> </p>

</div>

<h3 id="_label_the_configmap"><span class="merged" id="all.4DeFIL" title="原文 : Label the ConfigMap">ConfigMapにラベルを付けます</span></h3>
<div class="section">
<p><span class="merged" id="all.UbrKY" title="原文 : In this example Grafana will be configured to import dashboards from ConfigMaps with the label grafana_dashboard, so the ConfigMap created above needs to be labelled:">この例では、ラベルが<code>grafana_dashboard</code>の<code>ConfigMaps</code>からダッシュボードをインポートするようにGrafanaが構成されるため、前述の<code>ConfigMap</code>にラベルを付ける必要があります:</span></p>

<markup
lang="bash"

>kubectl -n monitoring label configmap coherence-grafana-dashboards grafana_dashboard=1</markup>

</div>

<h3 id="_install_the_prometheus_operator"><span class="merged" id="all.3wqp7h.1" title="原文 : Install the Prometheus Operator">Prometheusオペレータのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.4Rswdk.spl1" title="原文 : The Prometheus Operator will be installed using its Helm chart.">Prometheusオペレータは、そのHelmチャートを使用してインストールされます。</span> <span class="merged" id="all.4Rswdk.spl2" title="原文 : Create a Helm values file like the following:">次のようなHelm値ファイルを作成します:</span> </p>

<markup
lang="yaml"
title="prometheus-values.yaml"
>prometheus:
  prometheusSpec:
    serviceMonitorSelectorNilUsesHelmValues: false
alertmanager:
  enabled: false
nodeExporter:
  enabled: true
grafana:
  enabled: true                   <span class="conum" data-value="1" />
  sidecar:
    dashboards:                   <span class="conum" data-value="2" />
      enabled: true
      label: grafana_dashboard</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.EkDtA" title="原文 : Grafana will be enabled.">Grafanaが有効になります。</span></li>
<li data-value="2"><span class="merged" id="all.SdQ6G" title="原文 : Grafana will automatically import dashboards from ConfigMaps that have the label grafana_dashboard (which was given to the ConfigMap created above).">Grafanaは、ラベル<code>grafana_dashboard</code>を持つダッシュボード(前述の<code>ConfigMap</code>に指定された)を<code>ConfigMaps</code>から自動的にインポートします。</span></li>
</ul>
<p><span class="merged" id="all.2JGqCN" title="原文 : Prometheus can be installed into the monitoring namespace using the Helm command:">Prometheusは、Helmコマンドを使用して<code>monitoring</code>ネームスペースにインストールできます:</span></p>

<markup
lang="bash"

>helm install --namespace monitoring \
    --values prometheus-values.yaml \
    prometheus stable/prometheus-operator</markup>

<p><span class="merged" id="all.19mgK5.spl1" title="原文 : To actually start Prometheus a Prometheus CRD resource needs to be added to Kubernetes.">Prometheusを実際に起動するには、<code>Prometheus</code> CRDリソースをKubernetesに追加する必要があります。</span> <span class="merged" id="all.19mgK5.spl2" title="原文 : Create a Prometheus resource yaml file suitable for testing:">テストに適した<code>Prometheus</code>リソースyamlファイルを作成します:</span> </p>

<markup
lang="yaml"
title="prometheus.yaml"
>apiVersion: monitoring.coreos.com/v1
kind: Prometheus
metadata:
  name: prometheus
spec:
  serviceAccountName: prometheus
  serviceMonitorSelector:
    matchLabels:
      coherenceComponent: coherence-service-monitor  <span class="conum" data-value="1" />
  resources:
    requests:
      memory: 400Mi
  enableAdminAPI: true</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4Naso7" title="原文 : The serviceMonitorSelector tells Prometheus to use any ServiceMonitor that is created with the coherence-service-monitor label, which is a label that the Coherence Operator adds to any ServiceMonitor that it creates."><code>serviceMonitorSelector</code>は、<code>coherence-service-monitor</code>ラベルで作成された<code>ServiceMonitor</code>の使用をPrometheusに指示します。これは、Coherence Operatorが作成するすべての<code>ServiceMonitor</code>に追加されるラベルです。</span></li>
</ul>
<p><span class="merged" id="all.4c1rSs" title="原文 : Install the prometheus.yaml file into Kubernetes:"><code>prometheus.yaml</code>ファイルをKubernetesにインストールします:</span></p>

<markup
lang="bash"

>kubectl -n monitoring create -f etc/prometheus.yaml</markup>

<p><span class="merged" id="all.4JzaWo.spl1" title="原文 : In the monitoring namespace there should now be a number of Pods and Services, among them a Prometheus instance, and a Grafana instance."><code>monitoring</code>ネームスペースには、<code>Prometheus</code>インスタンス、およびGrafanaインスタンスなど、多数の<code>Pods</code>および<code>Services</code>が必要です。</span> <span class="merged" id="all.4JzaWo.spl2" title="原文 : It should be possible to reach the Grafana UI on the ports exposed by the Pod and see the imported Coherence dashboards."><code>Pod</code>によって公開されるポートでGrafana UIにアクセスし、インポートされたCoherenceダッシュボードを表示できる必要があります。</span> </p>

<markup
lang="bash"

>GRAFANA_POD=$(kubectl -n monitoring get pod -l app.kubernetes.io/name=grafana -o name)
kubectl -n monitoring port-forward ${GRAFANA_POD} 3000:3000</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1UhFXD" title="原文 : The default username for Grafana installed by the Prometheus Operator is admin the default password is prom-operator">PrometheusオペレータによってインストールされるGrafanaのデフォルトのユーザー名は<code>admin</code>で、デフォルトのパスワードは<code>prom-operator</code>です</span></p>
</div>
<p><span class="merged" id="all.20lNPo.spl1" title="原文 : If a Coherence cluster has been started with the Operator as described in the Publish Metrics page, its metrics will eventually appear in Prometheus and Grafana."><router-link to="/metrics/020_metrics">「メトリクスの公開」</router-link>ページで説明されているように、Coherenceクラスタがオペレータで開始されている場合、そのメトリクスは最終的にPrometheusおよびGrafanaに表示されます。</span> <span class="merged" id="all.20lNPo.spl2" title="原文 : It can sometimes take a minute or so for Prometheus to start scraping metrics and for them to appear in Grafana.">Prometheusがメトリクスをスクレイピングし、Grafanaに表示されるまで、数分かかる場合があります。</span> </p>

</div>
</div>
</doc-view>
