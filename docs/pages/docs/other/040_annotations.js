<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1njvMe"  title="原文:: Adding Annotations">注釈の追加</span></dt>
<dd slot="desc"><p><span class="merged" id="all.17VBCz.spl1" title="原文 : Annotations can be added to the Coherence cluster’s StatefulSet and the Pods.">注釈は、Coherenceクラスタの<code>StatefulSet</code>および<code>Pods</code>に追加できます。</span> <span class="merged" id="all.17VBCz.spl2" title="原文 : See the official Kubernetes Annotations documentation for more details on applying annotations to resources.">リソースへの注釈の適用の詳細は、公式の<a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/" id="" target="_blank" >「Kubernetes注釈」</a>ドキュメントを参照してください。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_statefulset_annotations"><span class="merged" id="all.jPreY" title="原文 : StatefulSet Annotations">StatefulSet注釈</span></h2>
<div class="section">
<p><span class="merged" id="all.4g4YCt.spl1" title="原文 : The default behaviour of the Operator is to copy any annotations added to the Coherence resource to the StatefulSet.">オペレータのデフォルトの動作では、<code>Coherence</code>リソースに追加された注釈を<code>StatefulSet</code>にコピーします。</span> <span class="merged" id="all.4g4YCt.spl2"  title="原文:: For example:">例えば:</span> </p>

<markup
lang="yaml"
title="coherence-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
  annotations:
    key1: value1
    key2: value2</markup>

<p><span class="merged" id="all.1ea4OO" title="原文 : This will result in a StatefulSet with the following annotations:">これにより、<code>StatefulSet</code>が次の注釈付きで生成されます:</span></p>

<markup
lang="yaml"

>apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: storage
  annotations:
    key1: value1
    key2: value2</markup>

<p><span class="merged" id="all.3QS1oK.spl1" title="原文 : Alternatively, if the StatefulSet should have different annotations to the Coherence resource, the annotations for the StatefulSet can be specified in the spec.statefulSetAnnotations field of the Coherence resource.">または、<code>StatefulSet</code>に<code>Coherence</code>リソースとは異なる注釈が必要な場合、<code>StatefulSet</code>の注釈を<code>Coherence</code>リソースの<code>spec.statefulSetAnnotations</code>フィールドで指定できます。</span> <span class="merged" id="all.3QS1oK.spl2"  title="原文:: For example:">例えば:</span> </p>

<markup
lang="yaml"
title="coherence-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
  annotations:
    key1: value1
    key2: value2
spec:
  replicas: 3
  statefulSetAnnotations:
    key3: value3
    key4: value4</markup>

<p><span class="merged" id="all.1ea4OO.1" title="原文 : This will result in a StatefulSet with the following annotations:">これにより、<code>StatefulSet</code>が次の注釈付きで生成されます:</span></p>

<markup
lang="yaml"

>apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: storage
  annotations:
    key3: value3
    key4: value4</markup>

</div>

<h2 id="_pod_annotations"><span class="merged" id="all.4PZ4GS" title="原文 : Pod Annotations">ポッド注釈</span></h2>
<div class="section">
<p><span class="merged" id="all.vJyy5.spl1" title="原文 : Additional annotations can be added to the Pods managed by the Operator.">オペレータによって管理される<code>Pods</code>に追加の注釈を追加できます。</span> <span class="merged" id="all.vJyy5.spl2" title="原文 : Annotations should be added to the annotations map in the Coherence CRD spec."><code>Coherence</code> CRD仕様の<code>annotations</code>マップに注釈を追加する必要があります。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  annotations:
    key1: value1
    key2: value2</markup>

<p><span class="merged" id="all.1ROteh" title="原文 : The annotations will be added the Pods:">注釈は<code>Pods</code>に追加されます:</span></p>

<markup
lang="yaml"

>apiVersion: v1
kind: Pod
metadata:
  name: storage-0
  annotations:
    key1: value1
    key2: value2</markup>

</div>
</doc-view>
