<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coherence_operator_kubernetes_web_hooks"><span class="merged" id="all.2J3SJ" title="原文 : Coherence Operator Kubernetes Web-Hooks">Coherence Operator Kubernetes Web-Hooks</span></h2>
<div class="section">
<p><span class="merged" id="all.Xy878" title="原文 : The Coherence Operator uses Kubernetes admission control webhooks to validate and provide default values for Coherence resources (see the Kubernetes documentation for more details on web-hooks).">Coherence Operatorは、Kubernetesアドミッション制御webフックを使用して、Coherenceリソースのデフォルト値をバリデートおよび提供します(Webフックの詳細は、<a href="https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/" id="" target="_blank" >「Kubernetesドキュメント」</a>を参照してください)。</span></p>

<p><span class="merged" id="all.3675s7.spl1" title="原文 : The Coherence Operator webhooks will validate a Coherence resources when it is created or updated contain.">Coherence Operator webフックは、<code>Coherence</code>リソースが作成または更新されたときに、そのリソースが含まれることをバリデートします。</span> <span class="merged" id="all.3675s7.spl2" title="原文 : For example, the replicas count is not negative.">たとえば、<code>replicas</code>数は負数ではありません。</span> <span class="merged" id="all.3675s7.spl3" title="原文 : If a Coherence resource is invalid it will be rejected before it gets stored into Kubernetes."><code>Coherence</code>リソースが無効な場合、Kubernetesに格納する前に拒否されます。</span> </p>


<h3 id="_webhook_scope"><span class="merged" id="all.34OzP.1"  title="原文:: Webhook Scope">Webフック・スコープ</span></h3>
<div class="section">
<p><span class="merged" id="all.4Hcxv7.spl1" title="原文 : Webhooks in Kubernetes are a cluster resource, not a namespaced scoped resource, so consequently there is typically only a single webhook installed for a given resource type.">Kubernetesのwebフックは、ネームスペース・スコープ・リソースではなくクラスタ・リソースであるため、通常、特定のリソース・タイプに対してインストールされるWebフックは1つのみです。</span> <span class="merged" id="all.4Hcxv7.spl2" title="原文 : If the Coherence Operator is installed as a cluster scoped operator then this is not a problem but if multiple Coherence Operators are deployed then they could all attempt to install the webhooks and update or overwrite a previous configuration.">Coherence Operatorがクラスタ・スコープ・オペレータとしてインストールされている場合、これは問題ではありませんが、複数のCoherence Operatorsがデプロイされている場合、すべてのユーザーがwebフックをインストールし、以前の構成を更新または上書きしようとする可能性があります。</span> <span class="merged" id="all.4Hcxv7.spl3" title="原文 : This might not be an issue if all of the operators deployed in a Kubernetes cluster are the same version but different versions could cause issues.">Kubernetesクラスタにデプロイされたすべてのオペレータが同じバージョンであるが、異なるバージョンによって問題が発生する場合、これは問題ではない可能性があります。</span> </p>

</div>
</div>

<h2 id="_webhook_certificates"><span class="merged" id="all.hBD5G" title="原文 : Webhook Certificates">Webフック証明書</span></h2>
<div class="section">
<p><span class="merged" id="all.O3Zrl.spl1" title="原文 : Kubernetes requires webhooks to expose an API over https and consequently this requires certificates to be created.">Kubernetesでは、httpsを介してAPIを公開するためにwebフックが必要であるため、これによって証明書を作成する必要があります。</span> <span class="merged" id="all.O3Zrl.spl2" title="原文 : By default, the Coherence Operator will create a self-signed CA certificate and key for use with its webhooks.">デフォルトでは、Coherence Operatorは、webフックで使用する自己署名CA証明書およびキーを作成します。</span> <span class="merged" id="all.O3Zrl.spl3" title="原文 : Alternatively it is possible to use an external certificate manager such as the commonly used Cert Manager.">または、一般的に使用される<a href="https://github.com/jetstack/cert-manager" id="" target="_blank" >「証明書マネージャ」</a>などの外部証明書マネージャを使用することもできます。</span> <span class="merged" id="all.O3Zrl.spl4" title="原文 : Configuring and using Cert Manager is beyond the scope of this documentation.">証明書マネージャの構成および使用は、このドキュメントの範囲外です。</span> </p>

</div>
</doc-view>
