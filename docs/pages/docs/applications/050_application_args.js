<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_set_application_arguments"><span class="merged" id="all.3ASWhu" title="原文 : Set Application Arguments">アプリケーション引数の設定</span></h2>
<div class="section">
<p><span class="merged" id="all.2pdTNG.spl1" title="原文 : When running a custom application there may be a requirement to pass arguments to the application’s main class.">カスタム・アプリケーションを実行するときに、アプリケーションのメイン・クラスに引数を渡す必要がある場合があります。</span> <span class="merged" id="all.2pdTNG.spl2" title="原文 : By default, there are no application arguments but any arguments required can be specified in the application.args list in the Coherence resource spec.">デフォルトでは、アプリケーション引数はありませんが、必要な引数は<code>Coherence</code>リソース仕様の<code>application.args</code>リストで指定できます。</span> </p>

<p><span class="merged" id="all.2gSmKH" title="原文 : The application.args is a list of string values, each value in the list is passed as an argument, in the order that they are specified in the list."><code>application.args</code>は文字列値のリストで、リスト内の各値は、リストで指定された順序で引数として渡されます。</span></p>

<p><span class="merged" id="all.1EjsUt.spl1" title="原文 : For example, a deployment uses a custom image catalogue:1.0.0 that requires a custom main class called com.acme.Catalogue, and that class takes additional arguments.">たとえば、デプロイメントでは、<code>com.acme.Catalogue</code>というカスタム・メイン・クラスを必要とするカスタム・イメージ<code>catalogue:1.0.0</code>を使用し、そのクラスは追加の引数を取ります。</span> <span class="merged" id="all.1EjsUt.spl2" title="原文 : In this example we’ll use two fictitious arguments such as a name and a language for the catalogue. the Coherence resource would look like this:">この例では、名前やカタログの言語など、2つの架空の引数を使用します。<code>Coherence</code>リソースは次のようになります:</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: catalogue:1.0.0
  application:
    main: com.acme.Catalogue <span class="conum" data-value="1" />
    args:                    <span class="conum" data-value="2" />
      - "--name=Books"
      - "--language=en_GB"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3AcTG6.1" title="原文 : The com.acme.Catalogue will be run as the main class."><code>com.acme.Catalogue</code>はメイン・クラスとして実行されます。</span></li>
<li data-value="2"><span class="merged" id="all.gHONr" title="原文 : The arguments passed to the com.acme.Catalogue class will be --name=Books and --language=en_GB"><code>com.acme.Catalogue</code>クラスに渡される引数は、<code>--name=Books</code>および<code>--language=en_GB</code>になります</span></li>
</ul>
<p><span class="merged" id="all.40pUOM.1" title="原文 : The example would be equivalent to the Coherence container running:">この例は、実行中のCoherenceコンテナと同等です:</span></p>

<markup
lang="bash"

>$ java com.acme.Catalogue --name=Books --language=en_GB</markup>

</div>

<h2 id="_environment_variable_expansion"><span class="merged" id="all.vMSX8" title="原文 : Environment Variable Expansion">環境変数の拡張</span></h2>
<div class="section">
<p><span class="merged" id="all.2OTWNI.spl1" title="原文 : The Operator supports environment variable expansion in program arguments.">オペレータは、プログラム引数の環境変数拡張をサポートします。</span> <span class="merged" id="all.2OTWNI.spl2" title="原文 : The runner in the Coherence container will replace ${var} or $var in the program arguments with the corresponding environment variable name.">Coherenceコンテナ内のランナーは、プログラム引数の<code>${var}</code>または<code>$var</code>を、対応する環境変数名に置き換えます。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: catalogue:1.0.0
  application:
    main: com.acme.Catalogue
    args:
      - "${HOSTNAME}"  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4AXnVq" title="原文 : The argument passed to the com.acme.Catalogue main method will resolve to the value of the HOSTNAME environment variable."><code>com.acme.Catalogue</code> mainメソッドに渡された引数は、<code>HOSTNAME</code>環境変数の値に解決されます。</span></li>
</ul>
<p><span class="merged" id="all.yCF5D" title="原文 : Any environment variable that is present when the Coherence container starts can be used, this would include variables created as part of the image and variables specified in the Coherence yaml.">Coherenceコンテナの起動時に存在するすべての環境変数を使用できます。これには、イメージの一部として作成された変数およびCoherence yamlで指定された変数が含まれます。</span></p>

</div>
</doc-view>
