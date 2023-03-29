<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_set_the_coherence_log_level"><span class="merged" id="all.ehMGR" title="原文 : Set the Coherence Log Level">Coherenceログ・レベルの設定</span></h2>
<div class="section">
<p><span class="merged" id="all.sY462.spl1" title="原文 : Logging granularity in Coherence is controlled by a log level, that is a number between one and nine, where the higher the number the more debug logging is produced.">Coherenceでのロギング粒度は、ログ・レベルで制御されます。ログ・レベルは1から9までの数値で、デバッグ・ロギングが生成される数が多くなります。</span> <span class="merged" id="all.sY462.spl2" title="原文 : The Coherence CRD has a field spec.coherence.logLevel that allows the log level to be configured by setting the coherence.log.level system property."><code>Coherence</code> CRDには、<code>coherence.log.level</code>システム・プロパティを設定してログ・レベルを構成できるフィールド<code>spec.coherence.logLevel</code>があります。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    logLevel: 9  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3OtG7g" title="原文 : The Coherence spec sets the log level to 9, effectively passing -Dcoherence.log.level=9 to the Coherence JVM&rsquo;s command line."><code>Coherence</code>スペックは、ログ・レベルを9に設定し、事実上、<code>-Dcoherence.log.level=9</code>をCoherence JVMのコマンドラインに渡します。</span></li>
</ul>
</div>
</doc-view>
