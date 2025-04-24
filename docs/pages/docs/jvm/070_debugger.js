<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_debugger_configuration"><span class="merged" id="all.ZtmYV" title="原文 : Debugger Configuration">デバッガ構成</span></h2>
<div class="section">
<p><span class="merged" id="all.VLpWs.spl1" title="原文 : Occasionally it is useful to be able to connect a debugger to a JVM, and the Coherence CRD spec has fields to configure the Coherence container’s JVM to work with a debugger.">時折、デバッガをJVMに接続でき、<code>Coherence</code> CRD仕様には、CoherenceコンテナのJVMをデバッガと連携するように構成するフィールドがあります。</span> <span class="merged" id="all.VLpWs.spl2" title="原文 : The fields in the CRD will ultimately result in arguments being passed to the JVM and could have been added as plain JVM arguments, but having specific fields in the CRD makes it simpler to configure and the intention more obvious.">CRDのフィールドは最終的にJVMに渡され、プレーンJVM引数として追加される可能性もありますが、CRDの特定のフィールドを使用すると、構成が簡単になり、意図がより明確になります。</span> </p>

<p><span class="merged" id="all.3iR8wh" title="原文 : The fields to control debug settings of the JVM are in the jvm.debug section of the CRD spec.">JVMのデバッグ設定を制御するフィールドは、CRD仕様の<code>jvm.debug</code>セクションにあります。</span></p>


<h3 id="_listening_for_a_debugger_connection"><span class="merged" id="all.mfHpe" title="原文 : Listening for a Debugger Connection">デバッガ接続のリスニング</span></h3>
<div class="section">
<p><span class="merged" id="all.3WeN5n" title="原文 : One scenario for debugging is for the Coherence JVM to open a port and listen for a debugger connection request.">デバッグのシナリオの1つは、Coherence JVMがポートを開き、デバッガ接続リクエストをリスニングすることです。</span></p>

<p><span class="merged" id="all.6vDv5.14"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    debug:
      enabled: true   <span class="conum" data-value="1" />
      port: 5005      <span class="conum" data-value="2" />
      suspend: false  <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2ZbVGH" title="原文 : The jvm.debug.enabled flag is set to true to enable debug mode.">デバッグ・モードを有効にするには、<code>jvm.debug.enabled</code>フラグが<code>true</code>に設定されます。</span></li>
<li data-value="2"><span class="merged" id="all.ucYn" title="原文 : The jvm.debug.port field specifies the port the JVM will listen on for a debugger connection."><code>jvm.debug.port</code>フィールドは、JVMがデバッガ接続をリスニングするポートを指定します。</span></li>
<li data-value="3"><span class="merged" id="all.3CcnBW" title="原文 : The jvm.debug.suspend flag is set to false so that the JVM will start without waiting for a debugger to connect."><code>jvm.debug.suspend</code>フラグは<code>false</code>に設定されているため、JVMはデバッガの接続を待機せずに起動されます。</span></li>
</ul>
<p><span class="merged" id="all.4Au2NG" title="原文 : The example above results in the following arguments being passed to the JVM:">前述の例では、次の引数がJVMに渡されます:</span></p>

<markup


>-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2PPdt7" title="原文 : The address=*:5005 value comes from the jvm.debug.port field"><code>address=*:5005</code>値は<code>jvm.debug.port</code>フィールドから取得されます</span></p>

</li>
<li>
<p><span class="merged" id="all.4eb3FK" title="原文 : The suspend=n value comes from the jvm.debug.suspend field"><code>suspend=n</code>値は<code>jvm.debug.suspend</code>フィールドから取得されます</span></p>

</li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.308bNt" title="原文 : If the jvm.debug.port is not specified the default value used by the Operator will be 5005."><code>jvm.debug.port</code>が指定されていない場合、オペレータで使用されるデフォルト値は<code>5005</code>になります。</span></p>
</div>
</div>

<h3 id="_attaching_to_a_debugger_connection"><span class="merged" id="all.1aT1VC" title="原文 : Attaching to a Debugger Connection">デバッガ接続へのアタッチ</span></h3>
<div class="section">
<p><span class="merged" id="all.3MPG4u" title="原文 : Another scenario for debugging is for the Coherence JVM to connect out to a listening debugger.">デバッグのもう1つのシナリオは、Coherence JVMがリスニング・デバッガに接続することです。</span></p>

<p><span class="merged" id="all.6vDv5.15"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    debug:
      enabled: true               <span class="conum" data-value="1" />
      attach:  "10.10.100.2:5000" <span class="conum" data-value="2" />
      suspend: false              <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2ZbVGH.1" title="原文 : The jvm.debug.enabled flag is set to true to enable debug mode.">デバッグ・モードを有効にするには、<code>jvm.debug.enabled</code>フラグが<code>true</code>に設定されます。</span></li>
<li data-value="2"><span class="merged" id="all.3wJbmo" title="原文 : The jvm.debug.attach field specifies the address of the debugger that the JVM will connect to."><code>jvm.debug.attach</code>フィールドは、JVMが接続するデバッガのアドレスを指定します。</span></li>
<li data-value="3"><span class="merged" id="all.3CcnBW.1" title="原文 : The jvm.debug.suspend flag is set to false so that the JVM will start without waiting for a debugger to connect."><code>jvm.debug.suspend</code>フラグは<code>false</code>に設定されているため、JVMはデバッガの接続を待機せずに起動されます。</span></li>
</ul>
<p><span class="merged" id="all.4Au2NG.1" title="原文 : The example above results in the following arguments being passed to the JVM:">前述の例では、次の引数がJVMに渡されます:</span></p>

<markup


>-agentlib:jdwp=transport=dt_socket,server=n,address=10.10.100.2:5000,suspend=n,timeout=10000</markup>

</div>
</div>
</doc-view>
