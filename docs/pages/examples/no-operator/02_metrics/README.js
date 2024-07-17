<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_enabling_coherence_metrics"><span class="merged" id="all.2rkDXW" title="原文 : Enabling Coherence Metrics">Coherenceメトリクスの有効化</span></h2>
<div class="section">
<p><span class="merged" id="all.1Qo2lk.spl1" title="原文 : This example shows how to deploy a simple Coherence cluster in Kubernetes manually, and enabling the Pods in that cluster to expose a http endpoint to allow access to Coherence metrics.">この例は、Kubernetesに単純なCoherenceクラスタを手動でデプロイし、そのクラスタ内のポッドがhttpエンドポイントを公開してCoherenceメトリクスへのアクセスを許可する方法を示しています。</span> <span class="merged" id="all.1Qo2lk.spl2" title="原文 : This example expands on the StatefulSet used in the first simple deployment example.">この例では、最初の単純なデプロイメント例で使用されている<code>StatefulSet</code>を展開します。</span> </p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.16"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.2ZhQJ8" title="原文 :  The complete source code for this example is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />この例の完全なソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/no-operator/02_metrics" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>
<p><span class="merged" id="all.3Hthfg.1"  title="原文:: Prerequisites"><strong>前提条件</strong></span></p>

<p><span class="merged" id="all.3yNzBq.1" title="原文 : This example assumes that you have already built the example server image.">この例では、サンプル・サーバー・イメージがすでにビルドされていることを前提としています。</span></p>

</div>

<h2 id="_create_the_kubernetes_resources"><span class="merged" id="all.3N5M6P.1" title="原文 : Create the Kubernetes Resources">Kubernetesリソースの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.MeDZj.spl1" title="原文 : In the simple server example we created some Services and a StatefulSet that ran a Coherence cluster in Kubernetes.">単純なサーバー例では、KubernetesでCoherenceクラスタを実行する<code>Services</code>および<code>StatefulSet</code>を作成しました。</span> <span class="merged" id="all.MeDZj.spl2" title="原文 : In this example we will just cover the additional configurations we need to make to expose Coherence metrics.">この例では、Coherenceメトリクスを公開するために必要な追加の構成について説明します。</span> <span class="merged" id="all.MeDZj.spl3" title="原文 : We will not bother repeating the configuration for the Services for the StatefulSet and well known addressing or the Service for exposing Extend."><code>StatefulSet</code>の<code>Services</code>の構成と、よく知られているアドレス指定またはExtendを公開するサービスの構成は繰り返しません。</span> <span class="merged" id="all.MeDZj.spl4" title="原文 : We will assume they are already part of our yaml file.">すでにyamlファイルの一部であるとします。</span> </p>

<p><span class="merged" id="all.4JONyh" title="原文 : The coherence-metrics.yaml file that is part of the source for this example contains all those resources.">この例のソースの一部である<code>coherence-metrics.yaml</code>ファイルには、これらのすべてのリソースが含まれます。</span></p>


<h3 id="_the_statefulset"><span class="merged" id="all.2HBpXt.1" title="原文 : The StatefulSet">StatefulSet</span></h3>
<div class="section">
<p><span class="merged" id="all.2cxmas.spl1" title="原文 : To expose Coherence metrics we just need to change the StatefulSet to set either the system properties or environment variables to enable metrics.">Coherenceメトリクスを公開するには、<code>StatefulSet</code>を変更して、メトリクスを有効にするためにシステム・プロパティまたは環境変数を設定する必要があります。</span> <span class="merged" id="all.2cxmas.spl2" title="原文 : We will also add a container port to the expose metrics endpoint.">また、メトリクスの公開エンドポイントにコンテナ・ポートを追加します。</span> </p>

<markup
lang="yaml"
title="coherence.yaml"
>apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: storage
spec:
  selector:
    matchLabels:
      coherence.oracle.com/cluster: test-cluster
      coherence.oracle.com/deployment: storage
  serviceName: storage-sts
  replicas: 3
  template:
    metadata:
      labels:
        coherence.oracle.com/cluster: test-cluster
        coherence.oracle.com/deployment: storage
    spec:
      containers:
        - name: coherence
          image: simple-coherence:1.0.0
          command:
            - java
          args:
            - -cp
            - "@/app/jib-classpath-file"
            - -Xms1800m
            - -Xmx1800m
            - "@/app/jib-main-class-file"
          env:
            - name: COHERENCE_CLUSTER
              value: storage
            - name: COHERENCE_WKA
              value: storage-wka
            - name: COHERENCE_CACHECONFIG
              value: "test-cache-config.xml"
            - name: COHERENCE_METRICS_HTTP_ENABLED
              value: "true"
          ports:
            - name: extend
              containerPort: 20000
            - name: metrics
              containerPort: 9612</markup>

<p><span class="merged" id="all.kjM6s.spl1" title="原文 : The yaml above is identical to that used in the simple server example apart from: * We added the COHERENCE_METRICS_HTTP_ENABLED environment variable with a value of &quot;true&quot;.">前述のyamlは、単純なサーバー例で使用されているものと異なります: * <code>"true"</code>の値を持つ<code>COHERENCE_METRICS_HTTP_ENABLED</code>環境変数を追加しました。</span> <span class="merged" id="all.kjM6s.spl2" title="原文 : Instead of this we could have added -Dcoherence.metrics.http.enabled=true to the args: list to set the coherence.metrics.http.enabled system property to true.">かわりに、<code>-Dcoherence.metrics.http.enabled=true</code>を<code>args:</code>リストに追加して、<code>coherence.metrics.http.enabled</code>システム・プロパティをtrueに設定できます。</span> <span class="merged" id="all.kjM6s.spl3" title="原文 : Recent versions of Coherence work with both system properties or environment variables, and we just chose to use environment variables in this example. * We added a port named metrics with a port value of 9612, which is the default port that the Coherence metrics endpoint binds to.">Coherenceの最新バージョンは、システム・プロパティまたは環境変数の両方で動作し、この例では環境変数を使用することを選択しました。* <code>metrics</code>という名前のポートを<code>9612</code> (Coherenceメトリクス・エンドポイントがバインドするデフォルトのポート)で追加しました。</span> </p>

</div>
</div>

<h2 id="_deploy_the_cluster"><span class="merged" id="all.2yd3h4" title="原文 : Deploy the Cluster">クラスタのデプロイ</span></h2>
<div class="section">
<p><span class="merged" id="all.3rJyaU.spl1" title="原文 : We can combine all the snippets of yaml above into a single file and deploy it to Kubernetes.">前述のyamlのすべてのスニペットを1つのファイルに結合し、Kubernetesにデプロイできます。</span> <span class="merged" id="all.3rJyaU.spl2" title="原文 : The source code for this example contains a file named coherence-metrics.yaml containing all the configuration above.">この例のソース・コードには、前述のすべての構成を含む<code>coherence-metrics.yaml</code>という名前のファイルが含まれています。</span> <span class="merged" id="all.3rJyaU.spl3" title="原文 : We can deploy it with the following command:">次のコマンドを使用してデプロイできます:</span> </p>

<markup
lang="bash"

>kubectl apply -f coherence-metrics.yaml</markup>

<p><span class="merged" id="all.3IrzHw" title="原文 : We can see all the resources created in Kubernetes are the same as the simple server example:">Kubernetesで作成されたすべてのリソースが、単純なサーバーの例と同じであることを確認できます:</span></p>

<markup
lang="bash"

>kubectl get all</markup>

<p><span class="merged" id="all.3pkFbl.1" title="原文 : Which will display something like the following:">次のような内容が表示されます:</span></p>

<markup


>pod/storage-0   1/1     Running   0          10s
pod/storage-1   1/1     Running   0          7s
pod/storage-2   1/1     Running   0          6s

NAME                     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
service/kubernetes       ClusterIP   10.96.0.1        &lt;none&gt;        443/TCP     158d
service/storage-extend   ClusterIP   10.102.198.218   &lt;none&gt;        20000/TCP   10s
service/storage-sts      ClusterIP   None             &lt;none&gt;        7/TCP       10s
service/storage-wka      ClusterIP   None             &lt;none&gt;        7/TCP       10s

NAME                       READY   AGE
statefulset.apps/storage   3/3     10s</markup>

</div>

<h2 id="_retrieve_metrics"><span class="merged" id="all.CwdJ9" title="原文 : Retrieve Metrics">メトリクスの取得</span></h2>
<div class="section">
<p><span class="merged" id="all.18kQff.spl1" title="原文 : To test that we can access metrics we will port-forward to one of the Pods and use curl to get the metrics.">メトリクスにアクセスできることをテストするには、<code>Pods</code>のいずれかにポート・フォワードし、<code>curl</code>を使用してメトリクスを取得します。</span> <span class="merged" id="all.18kQff.spl2" title="原文 : We can choose any of the three Pods to test, or repeat the test for each Pod.">テストする3つの<code>Pods</code>のいずれかを選択するか、<code>Pod</code>ごとにテストを繰り返します。</span> <span class="merged" id="all.18kQff.spl3" title="原文 : In this example, we’ll just port-forward local port 9612 to port 9612 in pod/storage-0.">この例では、ポート転送ローカル・ポート9612を<code>pod/storage-0</code>のポート9612にのみ行います。</span> </p>

<markup
lang="bash"

>kubectl port-forward pod/storage-0 9612:9612</markup>

<p><span class="merged" id="all.3TCT1F.spl1" title="原文 : Now in another terminal we can run the curl command to get metrics.">別の端末で、<code>curl</code>コマンドを実行してメトリクスを取得できます。</span> <span class="merged" id="all.3TCT1F.spl2" title="原文 : As we are using port forwarding the host will be 127.0.0.1 and the port will be 9612.">ポート転送を使用しているため、ホストは<code>127.0.0.1</code>になり、ポートは<code>9612</code>になります。</span> </p>

<markup
lang="bash"

>curl -X GET http://127.0.0.1:9612/metrics</markup>

<p><span class="merged" id="all.Zjgwk.spl1" title="原文 : This should then bring back all the Coherence metrics for pod/storage-0.">これにより、<code>pod/storage-0</code>のすべてのCoherenceメトリクスが戻されます。</span> <span class="merged" id="all.Zjgwk.spl2" title="原文 : The default format of the response is Prometheus text format.">レスポンスのデフォルトの形式は、Prometheusテキスト形式です。</span> </p>

<p><span class="merged" id="all.eONzf.spl1" title="原文 : We can also retrieve individual metrics by name.">名前で個々のメトリクスを取得することもできます。</span> <span class="merged" id="all.eONzf.spl2" title="原文 : For example, we can get the Coherence.Cluster.Size metric:">たとえば、<code>Coherence.Cluster.Size</code>メトリックを取得できます:</span> </p>

<markup
lang="bash"

>curl -X GET http://127.0.0.1:9612/metrics/Coherence.Cluster.Size</markup>

<p><span class="merged" id="all.12I7cm" title="原文 : which will display something like this:">次のように表示されます:</span></p>

<markup
lang="bash"

>vendor:coherence_cluster_size{cluster="storage", version="21.12.1"} 3</markup>

<p><span class="merged" id="all.QChSF" title="原文 : This displays the metric name in Prometheus format vendor:coherence_cluster_size, the metric labels cluster=&quot;storage&quot;, version=&quot;21.12.1&quot; and the metric value, in this case 3 as there are three cluster members because we specified a replicas value of 3 in the StatefulSet.">これにより、メトリック名がPrometheus形式<code>vendor:coherence_cluster_size</code>、メトリック・ラベル<code>cluster="storage", version="21.12.1"</code>およびメトリック値(この例では、<code>StatefulSet</code>でレプリカ値3を指定したため、3つのクラスタ・メンバーがあるため<code>3</code>)で表示されます。</span></p>

<p><span class="merged" id="all.1xtOLt" title="原文 : We can also receive the same response as json by using either the accepted media type header &quot;Accept: application/json&quot;:">受け入れられるメディア・タイプ・ヘッダー<code>"Accept: application/json"</code>を使用して、<code>json</code>と同じレスポンスを受信することもできます :</span></p>

<markup
lang="bash"

>curl -X GET -H "Accept: application/json" http://127.0.0.1:9612/metrics/Coherence.Cluster.Size</markup>

<p><span class="merged" id="all.3OaEKn" title="原文 : Or by using the .json suffix on the URL">または、URLの<code>.json</code>サフィクスを使用</span></p>

<markup
lang="bash"

>curl -X GET http://127.0.0.1:9612/metrics/Coherence.Cluster.Size.json</markup>

<p><span class="merged" id="all.2c0wuB" title="原文 : Both requests will display something like this:">どちらのリクエストも、次のように表示されます:</span></p>

<markup
lang="bash"

>[{"name":"Coherence.Cluster.Size","tags":{"cluster":"storage","version":"21.12.1"},"scope":"VENDOR","value":3}]</markup>

<p><span class="merged" id="all.ksXec" title="原文 : We have now verified that the Pods in the cluster are producing metrics.">クラスタ内の<code>Pods</code>がメトリクスを生成していることを確認しました。</span></p>

</div>

<h2 id="_using_prometheus"><span class="merged" id="all.3TplMG" title="原文 : Using Prometheus">Prometheusの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.1lDPH5.spl1" title="原文 : One of the most common ways to analyse metrics in Kubernetes is by using Prometheus.">Kubernetesでメトリクスを分析する最も一般的な方法の1つは、Prometheusを使用することです。</span> <span class="merged" id="all.1lDPH5.spl2" title="原文 : The recommended way to do this is to deploy Prometheus inside your Kubernetes cluster so that it can scrape metrics directly from Pods.">推奨される方法は、<code>Pods</code>から直接メトリクスをスクレイプできるように、Kubernetesクラスタ内にPrometheusをデプロイすることです。</span> <span class="merged" id="all.1lDPH5.spl3" title="原文 : Whilst Prometheus can be installed outside the Kubernetes cluster, this introduces a much more complicated set-up.">PrometheusはKubernetesクラスタの外部にインストールできますが、より複雑なセット・アップが導入されます。</span> <span class="merged" id="all.1lDPH5.spl4" title="原文 : If using Prometheus externally to the Kubernetes cluster, the approach recommended by Prometheus is to use federation, which we show in an example below.">Prometheusを外部でKubernetesクラスタに対して使用する場合、Prometheusで推奨されるアプローチはフェデレーションを使用することです(次の例を参照)。</span> </p>


<h3 id="_install_prometheus"><span class="merged" id="all.3NplFl.1" title="原文 : Install Prometheus">Prometheusのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2pwIuP.spl1" title="原文 : The simplest way to install Prometheus is to follow the instructions in the Prometheus Operator Quick Start page.">Prometheusをインストールする最も簡単な方法は、Prometheusオペレータの<a href="https://prometheus-operator.dev/docs/getting-started/quick-start/" id="" target="_blank" >「クイック・スタート」</a>ページの指示に従うことです。</span> <span class="merged" id="all.2pwIuP.spl2" title="原文 : Prometheus can then be accessed as documented in the Access Prometheus section of the Quick Start page.">Prometheusには、<a href="https://prometheus-operator.dev/docs/getting-started/quick-start/#access-prometheus" id="" target="_blank" >「クイック・スタートのPrometheusセクションにアクセス」</a>ページの説明に従ってアクセスできます。</span> </p>

<p><span class="merged" id="all.1iyvjL" title="原文 : As described in the Prometheus docs we can create a port-forward process to the Prometheus Service.">Prometheusドキュメントで説明したように、Prometheus <code>Service</code>へのポート転送プロセスを作成できます。</span></p>

<markup
lang="bash"

>kubectl --namespace monitoring port-forward svc/prometheus-k8s 9090</markup>

<p><span class="merged" id="all.1NgURv" title="原文 : Then point our browser to http://localhost:9090 to access the Prometheus UI.">次に、ブラウザを<a href="http://localhost:9090" id="" target="_blank" >http://localhost:9090</a>に指定して、Prometheus UIにアクセスします。</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="Prometheus UI" src="./images/img/prom.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.4MkOCO" title="原文 : At this stage there will be no Coherence metrics, but we’ll change that in the next section.">この段階ではCoherenceメトリクスはありませんが、次のセクションで変更を行います。</span></p>

</div>

<h3 id="_create_a_servicemonitor"><span class="merged" id="all.10DFaD" title="原文 : Create a ServiceMonitor">ServiceMonitorの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.1IlogT.spl1" title="原文 : The out of the box Prometheus install uses ServiceMonitor resources to determine which Pods to scrape metrics from.">標準のPrometheusインストールでは、<code>ServiceMonitor</code>リソースを使用して、メトリクスをスクレイプするポッドを決定します。</span> <span class="merged" id="all.1IlogT.spl2" title="原文 : We can therefore configure Prometheus to scrape our Coherence cluster metrics by adding a Service and ServiceMonitor.">したがって、<code>Service</code>および<code>ServiceMonitor</code>を追加して、Coherenceクラスタ・メトリクスをスクレイプするようにPrometheusを構成できます。</span> </p>

<p><span class="merged" id="all.1T3s7G.spl1" title="原文 : A Prometheus ServiceMonitor, as the name suggests, monitors a Service so we need to create a Service to expose the metrics port.">名前が示すPrometheus <code>ServiceMonitor</code>は、<code>Service</code>を監視するため、メトリクス・ポートを公開するために<code>Service</code>を作成する必要があります。</span> <span class="merged" id="all.1T3s7G.spl2" title="原文 : We are not going to access this Service ourselves, so it does not need to be a load balancer, in fact it can just be a headless service.">この<code>Service</code>には自分からアクセスしないため、ロード・バランサである必要はありません。実際、ヘッドレス・サービスである可能性があります。</span> <span class="merged" id="all.1T3s7G.spl3" title="原文 : Prometheus uses the Service to locate the Pods that it should scrape.">Prometheusは、<code>Service</code>を使用して、スクレイプするポッドを特定します。</span> </p>

<p><span class="merged" id="all.4Fm56u" title="原文 : The yaml below is a simple headless service that has a selector that matches labels in our Coherence cluster Pods.">次のyamlは、Coherenceクラスタ<code>Pods</code>のラベルに一致するセレクタを持つ単純なヘッドレス・サービスです。</span></p>

<markup
lang="yaml"
title="prometheus-metrics.yaml"
>apiVersion: v1
kind: Service
metadata:
  name: storage-metrics
  labels:
    coherence.oracle.com/cluster: test-cluster
    coherence.oracle.com/deployment: storage
    coherence.oracle.com/component: metrics-service
spec:
  type: ClusterIP
  ports:
  - name: metrics
    port: 9612
    targetPort: metrics
  selector:
    coherence.oracle.com/cluster: test-cluster
    coherence.oracle.com/deployment: storage</markup>

<p><span class="merged" id="all.4gKZ5n" title="原文 : We can now create a Prometheus ServiceMonitor that tells Prometheus about the Service to use.">使用する<code>Service</code>についてPrometheusに指示するPrometheus <code>ServiceMonitor</code>を作成できるようになりました。</span></p>

<markup
lang="yaml"
title="prometheus-metrics.yaml"
>apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: storage-metrics
  labels:
    coherence.oracle.com/cluster: test-cluster
    coherence.oracle.com/deployment: storage
    coherence.oracle.com/component: service-monitor
spec:
  endpoints:
  - port: metrics
  selector:
    matchLabels:
        coherence.oracle.com/cluster: test-cluster
        coherence.oracle.com/deployment: storage
        coherence.oracle.com/component: metrics-service</markup>

<p><span class="merged" id="all.3Eifql" title="原文 : The ServiceMonitor above contains a single endpoint that scrapes the port named metrics in any Service with labels matching those in the matchLabels array, which in this case are the labels we applied to the storage-metrics service above.">前述の<code>ServiceMonitor</code>には、任意の<code>Service</code>で<code>metrics</code>という名前のポートを廃棄する単一のエンドポイントが含まれており、ラベルは<code>matchLabels</code>配列のポートと一致します。この場合、前述の<code>storage-metrics</code>サービスに適用したラベルになります。</span></p>

<p><span class="merged" id="all.2XU06I" title="原文 : The full specification of what can be in a ServiceMonitor can be found in the Prometheus ServiceMonitorSpec documentation."><code>ServiceMonitor</code>で使用できる内容の完全な仕様は、Prometheus <a href="https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#servicemonitorspec" id="" target="_blank" >ServiceMonitorSpec</a>ドキュメントに記載されています。</span></p>

<p><span class="merged" id="all.2THAOZ.spl1" title="原文 : We can combine both of the above pieces of yaml into a single file and deploy them.">前述のyamlの両方を1つのファイルに結合し、デプロイできます。</span> <span class="merged" id="all.2THAOZ.spl2" title="原文 : The example source code contains a file named prometheus-metrics.yaml that contains the yaml above.">ソース・コードの例には、前述のyamlを含む<code>prometheus-metrics.yaml</code>という名前のファイルが含まれています。</span> <span class="merged" id="all.2THAOZ.spl3" title="原文 : Create the Service and ServiceMonitor in the same Kubernetes namespace as the Coherence cluster.">Coherenceクラスタと同じKubernetesネームスペースに<code>Service</code>および<code>ServiceMonitor</code>を作成します。</span> </p>

<markup
lang="bash"

>kubectl apply -f prometheus-metrics.yaml</markup>

<p><span class="merged" id="all.FhWyD.spl1" title="原文 : It can sometimes take a minute or two for Prometheus to discover the ServiceMonitor and start to scrape metrics from the Pods.">Prometheusで<code>ServiceMonitor</code>を検出し、ポッドからメトリクスをスクレイプするために1分または2分かかることがあります。</span> <span class="merged" id="all.FhWyD.spl2" title="原文 : Once this happens it should be possible to see Coherence metrics for the cluster in Prometheus.">これが発生したら、PrometheusでクラスタのCoherenceメトリクスを確認できます。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="Prometheus UI" src="./images/img/prom-coh.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.qYN4J" title="原文 : As shown above, the vendor:coherence_cluster_size metric has been scraped from all three Pods and as expected all Pods have a cluster size value of 3.">前述のように、<code>vendor:coherence_cluster_size</code>メトリックは3つの<code>Pods</code>すべてからスクレイプされ、すべての<code>Pods</code>のクラスタ・サイズ値は<code>3</code>です。</span></p>

</div>

<h3 id="_federated_prometheus_metrics"><span class="merged" id="all.uXfl5" title="原文 : Federated Prometheus Metrics">フェデレーテッドPrometheusメトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.4G6fnz.spl1" title="原文 : Prometheus Federation is the recommended way to scale Prometheus and to make metrics from inside Kubernetes available in a Prometheus instance outside of Kubernetes.">Prometheusフェデレーションは、Prometheusをスケーリングし、Kubernetesの外部のPrometheusインスタンスでKubernetes内からメトリクスを使用できるようにすることをお薦めします。</span> <span class="merged" id="all.4G6fnz.spl2" title="原文 : Instead of the external Prometheus instance needing to be configured to locate and connect to Pods inside Kubernetes, it only needs an ingress into Prometheus running inside Kubernetes and can scrape all the metrics from there.">Kubernetes内の<code>Pods</code>を検索して接続するように構成する必要がある外部Prometheusインスタンスではなく、Kubernetes内で実行されているPrometheusへのイングレスのみが必要で、そこからすべてのメトリクスをスクレイプできます。</span> <span class="merged" id="all.4G6fnz.spl3" title="原文 : More details can be found in the Prometheus Federation documentation.">詳細は、<a href="https://prometheus.io/docs/prometheus/latest/federation/" id="" target="_blank" >「Prometheusフェデレーション」</a>ドキュメントを参照してください。</span> </p>

<p><span class="merged" id="all.3rtbdX" title="原文 : We can install a local Prometheus instance as described in the Prometheus Getting Started guide."><a href="https://prometheus.io/docs/prometheus/latest/getting_started/" id="" target="_blank" >「Prometheusはじめに」</a>ガイドの説明に従って、ローカルPrometheusインスタンスをインストールできます。</span></p>

<p><span class="merged" id="all.1YDT7.spl1" title="原文 : In the Prometheus installation directory we can edit the prometheus.yml file to configure Prometheus to scrape the federation endpoint of Prometheus inside Kubernetes.">Prometheusインストール・ディレクトリでは、<code>prometheus.yml</code>ファイルを編集して、Kubernetes内のPrometheusのフェデレーション・エンドポイントをスクレイプするようにPrometheusを構成できます。</span> <span class="merged" id="all.1YDT7.spl2" title="原文 : We need to add the federation configuration to the scrape_configs: section as shown below:">次に示すように、フェデレーション構成を<code>scrape_configs:</code>セクションに<strong>「追加」</strong>する必要があります:</span> </p>

<markup
lang="yaml"
title="prometheus.yml"
>scrape_configs:
  - job_name: 'federate'
    scrape_interval: 15s
    honor_labels: true
    metrics_path: '/federate'
    params:
      'match[]':
        - '{__name__=~"vendor:coherence_.*"}'
    static_configs:
      - targets:
        - '127.0.0.1:9091'</markup>

<p><span class="merged" id="all.1rhQZj.spl1" title="原文 : You will notice that we have used 127.0.0.1:9091 as the target address."><code>127.0.0.1:9091</code>をターゲット・アドレスとして使用していることがわかります。</span> <span class="merged" id="all.1rhQZj.spl2" title="原文 : This is because when we run our local Prometheus instance it will bind to port 9090 so when we run the port-forward process to allow connections into Prometheus in the cluster we cannot use port 9090, so we will forward local port 9091 to the Prometheus service port 9090 in Kubernetes.">これは、ローカルPrometheusインスタンスを実行するとポート9090にバインドされるため、ポート・フォワード・プロセスを実行してクラスタ内のPrometheusへの接続を許可するときにポート<code>9090</code>を使用できないため、ローカル・ポート<code>9091</code>をKubernetesのPrometheusサービス・ポート<code>9090</code>に転送します。</span> </p>

<p><span class="merged" id="all.2vs5XM" title="原文 : In the params: section we have specified that the &apos;match[]&apos;: field only federates metrics that have a name that starts with vendor:coherence_ so in this example we only federate Coherence metrics."><code>params:</code>セクションで、<code>'match[]':</code>フィールドに<code>vendor:coherence_</code>で始まる名前のメトリクスのみがフェデレートされるように指定しました。この例では、Coherenceメトリクスのみをフェデレートします。</span></p>

<p><span class="merged" id="all.3AJNBQ" title="原文 : Run the port-forward process so that when we start our local Prometheus instance it can connect to Prometheus in Kubernetes.">ポート・フォワード・プロセスを実行して、ローカルPrometheusインスタンスを起動するとKubernetesのPrometheusに接続できるようにします。</span></p>

<markup
lang="bash"

>kubectl --namespace monitoring port-forward svc/prometheus-k8s 9091:9090</markup>

<p><span class="merged" id="all.36BKMa.spl1" title="原文 : We’re now forwarding local port 9091 to Prometheus service port 9090 so we can run the local Prometheus instance.">ローカル・ポート9091をPrometheusサービス・ポート9090に転送して、ローカルPrometheusインスタンスを実行できます。</span> <span class="merged" id="all.36BKMa.spl2" title="原文 : As described in the Prometheus documentation, from the Prometheus installation directory run the command:">Prometheusドキュメントの説明に従って、Prometheusインストール・ディレクトリから次のコマンドを実行します:</span> </p>

<markup
lang="bash"

>./prometheus --config.file=prometheus.yml</markup>

<p><span class="merged" id="all.1ILfIQ.spl1" title="原文 : Once Prometheus starts we can point our browser to http://localhost:9090 to access the prometheus UI.">Prometheusを起動すると、ブラウザを<a href="http://localhost:9090" id="" target="_blank" >http://localhost:9090</a>にポイントしてprometheus UIにアクセスできます。</span> <span class="merged" id="all.1ILfIQ.spl2" title="原文 : After a short pause, Prometheus should start to scrap emetrics from inside Kubernetes and we should see them in the UI">短い一時停止の後、PrometheusはKubernetes内からメトリクスの廃棄を開始し、UIでそれらを表示</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="Prometheus UI" src="./images/img/prom-federate.png" /> </v-card-text> </v-card>

</div>
</div>

<h2 id="_grafana"><span class="merged" id="all.1v7sdF"  title="原文:: Grafana">Grafana</span></h2>
<div class="section">
<p><span class="merged" id="all.3VCI5k.spl1" title="原文 : We could now install Grafana and configure it to connect to Prometheus, either the local instance or the instance inside Kubernetes.">これで、Grafanaをインストールし、ローカル・インスタンスまたはKubernetes内のインスタンスPrometheusに接続するように構成できます。</span> <span class="merged" id="all.3VCI5k.spl2" title="原文 : The Coherence Operator provides a number of dashboards that can imported into Grafana.">Coherence Operatorには、Grafanaにインポートできる多数のダッシュボードが用意されています。</span> <span class="merged" id="all.3VCI5k.spl3" title="原文 : See the Operator Import Grafana Dashboards documentation.">オペレータの<a href="https://oracle.github.io/coherence-operator/docs/latest/#/docs/metrics/030_importing" id="" target="_blank" >「Grafanaダッシュボードのインポート」</a>ドキュメントを参照してください。</span> </p>

</div>
</doc-view>
