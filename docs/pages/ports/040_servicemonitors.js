<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_prometheus_servicemonitors"><span class="merged" id="all.4ENhuH" title="原文 : Prometheus ServiceMonitors">Prometheus ServiceMonitors</span></h2>
<div class="section">
<p><span class="merged" id="all.1QbShm.spl1" title="原文 : When a port exposed on a container is to be used to serve metrics to Prometheus this often requires the addition of a Prometheus ServiceMonitor resource.">コンテナに公開されたポートを使用してPrometheusのメトリクスを提供する場合、多くの場合、Prometheus <code>ServiceMonitor</code>リソースを追加する必要があります。</span> <span class="merged" id="all.1QbShm.spl2" title="原文 : The Coherence Operator makes it simple to add a ServiceMonitor for an exposed port.">Coherence Operatorを使用すると、公開ポートに<code>ServiceMonitor</code>を簡単に追加できます。</span> <span class="merged" id="all.1QbShm.spl3" title="原文 : The advantage of specifying the ServiceMonitor configuration in the Coherence CRD spec is that the ServiceMonitor resource will be created, updated and deleted as part of the lifecycle of the Coherence resource, and does not need to be managed separately."><code>Coherence</code> CRD仕様で<code>ServiceMonitor</code>構成を指定する利点は、<code>ServiceMonitor</code>リソースが<code>Coherence</code>リソースのライフサイクルの一部として作成、更新および削除され、個別に管理する必要がないことです。</span> </p>

<p><span class="merged" id="all.2t6EFf.spl1" title="原文 : A ServiceMonitor is created for an exposed port by setting the serviceMonitor.enabled field to true."><code>serviceMonitor.enabled</code>フィールドを<code>true</code>に設定して、公開ポートに対して<code>ServiceMonitor</code>が作成されます。</span> <span class="merged" id="all.2t6EFf.spl2" title="原文 : The Operator will create a ServiceMonitor with the same name as the Service.">オペレータによって、<code>Service</code>と同じ名前の<code>ServiceMonitor</code>が作成されます。</span> <span class="merged" id="all.2t6EFf.spl3" title="原文 : The ServiceMonitor created will have a single endpoint for the port being exposed.">作成された<code>ServiceMonitor</code>には、公開するポートのエンドポイントが1つ含まれます。</span> </p>

<p><span class="merged" id="all.6vDv5.27"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  ports:
    - name: rest
      port: 8080
      serviceMonitor:
        enabled: true  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3YWypm" title="原文 : With the serviceMonitor.enabled field set to true a ServiceMonitor resource will be created."><code>serviceMonitor.enabled</code>フィールドを<code>true</code>に設定すると、<code>ServiceMonitor</code>リソースが作成されます。</span></li>
</ul>
<p><span class="merged" id="all.21KblV" title="原文 : The ServiceMonitor created from the spec above will look like this: For example:">上の仕様から作成された<code>ServiceMonitor</code>は次のようになります : 次に例を示します:</span></p>

<markup
lang="yaml"

>apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: test-cluster-rest
  labels:
    coherenceCluster: test-cluster
    coherenceComponent: coherence-service-monitor
    coherenceDeployment: test-cluster
    coherenceRole: test-cluster
spec:
  endpoints:
    - port: rest
      relabelings:
        - action: labeldrop
          regex: (endpoint|instance|job|service)
  selector:
    matchLabels:
      coherenceCluster: test-cluster
      coherenceComponent: coherence-service
      coherenceDeployment: test-cluster
      coherencePort: rest
      coherenceRole: test-cluster</markup>


<h3 id="_configure_the_servicemonitor"><span class="merged" id="all.2IdEHw" title="原文 : Configure the ServiceMonitor">ServiceMonitorの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.4E55z6" title="原文 : The Coherence CRD ServiceMonitorSpec contains many of the fields from the Prometheus ServiceMonitorSpec and Prometheus Endpoint to allow the ServiceMonitor to be configured for most use-cases."><code>Coherence</code> CRD <router-link :to="{path: '/about/04_coherence_spec', hash: '#_servicemonitorspec'}">ServiceMonitorSpec</router-link>には、<a href="https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec" id="" target="_blank" >Prometheus <code>ServiceMonitorSpec</code></a>および<a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >「Prometheusエンドポイント」</a>の多くのフィールドが含まれており、ほとんどのユースケースに<code>ServiceMonitor</code>を構成できます。</span></p>

<p><span class="merged" id="all.8wRP9" title="原文 : In situations where the Coherence CRD does not have the required fields, for example when a different version of Prometheus has been installed to that used to build the Coherence Operator, then the solution would be to manually create ServiceMonitors instead of letting them be created by the Coherence Operator."><code>Coherence</code> CRDに必須フィールドがない場合(たとえば、Coherence Operatorの構築に使用される別のバージョンのPrometheusがインストールされている場合など)、解決方法は、Coherence Operatorによって作成されるのではなく、<code>ServiceMonitors</code>を手動で作成することです。</span></p>

</div>
</div>
</doc-view>
