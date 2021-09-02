<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_operator_web_hooks"><span class="merged" id="all.1YDeao" title="原文 : Operator Web-Hooks">オペレータのWebフック</span></h2>
<div class="section">
<p><span class="merged" id="all.21xPTp.spl1" title="原文 : The Coherence Operator uses Kubernetes dynamic admission control commonly known as defaulting and validating web-hooks.">Coherence Operatorは、webフックのデフォルト設定および検証としてよく知られているKubernetes <a href="https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/" id="" target="_blank" >「動的アドミッション制御」</a>を使用します。</span> <span class="merged" id="all.21xPTp.spl2" title="原文 : As the name implies, these are used to provide default values for some fields in a Coherence resource and to also validate Coherence resources on creation and update.">名前が示すとおり、これらは、<code>Coherence</code>リソースの一部のフィールドのデフォルト値を提供し、作成および更新時に<code>Coherence</code>リソースもバリデートするために使用されます。</span> <span class="merged" id="all.21xPTp.spl3" title="原文 : The operator creates and configures the two web-hooks when it starts.">オペレータは、起動時に2つのwebフックを作成して構成します。</span> </p>


<h3 id="_webhook_scope"><span class="merged" id="all.34OzP"  title="原文:: Webhook Scope">Webフック・スコープ</span></h3>
<div class="section">
<p><span class="merged" id="all.TCt3U.spl1" title="原文 : Webhooks in Kubernetes are a cluster resource, not a namespaced scoped resource, so consequently there is typically only a single webhook installed for a given resource type.">Kubernetesのwebフックはクラスタ・リソースであり、ネームスペース・スコープ付きリソースではないため、通常、特定のリソース・タイプに対してインストールされるWebフックは1つのみです。</span> <span class="merged" id="all.TCt3U.spl2" title="原文 : If the Coherence Operator has been installed as a cluster scoped operator then this is not a problem but if multiple Coherence Operators have been deployed then they could all attempt to install the webhooks and update or overwrite a previous configuration.">Coherence Operatorがクラスタ・スコープ・オペレータとしてインストールされている場合、これは問題ではありませんが、複数のCoherence Operatorがデプロイされている場合は、webフックをインストールし、以前の構成を更新または上書きしようとするすべての可能性があります。</span> <span class="merged" id="all.TCt3U.spl3" title="原文 : This might not be an issue if all the operators deployed in a Kubernetes cluster are the same version but different versions could cause issues.">Kubernetesクラスタにデプロイされているすべてのオペレータが同じバージョンですが、バージョンが異なると問題が発生する可能性があります。</span> <span class="merged" id="all.TCt3U.spl4" title="原文 : This is one of the reasons that it is recommended to install a single cluster scoped Coherence Operator.">これは、単一のクラスタ・スコープ付きCoherence Operatorをインストールすることが推奨される理由の1つです。</span> </p>

</div>
</div>

<h2 id="_manage_web_hook_certificates"><span class="merged" id="all.2daUx" title="原文 : Manage Web-Hook Certificates">Webフック証明書の管理</span></h2>
<div class="section">
<p><span class="merged" id="all.4VyBQn.spl1" title="原文 : A web-hook requires certificates to be able to work in Kubernetes.">webフックでは、Kubernetesで作業できるように証明書が必要です。</span> <span class="merged" id="all.4VyBQn.spl2" title="原文 : By default, the operator will create and manage self-signed certificates for this purpose.">デフォルトでは、オペレータはこの目的で自己署名証明書を作成および管理します。</span> <span class="merged" id="all.4VyBQn.spl3" title="原文 : It is possible to use other certificates, either managed by the Kubernetes cert-manager or managed manually."><a href="https://cert-manager.io/docs/installation/kubernetes/" id="" target="_blank" >Kubernetes cert-manager</a>によって管理される、または手動で管理する他の証明書を使用できます。</span> </p>

<p><span class="merged" id="all.42Anr8.spl1" title="原文 : The certificates should be stored in a Secret named coherence-webhook-server-cert in the same namespace that the operator has installed in. (although this name can be changed if required).">証明書は、オペレータがインストールした同じネームスペースの<code>coherence-webhook-server-cert</code>という名前の<code>Secret</code>に格納する必要があります(ただし、この名前は必要に応じて変更できます)。</span> <span class="merged" id="all.42Anr8.spl2" title="原文 : This Secret must exist, or the operator wil fail to start.">この<code>Secret</code>が存在するか、またはオペレータwilの起動に失敗する必要があります。</span> <span class="merged" id="all.42Anr8.spl3" title="原文 : The Operator Helm chart will create this Secret when the Operator is managing its own self-signed certs, otherwise the Secret must be created manually or by an external certificate manager.">オペレータのHelmチャートは、オペレータが独自の自己署名証明書を管理している場合はこの<code>Secret</code>を作成します。それ以外の場合は、<code>Secret</code>を手動で作成するか、外部証明書マネージャが作成する必要があります。</span> </p>


<h3 id="_self_signed_certificates"><span class="merged" id="all.3G3e82"  title="原文:: Self-Signed Certificates">自己署名証明書</span></h3>
<div class="section">
<p><span class="merged" id="all.2eDk8G.spl1" title="原文 : This is the default option, the operator will create and manage a set of self-signed certificates.">これはデフォルト・オプションであり、オペレータは自己署名証明書のセットを作成および管理します。</span> <span class="merged" id="all.2eDk8G.spl2" title="原文 : The Operator will update the Secret with its certificates and create the MutatingWebhookConfiguration and ValidatingWebhookConfiguration resources configured to use those certificates.">オペレータは、証明書を使用して<code>Secret</code>を更新し、これらの証明書を使用するように構成された<code>MutatingWebhookConfiguration</code>および<code>ValidatingWebhookConfiguration</code>リソースを作成します。</span> </p>

</div>

<h3 id="_cert_manager_self_signed"><span class="merged" id="all.1yCwGp" title="原文 : Cert Manager (Self-Signed)">証明書マネージャ(自己署名)</span></h3>
<div class="section">
<p><span class="merged" id="all.2QWZmt" title="原文 : Assuming Cert Manager has been installed in the Kubernetes cluster then to use it for managing the web-hook certificates, the Operator needs to be installed with the CERT_TYPE environment variable set to cert-manager.">証明書マネージャがKubernetesクラスタにインストールされている場合、webフック証明書の管理に使用するには、オペレータを<code>CERT_TYPE</code>環境変数<code>cert-manager</code>に設定してインストールする必要があります。</span></p>

<p><span class="merged" id="all.4YC1n2.spl1" title="原文 : The Operator will then detect the version of Cert Manager and automatically create the required self-signed Issuer and Certificate resources.">その後、オペレータは証明書マネージャのバージョンを検出し、必要な自己署名<code>Issuer</code>および<code>Certificate</code>リソースを自動的に作成します。</span> <span class="merged" id="all.4YC1n2.spl2" title="原文 : Cert Manager will detect these and create the Secret.">証明書マネージャはこれらを検出し、<code>Secret</code>を作成します。</span> <span class="merged" id="all.4YC1n2.spl3" title="原文 : This may cause the operator Pod to re-start until the Secret has been created.">これにより、オペレータPodが<code>Secret</code>が作成されるまで再起動する場合があります。</span> </p>

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

<h3 id="_manual_certificates"><span class="merged" id="all.19evoy" title="原文 : Manual Certificates">手動証明書</span></h3>
<div class="section">
<p><span class="merged" id="all.42z2D4" title="原文 : If certificates will managed some other way (for example by Cert Manager managing real certificates) then the CERT_TYPE environment variable should be set to manual.">証明書が他の方法で管理される場合(たとえば、証明書マネージャが実際の証明書を管理する場合)は、<code>CERT_TYPE</code>環境変数を<code>manual</code>に設定する必要があります。</span></p>

<p><span class="merged" id="all.28cf7q.spl1" title="原文 : Before the Operator starts the Secret must exist containing the valid certificates.">オペレータが起動する前に、有効な証明書を含む<code>Secret</code>が存在する必要があります。</span> <span class="merged" id="all.28cf7q.spl2" title="原文 : The Operator will use the certificates that it finds in the Secret to create the web-hook resources.">オペレータは、<code>Secret</code>で見つけた証明書を使用してwebフック・リソースを作成します。</span> </p>

<p><span class="merged" id="all.3n894t.1" title="原文 : To set the certificate manager to use when installing the Helm chart, set the webhookCertType value:">Helmチャートのインストール時に使用する証明書マネージャを設定するには、<code>webhookCertType</code>値を設定します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set webhookCertType=manual <span class="conum" data-value="1" />
    coherence-operator \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2Lecp0" title="原文 : The certificate manager will be set to manual">証明書マネージャは<code>manual</code>に設定されます</span></li>
</ul>
</div>
</div>
</doc-view>
