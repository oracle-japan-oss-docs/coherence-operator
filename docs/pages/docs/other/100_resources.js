<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_container_resource_limits"><span class="merged" id="all.3AnCj6" title="原文 : Container Resource Limits">コンテナ・リソースの制限</span></h2>
<div class="section">
<p><span class="merged" id="all.231xTI.spl1" title="原文 : When creating a Coherence resource you can optionally specify how much CPU and memory (RAM) each Coherence Container is allowed to consume."><code>Coherence</code>リソースを作成する場合、オプションで、各Coherenceコンテナが消費できるCPUおよびメモリー(RAM)の量を指定できます。</span> <span class="merged" id="all.231xTI.spl2" title="原文 : The container resources are specified in the resources section of the Coherence spec; the format is exactly the same as documented in the Kubernetes documentation Managing Compute Resources for Containers.">コンテナ・リソースは、<code>Coherence</code>仕様の<code>resources</code>セクションで指定されます。形式は、Kubernetesドキュメント<a href="https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/" id="" target="_blank" >「コンテナのコンピュート・リソースの管理」</a>に記載されている形式とまったく同じです。</span> </p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.6DWk0.spl1" title="原文 : When setting resource limits, in particular memory limits, for a container it is important to ensure that the Coherence JVM is properly configured so that it does not consume more memory than the limits.">リソース制限(特定のメモリー制限)を設定する場合、コンテナのCoherence JVMが制限よりも多くのメモリーを消費しないように適切に構成されるようにすることが重要です。</span> <span class="merged" id="all.6DWk0.spl2" title="原文 : If the JVM attempts to consume more memory than the resource limits allow the Pod can be killed by Kubernetes.">JVMがリソース制限よりも多くのメモリーを消費しようとすると、<code>Pod</code>をKubernetesで強制終了できます。</span> <span class="merged" id="all.6DWk0.spl3" title="原文 : See Configuring the JVM Memory for details on the different memory settings.">異なるメモリー設定の詳細は、<router-link to="/docs/jvm/050_memory">「JVMメモリーの構成」</router-link>を参照してください。</span> </p>
</div>
<p><span class="merged" id="all.6vDv5.25"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  resources:           <span class="conum" data-value="1" />
    requests:
      memory: "64Mi"
      cpu: "250m"
    limits:
      memory: "128Mi"
      cpu: "500m"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1VBMyE.spl1" title="原文 : The coherence container in the Pods has a request of 0.25 cpu and 64MiB of memory."><code>Pods</code>の<code>coherence</code>コンテナには、0.25 cpuおよび64MiBのメモリーのリクエストがあります。</span> <span class="merged" id="all.1VBMyE.spl2" title="原文 : The coherence container has a limit of 0.5 cpu and 128MiB of memory."><code>coherence</code>コンテナの制限は、0.5 cpuおよび128MiBのメモリーです。</span> </li>
</ul>
</div>
</doc-view>
