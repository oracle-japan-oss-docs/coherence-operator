<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_adding_arbitrary_jvm_arguments"><span class="merged" id="all.4YQuLU" title="原文 : Adding Arbitrary JVM Arguments">任意のJVM引数の追加</span></h2>
<div class="section">
<p><span class="merged" id="all.3oglnm.spl1" title="原文 : The Coherence CRD allows any arbitrary JVM arguments to be passed to the JVM in the coherence container by using the jvm.args field of the CRD spec."><code>Coherence</code> CRDでは、CRD仕様の<code>jvm.args</code>フィールドを使用して、任意のJVM引数を<code>coherence</code>コンテナのJVMに渡すことができます。</span> <span class="merged" id="all.3oglnm.spl2" title="原文 : Any valid system property or JVM argument can be added to the jvm.args list.">有効なシステム・プロパティまたはJVM引数は、<code>jvm.args</code>リストに追加できます。</span> </p>

<p><span class="merged" id="all.6vDv5.6"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    args:
      - "-Dcoherence.pof.config=storage-pof-config.xml"
      - "-Dcoherence.tracing.ratio=0.1"
      - "-agentpath:/yourkit/bin/linux-x86-64/libyjpagent.so"</markup>

<p><span class="merged" id="all.1iP0hM" title="原文 : In this example the args list adds two System properties coherence.pof.config=storage-pof-config.xml and coherence.tracing.ratio=0.1 and also adds the YourKit profiling agent.">この例では、<code>args</code>リストが2つのシステム・プロパティ<code>coherence.pof.config=storage-pof-config.xml</code>および<code>coherence.tracing.ratio=0.1</code>を追加し、YourKitプロファイリング・エージェントも追加します。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.27EZlm.spl1" title="原文 : When the Operator builds the command line to use when starting Coherence Pods, any arguments added to the jvm.args field will be added after all the arguments added by the Operator from other configuration fields.">Coherenceポッドの開始時に使用するコマンドラインがオペレータによって構築されると、他の構成フィールドのオペレータによって追加されたすべての引数の後に、<code>jvm.args</code>フィールドに追加された引数が追加されます。</span> <span class="merged" id="all.27EZlm.spl2" title="原文 : This means that arguments such as system properties added to jvm.args will override any added by the Operator.">つまり、<code>jvm.args</code>に追加されたシステム・プロパティなどの引数は、オペレータによって追加された引数より優先されます。</span> </p>
</div>
<p><span class="merged" id="all.2x2VMf"  title="原文:: For example">次に例を示します</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    cacheConfig: storage-config.xml                   <span class="conum" data-value="1" />
  jvm:
    args:
      - "-Dcoherence.cache.config=test-config.xml"    <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4fpIhE" title="原文 : Setting the coherence.cacheConfig field will make the operator add -Dcoherence.cache.config=storage-config.xml to the command line."><code>coherence.cacheConfig</code>フィールドを設定すると、オペレータは<code>-Dcoherence.cache.config=storage-config.xml</code>をコマンドラインに追加します。</span></li>
<li data-value="2"><span class="merged" id="all.3KVYku" title="原文 : Adding -Dcoherence.cache.config=test-config.xml to the jvm.args field will make the Operator add -Dcoherence.cache.config=test-config.xml to the end of the JVM arguments in the command line."><code>jvm.args</code>フィールドに<code>-Dcoherence.cache.config=test-config.xml</code>を追加すると、オペレータによって、コマンドラインのJVM引数の末尾に<code>-Dcoherence.cache.config=test-config.xml</code>が追加されます。</span></li>
</ul>
<p><span class="merged" id="all.29pEbJ" title="原文 : When duplicate system properties are present on a command line, the last one wins so in the example above the cache configuration used would be test-config.xml.">コマンドラインに重複したシステム・プロパティが存在する場合、最後のシステム・プロパティは<code>test-config.xml</code>になります。</span></p>


<h3 id="_default_arguments"><span class="merged" id="all.3XrY0r"  title="原文:: Default Arguments">デフォルト引数</span></h3>
<div class="section">
<p><span class="merged" id="all.32haJy" title="原文 : The Coherence Operator will add the following JVM arguments by default:">Coherence Operatorでは、デフォルトで次のJVM引数が追加されます:</span></p>

<markup


>-Dcoherence.cluster=&lt;cluster-name&gt;
-Dcoherence.role=&lt;role&gt;
-Dcoherence.wka=&lt;deployment-name&gt;-wka.svc.cluster.local
-Dcoherence.cacheconfig=coherence-cache-config.xml
-Dcoherence.k8s.operator.health.port=6676
-Dcoherence.management.http.port=30000
-Dcoherence.metrics.http.port=9612
-Dcoherence.distributed.persistence-mode=on-demand
-Dcoherence.override=k8s-coherence-override.xml
-Dcoherence.ttl=0

-XX:+UseG1GC
-XX:+PrintCommandLineFlags
-XX:+PrintFlagsFinal
-XshowSettings:all
-XX:+UseContainerSupport
-XX:+HeapDumpOnOutOfMemoryError
-XX:+ExitOnOutOfMemoryError
-XX:HeapDumpPath=/jvm/&lt;member&gt;/&lt;pod-uid&gt;/heap-dumps/&lt;member&gt;-&lt;pod-uid&gt;.hprof
-XX:ErrorFile=/jvm/&lt;member&gt;/&lt;pod-uid&gt;/hs-err-&lt;member&gt;-&lt;pod-uid&gt;.log
-XX:+UnlockDiagnosticVMOptions
-XX:NativeMemoryTracking=summary
-XX:+PrintNMTStatistics</markup>

<p><span class="merged" id="all.1bOzPP" title="原文 : Some arguments and system properties above can be overridden or changed by setting values in the Coherence CDR spec.">前述の引数やシステム・プロパティの一部は、<code>Coherence</code> CDR仕様の値を設定することで上書きまたは変更できます。</span></p>

</div>
</div>

<h2 id="_environment_variable_expansion"><span class="merged" id="all.vMSX8.2" title="原文 : Environment Variable Expansion">環境変数の拡張</span></h2>
<div class="section">
<p><span class="merged" id="all.2soGKn.spl1" title="原文 : The Operator supports environment variable expansion in JVM arguments.">オペレータは、JVM引数の環境変数拡張をサポートしています。</span> <span class="merged" id="all.2soGKn.spl2" title="原文 : The runner in the Coherence container will replace ${var} or $var in the JVM arguments with the corresponding environment variable name.">Coherenceコンテナのランナーは、JVM引数の<code>${var}</code>または<code>$var</code>を対応する環境変数名で置き換えます。</span> </p>

<p><span class="merged" id="all.465S8a" title="原文 : For example a JVM argument of &quot;-Dmy.host.name=${HOSTNAME}&quot; when run on a Pod with a host name of COH-1 will resolve to &quot;-Dmy.host.name=COH-1&quot;.">たとえば、ホスト名が<code>COH-1</code>のポッドで実行した<code>"-Dmy.host.name=${HOSTNAME}"</code>のJVM引数は、<code>"-Dmy.host.name=COH-1"</code>に解決されます。</span></p>

<p><span class="merged" id="all.yCF5D.2" title="原文 : Any environment variable that is present when the Coherence container starts can be used, this would include variables created as part of the image and variables specified in the Coherence yaml.">Coherenceコンテナの起動時に存在する環境変数を使用できます。これには、イメージの一部として作成された変数と、Coherence yamlで指定されている変数が含まれます。</span></p>

</div>
</doc-view>
