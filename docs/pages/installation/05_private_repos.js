<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_using_private_image_registries"><span class="merged" id="all.4BrISl" title="原文 : Using Private Image Registries">プライベート・イメージ・レジストリの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.37juRM.spl1" title="原文 : Sometimes the images used by a Coherence cluster need to be pulled from a private image registry that requires credentials.">Coherenceクラスタで使用されるイメージは、資格証明を必要とするプライベート・イメージ・レジストリから取得する必要がある場合があります。</span> <span class="merged" id="all.37juRM.spl2" title="原文 : The Coherence Operator supports supplying credentials in the Coherence CRD configuration.">Coherence Operatorは、<code>Coherence</code> CRD構成で資格証明の指定をサポートしています。</span> <span class="merged" id="all.37juRM.spl3" title="原文 : The Kubernetes documentation on using a private registries gives a number of options for supplying credentials."><a href="https://kubernetes.io/docs/concepts/containers/images/#using-a-private-registry" id="" target="_blank" >「プライベート・レジストリの使用」</a>のKubernetesドキュメントは、資格証明を指定する多数のオプションを提供します。</span> </p>

</div>

<h2 id="_use_imagepullsecrets"><span class="merged" id="all.1YJKb5.1" title="原文 : Use ImagePullSecrets">ImagePullSecretsを使用する</span></h2>
<div class="section">
<p><span class="merged" id="all.aTxBB.spl1" title="原文 : Kubernetes supports configuring pods to use imagePullSecrets for pulling images.">Kubernetesでは、イメージのプルに<code>imagePullSecrets</code>を使用するようにポッドの構成がサポートされています。</span> <span class="merged" id="all.aTxBB.spl2" title="原文 : If possible, this is the preferable, and most portable route.">可能な場合は、これが望ましく、最も移植可能なルートです。</span> <span class="merged" id="all.aTxBB.spl3" title="原文 : See the kubernetes docs for this."><a href="https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod" id="" target="_blank" >「kubernetesドキュメント」</a>を参照してください。</span> <span class="merged" id="all.aTxBB.spl4" title="原文 : Once secrets have been created in the namespace that the Coherence resource is to be installed in then the secret name can be specified in the Coherence spec."><code>Coherence</code>リソースがインストールされているネームスペースにシークレットが作成されると、<code>Coherence</code> <code>spec</code>でシークレット名を指定できます。</span> <span class="merged" id="all.aTxBB.spl5" title="原文 : It is possible to specify multiple secrets in the case where the different images being used will be pulled from different registries.">使用されている異なるイメージが異なるレジストリから取り込まれる場合は、複数のシークレットを指定できます。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  imagePullSecrets:
    - name: coherence-secret  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1lhVvJ.1" title="原文 : The coherence-secret will be used for pulling images from the registry associated to the secret"><code>coherence-secret</code>は、シークレットに関連付けられたレジストリからイメージをプルするために使用されます</span></li>
</ul>
<p><span class="merged" id="all.JvXPV" title="原文 : The imagePullSecrets field is a list of values in the same format that they would be specified in Kubernetes Pod specs, so multiple secrets can be specified for different authenticated registries in the case where the Coherence cluster will use images from different authenticated registries.."><code>imagePullSecrets</code>フィールドは、Kubernetes <code>Pod</code>仕様で指定されている同じ形式の値のリストです。したがって、Coherenceクラスタが別の認証済レジストリのイメージを使用する場合、異なる認証済レジストリに対して複数のシークレットを指定できます。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  imagePullSecrets:           <span class="conum" data-value="1" />
    - name: coherence-secret
    - name: ocr-secret</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2gYfDj" title="原文 : The imagePullSecrets list specifies two secrets to use coherence-secret and ocr-secret"><code>imagePullSecrets</code>リストは、<code>coherence-secret</code>および<code>ocr-secret</code>を使用する2つのシークレットを指定</span></li>
</ul>
</div>
</doc-view>
