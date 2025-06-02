<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_install_using_olm"><span class="merged" id="all.24QsJ0" title="原文 : Install Using OLM">OLMを使用したインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.32vQEX" title="原文 : The Operator Lifecycle Manager (OLM) can be used to install the Coherence Operator."><a href="https://olm.operatorframework.io" id="" target="_blank" >Operator Lifecycle Manager</a> (OLM)を使用して、Coherence Operatorをインストールできます。</span></p>

<p><span class="merged" id="all.2oc4Oc.spl1" title="原文 : As part of the Coherence Operator release bundle and catalog images are pushed to the release image registry.">Coherence Operatorリリース・バンドルの一部として、カタログ・イメージがリリース・イメージ・レジストリにプッシュされます。</span> <span class="merged" id="all.2oc4Oc.spl2" title="原文 : These images can be used to deploy the operator on Kubernetes clusters that are running OLM.">これらのイメージを使用して、OLMを実行しているKubernetesクラスタにオペレータをデプロイできます。</span> </p>

<p><span class="merged" id="all.2XDR4B" title="原文 : The Coherence Operator is not currently available on Operator Hub, but the required resource files can be created manually to install the operator into Kubernetes.">Coherence Operatorは現在オペレータ・ハブでは使用できませんが、必要なリソース・ファイルを手動で作成して、オペレータをKubernetesにインストールできます。</span></p>


<h3 id="_install_the_coherence_operator_catalogsource"><span class="merged" id="all.3mTUQg" title="原文 : Install The Coherence Operator CatalogSource">Coherence Operator CatalogSourceをインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.sEmGa" title="原文 : Create a yaml manifest that will install the Coherence Operator CatalogSource as shown below.">次に示すように、Coherence Operator CatalogSourceをインストールするyamlマニフェストを作成します。</span></p>

<markup
lang="yaml"
title="operator-catalog-source.yaml"
>apiVersion: operators.coreos.com/v1alpha1
kind: CatalogSource
metadata:
  name: coherence-operator-catalog
  namespace: olm
spec:
  displayName: Oracle Coherence Operators
  image: ghcr.io/oracle/coherence-operator-catalog:latest
  publisher: Oracle Corporation
  sourceType: grpc
  updateStrategy:
    registryPoll:
      interval: 60m</markup>

<p><span class="merged" id="all.24DaCb" title="原文 : Install the CatalogSource into the olm namespace using the following command:">次のコマンドを使用して、CatalogSourceを<code>olm</code>ネームスペースにインストールします:</span></p>

<markup
lang="bash"

>kubectl apply -f operator-catalog-source.yaml</markup>

<p><span class="merged" id="all.3SLRsK" title="原文 : Running the following command should list the catalog sources installed in the olm namespace, including the Coherence catalog source.">次のコマンドを実行すると、<code>olm</code>ネームスペースにインストールされているカタログ・ソース(Coherenceカタログ・ソースを含む)がリストされます。</span></p>

<markup
lang="bash"

>kubectl -n olm get catalogsource</markup>

<p><span class="merged" id="all.4eA8ms" title="原文 : The Coherence catalog source Pod should eventually be ready, which can be verified with the following command:">Coherenceカタログ・ソースPodは、最終的に準備でき、次のコマンドを使用して検証できます:</span></p>

<markup
lang="bash"

>POD=$(kubectl -n olm get pod -l olm.catalogSource=coherence-operator-catalog)
kubectl -n olm wait --for condition=ready --timeout 480s $(POD)</markup>

</div>
</div>
</doc-view>
