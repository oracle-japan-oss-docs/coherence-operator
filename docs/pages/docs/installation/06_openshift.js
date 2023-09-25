<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coherence_clusters_on_openshift"><span class="merged" id="all.375qJ0" title="原文 : Coherence Clusters on OpenShift">OpenShiftのCoherenceクラスタ</span></h2>
<div class="section">
<p><span class="merged" id="all.3AMZDY" title="原文 : Whilst the Coherence Operator will run out of the box on OpenShift some earlier versions of the Coherence Docker image will not work without configuration changes.">Coherence OperatorはOpenShiftのボックスから実行されますが、一部の以前のバージョンのCoherence Dockerイメージは構成なしで機能しません。</span></p>

<p><span class="merged" id="all.1Bttyz.spl1" title="原文 : These earlier versions of the Coherence Docker images that Oracle publishes default the container user as oracle.">Oracleが公開するこれらの以前のバージョンのCoherence Dockerイメージするデフォルトのコンテナ・ユーザーは<code>oracle</code>です。</span> <span class="merged" id="all.1Bttyz.spl2" title="原文 : When running the Oracle images or layered images that retain the default user as oracle with OpenShift, the anyuid security context constraint is required to ensure proper access to the file system within the Docker image.">OpenShiftでデフォルト・ユーザーを<code>oracle</code>として保持するOracleイメージまたはレイヤー・イメージを実行する場合、Dockerイメージ内のファイル・システムへの適切なアクセスを確保するために、<code>anyuid</code>セキュリティ・コンテキスト制約が必要です。</span> <span class="merged" id="all.1Bttyz.spl3" title="原文 : Later versions of the Coherence images have been modified to work without needing anyuid.">後続のバージョンのCoherenceイメージは、<code>anyuid</code>を必要とせずに機能するように変更されました。</span> </p>

<p><span class="merged" id="all.31VOUi" title="原文 : To work with older image versions , the administrator must:">古いイメージ・バージョンを使用するには、管理者は次の作業を行う必要があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xtKsG" title="原文 : Ensure the anyuid security content is granted"><code>anyuid</code>セキュリティ・コンテンツが付与されていることを確認</span></p>

</li>
<li>
<p><span class="merged" id="all.3fj9uD" title="原文 : Ensure that Coherence containers are annotated with openshift.io/scc: anyuid">Coherenceコンテナの注釈が<code>openshift.io/scc: anyuid</code>になっていることを確認</span></p>

</li>
</ul>
<p><span class="merged" id="all.1vY3ZD" title="原文 : For example, to update the OpenShift policy, use:">たとえば、OpenShiftポリシーを更新するには、次を使用します:</span></p>

<markup
lang="bash"

>oc adm policy add-scc-to-user anyuid -z default</markup>

<p><span class="merged" id="all.3ss4mL" title="原文 : and to annotate the Coherence containers, update the Coherence resource to include annotations">Coherenceコンテナに注釈を付けるには、注釈を含めるように<code>Coherence</code>リソースを更新</span></p>

<p><span class="merged" id="all.6vDv5.3"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  annotations:
    openshift.io/scc: anyuid  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.pzv0K" title="原文 : The openshift.io/scc: anyuid annotation will be applied to all of the Coherence Pods."><code>openshift.io/scc: anyuid</code>注釈は、すべてのCoherenceポッドに適用されます。</span></li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3fLzk" title="原文 : For additional information about OpenShift requirements see the OpenShift documentation">OpenShift要件の詳細は、<a href="https://docs.openshift.com/container-platform/3.3/creating_images/guidelines.html" id="" target="_blank" >「OpenShiftドキュメント」</a>を参照してください</span></p>
</div>
</div>
</doc-view>
