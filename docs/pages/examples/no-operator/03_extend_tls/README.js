<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_secure_coherence_extend_with_tls"><span class="merged" id="all.3EgJbG" title="原文 : Secure Coherence Extend with TLS">TLSによるセキュアなCoherence拡張</span></h2>
<div class="section">
<p><span class="merged" id="all.2RtAoY.spl1" title="原文 : This example shows how to deploy a simple Coherence cluster in Kubernetes manually, and secure the Extend endpoint using TLS.">この例では、Kubernetesに単純なCoherenceクラスタを手動でデプロイし、TLSを使用して拡張エンドポイントを保護する方法を示します。</span> <span class="merged" id="all.2RtAoY.spl2" title="原文 : This example expands on the StatefulSet used in the first simple deployment example.">この例では、最初の単純なデプロイメント例で使用されている<code>StatefulSet</code>を展開します。</span> </p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.17"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.4Q3rp" title="原文 :  The complete source code for this example is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />この例の完全なソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/no-operator/03_extend_tls" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>
<p><span class="merged" id="all.3Hthfg.2"  title="原文:: Prerequisites"><strong>前提条件</strong></span></p>

<p><span class="merged" id="all.3yNzBq.2" title="原文 : This example assumes that you have already built the example server image.">この例では、サンプル・サーバー・イメージがすでにビルドされていることを前提としています。</span></p>

<p><span class="merged" id="all.2KS6Lu.spl1" title="原文 : There are a number of ways to use TLS to secure ingress in Kubernetes.">Kubernetesには、TLSを使用してイングレスを保護する方法が多数あります。</span> <span class="merged" id="all.2KS6Lu.spl2" title="原文 : We could use a load balancer Service and terminate TLS at the load balance, or we could use an add-on such as Istio to manage TLS ingress.">ロード・バランサ<code>Service</code>を使用してTLSをロード・バランシングで終了することも、Istioなどのアドオンを使用してTLSイングレスを管理することもできます。</span> <span class="merged" id="all.2KS6Lu.spl3" title="原文 : Both of those approaches would require no changes to the Coherence server, as the server would not know TLS was being used.">サーバーがTLSが使用されていることを認識していないため、これらのアプローチの両方でCoherenceサーバーを変更する必要はありません。</span> <span class="merged" id="all.2KS6Lu.spl4" title="原文 : The Coherence Operator Examples contains examples of using TLS with Coherence and using Istio."><a href="https://oracle.github.io/coherence-operator/docs/latest/#/examples/010_overview" id="" target="_blank" >「Coherence Operatorの例」</a>には、CoherenceでTLSを使用し、Istioを使用する例が含まれています。</span> <span class="merged" id="all.2KS6Lu.spl5" title="原文 : The TLS example also shows how to use Kubernetes built in certificate management to create keys and certificates.">TLSの例は、証明書管理に組み込まれたKubernetesを使用してキーおよび証明書を作成する方法も示しています。</span> </p>

<p><span class="merged" id="all.1LGoMt" title="原文 : In this example we are going to actually change the server to use TLS for its Extend endpoints.">この例では、ExtendエンドポイントにTLSを使用するようにサーバーを実際に変更します。</span></p>

</div>

<h2 id="_create_certs_and_java_keystores"><span class="merged" id="all.3uq6Q1" title="原文 : Create Certs and Java Keystores">証明書およびJavaキーストアの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.217gYs.spl1" title="原文 : To use TLS we will need some certificates and Java keystore files.">TLSを使用するには、いくつかの証明書およびJavaキーストア・ファイルが必要です。</span> <span class="merged" id="all.217gYs.spl2" title="原文 : For testing and examples, self-signed certs are fine.">テストや例については、自己署名証明書は良好です。</span> <span class="merged" id="all.217gYs.spl3" title="原文 : The source code for this example contains some keystores. * server.jks contains the server key and certificate files * trust.jks contains the CA certificate used to create the client and server certificates">この例のソース・コードには、いくつかのキーストアが含まれます。* <code>server.jks</code>には、サーバー・キーおよび証明書ファイルが含まれます* <code>trust.jks</code>には、クライアント証明書およびサーバー証明書の作成に使用されるCA証明書が含まれます</span> </p>

<p><span class="merged" id="all.3wefj.spl1" title="原文 : The keystores are password protected, the passwords are stored in files with the example source.">キーストアはパスワードで保護され、パスワードはソースの例を含むファイルに格納されます。</span> <span class="merged" id="all.3wefj.spl2" title="原文 : We will use these files to securely provide the passwords to the client and server instead of hard coding or providing credentials via system properties or environment variables. * server-password.txt is the password to open the server.jks keystore * server-key-password.txt is the password for the key file stored in the server.jks keystore * trust-password.txt is the password to open the trust.jks` keystore.">これらのファイルを使用して、ハード・コーディングやシステム・プロパティまたは環境変数を介した資格証明の提供ではなく、クライアントおよびサーバーにパスワードを安全に提供します。* <code>server-password.txt</code>は、<code>server.jks</code>キーストアを開くためのパスワードです* <code>server-key-password.txt</code>は、<code>server.jks</code>キーストアに格納されているキー・ファイルのパスワードです* <code>trust-password.txt</code>は、trust.jks`キーストアを開くためのパスワードです。</span> </p>

</div>

<h2 id="_configure_coherence_extend_tls"><span class="merged" id="all.2MIJtZ" title="原文 : Configure Coherence Extend TLS">Coherence拡張TLSの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3F8ZDv.spl1" title="原文 : The Coherence documentation explains how to Use TLS Secure Communication.">Coherenceドキュメントでは、<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.2206/secure/using-ssl-secure-communication.html#GUID-90E20139-3945-4993-9048-7FBC93B243A3" id="" target="_blank" >「TLSセキュア通信の使用」</a>の方法について説明します。</span> <span class="merged" id="all.3F8ZDv.spl2" title="原文 : This example is going to use a standard approach to securing Extend with TLS.">この例では、TLSでExtendを保護するための標準アプローチを使用します。</span> <span class="merged" id="all.3F8ZDv.spl3" title="原文 : To provide the keystores and credentials the example will make use of Kubernetes Secrets to mount those files as Volumes in the StatefulSet.">キーストアおよび資格証明を提供するために、この例ではKubernetes <code>Secrets</code>を使用して、これらのファイルを<code>StatefulSet</code>に<code>Volumes</code>としてマウントします。</span> <span class="merged" id="all.3F8ZDv.spl4" title="原文 : This is much more flexible and secure than baking them into an application’s code or image.">これは、アプリケーションのコードまたはイメージにベイク処理するよりも、非常に柔軟で安全です。</span> </p>


<h3 id="_configure_the_extend_proxy"><span class="merged" id="all.4QltDO" title="原文 : Configure the Extend Proxy">拡張プロキシの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.3ew1y0" title="原文 : If we look at the test-cache-config.xml file in the simple-server example project, we can see the configuration for the Extend proxy."><code>simple-server</code>サンプル・プロジェクトの<code>test-cache-config.xml</code>ファイルを見ると、Extendプロキシの構成が表示されます。</span></p>

<markup
lang="xml"
title="test-cache-config.xml"
>    &lt;proxy-scheme&gt;
      &lt;service-name&gt;Proxy&lt;/service-name&gt;
      &lt;acceptor-config&gt;
        &lt;tcp-acceptor&gt;
          &lt;socket-provider system-property="coherence.extend.socket.provider"/&gt;
          &lt;local-address&gt;
            &lt;address system-property="coherence.extend.address"&gt;0.0.0.0&lt;/address&gt;
            &lt;port system-property="coherence.extend.port"&gt;20000&lt;/port&gt;
          &lt;/local-address&gt;
        &lt;/tcp-acceptor&gt;
      &lt;/acceptor-config&gt;
      &lt;autostart&gt;true&lt;/autostart&gt;
    &lt;/proxy-scheme&gt;</markup>

<p><span class="merged" id="all.1XwAHI.spl1" title="原文 : The important item to note above is the socket-provider element, which is empty, but can be set using the coherence.extend.socket.provider system property (or the COHERENCE_EXTEND_SOCKET_PROVIDER environment variable).">前述の重要なアイテムは、<code>socket-provider</code>要素です。これは空ですが、<code>coherence.extend.socket.provider</code>システム・プロパティ(または<code>COHERENCE_EXTEND_SOCKET_PROVIDER</code>環境変数)を使用して設定できます。</span> <span class="merged" id="all.1XwAHI.spl2" title="原文 : By default, a plain TCP socket will be used, but by setting the specified property a different socket can be used, in this case we’ll use one configured for TLS.">デフォルトでは、プレーンTCPソケットが使用されますが、指定されたプロパティを設定すると別のソケットを使用できます。この場合、TLS用に構成されたものを使用します。</span> </p>

</div>

<h3 id="_socket_providers"><span class="merged" id="all.yoYxF" title="原文 : Socket Providers">ソケット・プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.2Byzyb.spl1" title="原文 : In Coherence, socket providers can be configured in the operational configuration file, typically named tangosol-coherence-override.xml.">Coherenceでは、ソケット・プロバイダをオペレーショナル構成ファイル(通常は<code>tangosol-coherence-override.xml</code>という名前)で構成できます。</span> <span class="merged" id="all.2Byzyb.spl2" title="原文 : The source code for the simple-server module contains this file with the TLS socket provider already configured."><code>simple-server</code>モジュールのソース・コードには、TLSソケット・プロバイダがすでに構成されているこのファイルが含まれています。</span> </p>

<p><span class="merged" id="all.2vnxrE" title="原文 : We need to configure two things in the operational configuration file, the socket provider and some password providers to supply the keystore credentials.">キーストア資格証明を提供するために、操作構成ファイル、ソケット・プロバイダおよび一部のパスワード・プロバイダに2つのものを構成する必要があります。</span></p>

<p><span class="merged" id="all.2gwQV7" title="原文 : The socket-provider section looks like this:"><code>socket-provider</code>セクションは次のようになります:</span></p>

<markup
lang="xml"
title="tangosol-coherence-override.xml"
>&lt;socket-providers&gt;
    &lt;socket-provider id="extend-tls"&gt;
        &lt;ssl&gt;
            &lt;protocol&gt;TLS&lt;/protocol&gt;
            &lt;identity-manager&gt;
                &lt;algorithm&gt;SunX509&lt;/algorithm&gt;
                &lt;key-store&gt;
                    &lt;url system-property="coherence.extend.keystore"&gt;file:server.jks&lt;/url&gt;
                    &lt;password-provider&gt;
                        &lt;name&gt;identity-password-provider&lt;/name&gt;
                    &lt;/password-provider&gt;
                    &lt;type&gt;JKS&lt;/type&gt;
                &lt;/key-store&gt;
                &lt;password-provider&gt;
                    &lt;name&gt;key-password-provider&lt;/name&gt;
                &lt;/password-provider&gt;
            &lt;/identity-manager&gt;
            &lt;trust-manager&gt;
                &lt;algorithm&gt;SunX509&lt;/algorithm&gt;
                &lt;key-store&gt;
                    &lt;url system-property="coherence.extend.truststore"&gt;file:trust.jks&lt;/url&gt;
                    &lt;password-provider&gt;
                        &lt;name&gt;trust-password-provider&lt;/name&gt;
                    &lt;/password-provider&gt;
                    &lt;type&gt;JKS&lt;/type&gt;
                &lt;/key-store&gt;
            &lt;/trust-manager&gt;
            &lt;socket-provider&gt;tcp&lt;/socket-provider&gt;
        &lt;/ssl&gt;
    &lt;/socket-provider&gt;
&lt;/socket-providers&gt;</markup>

<p><span class="merged" id="all.36KlKz.spl1" title="原文 : There is a socket-provider with the id of extend-tls.">idが<code>extend-tls</code>の<code>socket-provider</code>があります。</span> <span class="merged" id="all.36KlKz.spl2" title="原文 : This id is the value that must be used to tell the Extend proxy which socket provider to use, i.e. using the system property -Dcoherence.extend.socket.provider=extend-tls">このidは、つまり、システム・プロパティ<code>-Dcoherence.extend.socket.provider=extend-tls</code>を使用して、使用するソケット・プロバイダをExtendプロキシに通知するために使用する必要がある値です</span> </p>

<p><span class="merged" id="all.1Fmiep.spl1" title="原文 : The &lt;identity-manager&gt; element specifies the keystore containing the key and certificate file that the proxy should use."><code>&lt;identity-manager></code>要素は、プロキシが使用するキーおよび証明書ファイルを含むキーストアを指定します。</span> <span class="merged" id="all.1Fmiep.spl2" title="原文 : This is set to file:server.jks but can be overridden using the coherence.extend.keystore system property, or corresponding environment variable.">これは<code>file:server.jks</code>に設定されていますが、<code>coherence.extend.keystore</code>システム・プロパティまたは対応する環境変数を使用してオーバーライドできます。</span> <span class="merged" id="all.1Fmiep.spl3" title="原文 : The password for the &lt;identity-manager&gt; keystore is configured to be provided by the password-provider named identity-password-provider."><code>&lt;identity-manager></code>キーストアのパスワードは、<code>identity-password-provider</code>という名前の<code>password-provider</code>によって指定されるように構成されています。</span> <span class="merged" id="all.1Fmiep.spl4" title="原文 : The password for the key file in the identity keystore is configured to be provided by the password-provider named key-password-provider.">アイデンティティ・キーストア内のキー・ファイルのパスワードは、<code>key-password-provider</code>という名前の<code>password-provider</code>によって指定されるように構成されます。</span> </p>

<p><span class="merged" id="all.4NDLwI.spl1" title="原文 : The &lt;trust-manager&gt; element contains the configuration for the trust keystore containing the CA certs used to validate client certificates."><code>&lt;trust-manager></code>要素には、クライアント証明書のバリデートに使用されるCA証明書を含むトラスト・キーストアの構成が含まれます。</span> <span class="merged" id="all.4NDLwI.spl2" title="原文 : By default, the keystore name is file:trust.jks but this can be overridden using the coherence.extend.truststore system property or corresponding environment variable.">デフォルトでは、キーストア名は<code>file:trust.jks</code>ですが、<code>coherence.extend.truststore</code>システム・プロパティまたは対応する環境変数を使用してオーバーライドできます。</span> <span class="merged" id="all.4NDLwI.spl3" title="原文 : The password for the trust keystore is configured to be provided by the password-provider named trust-password-provider.">トラスト・キーストアのパスワードは、<code>trust-password-provider</code>という名前の<code>password-provider</code>によって指定されるように構成されています。</span> </p>

<p><span class="merged" id="all.1fEvG3" title="原文 : There are three &lt;password-provider&gt; elements in the configuration above, so we need to also configure these three password providers in the operational configuration file.">前述の構成には3つの<code>&lt;password-provider></code>要素があるため、これらの3つのパスワード・プロバイダも操作構成ファイルで構成する必要があります。</span></p>

<markup
lang="xml"
title="tangosol-coherence-override.xml"
>&lt;password-providers&gt;
    &lt;password-provider id="trust-password-provider"&gt;
        &lt;class-name&gt;com.oracle.coherence.examples.tls.FileBasedPasswordProvider&lt;/class-name&gt;
        &lt;init-params&gt;
            &lt;init-param&gt;
                &lt;param-name&gt;fileName&lt;/param-name&gt;
                &lt;param-value system-property="coherence.trust.password.file"&gt;trust-password.txt&lt;/param-value&gt;
            &lt;/init-param&gt;
        &lt;/init-params&gt;
    &lt;/password-provider&gt;
    &lt;password-provider id="identity-password-provider"&gt;
        &lt;class-name&gt;com.oracle.coherence.examples.tls.FileBasedPasswordProvider&lt;/class-name&gt;
        &lt;init-params&gt;
            &lt;init-param&gt;
                &lt;param-name&gt;fileName&lt;/param-name&gt;
                &lt;param-value system-property="coherence.identity.password.file"&gt;server-password.txt&lt;/param-value&gt;
            &lt;/init-param&gt;
        &lt;/init-params&gt;
    &lt;/password-provider&gt;
    &lt;password-provider id="key-password-provider"&gt;
        &lt;class-name&gt;com.oracle.coherence.examples.tls.FileBasedPasswordProvider&lt;/class-name&gt;
        &lt;init-params&gt;
            &lt;init-param&gt;
                &lt;param-name&gt;fileName&lt;/param-name&gt;
                &lt;param-value system-property="coherence.key.password.file"&gt;server-key-password.txt&lt;/param-value&gt;
            &lt;/init-param&gt;
        &lt;/init-params&gt;
    &lt;/password-provider&gt;
&lt;/password-providers&gt;</markup>

<p><span class="merged" id="all.8GuxE.spl1" title="原文 : There are three password providers declared above, each with an &apos;id&apos; attribute corresponding to the names used in the socket provider configuration.">前述の3つのパスワード・プロバイダが宣言されており、それぞれがソケット・プロバイダ構成で使用される名前に対応するid属性を持ちます。</span> <span class="merged" id="all.8GuxE.spl2" title="原文 : Each password provider is identical, they just have a different password file name.">各パスワード・プロバイダは同一であり、パスワード・ファイル名が異なります。</span> </p>

<p><span class="merged" id="all.M1aFf.spl1" title="原文 : The class-name element refers to a class named com.oracle.coherence.examples.tls.FileBasedPasswordProvider, which is in the source code for both the server and client."><code>class-name</code>要素は、<code>com.oracle.coherence.examples.tls.FileBasedPasswordProvider</code>というクラスを指し、これはサーバーとクライアントの両方のソース・コードにあります。</span> <span class="merged" id="all.M1aFf.spl2" title="原文 : This is an implementation of the com.tangosol.net.PasswordProvider interface which can read a password from a file.">これは、ファイルからパスワードを読み取ることができる<code>com.tangosol.net.PasswordProvider</code>インタフェースの実装です。</span> </p>

<p><span class="merged" id="all.3erFTG.spl1" title="原文 : Each password provider’s password file name can be set using the relevant system property or environment variable.">各パスワード・プロバイダのパスワード・ファイル名は、関連するシステム・プロパティまたは環境変数を使用して設定できます。</span> <span class="merged" id="all.3erFTG.spl2" title="原文 : The name of the trust keystore password file is set using the coherence.trust.password.file system property.">トラスト・キーストアのパスワード・ファイルの名前は、<code>coherence.trust.password.file</code>システム・プロパティを使用して設定されます。</span> <span class="merged" id="all.3erFTG.spl3" title="原文 : The name of the identity keystore is set using the coherence.identity.password.file system property.">アイデンティティ・キーストアの名前は、<code>coherence.identity.password.file</code>システム・プロパティを使用して設定されます。</span> <span class="merged" id="all.3erFTG.spl4" title="原文 : The nam eof the identity key file password file is set using the coherence.key.password.file system property.">アイデンティティ・キー・ファイルのパスワード・ファイルは、<code>coherence.key.password.file</code>システム・プロパティを使用して設定されます。</span> </p>

<p><span class="merged" id="all.2bieIV.spl1" title="原文 : The simple server image has all the configuration above built in so there is nothing additional to do to use TLS other than set the system properties or environment variables.">単純なサーバー・イメージには、前述のすべての構成が組み込まれているため、システム・プロパティまたは環境変数を設定する以外にTLSを使用することは追加されません。</span> <span class="merged" id="all.2bieIV.spl2" title="原文 : The test client uses the same configurations, so it can also be run using TLS by setting the relevant system properties.">テスト・クライアントは同じ構成を使用するため、関連するシステム・プロパティを設定してTLSを使用して実行することもできます。</span> </p>

</div>
</div>

<h2 id="_create_the_kubernetes_resources"><span class="merged" id="all.3N5M6P.2" title="原文 : Create the Kubernetes Resources">Kubernetesリソースの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.6ni7U" title="原文 : We can now create the resources we need to run the Cluster with TLS enabled.">TLSを有効にしてクラスタを実行するために必要なリソースを作成できるようになりました。</span></p>


<h3 id="_keystore_secret"><span class="merged" id="all.34xSLM" title="原文 : Keystore Secret">キーストア・シークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.3OWfdY.spl1" title="原文 : We first need to supply the keystores and credentials to the Coherence Pods.">最初に、キーストアと資格証明をCoherence <code>Pods</code>に指定する必要があります。</span> <span class="merged" id="all.3OWfdY.spl2" title="原文 : The secure way to do this in Kubernetes is to use a Secret.">Kubernetesでこれを行う安全な方法は、<code>Secret</code>を使用することです。</span> <span class="merged" id="all.3OWfdY.spl3" title="原文 : We can create a Secret from the command line using kubectl."><code>kubectl</code>を使用して、コマンドラインから<code>Secret</code>を作成できます。</span> <span class="merged" id="all.3OWfdY.spl4" title="原文 : From the 03_extend_tls/ directory containing the keystores and password file srun the following command:">キーストアとパスワード・ファイルを含む<code>03_extend_tls/</code>ディレクトリから、次のコマンドを実行します:</span> </p>

<markup
lang="bash"

>kubectl create secret generic coherence-tls \
    --from-file=./server.jks \
    --from-file=./server-password.txt \
    --from-file=./server-key-password.txt \
    --from-file=./trust.jks \
    --from-file=./trust-password.txt</markup>

<p><span class="merged" id="all.31ROyj.spl1" title="原文 : The command above will create a Secret named coherence-tls containing the files specified.">前述のコマンドでは、指定したファイルを含む<code>coherence-tls</code>という名前の<code>Secret</code>が作成されます。</span> <span class="merged" id="all.31ROyj.spl2" title="原文 : We can now use the Secret in the cluster’s StatefulSet">クラスタの<code>StatefulSet</code>で<code>Secret</code>を使用できるようになりました</span> </p>

</div>

<h3 id="_statefulset"><span class="merged" id="all.23k6KP"  title="原文: StatefulSet">StatefulSet</span></h3>
<div class="section">
<p><span class="merged" id="all.2jSd9i" title="原文 : We will expand on the StatefulSet created in the simple server example and add TLS.">単純なサーバー例で作成した<code>StatefulSet</code>を展開して、TLSを追加します。</span></p>

<markup
lang="yaml"
title="coherence-tls.yaml"
>apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: storage
  labels:
    coherence.oracle.com/cluster: test-cluster
    coherence.oracle.com/deployment: storage
    coherence.oracle.com/component: statefulset
spec:
  selector:
    matchLabels:
      coherence.oracle.com/cluster: test-cluster
      coherence.oracle.com/deployment: storage
  serviceName: storage-sts
  replicas: 3
  template:
    metadata:
      labels:
        coherence.oracle.com/cluster: test-cluster
        coherence.oracle.com/deployment: storage
    spec:
      volumes:
        - name: tls
          secret:
            secretName: coherence-tls
      containers:
        - name: coherence
          image: simple-coherence:1.0.0
          volumeMounts:
            - mountPath: /certs
              name: tls
          command:
            - java
          args:
            - -cp
            - "@/app/jib-classpath-file"
            - -Xms1800m
            - -Xmx1800m
            - "@/app/jib-main-class-file"
          env:
            - name: COHERENCE_CLUSTER
              value: storage
            - name: COHERENCE_WKA
              value: storage-wka
            - name: COHERENCE_CACHECONFIG
              value: test-cache-config.xml
            - name: COHERENCE_EXTEND_SOCKET_PROVIDER
              value: extend-tls
            - name: COHERENCE_EXTEND_KEYSTORE
              value: file:/certs/server.jks
            - name: COHERENCE_IDENTITY_PASSWORD_FILE
              value: /certs/server-password.txt
            - name: COHERENCE_KEY_PASSWORD_FILE
              value: /certs/server-key-password.txt
            - name: COHERENCE_EXTEND_TRUSTSTORE
              value: file:/certs/trust.jks
            - name: COHERENCE_TRUST_PASSWORD_FILE
              value: /certs/trust-password.txt
          ports:
            - name: extend
              containerPort: 20000</markup>

<p><span class="merged" id="all.2O6bHY" title="原文 : The yaml above is identical to the simple server example with the following additions:">前述のyamlは、次の追加とともに単純なサーバーの例と同じです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.30dfpQ" title="原文 : A Volume has been added to the spec section."><code>Volume</code>が<code>spec</code>セクションに追加されました。</span></p>

</li>
</ul>
<div class="listing">
<markup>volumes:
- name: tls
  secret:
    secretName: coherence-tls</markup>
</div>

<p><span class="merged" id="all.2mvS4u" title="原文 : The volume name is tls and the files to mount to the file system in the Pod come from the coherence-tls secret we created above.">ボリューム名は<code>tls</code>で、ポッド内のファイル・システムにマウントするファイルは、前述の<code>coherence-tls</code>シークレットから取得されます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3haXFo" title="原文 : A volumeMount has been added to the Coherence container to map the tls volume to the mount point /certs."><code>tls</code>ボリュームをマウント・ポイント<code>/certs</code>にマップするために、<code>volumeMount</code>がCoherenceコンテナに追加されました。</span></p>

</li>
</ul>
<div class="listing">
<markup>volumeMounts:
  - mountPath: /certs
    name: tls</markup>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4NsJWE" title="原文 : A number of environment variables have been added to configure Coherence to use the extend-tls socket provider and the locations of the keystores and password files."><code>extend-tls</code>ソケット・プロバイダ、およびキーストアおよびパスワード・ファイルのロケーションを使用するようにCoherenceを構成するために、いくつかの環境変数が追加されました。</span></p>

</li>
</ul>
<div class="listing">
<markup>- name: COHERENCE_EXTEND_SOCKET_PROVIDER
  value: extend-tls
- name: COHERENCE_EXTEND_KEYSTORE
  value: file:/certs/server.jks
- name: COHERENCE_IDENTITY_PASSWORD_FILE
  value: /certs/server-password.txt
- name: COHERENCE_KEY_PASSWORD_FILE
  value: /certs/server-key-password.txt
- name: COHERENCE_EXTEND_TRUSTSTORE
  value: file:/certs/trust.jks
- name: COHERENCE_TRUST_PASSWORD_FILE
  value: /certs/trust-password.txt</markup>
</div>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.19"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.1omHLr.spl1" title="原文 : The COHERENCE_EXTEND_KEYSTORE and COHERENCE_EXTEND_TRUSTSTORE values must be URLs."><code>COHERENCE_EXTEND_KEYSTORE</code>および<code>COHERENCE_EXTEND_TRUSTSTORE</code>の値はURLである必要があります。</span> <span class="merged" id="all.1omHLr.spl2" title="原文 : In this case we refer to files usinf the file: prefix.">この場合、ファイルでは<code>file:</code>プレフィクスを使用します。</span> </p>
</p>
</div>
</div>
</div>

<h2 id="_deploy_to_kubernetes"><span class="merged" id="all.41fqoB.1" title="原文 : Deploy to Kubernetes">Kubernetesにデプロイ</span></h2>
<div class="section">
<p><span class="merged" id="all.8RXXw" title="原文 : The source code for this example contains a file named coherence-tls.yaml containing all the configuration above as well as the Services required to run Coherence and expose the Extend port.">この例のソース・コードには、前述のすべての構成を含む<code>coherence-tls.yaml</code>というファイルと、Coherenceを実行してExtendポートを公開するために必要な<code>Services</code>が含まれています。</span></p>

<p><span class="merged" id="all.4aaI7v" title="原文 : We can deploy it with the following command:">次のコマンドを使用してデプロイできます:</span></p>

<markup
lang="bash"

>kubectl apply -f coherence-tls.yaml</markup>

<p><span class="merged" id="all.30qnc4" title="原文 : We can see all the resources created in Kubernetes are the same as for the simple server example.">Kubernetesで作成されたすべてのリソースは、単純なサーバー例の場合と同じです。</span></p>

<markup
lang="bash"

>kubectl get all</markup>

<p><span class="merged" id="all.3pkFbl.2" title="原文 : Which will display something like the following:">次のような内容が表示されます:</span></p>

<markup


>NAME            READY   STATUS    RESTARTS   AGE
pod/storage-0   1/1     Running   0          19s
pod/storage-1   1/1     Running   0          17s
pod/storage-2   1/1     Running   0          16s

NAME                     TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)     AGE
service/storage-extend   ClusterIP   10.105.78.34   &lt;none&gt;        20000/TCP   19s
service/storage-sts      ClusterIP   None           &lt;none&gt;        7/TCP       19s
service/storage-wka      ClusterIP   None           &lt;none&gt;        7/TCP       19s

NAME                       READY   AGE
statefulset.apps/storage   3/3     19s</markup>

</div>

<h2 id="_run_the_client"><span class="merged" id="all.3gmc4i" title="原文 : Run the Client">クライアントの実行</span></h2>
<div class="section">
<p><span class="merged" id="all.1HIQIt" title="原文 : If we run the test client using the same instructions as the simple server example, we will run an interactive Coherence console.">単純なサーバー例と同じ手順を使用してテスト・クライアントを実行すると、対話型のCoherenceコンソールが実行されます。</span></p>

<markup
lang="bash"

>cd test-client/
mvn exec:java</markup>

<p><span class="merged" id="all.4Nngfa" title="原文 : When the Map (?): prompt is displayed we can try to create a cache."><code>Map (?):</code>プロンプトが表示されたら、キャッシュの作成を試行できます。</span></p>

<markup


>Map (?): cache test</markup>

<p><span class="merged" id="all.70rT4" title="原文 : This will not throw an exception because the client is not using TLS so the server rejected the connection.">クライアントがTLSを使用していないため、サーバーは接続を拒否するため、例外をスローしません。</span></p>

<markup


>2021-09-17 18:19:39.182/12.090 Oracle Coherence CE 21.12.1 &lt;Error&gt; (thread=com.tangosol.net.CacheFactory.main(), member=1): Error while starting service "RemoteCache": com.tangosol.net.messaging.ConnectionException: could not establish a connection to one of the following addresses: [127.0.0.1:20000]
	at com.tangosol.coherence.component.util.daemon.queueProcessor.service.peer.initiator.TcpInitiator.openConnection(TcpInitiator.CDB:139)
	at com.tangosol.coherence.component.util.daemon.queueProcessor.service.peer.Initiator.ensureConnection(Initiator.CDB:11)
	at com.tangosol.coherence.component.net.extend.remoteService.RemoteCacheService.openChannel(RemoteCacheService.CDB:7)
	at com.tangosol.coherence.component.net.extend.RemoteService.ensureChannel(RemoteService.CDB:6)
	at com.tangosol.coherence.component.net.extend.RemoteService.doStart(RemoteService.CDB:11)</markup>


<h3 id="_enable_client_tls"><span class="merged" id="all.3o2LSn" title="原文 : Enable Client TLS">クライアントTLSの有効化</span></h3>
<div class="section">
<p><span class="merged" id="all.2PKlDv.spl1" title="原文 : Just like the server, the example test client contains the same operational configuration to configure a socket provider and password providers.">サーバーと同様に、テスト・クライアントの例には、ソケット・プロバイダとパスワード・プロバイダを構成するのと同じ動作構成が含まれます。</span> <span class="merged" id="all.2PKlDv.spl2" title="原文 : The test client directory also contains copies of the keystores and password files.">テスト・クライアント・ディレクトリには、キーストアとパスワード・ファイルのコピーも含まれています。</span> <span class="merged" id="all.2PKlDv.spl3" title="原文 : We can therefore run the client with the relevant system properties to enable it to use TLS and connect to the server.">したがって、クライアントを関連するシステム・プロパティで実行して、TLSを使用してサーバーに接続できるようにすることができます。</span> </p>

<p><span class="merged" id="all.Qqyps" title="原文 : We just need to run the client from the test-client/ directory setting the socket provider system property."><code>test-client/</code>ディレクトリからクライアントを実行して、ソケット・プロバイダのシステム・プロパティを設定する必要があります。</span></p>

<markup
lang="bash"

>cd test-client/
mvn exec:java -Dcoherence.extend.socket.provider=extend-tls</markup>

<p><span class="merged" id="all.3vggl6" title="原文 : After the client starts we can run the cache command, which should complete without an error.">クライアントの起動後、エラーなしで完了する<code>cache</code>コマンドを実行できます。</span></p>

<markup


>Map (?): cache test</markup>

<p><span class="merged" id="all.3qZRne" title="原文 : We can see from the output below that the client connected and created a remote cache.">次の出力から、クライアントがリモート・キャッシュに接続して作成されたことがわかります。</span></p>

<markup


>Cache Configuration: test
  SchemeName: remote
  ServiceName: RemoteCache
  ServiceDependencies: DefaultRemoteCacheServiceDependencies{RemoteCluster=null, RemoteService=Proxy, InitiatorDependencies=DefaultTcpInitiatorDependencies{EventDispatcherThreadPriority=10, RequestTimeoutMillis=30000, SerializerFactory=null, TaskHungThresholdMillis=0, TaskTimeoutMillis=0, ThreadPriority=10, WorkerThreadCount=0, WorkerThreadCountMax=2147483647, WorkerThreadCountMin=0, WorkerThreadPriority=5}{Codec=null, FilterList=[], PingIntervalMillis=0, PingTimeoutMillis=30000, MaxIncomingMessageSize=0, MaxOutgoingMessageSize=0}{ConnectTimeoutMillis=30000, RequestSendTimeoutMillis=30000}{LocalAddress=null, RemoteAddressProviderBldr=com.tangosol.coherence.config.builder.WrapperSocketAddressProviderBuilder@5431b4b4, SocketOptions=SocketOptions{LingerTimeout=0, KeepAlive=true, TcpNoDelay=true}, SocketProvideBuilderr=com.tangosol.coherence.config.builder.SocketProviderBuilder@52c85af7, isNameServiceAddressProvider=false}}{DeferKeyAssociationCheck=false}

Map (test):</markup>

<p><span class="merged" id="all.3E8jGT" title="原文 : Now the client is connected using TLS, we could do puts and gets, or other operations on the cache.">クライアントはTLSを使用して接続され、キャッシュ上のputおよびget、またはその他の操作を実行できます。</span></p>

<p><span class="merged" id="all.rszXS" title="原文 : To exit from the client press ctrl-C, and uninstall the cluster">クライアントから終了するには、Ctrl+Cを押し、クラスタをアンインストール</span></p>

<markup
lang="bash"

>kubectl delete -f coherence-tls.yaml</markup>

</div>
</div>
</doc-view>
