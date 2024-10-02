<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coherence_federation"><span class="merged" id="all.bI7fe"  title="原文:: Coherence Federation">Coherenceフェデレーション</span></h2>
<div class="section">
<p><span class="merged" id="all.3nec9n.spl1" title="原文 : This simple example demonstrates the Coherence federation feature.">この単純な例は、Coherenceフェデレーション機能を示しています。</span> <span class="merged" id="all.3nec9n.spl2" title="原文 : It shows how to deploy two Coherence clusters that federating data between them using the Coherence Operator.">Coherence Operatorを使用して、データ間にデータをフェデレートする2つのCoherenceクラスタをデプロイする方法を示します。</span> <span class="merged" id="all.3nec9n.spl3" title="原文 : The Coherence federation feature requires Coherence Grid Edition.">Coherenceフェデレーション機能には、Coherence Grid Editionが必要です。</span> <span class="merged" id="all.3nec9n.spl4" title="原文 : See Obtain Coherence Images on how to get a commercial Coherence image.">商用Coherenceイメージの取得方法は、<a href="https://oracle.github.io/coherence-operator/docs/latest/#/docs/installation/04_obtain_coherence_images" id="" target="_blank" >「Coherenceイメージの取得」</a>を参照してください。</span> </p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.9"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.3IZ9uF" title="原文 :  The complete source code for this example is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />この例の完全なソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/100_federation" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>

<h3 id="_what_the_example_will_cover"><span class="merged" id="all.2Qjxxs.1" title="原文 : What the Example will Cover">例でカバーされる内容</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.OLysA.1" title="原文 : Install the Coherence Operator"><router-link @click.native="this.scrollFix('#install-operator')" to="#install-operator">Coherence Operatorのインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3bRBBu.1" title="原文 : Create the example namespace"><router-link @click.native="this.scrollFix('#create-the-example-namespace')" to="#create-the-example-namespace">サンプルのネームスペースの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1dYCOx" title="原文 : Create image pull and config store secrets"><router-link @click.native="this.scrollFix('#create-secret')" to="#create-secret">イメージ・プルおよび構成ストア・シークレットの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.eItcR" title="原文 : Run the Example"><router-link @click.native="this.scrollFix('#example')" to="#example">例の実行</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2b7AjH" title="原文 : Cleaning Up"><router-link @click.native="this.scrollFix('#cleanup')" to="#cleanup">クリーン・アップしています</router-link></span></p>

</li>
</ul>
</div>

<h3 id="install-operator"><span class="merged" id="all.LO8kI.1" title="原文 : Install the Coherence Operator">Coherence Operatorのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2UE6k0" title="原文 : To run the examples below, you will need to have installed the Coherence Operator, do this using whatever method you prefer from the Installation Guide.">次の例では、Coherence Operatorをインストールし、<a href="https://oracle.github.io/coherence-operator/docs/latest/#/docs/installation/01_installation" id="" target="_blank" >「インストール・ガイド」</a>から必要なメソッドを使用してインストールする必要があります。</span></p>

<p><span class="merged" id="all.2R6fzo" title="原文 : Once you complete, confirm the operator is running, for example:">完了したら、次のようにオペレータが実行中であることを確認します:</span></p>

<markup
lang="bash"

>kubectl get pods -n coherence

NAME                                                     READY   STATUS    RESTARTS   AGE
coherence-operator-controller-manager-74d49cd9f9-sgzjr   1/1     Running   1          27s</markup>

</div>
</div>

<h2 id="create-the-example-namespace"><span class="merged" id="all.3ezoGY.1" title="原文 : Create the example namespace">サンプルのネームスペースの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.3GQp8e" title="原文 : First, run the following command to create the namespace, coherence-example, for the example:">まず、次のコマンドを実行して、例のようにネームスペース、coherence-exampleを作成します:</span></p>

<markup
lang="bash"

>kubectl create namespace coherence-example

namespace/coherence-example created</markup>


<h3 id="create-secret"><span class="merged" id="all.8nkYf" title="原文 : Create image pull and configure store secrets">イメージ・プルを作成し、ストア・シークレットを構成</span></h3>
<div class="section">
<p><span class="merged" id="all.DAAGv" title="原文 : This example reqires two secrets:">この例では、2つのシークレットが必要です:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.7PGAw" title="原文 : An image pull secret named ocr-pull-secret containing your OCR credentials to be used by the example.">例で使用するOCR資格証明を含むocr-pull-secretという名前のイメージ・プル・シークレット。</span></p>

</li>
</ul>
<p><span class="merged" id="all.2EBCmf" title="原文 : Use a command similar to the following to create the image pull secret:">イメージ・プル・シークレットを作成するには、次のようなコマンドを使用します:</span></p>

<markup
lang="bash"

>kubectl create secret docker-registry ocr-pull-secret \
    --docker-server=container-registry.oracle.com \
    --docker-username="&lt;username&gt;" --docker-password="&lt;password&gt;" \
    --docker-email="&lt;email&gt;" -n coherence-example</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3ZhtZc" title="原文 : A configure store secret named storage-config to store the Coherence configuration files.">Coherence構成ファイルをストレージするためにstorage-configという名前の構成ストア・シークレット。</span></p>

</li>
</ul>
<p><span class="merged" id="all.8kZj3" title="原文 : Run the following command to create the configure store secret:">構成ストア・シークレットを作成するには、次のコマンドを実行します:</span></p>

<markup
lang="bash"

>kubectl create secret generic storage-config -n coherence-example \
    --from-file=src/main/resources/tangosol-coherence-override.xml \
    --from-file=src/main/resources/storage-cache-config.xml</markup>

</div>

<h3 id="example"><span class="merged" id="all.oJSYR"  title="原文:: Run the Example"> 例の実行</span></h3>
<div class="section">
<p><span class="merged" id="all.4AEqDK.spl1" title="原文 : Ensure you are in the examples/federation directory to run the example.">例を実行するには、<code>examples/federation</code>ディレクトリにいることを確認します。</span> <span class="merged" id="all.4AEqDK.spl2" title="原文 : This example uses the yaml files src/main/yaml/primary-cluster.yaml and src/main/yaml/secondary-cluster.yaml, which define a primary cluster and a secondary cluster.">この例では、プライマリ・クラスタおよびセカンダリ・クラスタを定義するyamlファイル<code>src/main/yaml/primary-cluster.yaml</code>および<code>src/main/yaml/secondary-cluster.yaml</code>を使用します。</span> </p>


<h4 id="_1_install_the_coherence_clusters"><span class="merged" id="all.3PWXms" title="原文 : 1. Install the Coherence clusters">1. Coherenceクラスタのインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.496Ttw" title="原文 : Run the following commands to create the primary and secondary clusters:">次のコマンドを実行して、プライマリ・クラスタおよびセカンダリ・クラスタを作成します:</span></p>

<markup
lang="bash"

>kubectl -n coherence-example create -f src/main/yaml/primary-cluster.yaml

coherence.coherence.oracle.com/primary-cluster created</markup>

<markup
lang="bash"

>kubectl -n coherence-example create -f src/main/yaml/secondary-cluster.yaml

coherence.coherence.oracle.com/secondary-cluster created</markup>

</div>

<h4 id="_2_list_the_created_coherence_clusters"><span class="merged" id="all.4bBJrk" title="原文 : 2. List the created Coherence clusters">2. 作成されたCoherenceクラスタのリスト</span></h4>
<div class="section">
<p><span class="merged" id="all.1krzcf" title="原文 : Run the following command to list the clusters:">クラスタをリストするには、次のコマンドを実行します:</span></p>

<markup
lang="bash"

>kubectl -n coherence-example get coherence

NAME                CLUSTER             ROLE                REPLICAS   READY   PHASE
primary-cluster     primary-cluster     primary-cluster     2          2       Ready
secondary-cluster   secondary-cluster   secondary-cluster   2          2       Ready</markup>

<p><span class="merged" id="all.8tMnX" title="原文 : To see the Coherence cache configuration file loaded from the secret volumn we defined, run the following command:">定義したシークレットvolumnからロードされたCoherenceキャッシュ構成ファイルを表示するには、次のコマンドを実行します:</span></p>

<markup
lang="bash"

>kubectl logs -n coherence-example primary-cluster-0 | grep "Loaded cache"

... Oracle Coherence GE 14.1.1.0.0 &lt;Info&gt; (thread=main, member=n/a): Loaded cache configuration from "file:/config/storage-cache-config.xml"</markup>

</div>

<h4 id="_3_view_the_running_pods"><span class="merged" id="all.3pgoei.1" title="原文 : 3. View the running pods">3. 実行中のポッドの表示</span></h4>
<div class="section">
<p><span class="merged" id="all.iH5zh.1" title="原文 : Run the following command to view the Pods:">次のコマンドを実行してポッドを表示します:</span></p>

<markup
lang="bash"

>kubectl -n coherence-example get pods</markup>

<markup
lang="bash"

>NAME                  READY   STATUS    RESTARTS   AGE
primary-cluster-0     1/1     Running   0          83s
primary-cluster-1     1/1     Running   0          83s
secondary-cluster-0   1/1     Running   0          74s
secondary-cluster-1   1/1     Running   0          73s</markup>

</div>

<h4 id="_4_connect_to_the_coherence_console_inside_the_primary_cluster_to_add_data"><span class="merged" id="all.1KNz6R" title="原文 : 4. Connect to the Coherence Console inside the primary cluster to add data">4. プライマリ・クラスタ内のCoherenceコンソールに接続してデータを追加</span></h4>
<div class="section">
<p><span class="merged" id="all.4OOCaP" title="原文 : We will connect via Coherence console to add some data using the following commands:">Coherenceコンソールを介して接続し、次のコマンドを使用してデータを追加します:</span></p>

<markup
lang="bash"

>kubectl exec -it -n coherence-example primary-cluster-0 /coherence-operator/utils/runner console</markup>

<p><span class="merged" id="all.3iSYDh.3" title="原文 : At the prompt type the following to create a cache called test:">プロンプトで、次のように入力して<code>test</code>というキャッシュを作成します:</span></p>

<markup
lang="bash"

>cache test</markup>

<p><span class="merged" id="all.2zK9Z2" title="原文 : Use the following to add an entry with &quot;primarykey&quot; and &quot;primaryvalue&quot;:">「primarykey」および「primaryvalue」を含むエントリを追加するには、次を使用します:</span></p>

<markup
lang="bash"

>put "primarykey" "primaryvalue"</markup>

<p><span class="merged" id="all.1zTHPk.2" title="原文 : Use the following to create 10,000 entries of 100 bytes:">100バイトの10,000エントリを作成するには、次を使用します:</span></p>

<markup
lang="bash"

>bulkput 10000 100 0 100</markup>

<p><span class="merged" id="all.4I6SLd.spl1" title="原文 : Lastly issue the command size to verify the cache entry count.">最後に、コマンド<code>size</code>を発行して、キャッシュ・エントリ数を確認します。</span> <span class="merged" id="all.4I6SLd.spl2" title="原文 : It should be 10001.">10001になります。</span> </p>

<p><span class="merged" id="all.3VxTSz.3" title="原文 : Type bye to exit the console."><code>bye</code>と入力してコンソールを終了します。</span></p>

</div>

<h4 id="_6_connect_to_the_coherence_console_inside_the_secondary_cluster_to_verify_that_data_is_federated_from_primary_cluster"><span class="merged" id="all.2MtwT3" title="原文 : 6. Connect to the Coherence Console inside the secondary cluster to verify that data is federated from primary cluster">6. セカンダリ・クラスタ内のCoherenceコンソールに接続して、データがプライマリ・クラスタからフェデレートされていることを確認</span></h4>
<div class="section">
<p><span class="merged" id="all.27QuPy" title="原文 : We will connect via Coherence console to confirm that the data we added to the primary cluster is federated to the secondary cluster.">Coherenceコンソールを使用して接続し、プライマリ・クラスタに追加したデータがセカンダリ・クラスタにフェデレートされていることを確認します。</span></p>

<markup
lang="bash"

>kubectl exec -it -n coherence-example secondary-cluster-0 /coherence-operator/utils/runner console</markup>

<p><span class="merged" id="all.1vEHfM" title="原文 : At the prompt type the following to set the cache to test:">プロンプトで、次のように入力してキャッシュを<code>test</code>に設定します:</span></p>

<markup
lang="bash"

>cache test</markup>

<p><span class="merged" id="all.2kB1r1" title="原文 : Use the following to get entry with &quot;primarykey&quot;:">"primarykey"のエントリを取得するには、次を使用します:</span></p>

<markup
lang="bash"

>get "primarykey"
primaryvalue</markup>

<p><span class="merged" id="all.I38XE.spl1" title="原文 : Issue the command size to verify the cache entry count.">コマンド<code>size</code>を発行して、キャッシュ・エントリ数を確認します。</span> <span class="merged" id="all.I38XE.spl2" title="原文 : It should be 10001.">10001になります。</span> </p>

<p><span class="merged" id="all.2VP1oa.spl1" title="原文 : Our federation has Active/Active topology.">フェデレーションにはアクティブ/アクティブ・トポロジがあります。</span> <span class="merged" id="all.2VP1oa.spl2" title="原文 : So, the data changes in both primary and secondary clusters are federated between the clusters.">そのため、プライマリ・クラスタとセカンダリ・クラスタの両方のデータ変更がクラスタ間でフェデレートされます。</span> <span class="merged" id="all.2VP1oa.spl3" title="原文 : Use the following to add an entry with &quot;secondarykey&quot; and &quot;secondaryvalue&quot;:">"secondarykey"および"secondaryvalue"を含むエントリを追加するには、次を使用します:</span> </p>

<markup
lang="bash"

>put "secondarykey" "secondaryvalue"</markup>

</div>

<h4 id="_7_confirm_the_primary_cluster_also_received_secondarykey_secondaryvalue_entry"><span class="merged" id="all.43ZSnM" title="原文 : 7. Confirm the primary cluster also received &quot;secondarykey&quot;, &quot;secondaryvalue&quot; entry">7. プライマリ・クラスタが"secondarykey"、"secondaryvalue"エントリも受信したことを確認</span></h4>
<div class="section">
<p><span class="merged" id="all.3JZNF2" title="原文 : Follow the command in the previous section to connect to the Coherence Console inside the primary cluster.">前のセクションのコマンドに従って、プライマリ・クラスタ内のCoherenceコンソールに接続します。</span></p>

<p><span class="merged" id="all.QpwAQ" title="原文 : Use the following command to confirm that entry with &quot;secondarykey&quot; is federated to primary cluster:">次のコマンドを使用して、「secondarykey」を含むエントリがプライマリ・クラスタにフェデレートされていることを確認します:</span></p>

<markup
lang="bash"

>get "secondarykey"
secondaryvalue</markup>

</div>
</div>

<h3 id="cleanup"><span class="merged" id="all.3918q1"  title="原文:: Cleaning up">クリーンアップ</span></h3>
<div class="section">
<p><span class="merged" id="all.35Kt3C" title="原文 : Use the following commands to delete the primary and secondary clusters:">プライマリおよびセカンダリ・クラスタを削除するには、次のコマンドを使用します:</span></p>

<markup
lang="bash"

>kubectl -n coherence-example delete -f src/main/yaml/primary-cluster.yaml

kubectl -n coherence-example delete -f src/main/yaml/secondary-cluster.yaml</markup>

<p><span class="merged" id="all.1IfmoJ.1" title="原文 : Uninstall the Coherence operator using the undeploy commands for whichever method you chose to install it.">インストールするために選択したメソッドに対してアンデプロイ・コマンドを使用して、Coherenceオペレータをアンインストールします。</span></p>

</div>
</div>
</doc-view>
