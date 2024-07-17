<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_set_the_cache_configuration_file_name"><span class="merged" id="all.Pt6Zj" title="原文 : Set the Cache Configuration File Name">キャッシュ構成ファイル名の設定</span></h2>
<div class="section">
<p><span class="merged" id="all.7CcTJ.spl1" title="原文 : The name of the Coherence cache configuration file that the Coherence processes in a Coherence resource will use can be set with the spec.coherence.cacheConfig field."><code>Coherence</code>リソース内のCoherenceプロセスが使用するCoherenceキャッシュ構成ファイルの名前は、<code>spec.coherence.cacheConfig</code>フィールドで設定できます。</span> <span class="merged" id="all.7CcTJ.spl2" title="原文 : By setting this field the coherence.cacheconfig system property will be set in the Coherence JVM.">このフィールドを設定すると、<code>coherence.cacheconfig</code>システム・プロパティがCoherence JVMに設定されます。</span> </p>

<p><span class="merged" id="all.2NaVKZ.spl1" title="原文 : When the spec.coherence.cacheConfig is blank or not specified, Coherence use its default behaviour to find the cache configuration file to use."><code>spec.coherence.cacheConfig</code>が空白であるか指定されていない場合、Coherenceはデフォルトの動作を使用して、使用するキャッシュ構成ファイルを検索します。</span> <span class="merged" id="all.2NaVKZ.spl2" title="原文 : Typically, this is to use the first occurrence of coherence-cache-config.xml that is found on the classpath (consult the Coherence documentation for an explanation of the default behaviour).">通常、これは、クラスパスで最初に見つかった<code>coherence-cache-config.xml</code>を使用することです(デフォルトの動作の説明については、<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.2206/develop-applications/understanding-configuration.html#GUID-360B798E-2120-44A9-8B09-1FDD9AB40EB5" id="" target="_blank" >「Coherenceのドキュメント」</a>を使用します)。</span> </p>

<p><span class="merged" id="all.3HvF1H" title="原文 : To set a specific cache configuration file to use set the spec.coherence.cacheConfig field, for example:">使用する特定のキャッシュ構成ファイルを設定するには、<code>spec.coherence.cacheConfig</code>フィールドを設定します。次に例を示します:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    cacheConfig: storage-cache-config.xml <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3h7hMP" title="原文 : The spec.coherence.cacheConfig field has been set to storage-cache-config.xml which will effectively pass -Dcoherence.cacheconfig=storage-cache-config.xml to the JVM command line."><code>spec.coherence.cacheConfig</code>フィールドが<code>storage-cache-config.xml</code>に設定されており、<code>-Dcoherence.cacheconfig=storage-cache-config.xml</code>をJVMコマンドラインに効果的に渡します。</span></li>
</ul>
</div>
</doc-view>
