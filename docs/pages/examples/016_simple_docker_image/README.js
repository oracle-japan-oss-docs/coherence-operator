<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_example_coherence_image_using_a_dockerfile"><span class="merged" id="all.2Glvcf" title="原文 : Example Coherence Image using a Dockerfile">Dockerfileを使用したCoherenceイメージの例</span></h2>
<div class="section">
<p><span class="merged" id="all.4coJg.spl1" title="原文 : This example shows how to build a simple Coherence server image using a Dockerfile.">この例は、<code>Dockerfile</code>を使用して単純なCoherenceサーバー・イメージをビルドする方法を示しています。</span> <span class="merged" id="all.4coJg.spl2" title="原文 : This image is built so that ot works out of the box with the Operator, with no additional configuration.">このイメージは、追加の構成なしで、otがOperatorとボックスから機能するようにビルドされています。</span> <span class="merged" id="all.4coJg.spl3" title="原文 : This is an alternative to the Coherence Image using JIB example.">これは、<router-link to="/examples/015_simple_image/README">「JIBを使用したCoherenceイメージ」</router-link>の例の代替です。</span> <span class="merged" id="all.4coJg.spl4" title="原文 : There are many build tools and plugins for Maven and Gradle that are supposed to make building images easy.">MavenおよびGradleには、イメージのビルドを容易にする多くのビルド・ツールおよびプラグインがあります。</span> <span class="merged" id="all.4coJg.spl5" title="原文 : Sometimes though, a simple Dockerfile approach is required.">ただし、単純な<code>Dockerfile</code>アプローチが必要な場合があります。</span> </p>

<p><span class="merged" id="all.IPrkb.spl1" title="原文 : A typical Coherence application image will still need to pull together various Coherence dependencies to add to the image.">通常のCoherenceアプリケーション・イメージは、イメージに追加するために様々なCoherence依存関係をプルする必要があります。</span> <span class="merged" id="all.IPrkb.spl2" title="原文 : This simple application does not actually contain any code, a real application would likely contain code and other resources.">この単純なアプリケーションには実際にはコードが含まれず、実際のアプリケーションにはコードやその他のリソースが含まれている可能性があります。</span> </p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.2"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.4PU44E" title="原文 :  The complete source code for this example is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />この例の完全なソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/016_simple_docker_image" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>
</div>

<h2 id="_the_dockerfile"><span class="merged" id="all.11n7lv" title="原文 : The Dockerfile">Dockerfile</span></h2>
<div class="section">
<p><span class="merged" id="all.1FzZdM" title="原文 : The Dockerfile for the example is shown below:">例の<code>Dockerfile</code>を次に示します:</span></p>

<markup

title="src/docker/Dockerfile"
>FROM gcr.io/distroless/java11-debian11

# Configure the image's health check command
# Health checks will only work with Coherence 22.06 and later
HEALTHCHECK  --start-period=10s --interval=30s \
    CMD ["java", \
    "--class-path", "/app/libs/coherence.jar", \
    "com.tangosol.util.HealthCheckClient", \
    "http://127.0.0.1:6676/ready", \
    "||", "exit", "1"]

# Expose any default ports
# The default Coherence Extend port
EXPOSE 20000
# The default Coherence gRPC port
EXPOSE 1408
# The default Coherence metrics port
EXPOSE 9612
# The default Coherence health port
EXPOSE 6676

# Set the entry point to be the Java command to run
ENTRYPOINT ["java", "--class-path", "/app/classes:/app/libs/*", "com.tangosol.net.Coherence"]

# Set any environment variables
# Set the health check port to a fixed value (corresponding to the command above)
ENV COHERENCE_HEALTH_HTTP_PORT=6676
# Fix the Extend Proxy to listen on port 20000
ENV COHERENCE_EXTEND_PORT=20000
# Enable Coherence metics
ENV COHERENCE_METRICS_HTTP_ENABLED=true
# Set the Coherence log level to debug logging
ENV COHERENCE_LOG_LEVEL=9
# Effectively disabled multicast cluster discovery, which does not work in containers
ENV COHERENCE_TTL=0

# Copy all the application files into the /app directory in the image
# This is the default structure supported by the Coherence Operator
COPY app app</markup>

<p><span class="merged" id="all.4UEkU3"  title="原文:: Base Image"><strong>ベース・イメージ</strong></span></p>

<p><span class="merged" id="all.4EW9fP" title="原文 : The base image for this example is a distroless Java 11 image gcr.io/distroless/java11-debian11">この例のベース・イメージは、distroless Java 11イメージ<code>gcr.io/distroless/java11-debian11</code>です</span></p>

<p><span class="merged" id="all.22UefJ"  title="原文:: Health Check"><strong>ヘルス・チェック</strong></span></p>

<p><span class="merged" id="all.4QS0iY" title="原文 : The image is configured with a health check that uses the built-in Coherence health check on port 6676.">イメージは、ポート6676で組込みのCoherenceヘルス・チェックを使用するヘルス・チェックで構成されます。</span></p>

<p><span class="merged" id="all.149sf2" title="原文 : Expose Ports"><strong>ポートの公開</strong></span></p>

<p><span class="merged" id="all.38OfLS" title="原文 : A number of default Coherence ports are exposed.">いくつかのデフォルトのCoherenceポートが公開されます。</span></p>

<p><span class="merged" id="all.1eIgmB"  title="原文:: Entrypoint"><strong>Entrypoint</strong></span></p>

<p><span class="merged" id="all.4AUTdT.spl1" title="原文 : The image entry point will run com.tangosol.net.Coherence to run a Coherence storage enabled server.">イメージ・エントリ・ポイントは、<code>com.tangosol.net.Coherence</code>を実行してCoherenceストレージが有効なサーバーを実行します。</span> <span class="merged" id="all.4AUTdT.spl2" title="原文 : The classpath is set to /app/classes:/app/libs/*.">クラスパスは<code>/app/classes:/app/libs/*</code>に設定されます。</span> <span class="merged" id="all.4AUTdT.spl3" title="原文 : This is the same classpath that the JIB plugin would add artifacts to and is also supported out of the box by the Coherence operator.">これは、JIBプラグインがアーティファクトを追加する場合と同じクラスパスであり、Coherenceオペレータによってボックスからもサポートされます。</span> </p>

<p><span class="merged" id="all.3INfZz" title="原文 : Environment Variables"><strong>環境変数</strong></span></p>

<p><span class="merged" id="all.2XhRSL.spl1" title="原文 : A number of environment variables are set to configure Coherence.">Coherenceを構成するために多数の環境変数が設定されています。</span> <span class="merged" id="all.2XhRSL.spl2" title="原文 : These values could have been set as system properties in the entry point, but using environment variables is a simpler option when running containers as they can easily be overridden at deploy time.">これらの値はエントリ・ポイントでシステム・プロパティとして設定できましたが、デプロイ時に簡単にオーバーライドできるため、環境変数の使用はコンテナの実行時のほうが簡単です。</span> </p>

<p><span class="merged" id="all.21KB1Y" title="原文 : Copy the Image Artifacts"><strong>イメージ・アーティファクトのコピー</strong></span></p>

<p><span class="merged" id="all.3ymOmx.spl1" title="原文 : The Maven and Gradle build will copy all the classes and dependencies into a directory named app/ in the same directory as the Dockerfile.">MavenおよびGradleビルドでは、すべてのクラスおよび依存関係が、<code>Dockerfile</code>と同じディレクトリにある<code>app/</code>という名前のディレクトリにコピーされます。</span> <span class="merged" id="all.3ymOmx.spl2" title="原文 : Using COPY app app will copy all the files into the image."><code>COPY app app</code>を使用すると、すべてのファイルがイメージにコピーされます。</span> </p>

</div>

<h2 id="_assemble_the_image_directory"><span class="merged" id="all.3MCvdi" title="原文 : Assemble the Image Directory">イメージ・ディレクトリのアセンブル</span></h2>
<div class="section">
<p><span class="merged" id="all.3PI2Sm.spl1" title="原文 : The next step is to assemble all the artifacts required to build the image.">次のステップでは、イメージのビルドに必要なすべてのアーティファクトを組み立てます。</span> <span class="merged" id="all.3PI2Sm.spl2" title="原文 : Looking at the Dockerfile above, this means copying any dependencies and other files into a directory named app/ in the same directory that the Dockerfile is in.">上記の<code>Dockerfile</code>を見ると、<code>Dockerfile</code>と同じディレクトリにある<code>app/</code>という名前のディレクトリに依存関係およびその他のファイルをコピーします。</span> <span class="merged" id="all.3PI2Sm.spl3" title="原文 : This example contains both a Maven pom.xml file and Gradle build files, that show how to use these tools to gather all the files required for the image.">この例では、Maven <code>pom.xml</code>ファイルとGradleビルド・ファイルの両方が含まれています。このファイルは、これらのツールを使用してイメージに必要なすべてのファイルを収集する方法を示しています。</span> </p>

<p><span class="merged" id="all.1ivgi" title="原文 : There are other build tools such as make or ant or just plain scripts, but as the task involves pulling together all the Coherence jar files from Maven central, it is simplest to use Maven or Gradle."><code>make</code>や<code>ant</code>などの他のビルド・ツールやプレーン・スクリプトのみがありますが、タスクにはMaven中央からすべてのCoherence jarファイルのプルが含まれるため、MavenまたはGradleを使用するのが最も簡単です。</span></p>

<p><span class="merged" id="all.3eP9hJ.spl1" title="原文 : To build a Coherence application there will obviously be at a minimum a dependency on coherence.jar.">Coherenceアプリケーションをビルドするには、少なくとも<code>coherence.jar</code>への依存関係があります。</span> <span class="merged" id="all.3eP9hJ.spl2" title="原文 : Optionally we can also add dependencies on other Coherence modules and other dependencies, for example Coherence coul dbe configured to use SLF4J for logging.">オプションで、ロギングにSLF4Jを使用するように構成されたCoherence coul dbeなど、他のCoherenceモジュールおよびその他の依存関係への依存関係を追加することもできます。</span> <span class="merged" id="all.3eP9hJ.spl3" title="原文 : In this example we’re going to add json support to the application by adding a dependency on coherence-json and coherence-grpc-proxy.">この例では、<code>coherence-json</code>および<code>coherence-grpc-proxy</code>への依存関係を追加して、jsonサポートをアプリケーションに追加します。</span> </p>

<p><span class="merged" id="all.1NlzPn" title="原文 : Jump to the relevant section, depending on the build tool being used:">使用するビルド・ツールに応じて、関連するセクションに移動します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4Vhfa6" title="原文 : Using Maven"><router-link @click.native="this.scrollFix('#maven')" to="#maven">Mavenの使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1qYK23" title="原文 : Using Gradle"><router-link @click.native="this.scrollFix('#gradle')" to="#gradle">Gradleの使用</router-link></span></p>

</li>
</ul>

<h3 id="maven"><span class="merged" id="all.3YJPh5" title="原文 : Using Maven">Mavenの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3P4tHz.spl1" title="原文 : To assemble the image artifacts using Maven, everything is configured in the Maven pom.xml file.">Mavenを使用してイメージ・アーティファクトを組み立てるには、すべてMaven <code>pom.xml</code>ファイルに構成されます。</span> <span class="merged" id="all.3P4tHz.spl2" title="原文 : The Maven build will pull all the artifacts required in the image, including the Dockerfile into a directory under target\docker.">Mavenビルドでは、イメージに必要なすべてのアーティファクト(<code>Dockerfile</code>を含む)が<code>target\docker</code>の下のディレクトリにプルされます。</span> </p>


<h4 id="_adding_dependencies"><span class="merged" id="all.xk2KX"  title="原文:: Adding Dependencies">依存関係の追加</span></h4>
<div class="section">
<p><span class="merged" id="all.XvJUp" title="原文 : In the example the coherence-bom is added to the &lt;dependencyManagement&gt; section as an import, to ensure consistent versioning of other Coherence modules.">この例では、<code>coherence-bom</code>がインポートとして<code>&lt;dependencyManagement></code>セクションに追加され、他のCoherenceモジュールの一貫したバージョニングが保証されます。</span></p>

<p><span class="merged" id="all.4Pysm0" title="原文 : In the pom.xml we have a dependencyManagement section."><code>pom.xml</code>には、<code>dependencyManagement</code>セクションがあります。</span></p>

<markup
lang="xml"
title="pom.xml"
>&lt;dependencyManagement&gt;
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.oracle.coherence.ce&lt;/groupId&gt;
            &lt;artifactId&gt;coherence-bom&lt;/artifactId&gt;
            &lt;version&gt;${coherence.version}&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
            &lt;scope&gt;import&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;</markup>

<p><span class="merged" id="all.A9APX" title="原文 : We can then add the coherence coherence-json and coherence-grpc-proxy modules as dependencies">その後、<code>coherence</code> <code>coherence-json</code>および<code>coherence-grpc-proxy</code>モジュールを依存関係として追加できます</span></p>

<markup
lang="xml"
title="pom.xml"
>    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.oracle.coherence.ce&lt;/groupId&gt;
            &lt;artifactId&gt;coherence&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.oracle.coherence.ce&lt;/groupId&gt;
            &lt;artifactId&gt;coherence-json&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.oracle.coherence.ce&lt;/groupId&gt;
            &lt;artifactId&gt;coherence-grpc-proxy&lt;/artifactId&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;</markup>

</div>

<h4 id="_assembling_the_image_artifacts"><span class="merged" id="all.YMTE" title="原文 : Assembling the Image Artifacts">イメージ・アーティファクトのアセンブル</span></h4>
<div class="section">
<p><span class="merged" id="all.2rdnwL.spl1" title="原文 : This example will use the Maven Assembly Plugin to gather all the dependencies and other files together into the target/docker directory.">この例では、Mavenアセンブリ・プラグインを使用して、すべての依存関係およびその他のファイルを<code>target/docker</code>ディレクトリにまとめて収集します。</span> <span class="merged" id="all.2rdnwL.spl2" title="原文 : The assembly plugin is configured in the pom.xml file.">アセンブリ・プラグインは、<code>pom.xml</code>ファイルに構成されます。</span> </p>

<p><span class="merged" id="all.ksfM8.spl1" title="原文 : The assembly plugin is configured to use the src/assembly/image-assembly.xml descriptor file to determine what to assemble.">アセンブリ・プラグインは、<code>src/assembly/image-assembly.xml</code>記述子ファイルを使用してアセンブルする内容を決定するように構成されます。</span> <span class="merged" id="all.ksfM8.spl2" title="原文 : The &lt;finalName&gt; configuration element is set to docker so all the files will be assembled into a directory named docker/ under the target/ directory."><code>&lt;finalName></code>構成要素は<code>docker</code>に設定されているため、すべてのファイルは<code>target/</code>ディレクトリの下の<code>docker/</code>という名前のディレクトリにアセンブルされます。</span> <span class="merged" id="all.ksfM8.spl3" title="原文 : The assembly plugin execution is bound to the package build phase.">アセンブリ・プラグインの実行は、<code>package</code>ビルド・フェーズにバインドされます。</span> </p>

<markup
lang="xml"

>&lt;plugin&gt;
    &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
    &lt;artifactId&gt;maven-assembly-plugin&lt;/artifactId&gt;
    &lt;version&gt;${maven.assembly.plugin.version}&lt;/version&gt;
    &lt;executions&gt;
        &lt;execution&gt;
            &lt;id&gt;prepare-image&lt;/id&gt;
            &lt;phase&gt;package&lt;/phase&gt;
            &lt;goals&gt;
                &lt;goal&gt;single&lt;/goal&gt;
            &lt;/goals&gt;
            &lt;configuration&gt;
                &lt;finalName&gt;docker&lt;/finalName&gt;
                &lt;appendAssemblyId&gt;false&lt;/appendAssemblyId&gt;
                &lt;descriptors&gt;
                    &lt;descriptor&gt;${project.basedir}/src/assembly/image-assembly.xml&lt;/descriptor&gt;
                &lt;/descriptors&gt;
                &lt;attach&gt;false&lt;/attach&gt;
            &lt;/configuration&gt;
        &lt;/execution&gt;
    &lt;/executions&gt;
&lt;/plugin&gt;</markup>

<p><span class="merged" id="all.2Obon8" title="原文 : The image-assembly.xml descriptor file is shown below, and configures the following:"><code>image-assembly.xml</code>記述子ファイルを次に示します。次を構成します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2EeHCL" title="原文 : The &lt;format&gt;dir&lt;/format&gt; element tells the assembly plugin to assemble all the artifacts into a directory."><code>&lt;format>dir&lt;/format></code>要素は、すべてのアーティファクトをディレクトリにアセンブルするように、アセンブリ・プラグインに指示します。</span></p>

</li>
<li>
<p><span class="merged" id="all.FbhFc" title="原文 : There are two &lt;fileSets&gt; configured:">2つの<code>&lt;fileSets></code>が構成されています:</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.4RxPnS" title="原文 : The first copies any class files in target/classes to app/classes (which will actually be target/docker/app/classes)">最初のスクリプトは、<code>target/classes</code>のすべてのクラス・ファイルを<code>app/classes</code>にコピーします(実際は<code>target/docker/app/classes</code>になります)</span></p>

</li>
<li>
<p><span class="merged" id="all.1XO8oK" title="原文 : The second copies all files under src/docker (i.e. the Dockerfile) into target/docker">2番目は、<code>src/docker</code> (つまり<code>Dockerfile</code>)のすべてのファイルを<code>target/docker</code>にコピー</span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.3ZN9wX.spl1" title="原文 : The &lt;dependencySets&gt; configuration copies all the project dependencies (including transitive dependencies) to the app/libs directory (actually the target/docker/app/libs directory)."><code>&lt;dependencySets></code>構成では、すべてのプロジェクト依存関係(推移的依存関係を含む)が<code>app/libs</code>ディレクトリ(実際は<code>target/docker/app/libs</code>ディレクトリ)にコピーされます。</span> <span class="merged" id="all.3ZN9wX.spl2" title="原文 : Any version information will be stripped from the files, so coherence-22.06.10.jar would become coherence.jar.">バージョン情報はファイルから取り除かれるため、<code>coherence-22.06.10.jar</code>は<code>coherence.jar</code>になります。</span> </p>

</li>
</ul>
<markup
lang="xml"
title="src/assembly/image-assembly.xml"
>&lt;assembly xmlns="http://maven.apache.org/ASSEMBLY/2.1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/ASSEMBLY/2.1.0 http://maven.apache.org/xsd/assembly-2.1.0.xsd"&gt;
  &lt;id&gt;image&lt;/id&gt;
  &lt;formats&gt;
    &lt;format&gt;dir&lt;/format&gt;
  &lt;/formats&gt;

  &lt;includeBaseDirectory&gt;false&lt;/includeBaseDirectory&gt;

  &lt;fileSets&gt;
    &lt;!-- copy the module's compiled classes --&gt;
    &lt;fileSet&gt;
      &lt;directory&gt;target/classes&lt;/directory&gt;
      &lt;outputDirectory&gt;app/classes&lt;/outputDirectory&gt;
      &lt;fileMode&gt;755&lt;/fileMode&gt;
      &lt;filtered&gt;false&lt;/filtered&gt;
    &lt;/fileSet&gt;
    &lt;!-- copy the Dockerfile --&gt;
    &lt;fileSet&gt;
      &lt;directory&gt;${project.basedir}/src/docker&lt;/directory&gt;
      &lt;outputDirectory/&gt;
      &lt;fileMode&gt;755&lt;/fileMode&gt;
    &lt;/fileSet&gt;
  &lt;/fileSets&gt;

  &lt;!-- copy the application dependencies --&gt;
  &lt;dependencySets&gt;
    &lt;dependencySet&gt;
      &lt;outputDirectory&gt;app/libs&lt;/outputDirectory&gt;
      &lt;directoryMode&gt;755&lt;/directoryMode&gt;
      &lt;fileMode&gt;755&lt;/fileMode&gt;
      &lt;unpack&gt;false&lt;/unpack&gt;
      &lt;useProjectArtifact&gt;false&lt;/useProjectArtifact&gt;
      &lt;!-- strip the version from the jar files --&gt;
      &lt;outputFileNameMapping&gt;${artifact.artifactId}${dashClassifier?}.${artifact.extension}&lt;/outputFileNameMapping&gt;
    &lt;/dependencySet&gt;
  &lt;/dependencySets&gt;
&lt;/assembly&gt;</markup>

<p><span class="merged" id="all.3hrMB9" title="原文 : Running the following command will pull all the required image artifacts and Dockerfile into the target/docker directory:">次のコマンドを実行すると、必要なすべてのイメージ・アーティファクトおよび<code>Dockerfile</code>が<code>target/docker</code>ディレクトリにプルされます:</span></p>

<markup
lang="bash"

>./mvnw package</markup>

</div>
</div>

<h3 id="gradle"><span class="merged" id="all.3TGFlW" title="原文 : Using Gradle">Gradleの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.K2k5E.spl1" title="原文 : To assemble the image artifacts using Maven, everything is configured in the Maven build.gradle file.">Mavenを使用してイメージ・アーティファクトを組み立てるには、すべてMaven <code>build.gradle</code>ファイルに構成されます。</span> <span class="merged" id="all.K2k5E.spl2" title="原文 : The Gradle build will pull all the artifacts required in the image, including the Dockerfile into a directory under build\docker.">Gradleビルドでは、イメージに必要なすべてのアーティファクト(<code>Dockerfile</code>を含む)が<code>build\docker</code>の下のディレクトリにプルされます。</span> </p>


<h4 id="_adding_dependencies_2"><span class="merged" id="all.xk2KX.1"  title="原文:: Adding Dependencies">依存関係の追加</span></h4>
<div class="section">
<p><span class="merged" id="all.XvJUp.1" title="原文 : In the example the coherence-bom is added to the &lt;dependencyManagement&gt; section as an import, to ensure consistent versioning of other Coherence modules.">この例では、<code>coherence-bom</code>がインポートとして<code>&lt;dependencyManagement></code>セクションに追加され、他のCoherenceモジュールの一貫したバージョニングが保証されます。</span></p>

<p><span class="merged" id="all.4AI3tk" title="原文 : In the build.gradle file we add the bom as a platform dependency and then add dependencies on coherence and coherence-json."><code>build.gradle</code>ファイルで、bomをプラットフォームの依存関係として追加し、<code>coherence</code>および<code>coherence-json</code>に依存関係を追加します。</span></p>

<markup
lang="groovy"
title="build.gradle"
>dependencies {
    implementation platform("com.oracle.coherence.ce:coherence-bom:22.06.10")

    implementation "com.oracle.coherence.ce:coherence"
    implementation "com.oracle.coherence.ce:coherence-json"
    implementation "com.oracle.coherence.ce:coherence-grpc-proxy"
}</markup>

</div>

<h4 id="_assembling_the_image_artifacts_2"><span class="merged" id="all.YMTE.1" title="原文 : Assembling the Image Artifacts">イメージ・アーティファクトのアセンブル</span></h4>
<div class="section">
<p><span class="merged" id="all.1kyIDk.spl1" title="原文 : To assemble all the image artifacts into the build/docker directory, the Gradle copy task can be used.">すべてのイメージ・アーティファクトを<code>build/docker</code>ディレクトリにアセンブルするには、Gradleコピー・タスクを使用できます。</span> <span class="merged" id="all.1kyIDk.spl2" title="原文 : There will be multiple copy tasks to copy each type of artifact, the dependencies, any compile classes, and the Dockerfile.">各タイプのアーティファクト、依存関係、コンパイル・クラスおよび<code>Dockerfile</code>をコピーする複数のコピー・タスクがあります。</span> </p>

<p><span class="merged" id="all.1IrUKQ.spl1" title="原文 : The following task named copyDependencies is added to build.gradle to copy the dependencies."><code>copyDependencies</code>という名前の次のタスクが<code>build.gradle</code>に追加され、依存関係がコピーされます。</span> <span class="merged" id="all.1IrUKQ.spl2" title="原文 : This task has additional configuration to rename the jar files to strip off any version.">このタスクには、バージョンを削除するためにjarファイルの名前を変更するための追加構成があります。</span> </p>

<markup
lang="groovy"
title="build.gradle"
>task copyDependencies(type: Copy) {
    from configurations.runtimeClasspath
    into "$buildDir/docker/app/libs"
    configurations.runtimeClasspath.resolvedConfiguration.resolvedArtifacts.each {
        rename "${it.artifact.name}-${it.artifactId.componentIdentifier.version}", "${it.artifact.name}"
    }
}</markup>

<p><span class="merged" id="all.2qhboz" title="原文 : The following task named copyClasses copies any compiled classes (although this example does not actually have any)."><code>copyClasses</code>という名前の次のタスクでは、コンパイル済クラスがすべてコピーされます(ただし、この例では実際には何もありません)。</span></p>

<markup
lang="groovy"
title="build.gradle"
>task copyClasses(type: Copy) {
    dependsOn classes
    from "$buildDir/classes/java/main"
    into "$buildDir/docker/app/classes"
}</markup>

<p><span class="merged" id="all.3mB81J" title="原文 : The final copy task named copyDocker copies the contents of the src/docker directory:"><code>copyDocker</code>という名前の最後のコピー・タスクは、<code>src/docker</code>ディレクトリの内容をコピーします:</span></p>

<markup
lang="groovy"
title="build.gradle"
>task copyDocker(type: Copy) {
    from "src/docker"
    into "$buildDir/docker"
}</markup>

<p><span class="merged" id="all.2Tj4hi" title="原文 : To be able to run the image assembly as a single command, an empty task named `` is created that depends on all the copy tasks.">イメージ・アセンブリを単一のコマンドとして実行できるように、すべてのコピー・タスクに依存する''という名前の空のタスクが作成されます。</span></p>

<p><span class="merged" id="all.3RBpP1" title="原文 : Running the following command will pull all the required image artifacts and Dockerfile into the build/docker directory:">次のコマンドを実行すると、必要なすべてのイメージ・アーティファクトおよび<code>Dockerfile</code>が<code>build/docker</code>ディレクトリにプルされます:</span></p>

<markup
lang="bash"

>./gradlew assembleImage</markup>

</div>
</div>
</div>

<h2 id="_build_the_image"><span class="merged" id="all.1o3aGx.1" title="原文 : Build the Image">イメージの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.28X4WM" title="原文 : After running the Maven or Gradle commands to assemble the image artifacts, Docker can be used to actually build the image from the relevant docker/ directory.">MavenまたはGradleコマンドを実行してイメージ・アーティファクトを組み立てた後、Dockerを使用して、関連する<code>docker/</code>ディレクトリからイメージを実際にビルドできます。</span></p>

<p><span class="merged" id="all.197Maa" title="原文 : Using Maven:">Mavenの使用:</span></p>

<markup
lang="bash"

>cd target/docker
docker build -t simple-coherence-server:1.0.0 .</markup>

<p><span class="merged" id="all.gzS89" title="原文 : Using Gradle:">Gradleの使用:</span></p>

<markup
lang="bash"

>cd build/docker
docker build -t simple-coherence-server:1.0.0 .</markup>

<p><span class="merged" id="all.4WljDd.spl1" title="原文 : The command above will create an image named simple-coherence-server:1.0.0.">上のコマンドは、<code>simple-coherence-server:1.0.0</code>という名前のイメージを作成します。</span> <span class="merged" id="all.4WljDd.spl2" title="原文 : Listing the local images should show the new images, similar to the output below:">ローカル・イメージを一覧表示すると、次のような新しいイメージが表示されます:</span> </p>

<markup
lang="bash"

>$ docker images | grep simple
simple-coherence-server   1.0.0   1613cd3b894e   51 years ago  227MB</markup>

</div>
</doc-view>
