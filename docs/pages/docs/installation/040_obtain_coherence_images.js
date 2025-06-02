<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2TyFJk" title="原文 : Obtain Coherence Images">Coherenceイメージの取得</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4WqECI.spl1" title="原文 : For most use-cases we expect the developer to provide a suitable Coherence application image to be run by the operator.">ほとんどのユースケースでは、開発者がオペレータが実行する適切なCoherenceアプリケーション・イメージを提供することを期待しています。</span> <span class="merged" id="all.4WqECI.spl2" title="原文 : For POCs, demos and experimentation the Coherence Operator uses the OSS Coherence CE image when no image has been specified for a Coherence resource.">POC、デモおよび実験の場合、<code>Coherence</code>リソースにイメージが指定されていない場合、Coherence OperatorはOSS Coherence CEイメージを使用します。</span> <span class="merged" id="all.4WqECI.spl3" title="原文 : Commercial Coherence images are not available from public image registries and must be pulled from the middleware section of Oracle Container Registry.">商用Coherenceイメージはパブリック・イメージ・レジストリから使用できず、<a href="https://container-registry.oracle.com" id="" target="_blank" >Oracle Container Registry</a>のミドルウェア・セクションからプルする必要があります。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_coherence_images_from_oracle_container_registry"><span class="merged" id="all.11Bjao" title="原文 : Coherence Images from Oracle Container Registry">Oracle Container RegistryのCoherenceイメージ</span></h2>
<div class="section">
<p><span class="merged" id="all.1xZSOp" title="原文 : Get the Coherence Docker image from the Oracle Container Registry:">Oracle Container RegistryからCoherenceのDockerイメージを取得します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2mUt7V" title="原文 : In a web browser, navigate to Oracle Container Registry and click Sign In.">webブラウザで、<a href="https://container-registry.oracle.com/" id="" target="_blank" >Oracle Container Registry</a>に移動してSign Inをクリックします。</span></p>

</li>
<li>
<p><span class="merged" id="all.ooWlj" title="原文 : Enter your Oracle credentials or create an account if you don’t have one.">Oracle資格証明を入力するか、アカウントがない場合は作成します。</span></p>

</li>
<li>
<p><span class="merged" id="all.tBS3F" title="原文 : Search for coherence in the Search Oracle Container Registry field.">検索Oracle Container Registryフィールドでcoherenceを検索します。</span></p>

</li>
<li>
<p><span class="merged" id="all.2C3VyN" title="原文 : Click coherence in the search result list.">検索結果リストでcoherenceをクリックします。</span></p>

</li>
<li>
<p><span class="merged" id="all.1ztqmJ" title="原文 : On the Oracle Coherence page, select the language from the drop-down list and click Continue.">Oracle Coherenceページで、ドロップダウン・リストから言語を選択し、続行をクリックします。</span></p>

</li>
<li>
<p><span class="merged" id="all.1ZfuX5" title="原文 : Click Accept on the Oracle Standard Terms and Conditions page.">Oracle Standardの条件ページで受諾をクリックします。</span></p>

</li>
</ul>
<p><span class="merged" id="all.25m9oG" title="原文 : Once this is done the Oracle Container Registry credentials can be used to create Kubernetes secret to pull the Coherence image.">これが完了したら、Oracle Container Registry資格証明を使用してKubernetesシークレットを作成してCoherenceイメージをプルできます。</span></p>

</div>

<h2 id="_use_imagepullsecrets"><span class="merged" id="all.1YJKb5" title="原文 : Use ImagePullSecrets">ImagePullSecretsの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.1MPyyw.spl1" title="原文 : Kubernetes supports configuring pods to use imagePullSecrets for pulling images.">Kubernetesでは、イメージのプルに<code>imagePullSecrets</code>を使用するポッドの構成がサポートされています。</span> <span class="merged" id="all.1MPyyw.spl2" title="原文 : If possible, this is the preferable and most portable route.">可能な場合、これは最も好ましい携帯用ルートです。</span> <span class="merged" id="all.1MPyyw.spl3" title="原文 : See the kubernetes docs for this.">これについては、<a href="https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod" id="" target="_blank" >「kubernetesドキュメント」</a>を参照してください。</span> </p>

<p><span class="merged" id="all.4PiKHO.spl1" title="原文 : Once secrets have been created in the namespace that the Coherence resource is to be installed in then the secret name can be specified in the Coherence CRD spec."><code>Coherence</code>リソースがインストールされるネームスペースにシークレットが作成されると、<code>Coherence</code> CRD <code>spec</code>でシークレット名を指定できます。</span> <span class="merged" id="all.4PiKHO.spl2" title="原文 : It is possible to specify multiple secrets in the case where the different images being used are pulled from different registries.">異なるレジストリから異なるイメージがプルされる場合、複数のシークレットを指定できます。</span> </p>

<p><span class="merged" id="all.Ly5Y1" title="原文 : For example to use the commercial Coherence 14.1.2.0.0 image from OCR specify the image and image pull secrets in the Coherence resource yaml">たとえば、OCRから商用Coherence 14.1.2.0.0イメージを使用するには、<code>Coherence</code>リソースyamlでイメージおよびイメージ・プル・シークレットを指定</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  image: container-registry.oracle.com/middleware/coherence:14.1.2.0.0
  imagePullSecrets:
    - name: coherence-secret  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1lhVvJ" title="原文 : The coherence-secret will be used for pulling images from the registry associated to the secret"><code>coherence-secret</code>は、シークレットに関連付けられたレジストリからイメージをプルするために使用されます</span></li>
</ul>
<p><span class="merged" id="all.1HC6XX" title="原文 : Also see Using Private Image Registries"><router-link @click.native="this.scrollFix('#docs/installation/05_private_repos.adoc')" to="#docs/installation/05_private_repos.adoc">「プライベート・イメージ・レジストリの使用」</router-link>も参照してください</span></p>

</div>
</doc-view>
