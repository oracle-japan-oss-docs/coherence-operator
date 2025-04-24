<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_spring_boot_applications"><span class="merged" id="all.GjXof" title="原文 : Spring Boot Applications">Spring Bootアプリケーション</span></h2>
<div class="section">
<p><span class="merged" id="all.200UFi.spl1" title="原文 : The Coherence Operator supports running images that contain Spring Boot applications.">Coherence Operatorでは、Spring Bootアプリケーションを含むイメージの実行がサポートされています。</span> <span class="merged" id="all.200UFi.spl2" title="原文 : Exactly how easy this is depends on how the image has been built.">これがどれほど簡単かは、イメージがどのようにビルドされたかによって決まります。</span> </p>

<p><span class="merged" id="all.xQxmG.spl1" title="原文 : When the operator runs an image it overrides the default image entrypoint and uses its own launcher.">オペレータがイメージを実行すると、デフォルトのイメージ・エンティティがオーバーライドされ、独自のランチャが使用されます。</span> <span class="merged" id="all.xQxmG.spl2" title="原文 : This allows the operator to properly configure various Coherence properties that the launcher then uses to build the command line to actually run your application.">これにより、オペレータは、実際にアプリケーションを実行するために起動ツールがコマンドラインをビルドするために使用する様々なCoherenceプロパティを適切に構成できます。</span> <span class="merged" id="all.xQxmG.spl3" title="原文 : With some types of image this is not a straight forward Java command line so the Operator requires a bit more information adding to the Coherence deployment yaml.">一部のタイプのイメージでは、これはまっすぐのJavaコマンドラインではないため、オペレータは、<code>Coherence</code>デプロイメントyamlに追加する少し詳しい情報が必要です。</span> </p>


<h3 id="_using_jib_images"><span class="merged" id="all.1OvWWB" title="原文 : Using JIB Images">JIBイメージの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1lGFRS.spl1" title="原文 : The simplest way to build an application image to run with the Coherence Operator (including Spring Boot applications) is to use the JIB tool.">Coherence Operator (Spring Bootアプリケーションを含む)で実行するアプリケーション・イメージを作成する最も簡単な方法は、<a href="https://github.com/GoogleContainerTools/jib/blob/master/README.md" id="" target="_blank" >JIB</a>ツールを使用することです。</span> <span class="merged" id="all.1lGFRS.spl2" title="原文 : JIB images will work out of the box with the operator, even for a Spring Boot application, as described in Building Applications and Deploying Applications.">JIBイメージは、<router-link to="/docs/applications/020_build_application">「アプリケーションのビルド」</router-link>および<router-link to="/docs/applications/030_deploy_application">「アプリケーションのデプロイ」</router-link>で説明されているように、Spring Bootアプリケーションの場合でも、オペレータとともにすぐに使用できます。</span> </p>

<p><span class="merged" id="all.1YScCi" title="原文 : If you have used the Spring Maven or Gradle plugins to build the application into a fat jar, but you then build the image using the JIB plugin then JIB will detect the fat jar and package the image in an exploded form that will run out of the box with the operator.">Spring MavenまたはGradleプラグインを使用してアプリケーションをfat jarにビルドしたが、その後、<a href="https://github.com/GoogleContainerTools/jib/blob/master/README.md" id="" target="_blank" >JIB</a>プラグインを使用してイメージをビルドすると、JIBは、脂肪jarを検出し、オペレータとともにボックス外で実行する分解された形式でイメージをパッケージ化します。</span></p>

</div>

<h3 id="_using_an_exploded_spring_boot_image"><span class="merged" id="all.3orXcE" title="原文 : Using an Exploded Spring Boot Image">展開されたSpringブート・イメージの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3Nfy9X" title="原文 : Another way to build a Spring Boot image is to explode the Spring Boot jar into a directory structure in the image.">Spring Bootイメージを作成するもう1つの方法は、Spring Boot jarをイメージ内のディレクトリ構造に展開することです。</span></p>

<p><span class="merged" id="all.nkZ43" title="原文 : For example, if a Spring Boot jar has been exploded into a directory called /spring, the image contents might look like the diagram below; where you can see the /spring directory contains the Spring Boot application.">たとえば、Spring Boot jarが<code>/spring</code>というディレクトリに展開されている場合、イメージの内容は次の図のようになります。ここでは、<code>/spring</code>ディレクトリにSpring Bootアプリケーションが含まれています。</span></p>

<markup


>&#9500;&#9472;&#9472; bin
&#9500;&#9472;&#9472; boot
&#9500;&#9472;&#9472; dev
&#9500;&#9472;&#8853; etc
&#9500;&#9472;&#8853; home
&#9500;&#9472;&#8853; lib
&#9500;&#9472;&#8853; lib64
&#9500;&#9472;&#9472; proc
&#9500;&#9472;&#9472; root
&#9500;&#9472;&#9472; run
&#9500;&#9472;&#9472; sbin
&#9500;&#9472;&#9472; spring
&#9474;   &#9500;&#9472;&#9472; BOOT-INF
&#9474;   &#9474;   &#9500;&#9472;&#8853; classes
&#9474;   &#9474;   &#9500;&#9472;&#9472; classpath.idx
&#9474;   &#9474;   &#9492;&#9472;&#8853; lib
&#9474;   &#9500;&#9472;&#9472; META-INF
&#9474;   &#9474;   &#9500;&#9472;&#9472; MANIFEST.MF
&#9474;   &#9474;   &#9492;&#9472;&#8853; maven
&#9474;   &#9492;&#9472;&#9472; org
&#9474;       &#9492;&#9472;&#9472; springframework
&#9474;           &#9492;&#9472;&#8853; boot
&#9500;&#9472;&#9472; sys
&#9500;&#9472;&#9472; tmp
&#9500;&#9472;&#8853; usr
&#9492;&#9472;&#8853; var</markup>

<p><span class="merged" id="all.3Xz4iv.spl1" title="原文 : Spring Boot 2.x or 3.x This type of image can be run by the Coherence Operator by specifying an application type of spring for Spring Boot 2.x applications or spring3 for SpringBoot 3.x applications."><strong>「Spring Boot 2.xまたは3.x」</strong>このタイプのイメージは、Spring Boot 2.xアプリケーションの場合は<code>spring</code>、SpringBoot 3.xアプリケーションの場合は<code>spring3</code>というアプリケーション・タイプを指定して、Coherence Operatorで実行できます。</span> <span class="merged" id="all.3Xz4iv.spl2" title="原文 : The application type is set in the spec.application.type field and by setting the working directory to the exploded directory, for example:">アプリケーション・タイプは、<code>spec.application.type</code>フィールドに設定され、作業ディレクトリを分解されたディレクトリに設定します。次に例を示します:</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: my-spring-app:1.0.0
  application:
    type: spring         <span class="conum" data-value="1" />
    workingDir: /spring  <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4dy1w3" title="原文 : The type field set to spring tells the Operator that this is a Spring Boot 2.x application."><code>spring</code>に設定された<code>type</code>フィールドは、これがSpring Boot 2.xアプリケーションであることをオペレータに伝えます。</span></li>
<li data-value="2"><span class="merged" id="all.27dXB2" title="原文 : The working directory has been set to the directory containing the exploded Spring Boot application.">作業ディレクトリは、展開されたSpring Bootアプリケーションを含むディレクトリに設定されました。</span></li>
</ul>
<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: my-spring-app:1.0.0
  application:
    type: spring3        <span class="conum" data-value="1" />
    workingDir: /spring  <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3ktMOd" title="原文 : The type field set to spring3 tells the Operator that this is a Spring Boot 3.x application."><code>spring3</code>に設定された<code>type</code>フィールドは、これがSpring Boot 3.xアプリケーションであることをオペレータに伝えます。</span></li>
<li data-value="2"><span class="merged" id="all.27dXB2.1" title="原文 : The working directory has been set to the directory containing the exploded Spring Boot application.">作業ディレクトリは、展開されたSpring Bootアプリケーションを含むディレクトリに設定されました。</span></li>
</ul>
<p><span class="merged" id="all.4KW2iU" title="原文 : When the Operator starts the application it will then run a command equivalent to:">オペレータがアプリケーションを起動すると、次と同等のコマンドが実行されます:</span></p>

<p><span class="merged" id="all.3rgsWs"  title="原文:: Spring Boot 2.x"><strong>Spring Boot 2.x</strong></span></p>

<markup
lang="bash"

>cd /spring &amp;&amp; java org.springframework.boot.loader.PropertiesLauncher</markup>

<p><span class="merged" id="all.1KangH"  title="原文:: Spring Boot 3.x"><strong>Spring Boot 3.x</strong></span></p>

<markup
lang="bash"

>cd /spring &amp;&amp; java org.springframework.boot.loader.launch.PropertiesLauncher</markup>

</div>

<h3 id="_using_a_spring_boot_fat_jar"><span class="merged" id="all.3t8xx5" title="原文 : Using a Spring Boot Fat Jar">Spring Boot Fat Jarの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.10ypkc.spl1" title="原文 : It is not recommended to build images containing fat jars for various reasons which can easily be found on the internet.">インターネット上で簡単に見つかる様々な理由で、fat jarを含むイメージをビルドすることはお勧めしません。</span> <span class="merged" id="all.10ypkc.spl2" title="原文 : If you feel that you must build your application as a Spring Boot fat jar then this can still work with the Coherence Operator.">アプリケーションをSpring Bootのfat jarとしてビルドする必要があると感じた場合は、Coherence Operatorと連携できます。</span> </p>

<p><span class="merged" id="all.ZFjnf.spl1" title="原文 : The Java command line to run a Spring Boot fat jar needs to be something like java -jar my-app.jar where my-app.jar is the fat jar.">Spring Bootのfat jarを実行するJavaコマンドラインは、<code>java -jar my-app.jar</code>のようにする必要があります(<code>my-app.jar</code>はfat jarです)。</span> <span class="merged" id="all.ZFjnf.spl2" title="原文 : This means that the Operator’s launcher needs to know the location of the fat jar in the image, so this must be provided in the Coherence deployment yaml.">これは、オペレータのランチャがイメージ内のfat jarのロケーションを認識する必要があるため、これは<code>Coherence</code>デプロイメントyamlで指定する必要があります。</span> </p>

<p><span class="merged" id="all.4JTo1y.spl1" title="原文 : For example, suppose that an application has been built into a fat jar names catalogue-1.0.0.jar which is in the /app/libs directory in the image, so the full path to the jar is /app/libs/catalogue-1.0.0.jar.">たとえば、イメージ内の<code>/app/libs</code>ディレクトリにあるfat jar名<code>catalogue-1.0.0.jar</code>にアプリケーションがビルドされているため、jarへのフルパスは<code>/app/libs/catalogue-1.0.0.jar</code>であるとします。</span> <span class="merged" id="all.4JTo1y.spl2" title="原文 : This needs to be set in the spec.applicaton.springBootFatJar field of the Coherence yaml.">これは、<code>Coherence</code> yamlの<code>spec.applicaton.springBootFatJar</code>フィールドに設定する必要があります。</span> </p>

<p><span class="merged" id="all.2XHXjD" title="原文 : The spec.application.type field also needs to be set to spring so that the Operator knows that this is a Spring Boot application"><code>spec.application.type</code>フィールドは、これがSpring Bootアプリケーションであることをオペレータが認識できるように、<code>spring</code>に設定する必要もあります</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: catalogue:1.0.0
  application:
    type: spring                                      <span class="conum" data-value="1" />
    springBootFatJar: /app/libs/catalogue-1.0.0.jar   <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.252osN" title="原文 : The type field set to spring tells the Operator that this is a Spring Boot application."><code>type</code>フィールドを<code>spring</code>に設定すると、これがSpring Bootアプリケーションであることをオペレータに通知します。</span></li>
<li data-value="2"><span class="merged" id="all.2dOndU" title="原文 : The location of the Spring Boot jar has been set.">Spring Boot jarのロケーションが設定されました。</span></li>
</ul>
<p><span class="merged" id="all.4KW2iU.1" title="原文 : When the Operator starts the application it will then run a command equivalent to:">オペレータがアプリケーションを起動すると、次と同等のコマンドが実行されます:</span></p>

<p><span class="merged" id="all.3rgsWs.1"  title="原文:: Spring Boot 2.x"><strong>Spring Boot 2.x</strong></span></p>

<markup
lang="bash"

>java --class-path /app/libs/catalogue-1.0.0.jar org.springframework.boot.loader.PropertiesLauncher</markup>

<p><span class="merged" id="all.1KangH.1"  title="原文:: Spring Boot 3.x"><strong>Spring Boot 3.x</strong></span></p>

<markup
lang="bash"

>java --class-path /app/libs/catalogue-1.0.0.jar org.springframework.boot.loader.launch.PropertiesLauncher</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4QEbIk" title="原文 : The Operator does not run the fat jar using the java -jar command because it needs to add various other JVM arguments and append to the classpath, so it has to run the org.springframework.boot.loader.PropertiesLauncher class as opposed to the org.springframework.boot.loader.JarLauncher that java -jar would run.">オペレータは、<code>java -jar</code>コマンドを使用して、fat jarを実行しません。これは、他の様々なJVM引数を追加してクラスパスに追加する必要があるため、<code>java -jar</code>が実行される<code>org.springframework.boot.loader.JarLauncher</code>ではなく、<code>org.springframework.boot.loader.PropertiesLauncher</code>クラスを実行する必要があります。</span></p>
</div>
</div>

<h3 id="_using_could_native_buildpacks"><span class="merged" id="all.9yvGR" title="原文 : Using Could Native Buildpacks">ネイティブ・ビルド・パックの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3vQcY7" title="原文 : If the Spring Boot Maven or Gradle plugin has been used to produce an image using Cloud Native Buildpacks these images can work with the Coherence Operator.">Spring Boot MavenまたはGradleプラグインを使用して<a href="https://docs.spring.io/spring-boot/reference/packaging/container-images/cloud-native-buildpacks.html" id="" target="_blank" >「クラウド・ネイティブのビルド・パック」</a>を使用してイメージを生成した場合、これらのイメージはCoherence Operatorと連携できます。</span></p>

<p><span class="merged" id="all.1kurGQ.spl1" title="原文 : Images using Cloud Native Buildpacks contain a special launcher executable the runs the Java application.">クラウド・ネイティブ・ビルド・パックを使用するイメージには、Javaアプリケーションを実行する特別なランチャ実行可能ファイルが含まれています。</span> <span class="merged" id="all.1kurGQ.spl2" title="原文 : This makes it more complex than normal for the Operator to provide a custom Java command.">これにより、オペレータがカスタムJavaコマンドを提供することが通常よりも複雑になります。</span> <span class="merged" id="all.1kurGQ.spl3" title="原文 : For images built using Cloud Native Buildpacks to work the Coherence resource must be configured to execute the images entry point instead of the Operator injecting a command line.">クラウド・ネイティブ・ビルド・パックを使用して構築されたイメージが機能するには、オペレータがコマンドラインを注入するのではなく、イメージ・エントリ・ポイントを実行するように<code>Coherence</code>リソースを構成する必要があります。</span> </p>

<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.2z6D50" title="原文 : Due to the way that the Coherence Operator configures JVM arguments when configured to use an image entry point, the image must be running Java 11 or higher.">イメージ・エントリ・ポイントを使用するように構成されている場合、Coherence OperatorがJVM引数を構成する方法により、イメージはJava 11以上を実行している必要があります。</span></p>
</p>
</div>
<p><span class="merged" id="all.1mGCOy.spl1" title="原文 : Instead of building a custom command line, the Operator uses the JDK_JAVA_OPTIONS environment variable to pass and configured JVM options and system properties to the Spring application.">オペレータは、カスタム・コマンドラインを作成するかわりに、<code>JDK_JAVA_OPTIONS</code>環境変数を使用してJVMオプションおよびシステム・プロパティをSpringアプリケーションに渡し、構成します。</span> <span class="merged" id="all.1mGCOy.spl2" title="原文 : This is a standard environment variable that the JVM will effectively use to pre-pend JVM arguments to its command line.">これは、JVMがそのコマンドラインにJVM引数をプリペンドするために効果的に使用する標準環境変数です。</span> </p>

<p><span class="merged" id="all.4Ug5I6.spl1" title="原文 : When creating a Coherence deployment for a Spring Boot Buildpacks image The application type must be set to spring.">Spring Boot Buildpacksイメージの<code>Coherence</code>デプロイメントを作成する場合、アプリケーション・タイプは<code>spring</code>に設定する必要があります。</span> <span class="merged" id="all.4Ug5I6.spl2" title="原文 : The Operator’s launcher will automatically detect that the image is a Buildpacks image and launch the application using the Buildpacks launcher.">オペレータのランチャは、イメージがBuildpacksイメージであることを自動的に検出し、Buildpacksランチャを使用してアプリケーションを起動します。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: catalogue:1.0.0
  application:
    type: spring <span class="conum" data-value="1" />
    useImageEntryPoint: true <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3Rig5m" title="原文 : The application type has been set to spring (for Spring Boot 2.x) or spring3 (for Spring Boot 3.x) so that the operator knows that this is a Spring Boot application, and the fact that the image is a Buildpacks image will be auto-discovered.">アプリケーション・タイプが<code>spring</code> (Spring Boot 2.xの場合)または<code>spring3</code> (Spring Boot 3.xの場合)に設定されているため、オペレータはこれがSpring Bootアプリケーションであることを認識し、イメージがBuildpacksイメージであるという事実は自動検出されます。</span></li>
<li data-value="2"><span class="merged" id="all.2C62Pf" title="原文 : The Operator will run the image’s entry point and set the JDK_JAVA_OPTIONS environment variable to pass arguments to the JVM">オペレータはイメージのエントリ・ポイントを実行し、引数をJVMに渡すように<code>JDK_JAVA_OPTIONS</code>環境変数を設定</span></li>
</ul>
<p><span class="merged" id="all.31I3oy" title="原文 : For more information on using image entry points with the Coherence operator see the Run an Image Entry Point documentation.">Coherenceオペレータでイメージ・エントリ・ポイントを使用する方法の詳細は、<router-link to="/docs/applications/080_entrypoint">「イメージ・エントリ・ポイントの実行」</router-link>のドキュメントを参照してください。</span></p>


<h4 id="_buildpacks_jvm_arguments"><span class="merged" id="all.1v7S61" title="原文 : Buildpacks JVM Arguments">Buildpacks JVM引数</span></h4>
<div class="section">
<p><span class="merged" id="all.1YpkBz" title="原文 : A typical Spring Boot buildpack launcher will attempt to configure options such as heap size based on the container resource limits configured, so this must be taken into account if using any of the memory options available in the Coherence CRD as there may be conflicting configurations.">典型的なSpring Boot buildpackランチャは、構成されたコンテナ・リソース制限に基づいてヒープ・サイズなどのオプションを構成しようとするため、<code>Coherence</code> CRDで使用可能なメモリー・オプションのいずれかを使用すると、競合する構成がある可能性があるため、これを考慮する必要があります。</span></p>

</div>
</div>
</div>
</doc-view>
