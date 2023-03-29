<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_pod_labels"><span class="merged" id="all.1CpNmE" title="原文 : Pod Labels">ポッド・ラベル</span></h2>
<div class="section">
<p><span class="merged" id="all.4dqjRN.spl1" title="原文 : Additional labels can be added to the Pods managed by the Operator.">オペレータによって管理される<code>Pods</code>に追加のラベルを追加できます。</span> <span class="merged" id="all.4dqjRN.spl2" title="原文 : Additional labels should be added to the labels map in the Coherence CRD spec."><code>Coherence</code> CRD仕様の<code>labels</code>マップに追加のラベルを追加する必要があります。</span> <span class="merged" id="all.4dqjRN.spl3" title="原文 : The entries in the labels map should confirm to the recommendations and rules in the Kubernetes Labels documentation."><code>labels</code>マップのエントリは、Kubernetes <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/" id="" target="_blank" >「ラベル」</a>ドキュメントの推奨事項およびルールを確認する必要があります。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  labels:             <span class="conum" data-value="1" />
    tier: backend
    environment: dev</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2jhMGs" title="原文 : Two labels will be added to the Pods, tier=backend and environment=dev"><code>Pods</code>、<code>tier=backend</code>および<code>environment=dev</code>に2つのラベルが追加されます</span></li>
</ul>
</div>
</doc-view>
