<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_set_coherence_cluster_name"><span class="merged" id="all.1IIDqc" title="原文 : Set Coherence Cluster Name">Coherenceクラスタ名の設定</span></h2>
<div class="section">
<p><span class="merged" id="all.3OOMOT.spl1" title="原文 : The name of the Coherence cluster that a Coherence resource is part of can be set with the cluster field in the Coherence.Spec."><code>Coherence</code>リソースの一部であるCoherenceクラスタの名前は、<code>Coherence.Spec</code>の<code>cluster</code>フィールドで設定できます。</span> <span class="merged" id="all.3OOMOT.spl2" title="原文 : The cluster name is used to set the coherence.cluster system property in the JVM in the Coherence container.">クラスタ名は、CoherenceコンテナのJVMで<code>coherence.cluster</code>システム・プロパティを設定するために使用されます。</span> </p>


<h3 id="_default_cluster_name"><span class="merged" id="all.3IHoty" title="原文 : Default Cluster Name">デフォルト・クラスタ名</span></h3>
<div class="section">
<p><span class="merged" id="all.1qJQWS" title="原文 : The default Coherence cluster name, used when the cluster field is empty, will be the same as the name of the Coherence resource, for example:"><code>cluster</code>フィールドが空の場合に使用されるデフォルトのCoherenceクラスタ名は、<code>Coherence</code>リソースの名前と同じになります。次に例を示します:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2cOdvA" title="原文 : The name of this Coherence resource is test, which will also be used as the Coherence cluster name, effectively passing -Dcoherence.cluster=test to the JVM in the Coherence container.">この<code>Coherence</code>リソースの名前は<code>test</code>で、Coherenceクラスタ名としても使用されます。これは、<code>-Dcoherence.cluster=test</code>をCoherenceコンテナのJVMに効果的に渡します。</span></li>
</ul>
</div>

<h3 id="_specify_a_cluster_name"><span class="merged" id="all.2nCLCX" title="原文 : Specify a Cluster Name">クラスタ名の指定</span></h3>
<div class="section">
<p><span class="merged" id="all.36zvMg" title="原文 : In a use case where multiple Coherence resources will be created to form a single Coherence cluster, the cluster field in all the Coherence resources needs to be set to the same value.">単一のCoherenceクラスタを形成するために複数の<code>Coherence</code>リソースが作成されるユースケースでは、すべての<code>Coherence</code>リソースの<code>cluster</code>フィールドを同じ値に設定する必要があります。</span></p>

<markup
lang="yaml"
title="cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  cluster: test-cluster
---
apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: front-end
spec:
  cluster: test-cluster</markup>

<p><span class="merged" id="all.3jjWDF.spl1" title="原文 : The yaml above contains two Coherence resources, one named storage and one named front-end.">前述のYamlには、2つの<code>Coherence</code>リソース(<code>storage</code>および<code>front-end</code>という名前のリソース)が含まれています。</span> <span class="merged" id="all.3jjWDF.spl2" title="原文 : Both of these Coherence resources have the same value for the cluster field, test-cluster, so the Pods in both deployments will form a single Coherence cluster named test.">これらの<code>Coherence</code>リソースのいずれも、<code>cluster</code>フィールド<code>test-cluster</code>に同じ値があるため、両方のデプロイメントのPodは<code>test</code>という名前の単一のCoherenceクラスタを形成します。</span> </p>

</div>
</div>
</doc-view>
