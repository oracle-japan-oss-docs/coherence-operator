<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_configure_pod_scheduling"><span class="merged" id="all.49FcDZ" title="原文 : Configure Pod Scheduling">ポッド・スケジューリングの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3sWVtA" title="原文 : In Kubernetes Pods can be configured to control how, and onto which nodes, Kubernetes will schedule those Pods; the Coherence Operator allows the same control for Pods owned by a Coherence resource.">Kubernetes <code>Pods</code>では、Kubernetesによってそれらの<code>Pods</code>がスケジュールされる方法およびノードを制御するように構成できます。Coherence Operatorでは、<code>Coherence</code>リソースが所有する<code>Pods</code>に対して同じ制御を行うことができます。</span></p>

<p><span class="merged" id="all.UMgFe"  title="原文: The following settings can be configured:">次の設定を構成できます。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.41"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.44"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><code>nodeSelector</code></td>
<td class=""><span class="merged" id="all.15yRwc.spl1" title="原文 : nodeSelector is the simplest recommended form of node selection constraint. nodeSelector is a field of role spec, it specifies a map of key-value pairs."><code>nodeSelector</code>は、ノード選択制約の最もシンプルな推奨形式です。<code>nodeSelector</code>はロール仕様のフィールドであり、キーと値のペアのマップを指定します。</span> <span class="merged" id="all.15yRwc.spl2" title="原文 : For the Pod to be eligible to run on a node, the node must have each of the indicated key-value pairs as labels (it can have additional labels as well)."><code>Pod</code>がノード上で実行されるようにするには、指定された各キーと値のペアをラベルとして持つ必要があります(追加のラベルも持つことができます)。</span> <span class="merged" id="all.15yRwc.spl3" title="原文 : See Assigning Pods to Nodes in the Kubernetes documentation">Kubernetesドキュメントの<a href="https://kubernetes.io/docs/concepts/configuration/assign-pod-node/" id="" target="_blank" >「ノードへのポッドの割当て」</a>を参照してください</span> </td>
</tr>
<tr>
<td class=""><code>affinity</code></td>
<td class=""><span class="merged" id="all.25REfU.spl1" title="原文 : The affinity/anti-affinity feature, greatly expands the types of constraints you can express over just using labels in a nodeSelector.">アフィニティ/アンチ・アフィニティ機能では、<code>nodeSelector</code>のラベルを使用するだけで表現できる制約のタイプが大幅に拡張されます。</span> <span class="merged" id="all.25REfU.spl2" title="原文 : See Assigning Pods to Nodes in the Kubernetes documentation">Kubernetesドキュメントの<a href="https://kubernetes.io/docs/concepts/configuration/assign-pod-node/" id="" target="_blank" >「ノードへのポッドの割当て」</a>を参照してください</span> </td>
</tr>
<tr>
<td class=""><code>tolerations</code></td>
<td class=""><span class="merged" id="all.4EfsZe.spl1" title="原文 : nodeSelector and affinity are properties of Pods that attracts them to a set of nodes (either as a preference or a hard requirement)."><code>nodeSelector</code>および<code>affinity</code>は、ノードのセット(プリファレンスまたはハード要件のいずれか)に引き付ける<code>Pods</code>のプロパティです。</span> <span class="merged" id="all.4EfsZe.spl2" title="原文 : Taints are the opposite - they allow a node to repel a set of Pods.">taintsは逆 - ノードは、一連の<code>Pods</code>をリペルできます。</span> <span class="merged" id="all.4EfsZe.spl3" title="原文 : Taints and tolerations work together to ensure that Pods are not scheduled onto inappropriate nodes.">taintsとtolerationsは連携して、<code>Pods</code>が不適切なノードにスケジュールされないようにします。</span> <span class="merged" id="all.4EfsZe.spl4" title="原文 : One or more taints are applied to a node; this marks that the node should not accept any Pods that do not tolerate the taints.">1つ以上のtaintsがノードに適用されます。これは、ノードがtaintsを許容しない<code>Pods</code>を受け入れないことを示します。</span> <span class="merged" id="all.4EfsZe.spl5" title="原文 : Tolerations are applied to Pods, and allow (but do not require) the Pods to schedule onto nodes with matching taints.">Tolerationsは<code>Pods</code>に適用され、<code>Pods</code>は、一致するtaintsを持つノードにスケジュールできます(ただし、必要ありません)。</span> <span class="merged" id="all.4EfsZe.spl6" title="原文 : See Taints and Tolerations in the Kubernetes documentation.">Kubernetesドキュメントの<a href="https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/" id="" target="_blank" >「TaintsとTolerations」</a>を参照してください。</span> </td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.24G9b4.spl1" title="原文 : The nodeSelector, affinity and tolerations fields are all part of the Coherence CRD spec."><code>nodeSelector</code>、<code>affinity</code>および<code>tolerations</code>フィールドはすべて、<code>Coherence</code> CRD仕様の一部です。</span> <span class="merged" id="all.24G9b4.spl2" title="原文 : The format of the fields is that same as documented in the Kubernetes documentation Assigning Pods to Nodes and Taints and Tolerations">フィールドの形式は、Kubernetesドキュメントの<a href="https://kubernetes.io/docs/concepts/configuration/assign-pod-node/" id="" target="_blank" >「ノードへのポッドの割当て」</a>および<a href="https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/" id="" target="_blank" >「TaintsとTolerations」</a>に記載されている形式と同じです</span> </p>

<p><span class="merged" id="all.6vDv5.25"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  tolerations:
    - key: "example-key"
      operator: "Exists"
      effect: "NoSchedule"
  nodeSelector:
    disktype: ssd
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
          - matchExpressions:
             - key: kubernetes.io/e2e-az-name
               operator: In
               values:
                 - e2e-az1
                 - e2e-az2</markup>

</div>
</doc-view>
