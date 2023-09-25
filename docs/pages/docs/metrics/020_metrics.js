<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_publish_metrics"><span class="merged" id="all.nxequ" title="原文 : Publish Metrics">メトリクスの公開</span></h2>
<div class="section">
<p><span class="merged" id="all.2Af6Ae.spl1" title="原文 : Since version 12.2.1.4 Coherence has had the ability to expose a http endpoint that can be used to scrape metrics.">バージョン12.2.1.4のCoherenceには、メトリクスのスクレイプに使用できるhttpエンドポイントを公開する機能がありました。</span> <span class="merged" id="all.2Af6Ae.spl2" title="原文 : This would typically be used to expose metrics to something like Prometheus.">これは通常、メトリクスをPrometheusのように公開するために使用されます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2eeySd.spl1" title="原文 : The default metrics endpoint is disabled by default in Coherence clusters but can be enabled and configured by setting the relevant fields in the Coherence CRD.">デフォルトのメトリクス・エンドポイントは、Coherenceクラスタではデフォルトで<strong>「無効」</strong>ですが、<code>Coherence</code> CRDの関連フィールドを設定して有効化および構成できます。</span> <span class="merged" id="all.2eeySd.spl2" title="原文 : If your Coherence version is before CE 21.12.1 this example assumes that your application has included the coherence-metrics module as a dependency.">CoherenceバージョンがCE 21.12.1より前の場合、この例では、アプリケーションが<code>coherence-metrics</code>モジュールを依存関係として含めたことを想定しています。</span> <span class="merged" id="all.2eeySd.spl3" title="原文 : See the Coherence product documentation for more details on enabling metrics in your application.">アプリケーションでのメトリクスの有効化の詳細は、Coherence製品のドキュメントを参照してください。</span> </p>
</div>
<p><span class="merged" id="all.2odRy5" title="原文 : The example below shows how to enable and access Coherence metrics.">次の例は、Coherenceメトリクスを有効にしてアクセスする方法を示しています。</span></p>

<p><span class="merged" id="all.323cf1" title="原文 : Once the metrics port has been exposed, for example via a load balancer or port-forward command, the metrics endpoint is available at http://host:port/metrics.">メトリクス・ポートがロード・バランサやport-forwardコマンドを介して公開されると、メトリクス・エンドポイントは<code><a href="http://host:port/metrics" id="" target="_blank" >http://host:port/metrics</a></code>にあります。</span></p>

<p><span class="merged" id="all.2ZcuVP" title="原文 : See the Using Coherence Metrics documentation for full details on the available metrics.">使用可能なメトリクスの詳細は、<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/manage/using-coherence-metrics.html" id="" target="_blank" >「Coherenceメトリクスの使用」</a>ドキュメントを参照してください。</span></p>


<h3 id="_deploy_coherence_with_metrics_enabled"><span class="merged" id="all.22Nga4" title="原文 : Deploy Coherence with Metrics Enabled">メトリクスの有効化によるCoherenceのデプロイ</span></h3>
<div class="section">
<p><span class="merged" id="all.14t49U" title="原文 : To deploy a Coherence resource with metrics enabled and exposed on a port, the simplest yaml would look like this:">メトリクスが有効でポートで公開されている<code>Coherence</code>リソースをデプロイするには、最も単純なyamlは次のようになります:</span></p>

<markup
lang="yaml"
title="metrics-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: metrics-cluster
spec:
  coherence:
    metrics:
      enabled: true     <span class="conum" data-value="1" />
  ports:
    - name: metrics  <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.dK9X8" title="原文 : Setting the coherence.metrics.enabled field to true will enable metrics"><code>coherence.metrics.enabled</code>フィールドを<code>true</code>に設定すると、メトリクスが有効になります</span></li>
<li data-value="2"><span class="merged" id="all.2bZx28.spl1" title="原文 : To expose metrics via a Service it is added to the ports list."><code>Service</code>を介してメトリクスを公開するには、<code>ports</code>リストに追加されます。</span> <span class="merged" id="all.2bZx28.spl2" title="原文 : The metrics port is a special case where the port number is optional so in this case metrics will bind to the default port 9612. (see Exposing Ports for details)"><code>metrics</code>ポートは、<code>port</code>番号がオプションであるため、この場合はメトリクスがデフォルトのポート<code>9612</code>にバインドされます(詳細は、<router-link @click.native="this.scrollFix('#ports/020_container_ports.adoc')" to="#ports/020_container_ports.adoc">「ポートの公開」</router-link>を参照)</span> </li>
</ul>

<h4 id="_expose_metrics_on_a_different_port"><span class="merged" id="all.4E5ZbA" title="原文 : Expose Metrics on a Different Port">別のポートでのメトリクスの公開</span></h4>
<div class="section">
<p><span class="merged" id="all.4V7F0I" title="原文 : To expose metrics on a different port the alternative port value can be set in the coherence.metrics section, for example:">別のポートでメトリクスを公開するには、<code>coherence.metrics</code>セクションで代替ポート値を設定できます。次に例を示します:</span></p>

<markup
lang="yaml"
title="metrics-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: metrics-cluster
spec:
  coherence:
    metrics:
      enabled: true
      port: 8080      <span class="conum" data-value="1" />
  ports:
    - name: metrics</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1ti2Gr" title="原文 : metrics will now be exposed on port 8080">メトリクスがポート<code>8080</code>で公開されるようになります</span></li>
</ul>
</div>
</div>

<h3 id="_port_forward_the_metrics_port"><span class="merged" id="all.1OOuW9" title="原文 : Port-forward the Metrics Port">メトリクス・ポートのポート転送</span></h3>
<div class="section">
<p><span class="merged" id="all.siVg7" title="原文 : After installing the basic metrics-cluster.yaml from the first example above there would be a three member Coherence cluster installed into Kubernetes.">上の最初の例から基本的な<code>metrics-cluster.yaml</code>をインストールすると、3つのメンバーCoherenceクラスタがKubernetesにインストールされます。</span></p>

<p><span class="merged" id="all.pMJUa.1" title="原文 : For example, the cluster can be installed with kubectl">たとえば、<code>kubectl</code>を使用してクラスタをインストールできます</span></p>

<markup
lang="bash"

>kubectl -n coherence-test create -f metrics-cluster.yaml

coherence.coherence.oracle.com/metrics-cluster created</markup>

<p><span class="merged" id="all.4Z0Y0O.1" title="原文 : The kubectl CLI can be used to list Pods for the cluster:"><code>kubectl</code> CLIを使用して、クラスタの<code>Pods</code>をリストできます:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test get pod -l coherenceCluster=metrics-cluster

NAME                   READY   STATUS    RESTARTS   AGE
metrics-cluster-0   1/1     Running   0          36s
metrics-cluster-1   1/1     Running   0          36s
metrics-cluster-2   1/1     Running   0          36s</markup>

<p><span class="merged" id="all.2Dp1Jz.1.spl1" title="原文 : In a test or development environment the simplest way to reach an exposed port is to use the kubectl port-forward command.">テストまたは開発環境では、公開されたポートに到達する最も簡単な方法は、<code>kubectl port-forward</code>コマンドを使用することです。</span> <span class="merged" id="all.2Dp1Jz.1.spl2" title="原文 : For example to connect to the first Pod in the deployment:">たとえば、デプロイメントの最初の<code>Pod</code>に接続するには:</span> </p>

<markup
lang="bash"

>kubectl -n coherence-test port-forward metrics-cluster-0 9612:9612

Forwarding from [::1]:9612 -&gt; 9612
Forwarding from 127.0.0.1:9612 -&gt; 9612</markup>

</div>

<h3 id="_access_the_metrics_endpoint"><span class="merged" id="all.1jbewd" title="原文 : Access the Metrics Endpoint">メトリクス・エンドポイントへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.4Dnp4a" title="原文 : Now that a port has been forwarded from localhost to a Pod in the cluster the metrics endpoint can be accessed.">これで、ポートがローカル・ホストからクラスタ内の<code>Pod</code>に転送されたので、メトリクス・エンドポイントにアクセスできます。</span></p>

<p><span class="merged" id="all.13frAM.1" title="原文 : Issue the following curl command to access the REST endpoint:">次の<code>curl</code>コマンドを発行して、RESTエンドポイントにアクセスします:</span></p>

<markup
lang="bash"

>curl http://127.0.0.1:9612/metrics</markup>

</div>
</div>

<h2 id="_prometheus_service_monitor"><span class="merged" id="all.3MgUyM" title="原文 : Prometheus Service Monitor">Prometheusサービス・モニター</span></h2>
<div class="section">
<p><span class="merged" id="all.IpWTb" title="原文 : The operator can create a Prometheus ServiceMonitor for the metrics port so that Prometheus will automatically scrape metrics from the Pods in a Coherence deployment.">オペレータはメトリクス・ポートのPrometheus <code>ServiceMonitor</code>を作成して、Prometheusが<code>Coherence</code>デプロイメントの<code>Pods</code>からメトリクスを自動的にスクレイプできるようにします。</span></p>

<markup
lang="yaml"
title="metrics-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: metrics-cluster
spec:
  coherence:
    metrics:
      enabled: true
  ports:
    - name: metrics
      serviceMonitor:
        enabled: true  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3qcnHX" title="原文 : The serviceMonitor.enabled field is set to true for the metrics port."><code>metrics</code>ポートの<code>serviceMonitor.enabled</code>フィールドは<code>true</code>に設定されます。</span></li>
</ul>
<p><span class="merged" id="all.2hq1PR" title="原文 : See Exposing ports and Services - Service Monitors documentation for more details.">詳細は、<router-link @click.native="this.scrollFix('#ports/040_servicemonitors.adoc')" to="#ports/040_servicemonitors.adoc">「ポートおよびサービスの表示 - サービス・モニター」</router-link>のドキュメントを参照してください。</span></p>

</div>
</doc-view>
