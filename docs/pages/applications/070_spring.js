<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_spring_boot_applications"><span class="merged" id="all.GjXof" title="原文 : Spring Boot Applications">Spring Boot Applications</span></h2>
<div class="section">
<p><span class="merged" id="all.200UFi.spl1" title="原文 : The Coherence Operator supports running images that contain Spring Boot applications.">Coherence Operatorは、Spring Bootアプリケーションを含むイメージの実行をサポートします。</span> <span class="merged" id="all.200UFi.spl2" title="原文 : Exactly how easy this is depends on how the image has been built.">どれだけ簡単になるかは、イメージの構築方法によって異なります。</span> </p>

<p><span class="merged" id="all.xQxmG.spl1" title="原文 : When the operator runs an image it overrides the default image entrypoint and uses its own launcher.">オペレータがイメージを実行すると、デフォルトのイメージ・エントリがオーバーライドされ、独自のランチャが使用されます。</span> <span class="merged" id="all.xQxmG.spl2" title="原文 : This allows the operator to properly configure various Coherence properties that the launcher then uses to build the command line to actually run your application.">これにより、オペレータは、起動側がアプリケーションを実行するコマンドラインの構築に使用する様々なCoherenceプロパティを適切に構成できます。</span> <span class="merged" id="all.xQxmG.spl3" title="原文 : With some types of image this is not a straight forward Java command line so the Operator requires a bit more information adding to the Coherence deployment yaml.">一部のタイプのイメージでは、これは単純なJavaコマンドラインではないので、オペレータは<code>Coherence</code>デプロイメントyamlにさらに情報を追加する必要があります。</span> </p>


<h3 id="_using_jib_images"><span class="merged" id="all.1OvWWB" title="原文 : Using JIB Images">JIBイメージの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1sSqma.spl1" title="原文 : The simplest way to build an application image to run with the Coherence Operator (including Spring Boot applications) is to use the JIB tool.">Coherence Operator (Spring Bootアプリケーションを含む)で実行するためのアプリケーション・イメージを作成する最も簡単な方法は、<a href="https://github.com/GoogleContainerTools/jib/blob/master/README.md" id="" target="_blank" >JIB</a>ツールを使用することです。</span> <span class="merged" id="all.1sSqma.spl2" title="原文 : JIB images will work out of the box with the operator, even for a Spring Boot application, as described in Building Applications and Deploying Applications."><router-link to="/applications/020_build_application">「アプリケーションの構築」</router-link>および<router-link to="/applications/030_deploy_application">「アプリケーションのデプロイ」</router-link>で説明されているように、JIBイメージはリング・ブート・アプリケーションの場合でも、オペレータと一緒にボックスから動作します。</span> </p>

<p><span class="merged" id="all.1YScCi" title="原文 : If you have used the Spring Maven or Gradle plugins to build the application into a fat jar, but you then build the image using the JIB plugin then JIB will detect the fat jar and package the image in an exploded form that will run out of the box with the operator.">Spring MavenまたはGradleプラグインを使用してアプリケーションをfat jarに構築したが、<a href="https://github.com/GoogleContainerTools/jib/blob/master/README.md" id="" target="_blank" >JIB</a>プラグインを使用してイメージを作成した場合、JIBはfat jarを検出し、オペレータとともにボックスから実行される展開された形式でイメージをパッケージ化します。</span></p>

</div>

<h3 id="_using_an_exploded_spring_boot_image"><span class="merged" id="all.3orXcE" title="原文 : Using an Exploded Spring Boot Image">展開されたリング・ブート・イメージの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3Nfy9X" title="原文 : Another way to build a Spring Boot image is to explode the Spring Boot jar into a directory structure in the image.">Spring Bootイメージを構築するもう1つの方法は、Spring Boot jarをイメージ内のディレクトリ構造に展開することです。</span></p>

<p><span class="merged" id="all.nkZ43" title="原文 : For example, if a Spring Boot jar has been exploded into a directory called /spring, the image contents might look like the diagram below; where you can see the /spring directory contains the Spring Boot application.">たとえば、Spring Boot jarが<code>/spring</code>という名前のディレクトリに展開されている場合、イメージの内容は次のようになります。<code>/spring</code>ディレクトリにはSpring Bootアプリケーションが含まれていることがわかります。</span></p>

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

<p><span class="merged" id="all.4QgErp" title="原文 : This type of image can be run by the Coherence Operator by specifying an application type of spring in the spec.application.type field and by setting the working directory to the exploded directory, for example:">このタイプのイメージは、<code>spec.application.type</code>フィールドに<code>spring</code>のアプリケーション・タイプを指定し、作業ディレクトリを展開済ディレクトリに設定することで、Coherence Operatorによって実行できます。次に例を示します:</span></p>

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
<li data-value="1"><span class="merged" id="all.252osN" title="原文 : The type field set to spring tells the Operator that this is a Spring Boot application."><code>type</code>フィールドを<code>spring</code>に設定すると、これがSpring Bootアプリケーションであることがオペレータに表示されます。</span></li>
<li data-value="2"><span class="merged" id="all.27dXB2" title="原文 : The working directory has been set to the directory containing the exploded Spring Boot application.">作業ディレクトリは、展開されたSpring Bootアプリケーションを含むディレクトリに設定されています。</span></li>
</ul>
<p><span class="merged" id="all.4KW2iU" title="原文 : When the Operator starts the application it will then run a command equivalent to:">オペレータがアプリケーションを起動すると、次のようなコマンドが実行されます:</span></p>

<markup
lang="bash"

>cd /spring &amp;&amp; java org.springframework.boot.loader.PropertiesLauncher</markup>

</div>

<h3 id="_using_a_spring_boot_fat_jar"><span class="merged" id="all.3t8xx5" title="原文 : Using a Spring Boot Fat Jar">Spring Boot Fat Jarの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.10ypkc.spl1" title="原文 : It is not recommended to build images containing fat jars for various reasons which can easily be found on the internet.">インターネット上で簡単に見られる様々な理由で、fat jarを含むイメージを作成することはお薦めしません。</span> <span class="merged" id="all.10ypkc.spl2" title="原文 : If you feel that you must build your application as a Spring Boot fat jar then this can still work with the Coherence Operator.">Spring Bootのfat jarとしてアプリケーションを構築する必要があると思われる場合は、Coherence Operatorと連携できます。</span> </p>

<p><span class="merged" id="all.ZFjnf.spl1" title="原文 : The Java command line to run a Spring Boot fat jar needs to be something like java -jar my-app.jar where my-app.jar is the fat jar.">Spring Boot fat jarを実行するJavaコマンド行には、<code>java -jar my-app.jar</code>のようにする必要があります。ここで、<code>my-app.jar</code>はfat jarです。</span> <span class="merged" id="all.ZFjnf.spl2" title="原文 : This means that the Operator&rsquo;s launcher needs to know the location of the fat jar in the image, so this must be provided in the Coherence deployment yaml.">つまり、オペレータのランチャはイメージのfat jarのロケーションを把握する必要があるため、<code>Coherence</code>デプロイメントyamlで指定する必要があります。</span> </p>

<p><span class="merged" id="all.4JTo1y.spl1" title="原文 : For example, suppose that an application has been built into a fat jar names catalogue-1.0.0.jar which is in the /app/libs directory in the image, so the full path to the jar is /app/libs/catalogue-1.0.0.jar.">たとえば、アプリケーションが、イメージ内の<code>/app/libs</code>ディレクトリにあるfat jar名<code>catalogue-1.0.0.jar</code>に構築されているため、jarへのフルパスが<code>/app/libs/catalogue-1.0.0.jar</code>であるとします。</span> <span class="merged" id="all.4JTo1y.spl2" title="原文 : This needs to be set in the spec.applicaton.springBootFatJar field of the Coherence yaml.">これは、<code>Coherence</code> yamlの<code>spec.applicaton.springBootFatJar</code>フィールドに設定する必要があります。</span> </p>

<p><span class="merged" id="all.2XHXjD" title="原文 : The spec.application.type field also needs to be set to spring so that the Operator knows that this is a Spring Boot application"><code>spec.application.type</code>フィールドも<code>spring</code>に設定する必要があるため、オペレータは、これがSpring Bootアプリケーションであることを認識している必要があります</span></p>

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
<li data-value="1"><span class="merged" id="all.252osN.1" title="原文 : The type field set to spring tells the Operator that this is a Spring Boot application."><code>type</code>フィールドを<code>spring</code>に設定すると、これがSpring Bootアプリケーションであることがオペレータに表示されます。</span></li>
<li data-value="2"><span class="merged" id="all.2dOndU" title="原文 : The location of the Spring Boot jar has been set.">Spring Boot jarのロケーションが設定されました。</span></li>
</ul>
<p><span class="merged" id="all.4KW2iU.1" title="原文 : When the Operator starts the application it will then run a command equivalent to:">オペレータがアプリケーションを起動すると、次のようなコマンドが実行されます:</span></p>

<markup
lang="bash"

>java -cp /app/libs/catalogue-1.0.0.jar org.springframework.boot.loader.PropertiesLauncher</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4QEbIk" title="原文 : The Operator does not run the fat jar using the java -jar command because it needs to add various other JVM arguments and append to the classpath, so it has to run the org.springframework.boot.loader.PropertiesLauncher class as opposed to the org.springframework.boot.loader.JarLauncher that java -jar would run.">オペレータは、<code>java -jar</code>コマンドを使用してfat jarを実行しません。これは、他の様々なJVM引数を追加してクラスパスに追加する必要があるため、<code>java -jar</code>を実行する<code>org.springframework.boot.loader.JarLauncher</code>ではなく、<code>org.springframework.boot.loader.PropertiesLauncher</code>クラスを実行する必要があります。</span></p>
</div>
</div>

<h3 id="_using_could_native_buildpacks"><span class="merged" id="all.9yvGR" title="原文 : Using Could Native Buildpacks">クラウド・ネイティブ・ビルド・パックの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.2f3svo" title="原文 : If the Spring Boot Maven or Gradle plugin has been used to produce an image using Cloud Native Buildpacks these images can work with the Coherence Operator.">Spring Boot MavenまたはGradleプラグインを使用して<a href="https://spring.io/blog/2020/01/27/creating-docker-images-with-spring-boot-2-3-0-m1" id="" target="_blank" >「クラウド・ネイティブなビルド・パック」</a>を使用してイメージを生成する場合、これらのイメージはCoherence Operatorと連携できます。</span></p>

<div class="admonition warning">
<p class="admonition-textlabel"><span class="merged" id="all.2dRYIU"  title="原文:: Warning">警告</span></p>
<p ><p><span class="merged" id="all.1cG9fO.spl1" title="原文 : Due to limitation on the way that arguments can be passed to the JVM when using Buildpacks images the Coherence operator will only work with images containing a JVM greater than Java 11.">Buildpacksイメージの使用時に引数をJVMに渡す方法に制限があるため、Coherence OperatorはJava 11より大きいJVMを含むイメージでのみ機能します。</span> <span class="merged" id="all.1cG9fO.spl2" title="原文 : Although the Buildpacks launcher will honour the JAVA_OPTS or JAVA_TOOL_OPTIONS environment variables there appear to be size limitations for the values of these variables that make it impractical for the Operator to use them.">Buildpacksランチャは<code>JAVA_OPTS</code>または<code>JAVA_TOOL_OPTIONS</code>環境変数に従いますが、オペレータで実用的でない変数を使用するよう、これらの変数の値にはサイズ制限があるように見えます。</span> <span class="merged" id="all.1cG9fO.spl3" title="原文 : The Operator therefore creates a JVM arguments file to pass the arguments to the JVM.">そのため、オペレータはJVMに引数を渡すJVM引数ファイルを作成します。</span> <span class="merged" id="all.1cG9fO.spl4" title="原文 : At the time of writing these docs, Java 8 (which is the default version of Java used by the Spring Boot plugin) does not support the use of argument files for the JVM.">これらのドキュメントの記述時に、Java 8 (Spring Bootプラグインによって使用されるJavaのデフォルト・バージョン)は、JVMの引数ファイルの使用をサポートしていません。</span> </p>

<p><span class="merged" id="all.fPPVn" title="原文 : It is simple to configure the version of the JVM used by the Spring Boot plugin, for example in Maven:">Mavenなど、Spring Bootプラグインによって使用されるJVMのバージョンを構成することは簡単です:</span></p>

<markup
lang="xml"

>&lt;plugin&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
  &lt;version&gt;2.3.4.RELEASE&lt;/version&gt;
  &lt;configuration&gt;
    &lt;image&gt;
      &lt;env&gt;
        &lt;BP_JVM_VERSION&gt;11.*&lt;/BP_JVM_VERSION&gt;
      &lt;/env&gt;
    &lt;/image&gt;
  &lt;/configuration&gt;
&lt;/plugin&gt;</markup>
</p>
</div>
<p><span class="merged" id="all.4Ug5I6.spl1" title="原文 : When creating a Coherence deployment for a Spring Boot Buildpacks image The application type must be set to spring.">Spring Boot Buildpacksイメージに<code>Coherence</code>デプロイメントを作成する場合、アプリケーション・タイプは<code>spring</code>に設定する必要があります。</span> <span class="merged" id="all.4Ug5I6.spl2" title="原文 : The Operator&rsquo;s launcher will automatically detect that the image is a Buildpacks image and launch the application using the Buildpacks launcher.">オペレータのランチャは、イメージがBuildpacksイメージであることを自動的に検出し、Buildpacksランチャを使用してアプリケーションを起動します。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: catalogue:1.0.0
  application:
    type: spring <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4AbZXZ" title="原文 : The application type has been set to spring so that the operator knows that this is a Spring Boot application, and the fact that the image is a Buildpacks image will be auto-discovered.">アプリケーション・タイプは<code>spring</code>に設定されており、これがSpring Bootアプリケーションであることをオペレータが認識し、イメージがBuildpacksイメージであるという事実が自動的に検出されます。</span></li>
</ul>
<p><span class="merged" id="all.2xfpyb" title="原文 : When the Operator starts the application it will then run the buildpacks launcher with a command equivalent to this:">オペレータがアプリケーションを起動すると、次のようなコマンドとともにbuildpacksランチャが実行されます:</span></p>

<markup
lang="bash"

>/cnb/lifecycle/launcher java @jvm-args-file org.springframework.boot.loader.PropertiesLauncher</markup>


<h4 id="_buildpacks_detection"><span class="merged" id="all.TGHtF" title="原文 : Buildpacks Detection">ビルド・パックの検出</span></h4>
<div class="section">
<p><span class="merged" id="all.4UJaaF" title="原文 : If for some reason buildpacks auto-detection does not work properly the Coherence CRD contains a filed to force buildpacks to be enabled or disabled.">なんらかの理由でビルド・パックの自動検出が正しく動作しない場合、<code>Coherence</code> CRDには、ビルド・パックを強制的に有効化または無効化するためのファイルが含まれています。</span></p>

<p><span class="merged" id="all.3uhYwI" title="原文 : The boolean field spec.application.cloudNativeBuildPack.enabled can be set to true to enable buildpacks or false to disable buildpack."><code>boolean</code>フィールド<code>spec.application.cloudNativeBuildPack.enabled</code>を<code>true</code>に設定してbuildpackを有効にするか、falseを設定してbuildpackを無効にできます。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: catalogue:1.0.0
  application:
    type: spring            <span class="conum" data-value="1" />
    cloudNativeBuildPack:
      enabled: true         <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2cE1Pp" title="原文 : The application type has been set to spring so that the operator knows that this is a Spring Boot application">アプリケーション・タイプは<code>spring</code>に設定されているため、オペレータはこれがSpring Bootアプリケーションであることを認識しています</span></li>
<li data-value="2"><span class="merged" id="all.2YG1B7" title="原文 : The cloudNativeBuildPack.enabled field has been set to true to force the Operator to use the Buildpacks launcher."><code>cloudNativeBuildPack.enabled</code>フィールドが<code>true</code>に設定されており、オペレータがBuildpacksランチャを使用することを強制しています。</span></li>
</ul>
</div>

<h4 id="_specify_the_buildpacks_launcher"><span class="merged" id="all.AHVdp" title="原文 : Specify the Buildpacks Launcher">Buildpacks Launcherの指定</span></h4>
<div class="section">
<p><span class="merged" id="all.2A7gwR.spl1" title="原文 : A Cloud Native Buildpacks image uses a launcher mechanism to run the executable(s) in the image.">Cloud Native Buildpacksイメージでは、ランチャ・メカニズムを使用してイメージ内で実行可能ファイルを実行します。</span> <span class="merged" id="all.2A7gwR.spl2" title="原文 : The Coherence Operator launcher will configure the application and then invoke the same buildpacks launcher.">Coherence Operatorランチャは、アプリケーションを構成し、同じビルド・パック・ランチャを起動します。</span> <span class="merged" id="all.2A7gwR.spl3" title="原文 : The Coherence Operator assumes that the buildpacks launcher is in the image in the location /cnb/lifecycle/launcher.">Coherence Operatorでは、ビルド・パック・ランチャが<code>/cnb/lifecycle/launcher</code>のロケーションのイメージにあることを前提としています。</span> <span class="merged" id="all.2A7gwR.spl4" title="原文 : If a buildpacks image has been built with the launcher in a different location then the Coherence CRD contains a field to set the new location.">別のロケーションにランチャを使用してビルド・パック・イメージが構築されている場合、<code>Coherence</code> CRDには新しいロケーションを設定するフィールドが含まれます。</span> </p>

<p><span class="merged" id="all.44J8Z8" title="原文 : The spec.application.cloudNativeBuildPack.enabled field."><code>spec.application.cloudNativeBuildPack.enabled</code>フィールド。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: catalogue:1.0.0
  application:
    type: spring                    <span class="conum" data-value="1" />
    cloudNativeBuildPack:
      launcher: /buildpack/launcher <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2cE1Pp.1" title="原文 : The application type has been set to spring so that the operator knows that this is a Spring Boot application">アプリケーション・タイプは<code>spring</code>に設定されているため、オペレータはこれがSpring Bootアプリケーションであることを認識しています</span></li>
<li data-value="2"><span class="merged" id="all.IJtdd" title="原文 : The buildpacks launcher that the Operator will invoke is located at /buildpack/launcher.">オペレータが起動するbuildpacksランチャは、<code>/buildpack/launcher</code>にあります。</span></li>
</ul>
</div>

<h4 id="_buildpack_jvm_arguments"><span class="merged" id="all.2D2h8Y" title="原文 : Buildpack JVM Arguments">Buildpack JVM引数</span></h4>
<div class="section">
<p><span class="merged" id="all.1YpkBz" title="原文 : A typical Spring Boot buildpack launcher will attempt to configure options such as heap size based on the container resource limits configured, so this must be taken into account if using any of the memory options available in the Coherence CRD as there may be conflicting configurations.">一般的なSpring Boot buildpackランチャは、構成されたコンテナ・リソース制限に基づいてヒープ・サイズなどのオプションの構成を試みるため、<code>Coherence</code> CRDで使用可能なメモリー・オプションのいずれかを使用すると、競合する構成になる可能性があるため、これを考慮する必要があります。</span></p>

</div>
</div>
</div>
</doc-view>
