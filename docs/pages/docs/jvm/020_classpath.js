<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_set_the_classpath"><span class="merged" id="all.3SIT9A"  title="原文:: Set the Classpath">クラスパスの設定</span></h2>
<div class="section">
<p><span class="merged" id="all.3urvuD.spl1" title="原文 : The Coherence container in the Pods in a Coherence resource deployment runs a Java application and as such requires a classpath with at a minimum coherence.jar."><code>Coherence</code>リソース・デプロイメントの<code>Pods</code>のCoherenceコンテナではJavaアプリケーションが実行されるため、少なくとも<code>coherence.jar</code>を含むクラスパスが必要です。</span> <span class="merged" id="all.3urvuD.spl2" title="原文 : There are certain defaults that the Operator will use to work out the classpath to use but additional classpath elements can be provided to the configuration.">使用するクラスパスを処理するためにオペレータが使用する特定のデフォルトがありますが、追加のクラスパス要素を構成に指定できます。</span> </p>


<h3 id="_the_classpath_environment_variable"><span class="merged" id="all.15yb29" title="原文 : The CLASSPATH Environment Variable"><code>CLASSPATH</code>環境変数</span></h3>
<div class="section">
<p><span class="merged" id="all.1a3CR2" title="原文 : If the image to be run has the CLASSPATH environment variable set this will be used as part of the classpath.">実行するイメージに<code>CLASSPATH</code>環境変数が設定されている場合、これはクラスパスの一部として使用されます。</span></p>

</div>

<h3 id="_the_coherence_home_environment_variable"><span class="merged" id="all.1V9Z9n" title="原文 : The COHERENCE_HOME Environment Variable"><code>COHERENCE_HOME</code>環境変数</span></h3>
<div class="section">
<p><span class="merged" id="all.27EgHy" title="原文 : If the image to be run has the COHERENCE_HOME environment variable set this will be used to add the following elements to the classpath:">実行するイメージに<code>COHERENCE_HOME</code>環境変数が設定されている場合、これを使用して次の要素をクラスパスに追加します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1yIpOq.1"  title="原文: $COHERENCE_HOME/lib/coherence.jar"><code>$COHERENCE_HOME/lib/coherence.jar</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3mPXR1.1"  title="原文: $COHERENCE_HOME/conf"><code>$COHERENCE_HOME/conf</code></span></p>

</li>
</ul>
<p><span class="merged" id="all.1zTWUE.spl1" title="原文 : These will be added to the end of the classpath.">これらはクラスパスの最後に追加されます。</span> <span class="merged" id="all.1zTWUE.spl2" title="原文 : For example in an image that has CLASSPATH=/home/root/lib/* and COHERENCE_HOME set to /oracle/coherence the effective classpath used will be:">たとえば、<code>CLASSPATH=/home/root/lib/*</code>および<code>COHERENCE_HOME</code>が<code>/oracle/coherence</code>に設定されているイメージでは、使用される有効なクラスパスは次のようになります:</span> </p>

<markup>/home/root/lib/*:/oracle/coherence/lib/coherence.jar:/oracle/coherence/conf</markup>
</div>

<h3 id="_jib_image_classpath"><span class="merged" id="all.4tS1i" title="原文 : JIB Image Classpath">JIBイメージ・クラスパス</span></h3>
<div class="section">
<p><span class="merged" id="all.2PDwuP.spl1" title="原文 : A simple way to build Java images is using JIB.">Javaイメージを作成する簡単な方法は、<a href="https://github.com/GoogleContainerTools/jib/blob/master/README.md" id="" target="_blank" >JIB</a>を使用することです。</span> <span class="merged" id="all.2PDwuP.spl2" title="原文 : When JIB was with its Maven or Gradle plugin to produce an image it packages the application’s dependencies, classes and resources into a set of well-known locations:">JIBがMavenまたはGradleプラグインとともにイメージを生成すると、アプリケーションの依存関係、クラスおよびリソースが既知のロケーションのセットにパッケージ化されます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1VXxSi" title="原文 : /app/libs/ - the jar files that the application depends on"><code>/app/libs/</code> - アプリケーションが依存するjarファイル</span></p>

</li>
<li>
<p><span class="merged" id="all.2JjETY" title="原文 : /app/classes - the application’s class files"><code>/app/classes</code> - アプリケーション・クラス・ファイル</span></p>

</li>
<li>
<p><span class="merged" id="all.2BF5Zd" title="原文 : /app/resources - the application’s other resources"><code>/app/resources</code> - アプリケーションその他のリソース</span></p>

</li>
</ul>
<p><span class="merged" id="all.4ZpaOi.spl1" title="原文 : By default, the Operator will add these locations to the classpath.">デフォルトでは、オペレータはこれらのロケーションをクラスパスに追加します。</span> <span class="merged" id="all.4ZpaOi.spl2" title="原文 : These classpath elements will be added before any value set by the CLASSPATH or COHERENCE_HOME environment variables.">これらのクラスパス要素は、<code>CLASSPATH</code>または<code>COHERENCE_HOME</code>環境変数で設定された値の前に追加されます。</span> </p>

<p><span class="merged" id="all.2ip9xf" title="原文 : For example in an image that has CLASSPATH=/home/root/lib/\* and COHERENCE_HOME set to /oracle/coherence the effective classpath used will be:">たとえば、<code>CLASSPATH=/home/root/lib/\*</code>および<code>COHERENCE_HOME</code>が<code>/oracle/coherence</code>に設定されているイメージでは、使用される有効なクラスパスは次のようになります:</span></p>

<markup>/app/libs/*:/app/classes:/app/resources:/home/root/lib/*:/oracle/coherence/lib/coherence.jar:/oracle/coherence/conf</markup>

<h4 id="_exclude_the_jib_classpath"><span class="merged" id="all.17NT2M" title="原文 : Exclude the JIB Classpath">JIBクラスパスの除外</span></h4>
<div class="section">
<p><span class="merged" id="all.41MpOa.spl1" title="原文 : If the image is not a JIB image there could be occasions when automatically adding /app/libs/*:/app/classes:/app/resources to the classpath causes issues, for example one or more of those locations exists with files in that should not be on the classpath.">イメージがJIBイメージではない場合、<code>/app/libs/*:/app/classes:/app/resources</code>をクラスパスに自動的に追加すると問題が発生する可能性があります。たとえば、それらのロケーションのうち1つ以上がクラスパスに存在しないファイルに存在します。</span> <span class="merged" id="all.41MpOa.spl2" title="原文 : In this case the Coherence CRD spec has a field to specify that the JIB classpath should not be used.">この場合、<code>Coherence</code> CRD仕様には、JIBクラスパスを使用しないように指定するフィールドがあります。</span> </p>

<p><span class="merged" id="all.24BHNi" title="原文 : The spec.jvm.useJibClasspath field can be set to false to exclude the JIB directories from the classpath (the default value is true)."><code>spec.jvm.useJibClasspath</code>フィールドを<code>false</code>に設定して、JIBディレクトリをクラスパスから除外できます(デフォルト値は<code>true</code>です)。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    useJibClasspath: false  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4U1JGw.spl1" title="原文 : The useJibClasspath is set to false."><code>useJibClasspath</code>は<code>false</code>に設定されます。</span> <span class="merged" id="all.4U1JGw.spl2" title="原文 : Even if any of the /app/resources, /app/classes or /app/libs/ directories exist in the image they will not be added to the classpath."><code>/app/resources</code>、<code>/app/classes</code>または<code>/app/libs/</code>ディレクトリのいずれかがイメージに存在する場合でも、それらはクラスパスに追加されません。</span> </li>
</ul>
</div>
</div>

<h3 id="_additional_classpath_elements"><span class="merged" id="all.1JFvPu" title="原文 : Additional Classpath Elements">その他のクラスパス要素</span></h3>
<div class="section">
<p><span class="merged" id="all.1AefZS.spl1" title="原文 : If an image will be used that has artifacts in locations other than the defaults discussed above then it is possible to specify additional elements to be added to the classpath.">前述のデフォルト以外のロケーションにアーティファクトを含むイメージを使用する場合は、クラスパスに追加する追加要素を指定できます。</span> <span class="merged" id="all.1AefZS.spl2" title="原文 : The jvm.classpath field in the Coherence CRD spec allows a list of extra classpath values to be provided."><code>Coherence</code> CRD仕様の<code>jvm.classpath</code>フィールドを使用すると、追加のクラスパス値のリストを指定できます。</span> <span class="merged" id="all.1AefZS.spl3" title="原文 : These elements will be added after the JIB classpath described above.">これらの要素は、前述のJIBクラスパスの<em>「後に」</em>追加されます。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    classpath:          <span class="conum" data-value="1" />
      - "/data/lib/*"
      - "/data/config"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1FxRUC.spl1" title="原文 : The classpath field adds /data/lib/* and /data/config to the classpath."><code>classpath</code>フィールドは、クラスパスに<code>/data/lib/*</code>および<code>/data/config</code>を追加します。</span> <span class="merged" id="all.1FxRUC.spl2" title="原文 : In an image without the CLASSPATH or COHERENCE_HOME environment variables the effective classpath would be:"><code>CLASSPATH</code>または<code>COHERENCE_HOME</code>環境変数がないイメージでは、有効なクラスパスは次のようになります:</span> </li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.188Brm.spl1" title="原文 : There is no validation of the elements of the classpath.">クラスパスの要素のバリデーションはありません。</span> <span class="merged" id="all.188Brm.spl2" title="原文 : The elements will not be verified to ensure that the locations exist.">エレメントは、ロケーションが存在することを確認しません。</span> <span class="merged" id="all.188Brm.spl3" title="原文 : As long as they are valid values to be used in a JVM classpath they will be accepted.">JVMクラスパスで使用される有効な値であるかぎり、それらは受け入れられます。</span> </p>
</div>
</div>
</div>

<h2 id="_environment_variable_expansion"><span class="merged" id="all.vMSX8.1" title="原文 : Environment Variable Expansion">環境変数の拡張</span></h2>
<div class="section">
<p><span class="merged" id="all.3R3W68.spl1" title="原文 : The Operator supports environment variable expansion in classpath entries.">オペレータは、クラスパス・エントリでの環境変数拡張をサポートします。</span> <span class="merged" id="all.3R3W68.spl2" title="原文 : The runner in the Coherence container will replace ${var} or $var in classpath entries with the corresponding environment variable name.">Coherenceコンテナ内のランナーは、クラスパス・エントリの<code>${var}</code>または<code>$var</code>を、対応する環境変数名に置き換えます。</span> </p>

<p><span class="merged" id="all.1VCwQ4" title="原文 : For example if a container has an environment variable of APP_HOME set to /myapp then it could be used in the classpath like this:">たとえば、コンテナの環境変数<code>APP_HOME</code>が<code>/myapp</code>に設定されている場合、次のようにクラスパスで使用できます:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    classpath:
      - "${APP_HOME}/lib/*"  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1eFLqp" title="原文 : The actual classpath entry at runtime will resolve to /myapp/lib/*">実行時の実際のクラスパス・エントリは、<code>/myapp/lib/*</code>に解決されます</span></li>
</ul>
<p><span class="merged" id="all.yCF5D.1" title="原文 : Any environment variable that is present when the Coherence container starts can be used, this would include variables created as part of the image and variables specified in the Coherence yaml.">Coherenceコンテナの起動時に存在するすべての環境変数を使用できます。これには、イメージの一部として作成された変数およびCoherence yamlで指定された変数が含まれます。</span></p>

</div>
</doc-view>
