<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_performance_testing_in_kubernetes"><span class="merged" id="all.10LHR1" title="原文 : Performance Testing in Kubernetes">Kubernetesのパフォーマンス・テスト</span></h2>
<div class="section">
<p><span class="merged" id="all.4NjpQ2.spl1" title="原文 : Many customers use Coherence because they want access to data at in-memory speeds.">多くのお客様は、インメモリー速度でデータにアクセスする必要があるため、Coherenceを使用します。</span> <span class="merged" id="all.4NjpQ2.spl2" title="原文 : Customers who want the best performance from their application typically embark on performance testing and load testing of their application.">アプリケーションからの最高のパフォーマンスを求めるお客様は、通常、アプリケーションのパフォーマンス・テストと負荷テストを実施します。</span> <span class="merged" id="all.4NjpQ2.spl3" title="原文 : When doing this sort of testing on Kubernetes, it is useful to understand the ways that your Kubernetes environment can impact your test results.">Kubernetesでこの種のテストを実行する場合、Kubernetes環境がテスト結果に与える影響を理解すると便利です。</span> </p>

</div>

<h2 id="_where_are_your_nodes"><span class="merged" id="all.2dCipO" title="原文 : Where are your Nodes?">ノードはどこですか。</span></h2>
<div class="section">
<p><span class="merged" id="all.2lQuKE.spl1" title="原文 : When an application has been deployed into Kubernetes, pods will typically be distributed over many nodes in the Kubernetes cluster.">アプリケーションがKubernetesにデプロイされると、ポッドは通常、Kubernetesクラスタ内の多くのノードに分散されます。</span> <span class="merged" id="all.2lQuKE.spl2" title="原文 : When deploying into Kubernetes cluster in the cloud, for example on Oracle OKE, the nodes can be distributed across different availability zones.">Oracle OKEなど、クラウド内のKubernetesクラスタにデプロイする場合、ノードを異なる可用性ゾーンに分散できます。</span> <span class="merged" id="all.2lQuKE.spl3" title="原文 : These zones are effectively different data centers, meaning that the network speed can differ considerable between nodes in different zones.">これらのゾーンは事実上異なるデータセンターであるため、ネットワーク速度は異なるゾーンのノード間でかなり異なる可能性があります。</span> <span class="merged" id="all.2lQuKE.spl4" title="原文 : Performance testing in this sort of environment can be difficult if you use default Pod scheduling.">デフォルトのポッド・スケジューリングを使用すると、この種の環境でパフォーマンス・テストが困難になる場合があります。</span> <span class="merged" id="all.2lQuKE.spl5" title="原文 : Different test runs could distribute Pods to different nodes, in different zones, and skew results depending on how &quot;far&quot; test clients and servers are from each other.">異なるテスト実行によって、ポッドがゾーンごとに異なるノードに分散され、テスト・クライアントとサーバーが相互にどのように変化するかに応じて偏りが発生する可能性があります。</span> <span class="merged" id="all.2lQuKE.spl6" title="原文 : For example, when testing a simple Coherence EntryProcessor invocation in a Kubernetes cluster spread across zones, we saw the 95% response time when the client and server were in the same zone was 0.1 milli-seconds.">たとえば、ゾーン間で分散されたKubernetesクラスタで単純なCoherence <code>EntryProcessor</code>の呼出しをテストする場合、クライアントとサーバーが同じゾーン内にあるときに95%のレスポンス時間が0.1ミリ秒になりました。</span> <span class="merged" id="all.2lQuKE.spl7" title="原文 : When the client and server were in different zones, the 95% response time could be as high as 0.8 milli-seconds.">クライアントとサーバーが異なるゾーンにある場合、95%のレスポンス時間は0.8ミリ秒と同じになる可能性があります。</span> <span class="merged" id="all.2lQuKE.spl8" title="原文 : This difference is purely down to the network distance between nodes.">この違いは、ノード間のネットワーク距離までです。</span> <span class="merged" id="all.2lQuKE.spl9" title="原文 : Depending on the actual use-cases being tested, this difference might not have much impact on overall response times, but for simple operations it can be a significant enough overhead to impact test results.">テストされる実際の使用ケースによっては、この差異がレスポンス時間全体に大きく影響しない可能性がありますが、単純な操作の場合、テスト結果に影響する十分なオーバーヘッドとなる可能性があります。</span> </p>

<p><span class="merged" id="all.2vSRxL.spl1" title="原文 : The solution to the issue described above is to use Pod scheduling to fix the location of the Pods to be used for tests.">前述の問題の解決策は、ポッド・スケジューリングを使用して、テストに使用するポッドのロケーションを修正することです。</span> <span class="merged" id="all.2vSRxL.spl2" title="原文 : In a cluster like Oracle OKE, this would ensure all the Pods will be scheduled into the same availability zone.">Oracle OKEのようなクラスタでは、すべてのポッドが同じ可用性ゾーンにスケジュールされるようにします。</span> </p>


<h3 id="_finding_node_zones"><span class="merged" id="all.RCBqE" title="原文 : Finding Node Zones">ノード・ゾーンの検索</span></h3>
<div class="section">
<p><span class="merged" id="all.3mwpBf.spl1" title="原文 : This example is going to talks about scheduling Pods to a single availability zone in a Kubernetes cluster in the cloud.">この例では、クラウド内のKubernetesクラスタ内の単一の可用性ゾーンにポッドをスケジュールする方法を説明します。</span> <span class="merged" id="all.3mwpBf.spl2" title="原文 : Pod scheduling in this way uses Node labels, and in fact any label on the Nodes in your cluster could be used to fix the location of the Pods.">この方法でポッド・スケジューリングではノード・ラベルが使用され、実際にはクラスタ内のノード上のラベルを使用してポッドのロケーションを修正できます。</span> </p>

<p><span class="merged" id="all.29UrKc.spl1" title="原文 : To schedule all the Coherence Pods into a single zone we first need to know what zones we have and what labels have used.">すべてのCoherenceポッドを1つのゾーンにスケジュールするには、最初にどのゾーンがあるか、どのラベルが使用されているかを把握する必要があります。</span> <span class="merged" id="all.29UrKc.spl2" title="原文 : The standard Kubernetes Node label for the availability zone is topology.kubernetes.io/zone (as documented in the Kubernetes Labels Annotations and Taints documentation).">可用性ゾーンの標準Kubernetesノード・ラベルは、<code>topology.kubernetes.io/zone</code>です(<a href="https://kubernetes.io/docs/reference/labels-annotations-taints/" id="" target="_blank" >「Kubernetesラベル注釈とTaints」</a>のドキュメントを参照)。</span> <span class="merged" id="all.29UrKc.spl3" title="原文 : To slightly confuse the situation, prior to Kubernetes 1.17 the label was failure-domain.beta.kubernetes.io/zone, which has now been deprecated.">状況をわずかに混乱させるために、Kubernetes 1.17の前に、ラベルは<code>failure-domain.beta.kubernetes.io/zone</code>で、現在は非推奨になりました。</span> <span class="merged" id="all.29UrKc.spl4" title="原文 : Some Kubernetes clusters, even after 1.17, still use the deprecated label, so you need to know what labels your Nodes have.">1.17の後でも一部のKubernetesクラスタは非推奨のラベルを使用するため、ノードにあるラベルを知る必要があります。</span> </p>

<p><span class="merged" id="all.35P2bX" title="原文 : Run the following command so list the nodes in a Kubernetes cluster with the value of the two zone labels for each node:">次のコマンドを実行して、各ノードの2つのゾーン・ラベルの値を含むKubernetesクラスタのノードをリストします:</span></p>

<markup
lang="bash"

>kubectl get nodes -L topology.kubernetes.io/zone,failure-domain.beta.kubernetes.io/zone</markup>

<p><span class="merged" id="all.4R0HUF" title="原文 : The output will be something like this:">出力は次のようになります:</span></p>

<markup


>NAME      STATUS   ROLES   AGE   VERSION   ZONE             ZONE
node-1    Ready    node    66d   v1.19.7   US-ASHBURN-AD-1
node-2    Ready    node    66d   v1.19.7   US-ASHBURN-AD-2
node-3    Ready    node    66d   v1.19.7   US-ASHBURN-AD-3
node-4    Ready    node    66d   v1.19.7   US-ASHBURN-AD-2
node-5    Ready    node    66d   v1.19.7   US-ASHBURN-AD-3
node-6    Ready    node    66d   v1.19.7   US-ASHBURN-AD-1</markup>

<p><span class="merged" id="all.22p64a.spl1" title="原文 : In the output above the first Zone column has values, and the second does not.">上の出力では、最初の<code>Zone</code>列に値があり、2番目の列は値ではありません。</span> <span class="merged" id="all.22p64a.spl2" title="原文 : This means that the zone label used is the first in the label list in our kubectl command, i.e., topology.kubernetes.io/zone.">これは、<code>kubectl</code>コマンド、つまり、<code>topology.kubernetes.io/zone</code>のラベル・リストの最初のゾーン・ラベルが使用されることを意味します。</span> </p>

<p><span class="merged" id="all.3gkx1a" title="原文 : If the nodes had been labeled with the second, deprecated, label in the kubectl command list failure-domain.beta.kubernetes.io/zone the output would look like this:"><code>kubectl</code>コマンド・リスト<code>failure-domain.beta.kubernetes.io/zone</code>の2番目の非推奨のラベルでノードにラベルが付けられた場合、出力は次のようになります:</span></p>

<markup


>NAME      STATUS   ROLES   AGE   VERSION   ZONE   ZONE
node-1    Ready    node    66d   v1.19.7          US-ASHBURN-AD-1
node-2    Ready    node    66d   v1.19.7          US-ASHBURN-AD-2
node-3    Ready    node    66d   v1.19.7          US-ASHBURN-AD-3
node-4    Ready    node    66d   v1.19.7          US-ASHBURN-AD-2
node-5    Ready    node    66d   v1.19.7          US-ASHBURN-AD-3
node-6    Ready    node    66d   v1.19.7          US-ASHBURN-AD-1</markup>

<p><span class="merged" id="all.1JCYAa.spl1" title="原文 : From the list of nodes above we can see that there are three zones, US-ASHBURN-AD-1, US-ASHBURN-AD-2 and US-ASHBURN-AD-3.">上のノードのリストから、<code>US-ASHBURN-AD-1</code>、<code>US-ASHBURN-AD-2</code>および<code>US-ASHBURN-AD-3</code>の3つのゾーンがあることがわかります。</span> <span class="merged" id="all.1JCYAa.spl2" title="原文 : In this example we will schedule all the Pods to zome US-ASHBURN-AD-1.">この例では、すべてのポッドをzome <code>US-ASHBURN-AD-1</code>にスケジュールします。</span> </p>

</div>

<h3 id="_scheduling_pods_of_a_coherence_cluster"><span class="merged" id="all.3aQnSQ" title="原文 : Scheduling Pods of a Coherence Cluster">Coherenceクラスタのポッドのスケジュール</span></h3>
<div class="section">
<p><span class="merged" id="all.3bXy1e.spl1" title="原文 : The Coherence CRD supports a number of ways to schedule Pods, as described in the Configure Pod Scheduling documentation."><code>Coherence</code> CRDでは、<router-link to="/docs/other/090_pod_scheduling">「ポッド・スケジューリングの構成」</router-link>ドキュメントで説明されているように、ポッドをスケジュールするための様々な方法がサポートされています。</span> <span class="merged" id="all.3bXy1e.spl2" title="原文 : Using node labels is the simplest of the scheduling methods.">ノード・ラベルの使用は、最も単純なスケジューリング・メソッドです。</span> <span class="merged" id="all.3bXy1e.spl3" title="原文 : In this case we need to schedule Pods onto nodes that have the label topology.kubernetes.io/zone=US-ASHBURN-AD-1.">この場合、<code>topology.kubernetes.io/zone=US-ASHBURN-AD-1</code>というラベルを持つノードにポッドをスケジュールする必要があります。</span> <span class="merged" id="all.3bXy1e.spl4" title="原文 : In the Coherence yaml we use the nodeSelector field."><code>Coherence</code> yamlでは、<code>nodeSelector</code>フィールドを使用します。</span> </p>

<markup
lang="yaml"
title="coherence-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  nodeSelector:
    topology.kubernetes.io/zone: US-ASHBURN-AD-1</markup>

<p><span class="merged" id="all.2xGSah" title="原文 : When the yaml above is applied, a cluster of three Pods will be created, all scheduled onto nodes in the US-ASHBURN-AD-1 availability zone.">前述のyamlが適用されると、3つのポッドのクラスタが作成され、すべて<code>US-ASHBURN-AD-1</code>可用性ゾーンのノードにスケジュールされます。</span></p>

</div>

<h3 id="_other_performance_factors"><span class="merged" id="all.1cbUWB" title="原文 : Other Performance Factors">その他のパフォーマンス・ファクタ</span></h3>
<div class="section">
<p><span class="merged" id="all.29rZhU.spl1" title="原文 : Depending on the Kubernetes cluster you are using there could be various other factors to bear in mind.">使用しているKubernetesクラスタによっては、留意すべき他の様々なファクタがある可能性があります。</span> <span class="merged" id="all.29rZhU.spl2" title="原文 : Many Kubernetes clusters run on virtual machines, which can be poor for repeated performance comparisons unless you know what else might be running on the underlying hardware that the VM is on.">多くのKubernetesクラスタは仮想マシンで実行されるため、VMがオンになっている基礎となるハードウェアで他に何が実行されているかわからないかぎり、繰り返されるパフォーマンス比較では不十分です。</span> <span class="merged" id="all.29rZhU.spl3" title="原文 : If a test run happens at the same time as another VM is consuming a lot of the underlying hardware resource this can obviously impact the results.">別のVMが基礎となる多くのハードウェア・リソースを消費しているときに同時にテスト実行が発生すると、結果に明らかな影響を与える可能性があります。</span> <span class="merged" id="all.29rZhU.spl4" title="原文 : Unfortunately bear-metal hardware, the best for repeated performance tests, is not always available, so it is useful to bear this in mind if there is suddenly a strange outlier in the tests.">残念ながらベアメタル・ハードウェア、繰り返しパフォーマンス・テストに最適です。常に使用できないので、テストに不思議な外れがあった場合、これを念頭に置くことをお勧めします。</span> </p>

</div>
</div>
</doc-view>
