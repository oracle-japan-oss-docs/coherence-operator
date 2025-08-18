<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_tls_cipher_suites"><span class="merged" id="all.4IZGKi"  title="原文:: TLS Cipher Suites">TLS暗号スイート</span></h2>
<div class="section">
<p><span class="merged" id="all.4HafZn.spl1" title="原文 : The Coherence Operator uses TLS for various client connections and server sockets.">Coherence Operatorは、様々なクライアント接続およびサーバー・ソケットにTLSを使用します。</span> <span class="merged" id="all.4HafZn.spl2" title="原文 : TLS can support a number of cipher suites, some of which are deemed legacy and insecure.">TLSは多数の暗号スイートをサポートでき、その一部はレガシーおよび安全でないとみなされます。</span> <span class="merged" id="all.4HafZn.spl3" title="原文 : These insecure ciphers are usually only present for backwards compatability.">これらの安全でない暗号は、通常、後方互換性のためにのみ存在します。</span> </p>

<p><span class="merged" id="all.29nHDC.spl1" title="原文 : The Coherence Operator is written in Go, and the ciphers supported are determined by the version og Go used to build the operator.">Coherence OperatorはGoで記述され、サポートされている暗号は、オペレータの構築に使用されるog Goバージョンによって決定されます。</span> <span class="merged" id="all.29nHDC.spl2" title="原文 : Go splits ciphers into two lists a secure list and an insecure list, the insecure ciphers are disabled by default.">暗号を2つのリストに分割します。セキュア・リストとセキュアでないリスト。セキュアでない暗号はデフォルトで無効になっています。</span> </p>

<p><span class="merged" id="all.3d6sQ7.spl1" title="原文 : Oracle Global Security has stricter requirements than the default Go cipher list.">Oracle Global Securityには、デフォルトのGo暗号リストよりも厳しい要件があります。</span> <span class="merged" id="all.3d6sQ7.spl2" title="原文 : By default, the Coherence Operator enables only ciphers in Go’s secure list, except for TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA and TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, which are disabled.">デフォルトでは、Coherence Operatorは、無効な<code>TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA</code>および<code>TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA</code>を除き、Goのセキュア・リスト内の暗号のみを有効にします。</span> </p>

<p><span class="merged" id="all.20V7Sf.spl1" title="原文 : It is possible to enable or disable cipher suites when installing the Coherence Operator.">Coherence Operatorのインストール時に、暗号スイートを有効または無効にできます。</span> <span class="merged" id="all.20V7Sf.spl2" title="原文 : The Coherence Operator has two command line flags which can be used to specify ciphers to be allowed or denied.">Coherence Operatorには2つのコマンドライン・フラグがあり、これを使用して許可または拒否する暗号を指定できます。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2EjtJI" title="原文 : The --cipher-allow-list command line flag is used to specify cipher names to add to the allowed list."><code>--cipher-allow-list</code>コマンドライン・フラグは、許可されるリストに追加する暗号名を指定するために使用します。</span></p>

</li>
<li>
<p><span class="merged" id="all.4Oq5Mp" title="原文 : The --cipher-deny-list command line flag is used to specify cipher names to add to the disabled list."><code>--cipher-deny-list</code>コマンドライン・フラグは、無効なリストに追加する暗号名を指定するために使用します。</span></p>

</li>
</ul>
<p><span class="merged" id="all.3x4aNO" title="原文 : Multiple ciphers can be enabled and disabled by specifying the relevant command line flag multiple times.">関連するコマンド行フラグを複数回指定することで、複数の暗号を有効または無効にできます。</span></p>

<p><span class="merged" id="all.1Wt2Pz" title="原文 : If a cipher name is added to both the allow list and to the deny list, it will be disabled.">許可リストと拒否リストの両方に暗号名が追加されると、その暗号名は無効になります。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.16"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.4R1Lzz.spl1" title="原文 : If either the --cipher-allow-list or --cipher-deny-list is set to a name that does not match any of the supported Go cipher names, the Operator will display an error in its log and will not start."><code>--cipher-allow-list</code>または<code>--cipher-deny-list</code>のいずれかが、サポートされているGo暗号名と一致しない名前に設定されている場合、オペレータはログにエラーを表示し、起動しません。</span> <span class="merged" id="all.4R1Lzz.spl2" title="原文 : See the Go TLS package documentation for a lost of valid names.">有効な名前の消失については、<a href="https://pkg.go.dev/crypto/tls#pkg-constants" id="" target="_blank" >「Go TLSパッケージ・ドキュメント」</a>を参照してください。</span> </p>
</p>
</div>
<p><span class="merged" id="all.499cj4" title="原文 : Only Allow FIPS Ciphers"><strong>FIPS暗号のみを許可</strong></span></p>

<p><span class="merged" id="all.2X8oMO" title="原文 : The Coherence Operator can be installed in FIPS mode to only support FIPS compliant ciphers, see the FIPS modes documentation for details.">Coherence Operatorは、FIPS準拠の暗号のみをサポートするためにFIPSモードでインストールできます。詳細は、<router-link to="/docs/installation/100_fips">「FIPSモード」</router-link>のドキュメントを参照してください。</span></p>

<p><span class="merged" id="all.1z11yc" title="原文 : How the command line flags are set depends on how the Coherence Operator is installed.">コマンドライン・フラグの設定方法は、Coherence Operatorのインストール方法によって異なります。</span></p>


<h3 id="_install_using_yaml_manifests"><span class="merged" id="all.47A5gE" title="原文 : Install Using Yaml Manifests">Yamlマニフェストを使用したインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2ofvvV" title="原文 : If installing using the yaml manifests, the yaml must be edited to add the required flags:"><router-link to="/docs/installation/011_install_manifests">「yamlマニフェストを使用したインストール」</router-link>の場合、必要なフラグを追加するにはyamlを編集する必要があります:</span></p>

<p><span class="merged" id="all.2iP0Mh" title="原文 : Find the args: section of the operator Deployment in the yaml file, it looks like this:">yamlファイルでオペレータ<code>Deployment</code>の<code>args:</code>セクションを見つけます。次のようになります:</span></p>

<markup
lang="yaml"

>        args:
          - operator
          - --enable-leader-election</markup>

<p><span class="merged" id="all.2LphSX.spl1" title="原文 : then add the required allow or disallow flags.">必要な許可フラグまたは禁止フラグを追加します。</span> <span class="merged" id="all.2LphSX.spl2" title="原文 : For example to allow TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA the args can be edited as shown below:">たとえば、<code>TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA</code>を許可するには、次のように引数を編集できます:</span> </p>

<markup
lang="yaml"

>        args:
          - operator
          - --enable-leader-election
          - --cipher-allow-list=TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA</markup>

<p><span class="merged" id="all.4IzqyI" title="原文 : To enable both TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA and TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA ciphers:"><code>TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA</code>暗号と<code>TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA</code>暗号の両方を有効にするには:</span></p>

<markup
lang="yaml"

>        args:
          - operator
          - --enable-leader-election
          - --cipher-allow-list=TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
          - --cipher-allow-list=TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA</markup>

</div>

<h3 id="_install_using_helm"><span class="merged" id="all.4g555R.4" title="原文 : Install Using Helm">Helmを使用したインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.3nouu3.spl1" title="原文 : If installing the operator using Helm The Coherence Operator Helm chart has a cipherAllowList field and cipherDenyList field in its values file."><router-link to="/docs/installation/012_install_helm">「Helmを使用したオペレータのインストール」</router-link>の場合、Coherence Operator Helmチャートには、値ファイルに<code>cipherAllowList</code>フィールドと<code>cipherDenyList</code>フィールドがあります。</span> <span class="merged" id="all.3nouu3.spl2" title="原文 : These values are Helm arrays and can be set to a list of ciphers to be enabled or disabled.">これらの値はHelm配列であり、有効または無効にする暗号のリストに設定できます。</span> </p>

<p><span class="merged" id="all.14k2lA.spl1" title="原文 : The simplest way to set lists on the Helm command line is using the --set-json command line flag.">Helmコマンドラインでリストを設定する最も簡単な方法は、<code>--set-json</code>コマンドライン・フラグを使用することです。</span> <span class="merged" id="all.14k2lA.spl2" title="原文 : For example to allow TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA">たとえば、<code>TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA</code>を許可</span> </p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set-json='cipherAllowList=["TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA"]'
    coherence-operator \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.4IzqyI.1" title="原文 : To enable both TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA and TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA ciphers:"><code>TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA</code>暗号と<code>TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA</code>暗号の両方を有効にするには:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set-json='cipherAllowList=["TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA", "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA"]'
    coherence-operator \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.tRSQE" title="原文 : To disable TLS_CHACHA20_POLY1305_SHA256"><code>TLS_CHACHA20_POLY1305_SHA256</code>を無効にするには</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set-json='cipherDenyList=["TLS_CHACHA20_POLY1305_SHA256"]'
    coherence-operator \
    coherence/coherence-operator</markup>

</div>
</div>
</doc-view>
