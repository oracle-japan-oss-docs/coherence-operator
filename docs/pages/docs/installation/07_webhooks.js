<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_operator_web_hooks"><span class="merged" id="all.1YDeao" title="原文 : Operator Web-Hooks">オペレータWebフック</span></h2>
<div class="section">
<p><span class="merged" id="all.21xPTp.spl1" title="原文 : The Coherence Operator uses Kubernetes dynamic admission control commonly known as defaulting and validating web-hooks.">Coherence Operatorでは、一般的にwebフックのデフォルト設定および検証として知られるKubernetes<a href="https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/" id="" target="_blank" >動的アドミッション制御</a>を使用します。</span> <span class="merged" id="all.21xPTp.spl2" title="原文 : As the name implies, these are used to provide default values for some fields in a Coherence resource and to also validate Coherence resources on creation and update.">名前が示すように、これらは<code>Coherence</code>リソースの一部のフィールドにデフォルト値を提供し、作成および更新時に<code>Coherence</code>リソースをバリデートするために使用されます。</span> <span class="merged" id="all.21xPTp.spl3" title="原文 : The operator creates and configures the two web-hooks when it starts.">オペレータは、起動時に2つのwebフックを作成および構成します。</span> </p>


<h3 id="_webhook_scope"><span class="merged" id="all.34OzP"  title="原文:: Webhook Scope">Webフック・スコープ</span></h3>
<div class="section">
<p><span class="merged" id="all.TCt3U.spl1" title="原文 : Webhooks in Kubernetes are a cluster resource, not a namespaced scoped resource, so consequently there is typically only a single webhook installed for a given resource type.">Kubernetesのwebフックは、ネームスペース・スコープ・リソースではなくクラスタ・リソースであるため、通常、特定のリソース・タイプに対してインストールされるWebフックは1つのみです。</span> <span class="merged" id="all.TCt3U.spl2" title="原文 : If the Coherence Operator has been installed as a cluster scoped operator then this is not a problem but if multiple Coherence Operators have been deployed then they could all attempt to install the webhooks and update or overwrite a previous configuration.">Coherence Operatorがクラスタ・スコープ・オペレータとしてインストールされている場合、これは問題ではありませんが、複数のCoherence Operatorsがデプロイされている場合、すべてのユーザーがwebフックをインストールし、前の構成を更新または上書きしようとする可能性があります。</span> <span class="merged" id="all.TCt3U.spl3" title="原文 : This might not be an issue if all the operators deployed in a Kubernetes cluster are the same version but different versions could cause issues.">Kubernetesクラスタにデプロイされたすべてのオペレータが同じバージョンであるが、異なるバージョンによって問題が発生する場合、これは問題ではない可能性があります。</span> <span class="merged" id="all.TCt3U.spl4" title="原文 : This is one of the reasons that it is recommended to install a single cluster scoped Coherence Operator.">これは、単一のクラスタ・スコープCoherence Operatorをインストールすることをお薦めします。</span> </p>

</div>
</div>

<h2 id="_manage_web_hook_certificates"><span class="merged" id="all.2daUx" title="原文 : Manage Web-Hook Certificates">Webフック証明書の管理</span></h2>
<div class="section">
<p><span class="merged" id="all.VeQd4.spl1" title="原文 : A web-hook requires certificates to be able to work in Kubernetes.">webフックでは、証明書をKubernetesで動作させる必要があります。</span> <span class="merged" id="all.VeQd4.spl2" title="原文 : By default, the operator will create and manage self-signed certificates for this purpose.">デフォルトでは、オペレータはこの目的のために自己署名証明書を作成および管理します。</span> <span class="merged" id="all.VeQd4.spl3" title="原文 : These certificates are created using the Kubernetes certificate It is possible to use other certificates, either managed by the Kubernetes cert-manager or managed manually.">これらの証明書はKubernetes証明書を使用して作成されます。<a href="https://cert-manager.io/docs/installation/kubernetes/" id="" target="_blank" >Kubernetes cert-manager</a>によって管理されるか、手動で管理される他の証明書を使用できます。</span> </p>

<p><span class="merged" id="all.42Anr8.spl1" title="原文 : The certificates should be stored in a Secret named coherence-webhook-server-cert in the same namespace that the operator has installed in. (although this name can be changed if required).">証明書は、オペレータがインストールされたものと同じネームスペースの<code>coherence-webhook-server-cert</code>という名前の<code>Secret</code>に格納する必要があります(ただし、この名前は必要に応じて変更できます)。</span> <span class="merged" id="all.42Anr8.spl2" title="原文 : This Secret must exist, or the operator wil fail to start.">この<code>Secret</code>が存在するか、オペレータの起動に失敗します。</span> <span class="merged" id="all.42Anr8.spl3" title="原文 : The Operator Helm chart will create this Secret when the Operator is managing its own self-signed certs, otherwise the Secret must be created manually or by an external certificate manager.">オペレータが独自の自己署名証明書を管理している場合、オペレータのHelmチャートではこの<code>Secret</code>が作成されます。そうでない場合は、<code>Secret</code>を手動で作成するか、外部証明書マネージャによって作成する必要があります。</span> </p>


<h3 id="_self_signed_certificates"><span class="merged" id="all.3G3e82"  title="原文:: Self-Signed Certificates">自己署名証明書</span></h3>
<div class="section">
<p><span class="merged" id="all.2eDk8G.spl1" title="原文 : This is the default option, the operator will create and manage a set of self-signed certificates.">これはデフォルト・オプションであり、オペレータは自己署名証明書のセットを作成および管理します。</span> <span class="merged" id="all.2eDk8G.spl2" title="原文 : The Operator will update the Secret with its certificates and create the MutatingWebhookConfiguration and ValidatingWebhookConfiguration resources configured to use those certificates.">オペレータは、<code>Secret</code>を証明書で更新し、これらの証明書を使用するように構成された<code>MutatingWebhookConfiguration</code>および<code>ValidatingWebhookConfiguration</code>リソースを作成します。</span> </p>

</div>

<h3 id="_cert_manager_self_signed"><span class="merged" id="all.1yCwGp" title="原文 : Cert Manager (Self-Signed)">証明書マネージャ(自己署名)</span></h3>
<div class="section">
<p><span class="merged" id="all.2R29GD" title="原文 : Assuming Kubernetes Cert Manager has been installed in the Kubernetes cluster then to use it for managing the web-hook certificates, the Operator needs to be installed with the CERT_TYPE environment variable set to cert-manager."><a href="https://cert-manager.io/docs/installation/kubernetes/" id="" target="_blank" >「Kubernetes証明書マネージャ」</a>がKubernetesクラスタにインストールされている場合、webフック証明書の管理に使用するには、<code>CERT_TYPE</code>環境変数を<code>cert-manager</code>に設定してオペレータをインストールする必要があります。</span></p>

<p><span class="merged" id="all.4YC1n2.spl1" title="原文 : The Operator will then detect the version of Cert Manager and automatically create the required self-signed Issuer and Certificate resources.">オペレータは証明書マネージャのバージョンを検出し、必要な自己署名付き<code>Issuer</code>および<code>Certificate</code>リソースを自動的に作成します。</span> <span class="merged" id="all.4YC1n2.spl2" title="原文 : Cert Manager will detect these and create the Secret.">証明書マネージャはこれを検出し、<code>Secret</code>を作成します。</span> <span class="merged" id="all.4YC1n2.spl3" title="原文 : This may cause the operator Pod to re-start until the Secret has been created.">これにより、<code>Secret</code>が作成されるまで、オペレータPodが再起動される場合があります。</span> </p>


<h4 id="_install_using_manifest_file"><span class="merged" id="all.4BU8BY" title="原文 : Install Using Manifest File">マニフェスト・ファイルを使用したインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.4Xpk9x" title="原文 : If installing the operator using the manifest yaml file first replace the occurrences of self-signed in the yaml file with cert-manager.">manifest yamlファイルを使用してオペレータをインストールする場合、yamlファイル内の<code>self-signed</code>の出現箇所を<code>cert-manager</code>に置き換えます。</span></p>

<p><span class="merged" id="all.6vDv5.4"  title="原文:: For example:">例えば:</span></p>

<markup
lang="bash"

>curl -L https://github.com/oracle/coherence-operator/releases/download/v3.4.0/coherence-operator.yaml \
    -o coherence-operator.yaml
sed -i s/self-signed/cert-manager/g coherence-operator.yaml
kubectl apply -f coherence-operator.yaml</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.6"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3KC1JI" title="原文 : On MacOS the sed command is slightly different for in-place replacement and requires an empty string after the -i parameter:">MacOSでは、<code>sed</code>コマンドはインプレース置換で若干異なり、<code>-i</code>パラメータの後に空の文字列が必要です:</span></p>

<markup
lang="bash"

>sed -i '' s/self-signed/cert-manager/g coherence-operator.yaml</markup>
</p>
</div>
</div>

<h4 id="_install_using_helm"><span class="merged" id="all.4g555R" title="原文 : Install Using Helm">Helmを使用したインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.3n894t" title="原文 : To set the certificate manager to use when installing the Helm chart, set the webhookCertType value:">Helmチャートのインストール時に使用する証明書マネージャを設定するには、<code>webhookCertType</code>値を設定します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set webhookCertType=cert-manager <span class="conum" data-value="1" />
    coherence-operator \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3ya3x4" title="原文 : The certificate manager will be set to cert-manager">証明書マネージャは<code>cert-manager</code>に設定されます</span></li>
</ul>
</div>
</div>

<h3 id="_manual_certificates"><span class="merged" id="all.19evoy" title="原文 : Manual Certificates">手動証明書</span></h3>
<div class="section">
<p><span class="merged" id="all.3q0j6E" title="原文 : If certificates will be managed some other way (for example by Cert Manager managing real certificates) then the CERT_TYPE environment variable should be set to manual.">証明書が他の方法で管理される場合(たとえば、Cert Managerが実際の証明書を管理する場合)、<code>CERT_TYPE</code>環境変数を<code>manual</code>に設定する必要があります。</span></p>

<p><span class="merged" id="all.2UnNN5.spl1" title="原文 : A Secret must exist in the namespace the operator will be installed into containing the CA certificate, certificate and key files that the operator will use to configure the web-hook."><code>Secret</code>は、オペレータがwebフックの構成に使用するCA証明書、証明書およびキー・ファイルを含む場所にインストールされるネームスペースに存在する必要があります。</span> <span class="merged" id="all.2UnNN5.spl2" title="原文 : The files must exist with the names expected by the operator.">オペレータで想定される名前を持つファイルが存在する必要があります。</span> <span class="merged" id="all.2UnNN5.spl3" title="原文 : The default name of the Secret expected by the operator is coherence-webhook-server-cert but this can be changed.">オペレータで想定される<code>Secret</code>のデフォルト名は<code>coherence-webhook-server-cert</code>ですが、これは変更できます。</span> </p>

<p><span class="merged" id="all.1RGJyW.spl1" title="原文 : The certificates in the Secret must be valid for the Service name that exposes the Coherence web-hook."><code>Secret</code>内の証明書は、Coherence webフックを公開する<code>Service</code>名に対して有効である必要があります。</span> <span class="merged" id="all.1RGJyW.spl2" title="原文 : The default format of the DNS used for the certificate CN (common name) is coherence-operator-webhook.&lt;namespace&gt;.svc where &lt;namespace&gt; is the namespace the operator is installed into.">証明書CN (共通名)に使用されるDNSのデフォルトの形式は、<code>coherence-operator-webhook.&lt;namespace>.svc</code>です。<code>&lt;namespace></code>は、オペレータがインストールされるネームスペースです。</span> <span class="merged" id="all.1RGJyW.spl3" title="原文 : Additional names may also be configured using the different formats of Kubernetes Service DNS names.">Kubernetes <code>Service</code> DNS名の異なる形式を使用して、追加の名前を構成することもできます。</span> </p>

<p><span class="merged" id="all.2VhkzD" title="原文 : For example, if the Operator is installed into a namespace named coherence the Service DNS names would be:">たとえば、オペレータが<code>coherence</code>という名前のネームスペースにインストールされている場合、<code>Service</code> DNS名は次のようになります:</span></p>

<markup


>  - coherence-operator-webhook.coherence
  - coherence-operator-webhook.coherence.svc
  - coherence-operator-webhook.coherence.svc.cluster.local</markup>

<p><span class="merged" id="all.2Jb9e5" title="原文 : An example of the format of the Secret is shown below:"><code>Secret</code>の形式の例を次に示します:</span></p>

<markup
lang="yaml"
title="sh"
>apiVersion: v1
kind: Secret
metadata:
  name: coherence-webhook-server-cert
type: Opaque
data:
  ca.crt: ... # &lt;base64 endocde CA certificate file&gt;
  tls.crt: ... # &lt;base64 endocde certificate file&gt;
  tls.key: ... # &lt;base64 endocde private key file&gt;</markup>

<div class="admonition warning">
<p class="admonition-textlabel"><span class="merged" id="all.2dRYIU.1"  title="原文:: Warning">警告</span></p>
<p ><p><span class="merged" id="all.1njDP1" title="原文 : If a Secret with the name specified in webhookCertSecret does not exist in the namespace the operator is being installed into then the operator Pod will not start as the Secret will be mounted as a volume in the operator Pod."><code>webhookCertSecret</code>で指定された名前の<code>Secret</code>がネームスペースに存在しない場合、オペレータはインストールされます。<code>Secret</code>がオペレータ・ポッドにボリュームとしてマウントされるため、オペレータ・ポッドは起動しません。</span></p>
</p>
</div>

<h4 id="_install_using_manifest_file_2"><span class="merged" id="all.4BU8BY.1" title="原文 : Install Using Manifest File">マニフェスト・ファイルを使用したインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.4Xpk9x.1" title="原文 : If installing the operator using the manifest yaml file first replace the occurrences of self-signed in the yaml file with cert-manager.">manifest yamlファイルを使用してオペレータをインストールする場合、yamlファイル内の<code>self-signed</code>の出現箇所を<code>cert-manager</code>に置き換えます。</span></p>

<p><span class="merged" id="all.6vDv5.5"  title="原文:: For example:">例えば:</span></p>

<markup
lang="bash"

>curl -L https://github.com/oracle/coherence-operator/releases/download/v3.3.5/coherence-operator.yaml \
    -o coherence-operator.yaml
sed -i s/self-signed/manual/g coherence-operator.yaml
kubectl apply -f coherence-operator.yaml</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.7"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3KC1JI.1" title="原文 : On MacOS the sed command is slightly different for in-place replacement and requires an empty string after the -i parameter:">MacOSでは、<code>sed</code>コマンドはインプレース置換で若干異なり、<code>-i</code>パラメータの後に空の文字列が必要です:</span></p>

<markup
lang="bash"

>sed -i '' s/self-signed/cert-manager/g coherence-operator.yaml</markup>
</p>
</div>
</div>

<h4 id="_install_using_helm_2"><span class="merged" id="all.4g555R.1" title="原文 : Install Using Helm">Helmを使用したインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.MVv4d" title="原文 : To configure the operator to use manually managed certificates when installing the Helm chart, set the webhookCertType value.">Helmチャートのインストール時に手動で管理される証明書を使用するようにオペレータを構成するには、<code>webhookCertType</code>値を設定します。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set webhookCertType=manual \ <span class="conum" data-value="1" />
    coherence-operator \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1sljoq" title="原文 : The certificate manager will be set to manual and the operator will expect to find a Secret named coherence-webhook-server-cert">証明書マネージャは<code>manual</code>に設定され、オペレータでは<code>coherence-webhook-server-cert</code>という名前の<code>Secret</code>が見つかると想定されます</span></li>
</ul>
<p><span class="merged" id="all.3sBCWk" title="原文 : To use manually managed certificates and store the keys and certs in a different secret, set the secret name using the webhookCertSecret value.">手動管理証明書を使用し、キーおよび証明書を別のシークレットに格納するには、<code>webhookCertSecret</code>値を使用してシークレット名を設定します。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set webhookCertType=manual \ <span class="conum" data-value="1" />
    --set webhookCertSecret=operator-certs \ <span class="conum" data-value="2" />
    coherence-operator \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2Lecp0" title="原文 : The certificate manager will be set to manual">証明書マネージャは<code>manual</code>に設定されます</span></li>
<li data-value="2"><span class="merged" id="all.6vTdq" title="原文 : The name of the secret is set to operator-certs">シークレットの名前は<code>operator-certs</code>に設定されます</span></li>
</ul>
<p><span class="merged" id="all.4e9HXI" title="原文 : The Coherence Operator will now expect to find the keys and certs in a Secret named operator-certs in the same namespace that the Operator is deployed into.">Coherence Operatorでは、オペレータがデプロイされているのと同じネームスペースで、<code>operator-certs</code>という名前の<code>Secret</code>内のキーおよび証明書を検索する必要があります。</span></p>

</div>
</div>

<h3 id="no-hooks"><span class="merged" id="all.4CGEmz" title="原文 : Install the Operator Without Web-Hooks">Webフックを使用しないオペレータのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2cjOdm" title="原文 : It is possible to start the Operator without it registering any web-hooks with the API server.">APIサーバーにwebフックを登録せずに、オペレータを起動できます。</span></p>

<div class="admonition caution">
<p class="admonition-textlabel"><span class="merged" id="all.4Pmf1N.1"  title="原文:: Caution">注意</span></p>
<p ><p><span class="merged" id="all.1Xdgbj.spl1" title="原文 : Running the Operator without web-hooks is not recommended.">webフックなしでオペレータを実行することはお薦めしません。</span> <span class="merged" id="all.1Xdgbj.spl2" title="原文 : The admission web-hooks validate the Coherence resource yaml before it gets into the k8s cluster.">アドミッションwebフックは、<code>Coherence</code>リソースyamlがk8sクラスタに入る前にバリデートします。</span> <span class="merged" id="all.1Xdgbj.spl3" title="原文 : Without the web-hooks, invalid yaml will be accepted by k8s and the Operator will then log errors when it tries to reconcile invalid yaml.">webフックがない場合、無効なyamlはk8sによって受け入れられ、無効なyamlを調整しようとすると、オペレータはエラーをログに記録します。</span> <span class="merged" id="all.1Xdgbj.spl4" title="原文 : Or worse, the Operator will create an invalid StatefulSet which will then fail to start.">さらに悪い場合は、オペレータによって無効な<code>StatefulSet</code>が作成され、起動に失敗します。</span> </p>
</p>
</div>

<h4 id="_install_using_manifest_file_3"><span class="merged" id="all.4BU8BY.2" title="原文 : Install Using Manifest File">マニフェスト・ファイルを使用したインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.292xd6" title="原文 : If installing using the manifest yaml files, then you need to edit the coherence-operator.yaml manifest to add a command line argument to the Operator.">マニフェストyamlファイルを使用してインストールする場合は、<code>coherence-operator.yaml</code>マニフェストを編集して、オペレータにコマンドライン引数を追加する必要があります。</span></p>

<p><span class="merged" id="all.1ieFpK" title="原文 : Update the controller-manager deployment and add an argument, edit the section that looks like this:"><code>controller-manager</code>デプロイメントを更新し、引数を追加し、次のようなセクションを編集します:</span></p>

<markup
lang="yaml"

>        args:
          - operator
          - --enable-leader-election</markup>

<p><span class="merged" id="all.4dOyn0" title="原文 : and add the additional --enable-webhook=false argument like this:">次のように<code>--enable-webhook=false</code>引数を追加します:</span></p>

<markup
lang="yaml"

>        args:
          - operator
          - --enable-leader-election
          - --enable-webhook=false</markup>

<p><span class="merged" id="all.3gH1L" title="原文 : apiVersion: apps/v1 kind: Deployment metadata: name: controller-manager">apiVersion: アプリ/v1の種類: デプロイメント・メタデータ: 名前: controller-manager</span></p>

</div>

<h4 id="_installing_using_helm"><span class="merged" id="all.4e3KgA" title="原文 : Installing Using Helm">Helmを使用したインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.1Egmcu" title="原文 : If installing the Operator using Helm, the webhooks value can be set to false in the values file or on the command line.">Helmを使用してオペレータをインストールする場合、値ファイルまたはコマンドラインで<code>webhooks</code>値をfalseに設定できます。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set webhooks=false \
    coherence-operator \
    coherence/coherence-operator</markup>

</div>
</div>
</div>
</doc-view>
