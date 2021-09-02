<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_ssl_with_metrics"><span class="merged" id="all.2wFQwE" title="原文 : SSL with Metrics">メトリクス付きSSL</span></h2>
<div class="section">
<p><span class="merged" id="all.2avGF6.spl1" title="原文 : It is possible to configure metrics endpoint to use SSL to secure the communication between server and client.">SSLを使用してサーバーとクライアント間の通信を保護するようにメトリクス・エンドポイントを構成できます。</span> <span class="merged" id="all.2avGF6.spl2" title="原文 : The SSL configuration is in the coherence.metrics.ssl section of the CRD spec.">SSL構成は、CRD仕様の<code>coherence.metrics.ssl</code>セクションにあります。</span> </p>

<p><span class="merged" id="all.6vDv5.17"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  coherence:
    metrics:
      enabled: true
      ssl:
        enabled: true                            <span class="conum" data-value="1" />
        keyStore: metrics-keys.jks               <span class="conum" data-value="2" />
        keyStoreType: JKS                        <span class="conum" data-value="3" />
        keyStorePasswordFile: store-pass.txt     <span class="conum" data-value="4" />
        keyPasswordFile: key-pass.txt            <span class="conum" data-value="5" />
        keyStoreProvider:                        <span class="conum" data-value="6" />
        keyStoreAlgorithm: SunX509               <span class="conum" data-value="7" />
        trustStore: metrics-trust.jks            <span class="conum" data-value="8" />
        trustStoreType: JKS                      <span class="conum" data-value="9" />
        trustStorePasswordFile: trust-pass.txt   <span class="conum" data-value="10" />
        trustStoreProvider:                      <span class="conum" data-value="11" />
        trustStoreAlgorithm: SunX509             <span class="conum" data-value="12" />
        requireClientCert: true                  <span class="conum" data-value="13" />
        secrets: metrics-secret                  <span class="conum" data-value="14" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.FuYcg.1" title="原文 : The enabled field when set to true enables SSL for metrics or when set to false disables SSL"><code>true</code>に設定されている場合、<code>enabled</code>フィールドは、メトリクスに対してSSLを有効にするか、<code>false</code>に設定するとSSLが無効になります</span></li>
<li data-value="2"><span class="merged" id="all.2kW9G2.1" title="原文 : The keyStore field sets the name of the Java key store file that should be used to obtain the server&rsquo;s key"><code>keyStore</code>フィールドは、サーバーのキーの取得に使用するJavaキー・ストア・ファイルの名前を設定</span></li>
<li data-value="3"><span class="merged" id="all.N3g8j.1" title="原文 : The optional keyStoreType field sets the type of the key store file, the default value is JKS">オプションの<code>keyStoreType</code>フィールドはキー・ストア・ファイルのタイプを設定します。デフォルト値は<code>JKS</code>です</span></li>
<li data-value="4"><span class="merged" id="all.1kMUv7.1" title="原文 : The optional keyStorePasswordFile sets the name of the text file containing the key store password">オプションの<code>keyStorePasswordFile</code>は、キー・ストア・パスワードを含むテキスト・ファイルの名前を設定</span></li>
<li data-value="5"><span class="merged" id="all.1BbQr4.1" title="原文 : The optional keyPasswordFile sets the name of the text file containing the password of the key in the key store">オプションの<code>keyPasswordFile</code>は、キー・ストア内のキーのパスワードを含むテキスト・ファイルの名前を設定</span></li>
<li data-value="6"><span class="merged" id="all.XT8Ny.1" title="原文 : The optional keyStoreProvider sets the provider name for the key store">オプションの<code>keyStoreProvider</code>は、キー・ストアのプロバイダ名を設定</span></li>
<li data-value="7"><span class="merged" id="all.R70o2.1" title="原文 : The optional keyStoreAlgorithm sets the algorithm name for the key store, the default value is SunX509">オプションの<code>keyStoreAlgorithm</code>は、キー・ストアのアルゴリズム名を設定します。デフォルト値は<code>SunX509</code>です</span></li>
<li data-value="8"><span class="merged" id="all.yx8Wj.1" title="原文 : The trustStore field sets the name of the Java trust store file that should be used to obtain the server&rsquo;s key"><code>trustStore</code>フィールドは、サーバーのキーの取得に使用するJavaトラスト・ストア・ファイルの名前を設定</span></li>
<li data-value="9"><span class="merged" id="all.RttRk.1" title="原文 : The optional trustStoreType field sets the type of the trust store file, the default value is JKS">オプションの<code>trustStoreType</code>フィールドは、トラスト・ストア・ファイルのタイプを設定します。デフォルト値は<code>JKS</code>です</span></li>
<li data-value="10"><span class="merged" id="all.38syp3.1" title="原文 : The optional trustStorePasswordFile sets the name of the text file containing the trust store password">オプションの<code>trustStorePasswordFile</code>は、トラスト・ストア・パスワードを含むテキスト・ファイルの名前を設定</span></li>
<li data-value="11"><span class="merged" id="all.39748G.1" title="原文 : The optional trustStoreProvider sets the provider name for the trust store">オプションの<code>trustStoreProvider</code>は、トラスト・ストアのプロバイダ名を設定</span></li>
<li data-value="12"><span class="merged" id="all.489hfB.1" title="原文 : The optional trustStoreAlgorithm sets the algorithm name for the trust store, the default value is SunX509">オプションの<code>trustStoreAlgorithm</code>は、トラスト・ストアのアルゴリズム名を設定します。デフォルト値は<code>SunX509</code>です</span></li>
<li data-value="13"><span class="merged" id="all.Fa8yb.1" title="原文 : The optional requireClientCert field if set to true enables two-way SSL where the client must also provide a valid certificate"><code>true</code>に設定されている場合、オプションの<code>requireClientCert</code>フィールドにより双方向SSLが有効になり、クライアントは有効な証明書も指定する必要があります</span></li>
<li data-value="14"><span class="merged" id="all.i3cqR.1" title="原文 : The optional secrets field sets the name of the Kubernetes Secret to use to obtain the key store, truct store and password files from.">オプションの<code>secrets</code>フィールドは、キー・ストア、ランク・ストアおよびパスワード・ファイルの取得に使用するKubernetes <code>Secret</code>の名前を設定します。</span></li>
</ul>
<p><span class="merged" id="all.cIN6K.1.spl1" title="原文 : The various files and keystores referred to in the configuration above can be any location accessible in the image used by the coherence container in the deployment&rsquo;s Pods.">上の構成で参照されている様々なファイルおよびキーストアは、デプロイメントの<code>Pods</code>の<code>coherence</code>コンテナで使用されるイメージでアクセス可能な任意のロケーションにできます。</span> <span class="merged" id="all.cIN6K.1.spl2" title="原文 : Typically, for things such as SSL keys and certs, these would be provided by obtained from Secrets loaded as additional Pod Volumes.">通常、SSLキーや証明書などのものについては、追加の<code>Pod</code> <code>Volumes</code>としてロードされた<code>Secrets</code>から取得して提供されます。</span> <span class="merged" id="all.cIN6K.1.spl3" title="原文 : See Add Secrets Volumes for the documentation on how to specify secrets as additional volumes.">追加ボリュームとしてシークレットを指定する方法については、<router-link to="/other/060_secret_volumes">「Secretsボリュームの追加」</router-link>を参照してください。</span> </p>

</div>
</doc-view>
