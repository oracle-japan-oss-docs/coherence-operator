<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_set_the_working_directory"><span class="merged" id="all.4LF7Pp" title="原文 : Set the Working Directory">作業ディレクトリの設定</span></h2>
<div class="section">
<p><span class="merged" id="all.2kRc88.spl1" title="原文 : When running a custom application there may be a requirement to run in a specific working directory.">カスタム・アプリケーションを実行するときに、特定の作業ディレクトリで実行する必要がある場合があります。</span> <span class="merged" id="all.2kRc88.spl2" title="原文 : The working directory can be specified in the application.workingDir field in the Coherence spec.">作業ディレクトリは、<code>Coherence</code>仕様の<code>application.workingDir</code>フィールドで指定できます。</span> </p>

<p><span class="merged" id="all.1EjsUt.1.spl1" title="原文 : For example, a deployment uses a custom image catalogue:1.0.0 that requires a custom main class called com.acme.Catalogue, and that class takes additional arguments.">たとえば、デプロイメントでは、<code>com.acme.Catalogue</code>というカスタム・メイン・クラスを必要とするカスタム・イメージ<code>catalogue:1.0.0</code>を使用し、そのクラスは追加の引数を取ります。</span> <span class="merged" id="all.1EjsUt.1.spl2" title="原文 : In this example we&rsquo;ll use two fictitious arguments such as a name and a language for the catalogue. the Coherence resource would look like this:">この例では、名前やカタログの言語など、2つの架空の引数を使用します。<code>Coherence</code>リソースは次のようになります:</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: catalogue:1.0.0          <span class="conum" data-value="1" />
  application:
    workingDir: "/apps/catalogue" <span class="conum" data-value="2" />
    main: "com.acme.Catalogue"    <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1YJ1vr" title="原文 : The catalogue:1.0.0 image will be used."><code>catalogue:1.0.0</code>イメージが使用されます。</span></li>
<li data-value="2"><span class="merged" id="all.1k9Ng5" title="原文 : The Java command will be executed in the /apps/catalogue working directory.">Javaコマンドは、<code>/apps/catalogue</code>作業ディレクトリで実行されます。</span></li>
<li data-value="3"><span class="merged" id="all.2MsAOu" title="原文 : The Java main class executed will be com.acme.Catalogue">実行されるJavaメイン・クラスは<code>com.acme.Catalogue</code>です</span></li>
</ul>
<p><span class="merged" id="all.40pUOM.2" title="原文 : The example would be equivalent to the Coherence container running:">この例は、実行中のCoherenceコンテナと同等です:</span></p>

<markup
lang="bash"

>$ cd /apps/catalogue
$ java com.acme.Catalogue</markup>

</div>
</doc-view>
