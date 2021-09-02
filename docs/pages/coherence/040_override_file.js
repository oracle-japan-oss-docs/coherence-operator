<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_set_the_operational_configuration_file_name"><span class="merged" id="all.2m33SS" title="原文 : Set the Operational Configuration File Name">動作構成ファイル名の設定</span></h2>
<div class="section">
<p><span class="merged" id="all.4ZPacO.spl1" title="原文 : The name of the Coherence operations configuration file (commonly called the overrides file) that the Coherence processes in a Coherence resource will use can be set with the spec.coherence.overrideConfig field."><code>Coherence</code>リソースのCoherenceプロセスが使用するCoherence操作構成ファイル(通常はオーバーライド・ファイルと呼ばれる)の名前は、<code>spec.coherence.overrideConfig</code>フィールドで設定できます。</span> <span class="merged" id="all.4ZPacO.spl2" title="原文 : By setting this field the coherence.override system property will be set in the Coherence JVM.">このフィールドを設定すると、<code>coherence.override</code>システム・プロパティがCoherence JVMに設定されます。</span> </p>

<p><span class="merged" id="all.1nflyq.spl1" title="原文 : When the spec.coherence.overrideConfig is blank or not specified, Coherence use its default behaviour to find the operational configuration file to use."><code>spec.coherence.overrideConfig</code>が空または指定されていない場合、Coherenceはデフォルトの動作を使用して、使用する操作構成ファイルを検索します。</span> <span class="merged" id="all.1nflyq.spl2" title="原文 : Typically, this is to use the first occurrence of tangosol-coherence-override.xml that is found on the classpath (consult the Coherence documentation for an explanation of the default behaviour).">通常、これはクラスパスで最初に見つかった<code>tangosol-coherence-override.xml</code>の最初の出現を使用します(デフォルトの動作の説明については<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/develop-applications/understanding-configuration.html#GUID-360B798E-2120-44A9-8B09-1FDD9AB40EB5" id="" target="_blank" >「Coherenceドキュメント」</a>を参照してください)。</span> </p>

<p><span class="merged" id="all.H4TZe" title="原文 : To set a specific operational configuration file to use set the spec.coherence.overrideConfig field, for example:">使用する特定の操作構成ファイルを設定するには、<code>spec.coherence.overrideConfig</code>フィールドを設定します。次に例を示します:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    overrideConfig: test-override.xml <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.AVOfl" title="原文 : The spec.coherence.overrideConfig field has been set to test-override.xml which will effectively pass -Dcoherence.override=test-override.xml to the JVM command line."><code>spec.coherence.overrideConfig</code>フィールドが<code>test-override.xml</code>に設定されており、<code>-Dcoherence.override=test-override.xml</code>をJVMコマンドラインに効果的に渡します。</span></li>
</ul>
</div>
</doc-view>
