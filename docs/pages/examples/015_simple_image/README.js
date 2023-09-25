<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_example_coherence_image_using_jib"><span class="merged" id="all.2o9WSt" title="原文 : Example Coherence Image using JIB">JIBを使用したCoherenceイメージの例</span></h2>
<div class="section">
<p><span class="merged" id="all.1y2M5M.spl1" title="原文 : This example shows how to build a simple Coherence server image using JIB with either Maven or Gradle.">この例では、MavenまたはGradleを使用して<a href="https://github.com/GoogleContainerTools/jib/blob/master/README.md" id="" target="_blank" >JIB</a>を使用して単純なCoherenceサーバー・イメージをビルドする方法を示します。</span> <span class="merged" id="all.1y2M5M.spl2" title="原文 : When building with Maven the project uses the JIB Maven Plugin.">Mavenを使用してビルドする場合、プロジェクトでは<a href="https://github.com/GoogleContainerTools/jib/blob/master/jib-maven-plugin" id="" target="_blank" >「JIB Mavenプラグイン」</a>を使用します。</span> <span class="merged" id="all.1y2M5M.spl3" title="原文 : When building with Gradle the project uses the JIB Gradle Plugin.">Gradleを使用してビルドする場合、プロジェクトは<a href="https://github.com/GoogleContainerTools/jib/tree/master/jib-gradle-plugin" id="" target="_blank" >「JIB Gradleプラグイン」</a>を使用します。</span> </p>

<p><span class="merged" id="all.2eLfkn" title="原文 : The Coherence Operator has out of the box support for images built with JIB, for example it can automatically detect the class path to use and run the correct main class.">Coherence Operatorには、JIBでビルドされたイメージがすぐにサポートされます。たとえば、使用するクラス・パスを自動的に検出し、正しいメイン・クラスを実行できます。</span></p>

<p><span class="merged" id="all.40O13R" title="原文 : This simple application does not actually contain any code, a real application would obviously contain code and other resources.">この単純なアプリケーションには実際にはコードが含まれず、実際のアプリケーションには明らかにコードやその他のリソースが含まれます。</span></p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.1"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.4L9d6t" title="原文 :  The complete source code for this example is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />この例の完全なソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/015_simple_image" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>

<h3 id="_add_dependencies"><span class="merged" id="all.CXQ5D"  title="原文:: Add Dependencies">依存関係の追加</span></h3>
<div class="section">
<p><span class="merged" id="all.1pSBfj.spl1" title="原文 : To build a Coherence application there will obviously be at a minimum a dependency on coherence.jar.">Coherenceアプリケーションをビルドするには、少なくとも<code>coherence.jar</code>への依存関係があります。</span> <span class="merged" id="all.1pSBfj.spl2" title="原文 : Optionally we can also add dependencies on other Coherence modules.">オプションで、他のCoherenceモジュールに依存関係を追加することもできます。</span> <span class="merged" id="all.1pSBfj.spl3" title="原文 : In this example we’re going to add json support to the application by adding a dependency on coherence-json.">この例では、<code>coherence-json</code>への依存関係を追加して、jsonサポートをアプリケーションに追加します。</span> </p>

<p><span class="merged" id="all.2iqBU9.spl1" title="原文 : In the example we use the coherence-bom which ensures that we have consistent use of other Coherence modules.">この例では、<code>coherence-bom</code>を使用して、他のCoherenceモジュールを一貫して使用できるようにします。</span> <span class="merged" id="all.2iqBU9.spl2" title="原文 : In the pom.xml we have a dependencyManagement section."><code>pom.xml</code>には、<code>dependencyManagement</code>セクションがあります。</span> </p>

<markup
lang="xml"
title="pom.xml"
>    &lt;dependencyManagement&gt;
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

<p><span class="merged" id="all.45fURA" title="原文 : In the build.gradle file we add the bom as a platform dependency."><code>build.gradle</code>ファイルで、bomをプラットフォームの依存関係として追加します。</span></p>

<markup
lang="groovy"
title="build.gradle"
>dependencies {
    implementation platform("com.oracle.coherence.ce:coherence-bom:22.06.4")</markup>

<p><span class="merged" id="all.1kOa4P" title="原文 : We can then add the coherence and coherence-json modules as dependencies">その後、<code>coherence</code>および<code>coherence-json</code>モジュールを依存関係として追加できます</span></p>

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
    &lt;/dependencies&gt;</markup>

<p><span class="merged" id="all.45fURA.1" title="原文 : In the build.gradle file we add the bom as a platform dependency."><code>build.gradle</code>ファイルで、bomをプラットフォームの依存関係として追加します。</span></p>

<markup
lang="groovy"
title="build.gradle"
>dependencies {
    implementation platform("com.oracle.coherence.ce:coherence-bom:22.06.4")

    implementation "com.oracle.coherence.ce:coherence"
    implementation "com.oracle.coherence.ce:coherence-json"
}</markup>

</div>

<h3 id="_add_the_jib_plugin"><span class="merged" id="all.3dIgWX" title="原文 : Add the JIB Plugin">JIBプラグインの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.vdSi4" title="原文 : To build the image using JIB we need to add the JIB plugin to the project.">JIBを使用してイメージを作成するには、JIBプラグインをプロジェクトに追加する必要があります。</span></p>

<p><span class="merged" id="all.361JtM" title="原文 : In the pom.xml file we add JIB to the plugins section."><code>pom.xml</code>ファイルで、<code>plugins</code>セクションにJIBを追加します。</span></p>

<markup
lang="xml"
title="pom.xml"
>    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;com.google.cloud.tools&lt;/groupId&gt;
                &lt;artifactId&gt;jib-maven-plugin&lt;/artifactId&gt;
                &lt;version&gt;3.3.2&lt;/version&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;</markup>

<p><span class="merged" id="all.4WeLuL" title="原文 : In the build.gradle file we add JIB to the plugins section."><code>build.gradle</code>ファイルで、<code>plugins</code>セクションにJIBを追加します。</span></p>

<markup
lang="groovy"
title="build.gradle"
>plugins {
    id 'java'
    id 'com.google.cloud.tools.jib' version '3.3.2'
}</markup>

</div>

<h3 id="_configure_the_jib_plugin"><span class="merged" id="all.2MuizG" title="原文 : Configure the JIB Plugin">JIBプラグインの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.4BVVrN.spl1" title="原文 : Now we can configure the JIB plugin with the properties specific to our image.">ここで、JIBプラグインは、イメージ固有のプロパティを使用して構成できます。</span> <span class="merged" id="all.4BVVrN.spl2" title="原文 : In this example the configuration is very simple, the JIB plugin documentation shows many more options.">この例では、構成は非常に簡単です。JIBプラグインのドキュメントには、さらに多くのオプションが表示されます。</span> </p>

<p><span class="merged" id="all.3FCWI2.spl1" title="原文 : We are going to set the following options: * The name and tags for the image we will build. * The main class that we will run as the entry point to the image - in this case com.tangosol.net.Coherence. * The base image.">次のオプションを設定: *作成するイメージの名前とタグ。*イメージのエントリ・ポイントとして実行するメイン・クラス - この場合、<code>com.tangosol.net.Coherence</code>. *ベース・イメージ。</span> <span class="merged" id="all.3FCWI2.spl2" title="原文 : In this example we will us a distroless Java 11 image.">この例では、Java 11のわかりにくいイメージです。</span> <span class="merged" id="all.3FCWI2.spl3" title="原文 : A distroless image is more secure as it contains nothing more than core linux and a JRE.">ゆがみのないイメージは、コアlinuxおよびJREが含まれないため、より安全です。</span> <span class="merged" id="all.3FCWI2.spl4" title="原文 : There is no shell or other tools to introduce CVEs.">CVEを導入するためのシェルやその他のツールはありません。</span> <span class="merged" id="all.3FCWI2.spl5" title="原文 : The downside of this is that there is no shell, so you cannot exec into the running container, or use a shell script as an entry point.">これはシェルが存在しないため、実行中のコンテナに実行したり、シェル・スクリプトをエントリ・ポイントとして使用したりすることはできません。</span> <span class="merged" id="all.3FCWI2.spl6" title="原文 : If you don;t need those things a distroless image is a great choice.">必要としないならば、不完全なイメージは素晴らしい選択です。</span> </p>


<h4 id="_maven_configuration"><span class="merged" id="all.1XHZ7d" title="原文 : Maven Configuration">Maven構成</span></h4>
<div class="section">
<p><span class="merged" id="all.3lMeMD" title="原文 : In the pom.xml file we configure the plugin where it is declared in the plugins section:"><code>pom.xml</code>ファイルで、<code>plugins</code>セクションで宣言されるプラグインを構成します:</span></p>

<markup
lang="xml"
title="pom.xml"
>&lt;plugin&gt;
    &lt;groupId&gt;com.google.cloud.tools&lt;/groupId&gt;
    &lt;artifactId&gt;jib-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;${version.plugin.jib}&lt;/version&gt;
    &lt;configuration&gt;
        &lt;from&gt;
            &lt;image&gt;gcr.io/distroless/java11-debian11&lt;/image&gt;    <span class="conum" data-value="1" />
        &lt;/from&gt;
        &lt;to&gt;
            &lt;image&gt;${project.artifactId}&lt;/image&gt;        <span class="conum" data-value="2" />
            &lt;tags&gt;
                &lt;tag&gt;${project.version}&lt;/tag&gt;           <span class="conum" data-value="3" />
                &lt;tag&gt;latest&lt;/tag&gt;
            &lt;/tags&gt;
        &lt;/to&gt;
        &lt;container&gt;
            &lt;mainClass&gt;com.tangosol.net.Coherence&lt;/mainClass&gt;  <span class="conum" data-value="4" />
            &lt;format&gt;OCI&lt;/format&gt;                               <span class="conum" data-value="5" />
        &lt;/container&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2yL7xR" title="原文 : The base image will be gcr.io/distroless/java11-debian11">ベース・イメージは<code>gcr.io/distroless/java11-debian11</code>になります</span></li>
<li data-value="2"><span class="merged" id="all.23IkHV" title="原文 : The image name is set to the Maven module name using the property ${project.artifactId}">イメージ名は、プロパティ<code>${project.artifactId}</code>を使用してMavenモジュール名に設定されます</span></li>
<li data-value="3"><span class="merged" id="all.2PiSK1" title="原文 : There will be two tags for the image, latest and the project version taken from the ${project.version} property.">イメージには、<code>latest</code>と<code>${project.version}</code>プロパティから取得されたプロジェクト・バージョンの2つのタグがあります。</span></li>
<li data-value="4"><span class="merged" id="all.kjjP0" title="原文 : The main class to use when the image is run is set to com.tangosol.net.Coherence">イメージの実行時に使用するメイン・クラスは、<code>com.tangosol.net.Coherence</code>に設定されています</span></li>
<li data-value="5"><span class="merged" id="all.TbCGj" title="原文 : The image type is set to OCI">イメージ・タイプは<code>OCI</code>に設定されます</span></li>
</ul>
</div>

<h4 id="_gradle_configuration"><span class="merged" id="all.4B5iPQ" title="原文 : Gradle Configuration">Gradle構成</span></h4>
<div class="section">
<p><span class="merged" id="all.2iwrTB" title="原文 : In the build.gradle file we configure JIB in the jib section:"><code>build.gradle</code>ファイルで、<code>jib</code>セクションでJIBを構成します:</span></p>

<markup
lang="groovy"
title="build.gradle"
>jib {
  from {
    image = 'gcr.io/distroless/java11-debian11'    <span class="conum" data-value="1" />
  }
  to {
    image = "${project.name}"              <span class="conum" data-value="2" />
    tags = ["${version}", 'latest']        <span class="conum" data-value="3" />
  }
  container {
    mainClass = 'com.tangosol.net.Coherence'  <span class="conum" data-value="4" />
    format = 'OCI'                            <span class="conum" data-value="5" />
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2yL7xR.1" title="原文 : The base image will be gcr.io/distroless/java11-debian11">ベース・イメージは<code>gcr.io/distroless/java11-debian11</code>になります</span></li>
<li data-value="2"><span class="merged" id="all.23IkHV.1" title="原文 : The image name is set to the Maven module name using the property ${project.artifactId}">イメージ名は、プロパティ<code>${project.artifactId}</code>を使用してMavenモジュール名に設定されます</span></li>
<li data-value="3"><span class="merged" id="all.2PiSK1.1" title="原文 : There will be two tags for the image, latest and the project version taken from the ${project.version} property.">イメージには、<code>latest</code>と<code>${project.version}</code>プロパティから取得されたプロジェクト・バージョンの2つのタグがあります。</span></li>
<li data-value="4"><span class="merged" id="all.kjjP0.1" title="原文 : The main class to use when the image is run is set to com.tangosol.net.Coherence">イメージの実行時に使用するメイン・クラスは、<code>com.tangosol.net.Coherence</code>に設定されています</span></li>
<li data-value="5"><span class="merged" id="all.TbCGj.1" title="原文 : The image type is set to OCI">イメージ・タイプは<code>OCI</code>に設定されます</span></li>
</ul>
</div>
</div>

<h3 id="_build_the_image"><span class="merged" id="all.1o3aGx" title="原文 : Build the Image">イメージの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.1zbO8y.spl1" title="原文 : To create the server image run the relevant commands as documented in the JIB plugin documentation.">サーバー・イメージを作成するには、JIBプラグインのドキュメントに記載されている関連コマンドを実行します。</span> <span class="merged" id="all.1zbO8y.spl2" title="原文 : In this case we’re going to build the image using Docker, although JIB offers other alternatives.">この場合、Dockerを使用してイメージを作成しますが、JIBは他の選択肢を提供します。</span> </p>

<p><span class="merged" id="all.2soSXi" title="原文 : Using Maven we run:">Mavenを使用して、次を実行します:</span></p>

<markup
lang="bash"

>./mvnw compile jib:dockerBuild</markup>

<p><span class="merged" id="all.42cV20" title="原文 : Using Gradle we run:">Gradleを使用して、次を実行します:</span></p>

<markup
lang="bash"

>./gradlew compileJava jibDockerBuild</markup>

<p><span class="merged" id="all.PFq31.spl1" title="原文 : The command above will create an image named simple-coherence with two tags, latest and 1.0.0.">前述のコマンドでは、<code>latest</code>および<code>1.0.0</code>という2つのタグを持つ<code>simple-coherence</code>という名前のイメージが作成されます。</span> <span class="merged" id="all.PFq31.spl2" title="原文 : Listing the local images should show the new images.">ローカル・イメージをリストすると、新しいイメージが表示されます。</span> </p>

<markup
lang="bash"

>$ docker images | grep simple
simple-coherence   1.0.0   1613cd3b894e   51 years ago  227MB
simple-coherence   latest  1613cd3b894e   51 years ago  227MB</markup>

</div>

<h3 id="_run_the_image"><span class="merged" id="all.g38mF" title="原文 : Run the Image">イメージの実行</span></h3>
<div class="section">
<p><span class="merged" id="all.4GdfWM.spl1" title="原文 : The image just built can be run using Docker (or your chosen container tool).">作成したイメージは、Docker (または選択したコンテナ・ツール)を使用して実行できます。</span> <span class="merged" id="all.4GdfWM.spl2" title="原文 : In this example we’ll run it interactively, just to prove it runs and starts Coherence.">この例では、実行を証明してCoherenceを起動するだけで、対話的に実行します。</span> </p>

<markup
lang="bash"

>docker run -it --rm simple-coherence:latest</markup>

<p><span class="merged" id="all.4XrBwd" title="原文 : The console output should display Coherence starting and finally show the Coherence service list, which will look something like this:">コンソール出力にCoherenceが起動し、最後にCoherenceサービス・リストが表示されます。このリストは次のようになります:</span></p>

<markup
lang="bash"

>Services
  (
  ClusterService{Name=Cluster, State=(SERVICE_STARTED, STATE_JOINED), Id=0, OldestMemberId=1}
  TransportService{Name=TransportService, State=(SERVICE_STARTED), Id=1, OldestMemberId=1}
  InvocationService{Name=Management, State=(SERVICE_STARTED), Id=2, OldestMemberId=1}
  PartitionedCache{Name=$SYS:Config, State=(SERVICE_STARTED), Id=3, OldestMemberId=1, LocalStorage=enabled, PartitionCount=257, BackupCount=1, AssignedPartitions=257, BackupPartitions=0, CoordinatorId=1}
  PartitionedCache{Name=PartitionedCache, State=(SERVICE_STARTED), Id=4, OldestMemberId=1, LocalStorage=enabled, PartitionCount=257, BackupCount=1, AssignedPartitions=257, BackupPartitions=0, CoordinatorId=1}
  PartitionedCache{Name=PartitionedTopic, State=(SERVICE_STARTED), Id=5, OldestMemberId=1, LocalStorage=enabled, PartitionCount=257, BackupCount=1, AssignedPartitions=257, BackupPartitions=0, CoordinatorId=1}
  ProxyService{Name=Proxy, State=(SERVICE_STARTED), Id=6, OldestMemberId=1}
  )</markup>

<p><span class="merged" id="all.4BnZhl" title="原文 : Press ctrl-C to exit the container, the --rm option we used above wil automatically delete the stopped container."><code>ctrl-C</code>を押してコンテナを終了します。前で使用した<code>--rm</code>オプションは、停止したコンテナを自動的に削除します。</span></p>

<p><span class="merged" id="all.4WJPPl" title="原文 : We now have a simple Coherence image we can use in other examples and when trying out the Coherence Operator.">これで、他の例やCoherence Operatorを試すときに、簡単なCoherenceイメージを使用できるようになりました。</span></p>

</div>

<h3 id="_configuring_the_image_at_runtime"><span class="merged" id="all.Ngwiq" title="原文 : Configuring the Image at Runtime">実行時のイメージの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.1lcmSW.spl1" title="原文 : With recent Coherence versions, Coherence configuration items that can be set using system properties prefixed with coherence. can also be set using environment variables.">最新のCoherenceバージョンでは、プレフィクス<code>coherence.</code>が付いたシステム・プロパティを使用して設定できるCoherence構成アイテムも、環境変数を使用して設定できます。</span> <span class="merged" id="all.1lcmSW.spl2" title="原文 : This makes it simple to set those properties when running containers because environment variables can be set from the commandline.">これにより、環境変数をコマンドラインから設定できるため、コンテナの実行時にこれらのプロパティの設定が簡単になります。</span> </p>

<p><span class="merged" id="all.p46qU.spl1" title="原文 : To set a property the system property name needs to be converted to an environment variable name.">プロパティを設定するには、システム・プロパティ名を環境変数名に変換する必要があります。</span> <span class="merged" id="all.p46qU.spl2" title="原文 : This is done by converting the name to uppercase and replacing dots (&apos;.&apos;) with underscores (&apos;_&apos;).">これは、名前を大文字に変換し、ドット('.')をアンダースコア('_')で置き換えることによって行われます。</span> </p>

<p><span class="merged" id="all.19rKpn.spl1" title="原文 : For example, to set the cluster name we would set the coherence.cluster system property.">たとえば、クラスタ名を設定するには、<code>coherence.cluster</code>システム・プロパティを設定します。</span> <span class="merged" id="all.19rKpn.spl2" title="原文 : To run the image and set cluster name with an environment variable we convert coherence.cluster to COHERENCE_CLUSTER and run:">イメージを実行し、環境変数を使用してクラスタ名を設定するには、<code>coherence.cluster</code>を<code>COHERENCE_CLUSTER</code>に変換して実行します:</span> </p>

<markup
lang="bash"

>docker run -it --rm -e COHERENCE_CLUSTER=my-cluster simple-coherence:latest</markup>

<p><span class="merged" id="all.3xrOT1" title="原文 : This is much simpler than trying to change the Java commandline the image entrypoint uses.">これは、イメージ・エンティティで使用されるJavaコマンドラインを変更しようとするよりもはるかに簡単です。</span></p>

</div>
</div>
</doc-view>
