<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_set_the_application_main"><span class="merged" id="all.3NEJZT" title="原文 : Set the Application Main">アプリケーション・メインの設定</span></h2>
<div class="section">
<p><span class="merged" id="all.4aqTWu.spl1" title="原文 : The Coherence container in the deployment’s Pods will, by default, run com.tangosol.net.DefaultCacheServer as the Java main class.">デプロイメントのポッド内のCoherenceコンテナは、デフォルトで、Javaメイン・クラスとして<code>com.tangosol.net.DefaultCacheServer</code>を実行します。</span> <span class="merged" id="all.4aqTWu.spl2" title="原文 : It is possible to change this when running a custom application that requires a different main.">別のメインを必要とするカスタム・アプリケーションを実行する場合は、これを変更できます。</span> </p>

<p><span class="merged" id="all.2EgDKg" title="原文 : The name of the main is set in the application.main field in the Coherence spec.">メインの名前は、<code>Coherence</code>仕様の<code>application.main</code>フィールドに設定されます。</span></p>

<p><span class="merged" id="all.3wCiMI" title="原文 : For example, if the deployment is using a custom image catalogue:1.0.0 that requires a custom main class called com.acme.Catalogue the Coherence resource would look like this:">たとえば、デプロイメントで<code>com.acme.Catalogue</code>というカスタム・メイン・クラスを必要とするカスタム・イメージ<code>catalogue:1.0.0</code>を使用している場合、<code>Coherence</code>リソースは次のようになります:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: catalogue:1.0.0
  application:
    main: com.acme.Catalogue <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3AcTG6" title="原文 : The com.acme.Catalogue will be run as the main class."><code>com.acme.Catalogue</code>はメイン・クラスとして実行されます。</span></li>
</ul>
<p><span class="merged" id="all.40pUOM" title="原文 : The example would be equivalent to the Coherence container running:">この例は、実行中のCoherenceコンテナと同等です:</span></p>

<markup
lang="bash"

>$ java com.acme.Catalogue</markup>

</div>
</doc-view>
