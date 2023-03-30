<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_capture_heap_dumps"><span class="merged" id="all.lK6jH" title="原文 : Capture Heap Dumps">ヒープ・ダンプの取得</span></h2>
<div class="section">
<p><span class="merged" id="all.2kbdDD.spl1" title="原文 : Heap dumps can be very useful when debugging but generating and downloading a heap dump from a container in Kubernetes can be tricky.">ヒープ・ダンプはデバッグ時に非常に役立ちますが、Kubernetesのコンテナからヒープ・ダンプを生成およびダウンロードすると、手間がかかる場合があります。</span> <span class="merged" id="all.2kbdDD.spl2" title="原文 : When you are running minimal images without an O/S or full JDK (such as the distroless images used by JIB) this becomes even more tricky.">O/SまたはJDK全体(JIBで使用される歪んだイメージなど)なしで最小限のイメージを実行している場合、これはさらに複雑になります。</span> </p>

</div>

<h2 id="_ephemeral_containers"><span class="merged" id="all.KEOC2" title="原文 : Ephemeral Containers">エフェメラル・コンテナ</span></h2>
<div class="section">
<p><span class="merged" id="all.1Wh1pl.spl1" title="原文 : Ephemeral containers were introduced in Kubernetes v1.16 and moved to beta in v1.23.">エフェメラル・コンテナは、Kubernetes v1.16で導入され、v1.23でベータに移されました。</span> <span class="merged" id="all.1Wh1pl.spl2" title="原文 : Ephemeral containers is a feature gate that must be enabled for your cluster.">エフェメラル・コンテナは、クラスタに対して有効にする必要がある機能ゲートです。</span> <span class="merged" id="all.1Wh1pl.spl3" title="原文 : If you have the EphemeralContainers feature gate enabled, then obtaining a heap dump is not so difficult."><code>EphemeralContainers</code>機能ゲートを有効にしている場合は、ヒープ・ダンプの取得が難しくありません。</span> </p>


<h3 id="_enable_ephemeralcontainers_in_kind"><span class="merged" id="all.1jf5Tk" title="原文 : Enable EphemeralContainers in KinD">KinDでEphemeralContainersを有効にします</span></h3>
<div class="section">
<p><span class="merged" id="all.2EQTgF" title="原文 : We use KinD for a lot of our CI builds and testing, enabling the EphemeralContainers feature gate in KinD is very easy."><a href="https://kind.sigs.k8s.io" id="" target="_blank" >KinD</a>は多くのCIビルドおよびテストに使用され、KinDの<code>EphemeralContainers</code>機能ゲートを有効化することは非常に簡単です。</span></p>

<p><span class="merged" id="all.3CtCFn" title="原文 : For example, this KinD configuration enables the EphemeralContainers feature gate">たとえば、このKinD構成では、<code>EphemeralContainers</code>機能ゲートが有効になります</span></p>

<markup
lang="yaml"

>kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
featureGates:
  EphemeralContainers: true <span class="conum" data-value="1" />
nodes:
- role: control-plane
- role: worker
- role: worker</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.UrZxq" title="原文 : The EphemeralContainers feature gate is set to true"><code>EphemeralContainers</code>機能ゲートは<code>true</code>に設定されます</span></li>
</ul>
</div>

<h3 id="_shared_process_namespace"><span class="merged" id="all.oTkn3" title="原文 : Shared Process Namespace">共有プロセス・ネームスペース</span></h3>
<div class="section">
<p><span class="merged" id="all.G5FrO.spl1" title="原文 : In this example we are going to use the jps and jcmd tools to generate the heap dump from an ephemeral container.">この例では、<code>jps</code>および<code>jcmd</code>ツールを使用して、一時コンテナからヒープ・ダンプを生成します。</span> <span class="merged" id="all.G5FrO.spl2" title="原文 : For this to work the ephemeral container must be able to see the processes running in the coherence container.">これを有効にするには、一時コンテナが<code>coherence</code>コンテナで実行されているプロセスを表示できる必要があります。</span> <span class="merged" id="all.G5FrO.spl3" title="原文 : The Coherence CRD spec has a field named ShareProcessNamespace, which sets the corresponding field in the Coherence Pods that will be created for the deployment."><code>Coherence</code> CRD仕様には、<code>ShareProcessNamespace</code>というフィールドがあり、デプロイメント用に作成されるCoherenceポッド内の対応するフィールドを設定します。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  shareProcessNamespace: true   <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2UweJp" title="原文 : The shareProcessNamespace must be set to true."><code>shareProcessNamespace</code>は<code>true</code>に設定する必要があります。</span></li>
</ul>
<p><span class="merged" id="all.EkwKF" title="原文 : If you have some other way to trigger a heap dump to a specific location without requiring the ephemeral container to see the Coherence container processes then the technique below can still be used without setting shareProcessNamespace to true.">エフェメラル・コンテナでCoherenceコンテナ・プロセスを表示する必要なく、特定のロケーションへのヒープ・ダンプをトリガーする別の方法がある場合、<code>shareProcessNamespace</code>を<code>true</code>に設定せずに、次の手法を使用できます。</span></p>

</div>

<h3 id="_create_an_ephemeral_container"><span class="merged" id="all.1IQWDh" title="原文 : Create an Ephemeral Container">エフェメラル・コンテナの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.O0cyP.spl1" title="原文 : Let’s say we have a Coherence cluster deployed named test-cluster in a namespace named coherence-test.">たとえば、<code>coherence-test</code>という名前のネームスペースに<code>test-cluster</code>という名前のCoherenceクラスタがデプロイされているとします。</span> <span class="merged" id="all.O0cyP.spl2" title="原文 : There will be a number of Pods created for this deployment, named test-cluster-0, test-cluster-1 and so on.">このデプロイメントには、<code>test-cluster-0</code>、<code>test-cluster-1</code>など、多数のポッドが作成されます。</span> <span class="merged" id="all.O0cyP.spl3" title="原文 : For this example we will obtain a heap dump from Pod test-cluster-1.">この例では、Pod <code>test-cluster-1</code>からヒープ・ダンプを取得します。</span> </p>

<p><span class="merged" id="all.Nv1tU.spl1" title="原文 : The purpose of using an ephemeral container is because the Coherence container we are running does not contain any of the tools and programs we require for debugging, e.g. jps, jcmd etc. The ephemeral container we run obviously needs to have all the required tools.">エフェメラル・コンテナを使用する目的は、実行中のCoherenceコンテナにデバッグに必要なツールおよびプログラムが含まれていないためです(例、<code>jps</code>、<code>jcmd</code>など)。私たちが実行するエフェメラル・コンテナには、必要なすべてのツールが必要です。</span> <span class="merged" id="all.Nv1tU.spl2" title="原文 : You could create a custom image with what you need in it, but for this example we will use the openjdk:11 image, as it has a full JDK and other tools we need in it.">必要なものを使用してカスタム・イメージを作成できますが、この例では、必要な完全なJDKおよびその他のツールがあるため、<code>openjdk:11</code>イメージを使用します。</span> <span class="merged" id="all.Nv1tU.spl3" title="原文 : You should obviously use a JDK version that matches the version in the Coherence container.">Coherenceコンテナのバージョンに一致するJDKバージョンを明らかに使用してください。</span> </p>

<p><span class="merged" id="all.4fEns.spl1" title="原文 : We can use the kubectl debug command that can be used to create an ephemeral containers.">一時コンテナの作成に使用できる<code>kubectl debug</code>コマンドを使用できます。</span> <span class="merged" id="all.4fEns.spl2" title="原文 : For our purposes we cannot use this command as we will require volume mounts to share storage between the ephemeral container and the Coherence container so that the ephemeral container can see the heap dump file.">エフェメラル・コンテナとCoherenceコンテナ間でストレージを共有するためにボリューム・マウントが必要なため、このコマンドを使用できません。これにより、エフェメラル・コンテナはヒープ・ダンプ・ファイルを参照できます。</span> </p>

<p><span class="merged" id="all.eVDRt.spl1" title="原文 : Instead of the kubectl debug command we can create ephemeral containers using the kubectl --raw API."><code>kubectl debug</code>コマンドのかわりに、<code>kubectl --raw</code> APIを使用して一時コンテナを作成できます。</span> <span class="merged" id="all.eVDRt.spl2" title="原文 : Ephemeral containers are a sub-resource of the Pod API.">エフェメラル・コンテナは、ポッドAPIのサブリソースです。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2zdNsb.spl1" title="原文 : First obtain the current ephemeral containers sub-resource for the Pod.">最初に、ポッドの現在の一時コンテナ・サブリソースを取得します。</span> <span class="merged" id="all.2zdNsb.spl2" title="原文 : We do this using the kubectl get --raw command with the URL path in the format /api/v1/namespaces/&lt;namespace&gt;&gt;/pods/&lt;pod&gt;/ephemeralcontainers, where &lt;namespace&gt; is the namespace that the Pod is deployed into and &lt;pod&gt; is the name of the Pod.">これは、<code>kubectl get --raw</code>コマンドとURLパスを<code>/api/v1/namespaces/&lt;namespace>>/pods/&lt;pod>/ephemeralcontainers</code>という形式で使用します。<code>&lt;namespace></code>は、ポッドがデプロイされるネームスペース、<code>&lt;pod></code>はポッドの名前です。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.3okKKl" title="原文 : So in our example the command would be:">そのため、この例ではコマンドは次のようになります:</span></p>

<markup
lang="bash"

>kubectl get --raw /api/v1/namespaces/coherence-test/pods/test-cluster-1/ephemeralcontainers</markup>

<p><span class="merged" id="all.1j7fHU" title="原文 : Which will output json similar to this, which we will save to a file named ec.json:">これと同様のjsonを出力し、<code>ec.json</code>という名前のファイルに保存します:</span></p>

<markup
lang="json"
title="ec.json"
>{
  "kind": "EphemeralContainers",
  "apiVersion": "v1",
  "metadata": {
    "name": "test-cluster-1",
    "namespace": "coherence-test",
    "selfLink": "/api/v1/namespaces/coherence-test/pods/test-cluster-1/ephemeralcontainers",
    "uid": "731ca9a9-332f-4999-821d-adfea2e1d2d4",
    "resourceVersion": "24921",
    "creationTimestamp": "2021-03-12T10:41:35Z"
  },
  "ephemeralContainers": []
}</markup>

<p><span class="merged" id="all.2chYDk" title="原文 : The &quot;ephemeralContainers&quot; field is an empty array as we have not created any previous containers.">前のコンテナを作成していないため、<code>"ephemeralContainers"</code>フィールドは空の配列です。</span></p>

<p><span class="merged" id="all.RVFLI.spl1" title="原文 : We now need to edit this yaml to define the ephemeral container we want to create.">次に、このyamlを編集して、作成する一時的なコンテナを定義する必要があります。</span> <span class="merged" id="all.RVFLI.spl2" title="原文 : The Pod created by the Operator contains an empty directory volume with a volume mount at /coherence-operator/jvm, which is where the JVM is configured to dump debug information, such as heap dumps.">オペレータによって作成されたポッドには、ボリュームが<code>/coherence-operator/jvm</code>にマウントされた空のディレクトリ・ボリュームが含まれています。このディレクトリ・ボリュームは、ヒープ・ダンプなどのデバッグ情報をダンプするようにJVMが構成されています。</span> <span class="merged" id="all.RVFLI.spl3" title="原文 : We will create an ephemeral container with the same mount so that the /coherence-operator/jvm directory will be shared between the Coherence container and the ephemeral container."><code>/coherence-operator/jvm</code>ディレクトリをCoherenceコンテナとエフェメラル・コンテナ間で共有できるように、同じマウントで一時コンテナを作成します。</span> </p>

<p><span class="merged" id="all.1uMuJM.spl1" title="原文 : Another thing to note is that the default entrypoint in the openjdk:11 image we are using in this example is JShell.">もう1つの点は、この例で使用している<code>openjdk:11</code>イメージのデフォルト・エントリ・ポイントがJShellであることです。</span> <span class="merged" id="all.1uMuJM.spl2" title="原文 : This is obviously not what we want, so we will make sure we specify /bin/sh as the entry point as we want a command line shell.">これは明らかに目的ではないため、コマンドライン・シェルが必要なときに、エントリ・ポイントとして<code>/bin/sh</code>を指定することを確認します。</span> </p>

<p><span class="merged" id="all.BWj2o" title="原文 : Our edited ec.json file looks like this:">編集した<code>ec.json</code>ファイルは次のようになります:</span></p>

<markup
lang="json"
title="ec.json"
>{
  "kind": "EphemeralContainers",
  "apiVersion": "v1",
  "metadata": {
    "name": "test-cluster-1",
    "namespace": "coherence-test",
    "selfLink": "/api/v1/namespaces/coherence-test/pods/test-cluster-1/ephemeralcontainers",
    "uid": "731ca9a9-332f-4999-821d-adfea2e1d2d4",
    "resourceVersion": "24921",
    "creationTimestamp": "2021-03-12T10:41:35Z"
  },
  "ephemeralContainers": [
    {
      "name": "debug",                                 <span class="conum" data-value="1" />
      "image": "openjdk:11",                           <span class="conum" data-value="2" />
      "command": [
          "bin/sh"                                     <span class="conum" data-value="3" />
      ],
      "imagePullPolicy": "IfNotPresent",               <span class="conum" data-value="4" />
      "terminationMessagePolicy":"File",
      "stdin": true,                                   <span class="conum" data-value="5" />
      "tty": true,
      "volumeMounts": [
          {
              "mountPath": "/coherence-operator/jvm",  <span class="conum" data-value="6" />
              "name": "jvm"
          }
      ]
    }
  ]
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.xGAzW.spl1" title="原文 : We add an ephemeral container named debug."><code>debug</code>という名前の一時コンテナを追加します。</span> <span class="merged" id="all.xGAzW.spl2" title="原文 : The name can be anything as long as it is unique in the Pod.">この名前は、ポッド内で一意であるかぎり、何でも指定できます。</span> </li>
<li data-value="2"><span class="merged" id="all.3R0hPJ" title="原文 : We specify that the image used for the container is openjdk:11">コンテナに使用されるイメージが<code>openjdk:11</code>であることを指定</span></li>
<li data-value="3"><span class="merged" id="all.3msD7J" title="原文 : Specify /bin/sh as the container entry point so that we get a command line shell">コマンドライン・シェルを取得するように、コンテナ・エントリ・ポイントとして<code>/bin/sh</code>を指定</span></li>
<li data-value="4"><span class="merged" id="all.31nzWB" title="原文 : We must specify an image pull policy">イメージ・プル・ポリシーを指定する必要があります</span></li>
<li data-value="5"><span class="merged" id="all.1xZnjG" title="原文 : We want an interactive container, so we specify stdin and tty">対話型コンテナが必要であるため、<code>stdin</code>および<code>tty</code>を指定</span></li>
<li data-value="6"><span class="merged" id="all.3b2Q8I" title="原文 : We create the same volume mount to /coherence-operator/jvm that the Coherence container has.">Coherenceコンテナの<code>/coherence-operator/jvm</code>と同じボリューム・マウントを作成します。</span></li>
</ul>
<p><span class="merged" id="all.3vNSFa" title="原文 : We can now re-apply the json to add the new ephemeral container using the kubectl replace --raw command to the same URL path we used for the get command above, this time using -f ec.json to specify the json we want to replace.">jsonを再適用して、<code>kubectl replace --raw</code>コマンドを使用して、前述の<code>get</code>コマンドに使用したのと同じURLパスに、<code>-f ec.json</code>を使用して置換するjsonを指定することで、新しい一時コンテナを追加できるようになりました。</span></p>

<markup
lang="bash"

>kubectl replace --raw /api/v1/namespaces/coherence-test/pods/test-cluster-1/ephemeralcontainers -f ec.json</markup>

<p><span class="merged" id="all.Tcr9" title="原文 : After executing the above command the ephemeral container should have been created, we can now attach to it.">前述のコマンドを実行した後、エフェメラル・コンテナが作成されている必要があるため、これにアタッチできます。</span></p>

</div>

<h3 id="_attach_to_the_ephemeral_container"><span class="merged" id="all.2oBmc4" title="原文 : Attach to the Ephemeral Container">エフェメラル・コンテナにアタッチ</span></h3>
<div class="section">
<p><span class="merged" id="all.34s3wO.spl1" title="原文 : We now have an ephemeral container named debug in the Pod test-cluster-1.">これで、Pod <code>test-cluster-1</code>に<code>debug</code>という名前のエフェメラル・コンテナがあります。</span> <span class="merged" id="all.34s3wO.spl2" title="原文 : We need to attach to the container so that we can create the heap dump.">ヒープ・ダンプを作成できるように、コンテナにアタッチする必要があります。</span> </p>

<markup
lang="bash"

>kubectl attach test-cluster-1 -c debug -it -n coherence-test</markup>

<p><span class="merged" id="all.38LFbs.spl1" title="原文 : The command above will attach an interactive (-it) session to the debug container (specified with -c debug) in Pod test-cluster-1, in the namespace coherence-test.">前述のコマンドは、ネームスペース<code>coherence-test</code>のポッド<code>test-cluster-1</code>の<code>debug</code>コンテナ(<code>-c debug</code>で指定)に対話型(<code>-it</code>)セッションをアタッチします。</span> <span class="merged" id="all.38LFbs.spl2" title="原文 : Displaying something like this:">次のように表示されます:</span> </p>

<markup
lang="bash"

>If you don't see a command prompt, try pressing enter.

#</markup>

</div>

<h3 id="_trigger_the_heap_dump"><span class="merged" id="all.3nrM8G" title="原文 : Trigger the Heap Dump">ヒープ・ダンプのトリガー</span></h3>
<div class="section">
<p><span class="merged" id="all.3n9Lcb" title="原文 : We can now generate the heap dump for the Coherence process using jcmd, but first we need to find its PID using jps."><code>jcmd</code>を使用してCoherenceプロセスのヒープ・ダンプを生成できるようになりましたが、まず<code>jps</code>を使用してそのPIDを見つける必要があります。</span></p>

<markup
lang="bash"

>jps -l</markup>

<p><span class="merged" id="all.1kwJNE" title="原文 : Which will display something like this:">次のように表示されます:</span></p>

<markup
lang="bash"

>117 jdk.jcmd/sun.tools.jps.Jps
55 com.oracle.coherence.k8s.Main</markup>

<p><span class="merged" id="all.4VAHSO.spl1" title="原文 : The main class run by the Operator is com.oracle.coherence.k8s.Main so the PID of the Coherence process is 55.">オペレータによって実行されるメイン・クラスは<code>com.oracle.coherence.k8s.Main</code>であるため、CoherenceプロセスのPIDは<code>55</code>です。</span> <span class="merged" id="all.4VAHSO.spl2" title="原文 : We can now use jcmd to generate the heap dump."><code>jcmd</code>を使用してヒープ・ダンプを生成できるようになりました。</span> <span class="merged" id="all.4VAHSO.spl3" title="原文 : We need to make sure that the heap dump is created in the /coherence-operator/jvm/ directory, as this is shared between both containers.">これは両方のコンテナ間で共有されるため、ヒープ・ダンプが<code>/coherence-operator/jvm/</code>ディレクトリに作成されていることを確認する必要があります。</span> </p>

<markup
lang="bash"

>jcmd 55 GC.heap_dump /coherence-operator/jvm/heap-dump.hprof</markup>

<p><span class="merged" id="all.47vVP7.spl1" title="原文 : After running the command above, we will have a heap dump file that we can access from the ephemeral Pod.">前述のコマンドを実行すると、一時<code>Pod</code>からアクセスできるヒープ・ダンプ・ファイルが作成されます。</span> <span class="merged" id="all.47vVP7.spl2" title="原文 : We have a number of choices about how to get the file out of the Pod and somewhere that we can analyze it.">ポッドからファイルを取得する方法と、それを分析できる場所には、いくつかの選択肢があります。</span> <span class="merged" id="all.47vVP7.spl3" title="原文 : We could use sftp to ship it somewhere, or some tools to copy it to cloud storage or just simply use kubectl cp to copy it."><code>sftp</code>を使用して、どこか、または一部のツールを使用してクラウド・ストレージにコピーするか、単に<code>kubectl cp</code>を使用してコピーできます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.19sWFO" title="原文 : Do not exit out of the ephemeral container session until you have copied the heap dump.">ヒープ・ダンプをコピーするまで、一時コンテナ・セッションを終了しないでください。</span></p>
</div>
<p><span class="merged" id="all.1RF2G2.spl1" title="原文 : The kubectl cp command is in the form kubectl cp &lt;namespace&gt;/&lt;pod&gt;/&lt;file&gt; &lt;local-file&gt; -c &lt;container&gt;."><code>kubectl cp</code>コマンドは、<code>kubectl cp &lt;namespace>/&lt;pod>/&lt;file> &lt;local-file> -c &lt;container></code>の形式です。</span> <span class="merged" id="all.1RF2G2.spl2" title="原文 : So to use kubectl cp we can execute a command like the following:">したがって、<code>kubectl cp</code>を使用するには、次のようなコマンドを実行できます:</span> </p>

<markup
lang="bash"

>kubectl cp coherence-test/test-cluster-1:/coherence-operator/jvm/heap-dump.hprof \
    $(pwd)/heap-dump.hprof -c debug</markup>

<p><span class="merged" id="all.9Chdj.spl1" title="原文 : We will now have a file called heap-dump.hprof in the current directory.">現在のディレクトリに<code>heap-dump.hprof</code>というファイルがあります。</span> <span class="merged" id="all.9Chdj.spl2" title="原文 : We can now exit out of the ephemeral container.">これで、エフェメラル・コンテナを終了できます。</span> </p>

</div>
</div>
</doc-view>
