<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coherence_network_testing"><span class="merged" id="all.1U0q5x" title="原文 : Coherence Network Testing">Coherenceネットワーク・テスト</span></h2>
<div class="section">
<p><span class="merged" id="all.4XXFjo.spl1" title="原文 : Coherence provides utilities that can be used to test network performance, which obviously has a big impact on a distributed system such as Coherence.">Coherenceは、ネットワーク・パフォーマンスのテストに使用できるユーティリティを提供し、Coherenceなどの分散システムに大きな影響を与えます。</span> <span class="merged" id="all.4XXFjo.spl2" title="原文 : The documentation for these utilities can be found in the official Coherence Documentation.">これらのユーティリティのドキュメントは、公式の<a href="https://docs.oracle.com/en/middleware/fusion-middleware/coherence/14.1.2/administer/performing-network-performance-test.html#GUID-7267AB06-6353-416E-B9FD-A75F7FBFE523" id="" target="_blank" >「Coherenceドキュメント」</a>にあります。</span> </p>

<p><span class="merged" id="all.4AqR2s.spl1" title="原文 : Whilst generally these tests would be run on server hardware, with more and more Coherence deployments moving into the cloud and into Kubernetes these tests can also be performed in Pods to measure inter-Pod network performance.">通常、これらのテストはサーバー・ハードウェアで実行され、クラウドおよびKubernetesに移行するCoherenceデプロイメントが増えるため、これらのテストは<code>Pods</code>でも実行して、ポッド間ネットワークのパフォーマンスを測定できます。</span> <span class="merged" id="all.4AqR2s.spl2" title="原文 : This test can be used to see the impact of running Pods across different zones, or on different types of Kubernetes networks, with different Pod resource settings, etc.">このテストは、異なるゾーン間で<code>Pods</code>を実行した場合、または異なるタイプのKubernetesネットワーク、異なる<code>Pod</code>リソース設定などで実行した場合の影響を確認するために使用できます。</span> </p>

</div>

<h2 id="_run_the_message_bus_test_in_pods"><span class="merged" id="all.39quIw" title="原文 : Run the Message Bus Test in Pods">ポッドでのMessage Busテストの実行</span></h2>
<div class="section">
<p><span class="merged" id="all.4aY7tv.spl1" title="原文 : The message bus test can easily be run using Pods in Kubernetes.">メッセージ・バス・テストは、Kubernetesの<code>Pods</code>を使用して簡単に実行できます。</span> <span class="merged" id="all.4aY7tv.spl2" title="原文 : Using the example from the Coherence documentation there will need to be two Pods, a listener and a sender.">Coherenceドキュメントの例を使用すると、リスナーと送信者の2つの<code>Pods</code>が必要です。</span> <span class="merged" id="all.4aY7tv.spl3" title="原文 : This example will create a Service for the listener so that the sender Pod can use the Service name to resolve the listener Pod address.">この例では、リスナーの<code>Service</code>を作成して、送信者<code>Pod</code>が<code>Service</code>名を使用してリスナーの<code>Pod</code>アドレスを解決できるようにします。</span> </p>


<h3 id="_run_the_listener_pod"><span class="merged" id="all.4HEC6Q" title="原文 : Run the Listener Pod">リスナー・ポッドの実行</span></h3>
<div class="section">
<p><span class="merged" id="all.3uwbLy" title="原文 : Create a yaml file that will create the Service and Pod for the listener:">リスナーの<code>Service</code>および<code>Pod</code>を作成する<code>yaml</code>ファイルを作成します:</span></p>

<markup
lang="yaml"
title="message-bus-listener.yaml"
>apiVersion: v1
kind: Service
metadata:
  name: message-bus-listener
spec:
  selector:
    app: message-bus-listener
  ports:
  - protocol: TCP
    port: 8000
    targetPort: mbus
---
apiVersion: v1
kind: Pod
metadata:
  name: message-bus-listener
  labels:
    app: message-bus-listener
spec:
  restartPolicy: Never
  containers:
    - name: coherence
      image: container-registry.oracle.com/middleware/coherence-ce:14.1.2-0-1  <span class="conum" data-value="1" />
      ports:
        - name: mbus
          containerPort: 8000
          protocol: TCP
      command:
        - java                                                   <span class="conum" data-value="2" />
        - -cp
        - /u01/oracle/oracle_home/coherence/lib/coherence.jar
        - com.oracle.common.net.exabus.util.MessageBusTest
        - -bind
        - tmb://0.0.0.0:8000</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1P7d0j" title="原文 : This example uses a Coherence CE image, but any image with coherence.jar in it could be used.">この例ではCoherence CEイメージを使用しますが、<code>coherence.jar</code>を含むイメージを使用できます。</span></li>
<li data-value="2"><span class="merged" id="all.Kd9t0" title="原文 : The command line that the container will execute is exactly the same as that for the listener process in the Coherence Documentation.">コンテナが実行するコマンドラインは、<a href="https://docs.oracle.com/en/middleware/fusion-middleware/coherence/14.1.2/administer/performing-network-performance-test.html#GUID-7267AB06-6353-416E-B9FD-A75F7FBFE523" id="" target="_blank" >「Coherenceドキュメント」</a>のリスナー・プロセスの場合とまったく同じです。</span></li>
</ul>
<p><span class="merged" id="all.FxiQL" title="原文 : Start the listener Pod:">リスナー<code>Pod</code>を起動します:</span></p>

<markup
lang="bash"

>kubectl create -f message-bus-listener.yaml</markup>

<p><span class="merged" id="all.SJLM8" title="原文 : Retrieving the logs for the listener Pod the messages should show that the Pod has started:">リスナー<code>Pod</code>のログを取得すると、<code>Pod</code>が起動したことを示すメッセージが表示されます:</span></p>

<markup
lang="bash"

>kubectl logs pod/message-bus-listener
OPEN event for tmb://message-bus-listener:8000</markup>

</div>

<h3 id="_run_the_sender_pod"><span class="merged" id="all.jMGT1" title="原文 : Run the Sender Pod">送信者ポッドの実行</span></h3>
<div class="section">
<markup
lang="yaml"
title="message-bus-sender.yaml"
>apiVersion: v1
kind: Pod
metadata:
  name: message-bus-sender
  labels:
    app: message-bus-sender
spec:
  restartPolicy: Never
  containers:
    - name: coherence
      image: container-registry.oracle.com/middleware/coherence-ce:14.1.2-0-1
      command:
        - java                         <span class="conum" data-value="1" />
        - -cp
        - /u01/oracle/oracle_home/coherence/lib/coherence.jar
        - com.oracle.common.net.exabus.util.MessageBusTest
        - -bind
        - tmb://0.0.0.0:8000
        - -peer
        - tmb://message-bus-listener:8000  <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1fVmAW" title="原文 : Again, the command line is the same as that for the sender process in the Coherence Documentation.">この場合も、コマンドラインは<a href="https://docs.oracle.com/en/middleware/fusion-middleware/coherence/14.1.2/administer/performing-network-performance-test.html#GUID-7267AB06-6353-416E-B9FD-A75F7FBFE523" id="" target="_blank" >「Coherenceドキュメント」</a>の送信者プロセスと同じです。</span></li>
<li data-value="2"><span class="merged" id="all.38owpg" title="原文 : The peer address uses the Service name message-bus-listener from the sender yaml."><code>peer</code>アドレスは、送信者<code>yaml</code>の<code>Service</code>名<code>message-bus-listener</code>を使用します。</span></li>
</ul>
<p><span class="merged" id="all.i8i6D" title="原文 : Start the sender Pod:">送信者<code>Pod</code>を起動します:</span></p>

<markup
lang="bash"

>kubectl create -f message-bus-sender.yaml</markup>

<p><span class="merged" id="all.3c5941" title="原文 : Retrieving the logs for the sender Pod the messages should show that the Pod has started and show the test results:">送信者<code>Pod</code>のログを取得すると、<code>Pod</code>が起動し、テスト結果が表示されます:</span></p>

<markup
lang="bash"

>kubectl logs pod/message-bus-sender
OPEN event for tmb://message-bus-sender:8000
CONNECT event for tmb://message-bus-listener:8000 on tmb://message-bus-sender:8000
now:  throughput(out 34805msg/s 1.14gb/s, in 348msg/s 11.3mb/s), latency(response(avg 25.31ms, effective 110.03ms, min 374.70us, max 158.10ms), receipt 25.47ms), backlog(out 77% 83/s 308KB, in 0% 0/s 0B), connections 1, errors 0
now:  throughput(out 34805msg/s 1.14gb/s, in 348msg/s 11.3mb/s), latency(response(avg 25.31ms, effective 110.03ms, min 374.70us, max 158.10ms), receipt 25.47ms), backlog(out 77% 83/s 308KB, in 0% 0/s 0B), connections 1, errors 0</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.18"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.EAnTt" title="原文 : Don’t forget to stop the Pods after obtaining the results:">結果の取得後に<code>Pods</code>を停止することを忘れないでください:</span></p>

<markup
lang="bash"

>kubectl delete -f message-bus-sender.yaml
kubectl delete -f message-bus-listener.yaml</markup>
</p>
</div>
</div>

<h3 id="_run_pods_on_specific_nodes"><span class="merged" id="all.WBseU" title="原文 : Run Pods on Specific Nodes">特定のノードでのポッドの実行</span></h3>
<div class="section">
<p><span class="merged" id="all.3clR3v.spl1" title="原文 : In the example above the Pods will be scheduled wherever Kubernetes decides to put them.">前述の例では、<code>Pods</code>は、Kubernetesが配置を決定した場所にスケジュールされます。</span> <span class="merged" id="all.3clR3v.spl2" title="原文 : This could have a big impact on the test result for different test runs.">これは、異なるテスト実行のテスト結果に大きな影響を与える可能性があります。</span> <span class="merged" id="all.3clR3v.spl3" title="原文 : For example in a Kubernetes cluster that spans zones and data centres, if the two Pods get scheduled in different data centres this will have worse results than if the two Pods get scheduled onto the same node.">たとえば、ゾーンとデータ・センターにまたがるKubernetesクラスタでは、2つの<code>Pods</code>が異なるデータ・センターでスケジュールされる場合、2つの<code>Pods</code>が同じノードにスケジュールされている場合よりも、結果が大幅に低下します。</span> </p>

<p><span class="merged" id="all.2KnJyy" title="原文 : To get consistent results add node selectors, taints, tolerations etc, as covered in the Kubernetes assign Pods to Nodes documentation.">一貫性のある結果を得るには、Kubernetes <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/" id="" target="_blank" >「ノードにポッドを割り当てる」</a>ドキュメントで説明するように、ノード・セレクタ、taints、tolerationsなどを追加します。</span></p>

</div>
</div>
</doc-view>
