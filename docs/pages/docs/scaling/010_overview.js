<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_scale_coherence_deployments"><span class="merged" id="all.4Uu3ZZ" title="原文 : Scale Coherence Deployments">Coherenceデプロイメントのスケーリング</span></h2>
<div class="section">
<p><span class="merged" id="all.442q5u.spl1" title="原文 : The Coherence Operator provides the ability to safely scale up and down a Coherence deployment.">Coherence Operatorは、<code>Coherence</code>デプロイメントを安全にスケール・アップおよびスケール・ダウンする機能を提供します。</span> <span class="merged" id="all.442q5u.spl2" title="原文 : A Coherence deployment is backed by a StatefulSet, which can easily be scaled using existing Kubernetes features."><code>Coherence</code>デプロイメントは<code>StatefulSet</code>によってバックアップされ、既存のKubernetes機能を使用して簡単にスケーリングできます。</span> <span class="merged" id="all.442q5u.spl3" title="原文 : The problem with directly scaling down the StatefulSet is that Kubernetes will immediately kill the required number of Pods."><code>StatefulSet</code>を直接スケール・ダウンするという問題は、Kubernetesによって必要な数の<code>Pods</code>がただちに強制終了されることです。</span> <span class="merged" id="all.442q5u.spl4" title="原文 : This is obviously very bad for Coherence as killing multiple storage enabled members would almost certainly cause data loss.">Coherenceでは、複数のストレージが有効なメンバーを殺すと、ほとんどの場合データ損失が発生するため、これは明らかに非常に悪いことです。</span> </p>

<p><span class="merged" id="all.4WKfL6.spl1" title="原文 : The Coherence Operator supports scaling by applying the scaling update directly to Coherence deployment rather than to the underlying StatefulSet.">Coherence Operatorでは、基礎となる<code>StatefulSet</code>ではなく、<code>Coherence</code>デプロイメントにスケーリング更新を直接適用することでスケーリングをサポートしています。</span> <span class="merged" id="all.4WKfL6.spl2" title="原文 : There are two methods to scale a Coherence deployment:"><code>Coherence</code>デプロイメントをスケーリングするには、次の2つのメソッドがあります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.VLHhu" title="原文 : Update the replicas field in the Coherence CRD spec."><code>Coherence</code> CRD仕様の<code>replicas</code>フィールドを更新します。</span></p>

</li>
<li>
<p><span class="merged" id="all.35MdkA" title="原文 : Use the kubectl scale command"><code>kubectl scale</code>コマンドの使用</span></p>

</li>
</ul>
<p><span class="merged" id="all.2NDVrt.spl1" title="原文 : When either of these methods is used the Operator will detect that a change to the size of the deployment is required and ensure that the change will be applied safely.">これらのいずれかのメソッドを使用すると、オペレータはデプロイメントのサイズの変更が必要であることを検出し、変更が安全に適用されるようにします。</span> <span class="merged" id="all.2NDVrt.spl2" title="原文 : The logical steps the Operator will perform are:">オペレータが実行する論理ステップは次のとおりです:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.uDCue" title="原文 : Detect desired replicas is different to current replicas">目的のレプリカが現在のレプリカと異なることを検出</span>

</li>
<li>
<span class="merged" id="all.3cecbA.spl1" title="原文 : Check the cluster is StatusHA - i.e. no cache services are endangered.">クラスタがStatusHAであることを確認 - つまり、キャッシュ・サービスは危険にさらされません。</span> <span class="merged" id="all.3cecbA.spl2" title="原文 : If any service is not StatusHA requeue the scale request (go back to step one).">サービスがStatusHAでない場合は、スケール・リクエストを再キューします(ステップ1に戻ります)。</span> 

</li>
<li>
<span class="merged" id="all.da2Ze" title="原文 : If scaling up, add the required number of members.">スケール・アップする場合は、必要なメンバー数を追加します。</span>

</li>
<li>
<span class="merged" id="all.LjmTi" title="原文 : If scaling down, scale down by one member and requeue the request (go back to step one).">スケール・ダウンする場合は、1つのメンバーでスケール・ダウンし、リクエストを再キューします(ステップ1に戻ります)。</span>

</li>
</ol>
<p><span class="merged" id="all.u3AqW.spl1" title="原文 : What these steps ensure is that the deployment will not be resized unless the cluster is in a safe state.">これらのステップでは、クラスタが安全な状態でないかぎり、デプロイメントのサイズは変更されません。</span> <span class="merged" id="all.u3AqW.spl2" title="原文 : When scaling down only a single member will be removed at a time, ensuring that the cluster is in a safe state before removing the next member.">スケール・ダウン時に1つのメンバーのみが一度に削除されます。次のメンバーを削除する前に、クラスタが安全な状態であることを確認します。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.fMy1l.spl1" title="原文 : The Operator will only apply safe scaling functionality to deployments that are storage enabled.">オペレータは、ストレージが有効なデプロイメントにのみセーフ・スケーリング機能を適用します。</span> <span class="merged" id="all.fMy1l.spl2" title="原文 : If a deployment is storage disabled then it can be scaled up or down by the required number of members in one step as there is no fear of data loss in a storage disabled member.">デプロイメントが無効になっている場合、ストレージが無効なメンバーでデータが失われる恐れがないため、必要な数のメンバーを1ステップでスケール・アップまたはスケール・ダウンできます。</span> </p>
</div>
</div>

<h2 id="_controlling_safe_scaling"><span class="merged" id="all.4Po5fQ" title="原文 : Controlling Safe Scaling">セーフ・スケーリングの制御</span></h2>
<div class="section">
<p><span class="merged" id="all.ccUiI" title="原文 : The Coherence CRD has a number of fields that control the behaviour of scaling."><code>Coherence</code> CRDには、スケーリングの動作を制御する複数のフィールドがあります。</span></p>


<h3 id="_scaling_policy"><span class="merged" id="all.13rYeO" title="原文 : Scaling Policy">スケーリング・ポリシー</span></h3>
<div class="section">
<p><span class="merged" id="all.3u4RTw.spl1" title="原文 : The Coherence CRD spec has a field scaling.policy that can be used to override the default scaling behaviour."><code>Coherence</code> CRD仕様には、デフォルトのスケーリング動作をオーバーライドするために使用できるフィールド<code>scaling.policy</code>があります。</span> <span class="merged" id="all.3u4RTw.spl2" title="原文 : The scaling policy has three possible values:">スケーリング・ポリシーには、次の3つの値があります:</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.42bBIm"  title="原文:: Value">値</span></th>
<th><span class="merged" id="all.4JM9z7.43"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3yF7ME"  title="原文: ParallelUpSafeDown"><code>ParallelUpSafeDown</code></span></td>
<td class=""><span class="merged" id="all.mwcn2.spl1" title="原文 : This is the default scaling policy.">これはデフォルトのスケーリング・ポリシーです。</span> <span class="merged" id="all.mwcn2.spl2" title="原文 : With this policy when scaling up Pods are added in parallel (the same as using the Parallel podManagementPolicy in a StatefulSet) and when scaling down Pods are removed one at a time (the same as the OrderedReady podManagementPolicy for a StatefulSet)."><code>Pods</code>をスケール・アップする場合、このポリシーはパラレルで追加されます(<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#statefulsetspec-v1-apps" id="" target="_blank" >StatefulSet</a>で<code>Parallel</code> <code>podManagementPolicy</code>を使用する場合と同じ)。また、<code>Pods</code>をスケール・ダウンする場合(StatefulSetの<code>OrderedReady</code> <code>podManagementPolicy</code>と同じ)。</span> <span class="merged" id="all.mwcn2.spl3" title="原文 : When scaling down a check is done to ensure that the members of the cluster have a safe StatusHA value before a Pod is removed (i.e. none of the Coherence cache services have an endangered status).">スケール・ダウンを行うと、<code>Pod</code>が削除される前に、クラスタのメンバーに安全なStatusHA値があることが確認されます(つまり、危険にさらされるステータスがなくなるCoherenceキャッシュ・サービスはありません)。</span> <span class="merged" id="all.mwcn2.spl4" title="原文 : This policy offers faster scaling up and start-up because pods are added in parallel as data should not be lost when adding members, but offers safe, albeit slower, scaling down as Pods are removed one by one.">このポリシーは、メンバーの追加時にデータが失われるべきではないため、ポッドが並行して追加されるため、より高速なスケール・アップおよび起動を提供しますが、<code>Pods</code>が1つずつ削除されるため、安全で安価な低速になります。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4cQruq.1"  title="原文: Parallel"><code>Parallel</code></span></td>
<td class=""><span class="merged" id="all.1SQ4vp.spl1" title="原文 : With this policy when scaling up Pods are added in parallel (the same as using the Parallel podManagementPolicy in a StatefulSet)."><code>Pods</code>のスケール・アップ時にこのポリシーを使用すると、パラレルに追加されます(<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#statefulsetspec-v1-apps" id="" target="_blank" >StatefulSet</a>で<code>Parallel</code> <code>podManagementPolicy</code>を使用する場合と同じです)。</span> <span class="merged" id="all.1SQ4vp.spl2" title="原文 : With this policy no StatusHA check is performed either when scaling up or when scaling down.">このポリシーでは、スケール・アップ時またはスケール・ダウン時にStatusHAチェックは実行されません。</span> <span class="merged" id="all.1SQ4vp.spl3" title="原文 : This policy allows faster start and scaling times but at the cost of no data safety; it is ideal for deployments that are storage disabled.">このポリシーにより、起動およびスケーリングの時間が短縮されますが、データの安全性がなく、ストレージが無効なデプロイメントに最適です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Yh6Zj"  title="原文: Safe"><code>Safe</code></span></td>
<td class=""><span class="merged" id="all.1AUSCS.spl1" title="原文 : With this policy when scaling up and down Pods are removed one at a time (the same as the OrderedReady podManagementPolicy for a StatefulSet)."><code>Pods</code>のスケール・アップおよびスケール・ダウン時にこのポリシーを使用して、一度に1つずつ削除されます(StatefulSetの<code>OrderedReady</code> <code>podManagementPolicy</code>と同じです)。</span> <span class="merged" id="all.1AUSCS.spl2" title="原文 : When scaling down a check is done to ensure that the members of the deployment have a safe StatusHA value before a Pod is removed (i.e. none of the Coherence cache services have an endangered status).">スケール・ダウンを行うと、<code>Pod</code>が削除される前に、デプロイメントのメンバーに安全なStatusHA値があることが確認されます(つまり、危険にさらされたステータスを持たないCoherenceキャッシュ・サービスはありません)。</span> <span class="merged" id="all.1AUSCS.spl3" title="原文 : This policy is slower to start, scale up and scale down.">このポリシーは、起動、スケール・アップおよびスケール・ダウンに時間がかかります。</span> </td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.2UdBeZ" title="原文 : Both the ParallelUpSafeDown and Safe policies will ensure no data loss when scaling a deployment."><code>ParallelUpSafeDown</code>ポリシーと<code>Safe</code>ポリシーの両方によって、デプロイメントのスケーリング時にデータが失われることはありません。</span></p>

<p><span class="merged" id="all.3xGyvx" title="原文 : The policy can be set as shown below:">ポリシーは次のように設定できます:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  scaling:
    policy: Safe <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3nuyLY" title="原文 : This deployment will scale both up and down with StatusHA checks.">このデプロイメントでは、StatusHAチェックを使用してスケール・アップとスケール・ダウンの両方を行います。</span></li>
</ul>
</div>

<h3 id="_scaling_statusha_probe"><span class="merged" id="all.2MSOCp" title="原文 : Scaling StatusHA Probe">StatusHAプローブのスケーリング</span></h3>
<div class="section">
<p><span class="merged" id="all.2pjgp8.spl1" title="原文 : The StatusHA check performed by the Operator uses a http endpoint that the Operator runs on a well-known port in the Coherence JVM.">オペレータによって実行されるStatusHAチェックは、オペレータがCoherence JVMの既知のポートで実行するhttpエンドポイントを使用します。</span> <span class="merged" id="all.2pjgp8.spl2" title="原文 : This endpoint does performs a simple check to verify that none of the partitioned cache services known about by Coherence have an endangered status.">このエンドポイントでは、単純なチェックを実行して、Coherenceで認識されているパーティション・キャッシュ・サービスのいずれにも、危険性が生じないことを検証します。</span> <span class="merged" id="all.2pjgp8.spl3" title="原文 : If an application has a different concept of what &quot;safe&quot; means it can implement a different method to check the status during scaling.">アプリケーションに「安全」とは別の概念がある場合、スケーリング中にステータスをチェックするために別のメソッドを実装できます。</span> </p>

<p><span class="merged" id="all.2yeW76.spl1" title="原文 : The operator supports different types of safety check probes, these are exactly the same as those supported by Kubernetes for readiness and liveness probes.">オペレータは様々なタイプの安全性チェック・プローブをサポートしています。これらは、レディネスおよびリブネスのプローブに対してKubernetesでサポートされているものとまったく同じです。</span> <span class="merged" id="all.2yeW76.spl2" title="原文 : The scaling.probe section of the Coherence CRD allows different types of probe to be configured."><code>Coherence</code> CRDの<code>scaling.probe</code>セクションを使用すると、さまざまなタイプのプローブを構成できます。</span> </p>


<h4 id="_using_a_http_get_probe"><span class="merged" id="all.2gWVwc" title="原文 : Using a HTTP Get Probe">HTTP Get Probeの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.46owGl" title="原文 : A HTTP get probe works the same way as a Kubernetes liveness http request">HTTP getプローブは、<a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-liveness-http-request" id="" target="_blank" >「Kubernetes liveness httpリクエスト」</a>と同様に機能</span></p>

<p><span class="merged" id="all.4VX3JH" title="原文 : The probe can be configured as follows">プローブは、次のように構成できます</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  scaling:
    probe:
      httpGet:             <span class="conum" data-value="1" />
        port: 8080
        path: /statusha</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.257mxY.spl1" title="原文 : This deployment will check the status of the services by performing a http GET on http://&lt;pod-ip&gt;:8080/statusha.">このデプロイメントでは、<code><a href="http://&lt;pod-ip&gt;:8080/statusha" id="" target="_blank" >http://&lt;pod-ip>:8080/statusha</a></code>でhttp GETを実行してサービスのステータスを確認します。</span> <span class="merged" id="all.257mxY.spl2" title="原文 : If the response is 200 the check will pass, any other response the check is assumed to be false.">レスポンスが<code>200</code>の場合、チェックは合格し、チェックする他のレスポンスはfalseであるとみなされます。</span> </li>
</ul>
</div>

<h4 id="_using_a_tcp_probe"><span class="merged" id="all.15BcOc" title="原文 : Using a TCP Probe">TCPプローブの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.3mvJ0Z" title="原文 : A TCP probe works the same way as a Kubernetes TCP liveness probe">TCPプローブは、<a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-tcp-liveness-probe" id="" target="_blank" >「Kubernetes TCPリブネス・プローブ」</a>と同様に機能</span></p>

<p><span class="merged" id="all.4VX3JH.1" title="原文 : The probe can be configured as follows">プローブは、次のように構成できます</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  scaling:
    probe:
      tcpSocket:    <span class="conum" data-value="1" />
        port: 7000</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3zyGAi" title="原文 : This deployment will check the status of the services by connecting to the socket on port 7000.">このデプロイメントでは、ポート<code>7000</code>のソケットに接続してサービスのステータスを確認します。</span></li>
</ul>
</div>

<h4 id="_using_an_exec_command_probe"><span class="merged" id="all.OvfH9" title="原文 : Using an Exec Command Probe">実行コマンド・プローブの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.3wFw6U" title="原文 : A TCP probe works the same way as a Kubernetes Exec liveness probe">TCPプローブは、<a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-liveness-command" id="" target="_blank" >「Kubernetesリブネス・プローブ」</a>と同様に機能</span></p>

<p><span class="merged" id="all.4VX3JH.2" title="原文 : The probe can be configured as follows">プローブは、次のように構成できます</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  scaling:
    probe:
      exec:
        command:      <span class="conum" data-value="1" />
          - /bin/ah
          - safe.sh</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4FWu1C" title="原文 : This deployment will check the status of the services by running the sh safe.sh command in the Pod.">このデプロイメントでは、<code>Pod</code>で<code>sh safe.sh</code>コマンドを実行してサービスのステータスを確認します。</span></li>
</ul>
</div>
</div>
</div>
</doc-view>
