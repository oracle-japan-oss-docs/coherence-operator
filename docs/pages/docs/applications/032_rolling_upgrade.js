<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_rolling_upgrades_of_coherence_applications"><span class="merged" id="all.2oaGuJ" title="原文 : Rolling Upgrades of Coherence Applications">Coherenceアプリケーションのローリング・アップグレード</span></h2>
<div class="section">
<p><span class="merged" id="all.1ZCZP" title="原文 : The Coherence Operator supports safe rolling upgrades of Coherence clusters.">Coherence Operatorは、Coherenceクラスタの安全なローリング・アップグレードをサポートしています。</span></p>

</div>

<h2 id="_default_behaviour"><span class="merged" id="all.3qrVev"  title="原文:: Default Behaviour">デフォルト動作</span></h2>
<div class="section">
<p><span class="merged" id="all.1IVApc.spl1" title="原文 : The Coherence Operator uses a StatefulSet to manage the application Pods.">Coherence Operatorは、StatefulSetを使用してアプリケーション・ポッドを管理します。</span> <span class="merged" id="all.1IVApc.spl2" title="原文 : The StatefulSet is configured to perform its default rolling upgrade behaviour.">StatefulSetは、デフォルトのローリング・アップグレード動作を実行するように構成されています。</span> <span class="merged" id="all.1IVApc.spl3" title="原文 : This means that when a Coherence resource is updated the StatefulSet will control the rolling upgrade.">つまり、Coherenceリソースが更新されると、StatefulSetによってローリング・アップグレードが制御されます。</span> <span class="merged" id="all.1IVApc.spl4" title="原文 : First a Pod is killed and rescheduled with the updated specification.">最初にポッドが強制終了され、更新された仕様で再スケジュールされます。</span> <span class="merged" id="all.1IVApc.spl5" title="原文 : When this Pod is &quot;ready&quot; the next Pod is killed and rescheduled, and so on until all the Pods are updated.">このポッドが「準備完了」になると、次のポッドが強制終了されて再スケジュールされ、すべてのポッドが更新されるまで続きます。</span> <span class="merged" id="all.1IVApc.spl6" title="原文 : Because the default readiness probe configured by the Operator will wait for Coherence members to be &quot;safe&quot; (i.e. no endangered partitions) and redistribution to be complete when the new Pod is ready, it is safe to kill the next Pod.">オペレータによって構成されたデフォルトのレディネス・プローブは、Coherenceメンバーが「安全」(つまり、危険なパーティションがない)になるのを待機し、新しいポッドの準備ができたら再配布が完了するまで待機するため、次のポッドを強制終了しても安全です。</span> </p>

</div>

<h2 id="_custom_rolling_upgrades"><span class="merged" id="all.2AFyjP" title="原文 : Custom Rolling Upgrades">カスタム・ローリング・アップグレード</span></h2>
<div class="section">
<p><span class="merged" id="all.Hiesw.spl1" title="原文 : The Coherence resource yaml has a field named RollingUpdateStrategy which can be used to override the default rolling upgrade strategy.">Coherenceリソースyamlには、デフォルトのローリング・アップグレード戦略をオーバーライドするために使用できる<code>RollingUpdateStrategy</code>というフィールドがあります。</span> <span class="merged" id="all.Hiesw.spl2" title="原文 : The field can be set to one of the following values:">フィールドは、次のいずれかの値に設定できます:</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.lBqIi"  title="原文: RollingUpdateStrategy">RollingUpdateStrategy</span></th>
<th><span class="merged" id="all.4JM9z7.48"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><code>Pod</code></td>
<td class=""><span class="merged" id="all.20OoMd" title="原文 : This is the same as the default behaviour, one Pod at a time is upgraded.">これはデフォルトの動作と同じで、一度に1つのポッドがアップグレードされます。</span></td>
</tr>
<tr>
<td class=""><code>Node</code></td>
<td class=""><span class="merged" id="all.YUPGK" title="原文 : This strategy will upgrade all Pods on a Node at the same time.">この方法では、ノード上のすべてのポッドが同時にアップグレードされます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1c4Ta8" title="原文 : `NodeLabel `">`NodeLabel `</span></td>
<td class=""><span class="merged" id="all.1ZdUsO" title="原文 : This strategy will upgrade all Pods on all Nodes that have a matching value for a give Node label.">この方法では、指定されたノード・ラベルに一致する値を持つすべてのノード上のすべてのポッドがアップグレードされます。</span></td>
</tr>
<tr>
<td class=""><code>Manual</code></td>
<td class=""><span class="merged" id="all.3Etjh8" title="原文 : This strategy is the same as the Manual rolling upgrade configuration for a StatefulSet.">この方法は、StatefulSetの<code>Manual</code>ローリング・アップグレード構成と同じです。</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3V2c34.spl1" title="原文 : The default &quot;by Pod&quot; strategy is the slowest but safest strategy.">デフォルトの「ポッド別」戦略は、最も低速ですが最も安全な戦略です。</span> <span class="merged" id="all.3V2c34.spl2" title="原文 : For a very large cluster upgrading by Pod may take a long time.">Podによる非常に大規模なクラスタのアップグレードには時間がかかる場合があります。</span> <span class="merged" id="all.3V2c34.spl3" title="原文 : For example, if each Pod takes two minutes to be rescheduled and become ready, and a cluster has 100 Pods, that will be 200 minutes, (over three hours) to upgrade.">たとえば、各ポッドの再スケジュールと準備に2分かかり、クラスタに100個のポッドがある場合、アップグレードに200分(3時間以上)かかります。</span> <span class="merged" id="all.3V2c34.spl4" title="原文 : In a lot of use cases the time taken to upgrade is not an issue, Coherence continues to serve requests while the upgrade is in progress.">多くのユース・ケースでは、アップグレードにかかる時間は問題ではありません。Coherenceは、アップグレードの進行中もリクエストの処理を続けます。</span> <span class="merged" id="all.3V2c34.spl5" title="原文 : But, sometimes a faster upgrade is required, which is where the other strategies can be used.">ただし、他の戦略を使用できるような、より高速なアップグレードが必要な場合があります。</span> </p>


<h3 id="_upgrade_by_pod"><span class="merged" id="all.2UWpQb" title="原文 : Upgrade By Pod">ポッド別アップグレード</span></h3>
<div class="section">
<p><span class="merged" id="all.4AJMCb" title="原文 : Upgrading by Pod is the default strategy described above.">ポッド別アップグレードは、前述のデフォルト戦略です。</span></p>

<p><span class="merged" id="all.4Nkvz6" title="原文 : The Pod strategy is configured by omitting the rollingUpdateStrategy field, or by setting the rollingUpdateStrategy field to Pod as shown below:"><code>Pod</code>戦略は、<code>rollingUpdateStrategy</code>フィールドを省略するか、次に示すように<code>rollingUpdateStrategy</code>フィールドを<code>Pod</code>に設定して構成します:</span></p>

<markup
lang="yaml"
title="cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  rollingUpdateStrategy: Pod
  image: my-app:1.0.0</markup>

</div>

<h3 id="_upgrade_by_node"><span class="merged" id="all.34hwhf" title="原文 : Upgrade By Node">ノード別アップグレード</span></h3>
<div class="section">
<p><span class="merged" id="all.470s5f.spl1" title="原文 : By default, the Operator configures Coherence to be at least &quot;machine safe&quot;, using the Node as the machine identifier.">デフォルトでは、オペレータは、ノードをマシン識別子として使用して、Coherenceを少なくとも「マシン・セーフ」に構成します。</span> <span class="merged" id="all.470s5f.spl2" title="原文 : This means that it should be safe to lose all Pods on a Node.">つまり、ノード上のすべてのポッドを失うことは安全です。</span> <span class="merged" id="all.470s5f.spl3" title="原文 : By upgrading multiple Pods at the same time the overall time to perform a rolling upgrade is less than using the default one Pod at a time behaviour.">複数のポッドを同時にアップグレードすると、ローリング・アップグレードを実行する全体の時間は、一度に1つのデフォルトのポッド動作を使用する時間より短くなります。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.2vB7Xc" title="原文 : When using the Node strategy where multiple Pods will be killed, the remaining cluster must have enough capacity to recover the data and backups from the Pods that are killed.">複数のポッドが強制終了される<code>Node</code>戦略を使用する場合、残りのクラスタには、強制終了されたポッドからデータおよびバックアップをリカバリするための十分な容量が必要です。</span></p>

<p><span class="merged" id="all.3s8CjB.spl1" title="原文 : For example, if a cluster of 18 Pods is distributed over three Nodes, each Node will be running six Pods.">たとえば、18個のポッドのクラスタが3つのノードに分散されている場合、各ノードは6個のポッドを実行します。</span> <span class="merged" id="all.3s8CjB.spl2" title="原文 : When upgrading by Node, six Pods will be killed at the same time, so there must be enough capacity in the remaining 12 Pods to hold all the data that was in the original 18 Pods.">ノード別アップグレードでは、6つのPodが同時に強制終了されるため、元の18個のPodに含まれるすべてのデータを保持するのに十分な容量が残りの12個のPodに存在する必要があります。</span> </p>
</p>
</div>
<p><span class="merged" id="all.gC6xO" title="原文 : The Node strategy is configured by setting the rollingUpdateStrategy field to Node as shown below:"><code>Node</code>戦略は、次のように<code>rollingUpdateStrategy</code>フィールドを<code>Node</code>に設定して構成します:</span></p>

<markup
lang="yaml"
title="cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  rollingUpdateStrategy: Node
  image: my-app:1.0.0</markup>

</div>

<h3 id="_upgrade_by_node_label"><span class="merged" id="all.2lADm6" title="原文 : Upgrade By Node Label">ノード別アップグレード・ラベル</span></h3>
<div class="section">
<p><span class="merged" id="all.2DTWsP.spl1" title="原文 : The NodeLabel strategy will perform a rolling upgrade by using a label on Nodes to group Nodes together."><code>NodeLabel</code>戦略では、ノードのラベルを使用してローリング・アップグレードを実行し、ノードをグループ化します。</span> <span class="merged" id="all.2DTWsP.spl2" title="原文 : Then all Pods on all the Nodes in a group (i.e. with the same label value) will be upgraded together.">次に、グループ内のすべてのノード(つまり、同じラベル値を持つ)のすべてのポッドが一緒にアップグレードされます。</span> </p>

<p><span class="merged" id="all.4ZBHZy.spl1" title="原文 : In many production Kubernetes clusters, there is a concept of zones and fault domains, with each Node belonging to one of these zones and domains.">多くの本番Kubernetesクラスタでは、ゾーンとフォルト・ドメインの概念があり、各ノードはこれらのゾーンとドメインのいずれかに属しています。</span> <span class="merged" id="all.4ZBHZy.spl2" title="原文 : Typically, Nodes are labelled to indicate which zone and domain they are in.">通常、ノードには、どのゾーンおよびドメインに属するかを示すラベルが付けられます。</span> <span class="merged" id="all.4ZBHZy.spl3" title="原文 : For example the topology.kubernetes.io/zone is a standard label for the zone name.">たとえば、<code>topology.kubernetes.io/zone</code>はゾーン名の標準ラベルです。</span> </p>

<p><span class="merged" id="all.3tRVsI.spl1" title="原文 : These labels are used by the Coherence Operator to configure the site and rack names for a Coherence cluster. (see the documentation on Configuring Site and Rack).">これらのラベルは、Coherence OperatorがCoherenceクラスタのサイト名およびラック名を構成するために使用されます(<router-link to="/docs/coherence/021_member_identity">「サイトおよびラックの構成」</router-link>のドキュメントを参照)。</span> <span class="merged" id="all.3tRVsI.spl2" title="原文 : In a properly configured cluster that is site or rack safe, it is possible to upgrade all Pods in a site or rack at the same time.">サイトまたはラック・セーフである適切に構成されたクラスタでは、サイトまたはラック内のすべてのポッドを同時にアップグレードできます。</span> <span class="merged" id="all.3tRVsI.spl3" title="原文 : In a typical Cloud Kubernetes Cluster there may be three zones, so a rolling upgrade by zon (or site) would upgrade the cluster in three parts, which would be much faster than Pod by Pod.">一般的なクラウドKubernetesクラスタには3つのゾーンがある可能性があるため、ゾーン(またはサイト)によるローリング・アップグレードではクラスタが3つの部分でアップグレードされるため、ポッドによるポッドよりもはるかに高速になります。</span> <span class="merged" id="all.3tRVsI.spl4" title="原文 : This is a more extreme version of the Node strategy.">これは、<code>Node</code>戦略のより極端なバージョンです。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.1"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.eXJbL" title="原文 : When using the NodeLabel strategy where multiple Pods will be killed, the remaining cluster must have enough capacity to recover the data and backups from the Pods that are killed.">複数のポッドが強制終了される<code>NodeLabel</code>戦略を使用する場合、残りのクラスタには、強制終了されたポッドからデータおよびバックアップをリカバリするための十分な容量が必要です。</span></p>

<p><span class="merged" id="all.3Dp0SA.spl1" title="原文 : For example, if a cluster of 18 Pods is distributed over Nodes in three zones, each zone will be running six Pods.">たとえば、18個のポッドのクラスタが3つのゾーンのノードに分散されている場合、各ゾーンで6個のポッドが実行されます。</span> <span class="merged" id="all.3Dp0SA.spl2" title="原文 : When upgrading by Node label, six Pods will be killed at the same time, so there must be enough capacity in the remaining 12 Pods to hold all the data that was in the original 18 Pods.">Nodeラベルでアップグレードする場合、6つのPodが同時に強制終了されるため、元の18個のPodに含まれるすべてのデータを保持するのに十分な容量が残りの12個のPodに存在する必要があります。</span> </p>
</p>
</div>
<p><span class="merged" id="all.3Vswkm" title="原文 : The Node strategy is configured by setting the rollingUpdateStrategy field to NodeLabel and also setting the rollingUpdateLabel field to the name of the label to use."><code>Node</code>戦略は、<code>rollingUpdateStrategy</code>フィールドを<code>NodeLabel</code>に設定し、使用するラベルの名前に<code>rollingUpdateLabel</code>フィールドを設定することによって構成されます。</span></p>

<p><span class="merged" id="all.OlPTO" title="原文 : For example, to perform a rolling upgrade of all Pods by zone the yaml below could be used:">たとえば、ゾーンごとにすべてのポッドのローリング・アップグレードを実行するには、次のyamlを使用できます:</span></p>

<markup
lang="yaml"
title="cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  rollingUpdateStrategy: NodeLabel
  rollingUpdateLabel: "topology.kubernetes.io/zone"
  image: my-app:1.0.0</markup>

<div class="admonition caution">
<p class="admonition-textlabel"><span class="merged" id="all.4Pmf1N"  title="原文:: Caution">注意</span></p>
<p ><p><span class="merged" id="all.tO41J.spl1" title="原文 : It is up to the customer to verify that the label used is appropriate, i.e. is one of the labels used for the Coherence site or rack configuration.">使用されるラベルが適切であること、つまりCoherenceサイトまたはラック構成に使用されるラベルの1つであることを確認するのは、顧客自身です。</span> <span class="merged" id="all.tO41J.spl2" title="原文 : It is also important to ensure that all Nodes in the cluster actually have the label.">また、クラスタ内のすべてのノードにラベルが実際に付いていることを確認することも重要です。</span> </p>

<p><span class="merged" id="all.3vLucJ.spl1" title="原文 : It is also up to the customer to verify that the Coherence cluster to be upgraded is site or rack safe before the upgrade begins.">アップグレードを開始する前に、アップグレードするCoherenceクラスタがサイトまたはラック・セーフであることを確認するのは、お客様自身です。</span> <span class="merged" id="all.3vLucJ.spl2" title="原文 : The Coherence Operator can determine that no services are endangered, but it cannot determine site or rack safety.">Coherence Operatorは、危険にさらされるサービスがないと判断できますが、サイトまたはラックの安全性を判断することはできません。</span> </p>
</p>
</div>
</div>

<h3 id="_manual_upgrade"><span class="merged" id="all.cqvq5"  title="原文:: Manual Upgrade">手動アップグレード</span></h3>
<div class="section">
<p><span class="merged" id="all.1trlg.spl1" title="原文 : If the rollingUpdateStrategy is set to Manual then neither the Coherence Operator, nor the StatefulSet controller in Kubernetes will upgrade the Pods."><code>rollingUpdateStrategy</code>が<code>Manual</code>に設定されている場合、Coherence OperatorもKubernetesのStatefulSetコントローラもポッドをアップグレードしません。</span> <span class="merged" id="all.1trlg.spl2" title="原文 : When the manual strategy is used the StatefulSet’s spec. field is set to OnDelete.">手動戦略を使用する場合、StatefulSetの<code>spec.</code>フィールドは<code>OnDelete</code>に設定されます。</span> <span class="merged" id="all.1trlg.spl3" title="原文 : After updating a Coherence resource, the StatefulSet will be updated with the new state, but none of the Pods will be upgraded.">Coherenceリソースを更新すると、StatefulSetは新しい状態で更新されます。ただし、どのポッドもアップグレードされません。</span> <span class="merged" id="all.1trlg.spl4" title="原文 : Pods must then be manually deleted so that they are rescheduled with the new configuration.">ポッドは、新しい構成で再スケジュールされるように手動で削除する必要があります。</span> <span class="merged" id="all.1trlg.spl5" title="原文 : Pods can be deleted in any order and any number at a time. (see StatefulSet Update Strategies in the Kubernetes documentation).">ポッドは、一度に任意の順序で任意の数だけ削除できます(Kubernetesドキュメントの<a href="https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#update-strategies" id="" target="_blank" >「StatefulSet戦略の更新」</a>を参照)。</span> </p>

<p><span class="merged" id="all.2YxWvS" title="原文 : The Manual strategy is configured by setting the rollingUpdateStrategy field to Manual as shown below:"><code>Manual</code>戦略は、次のように<code>rollingUpdateStrategy</code>フィールドを<code>Manual</code>に設定して構成します:</span></p>

<markup
lang="yaml"
title="cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  rollingUpdateStrategy: Manual
  image: my-app:1.0.0</markup>

<div class="admonition caution">
<p class="admonition-textlabel"><span class="merged" id="all.4Pmf1N.1"  title="原文:: Caution">注意</span></p>
<p ><p><span class="merged" id="all.wkC8O.spl1" title="原文 : When using the manual upgrade strategy, the customer is in full control of the upgrade process.">手動アップグレード戦略を使用すると、顧客はアップグレード・プロセスを完全に制御できます。</span> <span class="merged" id="all.wkC8O.spl2" title="原文 : The Operator will not do anything.">オペレータは何もしません。</span> <span class="merged" id="all.wkC8O.spl3" title="原文 : It is important that the customer understands how to perform a safe rolling upgrade if no data loss is desired.">データ損失が不要な場合に安全なローリング・アップグレードを実行する方法を理解することが重要です。</span> </p>
</p>
</div>
</div>
</div>
</doc-view>
