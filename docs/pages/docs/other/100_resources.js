<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_container_resource_limits"><span class="merged" id="all.3AnCj6" title="原文 : Container Resource Limits">コンテナ・リソースの制限</span></h2>
<div class="section">
<p><span class="merged" id="all.231xTI.spl1" title="原文 : When creating a Coherence resource you can optionally specify how much CPU and memory (RAM) each Coherence Container is allowed to consume."><code>Coherence</code>リソースを作成する場合、オプションで、各Coherenceコンテナが消費できるCPUおよびメモリー(RAM)の量を指定できます。</span> <span class="merged" id="all.231xTI.spl2" title="原文 : The container resources are specified in the resources section of the Coherence spec; the format is exactly the same as documented in the Kubernetes documentation Managing Compute Resources for Containers.">コンテナ・リソースは、<code>Coherence</code>仕様の<code>resources</code>セクションで指定されます。形式は、Kubernetesドキュメント<a href="https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/" id="" target="_blank" >「コンテナのコンピュート・リソースの管理」</a>に記載されている形式とまったく同じです。</span> </p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.6DWk0.spl1" title="原文 : When setting resource limits, in particular memory limits, for a container it is important to ensure that the Coherence JVM is properly configured so that it does not consume more memory than the limits.">リソース制限(特定のメモリー制限)を設定する場合、コンテナのCoherence JVMが制限よりも多くのメモリーを消費しないように適切に構成されるようにすることが重要です。</span> <span class="merged" id="all.6DWk0.spl2" title="原文 : If the JVM attempts to consume more memory than the resource limits allow the Pod can be killed by Kubernetes.">JVMがリソース制限よりも多くのメモリーを消費しようとすると、<code>Pod</code>をKubernetesで強制終了できます。</span> <span class="merged" id="all.6DWk0.spl3" title="原文 : See Configuring the JVM Memory for details on the different memory settings.">異なるメモリー設定の詳細は、<router-link to="/docs/jvm/050_memory">「JVMメモリーの構成」</router-link>を参照してください。</span> </p>
</div>
<p><span class="merged" id="all.6vDv5.27"  title="原文:: For example:">例えば:</span></p>

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
<li data-value="1"><span class="merged" id="all.1NfLWy" title="原文 : The coherence container in the Pods will have requests of 0.25 cpu and 64MiB of memory, and limits of 0.5 cpu and 128MiB of memory."><code>Pods</code>の<code>coherence</code>コンテナには、0.25 cpuおよび64MiBのメモリーのリクエストと、0.5 cpuおよび128MiBのメモリーの制限があります。</span></li>
</ul>
</div>

<h2 id="_initcontainer_resource_limits"><span class="merged" id="all.45BOos" title="原文 : InitContainer Resource Limits">InitContainerリソース制限</span></h2>
<div class="section">
<p><span class="merged" id="all.2GL0Ig.spl1" title="原文 : The Coherence Operator adds an init-container to the Pods that it manages.">Coherence Operatorは、管理対象のポッドにinitコンテナを追加します。</span> <span class="merged" id="all.2GL0Ig.spl2" title="原文 : This init container does nothing more than copy some files and ensure some directories exist.">このinitコンテナは、一部のファイルをコピーするのみで、ディレクトリが存在することを確認します。</span> <span class="merged" id="all.2GL0Ig.spl3" title="原文 : In terms of resource use it is extremely light.">資源の使用に関しては、極めて軽いです。</span> <span class="merged" id="all.2GL0Ig.spl4" title="原文 : Some customers have expressed a desire to still be able to set limits fo this init container, so this is possible using the spec.initResources field.">一部のお客様は、このinitコンテナに対して制限を設定できるようにしたいと表明しているため、<code>spec.initResources</code>フィールドを使用してこれを行うことができます。</span> </p>

<p><span class="merged" id="all.6vDv5.28"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  initResources:           <span class="conum" data-value="1" />
    requests:
      memory: "64Mi"
      cpu: "250m"
    limits:
      memory: "128Mi"
      cpu: "500m"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3AE14O" title="原文 : The coherence-k8s-utils init-container in the Pods will have requests of 0.25 cpu and 64MiB of memory, and limits of 0.5 cpu and 128MiB of memory."><code>Pods</code>の<code>coherence-k8s-utils</code> init-containerには、0.25 cpuおよび64MiBのメモリーのリクエストと、0.5 cpuおよび128MiBのメモリーの制限があります。</span></li>
</ul>
<p><span class="merged" id="all.MnqZG" title="原文 : These resources only applies to the init-container that the Operator creates, any other init-containers added in the spec.initContainers section should have their own resources configured.">これらのリソースは、オペレータが作成するinitコンテナにのみ適用され、<code>spec.initContainers</code>セクションに追加される他のinitコンテナは、独自のリソースを構成する必要があります。</span></p>

</div>
</doc-view>
