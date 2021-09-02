<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coherence_operator_deployment_example"><span class="merged" id="all.M4S1n" title="原文 : Coherence Operator Deployment Example">Coherence Operatorデプロイメントの例</span></h2>
<div class="section">
<p><span class="merged" id="all.3M57wJ.1" title="原文 : This example showcases how to deploy Coherence applications using the Coherence Operator.">この例では、Coherence Operatorを使用してCoherenceアプリケーションをデプロイする方法を示します。</span></p>

<p><span class="merged" id="all.6nXHp.spl1" title="原文 : This example shows how to use the Kubernetes Horizontal Pod Autoscaler to scale Coherence clusters.">この例では、Kubernetes水平ポッド自動スケーリングを使用してCoherenceクラスタをスケーリングする方法を示します。</span> <span class="merged" id="all.6nXHp.spl2" title="原文 : You can find the source code in the Operator GitHub Repo">ソース・コードは<a href="https://github.com/oracle/coherence-operator/tree/master/examples/deployment" id="" target="_blank" >「オペレータGitHubリポジトリ」</a>にあります</span> </p>

<p><span class="merged" id="all.2aS5db" title="原文 : The following scenarios are covered:">次のシナリオについて説明します:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.BrDYO" title="原文 : Installing the Coherence Operator">Coherence Operatorのインストール</span>

</li>
<li>
<span class="merged" id="all.4MoucK" title="原文 : Installing a Coherence cluster">Coherenceクラスタのインストール</span>

</li>
<li>
<span class="merged" id="all.4e3gik" title="原文 : Deploying a Proxy tier">プロキシ層のデプロイ</span>

</li>
<li>
<span class="merged" id="all.2z7OHQ" title="原文 : Deploying a storage-disabled application">ストレージ無効のアプリケーションのデプロイ</span>

</li>
<li>
<span class="merged" id="all.3fbN0v" title="原文 : Enabling Active Persistence">アクティブ永続性の有効化</span>

</li>
<li>
<span class="merged" id="all.4TElrG" title="原文 : Viewing Metrics via Grafana">Grafanaを使用したメトリクスの表示</span>

</li>
</ol>
<p><span class="merged" id="all.1IY8L9" title="原文 : After the initial installation of the Coherence cluster, the following examples build on the previous ones by issuing a kubectl apply to modify the installation adding additional roles.">Coherenceクラスタの初期インストール後、次の例は、<code>kubectl apply</code>を発行してインストールを変更し、追加のロールを追加することで前のクラスタ上に構築されます。</span></p>

<p><span class="merged" id="all.xYaeZ" title="原文 : You can use kubectl create for any of the examples to install that one directly."><code>kubectl create</code>は、いずれの例でも使用して直接インストールできます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1wJHmB" title="原文 : Prerequisites"><router-link @click.native="this.scrollFix('#pre')" to="#pre">前提条件</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3bRBBu" title="原文 : Create the example namespace"><router-link @click.native="this.scrollFix('#create-the-example-namespace')" to="#create-the-example-namespace">サンプル・ネームスペースの作成</router-link></span></p>

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
<p><span class="merged" id="all.30RsSO" title="原文 : Example 1 - Coherence cluster only"><router-link @click.native="this.scrollFix('#ex1')" to="#ex1">Example 1- Coherenceクラスタのみ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1Hpx46" title="原文 : Example 2 - Adding a Proxy role"><router-link @click.native="this.scrollFix('#ex2')" to="#ex2">Example 2- プロキシ・ロールの追加</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1ku37O" title="原文 : Example 3 - Adding a User application role"><router-link @click.native="this.scrollFix('#ex3')" to="#ex3">Example 3- ユーザー・アプリケーション・ロールの追加</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3esnN" title="原文 : Example 4 - Enabling Persistence"><router-link @click.native="this.scrollFix('#ex4')" to="#ex4">Example 4- 永続性の有効化</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2uXmDm" title="原文 : View Cluster Metrics via Grafana"><router-link @click.native="this.scrollFix('#metrics')" to="#metrics">Grafanaを使用したクラスタ・メトリクスの表示</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2C34aF" title="原文 : Port Forward and Access Grafana"><router-link @click.native="this.scrollFix('#grafana')" to="#grafana">ポート・フォワードとGrafanaへのアクセス</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.2ywvhQ" title="原文 : Cleaning Up"><router-link @click.native="this.scrollFix('#cleaning-up')" to="#cleaning-up">クリーンアップ</router-link></span></p>

</li>
</ul>
</div>

<h2 id="pre"><span class="merged" id="all.2LZvWc.1"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.2o7i0D" title="原文 : Ensure you have the following software installed:">次のソフトウェアがインストールされていることをバリデートします:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2QWpOS" title="原文 : Java 11+ JDK either [OpenJDK](https://adoptopenjdk.net/) or [Oracle JDK](https://www.oracle.com/java/technologies/javase-downloads.html)">Java 11+ JDK ([OpenJDK](<a href="https://adoptopenjdk.net/" id="" target="_blank" >https://adoptopenjdk.net/</a>)または[Oracle JDK](<a href="https://www.oracle.com/java/technologies/javase-downloads.html" id="" target="_blank" >https://www.oracle.com/java/technologies/javase-downloads.html</a>)</span></p>

</li>
<li>
<p><span class="merged" id="all.j38oP" title="原文 : Docker version 17.03+."><a href="https://docs.docker.com/install/" id="" target="_blank" >Docker</a>バージョン17.03+。</span></p>

</li>
<li>
<p><span class="merged" id="all.4dbHBC" title="原文 : Access to a Kubernetes v1.14.0+ cluster.">Kubernetes v1.14.0+クラスタにアクセスします。</span></p>

</li>
<li>
<p><span class="merged" id="all.4VUWSD" title="原文 : kubectl version matching your Kubernetes cluster.">Kubernetesクラスタと一致する<a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" id="" target="_blank" >kubectl</a>バージョン。</span></p>

</li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4PWW76.spl1" title="原文 : This example requires Java 11+ because it creates a Helidon web application and Helidon requires Java 11+.">この例では、Helidon webアプリケーションを作成し、HelidonにはJava 11+が必要であるため、Java 11+が必要です。</span> <span class="merged" id="all.4PWW76.spl2" title="原文 : Coherence and running Coherence in Kubernetes only requires Java 8+.">CoherenceおよびKubernetesでのCoherenceの実行には、Java 8+のみが必要です。</span> </p>
</div>
</div>

<h2 id="create-the-example-namespace"><span class="merged" id="all.3ezoGY" title="原文 : Create the example namespace">サンプル・ネームスペースの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.4Le10Q.spl1" title="原文 : You need to create the namespace for the first time to run any of the examples.">いずれかの例を実行するには、最初にネームスペースを作成する必要があります。</span> <span class="merged" id="all.4Le10Q.spl2" title="原文 : Create your target namespace:">ターゲット・ネームスペースを作成します:</span> </p>

<markup
lang="bash"

>kubectl create namespace coherence-example

namespace/coherence-example created</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.1kBG9f.spl1" title="原文 : In the examples, a Kubernetes namespace called coherence-example is used.">この例では、<code>coherence-example</code>というKubernetesネームスペースが使用されます。</span> <span class="merged" id="all.1kBG9f.spl2" title="原文 : If you want to change this namespace, ensure that you change any references to this namespace to match your selected namespace when running the examples.">このネームスペースを変更する場合は、例の実行時に、このネームスペースへの参照を、選択したネームスペースと一致するように変更してください。</span> </p>
</p>
</div>
</div>

<h2 id="clone-the-github-repository"><span class="merged" id="all.3cehWR"  title="原文:: Clone the GitHub repository">GitHubリポジトリを複製します</span></h2>
<div class="section">
<p><span class="merged" id="all.cEdIQ" title="原文 : This examples exist in the examples/deployment directory in the Coherence Operator GitHub repository.">この例は、<a href="https://github.com/oracle/coherence-operator" id="" target="_blank" >「Coherence Operator GitHubリポジトリ」</a>の<code>examples/deployment</code>ディレクトリにあります。</span></p>

<p><span class="merged" id="all.3uz3bT"  title="原文:: Clone the repository:">リポジトリをクローニングします。:</span></p>

<markup
lang="bash"

>git clone https://github.com/oracle/coherence-operator

cd coherence-operator/examples/deployment</markup>

<p><span class="merged" id="all.2nZ1TP" title="原文 : Ensure you have Docker running and JDK 11+ build environment set and use the following command from the deployment example directory to build the project and associated Docker image:">Dockerが実行され、JDK 11+ビルド環境セットがあることを確認し、デプロイメント例ディレクトリから次のコマンドを使用して、プロジェクトおよび関連するDockerイメージを作成します:</span></p>

<markup
lang="bash"

>./mvnw package jib:dockerBuild</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.1"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.uy3xO" title="原文 : If you are running behind a corporate proxy and receive the following message building the Docker image: Connect to gcr.io:443 [gcr.io/172.217.212.82] failed: connect timed out you must modify the build command to add the proxy hosts and ports to be used by the jib-maven-plugin as shown below:">企業プロキシの背後で実行している場合、Dockerイメージを構築する次のメッセージを受信 : <code>Connect to gcr.io:443 [gcr.io/172.217.212.82] failed: connect timed out</code>は、次に示すように、ビルド・コマンドを変更して、<code>jib-maven-plugin</code>で使用されるプロキシ・ホストおよびポートを追加する必要があります:</span></p>

<markup
lang="bash"

>mvn package jib:dockerBuild -Dhttps.proxyHost=host \
    -Dhttps.proxyPort=80 -Dhttp.proxyHost=host -Dhttp.proxyPort=80</markup>
</p>
</div>
<p><span class="merged" id="all.yL8wN" title="原文 : This will result in the following Docker image being created which contains the configuration and server-side artifacts to be use by all deployments.">これにより、次のDockerイメージが作成され、すべてのデプロイメントで使用する構成およびサーバー側アーティファクトが含まれます。</span></p>

<markup


>deployment-example:1.0.0</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.2"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.12z1wf.spl1" title="原文 : If you are running against a remote Kubernetes cluster, you need to tag and push the Docker image to your repository accessible to that cluster.">リモートのKubernetesクラスタに対して実行している場合、Dockerイメージをタグ付けし、そのクラスタにアクセスできるリポジトリにプッシュする必要があります。</span> <span class="merged" id="all.12z1wf.spl2" title="原文 : You also need to prefix the image name in the yaml files below.">また、次の<code>yaml</code>ファイルでイメージ名の前に付ける必要があります。</span> </p>
</p>
</div>
</div>

<h2 id="install-operator"><span class="merged" id="all.LO8kI" title="原文 : Install the Coherence Operator">Coherence Operatorのインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.48Rger" title="原文 : Install the Coherence Operator using your preferred method in the Operator Installation Guide">オペレータ<a href="https://oracle.github.io/coherence-operator/docs/latest/#/installation/01_installation" id="" target="_blank" >「インストレーション・ガイド」</a>で優先メソッドを使用してCoherence Operatorをインストール</span></p>

<p><span class="merged" id="all.2Pour1" title="原文 : Confirm the operator is running, for example:">オペレータが実行中であることを確認します。次に例を示します:</span></p>

<markup
lang="bash"

>kubectl get pods -n coherence-example

NAME                                                     READY   STATUS    RESTARTS   AGE
coherence-operator-controller-manager-74d49cd9f9-sgzjr   1/1     Running   1          27s</markup>

</div>

<h2 id="examples"><span class="merged" id="all.4dY8oM" title="原文 : Run the Examples">例の実行</span></h2>
<div class="section">
<p><span class="merged" id="all.3eP2Fk" title="原文 : Ensure you are in the examples/deployment directory to run the following commands.">次のコマンドを実行するには、<code>examples/deployment</code>ディレクトリにあることを確認します。</span></p>


<h3 id="ex1"><span class="merged" id="all.4XJsVx" title="原文 : Example 1 - Coherence cluster only">例1 - Coherenceクラスタのみ</span></h3>
<div class="section">
<p><span class="merged" id="all.2PwxqV" title="原文 : The first example uses the yaml file src/main/yaml/example-cluster.yaml, which defines a single role storage which will store cluster data.">最初の例では、yamlファイル<code>src/main/yaml/example-cluster.yaml</code>を使用して、クラスタ・データを格納する単一のロール<code>storage</code>を定義します。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.Qp3mW" title="原文 : If you have pushed your Docker image to a remote repository, ensure you update the above file to prefix the image.">Dockerイメージをリモート・リポジトリにプッシュした場合は、イメージのプレフィクスとして前述のファイルを更新してください。</span></p>
</div>

<h4 id="_1_install_the_coherence_cluster_storage_role"><span class="merged" id="all.3jn6mu" title="原文 : 1. Install the Coherence cluster storage role">1. Coherenceクラスタ<code>storage</code>ロールのインストール</span></h4>
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
<p><span class="merged" id="all.iH5zh" title="原文 : Run the following command to view the Pods:">次のコマンドを実行して、ポッドを表示します:</span></p>

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
<p><span class="merged" id="all.2Rqqua" title="原文 : Since we cannot yet access the cluster via Coherence*Extend, we will connect via Coherence console to add data.">Coherence*Extendを介してまだクラスタにアクセスできないため、Coherenceコンソールを介して接続してデータを追加します。</span></p>

<markup
lang="bash"

>kubectl exec -it -n coherence-example example-cluster-storage-0 /coherence-operator/utils/runner console</markup>

<p><span class="merged" id="all.3iSYDh" title="原文 : At the prompt type the following to create a cache called test:">プロンプトで、次のように入力して<code>test</code>というキャッシュを作成します:</span></p>

<markup
lang="bash"

>cache test</markup>

<p><span class="merged" id="all.1zTHPk" title="原文 : Use the following to create 10,000 entries of 100 bytes:">100バイトの10,000エントリを作成するには、次のものを使用します:</span></p>

<markup
lang="bash"

>bulkput 10000 100 0 100</markup>

<p><span class="merged" id="all.3jl3QA" title="原文 : Lastly issue the command size to verify the cache entry count.">最後にコマンド<code>size</code>を発行してキャッシュ・エントリ数を確認します。</span></p>

<p><span class="merged" id="all.3VxTSz" title="原文 : Type bye to exit the console."><code>bye</code>と入力してコンソールを終了します。</span></p>

</div>

<h4 id="_scale_the_storage_role_to_6_members"><span class="merged" id="all.3Zbnq" title="原文 : Scale the storage role to 6 members"><code>storage</code>ロールを6メンバーにスケール</span></h4>
<div class="section">
<p><span class="merged" id="all.191Rar" title="原文 : To scale up the cluster the kubectl scale command can be used:">クラスタをスケール・アップするには、<code>kubectl scale</code>コマンドを使用します:</span></p>

<markup
lang="bash"

>kubectl -n coherence-example scale coherence/example-cluster-storage --replicas=6</markup>

<p><span class="merged" id="all.BD9Up" title="原文 : Use the following to verify all 6 nodes are Running and READY before continuing.">次の情報を使用して、6つのノードがすべて実行中であり、続行する前にREADYであることを確認します。</span></p>

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
<p><span class="merged" id="all.36zkIW" title="原文 : Re-run step 3 above and just use the cache test and size commands to confirm the number of entries is still 10,000.">前述のステップ3を再実行し、<code>cache test</code>および<code>size</code>コマンドを使用してエントリ数がまだ10,000であることを確認するだけです。</span></p>

<p><span class="merged" id="all.s89qo" title="原文 : This confirms that the scale-out was done in a safe manner ensuring no data loss.">これにより、スケールアウトが<code>safe</code>方式で実行され、データ損失がないことが確認されます。</span></p>

</div>
</div>

<h3 id="_scale_the_storage_role_back_to_3_members"><span class="merged" id="all.44wAAG" title="原文 : Scale the storage role back to 3 members"><code>storage</code>ロールを3人のメンバーにスケール・バック</span></h3>
<div class="section">
<p><span class="merged" id="all.3LjGWL" title="原文 : To scale back doewn to three members run the following command:">3人のメンバーに縮小するには、次のコマンドを実行します:</span></p>

<markup
lang="bash"

>kubectl -n coherence-example scale coherence/example-cluster-storage --replicas=3</markup>

<p><span class="merged" id="all.dzMCt" title="原文 : By using the following, you will see that the number of members will gradually scale back to 3 during which the is done in a safe manner ensuring no data loss.">次を使用すると、メンバーの数が徐々に3にスケール・バックされ、その間に<code>safe</code>方式で行われ、データ損失がないことが確認されます。</span></p>

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

<h3 id="ex2"><span class="merged" id="all.2ibT4z" title="原文 : Example 2 - Adding a Proxy role">例2 - プロキシ・ロールの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.AAszQ" title="原文 : The second example uses the yaml file src/main/yaml/example-cluster-proxy.yaml, which adds a proxy server example-cluster-proxy to allow for Coherence*Extend connections via a Proxy server.">2つ目の例では、yamlファイル<code>src/main/yaml/example-cluster-proxy.yaml</code>を使用して、プロキシ・サーバー<code>example-cluster-proxy</code>を追加し、プロキシ・サーバーを介してCoherence*Extend接続を許可します。</span></p>

<p><span class="merged" id="all.2nRzXJ" title="原文 : The additional yaml added below shows:">以下に追加したyamlは、次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.hoRZD" title="原文 : A port called proxy being exposed on 20000">20000で公開される<code>proxy</code>というポート</span></p>

</li>
<li>
<p><span class="merged" id="all.N09nn" title="原文 : The role being set as storage-disabled">storage-disabledとして設定されているロール</span></p>

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


<h4 id="_install_the_proxy_role"><span class="merged" id="all.3PUVLs" title="原文 : Install the proxy role"><code>proxy</code>ロールをインストール</span></h4>
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

<p><span class="merged" id="all.3maywb" title="原文 : Ensure the example-cluster-proxy-0 pod is Running and READY before continuing.">続行する前に、<code>example-cluster-proxy-0</code>ポッドが実行中でREADYであることを確認してください。</span></p>

</div>

<h4 id="_port_forward_the_proxy_port"><span class="merged" id="all.14knpO" title="原文 : Port forward the proxy port">プロキシ・ポートをポート・フォーワード</span></h4>
<div class="section">
<markup>In a separate terminal, run the following:</markup>
<markup
lang="bash"

>    kubectl port-forward -n coherence-example example-cluster-proxy-0 20000:20000</markup>

</div>

<h4 id="_connect_via_cohql_and_add_data"><span class="merged" id="all.43TF82" title="原文 : Connect via CohQL and add data">CohQLを介して接続し、データを追加</span></h4>
<div class="section">
<p><span class="merged" id="all.yaEk9" title="原文 : In a separate terminal, change to the examples/deployments directory and run the following to start Coherence Query Language (CohQL):">別の端末で、<code>examples/deployments</code>ディレクトリに移動し、次のコマンドを実行してCoherence Query Language (CohQL)を起動します:</span></p>

<markup
lang="bash"

>    mvn exec:java

    Coherence Command Line Tool

    CohQL&gt;</markup>

<p><span class="merged" id="all.4AWJNl" title="原文 : Run the following CohQL commands to view and insert data into the cluster.">次の<code>CohQL</code>コマンドを実行して、データを表示してクラスタに挿入します。</span></p>

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

<p><span class="merged" id="all.aRlzN" title="原文 : The above results will show that you can see the data previously inserted and can add new data into the cluster using Coherence*Extend.">前述の結果は、以前に挿入されたデータを確認し、Coherence*Extendを使用して新しいデータをクラスタに追加できることを示しています。</span></p>

</div>
</div>

<h3 id="ex3"><span class="merged" id="all.eH03m" title="原文 : Example 3 - Adding a User application role">例3 - ユーザー・アプリケーション・ロールの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.40206O.spl1" title="原文 : The third example uses the yaml file src/main/yaml/example-cluster-app.yaml, which adds a new role rest.">3つ目の例では、yamlファイル<code>src/main/yaml/example-cluster-app.yaml</code>を使用して、新しいロール<code>rest</code>を追加します。</span> <span class="merged" id="all.40206O.spl2" title="原文 : This role defines a user application which uses Helidon to create a /query endpoint allowing the user to send CohQL commands via this endpoint.">このロールは、<a href="https://helidon.io/" id="" target="_blank" >Helidon</a>を使用して<code>/query</code>エンドポイントを作成し、ユーザーがこのエンドポイントを介してCohQLコマンドを送信できるようにするユーザー・アプリケーションを定義します。</span> </p>

<p><span class="merged" id="all.2nRzXJ.1" title="原文 : The additional yaml added below shows:">以下に追加したyamlは、次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.32CRUo" title="原文 : A port called http being exposed on 8080 for the application">アプリケーションの8080に公開される<code>http</code>というポート</span></p>

</li>
<li>
<p><span class="merged" id="all.N09nn.1" title="原文 : The role being set as storage-disabled">storage-disabledとして設定されているロール</span></p>

</li>
<li>
<p><span class="merged" id="all.22nHTn" title="原文 : Using the storage-cache-config.xml but as storage-disabled">storage-cache-config.xmlを使用しますが、ストレージが無効化されています</span></p>

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


<h4 id="_install_the_rest_role"><span class="merged" id="all.2aa8EF" title="原文 : Install the rest role"><code>rest</code>ロールをインストール</span></h4>
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
<p><span class="merged" id="all.q0Ly" title="原文 : Use the various CohQL commands via the /query endpoint to access, and mutate data in the Coherence cluster."><code>/query</code>エンドポイントを介して様々な<code>CohQL</code>コマンドを使用して、Coherenceクラスタのデータにアクセスし、データを変更します。</span></p>

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
<p><span class="merged" id="all.3gBYNU" title="原文 : The fourth example uses the yaml file src/main/yaml/example-cluster-persistence.yaml, which enabled Active Persistence for the storage role by adding a persistence: element.">4番目の例では、<code>persistence:</code>要素を追加して、<code>storage</code>ロールのアクティブ永続性を有効にするyamlファイル<code>src/main/yaml/example-cluster-persistence.yaml</code>を使用しています。</span></p>

<p><span class="merged" id="all.2yoOdH" title="原文 : The additional yaml added to the storage role below shows:">次のストレージ・ロールに追加された追加のyamlは次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2YXtlG" title="原文 : Active Persistence being enabled via persistence.enabled=true"><code>persistence.enabled=true</code>を介したActive Persistenceの有効化</span></p>

</li>
<li>
<p><span class="merged" id="all.1yXI75" title="原文 : Various Persistence Volume Claim (PVC) values being set under persistentVolumeClaim"><code>persistentVolumeClaim</code>で設定されている様々な永続性ボリューム要求(PVC)の値</span></p>

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

<p><span class="merged" id="all.c57uq.spl1" title="原文 : NOTE:By default, when you enable Coherence Persistence, the required infrastructure in terms of persistent volumes (PV) and persistent volume claims (PVC) is set up automatically.">注意:デフォルトでは、Coherence永続性を有効にすると、永続ボリューム(PV)および永続ボリューム要求(PVC)に関して必要なインフラストラクチャが自動的に設定されます。</span> <span class="merged" id="all.c57uq.spl2" title="原文 : Also, the persistence-mode is set to active.">また、永続性モードは<code>active</code>に設定されます。</span> <span class="merged" id="all.c57uq.spl3" title="原文 : This allows the Coherence cluster to be restarted, and the data to be retained.">これにより、Coherenceクラスタを再起動し、データを保持できます。</span> </p>


<h4 id="_delete_the_existing_deployment"><span class="merged" id="all.3GwFJC" title="原文 : Delete the existing deployment">既存のデプロイメントの削除</span></h4>
<div class="section">
<p><span class="merged" id="all.42aTHL" title="原文 : We must first delete the existing deployment as we need to redeploy to enable Active Persistence.">アクティブ永続性を有効にするために再デプロイする必要があるため、最初に既存のデプロイメントを削除する必要があります。</span></p>

<markup
lang="bash"

>kubectl -n coherence-example delete -f src/main/yaml/example-cluster-app.yaml</markup>

<p><span class="merged" id="all.1ll2AG" title="原文 : Ensure all the pods have terminated before you continue.">続行する前に、すべてのポッドが終了していることを確認してください。</span></p>

</div>

<h4 id="_install_the_cluster_with_persistence_enabled"><span class="merged" id="all.2yEoh9" title="原文 : Install the cluster with Persistence enabled">永続性を有効にしてクラスタをインストール</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl -n coherence-example create -f src/main/yaml/example-cluster-persistence.yaml</markup>

</div>

<h4 id="_view_the_running_pods_and_pvcs"><span class="merged" id="all.10h1OQ" title="原文 : View the running pods and PVC&rsquo;s">実行中のポッドおよびPVCの表示</span></h4>
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

<p><span class="merged" id="all.3H8vXV" title="原文 : Check the Persistent Volumes and PVC are automatically created.">Persistent VolumesおよびPVCが自動的に作成されることを確認します。</span></p>

<markup
lang="bash"

>kubectl get pvc -n coherence-example</markup>

<markup
lang="bash"

>NAME                                           STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistence-volume-example-cluster-storage-0   Bound    pvc-15b46996-eb35-11e9-9b4b-025000000001   1Gi        RWO            hostpath       55s
persistence-volume-example-cluster-storage-1   Bound    pvc-15bd99e9-eb35-11e9-9b4b-025000000001   1Gi        RWO            hostpath       55s
persistence-volume-example-cluster-storage-2   Bound    pvc-15e55b6b-eb35-11e9-9b4b-025000000001   1Gi        RWO            hostpath       55s</markup>

<p><span class="merged" id="all.199DYC" title="原文 : Wait until all nodes are Running and READY before continuing.">すべてのノードが実行されてREADYになるまで待機してから続行します。</span></p>

</div>

<h4 id="_check_active_persistence_is_enabled"><span class="merged" id="all.2kMZc0" title="原文 : Check Active Persistence is enabled">Active Persistenceの確認が有効です</span></h4>
<div class="section">
<p><span class="merged" id="all.225bjr" title="原文 : Use the following to view the logs of the example-cluster-storage-0 pod and validate that Active Persistence is enabled.">次のものを使用して、<code>example-cluster-storage-0</code>ポッドのログを表示し、Active Persistenceが有効になっていることを確認します。</span></p>

<markup
lang="bash"

>kubectl logs example-cluster-storage-0 -c coherence -n coherence-example | grep 'Created persistent'</markup>

<markup
lang="bash"

>...
019-10-10 04:52:00.179/77.023 Oracle Coherence GE 12.2.1.4.0 &lt;Info&gt; (thread=DistributedCache:PartitionedCache, member=4): Created persistent store /persistence/active/example-cluster/PartitionedCache/126-2-16db40199bc-4
2019-10-10 04:52:00.247/77.091 Oracle Coherence GE 12.2.1.4.0 &lt;Info&gt; (thread=DistributedCache:PartitionedCache, member=4): Created persistent store /persistence/active/example-cluster/PartitionedCache/127-2-16db40199bc-4
...</markup>

<p><span class="merged" id="all.2SnqVd" title="原文 : If you see output similar to above then Active Persistence is enabled.">上記のような出力が表示された場合は、Active Persistenceが有効になっています。</span></p>

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

<p><span class="merged" id="all.1zTHPk.1" title="原文 : Use the following to create 10,000 entries of 100 bytes:">100バイトの10,000エントリを作成するには、次のものを使用します:</span></p>

<markup
lang="bash"

>bulkput 10000 100 0 100</markup>

<p><span class="merged" id="all.3jl3QA.1" title="原文 : Lastly issue the command size to verify the cache entry count.">最後にコマンド<code>size</code>を発行してキャッシュ・エントリ数を確認します。</span></p>

<p><span class="merged" id="all.3VxTSz.1" title="原文 : Type bye to exit the console."><code>bye</code>と入力してコンソールを終了します。</span></p>

</div>

<h4 id="_delete_the_cluster"><span class="merged" id="all.1i1bZX"  title="原文:: Delete the cluster">クラスタの削除</span></h4>
<div class="section">
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3cClPo" title="原文 : This will not delete the PVC&rsquo;s.">これにより、PVCは削除されません。</span></p>
</div>
<markup
lang="bash"

>kubectl -n coherence-example delete -f src/main/yaml/example-cluster-persistence.yaml</markup>

<p><span class="merged" id="all.ACEGV" title="原文 : Use kubectl get pods -n coherence-example to confirm the pods have terminated."><code>kubectl get pods -n coherence-example</code>を使用して、ポッドが終了したことを確認します。</span></p>

</div>

<h4 id="_confirm_the_pvcs_are_still_present"><span class="merged" id="all.OUtg9" title="原文 : Confirm the PVC&rsquo;s are still present">PVCがまだ存在することを確認</span></h4>
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

<p><span class="merged" id="all.2IqYDD" title="原文 : Finally, you should see the following indicating active recovery has completed.">最後に、アクティブなリカバリが完了したことを示す次のものが表示されます。</span></p>

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

<p><span class="merged" id="all.1R3PV1" title="原文 : Lastly issue the command size to verify the cache entry count is 10,000 meaning the data has been recovered.">最後にコマンド<code>size</code>を発行して、データがリカバリされたことを意味するキャッシュ・エントリ数が10,000であることを確認します。</span></p>

<p><span class="merged" id="all.3VxTSz.2" title="原文 : Type bye to exit the console."><code>bye</code>と入力してコンソールを終了します。</span></p>

</div>
</div>

<h3 id="metrics"><span class="merged" id="all.zoIy" title="原文 : View Cluster Metrics via Grafana">Grafanaを使用したクラスタ・メトリクスの表示</span></h3>
<div class="section">
<p><span class="merged" id="all.3SUF3F" title="原文 : If you wish to view metrics via Grafana, you must carry out the following steps before you install any of the examples above.">Grafanaを使用してメトリクスを表示する場合は、前述の例をインストールする前に次のステップを実行する必要があります。</span></p>


<h4 id="_install_prometheus_operator"><span class="merged" id="all.3ZIuve" title="原文 : Install Prometheus Operator">Prometheusオペレータのインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.1Bea7J" title="原文 : Add the stable helm repository"><code>stable</code> helmリポジトリの追加</span></p>

<markup
lang="bash"

>helm repo add stable https://charts.helm.sh/stable

helm repo update</markup>

</div>

<h4 id="_create_prometheus_pre_requisites"><span class="merged" id="all.238tRR" title="原文 : Create Prometheus pre-requisites">Prometheus前提条件の作成</span></h4>
<div class="section">
<markup
lang="bash"

>    kubectl apply -f src/main/yaml/prometheus-rbac.yaml</markup>

</div>

<h4 id="_create_config_maps_for_datasource_and_dashboards"><span class="merged" id="all.K9WpI" title="原文 : Create Config Maps for datasource and dashboards">データソースおよびダッシュボードの構成マップの作成</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl -n coherence-example create -f src/main/yaml/grafana-datasource-config.yaml

kubectl -n coherence-example label configmap demo-grafana-datasource grafana_datasource=1

kubectl -n coherence-example create -f https://oracle.github.io/coherence-operator/dashboards/latest/coherence-grafana-dashboards.yaml

kubectl -n coherence-example label configmap coherence-grafana-dashboards grafana_dashboard=1</markup>

</div>

<h4 id="_install_prometheus_operator_2"><span class="merged" id="all.3ZIuve.1" title="原文 : Install Prometheus Operator">Prometheusオペレータのインストール</span></h4>
<div class="section">
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3ZoeLN" title="原文 : If you have already installed Prometheus Operator before on this Kubernetes Cluster then set --set prometheusOperator.createCustomResource=false.">このKubernetesクラスタの前にPrometheusオペレータがすでにインストールされている場合は、<code>--set prometheusOperator.createCustomResource=false</code>を設定します。</span></p>
</div>
<p><span class="merged" id="all.1d58f6" title="原文 : Issue the following command to install the Prometheus Operator using Helm:">次のコマンドを発行して、Helmを使用してPrometheusオペレータをインストールします:</span></p>

<markup
lang="bash"

>helm install --namespace coherence-example --version 8.13.9 \
    --set grafana.enabled=true \
    --set prometheusOperator.createCustomResource=true \
    --values src/main/yaml/prometheus-values.yaml prometheus stable/prometheus-operator</markup>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.3Sn6tn" title="原文 : Note: for Helm version 2, use the following:">ノート : Helmバージョン2では、次を使用します:</span></p>

<markup
lang="bash"

>helm install --namespace coherence-example --version 8.13.9 \
    --set grafana.enabled=true --name prometheus \
    --set prometheusOperator.createCustomResource=true \
    --values src/main/yaml/prometheus-values.yaml stable/prometheus-operator</markup>
</p>
</div>
<p><span class="merged" id="all.203wIn" title="原文 : Use the following to view the installed pods:">インストールされているポッドを表示するには、次のものを使用します:</span></p>

<markup
lang="bash"

>kubectl get pods -n coherence-example</markup>

<markup
lang="bash"

>NAME                                                   READY   STATUS    RESTARTS   AGE
coherence-operator-578497bb5b-w89kt                    1/1     Running   0          136m
prometheus-grafana-6bb6d86f86-rgsm6                    2/2     Running   0          85s
prometheus-kube-state-metrics-5496457bd-vjqgd          1/1     Running   0          85s
prometheus-prometheus-node-exporter-29lrp              1/1     Running   0          85s
prometheus-prometheus-node-exporter-82b5w              1/1     Running   0          85s
prometheus-prometheus-node-exporter-mbj2k              1/1     Running   0          85s
prometheus-prometheus-oper-operator-6bc97bc4d7-67qjp   2/2     Running   0          85s
prometheus-prometheus-prometheus-oper-prometheus-0     3/3     Running   1          68s</markup>

<p><span class="merged" id="all.2wtekS.spl1" title="原文 : Remember to now install one of the examples above.">ここで、上記の例のいずれかをインストールしてください。</span> <span class="merged" id="all.2wtekS.spl2" title="原文 : If you have already had the examples installed, you must delete and re-install once you have installed Prometheus operator.">例がすでにインストールされている場合は、Prometheusオペレータをインストールした後、削除して再インストールする必要があります。</span> </p>

</div>

<h4 id="grafana"><span class="merged" id="all.3H7sRm" title="原文 : Port Forward and Access Grafana">ポート・フォワードとGrafanaへのアクセス</span></h4>
<div class="section">
<p><span class="merged" id="all.3NlIpq" title="原文 : Port-forward the ports for these components using the scripts in the examples/deployment/scripts/ directory."><code>examples/deployment/scripts/</code>ディレクトリのスクリプトを使用して、これらのコンポーネントのポートをポートフォワードします。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1QlYQH" title="原文 : Port-forward Grafana for viewing metrics">メトリクスを表示するためのポート・フォワードGrafana</span></p>

</li>
</ul>
<markup
lang="bash"

>./port-forward-grafana.sh coherence-example</markup>

<markup
lang="bash"

>Port-forwarding coherence-operator-grafana-8454698bcf-5dqvm in coherence-example
Open the following URL: http://127.0.0.1:3000/d/coh-main/coherence-dashboard-main
Forwarding from 127.0.0.1:3000 -&gt; 3000
Forwarding from [::1]:3000 -&gt; 3000</markup>

<p><span class="merged" id="all.1pSdhU" title="原文 : The default username is admin and the password is prom-operator.">デフォルトのユーザー名は<code>admin</code>で、パスワードは<code>prom-operator</code>です。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.8mN4S" title="原文 : Port-forward Kibana for viewing log messages">ログ・メッセージを表示するポート・フォワードKibana</span></p>

</li>
</ul>
<markup
lang="bash"

>./port-forward-kibana.sh coherence-example</markup>

<markup
lang="bash"

>Port-forwarding kibana-67c4f74ffb-nspwz in coherence-example
Open the following URL: http://127.0.0.1:5601/
Forwarding from 127.0.0.1:5601 -&gt; 5601
Forwarding from [::1]:5601 -&gt; 5601</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.mncB" title="原文 : Port-forward Prometheus (for troubleshooting only)">ポート・フォワードPrometheus (トラブルシューティングのみ)</span></p>

</li>
</ul>
<markup
lang="bash"

>./port-forward-prometheus.sh coherence-example</markup>

<markup
lang="bash"

>Port-forwarding prometheus-prometheus-prometheus-oper-prometheus-0 in coherence-example
Open the following URL: http://127.0.0.1:9090/targets
Forwarding from 127.0.0.1:9090 -&gt; 9090
Forwarding from [::1]:9090 -&gt; 9090</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3HJMUS" title="原文 : Open the URLS described above.">前述のURLSを開きます。</span></p>

</li>
</ul>
</div>

<h4 id="_troubleshooting"><span class="merged" id="all.1y3Rd3"  title="原文:: Troubleshooting">トラブルシューティング</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.38wU6t" title="原文 : It may take up to 5 minutes for data to start appearing in Grafana.">Grafanaにデータが表示されるまでに最大5分かかることがあります。</span></p>

</li>
<li>
<p><span class="merged" id="all.4NFdjC.spl1" title="原文 : If you are not seeing data after 5 minutes, access the Prometheus endpoint as described above.">5分後にデータが表示されない場合は、前述のようにPrometheusエンドポイントにアクセスします。</span> <span class="merged" id="all.4NFdjC.spl2" title="原文 : Ensure that the endpoints named coherence-example/example-cluster-storage-metrics/0 (3/3 up) are up."><code>coherence-example/example-cluster-storage-metrics/0 (3/3 up)</code>という名前のエンドポイントが稼働していることを確認します。</span> </p>
<markup>If the endpoints are not up then wait 60 seconds and refresh the browser.</markup>
</li>
<li>
<p><span class="merged" id="all.2UBNj0.spl1" title="原文 : If you do not see any values in the Cluster Name dropdown in Grafana, ensure the endpoints are up as described above and click on Manage Alerts and then Back to Main Dashboard.">Grafanaの<code>Cluster Name</code>ドロップダウンに値が表示されない場合は、前述のようにエンドポイントが稼働中であることを確認し、<code>Manage Alerts</code>、<code>Back to Main Dashboard</code>の順にクリックします。</span> <span class="merged" id="all.2UBNj0.spl2" title="原文 : This will re-query the data and load the list of clusters.">これにより、データが再問合せされ、クラスタのリストがロードされます。</span> </p>

</li>
</ul>
</div>
</div>

<h3 id="cleaning-up"><span class="merged" id="all.18hyPz"  title="原文:: Cleaning Up"> クリーンアップ</span></h3>
<div class="section">

<h4 id="_delete_the_cluster_2"><span class="merged" id="all.1i1bZX.1"  title="原文:: Delete the cluster">クラスタの削除</span></h4>
<div class="section">
<markup
lang="bash"

>kubectl -n coherence-example delete -f src/main/yaml/example-cluster-persistence.yaml</markup>

</div>

<h4 id="_delete_the_pvcs"><span class="merged" id="all.1Zow6Z" title="原文 : Delete the PVC&rsquo;s">PVCの削除</span></h4>
<div class="section">
<p><span class="merged" id="all.1CEt7j" title="原文 : Ensure all the pods have all terminated before you delete the PVC&rsquo;s.">PVCを削除する前に、すべてのポッドが終了していることを確認してください。</span></p>

<markup
lang="bash"

>kubectl get pvc -n coherence-example | sed 1d | awk '{print $1}' | xargs kubectl delete pvc -n coherence-example</markup>

</div>

<h4 id="_remove_the_coherence_operator"><span class="merged" id="all.2tMG9g" title="原文 : Remove the Coherence Operator">Coherence Operatorの削除</span></h4>
<div class="section">
<p><span class="merged" id="all.1IfmoJ" title="原文 : Uninstall the Coherence operator using the undeploy commands for whichever method you chose to install it.">インストールするために選択したメソッドにかかわらず、アンデプロイ・コマンドを使用してCoherence Operatorをアンインストールします。</span></p>

</div>

<h4 id="_delete_prometheus_operator"><span class="merged" id="all.2NfMny" title="原文 : Delete Prometheus Operator">Prometheusオペレータの削除</span></h4>
<div class="section">
<markup
lang="bash"

> helm delete prometheus --namespace coherence-example

 kubectl -n coherence-example delete -f src/main/yaml/grafana-datasource-config.yaml

 kubectl -n coherence-example delete configmap coherence-grafana-dashboards

 kubectl delete -f src/main/yaml/prometheus-rbac.yaml</markup>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.1"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.35KAnI" title="原文 : For Helm version 2 use the following:">Helmバージョン2では、次を使用します:</span></p>

<markup
lang="bash"

>helm delete prometheus --purge</markup>
</p>
</div>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.qjgM7" title="原文 : You can optionally delete the Prometheus Operator Custom Resource Definitions (CRD&rsquo;s) if you are not going to install Prometheus Operator again.">Prometheusオペレータを再度インストールしない場合は、必要に応じてPrometheus Operator Custom Resource Definitions (CRD)を削除できます。</span></p>
</div>
<markup
lang="bash"

>kubectl delete crd alertmanagers.monitoring.coreos.com
kubectl delete crd podmonitors.monitoring.coreos.com
kubectl delete crd prometheuses.monitoring.coreos.com
kubectl delete crd prometheusrules.monitoring.coreos.com
kubectl delete crd prometheusrules.monitoring.coreos.com
kubectl delete crd servicemonitors.monitoring.coreos.com
kubectl delete crd thanosrulers.monitoring.coreos.com</markup>

<p><span class="merged" id="all.1Wb6sj" title="原文 : A shorthand way of doing this if you are running Linux/Mac is:">Linux/Macを実行している場合、この簡単な方法は次のとおりです:</span></p>

<markup
lang="bash"

>kubectl get crds -n coherence-example | grep monitoring.coreos.com | awk '{print $1}' | xargs kubectl delete crd</markup>

</div>
</div>
</div>
</doc-view>
