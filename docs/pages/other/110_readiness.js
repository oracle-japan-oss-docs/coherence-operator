<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_readiness_liveness_probes"><span class="merged" id="all.3R1CdL" title="原文 : Readiness &amp; Liveness Probes">レディネス&amp;リブネス・プローブ</span></h2>
<div class="section">
<p><span class="merged" id="all.aRlsp.spl1" title="原文 : The Coherence Operator injects a Readiness/Liveness endpoint into the Coherence container that is used as the default readiness and liveness check for the Pods deployed by the operator.">Coherence Operatorでは、オペレータがデプロイされた<code>Pods</code>のデフォルトのレディネスおよびリブネス・チェックとして使用されるレディネス/リブネス・エンドポイントがCoherenceコンテナにインジェクトされます。</span> <span class="merged" id="all.aRlsp.spl2" title="原文 : This endpoint is suitable for most use-cases, but it is possible to configure a different readiness and liveness probe, or just change the timings of the probes if required.">このエンドポイントは、ほとんどのユースケースに適していますが、別のレディネスおよびリブネス・プローブを構成したり、必要に応じてプローブのタイミングを変更したりすることができます。</span> </p>

<p><span class="merged" id="all.2WEzEQ.spl1" title="原文 : The readiness/liveness probe used by the Operator in the Coherence Pods checks a number of things to determine whether the Pods is ready, one of these is whether the JVM is a cluster member.">CoherenceポッドのOperatorが使用するレディネス/リブネス・プローブは、ポッドの準備ができているかどうかを判断するためのいくつかの事柄をチェックします。そのうちの1つは、JVMがクラスタ・メンバーであるかどうかです。</span> <span class="merged" id="all.2WEzEQ.spl2" title="原文 : If your application uses a custom main class and is not properly bootstrapping Coherence then the Pod will not be ready until your application code actually touches a Coherence resource causing Coherence to start and join the cluster.">アプリケーションがカスタム・メイン・クラスを使用し、Coherenceを適切にブートストラップしていない場合、アプリケーション・コードでCoherenceリソースが実際に接続され、Coherenceが起動および結合されるまで、ポッドは準備できません。</span> </p>

<p><span class="merged" id="all.3O231E.spl1" title="原文 : When running in clusters with the Operator using custom main classes it is advisable to properly bootstrap Coherence from within your main method.">カスタム・メイン・クラスを使用してオペレータとともにクラスタで実行する場合は、<code>main</code>メソッド内からCoherenceを適切にブートストラップすることをお薦めします。</span> <span class="merged" id="all.3O231E.spl2" title="原文 : This can be done using the new Coherence bootstrap API available from CE release 20.12 or by calling com.tangosol.net.DefaultCacheServer.startServerDaemon().waitForServiceStart();">これは、CEリリース20.12から入手可能な新しいCoherenceブートストラップAPIを使用するか、<code>com.tangosol.net.DefaultCacheServer.startServerDaemon().waitForServiceStart();</code>を呼び出して実行できます</span> </p>


<h3 id="_coherence_readiness"><span class="merged" id="all.hhgQ8" title="原文 : Coherence Readiness">Coherenceレディネス</span></h3>
<div class="section">
<p><span class="merged" id="all.nQd4.spl1" title="原文 : The default endpoint used by the Operator for readiness checks that the Pod is a member of the Coherence cluster and that none of the partitioned cache services have a StatusHA value of endangered.">レディネスのためオペレータが使用するデフォルトのエンドポイントは、<code>Pod</code>がCoherenceクラスタのメンバーであり、パーティション化されたキャッシュ・サービスのいずれもStatusHA値が<code>endangered</code>でないことを確認します。</span> <span class="merged" id="all.nQd4.spl2" title="原文 : If the Pod is the only cluster member at the time of the ready check the StatusHA check will be skipped."><code>Pod</code>が準備完了チェックの時点の唯一のクラスタ・メンバーである場合、StatusHAチェックはスキップされます。</span> <span class="merged" id="all.nQd4.spl3" title="原文 : If a partitioned service has a backup count of zero the StatusHA check will be skipped for that service.">パーティション化サービスのバックアップ数がゼロの場合、そのサービスのStatusHAチェックはスキップされます。</span> </p>

<p><span class="merged" id="all.2qptRQ.spl1" title="原文 : There are scenarios where the StatusHA check can fail but should be ignored because the application does not care about data loss for caches on that particular cache service.">StatusHAチェックが失敗しても、その特定のキャッシュ・サービスのキャッシュのデータ損失はアプリケーションが考慮しないため、無視する必要があるシナリオがあります。</span> <span class="merged" id="all.2qptRQ.spl2" title="原文 : Normally in this case the backup count for the cache service would be zero, and the service would automatically be skipped in the StatusHA test.">通常、この場合、キャッシュ・サービスのバックアップ数はゼロになり、サービスはStatusHAテストで自動的にスキップされます。</span> </p>

<p><span class="merged" id="all.2JpSNj.spl1" title="原文 : The ready check used by the Operator can be configured to skip the StatusHA test for certain services.">特定のサービスのStatusHAテストをスキップするように、オペレータが使用する準備完了チェックを構成できます。</span> <span class="merged" id="all.2JpSNj.spl2" title="原文 : In the Coherence CRD the coherence.allowEndangeredForStatusHA is a list of string values that can be set to the names of partitioned cache services that should not be included in the StatusHA check."><code>Coherence</code> CRDでは、<code>coherence.allowEndangeredForStatusHA</code>は、StatusHAチェックに含まれないパーティション・キャッシュ・サービスの名前に設定できる文字列値のリストです。</span> <span class="merged" id="all.2JpSNj.spl3" title="原文 : For a service to be skipped its name must exactly match one of the names in the allowEndangeredForStatusHA list.">サービスをスキップするには、その名前を<code>allowEndangeredForStatusHA</code>リスト内の名前の1つと完全に一致させる必要があります。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  coherence:
    allowEndangeredForStatusHA:   <span class="conum" data-value="1" />
      - TempService</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.LIiqg.spl1" title="原文 : The allowEndangeredForStatusHA field is a list of string values."><code>allowEndangeredForStatusHA</code>フィールドは文字列値のリストです。</span> <span class="merged" id="all.LIiqg.spl2" title="原文 : In this case the TempService will not be checked for StatusHA in the ready check.">この場合、<code>TempService</code>は、準備完了チェックでStatusHAをチェックしません。</span> </li>
</ul>
</div>

<h3 id="_configure_readiness"><span class="merged" id="all.Q9dl2" title="原文 : Configure Readiness">レディネスの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.3zw9sD" title="原文 : The Coherence CRD spec.readinessProbe field is identical to configuring a readiness probe for a Pod in Kubernetes; see Configure Liveness &amp; Readiness"><code>Coherence</code> CRD <code>spec.readinessProbe</code>フィールドは、Kubernetesの<code>Pod</code>のレディネス・プローブの構成と同じです。<a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/" id="" target="_blank" >「リブネス&amp;レディネスの構成」</a>を参照してください</span></p>

<p><span class="merged" id="all.6vDv5.24"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  readinessProbe:
    httpGet:
      port: 8080
      path: "/ready"
    timeoutSeconds: 60
    initialDelaySeconds: 300
    periodSeconds: 120
    failureThreshold: 10
    successThreshold: 1</markup>

<p><span class="merged" id="all.UzT9J.spl1" title="原文 : The example above configures a http probe for readiness and sets different timings for the probe.">前述の例では、レディネスを示すhttpプローブを構成し、プローブに対して異なるタイミングを設定します。</span> <span class="merged" id="all.UzT9J.spl2" title="原文 : The Coherence CRD supports the other types of readiness probe too, exec and tcpSocket."><code>Coherence</code> CRDは、他のタイプのレディネス・プローブも<code>exec</code>および<code>tcpSocket</code>をサポートしています。</span> </p>

</div>

<h3 id="_configure_liveness"><span class="merged" id="all.3Fjff0" title="原文 : Configure Liveness">リブネスの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.1zoJFX" title="原文 : The Coherence CRD spec.livenessProbe field is identical to configuring a liveness probe for a Pod in Kubernetes; see Configure Liveness &amp; Readiness"><code>Coherence</code> CRD <code>spec.livenessProbe</code>フィールドは、Kubernetesの<code>Pod</code>に対するリブネス・プローブの構成と同じです。<a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/" id="" target="_blank" >「リブネス&amp;レディネスの構成」</a>を参照してください</span></p>

<p><span class="merged" id="all.6vDv5.25"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  livenessProbe:
    httpGet:
      port: 8080
      path: "/live"
    timeoutSeconds: 60
    initialDelaySeconds: 300
    periodSeconds: 120
    failureThreshold: 10
    successThreshold: 1</markup>

<p><span class="merged" id="all.2GWzQy.spl1" title="原文 : The example above configures a http probe for liveness and sets different timings for the probe.">前述の例では、リブネスのhttpプローブを構成し、プローブに対して異なるタイミングを設定します。</span> <span class="merged" id="all.2GWzQy.spl2" title="原文 : The Coherence CRD supports the other types of readiness probe too, exec and tcpSocket."><code>Coherence</code> CRDは、他のタイプのレディネス・プローブも<code>exec</code>および<code>tcpSocket</code>をサポートしています。</span> </p>

</div>
</div>
</doc-view>
