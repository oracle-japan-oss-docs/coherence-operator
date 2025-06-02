<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coherence_operator_deployment_example"><span class="merged" id="all.M4S1n" title="原文 : Coherence Operator Deployment Example">Coherence Operatorデプロイメントの例</span></h2>
<div class="section">
<p><span class="merged" id="all.3M57wJ" title="原文 : This example showcases how to deploy Coherence applications using the Coherence Operator.">この例では、Coherence Operatorを使用してCoherenceアプリケーションをデプロイする方法を示します。</span></p>

<p><span class="merged" id="all.2NUJzS" title="原文 : This example shows how to use the Kubernetes Horizontal Pod Autoscaler to scale Coherence clusters.">この例では、Kubernetes Horizontal Pod Autoscalerを使用してCoherenceクラスタをスケーリングする方法を示します。</span></p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.4"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.3Xdfnt" title="原文 :  The complete source code for this example is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />この例の完全なソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/021_deployment" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>
<p><span class="merged" id="all.2aS5db" title="原文 : The following scenarios are covered:">次のシナリオについて説明します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1wJHmB" title="原文 : Prerequisites"><router-link @click.native="this.scrollFix('#pre')" to="#pre">事前設定</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3bRBBu" title="原文 : Create the example namespace"><router-link @click.native="this.scrollFix('#create-the-example-namespace')" to="#create-the-example-namespace">サンプルのネームスペースの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1OjjsK" title="原文 : Clone the GitHub repository"><router-link @click.native="this.scrollFix('#clone-the-github-repository')" to="#clone-the-github-repository">GitHubリポジトリのクローニング</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.OLysA" title="原文 : Install the Coherence Operator"><router-link @click.native="this.scrollFix('#install-operator')" to="#install-operator">Coherence Operatorのインストール</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.1UVljr" title="原文 : Run the Examples"><router-link @click.native="this.scrollFix('#examples')" to="#examples">例の実行</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.30RsSO" title="原文 : Example 1 - Coherence cluster only"><router-link @click.native="this.scrollFix('#ex1')" to="#ex1">例1- Coherenceクラスタのみ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4L5qeS" title="原文 : Example 2 - Adding a Proxy tier"><router-link @click.native="this.scrollFix('#ex2')" to="#ex2">例2- プロキシ層の追加</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4Trtx2" title="原文 : Example 3 - Adding a User application tier"><router-link @click.native="this.scrollFix('#ex3')" to="#ex3">例3- ユーザー・アプリケーション層の追加</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3esnN" title="原文 : Example 4 - Enabling Persistence"><router-link @click.native="this.scrollFix('#ex4')" to="#ex4">例4- 永続性の有効化</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.fApWm" title="原文 : View Cluster Metrics using Prometheus and Grafana"><router-link @click.native="this.scrollFix('#metrics')" to="#metrics">PrometheusおよびGrafanaを使用したクラスタ・メトリクスの表示</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.2ywvhQ" title="原文 : Cleaning Up"><router-link @click.native="this.scrollFix('#cleaning-up')" to="#cleaning-up">クリーン・アップしています</router-link></span></p>

</li>
</ul>
<p><span class="merged" id="all.2GGOkf" title="原文 : After the initial installation of the Coherence cluster, the following examples build on the previous ones by issuing a kubectl apply to modify the installation adding additional tiers.">Coherenceクラスタの初期インストール後、次の例は、<code>kubectl apply</code>を発行して、追加層を追加するインストールを変更することによって、前のクラスタ上にビルドされます。</span></p>

<p><span class="merged" id="all.xYaeZ" title="原文 : You can use kubectl create for any of the examples to install that one directly."><code>kubectl create</code>は、その例を直接インストールするために使用できます。</span></p>

</div>

<h2 id="pre"><span class="merged" id="all.2LZvWc.2"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.2o7i0D" title="原文 : Ensure you have the following software installed:">次のソフトウェアがインストールされていることを確認します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2QWpOS" title="原文 : Java 11+ JDK either [OpenJDK](https://adoptopenjdk.net/) or [Oracle JDK](https://www.oracle.com/java/technologies/javase-downloads.html)">Java 11+ JDK [OpenJDK](<a href="https://adoptopenjdk.net/" id="" target="_blank" >https://adoptopenjdk.net/</a>)または[Oracle JDK](<a href="https://www.oracle.com/java/technologies/javase-downloads.html" id="" target="_blank" >https://www.oracle.com/java/technologies/javase-downloads.html</a>)]</span></p>

</li>
<li>
<p><span class="merged" id="all.4P4fA3" title="原文 : A suitable container platform such as Podman or Docker.">PodmanやDockerなどの適切なコンテナ・プラットフォーム。</span></p>

</li>
<li>
<p><span class="merged" id="all.1UOmE7" title="原文 : Access to a Kubernetes cluster running a currently supported Kubernetes version.">現在サポートされているKubernetesバージョンを実行しているKubernetesクラスタにアクセスします。</span></p>

</li>
<li>
<p><span class="merged" id="all.4VUWSD" title="原文 : kubectl version matching your Kubernetes cluster.">Kubernetesクラスタに一致する<a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" id="" target="_blank" >kubectl</a>バージョン。</span></p>

</li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4PWW76.spl1" title="原文 : This example requires Java 11+ because it creates a Helidon web application and Helidon requires Java 11+.">この例では、Helidon webアプリケーションが作成され、HelidonにはJava 11+が必要であるため、Java 11+が必要です。</span> <span class="merged" id="all.4PWW76.spl2" title="原文 : Coherence and running Coherence in Kubernetes only requires Java 8+.">Coherenceの実行およびKubernetesでのCoherenceの実行には、Java 8+のみが必要です。</span> </p>
</div>
</div>

<h2 id="create-the-example-namespace"><span class="merged" id="all.3ezoGY" title="原文 : Create the example namespace">サンプルのネームスペースの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.4Le10Q.spl1" title="原文 : You need to create the namespace for the first time to run any of the examples.">すべての例を実行するには、最初にネームスペースを作成する必要があります。</span> <span class="merged" id="all.4Le10Q.spl2" title="原文 : Create your target namespace:">ターゲット・ネームスペースを作成します:</span> </p>

<markup
lang="bash"

>kubectl create namespace coherence-example

namespace/coherence-example created</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.21"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.1kBG9f.spl1" title="原文 : In the examples, a Kubernetes namespace called coherence-example is used.">この例では、<code>coherence-example</code>というKubernetesネームスペースが使用されます。</span> <span class="merged" id="all.1kBG9f.spl2" title="原文 : If you want to change this namespace, ensure that you change any references to this namespace to match your selected namespace when running the examples.">このネームスペースを変更する場合は、例の実行時に、選択したネームスペースと一致するようにこのネームスペースへの参照を変更してください。</span> </p>
</p>
</div>
</div>

<h2 id="clone-the-github-repository"><span class="merged" id="all.3cehWR" title="原文 : Clone the GitHub repository">GitHubリポジトリのクローニング</span></h2>
<div class="section">
<p><span class="merged" id="all.Us2EH" title="原文 : These examples exist in the examples/021_deployment directory in the Coherence Operator GitHub repository.">これらの例は、<a href="https://github.com/oracle/coherence-operator" id="" target="_blank" >「Coherence Operator GitHubリポジトリ」</a>の<code>examples/021_deployment</code>ディレクトリにあります。</span></p>

<p><span class="merged" id="all.3uz3bT"  title="原文:: Clone the repository:">リポジトリをクローニングします:</span></p>

<markup
lang="bash"

>git clone https://github.com/oracle/coherence-operator

cd coherence-operator/examples/021_deployment</markup>

<p><span class="merged" id="all.2nZ1TP" title="原文 : Ensure you have Docker running and JDK 11+ build environment set and use the following command from the deployment example directory to build the project and associated Docker image:">Dockerが実行され、JDK 11+ビルド環境が設定されていることを確認し、デプロイメント例ディレクトリから次のコマンドを使用して、プロジェクトおよび関連するDockerイメージをビルドします:</span></p>

<markup
lang="bash"

>./mvnw package jib:dockerBuild</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.22"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.uy3xO" title="原文 : If you are running behind a corporate proxy and receive the following message building the Docker image: Connect to gcr.io:443 [gcr.io/172.217.212.82] failed: connect timed out you must modify the build command to add the proxy hosts and ports to be used by the jib-maven-plugin as shown below:">企業プロキシの背後で実行していて、Dockerイメージを作成する次のメッセージを受信した場合: <code>Connect to gcr.io:443 [gcr.io/172.217.212.82] failed: connect timed out</code>ビルド・コマンドを変更して、次に示すように、<code>jib-maven-plugin</code>で使用されるプロキシ・ホストおよびポートを追加する必要があります:</span></p>

<markup
lang="bash"

>mvn package jib:dockerBuild -Dhttps.proxyHost=host \
    -Dhttps.proxyPort=80 -Dhttp.proxyHost=host -Dhttp.proxyPort=80</markup>
</p>
</div>
<p><span class="merged" id="all.yL8wN" title="原文 : This will result in the following Docker image being created which contains the configuration and server-side artifacts to be use by all deployments.">これにより、すべてのデプロイメントで使用される構成およびサーバー側のアーティファクトを含む次のDockerイメージが作成されます。</span></p>

<markup


>deployment-example:1.0.0</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.23"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.12z1wf.spl1" title="原文 : If you are running against a remote Kubernetes cluster, you need to tag and push the Docker image to your repository accessible to that cluster.">リモートのKubernetesクラスタに対して実行している場合は、Dockerイメージにタグ付けして、そのクラスタからアクセス可能なリポジトリにプッシュする必要があります。</span> <span class="merged" id="all.12z1wf.spl2" title="原文 : You also need to prefix the image name in the yaml files below.">また、次の<code>yaml</code>ファイルにイメージ名のプレフィクスを付ける必要があります。</span> </p>
</p>
</div>
</div>

<h2 id="install-operator"><span class="merged" id="all.LO8kI" title="原文 : Install the Coherence Operator">Coherence Operatorのインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.2PnTIE" title="原文 : Install the Coherence Operator using your preferred method in the Operator Installation Guide"><a href="https://oracle.github.io/coherence-operator/docs/latest/#/docs/installation/001_installation" id="" target="_blank" >「インストール・ガイド」</a>オペレータの優先メソッドを使用したCoherence Operatorのインストール</span></p>

<p><span class="merged" id="all.4aoXCL" title="原文 : Confirm the operator is running, for example if the operator is installed into the coherence-example namespace:">オペレータが<code>coherence-example</code>ネームスペースにインストールされている場合など、オペレータが実行中であることを確認します:</span></p>

<markup
lang="bash"

>kubectl get pods -n coherence-example

NAME                                                     READY   STATUS    RESTARTS   AGE
coherence-operator-controller-manager-74d49cd9f9-sgzjr   1/1     Running   1          27s</markup>

</div>

<h2 id="examples"><span class="merged" id="all.4dY8oM" title="原文 : Run the Examples">例の実行</span></h2>
<div class="section">
<p><span class="merged" id="all.4WohOh" title="原文 : Ensure you are in the examples/021_deployment directory to run the following commands."><code>examples/021_deployment</code>ディレクトリで次のコマンドを実行していることを確認します。</span></p>


<h3 id="ex1"><span class="merged" id="all.4XJsVx" title="原文 : Example 1 - Coherence cluster only">例1 - Coherenceクラスタのみ</span></h3>
<div class="section">
<p><span class="merged" id="all.mexpV" title="原文 : The first example uses the yaml file src/main/yaml/example-cluster.yaml, which defines a single tier storage which will store cluster data.">最初の例では、yamlファイル<code>src/main/yaml/example-cluster.yaml</code>を使用します。このファイルは、クラスタ・データを格納する単一の層<code>storage</code>を定義します。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.Qp3mW" title="原文 : If you have pushed your Docker image to a remote repository, ensure you update the above file to prefix the image.">Dockerイメージをリモート・リポジトリにプッシュした場合は、前述のファイルを更新してイメージのプレフィクスを付けてください。</span></p>
</div>

<h4 id="_1_install_the_coherence_cluster_storage_tier"><span class="merged" id="all.3VnXdw" title="原文 : 1. Install the Coherence cluster storage tier">1. Coherenceクラスタの<code>storage</code>層のインストール</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl -n coherence-example create -f src/main/yaml/example-cluster.yaml

coherence.coherence.oracle.com/example-cluster-storage created</markup>

</div>

<h4 id="_2_list_the_created_coherence_cluster"><span class="merged" id="all.4PZhQQ" title="原文 : 2. List the created Coherence cluster">2. 作成されたCoherenceクラスタのリスト</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl -n coherence-example get coherence

NAME                      CLUSTER           ROLE                      REPLICAS   READY   PHASE
example-cluster-storage   example-cluster   example-cluster-storage   3                  Created

NAME                                                         AGE
coherencerole.coherence.oracle.com/example-cluster-storage   18s</markup>

</div>

<h4 id="_3_view_the_running_pods"><span class="merged" id="all.3pgoei" title="原文 : 3. View the running pods">3. 実行中のポッドの表示</span></h4>
<div class="section">
<p><span class="merged" id="all.iH5zh" title="原文 : Run the following command to view the Pods:">次のコマンドを実行してポッドを表示します:</span></p>

<markup
lang="bash"

>kubectl -n coherence-example get pods</markup>

<markup
lang="bash"

>NAME                                                     READY   STATUS    RESTARTS   AGE
coherence-operator-controller-manager-74d49cd9f9-sgzjr   1/1     Running   1          6m46s
example-cluster-storage-0                                0/1     Running   0          119s
example-cluster-storage-1                                1/1     Running   0          119s
example-cluster-storage-2                                0/1     Running   0          118s</markup>

</div>

<h4 id="_connect_to_the_coherence_console_inside_the_cluster_to_add_data"><span class="merged" id="all.4AM6GK" title="原文 : Connect to the Coherence Console inside the cluster to add data">クラスタ内のCoherenceコンソールに接続してデータを追加</span></h4>
<div class="section">
<p><span class="merged" id="all.2Rqqua" title="原文 : Since we cannot yet access the cluster via Coherence*Extend, we will connect via Coherence console to add data.">Coherence*Extendを介してクラスタにはまだアクセスできないため、Coherenceコンソールを使用してデータを追加します。</span></p>

<markup
lang="bash"

>kubectl exec -it -n coherence-example example-cluster-storage-0 /coherence-operator/utils/runner console</markup>

<p><span class="merged" id="all.3iSYDh" title="原文 : At the prompt type the following to create a cache called test:">プロンプトで、次のように入力して<code>test</code>というキャッシュを作成します:</span></p>

<markup
lang="bash"

>cache test</markup>

<p><span class="merged" id="all.1zTHPk" title="原文 : Use the following to create 10,000 entries of 100 bytes:">100バイトの10,000エントリを作成するには、次を使用します:</span></p>

<markup
lang="bash"

>bulkput 10000 100 0 100</markup>

<p><span class="merged" id="all.3jl3QA" title="原文 : Lastly issue the command size to verify the cache entry count.">最後に、コマンド<code>size</code>を発行して、キャッシュ・エントリ数を確認します。</span></p>

<p><span class="merged" id="all.3VxTSz" title="原文 : Type bye to exit the console."><code>bye</code>と入力してコンソールを終了します。</span></p>

</div>

<h4 id="_scale_the_storage_tier_to_6_members"><span class="merged" id="all.2OENpB" title="原文 : Scale the storage tier to 6 members"><code>storage</code>層を6メンバーにスケーリング</span></h4>
<div class="section">
<p><span class="merged" id="all.191Rar" title="原文 : To scale up the cluster the kubectl scale command can be used:">クラスタをスケール・アップするには、<code>kubectl scale</code>コマンドを使用できます:</span></p>

<markup
lang="bash"

>kubectl -n coherence-example scale coherence/example-cluster-storage --replicas=6</markup>

<p><span class="merged" id="all.BD9Up" title="原文 : Use the following to verify all 6 nodes are Running and READY before continuing.">続行する前に、次のコマンドを使用して、6つすべてのノードが実行中であり、READYであることを確認します。</span></p>

<markup
lang="bash"

>kubectl -n coherence-example get pods</markup>

<markup
lang="bash"

>NAME                                                     READY   STATUS    RESTARTS   AGE
coherence-operator-controller-manager-74d49cd9f9-sgzjr   1/1     Running   1          53m
example-cluster-storage-0                                1/1     Running   0          49m
example-cluster-storage-1                                1/1     Running   0          49m
example-cluster-storage-2                                1/1     Running   0          49m
example-cluster-storage-3                                1/1     Running   0          54s
example-cluster-storage-4                                1/1     Running   0          54s
example-cluster-storage-5                                1/1     Running   0          54s</markup>

</div>

<h4 id="_confirm_the_cache_count"><span class="merged" id="all.3VMc7t" title="原文 : Confirm the cache count">キャッシュ数を確認</span></h4>
<div class="section">
<p><span class="merged" id="all.36zkIW" title="原文 : Re-run step 3 above and just use the cache test and size commands to confirm the number of entries is still 10,000.">前述のステップ3を再実行し、<code>cache test</code>および<code>size</code>コマンドを使用してエントリ数がまだ10,000であることを確認します。</span></p>

<p><span class="merged" id="all.s89qo" title="原文 : This confirms that the scale-out was done in a safe manner ensuring no data loss.">これにより、スケールアウトが<code>safe</code>で実行され、データ損失がないことが確認されます。</span></p>

</div>
</div>

<h3 id="_scale_the_storage_tier_back_to_3_members"><span class="merged" id="all.4bsjZP" title="原文 : Scale the storage tier back to 3 members"><code>storage</code>層を3つのメンバーにスケール・バック</span></h3>
<div class="section">
<p><span class="merged" id="all.3LjGWL" title="原文 : To scale back doewn to three members run the following command:">doewnを3つのメンバーにスケール・バックするには、次のコマンドを実行します:</span></p>

<markup
lang="bash"

>kubectl -n coherence-example scale coherence/example-cluster-storage --replicas=3</markup>

<p><span class="merged" id="all.dzMCt" title="原文 : By using the following, you will see that the number of members will gradually scale back to 3 during which the is done in a safe manner ensuring no data loss.">次を使用すると、メンバー数が徐々に3にスケール・バックされ、データ損失がないように<code>safe</code>で実行されます。</span></p>

<markup
lang="bash"

>kubectl -n coherence-example get pods</markup>

<markup
lang="bash"

>NAME                        READY   STATUS        RESTARTS   AGE
example-cluster-storage-0   1/1     Running       0          19m
example-cluster-storage-1   1/1     Running       0          19m
example-cluster-storage-2   1/1     Running       0          19m
example-cluster-storage-3   1/1     Running       0          3m41s
example-cluster-storage-4   0/1     Terminating   0          3m41s</markup>

</div>

<h3 id="ex2"><span class="merged" id="all.4Eslxh" title="原文 : Example 2 - Adding a Proxy tier">例2 - プロキシ層の追加</span></h3>
<div class="section">
<p><span class="merged" id="all.AAszQ" title="原文 : The second example uses the yaml file src/main/yaml/example-cluster-proxy.yaml, which adds a proxy server example-cluster-proxy to allow for Coherence*Extend connections via a Proxy server.">2番目の例では、yamlファイル<code>src/main/yaml/example-cluster-proxy.yaml</code>を使用して、プロキシ・サーバー<code>example-cluster-proxy</code>を追加し、プロキシ・サーバーを介したCoherence*Extend接続を許可します。</span></p>

<p><span class="merged" id="all.2nRzXJ" title="原文 : The additional yaml added below shows:">追加のyamlを次に示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.hoRZD" title="原文 : A port called proxy being exposed on 20000">20000で公開される<code>proxy</code>というポート</span></p>

</li>
<li>
<p><span class="merged" id="all.3At11Q" title="原文 : The tier being set as storage-disabled">ストレージを無効に設定する層</span></p>

</li>
<li>
<p><span class="merged" id="all.36kfaw.spl1" title="原文 : A different cache config being used which will start a Proxy Server.">プロキシ・サーバーを起動する別のキャッシュ構成が使用されています。</span> <span class="merged" id="all.36kfaw.spl2" title="原文 : See [here](src/main/resources/proxy-cache-config.xml) for details">詳細は、[here](src/main/resources/proxy-cache-config.xml)を参照してください</span> </p>

</li>
</ul>
<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: example-cluster-proxy
spec:
  cluster: example-cluster
  jvm:
    memory:
      heapSize: 512m
  ports:
    - name: metrics
      port: 9612
      serviceMonitor:
        enabled: true
    - name: proxy
      port: 20000
  coherence:
    cacheConfig: proxy-cache-config.xml
    storageEnabled: false
    metrics:
      enabled: true
  image: deployment-example:1.0.0
  imagePullPolicy: Always
  replicas: 1</markup>


<h4 id="_install_the_proxy_tier"><span class="merged" id="all.3h0yuO" title="原文 : Install the proxy tier"><code>proxy</code>層のインストール</span></h4>
<div class="section">
<markup
lang="bash"

>  kubectl -n coherence-example apply -f src/main/yaml/example-cluster-proxy.yaml

  kubectl get coherence -n coherence-example

  NAME                      CLUSTER           ROLE                      REPLICAS   READY   PHASE
  example-cluster-proxy     example-cluster   example-cluster-proxy     1          1       Ready
  example-cluster-storage   example-cluster   example-cluster-storage   3          3       Ready</markup>

</div>

<h4 id="_view_the_running_pods"><span class="merged" id="all.2aLFkl" title="原文 : View the running pods">実行中のポッドの表示</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl -n coherence-example get pods

NAME                                  READY   STATUS    RESTARTS   AGE
coherence-operator-578497bb5b-w89kt   1/1     Running   0          68m
example-cluster-proxy-0               1/1     Running   0          2m41s
example-cluster-storage-0             1/1     Running   0          29m
example-cluster-storage-1             1/1     Running   0          29m
example-cluster-storage-2             1/1     Running   0          2m43s</markup>

<p><span class="merged" id="all.3maywb" title="原文 : Ensure the example-cluster-proxy-0 pod is Running and READY before continuing.">続行する前に、<code>example-cluster-proxy-0</code>ポッドが実行中であり、READYであることを確認します。</span></p>

</div>

<h4 id="_port_forward_the_proxy_port"><span class="merged" id="all.14knpO" title="原文 : Port forward the proxy port">プロキシ・ポートの転送</span></h4>
<div class="section">
<markup>In a separate terminal, run the following:</markup>
<markup
lang="bash"

>    kubectl port-forward -n coherence-example example-cluster-proxy-0 20000:20000</markup>

</div>

<h4 id="_connect_via_cohql_and_add_data"><span class="merged" id="all.43TF82" title="原文 : Connect via CohQL and add data">CohQLを介して接続し、データを追加</span></h4>
<div class="section">
<p><span class="merged" id="all.L1Y5a" title="原文 : In a separate terminal, change to the examples/021_deployments directory and run the following to start Coherence Query Language (CohQL):">別の端末で、<code>examples/021_deployments</code>ディレクトリに移動し、次を実行してCoherenceクエリー言語(CohQL)を起動します:</span></p>

<markup
lang="bash"

>    mvn exec:java

    Coherence Command Line Tool

    CohQL&gt;</markup>

<p><span class="merged" id="all.4AWJNl" title="原文 : Run the following CohQL commands to view and insert data into the cluster.">次の<code>CohQL</code>コマンドを実行して、データを表示およびクラスタに挿入します。</span></p>

<markup


>CohQL&gt; select count() from 'test';

Results
10000

CohQL&gt; insert into 'test' key('key-1') value('value-1');

CohQL&gt; select key(), value() from 'test' where key() = 'key-1';
Results
["key-1", "value-1"]

CohQL&gt; select count() from 'test';
Results
10001

CohQL&gt; quit</markup>

<p><span class="merged" id="all.aRlzN" title="原文 : The above results will show that you can see the data previously inserted and can add new data into the cluster using Coherence*Extend.">前述の結果は、以前に挿入されたデータが表示され、Coherence*Extendを使用してクラスタに新しいデータを追加できることを示しています。</span></p>

</div>
</div>

<h3 id="ex3"><span class="merged" id="all.1TT6fq" title="原文 : Example 3 - Adding a User application tier">例3 - ユーザー・アプリケーション層の追加</span></h3>
<div class="section">
<p><span class="merged" id="all.14aWlR.spl1" title="原文 : The third example uses the yaml file src/main/yaml/example-cluster-app.yaml, which adds a new tier rest.">3番目の例では、yamlファイル<code>src/main/yaml/example-cluster-app.yaml</code>を使用して、新しい層<code>rest</code>を追加します。</span> <span class="merged" id="all.14aWlR.spl2" title="原文 : This tier defines a user application which uses Helidon to create a /query endpoint allowing the user to send CohQL commands via this endpoint.">この層は、<a href="https://helidon.io/" id="" target="_blank" >Helidon</a>を使用して<code>/query</code>エンドポイントを作成し、ユーザーがこのエンドポイント経由でCohQLコマンドを送信できるようにするユーザー・アプリケーションを定義します。</span> </p>

<p><span class="merged" id="all.2nRzXJ.1" title="原文 : The additional yaml added below shows:">追加のyamlを次に示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.32CRUo" title="原文 : A port called http being exposed on 8080 for the application">アプリケーションの8080で公開される<code>http</code>というポート</span></p>

</li>
<li>
<p><span class="merged" id="all.3At11Q.1" title="原文 : The tier being set as storage-disabled">ストレージを無効に設定する層</span></p>

</li>
<li>
<p><span class="merged" id="all.22nHTn" title="原文 : Using the storage-cache-config.xml but as storage-disabled">storage-cache-config.xmlの使用(ただし、ストレージが無効)</span></p>

</li>
<li>
<p><span class="merged" id="all.sVSIG" title="原文 : An alternate main class to run - com.oracle.coherence.examples.Main">実行する代替メイン・クラス - <code>com.oracle.coherence.examples.Main</code></span></p>

</li>
</ul>
<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: example-cluster-rest
spec:
  cluster: example-cluster
  jvm:
    memory:
      heapSize: 512m
  ports:
    - name: metrics
      port: 9612
      serviceMonitor:
        enabled: true
    - name: http
      port: 8080
  coherence:
    cacheConfig: storage-cache-config.xml
    storageEnabled: false
    metrics:
      enabled: true
  image: deployment-example:1.0.0
  imagePullPolicy: Always
  application:
    main: com.oracle.coherence.examples.Main</markup>


<h4 id="_install_the_rest_tier"><span class="merged" id="all.4f4dvv" title="原文 : Install the rest tier"><code>rest</code>層のインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.rWhcU" title="原文 : Install the yaml with the following command:">次のコマンドを使用してyamlをインストールします:</span></p>

<markup
lang="bash"

>kubectl -n coherence-example apply -f src/main/yaml/example-cluster-app.yaml

kubectl get coherence -n coherence-example

NAME                      CLUSTER           ROLE                      REPLICAS   READY   PHASE
example-cluster-proxy     example-cluster   example-cluster-proxy     1          1       Ready
example-cluster-rest      example-cluster   example-cluster-rest      1          1       Ready
example-cluster-storage   example-cluster   example-cluster-storage   3          3       Ready</markup>

</div>

<h4 id="_view_the_running_pods_2"><span class="merged" id="all.2aLFkl.1" title="原文 : View the running pods">実行中のポッドの表示</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl -n coherence-example get pods

NAME                              READY   STATUS    RESTARTS   AGE
coherence-operator-578497bb5b-w89kt   1/1     Running   0          90m
example-cluster-proxy-0               1/1     Running   0          3m57s
example-cluster-rest-0                1/1     Running   0          3m57s
example-cluster-storage-0             1/1     Running   0          3m59s
example-cluster-storage-1             1/1     Running   0          3m58s
example-cluster-storage-2             1/1     Running   0          3m58s</markup>

</div>

<h4 id="_port_forward_the_application_port"><span class="merged" id="all.41xi3D" title="原文 : Port forward the application port">アプリケーション・ポートの転送</span></h4>
<div class="section">
<p><span class="merged" id="all.4eWh4r" title="原文 : In a separate terminal, run the following:">別の端末で、次を実行します:</span></p>

<markup
lang="bash"

>kubectl port-forward -n coherence-example example-cluster-rest-0 8080:8080</markup>

</div>

<h4 id="_access_the_custom_query_endpoint"><span class="merged" id="all.wfFkX" title="原文 : Access the custom /query endpoint">カスタム<code>/query</code>エンドポイントにアクセス</span></h4>
<div class="section">
<p><span class="merged" id="all.q0Ly" title="原文 : Use the various CohQL commands via the /query endpoint to access, and mutate data in the Coherence cluster."><code>/query</code>エンドポイントを介して様々な<code>CohQL</code>コマンドを使用して、Coherenceクラスタのデータにアクセスし、ミュートします。</span></p>

<markup
lang="bash"

>curl -i -w '\n' -X PUT http://127.0.0.1:8080/query -d '{"query":"create cache foo"}'</markup>

<markup
lang="bash"

>HTTP/1.1 200 OK
Date: Fri, 19 Jun 2020 06:29:40 GMT
transfer-encoding: chunked
connection: keep-alive</markup>

<markup
lang="bash"

>curl -i -w '\n' -X PUT http://127.0.0.1:8080/query -d '{"query":"insert into foo key(\"foo\") value(\"bar\")"}'</markup>

<markup
lang="bash"

>HTTP/1.1 200 OK
Date: Fri, 19 Jun 2020 06:29:44 GMT
transfer-encoding: chunked
connection: keep-alive</markup>

<markup
lang="bash"

>curl -i -w '\n' -X PUT http://127.0.0.1:8080/query -d '{"query":"select key(),value() from foo"}'</markup>

<markup
lang="bash"

>HTTP/1.1 200 OK
Content-Type: application/json
Date: Fri, 19 Jun 2020 06:29:55 GMT
transfer-encoding: chunked
connection: keep-alive

{"result":"{foo=[foo, bar]}"}</markup>

<markup
lang="bash"

>curl -i -w '\n' -X PUT http://127.0.0.1:8080/query -d '{"query":"create cache test"}'</markup>

<markup
lang="bash"

>HTTP/1.1 200 OK
Date: Fri, 19 Jun 2020 06:30:00 GMT
transfer-encoding: chunked
connection: keep-alive</markup>

<markup
lang="bash"

>curl -i -w '\n' -X PUT http://127.0.0.1:8080/query -d '{"query":"select count() from test"}'</markup>

<markup
lang="bash"

>HTTP/1.1 200 OK
Content-Type: application/json
Date: Fri, 19 Jun 2020 06:30:20 GMT
transfer-encoding: chunked
connection: keep-alive

{"result":"10001"}</markup>

</div>
</div>

<h3 id="ex4"><span class="merged" id="all.2m7W6b" title="原文 : Example 4 - Enabling Persistence">例4 - 永続性の有効化</span></h3>
<div class="section">
<p><span class="merged" id="all.1GLAGs" title="原文 : The fourth example uses the yaml file src/main/yaml/example-cluster-persistence.yaml, which enabled Active Persistence for the storage tier by adding a persistence: element.">4番目の例では、yamlファイル<code>src/main/yaml/example-cluster-persistence.yaml</code>を使用します。このファイルは、<code>persistence:</code>要素を追加して、<code>storage</code>層に対してアクティブな永続性を有効化しています。</span></p>

<p><span class="merged" id="all.eE2KC" title="原文 : The additional yaml added to the storage tier below shows:">次のストレージ層に追加された追加のyamlは、次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2YXtlG" title="原文 : Active Persistence being enabled via persistence.enabled=true"><code>persistence.enabled=true</code>を介して有効になっているアクティブな永続性</span></p>

</li>
<li>
<p><span class="merged" id="all.1yXI75" title="原文 : Various Persistence Volume Claim (PVC) values being set under persistentVolumeClaim"><code>persistentVolumeClaim</code>の下に設定される様々な永続性ボリューム・クレーム(PVC)値</span></p>

</li>
</ul>
<markup
lang="yaml"

>  coherence:
    cacheConfig: storage-cache-config.xml
    metrics:
      enabled: true
    persistence:
      enabled: true
      persistentVolumeClaim:
        accessModes:
          - ReadWriteOnce
        resources:
          requests:
            storage: 1Gi</markup>

<p><span class="merged" id="all.c57uq.spl1" title="原文 : NOTE:By default, when you enable Coherence Persistence, the required infrastructure in terms of persistent volumes (PV) and persistent volume claims (PVC) is set up automatically.">ノート:デフォルトでは、Coherence永続性を有効にすると、永続ボリューム(PV)および永続ボリューム要求(PVC)の観点で必要なインフラストラクチャが自動的に設定されます。</span> <span class="merged" id="all.c57uq.spl2" title="原文 : Also, the persistence-mode is set to active.">また、永続性モードは<code>active</code>に設定されます。</span> <span class="merged" id="all.c57uq.spl3" title="原文 : This allows the Coherence cluster to be restarted, and the data to be retained.">これにより、Coherenceクラスタを再起動し、データを保持できます。</span> </p>


<h4 id="_delete_the_existing_deployment"><span class="merged" id="all.3GwFJC" title="原文 : Delete the existing deployment">既存のデプロイメントの削除</span></h4>
<div class="section">
<p><span class="merged" id="all.42aTHL" title="原文 : We must first delete the existing deployment as we need to redeploy to enable Active Persistence.">アクティブ永続性を有効化するために再デプロイする必要があるため、まず既存のデプロイメントを削除する必要があります。</span></p>

<markup
lang="bash"

>kubectl -n coherence-example delete -f src/main/yaml/example-cluster-app.yaml</markup>

<p><span class="merged" id="all.1ll2AG" title="原文 : Ensure all the pods have terminated before you continue.">続行する前に、すべてのポッドが終了していることを確認してください。</span></p>

</div>

<h4 id="_install_the_cluster_with_persistence_enabled"><span class="merged" id="all.2yEoh9" title="原文 : Install the cluster with Persistence enabled">永続性を有効にしたクラスタのインストール</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl -n coherence-example create -f src/main/yaml/example-cluster-persistence.yaml</markup>

</div>

<h4 id="_view_the_running_pods_and_pvcs"><span class="merged" id="all.10h1OQ" title="原文 : View the running pods and PVC’s">実行中のポッドおよびPVCの表示</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl -n coherence-example get pods</markup>

<markup
lang="bash"

>NAME                            READY   STATUS    RESTARTS   AGE
example-cluster-rest-0          1/1     Running   0          5s
example-cluster-proxy-0         1/1     Running   0          5m1s
example-cluster-storage-0       1/1     Running   0          5m3s
example-cluster-storage-1       1/1     Running   0          5m3s
example-cluster-storage-2       1/1     Running   0          5m3s</markup>

<p><span class="merged" id="all.3H8vXV" title="原文 : Check the Persistent Volumes and PVC are automatically created.">永続ボリュームとPVCが自動的に作成されることを確認します。</span></p>

<markup
lang="bash"

>kubectl get pvc -n coherence-example</markup>

<markup
lang="bash"

>NAME                                           STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistence-volume-example-cluster-storage-0   Bound    pvc-15b46996-eb35-11e9-9b4b-025000000001   1Gi        RWO            hostpath       55s
persistence-volume-example-cluster-storage-1   Bound    pvc-15bd99e9-eb35-11e9-9b4b-025000000001   1Gi        RWO            hostpath       55s
persistence-volume-example-cluster-storage-2   Bound    pvc-15e55b6b-eb35-11e9-9b4b-025000000001   1Gi        RWO            hostpath       55s</markup>

<p><span class="merged" id="all.199DYC" title="原文 : Wait until all nodes are Running and READY before continuing.">すべてのノードが実行中であり、READYになるまで待機してから続行します。</span></p>

</div>

<h4 id="_check_active_persistence_is_enabled"><span class="merged" id="all.2kMZc0" title="原文 : Check Active Persistence is enabled">アクティブな永続性チェックが有効です</span></h4>
<div class="section">
<p><span class="merged" id="all.225bjr" title="原文 : Use the following to view the logs of the example-cluster-storage-0 pod and validate that Active Persistence is enabled."><code>example-cluster-storage-0</code>ポッドのログを表示し、アクティブな永続性が有効になっていることをバリデートするには、次を使用します。</span></p>

<markup
lang="bash"

>kubectl logs example-cluster-storage-0 -c coherence -n coherence-example | grep 'Created persistent'</markup>

<markup
lang="bash"

>...
019-10-10 04:52:00.179/77.023 Oracle Coherence GE 12.2.1.4.0 &lt;Info&gt; (thread=DistributedCache:PartitionedCache, member=4): Created persistent store /persistence/active/example-cluster/PartitionedCache/126-2-16db40199bc-4
2019-10-10 04:52:00.247/77.091 Oracle Coherence GE 12.2.1.4.0 &lt;Info&gt; (thread=DistributedCache:PartitionedCache, member=4): Created persistent store /persistence/active/example-cluster/PartitionedCache/127-2-16db40199bc-4
...</markup>

<p><span class="merged" id="all.2SnqVd" title="原文 : If you see output similar to above then Active Persistence is enabled.">前述のような出力が表示された場合、アクティブな永続性が有効になります。</span></p>

</div>

<h4 id="_connect_to_the_coherence_console_to_add_data"><span class="merged" id="all.21KPmi" title="原文 : Connect to the Coherence Console to add data">Coherenceコンソールに接続してデータを追加</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl exec -it -n coherence-example example-cluster-storage-0 /coherence-operator/utils/runner console</markup>

<p><span class="merged" id="all.3iSYDh.1" title="原文 : At the prompt type the following to create a cache called test:">プロンプトで、次のように入力して<code>test</code>というキャッシュを作成します:</span></p>

<markup
lang="bash"

>cache test</markup>

<p><span class="merged" id="all.1zTHPk.1" title="原文 : Use the following to create 10,000 entries of 100 bytes:">100バイトの10,000エントリを作成するには、次を使用します:</span></p>

<markup
lang="bash"

>bulkput 10000 100 0 100</markup>

<p><span class="merged" id="all.3jl3QA.1" title="原文 : Lastly issue the command size to verify the cache entry count.">最後に、コマンド<code>size</code>を発行して、キャッシュ・エントリ数を確認します。</span></p>

<p><span class="merged" id="all.3VxTSz.1" title="原文 : Type bye to exit the console."><code>bye</code>と入力してコンソールを終了します。</span></p>

</div>

<h4 id="_delete_the_cluster"><span class="merged" id="all.1i1bZX"  title="原文:: Delete the cluster">クラスタの削除</span></h4>
<div class="section">
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3cClPo" title="原文 : This will not delete the PVC’s.">これにより、PVCは削除されません。</span></p>
</div>
<markup
lang="bash"

>kubectl -n coherence-example delete -f src/main/yaml/example-cluster-persistence.yaml</markup>

<p><span class="merged" id="all.ACEGV" title="原文 : Use kubectl get pods -n coherence-example to confirm the pods have terminated."><code>kubectl get pods -n coherence-example</code>を使用して、ポッドが終了したことを確認します。</span></p>

</div>

<h4 id="_confirm_the_pvcs_are_still_present"><span class="merged" id="all.OUtg9" title="原文 : Confirm the PVC’s are still present">PVCがまだ存在することを確認</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl get pvc -n coherence-example</markup>

<markup
lang="bash"

>NAME                                           STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistence-volume-example-cluster-storage-0   Bound    pvc-730f86fe-eb19-11e9-9b4b-025000000001   1Gi        RWO            hostpath       116s
persistence-volume-example-cluster-storage-1   Bound    pvc-73191751-eb19-11e9-9b4b-025000000001   1Gi        RWO            hostpath       116s
persistence-volume-example-cluster-storage-2   Bound    pvc-73230889-eb19-11e9-9b4b-025000000001   1Gi        RWO            hostpath       116s</markup>

</div>

<h4 id="_re_install_the_cluster"><span class="merged" id="all.ToWHF" title="原文 : Re-install the cluster">クラスタを再インストール</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl -n coherence-example create -f src/main/yaml/example-cluster-persistence.yaml</markup>

</div>

<h4 id="_follow_the_logs_for_persistence_messages"><span class="merged" id="all.1zX8C5" title="原文 : Follow the logs for Persistence messages">永続性メッセージのログに従います</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl logs example-cluster-storage-0 -c coherence -n coherence-example -f</markup>

<p><span class="merged" id="all.27Ax1I" title="原文 : You should see a message regarding recovering partitions, similar to the following:">パーティションのリカバリに関する次のようなメッセージが表示されます:</span></p>

<markup
lang="bash"

>2019-10-10 05:00:14.255/32.206 Oracle Coherence GE 12.2.1.4.0 &lt;D5&gt; (thread=DistributedCache:PartitionedCache, member=1): Recovering 86 partitions
...
2019-10-10 05:00:17.417/35.368 Oracle Coherence GE 12.2.1.4.0 &lt;Info&gt; (thread=DistributedCache:PartitionedCache, member=1): Created persistent store /persistence/active/example-cluster/PartitionedCache/50-3-16db409d035-1 from SafeBerkeleyDBStore(50-2-16db40199bc-4, /persistence/active/example-cluster/PartitionedCache/50-2-16db40199bc-4)
...</markup>

<p><span class="merged" id="all.2IqYDD" title="原文 : Finally, you should see the following indicating active recovery has completed.">最後に、アクティブなリカバリが完了したことを示す次のことがわかります。</span></p>

<markup
lang="bash"

>2019-10-10 08:18:04.870/59.565 Oracle Coherence GE 12.2.1.4.0 &lt;Info&gt; (thread=DistributedCache:PartitionedCache, member=1):
   Recovered PartitionSet{172..256} from active persistent store</markup>

</div>

<h4 id="_confirm_the_data_has_been_recovered"><span class="merged" id="all.1CHF6V" title="原文 : Confirm the data has been recovered">データがリカバリされたことを確認</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl exec -it -n coherence-example example-cluster-storage-0 /coherence-operator/utils/runner console</markup>

<p><span class="merged" id="all.3iSYDh.2" title="原文 : At the prompt type the following to create a cache called test:">プロンプトで、次のように入力して<code>test</code>というキャッシュを作成します:</span></p>

<markup
lang="bash"

>cache test</markup>

<p><span class="merged" id="all.1R3PV1" title="原文 : Lastly issue the command size to verify the cache entry count is 10,000 meaning the data has been recovered.">最後に、コマンド<code>size</code>を発行して、キャッシュ・エントリ数が10,000であることを確認します。これは、データがリカバリされたことを意味します。</span></p>

<p><span class="merged" id="all.3VxTSz.2" title="原文 : Type bye to exit the console."><code>bye</code>と入力してコンソールを終了します。</span></p>

</div>
</div>

<h3 id="metrics"><span class="merged" id="all.1hc2vZ" title="原文 : View Cluster Metrics Using Prometheus and Grafana">PrometheusおよびGrafanaを使用したクラスタ・メトリクスの表示</span></h3>
<div class="section">
<p><span class="merged" id="all.3SUF3F" title="原文 : If you wish to view metrics via Grafana, you must carry out the following steps before you install any of the examples above.">Grafanaを使用してメトリクスを表示する場合は、前述の例をインストールする<strong>「前に」</strong>次のステップを実行する必要があります。</span></p>


<h4 id="_install_prometheus_operator"><span class="merged" id="all.3ZIuve" title="原文 : Install Prometheus Operator">Prometheusオペレータのインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.3EMGYc.spl1" title="原文 : Install the Prometheus Operator, as documented in the Prometheus Operator Quick Start page.">Prometheusオペレータ<a href="https://prometheus-operator.dev/docs/getting-started/installation/" id="" target="_blank" >「クイック・スタート」</a>ページの説明に従って、Prometheusオペレータをインストールします。</span> <span class="merged" id="all.3EMGYc.spl2" title="原文 : Prometheus can then be accessed as documented in the Access Prometheus section of the Quick Start page.">Prometheusには、<a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/user-guides/getting-started.md" id="" target="_blank" >「クイック・スタートのPrometheusセクションにアクセス」</a>ページの説明に従ってアクセスできます。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.24"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.4FYG0J" title="原文 : Using RBAC"><strong>RBACの使用</strong></span></p>

<p><span class="merged" id="all.37oXuM.spl1" title="原文 : If installing Prometheus into RBAC enabled k8s clusters, you may need to create the required RBAC resources as described in the Prometheus RBAC documentation.">PrometheusをRBAC対応k8sクラスタにインストールする場合は、<a href="https://prometheus-operator.dev/docs/operator/rbac/" id="" target="_blank" >Prometheus RBAC</a>ドキュメントの説明に従って、必要なRBACリソースを作成する必要があります。</span> <span class="merged" id="all.37oXuM.spl2" title="原文 : The Coherence Operator contains an example that works with the out-of-the-box Prometheus Operator install that we use for testing prometheus-rbac.yaml This yaml creates a ClusterRole with the required permissions and a ClusterRoleBinding that binds the role to the prometheus-k8s service account (which is the name of the account created, and used by the Prometheus Operator).">Coherence Operatorには、<a href="https://raw.githubusercontent.com/oracle/coherence-operator/main/hack/prometheus/prometheus-rbac.yaml" id="" target="_blank" >prometheus-rbac.yaml</a>のテストに使用する即時利用可能なPrometheusオペレータ・インストールと連携する例が含まれています。このyamlは、必要な権限を持つ<code>ClusterRole</code>と、<code>prometheus-k8s</code>サービス・アカウント(作成されたアカウントの名前で、Prometheusオペレータによって使用される)にロールをバインドする<code>ClusterRoleBinding</code>を作成します。</span> <span class="merged" id="all.37oXuM.spl3" title="原文 : This yaml file can be installed into k8s before installing the Prometheus Operator.">このyamlファイルは、Prometheusオペレータをインストールする前にk8sにインストールできます。</span> </p>
</p>
</div>
</div>

<h4 id="_access_grafana"><span class="merged" id="all.SDX6G" title="原文 : Access Grafana">Grafanaへのアクセス</span></h4>
<div class="section">
<p><span class="merged" id="all.tFyiJ.spl1" title="原文 : The Prometheus Operator also installs Grafana.">Prometheusオペレータは、Grafanaもインストールします。</span> <span class="merged" id="all.tFyiJ.spl2" title="原文 : Grafana can be accessed as documented in the Access Grafana section of the Quick Start page.">Grafanaには、<a href="https://github.com/prometheus-operator/kube-prometheus/blob/main/docs/access-ui.md" id="" target="_blank" >「クイック・スタートのGrafanaセクションにアクセス」</a>ページの説明に従ってアクセスできます。</span> <span class="merged" id="all.tFyiJ.spl3" title="原文 : Note that the default credentials are specified in that section of the documentation.">デフォルトの資格証明は、ドキュメントのそのセクションで指定されています。</span> </p>

</div>

<h4 id="_import_the_grafana_dashboards"><span class="merged" id="all.27SNQP" title="原文 : Import the Grafana Dashboards">Grafanaダッシュボードのインポート</span></h4>
<div class="section">
<p><span class="merged" id="all.2aAW0r" title="原文 : To import the Coherence Grafana dashboards follow the instructions in the Operator documentation section Importing Grafana Dashboards.">Coherence Grafanaダッシュボードをインポートするには、オペレータのドキュメント・セクション<router-link to="/docs/metrics/030_importing">「Grafanaダッシュボードのインポート」</router-link>の手順に従います。</span></p>

<p><span class="merged" id="all.35ITiL" title="原文 : After importing the dashboards into Grafana and with the port-forward still running the Coherence dashboards can be accessed at localhost:3000/d/coh-main/coherence-dashboard-main">ダッシュボードをGrafanaにインポートした後、ポート・フォワードがまだ実行されている状態で、Coherenceダッシュボードには<a href="http://localhost:3000/d/coh-main/coherence-dashboard-main" id="" target="_blank" >localhost:3000/d/coh-main/coherence-dashboard-main</a>でアクセスできます</span></p>

</div>

<h4 id="_troubleshooting"><span class="merged" id="all.1y3Rd3"  title="原文:: Troubleshooting">トラブルシューティング</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.38wU6t" title="原文 : It may take up to 5 minutes for data to start appearing in Grafana.">Grafanaにデータが表示されるまで最大5分かかることがあります。</span></p>

</li>
<li>
<p><span class="merged" id="all.36IyDt.spl1" title="原文 : If you are not seeing data after 5 minutes, access the Prometheus endpoint as described above.">5分後にデータが表示されない場合は、前述のようにPrometheusエンドポイントにアクセスします。</span> <span class="merged" id="all.36IyDt.spl2" title="原文 : Ensure that the endpoints named coherence-example/example-cluster-storage-metrics/0 (3/3 up) are up."><code>coherence-example/example-cluster-storage-metrics/0 (3/3 up)</code>という名前のエンドポイントが稼働していることを確認します。</span> <span class="merged" id="all.36IyDt.spl3" title="原文 : If the endpoints are not up then wait 60 seconds and refresh the browser.">エンドポイントが起動していない場合は、60秒待ってからブラウザをリフレッシュします。</span> </p>

</li>
<li>
<p><span class="merged" id="all.2UBNj0.spl1" title="原文 : If you do not see any values in the Cluster Name dropdown in Grafana, ensure the endpoints are up as described above and click on Manage Alerts and then Back to Main Dashboard.">Grafanaの<code>Cluster Name</code>ドロップダウンに値が表示されない場合は、前述のエンドポイントが稼働していることを確認し、<code>Manage Alerts</code>、<code>Back to Main Dashboard</code>の順にクリックします。</span> <span class="merged" id="all.2UBNj0.spl2" title="原文 : This will re-query the data and load the list of clusters.">これにより、データが再クエリーされ、クラスタのリストがロードされます。</span> </p>

</li>
</ul>
</div>
</div>

<h3 id="cleaning-up"><span class="merged" id="all.18hyPz"  title="原文:: Cleaning Up">クリーンアップ</span></h3>
<div class="section">

<h4 id="_delete_the_cluster_2"><span class="merged" id="all.1i1bZX.1"  title="原文:: Delete the cluster">クラスタの削除</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl -n coherence-example delete -f src/main/yaml/example-cluster-persistence.yaml</markup>

</div>

<h4 id="_delete_the_pvcs"><span class="merged" id="all.1Zow6Z" title="原文 : Delete the PVC’s">PVCの削除</span></h4>
<div class="section">
<p><span class="merged" id="all.1CEt7j" title="原文 : Ensure all the pods have all terminated before you delete the PVC’s.">PVCを削除する前に、すべてのポッドが終了していることを確認してください。</span></p>

<markup
lang="bash"

>kubectl get pvc -n coherence-example | sed 1d | awk '{print $1}' | xargs kubectl delete pvc -n coherence-example</markup>

</div>

<h4 id="_remove_the_coherence_operator"><span class="merged" id="all.2tMG9g" title="原文 : Remove the Coherence Operator">Coherence Operatorの削除</span></h4>
<div class="section">
<p><span class="merged" id="all.1IfmoJ" title="原文 : Uninstall the Coherence operator using the undeploy commands for whichever method you chose to install it.">インストールするために選択したメソッドに対してアンデプロイ・コマンドを使用して、Coherenceオペレータをアンインストールします。</span></p>

</div>

<h4 id="_delete_prometheus_operator"><span class="merged" id="all.2NfMny" title="原文 : Delete Prometheus Operator">Prometheusオペレータの削除</span></h4>
<div class="section">
<p><span class="merged" id="all.1EUYRi" title="原文 : Uninstall the Prometheus Operator as documented in the Remove kube-prometheus section of the Quick Start page."><a href="https://prometheus-operator.dev/docs/getting-started/installation/" id="" target="_blank" >「クイックスタートのkube-prometheusセクションを削除」</a>ページの説明に従って、Prometheusオペレータをアンインストールします。</span></p>

</div>
</div>
</div>
</doc-view>
