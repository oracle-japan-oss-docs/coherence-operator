<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_build_custom_application_images"><span class="merged" id="all.MBCh1" title="原文 : Build Custom Application Images">カスタム・アプリケーション・イメージの構築</span></h2>
<div class="section">
<p><span class="merged" id="all.1cyJef.spl1" title="原文 : To deploy a Coherence application using the operator the application code must be packaged into an image that the Coherence container in the Pods will run.">オペレータを使用してCoherenceアプリケーションをデプロイするには、PodsのCoherenceコンテナを実行するイメージにアプリケーション・コードをパッケージ化する必要があります。</span> <span class="merged" id="all.1cyJef.spl2" title="原文 : This image can be any image that contains a JVM as well as the application&rsquo;s jar files, including obviously coherence.jar.">このイメージは、明らかに<code>coherence.jar</code>を含めて、JVMおよびアプリケーションのjarファイルを含む任意のイメージにできます。</span> </p>

<p><span class="merged" id="all.3290gQ.spl1" title="原文 : There are many ways to build an image for a Java application so it would be of little value to document the exact steps for one of them here that might turn out to be used by very few people.">Javaアプリケーションのためのイメージを作成する方法は数多くあるため、ここではそのうちの1つについて厳密なステップを文書化したもので、非常に少数の人々が使用できるようになる可能性があります。</span> <span class="merged" id="all.3290gQ.spl2" title="原文 : One of the simplest ways to build a Java image is to use JIB.">Javaイメージを作成する最も簡単な方法の1つは、<a href="https://github.com/GoogleContainerTools/jib/blob/master/README.md" id="" target="_blank" >JIB</a>を使用することです。</span> <span class="merged" id="all.3290gQ.spl3" title="原文 : The Operator supports JIB images automatically but any image that meets the requirements of having a JVM and coherence.jar will be supported.">オペレータはJIBイメージを自動的にサポートしますが、JVMと<code>coherence.jar</code>の要件を満たすイメージがサポートされます。</span> <span class="merged" id="all.3290gQ.spl4" title="原文 : Any version of Java which works with the version of coherence.jar in the image will be suitable.">イメージ内の<code>coherence.jar</code>のバージョンで動作するJavaのバージョンが適しています。</span> <span class="merged" id="all.3290gQ.spl5" title="原文 : This can be a JRE, it does not need to be a full JDK.">これはJREにすることができますが、完全なJDKである必要はありません。</span> </p>

<p><span class="merged" id="all.3heTsC" title="原文 : At a bare minimum the directories in an image might look like this example (obviously there would be more O/S related files and more JVM files, but they are not relevant for the example):">少なくとも、イメージ内のディレクトリは、この例のように見える場合があります(当然、O/S関連ファイルとJVMファイルの数が増えますが、例に関連していません):</span></p>

<markup


>/
|-- app
|    |-- libs                      <span class="conum" data-value="1" />
|         |-- application.jar
|         |-- coherence.jar
|-- usr
     |-- bin
     |    |-- java                 <span class="conum" data-value="2" />
     |
     |-- lib
          |-- jvm
               |-- java-11-openjdk <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.CEu5O.spl1" title="原文 : The /app/libs directory contains the application jar files."><code>/app/libs</code>ディレクトリには、アプリケーションjarファイルが含まれています。</span> <span class="merged" id="all.CEu5O.spl2" title="原文 : This will be the classpath used to run the application.">これは、アプリケーションの実行に使用されるクラスパスになります。</span> </li>
<li data-value="2"><span class="merged" id="all.1Mqeii" title="原文 : The /usr/bin/java file is the Java executable and on the PATH in the image (this would be a link to the actual Java executable location, in this example to /usr/lib/jvm/java-11-openjdk/bin/java."><code>/usr/bin/java</code>ファイルはJava実行可能ファイルであり、イメージ内の<code>PATH</code>(これは実際のJava実行可能ファイルのロケーションへのリンクです。この例では<code>/usr/lib/jvm/java-11-openjdk/bin/java</code>へのリンクです)。</span></li>
<li data-value="3"><span class="merged" id="all.3Jk5GK" title="原文 : The /usr/lib/jvm/java-11-openjdk/ is the actual JVM install location."><code>/usr/lib/jvm/java-11-openjdk/</code>は、実際のJVMインストールのロケーションです。</span></li>
</ul>

<h3 id="_image_entrypoint_what_does_the_operator_run"><span class="merged" id="all.48xxpU" title="原文 : Image EntryPoint - What Does the Operator Run?">イメージ<code>EntryPoint</code> - オペレータの実行内容</span></h3>
<div class="section">
<p><span class="merged" id="all.49vxHw.spl1" title="原文 : The image does not need to have an EntryPoint or command specified, it does not need to actually be executable.">イメージに<code>EntryPoint</code>またはコマンドを指定する必要はありません。実際には実行可能である必要はありません。</span> <span class="merged" id="all.49vxHw.spl2" title="原文 : If the image does have an EntryPoint, it will just be ignored.">イメージに<code>EntryPoint</code>がある場合、無視されます。</span> </p>

<p><span class="merged" id="all.4as2FL.spl1" title="原文 : The Coherence Operator actually injects its own runner executable into the container which the container runs and which in turn builds the Java command line to execute.">Coherence Operatorは、実際に独自の<code>runner</code>実行可能ファイルをコンテナが実行するコンテナにインジェクトし、次に実行するJavaコマンドラインを構築します。</span> <span class="merged" id="all.4as2FL.spl2" title="原文 : The runner process looks at arguments and environment variables configured for the Coherence container and from these constructs a Java command line that it then executes."><code>runner</code>プロセスでは、Coherenceコンテナ用に構成された引数および環境変数が参照され、これらから実行されるJavaコマンドラインが作成されます。</span> </p>

<p><span class="merged" id="all.2xnwEE" title="原文 : The default command might look something like this:">デフォルト・コマンドは次のようになります:</span></p>

<markup
lang="bash"

>java -cp `/app/resources:/app/classes:/app/libs/*` \
    &lt;JVM args&gt; \
    &lt;System Properties&gt; \
    com.tangosol.net.DefaultCacheServer</markup>

<p><span class="merged" id="all.44SZnA.spl1" title="原文 : The runner will work out the JVM&rsquo;s classpath, args and system properties to add to the command line and execute the main class com.tangosol.net.DefaultCacheServer."><code>runner</code>は、JVMのクラスパス、引数およびシステム・プロパティを調べて、コマンドラインに追加し、メイン・クラス<code>com.tangosol.net.DefaultCacheServer</code>を実行します。</span> <span class="merged" id="all.44SZnA.spl2" title="原文 : All these are configurable in the Coherence resource spec.">これらはすべて、<code>Coherence</code>リソース仕様で構成できます。</span> </p>

</div>

<h3 id="_optional_classpath_environment_variable"><span class="merged" id="all.1rgvvl" title="原文 : Optional CLASSPATH Environment Variable">オプションの<code>CLASSPATH</code>環境変数</span></h3>
<div class="section">
<p><span class="merged" id="all.4ZbjFF.spl1" title="原文 : If the CLASSPATH environment variable has been set in an image that classpath will be used when running the Coherence container.">イメージに<code>CLASSPATH</code>環境変数が設定されている場合は、Coherenceコンテナの実行時にクラスパスが使用されます。</span> <span class="merged" id="all.4ZbjFF.spl2" title="原文 : Other elements may also be added to the classpath depending on the configuration of the Coherence resource."><code>Coherence</code>リソースの構成に応じて、その他の要素をクラスパスに追加することもできます。</span> </p>

</div>

<h3 id="_setting_the_classpath"><span class="merged" id="all.2zuzRh"  title="原文:: Setting the Classpath"> クラスパスの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3ysQnM.spl1" title="原文 : An application image contains .jar files (at least coherence.jar), possibly Java class files, also possibly other ad-hoc files, all of which need to be on the application&rsquo;s classpath.">アプリケーション・イメージには、<code>.jar</code>ファイル(<code>coherence.jar</code>以上)、場合によってはJavaクラス・ファイル(他の非定型ファイルもあり、すべてアプリケーションのクラスパスに存在する必要があります。</span> <span class="merged" id="all.3ysQnM.spl2" title="原文 : There are certain classpath values that the operator supports out of the box without needing any extra configuration, but for occasions where the location of files in the image does not match the defaults a classpath can be specified.">追加の構成を必要とせずに、オペレータがサポートするクラスパス値がいくつかありますが、イメージ内のファイルのロケーションがデフォルトと一致しない場合、クラスパスを指定できます。</span> </p>

<p><span class="merged" id="all.3nBuQp.spl1" title="原文 : Images built with JIB have a default classpath of /app/resources:/app/classes:/app/libs/*."><a href="https://github.com/GoogleContainerTools/jib/blob/master/README.md" id="" target="_blank" >JIB</a>で作成されたイメージには、デフォルトのクラスパス<code>/app/resources:/app/classes:/app/libs/*</code>があります。</span> <span class="merged" id="all.3nBuQp.spl2" title="原文 : When the Coherence container starts if the directories /app/resources, /app/classes or /app/libs/ exist in the image they will automatically be added to the classpath of the JVM.">Coherenceコンテナが起動すると、ディレクトリ<code>/app/resources</code>、<code>/app/classes</code>または<code>/app/libs/</code>がイメージ内に存在すると、JVMのクラスパスに自動的に追加されます。</span> <span class="merged" id="all.3nBuQp.spl3" title="原文 : In this way the Operator supports standard JIB images without requiring additional configuration.">これにより、オペレータは、追加の構成を必要とせずに標準のJIBイメージをサポートします。</span> </p>

<p><span class="merged" id="all.4HFhcU.spl1" title="原文 : If the image is not a JIB image, or is a JIB image without the standard classpath but one or more of the /app/resources, /app/classes or /app/libs/ directories exist they will still be added to the classpath.">イメージがJIBイメージでないか、標準クラスパスのないJIBイメージですが、1つ以上の<code>/app/resources</code>、<code>/app/classes</code>または<code>/app/libs/</code>ディレクトリが存在する場合は、引き続きクラスパスに追加されます。</span> <span class="merged" id="all.4HFhcU.spl2" title="原文 : This may be desired or in some cases it may cause issues.">これは必要になるか、場合によっては問題が発生する可能性があります。</span> <span class="merged" id="all.4HFhcU.spl3" title="原文 : It is possible to disable automatically adding these directories in the Coherence resource spec by setting the jvm.useJibClasspath field to false (the default value of the field is true)."><code>jvm.useJibClasspath</code>フィールドを<code>false</code>に設定して、これらのディレクトリを<code>Coherence</code>リソース仕様に自動的に追加しないようにできます(フィールドのデフォルト値は<code>true</code>です)。</span> </p>

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
<li data-value="1"><span class="merged" id="all.3zBAq4.spl1" title="原文 : The useJibClasspath is set to false."><code>useJibClasspath</code>は<code>false</code>に設定されます。</span> <span class="merged" id="all.3zBAq4.spl2" title="原文 : Even if any of the the /app/resources, /app/classes or /app/libs/ directories exist in the image they will not be added to the classpath.">イメージに<code>/app/resources</code>、<code>/app/classes</code>または<code>/app/libs/</code>ディレクトリが存在していても、クラスパスに追加されません。</span> </li>
</ul>
<p><span class="merged" id="all.2EKs0a" title="原文 : If the image is not a JIB image, or is a JIB image without the standard classpath, then additional classpath entries can be configured as described in the setting the classpath documentation.">イメージがJIBイメージでないか、標準クラスパスのないJIBイメージである場合、<router-link to="/jvm/020_classpath">「クラスパスの設定」</router-link>ドキュメントの説明に従って追加のクラスパス・エントリを構成できます。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    classpath:          <span class="conum" data-value="1" />
      - "/data/libs/*"  <span class="conum" data-value="2" />
      - "/data/config"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3dFoH3" title="原文 : The jvm.classpath field will be used to add additional items to the classpath, the field is a list of strings."><code>jvm.classpath</code>フィールドは、クラスパスにアイテムを追加するために使用されます。フィールドは文字列のリストです。</span></li>
<li data-value="2"><span class="merged" id="all.2wGZ6R" title="原文 : Each entry in the jvm.classpath will be appended to the classpath exactly as it is declared, so in this case the classpath will be /data/libs/*:/data/config"><code>jvm.classpath</code>の各エントリは、宣言とまったく同様にクラスパスに追加されます。この場合、クラスパスは<code>/data/libs/*:/data/config</code>になります</span></li>
</ul>
</div>

<h3 id="_optional_java_home_environment_variable"><span class="merged" id="all.vGb29" title="原文 : Optional JAVA_HOME Environment Variable">オプションの<code>JAVA_HOME</code>環境変数</span></h3>
<div class="section">
<p><span class="merged" id="all.LJQPG.spl1" title="原文 : The JAVA_HOME environment variable does not have to be set in the image."><code>JAVA_HOME</code>環境変数はイメージで設定する必要はありません。</span> <span class="merged" id="all.LJQPG.spl2" title="原文 : If it is set the JVM at that location will be used to run the application.">設定されている場合、そのロケーションでJVMを使用してアプリケーションを実行します。</span> <span class="merged" id="all.LJQPG.spl3" title="原文 : If it is not set then the java executable must be on the PATH in the image.">設定されていない場合、<code>java</code>実行可能ファイルはイメージの<code>PATH</code>にある必要があります。</span> </p>

</div>

<h3 id="_optional_coherence_home_environment_variable"><span class="merged" id="all.4NQubX" title="原文 : Optional COHERENCE_HOME Environment Variable">オプションの<code>COHERENCE_HOME</code>環境変数</span></h3>
<div class="section">
<p><span class="merged" id="all.1moyaG.spl1" title="原文 : The COHERENCE_HOME environment variable does not have to be set in an image."><code>COHERENCE_HOME</code>環境変数はイメージで設定する必要はありません。</span> <span class="merged" id="all.1moyaG.spl2" title="原文 : Typically, all the jar files, including coherence.jar would be packaged into a single directory which is then used as the classpath.">通常、<code>coherence.jar</code>を含むすべてのjarファイルは、1つのディレクトリにパッケージ化され、その後クラスパスとして使用されます。</span> <span class="merged" id="all.1moyaG.spl3" title="原文 : It is possible to run official Coherence images published by Oracle, which have COHERENCE_HOME set, which is then used by the Operator to set the classpath."><code>COHERENCE_HOME</code>が設定されているOracleによって公開された公式のCoherenceイメージを実行できます。このイメージは、オペレータがクラスパスを設定するために使用されます。</span> </p>

<p><span class="merged" id="all.4P2J4a" title="原文 : If the COHERENCE_HOME environment variable is set in an image the following entries will be added to the end of the classpath:"><code>COHERENCE_HOME</code>環境変数がイメージに設定されている場合、クラスパスの最後に次のエントリが追加されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1yIpOq"  title="原文: $COHERENCE_HOME/lib/coherence.jar"><code>$COHERENCE_HOME/lib/coherence.jar</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3mPXR1"  title="原文: $COHERENCE_HOME/conf"><code>$COHERENCE_HOME/conf</code></span></p>

</li>
</ul>
</div>

<h3 id="_additional_data_volumes"><span class="merged" id="all.1kbLUu" title="原文 : Additional Data Volumes">追加のデータ・ボリューム</span></h3>
<div class="section">
<p><span class="merged" id="all.4679uK" title="原文 : If the application requires access to external storage volumes in Kubernetes it is possible to add additional Volumes and VolumeMappings to the Pod and containers.">アプリケーションでKubernetesの外部ストレージ・ボリュームにアクセスする必要がある場合は、ポッドおよびコンテナに<code>Volumes</code>および<code>VolumeMappings</code>を追加できます。</span></p>

<p><span class="merged" id="all.Zx33P" title="原文 : There are three ways to add additional volumes:">ボリュームを追加するには、次の3つの方法があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2D28OW" title="原文 : ConfigMaps - easily add a ConfigMap volume and volume mapping see: Add ConfigMap Volumes">ConfigMaps - <code>ConfigMap</code>ボリュームおよびボリューム・マッピング・ビューを簡単に追加: <router-link to="/other/050_configmap_volumes">ConfigMapボリュームの追加</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.y9J4l" title="原文 : Secrets - easily add a Secret volume and volume mapping see: Add Secret Volumes">シークレット - <code>Secret</code>ボリュームおよびボリューム・マッピング・ビューを簡単に追加: <router-link to="/other/060_secret_volumes">シークレット・ボリュームの追加</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.22ExjN" title="原文 : Volumes - easily add any additional volume and volume mapping see: Add Volumes">ボリューム - 追加のボリュームとボリュームのマッピングを容易に追加: <router-link to="/other/070_add_volumes">ボリュームの追加</router-link></span></p>

</li>
</ul>
<p><span class="merged" id="all.2ekAjp" title="原文 : Both of ConfigMaps and Secrets have been treated as a special case because they are quite commonly used to provide configurations to Pods, so the Coherence spec provides a simpler way to declare them than for ad-hoc Volumes."><code>ConfigMaps</code>と<code>Secrets</code>は両方とも特殊なケースとして扱われています。これは、これらがポッドに構成を提供するために一般的に使用されるため、<code>Coherence</code>スペックはアドホック<code>Volumes</code>よりも簡単に宣言する方法を提供します。</span></p>

</div>
</div>
</doc-view>
