<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_secure_coherence_with_tls"><span class="merged" id="all.3CiJMt" title="原文 : Secure Coherence with TLS">TLSによるセキュアなCoherence</span></h2>
<div class="section">
<p><span class="merged" id="all.3NVsIr.spl1" title="原文 : This example is going to show how to use TLS (or SSL) to secure communication between different parts of a Coherence cluster and applications.">この例では、TLS (またはSSL)を使用してCoherenceクラスタの様々な部分とアプリケーション間の通信を保護する方法を示します。</span> <span class="merged" id="all.3NVsIr.spl2" title="原文 : This is quite a long guide as there are a number of things that can be secured wth TLS.">これは非常に長いガイドです。TLSで保護できるものがたくさんあります。</span> </p>

<p><span class="merged" id="all.1hBKX5" title="原文 : This example shows how to secure various parts of Coherence clusters using TLS.">この例では、TLSを使用してCoherenceクラスタの様々な部分を保護する方法を示します。</span></p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.7"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.1Lrg8m" title="原文 :  The complete source code for this example is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />この例の完全なソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/090_tls" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>
<p><span class="merged" id="all.3fLMNA.spl1" title="原文 : In this example we are going to use Cert Manager to manage the keys and certs for our Coherence server and clients.">この例では、<a href="https://cert-manager.io" id="" target="_blank" >「証明書マネージャ」</a>を使用して、Coherenceサーバーおよびクライアントのキーおよび証明書を管理します。</span> <span class="merged" id="all.3fLMNA.spl2" title="原文 : Cert Manage makes managing certificates in Kubernetes very simple, but it isn’t the only solution.">証明書管理により、Kubernetesの証明書の管理が非常に簡単になりますが、唯一の解決策ではありません。</span> </p>

<p><span class="merged" id="all.1vLaU6" title="原文 : Although securing clusters with TLS is a common request, if running in a secure isolated Kubernetes cluster, you need to weigh up the pros and cons regarding the performance impact TLS will give over the additional security.">TLSを使用してクラスタを保護することは一般的なリクエストですが、セキュアな分離されたKubernetesクラスタで実行する場合、TLSがセキュリティを強化するパフォーマンスへの影響に関して、長所と短所を比較検討する必要があります。</span></p>

<p><span class="merged" id="all.HyCDg" title="原文 : Using Cert Manager we will ultimately end up with four k8s Secrets:">Cert Managerを使用すると、最終的に4つのk8s <code>Secrets</code>で終了します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1r62mj" title="原文 : A Secret containing the server keys, certs, keystore and truststore">サーバー・キー、証明書、キーストアおよびトラスト・ストアを含む<code>Secret</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3qZCdi" title="原文 : A Secret containing a single file containing the server keystore, truststore and key password">サーバー・キーストア、トラスト・ストアおよびキー・パスワードを含む単一ファイルを含む<code>Secret</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2Hqhj2" title="原文 : A Secret containing the client keys, certs, keystore and truststore">クライアント・キー、証明書、キーストアおよびトラスト・ストアを含む<code>Secret</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3NiK17" title="原文 : A Secret containing a single file containing the client keystore, truststore and key password">クライアント・キーストア、トラスト・ストアおよびキー・パスワードを含む単一ファイルを含む<code>Secret</code></span></p>

</li>
</ul>
<p><span class="merged" id="all.14TiMU" title="原文 : If you do not want to use Cert Manager to try this example then a long as you have a way to create the required Secrets containing the keys and passwords above then you can skip to the section on Securing Coherence.">上記のキーとパスワードを含む必要な<code>Secrets</code>を作成できるかぎり、証明書マネージャを使用してこの例を試行しない場合は、<router-link @click.native="this.scrollFix('#coherence')" to="#coherence">「Coherenceの保護」</router-link>のセクションにスキップできます。</span></p>


<h3 id="_what_the_example_will_cover"><span class="merged" id="all.2Qjxxs" title="原文 : What the Example will Cover">例でカバーされる内容</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4CKimw" title="原文 : Install the Operator"><router-link @click.native="this.scrollFix('#install_operator')" to="#install_operator">オペレータのインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2td7cc" title="原文 : Setting Up Cert-Manager"><router-link @click.native="this.scrollFix('#setup_cert_manager')" to="#setup_cert_manager">証明書マネージャの設定</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3tLJHP" title="原文 : Create the SelfSigned Issuer"><router-link @click.native="this.scrollFix('#create_self_signed_issuer')" to="#create_self_signed_issuer">SelfSigned発行者の作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1uHMXj" title="原文 : Create the CA Certificate"><router-link @click.native="this.scrollFix('#create_ce_cert')" to="#create_ce_cert">CA証明書の作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.QFcNh" title="原文 : Create the CA issuer"><router-link @click.native="this.scrollFix('#create_ca_issuer')" to="#create_ca_issuer">CA発行者の作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1xRc0F" title="原文 : Create the Coherence Keys, Certs and KeyStores"><router-link @click.native="this.scrollFix('#create_coherence_keystores')" to="#create_coherence_keystores">Coherenceキー、証明書およびKeyStoresの作成</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2agTo6" title="原文 : Create the Server Keystore Password Secret"><router-link @click.native="this.scrollFix('#server_password_secret')" to="#server_password_secret">サーバー・キーストアのパスワード・シークレットの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2Lf3Nz" title="原文 : Create the Server Certificate"><router-link @click.native="this.scrollFix('#server_cert')" to="#server_cert">サーバー証明書の作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1f2fSc" title="原文 : Create the Client Certificate"><router-link @click.native="this.scrollFix('#client_certs')" to="#client_certs">クライアント証明書の作成</router-link></span></p>

</li>
</ul>
</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.1t746b" title="原文 : Securing Coherence Clusters"><router-link @click.native="this.scrollFix('#coherence')" to="#coherence">Coherenceクラスタの保護</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2JNPvI" title="原文 : Build the Example Images"><router-link @click.native="this.scrollFix('#images')" to="#images">サンプル・イメージの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4DVs3u" title="原文 : Configure a Socket Provider"><router-link @click.native="this.scrollFix('#socket_provider')" to="#socket_provider">ソケット・プロバイダの構成</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.45YDlx" title="原文 : Secure Cluster Membership"><router-link @click.native="this.scrollFix('#tcmp')" to="#tcmp">セキュアなクラスタ・メンバーシップ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4GZJxz" title="原文 : Secure Extend"><router-link @click.native="this.scrollFix('#extend')" to="#extend">セキュアな拡張</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3XVgoZ" title="原文 : Secure gRPC"><router-link @click.native="this.scrollFix('#grpc')" to="#grpc">セキュアgRPC</router-link></span></p>

</li>
</ul>
</div>

<h3 id="install_operator"><span class="merged" id="all.3Uw9Iy.2" title="原文 : Install the Operator">オペレータのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.17vFn6" title="原文 : To run the examples below, you will need to have installed the Coherence Operator, do this using whatever method you prefer from the Installation Guide">次の例を実行するには、Coherence Operatorをインストールし、<a href="https://oracle.github.io/coherence-operator/docs/latest/#/docs/installation/001_installation" id="" target="_blank" >「インストール・ガイド」</a>から必要なメソッドでインストールする必要があります</span></p>

</div>

<h3 id="setup_cert_manager"><span class="merged" id="all.37zSlJ" title="原文 : Setting Up Cert-Manager">証明書マネージャの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3pSqRZ.spl1" title="原文 : In this example we will use self-signed certs as this makes everything easy to get going.">この例では、すべてが簡単に実行できるように、自己署名証明書を使用します。</span> <span class="merged" id="all.3pSqRZ.spl2" title="原文 : Cert Manager has a number of ways to configure real certificates for production use.">Cert Managerには、本番で使用するために実際の証明書を構成する様々な方法があります。</span> <span class="merged" id="all.3pSqRZ.spl3" title="原文 : Assuming that you’ve installed Cert Manager using one of the methods in its Install Guide we can proceed to created all of the required resources."><a href="https://cert-manager.io/docs/installation/" id="" target="_blank" >「インストール・ガイド」</a>のメソッドのいずれかを使用して証明書マネージャをインストールした場合、必要なすべてのリソースの作成に進むことができます。</span> </p>


<h4 id="create_self_signed_issuer"><span class="merged" id="all.9ZOsm" title="原文 : Create the SelfSigned Issuer">SelfSigned発行者の作成</span></h4>
<div class="section">
<p><span class="merged" id="all.15kSj1.spl1" title="原文 : This is used to generate a root CA for use with the CA Issuer.">これは、CA発行者で使用するルートCAを生成するために使用されます。</span> <span class="merged" id="all.15kSj1.spl2" title="原文 : Here we are using a ClusterIssuer so that we can use a single self-signed issuer across all namespaces.">ここでは、すべてのネームスペースで1つの自己署名発行者を使用できるように、<code>ClusterIssuer</code>を使用しています。</span> <span class="merged" id="all.15kSj1.spl3" title="原文 : We could have instead created an Issuer in a single namespace.">かわりに、単一のネームスペースに<code>Issuer</code>を作成することもできます。</span> </p>

<markup
lang="yaml"
title="manifests/selfsigned-issuer.yaml"
>apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: selfsigned-issuer
spec:
  selfSigned: {}</markup>

<p><span class="merged" id="all.2aHeuy.spl1" title="原文 : Create the ClusterIssuer with the following command.">次のコマンドを使用して<code>ClusterIssuer</code>を作成します。</span> <span class="merged" id="all.2aHeuy.spl2" title="原文 : As this is a ClusterIssuer, is does not require a namespace.">これは<code>ClusterIssuer</code>であるため、ネームスペースは必要ありません。</span> </p>

<markup
lang="bash"

>kubectl apply -f manifests/selfsigned-issuer.yaml</markup>

<p><span class="merged" id="all.EnBTD" title="原文 : We can list the ClusterIssuers in the cluster:">クラスタ内の<code>ClusterIssuers</code>をリストできます:</span></p>

<markup
lang="bash"

>kubectl get clusterissuer</markup>

<p><span class="merged" id="all.1TJv5c" title="原文 : We should see that the selfsigned-issuer is present and is ready."><code>selfsigned-issuer</code>が存在し、準備ができていることがわかります。</span></p>

<markup
lang="bash"

>NAME                READY   AGE
selfsigned-issuer   True    14m</markup>

</div>
</div>

<h3 id="create_ce_cert"><span class="merged" id="all.42zhtH" title="原文 : Create the CA Certificate">CA証明書の作成</span></h3>
<div class="section">
<p><span class="merged" id="all.47LsYs.spl1" title="原文 : We’re going to create an internal CA that will be used to sign our certificate requests for the Coherence server and clients that we will run later.">後で実行するCoherenceサーバーおよびクライアントに対する証明書リクエストの署名に使用される内部CAを作成します。</span> <span class="merged" id="all.47LsYs.spl2" title="原文 : Both the server and client will use the CA to validate a connection.">サーバーとクライアントの両方がCAを使用して接続をバリデートします。</span> </p>

<p><span class="merged" id="all.2tCkt0" title="原文 : To create the CA issuer, first create a self-signed CA certificate.">CA発行者を作成するには、最初に自己署名CA証明書を作成します。</span></p>

<markup
lang="yaml"
title="manifests/ca-cert.yaml"
>apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: ca-certificate
spec:
  issuerRef:
    name: selfsigned-issuer   <span class="conum" data-value="1" />
    kind: ClusterIssuer
    group: cert-manager.io
  secretName: ca-cert        <span class="conum" data-value="2" />
  duration: 2880h # 120d
  renewBefore: 360h # 15d
  commonName: Cert Admin
  isCA: true                 <span class="conum" data-value="3" />
  privateKey:
    size: 2048
  usages:
    - digital signature
    - key encipherment</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4UZcMn" title="原文 : The certificate will use the selfsigned-issuer cluster issuer we created above.">証明書は、上で作成した<code>selfsigned-issuer</code>クラスタ発行者を使用します。</span></li>
<li data-value="2"><span class="merged" id="all.1S7X7t" title="原文 : There will be a secret named ca-cert created containing the key and certificate">キーおよび証明書を含む<code>ca-cert</code>という名前のシークレットが作成されます</span></li>
<li data-value="3"><span class="merged" id="all.3gQYIn" title="原文 : Note that the isCA field is set to true in the body of the spec."><code>isCA</code>フィールドは、仕様の本文で<code>true</code>に設定されています。</span></li>
</ul>
<p><span class="merged" id="all.wmhtr" title="原文 : The CA issuer that we will create later will also be a ClusterIssuer, so in order for the issuer to find the Certificate above we will create the certificate in the cert-manager namespace, which is where Cert Manager is running.">後で作成するCA発行者も<code>ClusterIssuer</code>であるため、発行者が前述の<code>Certificate</code>を見つけるために、証明書を<code>cert-manager</code>ネームスペース(証明書マネージャが実行されている場所)に作成します。</span></p>

<markup
lang="bash"

>kubectl -n cert-manager apply -f manifests/ca-cert.yaml</markup>

<p><span class="merged" id="all.2ukpDS" title="原文 : We can see that the certificate was created and should be ready:">証明書が作成され、準備が完了していることがわかります:</span></p>

<markup
lang="bash"

>kubectl -n cert-manager get certificate</markup>

<markup
lang="bash"

>NAME             READY   SECRET    AGE
ca-certificate   True    ca-cert   12m</markup>

<p><span class="merged" id="all.DaCoy.spl1" title="原文 : There will also be a secret named ca-secret created in the cert-manager namespace."><code>cert-manager</code>ネームスペースには、<code>ca-secret</code>という名前のシークレットも作成されます。</span> <span class="merged" id="all.DaCoy.spl2" title="原文 : The Secret will contain the certificate and signing key, this will be created when the CA certificate is deployed, and the CA issuer will reference that secret.">シークレットには証明書と署名キーが含まれ、CA証明書がデプロイされたときに作成され、CA発行者がそのシークレットを参照します。</span> </p>

</div>

<h3 id="create_ca_issuer"><span class="merged" id="all.1lcjz8" title="原文 : Create the CA issuer.">CA発行者の作成。</span></h3>
<div class="section">
<p><span class="merged" id="all.1kUzO7" title="原文 : As with the self-signed issuer above, we will create a ClusterIssuer for the CA issuer.">前述の自己署名発行者と同様に、CA発行者の<code>ClusterIssuer</code>を作成します。</span></p>

<markup
lang="bash"
title="manifests/ca-cert.yaml"
>apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: ca-issuer
spec:
  ca:
    secretName: ca-cert  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3qCgZ9" title="原文 : The ca-issuer will use the ca-cert secret created by the ca-certificate Certificate we created above."><code>ca-issuer</code>では、前述の<code>ca-certificate</code> <code>Certificate</code>によって作成された<code>ca-cert</code>シークレットを使用します。</span></li>
</ul>
<p><span class="merged" id="all.4MFMGs.spl1" title="原文 : Create the CA issuer with the following command.">次のコマンドを使用してCA発行者を作成します。</span> <span class="merged" id="all.4MFMGs.spl2" title="原文 : As this is a ClusterIssuer, is does not require a namespace.">これは<code>ClusterIssuer</code>であるため、ネームスペースは必要ありません。</span> </p>

<markup
lang="bash"

>kubectl apply -f manifests/ca-issuer.yaml</markup>

<p><span class="merged" id="all.27uSYR" title="原文 : You can then check that the issuer have been successfully configured by checking the status.">その後、ステータスをチェックして発行者が正常に構成されていることを確認できます。</span></p>

<markup
lang="bash"

>kubectl get clusterissuer</markup>

<p><span class="merged" id="all.4bxPUu" title="原文 : We should see that both ClusterIssuers we created are present and is ready.">作成した<code>ClusterIssuers</code>は両方存在し、準備ができていることがわかります。</span></p>

<markup
lang="bash"

>NAME                READY   AGE
ca-issuer           True    22m
selfsigned-issuer   True    31m</markup>

</div>

<h3 id="create_coherence_keystores"><span class="merged" id="all.2gzGHH" title="原文 : Create the Coherence Keys, Certs and KeyStores">Coherenceキー、証明書およびKeyStoresの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.1XuG2Y.spl1" title="原文 : As the Coherence server, and client in this example, are Java applications they will require Java keystores to hold the certificates.">この例のCoherenceサーバーおよびクライアントは、証明書を保持するためにJavaキーストアを必要とするJavaアプリケーションです。</span> <span class="merged" id="all.1XuG2Y.spl2" title="原文 : We can use Cert-Manager to create these for us.">Cert-Managerを使用してこれを作成できます。</span> </p>


<h4 id="_create_a_namespace"><span class="merged" id="all.1R5Et7" title="原文 : Create a Namespace">ネームスペースの作成</span></h4>
<div class="section">
<p><span class="merged" id="all.3fyfXh" title="原文 : We will run the Coherence cluster in a namespace called coherence-test, so we will first create this:">Coherenceクラスタは、<code>coherence-test</code>というネームスペースで実行するため、最初にこれを作成します:</span></p>

<markup
lang="bash"

>kubectl create ns coherence-test</markup>

</div>

<h4 id="server_password_secret"><span class="merged" id="all.9CXJG" title="原文 : Create the Server Keystore Password Secret">サーバー・キーストアのパスワード・シークレットの作成</span></h4>
<div class="section">
<p><span class="merged" id="all.15i08z.spl1" title="原文 : The keystore will be secured with a password.">キーストアはパスワードで保護されます。</span> <span class="merged" id="all.15i08z.spl2" title="原文 : We will create this password in a Secret so that Cert-Manager can find and use it.">このパスワードを<code>Secret</code>に作成して、証明書マネージャがそのパスワードを検索して使用できるようにします。</span> <span class="merged" id="all.15i08z.spl3" title="原文 : The simplest way to create this secret is with kubectl:">このシークレットを作成する最も簡単な方法は、kubectlです:</span> </p>

<markup
lang="bash"

>kubectl -n coherence-test create secret generic \
    server-keystore-secret --from-literal=password-key=[your-password]</markup>

<p><span class="merged" id="all.CkuqY.spl1" title="原文 : …​replacing [your-password] with the actual password you want to use.">… <code>[your-password]</code>を、使用する実際のパスワードに置き換えます。</span> <span class="merged" id="all.CkuqY.spl2" title="原文 : Resulting in a Secret similar to this:">次のような<code>Secret</code>になります:</span> </p>

<markup
lang="bash"
title="manifests/ca-cert.yaml"
>apiVersion: v1
kind: Secret
metadata:
  name: server-keystore-secret
data:
  password-key: "cGFzc3dvcmQ=" <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2ZStvg" title="原文 : In this example the password used is password">この例では、使用されるパスワードは<code>password</code>です</span></li>
</ul>
</div>

<h4 id="server_cert"><span class="merged" id="all.4KMkse" title="原文 : Create the Server Certificate">サーバー証明書の作成</span></h4>
<div class="section">
<p><span class="merged" id="all.11Rb2l" title="原文 : We can now create the server certificate and keystore.">これで、サーバー証明書およびキーストアを作成できます。</span></p>

<markup
lang="yaml"
title="manifests/server-keystore.yaml"
>apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: server-keystore
spec:
  issuerRef:
    name: ca-issuer                   <span class="conum" data-value="1" />
    kind: ClusterIssuer
    group: cert-manager.io
  secretName: coherence-server-certs  <span class="conum" data-value="2" />
  keystores:
    jks:
      create: true
      passwordSecretRef:
        key: password-key
        name: server-keystore-secret  <span class="conum" data-value="3" />
  duration: 2160h # 90d
  renewBefore: 360h # 15d
  privateKey:
    size: 2048
    algorithm: RSA
    encoding: PKCS1
  usages:
    - digital signature
    - key encipherment
    - client auth
    - server auth
  commonName: Coherence Certs</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2Ovs13" title="原文 : The issuer will the ClusterIssuer named ca-issuer that we created above.">発行者は、前述の<code>ca-issuer</code>という名前の<code>ClusterIssuer</code>を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.JCiXo" title="原文 : The keys, certs and keystores will be created in a secret named coherence-server-certs">キー、証明書およびキーストアは、<code>coherence-server-certs</code>という名前のシークレットに作成されます</span></li>
<li data-value="3"><span class="merged" id="all.12uqSA" title="原文 : The keystore password secret is the Secret named server-keystore-secret we created above">キーストア・パスワード・シークレットは、前述の<code>server-keystore-secret</code>という名前の<code>Secret</code>です</span></li>
</ul>
<p><span class="merged" id="all.hp5rA" title="原文 : We can create the certificate in the coherence-test namespace with the following command:">次のコマンドを使用して、<code>coherence-test</code>ネームスペースに証明書を作成できます:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test apply -f manifests/server-keystore.yaml</markup>

<p><span class="merged" id="all.1V2EPu" title="原文 : If we list the certificate in the coherence-test namespace we should see the new certificate and that it is ready."><code>coherence-test</code>ネームスペースに証明書をリストすると、新しい証明書が表示され、準備が完了していることがわかります。</span></p>

<markup
lang="bash"

>kubectl -n coherence-test get certificate</markup>

<markup
lang="bash"

>NAME              READY   SECRET                   AGE
server-keystore   True    coherence-server-certs   4s</markup>

<p><span class="merged" id="all.4FMjG0" title="原文 : If we list the secrets in the coherence-test namespace we should see both the password secret and the keystore secret:"><code>coherence-test</code>ネームスペースにシークレットをリストする場合、パスワード・シークレットとキーストア・シークレットの両方が表示されます:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test get secret</markup>

<markup
lang="bash"

>NAME                     TYPE                 DATA   AGE
coherence-server-certs   kubernetes.io/tls    5      117s
server-keystore-secret   Opaque               1      2m9s</markup>

</div>

<h4 id="client_certs"><span class="merged" id="all.31sAJY" title="原文 : Create the Client Certificate">クライアント証明書の作成</span></h4>
<div class="section">
<p><span class="merged" id="all.tBbhC" title="原文 : We can create the certificates and keystores for the client in exactly the same way we did for the server.">クライアントの証明書およびキーストアは、サーバーに対して行った方法とまったく同じ方法で作成できます。</span></p>

<p><span class="merged" id="all.ybHSd" title="原文 : Create a password secret for the client keystore:">クライアント・キーストアのパスワード・シークレットを作成します:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test create secret generic \
    client-keystore-secret --from-literal=password-key=[your-password]</markup>

<p><span class="merged" id="all.1MPijl" title="原文 : Create the client certificate and keystore.">クライアント証明書およびキーストアを作成します。</span></p>

<markup
lang="yaml"
title="manifests/client-keystore.yaml"
>apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: client-keystore
spec:
  issuerRef:
    name: ca-issuer                   <span class="conum" data-value="1" />
    kind: ClusterIssuer
    group: cert-manager.io
  secretName: coherence-client-certs  <span class="conum" data-value="2" />
  keystores:
    jks:
      create: true
      passwordSecretRef:
        key: password-key
        name: client-keystore-secret  <span class="conum" data-value="3" />
  duration: 2160h # 90d
  renewBefore: 360h # 15d
  privateKey:
    size: 2048
    algorithm: RSA
    encoding: PKCS1
  usages:
    - digital signature
    - key encipherment
    - client auth
  commonName: Coherence Certs</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3KR3SU" title="原文 : The issuer is the same cluster-wide ca-issuer that we used for the server.">発行者は、サーバーに使用したクラスタ全体の<code>ca-issuer</code>と同じです。</span></li>
<li data-value="2"><span class="merged" id="all.3EaJl6" title="原文 : The keys, certs and keystores will be created in a secret named coherence-client-certs">キー、証明書およびキーストアは、<code>coherence-client-certs</code>という名前のシークレットに作成されます</span></li>
<li data-value="3"><span class="merged" id="all.1oeEBn" title="原文 : The keystore password secret is the Secret named client-keystore-secret we created above">キーストア・パスワード・シークレットは、前述の<code>client-keystore-secret</code>という名前の<code>Secret</code>です</span></li>
</ul>
<markup
lang="bash"

>kubectl -n coherence-test apply -f manifests/client-keystore.yaml</markup>

<p><span class="merged" id="all.1VHfOH" title="原文 : If we list the certificate in the coherence-test namespace we should see the new client certificate and that it is ready."><code>coherence-test</code>ネームスペースに証明書をリストすると、新しいクライアント証明書が表示され、準備が完了していることがわかります。</span></p>

<markup
lang="bash"

>kubectl -n coherence-test get certificate</markup>

<markup


>NAME              READY   SECRET                   AGE
client-keystore   True    coherence-client-certs   12s
server-keystore   True    coherence-server-certs   2m13s</markup>

</div>
</div>
</div>

<h2 id="coherence"><span class="merged" id="all.2J4qIX"  title="原文:: Securing Coherence">Coherenceの保護</span></h2>
<div class="section">
<p><span class="merged" id="all.8cNCL.spl1" title="原文 : By this point, you should have installed the Operator and have the four Secrets required, either created by Cert Manager, or manually.">この時点で、オペレータをインストールし、4つの<code>Secrets</code>が必要(証明書マネージャによって作成するか、手動で作成する必要があります)。</span> <span class="merged" id="all.8cNCL.spl2" title="原文 : Now we can secure Coherence clusters.">これで、Coherenceクラスタを保護できます。</span> </p>


<h3 id="images"><span class="merged" id="all.1Weftp" title="原文 : Build the Test Images">テスト・イメージのビルド</span></h3>
<div class="section">
<p><span class="merged" id="all.3fidND.spl1" title="原文 : This example includes a Maven project that will build a Coherence server and client images with configuration files that allow us to easily demonstrate TLS.">この例には、TLSを簡単にデモンストレーションできる構成ファイルを含むCoherenceサーバーおよびクライアント・イメージをビルドするMavenプロジェクトが含まれます。</span> <span class="merged" id="all.3fidND.spl2" title="原文 : To build the images run the following command:">イメージをビルドするには、次のコマンドを実行します:</span> </p>

<markup
lang="bash"

>./mvnw clean package jib:dockerBuild</markup>

<p><span class="merged" id="all.rJkQp" title="原文 : This will produce two images:">これにより、次の2つのイメージが生成されます:</span></p>

<ul class="ulist">
<li>
<p><code>tls-example-server:1.0.0</code></p>

</li>
<li>
<p><code>tls-example-client:1.0.0</code></p>

</li>
</ul>
<p><span class="merged" id="all.2nVJWc" title="原文 : These images can run secure or insecure depending on various system properties passed in at runtime.">これらのイメージは、実行時に渡される様々なシステム・プロパティに応じて、セキュアまたは安全ではありません。</span></p>

</div>

<h3 id="socket_provider"><span class="merged" id="all.4BLccy" title="原文 : Configure a Socket Provider">ソケット・プロバイダの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2c3QKF.spl1" title="原文 : When configuring Coherence to use TLS, we need to configure a socket provider that Coherence can use to create secure socket.">TLSを使用するようにCoherenceを構成する場合、Coherenceがセキュアなソケットの作成に使用できるソケット・プロバイダを構成する必要があります。</span> <span class="merged" id="all.2c3QKF.spl2" title="原文 : We then tell Coherence to use this provider in various places, such as Extend connections, cluster member TCMP connections etc. This configuration is typically done by adding the provider configuration to the Coherence operational configuration override file.">次に、接続の拡張、クラスタ・メンバーのTCMP接続など、このプロバイダを様々な場所で使用するようにCoherenceに指示します。この構成は、通常、プロバイダ構成をCoherence操作構成オーバーライド・ファイルに追加することによって行われます。</span> </p>

<p><span class="merged" id="all.4O6Jz0" title="原文 : The Coherence documentation has a lot of details on configuring socket providers in the section on Using SSL Secure Communication">Coherenceドキュメントには、<a href="https://docs.oracle.com/en/middleware/fusion-middleware/coherence/14.1.2/secure/using-ssl-secure-communication.html#GUID-21CBAF48-BA78-4373-AC90-BF668CF31776" id="" target="_blank" >「SSLセキュア通信の使用」</a>のセクションにあるソケット・プロバイダの構成に関する多くの詳細があります</span></p>

<p><span class="merged" id="all.vsj9J" title="原文 : Below is an example that we will use on the server cluster members">次に、サーバー・クラスタ・メンバーで使用する例を示します</span></p>

<markup
lang="xml"
title="src/main/resources/tls-coherence-override.xml"
>&lt;coherence xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://xmlns.oracle.com/coherence/coherence-operational-config"
    xsi:schemaLocation="http://xmlns.oracle.com/coherence/coherence-operational-config coherence-operational-config.xsd"&gt;
  &lt;cluster-config&gt;
    &lt;socket-providers&gt;
      &lt;socket-provider id="tls"&gt;
        &lt;ssl&gt;
          &lt;protocol&gt;TLS&lt;/protocol&gt;
          &lt;identity-manager&gt;
            &lt;key-store&gt;
              &lt;url system-property="coherence.tls.keystore"/&gt;
              &lt;password-provider&gt;
                &lt;class-name&gt;com.oracle.coherence.k8s.FileBasedPasswordProvider&lt;/class-name&gt;
                  &lt;init-params&gt;
                    &lt;init-param&gt;
                      &lt;param-type&gt;String&lt;/param-type&gt;
                      &lt;param-value system-property="coherence.tls.keystore.password"&gt;/empty.txt&lt;/param-value&gt;
                    &lt;/init-param&gt;
                &lt;/init-params&gt;
              &lt;/password-provider&gt;
            &lt;/key-store&gt;
            &lt;password-provider&gt;
              &lt;class-name&gt;com.oracle.coherence.k8s.FileBasedPasswordProvider&lt;/class-name&gt;
              &lt;init-params&gt;
                &lt;init-param&gt;
                  &lt;param-type&gt;String&lt;/param-type&gt;
                  &lt;param-value system-property="coherence.tls.key.password"&gt;/empty.txt&lt;/param-value&gt;
              &lt;/init-param&gt;
            &lt;/init-params&gt;
          &lt;/password-provider&gt;
          &lt;/identity-manager&gt;
          &lt;trust-manager&gt;
            &lt;key-store&gt;
              &lt;url system-property="coherence.tls.truststore"/&gt;
              &lt;password-provider&gt;
                &lt;class-name&gt;com.oracle.coherence.k8s.FileBasedPasswordProvider&lt;/class-name&gt;
                &lt;init-params&gt;
                  &lt;init-param&gt;
                    &lt;param-type&gt;String&lt;/param-type&gt;
                    &lt;param-value system-property="coherence.tls.truststore.password"&gt;/empty.txt&lt;/param-value&gt;
                  &lt;/init-param&gt;
                &lt;/init-params&gt;
              &lt;/password-provider&gt;
            &lt;/key-store&gt;
          &lt;/trust-manager&gt;
        &lt;/ssl&gt;
      &lt;/socket-provider&gt;
    &lt;/socket-providers&gt;
  &lt;/cluster-config&gt;
&lt;/coherence&gt;</markup>

<p><span class="merged" id="all.4UjGM3" title="原文 : The file above has a number of key parts.">上のファイルにはいくつかの重要な部分があります。</span></p>

<p><span class="merged" id="all.1xQl9f.spl1" title="原文 : We must give the provider a name so that we can refer to it in other configuration.">他の構成で参照できるように、プロバイダに名前を指定する必要があります。</span> <span class="merged" id="all.1xQl9f.spl2" title="原文 : This is done by setting the id attribute of the &lt;socket-provider&gt; element.">これは、<code>&lt;socket-provider></code>要素の<code>id</code>属性を設定を設定します。</span> <span class="merged" id="all.1xQl9f.spl3" title="原文 : In this case we name the provider &quot;tls&quot; in &lt;socket-provider id=&quot;tls&quot;&gt;.">この場合、プロバイダに<code>&lt;socket-provider id="tls"></code>の"tls"という名前を付けます。</span> </p>

<p><span class="merged" id="all.4N6xgl" title="原文 : We set the &lt;protocol&gt; element to TLS to tell Coherence that this is a TLS socket."><code>&lt;protocol></code>要素をTLSに設定して、これがTLSソケットであることをCoherenceに通知します。</span></p>

<p><span class="merged" id="all.1lhjlx.spl1" title="原文 : We need to set the keystore URL.">キーストアURLを設定する必要があります。</span> <span class="merged" id="all.1lhjlx.spl2" title="原文 : If we always used a common location, we could hard code it in the configuration.">常に一般的なロケーションを使用した場合は、構成でハードコードできます。</span> <span class="merged" id="all.1lhjlx.spl3" title="原文 : In this case we will configure the &lt;keystore&gt;&lt;url&gt; element to be injected from a system property which we will configure at runtime &lt;url system-property=&quot;coherence.tls.keystore&quot;/&gt;.">この場合、実行時<code>&lt;url system-property="coherence.tls.keystore"/></code>で構成するシステム・プロパティからインジェクトされる<code>&lt;keystore>&lt;url></code>要素を構成します。</span> </p>

<p><span class="merged" id="all.JJHrf.spl1" title="原文 : We obviously do not want hard-coded passwords in our configuration.">実際の構成では、ハードコードされたパスワードは望ましくありません。</span> <span class="merged" id="all.JJHrf.spl2" title="原文 : In this example we will use a password provider, which is a class implementing the com.tangosol.net.PasswordProvider interface, that can provide the password by reading file.">この例では、<code>com.tangosol.net.PasswordProvider</code>インタフェースを実装するクラスであるパスワード・プロバイダを使用します。このクラスは、ファイルを読み取ってパスワードを提供できます。</span> <span class="merged" id="all.JJHrf.spl3" title="原文 : In this case the file will be the one from the password secret created above that we will mount into the container.">この場合、ファイルは上で作成されたパスワード・シークレットからコンテナにマウントされます。</span> </p>

<markup
lang="xml"
title="src/main/resources/server-cache-config.xml"
>&lt;password-provider&gt;
  &lt;class-name&gt;com.oracle.coherence.k8s.FileBasedPasswordProvider&lt;/class-name&gt;
    &lt;init-params&gt;
      &lt;init-param&gt;
        &lt;param-type&gt;String&lt;/param-type&gt;
        &lt;param-value system-property="coherence.tls.keystore.password"/&gt;
      &lt;/init-param&gt;
  &lt;/init-params&gt;
&lt;/password-provider&gt;</markup>

<p><span class="merged" id="all.35AFHv" title="原文 : In the snippet above the password file location will be passed in using the coherence.tls.keystore.password system property.">パスワード・ファイルのロケーションの上のスニペットは、<code>coherence.tls.keystore.password</code>システム・プロパティを使用して渡されます。</span></p>

<p><span class="merged" id="all.eGI2C" title="原文 : We declare another password provider for the private key password.">秘密キーのパスワードとして別のパスワード・プロバイダを宣言します。</span></p>

<p><span class="merged" id="all.4GRFgy" title="原文 : We then declare the configuration for the truststore, which follows the same pattern as the keystore.">次に、キーストアと同じパターンに続くトラスト・ストアの構成を宣言します。</span></p>

<p><span class="merged" id="all.2eLqIZ" title="原文 : The configuration above is included in both of the example images that we built above.">前述の構成は、前述のイメージの両方に組み込まれています。</span></p>

</div>
</div>

<h2 id="tcmp"><span class="merged" id="all.3EHaiP" title="原文 : Secure Cluster Membership">セキュアなクラスタ・メンバーシップ</span></h2>
<div class="section">
<p><span class="merged" id="all.3U0JNM.spl1" title="原文 : Now we have a &quot;tls&quot; socket provider we can use it to secure Coherence.">これで、"tls"ソケット・プロバイダを使用してCoherenceを保護できるようになりました。</span> <span class="merged" id="all.3U0JNM.spl2" title="原文 : The Coherence documentation has a section on Securing Coherence TCMP with TLS.">Coherenceのドキュメントには、<a href="https://docs.oracle.com/en/middleware/fusion-middleware/coherence/14.1.2/secure/using-ssl-secure-communication.html#GUID-21CBAF48-BA78-4373-AC90-BF668CF31776" id="" target="_blank" >「TLSによるCoherence TCMPの保護」</a>に関するセクションがあります。</span> <span class="merged" id="all.3U0JNM.spl3" title="原文 : Securing communication between cluster members is very simple, we just set the coherence.socketprovider system property to the name of the socket provider we want to use.">クラスタ・メンバー間の通信の保護は非常に簡単です。<code>coherence.socketprovider</code>システム・プロパティを、使用するソケット・プロバイダの名前に設定します。</span> <span class="merged" id="all.3U0JNM.spl4" title="原文 : In our case this will be the &quot;tls&quot; provider we configured above, so we would use -Dcoherence.socketprovider=tls">この場合、これは上で構成した"tls"プロバイダであるため、<code>-Dcoherence.socketprovider=tls</code>を使用</span> </p>

<p><span class="merged" id="all.qGoh5" title="原文 : The yaml below is a Coherence resource that will cause the Operator to create a three member Coherence cluster.">次のyamlは、オペレータが3つのメンバーCoherenceクラスタを作成する<code>Coherence</code>リソースです。</span></p>

<markup
lang="yaml"
title="manifests/coherence-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: tls-cluster
spec:
  replicas: 3
  image: tls-example-server:1.0.0    <span class="conum" data-value="1" />
  cluster: test-cluster              <span class="conum" data-value="2" />
  coherence:
    overrideConfig: tls-coherence-override.xml  <span class="conum" data-value="3" />
    cacheConfig: server-cache-config.xml        <span class="conum" data-value="4" />
  jvm:
    args:
      - -Dcoherence.socketprovider=tls  <span class="conum" data-value="5" />
      - -Dcoherence.tls.keystore=file:/coherence/certs/keystore.jks
      - -Dcoherence.tls.keystore.password=file:/coherence/certs/credentials/password-key
      - -Dcoherence.tls.key.password=file:/coherence/certs/credentials/password-key
      - -Dcoherence.tls.truststore=file:/coherence/certs/truststore.jks
      - -Dcoherence.tls.truststore.password=file:/coherence/certs/credentials/password-key
  secretVolumes:
    - mountPath: coherence/certs             <span class="conum" data-value="6" />
      name: coherence-server-certs
    - mountPath: coherence/certs/credentials
      name: server-keystore-secret
  ports:
    - name: extend  <span class="conum" data-value="7" />
      port: 20000
    - name: grpc
      port: 1408
    - name: management
      port: 30000
    - name: metrics
      port: 9612</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.gD6VN" title="原文 : The image name is the server image built from this example project">イメージ名は、このサンプル・プロジェクトから作成されたサーバー・イメージです</span></li>
<li data-value="2"><span class="merged" id="all.2epKtO" title="原文 : We specify a cluster name because we want to be able to demonstrate other Coherence deployments can or cannot join this cluster, so their yaml files will use this same cluster name.">他のCoherenceデプロイメントがこのクラスタに参加できるか、またはこのクラスタに参加できないことを示すことができるため、クラスタ名を指定するため、yamlファイルはこの同じクラスタ名を使用します。</span></li>
<li data-value="3"><span class="merged" id="all.3yNXT5" title="原文 : We set the Coherence override file to the file containing the &quot;tls&quot; socket provider configuration.">Coherenceオーバーライド・ファイルは、"tls"ソケット・プロバイダ構成を含むファイルに設定します。</span></li>
<li data-value="4"><span class="merged" id="all.3eGGGh" title="原文 : We use a custom cache configuration file that has an Extend proxy that we can secure later.">拡張プロキシを持つカスタム・キャッシュ構成ファイルを使用して、後で保護できます。</span></li>
<li data-value="5"><span class="merged" id="all.1XexWB" title="原文 : We set the coherence.socketprovider system property to use the &quot;tls&quot; provider, we also set a number of other properties that will set the locations of the keystores and password files to map to the secret volume mounts."><code>coherence.socketprovider</code>システム・プロパティを設定して"tls"プロバイダを使用します。また、シークレット・ボリューム・マウントにマップするキーストアおよびパスワード・ファイルのロケーションを設定するその他のいくつかのプロパティも設定します。</span></li>
<li data-value="6"><span class="merged" id="all.2H4ZUE" title="原文 : We mount the certificate and password secrets to volumes">証明書とパスワード・シークレットをボリュームにマウント</span></li>
<li data-value="7"><span class="merged" id="all.1Bryt5" title="原文 : We expose some ports for clients which we will use later, and for management, so we can enquire on the cluster state using REST.">後で使用するクライアントのためにいくつかのポートを公開し、管理のために、RESTを使用してクラスタ状態をクエリーできます。</span></li>
</ul>
<p><span class="merged" id="all.2mpWUc" title="原文 : Install the yaml above into the coherence-test namespace:">前述のyamlを<code>coherence-test</code>ネームスペースにインストールします:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test apply -f manifests/coherence-cluster.yaml</markup>

<p><span class="merged" id="all.1y3TPZ" title="原文 : If we list the Pods in the coherence-test namespace then after a minute or so there should be three ready Pods."><code>coherence-test</code>ネームスペースのポッドをリストする場合は、1分後または3つの準備ができたポッドが必要です。</span></p>

<markup
lang="bash"

>kubectl -n coherence-test get pods</markup>

<markup
lang="bash"

>NAME             READY   STATUS    RESTARTS   AGE
tls-cluster-0    1/1     Running   0          88s
tls-cluster-1    1/1     Running   0          88s
tls-cluster-2    1/1     Running   0          88s</markup>


<h3 id="_port_forward_to_the_rest_management_port"><span class="merged" id="all.1PVNuN" title="原文 : Port Forward to the REST Management Port">REST管理ポートへのポート転送</span></h3>
<div class="section">
<p><span class="merged" id="all.MMV8Z.spl1" title="原文 : Remember that we exposed a number of ports in our Coherence cluster, one of these was REST management on port 30000.">Coherenceクラスタで多数のポートを公開しましたが、そのうちの1つはポート<code>30000</code>でのREST管理でした。</span> <span class="merged" id="all.MMV8Z.spl2" title="原文 : We can use this along with curl to enquire about the cluster state.">これを<code>curl</code>とともに使用して、クラスタの状態を照会できます。</span> <span class="merged" id="all.MMV8Z.spl3" title="原文 : We need to use kubectl to forward a local port to one of the Coherence Pods."><code>kubectl</code>を使用して、ローカル・ポートをいずれかのCoherenceポッドに転送する必要があります。</span> </p>

<p><span class="merged" id="all.2397pn" title="原文 : Open another terminal session and run the following command:">別の端末セッションを開き、次のコマンドを実行します:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test port-forward tls-cluster-0 30000:30000</markup>

<p><span class="merged" id="all.2QPate" title="原文 : This will forward port 30000 on the local machine (e.g. your dev laptop) to the tls-cluster-0 Pod.">これにより、ローカル・マシン上のポート<code>30000</code> (例、開発ノート・パソコン)が<code>tls-cluster-0</code>ポッドに転送されます。</span></p>

<p><span class="merged" id="all.2TQw1q" title="原文 : We can now obtain the cluster state from the REST endpoint with the following command:">次のコマンドを使用して、RESTエンドポイントからクラスタ状態を取得できるようになりました:</span></p>

<markup
lang="bash"

>curl -X GET http://127.0.0.1:30000/management/coherence/cluster</markup>

<p><span class="merged" id="all.1K7N9D" title="原文 : or if you have the jq utility we can pretty print the json output:">または、<a href="https://stedolan.github.io/jq/" id="" target="_blank" >jq</a>ユーティリティがある場合は、json出力をかなり印刷できます:</span></p>

<markup
lang="bash"

>curl -X GET http://127.0.0.1:30000/management/coherence/cluster | jq</markup>

<p><span class="merged" id="all.2aXp3x" title="原文 : We will see json something like this:">jsonは次のように表示されます:</span></p>

<markup
lang="json"

>{
  "links": [
  ],
  "clusterSize": 3,      <span class="conum" data-value="1" />
  "membersDeparted": [],
  "memberIds": [
    1,
    2,
    3
  ],
  "oldestMemberId": 1,
  "refreshTime": "2021-03-07T12:27:20.193Z",
  "licenseMode": "Development",
  "localMemberId": 1,
  "version": "22.06",
  "running": true,
  "clusterName": "test-cluster",
  "membersDepartureCount": 0,
  "members": [                     <span class="conum" data-value="2" />
    "Member(Id=1, Timestamp=2021-03-07 12:24:32.982, Address=10.244.1.6:38271, MachineId=17483, Location=site:zone-two,rack:two,machine:operator-worker2,process:33,member:tls-cluster-1, Role=tls-cluster)",
    "Member(Id=2, Timestamp=2021-03-07 12:24:36.572, Address=10.244.2.5:36139, MachineId=21703, Location=site:zone-one,rack:one,machine:operator-worker,process:35,member:tls-cluster-0, Role=tls-cluster)",
    "Member(Id=3, Timestamp=2021-03-07 12:24:36.822, Address=10.244.1.7:40357, MachineId=17483, Location=site:zone-two,rack:two,machine:operator-worker2,process:34,member:tls-cluster-2, Role=tls-cluster)"
  ],
  "type": "Cluster"
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3AUTKr" title="原文 : We can see that the cluster size is three.">クラスタ・サイズが3であることがわかります。</span></li>
<li data-value="2"><span class="merged" id="all.2YkiAz" title="原文 : The member list shows details of the three Pods in the cluster">メンバー・リストには、クラスタ内の3つのポッドの詳細が表示されます</span></li>
</ul>
</div>

<h3 id="_start_non_tls_cluster_members"><span class="merged" id="all.2Kadf4" title="原文 : Start Non-TLS Cluster Members">TLS以外のクラスタ・メンバーの開始</span></h3>
<div class="section">
<p><span class="merged" id="all.4Xeykv" title="原文 : To demonstrate that the cluster is secure we can start another cluster with yaml that does not enable TLS.">クラスタがセキュアであることを示すために、TLSを有効にしないyamlを使用して別のクラスタを起動できます。</span></p>

<markup
lang="yaml"
title="manifests/coherence-cluster-no-tls.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: no-tls-cluster
spec:
  replicas: 3
  image: tls-example-server:1.0.0     <span class="conum" data-value="1" />
  cluster: test-cluster               <span class="conum" data-value="2" />
  coherence:
    cacheConfig: server-cache-config.xml
  ports:
    - name: extend
      port: 20000
    - name: grpc
      port: 1408
    - name: management
      port: 30000
    - name: metrics
      port: 9612</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2cgicS" title="原文 : This Coherence resource uses the same server image as the secure cluster">この<code>Coherence</code>リソースは、セキュア・クラスタと同じサーバー・イメージを使用</span></li>
<li data-value="2"><span class="merged" id="all.2wIpfO.spl1" title="原文 : This Coherence resource also uses the same cluster name as the secure cluster, test-cluster, so it should attempt to join with the secure cluster.">この<code>Coherence</code>リソースは、セキュア・クラスタ<code>test-cluster</code>と同じクラスタ名を使用するため、セキュア・クラスタとの結合を試みます。</span> <span class="merged" id="all.2wIpfO.spl2" title="原文 : If the existing cluster is not secure, we will end up with a cluster of six members.">既存のクラスタがセキュアでない場合、6つのメンバーのクラスタで終わります。</span> </li>
</ul>
<p><span class="merged" id="all.2mpWUc.1" title="原文 : Install the yaml above into the coherence-test namespace:">前述のyamlを<code>coherence-test</code>ネームスペースにインストールします:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test apply -f manifests/coherence-cluster-no-tls.yaml</markup>

<p><span class="merged" id="all.1y3TPZ.1" title="原文 : If we list the Pods in the coherence-test namespace then after a minute or so there should be three ready Pods."><code>coherence-test</code>ネームスペースのポッドをリストする場合は、1分後または3つの準備ができたポッドが必要です。</span></p>

<markup
lang="bash"

>kubectl -n coherence-test get pods</markup>

<markup
lang="bash"

>NAME                READY   STATUS    RESTARTS   AGE
tls-cluster-0       1/1     Running   0          15m
tls-cluster-1       1/1     Running   0          15m
tls-cluster-2       1/1     Running   0          15m
no-tls-cluster-0    1/1     Running   0          78s
no-tls-cluster-1    1/1     Running   0          78s
no-tls-cluster-2    1/1     Running   0          78s</markup>

<p><span class="merged" id="all.fxfbP.spl1" title="原文 : There are six pods running, but they have not formed a six member cluster.">6つのポッドが実行されていますが、6つのメンバー・クラスタを作成していません。</span> <span class="merged" id="all.fxfbP.spl2" title="原文 : If we re-run the curl command to query the REST management endpoint of the secure cluster we will see that the cluster size is still three:">curlコマンドを再実行してセキュア・クラスタのREST管理エンドポイントをクエリーすると、クラスタ・サイズが3のままであることがわかります:</span> </p>

<markup
lang="bash"

>curl -X GET http://127.0.0.1:30000/management/coherence/cluster -s | jq '.clusterSize'</markup>

<p><span class="merged" id="all.16CCy9" title="原文 : What happens is that the non-TLS members have effectively formed their own cluster of three members, but have not been able to form a cluster with the TLS enabled members.">TLS以外のメンバーは、3つのメンバーの独自のクラスタを効果的に形成しましたが、TLSが有効なメンバーを持つクラスタを形成できませんでした。</span></p>

</div>

<h3 id="_cleanup"><span class="merged" id="all.6lMSz"  title="原文:: Cleanup">クリーンアップ</span></h3>
<div class="section">
<p><span class="merged" id="all.2NxwAY" title="原文 : After trying the example, remove both clusters with the corresponding kubectl delete commands so that they do not interfere with the next example.">例を試行した後、対応する<code>kubectl delete</code>コマンドを使用して両方のクラスタを削除し、次の例を妨げないようにします。</span></p>

<markup
lang="bash"

>kubectl -n coherence-test delete -f manifests/coherence-cluster-no-tls.yaml

kubectl -n coherence-test delete -f manifests/coherence-cluster.yaml</markup>

</div>

<h3 id="extend"><span class="merged" id="all.1ZKmTp" title="原文 : Secure Extend Connections">安全な拡張接続</span></h3>
<div class="section">
<p><span class="merged" id="all.1LosV9.spl1" title="原文 : A common connection type to secure are client connections into the cluster from Coherence Extend clients.">セキュアにする一般的な接続タイプは、Coherence Extendクライアントからのクラスタへのクライアント接続です。</span> <span class="merged" id="all.1LosV9.spl2" title="原文 : The Coherence documentation contains details on Using SSL to Secure Extend Client Communication for more in-depth details.">Coherenceドキュメントには、<a href="https://docs.oracle.com/en/middleware/fusion-middleware/coherence/14.1.2/secure/using-ssl-secure-communication.html#GUID-0F636928-8731-4228-909C-8B8AB09613DB" id="" target="_blank" >「SSLを使用したクライアント通信の拡張の保護」</a>の詳細が含まれています。</span> </p>

<p><span class="merged" id="all.YhB0u.spl1" title="原文 : As with securing TCMP, we can specify a socket provider in the Extend proxy configuration in the server’s cache configuration file and also in the remote scheme in the client’s cache configuration.">TCMPのセキュリティ保護と同様に、サーバーのキャッシュ構成ファイルおよびクライアントのキャッシュ構成のリモート・スキームで、拡張プロキシ構成にソケット・プロバイダを指定できます。</span> <span class="merged" id="all.YhB0u.spl2" title="原文 : In this example we will use exactly the same TLS socket provider configuration that we created above.">この例では、前述のものと同じTLSソケット・プロバイダ構成を使用します。</span> <span class="merged" id="all.YhB0u.spl3" title="原文 : The only difference being the name of the PasswordProvider class used by the client.">唯一の違いは、クライアントで使用される<code>PasswordProvider</code>クラスの名前です。</span> <span class="merged" id="all.YhB0u.spl4" title="原文 : At the time of writing this, Coherence does not include an implementation of PasswordProvider that reads from a file.">これを作成するときに、Coherenceには、ファイルから読み取る<code>PasswordProvider</code>の実装は含まれません。</span> <span class="merged" id="all.YhB0u.spl5" title="原文 : The Coherence Operator injects one into the classpath of the server, but our simple client is not managed by the Operator.">Coherence Operatorは1つをサーバーのクラスパスにインジェクトしますが、単純なクライアントはオペレータによって管理されません。</span> <span class="merged" id="all.YhB0u.spl6" title="原文 : We have added a simple FileBasedPasswordProvider class to the client code in this example.">この例では、単純な<code>FileBasedPasswordProvider</code>クラスをクライアント・コードに追加しました。</span> </p>


<h4 id="_secure_the_proxy"><span class="merged" id="all.2WIsSx" title="原文 : Secure the Proxy">プロキシの保護</span></h4>
<div class="section">
<p><span class="merged" id="all.4Cu8Ng" title="原文 : To enable TLS for an Extend proxy, we can just specify the name of the socket provider that we want to use in the &lt;proxy-scheme&gt; in the server’s cache configuration file.">拡張プロキシに対してTLSを有効にするには、サーバーのキャッシュ構成ファイル内の<code>&lt;proxy-scheme></code>で使用するソケット・プロバイダの名前のみを指定できます。</span></p>

<p><span class="merged" id="all.3tuKe9" title="原文 : The snippet of configuration below is taken from the server-cache-config.xml file in the example source.">次の構成のスニペットは、サンプル・ソースの<code>server-cache-config.xml</code>ファイルから取得されます。</span></p>

<markup
lang="xml"
title="src/main/resources/server-cache-config.xml"
>&lt;proxy-scheme&gt;
    &lt;service-name&gt;Proxy&lt;/service-name&gt;
    &lt;acceptor-config&gt;
        &lt;tcp-acceptor&gt;
            &lt;socket-provider system-property="coherence.extend.socket.provider"/&gt;       <span class="conum" data-value="1" />
            &lt;local-address&gt;
                &lt;address system-property="coherence.extend.address"&gt;0.0.0.0&lt;/address&gt;   <span class="conum" data-value="2" />
                &lt;port system-property="coherence.extend.port"&gt;20000&lt;/port&gt;              <span class="conum" data-value="3" />
            &lt;/local-address&gt;
        &lt;/tcp-acceptor&gt;
    &lt;/acceptor-config&gt;
    &lt;load-balancer&gt;client&lt;/load-balancer&gt;
    &lt;autostart&gt;true&lt;/autostart&gt;
&lt;/proxy-scheme&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.Mw0gC.spl1" title="原文 : The &lt;socket-provider&gt; element is empty by default, but is configured to be set from the system property named coherence.extend.socket.provider."><code>&lt;socket-provider></code>要素はデフォルトで空ですが、<code>coherence.extend.socket.provider</code>という名前のシステム・プロパティから設定されるように構成されています。</span> <span class="merged" id="all.Mw0gC.spl2" title="原文 : This means that by default, Extend will run without TLS.">つまり、デフォルトでは、ExtendはTLSなしで実行されます。</span> <span class="merged" id="all.Mw0gC.spl3" title="原文 : If we start the server with the system property set to &quot;tls&quot;, the name of our socket provider, then the proxy will use TLS.">システム・プロパティをTLS(ソケット・プロバイダの名前)に設定してサーバーを起動すると、プロキシはTLSを使用します。</span> </li>
<li data-value="2"><span class="merged" id="all.2uVn8s" title="原文 : The Extend proxy will bind to all local addresses.">Extendプロキシは、すべてのローカル・アドレスにバインドされます。</span></li>
<li data-value="3"><span class="merged" id="all.1mZGVT" title="原文 : The Extend proxy service will bind to port 20000.">Extendプロキシ・サービスはポート20000にバインドされます。</span></li>
</ul>
<p><span class="merged" id="all.8NPPT.spl1" title="原文 : We add the additional coherence.extend.socket.provider system property to the spec.jvm.args section of the Coherence resource yaml we will use to deploy the server.">追加の<code>coherence.extend.socket.provider</code>システム・プロパティを、サーバーのデプロイに使用するCoherenceリソースyamlの<code>spec.jvm.args</code>セクションに追加します。</span> <span class="merged" id="all.8NPPT.spl2" title="原文 : The yaml below is identical to the yaml we used above to secure TCMP, but with the addition of the coherence.extend.socket.provider property.">次のyamlは、上でTCMPを保護するために使用したyamlと同じですが、<code>coherence.extend.socket.provider</code>プロパティが追加されています。</span> </p>

<markup
lang="yaml"
title="coherence-cluster-extend.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: tls-cluster
spec:
  replicas: 3
  image: tls-example-server:1.0.0
  cluster: test-cluster
  coherence:
    cacheConfig: server-cache-config.xml
    overrideConfig: tls-coherence-override.xml
  jvm:
    args:
      - -Dcoherence.socketprovider=tls
      - -Dcoherence.extend.socket.provider=tls    <span class="conum" data-value="1" />
      - -Dcoherence.tls.keystore=file:/coherence/certs/keystore.jks
      - -Dcoherence.tls.keystore.password=file:/coherence/certs/credentials/password-key
      - -Dcoherence.tls.key.password=file:/coherence/certs/credentials/password-key
      - -Dcoherence.tls.truststore=file:/coherence/certs/truststore.jks
      - -Dcoherence.tls.truststore.password=file:/coherence/certs/credentials/password-key
  secretVolumes:
    - mountPath: coherence/certs
      name: coherence-server-certs
    - mountPath: coherence/certs/credentials
      name: server-keystore-secret
  ports:
    - name: extend
      port: 20000
    - name: grpc
      port: 1408</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.LDhQM" title="原文 : The -Dcoherence.extend.socket.provider=tls has been added to enable TLS for the Extend proxy."><code>-Dcoherence.extend.socket.provider=tls</code>が追加され、Extendプロキシに対してTLSが有効になりました。</span></li>
</ul>
<p><span class="merged" id="all.N6NDD" title="原文 : Installing the yaml above will give us a Coherence cluster that uses TLS for both TCMP inter-cluster communication and for Extend connections.">前述のyamlをインストールすると、TCMPクラスタ間通信とExtend接続の両方にTLSを使用するCoherenceクラスタが提供されます。</span></p>

</div>

<h4 id="_install_the_cluster"><span class="merged" id="all.2bJn8Q" title="原文 : Install the Cluster">クラスタのインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.3skkmH" title="原文 : We can install the Coherence cluster defined in the yaml above using kubectl:">前述のyamlで定義されたCoherenceクラスタは、<code>kubectl</code>を使用してインストールできます:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test apply -f manifests/coherence-cluster-extend.yaml</markup>

<p><span class="merged" id="all.2cyUR7.spl1" title="原文 : After a minute or two the three Pods should be ready, which can be confirmed with kubectl.">1分または2分後に3つのポッドの準備ができ、これは<code>kubectl</code>で確認できます。</span> <span class="merged" id="all.2cyUR7.spl2" title="原文 : Because the yaml above declares a port named extend on port 20000, the Coherence Operator will create a k8s Service to expose this port.">前述のyamlはポート<code>20000</code>で<code>extend</code>という名前のポートを宣言するため、Coherence Operatorはk8s <code>Service</code>を作成してこのポートを公開します。</span> <span class="merged" id="all.2cyUR7.spl3" title="原文 : The service name will be the Coherence resource name suffixed with the port name, so in this case tls-cluster-extend.">サービス名は、ポート名にサフィクスが付いたCoherenceリソース名になるため、この場合は<code>tls-cluster-extend</code>になります。</span> <span class="merged" id="all.2cyUR7.spl4" title="原文 : As a Service in k8s can be looked up by DNS, we can use this service name as the host name for the client to connect to.">k8sの<code>Service</code>はDNSで検索できるため、このサービス名を接続先のクライアントのホスト名として使用できます。</span> </p>

</div>

<h4 id="_configure_the_extend_client"><span class="merged" id="all.2tv0yo.1" title="原文 : Configure the Extend Client">拡張クライアントの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.4VApPZ.spl1" title="原文 : Just like the server, we can include a socket provider configuration in the override file and configure the name of the socket provider that the client should use in the client’s cache configuration file.">サーバーと同様に、オーバーライド・ファイルにソケット・プロバイダ構成を含め、クライアントがクライアントのキャッシュ構成ファイルで使用するソケット・プロバイダの名前を構成できます。</span> <span class="merged" id="all.4VApPZ.spl2" title="原文 : The socket provider configuration is identical to that shown already above (with the different FileBasedPasswordProvider class name).">ソケット・プロバイダの構成は、すでに上に示した構成と同じです(異なる<code>FileBasedPasswordProvider</code>クラス名)。</span> </p>

<p><span class="merged" id="all.1vdeVZ.spl1" title="原文 : The Extend client code used in the src/main/java/com/oracle/coherence/examples/k8s/client/Main.java file in this example just starts a Coherence client, then obtains a NamedMap, and in a very long loop just puts data into the map, logging out the keys added.">この例の<code>src/main/java/com/oracle/coherence/examples/k8s/client/Main.java</code>ファイルで使用されるExtendクライアント・コードは、Coherenceクライアントを起動してから、<code>NamedMap</code>を取得し、非常に長いループでデータをマップに入れ、追加されたキーをログアウトします。</span> <span class="merged" id="all.1vdeVZ.spl2" title="原文 : This is very trivial but allows us to see that the client is connected and working (or not).">これは非常に簡単ですが、クライアントが接続され動作している(または動作していない)ことがわかります。</span> </p>

<p><span class="merged" id="all.2yezPu" title="原文 : The snippet of xml below is from the client’s cache configuration file.">次のxmlのスニペットは、クライアントのキャッシュ構成ファイルからのものです。</span></p>

<markup
lang="xml"
title="src/main/resources/client-cache-config.xml"
>&lt;remote-cache-scheme&gt;
    &lt;scheme-name&gt;remote&lt;/scheme-name&gt;
    &lt;service-name&gt;Proxy&lt;/service-name&gt;
    &lt;initiator-config&gt;
        &lt;tcp-initiator&gt;
            &lt;socket-provider system-property="coherence.extend.socket.provider"/&gt;           <span class="conum" data-value="1" />
            &lt;remote-addresses&gt;
                &lt;socket-address&gt;
                    &lt;address system-property="coherence.extend.address"&gt;127.0.0.1&lt;/address&gt; <span class="conum" data-value="2" />
                    &lt;port system-property="coherence.extend.port"&gt;20000&lt;/port&gt;              <span class="conum" data-value="3" />
                &lt;/socket-address&gt;
            &lt;/remote-addresses&gt;
        &lt;/tcp-initiator&gt;
    &lt;/initiator-config&gt;
&lt;/remote-cache-scheme&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.Za0kg.spl1" title="原文 : The &lt;socket-provider&gt; element is empty by default, but is configured to be set from the system property named coherence.extend.socket.provider."><code>&lt;socket-provider></code>要素はデフォルトで空ですが、<code>coherence.extend.socket.provider</code>という名前のシステム・プロパティから設定されるように構成されています。</span> <span class="merged" id="all.Za0kg.spl2" title="原文 : This means that by default, the Extend client will connect without TLS.">つまり、デフォルトでは、ExtendクライアントはTLSなしで接続されます。</span> <span class="merged" id="all.Za0kg.spl3" title="原文 : If we start the client with the system property set to &quot;tls&quot;, the name of our socket provider, then the client will use TLS.">システム・プロパティを「TLS」に設定してクライアントを起動すると、クライアントはTLSを使用します。</span> </li>
<li data-value="2"><span class="merged" id="all.4QHcvQ.spl1" title="原文 : By default, the Extend client will connect loopback, on 127.0.0.1 but this can be overridden by setting the coherence.extend.address system property.">デフォルトでは、Extendクライアントは<code>127.0.0.1</code>のループバックを接続しますが、これは<code>coherence.extend.address</code>システム・プロパティを設定することでオーバーライドできます。</span> <span class="merged" id="all.4QHcvQ.spl2" title="原文 : We will use this when we deploy the client to specify the name of the Service that is used to expose the server’s Extend port.">これは、クライアントのデプロイ時に、サーバーのExtendポートを公開するために使用される<code>Service</code>の名前を指定する場合に使用します。</span> </li>
<li data-value="3"><span class="merged" id="all.42v4NX.spl1" title="原文 : The Extend client will connect to port 20000.">Extendクライアントはポート20000に接続します。</span> <span class="merged" id="all.42v4NX.spl2" title="原文 : Although this can be overridden with a system property, port 20000 is also the default port used by the server, so there is no need to override it.">これはシステム・プロパティでオーバーライドできますが、ポート20000はサーバーで使用されるデフォルト・ポートでもあるため、オーバーライドする必要はありません。</span> </li>
</ul>
</div>

<h4 id="_start_an_insecure_client"><span class="merged" id="all.40Pyic" title="原文 : Start an Insecure Client">安全でないクライアントの起動</span></h4>
<div class="section">
<p><span class="merged" id="all.yuHhQ.spl1" title="原文 : As a demonstration we can first start a non-TLS client and see what happens.">デモンストレーションとして、最初に非TLSクライアントを起動して何が起きるかを確認できます。</span> <span class="merged" id="all.yuHhQ.spl2" title="原文 : We can create a simple Pod that will run the client image using the yaml below.">次のyamlを使用してクライアント・イメージを実行する単純な<code>Pod</code>を作成できます。</span> </p>

<p><span class="merged" id="all.35QdXo.spl1" title="原文 : One of the features of newer Coherence CE versions is that configuration set via system properties prefixed with coherence. can also be set with corresponding environment variable names.">新しいCoherence CEバージョンの機能の1つは、プレフィクス<code>coherence.</code>が付いたシステム・プロパティを介して設定された構成も、対応する環境変数名で設定できることです。</span> <span class="merged" id="all.35QdXo.spl2" title="原文 : The convention used for the environment variable name is to convert the system property name to uppercase and convert &quot;.&quot; characters to &quot;_&quot;, so setting the cache configuration file with the coherence.cacheconfig system property can be done using the COHERENCE_CACHECONFIG environment variable.">環境変数名に使用される規則は、システム・プロパティ名を大文字に変換し、"."文字を"_"に変換するため、<code>coherence.cacheconfig</code>システム・プロパティを持つキャッシュ構成ファイルを<code>COHERENCE_CACHECONFIG</code>環境変数を使用して設定できます。</span> <span class="merged" id="all.35QdXo.spl3" title="原文 : This makes it simple to set Coherence configuration properties in a Pod yaml using environment variables instead of having to build a custom Java command line.">これにより、カスタムJavaコマンドラインをビルドするのではなく、環境変数を使用してPod yamlにCoherence構成プロパティを設定するのが簡単になります。</span> </p>

<markup
lang="yaml"
title="manifests/client-no-tls.yaml"
>apiVersion: v1
kind: Pod
metadata:
  name: client
spec:
  containers:
    - name: client
      image: tls-example-client:1.0.0
      env:
        - name: COHERENCE_CACHECONFIG       <span class="conum" data-value="1" />
          value: client-cache-config.xml
        - name: COHERENCE_EXTEND_ADDRESS    <span class="conum" data-value="2" />
          value: tls-cluster-extend</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2wBqsU" title="原文 : The client will use the client-cache-config.xml cache configuration file.">クライアントは<code>client-cache-config.xml</code>キャッシュ構成ファイルを使用します。</span></li>
<li data-value="2"><span class="merged" id="all.4fT2m3" title="原文 : The COHERENCE_EXTEND_ADDRESS is set to tls-cluster-extend, which is the name of the service exposing the server’s Extend port and which will be injected into the client’s cache configuration file, as explained above."><code>COHERENCE_EXTEND_ADDRESS</code>は<code>tls-cluster-extend</code>に設定されます。これは、サーバーのExtendポートを公開するサービスの名前で、前述のようにクライアントのキャッシュ構成ファイルにインジェクトされます。</span></li>
</ul>
<p><span class="merged" id="all.VbkkF" title="原文 : We can run the client Pod with the following command:">次のコマンドを使用してクライアント・ポッドを実行できます:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test apply -f manifests/client-no-tls.yaml</markup>

<p><span class="merged" id="all.Oaieb" title="原文 : If we look at the Pods now in the coherence-test namespace we will see the client running:"><code>coherence-test</code>ネームスペースでポッドを表示すると、実行中のクライアントが表示されます:</span></p>

<markup
lang="bash"

>$ kubectl -n coherence-test get pod</markup>

<markup
lang="bash"

>NAME            READY   STATUS    RESTARTS   AGE
client          1/1     Running   0          3s
tls-cluster-0   1/1     Running   0          2m8s
tls-cluster-1   1/1     Running   0          2m8s
tls-cluster-2   1/1     Running   0          2m8s</markup>

<p><span class="merged" id="all.3VuEmJ" title="原文 : If we look at the log of the client Pod though we will see a stack trace with the cause:">クライアント・ポッドのログを見ると、原因のスタック・トレースが表示されます:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test logs client</markup>

<markup


>2021-03-07 12:53:13.481/1.992 Oracle Coherence CE 22.06 &lt;Error&gt; (thread=main, member=n/a): Error while starting service "Proxy": com.tangosol.net.messaging.ConnectionException: could not establish a connection to one of the following addresses: []</markup>

<p><span class="merged" id="all.38jwfU" title="原文 : This tells us that the client failed to connect to the cluster, because the client is not using TLS.">クライアントがTLSを使用していないため、クラスタへの接続に失敗したことがわかります。</span></p>

<p><span class="merged" id="all.21HmfR" title="原文 : We can remove the non-TLS client:">TLS以外のクライアントを削除できます:</span></p>

<markup


>kubectl -n coherence-test delete -f manifests/client-no-tls.yaml</markup>

</div>

<h4 id="_start_a_tls_enabled_client"><span class="merged" id="all.4DA24X" title="原文 : Start a TLS Enabled Client">TLS対応クライアントの起動</span></h4>
<div class="section">
<p><span class="merged" id="all.3fBAPq.spl1" title="原文 : We can now modify the client yaml to run the client with TLS enabled.">クライアントyamlを変更して、TLSが有効なクライアントを実行できるようになりました。</span> <span class="merged" id="all.3fBAPq.spl2" title="原文 : The client image already contains the tls-coherence-override.xml file with the configuration for the TLS socket provider.">クライアント・イメージには、TLSソケット・プロバイダの構成を含む<code>tls-coherence-override.xml</code>ファイルがすでに含まれています。</span> <span class="merged" id="all.3fBAPq.spl3" title="原文 : We need to set the relevant environment variables to inject the location of the keystores and tell Coherence to use the &quot;tls&quot; socket provider for the Extend connection.">キーストアのロケーションをインジェクトし、Extend接続の"tls"ソケット・プロバイダを使用するようにCoherenceに指示するには、関連する環境変数を設定する必要があります。</span> </p>

<markup
lang="yaml"
title="manifests/client.yaml"
>apiVersion: v1
kind: Pod
metadata:
  name: client
spec:
  containers:
    - name: client
      image: tls-example-client:1.0.0
      env:
        - name: COHERENCE_CACHECONFIG
          value: client-cache-config.xml
        - name: COHERENCE_EXTEND_ADDRESS
          value: tls-cluster-extend
        - name: COHERENCE_OVERRIDE
          value: tls-coherence-override.xml                 <span class="conum" data-value="1" />
        - name: COHERENCE_EXTEND_SOCKET_PROVIDER
          value: tls
        - name: COHERENCE_TLS_KEYSTORE
          value: file:/coherence/certs/keystore.jks
        - name: COHERENCE_TLS_KEYSTORE_PASSWORD
          value: /coherence/certs/credentials/password-key
        - name: COHERENCE_TLS_KEY_PASSWORD
          value: /coherence/certs/credentials/password-key
        - name: COHERENCE_TLS_TRUSTSTORE
          value: file:/coherence/certs/truststore.jks
        - name: COHERENCE_TLS_TRUSTSTORE_PASSWORD
          value: /coherence/certs/credentials/password-key
      volumeMounts:                                         <span class="conum" data-value="2" />
        - name: coherence-client-certs
          mountPath: coherence/certs
        - name: keystore-credentials
          mountPath: coherence/certs/credentials
  volumes:                                                  <span class="conum" data-value="3" />
    - name: coherence-client-certs
      secret:
        defaultMode: 420
        secretName: coherence-client-certs
    - name: keystore-credentials
      secret:
        defaultMode: 420
        secretName: client-keystore-secret</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1e0191" title="原文 : The yaml is identical to the non-TLS client with the addition of the environment variables to configure TLS.">yamlは、TLSを構成するための環境変数が追加された非TLSクライアントと同じです。</span></li>
<li data-value="2"><span class="merged" id="all.2fBHhN" title="原文 : We create volume mount points to map the Secret volumes containing the keystores and password to directories in the container">ボリューム・マウント・ポイントを作成して、キーストアとパスワードを含むシークレット・ボリュームをコンテナ内のディレクトリにマップ</span></li>
<li data-value="3"><span class="merged" id="all.1xWNgP" title="原文 : We mount the Secrets as volumes">シークレットをボリュームとしてマウント</span></li>
</ul>
<p><span class="merged" id="all.VbkkF.1" title="原文 : We can run the client Pod with the following command:">次のコマンドを使用してクライアント・ポッドを実行できます:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test apply -f manifests/client.yaml</markup>

<p><span class="merged" id="all.3i0YJq" title="原文 : If we now look at the client’s logs:">クライアントのログを確認する場合:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test logs client</markup>

<p><span class="merged" id="all.3NPwTV" title="原文 : The end of the log should show the messages from the client as it puts each entry into a NamedMap.">ログの終わりには、クライアントからのメッセージが表示され、各エントリが<code>NamedMap</code>になります。</span></p>

<markup


>Put 0
Put 1
Put 2
Put 3
Put 4
Put 5</markup>

<p><span class="merged" id="all.1m0sBQ.spl1" title="原文 : So now we have a TLS secured Extend proxy and client.">このため、TLSで保護されたExtendプロキシおよびクライアントがあります。</span> <span class="merged" id="all.1m0sBQ.spl2" title="原文 : We can remove the client and test cluster:">クライアントおよびテスト・クラスタを削除できます:</span> </p>

<markup
lang="bash"

>kubectl -n coherence-test delete -f manifests/client.yaml

kubectl -n coherence-test delete -f manifests/coherence-cluster-extend.yaml</markup>

</div>
</div>
</div>
</doc-view>
