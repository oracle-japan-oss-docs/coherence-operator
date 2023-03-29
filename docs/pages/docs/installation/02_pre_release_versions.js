<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1FiyS6" title="原文 : Accessing Pre-Release Versions">プレリリース・バージョンへのアクセス</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1sI0dc" title="原文 : Pre-release version of the Coherence Operator are made available from time to time.">Coherence Operatorのプレリリース・バージョンが随時使用可能になります。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_accessing_pre_release_versions"><span class="merged" id="all.1FiyS6.1" title="原文 : Accessing Pre-Release Versions">プレリリース・バージョンへのアクセス</span></h2>
<div class="section">
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.1Lnu40.spl1" title="原文 : We cannot guarantee that pre-release versions of the Coherence Operator are bug free and hence they should not be used in production.">Coherence Operatorのプレリリース・バージョンがバグがないことを保証できないため、本番で使用しないでください。</span> <span class="merged" id="all.1Lnu40.spl2" title="原文 : We reserve the right to remove pre-release versions of the Helm chart and Docker images ant any time and without notice.">リリース前バージョンのHelmチャートおよびDockerイメージをいつでも予告なく削除する権利を留保しています。</span> <span class="merged" id="all.1Lnu40.spl3" title="原文 : We cannot guarantee that APIs and CRD specifications will remain stable or backwards compatible between pre-release versions.">APIおよびCRD仕様は、プレリリース・バージョン間で安定または下位互換性を維持することを保証できません。</span> </p>
</div>
<p><span class="merged" id="all.3Xc1tG" title="原文 : To access pre-release versions of the Helm chart add the unstable chart repository.">Helmチャートのプレリリース・バージョンにアクセスするには、不安定なチャート・リポジトリを追加します。</span></p>

<markup
lang="bash"

>helm repo add coherence-unstable https://oracle.github.io/coherence-operator/charts-unstable

helm repo update</markup>

<p><span class="merged" id="all.2tyzai" title="原文 : To list all the available Coherence Operator chart versions:">使用可能なすべてのCoherence Operatorチャート・バージョンをリストするには:</span></p>

<markup
lang="bash"

>helm search coherence-operator -l</markup>

<p><span class="merged" id="all.3QCKxi" title="原文 : The -l parameter shows all versions as opposed to just the latest versions if it was omitted."><code>-l</code>パラメータでは、すべてのバージョンが、省略された場合の最新バージョンのみではなく表示されます。</span></p>

<p><span class="merged" id="all.39YXro" title="原文 : A specific pre-release version of the Helm chart can be installed using the --version argument, for example to use version 3.0.0-2005140315:">Helmチャートの特定のプレリリース・バージョンは、<code>--version</code>引数を使用してインストールできます。たとえば、バージョン<code>3.0.0-2005140315</code>を使用できます:</span></p>

<markup
lang="bash"

>helm install coherence-unstable/coherence-operator \
    --version 3.0.0-2005140315 \   <span class="conum" data-value="1" />
    --namespace &lt;namespace&gt; \      <span class="conum" data-value="2" />
    --name coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3jC4Kj" title="原文 : The --version argument is used to specify the exact version of the chart"><code>--version</code>引数は、チャートの正確なバージョンを指定するために使用</span></li>
<li data-value="2"><span class="merged" id="all.2N36og" title="原文 : The optional --namespace parameter to specify which namespace to install the operator into, if omitted then Helm will install into whichever is currently the default namespace for your Kubernetes configuration.">オペレータをインストールするネームスペースを指定するオプションの<code>--namespace</code>パラメータ。省略すると、Helmは、現在Kubernetes構成のデフォルト・ネームスペースのいずれかにインストールされます。</span></li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.21MylT" title="原文 : When using pre-release versions of the Helm chart it is always advisable to install a specific version otherwise Helm will try to work out the latest version in the pre-release repo and as pre-release version numbers are not strictly sem-ver compliant this may be unreliable.">Helmのプレリリース・バージョンを使用する場合、特定のバージョンをインストールすることをお薦めします。そうしないと、Helmはプレリリース・リポジトリで最新バージョンを処理し、プレリリース・バージョン番号は厳密に準バージョン準拠ではないため、信頼できない可能性があります。</span></p>
</div>
</div>
</doc-view>
