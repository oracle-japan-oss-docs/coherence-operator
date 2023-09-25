<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_the_coherence_cli"><span class="merged" id="all.1DMffV" title="原文 : The Coherence CLI">The Coherence CLI</span></h2>
<div class="section">
<p><span class="merged" id="all.2EyHcS.spl1" title="原文 : If Coherence Management over REST is enabled, it is possible to use the Coherence CLI to access management information.">RESTを介したCoherence管理が有効になっている場合は、<a href="https://github.com/oracle/coherence-cli" id="" target="_blank" >Coherence CLI</a>を使用して管理情報にアクセスできます。</span> <span class="merged" id="all.2EyHcS.spl2" title="原文 : The Operator enables Coherence Management over REST by default, so unless it has specifically been disabled, the CLI can be used.">オペレータはデフォルトでRESTを介したCoherence管理を有効にするため、特に無効にしないかぎり、CLIを使用できます。</span> </p>

<p><span class="merged" id="all.1vZUxo" title="原文 : See the Coherence CLI Documentation for more information on how to use the CLI.">CLIの使用方法の詳細は、<a href="https://oracle.github.io/coherence-cli/docs/latest" id="" target="_blank" >「Coherence CLIのドキュメント」</a>を参照してください。</span></p>

<p><span class="merged" id="all.1TdpgS.spl1" title="原文 : The Coherence CLI is automatically added to Coherence Pods by the Operator, so it is available as an executable that can be run using kubectl exec.">Coherence CLIはオペレータによってCoherenceポッドに自動的に追加されるため、<code>kubectl exec</code>を使用して実行できる実行可能ファイルとして使用できます。</span> <span class="merged" id="all.1TdpgS.spl2" title="原文 : At start-up of a Coherence container a default Coherence CLI configuration is created so that the CLI knows about the local cluster member.">Coherenceコンテナの起動時に、CLIがローカル・クラスタ・メンバーを認識できるように、デフォルトのCoherence CLI構成が作成されます。</span> </p>


<h3 id="_using_the_cli_in_pods"><span class="merged" id="all.3gDVfg" title="原文 : Using the CLI in Pods">ポッドでのCLIの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1pIXdq.spl1" title="原文 : The Operator installs the CLI at the location /coherence-operator/utils/cohctl.">オペレータは、<code>/coherence-operator/utils/cohctl</code>のロケーションにCLIをインストールします。</span> <span class="merged" id="all.1pIXdq.spl2" title="原文 : Most official Coherence images are distroless images so they do not have a shell that can be used to create a session and execute commands.">ほとんどの公式Coherenceイメージは歪みのないイメージであるため、セッションの作成およびコマンドの実行に使用できるシェルがありません。</span> <span class="merged" id="all.1pIXdq.spl3" title="原文 : Each cohctl command will need to be executed as a separate kubectl exec command.">各<code>cohctl</code>コマンドは、個別の<code>kubectl exec</code>コマンドとして実行する必要があります。</span> </p>

<p><span class="merged" id="all.3eLy2H.spl1" title="原文 : Once a Pod is running is it simple to use the CLI.">ポッドが実行されると、CLIを簡単に使用できます。</span> <span class="merged" id="all.3eLy2H.spl2" title="原文 : For example, the yaml below will create a simple three member cluster.">たとえば、次のyamlは単純な3つのメンバー・クラスタを作成します。</span> </p>

<markup

title="minimal.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
    replicas: 3</markup>

<p><span class="merged" id="all.1tC73T" title="原文 : The cluster name is storage and there will be three Pods created, storage-0, storage-1 and storage-2.">クラスタ名は<code>storage</code>で、<code>storage-0</code>、<code>storage-1</code>および<code>storage-2</code>という3つのPodが作成されます。</span></p>

<p><span class="merged" id="all.1FVnJj" title="原文 : To list the services running in the storage-0 Pod the following command can be run:"><code>storage-0</code> Podで実行されているサービスをリストするには、次のコマンドを実行できます:</span></p>

<markup
lang="bash"

>kubectl exec storage-0 -c coherence -- /coherence-operator/utils/cohctl get services</markup>

<p><span class="merged" id="all.47o0xF.spl1" title="原文 : The -c coherence option tells kubectl to exec the command in the coherence container."><code>-c coherence</code>オプションは、<code>coherence</code>コンテナでコマンドを実行するように<code>kubectl</code>に指示します。</span> <span class="merged" id="all.47o0xF.spl2" title="原文 : By default this is the only container that will be running in the Pod, so the option could be omitted.">デフォルトでは、これはPodで実行される唯一のコンテナであるため、オプションは省略できます。</span> <span class="merged" id="all.47o0xF.spl3" title="原文 : If the option is omitted, kubectl will display a warning to say it assumes you mean the coherence container.">このオプションを省略すると、<code>kubectl</code>は警告を表示して、<code>coherence</code>コンテナであることを前提とします。</span> </p>

<p><span class="merged" id="all.1XmOMX.spl1" title="原文 : Everything after the -- is the command to run in the Pod."><code>--</code>の後のすべてが、Podで実行するコマンドです。</span> <span class="merged" id="all.1XmOMX.spl2" title="原文 : In this case we execute:">この場合、次を実行します:</span> </p>

<markup
lang="bash"

>/coherence-operator/utils/cohctl get services</markup>

<p><span class="merged" id="all.2odhOh" title="原文 : which runs the Coherence CLI binary at /coherence-operator/utils/cohctl with the command get services.">コマンド<code>get services</code>を使用して、<code>/coherence-operator/utils/cohctl</code>でCoherence CLIバイナリを実行します。</span></p>

<p><span class="merged" id="all.4MvlDt" title="原文 : The output displayed by the command will look something like this:">コマンドによって表示される出力は、次のようになります:</span></p>

<markup
lang="bash"

>Using cluster connection 'default' from current context.

SERVICE NAME            TYPE              MEMBERS  STATUS HA  STORAGE  PARTITIONS
"$GRPC:GrpcProxy"       Proxy                   3  n/a             -1          -1
"$SYS:Concurrent"       DistributedCache        3  NODE-SAFE        3         257
"$SYS:ConcurrentProxy"  Proxy                   3  n/a             -1          -1
"$SYS:Config"           DistributedCache        3  NODE-SAFE        3         257
"$SYS:HealthHttpProxy"  Proxy                   3  n/a             -1          -1
"$SYS:SystemProxy"      Proxy                   3  n/a             -1          -1
ManagementHttpProxy     Proxy                   3  n/a             -1          -1
MetricsHttpProxy        Proxy                   3  n/a             -1          -1
PartitionedCache        DistributedCache        3  NODE-SAFE        3         257
PartitionedTopic        PagedTopic              3  NODE-SAFE        3         257
Proxy                   Proxy                   3  n/a             -1          -1</markup>

<p><span class="merged" id="all.3uNsSM" title="原文 : The exact output will vary depending on the version of Coherence and the configurations being used.">正確な出力は、Coherenceのバージョンおよび使用される構成によって異なります。</span></p>

<p><span class="merged" id="all.1SpH6K" title="原文 : More CLI commands can be run by changing the CLI commands specified after /coherence-operator/utils/cohctl."><code>/coherence-operator/utils/cohctl</code>の後に指定されたCLIコマンドを変更することで、さらにCLIコマンドを実行できます。</span></p>

<p><span class="merged" id="all.34Fzr" title="原文 : For example, to list all the members of the cluster:">たとえば、クラスタのすべてのメンバーをリストするには:</span></p>

<markup
lang="bash"

>kubectl exec storage-0 -c coherence -- /coherence-operator/utils/cohctl get members</markup>

</div>
</div>
</doc-view>
