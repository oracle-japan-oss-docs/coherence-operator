<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_the_coherence_query_plus"><span class="merged" id="all.3xF3eA" title="原文 : The Coherence Query Plus">Coherence Query Plus</span></h2>
<div class="section">
<p><span class="merged" id="all.4MQbJF" title="原文 : The Coherence Query Plus utility is a console application that allows simple SQL like queries to be made against caches, see the Using Coherence Query Language section of the Coherence documentation.">Coherence Query Plusユーティリティは、キャッシュに対して問合せのような単純なSQLを実行できるコンソール・アプリケーションです。Coherenceドキュメントの<a href="https://docs.oracle.com/en/middleware/fusion-middleware/coherence/14.1.2/develop-applications/using-coherence-query-language.html" id="" target="_blank" >「Coherence問合せ言語の使用」</a>の項を参照してください。</span></p>


<h3 id="_using_query_plus_in_pods"><span class="merged" id="all.3jhbEF" title="原文 : Using Query Plus in Pods">ポッドでのQuery Plusの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.2rFkFz.spl1" title="原文 : Most official Coherence images are distroless images, so they do not have a shell that can be used to create a command line session and execute commands.">ほとんどの公式のCoherenceイメージは歪みのないイメージであるため、コマンドライン・セッションの作成およびコマンドの実行に使用できるシェルはありません。</span> <span class="merged" id="all.2rFkFz.spl2" title="原文 : The Operator works around this to support a few selected commands by injecting its runner utility.">オペレータはこれを回避して、<code>runner</code>ユーティリティを注入することで、選択したいくつかのコマンドをサポートします。</span> <span class="merged" id="all.2rFkFz.spl3" title="原文 : The Operator installs the runner at the location /coherence-operator/utils/runner.">オペレータは、<code>/coherence-operator/utils/runner</code>のロケーションに<code>runner</code>をインストールします。</span> </p>

<p><span class="merged" id="all.38z2oG" title="原文 : The runner utility is a simple CLI that executes commands, one of those is queryplus which will start a Java process running Query Plus."><code>runner</code>ユーティリティは、コマンドを実行する単純なCLIであり、そのうちの1つは、Query Plusを実行するJavaプロセスを起動する<code>queryplus</code>です。</span></p>

<div class="admonition caution">
<p class="admonition-textlabel"><span class="merged" id="all.4Pmf1N.5"  title="原文:: Caution">注意</span></p>
<p ><p><span class="merged" id="all.1bgS7b.spl1" title="原文 : The Query Plus JVM will join the cluster as a storage disabled member alongside the JVM running in the Coherence container in the Pod.">Query Plus JVMは、ポッドのCoherenceコンテナで実行されているJVMとともに、ストレージが無効なメンバーとしてクラスタに参加します。</span> <span class="merged" id="all.1bgS7b.spl2" title="原文 : The Query Plus session will have all the same configuration parameters as the Coherence container.">Query Plusセッションの構成パラメータは、すべてCoherenceコンテナと同じになります。</span> </p>

<p><span class="merged" id="all.1aiB0F" title="原文 : For this reason, great care must be taken with the commands that are executed so that the cluster does not become unstable.">このため、クラスタが不安定にならないように、実行されるコマンドには十分に注意してください。</span></p>
</p>
</div>
</div>

<h3 id="_start_a_query_plus_session"><span class="merged" id="all.1T24qh" title="原文 : Start a Query Plus Session">Query Plusセッションの開始</span></h3>
<div class="section">
<p><span class="merged" id="all.3kSZ0v" title="原文 : The yaml below will create a simple three member cluster.">次のyamlは、単純な3つのメンバー・クラスタを作成します。</span></p>

<markup

title="minimal.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
    replicas: 3</markup>

<p><span class="merged" id="all.1tC73T.1" title="原文 : The cluster name is storage and there will be three Pods created, storage-0, storage-1 and storage-2.">クラスタ名は<code>storage</code>で、<code>storage-0</code>、<code>storage-1</code>および<code>storage-2</code>という3つのPodが作成されます。</span></p>

<p><span class="merged" id="all.HOV32" title="原文 : A Query Plus session can be run by exec’ing into one of the Pods to execute the runner with the argument queryplus.">Query Plusセッションは、いずれかのポッドにexec'ingを実行して、引数<code>queryplus</code>でランナーを実行できます。</span></p>

<markup
lang="bash"

>kubectl exec -it storage-0 -c coherence -- /coherence-operator/runner queryplus</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.16"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.2bPexs" title="原文 : The kubectl exec command must include the -it options so that kubectl creates an interactive terminal session."><code>kubectl</code>が対話型端末セッションを作成できるように、<code>kubectl exec</code>コマンドに<code>-it</code>オプションを含める必要があります。</span></p>
</p>
</div>
<p><span class="merged" id="all.JRHwO.spl1" title="原文 : After executing the above command, the CohQL&gt; prompt will be displayed ready to accept input.">前述のコマンドを実行すると、入力を受け入れる準備ができた<code>CohQL></code>プロンプトが表示されます。</span> <span class="merged" id="all.JRHwO.spl2" title="原文 : Using the Query Plus utility is documented in the Using the CohQL Command-Line Tool section of the Coherence documentation">Query Plusユーティリティの使用方法は、Coherenceドキュメントの<a href="https://docs.oracle.com/en/middleware/fusion-middleware/coherence/14.1.2/develop-applications/using-coherence-query-language.html#GUID-1CBE48A8-1009-4656-868D-663AA85CB021" id="" target="_blank" >「CohQLコマンドライン・ツールの使用」</a>セクションに記載されています</span> </p>

</div>

<h3 id="_run_query_plus_with_command_line_arguments"><span class="merged" id="all.2SKPga" title="原文 : Run Query Plus With Command Line Arguments">コマンドライン引数を使用したQuery Plusの実行</span></h3>
<div class="section">
<p><span class="merged" id="all.1rVVwr.spl1" title="原文 : Instead of running an interactive Query Plus session, arguments can be passed into Query Plus as part of the exec command.">対話型のQuery Plusセッションを実行するかわりに、execコマンドの一部として引数をQuery Plusに渡すことができます。</span> <span class="merged" id="all.1rVVwr.spl2" title="原文 : Query Plus will execute the commands and exit.">Query Plusはコマンドを実行して終了します。</span> </p>

<p><span class="merged" id="all.2Pvan4.spl1" title="原文 : The command line for this is slightly complicated because there are two CLI programs involved in the full command line, first kubectl and second the Operator’s runner.">コマンドライン全体には2つのCLIプログラム(最初の<code>kubectl</code>と2番目のオペレータのランナー)が含まれているため、このコマンドラインは少し複雑です。</span> <span class="merged" id="all.2Pvan4.spl2" title="原文 : In each case the -- command line separator needs to be used so that each CLI knows the everything after a -- is to be passed to the next process.">いずれの場合も、各CLIが<code>--</code>が次のプロセスに渡された後にすべてを認識できるように、<code>--</code>コマンドライン・セパレータを使用する必要があります。</span> </p>

<p><span class="merged" id="all.gTpRc.spl1" title="原文 : For example a simple string key and value could be inserted into a cache named &quot;test&quot; with the following CohQL statement insert into &quot;test&quot; key &quot;one&quot; value &quot;value-one&quot;.">たとえば、次のCohQL文<code>insert into "test" key "one" value "value-one"</code>を使用して、単純な文字列キーおよび値をtestという名前のキャッシュに挿入できます。</span> <span class="merged" id="all.gTpRc.spl2" title="原文 : This statement can be executed in a Pod with the following command">この文は、次のコマンドを使用してポッドで実行できます</span> </p>

<markup
lang="bash"

>kubectl exec storage-0 -c coherence -- /coherence-operator/runner queryplus -- -c -l 'insert into test key "one" value "value-one"'</markup>

<p><span class="merged" id="all.2z4xao.spl1" title="原文 : In the above example the first -- tels kubectl that all the remaining arguments are to be passed as arguments to the exec session.">前述の例では、最初の<code>--</code>は、残りのすべての引数をexecセッションに引数として渡すことを<code>kubectl</code>と呼びます。</span> <span class="merged" id="all.2z4xao.spl2" title="原文 : The second -- tells the Operator runner that all the remaining arguments are to be passed to Query Plus.">2番目の<code>--</code>は、残りのすべての引数がQuery Plusに渡されることをオペレータ・ランナーに指示します。</span> </p>

<p><span class="merged" id="all.1SSmkF.spl1" title="原文 : After running the above command the cache test will contain an entry with the key &quot;one&quot; and value &quot;value-one&quot;.">前述のコマンドを実行すると、キャッシュ<code>test</code>には、キー<code>"one"</code>および値<code>"value-one"</code>のエントリが含まれます。</span> <span class="merged" id="all.1SSmkF.spl2" title="原文 : If the statement select * from test is executed the value in the cache will be displayed.">文<code>select * from test</code>が実行されると、キャッシュ内の値が表示されます。</span> </p>

<markup
lang="bash"

>kubectl exec storage-0 -c coherence -- /coherence-operator/runner queryplus -- -c -l 'select * from test'</markup>

<p><span class="merged" id="all.2qcln4" title="原文 : The last few lines of the console output will display the results of executing the statement:">コンソール出力の最後の数行に、文の実行結果が表示されます:</span></p>

<markup


>Results
"value-one"</markup>

</div>
</div>
</doc-view>
