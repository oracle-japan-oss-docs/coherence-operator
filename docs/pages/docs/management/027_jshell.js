<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_using_jshell"><span class="merged" id="all.4YQjUL" title="原文 : Using JShell">JShellの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.2lb9Qo.spl1" title="原文 : JShell is a Java utility that allows Java code to be executed in a console.">JShellは、Javaコードをコンソールで実行できるようにするJavaユーティリティです。</span> <span class="merged" id="all.2lb9Qo.spl2" title="原文 : Whilst it is simple to exec into a Pod and run JShell, the Coherence Operator will run JShell configured with the same class path and system properties as the running Coherence container.">PodにexecしてJShellを実行するのは簡単ですが、Coherence Operatorは、実行中のCoherenceコンテナと同じクラス・パスおよびシステム・プロパティで構成されたJShellを実行します。</span> <span class="merged" id="all.2lb9Qo.spl3" title="原文 : This makes it simpler to invoke JShell commands knowing that everything required to access the running Coherence JVM is present.">これにより、実行中のCoherence JVMへのアクセスに必要なすべてのものが存在することを認識して、JShellコマンドを簡単に起動できます。</span> </p>


<h3 id="_using_jshell_in_pods"><span class="merged" id="all.1Hy7pk" title="原文 : Using JShell in Pods">ポッドでのJShellの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.2qhi8u.spl1" title="原文 : The Operator installs a simple CLI named runner at the location /coherence-operator/utils/runner.">オペレータは、<code>/coherence-operator/utils/runner</code>のロケーションに<code>runner</code>という名前の単純なCLIをインストールします。</span> <span class="merged" id="all.2qhi8u.spl2" title="原文 : One of the commands the runner can execute is jshell which will start a JShell process.">ランナーが実行できるコマンドの1つは、JShellプロセスを開始する<code>jshell</code>です。</span> </p>

<div class="admonition caution">
<p class="admonition-textlabel"><span class="merged" id="all.4Pmf1N.6"  title="原文:: Caution">注意</span></p>
<p ><p><span class="merged" id="all.10Q6kd" title="原文 : JShell can be a useful debugging tool, but running JShell in a production cluster is not recommended.">JShellは便利なデバッグ・ツールですが、本番クラスタでJShellを実行することはお薦めしません。</span></p>

<p><span class="merged" id="all.1as7tT.spl1" title="原文 : The JShell JVM will join the cluster as a storage disabled member alongside the JVM running in the Coherence container in the Pod.">JShell JVMは、ポッドのCoherenceコンテナで実行されているJVMとともに、ストレージが無効なメンバーとしてクラスタに参加します。</span> <span class="merged" id="all.1as7tT.spl2" title="原文 : The JShell session will have all the same configuration parameters as the Coherence container.">JShellセッションの構成パラメータは、すべてCoherenceコンテナと同じになります。</span> </p>

<p><span class="merged" id="all.1aiB0F.1" title="原文 : For this reason, great care must be taken with the commands that are executed so that the cluster does not become unstable.">このため、クラスタが不安定にならないように、実行されるコマンドには十分に注意してください。</span></p>
</p>
</div>
</div>

<h3 id="_start_a_jshell_session"><span class="merged" id="all.1k6b5r" title="原文 : Start a JShell Session">JShellセッションの開始</span></h3>
<div class="section">
<p><span class="merged" id="all.41RQZn" title="原文 : The kubectl exec command can be used to create an interactive session in a Pod using the Coherence Operator runner to start a JShell session."><code>kubectl exec</code>コマンドを使用すると、Coherence Operatorランナーを使用してポッド内に対話型セッションを作成し、JShellセッションを開始できます。</span></p>

<p><span class="merged" id="all.aOm2K"  title="原文:: Example"><strong>例</strong></span></p>

<p><span class="merged" id="all.3kSZ0v.1" title="原文 : The yaml below will create a simple three member cluster.">次のyamlは、単純な3つのメンバー・クラスタを作成します。</span></p>

<markup

title="minimal.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
    replicas: 3</markup>

<p><span class="merged" id="all.1tC73T.2" title="原文 : The cluster name is storage and there will be three Pods created, storage-0, storage-1 and storage-2.">クラスタ名は<code>storage</code>で、<code>storage-0</code>、<code>storage-1</code>および<code>storage-2</code>という3つのPodが作成されます。</span></p>

<p><span class="merged" id="all.T9Rm1" title="原文 : A Query Plus session can be run by exec’ing into one of the Pods to execute the runner with the argument jshell.">Query Plusセッションは、いずれかのポッドにexec'ingを実行して、引数<code>jshell</code>でランナーを実行できます。</span></p>

<markup
lang="bash"

>kubectl exec -it storage-0 -c coherence -- /coherence-operator/runner jshell</markup>

<p><span class="merged" id="all.3EwN7R" title="原文 : After executing the above command, the jshell&gt; prompt will be displayed ready to accept input.">前述のコマンドを実行すると、入力を受け入れる準備ができた<code>jshell></code>プロンプトが表示されます。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.17"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.2bPexs.1" title="原文 : The kubectl exec command must include the -it options so that kubectl creates an interactive terminal session."><code>kubectl</code>が対話型端末セッションを作成できるように、<code>kubectl exec</code>コマンドに<code>-it</code>オプションを含める必要があります。</span></p>
</p>
</div>
</div>

<h3 id="_starting_coherence"><span class="merged" id="all.C1e6W"  title="原文:: Starting Coherence">Coherenceの起動</span></h3>
<div class="section">
<p><span class="merged" id="all.1ZByO1.spl1" title="原文 : The JShell session only starts the JShell REPL and Coherence is not started in the JShell process.">JShellセッションではJShell REPLのみが起動され、CoherenceはJShellプロセスでは起動されません。</span> <span class="merged" id="all.1ZByO1.spl2" title="原文 : As the JShell process has all the same configuration except it is configured to be storage disabled.">JShellプロセスの構成は、ストレージが無効になるように構成されている場合を除き、すべて同じです。</span> <span class="merged" id="all.1ZByO1.spl3" title="原文 : As the Coherence container in the Pod any of the normal ways to bootstrap Coherence can be used.">ポッドのCoherenceコンテナとして、Coherenceをブートストラップする通常の方法を使用できます。</span> <span class="merged" id="all.1ZByO1.spl4" title="原文 : Any configuration changes, for example setting system properties, can be done before Coherence is started.">システム・プロパティの設定など、構成の変更は、Coherenceの起動前に行うことができます。</span> </p>

<p><span class="merged" id="all.6vDv5.18"  title="原文:: For example:">例えば:</span></p>

<markup
lang="java"

>jshell&gt; import com.tangosol.net.*;

jshell&gt; Coherence c = Coherence.clusterMember().start().join();

jshell&gt; Session s = c.getSession();
s ==&gt; com.tangosol.internal.net.ConfigurableCacheFactorySession@3d0f8e03

jshell&gt; NamedCache&lt;String, String&gt; cache = s.getCache("test");
cache ==&gt; com.tangosol.internal.net.SessionNamedCache@91213130

jshell&gt; cache.size();
$5 ==&gt; 0

jshell&gt;</markup>

</div>
</div>
</doc-view>
