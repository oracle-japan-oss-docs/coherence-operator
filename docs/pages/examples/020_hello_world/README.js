<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_a_hello_world_operator_example"><span class="merged" id="all.2OsDGj" title="原文 : A &quot;Hello World&quot; Operator Example">"Hello World"オペレータの例</span></h2>
<div class="section">
<p><span class="merged" id="all.3ymqyI" title="原文 : This is the most basic example of how to deploy a simple Coherence cluster to Kubernetes using the Coherence Operator.">これは、Coherence Operatorを使用して単純なCoherenceクラスタをKubernetesにデプロイする方法の最も基本的な例です。</span></p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.3"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.1acSMu" title="原文 :  The complete source code for this example is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />この例の完全なソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/020_hello_world" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>

<h3 id="_install_the_operator"><span class="merged" id="all.3Uw9Iy" title="原文 : Install the Operator">オペレータのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.k0zQp.spl1" title="原文 : If you have not already done so, you need to install the Coherence Operator.">まだインストールしていない場合は、Coherence Operatorをインストールする必要があります。</span> <span class="merged" id="all.k0zQp.spl2" title="原文 : There are a few simple ways to do this as described in the Installation Guide"><router-link to="/docs/installation/001_installation">「インストール・ガイド」</router-link>で説明するように、いくつかの簡単な方法があります</span> </p>

</div>

<h3 id="_a_default_coherence_cluster"><span class="merged" id="all.yIIY7" title="原文 : A Default Coherence Cluster">デフォルトCoherenceクラスタ</span></h3>
<div class="section">
<p><span class="merged" id="all.1AhUol" title="原文 : All the fields in the Coherence CRD spec are optional, the Operator will apply default values, if required, for fields not specified.">Coherence CRD仕様のすべてのフィールドはオプションであり、オペレータでは、指定されていないフィールドにデフォルト値(必要な場合)が適用されます。</span></p>

<p><span class="merged" id="all.22n3Qy" title="原文 : For example, this is the minimum required yaml to run a Coherence cluster:">たとえば、Coherenceクラスタを実行するために必要な最小限のyamlです:</span></p>

<markup
lang="yaml"
title="default-coherence.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test</markup>

<p><span class="merged" id="all.1L49Qc" title="原文 : The yaml above could be installed into Kubernetes using kubectl:">前述のyamlは、kubectlを使用してKubernetesにインストールできます:</span></p>

<markup
lang="bash"

>kubectl create -f default-coherence.yaml</markup>

<p><span class="merged" id="all.2JUQoc" title="原文 : The command above will create a Coherence cluster named test in the default Kubernetes namespace.">前述のコマンドでは、<code>default</code> Kubernetesネームスペースに<code>test</code>という名前のCoherenceクラスタが作成されます。</span></p>

<p><span class="merged" id="all.4AEABY" title="原文 : Because no spec was specified in the yaml, the Operator will use its defaults for certain fields.">yamlに<code>spec</code>が指定されていないため、オペレータでは特定のフィールドにデフォルトが使用されます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.27e37J" title="原文 : The replicas field, which controls the number of Pods in the cluster, will default to 3.">クラスタ内のポッド数を制御する<code>replicas</code>フィールドは、デフォルトで<code>3</code>に設定されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.393QkY" title="原文 : The image used to run Coherence will be the default for this version of the Operator, typically this is the latest Coherence CE image released at the time the Operator version was released.">Coherenceの実行に使用されるイメージは、このバージョンのOperatorのデフォルトになります。通常、これはOperatorバージョンがリリースされたときにリリースされた最新のCoherence CEイメージです。</span></p>

</li>
<li>
<p><span class="merged" id="all.1wOa1j" title="原文 : No ports will be exposed on the container, and no additional services will be created.">コンテナにポートは公開されず、追加のサービスは作成されません。</span></p>

</li>
</ul>
<p><span class="merged" id="all.1cwfMn" title="原文 : We can list the resources that have been created by the Operator.">オペレータによって作成されたリソースをリストできます。</span></p>

<markup
lang="bash"

>kubectl get all</markup>

<p><span class="merged" id="all.4ayzey" title="原文 : Which should display something like this:">次のように表示されます:</span></p>

<markup
lang="bash"

>NAME         READY   STATUS    RESTARTS   AGE
pod/test-0   1/1     Running   0          81s
pod/test-1   1/1     Running   0          81s
pod/test-2   1/1     Running   0          81s

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/test-sts     ClusterIP   None         &lt;none&gt;        7/TCP     81s
service/test-wka     ClusterIP   None         &lt;none&gt;        7/TCP     81s

NAME                    READY   AGE
statefulset.apps/test   3/3     81s</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2ucgK1" title="原文 : We can see that the Operator has created a StatefulSet, with three Pods and there are two Services.">オペレータが<code>StatefulSet</code>を作成し、<code>Pods</code>が3つあり、<code>Services</code>が2つあることがわかります。</span></p>

</li>
<li>
<p><span class="merged" id="all.FlXMs" title="原文 : The test-sts service is the headless service required for the StatefulSet."><code>test-sts</code>サービスは、<code>StatefulSet</code>に必要なヘッドレス・サービスです。</span></p>

</li>
<li>
<p><span class="merged" id="all.3GC3Em" title="原文 : The test-wka service is the headless service that Coherence will use for well known address cluster discovery."><code>test-wka</code>サービスは、Coherenceが既知のアドレス・クラスタ検出に使用するヘッドレス・サービスです。</span></p>

</li>
</ul>
<p><span class="merged" id="all.43NW64" title="原文 : We can now undeploy the cluster:">クラスタをアンデプロイできるようになりました:</span></p>

<markup
lang="bash"

>kubectl delete -f default-coherence.yaml</markup>

</div>

<h3 id="_deploy_the_simple_server_image"><span class="merged" id="all.3L5qRp" title="原文 : Deploy the Simple Server Image">簡易サーバー・イメージのデプロイ</span></h3>
<div class="section">
<p><span class="merged" id="all.4WmYpp.spl1" title="原文 : We can deploy a specific image by setting the spec.image field in the yaml.">yamlの<code>spec.image</code>フィールドを設定することで、特定のイメージをデプロイできます。</span> <span class="merged" id="all.4WmYpp.spl2" title="原文 : In this example we’ll deploy the simple-coherence:1.0.0 image built in the Build a Coherence Server Image example.">この例では、<router-link to="/examples/015_simple_image/README">「Coherenceサーバー・イメージのビルド」</router-link>の例で作成した<code>simple-coherence:1.0.0</code>イメージをデプロイします。</span> </p>

<p><span class="merged" id="all.143w3o" title="原文 : To deploy a specific image we just need to set the spec.image field.">特定のイメージをデプロイするには、<code>spec.image</code>フィールドのみを設定する必要があります。</span></p>

<markup
lang="yaml"
title="simple.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: simple
spec:
  image: simple-coherence:1.0.0  <span class="conum" data-value="1" />
  replicas: 6                    <span class="conum" data-value="2" />
  ports:
    - name: extend               <span class="conum" data-value="3" />
      port: 20000</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2ChEhm" title="原文 : We have set the image to use to the Build a Coherence Server Image example simple-coherence:1.0.0.">使用するイメージを<router-link to="/examples/015_simple_image/README">「Coherenceサーバー・イメージのビルド」</router-link>例<code>simple-coherence:1.0.0</code>に設定しました。</span></li>
<li data-value="2"><span class="merged" id="all.1tLNTo" title="原文 : We have set the replicas field to 6, so this time there should only be six Pods."><code>replicas</code>フィールドを<code>6</code>に設定したため、今回は6つのポッドのみにする必要があります。</span></li>
<li data-value="3"><span class="merged" id="all.381Xy.spl1" title="原文 : The simple image starts a Coherence Extend proxy on port 20000, so we expose this port in the Coherence spec.">単純なイメージでは、ポート<code>20000</code>でCoherence Extendプロキシが起動されるため、このポートは<code>Coherence</code>仕様で公開されます。</span> <span class="merged" id="all.381Xy.spl2" title="原文 : The Operator will then expose the port on the Coherence container and create a Service for the port.">次に、オペレータはCoherenceコンテナのポートを公開し、ポートのサービスを作成します。</span> </li>
</ul>
<p><span class="merged" id="all.3EZVsN" title="原文 : We can deploy the simple cluster into Kubernetes using kubectl:">kubectlを使用して、単純なクラスタをKubernetesにデプロイできます:</span></p>

<markup
lang="bash"

>kubectl create -f simple.yaml</markup>

<p><span class="merged" id="all.3oLh6U" title="原文 : Now list the resources the Operator has created.">次に、オペレータが作成したリソースをリストします。</span></p>

<markup
lang="bash"

>kubectl get all</markup>

<p><span class="merged" id="all.vmvh2" title="原文 : Which this time should look something like this:">この時間は次のようになります:</span></p>

<markup
lang="bash"

>NAME         READY   STATUS    RESTARTS   AGE
pod/test-0   1/1     Running   0          4m49s
pod/test-1   1/1     Running   0          4m49s
pod/test-2   1/1     Running   0          4m49s
pod/test-3   1/1     Running   0          4m49s
pod/test-4   1/1     Running   0          4m49s
pod/test-5   1/1     Running   0          4m49s

NAME                  TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
service/kubernetes    ClusterIP   10.96.0.1        &lt;none&gt;        443/TCP     164d
service/test-extend   ClusterIP   10.108.166.193   &lt;none&gt;        20000/TCP   4m49s
service/test-sts      ClusterIP   None             &lt;none&gt;        7/TCP       4m49s
service/test-wka      ClusterIP   None             &lt;none&gt;        7/TCP       4m49s

NAME                    READY   AGE
statefulset.apps/test   6/6     4m49s</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2XLV8V" title="原文 : We can see that the Operator has created a StatefulSet, with six Pods and there are three Services.">オペレータが<code>StatefulSet</code>を作成し、<code>Pods</code>が6つあり、<code>Services</code>が3つあることがわかります。</span></p>

</li>
<li>
<p><span class="merged" id="all.3bqd0I" title="原文 : The simple-sts service is the headless service required for the StatefulSet."><code>simple-sts</code>サービスは、<code>StatefulSet</code>に必要なヘッドレス・サービスです。</span></p>

</li>
<li>
<p><span class="merged" id="all.Buqoc" title="原文 : The simple-wka service is the headless service that Coherence will use for well known address cluster discovery."><code>simple-wka</code>サービスは、Coherenceが既知のアドレス・クラスタ検出に使用するヘッドレス・サービスです。</span></p>

</li>
<li>
<p><span class="merged" id="all.3ywp16" title="原文 : The simple-extend service is the service that exposes the Extend port 20000, and could be used by Extend clients to connect to the cluster."><code>simple-extend</code>サービスは、Extendポート<code>20000</code>を公開するサービスであり、Extendクライアントがクラスタに接続するために使用できます。</span></p>

</li>
</ul>
<p><span class="merged" id="all.46b72G" title="原文 : We can now delete the simple cluster:">これで、単純なクラスタを削除できます:</span></p>

<markup
lang="bash"

>kubectl delete -f simple.yaml</markup>

</div>
</div>
</doc-view>
