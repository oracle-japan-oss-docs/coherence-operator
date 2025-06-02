<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_respect_container_resource_limits"><span class="merged" id="all.2Y5qxl" title="原文 : Respect Container Resource Limits">コンテナ・リソース制限の考慮</span></h2>
<div class="section">
<p><span class="merged" id="all.CuCdA.spl1" title="原文 : The JVM can be configured to respect container limits set, for example cpu and memory limits.">JVMは、CPUやメモリー制限など、設定されたコンテナ制限を考慮するように構成できます。</span> <span class="merged" id="all.CuCdA.spl2" title="原文 : This can be important if container limits have been set for the container in the resources section as a JVM that does not respect these limits can cause the Pod to be killed.">これは、これらの制限を尊重しないJVMによって<code>Pod</code>が強制される可能性があるため、<code>resources</code>セクションのコンテナにコンテナ制限が設定されている場合は重要です。</span> <span class="merged" id="all.CuCdA.spl3" title="原文 : This is done by adding the -XX:+UseContainerSupport JVM option.">これを行うには、<code>-XX:+UseContainerSupport</code> JVMオプションを追加します。</span> <span class="merged" id="all.CuCdA.spl4" title="原文 : It is possible to control this using the jvm.useContainerLimits field in the Coherence CRD spec.">これは、<code>Coherence</code> CRD仕様の<code>jvm.useContainerLimits</code>フィールドを使用して制御できます。</span> <span class="merged" id="all.CuCdA.spl5" title="原文 : If the field is not set, the operator adds the -XX:+UseContainerSupport option by default.">フィールドが設定されていない場合、オペレータはデフォルトで<code>-XX:+UseContainerSupport</code>オプションを追加します。</span> </p>

<p><span class="merged" id="all.6vDv5.15"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    useContainerLimits: false   <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.qN3oo" title="原文 : The useContainerLimits field is set to false, so the -XX:+UseContainerSupport will not be passed to the JVM."><code>useContainerLimits</code>フィールドはfalseに設定されているため、<code>-XX:+UseContainerSupport</code>はJVMに渡されません。</span></li>
</ul>
<p><span class="merged" id="all.1bb09k" title="原文 : See the Resource Limits documentation on how to specify resource limits for the Coherence container.">Coherenceコンテナのリソース制限を指定する方法については、<router-link to="/docs/other/100_resources">「リソース制限」</router-link>ドキュメントを参照してください。</span></p>

</div>
</doc-view>
