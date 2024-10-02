<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_troubleshooting_guide"><span class="merged" id="all.3FgWsH"  title="原文:: Troubleshooting Guide">トラブルシューティング・ガイド</span></h2>
<div class="section">
<p><span class="merged" id="all.46m1PS.spl1" title="原文 : The purpose of this page is to list troubleshooting guides and work-arounds for issues that you may run into when using the Coherence Operator.">このページの目的は、Coherence Operatorを使用するときに実行できる問題のトラブルシューティング・ガイドと回避策をリストすることです。</span> <span class="merged" id="all.46m1PS.spl2" title="原文 : This page will be updated and maintained over time to include common issues we see from customers">このページは、顧客からの一般的な問題が含まれるように、時間の経過とともに更新および管理されます</span> </p>

</div>

<h2 id="_contents"><span class="merged" id="all.1Q34Zl"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1vqdq6" title="原文 : I Uninstalled the Operator and Cannot Delete the Coherence Clusters"><router-link @click.native="this.scrollFix('#no-operator')" to="#no-operator">オペレータをアンインストールし、Coherenceクラスタを削除できません</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3PaPv9" title="原文 : Deleting a Namespace Containing Coherence Resource(s) is Stuck Pending Deletion"><router-link @click.native="this.scrollFix('#ns-delete')" to="#ns-delete">Coherenceリソースを含むネームスペースの削除は、削除の保留中のままです</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.293CDp" title="原文 : Why Does the Operator Pod Restart"><router-link @click.native="this.scrollFix('#restart')" to="#restart">オペレータ・ポッドが再起動するのはなぜですか</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4CVSo0" title="原文 : Why are the Coherence Pods not reaching ready"><router-link @click.native="this.scrollFix('#ready')" to="#ready">Coherenceポッドの準備ができていないのはなぜですか</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3FuXJR" title="原文 : My Coherence cluster is stuck with some running Pods and some pending Pods, I want to scale down"><router-link @click.native="this.scrollFix('#stuck-pending')" to="#stuck-pending">Coherenceクラスタは、実行中のポッドと一部の保留中のポッドにスタックしています。スケール・ダウンしたいです</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2A7tOj" title="原文 : My Coherence cluster is stuck with all pending/crashing Pods, I cannot delete the deployment"><router-link @click.native="this.scrollFix('#stuck-delete')" to="#stuck-delete">Coherenceクラスタがすべての保留中/クラッシュしているポッドにスタックしているため、デプロイメントを削除できません</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.SDG8c" title="原文 : My cache services will not reach Site Safe"><router-link @click.native="this.scrollFix('#site-safe')" to="#site-safe">自分のキャッシュ・サービスがサイト・セーフに到達しません</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1sxAaI" title="原文 : My Grafana Dashboards do not display any metrics"><router-link @click.native="this.scrollFix('#dashboards')" to="#dashboards">自分のGrafanaダッシュボードにメトリクスが表示されない</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4XIITG" title="原文 : I’m using Arm64 and Java 8 and the JVM will not start due to using G1GC"><router-link @click.native="this.scrollFix('#arm-java8')" to="#arm-java8">Arm64およびJava 8を使用しているため、JVMはG1GCの使用により開始されません</router-link></span></p>

</li>
</ul>
</div>

<h2 id="_issues"><span class="merged" id="all.43r0NR"  title="原文:: Issues">問題</span></h2>
<div class="section">

<h3 id="no-operator"><span class="merged" id="all.14fITA" title="原文 : I Uninstalled the Operator and Cannot Delete the Coherence Clusters">オペレータをアンインストールし、Coherenceクラスタを削除できません</span></h3>
<div class="section">
<p><span class="merged" id="all.3WxoWD.spl1" title="原文 : The Coherence resources managed by the Operator are marked in k8s as being owned by the Operator, and have finalizers to stop them being deleted.">オペレータによって管理される<code>Coherence</code>リソースは、k8sにオペレータによって所有されているとマークされ、削除を停止するファイナライザがあります。</span> <span class="merged" id="all.3WxoWD.spl2" title="原文 : In normal operation the Operator will remove the finalizer when it deletes a Coherence cluster.">通常の操作では、<code>Coherence</code>クラスタが削除されると、オペレータはファイナライザを削除します。</span> <span class="merged" id="all.3WxoWD.spl3" title="原文 : The Operator also installs a validating and mutating web-hook, which will also stop k8s allowing mutations and deletions to a Coherence resource if the Coherence Operator is not running.">オペレータは、webフックの検証と変更もインストールします。これにより、k8sも停止し、Coherence Operatorが実行されていない場合、<code>Coherence</code>リソースへの変更と削除が可能になります。</span> </p>

<p><span class="merged" id="all.4BZkKd" title="原文 : If the Operator has been uninstalled, first remove the two web-hooks.">オペレータがアンインストールされている場合は、最初に2つのwebフックを削除します。</span></p>

<markup
lang="bash"

>kubectl delete mutatingwebhookconfiguration coherence-operator-mutating-webhook-configuration
kubectl delete validatingwebhookconfiguration coherence-operator-validating-webhook-configuration</markup>

<p><span class="merged" id="all.4Id2eX" title="原文 : Now patch and delete each Coherence resource to delete its finalizers using the command below and replacing &lt;NAMESPACE&gt; with the correct namespace the Coherence resource is in and &lt;COHERENCE_RESOURCE_NAME&gt; with the Coherence resource name.">次に、次のコマンドを使用して各Coherenceリソースにパッチを適用して削除し、<code>&lt;NAMESPACE></code>を正しいネームスペースに置き換えます。<code>Coherence</code>リソースは<code>Coherence</code>リソース名で、<code>&lt;COHERENCE_RESOURCE_NAME></code>は<code>Coherence</code>リソース名で置き換えます。</span></p>

<markup
lang="bash"

>kubectl -n &lt;NAMESPACE&gt; patch coherence/&lt;COHERENCE_RESOURCE_NAME&gt; -p '{"metadata":{"finalizers":[]}}' --type=merge
kubectl -n &lt;NAMESPACE&gt; delete coherence/&lt;COHERENCE_RESOURCE_NAME&gt;</markup>

</div>

<h3 id="ns-delete"><span class="merged" id="all.3UG0Kt" title="原文 : Deleting a Namespace Containing Coherence Resource(s) is Stuck Pending Deletion">Coherenceリソースを含むネームスペースの削除は、削除の保留中のままです</span></h3>
<div class="section">
<p><span class="merged" id="all.1VRguD.spl1" title="原文 : If you have tried to delete a namespace using kubectl delete and the namespace is now stuck pending deletion, this could be related to the issue above."><code>kubectl delete</code>を使用してネームスペースを削除しようとしたときに、ネームスペースが削除の保留中になった場合、これは前述の問題に関連している可能性があります。</span> <span class="merged" id="all.1VRguD.spl2" title="原文 : This is especially true if the Operator is either not running, or it is in the same namespace that is being deleted.">これは、オペレータが実行されていないか、削除される同じネームスペースにある場合に特に当てはまります。</span> </p>

<p><span class="merged" id="all.2Yl7uO.spl1" title="原文 : If deleting a namespace containing the Operator and a running Coherence cluster, or deleting a namespace containing a running Coherence cluster when the Operator is stopped will mean the finalizers the Operator added to the Coherence resources cannot be removed so the namespace will remain in a pending deletion state.">オペレータと実行中のCoherenceクラスタを含むネームスペースを削除する場合、またはオペレータが停止したときに実行中のCoherenceクラスタを含むネームスペースを削除した場合、オペレータがCoherenceリソースに追加したファイナライザを削除できないため、ネームスペースは削除保留状態のままになります。</span> <span class="merged" id="all.2Yl7uO.spl2" title="原文 : The solution to this is the same as the point above in I Uninstalled the Operator and Cannot Delete the Coherence Clusters">これに対する解答は、<router-link @click.native="this.scrollFix('#no-operator')" to="#no-operator">「オペレータをアンインストールし、Coherenceクラスタを削除できません」</router-link>の上の点と同じです</span> </p>

<p><span class="merged" id="all.3Rat3.spl1" title="原文 : Alternatively, if you are running the Operator in a CI/CD environment and just want to be able to clean up after tests you can run Coherence clusters with the allowUnsafeDelete option enabled.">または、オペレータをCI/CD環境で実行していて、テスト後にクリーン・アップできるようにする場合は、<code>allowUnsafeDelete</code>オプションを有効にしてCoherenceクラスタを実行できます。</span> <span class="merged" id="all.3Rat3.spl2" title="原文 : By setting the allowUnsafeDelete field to true in the Coherence resource the Operator will not add a finalizer to that Coherence resource, allowing it to be deleted if its namespace is deleted."><code>Coherence</code>リソースで<code>allowUnsafeDelete</code>フィールドを<code>true</code>に設定すると、オペレータはそのCoherenceリソースにファイナライザを追加せず、そのネームスペースが削除された場合にファイナライザを削除できます。</span> </p>

<p><span class="merged" id="all.6vDv5.32"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"
title="cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: unsafe-cluster
spec:
  allowUnsafeDelete: true</markup>

<div class="admonition caution">
<p class="admonition-textlabel"><span class="merged" id="all.4Pmf1N.4"  title="原文:: Caution">注意</span></p>
<p ><p><span class="merged" id="all.1NWBl2.spl1" title="原文 : Setting the allowUnsafeDelete field to true will mean that the Operator will not be able to intercept the deletion and shutdown of a Coherence cluster and ensure it has a clean, safe shutdown."><code>allowUnsafeDelete</code>フィールドを<code>true</code>に設定すると、オペレータはCoherenceクラスタの削除と停止をインターセプトできず、クリーンで安全な停止を確保できなくなります。</span> <span class="merged" id="all.1NWBl2.spl2" title="原文 : This is usually ok in CI/CD environments where the cluster and namespace are being cleaned up at the end of a test.">これは通常、CI/CD環境で、テストの終了時にクラスタおよびネームスペースがクリーンアップされている場合に問題ありません。</span> <span class="merged" id="all.1NWBl2.spl3" title="原文 : This options should not be used in a production cluster, especially where features such as Coherence persistence are being used, otherwise the cluster may not cleanly shut down and will then not be able to be restarted using the persisted data.">このオプションは、特にCoherence永続性などの機能が使用されている本番クラスタでは使用しないでください。そうしないと、クラスタがクリーンに停止して、永続データを使用して再起動できなくなります。</span> </p>
</p>
</div>
</div>

<h3 id="restart"><span class="merged" id="all.32hxbE" title="原文 : Why Does the Operator Pod Restart After Installation">インストール後にオペレータ・ポッドが再起動するのはなぜですか</span></h3>
<div class="section">
<p><span class="merged" id="all.12mHMk.spl1" title="原文 : You might notice that when the Operator is installed that the Operator Pod starts, dies and is then restarted.">Operatorがインストールされると、Operator Podが起動し、停止して再起動されることがわかります。</span> <span class="merged" id="all.12mHMk.spl2" title="原文 : This is expected behaviour.">これは予想される動作です。</span> <span class="merged" id="all.12mHMk.spl3" title="原文 : The Operator uses a K8s web-hook for defaulting and validation of the Coherence resources.">オペレータは、K8s webフックを使用して、Coherenceリソースをデフォルト設定およびバリデーションします。</span> <span class="merged" id="all.12mHMk.spl4" title="原文 : A web-hook requires certificates to be present in a Secret mounted to the Operator Pod as a volume.">webフックでは、ボリュームとしてOperator Podにマウントされた<code>Secret</code>に証明書が存在する必要があります。</span> <span class="merged" id="all.12mHMk.spl5" title="原文 : If this Secret is not present the Operator creates it and populates it with self-signed certs.">このシークレットが存在しない場合は、オペレータによって作成され、自己署名証明書が移入されます。</span> <span class="merged" id="all.12mHMk.spl6" title="原文 : In order for the Secret to then be mounted correctly the Pod must be restarted.">シークレットを正しくマウントするには、ポッドを再起動する必要があります。</span> <span class="merged" id="all.12mHMk.spl7" title="原文 : See the the WebHooks documentation."><router-link to="/docs/webhooks/01_introduction">the WebHooks</router-link>のドキュメントを参照してください。</span> </p>

</div>

<h3 id="ready"><span class="merged" id="all.3qibaY" title="原文 : Why are the Coherence Pods not reaching ready">Coherenceポッドの準備ができていないのはなぜですか</span></h3>
<div class="section">
<p><span class="merged" id="all.2WEzEQ.1.spl1" title="原文 : The readiness/liveness probe used by the Operator in the Coherence Pods checks a number of things to determine whether the Pods is ready, one of these is whether the JVM is a cluster member.">Coherenceポッドのオペレータが使用するレディネス/リブネス・プローブは、ポッドの準備ができているかどうかを判断するためにいくつかの事項をチェックします。これらの1つは、JVMがクラスタ・メンバーかどうかです。</span> <span class="merged" id="all.2WEzEQ.1.spl2" title="原文 : If your application uses a custom main class and is not properly bootstrapping Coherence then the Pod will not be ready until your application code actually touches a Coherence resource causing Coherence to start and join the cluster.">アプリケーションでカスタム・メイン・クラスが使用され、Coherenceが正しくブートストラップされていない場合、アプリケーション・コードが実際にCoherenceリソースに接続され、Coherenceが起動してクラスタに参加するまで、ポッドは準備されません。</span> </p>

<p><span class="merged" id="all.3O231E.1.spl1" title="原文 : When running in clusters with the Operator using custom main classes it is advisable to properly bootstrap Coherence from within your main method.">カスタム・メイン・クラスを使用してOperatorを使用してクラスタで実行する場合は、<code>main</code>メソッド内からCoherenceを適切にブートストラップすることをお薦めします。</span> <span class="merged" id="all.3O231E.1.spl2" title="原文 : This can be done using the new Coherence bootstrap API available from CE release 20.12 or by calling com.tangosol.net.DefaultCacheServer.startServerDaemon().waitForServiceStart();">これを行うには、CEリリース20.12または<code>com.tangosol.net.DefaultCacheServer.startServerDaemon().waitForServiceStart();</code>をコールして、新しいCoherenceブートストラップAPIを使用できます</span> </p>

</div>

<h3 id="stuck-pending"><span class="merged" id="all.2Z8oUE" title="原文 : My Coherence cluster is stuck with some running Pods and some pending Pods, I want to scale down">Coherenceクラスタは、実行中のポッドと一部の保留中のポッドにスタックしています。スケール・ダウンしたいです</span></h3>
<div class="section">
<p><span class="merged" id="all.1COqZn.spl1" title="原文 : If you try to create a Coherence deployment that has a replica count that is greater than your k8s cluster can actually provision then one or more Pods will fail to be created or can be left in a pending state.">k8sクラスタより大きいレプリカ数を持つCoherenceデプロイメントを実際にプロビジョニングしようとすると、1つ以上のポッドの作成に失敗するか、保留状態のままにできます。</span> <span class="merged" id="all.1COqZn.spl2" title="原文 : The obvious solution to this is to just scale down your Coherence deployment to a smaller size that can be provisioned.">これに対する明らかな解決策は、Coherenceデプロイメントをプロビジョニングできる小さいサイズにスケール・ダウンするだけです。</span> <span class="merged" id="all.1COqZn.spl3" title="原文 : The issue here is that the safe scaling functionality built into the operator will not allow scaling down to take place because it cannot guarantee no parition/data loss.">問題は、オペレータに組み込まれている安全なスケーリング機能では、解析/データ損失を保証できないため、スケール・ダウンを実行できないことです。</span> <span class="merged" id="all.1COqZn.spl4" title="原文 : The Coherence deployment is now stuck in this state.">Coherenceデプロイメントはこの状態でスタックするようになりました。</span> </p>

<p><span class="merged" id="all.1hnarS" title="原文 : The simplest solution would be to completely delete the the Coherence deployment and redeploy with a lower replica count.">最も簡単な解決策は、Coherenceデプロイメントを完全に削除し、より低いレプリカ数で再デプロイすることです。</span></p>

<p><span class="merged" id="all.1rWOh5" title="原文 : If this is not possible then the following steps will allow the deployment to be scaled down.">これができない場合は、次のステップでデプロイメントをスケール・ダウンできます。</span></p>

<p><span class="merged" id="all.32tiNo" title="原文 : 1 Update the stuck Coherence deployment’s scaling policy to be Parallel">1 スタックCoherenceデプロイメントのスケーリング・ポリシーを<code>Parallel</code>に更新</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  scaling:
    policy: Parallel</markup>

<p><span class="merged" id="all.2lfM79.spl1" title="原文 : 2 Scale down the cluster to the required size using whatever scaling commands you want, i.e kubectl scale or just update the replica value of the Coherence deployment yaml.">2 必要なスケーリング・コマンドを使用して、クラスタを必要なサイズにスケール・ダウンするか、つまり、<code>kubectl scale</code>を使用するか、Coherenceデプロイメントyamlのレプリカ値を更新します。</span> <span class="merged" id="all.2lfM79.spl2" title="原文 : Note: If updating the Coherence yaml, this should not be done as part of step 1, above.">ノート: Coherence yamlを更新する場合、前述のステップ1では実行しないでください。</span> </p>

<p><span class="merged" id="all.2Tjni6" title="原文 : 3 Once the Coherence deployment has scaled to the required size then change the scaling policy value back to the default by updating the Coherence yaml to have no scaling policy value in it.">3 Coherenceデプロイメントに必要なサイズまでスケーリングした後、スケーリング・ポリシーの値をデフォルトに戻すには、Coherence yamlを更新してスケーリング・ポリシー値をデフォルトに戻します。</span></p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.2c9sk.spl1" title="原文 : When using this work around to scale down a stuck deployment that contains data it is important that only the missing or pending Pods are removed.">この回避策を使用してデータを含むスタック・デプロイメントをスケール・ダウンする場合は、欠落しているポッドまたは保留中のポッドのみが削除されることが重要です。</span> <span class="merged" id="all.2c9sk.spl2" title="原文 : For example if a Coherence deployment is deployed with a replica count of 100 and 90 Pods are ready, but the other 10 are either missing or stuck pending then the replica value used in step 2 above must be 90.">たとえば、100および90ポッドのレプリカ数でCoherenceデプロイメントがデプロイされ、もう1つの10が欠落しているか、保留中の場合、前述のステップ2で使用されているレプリカ値は90である必要があります。</span> <span class="merged" id="all.2c9sk.spl3" title="原文 : Because the scaling policy has been set to Parallel the operator will not check any Status HA values before scaling down Pods, so removing &quot;ready&quot; Pods that contain data will almost certainly result in data loss.">スケーリング・ポリシーが<code>Parallel</code>に設定されているため、ポッドをスケール・ダウンする前に、オペレータはステータスHA値をチェックしません。したがって、データを含む「準備完了」ポッドを削除すると、ほぼ間違いなくデータが失われます。</span> <span class="merged" id="all.2c9sk.spl4" title="原文 : To safely scale down lower, then first follow the three steps above then after changing the scaling policy back to the default further scaling down can be done as normal.">安全に下位にスケール・ダウンするには、まず前述の3つのステップに従います。次に、スケーリング・ポリシーをデフォルトのスケール・ダウンに変更すると、通常どおりに実行できます。</span> </p>
</div>
</div>

<h3 id="stuck-delete"><span class="merged" id="all.2KNFbK" title="原文 : My Coherence cluster is stuck with all pending/crashing Pods, I cannot delete the deployment">Coherenceクラスタがすべての保留中/クラッシュしているポッドにスタックしているため、デプロイメントを削除できません</span></h3>
<div class="section">
<p><span class="merged" id="all.4OjxBF.spl1" title="原文 : A Coherence deployment can become stuck where none of the Pods can start, for example the image used is incorrect and all Pods are stuck in ImagePullBackoff.">Coherenceデプロイメントは、どのポッドも起動できない場合にスタックすることがあります。たとえば、使用するイメージが正しくなく、すべてのポッドがImagePullBackoffでスタックされます。</span> <span class="merged" id="all.4OjxBF.spl2" title="原文 : It can then become impossible to delete the broken deployment.">これにより、破損したデプロイメントを削除できなくなります。</span> <span class="merged" id="all.4OjxBF.spl3" title="原文 : This is because the Operator has installed a finalizer but this finalizer cannot execute.">これは、オペレータがファイナライザをインストールしたが、このファイナライザは実行できないためです。</span> </p>

<p><span class="merged" id="all.1Zfwc6" title="原文 : For example, suppose we have deployed a Coherence deployment named my-cluster into namespace coherence-test.">たとえば、<code>my-cluster</code>という名前のCoherenceデプロイメントをネームスペース<code>coherence-test</code>にデプロイしたとします。</span></p>

<p><span class="merged" id="all.2fnZLv" title="原文 : First try to delete the deployment as normal:">まず、通常どおりデプロイメントを削除しようとします:</span></p>

<markup
lang="console"

>kubectl -n coherence-test delete coherence/my-cluster</markup>

<p><span class="merged" id="all.1iW5l0" title="原文 : If this command hangs, then press ctrl-c to exit and then run the following patch command.">このコマンドがハングアップした場合は、<code>ctrl-c</code>を押して終了し、次のパッチ・コマンドを実行します。</span></p>

<markup
lang="console"

>kubectl -n coherence-test patch coherence/my-cluster -p '{"metadata":{"finalizers":[]}}' --type=merge</markup>

<p><span class="merged" id="all.1BrJsz" title="原文 : This will remove the Operator’s finalizer from the Coherence deployment.">これにより、オペレータのファイナライザがCoherenceデプロイメントから削除されます。</span></p>

<p><span class="merged" id="all.3eZdwS" title="原文 : At this point the my-cluster Coherence deployment might already have been removed, if not try the delete command again.">この時点で、削除コマンドを再試行しない場合、<code>my-cluster</code> Coherenceデプロイメントはすでに削除されている可能性があります。</span></p>

</div>

<h3 id="site-safe"><span class="merged" id="all.yHRlW" title="原文 : My cache services will not reach Site-Safe">自分のキャッシュ・サービスがSite-Safeに到達しません</span></h3>
<div class="section">
<p><span class="merged" id="all.1SvWBB.spl1" title="原文 : Coherence distributes data in a cluster to achieve the highest status HA value that it can, the best being site-safe.">Coherenceは、クラスタにデータを分散して、最高のステータスのHA値を実現します。最高はサイト・セーフです。</span> <span class="merged" id="all.1SvWBB.spl2" title="原文 : This is done using the various values configured for the site, rack, machine, and member names.">これは、サイト、ラック、マシン、およびメンバー名用に構成されたさまざまな値を使用して行われます。</span> <span class="merged" id="all.1SvWBB.spl3" title="原文 : The Coherence Operator configures these values for the Pods in a Coherence deployment.">Coherence Operatorは、Coherenceデプロイメントのポッドに対してこれらの値を構成します。</span> <span class="merged" id="all.1SvWBB.spl4" title="原文 : By default, the values for the site and rack names are taken from standard k8s labels applied to the Nodes in the k8s cluster.">デフォルトでは、サイト名とラック名の値は、k8sクラスタ内のノードに適用される標準のk8sラベルから取得されます。</span> <span class="merged" id="all.1SvWBB.spl5" title="原文 : If the Nodes in the cluster do not have these labels set then the site and rack names will be unset and Coherence will not be able to reach rack or site safe.">クラスタ内のノードにこれらのラベルが設定されていない場合、サイト名およびラック名は設定解除され、Coherenceはラックまたはサイトの安全に到達できません。</span> </p>

<p><span class="merged" id="all.4ICZe" title="原文 : There are a few possible solutions to this, see the explanation in the documentation explaining Member Identity">これにはいくつかの解決策があります。<router-link to="/docs/coherence/021_member_identity">「メンバー・アイデンティティ」</router-link>を説明するドキュメントの説明を参照してください</span></p>

</div>

<h3 id="dashboards"><span class="merged" id="all.1VzbJK" title="原文 : My Grafana Dashboards do not display any metrics">自分のGrafanaダッシュボードにメトリクスが表示されない</span></h3>
<div class="section">
<p><span class="merged" id="all.3NQmUp.spl1" title="原文 : If you have imported the Grafana dashboards provided by the Operator into Grafana, but they are not displaying any metric values, it may be that you have imported the wrong format dashboards.">オペレータによって提供されるGrafanaダッシュボードをGrafanaにインポートしたが、メトリック値が表示されない場合は、誤った形式のダッシュボードをインポートした可能性があります。</span> <span class="merged" id="all.3NQmUp.spl2" title="原文 : The Operator has multiple sets of dashboards, one for the default Coherence metric name format, one for Microprofile metric name format, and one for Micrometer metric name format.">オペレータには、デフォルトのCoherenceメトリック名形式用に1つ、Microprofileメトリック名形式用に1つ、<a href="https://micrometer.io" id="" target="_blank" >「マイクロメーター」</a>メトリック名形式用に1つ、複数のダッシュボード・セットがあります。</span> </p>

<p><span class="merged" id="all.2pXeBR.spl1" title="原文 : The simplest way to find out which version corresponds to your Coherence cluster is to query the metrics endpoint with something like curl.">Coherenceクラスタに対応するバージョンを確認するための最も簡単な方法は、<code>curl</code>のような方法でメトリクス・エンドポイントをクエリーすることです。</span> <span class="merged" id="all.2pXeBR.spl2" title="原文 : If the metric names are in the format vendor:coherence_cluster_size, i.e. prefixed with vendor: then this is the default Coherence format.">メトリック名の形式が<code>vendor:coherence_cluster_size</code>、つまり、プレフィクスが<code>vendor:</code>の場合、これがデフォルトのCoherence形式になります。</span> <span class="merged" id="all.2pXeBR.spl3" title="原文 : If metric names are in the format vendor_Coherence_Cluster_Size, i.e. prefixed with vendor_ then this is Microprofile format.">メトリック名の形式が<code>vendor_Coherence_Cluster_Size</code>、つまり、プレフィクスが<code>vendor_</code>の場合、これはMicroprofile形式です。</span> <span class="merged" id="all.2pXeBR.spl4" title="原文 : If the metric name has no vendor prefix then it is using Micrometer metrics.">メトリック名に<code>vendor</code>プレフィクスがない場合、Micrometerメトリクスが使用されます。</span> </p>

<p><span class="merged" id="all.26P66i" title="原文 : See: the Importing Grafana Dashboards documentation.">参照: <router-link to="/docs/metrics/030_importing">「Grafanaダッシュボードのインポート」</router-link>のドキュメント。</span></p>

</div>

<h3 id="arm-java8"><span class="merged" id="all.rZAz6" title="原文 : I’m using Arm64 and Java 8 and the JVM will not start due to using G1GC">Arm64およびJava 8を使用しているため、JVMはG1GCの使用により開始されません</span></h3>
<div class="section">
<p><span class="merged" id="all.4YuR9O.1" title="原文 : If running Kubernetes on ARM processors and using Coherence images built on Java 8 for ARM, note that the G1 garbage collector in that version of Java on ARM is marked as experimental.">ARMプロセッサでKubernetesを実行し、Java 8 for ARMでビルドされたCoherenceイメージを使用する場合、ARM上のそのバージョンのJavaのG1ガベージ・コレクタは実験的としてマークされます。</span></p>

<p><span class="merged" id="all.1XVCma.spl1" title="原文 : By default, the Operator configures the Coherence JVM to use G1.">デフォルトでは、オペレータはG1を使用するようにCoherence JVMを構成します。</span> <span class="merged" id="all.1XVCma.spl2" title="原文 : This will cause errors on Arm64 Java 8 JMS unless the JVM option -XX:+UnlockExperimentalVMOptions is added in the Coherence resource spec (see Adding Arbitrary JVM Arguments).">これにより、JVMオプション<code>-XX:+UnlockExperimentalVMOptions</code>がCoherenceリソース仕様に追加されないかぎり、Arm64 Java 8 JMSにエラーが発生します(<router-link to="/docs/jvm/030_jvm_args">「任意のJVM引数の追加」</router-link>を参照)。</span> <span class="merged" id="all.1XVCma.spl3" title="原文 : Alternatively specify a different garbage collector, ideally on a version of Java this old, use CMS (see Garbage Collector Settings).">または、この古いバージョンのJavaで別のガベージ・コレクタを指定する場合は、CMSを使用します(<router-link to="/docs/jvm/040_gc">「ガベージ・コレクタ設定」</router-link>を参照)。</span> </p>

</div>
</div>
</doc-view>
