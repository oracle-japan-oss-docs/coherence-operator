<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_garbage_collector_settings"><span class="merged" id="all.44Bi2x" title="原文 : Garbage Collector Settings">ガベージ・コレクタ設定</span></h2>
<div class="section">
<p><span class="merged" id="all.labfc.spl1" title="原文 : The Coherence CRD has fields in the jvm.gc section to allow certain garbage collection parameters to be set."><code>Coherence</code> CRDには、特定のガベージ・コレクション・パラメータを設定できるように、<code>jvm.gc</code>セクションのフィールドがあります。</span> <span class="merged" id="all.labfc.spl2" title="原文 : These include GC logging, setting the collector to use and arbitrary GC arguments.">これには、GCロギング、使用するコレクタの設定、任意のGC引数が含まれます。</span> </p>


<h3 id="_enable_gc_logging"><span class="merged" id="all.3MlOED" title="原文 : Enable GC Logging">GCロギングの有効化</span></h3>
<div class="section">
<p><span class="merged" id="all.2XOnk7.spl1" title="原文 : To enable GC logging set the jvm.gc.logging field to true.">GCロギングを有効にするには、<code>jvm.gc.logging</code>フィールドを<code>true</code>に設定します。</span> <span class="merged" id="all.2XOnk7.spl2"  title="原文:: For example:">次に例を示します。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    gc:
      logging: true</markup>

<p><span class="merged" id="all.4QiHGC" title="原文 : Setting the field to true adds the following JVM arguments to the JVM in the coherence container:">このフィールドをtrueに設定すると、<code>coherence</code>コンテナのJVMに次のJVM引数が追加されます:</span></p>

<div class="listing">
<markup>-verbose:gc
-XX:+PrintGCDetails
-XX:+PrintGCTimeStamps
-XX:+PrintHeapAtGC
-XX:+PrintTenuringDistribution
-XX:+PrintGCApplicationStoppedTime
-XX:+PrintGCApplicationConcurrentTime</markup>
</div>

<p><span class="merged" id="all.N7jHg" title="原文 : If different GC logging arguments are required then the relevant JVM arguments can be added to either the jvm.args field or the jvm.gc.args field.">異なるGCロギング引数が必要な場合は、関連するJVM引数を<code>jvm.args</code>フィールドまたは<code>jvm.gc.args</code>フィールドに追加できます。</span></p>

</div>

<h3 id="_set_the_garbage_collector"><span class="merged" id="all.1pGagy" title="原文 : Set the Garbage Collector">ガベージ・コレクタの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3nXbHf.spl1" title="原文 : The garbage collector to use can be set using the jvm.gc.collector field.">使用するガベージ・コレクタは、<code>jvm.gc.collector</code>フィールドを使用して設定できます。</span> <span class="merged" id="all.3nXbHf.spl2" title="原文 : This field can be set to either G1, CMS or Parallel (the field is case-insensitive, invalid values will be silently ignored).">このフィールドは、<code>G1</code>、<code>CMS</code>または<code>Parallel</code>のいずれかに設定できます(フィールドでは大文字と小文字は区別されず、無効な値はサイレントに無視されます)。</span> <span class="merged" id="all.3nXbHf.spl3" title="原文 : The default collector set, if none has been specified, will be G1.">デフォルト・コレクタ・セットが指定されていない場合、<code>G1</code>になります。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.35CVhz"  title="原文:: Parameter">パラメータ</span></td>
<td class=""><span class="merged" id="all.2AIuAZ" title="原文 : JVM Argument Set">JVM引数セット</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3PJKMS"  title="原文: G1"><code>G1</code></span></td>
<td class=""><span class="merged" id="all.2pUuyu"  title="原文: -XX:+UseG1GC"><code>-XX:+UseG1GC</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4bfWZ"  title="原文: CMS"><code>CMS</code></span></td>
<td class=""><span class="merged" id="all.3xE9Mc"  title="原文: -XX:+UseConcMarkSweepGC"><code>-XX:+UseConcMarkSweepGC</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4cQruq"  title="原文: Parallel"><code>Parallel</code></span></td>
<td class=""><span class="merged" id="all.4r7vY"  title="原文: -XX:+UseParallelGC"><code>-XX:+UseParallelGC</code></span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.6vDv5.7"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    gc:
      collector: "G1"</markup>

<p><span class="merged" id="all.2t2vAb" title="原文 : The example above will add -XX:+UseG1GC to the command line.">前述の例では、コマンドラインに<code>-XX:+UseG1GC</code>が追加されます。</span></p>

</div>

<h3 id="_adding_arbitrary_gc_args"><span class="merged" id="all.4MXs9C" title="原文 : Adding Arbitrary GC Args">任意GC引数の追加</span></h3>
<div class="section">
<p><span class="merged" id="all.4MXJ7R.spl1" title="原文 : Any arbitrary GC argument can be added to the jvm.gc.args field.">任意のGC引数を<code>jvm.gc.args</code>フィールドに追加できます。</span> <span class="merged" id="all.4MXJ7R.spl2" title="原文 : These arguments will be passed verbatim to the JVM command line.">これらの引数は、JVMコマンドラインに動詞で渡されます。</span> </p>

<p><span class="merged" id="all.6vDv5.8"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    gc:
      args:
        - "-XX:MaxGCPauseMillis=200"</markup>

<p><span class="merged" id="all.3Z0p4L" title="原文 : In the example above the -XX:MaxGCPauseMillis=200 JVM argument will be added to the command line.">上の例では、<code>-XX:MaxGCPauseMillis=200</code> JVM引数がコマンドラインに追加されます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.44DkDc.spl1" title="原文 : The jvm.gc.args field will add the provided arguments to the end of the command line exactly as they are in the args list."><code>jvm.gc.args</code>フィールドは、指定された引数を引数リストの末尾とまったく同様にコマンド行に追加します。</span> <span class="merged" id="all.44DkDc.spl2" title="原文 : This field provides the same functionality as JVM Args but sometimes it might be useful to be able to separate the two gorups of arguments in the CRD spec.">このフィールドは、<router-link to="/jvm/030_jvm_args">「JVM引数」</router-link>と同じ機能を提供しますが、CRD仕様で2つの引数の足しを分離できると便利な場合があります。</span> </p>
</div>
</div>
</div>
</doc-view>
