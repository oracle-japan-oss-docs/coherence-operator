<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coherence_extend_clients"><span class="merged" id="all.3PHhZ6" title="原文 : Coherence Extend Clients">Coherence拡張クライアント</span></h2>
<div class="section">
<p><span class="merged" id="all.1rI2Zb.spl1" title="原文 : Coherence*Extend is the mechanism used by remote Coherence client applications to connect to a Coherence cluster.">Coherence*Extendは、リモートCoherenceクライアント・アプリケーションがCoherenceクラスタに接続するために使用するメカニズムです。</span> <span class="merged" id="all.1rI2Zb.spl2"  title="原文: Coherence*Extend includes support for native Coherence clients (Java, C++, and .NET) and non-native Coherence clients (REST and Memcached).">Coherence*Extendには、ネイティブのCoherenceクライアント(Java、C++および.NET)および非ネイティブのCoherenceクライアント(RESTおよびmemcached)のサポートが含まれます。</span> <span class="merged" id="all.1rI2Zb.spl3" title="原文 : Coherence*Extend can be used to connect clients to Coherence clusters running in Kubernetes.">Coherence*Extendを使用すると、Kubernetesで実行されているCoherenceクラスタにクライアントを接続できます。</span> <span class="merged" id="all.1rI2Zb.spl4" title="原文 : There are two scenarios, the client could also be in kubernetes, or the client could be external connecting via a service or some other form of ingress.">2つのシナリオがあり、クライアントはkubernetesにも存在もあり、クライアントがサービスを介して外部に接続することも、他の形式のイングレスで接続することもできます。</span> <span class="merged" id="all.1rI2Zb.spl5" title="原文 : There are different ways to configure the client in these scenarios.">これらのシナリオでは、クライアントを構成する様々な方法があります。</span> </p>

<p><span class="merged" id="all.2iuV5X.spl1" title="原文 : These examples are not going to cover all the possible use-cases for Extend, the examples are specifically about different ways to connect a client to a Coherence cluster running inside kubernetes.">これらの例は、Extendの考えられるすべてのユースケースを対象としません。具体的には、kubernetes内で動作するCoherenceクラスタにクライアントを接続する様々な方法について例です。</span> <span class="merged" id="all.2iuV5X.spl2" title="原文 : Extend is extensively documented in the official Coherence documentation.">拡張については、<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.2206/develop-remote-clients/getting-started-coherenceextend.html" id="" target="_blank" >「公式のCoherenceドキュメント」</a>を参照してください。</span> </p>


<h3 id="_prerequisites"><span class="merged" id="all.2LZvWc.4"  title="原文:: Prerequisites">前提条件</span></h3>
<div class="section">

<h4 id="_server_image"><span class="merged" id="all.1Hj8Ck"  title="原文:: Server Image">サーバー・イメージ</span></h4>
<div class="section">
<p><span class="merged" id="all.1TMlzH.spl1" title="原文 : To show Extend working the example will require a Coherence cluster to connect to.">Extendの動作を示すには、Coherenceクラスタに接続する必要があります。</span> <span class="merged" id="all.1TMlzH.spl2" title="原文 : For the server the example will use the image built in the Build a Coherence Server Image using JIB example (or could also use the Build a Coherence Server Image using a Dockerfile example.">サーバーの場合、この例では<router-link to="/examples/015_simple_image/README">「JIBを使用したCoherenceサーバー・イメージのビルド」</router-link>の例で作成したイメージを使用します(または、<router-link to="/examples/016_simple_docker_image/README">「Dockerfileを使用したCoherenceサーバー・イメージのビルド」</router-link>の例を使用することもできます)。</span> <span class="merged" id="all.1TMlzH.spl3" title="原文 : If you have not already done so, you should build the image from that example, so it is available to deploy to your Kubernetes cluster.">まだ作成していない場合は、この例からイメージをビルドして、Kubernetesクラスタにデプロイできるようにする必要があります。</span> </p>

</div>

<h4 id="_install_the_operator"><span class="merged" id="all.3Uw9Iy.1" title="原文 : Install the Operator">オペレータのインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.YmiWo.1.spl1" title="原文 : If you have not already done so, you need to install the Coherence Operator.">まだインストールしていない場合は、Coherence Operatorをインストールする必要があります。</span> <span class="merged" id="all.YmiWo.1.spl2" title="原文 : There are a few simple ways to do this as described in the Installation Guide"><router-link to="/docs/installation/01_installation">「インストール・ガイド」</router-link>で説明するように、いくつかの簡単な方法があります</span> </p>

</div>
</div>
</div>

<h2 id="_the_client_application"><span class="merged" id="all.3SWB5u"  title="原文:: The Client Application">クライアント・アプリケーション</span></h2>
<div class="section">
<p><span class="merged" id="all.4T4cPS" title="原文 : To demonstrate different configurations and connectivity we need a simple Extend client application.">様々な構成と接続性を示すには、単純なExtendクライアント・アプリケーションが必要です。</span></p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.5"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.4UzKbG" title="原文 :  The complete source code for this example is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />この例の完全なソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/025_extend_client" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>
<p><span class="merged" id="all.2IHqst.spl1" title="原文 : As the client application only needs to demonstrate connectivity to Coherence using different configurations it is not going to do very much.">クライアント・アプリケーションは、様々な構成を使用してCoherenceへの接続を示す必要があるため、あまり実行しません。</span> <span class="merged" id="all.2IHqst.spl2" title="原文 : There is a single class with a main method."><code>main</code>メソッドを持つ1つのクラスがあります。</span> <span class="merged" id="all.2IHqst.spl3" title="原文 : In the main method the code obtains a NamedMap from Coherence via Extend and does some simple put and get operations."><code>main</code>メソッドでは、コードはExtendを介してCoherenceから<code>NamedMap</code>を取得し、単純なputおよびget操作を実行します。</span> <span class="merged" id="all.2IHqst.spl4" title="原文 : If these all function correctly the application exits with an exit code of zero.">これらすべてが正しく機能する場合、アプリケーションは終了コード・ゼロで終了します。</span> <span class="merged" id="all.2IHqst.spl5" title="原文 : If there is an exception, the stack trace is printed and the application exits with an exit code of 1.">例外がある場合、スタック・トレースが出力され、アプリケーションは終了コード1で終了します。</span> </p>

<p><span class="merged" id="all.48H6pb" title="原文 : There are also some different cache configuration files for the different ways to configure Extend, these are covered in the relevant examples below.">また、Extendを構成する様々な方法について、いくつかの異なるキャッシュ構成ファイルもあります。これについては、次の関連する例で説明します。</span></p>

</div>

<h2 id="_building_the_client_image"><span class="merged" id="all.3akFXQ" title="原文 : Building the Client Image">クライアント・イメージのビルド</span></h2>
<div class="section">
<p><span class="merged" id="all.2sMBxX.spl1" title="原文 : The client application is both a Maven and Gradle project, so you can use whichever you are comfortable with.">クライアント・アプリケーションは、MavenプロジェクトとGradleプロジェクトの両方であるため、どちらでも使用可能です。</span> <span class="merged" id="all.2sMBxX.spl2" title="原文 : The only dependency the client application needs is coherence.jar.">クライアント・アプリケーションに必要な依存関係は、<code>coherence.jar</code>のみです。</span> </p>


<h3 id="_using_the_maven_or_gradle_jib_plugin"><span class="merged" id="all.gEL72" title="原文 : Using the Maven or Gradle JIB Plugin">MavenまたはGradle JIBプラグインの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1SEjql" title="原文 : The image can be built using the JIB plugin with either Maven or Gradle, as described below.">次に示すように、MavenまたはGradleのJIBプラグインを使用してイメージをビルドできます。</span></p>

<p><span class="merged" id="all.2soSXi.1" title="原文 : Using Maven we run:">Mavenを使用して、次を実行します:</span></p>

<markup
lang="bash"

>./mvnw compile jib:dockerBuild</markup>

<p><span class="merged" id="all.42cV20.1" title="原文 : Using Gradle we run:">Gradleを使用して、次を実行します:</span></p>

<markup
lang="bash"

>./gradlew compileJava jibDockerBuild</markup>

<p><span class="merged" id="all.2IAkmt.spl1" title="原文 : The command above will create an image named simple-extend-client with two tags, latest and 1.0.0.">前述のコマンドでは、<code>latest</code>および<code>1.0.0</code>という2つのタグを持つ<code>simple-extend-client</code>という名前のイメージが作成されます。</span> <span class="merged" id="all.2IAkmt.spl2" title="原文 : Listing the local images should show the new images.">ローカル・イメージをリストすると、新しいイメージが表示されます。</span> </p>

<markup
lang="bash"

>$ docker images | grep simple
simple-extend-client   1.0.0   1613cd3b894e   51 years ago  220MB
simple-extend-client   latest  1613cd3b894e   51 years ago  220MB</markup>

</div>

<h3 id="_using_a_dockerfile"><span class="merged" id="all.3FEwOC" title="原文 : Using a Dockerfile">Dockerfileの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1egLNN.spl1" title="原文 : Alternatively, if you cannot use the JIB plugin in your environment, the client image can be built using a simple Dockerfile and docker build command.">または、環境にJIBプラグインを使用できない場合は、単純なDockerfileおよび<code>docker build</code>コマンドを使用してクライアント・イメージをビルドできます。</span> <span class="merged" id="all.1egLNN.spl2" title="原文 : We will still use Maven or Gradle to pull all the required dependencies together.">引き続きMavenまたはGradleを使用して、必要なすべての依存関係をまとめます。</span> </p>

<p><span class="merged" id="all.2soSXi.2" title="原文 : Using Maven we run:">Mavenを使用して、次を実行します:</span></p>

<markup
lang="bash"

>./mvnw package
docker build -t simple-extend-client:1.0.0 -t simple-extend-client:latest target/docker</markup>

<p><span class="merged" id="all.42cV20.2" title="原文 : Using Gradle we run:">Gradleを使用して、次を実行します:</span></p>

<markup
lang="bash"

>./gradlew assembleImage
docker build -t simple-extend-client:1.0.0 -t simple-extend-client:latest build/docker</markup>

<p><span class="merged" id="all.1NAQMN" title="原文 : Again, the build should result in the Extend client images">再度、ビルドによってクライアント・イメージが拡張されます</span></p>

<p><span class="merged" id="all.2IAkmt.1.spl1" title="原文 : The command above will create an image named simple-extend-client with two tags, latest and 1.0.0.">前述のコマンドでは、<code>latest</code>および<code>1.0.0</code>という2つのタグを持つ<code>simple-extend-client</code>という名前のイメージが作成されます。</span> <span class="merged" id="all.2IAkmt.1.spl2" title="原文 : Listing the local images should show the new images.">ローカル・イメージをリストすると、新しいイメージが表示されます。</span> </p>

<markup
lang="bash"

>$ docker images | grep simple
simple-extend-client   1.0.0   1613cd3b894e   2 minutes ago  220MB
simple-extend-client   latest  1613cd3b894e   2 minutes ago  220MB</markup>

<p><span class="merged" id="all.yR1BT" title="原文 : If we tried to run the application or image at this point it would fail with an exception as there is no cluster to connect to.">この時点でアプリケーションまたはイメージを実行しようとすると、接続するクラスタがないため例外で失敗します。</span></p>

</div>
</div>

<h2 id="_extend_inside_kubernetes_using_the_coherence_nameservice"><span class="merged" id="all.4RIOkq" title="原文 : Extend Inside Kubernetes Using the Coherence NameService">Coherence NameServiceを使用したKubernetes内部の拡張</span></h2>
<div class="section">
<p><span class="merged" id="all.3amcUq.spl1" title="原文 : If the Extend client is going to run inside Kubernetes then we have a number of choices for configuration.">ExtendクライアントがKubernetes内で実行される場合、構成にはいくつかの選択肢があります。</span> <span class="merged" id="all.3amcUq.spl2" title="原文 : In this section we are going to use the simplest way to configure Extend in Coherence, which is to use the Coherence NameService.">この項では、CoherenceでExtendを構成する最も簡単な方法(Coherence NameServiceを使用)を使用します。</span> <span class="merged" id="all.3amcUq.spl3" title="原文 : In this configuration we do not need to specify any ports, the Extend proxy in the server cluster will bind to an ephemeral port.">この構成では、ポートを指定する必要はありません。サーバー・クラスタ内の拡張プロキシは一時ポートにバインドされます。</span> <span class="merged" id="all.3amcUq.spl4" title="原文 : The Extend client will then use the Coherence NameService to find the addresses and ports that the Extend proxy is listening on.">Extendクライアントは、Coherence NameServiceを使用して、Extendプロキシがリスニングしているアドレスおよびポートを検索します。</span> </p>


<h3 id="_proxy_server_configuration"><span class="merged" id="all.4TelXp"  title="原文:: Proxy Server Configuration">プロキシ・サーバーの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.3paSrR.spl1" title="原文 : The default cache configuration file, built into coherence.jar configures an Extend proxy that binds to an ephemeral port."><code>coherence.jar</code>に組み込まれたデフォルトのキャッシュ構成ファイルでは、一時ポートにバインドする拡張プロキシが構成されます。</span> <span class="merged" id="all.3paSrR.spl2" title="原文 : The proxy-scheme configuration looks like this:">プロキシ・スキーマの構成は次のようになります:</span> </p>

<markup
lang="xml"
title="coherence-cache-config.xml"
>    &lt;proxy-scheme&gt;
      &lt;service-name&gt;Proxy&lt;/service-name&gt;
      &lt;autostart system-property="coherence.proxy.enabled"&gt;true&lt;/autostart&gt;
    &lt;/proxy-scheme&gt;</markup>

<p><span class="merged" id="all.1ZFadO.spl1" title="原文 : That is all that is required in a cache configuration file to create a proxy service that will bind to an ephemeral port.">これは、エフェメラル・ポートにバインドするプロキシ・サービスを作成するためにキャッシュ構成ファイルで必要なすべてです。</span> <span class="merged" id="all.1ZFadO.spl2" title="原文 : The proxy is enabled by default, but could be disabled by setting the system property coherence.proxy.enabled to false.">プロキシはデフォルトで有効になっていますが、システム・プロパティ<code>coherence.proxy.enabled</code>をfalseに設定して無効にできます。</span> </p>

</div>

<h3 id="_deploy_the_server"><span class="merged" id="all.3FfRYe" title="原文 : Deploy the Server">サーバーのデプロイ</span></h3>
<div class="section">
<p><span class="merged" id="all.uYCKt.spl1" title="原文 : To run the NameService examples below the server needs to be deployed.">下のNameServiceの例を実行するには、サーバーをデプロイする必要があります。</span> <span class="merged" id="all.uYCKt.spl2" title="原文 : The example includes a manifests/ directory containing Kubernetes yaml files used by the example.">この例には、Kubernetes yamlファイルを含む<code>manifests/</code>ディレクトリが含まれています。</span> </p>

<p><span class="merged" id="all.1JBMIw.spl1" title="原文 : For the NameService examples below the server will use the default cache configuration file from coherence.jar which has the Proxy service configured above.">次のNameServiceの例では、サーバーが<code>coherence.jar</code>のデフォルトのキャッシュ構成ファイルを使用します。このファイルには、前述の<code>Proxy</code>サービスが構成されています。</span> <span class="merged" id="all.1JBMIw.spl2" title="原文 : The yaml to deploy the server cluster is in the manifests/default-server.yaml file.">サーバー・クラスタをデプロイするyamlは、<code>manifests/default-server.yaml</code>ファイルにあります。</span> </p>

<markup
lang="yaml"
title="manifests/default-server.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  image: simple-coherence:1.0.0
  replicas: 3
  coherence:
    cacheConfig: coherence-cache-config.xml</markup>

<p><span class="merged" id="all.24PgKV" title="原文 : The yaml above will deploy a three member cluster configured to use the default coherence-cache-config.xml configuration file.">前述のyamlは、デフォルトの<code>coherence-cache-config.xml</code>構成ファイルを使用するように構成された3つのメンバー・クラスタをデプロイします。</span></p>

<p><span class="merged" id="all.P1Egr.spl1" title="原文 : There are no additional ports exposed in the configuration.">構成に追加のポートは公開されていません。</span> <span class="merged" id="all.P1Egr.spl2" title="原文 : The Extend proxy will be listening on an ephemeral port, so we have no idea what that port will be.">Extendプロキシはエフェメラル・ポートでリスニングするため、そのポートが何であるかはわかりません。</span> </p>

<p><span class="merged" id="all.1oQqzw" title="原文 : We can deploy the server into the default namespace in kubernetes with the following command:">次のコマンドを使用して、kubernetesのデフォルトのネームスペースにサーバーをデプロイできます:</span></p>

<markup
lang="bash"

>kubectl apply -f manifests/default-server.yaml</markup>

<p><span class="merged" id="all.7BQ8" title="原文 : We can list the resources created by the Operator.">オペレータによって作成されたリソースをリストできます。</span></p>

<markup
lang="bash"

>kubectl get all</markup>

<p><span class="merged" id="all.4ayzey.1" title="原文 : Which should display something like this:">次のように表示されます:</span></p>

<markup
lang="bash"

>NAME            READY   STATUS    RESTARTS   AGE
pod/storage-0   1/1     Running   0          81s
pod/storage-1   1/1     Running   0          81s
pod/storage-2   1/1     Running   0          81s

NAME                    TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/storage-sts     ClusterIP   None         &lt;none&gt;        7/TCP     81s
service/storage-wka     ClusterIP   None         &lt;none&gt;        7/TCP     81s

NAME                       READY   AGE
statefulset.apps/storage   3/3     81s</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2ucgK1.1" title="原文 : We can see that the Operator has created a StatefulSet, with three Pods and there are two Services.">オペレータが<code>StatefulSet</code>を作成し、<code>Pods</code>が3つあり、<code>Services</code>が2つあることがわかります。</span></p>

</li>
<li>
<p><span class="merged" id="all.1Vhf5Q" title="原文 : The storage-sts service is the headless service required for the StatefulSet."><code>storage-sts</code>サービスは、<code>StatefulSet</code>に必要なヘッドレス・サービスです。</span></p>

</li>
<li>
<p><span class="merged" id="all.2TgwLu" title="原文 : The storage-wka service is the headless service that Coherence will use for well known address cluster discovery."><code>storage-wka</code>サービスは、Coherenceが既知のアドレス・クラスタ検出に使用するヘッドレス・サービスです。</span></p>

</li>
</ul>
</div>

<h3 id="_minimal_extend_client_configuration"><span class="merged" id="all.2gtrHv" title="原文 : Minimal Extend Client Configuration">最小拡張クライアント構成</span></h3>
<div class="section">
<p><span class="merged" id="all.6ATzJ.spl1" title="原文 : The configuration required for the Extend client is equally minimal.">Extendクライアントに必要な構成は最小です。</span> <span class="merged" id="all.6ATzJ.spl2" title="原文 : The example source code includes a configuration file named src/main/resources/minimal-client-cache-config.xml that can be used to connect to the proxy configured above.">ソース・コードの例には、前述のプロキシへの接続に使用できる<code>src/main/resources/minimal-client-cache-config.xml</code>という構成ファイルが含まれています。</span> </p>

<markup
lang="xml"
title="src/main/resources/minimal-client-cache-config.xml"
>&lt;?xml version="1.0"?&gt;
&lt;cache-config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xmlns="http://xmlns.oracle.com/coherence/coherence-cache-config"
              xsi:schemaLocation="http://xmlns.oracle.com/coherence/coherence-cache-config coherence-cache-config.xsd"&gt;
  &lt;caching-scheme-mapping&gt;
    &lt;cache-mapping&gt;                        <span class="conum" data-value="1" />
      &lt;cache-name&gt;*&lt;/cache-name&gt;
      &lt;scheme-name&gt;remote&lt;/scheme-name&gt;
    &lt;/cache-mapping&gt;
  &lt;/caching-scheme-mapping&gt;

  &lt;caching-schemes&gt;
    &lt;remote-cache-scheme&gt;
      &lt;scheme-name&gt;remote&lt;/scheme-name&gt;                 <span class="conum" data-value="2" />
      &lt;service-name&gt;RemoteService&lt;/service-name&gt;        <span class="conum" data-value="3" />
      &lt;proxy-service-name&gt;Proxy&lt;/proxy-service-name&gt;    <span class="conum" data-value="4" />
    &lt;/remote-cache-scheme&gt;
  &lt;/caching-schemes&gt;
&lt;/cache-config&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2YDISd" title="原文 : There is a single cache-mapping that maps all cache names to the scheme named remote.">すべてのキャッシュ名を<code>remote</code>という名前のスキームにマップする単一の<code>cache-mapping</code>があります。</span></li>
<li data-value="2"><span class="merged" id="all.1R6MoK" title="原文 : The remote-scheme is named remote."><code>remote-scheme</code>の名前は<code>remote</code>です。</span></li>
<li data-value="3"><span class="merged" id="all.10uvOc" title="原文 : The remote-scheme has a service name of RemoteService."><code>remote-scheme</code>のサービス名は<code>RemoteService</code>です。</span></li>
<li data-value="4"><span class="merged" id="all.CUw4I" title="原文 : The remote service will connect to a proxy service on the server that is named Proxy, this must correspond to the name of the proxy service in our server cache configuration file.">リモート・サービスは、<code>Proxy</code>という名前のサーバー上のプロキシ・サービスに接続します。これは、サーバー・キャッシュ構成ファイル内のプロキシ・サービスの名前に対応している必要があります。</span></li>
</ul>

<h4 id="_deploy_the_client"><span class="merged" id="all.okwjz" title="原文 : Deploy the Client">クライアントのデプロイ</span></h4>
<div class="section">
<p><span class="merged" id="all.2rQ6vq.spl1" title="原文 : The simplest way to run the Extend client in Kubernetes is as a Job.">KubernetesでExtendクライアントを実行する最も簡単な方法は、<code>Job</code>です。</span> <span class="merged" id="all.2rQ6vq.spl2" title="原文 : The client just connects to a cache and does a put, then exits, so a Job is ideal for this type of process.">クライアントはキャッシュに接続し、<code>put</code>を実行して終了するため、<code>Job</code>はこのタイプのプロセスに最適です。</span> <span class="merged" id="all.2rQ6vq.spl3" title="原文 : The example contains yaml to create a Job manifests/minimal-job.yaml that looks like this:">例には、次のようなジョブ<code>manifests/minimal-job.yaml</code>を作成するためのyamlが含まれています:</span> </p>

<markup
lang="yaml"
title="manifests/minimal-job.yaml"
>apiVersion: batch/v1
kind: Job
metadata:
  name: extend-client
spec:
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: client
          image: simple-extend-client:1.0.0
          env:
            - name: COHERENCE_CACHE_CONFIG
              value: minimal-client-cache-config.xml
            - name: COHERENCE_WKA
              value: storage-wka
            - name: COHERENCE_CLUSTER
              value: storage</markup>

<p><span class="merged" id="all.34XYjn" title="原文 : To be able to run the client we need to set in three pieces of information.">クライアントを実行できるようにするには、3つの情報を設定する必要があります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1hXQ0n.spl1" title="原文 : The name of the cache configuration file.">キャッシュ構成ファイルの名前。</span> <span class="merged" id="all.1hXQ0n.spl2" title="原文 : We set this using the COHERENCE_CACHE_CONFIG environment variable, and set the value to minimal-client-cache-config.xml, which is the configuration file we&rsquo;re using in this example.">これは、<code>COHERENCE_CACHE_CONFIG</code>環境変数を使用して設定し、この例で使用している構成ファイルである<code>minimal-client-cache-config.xml</code>に設定します。</span> </p>

</li>
<li>
<p><span class="merged" id="all.3CfgrW.spl1" title="原文 : The client needs to be able to discover the storage Pods to connect to.">クライアントは、接続先のストレージ・ポッドを検出できる必要があります。</span> <span class="merged" id="all.3CfgrW.spl2" title="原文 : Just like the server cluster uses well known addresses to discover a cluster, the client can do the same.">サーバー・クラスタが既知のアドレスを使用してクラスタを検出するのと同様に、クライアントも同じことができます。</span> <span class="merged" id="all.3CfgrW.spl3" title="原文 : We set the COHERENCE_WKA environment variable to the name of the WKA service created for the server when we deployed it above, in this case it is storage-wka."><code>COHERENCE_WKA</code>環境変数は、前述のデプロイ時にサーバー用に作成されたWKAサービスの名前(この場合は<code>storage-wka</code>)に設定します。</span> </p>

</li>
<li>
<p><span class="merged" id="all.34daus.spl1" title="原文 : Finally, we set the name of the Coherence cluster the client will connect to.">最後に、クライアントが接続するCoherenceクラスタの名前を設定します。</span> <span class="merged" id="all.34daus.spl2" title="原文 : When we deployed the server we did not specify a name, so the default cluster name will be the same as the Coherence resource name, in this case storage.">サーバーをデプロイしたときに名前を指定しなかったため、デフォルトのクラスタ名は<code>Coherence</code>リソース名(この場合は<code>storage</code>)と同じになります。</span> <span class="merged" id="all.34daus.spl3" title="原文 : So we set the COHERENCE_CLUSTER environment variable to storage.">したがって、<code>COHERENCE_CLUSTER</code>環境変数を<code>storage</code>に設定します。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.3Wevry" title="原文 : The client Job can be deployed into the default namespace in Kubernetes with the following command:">クライアント<code>Job</code>は、次のコマンドを使用してKubernetesのデフォルト・ネームスペースにデプロイできます:</span></p>

<markup
lang="bash"

>kubectl apply -f manifests/minimal-job.yaml</markup>

<p><span class="merged" id="all.UgXPf" title="原文 : The Jobs deployed can then be listed">デプロイされた<code>Jobs</code>をリストできます</span></p>

<markup
lang="bash"

>kubectl get job</markup>

<p><span class="merged" id="all.4ayzey.2" title="原文 : Which should display something like this:">次のように表示されます:</span></p>

<markup
lang="bash"

>NAME            COMPLETIONS   DURATION   AGE
extend-client   1/1           4s         5s</markup>

<p><span class="merged" id="all.299PoU" title="原文 : The Job above completed very quickly, which we would expect as it is just doing a trivial put to a cache.">上記の<code>Job</code>は非常に迅速に完了しています。これは単にキャッシュへの簡単な配置を実行するためです。</span></p>

<p><span class="merged" id="all.1Ot9Bq.spl1" title="原文 : We can list the Pods created for the Job and then look at the log from the client."><code>Job</code>用に作成された<code>Pods</code>をリストし、クライアントからのログを確認できます。</span> <span class="merged" id="all.1Ot9Bq.spl2" title="原文 : All Pods associated to a Job have a label in the form job-name: &lt;name-of-job&gt;, so in our case the label will be job-name: extend-client."><code>Job</code>に関連付けられたすべての<code>Pods</code>には、<code>job-name: &lt;name-of-job></code>という形式のラベルがあるため、ラベルは<code>job-name: extend-client</code>になります。</span> <span class="merged" id="all.1Ot9Bq.spl3" title="原文 : We can use this with kubectl to list Pods associated to the Job.">これを<code>kubectl</code>とともに使用して、<code>Job</code>に関連付けられている<code>Pods</code>をリストできます。</span> <span class="merged" id="all.1Ot9Bq.spl4" title="原文 : If the Job ran successfully there should be only one Pod."><code>Job</code>が正常に実行された場合、<code>Pod</code>は1つのみである必要があります。</span> <span class="merged" id="all.1Ot9Bq.spl5" title="原文 : If the Job failed and has a restart policy, or was restarted by Kubernetes for other reasons there could be multiple Pods."><code>Job</code>が失敗し、再起動ポリシーがある場合、またはKubernetesによって再起動された場合は、複数の<code>Pods</code>があります。</span> <span class="merged" id="all.1Ot9Bq.spl6" title="原文 : In this case we expect a single successful Pod.">この場合、<code>Pod</code>は1回だけ成功します。</span> </p>

<markup
lang="bash"

>kubectl get pod -l job-name=extend-client</markup>

<markup
lang="bash"

>NAME                  READY   STATUS      RESTARTS   AGE
extend-client-k7wfq   0/1     Completed   0          4m24s</markup>

<p><span class="merged" id="all.1MJKlt" title="原文 : If we look at the log for the Pod we should see the last line printed to System.out by the client:"><code>Pod</code>のログを見ると、クライアントによって<code>System.out</code>に出力される最後の行が表示されます:</span></p>

<markup
lang="bash"

>kubectl logs extend-client-k7wfq</markup>

<p><span class="merged" id="all.1EHT1U" title="原文 : The last line of the log will be something like this:">ログの最後の行は次のようになります:</span></p>

<markup
lang="bash"

>Put key=key-1 value=0.9332279895860512 previous=null</markup>

<p><span class="merged" id="all.2zLOZ4.spl1" title="原文 : The values will be different as we put different random values each time the client runs.">クライアントを実行するたびに異なるランダム値を配置するため、値は異なります。</span> <span class="merged" id="all.2zLOZ4.spl2" title="原文 : The previous value was null in this case as we have not run any other client with this cluster.">このクラスタで他のクライアントを実行していないため、前の値は<code>null</code>でした。</span> <span class="merged" id="all.2zLOZ4.spl3" title="原文 : If we re-ran the client Job the previous value would be displayed as the cache on the server now has data in it.">クライアント<code>Job</code>を再実行すると、サーバー上のキャッシュにデータが含まれるため、以前の値が表示されます。</span> </p>

<p><span class="merged" id="all.lK96I" title="原文 : Clean-Up"><strong>クリーンアップ</strong></span></p>

<p><span class="merged" id="all.1BiTmq.spl1" title="原文 : We have shown a simple Extend client running in Kubernetes, connecting to a Coherence cluster using the NameService.">Kubernetesで実行されている単純なExtendクライアントを示し、NameServiceを使用してCoherenceクラスタに接続しています。</span> <span class="merged" id="all.1BiTmq.spl2" title="原文 : We can now delete the Job using kubectl."><code>kubectl</code>を使用して<code>Job</code>を削除できるようになりました。</span> </p>

<markup
lang="bash"

>kubectl delete job extend-client</markup>

<p><span class="merged" id="all.AZT3e" title="原文 : We can also delete the server.">サーバーを削除することもできます。</span></p>

<markup
lang="bash"

>kubectl delete -f manifests/default-server.yaml</markup>

</div>
</div>

<h3 id="_deploy_the_client_to_a_different_namespace"><span class="merged" id="all.2bGEIB" title="原文 : Deploy the Client to a Different Namespace">別のネームスペースへのクライアントのデプロイ</span></h3>
<div class="section">
<p><span class="merged" id="all.UhyVv.spl1" title="原文 : In the first example we deployed the client to the same namespace as the server.">最初の例では、クライアントをサーバーと同じネームスペースにデプロイしました。</span> <span class="merged" id="all.UhyVv.spl2" title="原文 : If we wanted to deploy the client to a different namespace we would need to ensure the fully qualified name of the WKA service is used when setting the COHERENCE_WKA environment variable.">クライアントを別のネームスペースにデプロイする場合は、<code>COHERENCE_WKA</code>環境変数を設定するときにWKAサービスの完全修飾名を使用する必要があります。</span> <span class="merged" id="all.UhyVv.spl3" title="原文 : The Coherence cluster is deployed into the default namespace so the fully qualified WKA service name is storage-wka.default.svc, or we could also use storage-wka.default.svc.cluster.local.">Coherenceクラスタは<code>default</code>ネームスペースにデプロイされるため、完全修飾WKAサービス名は<code>storage-wka.default.svc</code>であり、<code>storage-wka.default.svc.cluster.local</code>も使用できます。</span> </p>

<markup
lang="yaml"
title="manifests/minimal-job.yaml"
>apiVersion: batch/v1
kind: Job
metadata:
  name: extend-client
spec:
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: client
          image: simple-extend-client:1.0.0
          env:
            - name: COHERENCE_CACHE_CONFIG
              value: minimal-client-cache-config.xml
            - name: COHERENCE_WKA
              value: storage-wka.default.svc.cluster.local
            - name: COHERENCE_CLUSTER
              value: storage</markup>

<p><span class="merged" id="all.4VwezJ" title="原文 : We can deploy this client Job into a different namespace than the cluster is deployed into:">このクライアント<code>Job</code>は、クラスタのデプロイ先とは異なるネームスペースにデプロイできます:</span></p>

<markup
lang="bash"

>kubectl create ns coherence-test
kubectl apply -f manifests/minimal-other-namespace-job.yaml -n coherence-test</markup>

<p><span class="merged" id="all.2K9Isf" title="原文 : We should see the Job complete successfully."><code>Job</code>が正常に完了したことがわかります。</span></p>

</div>
</div>

<h2 id="_extend_clients_external_to_kubernetes"><span class="merged" id="all.3Rwqy9" title="原文 : Extend Clients External to Kubernetes">外部クライアントをKubernetesに拡張</span></h2>
<div class="section">
<p><span class="merged" id="all.Zhyja.spl1" title="原文 : The NameService example above will only work if the client is running inside the same Kubernetes cluster as the server.">前述のNameServiceの例は、クライアントがサーバーと同じKubernetesクラスタ内で実行されている場合にのみ機能します。</span> <span class="merged" id="all.Zhyja.spl2" title="原文 : When the client uses the Coherence NameService to look up the addresses of the Extend proxy service, the cluster only knows its internal IP addresses.">クライアントがCoherence NameServiceを使用してExtendプロキシ・サービスのアドレスを参照する場合、クラスタは内部IPアドレスのみを認識します。</span> <span class="merged" id="all.Zhyja.spl3" title="原文 : If a client external to Kubernetes tried to use the NameService the addresses returned would be unreachable, as they are internal to the Kubernetes cluster.">Kubernetesの外部のクライアントがNameServiceを使用しようとすると、Kubernetesクラスタの内部にあるため、返されるアドレスにアクセスできなくなります。</span> </p>

<p><span class="merged" id="all.3T616r" title="原文 : To connect external Extend clients, the proxy must be bound to known ports and those ports exposed to the client via some form of service or ingress.">外部Extendクライアントを接続するには、プロキシが既知のポートおよびクライアントに公開されているポートに、なんらかの形式のサービスまたはイングレスを介してバインドされている必要があります。</span></p>


<h3 id="_proxy_server_configuration_2"><span class="merged" id="all.4TelXp.1"  title="原文:: Proxy Server Configuration">プロキシ・サーバーの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2kwoCi" title="原文 : The Extend proxy service on the server must be configured to have a fixed port, so there is a little more configuration than previously.">サーバー上の拡張プロキシ・サービスが固定ポートを持つように構成されている必要があります。そのため、以前よりも少し多くの構成があります。</span></p>

<p><span class="merged" id="all.43Lqvn" title="原文 : The example server image contains a Coherence configuration file named test-cache-config.xml, which contains an Extend proxy configured to bind to all host addresses (0.0.0.0) on port 20000.">サーバー・イメージの例には、ポート2000上のすべてのホスト・アドレス(<code>0.0.0.0</code>)にバインドするように構成されたExtendプロキシを含む、<code>test-cache-config.xml</code>という名前のCoherence構成ファイルが含まれています。</span></p>

<markup
lang="xml"
title="test-cache-config.xml"
>&lt;proxy-scheme&gt;
  &lt;service-name&gt;Proxy&lt;/service-name&gt;
  &lt;acceptor-config&gt;
    &lt;tcp-acceptor&gt;
      &lt;local-address&gt;
        &lt;!-- The proxy will listen on all local addresses --&gt;
        &lt;address&gt;0.0.0.0&lt;/address&gt;
        &lt;port&gt;20000&lt;/port&gt;
      &lt;/local-address&gt;
    &lt;/tcp-acceptor&gt;
  &lt;/acceptor-config&gt;
  &lt;autostart&gt;true&lt;/autostart&gt;
&lt;/proxy-scheme&gt;</markup>

</div>

<h3 id="_deploy_the_server_2"><span class="merged" id="all.3FfRYe.1" title="原文 : Deploy the Server">サーバーのデプロイ</span></h3>
<div class="section">
<p><span class="merged" id="all.2HtiNf" title="原文 : The example contains a yaml file that can be used to deploy a Coherence server with the fixed proxy address, as shown above.">この例では、前述のように固定プロキシ・アドレスを使用してCoherenceサーバーをデプロイするために使用できるyamlファイルが含まれています。</span></p>

<markup
lang="yaml"
title="manifests/fixed-port-server.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  image: simple-coherence:1.0.0
  replicas: 3
  coherence:
    cacheConfig: test-cache-config.xml
  ports:
    - name: extend
      port: 20000</markup>

<p><span class="merged" id="all.3Paoe3" title="原文 : The yaml above will deploy a three member cluster configured to use the default test-cache-config.xml configuration file and expose the Extend port via a service.">前述のyamlは、デフォルトの<code>test-cache-config.xml</code>構成ファイルを使用するように構成された3つのメンバー・クラスタをデプロイし、サービスを介してExtendポートを公開します。</span></p>

<p><span class="merged" id="all.rkxnR" title="原文 : The server can be deployed with the following command.">サーバーは次のコマンドを使用してデプロイできます。</span></p>

<markup
lang="bash"

>kubectl apply -f manifests/fixed-port-server.yaml</markup>

<p><span class="merged" id="all.2nTfEx" title="原文 : The resources created by the Coherence Operator can be listed:">Coherence Operatorによって作成されたリソースをリストできます:</span></p>

<markup
lang="bash"

>kubectl get all</markup>

<markup
lang="bash"

>NAME            READY   STATUS    RESTARTS   AGE
pod/storage-0   1/1     Running   0          61s
pod/storage-1   1/1     Running   0          61s
pod/storage-2   1/1     Running   0          61s

NAME                     TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)     AGE
service/storage-extend   ClusterIP   10.101.99.24   &lt;none&gt;        20000/TCP   61s
service/storage-sts      ClusterIP   None           &lt;none&gt;        7/TCP       61s
service/storage-wka      ClusterIP   None           &lt;none&gt;        7/TCP       61s

NAME                       READY   AGE
statefulset.apps/storage   3/3     61s</markup>

<p><span class="merged" id="all.472tYG" title="原文 : As well as the Pods and Services created in the previous example, there is now a Service named storage-extend, which exposes the Extend port.">前の例で作成した<code>Pods</code>および<code>Services</code>に加えて、拡張ポートを公開する<code>storage-extend</code>という名前の<code>Service</code>があります。</span></p>

</div>

<h3 id="_configure_the_extend_client"><span class="merged" id="all.2tv0yo" title="原文 : Configure the Extend Client">拡張クライアントの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.3L6Vos.spl1" title="原文 : An external client needs to be configured with a remote scheme that connects to a known address and port.">外部クライアントは、既知のアドレスおよびポートに接続するリモート・スキームで構成する必要があります。</span> <span class="merged" id="all.3L6Vos.spl2" title="原文 : The example contains a cache configuration file named src/main/resources/fixed-address-cache-config.xml that has this configuration.">この例には、この構成を持つ<code>src/main/resources/fixed-address-cache-config.xml</code>という名前のキャッシュ構成ファイルが含まれています。</span> </p>

<markup
lang="xml"
title="src/main/resources/fixed-address-cache-config.xml"
>&lt;remote-cache-scheme&gt;
  &lt;scheme-name&gt;remote&lt;/scheme-name&gt;
  &lt;service-name&gt;RemoteCache&lt;/service-name&gt;
  &lt;proxy-service-name&gt;Proxy&lt;/proxy-service-name&gt;
  &lt;initiator-config&gt;
    &lt;tcp-initiator&gt;
      &lt;remote-addresses&gt;
        &lt;socket-address&gt;
            &lt;!-- the 127.0.0.1 loop back address will only work in local dev testing --&gt;
            &lt;address system-property="coherence.extend.address"&gt;127.0.0.1&lt;/address&gt;
            &lt;port system-property="coherence.extend.port"&gt;20000&lt;/port&gt;
        &lt;/socket-address&gt;
      &lt;/remote-addresses&gt;
    &lt;/tcp-initiator&gt;
  &lt;/initiator-config&gt;
&lt;/remote-cache-scheme&gt;</markup>

<p><span class="merged" id="all.4fczgU.spl1" title="原文 : When the client runs using the configuration above it will attempt to connect to an Extend proxy on 127.0.0.1:20000.">上記の構成を使用してクライアントを実行すると、<code>127.0.0.1:20000</code>のExtendプロキシに接続しようとします。</span> <span class="merged" id="all.4fczgU.spl2" title="原文 : The address to connect to can be overridden by setting the coherence.extend.address system property.">接続先のアドレスは、<code>coherence.extend.address</code>システム・プロパティを設定することでオーバーライドできます。</span> <span class="merged" id="all.4fczgU.spl3" title="原文 : The port to connect to can be overridden by setting the coherence.extend.port system property.">接続先のポートは、<code>coherence.extend.port</code>システム・プロパティを設定することでオーバーライドできます。</span> </p>

</div>

<h3 id="_run_the_extend_client"><span class="merged" id="all.11vsgY" title="原文 : Run the Extend Client">拡張クライアントの実行</span></h3>
<div class="section">
<p><span class="merged" id="all.qFEzw" title="原文 : This example assumes that you are running Kubernetes on a development machine, for example with KinD, of Minikube or in Docker, etc. In this case the Service created is of type ClusterIP, so it is not actually exposed outside of Kubernetes as most development Kubernetes clusters do not support services of type LoadBalancer.">この例では、<code>KinD</code>、<code>Minikube</code>、Dockerなどで開発マシン上でKubernetesを実行していることを前提としています。この場合、作成される<code>Service</code>は<code>ClusterIP</code>タイプであるため、ほとんどの開発Kubernetesクラスタは<code>LoadBalancer</code>タイプのサービスをサポートしていないため、Kubernetesの外部では実際には公開されません。</span></p>

<p><span class="merged" id="all.2Td0G.spl1" title="原文 : This means that to test the external client we will need to use port forwarding.">つまり、外部クライアントをテストするには、ポート転送を使用する必要があります。</span> <span class="merged" id="all.2Td0G.spl2" title="原文 : In a console start the port forwarder using kubectl as follows">コンソールで、次のように<code>kubectl</code>を使用してポート・フォワーダを起動</span> </p>

<markup
lang="bash"

>kubectl port-forward svc/storage-extend 20000:20000</markup>

<p><span class="merged" id="all.2ePRKh" title="原文 : The example client can not connect to the Extend proxy via the host machine on port 20000.">例クライアントは、ポート<code>20000</code>のホスト・マシンを介してExtendプロキシに接続できません。</span></p>

<p><span class="merged" id="all.3JV7g9.spl1" title="原文 : The simplest way to run the Extend client locally is to use either Maven or Gradle.">Extendクライアントをローカルで実行する最も簡単な方法は、MavenまたはGradleを使用することです。</span> <span class="merged" id="all.3JV7g9.spl2" title="原文 : The Maven pom.xml file uses the Maven Exec plugin to run the client.">Maven <code>pom.xml</code>ファイルは、Maven Execプラグインを使用してクライアントを実行します。</span> <span class="merged" id="all.3JV7g9.spl3" title="原文 : The Gradle build.gradle file configures a run task to execute the client.">Gradle <code>build.gradle</code>ファイルは、クライアントを実行するために実行タスクを構成します。</span> </p>

<p><span class="merged" id="all.1hB2m5" title="原文 : With Maven:">Mavenの場合:</span></p>

<markup
lang="bash"

>./mvnw compile exec:java</markup>

<p><span class="merged" id="all.3FwFBp" title="原文 : With Gradle:">Gradleの場合:</span></p>

<markup
lang="bash"

>./gradlew runClient</markup>

<p><span class="merged" id="all.arvH" title="原文 : Both of the above commands run successfully and the final line of output should be the line printed by the client showing the result of the put.">前述のコマンドは両方とも正常に実行され、出力の最終行は、クライアントによって出力された、putの結果を示す行である必要があります。</span></p>

<markup
lang="bash"

>Put key=key-1 value=0.5274436018741687 previous=null</markup>

<p><span class="merged" id="all.3CvAMP" title="原文 : Clean-up"><strong>Clean-up</strong></span></p>

<p><span class="merged" id="all.tc3va" title="原文 : We can now delete the server.">これで、サーバーを削除できます。</span></p>

<markup
lang="bash"

>kubectl delete -f manifests/fixed-port-server.yaml</markup>

</div>
</div>

<h2 id="_mixing_internal_and_external_extend_clients"><span class="merged" id="all.12GUAu" title="原文 : Mixing Internal and External Extend Clients">内部および外部拡張クライアントの混在</span></h2>
<div class="section">
<p><span class="merged" id="all.1EXYBE.spl1" title="原文 : The example server configuration used for connecting external clients can also be used for internal Extend clients, which is useful for use-cases where some clients are inside Kubernetes and some outside.">外部クライアントの接続に使用するサーバー構成の例は、内部Extendクライアントにも使用できます。これは、一部のクライアントがKubernetes内および一部の外部にあるユースケースに役立ちます。</span> <span class="merged" id="all.1EXYBE.spl2" title="原文 : An Extend client running inside Kubernetes then has the choice of using the NameService configuration from the first example, or using the fixed address and port configuration of the second example.">Kubernetes内で実行中のExtendクライアントでは、最初の例からNameService構成を使用するか、2番目の例の固定アドレスおよびポート構成を使用するかを選択できます。</span> </p>

<p><span class="merged" id="all.3w3wci" title="原文 : If an internal Extend client is configured to use a fixed address then the host name of the proxy can be set to the service used to expose the server&rsquo;s extend port.">内部拡張クライアントが固定アドレスを使用するように構成されている場合、プロキシのホスト名をサーバーの拡張ポートの公開に使用するサービスに設定できます。</span></p>

<p><span class="merged" id="all.1eL1v8" title="原文 : For example, if the client&rsquo;s cache configuration file contains a remote scheme like the external example above:">たとえば、クライアントのキャッシュ構成ファイルに、前述の外部の例のようなリモート・スキームが含まれている場合:</span></p>

<markup
lang="xml"
title="src/main/resources/fixed-address-cache-config.xml"
>&lt;remote-cache-scheme&gt;
  &lt;scheme-name&gt;remote&lt;/scheme-name&gt;
  &lt;service-name&gt;RemoteCache&lt;/service-name&gt;
  &lt;proxy-service-name&gt;Proxy&lt;/proxy-service-name&gt;
  &lt;initiator-config&gt;
    &lt;tcp-initiator&gt;
      &lt;remote-addresses&gt;
        &lt;socket-address&gt;
            &lt;!-- the 127.0.0.1 loopback address will only work in local dev testing --&gt;
            &lt;address system-property="coherence.extend.address"&gt;127.0.0.1&lt;/address&gt;
            &lt;port system-property="coherence.extend.port"&gt;20000&lt;/port&gt;
        &lt;/socket-address&gt;
      &lt;/remote-addresses&gt;
    &lt;/tcp-initiator&gt;
  &lt;/initiator-config&gt;
&lt;/remote-cache-scheme&gt;</markup>

<p><span class="merged" id="all.4UAXvF" title="原文 : The client would be run with the coherence.extend.address system property, (or COHERENCE_EXTEND_ADDRESS environment variable) set to the fully qualified name of the Extend service, in the case of our example server running in the default namespace, this would be -Dcoherence.extend.address=storage-extend.default.svc.cluster.local">クライアントは、<code>coherence.extend.address</code>システム・プロパティ(または<code>COHERENCE_EXTEND_ADDRESS</code>環境変数)をExtendサービスの完全修飾名に設定して実行されます(デフォルト・ネームスペースで実行されているサンプル・サーバーの場合、これは<code>-Dcoherence.extend.address=storage-extend.default.svc.cluster.local</code>になります)</span></p>

</div>

<h2 id="_external_client_in_the_real_world"><span class="merged" id="all.CrkzX" title="原文 : External Client in the Real World">実世界の外部クライアント</span></h2>
<div class="section">
<p><span class="merged" id="all.3RWJtw.spl1" title="原文 : The example above used port-forward to connect the external Extend client to the cluster.">前述の例では、外部Extendクライアントをクラスタに接続するためにport-forwardを使用しました。</span> <span class="merged" id="all.3RWJtw.spl2" title="原文 : This showed how to configure the client and server but is not how a real world application would work.">これは、クライアントとサーバーの構成方法を示していますが、実世界アプリケーションがどのように機能するかではありません。</span> <span class="merged" id="all.3RWJtw.spl3" title="原文 : In a real deployment the server would typically be deployed with the Extend service behind a load balancer or some other form of ingress, such as Istio.">実際のデプロイメントでは、通常、サーバーはロード・バランサの背後にあるExtendサービス、またはIstioなどのその他の形式のイングレスを使用してデプロイされます。</span> <span class="merged" id="all.3RWJtw.spl4" title="原文 : The Extend client would then be configured to connect to the external ingress address and port.">その後、Extendクライアントは外部のイングレス・アドレスおよびポートに接続するように構成されます。</span> <span class="merged" id="all.3RWJtw.spl5" title="原文 : Some ingress, such as Istio, can also be configured to add TLS security, which Extend will work with.">Istioなどの一部のイングレスは、Extendが機能するTLSセキュリティを追加するように構成することもできます。</span> </p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.6"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.XeeHH.spl1" title="原文 : There is an open source project named MetalLB that can easily be deployed into development environment Kubernetes clusters and provides support for load balancer services."><a href="https://metallb.universe.tf" id="" target="_blank" >MetalLB</a>という名前のオープン・ソース・プロジェクトがあり、開発環境のKubernetesクラスタに簡単にデプロイでき、ロード・バランサ・サービスのサポートが提供されます。</span> <span class="merged" id="all.XeeHH.spl2" title="原文 : This is a simple way to test and try out load balancers in development Kubernetes.">これは、開発Kubernetesでロード・バランサをテストして試す簡単な方法です。</span> </p>

<p><span class="merged" id="all.1YXkt9" title="原文 : If MetalLB was installed (or your cluster supports LoadBalancer services) the yaml for deploying the cluster can be altered to make the Extend service a load balancer.">MetalLBがインストールされている場合(またはクラスタでLoadBalancerサービスがサポートされている場合)、クラスタをデプロイするためのyamlを変更して、Extendサービスをロード・バランサにできます。</span></p>

<markup
lang="yaml"
title="manifests/fixed-port-lb-server.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  image: simple-coherence:1.0.0
  replicas: 3
  coherence:
    cacheConfig: test-cache-config.xml
  ports:
    - name: extend
      port: 20000
      service:
        type: LoadBalancer</markup>

<p><span class="merged" id="all.Xt7U0" title="原文 : This can be deployed using:">これは、次のものを使用してデプロイできます:</span></p>

<markup
lang="bash"

>kubectl apply -f manifests/fixed-port-lb-server.yaml</markup>

<p><span class="merged" id="all.8KPuB" title="原文 : Now if we look at the Extend service, we see it is a load balancer">Extendサービスを調べると、ロード・バランサであることがわかります</span></p>

<markup
lang="bash"

>kubectl get svc storage-extend</markup>

<markup
lang="bash"

>NAME             TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)           AGE
storage-extend   LoadBalancer   10.110.84.229   127.0.0.240   20000:30710/TCP   2m20s</markup>

<p><span class="merged" id="all.2b0iSG" title="原文 : Exactly how you connect to the MetalLB load balancer, and on which address, varies depending on where your Kubernetes cluster is running.">MetalLBロード・バランサへの接続方法と、どのアドレスで、Kubernetesクラスタが実行されている場所に応じて異なります。</span></p>
</p>
</div>
</div>
</doc-view>
