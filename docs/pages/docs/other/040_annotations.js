<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_pod_annotations"><span class="merged" id="all.4PZ4GS" title="原文 : Pod Annotations">ポッド注釈</span></h2>
<div class="section">
<p><span class="merged" id="all.4S9N6K.spl1" title="原文 : Additional annotations can be added to the Pods managed by the Operator.">オペレータによって管理される<code>Pods</code>に追加の注釈を追加できます。</span> <span class="merged" id="all.4S9N6K.spl2" title="原文 : Annotations should be added to the annotations map in the Coherence CRD spec."><code>Coherence</code> CRD仕様の<code>annotations</code>マップに注釈を追加する必要があります。</span> <span class="merged" id="all.4S9N6K.spl3" title="原文 : The entries in the annotations map should confirm to the recommendations and rules in the Kubernetes Annotations documentation."><code>annotations</code>マップのエントリは、Kubernetes <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/" id="" target="_blank" >「注釈」</a>ドキュメントの推奨事項およびルールを確認する必要があります。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  annotations:                        <span class="conum" data-value="1" />
    prometheus.io/path: /metrics
    prometheus.io/port: "9612"
    prometheus.io/scheme: http
    prometheus.io/scrape: "true"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2zp4Ll" title="原文 : A number of Prometheus annotations will be added to this Coherence deployment&rsquo;s Pods">多数のPrometheus注釈がこの<code>Coherence</code>デプロイメントの<code>Pods</code>に追加されます</span></li>
</ul>
</div>
</doc-view>
