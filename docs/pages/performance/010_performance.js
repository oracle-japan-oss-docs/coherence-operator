<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_performance_testing_in_kubernetes"><span class="merged" id="all.10LHR1" title="原文 : Performance Testing in Kubernetes">Kubernetesのパフォーマンス・テスト</span></h2>
<div class="section">
<p><span class="merged" id="all.4NjpQ2.spl1" title="原文 : Many customers use Coherence because they want access to data at in-memory speeds.">多くの顧客は、インメモリー速度でデータにアクセスする必要があるため、Coherenceを使用します。</span> <span class="merged" id="all.4NjpQ2.spl2" title="原文 : Customers who want the best performance from their application typically embark on performance testing and load testing of their application.">アプリケーションの最高のパフォーマンスを求めるお客様は、通常、アプリケーションのパフォーマンス・テストとロード・テストを利用します。</span> <span class="merged" id="all.4NjpQ2.spl3" title="原文 : When doing this sort of testing on Kubernetes, it is useful to understand the ways that your Kubernetes environment can impact your test results.">このようなテストをKubernetesで実行する場合は、Kubernetes環境がテスト結果に与える影響を理解しておくと便利です。</span> </p>

</div>

<h2 id="_where_are_your_nodes"><span class="merged" id="all.2dCipO" title="原文 : Where are your Nodes?">ノードはどこですか。</span></h2>
<div class="section">
<p><span class="merged" id="all.2lQuKE.spl1" title="原文 : When an application has been deployed into Kubernetes, pods will typically be distributed over many nodes in the Kubernetes cluster.">アプリケーションがKubernetesにデプロイされると、通常、ポッドはKubernetesクラスタ内の多数のノードに分散されます。</span> <span class="merged" id="all.2lQuKE.spl2" title="原文 : When deploying into Kubernetes cluster in the cloud, for example on Oracle OKE, the nodes can be distributed across different availability zones.">クラウド内のKubernetesクラスタ(Oracle OKEなど)にデプロイする場合、ノードは異なる可用性ゾーン間で分散できます。</span> <span class="merged" id="all.2lQuKE.spl3" title="原文 : These zones are effectively different data centers, meaning that the network speed can differ considerable between nodes in different zones.">これらのゾーンは実質的に異なるデータセンターです。つまり、異なるゾーンのノード間でネットワーク速度がかなり異なることがあります。</span> <span class="merged" id="all.2lQuKE.spl4" title="原文 : Performance testing in this sort of environment can be difficult if you use default Pod scheduling.">デフォルトのポッド・スケジューリングを使用すると、このような環境でのパフォーマンス・テストが困難になる場合があります。</span> <span class="merged" id="all.2lQuKE.spl5" title="原文 : Different test runs could distribute Pods to different nodes, in different zones, and skew results depending on how &quot;far&quot; test clients and servers are from each other.">テスト実行が異なると、Podがゾーンごとに異なるノードに分散され、テスト・クライアントとサーバーの相互関係に応じてスキュー結果になる場合があります。</span> <span class="merged" id="all.2lQuKE.spl6" title="原文 : For example, when testing a simple Coherence EntryProcessor invocation in a Kubernetes cluster spread across zones, we saw the 95% response time when the client and server were in the same zone was 0.1 milli-seconds.">たとえば、ゾーン全体に広がるKubernetesクラスタで単純なCoherence <code>EntryProcessor</code>呼出しをテストすると、クライアントとサーバーが同じゾーン内に0.1ミリ秒のとき、レスポンス時間が95%になります。</span> <span class="merged" id="all.2lQuKE.spl7" title="原文 : When the client and server were in different zones, the 95% response time could be as high as 0.8 milli-seconds.">クライアントとサーバーが異なるゾーンにある場合、95%のレスポンス時間は0.8ミリ秒と同じになります。</span> <span class="merged" id="all.2lQuKE.spl8" title="原文 : This difference is purely down to the network distance between nodes.">この差は、ノード間のネットワーク距離に純粋に下がります。</span> <span class="merged" id="all.2lQuKE.spl9" title="原文 : Depending on the actual use-cases being tested, this difference might not have much impact on overall response times, but for simple operations it can be a significant enough overhead to impact test results.">テストされる実際のユースケースによっては、この違いがレスポンス時間全体に与える影響はあまりありませんが、単純な操作の場合、テスト結果に影響を与える十分なオーバーヘッドになる場合があります。</span> </p>

<p><span class="merged" id="all.2vSRxL.spl1" title="原文 : The solution to the issue described above is to use Pod scheduling to fix the location of the Pods to be used for tests.">前述の問題に対するソリューションは、ポッド・スケジューリングを使用して、テストに使用するポッドのロケーションを修正することです。</span> <span class="merged" id="all.2vSRxL.spl2" title="原文 : In a cluster like Oracle OKE, this would ensure all the Pods will be scheduled into the same availability zone.">Oracle OKEなどのクラスタでは、すべてのポッドが同じ可用性ゾーンにスケジュールされるようになります。</span> </p>


<h3 id="_finding_node_zones"><span class="merged" id="all.RCBqE" title="原文 : Finding Node Zones">ノード・ゾーンの検索</span></h3>
<div class="section">
<p><span class="merged" id="all.3mwpBf.spl1" title="原文 : This example is going to talks about scheduling Pods to a single availability zone in a Kubernetes cluster in the cloud.">この例では、クラウドのKubernetesクラスタ内の1つの可用性ゾーンへのポッドのスケジュールについて説明します。</span> <span class="merged" id="all.3mwpBf.spl2" title="原文 : Pod scheduling in this way uses Node labels, and in fact any label on the Nodes in your cluster could be used to fix the location of the Pods.">この方法でポッド・スケジューリングはノード・ラベルを使用し、実際にクラスタのノードのすべてのラベルを使用してポッドのロケーションを修正できます。</span> </p>

<p><span class="merged" id="all.29UrKc.spl1" title="原文 : To schedule all the Coherence Pods into a single zone we first need to know what zones we have and what labels have used.">すべてのCoherenceポッドを単一のゾーンにスケジュールするには、まず、所有しているゾーンと使用するラベルを把握する必要があります。</span> <span class="merged" id="all.29UrKc.spl2" title="原文 : The standard Kubernetes Node label for the availability zone is topology.kubernetes.io/zone (as documented in the Kubernetes Labels Annotations and Taints documentation).">可用性ゾーンの標準のKubernetesノード・ラベルは、<code>topology.kubernetes.io/zone</code>です(<a href="https://kubernetes.io/docs/reference/labels-annotations-taints/" id="" target="_blank" >「Kubernetesラベルの注釈とTaints」</a>ドキュメントを参照)。</span> <span class="merged" id="all.29UrKc.spl3" title="原文 : To slightly confuse the situation, prior to Kubernetes 1.17 the label was failure-domain.beta.kubernetes.io/zone, which has now been deprecated.">状況を少し混同するには、Kubernetes 1.17より前のラベルは<code>failure-domain.beta.kubernetes.io/zone</code>であり、これは非推奨になりました。</span> <span class="merged" id="all.29UrKc.spl4" title="原文 : Some Kubernetes clusters, even after 1.17, still use the deprecated label, so you need to know what labels your Nodes have.">一部のKubernetesクラスタ(1.17の後でも)は非推奨のラベルを使用するため、ノードのラベルを把握する必要があります。</span> </p>

<p><span class="merged" id="all.35P2bX" title="原文 : Run the following command so list the nodes in a Kubernetes cluster with the value of the two zone labels for each node:">次のコマンドを実行して、各ノードの2つのゾーン・ラベルの値でKubernetesクラスタ内のノードをリストします:</span></p>

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

<p><span class="merged" id="all.22p64a.spl1" title="原文 : In the output above the first Zone column has values, and the second does not.">上の出力では、最初の<code>Zone</code>列に値があり、2番目の値は持っていません。</span> <span class="merged" id="all.22p64a.spl2" title="原文 : This means that the zone label used is the first in the label list in our kubectl command, i.e., topology.kubernetes.io/zone.">これは、使用されるゾーン・ラベルが、<code>kubectl</code>コマンドのラベル・リストの最初(<code>topology.kubernetes.io/zone</code>)であることを意味します。</span> </p>

<p><span class="merged" id="all.3gkx1a" title="原文 : If the nodes had been labeled with the second, deprecated, label in the kubectl command list failure-domain.beta.kubernetes.io/zone the output would look like this:"><code>kubectl</code>コマンド・リスト<code>failure-domain.beta.kubernetes.io/zone</code>の2番目の非推奨のラベルでノードにラベルが付けられている場合、出力は次のようになります:</span></p>

<markup


>NAME      STATUS   ROLES   AGE   VERSION   ZONE   ZONE
node-1    Ready    node    66d   v1.19.7          US-ASHBURN-AD-1
node-2    Ready    node    66d   v1.19.7          US-ASHBURN-AD-2
node-3    Ready    node    66d   v1.19.7          US-ASHBURN-AD-3
node-4    Ready    node    66d   v1.19.7          US-ASHBURN-AD-2
node-5    Ready    node    66d   v1.19.7          US-ASHBURN-AD-3
node-6    Ready    node    66d   v1.19.7          US-ASHBURN-AD-1</markup>

<p><span class="merged" id="all.1JCYAa.spl1" title="原文 : From the list of nodes above we can see that there are three zones, US-ASHBURN-AD-1, US-ASHBURN-AD-2 and US-ASHBURN-AD-3.">上のノードのリストから、<code>US-ASHBURN-AD-1</code>、<code>US-ASHBURN-AD-2</code>および<code>US-ASHBURN-AD-3</code>という3つのゾーンがあることがわかります。</span> <span class="merged" id="all.1JCYAa.spl2" title="原文 : In this example we will schedule all the Pods to zome US-ASHBURN-AD-1.">この例では、すべてのポッドをzome <code>US-ASHBURN-AD-1</code>にスケジュールします。</span> </p>

</div>

<h3 id="_scheduling_pods_of_a_coherence_cluster"><span class="merged" id="all.3aQnSQ" title="原文 : Scheduling Pods of a Coherence Cluster">Coherenceクラスタのポッドのスケジュール</span></h3>
<div class="section">
<p><span class="merged" id="all.3PoFnh.spl1" title="原文 : The Coherence CRD supports a number of ways to schedule Pods, as described in the Configure Pod Scheduling documentation."><code>Coherence</code> CRDでは、<router-link to="/other/090_pod_scheduling">「ポッド・スケジューリングの構成」</router-link>ドキュメントで説明されているように、ポッドをスケジュールする方法がいくつかサポートされています。</span> <span class="merged" id="all.3PoFnh.spl2" title="原文 : Using node labels is the simplest of the scheduling methods.">ノード・ラベルの使用は、最も簡単なスケジューリング法です。</span> <span class="merged" id="all.3PoFnh.spl3" title="原文 : In this case we need to schedule Pods onto nodes that have the label topology.kubernetes.io/zone=US-ASHBURN-AD-1.">この場合は、ラベル<code>topology.kubernetes.io/zone=US-ASHBURN-AD-1</code>を持つノードにポッドをスケジュールする必要があります。</span> <span class="merged" id="all.3PoFnh.spl4" title="原文 : In the Coherence yaml we use the nodeSelector field."><code>Coherence</code> yamlでは、<code>nodeSelector</code>フィールドを使用します。</span> </p>

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

<p><span class="merged" id="all.2xGSah" title="原文 : When the yaml above is applied, a cluster of three Pods will be created, all scheduled onto nodes in the US-ASHBURN-AD-1 availability zone.">前述のYamlを適用すると、3つのPodのクラスタが作成され、すべて<code>US-ASHBURN-AD-1</code>可用性ゾーンのノードにスケジュールされます。</span></p>

</div>

<h3 id="_other_performance_factors"><span class="merged" id="all.1cbUWB" title="原文 : Other Performance Factors">その他のパフォーマンス・ファクタ</span></h3>
<div class="section">
<p><span class="merged" id="all.29rZhU.spl1" title="原文 : Depending on the Kubernetes cluster you are using there could be various other factors to bear in mind.">使用しているKubernetesクラスタによっては、他の様々なファクタが考慮される場合があります。</span> <span class="merged" id="all.29rZhU.spl2" title="原文 : Many Kubernetes clusters run on virtual machines, which can be poor for repeated performance comparisons unless you know what else might be running on the underlying hardware that the VM is on.">多くのKubernetesクラスタは仮想マシン上で動作しますが、VMがオンになっている基礎となるハードウェアで何が他で実行されているかがわからないかぎり、パフォーマンスの比較が繰り返し低下する可能性があります。</span> <span class="merged" id="all.29rZhU.spl3" title="原文 : If a test run happens at the same time as another VM is consuming a lot of the underlying hardware resource this can obviously impact the results.">テストの実行が別のVMがベースとなるハードウェア・リソースを大量に消費しているのと同時に発生すると、明らかに結果に影響する可能性があります。</span> <span class="merged" id="all.29rZhU.spl4" title="原文 : Unfortunately bear-metal hardware, the best for repeated performance tests, is not always available, so it is useful to bear this in mind if there is suddenly a strange outlier in the tests.">残念ながら、ベアメタル・ハードウェアは繰り返しのパフォーマンス試験に最適です。突然試験に不思議な外れが生じた場合、このことに注意してください。</span> </p>

</div>
</div>
</doc-view>
