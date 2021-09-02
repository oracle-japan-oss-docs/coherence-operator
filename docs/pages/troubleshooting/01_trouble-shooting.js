<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_troubleshooting_guide"><span class="merged" id="all.3FgWsH"  title="原文:: Troubleshooting Guide">トラブルシューティング・ガイド</span></h2>
<div class="section">
<p><span class="merged" id="all.4R0Paq.spl1" title="原文 : The purpose of this page is to list troubleshooting guides and work-arounds for issues that you may run into when using the Coherence Operator.">このページの目的は、Coherence Operatorの使用時に発生する可能性のある問題のトラブルシューティング・ガイドと作業内容を一覧表示することです。</span> <span class="merged" id="all.4R0Paq.spl2" title="原文 : This paged will be updated and maintained over time to include common issues we see from customers">このページ・サービスは、顧客から見た一般的な問題を含めるために、時間の経過とともに更新および保守されます</span> </p>

</div>

<h2 id="_contents"><span class="merged" id="all.1Q34Zl"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.293CDp" title="原文 : Why Does the Operator Pod Restart"><router-link @click.native="this.scrollFix('#restart')" to="#restart">オペレータがポッドを再起動する理由</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4CVSo0" title="原文 : Why are the Coherence Pods not reaching ready"><router-link @click.native="this.scrollFix('#ready')" to="#ready">Coherenceポッドが準備完了に達しない理由</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3FuXJR" title="原文 : My Coherence cluster is stuck with some running Pods and some pending Pods, I want to scale down"><router-link @click.native="this.scrollFix('#stuck-pending')" to="#stuck-pending">Coherenceクラスタが、実行中のポッドと保留中のポッドにスタックしているため、スケール・ダウンできます</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2A7tOj" title="原文 : My Coherence cluster is stuck with all pending/crashing Pods, I cannot delete the deployment"><router-link @click.native="this.scrollFix('#stuck-delete')" to="#stuck-delete">Coherenceクラスタがすべての保留中/クラッシュ・ポッドでスタックしているため、デプロイメントを削除できません</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.SDG8c" title="原文 : My cache services will not reach Site Safe"><router-link @click.native="this.scrollFix('#site-safe')" to="#site-safe">キャッシュ・サービスがサイト・セーフに到達しない</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1sxAaI" title="原文 : My Grafana Dashboards do not display any metrics"><router-link @click.native="this.scrollFix('#dashboards')" to="#dashboards">Grafanaダッシュボードにメトリクスが表示されません</router-link></span></p>

</li>
</ul>
</div>

<h2 id="_issues"><span class="merged" id="all.43r0NR"  title="原文:: Issues">問題</span></h2>
<div class="section">

<h3 id="restart"><span class="merged" id="all.32hxbE" title="原文 : Why Does the Operator Pod Restart After Installation">インストール後にオペレータがポッドを再起動する理由</span></h3>
<div class="section">
<p><span class="merged" id="all.1BUzGS.spl1" title="原文 : You might notice that when the Operator is installed that the Operator Pod starts, dies and is then restarted.">オペレータがインストールされている場合、オペレータ・ポッドが起動し、停止してから再起動します。</span> <span class="merged" id="all.1BUzGS.spl2"  title="原文:: This is expected behaviour.">これは予期される動作です。</span> <span class="merged" id="all.1BUzGS.spl3" title="原文 : The Operator uses a K8s web-hook for defaulting and validation of the Coherence resources.">オペレータは、Coherenceリソースのデフォルト設定およびバリデーションにK8s webフックを使用します。</span> <span class="merged" id="all.1BUzGS.spl4" title="原文 : A web-hook requires certificates to be present in a Secret mounted to the Operator Pod as a volume.">webフックでは、オペレータ・ポッドにボリュームとしてマウントされた<code>Secret</code>に証明書が存在する必要があります。</span> <span class="merged" id="all.1BUzGS.spl5" title="原文 : If this Secret is not present the Operator creates it and populates it with self-signed certs.">このシークレットが存在しない場合、オペレータはそれを作成し、自己署名証明書で移入します。</span> <span class="merged" id="all.1BUzGS.spl6" title="原文 : In order for the Secret to then be mounted correctly the Pod must be restarted.">シークレットが正しくマウントされるようにするには、ポッドを再起動する必要があります。</span> <span class="merged" id="all.1BUzGS.spl7" title="原文 : See the the WebHooks documentation."><router-link to="/webhooks/01_introduction">the WebHooks</router-link>のドキュメントを参照してください。</span> </p>

</div>

<h3 id="ready"><span class="merged" id="all.3qibaY" title="原文 : Why are the Coherence Pods not reaching ready">Coherenceポッドが準備完了に達しない理由</span></h3>
<div class="section">
<p><span class="merged" id="all.2WEzEQ.1.spl1" title="原文 : The readiness/liveness probe used by the Operator in the Coherence Pods checks a number of things to determine whether the Pods is ready, one of these is whether the JVM is a cluster member.">CoherenceポッドのOperatorが使用するレディネス/リブネス・プローブは、ポッドの準備ができているかどうかを判断するためのいくつかの事柄をチェックします。そのうちの1つは、JVMがクラスタ・メンバーであるかどうかです。</span> <span class="merged" id="all.2WEzEQ.1.spl2" title="原文 : If your application uses a custom main class and is not properly bootstrapping Coherence then the Pod will not be ready until your application code actually touches a Coherence resource causing Coherence to start and join the cluster.">アプリケーションがカスタム・メイン・クラスを使用し、Coherenceを適切にブートストラップしていない場合、アプリケーション・コードでCoherenceリソースが実際に接続され、Coherenceが起動および結合されるまで、ポッドは準備できません。</span> </p>

<p><span class="merged" id="all.3O231E.1.spl1" title="原文 : When running in clusters with the Operator using custom main classes it is advisable to properly bootstrap Coherence from within your main method.">カスタム・メイン・クラスを使用してオペレータとともにクラスタで実行する場合は、<code>main</code>メソッド内からCoherenceを適切にブートストラップすることをお薦めします。</span> <span class="merged" id="all.3O231E.1.spl2" title="原文 : This can be done using the new Coherence bootstrap API available from CE release 20.12 or by calling com.tangosol.net.DefaultCacheServer.startServerDaemon().waitForServiceStart();">これは、CEリリース20.12から入手可能な新しいCoherenceブートストラップAPIを使用するか、<code>com.tangosol.net.DefaultCacheServer.startServerDaemon().waitForServiceStart();</code>を呼び出して実行できます</span> </p>

</div>

<h3 id="stuck-pending"><span class="merged" id="all.2Z8oUE" title="原文 : My Coherence cluster is stuck with some running Pods and some pending Pods, I want to scale down">Coherenceクラスタが、実行中のポッドと保留中のポッドにスタックしているため、スケール・ダウンできます</span></h3>
<div class="section">
<p><span class="merged" id="all.1COqZn.spl1" title="原文 : If you try to create a Coherence deployment that has a replica count that is greater than your k8s cluster can actually provision then one or more Pods will fail to be created or can be left in a pending state.">k8sクラスタより大きいレプリカ数を持つCoherenceデプロイメントを作成しようとすると、実際にプロビジョニングできる場合、1つ以上のポッドの作成に失敗するか、保留状態のままにできます。</span> <span class="merged" id="all.1COqZn.spl2" title="原文 : The obvious solution to this is to just scale down your Coherence deployment to a smaller size that can be provisioned.">これに対する明らかな解決策は、Coherenceデプロイメントを、プロビジョニングできる小さいサイズにスケール・ダウンするのみです。</span> <span class="merged" id="all.1COqZn.spl3" title="原文 : The issue here is that the safe scaling functionality built into the operator will not allow scaling down to take place because it cannot guarantee no parition/data loss.">この問題は、オペレータに組み込まれた安全なスケーリング機能では、同等のデータ損失を保証できないため、スケール・ダウンできないことです。</span> <span class="merged" id="all.1COqZn.spl4" title="原文 : The Coherence deployment is now stuck in this state.">Coherenceデプロイメントはこの状態になります。</span> </p>

<p><span class="merged" id="all.1hnarS" title="原文 : The simplest solution would be to completely delete the the Coherence deployment and redeploy with a lower replica count.">最も簡単な解決策は、Coherenceデプロイメントを完全に削除し、レプリカ数を減らして再デプロイすることです。</span></p>

<p><span class="merged" id="all.1rWOh5" title="原文 : If this is not possible then the following steps will allow the deployment to be scaled down.">これが不可能な場合は、次のステップでデプロイメントをスケール・ダウンできます。</span></p>

<p><span class="merged" id="all.32tiNo" title="原文 : 1 Update the stuck Coherence deployment&rsquo;s scaling policy to be Parallel">1 stuck Coherenceデプロイメントのスケーリング・ポリシーを<code>Parallel</code>に更新</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  scaling:
    policy: Parallel</markup>

<p><span class="merged" id="all.2lfM79.spl1" title="原文 : 2 Scale down the cluster to the required size using whatever scaling commands you want, i.e kubectl scale or just update the replica value of the Coherence deployment yaml.">2 任意のスケーリング・コマンド(<code>kubectl scale</code>など)を使用して、クラスタを必要なサイズにスケール・ダウンするか、Coherenceデプロイメントyamlのレプリカ値を更新するだけです。</span> <span class="merged" id="all.2lfM79.spl2" title="原文 : Note: If updating the Coherence yaml, this should not be done as part of step 1, above.">ノート: Coherence yamlを更新する場合、これは前述のステップ1の一部として実行しないでください。</span> </p>

<p><span class="merged" id="all.2Tjni6" title="原文 : 3 Once the Coherence deployment has scaled to the required size then change the scaling policy value back to the default by updating the Coherence yaml to have no scaling policy value in it.">3 Coherenceデプロイメントが必要なサイズにスケーリングされたら、Coherence yamlを更新してスケーリング・ポリシー値をデフォルトに戻します。</span></p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.2c9sk.spl1" title="原文 : When using this work around to scale down a stuck deployment that contains data it is important that only the missing or pending Pods are removed.">この作業を、データを含むスタック・デプロイメントをスケール・ダウンする場合、欠落しているポッドまたは保留中のポッドのみが削除されることが重要です。</span> <span class="merged" id="all.2c9sk.spl2" title="原文 : For example if a Coherence deployment is deployed with a replica count of 100 and 90 Pods are ready, but the other 10 are either missing or stuck pending then the replica value used in step 2 above must be 90.">たとえば、100ポッドと90ポッドのレプリカ数でCoherenceデプロイメントをデプロイした場合でも、他の10が欠落しているか、または保留のままである場合、前述のステップ2で使用されるレプリカ値は90である必要があります。</span> <span class="merged" id="all.2c9sk.spl3" title="原文 : Because the scaling policy has been set to Parallel the operator will not check any Status HA values before scaling down Pods, so removing &quot;ready&quot; Pods that contain data will almost certainly result in data loss.">スケーリング・ポリシーが<code>Parallel</code>に設定されているため、オペレータはポッドをスケール・ダウンする前にステータスHA値をチェックしません。そのため、データを含む「準備完了」ポッドを削除すると、ほぼデータ損失が発生します。</span> <span class="merged" id="all.2c9sk.spl4" title="原文 : To safely scale down lower, then first follow the three steps above then after changing the scaling policy back to the default further scaling down can be done as normal.">下から安全にスケール・ダウンするには、まず前述の3つのステップに従います。その後、スケール・ポリシーをデフォルトのスケール・ダウンに戻すと、通常のスケール・ダウンを行うことができます。</span> </p>
</div>
</div>

<h3 id="stuck-delete"><span class="merged" id="all.2KNFbK" title="原文 : My Coherence cluster is stuck with all pending/crashing Pods, I cannot delete the deployment">Coherenceクラスタがすべての保留中/クラッシュ・ポッドでスタックしているため、デプロイメントを削除できません</span></h3>
<div class="section">
<p><span class="merged" id="all.4OjxBF.spl1" title="原文 : A Coherence deployment can become stuck where none of the Pods can start, for example the image used is incorrect and all Pods are stuck in ImagePullBackoff.">Coherenceデプロイメントがスタックし、どのPodも起動できない状態になることがあります。たとえば、使用されるイメージが正しくなく、すべてのPodがImagePullBackoffにスタックしています。</span> <span class="merged" id="all.4OjxBF.spl2" title="原文 : It can then become impossible to delete the broken deployment.">その後、破損したデプロイメントは削除できません。</span> <span class="merged" id="all.4OjxBF.spl3" title="原文 : This is because the Operator has installed a finalizer but this finalizer cannot execute.">これは、オペレータがファイナライザをインストールしたが、このファイナライザを実行できないためです。</span> </p>

<p><span class="merged" id="all.1Zfwc6" title="原文 : For example, suppose we have deployed a Coherence deployment named my-cluster into namespace coherence-test.">たとえば、<code>my-cluster</code>という名前のCoherenceデプロイメントをネームスペース<code>coherence-test</code>にデプロイしたとします。</span></p>

<p><span class="merged" id="all.2fnZLv" title="原文 : First try to delete the deployment as normal:">まず、デプロイメントを通常どおり削除しようとします:</span></p>

<markup
lang="console"

>kubectl -n coherence-test delete coherence/my-cluster</markup>

<p><span class="merged" id="all.1iW5l0" title="原文 : If this command hangs, then press ctrl-c to exit and then run the following patch command.">このコマンドがハングアップした場合は、<code>ctrl-c</code>を押して終了し、次のパッチ・コマンドを実行します。</span></p>

<markup
lang="console"

>kubectl -n coherence-test patch coherence/my-cluster -p '{"metadata":{"finalizers":[]}}' --type=merge</markup>

<p><span class="merged" id="all.1BrJsz" title="原文 : This will remove the Operator&rsquo;s finalizer from the Coherence deployment.">これにより、オペレータのファイナライザがCoherenceデプロイメントから削除されます。</span></p>

<p><span class="merged" id="all.3eZdwS" title="原文 : At this point the my-cluster Coherence deployment might already have been removed, if not try the delete command again.">この時点で、削除コマンドを再度試行していない場合は、<code>my-cluster</code> Coherenceデプロイメントがすでに削除されている可能性があります。</span></p>

</div>

<h3 id="site-safe"><span class="merged" id="all.yHRlW" title="原文 : My cache services will not reach Site-Safe">キャッシュ・サービスがSite-Safeに到達しない</span></h3>
<div class="section">
<p><span class="merged" id="all.1SvWBB.spl1" title="原文 : Coherence distributes data in a cluster to achieve the highest status HA value that it can, the best being site-safe.">Coherenceは、クラスタ内のデータを分散して、最高のステータスのHA値を実現します(サイト・セーフ)。</span> <span class="merged" id="all.1SvWBB.spl2" title="原文 : This is done using the various values configured for the site, rack, machine, and member names.">これは、サイト名、ラック名、マシン名、およびメンバー名に構成されたさまざまな値を使用して行われます。</span> <span class="merged" id="all.1SvWBB.spl3" title="原文 : The Coherence Operator configures these values for the Pods in a Coherence deployment.">Coherence Operatorは、Coherenceデプロイメントのポッドに対してこれらの値を構成します。</span> <span class="merged" id="all.1SvWBB.spl4" title="原文 : By default, the values for the site and rack names are taken from standard k8s labels applied to the Nodes in the k8s cluster.">デフォルトでは、サイト名およびラック名は、k8sクラスタ内のノードに適用される標準のk8sラベルから取得されます。</span> <span class="merged" id="all.1SvWBB.spl5" title="原文 : If the Nodes in the cluster do not have these labels set then the site and rack names will be unset and Coherence will not be able to reach rack or site safe.">クラスタ内のノードにこれらのラベルが設定されていない場合、サイト名とラック名は設定解除され、Coherenceはラックまたはサイト・セーフに到達できなくなります。</span> </p>

<p><span class="merged" id="all.2Sem3P" title="原文 : There are a few possible solutions to this, see the explanation in the documentation explaining Member Identity">考えられるソリューションがいくつかあります。<router-link to="/coherence/021_member_identity">「メンバー・アイデンティティ」</router-link>について説明しているドキュメントの説明を参照してください</span></p>

</div>

<h3 id="dashboards"><span class="merged" id="all.1VzbJK" title="原文 : My Grafana Dashboards do not display any metrics">Grafanaダッシュボードにメトリクスが表示されません</span></h3>
<div class="section">
<p><span class="merged" id="all.3NQmUp.spl1" title="原文 : If you have imported the Grafana dashboards provided by the Operator into Grafana, but they are not displaying any metric values, it may be that you have imported the wrong format dashboards.">オペレータが提供するGrafanaダッシュボードをGrafanaにインポートしたが、メトリック値が表示されていない場合は、誤ったフォーマットのダッシュボードをインポートした可能性があります。</span> <span class="merged" id="all.3NQmUp.spl2" title="原文 : The Operator has multiple sets of dashboards, one for the default Coherence metric name format, one for Microprofile metric name format, and one for Micrometer metric name format.">オペレータには複数のダッシュボード・セットがあり、1つはデフォルトのCoherenceメトリック名フォーマット、もう1つはMicroprofileメトリック名フォーマット、もう1つは<a href="https://micrometer.io" id="" target="_blank" >Micrometer</a>メトリック名フォーマット用です。</span> </p>

<p><span class="merged" id="all.2pXeBR.spl1" title="原文 : The simplest way to find out which version corresponds to your Coherence cluster is to query the metrics endpoint with something like curl.">Coherenceクラスタに対応するバージョンを調べる最も簡単な方法は、<code>curl</code>のようなメトリクス・エンドポイントを問い合せます。</span> <span class="merged" id="all.2pXeBR.spl2" title="原文 : If the metric names are in the format vendor:coherence_cluster_size, i.e. prefixed with vendor: then this is the default Coherence format.">メトリック名の形式が<code>vendor:coherence_cluster_size</code>の場合(プレフィクスが<code>vendor:</code>の場合など)、これはデフォルトのCoherence形式です。</span> <span class="merged" id="all.2pXeBR.spl3" title="原文 : If metric names are in the format vendor_Coherence_Cluster_Size, i.e. prefixed with vendor_ then this is Microprofile format.">メトリック名の形式が<code>vendor_Coherence_Cluster_Size</code>、つまりプレフィクスが<code>vendor_</code>の場合、これはMicroprofile形式です。</span> <span class="merged" id="all.2pXeBR.spl4" title="原文 : If the metric name has no vendor prefix then it is using Micrometer metrics.">メトリック名にプレフィクス<code>vendor</code>がない場合は、Micrometerメトリクスが使用されます。</span> </p>

<p><span class="merged" id="all.27lshH" title="原文 : See: the Importing Grafana Dashboards documentation.">参照: <router-link to="/metrics/030_importing">「Grafanaダッシュボードのインポート」</router-link>ドキュメント。</span></p>

</div>
</div>
</doc-view>
