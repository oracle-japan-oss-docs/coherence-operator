<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2SFJgO" title="原文 : Coherence Operator API Docs">Coherence Operator APIドキュメント</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1nD7DO" title="原文 : A reference guide to the Coherence Operator CRD types.">Coherence Operator CRDタイプへの参照ガイド。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_coherence_operator_api_docs"><span class="merged" id="all.2SFJgO.1" title="原文 : Coherence Operator API Docs">Coherence Operator APIドキュメント</span></h2>
<div class="section">
<p><span class="merged" id="all.4Lnj75.spl1" title="原文 : This is a reference for the Coherence Operator API types.">これは、Coherence Operator APIタイプの参照です。</span> <span class="merged" id="all.4Lnj75.spl2" title="原文 : These are all the types and fields that are used in the Coherence CRD.">これらはすべて、Coherence CRDで使用されるタイプおよびフィールドです。</span> </p>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.2bjrw3" title="原文 : This document was generated from comments in the Go structs in the pkg/api/ directory.">このドキュメントは、pkg/api/ディレクトリのGo構造体のコメントから生成されました。</span></p>
</div>

<h3 id="_table_of_contents"><span class="merged" id="all.2jNfVE"  title="原文:: Table of Contents">目次</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3oe0H1" title="原文 : Action"><router-link @click.native="this.scrollFix('#_action')" to="#_action">Action</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.rfigY" title="原文 : ActionJob"><router-link @click.native="this.scrollFix('#_actionjob')" to="#_actionjob">ActionJob</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3jxFk9" title="原文 : CoherenceResourceSpec"><router-link @click.native="this.scrollFix('#_coherenceresourcespec')" to="#_coherenceresourcespec">CoherenceResourceSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3X1loC" title="原文 : ApplicationSpec"><router-link @click.native="this.scrollFix('#_applicationspec')" to="#_applicationspec">ApplicationSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1D93Rb" title="原文 : CloudNativeBuildPackSpec"><router-link @click.native="this.scrollFix('#_cloudnativebuildpackspec')" to="#_cloudnativebuildpackspec">CloudNativeBuildPackSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2NPXXs" title="原文 : CoherenceSpec"><router-link @click.native="this.scrollFix('#_coherencespec')" to="#_coherencespec">CoherenceSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.12oZQ5" title="原文 : CoherenceTracingSpec"><router-link @click.native="this.scrollFix('#_coherencetracingspec')" to="#_coherencetracingspec">CoherenceTracingSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.34Ou2J" title="原文 : CoherenceWKASpec"><router-link @click.native="this.scrollFix('#_coherencewkaspec')" to="#_coherencewkaspec">CoherenceWKASpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.29Ou5L" title="原文 : ConfigMapVolumeSpec"><router-link @click.native="this.scrollFix('#_configmapvolumespec')" to="#_configmapvolumespec">ConfigMapVolumeSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.y2gKO" title="原文 : ImageSpec"><router-link @click.native="this.scrollFix('#_imagespec')" to="#_imagespec">ImageSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2d6psR" title="原文 : JVMSpec"><router-link @click.native="this.scrollFix('#_jvmspec')" to="#_jvmspec">JVMSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3Ollma" title="原文 : JvmDebugSpec"><router-link @click.native="this.scrollFix('#_jvmdebugspec')" to="#_jvmdebugspec">JvmDebugSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2ZuOpU" title="原文 : JvmGarbageCollectorSpec"><router-link @click.native="this.scrollFix('#_jvmgarbagecollectorspec')" to="#_jvmgarbagecollectorspec">JvmGarbageCollectorSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.42SDVr" title="原文 : JvmMemorySpec"><router-link @click.native="this.scrollFix('#_jvmmemoryspec')" to="#_jvmmemoryspec">JvmMemorySpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.38EILg" title="原文 : JvmOutOfMemorySpec"><router-link @click.native="this.scrollFix('#_jvmoutofmemoryspec')" to="#_jvmoutofmemoryspec">JvmOutOfMemorySpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1qA5oR" title="原文 : LocalObjectReference"><router-link @click.native="this.scrollFix('#_localobjectreference')" to="#_localobjectreference">LocalObjectReference</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1oAwLD" title="原文 : NamedPortSpec"><router-link @click.native="this.scrollFix('#_namedportspec')" to="#_namedportspec">NamedPortSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.F4pVq" title="原文 : NetworkSpec"><router-link @click.native="this.scrollFix('#_networkspec')" to="#_networkspec">NetworkSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1E4S89" title="原文 : PersistenceSpec"><router-link @click.native="this.scrollFix('#_persistencespec')" to="#_persistencespec">PersistenceSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1LhJzE" title="原文 : PersistentStorageSpec"><router-link @click.native="this.scrollFix('#_persistentstoragespec')" to="#_persistentstoragespec">PersistentStorageSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.RXntg" title="原文 : PersistentVolumeClaim"><router-link @click.native="this.scrollFix('#_persistentvolumeclaim')" to="#_persistentvolumeclaim">PersistentVolumeClaim</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2SB7qo" title="原文 : PersistentVolumeClaimObjectMeta"><router-link @click.native="this.scrollFix('#_persistentvolumeclaimobjectmeta')" to="#_persistentvolumeclaimobjectmeta">PersistentVolumeClaimObjectMeta</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4WF2Cu" title="原文 : PodDNSConfig"><router-link @click.native="this.scrollFix('#_poddnsconfig')" to="#_poddnsconfig">PodDNSConfig</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.41U981" title="原文 : PortSpecWithSSL"><router-link @click.native="this.scrollFix('#_portspecwithssl')" to="#_portspecwithssl">PortSpecWithSSL</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1TGNXU" title="原文 : Probe"><router-link @click.native="this.scrollFix('#_probe')" to="#_probe">Probe</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.24ZleF" title="原文 : ProbeHandler"><router-link @click.native="this.scrollFix('#_probehandler')" to="#_probehandler">ProbeHandler</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3y6oZS" title="原文 : ReadinessProbeSpec"><router-link @click.native="this.scrollFix('#_readinessprobespec')" to="#_readinessprobespec">ReadinessProbeSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3OohcD" title="原文 : Resource"><router-link @click.native="this.scrollFix('#_resource')" to="#_resource">Resource</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1hiLqH" title="原文 : Resources"><router-link @click.native="this.scrollFix('#_resources')" to="#_resources">Resources</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2bbJ8l" title="原文 : SSLSpec"><router-link @click.native="this.scrollFix('#_sslspec')" to="#_sslspec">SSLSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4W8JIt" title="原文 : ScalingSpec"><router-link @click.native="this.scrollFix('#_scalingspec')" to="#_scalingspec">ScalingSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.40s136" title="原文 : SecretVolumeSpec"><router-link @click.native="this.scrollFix('#_secretvolumespec')" to="#_secretvolumespec">SecretVolumeSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4DoNAQ" title="原文 : ServiceMonitorSpec"><router-link @click.native="this.scrollFix('#_servicemonitorspec')" to="#_servicemonitorspec">ServiceMonitorSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3Qhqq0" title="原文 : ServiceSpec"><router-link @click.native="this.scrollFix('#_servicespec')" to="#_servicespec">ServiceSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.Y2HDy" title="原文 : StartQuorum"><router-link @click.native="this.scrollFix('#_startquorum')" to="#_startquorum">StartQuorum</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3osdRG" title="原文 : StartQuorumStatus"><router-link @click.native="this.scrollFix('#_startquorumstatus')" to="#_startquorumstatus">StartQuorumStatus</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.xaUhl" title="原文 : Coherence"><router-link @click.native="this.scrollFix('#_coherence')" to="#_coherence">Coherence</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1Y7RXS" title="原文 : CoherenceList"><router-link @click.native="this.scrollFix('#_coherencelist')" to="#_coherencelist">CoherenceList</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3DKKfv" title="原文 : CoherenceResourceStatus"><router-link @click.native="this.scrollFix('#_coherenceresourcestatus')" to="#_coherenceresourcestatus">CoherenceResourceStatus</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.46hi7n" title="原文 : CoherenceStatefulSetResourceSpec"><router-link @click.native="this.scrollFix('#_coherencestatefulsetresourcespec')" to="#_coherencestatefulsetresourcespec">CoherenceStatefulSetResourceSpec</router-link></span></p>

</li>
</ul>
</div>

<h3 id="_action"><span class="merged" id="all.1B5r9w"  title="原文:: Action">Action</span></h3>
<div class="section">
<p><span class="merged" id="all.2v7Ym1" title="原文 : Action is an action to execute when the StatefulSet becomes ready.">Actionは、StatefulSetの準備ができたときに実行するアクションです。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz"  title="原文: name"><code>name</code></span></td>
<td class=""><span class="merged" id="all.3uonh3"  title="原文:: Action name">アクション名</span></td>
<td class=""><span class="merged" id="all.W18FC"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ctnoL"  title="原文: probe"><code>probe</code></span></td>
<td class=""><span class="merged" id="all.2MBgrD" title="原文 : This is the spec of some sort of probe to fire when the Coherence resource becomes ready">これは、Coherenceリソースの準備が整ったときに起動するプローブの仕様です</span></td>
<td class=""><span class="merged" id="all.3aDXpb"  title="原文: *Probe"><code>*<router-link @click.native="this.scrollFix('#_probe')" to="#_probe">Probe</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.1"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1VGtL1"  title="原文: job"><code>job</code></span></td>
<td class=""><span class="merged" id="all.1Tdmq9" title="原文 : or this is the spec of a Job to create when the Coherence resource becomes ready">または、Coherenceリソースの準備が整ったときに作成するジョブの仕様です</span></td>
<td class=""><span class="merged" id="all.42ewF9"  title="原文: *ActionJob"><code>*<router-link @click.native="this.scrollFix('#_actionjob')" to="#_actionjob">ActionJob</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.2"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_actionjob"><span class="merged" id="all.3PHu50"  title="原文: ActionJob">ActionJob</span></h3>
<div class="section">

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.1"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.1"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.1"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.1"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.26upHQ"  title="原文: spec"><code>spec</code></span></td>
<td class=""><span class="merged" id="all.2eNMlM.spl1" title="原文 : Spec will be used to create a Job, the name is the Coherence deployment name + &quot;-&quot; + the action name The Job will be fire and forget, we do not monitor it in the Operator.">仕様はジョブの作成に使用されます。名前はCoherenceデプロイメント名+ "-" +アクション名。ジョブは起動され、忘れるため、オペレータでは監視しません。</span> <span class="merged" id="all.2eNMlM.spl2" title="原文 : We set its owner to be the Coherence resource, so it gets deleted when the Coherence resource is deleted.">オラクルは、その所有者をCoherenceリソースに設定するため、Coherenceリソースが削除されると削除されます。</span> </td>
<td class=""><span class="merged" id="all.3SJPJz"  title="原文: batchv1.JobSpec"><code><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#jobspec-v1-batch" id="" target="_blank" >batchv1.JobSpec</a></code></span></td>
<td class=""><span class="merged" id="all.4eNR3V"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Dbs6Z"  title="原文: labels"><code>labels</code></span></td>
<td class=""><span class="merged" id="all.SFO34" title="原文 : Labels are the extra labels to add to the Job.">ラベルは、ジョブに追加する追加ラベルです。</span></td>
<td class=""><span class="merged" id="all.6My6t"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.3"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uY9DD"  title="原文: annotations"><code>annotations</code></span></td>
<td class=""><span class="merged" id="all.3N8wt6" title="原文 : Annotations to add to the Job.">ジョブに追加する注釈。</span></td>
<td class=""><span class="merged" id="all.6My6t.1"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.4"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.1" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_coherenceresourcespec"><span class="merged" id="all.pHcwt"  title="原文: CoherenceResourceSpec">CoherenceResourceSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.237THp.spl1" title="原文 : CoherenceResourceSpec defines the specification of a Coherence resource.">CoherenceResourceSpecは、Coherenceリソースの仕様を定義します。</span> <span class="merged" id="all.237THp.spl2" title="原文 : A Coherence resource is typically one or more Pods that perform the same functionality, for example storage members.">Coherenceリソースは、通常、同じ機能を実行する1つ以上のポッド(ストレージ・メンバーなど)です。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.2"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.2"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.2"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.2"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2vvqy1"  title="原文: image"><code>image</code></span></td>
<td class=""><span class="merged" id="all.4dlwuw.spl1"  title="原文: The name of the image.">イメージの名前。</span> <span class="merged" id="all.4dlwuw.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/containers/images">詳細情報: <a href="https://kubernetes.io/docs/concepts/containers/images" id="" target="_blank" >https://kubernetes.io/docs/concepts/containers/images</a></span> </td>
<td class=""><span class="merged" id="all.2JXhOu"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.5"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yaYc3"  title="原文: imagePullPolicy"><code>imagePullPolicy</code></span></td>
<td class=""><span class="merged" id="all.267YMn.spl1" title="原文 : Image pull policy.">イメージ・プル・ポリシー。</span> <span class="merged" id="all.267YMn.spl2" title="原文 : One of Always, Never, IfNotPresent.">Always、Never、IfNotPresentのいずれか。</span> <span class="merged" id="all.267YMn.spl3" title="原文 : More info: https://kubernetes.io/docs/concepts/containers/images#updating-images">詳細情報: <a href="https://kubernetes.io/docs/concepts/containers/images#updating-images" id="" target="_blank" >https://kubernetes.io/docs/concepts/containers/images#updating-images</a></span> </td>
<td class=""><span class="merged" id="all.4MPcsS"  title="原文: *https://pkg.go.dev/k8s.io/api/core/v1#PullPolicy"><code>*<a href="https://pkg.go.dev/k8s.io/api/core/v1#PullPolicy" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#PullPolicy</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.6"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1SIm27"  title="原文: imagePullSecrets"><code>imagePullSecrets</code></span></td>
<td class=""><span class="merged" id="all.tBKQ8.spl1" title="原文 : ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec.">ImagePullSecretsは、このPodSpecで使用されるイメージのプルに使用する、同じネームスペース内のシークレットへの参照のオプション・リストです。</span> <span class="merged" id="all.tBKQ8.spl2" title="原文 : If specified, these secrets will be passed to individual puller implementations for them to use.">指定した場合、これらのシークレットは、使用する個別のプルア実装に渡されます。</span> <span class="merged" id="all.tBKQ8.spl3" title="原文 : For example, in the case of docker, only DockerConfig type secrets are honored.">たとえば、dockerの場合、DockerConfig型のシークレットのみが適用されます。</span> <span class="merged" id="all.tBKQ8.spl4" title="原文 : More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod">詳細情報: <a href="https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod" id="" target="_blank" >https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod</a></span> </td>
<td class=""><span class="merged" id="all.1CKz3v"  title="原文: []LocalObjectReference"><code>[]<router-link @click.native="this.scrollFix('#_localobjectreference')" to="#_localobjectreference">LocalObjectReference</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.7"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Ea5yX"  title="原文: replicas"><code>replicas</code></span></td>
<td class=""><span class="merged" id="all.3iXS82.spl1" title="原文 : The desired number of cluster members of this deployment.">このデプロイメントに必要な数のクラスタ・メンバー。</span> <span class="merged" id="all.3iXS82.spl2" title="原文 : This is a pointer to distinguish between explicit zero and not specified.">これは、明示的なゼロと未指定を区別するポインタです。</span> <span class="merged" id="all.3iXS82.spl3" title="原文 : If not specified a default value of 3 will be used.">指定しない場合、デフォルト値3が使用されます。</span> <span class="merged" id="all.3iXS82.spl4" title="原文 : This field cannot be negative.">このフィールドはマイナスにできません。</span> </td>
<td class=""><span class="merged" id="all.C5sgP"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.8"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.GeJKv"  title="原文: role"><code>role</code></span></td>
<td class=""><span class="merged" id="all.4bdm8F.spl1" title="原文 : The name of the role that this deployment represents in a Coherence cluster.">このデプロイメントがCoherenceクラスタ内で表すロールの名前。</span> <span class="merged" id="all.4bdm8F.spl2" title="原文 : This value will be used to set the Coherence role property for all members of this role">この値は、このロールのすべてのメンバーに対してCoherenceロール・プロパティを設定するために使用されます</span> </td>
<td class=""><span class="merged" id="all.W18FC.1"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.9"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1C42zK"  title="原文: appLabel"><code>appLabel</code></span></td>
<td class=""><span class="merged" id="all.LfFTM.spl1" title="原文 : An optional app label to apply to resources created for this deployment.">このデプロイメント用に作成されたリソースに適用するオプションのアプリケーション・ラベル。</span> <span class="merged" id="all.LfFTM.spl2" title="原文 : This is useful for example to apply an app label for use by Istio.">これは、たとえば、Istioで使用するアプリケーション・ラベルを適用する場合に便利です。</span> <span class="merged" id="all.LfFTM.spl3" title="原文 : This field follows standard Kubernetes label syntax.">このフィールドは、標準のKubernetesラベル構文に従います。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.1"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.10"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.42TwHc"  title="原文: versionLabel"><code>versionLabel</code></span></td>
<td class=""><span class="merged" id="all.20mHBN.spl1" title="原文 : An optional version label to apply to resources created for this deployment.">このデプロイメント用に作成されたリソースに適用するオプションのバージョン・ラベル。</span> <span class="merged" id="all.20mHBN.spl2" title="原文 : This is useful for example to apply a version label for use by Istio.">これは、たとえばIstioで使用するバージョン・ラベルを適用する場合に便利です。</span> <span class="merged" id="all.20mHBN.spl3" title="原文 : This field follows standard Kubernetes label syntax.">このフィールドは、標準のKubernetesラベル構文に従います。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.2"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.11"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.XXOb3"  title="原文: coherence"><code>coherence</code></span></td>
<td class=""><span class="merged" id="all.2Jjl89" title="原文 : The optional settings specific to Coherence functionality.">Coherence機能固有のオプション設定。</span></td>
<td class=""><span class="merged" id="all.12SMNT"  title="原文: *CoherenceSpec"><code>*<router-link @click.native="this.scrollFix('#_coherencespec')" to="#_coherencespec">CoherenceSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.12"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2zvFMg"  title="原文: application"><code>application</code></span></td>
<td class=""><span class="merged" id="all.v9mpl" title="原文 : The optional application specific settings.">オプションのアプリケーション固有の設定。</span></td>
<td class=""><span class="merged" id="all.vGxac"  title="原文: *ApplicationSpec"><code>*<router-link @click.native="this.scrollFix('#_applicationspec')" to="#_applicationspec">ApplicationSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.13"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2YGztV"  title="原文: jvm"><code>jvm</code></span></td>
<td class=""><span class="merged" id="all.2AdbYG" title="原文 : The JVM specific options">JVM固有のオプション</span></td>
<td class=""><span class="merged" id="all.1AdUN1"  title="原文: *JVMSpec"><code>*<router-link @click.native="this.scrollFix('#_jvmspec')" to="#_jvmspec">JVMSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.14"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XgXVu"  title="原文: ports"><code>ports</code></span></td>
<td class=""><span class="merged" id="all.4BbCFZ" title="原文 : Ports specifies additional port mappings for the Pod and additional Services for those ports.">ポートでは、ポッドの追加ポート・マッピングと、それらのポートの追加サービスを指定します。</span></td>
<td class=""><span class="merged" id="all.3RPuHO"  title="原文: []NamedPortSpec"><code>[]<router-link @click.native="this.scrollFix('#_namedportspec')" to="#_namedportspec">NamedPortSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.15"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1HZjTT"  title="原文: startQuorum"><code>startQuorum</code></span></td>
<td class=""><span class="merged" id="all.oQHND" title="原文 : StartQuorum controls the start-up order of this Coherence resource in relation to other Coherence resources.">StartQuorumは、他のCoherenceリソースに関連して、このCoherenceリソースの起動順序を制御します。</span></td>
<td class=""><span class="merged" id="all.vw7Bg"  title="原文: []StartQuorum"><code>[]<router-link @click.native="this.scrollFix('#_startquorum')" to="#_startquorum">StartQuorum</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.16"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1P26zU"  title="原文: env"><code>env</code></span></td>
<td class=""><span class="merged" id="all.3UEI8.spl1" title="原文 : Env is additional environment variable mappings that will be passed to the Coherence container in the Pod.">環境変数は、Pod内のCoherenceコンテナに渡される追加の環境変数マッピングです。</span> <span class="merged" id="all.3UEI8.spl2" title="原文 : To specify extra variables add them as name value pairs the same as they would be added to a Pod containers spec.">追加変数を指定するには、Podコンテナ仕様に追加する場合と同じ名前と値のペアを追加します。</span> </td>
<td class=""><span class="merged" id="all.3p5BNC"  title="原文: []corev1.EnvVar"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#envvar-v1-core" id="" target="_blank" >corev1.EnvVar</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.17"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Dbs6Z.1"  title="原文: labels"><code>labels</code></span></td>
<td class=""><span class="merged" id="all.25o9x6.spl1" title="原文 : The extra labels to add to the all the Pods in this deployment.">このデプロイメント内のすべてのポッドに追加する追加のラベル。</span> <span class="merged" id="all.25o9x6.spl2" title="原文 : Labels here will add to or override those defined for the cluster.">ここでラベルは、クラスタに定義されたラベルに追加またはオーバーライドします。</span> <span class="merged" id="all.25o9x6.spl3" title="原文 : More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/">詳細情報: <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/" id="" target="_blank" >https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/</a></span> </td>
<td class=""><span class="merged" id="all.6My6t.2"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.18"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uY9DD.1"  title="原文: annotations"><code>annotations</code></span></td>
<td class=""><span class="merged" id="all.1GMHTE.spl1" title="原文 : Annotations are free-form yaml that will be added to the Coherence cluster member Pods as annotations.">注釈は、Coherenceクラスタ・メンバーPodに注釈として追加される自由形式のyamlです。</span> <span class="merged" id="all.1GMHTE.spl2" title="原文 : Any annotations should be placed BELOW this &quot;annotations:&quot; key, for example: annotations: foo.io/one: &quot;value1&quot; + foo.io/two: &quot;value2&quot; + see: Kubernetes Annotations">次のように、すべての注釈をこの"annotations:"キーの下に置く必要があります:<br><br>annotations:<br>foo.io/one: "value1" +<br>foo.io/two: "value2" +<br><br>参照: <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/" id="" target="_blank" >Kubernetes注釈</a></span> </td>
<td class=""><span class="merged" id="all.6My6t.3"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.19"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.39gtZv"  title="原文: initContainers"><code>initContainers</code></span></td>
<td class=""><span class="merged" id="all.1919Iy.spl1" title="原文 : List of additional initialization containers to add to the deployment’s Pod.">デプロイメントのポッドに追加する追加の初期化コンテナのリスト。</span> <span class="merged" id="all.1919Iy.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/">詳細情報: <a href="https://kubernetes.io/docs/concepts/workloads/pods/init-containers/" id="" target="_blank" >https://kubernetes.io/docs/concepts/workloads/pods/init-containers/</a></span> </td>
<td class=""><span class="merged" id="all.3GeqhD"  title="原文: []corev1.Container"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#container-v1-core" id="" target="_blank" >corev1.Container</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.20"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3kcK47"  title="原文: sideCars"><code>sideCars</code></span></td>
<td class=""><span class="merged" id="all.4c1uYW" title="原文 : List of additional side-car containers to add to the deployment’s Pod.">デプロイメントのポッドに追加する追加サイドカー・コンテナのリスト。</span></td>
<td class=""><span class="merged" id="all.3GeqhD.1"  title="原文: []corev1.Container"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#container-v1-core" id="" target="_blank" >corev1.Container</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.21"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Q1gqJ"  title="原文: configMapVolumes"><code>configMapVolumes</code></span></td>
<td class=""><span class="merged" id="all.3fPqjF.spl1" title="原文 : A list of ConfigMaps to add as volumes.">ボリュームとして追加するConfigMapsのリスト。</span> <span class="merged" id="all.3fPqjF.spl2" title="原文 : Each entry in the list will be added as a ConfigMap Volume to the deployment’s Pods and as a VolumeMount to all the containers and init-containers in the Pod. see: Add ConfigMap Volumes">リスト内の各エントリは、ConfigMapボリュームとしてデプロイメント・ポッドに追加され、ポッド内のすべてのコンテナおよびinitコンテナにVolumeMountとして追加されます。<br>参照: <router-link @click.native="this.scrollFix('#misc_pod_settings/050_configmap_volumes.adoc')" to="#misc_pod_settings/050_configmap_volumes.adoc">ConfigMapボリュームの追加</router-link></span> </td>
<td class=""><span class="merged" id="all.1Ir1sQ"  title="原文: []ConfigMapVolumeSpec"><code>[]<router-link @click.native="this.scrollFix('#_configmapvolumespec')" to="#_configmapvolumespec">ConfigMapVolumeSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.22"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1BjbC2"  title="原文: secretVolumes"><code>secretVolumes</code></span></td>
<td class=""><span class="merged" id="all.1cg8Wx.spl1" title="原文 : A list of Secrets to add as volumes.">ボリュームとして追加するシークレットのリスト。</span> <span class="merged" id="all.1cg8Wx.spl2" title="原文 : Each entry in the list will be added as a Secret Volume to the deployment’s Pods and as a VolumeMount to all the containers and init-containers in the Pod. see: Add Secret Volumes">リスト内の各エントリは、デプロイメント・ポッドにシークレット・ボリュームとして追加され、ポッド内のすべてのコンテナおよびinit-containersにVolumeMountとして追加されます。<br>参照: <router-link @click.native="this.scrollFix('#misc_pod_settings/020_secret_volumes.adoc')" to="#misc_pod_settings/020_secret_volumes.adoc">シークレット・ボリュームの追加</router-link></span> </td>
<td class=""><span class="merged" id="all.3Av1V3"  title="原文: []SecretVolumeSpec"><code>[]<router-link @click.native="this.scrollFix('#_secretvolumespec')" to="#_secretvolumespec">SecretVolumeSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.23"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.331nmb"  title="原文: volumes"><code>volumes</code></span></td>
<td class=""><span class="merged" id="all.1g7cOn.spl1" title="原文 : Volumes defines extra volume mappings that will be added to the Coherence Pod.">ボリュームは、Coherenceポッドに追加される追加のボリューム・マッピングを定義します。</span> <span class="merged" id="all.1g7cOn.spl2" title="原文 :  The content of this yaml should match the normal k8s volumes section of a Pod definition + as described in https://kubernetes.io/docs/concepts/storage/volumes/ "><br>このyamlの内容は、ポッド定義の通常のk8sボリューム・セクションと一致する必要があります+<br><a href="https://kubernetes.io/docs/concepts/storage/volumes/" id="" target="_blank" >https://kubernetes.io/docs/concepts/storage/volumes/</a>で説明<br></span> </td>
<td class=""><span class="merged" id="all.aDgC7"  title="原文: []corev1.Volume"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#volume-v1-core" id="" target="_blank" >corev1.Volume</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.24"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4G7Ikf"  title="原文: volumeMounts"><code>volumeMounts</code></span></td>
<td class=""><span class="merged" id="all.bbAYO" title="原文 : VolumeMounts defines extra volume mounts to map to the additional volumes or PVCs declared above in store.volumes and store.volumeClaimTemplates ">VolumeMountsは、上で宣言された追加のボリュームまたはPVCにマップする追加のボリューム・マウントを定義<br>store.volumesおよびstore.volumeClaimTemplates<br></span></td>
<td class=""><span class="merged" id="all.3ZCUsp"  title="原文: []corev1.VolumeMount"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#volumemount-v1-core" id="" target="_blank" >corev1.VolumeMount</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.25"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3NiYQp"  title="原文: healthPort"><code>healthPort</code></span></td>
<td class=""><span class="merged" id="all.3X51gy" title="原文 : The port that the health check endpoint will bind to.">ヘルス・チェック・エンドポイントがバインドされるポート。</span></td>
<td class=""><span class="merged" id="all.C5sgP.1"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.26"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1iiaw7"  title="原文: readinessProbe"><code>readinessProbe</code></span></td>
<td class=""><span class="merged" id="all.2tch6x" title="原文 : The readiness probe config to be used for the Pods in this deployment. ref: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/">このデプロイメントのポッドに使用するレディネス・プローブ構成。参照: <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/" id="" target="_blank" >https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/</a></span></td>
<td class=""><span class="merged" id="all.28MWCq"  title="原文: *ReadinessProbeSpec"><code>*<router-link @click.native="this.scrollFix('#_readinessprobespec')" to="#_readinessprobespec">ReadinessProbeSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.27"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4AQYCS"  title="原文: livenessProbe"><code>livenessProbe</code></span></td>
<td class=""><span class="merged" id="all.3MbtBY" title="原文 : The liveness probe config to be used for the Pods in this deployment. ref: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/">このデプロイメントのポッドに使用するlivenessプローブ構成。参照: <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/" id="" target="_blank" >https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/</a></span></td>
<td class=""><span class="merged" id="all.28MWCq.1"  title="原文: *ReadinessProbeSpec"><code>*<router-link @click.native="this.scrollFix('#_readinessprobespec')" to="#_readinessprobespec">ReadinessProbeSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.28"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.15flDg"  title="原文: startupProbe"><code>startupProbe</code></span></td>
<td class=""><span class="merged" id="all.4EMcSB.spl1" title="原文 : The startup probe config to be used for the Pods in this deployment.">このデプロイメントのポッドに使用される起動プローブ構成。</span> <span class="merged" id="all.4EMcSB.spl2" title="原文 : See: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/">参照: <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/" id="" target="_blank" >https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/</a></span> </td>
<td class=""><span class="merged" id="all.28MWCq.2"  title="原文: *ReadinessProbeSpec"><code>*<router-link @click.native="this.scrollFix('#_readinessprobespec')" to="#_readinessprobespec">ReadinessProbeSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.29"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.MDm5o"  title="原文: readinessGates"><code>readinessGates</code></span></td>
<td class=""><span class="merged" id="all.3U54Qe.spl1" title="原文 : ReadinessGates defines a list of additional conditions that the kubelet evaluates for Pod readiness.">ReadinessGatesは、kubeletがポッド・レディネスに対して評価する追加の条件のリストを定義します。</span> <span class="merged" id="all.3U54Qe.spl2" title="原文 : See: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-readiness-gate">参照: <a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-readiness-gate" id="" target="_blank" >https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-readiness-gate</a></span> </td>
<td class=""><span class="merged" id="all.3iM67N"  title="原文: []corev1.PodReadinessGate"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#podreadinessgate-v1-core" id="" target="_blank" >corev1.PodReadinessGate</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.30"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4MlaEo"  title="原文: resources"><code>resources</code></span></td>
<td class=""><span class="merged" id="all.2uQwxP" title="原文 : Resources is the optional resource requests and limits for the containers ref: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ + The Coherence operator does not apply any default resources.">リソースはコンテナのオプションのリソース・リクエストおよび制限です<br>参照: <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/" id="" target="_blank" >https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/</a> +<br>Coherenceオペレータでは、デフォルト・リソースは適用されません。</span></td>
<td class=""><span class="merged" id="all.4IyPwY"  title="原文: *corev1.ResourceRequirements"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#resourcerequirements-v1-core" id="" target="_blank" >corev1.ResourceRequirements</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.31"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3DZ0qh"  title="原文: affinity"><code>affinity</code></span></td>
<td class=""><span class="merged" id="all.3obIbW" title="原文 : Affinity controls Pod scheduling preferences. ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity ">アフィニティはスケジューリング設定を制御します。<br>参照: <a href="https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity" id="" target="_blank" >https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity</a><br></span></td>
<td class=""><span class="merged" id="all.HUjxF"  title="原文: *corev1.Affinity"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#affinity-v1-core" id="" target="_blank" >corev1.Affinity</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.32"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3aBnkC"  title="原文: nodeSelector"><code>nodeSelector</code></span></td>
<td class=""><span class="merged" id="all.eAYYa" title="原文 : NodeSelector is the Node labels for pod assignment ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector ">NodeSelectorは、ポッド割当てのノード・ラベルです<br> 参照: <a href="https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector" id="" target="_blank" >https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector</a><br></span></td>
<td class=""><span class="merged" id="all.6My6t.4"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.33"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3i1GxM"  title="原文: tolerations"><code>tolerations</code></span></td>
<td class=""><span class="merged" id="all.2NZwKf.spl1" title="原文 : Tolerations for nodes that have taints on them.">taintsを持つノードのtolerations。</span> <span class="merged" id="all.2NZwKf.spl2" title="原文 :  Useful if you want to dedicate nodes to just run the coherence container + For example: tolerations: + - key: &quot;key&quot; + operator: &quot;Equal&quot; + value: &quot;value&quot; + effect: &quot;NoSchedule&quot; + ref: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ "><br>コヒーレンス・コンテナのみを実行するようにノードを専用にする場合に便利です+<br>たとえば:<br>tolerations: +<br>- key: "key" +<br>operator: "Equal" +<br> value: "value" +<br> effect: "NoSchedule" +<br><br> 参照: <a href="https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/" id="" target="_blank" >https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/</a><br></span> </td>
<td class=""><span class="merged" id="all.2NKZGQ"  title="原文: []corev1.Toleration"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#toleration-v1-core" id="" target="_blank" >corev1.Toleration</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.34"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3XP0J8"  title="原文: securityContext"><code>securityContext</code></span></td>
<td class=""><span class="merged" id="all.10wzrW.spl1" title="原文 : SecurityContext is the PodSecurityContext that will be added to all the Pods in this deployment.">SecurityContextは、このデプロイメント内のすべてのポッドに追加されるPodSecurityContextです。</span> <span class="merged" id="all.10wzrW.spl2" title="原文 : See: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">参照: <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/" id="" target="_blank" >https://kubernetes.io/docs/tasks/configure-pod-container/security-context/</a></span> </td>
<td class=""><span class="merged" id="all.XjVWC"  title="原文: *corev1.PodSecurityContext"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#podsecuritycontext-v1-core" id="" target="_blank" >corev1.PodSecurityContext</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.35"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1cQ9rj"  title="原文: containerSecurityContext"><code>containerSecurityContext</code></span></td>
<td class=""><span class="merged" id="all.Mi3y5.spl1" title="原文 : ContainerSecurityContext is the SecurityContext that will be added to the Coherence container in each Pod in this deployment.">ContainerSecurityContextは、このデプロイメントの各ポッドのCoherenceコンテナに追加されるSecurityContextです。</span> <span class="merged" id="all.Mi3y5.spl2" title="原文 : See: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">参照: <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/" id="" target="_blank" >https://kubernetes.io/docs/tasks/configure-pod-container/security-context/</a></span> </td>
<td class=""><span class="merged" id="all.vLcA6"  title="原文: *corev1.SecurityContext"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#securitycontext-v1-core" id="" target="_blank" >corev1.SecurityContext</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.36"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.wjpuU"  title="原文: shareProcessNamespace"><code>shareProcessNamespace</code></span></td>
<td class=""><span class="merged" id="all.2aVNeC.spl1" title="原文 : Share a single process namespace between all the containers in a pod.">ポッド内のすべてのコンテナ間で1つのプロセス・ネームスペースを共有します。</span> <span class="merged" id="all.2aVNeC.spl2" title="原文 : When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1.">これを設定すると、コンテナは、同じポッド内の他のコンテナからプロセスを表示およびシグナルすることができ、各コンテナの最初のプロセスにPID 1が割り当てられません。</span> <span class="merged" id="all.2aVNeC.spl3" title="原文 : HostPID and ShareProcessNamespace cannot both be set.">HostPIDとShareProcessNamespaceの両方を設定することはできません。</span> <span class="merged" id="all.2aVNeC.spl4" title="原文 : Optional: Default to false.">オプション: デフォルトはfalseです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.37"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.MBbPG"  title="原文: hostIPC"><code>hostIPC</code></span></td>
<td class=""><span class="merged" id="all.2q45Bb.spl1" title="原文 : Use the host’s ipc namespace.">ホストのipcネームスペースを使用します。</span> <span class="merged" id="all.2q45Bb.spl2" title="原文 : Optional: Default to false.">オプション: デフォルトはfalseです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.1"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.38"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4YPMmb"  title="原文: network"><code>network</code></span></td>
<td class=""><span class="merged" id="all.HShWd" title="原文 : Configure various networks and DNS settings for Pods in this role.">このロールでポッドの様々なネットワークおよびDNS設定を構成します。</span></td>
<td class=""><span class="merged" id="all.8OkLp"  title="原文: *NetworkSpec"><code>*<router-link @click.native="this.scrollFix('#_networkspec')" to="#_networkspec">NetworkSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.39"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3IviYI"  title="原文: coherenceUtils"><code>coherenceUtils</code></span></td>
<td class=""><span class="merged" id="all.1tUv5S" title="原文 : The configuration for the Coherence operator image name">Coherenceオペレータ・イメージ名の構成</span></td>
<td class=""><span class="merged" id="all.BZSIN"  title="原文: *ImageSpec"><code>*<router-link @click.native="this.scrollFix('#_imagespec')" to="#_imagespec">ImageSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.40"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Ywsyf"  title="原文: serviceAccountName"><code>serviceAccountName</code></span></td>
<td class=""><span class="merged" id="all.2LWnmc" title="原文 : The name to use for the service account to use when RBAC is enabled The role bindings must already have been created as this chart does not create them it just sets the serviceAccountName value in the Pod spec.">RBACが有効な場合に使用するサービス・アカウントに使用する名前。このチャートではポッド仕様でserviceAccountName値を設定するのみでなく、ロール・バインディングがすでに作成されている必要があります。</span></td>
<td class=""><span class="merged" id="all.W18FC.2"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.41"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.103ZMv"  title="原文: automountServiceAccountToken"><code>automountServiceAccountToken</code></span></td>
<td class=""><span class="merged" id="all.37wJ8D" title="原文 : Whether to auto-mount the Kubernetes API credentials for a service account">サービス・アカウントのKubernetes API資格証明を自動マウントするかどうか</span></td>
<td class=""><span class="merged" id="all.q9cn0.2"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.42"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3oi8J3"  title="原文: operatorRequestTimeout"><code>operatorRequestTimeout</code></span></td>
<td class=""><span class="merged" id="all.2UQ4am.spl1" title="原文 : The timeout to apply to REST requests made back to the Operator from Coherence Pods.">Coherenceポッドからオペレータに戻されたRESTリクエストに適用するタイムアウト。</span> <span class="merged" id="all.2UQ4am.spl2" title="原文 : These requests are typically to obtain site and rack information for the Pod.">これらのリクエストは通常、ポッドのサイトおよびラック情報を取得することです。</span> </td>
<td class=""><span class="merged" id="all.C5sgP.2"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.43"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WDGWU"  title="原文: activeDeadlineSeconds"><code>activeDeadlineSeconds</code></span></td>
<td class=""><span class="merged" id="all.eHdMo.spl1" title="原文 : ActiveDeadlineSeconds is the optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers.">ActiveDeadlineSecondsは、システムがアクティブに失敗とマークし、関連付けられたコンテナを強制終了しようとする前に、StartTimeに関連するノードでポッドがアクティブになる可能性があるオプションの期間(秒)です。</span> <span class="merged" id="all.eHdMo.spl2"  title="原文: Value must be a positive integer.">値は、正の整数である必要があります。</span> </td>
<td class=""><span class="merged" id="all.2SZCBx"  title="原文: *int64"><code>*int64</code></span></td>
<td class=""><span class="merged" id="all.njUKu.44"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1NAysW"  title="原文: enableServiceLinks"><code>enableServiceLinks</code></span></td>
<td class=""><span class="merged" id="all.1LVghx.spl1" title="原文 : EnableServiceLinks indicates whether information about services should be injected into pod’s environment variables, matching the syntax of Docker links.">EnableServiceLinksは、サービスに関する情報がDockerリンクの構文と一致して、ポッドの環境変数にインジェクトされるかどうかを示します。</span> <span class="merged" id="all.1LVghx.spl2" title="原文 : Optional: Defaults to true.">オプション: デフォルトはtrueです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.3"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.45"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2HVmEd"  title="原文: preemptionPolicy"><code>preemptionPolicy</code></span></td>
<td class=""><span class="merged" id="all.3rj5qx.spl1" title="原文 : PreemptionPolicy is the Policy for preempting pods with lower priority.">PreemptionPolicyは、優先度の低いポッドを優先するポリシーです。</span> <span class="merged" id="all.3rj5qx.spl2" title="原文 : One of Never, PreemptLowerPriority.">なし、PreemptLowerPriority。</span> <span class="merged" id="all.3rj5qx.spl3" title="原文 : Defaults to PreemptLowerPriority if unset.">設定を解除する場合、デフォルトはPreemptLowerPriorityです。</span> </td>
<td class=""><span class="merged" id="all.41srYn"  title="原文: *https://pkg.go.dev/k8s.io/api/core/v1#PreemptionPolicy"><code>*<a href="https://pkg.go.dev/k8s.io/api/core/v1#PreemptionPolicy" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#PreemptionPolicy</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.46"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ySiat"  title="原文: priorityClassName"><code>priorityClassName</code></span></td>
<td class=""><span class="merged" id="all.3sPPLE.spl1" title="原文 : PriorityClassName, if specified, indicates the pod’s priority. &quot;system-node-critical&quot; and &quot;system-cluster-critical&quot; are two special keywords which indicate the highest priorities with the former being the highest priority.">PriorityClassNameは、指定された場合、ポッドの優先度を示します。"system-node-critical"および"system-cluster-critical"は、前者の優先度が最も高い優先度を示す2つの特殊なキーワードです。</span> <span class="merged" id="all.3sPPLE.spl2" title="原文 : Any other name must be defined by creating a PriorityClass object with that name.">他の名前を定義するには、その名前のPriorityClassオブジェクトを作成する必要があります。</span> <span class="merged" id="all.3sPPLE.spl3" title="原文 : If not specified, the pod priority will be default or zero if there is no default.">指定しない場合、ポッド優先度はデフォルトまたはゼロになります(デフォルトがない場合)。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.3"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.47"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.aB5EC"  title="原文: restartPolicy"><code>restartPolicy</code></span></td>
<td class=""><span class="merged" id="all.lPip9.spl1" title="原文 : Restart policy for all containers within the pod.">ポッド内のすべてのコンテナのポリシーを再起動します。</span> <span class="merged" id="all.lPip9.spl2" title="原文 : One of Always, OnFailure, Never.">常にOnFailure、Neverのいずれか。</span> <span class="merged" id="all.lPip9.spl3" title="原文 : Default to Always.">デフォルトは常時です。</span> <span class="merged" id="all.lPip9.spl4" title="原文 : More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy">詳細情報: <a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy" id="" target="_blank" >https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy</a></span> </td>
<td class=""><span class="merged" id="all.3VOhdb"  title="原文: *https://pkg.go.dev/k8s.io/api/core/v1#RestartPolicy"><code>*<a href="https://pkg.go.dev/k8s.io/api/core/v1#RestartPolicy" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#RestartPolicy</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.48"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.6pugB"  title="原文: runtimeClassName"><code>runtimeClassName</code></span></td>
<td class=""><span class="merged" id="all.4gLwi6.spl1" title="原文 : RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.">RuntimeClassNameは、このポッドの実行に使用されるnode.k8s.ioグループ内のRuntimeClassオブジェクトを参照します。</span> <span class="merged" id="all.4gLwi6.spl2" title="原文 : If no RuntimeClass resource matches the named class, the pod will not be run.">指定されたクラスに一致するRuntimeClassリソースがない場合、ポッドは実行されません。</span> <span class="merged" id="all.4gLwi6.spl3" title="原文 : If unset or empty, the &quot;legacy&quot; RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler.">設定解除または空の場合、「レガシー」RuntimeClassが使用されます。これは、デフォルトのランタイム・ハンドラを使用する空の定義を持つ暗黙的なクラスです。</span> <span class="merged" id="all.4gLwi6.spl4" title="原文 : More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class">詳細情報: <a href="https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class" id="" target="_blank" >https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class</a></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.4"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.49"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3KxQJJ"  title="原文: schedulerName"><code>schedulerName</code></span></td>
<td class=""><span class="merged" id="all.23Phva.spl1" title="原文 : If specified, the pod will be dispatched by specified scheduler.">指定した場合、ポッドは指定したスケジューラによってディスパッチされます。</span> <span class="merged" id="all.23Phva.spl2" title="原文 : If not specified, the pod will be dispatched by default scheduler.">指定しない場合、ポッドはデフォルト・スケジューラによってディスパッチされます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.5"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.50"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.LkA4y"  title="原文: topologySpreadConstraints"><code>topologySpreadConstraints</code></span></td>
<td class=""><span class="merged" id="all.2NiPPM.spl1" title="原文 : TopologySpreadConstraints describes how a group of pods ought to spread across topology domains.">TopologySpreadConstraintsは、ポッドのグループがトポロジ・ドメインにどのように分散すべきかを示します。</span> <span class="merged" id="all.2NiPPM.spl2" title="原文 : Scheduler will schedule pods in a way which abides by the constraints.">スケジューラは、制約に従う方法でポッドをスケジュールします。</span> <span class="merged" id="all.2NiPPM.spl3" title="原文 : All topologySpreadConstraints are ANDed.">すべてのtopologySpreadConstraintsはANDedです。</span> </td>
<td class=""><span class="merged" id="all.1Q6f1a"  title="原文: []corev1.TopologySpreadConstraint"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#topologyspreadconstraint-v1-core" id="" target="_blank" >corev1.TopologySpreadConstraint</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.51"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10B6kj"  title="原文: rackLabel"><code>rackLabel</code></span></td>
<td class=""><span class="merged" id="all.2BJZXR.spl1" title="原文 : RackLabel is an optional Node label to use for the value of the Coherence member’s rack name.">RackLabelは、Coherenceメンバーのラック名の値に使用するオプションのノード・ラベルです。</span> <span class="merged" id="all.2BJZXR.spl2" title="原文 : The default labels to use are determined by the Operator.">使用するデフォルトのラベルは、オペレータによって決まります。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.6"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.52"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3COROV"  title="原文: siteLabel"><code>siteLabel</code></span></td>
<td class=""><span class="merged" id="all.3d5llS" title="原文 : SiteLabel is an optional Node label to use for the value of the Coherence member’s site name The default labels to use are determined by the Operator.">SiteLabelは、Coherenceメンバーのサイト名の値に使用するオプションのノード・ラベルです。使用するデフォルト・ラベルは、オペレータによって決まります。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.7"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.53"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.2" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_applicationspec"><span class="merged" id="all.naep6"  title="原文: ApplicationSpec">ApplicationSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.4ejKFc" title="原文 : ApplicationSpec is the specification of the application deployed into the Coherence.">ApplicationSpecは、Coherenceにデプロイされたアプリケーションの指定です。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.3"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.3"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.3"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.3"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2SYAnU"  title="原文: type"><code>type</code></span></td>
<td class=""><span class="merged" id="all.1MMbh7.spl1" title="原文 : The application type to execute.">実行するアプリケーション・タイプ。</span> <span class="merged" id="all.1MMbh7.spl2" title="原文 : This field would be set if using the Coherence Graal image and running a none-Java application.">このフィールドは、Coherence Graalイメージを使用してJava以外のアプリケーションを実行する場合に設定されます。</span> <span class="merged" id="all.1MMbh7.spl3" title="原文 : For example if the application was a Node application this field would be set to &quot;node&quot;.">たとえば、アプリケーションがノード・アプリケーションの場合、このフィールドはノードに設定されます。</span> <span class="merged" id="all.1MMbh7.spl4" title="原文 : The default is to run a plain Java application.">デフォルトでは、プレーンJavaアプリケーションが実行されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.8"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.54"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.14UbjG"  title="原文: main"><code>main</code></span></td>
<td class=""><span class="merged" id="all.20PCYe.spl1" title="原文 : Class is the Coherence container main class.">クラスはCoherenceコンテナのメイン・クラスです。</span> <span class="merged" id="all.20PCYe.spl2" title="原文 : The default value is com.tangosol.net.DefaultCacheServer.">デフォルト値はcom.tangosol.net.DefaultCacheServerです。</span> <span class="merged" id="all.20PCYe.spl3" title="原文 : If the application type is non-Java this would be the name of the corresponding language specific runnable, for example if the application type is &quot;node&quot; the main may be a Javascript file.">アプリケーション・タイプがJava以外の場合、対応する言語固有の実行可能の名前になります。たとえば、アプリケーション・タイプが「node」の場合、メインはJavascriptファイルになります。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.9"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.55"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3s3zbi"  title="原文: args"><code>args</code></span></td>
<td class=""><span class="merged" id="all.Pd4D2" title="原文 : Args is the optional arguments to pass to the main class.">Argsは、メイン・クラスに渡すオプションの引数です。</span></td>
<td class=""><span class="merged" id="all.rXwhA"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.56"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4NOXDu"  title="原文: workingDir"><code>workingDir</code></span></td>
<td class=""><span class="merged" id="all.HSD4N.spl1" title="原文 : The application folder in the custom artifacts Docker image containing application artifacts.">アプリケーション・アーティファクトを含むカスタム・アーティファクトDockerイメージ内のアプリケーション・フォルダ。</span> <span class="merged" id="all.HSD4N.spl2" title="原文 : This will effectively become the working directory of the Coherence container.">これにより、実質的にCoherenceコンテナの作業ディレクトリになります。</span> <span class="merged" id="all.HSD4N.spl3" title="原文 : If not set the application directory default value is &quot;/app&quot;.">アプリケーション・ディレクトリ値が設定されていない場合、デフォルト値は/app"です。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.10"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.57"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3NzqlH"  title="原文: cloudNativeBuildPack"><code>cloudNativeBuildPack</code></span></td>
<td class=""><span class="merged" id="all.3cLHIh.spl1" title="原文 : Optional settings that may be configured if using a Cloud Native Buildpack Image.">クラウド・ネイティブのBuildpackイメージを使用している場合に構成できるオプションの設定。</span> <span class="merged" id="all.3cLHIh.spl2" title="原文 : For example an image build with the Spring Boot Maven/Gradle plugin.">たとえば、Spring Boot Maven/Gradleプラグインを使用したイメージ・ビルドです。</span> <span class="merged" id="all.3cLHIh.spl3" title="原文 : See: https://github.com/paketo-buildpacks/spring-boot and https://buildpacks.io/">参照: <a href="https://github.com/paketo-buildpacks/spring-boot" id="" target="_blank" >https://github.com/paketo-buildpacks/spring-boot</a>および<a href="https://buildpacks.io/" id="" target="_blank" >https://buildpacks.io/</a></span> </td>
<td class=""><span class="merged" id="all.1I4APv"  title="原文: *CloudNativeBuildPackSpec"><code>*<router-link @click.native="this.scrollFix('#_cloudnativebuildpackspec')" to="#_cloudnativebuildpackspec">CloudNativeBuildPackSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.58"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4eerEa"  title="原文: springBootFatJar"><code>springBootFatJar</code></span></td>
<td class=""><span class="merged" id="all.3aHxZq.spl1" title="原文 : SpringBootFatJar is the full path name to the Spring Boot fat jar if the application image has been built by just adding a Spring Boot fat jar to the image.">SpringBootFatJarは、Spring Bootのfat jarをイメージに追加するだけでアプリケーション・イメージがビルドされている場合のSpring Bootのfat jarへのフルパス名です。</span> <span class="merged" id="all.3aHxZq.spl2" title="原文 : If this field is set then the application will be run by executing this jar.">このフィールドが設定されている場合は、このjarを実行してアプリケーションが実行されます。</span> <span class="merged" id="all.3aHxZq.spl3" title="原文 : For example, if this field is &quot;/app/libs/foo.jar&quot; the command line will be &quot;java -jar app/libs/foo.jar&quot;">たとえば、このフィールドが"/app/libs/foo.jar""の場合、コマンドラインは"java -jar app/libs/foo.jar"になります</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.11"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.59"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.3" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_cloudnativebuildpackspec"><span class="merged" id="all.1bls7w"  title="原文: CloudNativeBuildPackSpec">CloudNativeBuildPackSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.1UM8FI.spl1" title="原文 : CloudNativeBuildPackSpec is the configuration when using a Cloud Native Buildpack Image.">CloudNativeBuildPackSpecは、クラウド・ネイティブ・ビルド・パック・イメージを使用する場合の構成です。</span> <span class="merged" id="all.1UM8FI.spl2" title="原文 : For example an image build with the Spring Boot Maven/Gradle plugin.">たとえば、Spring Boot Maven/Gradleプラグインを使用したイメージ・ビルドです。</span> <span class="merged" id="all.1UM8FI.spl3" title="原文 : See: https://github.com/paketo-buildpacks/spring-boot and https://buildpacks.io/">参照: <a href="https://github.com/paketo-buildpacks/spring-boot" id="" target="_blank" >https://github.com/paketo-buildpacks/spring-boot</a>および<a href="https://buildpacks.io/" id="" target="_blank" >https://buildpacks.io/</a></span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.4"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.4"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.4"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.4"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.Q9pX.spl1" title="原文 : Enable or disable buildpack detection.">buildpackの検出を有効または無効にします。</span> <span class="merged" id="all.Q9pX.spl2" title="原文 : The operator will automatically detect Cloud Native Buildpack images but if this auto-detection fails to work correctly for a specific image then this field can be set to true to signify that the image is a buildpack image or false to signify that it is not a buildpack image.">オペレータは、Cloud Native Buildpackイメージを自動的に検出しますが、この自動検出が特定のイメージに対して正しく機能しない場合、イメージがbuildpackイメージであるかfalseであることを示すためにこのフィールドをtrueに設定して、イメージがbuildpackイメージでないことを示します。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.4"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.60"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WTzgP"  title="原文: launcher"><code>launcher</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2JXhOu.12"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.61"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.4" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_coherencespec"><span class="merged" id="all.2Y2Y7i"  title="原文: CoherenceSpec">CoherenceSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.1sdvBC" title="原文 : CoherenceSpec is the section of the CRD configures settings specific to Coherence. see: Coherence Configuration">CoherenceSpecは、CRDがCoherence固有の設定を構成するセクションです。<br>参照: <router-link @click.native="this.scrollFix('#coherence_settings/010_overview.adoc')" to="#coherence_settings/010_overview.adoc">Coherence構成</router-link></span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.5"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.5"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.5"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.5"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3rE981"  title="原文: cacheConfig"><code>cacheConfig</code></span></td>
<td class=""><span class="merged" id="all.43UHWt" title="原文 : CacheConfig is the name of the cache configuration file to use see: Configure Cache Config File">CacheConfigは、使用するキャッシュ構成ファイルの名前です<br>参照: <router-link @click.native="this.scrollFix('#coherence_settings/030_cache_config.adoc')" to="#coherence_settings/030_cache_config.adoc">キャッシュ構成ファイルの構成</router-link></span></td>
<td class=""><span class="merged" id="all.2JXhOu.13"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.62"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3P8H6e"  title="原文: overrideConfig"><code>overrideConfig</code></span></td>
<td class=""><span class="merged" id="all.uyNQU" title="原文 : OverrideConfig is name of the Coherence operational configuration override file, the default is tangosol-coherence-override.xml see: Configure Operational Config File">OverrideConfigは、Coherence操作構成オーバーライド・ファイルの名前です。デフォルトはtangosol-coherence-override.xmlです<br>参照: <router-link @click.native="this.scrollFix('#coherence_settings/040_override_file.adoc')" to="#coherence_settings/040_override_file.adoc">操作構成ファイルの構成</router-link></span></td>
<td class=""><span class="merged" id="all.2JXhOu.14"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.63"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CRqYJ"  title="原文: storageEnabled"><code>storageEnabled</code></span></td>
<td class=""><span class="merged" id="all.3nDRhc.spl1" title="原文 : A boolean flag indicating whether members of this deployment are storage enabled.">このデプロイメントのメンバーがストレージに対応しているかどうかを示すブール・フラグ。</span> <span class="merged" id="all.3nDRhc.spl2" title="原文 : This value will set the corresponding coherence.distributed.localstorage System property.">この値は、対応するcoherence.distributed.localstorageシステム・プロパティを設定します。</span> <span class="merged" id="all.3nDRhc.spl3" title="原文 : If not specified the default value is true.">指定しない場合、デフォルト値はtrueです。</span> <span class="merged" id="all.3nDRhc.spl4" title="原文 : This flag is also used to configure the ScalingPolicy value if a value is not specified.">このフラグは、値が指定されていない場合にScalingPolicy値を構成するためにも使用されます。</span> <span class="merged" id="all.3nDRhc.spl5" title="原文 : If the StorageEnabled field is not specified or is true the scaling will be safe, if StorageEnabled is set to false scaling will be parallel. see: Configure Storage Enabled">StorageEnabledフィールドが指定されていないかtrueの場合、StorageEnabledがfalseのスケーリングに設定されている場合、スケーリングはパラレルになります。<br>参照: <router-link @click.native="this.scrollFix('#coherence_settings/050_storage_enabled.adoc')" to="#coherence_settings/050_storage_enabled.adoc">ストレージの構成有効</router-link></span> </td>
<td class=""><span class="merged" id="all.q9cn0.5"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.64"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.qBRd"  title="原文: persistence"><code>persistence</code></span></td>
<td class=""><span class="merged" id="all.4dEFWz.spl1" title="原文 : Persistence values configure the on-disc data persistence settings.">永続性値は、on-discデータ永続性設定を構成します。</span> <span class="merged" id="all.4dEFWz.spl2" title="原文 : The bool Enabled enables or disabled on disc persistence of data. see: Configure Persistence">bool Enabledは、データのディスク永続性に対して有効または無効にします。<br>参照: <router-link @click.native="this.scrollFix('#coherence_settings/080_persistence.adoc')" to="#coherence_settings/080_persistence.adoc">永続性の構成</router-link></span> </td>
<td class=""><span class="merged" id="all.2z4pO5"  title="原文: *PersistenceSpec"><code>*<router-link @click.native="this.scrollFix('#_persistencespec')" to="#_persistencespec">PersistenceSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.65"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.40dLS2"  title="原文: logLevel"><code>logLevel</code></span></td>
<td class=""><span class="merged" id="all.3IXIHj" title="原文 : The Coherence log level, default being 5 (info level). see: Configure Coherence log level">Coherenceログ・レベル。デフォルトは5 (情報レベル)です。<br>参照: <router-link @click.native="this.scrollFix('#coherence_settings/060_log_level.adoc')" to="#coherence_settings/060_log_level.adoc">Coherenceログ・レベルの構成</router-link></span></td>
<td class=""><span class="merged" id="all.C5sgP.3"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.66"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1VBdjz"  title="原文: management"><code>management</code></span></td>
<td class=""><span class="merged" id="all.2l56S0" title="原文 : Management configures Coherence management over REST Note: Coherence management over REST will is available in Coherence version &gt;= 12.2.1.4. see: Management &amp; Diagnostics">管理により、RESTノートを介したCoherence管理が構成されます: RESTでのCoherence管理は、Coherenceバージョン>= 12.2.1.4で使用できます。<br>参照: <router-link @click.native="this.scrollFix('#management_and_diagnostics/010_overview.adoc')" to="#management_and_diagnostics/010_overview.adoc">管理&amp;診断</router-link></span></td>
<td class=""><span class="merged" id="all.AQZbL"  title="原文: *PortSpecWithSSL"><code>*<router-link @click.native="this.scrollFix('#_portspecwithssl')" to="#_portspecwithssl">PortSpecWithSSL</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.67"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4KU3uR"  title="原文: metrics"><code>metrics</code></span></td>
<td class=""><span class="merged" id="all.4d3Q7g" title="原文 : Metrics configures Coherence metrics publishing Note: Coherence metrics publishing will is available in Coherence version &gt;= 12.2.1.4. see: Metrics">メトリクスによってCoherenceメトリクス公開ノートが構成されます: Coherenceメトリクスの公開は、Coherenceバージョン>= 12.2.1.4で使用できます。<br>参照: <router-link @click.native="this.scrollFix('#metrics/010_overview.adoc')" to="#metrics/010_overview.adoc">メトリクス</router-link></span></td>
<td class=""><span class="merged" id="all.AQZbL.1"  title="原文: *PortSpecWithSSL"><code>*<router-link @click.native="this.scrollFix('#_portspecwithssl')" to="#_portspecwithssl">PortSpecWithSSL</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.68"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Zsfo8"  title="原文: tracing"><code>tracing</code></span></td>
<td class=""><span class="merged" id="all.2jLpSN" title="原文 : Tracing is used to configure Coherence distributed tracing functionality.">トレースは、Coherence分散トレース機能を構成するために使用されます。</span></td>
<td class=""><span class="merged" id="all.4A3j4V"  title="原文: *CoherenceTracingSpec"><code>*<router-link @click.native="this.scrollFix('#_coherencetracingspec')" to="#_coherencetracingspec">CoherenceTracingSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.69"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4IvmVv"  title="原文: allowEndangeredForStatusHA"><code>allowEndangeredForStatusHA</code></span></td>
<td class=""><span class="merged" id="all.3CPk4x.spl1" title="原文 : AllowEndangeredForStatusHA is a list of Coherence partitioned cache service names that are allowed to be in an endangered state when testing for StatusHA.">AllowEndangeredForStatusHAは、StatusHAのテスト時に危険にさらされる状態にできるCoherenceパーティション・キャッシュ・サービス名のリストです。</span> <span class="merged" id="all.3CPk4x.spl2" title="原文 : Instances where a StatusHA check is performed include the readiness probe and when scaling a deployment.">StatusHAチェックが実行されるインスタンスには、レディネス・プローブとデプロイメントのスケーリング時が含まれます。</span> <span class="merged" id="all.3CPk4x.spl3" title="原文 : This field would not typically be used except in cases where a cache service is configured with a backup count greater than zero but it does not matter if caches in those services loose data due to member departure.">キャッシュ・サービスがゼロより大きいバックアップ数で構成されている場合を除き、このフィールドは通常使用されませんが、メンバーの離脱が原因で、これらのサービスのキャッシュのデータが失われるかどうかは関係ありません。</span> <span class="merged" id="all.3CPk4x.spl4" title="原文 : Normally, such cache services would have a backup count of zero, which would automatically excluded them from the StatusHA check.">通常、このようなキャッシュ・サービスのバックアップ数はゼロになり、StatusHAチェックから自動的に除外されます。</span> </td>
<td class=""><span class="merged" id="all.rXwhA.1"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.70"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3T4f2k"  title="原文: excludeFromWKA"><code>excludeFromWKA</code></span></td>
<td class=""><span class="merged" id="all.cgqYC" title="原文 : Exclude members of this deployment from being part of the cluster’s WKA list. see: Well Known Addressing">このデプロイメントのメンバーをクラスタWKAリストの一部から除外します。<br>参照: <router-link @click.native="this.scrollFix('#coherence_settings/070_wka.adoc')" to="#coherence_settings/070_wka.adoc">よく知られたアドレス指定</router-link></span></td>
<td class=""><span class="merged" id="all.q9cn0.6"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.71"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WKgbM"  title="原文: wka"><code>wka</code></span></td>
<td class=""><span class="merged" id="all.vgvLE.spl1" title="原文 : Specify an existing Coherence deployment to be used for WKA.">WKAに使用する既存のCoherenceデプロイメントを指定します。</span> <span class="merged" id="all.vgvLE.spl2" title="原文 : If an existing deployment is to be used for WKA the ExcludeFromWKA is implicitly set to true. see: Well Known Addressing">既存のデプロイメントをWKAに使用する場合、ExcludeFromWKAは暗黙的にtrueに設定されます。<br>参照: <router-link @click.native="this.scrollFix('#coherence_settings/070_wka.adoc')" to="#coherence_settings/070_wka.adoc">よく知られたアドレス指定</router-link></span> </td>
<td class=""><span class="merged" id="all.2O1tGw"  title="原文: *CoherenceWKASpec"><code>*<router-link @click.native="this.scrollFix('#_coherencewkaspec')" to="#_coherencewkaspec">CoherenceWKASpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.72"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4054yt"  title="原文: skipVersionCheck"><code>skipVersionCheck</code></span></td>
<td class=""><span class="merged" id="all.1HI3bm.spl1" title="原文 : Certain features rely on a version check prior to starting the server, e.g. metrics requires &gt;= 12.2.1.4.">特定の機能は、サーバーを起動する前にバージョン・チェックに依存しています。たとえば、メトリクスには、12.2.1.4以上が必要です。</span> <span class="merged" id="all.1HI3bm.spl2" title="原文 : The version check relies on the ability of the start script to find coherence.jar but if due to how the image has been built this check is failing then setting this flag to true will skip version checking and assume that the latest coherence.jar is being used.">バージョン・チェックは、起動スクリプトのcoherence.jarの検索機能に依存しますが、イメージがどのようにビルドされているかによってこのチェックが失敗した場合、このフラグをtrueに設定すると、バージョン・チェックがスキップされ、最新のcoherence.jarが使用されていると想定されます。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.7"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.73"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hW34l"  title="原文: enableIpMonitor"><code>enableIpMonitor</code></span></td>
<td class=""><span class="merged" id="all.1uoXWI.spl1" title="原文 : Enables the Coherence IP Monitor feature.">Coherence IPモニター機能を有効にします。</span> <span class="merged" id="all.1uoXWI.spl2" title="原文 : The Operator disables the IP Monitor by default.">オペレータはデフォルトでIPモニターを無効にします。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.8"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.74"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1FuM33"  title="原文: localPort"><code>localPort</code></span></td>
<td class=""><span class="merged" id="all.1zGH9t.spl1" title="原文 : LocalPort sets the Coherence unicast port.">LocalPortは、Coherenceユニキャスト・ポートを設定します。</span> <span class="merged" id="all.1zGH9t.spl2"  title="原文: When manually configuring unicast ports, a single port is specified and the second port is automatically selected.">ユニキャスト・ポートを手動で構成する場合は、単一のポートが指定され、2番目のポートが自動的に選択されます。</span> <span class="merged" id="all.1zGH9t.spl3"  title="原文: If either of the ports are not available, then the default behavior is to select the next available port.">いずれかのポートが使用できない場合、デフォルトの動作では、使用可能な次のポートを選択します。</span> <span class="merged" id="all.1zGH9t.spl4" title="原文 : For example, if port 9000 is configured for the first port (port1) and it is not available, then the next available port is automatically selected.">たとえば、ポート9000が最初のポート(port1)に対して構成されていて、使用できない場合、次に使用可能なポートが自動的に選択されます。</span> <span class="merged" id="all.1zGH9t.spl5" title="原文 : The second port (port2) is automatically opened and defaults to the next available port after port1 (port1 + 1 if available).">2番目のポート(port2)は自動的に開き、port1の後に使用可能な次のポート(使用可能な場合、port1 + 1)にデフォルト設定されます。</span> </td>
<td class=""><span class="merged" id="all.C5sgP.4"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.75"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3KvlGY"  title="原文: localPortAdjust"><code>localPortAdjust</code></span></td>
<td class=""><span class="merged" id="all.hfEzI.spl1" title="原文 : LocalPortAdjust sets the Coherence unicast port adjust value.">LocalPortAdjustは、Coherenceユニキャスト・ポートの調整値を設定します。</span> <span class="merged" id="all.hfEzI.spl2" title="原文 : To specify a range of unicast ports from which ports are selected, include a port value that represents the upper limit of the port range.">ポートを選択するユニキャスト・ポートの範囲を指定するには、ポート範囲の上限を表すポート値を含めます。</span> </td>
<td class=""><span class="merged" id="all.2KtHC0"  title="原文: *https://pkg.go.dev/k8s.io/apimachinery/pkg/util/intstr#IntOrString"><code>*<a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/util/intstr#IntOrString" id="" target="_blank" >https://pkg.go.dev/k8s.io/apimachinery/pkg/util/intstr#IntOrString</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.76"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.5" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_coherencetracingspec"><span class="merged" id="all.3meSOF"  title="原文: CoherenceTracingSpec">CoherenceTracingSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.1DLXIa" title="原文 : CoherenceTracingSpec configures Coherence tracing.">CoherenceTracingSpecは、Coherenceトレースを構成します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.6"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.6"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.6"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.6"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1RsXFS"  title="原文: ratio"><code>ratio</code></span></td>
<td class=""><span class="merged" id="all.2shXUo.spl1" title="原文 : Ratio is the tracing sampling-ratio, which controls the likelihood of a tracing span being collected.">比率は、トレース・スパンが収集される可能性を制御するトレース・サンプリング率です。</span> <span class="merged" id="all.2shXUo.spl2" title="原文 : For instance, a value of 1.0 will result in all tracing spans being collected, while a value of 0.1 will result in roughly 1 out of every 10 tracing spans being collected.">たとえば、1.0の値を指定するとすべてのトレース・スパンが収集され、0.1の値を指定すると10個のトレース・スパンが収集されるたびにほぼ1個になります。</span> <span class="merged" id="all.2shXUo.spl3" title="原文 :  A value of 0 indicates that tracing spans should only be collected if they are already in the context of another tracing span."><br><br>値0は、トレース・スパンがすでに別のトレース・スパンのコンテキスト内にある場合にのみ収集されることを示します。</span> <span class="merged" id="all.2shXUo.spl4" title="原文 : With such a configuration, Coherence will not initiate tracing on its own, and it is up to the application to start an outer tracing span, from which Coherence will then collect inner tracing spans.">このような構成では、Coherenceは単独でトレースを開始せず、アプリケーションによって外部トレース・スパンを開始し、そこからCoherenceが内部トレース・スパンを収集します。</span> <span class="merged" id="all.2shXUo.spl5" title="原文 :  A value of -1 disables tracing completely."><br><br>値 -1は、トレースを完全に無効にします。</span> <span class="merged" id="all.2shXUo.spl6" title="原文 :  The Coherence default is -1 if not overridden."><br> <br> オーバーライドされない場合、Coherenceのデフォルトは-1です。</span> <span class="merged" id="all.2shXUo.spl7" title="原文 : For values other than -1, numbers between 0 and 1 are acceptable.">-1以外の値の場合、0から1までの数字を使用できます。</span> <span class="merged" id="all.2shXUo.spl8" title="原文 :  NOTE: This field is a k8s resource.Quantity value as CRDs do not support decimal numbers."><br><br> ノート: このフィールドはk8sリソースです。CRDとしての数量値は10進数をサポートしていません。</span> <span class="merged" id="all.2shXUo.spl9" title="原文 : See https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity for the different formats of number that may be entered.">入力できる数値の書式については、<a href="https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity" id="" target="_blank" >https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity</a>を参照してください。</span> </td>
<td class=""><span class="merged" id="all.2y07uS"  title="原文: *resource.Quantity"><code>*resource.Quantity</code></span></td>
<td class=""><span class="merged" id="all.njUKu.77"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.6" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_coherencewkaspec"><span class="merged" id="all.q4NOY"  title="原文: CoherenceWKASpec">CoherenceWKASpec</span></h3>
<div class="section">
<p><span class="merged" id="all.4FnjzL" title="原文 : CoherenceWKASpec configures Coherence well-known-addressing to use an existing Coherence deployment for WKA.">CoherenceWKASpecは、WKAの既存のCoherenceデプロイメントを使用するようにCoherenceの既知のアドレス指定を構成します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.7"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.7"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.7"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.7"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.37VxbY"  title="原文: deployment"><code>deployment</code></span></td>
<td class=""><span class="merged" id="all.42nFrj" title="原文 : The name of the existing Coherence deployment to use for WKA.">WKAに使用する既存のCoherenceデプロイメントの名前。</span></td>
<td class=""><span class="merged" id="all.W18FC.3"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.1"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fCyV9"  title="原文: namespace"><code>namespace</code></span></td>
<td class=""><span class="merged" id="all.2nilNh" title="原文 : The optional namespace of the existing Coherence deployment to use for WKA if different from this deployment’s namespace.">このデプロイメントのネームスペースと異なる場合、WKAに使用する既存のCoherenceデプロイメントのオプションのネームスペース。</span></td>
<td class=""><span class="merged" id="all.W18FC.4"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.78"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Nbiju"  title="原文: addresses"><code>addresses</code></span></td>
<td class=""><span class="merged" id="all.3ewynt.spl1" title="原文 : A list of addresses to be used for WKA.">WKAに使用するアドレスのリスト。</span> <span class="merged" id="all.3ewynt.spl2" title="原文 : If this field is set, the WKA property for the Coherence cluster will be set using this value and the other WKA fields will be ignored.">このフィールドを設定すると、CoherenceクラスタのWKAプロパティがこの値を使用して設定され、他のWKAフィールドは無視されます。</span> </td>
<td class=""><span class="merged" id="all.rXwhA.2"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.79"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.7" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_configmapvolumespec"><span class="merged" id="all.3Ta4Lu"  title="原文: ConfigMapVolumeSpec">ConfigMapVolumeSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.3RZ7S2" title="原文 : ConfigMapVolumeSpec represents a ConfigMap that will be added to the deployment’s Pods as an additional Volume and as a VolumeMount in the containers. see: Add ConfigMap Volumes">ConfigMapVolumeSpecは、追加のボリュームとしてデプロイメント・ポッドに追加され、コンテナ内のVolumeMountとして追加されるConfigMapを表します。<br>参照: <router-link @click.native="this.scrollFix('#misc_pod_settings/050_configmap_volumes.adoc')" to="#misc_pod_settings/050_configmap_volumes.adoc">ConfigMapボリュームの追加</router-link></span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.8"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.8"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.8"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.8"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.1"  title="原文: name"><code>name</code></span></td>
<td class=""><span class="merged" id="all.pl6eE.spl1" title="原文 : The name of the ConfigMap to mount.">マウントするConfigMapの名前。</span> <span class="merged" id="all.pl6eE.spl2" title="原文 : This will also be used as the name of the Volume added to the Pod if the VolumeName field is not set.">これは、VolumeNameフィールドが設定されていない場合、ポッドに追加されたボリュームの名前としても使用されます。</span> </td>
<td class=""><span class="merged" id="all.W18FC.5"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.2"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZMeSS"  title="原文: mountPath"><code>mountPath</code></span></td>
<td class=""><span class="merged" id="all.2cupoy.spl1" title="原文 : Path within the container at which the volume should be mounted.">ボリュームをマウントするコンテナ内のパス。</span> <span class="merged" id="all.2cupoy.spl2" title="原文 : Must not contain &apos;:&apos;.">':'を含めることはできません。</span> </td>
<td class=""><span class="merged" id="all.W18FC.6"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.3"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yWp2V"  title="原文: volumeName"><code>volumeName</code></span></td>
<td class=""><span class="merged" id="all.2XBZuL.spl1" title="原文 : The optional name to use for the Volume added to the Pod.">ポッドに追加されたボリュームに使用するオプションの名前。</span> <span class="merged" id="all.2XBZuL.spl2" title="原文 : If not set, the ConfigMap name will be used as the VolumeName.">設定しない場合、ConfigMap名がVolumeNameとして使用されます。</span> </td>
<td class=""><span class="merged" id="all.W18FC.7"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.80"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3wva11"  title="原文: readOnly"><code>readOnly</code></span></td>
<td class=""><span class="merged" id="all.2zWRdn.spl1" title="原文 : Mounted read-only if true, read-write otherwise (false or unspecified).">trueの場合は読取り専用でマウントされ、それ以外の場合は読取り/書込み(falseまたは未指定)されます。</span> <span class="merged" id="all.2zWRdn.spl2"  title="原文:: Defaults to false.">デフォルトはfalseです。</span> </td>
<td class=""><span class="merged" id="all.2Sqi2i"  title="原文: bool"><code>bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.81"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.uxrbO"  title="原文: subPath"><code>subPath</code></span></td>
<td class=""><span class="merged" id="all.18jA47.spl1" title="原文 : Path within the volume from which the container’s volume should be mounted.">コンテナのボリュームをマウントするボリューム内のパス。</span> <span class="merged" id="all.18jA47.spl2" title="原文 : Defaults to &quot;&quot; (volume’s root).">デフォルトは"" (ボリュームのルート)です。</span> </td>
<td class=""><span class="merged" id="all.W18FC.8"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.82"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Ps765"  title="原文: mountPropagation"><code>mountPropagation</code></span></td>
<td class=""><span class="merged" id="all.3fjZ9a.spl1" title="原文 : mountPropagation determines how mounts are propagated from the host to container and the other way around.">mountPropagationは、ホストからコンテナへのマウントの伝播方法と、その逆方向を決定します。</span> <span class="merged" id="all.3fjZ9a.spl2" title="原文 : When not set, MountPropagationNone is used.">設定しない場合、MountPropagationNoneが使用されます。</span> </td>
<td class=""><span class="merged" id="all.1ePFZ9"  title="原文: *https://pkg.go.dev/k8s.io/api/core/v1#MountPropagationMode"><code>*<a href="https://pkg.go.dev/k8s.io/api/core/v1#MountPropagationMode" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#MountPropagationMode</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.83"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XcR2k"  title="原文: subPathExpr"><code>subPathExpr</code></span></td>
<td class=""><span class="merged" id="all.37dv3Z.spl1" title="原文 : Expanded path within the volume from which the container’s volume should be mounted.">コンテナのボリュームをマウントするボリューム内の拡張パス。</span> <span class="merged" id="all.37dv3Z.spl2" title="原文 : Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container’s environment.">SubPathと同様に動作しますが、環境変数参照$(VAR_NAME)はコンテナの環境を使用して展開されます。</span> <span class="merged" id="all.37dv3Z.spl3" title="原文 : Defaults to &quot;&quot; (volume’s root).">デフォルトは"" (ボリュームのルート)です。</span> <span class="merged" id="all.37dv3Z.spl4" title="原文 : SubPathExpr and SubPath are mutually exclusive.">SubPathExprとSubPathは相互に排他的です。</span> </td>
<td class=""><span class="merged" id="all.W18FC.9"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.84"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WuGEZ"  title="原文: items"><code>items</code></span></td>
<td class=""><span class="merged" id="all.3dILuD.spl1" title="原文 : If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value.">指定しない場合、参照されるConfigMapのデータ・フィールドの各キーと値のペアは、名前がキーでコンテンツが値であるファイルとしてボリュームに投影されます。</span> <span class="merged" id="all.3dILuD.spl2" title="原文 : If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present.">指定した場合、リストされたキーは指定されたパスに投影され、リストされていないキーは表示されません。</span> <span class="merged" id="all.3dILuD.spl3" title="原文 : If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional.">ConfigMapに存在しないキーが指定されている場合、ボリュームの設定はオプションとマークされていないかぎりエラーになります。</span> <span class="merged" id="all.3dILuD.spl4" title="原文 : Paths must be relative and may not contain the &apos;..&apos; path or start with &apos;..&apos;.">パスは相対パスで、'..'パスを含めることも、'..'で始めることもできません。</span> </td>
<td class=""><span class="merged" id="all.1g8dx5"  title="原文: []corev1.KeyToPath"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#keytopath-v1-core" id="" target="_blank" >corev1.KeyToPath</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.85"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hViGd"  title="原文: defaultMode"><code>defaultMode</code></span></td>
<td class=""><span class="merged" id="all.2c3pwb.spl1" title="原文 : Optional: mode bits to use on created files by default.">オプション: 作成されたファイルで使用するビットをデフォルトでモードにします。</span> <span class="merged" id="all.2c3pwb.spl2" title="原文 : Must be a value between 0 and 0777.">0から0777の値である必要があります。</span> <span class="merged" id="all.2c3pwb.spl3"  title="原文:: Defaults to 0644.">デフォルトは0644です。</span> <span class="merged" id="all.2c3pwb.spl4" title="原文 : Directories within the path are not affected by this setting.">パス内のディレクトリはこの設定の影響を受けません。</span> <span class="merged" id="all.2c3pwb.spl5" title="原文 : This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.">これは、fsGroupなどのファイル・モードに影響するほかのオプションと競合する場合があり、結果はほかのモード・ビット・セットになる可能性があります。</span> </td>
<td class=""><span class="merged" id="all.C5sgP.5"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.86"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.26yA7g" title="原文 : Specify whether the ConfigMap or its keys must be defined">ConfigMapまたはそのキーを定義する必要があるかどうかを指定</span></td>
<td class=""><span class="merged" id="all.q9cn0.9"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.87"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.8" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_imagespec"><span class="merged" id="all.4WmqPi"  title="原文: ImageSpec">ImageSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.1hwx43" title="原文 : ImageSpec defines the settings for a Docker image">ImageSpecは、Dockerイメージの設定を定義</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.9"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.9"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.9"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.9"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2vvqy1.1"  title="原文: image"><code>image</code></span></td>
<td class=""><span class="merged" id="all.4Fzn0M.spl1" title="原文 : The image name.">イメージ名。</span> <span class="merged" id="all.4Fzn0M.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/containers/images">詳細情報: <a href="https://kubernetes.io/docs/concepts/containers/images" id="" target="_blank" >https://kubernetes.io/docs/concepts/containers/images</a></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.15"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.88"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yaYc3.1"  title="原文: imagePullPolicy"><code>imagePullPolicy</code></span></td>
<td class=""><span class="merged" id="all.267YMn.1.spl1" title="原文 : Image pull policy.">イメージ・プル・ポリシー。</span> <span class="merged" id="all.267YMn.1.spl2" title="原文 : One of Always, Never, IfNotPresent.">Always、Never、IfNotPresentのいずれか。</span> <span class="merged" id="all.267YMn.1.spl3" title="原文 : More info: https://kubernetes.io/docs/concepts/containers/images#updating-images">詳細情報: <a href="https://kubernetes.io/docs/concepts/containers/images#updating-images" id="" target="_blank" >https://kubernetes.io/docs/concepts/containers/images#updating-images</a></span> </td>
<td class=""><span class="merged" id="all.4MPcsS.1"  title="原文: *https://pkg.go.dev/k8s.io/api/core/v1#PullPolicy"><code>*<a href="https://pkg.go.dev/k8s.io/api/core/v1#PullPolicy" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#PullPolicy</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.89"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.9" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_jvmspec"><span class="merged" id="all.1IS9Op" title="原文 : JVMSpec">JVMSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.wnv8X" title="原文 : JVMSpec is the JVM configuration.">JVMSpecはJVM構成です。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.10"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.10"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.10"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.10"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1TsKfV"  title="原文: classpath"><code>classpath</code></span></td>
<td class=""><span class="merged" id="all.1bK9Se" title="原文 : Classpath specifies additional items to add to the classpath of the JVM.">クラスパスでは、JVMのクラスパスに追加する追加アイテムを指定します。</span></td>
<td class=""><span class="merged" id="all.rXwhA.3"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.90"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3s3zbi.1"  title="原文: args"><code>args</code></span></td>
<td class=""><span class="merged" id="all.4DE6EC" title="原文 : Args specifies the options (System properties, -XX: args etc) to pass to the JVM.">Argsはオプションを指定します(システム・プロパティ、 -XX: argsなど) JVMに渡す。</span></td>
<td class=""><span class="merged" id="all.rXwhA.4"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.91"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3DDEId"  title="原文: debug"><code>debug</code></span></td>
<td class=""><span class="merged" id="all.3LJPM9" title="原文 : The settings for enabling debug mode in the JVM.">JVMでデバッグ・モードを有効にするための設定。</span></td>
<td class=""><span class="merged" id="all.3f1Yhp"  title="原文: *JvmDebugSpec"><code>*<router-link @click.native="this.scrollFix('#_jvmdebugspec')" to="#_jvmdebugspec">JvmDebugSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.92"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4bQ389"  title="原文: useContainerLimits"><code>useContainerLimits</code></span></td>
<td class=""><span class="merged" id="all.42wm5G.spl1" title="原文 : If set to true Adds the -XX:+UseContainerSupport JVM option to ensure that the JVM respects any container resource limits.">trueに設定した場合、 -XX:+UseContainerSupport JVMオプションを追加して、JVMがコンテナ・リソース制限を尊重していることを確認します。</span> <span class="merged" id="all.42wm5G.spl2"  title="原文: The default value is true">デフォルト値はtrueです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.10"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.93"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.sQ6yG"  title="原文: gc"><code>gc</code></span></td>
<td class=""><span class="merged" id="all.3ns69n" title="原文 : Set JVM garbage collector options.">JVMガベージ・コレクタ・オプションを設定します。</span></td>
<td class=""><span class="merged" id="all.wyruN"  title="原文: *JvmGarbageCollectorSpec"><code>*<router-link @click.native="this.scrollFix('#_jvmgarbagecollectorspec')" to="#_jvmgarbagecollectorspec">JvmGarbageCollectorSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.94"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.YZ2mr"  title="原文: diagnosticsVolume"><code>diagnosticsVolume</code></span></td>
<td class=""><span class="merged" id="all.4DwcYe" title="原文 : DiagnosticsVolume is the volume to write JVM diagnostic information to, for example heap dumps, JFRs etc.">DiagnosticsVolumeは、ヒープ・ダンプ、JFRなどのJVM診断情報を書き込むボリュームです。</span></td>
<td class=""><span class="merged" id="all.17NnXQ"  title="原文: *https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#volume-v1-core"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#volume-v1-core" id="" target="_blank" >https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#volume-v1-core</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.95"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3vo31V"  title="原文: memory"><code>memory</code></span></td>
<td class=""><span class="merged" id="all.2U53rs" title="原文 : Configure the JVM memory options.">JVMメモリー・オプションを構成します。</span></td>
<td class=""><span class="merged" id="all.3stUfh"  title="原文: *JvmMemorySpec"><code>*<router-link @click.native="this.scrollFix('#_jvmmemoryspec')" to="#_jvmmemoryspec">JvmMemorySpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.96"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.6Gtfh"  title="原文: useJibClasspath"><code>useJibClasspath</code></span></td>
<td class=""><span class="merged" id="all.2LpiUx.spl1" title="原文 : A flag indicating whether to automatically add the default classpath for images created by the JIB tool https://github.com/GoogleContainerTools/jib If true then the /app/lib/* /app/classes and /app/resources entries are added to the JVM classpath.">JIBツール<a href="https://github.com/GoogleContainerTools/jib" id="" target="_blank" >https://github.com/GoogleContainerTools/jib</a>によって作成されたイメージのデフォルト・クラスパスを自動的に追加するかどうかを示すフラグ。trueの場合、/app/lib/* /app/classesおよび/app/resourcesエントリがJVMクラスパスに追加されます。</span> <span class="merged" id="all.2LpiUx.spl2" title="原文 : The default value fif not specified is true.">指定されていないデフォルト値はtrueです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.11"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.97"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.10" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_jvmdebugspec"><span class="merged" id="all.32IEoX"  title="原文: JvmDebugSpec">JvmDebugSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.4MGoV4" title="原文 : JvmDebugSpec the JVM Debug specific configuration.">JVMデバッグ固有の構成をJvmDebugSpecします。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.11"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.11"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.11"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.11"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.1"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.3HNNjr.spl1" title="原文 : Enabled is a flag to enable or disable running the JVM in debug mode.">Enabledは、デバッグ・モードでのJVMの実行を有効または無効にするフラグです。</span> <span class="merged" id="all.3HNNjr.spl2"  title="原文:: Default is disabled.">デフォルトでは無効化されています。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.12"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.98"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Fv48C"  title="原文: suspend"><code>suspend</code></span></td>
<td class=""><span class="merged" id="all.2AlXbN.spl1" title="原文 : A boolean true if the target VM is to be suspended immediately before the main class is loaded; false otherwise.">メイン・クラスがロードされる前にターゲットVMがすぐに中断される場合は、ブールtrue、そうでない場合はfalse。</span> <span class="merged" id="all.2AlXbN.spl2"  title="原文: The default value is false.">デフォルト値はfalseです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.13"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.99"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.V6X3T"  title="原文: attach"><code>attach</code></span></td>
<td class=""><span class="merged" id="all.2NRQKY" title="原文 : Attach specifies the address of the debugger that the JVM should attempt to connect back to instead of listening on a port.">アタッチでは、JVMがポートでリスニングするかわりに接続を試行するデバッガのアドレスを指定します。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.16"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.100"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4"  title="原文: port"><code>port</code></span></td>
<td class=""><span class="merged" id="all.4YjNjK" title="原文 : The port that the debugger will listen on; the default is 5005.">デバッガが待機するポート。デフォルトは5005です。</span></td>
<td class=""><span class="merged" id="all.C5sgP.6"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.101"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.11" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_jvmgarbagecollectorspec"><span class="merged" id="all.pVl3u"  title="原文: JvmGarbageCollectorSpec">JvmGarbageCollectorSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.35YfTC" title="原文 : JvmGarbageCollectorSpec is options for managing the JVM garbage collector.">JvmGarbageCollectorSpecは、JVMガベージ・コレクタを管理するためのオプションです。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.12"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.12"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.12"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.12"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3HXLi1"  title="原文: collector"><code>collector</code></span></td>
<td class=""><span class="merged" id="all.2dvgNy.spl1" title="原文 : The name of the JVM garbage collector to use.">使用するJVMガベージ・コレクタの名前。</span> <span class="merged" id="all.2dvgNy.spl2" title="原文 : G1 - adds the -XX:+UseG1GC option CMS - adds the -XX:+UseConcMarkSweepGC option Parallel - adds the -XX:+UseParallelGC Default - use the JVMs default collector The field value is case insensitive If not set G1 is used.">G1 - -XX:+UseG1GCオプションCMSを追加 - -XX:+UseConcMarkSweepGCオプションParallelを追加 - -XX:+UseParallelGCデフォルトを追加 - JVMのデフォルト・コレクタを使用します。G1が設定されていない場合、フィールド値は大文字と小文字が区別されません。</span> <span class="merged" id="all.2dvgNy.spl3" title="原文 : If set to a value other than those above then the default collector for the JVM will be used.">上記以外の値に設定すると、JVMのデフォルト・コレクタが使用されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.17"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.102"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3s3zbi.2"  title="原文: args"><code>args</code></span></td>
<td class=""><span class="merged" id="all.QA8uj" title="原文 : Args specifies the GC options to pass to the JVM.">Argsは、JVMに渡すGCオプションを指定します。</span></td>
<td class=""><span class="merged" id="all.rXwhA.5"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.103"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4DzDoS"  title="原文: logging"><code>logging</code></span></td>
<td class=""><span class="merged" id="all.2YeKC5" title="原文 : Enable the following GC logging args -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintHeapAtGC -XX:+PrintTenuringDistribution -XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTime Default is true">次のGCロギング引数を有効にします -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintHeapAtGC -XX:+PrintTenuringDistribution -XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTimeデフォルトはtrueです</span></td>
<td class=""><span class="merged" id="all.q9cn0.14"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.104"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.12" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_jvmmemoryspec"><span class="merged" id="all.1lQqvp"  title="原文: JvmMemorySpec">JvmMemorySpec</span></h3>
<div class="section">
<p><span class="merged" id="all.2qP3RI" title="原文 : JvmMemorySpec is options for managing the JVM memory.">JvmMemorySpecは、JVMメモリーを管理するためのオプションです。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.13"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.13"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.13"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.13"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1L90lj"  title="原文: heapSize"><code>heapSize</code></span></td>
<td class=""><span class="merged" id="all.NSmuX.spl1" title="原文 : HeapSize sets both the initial and max heap size values for the JVM.">HeapSizeは、JVMの初期および最大ヒープ・サイズの両方の値を設定します。</span> <span class="merged" id="all.NSmuX.spl2" title="原文 : This will set both the -XX:InitialHeapSize and -XX:MaxHeapSize JVM options to the same value (the equivalent of setting -Xms and -Xmx to the same value).">これにより、 -XX:InitialHeapSizeオプションと -XX:MaxHeapSize JVMオプションの両方が同じ値 (-Xmsと -Xmxを同じ値に設定することと同等)に設定されます。</span> <span class="merged" id="all.NSmuX.spl3" title="原文 :  The format should be the same as that used when specifying these JVM options."><br> <br> この形式は、これらのJVMオプションを指定するときに使用したものと同じである必要があります。</span> <span class="merged" id="all.NSmuX.spl4" title="原文 :  If not set the JVM defaults are used."><br> <br> 設定しない場合、JVMのデフォルトが使用されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.18"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.105"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V8xor"  title="原文: initialHeapSize"><code>initialHeapSize</code></span></td>
<td class=""><span class="merged" id="all.fzr8B.spl1" title="原文 : InitialHeapSize sets the initial heap size value for the JVM.">InitialHeapSizeは、JVMの初期ヒープ・サイズの値を設定します。</span> <span class="merged" id="all.fzr8B.spl2" title="原文 : This will set the -XX:InitialHeapSize JVM option (the equivalent of setting -Xms).">-XX:InitialHeapSize JVMオプション (設定-Xmsと同等)を設定します。</span> <span class="merged" id="all.fzr8B.spl3" title="原文 :  The format should be the same as that used when specifying this JVM options."><br> <br> この形式は、このJVMオプションを指定するときに使用したものと同じである必要があります。</span> <span class="merged" id="all.fzr8B.spl4" title="原文 :  NOTE: If the HeapSize field is set it will override this field."><br> <br> ノート: HeapSizeフィールドが設定されている場合、このフィールドはオーバーライドされます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.19"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.106"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2m6iVB"  title="原文: maxHeapSize"><code>maxHeapSize</code></span></td>
<td class=""><span class="merged" id="all.4BgC1M.spl1" title="原文 : MaxHeapSize sets the maximum heap size value for the JVM.">MaxHeapSizeは、JVMの最大ヒープ・サイズ値を設定します。</span> <span class="merged" id="all.4BgC1M.spl2" title="原文 : This will set the -XX:MaxHeapSize JVM option (the equivalent of setting -Xmx).">-XX:MaxHeapSize JVMオプションを設定します(設定-Xmxと同等)。</span> <span class="merged" id="all.4BgC1M.spl3" title="原文 :  The format should be the same as that used when specifying this JVM options."><br> <br> この形式は、このJVMオプションを指定するときに使用したものと同じである必要があります。</span> <span class="merged" id="all.4BgC1M.spl4" title="原文 :  NOTE: If the HeapSize field is set it will override this field."><br> <br> ノート: HeapSizeフィールドが設定されている場合、このフィールドはオーバーライドされます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.20"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.107"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2MeqPf"  title="原文: maxRAM"><code>maxRAM</code></span></td>
<td class=""><span class="merged" id="all.3OqlOi" title="原文 : Sets the JVM option -XX:MaxRAM=N which sets the maximum amount of memory used by the JVM to n, where n is expressed in terms of megabytes (for example, 100m) or gigabytes (for example 2g).">JVMで使用されるメモリーの最大量を<code>n</code>に設定するJVMオプション<code>-XX:MaxRAM=N</code>を設定します。<code>n</code>はメガバイト (<code>100m</code>など)またはギガバイト(<code>2g</code>など)で表されます。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.21"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.108"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3GDTJ0"  title="原文: percentage"><code>percentage</code></span></td>
<td class=""><span class="merged" id="all.3jIE2a.spl1" title="原文 : Percentage sets the initial and maximum and minimum heap percentage sizes to the same value, This will set the -XX:InitialRAMPercentage -XX:MinRAMPercentage and -XX:MaxRAMPercentage JVM options to the same value.">パーセンテージは、初期および最大ヒープ・パーセンテージのサイズを同じ値に設定します。これにより、 -XX:InitialRAMPercentage -XX:MinRAMPercentageおよび -XX:MaxRAMPercentage JVMオプションが同じ値に設定されます。</span> <span class="merged" id="all.3jIE2a.spl2" title="原文 :  The JVM will ignore this option if any of the HeapSize, InitialHeapSize or MaxHeapSize options have been set."><br> <br> HeapSize、InitialHeapSizeまたはMaxHeapSizeオプションのいずれかが設定されている場合、JVMはこのオプションを無視します。</span> <span class="merged" id="all.3jIE2a.spl3" title="原文 :  Valid values are decimal numbers between 0 and 100."><br><br> 有効な値は、0から100までの10進数です。</span> <span class="merged" id="all.3jIE2a.spl4" title="原文 :  NOTE: This field is a k8s resource.Quantity value as CRDs do not support decimal numbers."><br><br> ノート: このフィールドはk8sリソースです。CRDとしての数量値は10進数をサポートしていません。</span> <span class="merged" id="all.3jIE2a.spl5" title="原文 : See https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity for the different formats of number that may be entered.">入力できる数値の書式については、<a href="https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity" id="" target="_blank" >https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity</a>を参照してください。</span> <span class="merged" id="all.3jIE2a.spl6" title="原文 :  NOTE: This field maps to the -XX:InitialRAMPercentage -XX:MinRAMPercentage and -XX:MaxRAMPercentage JVM options and will be incompatible with some JVMs that do not have this option (e.g. Java 8)."><br> <br> ノート: このフィールドは-XX:InitialRAMPercentage -XX:MinRAMPercentageおよび-XX:MaxRAMPercentage JVMオプションにマップされ、このオプションがない一部のJVMと互換性がありません(例、Java 8)。</span> </td>
<td class=""><span class="merged" id="all.2y07uS.1"  title="原文: *resource.Quantity"><code>*resource.Quantity</code></span></td>
<td class=""><span class="merged" id="all.njUKu.109"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2IT1Dp"  title="原文: initialRAMPercentage"><code>initialRAMPercentage</code></span></td>
<td class=""><span class="merged" id="all.2opQc6.spl1" title="原文 : Set initial heap size as a percentage of total memory.">初期ヒープ・サイズを合計メモリーの割合として設定します。</span> <span class="merged" id="all.2opQc6.spl2" title="原文 :  The JVM will ignore this option if any of the HeapSize, InitialHeapSize or MaxHeapSize options have been set."><br> <br> HeapSize、InitialHeapSizeまたはMaxHeapSizeオプションのいずれかが設定されている場合、JVMはこのオプションを無視します。</span> <span class="merged" id="all.2opQc6.spl3" title="原文 :  Valid values are decimal numbers between 0 and 100."><br><br> 有効な値は、0から100までの10進数です。</span> <span class="merged" id="all.2opQc6.spl4" title="原文 :  NOTE: If the Percentage field is set it will override this field."><br> <br> ノート: 「パーセント」フィールドが設定されている場合、このフィールドは上書きされます。</span> <span class="merged" id="all.2opQc6.spl5" title="原文 :  NOTE: This field is a k8s resource.Quantity value as CRDs do not support decimal numbers."><br><br> ノート: このフィールドはk8sリソースです。CRDとしての数量値は10進数をサポートしていません。</span> <span class="merged" id="all.2opQc6.spl6" title="原文 : See https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity for the different formats of number that may be entered.">入力できる数値の書式については、<a href="https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity" id="" target="_blank" >https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity</a>を参照してください。</span> <span class="merged" id="all.2opQc6.spl7" title="原文 :  NOTE: This field maps to the -XX:InitialRAMPercentage JVM option and will be incompatible with some JVMs that do not have this option (e.g. Java 8)."><br> <br> ノート: このフィールドは- XX:InitialRAMPercentage JVMオプションにマップされ、このオプションがない一部のJVMと互換性がありません (例、Java 8)。</span> </td>
<td class=""><span class="merged" id="all.2y07uS.2"  title="原文: *resource.Quantity"><code>*resource.Quantity</code></span></td>
<td class=""><span class="merged" id="all.njUKu.110"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3lHoLp"  title="原文: maxRAMPercentage"><code>maxRAMPercentage</code></span></td>
<td class=""><span class="merged" id="all.4dTiGq.spl1" title="原文 : Set maximum heap size as a percentage of total memory.">最大ヒープ・サイズを合計メモリーの割合として設定します。</span> <span class="merged" id="all.4dTiGq.spl2" title="原文 :  The JVM will ignore this option if any of the HeapSize, InitialHeapSize or MaxHeapSize options have been set."><br> <br> HeapSize、InitialHeapSizeまたはMaxHeapSizeオプションのいずれかが設定されている場合、JVMはこのオプションを無視します。</span> <span class="merged" id="all.4dTiGq.spl3" title="原文 :  Valid values are decimal numbers between 0 and 100."><br><br> 有効な値は、0から100までの10進数です。</span> <span class="merged" id="all.4dTiGq.spl4" title="原文 :  NOTE: If the Percentage field is set it will override this field."><br> <br> ノート: 「パーセント」フィールドが設定されている場合、このフィールドは上書きされます。</span> <span class="merged" id="all.4dTiGq.spl5" title="原文 :  NOTE: This field is a k8s resource.Quantity value as CRDs do not support decimal numbers."><br><br> ノート: このフィールドはk8sリソースです。CRDとしての数量値は10進数をサポートしていません。</span> <span class="merged" id="all.4dTiGq.spl6" title="原文 : See https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity for the different formats of number that may be entered.">入力できる数値の書式については、<a href="https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity" id="" target="_blank" >https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity</a>を参照してください。</span> <span class="merged" id="all.4dTiGq.spl7" title="原文 :  NOTE: This field maps to the -XX:MaxRAMPercentage JVM option and will be incompatible with some JVMs that do not have this option (e.g. Java 8)."><br> <br> ノート: このフィールドは-XX:MaxRAMPercentage JVMオプションにマップされ、このオプションがない一部のJVMと互換性がありません(例、Java 8)。</span> </td>
<td class=""><span class="merged" id="all.2y07uS.3"  title="原文: *resource.Quantity"><code>*resource.Quantity</code></span></td>
<td class=""><span class="merged" id="all.njUKu.111"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3hGjB5"  title="原文: minRAMPercentage"><code>minRAMPercentage</code></span></td>
<td class=""><span class="merged" id="all.4PFaMy.spl1" title="原文 : Set the minimal JVM Heap size as a percentage of the total memory.">最小JVMヒープ・サイズを合計メモリーの割合として設定します。</span> <span class="merged" id="all.4PFaMy.spl2" title="原文 :  This option will be ignored if HeapSize is set."><br> <br> HeapSizeが設定されている場合、このオプションは無視されます。</span> <span class="merged" id="all.4PFaMy.spl3" title="原文 :  Valid values are decimal numbers between 0 and 100."><br><br> 有効な値は、0から100までの10進数です。</span> <span class="merged" id="all.4PFaMy.spl4" title="原文 :  NOTE: This field is a k8s resource.Quantity value as CRDs do not support decimal numbers."><br><br> ノート: このフィールドはk8sリソースです。CRDとしての数量値は10進数をサポートしていません。</span> <span class="merged" id="all.4PFaMy.spl5" title="原文 : See https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity for the different formats of number that may be entered.">入力できる数値の書式については、<a href="https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity" id="" target="_blank" >https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity</a>を参照してください。</span> <span class="merged" id="all.4PFaMy.spl6" title="原文 :  NOTE: This field maps the the -XX:MinRAMPercentage JVM option and will be incompatible with some JVMs that do not have this option (e.g. Java 8)."><br> <br> ノート: このフィールドは-XX:MinRAMPercentage JVMオプションをマップし、このオプションがない一部のJVMと互換性がありません(例、Java 8)。</span> </td>
<td class=""><span class="merged" id="all.2y07uS.4"  title="原文: *resource.Quantity"><code>*resource.Quantity</code></span></td>
<td class=""><span class="merged" id="all.njUKu.112"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.42BsZO"  title="原文: stackSize"><code>stackSize</code></span></td>
<td class=""><span class="merged" id="all.8rQwl.spl1" title="原文 : StackSize is the stack size value to pass to the JVM.">StackSizeは、JVMに渡すスタック・サイズ値です。</span> <span class="merged" id="all.8rQwl.spl2" title="原文 : The format should be the same as that used for Java’s -Xss JVM option.">形式は、Javaの -Xss JVMオプションに使用される形式と同じである必要があります。</span> <span class="merged" id="all.8rQwl.spl3" title="原文 : If not set the JVM defaults are used.">設定しない場合、JVMのデフォルトが使用されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.22"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.113"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1wVw4S"  title="原文: metaspaceSize"><code>metaspaceSize</code></span></td>
<td class=""><span class="merged" id="all.4563tl.spl1" title="原文 : MetaspaceSize is the min/max metaspace size to pass to the JVM.">MetaspaceSizeは、JVMに渡す最小/最大メタ領域サイズです。</span> <span class="merged" id="all.4563tl.spl2" title="原文 : This sets the -XX:MetaspaceSize and -XX:MaxMetaspaceSize=size JVM options.">-XX:MetaspaceSizeおよび -XX:MaxMetaspaceSize=size JVMオプションを設定します。</span> <span class="merged" id="all.4563tl.spl3" title="原文 : If not set the JVM defaults are used.">設定しない場合、JVMのデフォルトが使用されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.23"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.114"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2PQYhe"  title="原文: directMemorySize"><code>directMemorySize</code></span></td>
<td class=""><span class="merged" id="all.SoAiZ.spl1" title="原文 : DirectMemorySize sets the maximum total size (in bytes) of the New I/O (the java.nio package) direct-buffer allocations.">DirectMemorySizeは、新規I/O (java.nioパッケージ)ダイレクト・バッファ割当ての最大合計サイズ(バイト単位)を設定します。</span> <span class="merged" id="all.SoAiZ.spl2" title="原文 : This value sets the -XX:MaxDirectMemorySize JVM option.">この値は -XX:MaxDirectMemorySize JVMオプションを設定します。</span> <span class="merged" id="all.SoAiZ.spl3" title="原文 : If not set the JVM defaults are used.">設定しない場合、JVMのデフォルトが使用されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.24"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.115"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ueV9n"  title="原文: nativeMemoryTracking"><code>nativeMemoryTracking</code></span></td>
<td class=""><span class="merged" id="all.4Mgeyg" title="原文 : Adds the -XX:NativeMemoryTracking=mode JVM options where mode is on of &quot;off&quot;, &quot;summary&quot; or &quot;detail&quot;, the default is &quot;summary&quot; If not set to &quot;off&quot; also add -XX:+PrintNMTStatistics">-XX:NativeMemoryTracking=mode JVMオプションを追加します。モードが"off"、"summary"または"detail"の場合、デフォルトは"summary"です。"off"に設定されていない場合は -XX:+PrintNMTStatisticsも追加</span></td>
<td class=""><span class="merged" id="all.2JXhOu.25"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.116"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Qp9gL"  title="原文: onOutOfMemory"><code>onOutOfMemory</code></span></td>
<td class=""><span class="merged" id="all.4WrsBH" title="原文 : Configure the JVM behaviour when an OutOfMemoryError occurs.">OutOfMemoryErrorが発生したときにJVMの動作を構成します。</span></td>
<td class=""><span class="merged" id="all.1qaGc3"  title="原文: *JvmOutOfMemorySpec"><code>*<router-link @click.native="this.scrollFix('#_jvmoutofmemoryspec')" to="#_jvmoutofmemoryspec">JvmOutOfMemorySpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.117"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.13" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_jvmoutofmemoryspec"><span class="merged" id="all.4T5s3O"  title="原文: JvmOutOfMemorySpec">JvmOutOfMemorySpec</span></h3>
<div class="section">
<p><span class="merged" id="all.1K4rGN" title="原文 : JvmOutOfMemorySpec is options for managing the JVM behaviour when an OutOfMemoryError occurs.">JvmOutOfMemorySpecは、OutOfMemoryErrorが発生した場合にJVMの動作を管理するためのオプションです。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.14"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.14"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.14"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.14"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3LIRMU"  title="原文: exit"><code>exit</code></span></td>
<td class=""><span class="merged" id="all.2qzisx.spl1" title="原文 : If set to true the JVM will exit when an OOM error occurs.">trueに設定すると、OOMエラーが発生したときにJVMが終了します。</span> <span class="merged" id="all.2qzisx.spl2"  title="原文:: Default is true">デフォルトはtrueです</span> </td>
<td class=""><span class="merged" id="all.q9cn0.15"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.118"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.HjftG"  title="原文: heapDump"><code>heapDump</code></span></td>
<td class=""><span class="merged" id="all.1VOKOH.spl1" title="原文 : If set to true adds the -XX:+HeapDumpOnOutOfMemoryError JVM option to cause a heap dump to be created when an OOM error occurs.">trueに設定すると、 -XX:+HeapDumpOnOutOfMemoryError JVMオプションが追加され、OOMエラーが発生したときにヒープ・ダンプが作成されます。</span> <span class="merged" id="all.1VOKOH.spl2"  title="原文:: Default is true">デフォルトはtrueです</span> </td>
<td class=""><span class="merged" id="all.q9cn0.16"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.119"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.14" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_localobjectreference"><span class="merged" id="all.pL3r9"  title="原文: LocalObjectReference">LocalObjectReference</span></h3>
<div class="section">
<p><span class="merged" id="all.159XiV" title="原文 : LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.">LocalObjectReferenceには、同じネームスペース内で参照オブジェクトを見つけるために十分な情報が含まれています。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.15"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.15"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.15"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.15"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.2"  title="原文: name"><code>name</code></span></td>
<td class=""><span class="merged" id="all.2JSjEr.spl1" title="原文 : Name of the referent.">参照の名前。</span> <span class="merged" id="all.2JSjEr.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names">詳細情報: <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names" id="" target="_blank" >https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names</a></span> </td>
<td class=""><span class="merged" id="all.W18FC.10"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.4"  title="原文:: true">true</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.15" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_namedportspec"><span class="merged" id="all.29ug0M"  title="原文: NamedPortSpec">NamedPortSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.3jSBBf" title="原文 : NamedPortSpec defines a named port for a Coherence component">NamedPortSpecは、Coherenceコンポーネントの名前付きポートを定義</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.16"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.16"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.16"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.16"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.3"  title="原文: name"><code>name</code></span></td>
<td class=""><span class="merged" id="all.xrI53" title="原文 : Name specifies the name of the port.">名前には、ポートの名前を指定します。</span></td>
<td class=""><span class="merged" id="all.W18FC.11"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.5"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.1"  title="原文: port"><code>port</code></span></td>
<td class=""><span class="merged" id="all.3BfDXR" title="原文 : Port specifies the port used.">Portは、使用されるポートを指定します。</span></td>
<td class=""><span class="merged" id="all.2UR1bd"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.120"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4T3cXD"  title="原文: protocol"><code>protocol</code></span></td>
<td class=""><span class="merged" id="all.iJWpU.spl1" title="原文 : Protocol for container port.">コンテナ・ポートのプロトコル。</span> <span class="merged" id="all.iJWpU.spl2" title="原文 : Must be UDP or TCP.">UDPまたはTCPである必要があります。</span> <span class="merged" id="all.iJWpU.spl3" title="原文 : Defaults to &quot;TCP&quot;">デフォルトは「TCP」です</span> </td>
<td class=""><span class="merged" id="all.HErNU"  title="原文: *https://pkg.go.dev/k8s.io/api/core/v1#Protocol"><code>*<a href="https://pkg.go.dev/k8s.io/api/core/v1#Protocol" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#Protocol</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.121"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ueISg"  title="原文: appProtocol"><code>appProtocol</code></span></td>
<td class=""><span class="merged" id="all.36IyQe.spl1" title="原文 : The application protocol for this port.">このポートのアプリケーション・プロトコル。</span> <span class="merged" id="all.36IyQe.spl2" title="原文 : This field follows standard Kubernetes label syntax.">このフィールドは、標準のKubernetesラベル構文に従います。</span> <span class="merged" id="all.36IyQe.spl3" title="原文 : Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names).">プレフィクスなしの名前は、IANA標準サービス名(RFC-6335および<a href="http://www.iana.org/assignments/service-names" id="" target="_blank" >http://www.iana.org/assignments/service-names</a>に従って)用に予約されています。</span> <span class="merged" id="all.36IyQe.spl4" title="原文 : Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.">標準以外のプロトコルでは、mycompany.com/my-custom-protocolなどのプレフィクス付きの名前を使用する必要があります。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.26"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.122"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3D4sOI"  title="原文: nodePort"><code>nodePort</code></span></td>
<td class=""><span class="merged" id="all.1mnvor.spl1" title="原文 : The port on each node on which this service is exposed when type=NodePort or LoadBalancer.">type=NodePortまたはLoadBalancerの場合に、このサービスが公開される各ノードのポート。</span> <span class="merged" id="all.1mnvor.spl2" title="原文 : Usually assigned by the system.">通常はシステムによって割り当てられます。</span> <span class="merged" id="all.1mnvor.spl3" title="原文 : If specified, it will be allocated to the service if unused or else creation of the service will fail.">指定した場合、未使用の場合またはサービスの作成が失敗した場合、サービスに割り当てられます。</span> <span class="merged" id="all.1mnvor.spl4" title="原文 : If set, this field must be in the range 30000 - 32767 inclusive.">設定されている場合、このフィールドは30000の範囲内である必要があります - 32767 inclusive.</span> <span class="merged" id="all.1mnvor.spl5" title="原文 : Default is to auto-allocate a port if the ServiceType of this Service requires one.">デフォルトでは、このサービスのServiceTypeにポートが1つする必要があります。</span> <span class="merged" id="all.1mnvor.spl6" title="原文 : More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport">詳細情報: <a href="https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport" id="" target="_blank" >https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport</a></span> </td>
<td class=""><span class="merged" id="all.C5sgP.7"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.123"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3s1Qpl"  title="原文: hostPort"><code>hostPort</code></span></td>
<td class=""><span class="merged" id="all.2uXXZu.spl1" title="原文 : Number of port to expose on the host.">ホストで公開するポートの数。</span> <span class="merged" id="all.2uXXZu.spl2" title="原文 : If specified, this must be a valid port number, 0 &lt; x &lt; 65536.">指定する場合、これは有効なポート番号(0 &lt; x &lt; 65536)である必要があります。</span> <span class="merged" id="all.2uXXZu.spl3" title="原文 : If HostNetwork is specified, this must match ContainerPort.">HostNetworkを指定する場合は、ContainerPortと一致する必要があります。</span> <span class="merged" id="all.2uXXZu.spl4" title="原文 : Most containers do not need this.">ほとんどのコンテナには必要ありません。</span> </td>
<td class=""><span class="merged" id="all.C5sgP.8"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.124"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Jxxyl"  title="原文: hostIP"><code>hostIP</code></span></td>
<td class=""><span class="merged" id="all.mUPtR" title="原文 : What host IP to bind the external port to.">外部ポートをバインドするホストIP。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.27"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.125"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30hFTR"  title="原文: service"><code>service</code></span></td>
<td class=""><span class="merged" id="all.3CYRE4" title="原文 : Service configures the Kubernetes Service used to expose the port.">サービスは、ポートの公開に使用されるKubernetesサービスを構成します。</span></td>
<td class=""><span class="merged" id="all.2W8QHW"  title="原文: *ServiceSpec"><code>*<router-link @click.native="this.scrollFix('#_servicespec')" to="#_servicespec">ServiceSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.126"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.zeyxS"  title="原文: serviceMonitor"><code>serviceMonitor</code></span></td>
<td class=""><span class="merged" id="all.3ckekZ" title="原文 : The specification of a Prometheus ServiceMonitor resource that will be created for the Service being exposed for this port.">このポートで公開されるサービスに対して作成されるPrometheus ServiceMonitorリソースの仕様。</span></td>
<td class=""><span class="merged" id="all.3QTh8q"  title="原文: *ServiceMonitorSpec"><code>*<router-link @click.native="this.scrollFix('#_servicemonitorspec')" to="#_servicemonitorspec">ServiceMonitorSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.127"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1BUG1f"  title="原文: exposeOnSts"><code>exposeOnSts</code></span></td>
<td class=""><span class="merged" id="all.186Za5.spl1" title="原文 : ExposeOnSTS is a flag to indicate that this port should also be exposed on the StatefulSetHeadless service.">ExposeOnSTSは、このポートをStatefulSetHeadlessサービスでも公開する必要があることを示すフラグです。</span> <span class="merged" id="all.186Za5.spl2" title="原文 : This is useful in cases where a service mesh such as Istio is being used and ports such as the Extend or gRPC ports are accessed via the StatefulSet service.">これは、Istioなどのサービス・メッシュが使用され、ExtendやgRPCポートなどのポートがStatefulSetサービスを介してアクセスされる場合に役立ちます。</span> <span class="merged" id="all.186Za5.spl3" title="原文 : The default is true so all additional ports are exposed on the StatefulSet headless service.">デフォルトは<code>true</code>であるため、追加のすべてのポートがStatefulSetヘッドレス・サービスで公開されます。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.17"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.128"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.16" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_networkspec"><span class="merged" id="all.1IlyA3"  title="原文: NetworkSpec">NetworkSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.3boW9p" title="原文 : NetworkSpec configures various networking and DNS settings for Pods in a deployment.">NetworkSpecは、デプロイメント内のポッドの様々なネットワークおよびDNS設定を構成します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.17"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.17"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.17"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.17"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.PuAL6"  title="原文: dnsConfig"><code>dnsConfig</code></span></td>
<td class=""><span class="merged" id="all.28ajSY.spl1" title="原文 : Specifies the DNS parameters of a pod.">ポッドのDNSパラメータを指定します。</span> <span class="merged" id="all.28ajSY.spl2" title="原文 : Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.">ここで指定したパラメータは、DNSPolicyに基づいて生成されたDNS構成にマージされます。</span> </td>
<td class=""><span class="merged" id="all.3xOLGe"  title="原文: *PodDNSConfig"><code>*<router-link @click.native="this.scrollFix('#_poddnsconfig')" to="#_poddnsconfig">PodDNSConfig</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.129"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1MTAcN"  title="原文: dnsPolicy"><code>dnsPolicy</code></span></td>
<td class=""><span class="merged" id="all.341DOX.spl1" title="原文 : Set DNS policy for the pod.">ポッドのDNSポリシーを設定します。</span> <span class="merged" id="all.341DOX.spl2" title="原文 : Defaults to &quot;ClusterFirst&quot;.">デフォルトは"ClusterFirst"です。</span> <span class="merged" id="all.341DOX.spl3" title="原文 : Valid values are &apos;ClusterFirstWithHostNet&apos;, &apos;ClusterFirst&apos;, &apos;Default&apos; or &apos;None&apos;.">有効な値は、'ClusterFirstWithHostNet'、'ClusterFirst'、'デフォルト'または'なし'です。</span> <span class="merged" id="all.341DOX.spl4" title="原文 : DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy.">DNSConfigで指定されたDNSパラメータは、DNSPolicyで選択したポリシーとマージされます。</span> <span class="merged" id="all.341DOX.spl5" title="原文 : To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to &apos;ClusterFirstWithHostNet&apos;.">DNSオプションをhostNetworkとともに設定するには、DNSポリシーを'ClusterFirstWithHostNet'に明示的に指定する必要があります。</span> </td>
<td class=""><span class="merged" id="all.3VD7py"  title="原文: *https://pkg.go.dev/k8s.io/api/core/v1#DNSPolicy"><code>*<a href="https://pkg.go.dev/k8s.io/api/core/v1#DNSPolicy" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#DNSPolicy</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.130"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1x8Vka"  title="原文: hostAliases"><code>hostAliases</code></span></td>
<td class=""><span class="merged" id="all.csLDP.spl1" title="原文 : HostAliases is an optional list of hosts and IPs that will be injected into the pod’s hosts file if specified.">HostAliasesは、指定された場合にポッドのhostsファイルにインジェクトされるホストおよびIPのオプションのリストです。</span> <span class="merged" id="all.csLDP.spl2" title="原文 : This is only valid for non-hostNetwork pods.">これは、hostNetwork以外のポッドにのみ有効です。</span> </td>
<td class=""><span class="merged" id="all.4LXp0s"  title="原文: []corev1.HostAlias"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#hostalias-v1-core" id="" target="_blank" >corev1.HostAlias</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.131"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.yM6uO"  title="原文: hostNetwork"><code>hostNetwork</code></span></td>
<td class=""><span class="merged" id="all.42LdBP.spl1" title="原文 : Host networking requested for this pod.">このポッドでホスト・ネットワーキングがリクエストされました。</span> <span class="merged" id="all.42LdBP.spl2" title="原文 : Use the host’s network namespace.">ホストのネットワーク・ネームスペースを使用します。</span> <span class="merged" id="all.42LdBP.spl3" title="原文 : If this option is set, the ports that will be used must be specified.">このオプションが設定されている場合は、使用されるポートを指定する必要があります。</span> <span class="merged" id="all.42LdBP.spl4" title="原文 : Default to false.">デフォルトはfalseです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.18"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.132"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28fJbR"  title="原文: hostname"><code>hostname</code></span></td>
<td class=""><span class="merged" id="all.VMWGt" title="原文 : Specifies the hostname of the Pod If not specified, the pod’s hostname will be set to a system-defined value.">ポッドのホスト名を指定します。指定しない場合、ポッドのホスト名はシステム定義の値に設定されます。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.28"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.133"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WY9fs"  title="原文: setHostnameAsFQDN"><code>setHostnameAsFQDN</code></span></td>
<td class=""><span class="merged" id="all.2DDUPH.spl1" title="原文 : SetHostnameAsFQDN if true the pod’s hostname will be configured as the pod’s FQDN, rather than the leaf name (the default).">SetHostnameAsFQDN trueの場合、ポッドのホスト名はリーフ名(デフォルト)ではなく、ポッドのFQDNとして構成されます。</span> <span class="merged" id="all.2DDUPH.spl2" title="原文 : In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname).">Linuxコンテナでは、これはカーネルのホスト名フィールドのFQDN (構造体utsnameのノード名フィールド)を設定することを意味します。</span> <span class="merged" id="all.2DDUPH.spl3" title="原文 : In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters to FQDN.">Windowsコンテナでは、レジストリ・キーHKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parametersのホスト名のレジストリ値をFQDNに設定します。</span> <span class="merged" id="all.2DDUPH.spl4" title="原文 : If a pod does not have FQDN, this has no effect.">ポッドにFQDNがない場合、これは効果がありません。</span> <span class="merged" id="all.2DDUPH.spl5" title="原文 : Default to false.">デフォルトはfalseです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.19"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.134"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3dD2Ww"  title="原文: subdomain"><code>subdomain</code></span></td>
<td class=""><span class="merged" id="all.1MIpf7.spl1" title="原文 : Subdomain, if specified, the fully qualified Pod hostname will be &quot;&lt;hostname&gt;.&lt;subdomain&gt;.&lt;pod namespace&gt;.svc.&lt;cluster domain&gt;&quot;.">サブドメインが指定されている場合、完全修飾ポッド・ホスト名は" &lt;hostname>.&lt;subdomain>.&lt;pod namespace>.svc.&lt;cluster domain> "になります。</span> <span class="merged" id="all.1MIpf7.spl2" title="原文 : If not specified, the pod will not have a domain name at all.">指定しない場合、ポッドにはドメイン名がありません。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.29"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.135"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.17" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_persistencespec"><span class="merged" id="all.2u8vXr"  title="原文: PersistenceSpec">PersistenceSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.rtat5" title="原文 : PersistenceSpec is the spec for Coherence persistence.">PersistenceSpecは、Coherenceの永続性に関する仕様です。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.18"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.18"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.18"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.18"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2Uy1sm"  title="原文: mode"><code>mode</code></span></td>
<td class=""><span class="merged" id="all.1zx5sO.spl1" title="原文 : The persistence mode to use.">使用する永続性モード。</span> <span class="merged" id="all.1zx5sO.spl2" title="原文 : Valid choices are &quot;on-demand&quot;, &quot;active&quot;, &quot;active-async&quot;.">有効な選択肢は、"on-demand"、"active"、"active-async"です。</span> <span class="merged" id="all.1zx5sO.spl3" title="原文 : This field will set the coherence.distributed.persistence-mode System property to &quot;default-&quot; + Mode.">このフィールドでは、coherence.distributed.persistence-mode Systemプロパティを「default-」+Modeに設定します。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.30"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.136"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2s8E51"  title="原文: persistentVolumeClaim"><code>persistentVolumeClaim</code></span></td>
<td class=""><span class="merged" id="all.14q9J9" title="原文 : PersistentVolumeClaim allows the configuration of a normal k8s persistent volume claim for persistence data.">PersistentVolumeClaimでは、永続データに対する通常のk8s永続ボリューム要求を構成できます。</span></td>
<td class=""><span class="merged" id="all.2oLKz"  title="原文: *corev1.PersistentVolumeClaimSpec"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#persistentvolumeclaimspec-v1-core" id="" target="_blank" >corev1.PersistentVolumeClaimSpec</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.137"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3d0WZg"  title="原文: volume"><code>volume</code></span></td>
<td class=""><span class="merged" id="all.2Qq2Md.spl1" title="原文 : Volume allows the configuration of a normal k8s volume mapping for persistence data instead of a persistent volume claim.">ボリュームでは、永続ボリューム要求ではなく、永続データに対する通常のk8sボリューム・マッピングを構成できます。</span> <span class="merged" id="all.2Qq2Md.spl2" title="原文 : If a value is defined for store.persistence.volume then no PVC will be created and persistence data will instead be written to this volume.">store.persistence.volumeに値が定義されている場合、PVCは作成されず、かわりに永続性データはこのボリュームに書き込まれます。</span> <span class="merged" id="all.2Qq2Md.spl3" title="原文 : It is up to the deployer to understand the consequences of this and how the guarantees given when using PVCs differ to the storage guarantees for the particular volume type configured here.">これは、この結果と、PVCの使用時に得られる保証が、ここで構成されている特定のボリューム・タイプに対するストレージ保証とどのように異なるかを、デプロイヤが理解する必要があります。</span> </td>
<td class=""><span class="merged" id="all.17NnXQ.1"  title="原文: *https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#volume-v1-core"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#volume-v1-core" id="" target="_blank" >https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#volume-v1-core</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.138"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2VBWrk"  title="原文: snapshots"><code>snapshots</code></span></td>
<td class=""><span class="merged" id="all.4UpbE4.spl1" title="原文 : Snapshot values configure the on-disc persistence data snapshot (backup) settings.">スナップショット値は、disc永続データ・スナップショット(バックアップ)設定を構成します。</span> <span class="merged" id="all.4UpbE4.spl2" title="原文 : These settings enable a different location for persistence snapshot data.">これらの設定により、永続スナップショット・データの別のロケーションが有効になります。</span> <span class="merged" id="all.4UpbE4.spl3" title="原文 : If not set then snapshot files will be written to the same volume configured for persistence data in the Persistence section.">設定しない場合、スナップショット・ファイルは、永続性セクションの永続性データ用に構成された同じボリュームに書き込まれます。</span> </td>
<td class=""><span class="merged" id="all.44JnR9"  title="原文: *PersistentStorageSpec"><code>*<router-link @click.native="this.scrollFix('#_persistentstoragespec')" to="#_persistentstoragespec">PersistentStorageSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.139"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.18" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_persistentstoragespec"><span class="merged" id="all.17Rh58"  title="原文: PersistentStorageSpec">PersistentStorageSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.Cnqa3" title="原文 : PersistentStorageSpec defines the persistence settings for the Coherence">PersistentStorageSpecは、Coherenceの永続性設定を定義</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.19"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.19"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.19"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.19"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2s8E51.1"  title="原文: persistentVolumeClaim"><code>persistentVolumeClaim</code></span></td>
<td class=""><span class="merged" id="all.14q9J9.1" title="原文 : PersistentVolumeClaim allows the configuration of a normal k8s persistent volume claim for persistence data.">PersistentVolumeClaimでは、永続データに対する通常のk8s永続ボリューム要求を構成できます。</span></td>
<td class=""><span class="merged" id="all.2oLKz.1"  title="原文: *corev1.PersistentVolumeClaimSpec"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#persistentvolumeclaimspec-v1-core" id="" target="_blank" >corev1.PersistentVolumeClaimSpec</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.140"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3d0WZg.1"  title="原文: volume"><code>volume</code></span></td>
<td class=""><span class="merged" id="all.2Qq2Md.1.spl1" title="原文 : Volume allows the configuration of a normal k8s volume mapping for persistence data instead of a persistent volume claim.">ボリュームでは、永続ボリューム要求ではなく、永続データに対する通常のk8sボリューム・マッピングを構成できます。</span> <span class="merged" id="all.2Qq2Md.1.spl2" title="原文 : If a value is defined for store.persistence.volume then no PVC will be created and persistence data will instead be written to this volume.">store.persistence.volumeに値が定義されている場合、PVCは作成されず、かわりに永続性データはこのボリュームに書き込まれます。</span> <span class="merged" id="all.2Qq2Md.1.spl3" title="原文 : It is up to the deployer to understand the consequences of this and how the guarantees given when using PVCs differ to the storage guarantees for the particular volume type configured here.">これは、この結果と、PVCの使用時に得られる保証が、ここで構成されている特定のボリューム・タイプに対するストレージ保証とどのように異なるかを、デプロイヤが理解する必要があります。</span> </td>
<td class=""><span class="merged" id="all.17NnXQ.2"  title="原文: *https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#volume-v1-core"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#volume-v1-core" id="" target="_blank" >https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#volume-v1-core</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.141"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.19" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_persistentvolumeclaim"><span class="merged" id="all.2p56RP"  title="原文: PersistentVolumeClaim">PersistentVolumeClaim</span></h3>
<div class="section">
<p><span class="merged" id="all.4SpziK" title="原文 : PersistentVolumeClaim is a request for and claim to a persistent volume">PersistentVolumeClaimは、永続ボリュームに対するリクエストであり、要求</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.20"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.20"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.20"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.20"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.Tgr1J"  title="原文: metadata"><code>metadata</code></span></td>
<td class=""><span class="merged" id="all.4NNFob.spl1" title="原文 : Standard object’s metadata.">Standardオブジェクトのメタデータ。</span> <span class="merged" id="all.4NNFob.spl2" title="原文 : More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata">詳細情報: <a href="https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata" id="" target="_blank" >https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata</a></span> </td>
<td class=""><span class="merged" id="all.4Jkso5"  title="原文: PersistentVolumeClaimObjectMeta"><code><router-link @click.native="this.scrollFix('#_persistentvolumeclaimobjectmeta')" to="#_persistentvolumeclaimobjectmeta">PersistentVolumeClaimObjectMeta</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.142"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.26upHQ.1"  title="原文: spec"><code>spec</code></span></td>
<td class=""><span class="merged" id="all.2M7c8i.spl1" title="原文 : Spec defines the desired characteristics of a volume requested by a pod author.">仕様は、ポッド作成者がリクエストしたボリュームの希望する特性を定義します。</span> <span class="merged" id="all.2M7c8i.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims">詳細情報: <a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims" id="" target="_blank" >https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims</a></span> </td>
<td class=""><span class="merged" id="all.43u5op"  title="原文: corev1.PersistentVolumeClaimSpec"><code><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#persistentvolumeclaimspec-v1-core" id="" target="_blank" >corev1.PersistentVolumeClaimSpec</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.143"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.20" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_persistentvolumeclaimobjectmeta"><span class="merged" id="all.yLoTw"  title="原文: PersistentVolumeClaimObjectMeta">PersistentVolumeClaimObjectMeta</span></h3>
<div class="section">
<p><span class="merged" id="all.39o7cP" title="原文 : PersistentVolumeClaimObjectMeta is metadata for the PersistentVolumeClaim.">PersistentVolumeClaimObjectMetaは、PersistentVolumeClaimのメタデータです。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.21"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.21"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.21"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.21"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.4"  title="原文: name"><code>name</code></span></td>
<td class=""><span class="merged" id="all.UaDQy.spl1" title="原文 : Name must be unique within a namespace.">名前はネームスペース内で一意である必要があります。</span> <span class="merged" id="all.UaDQy.spl2" title="原文 : Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically.">リソースの作成時に必要になりますが、一部のリソースでは、クライアントが適切な名前の生成を自動的にリクエストできる場合があります。</span> <span class="merged" id="all.UaDQy.spl3" title="原文 : Name is primarily intended for creation idempotence and configuration definition.">名前は主に、べき等の作成および構成定義を目的としています。</span> <span class="merged" id="all.UaDQy.spl4"  title="原文:: Cannot be updated.">更新できません。</span> <span class="merged" id="all.UaDQy.spl5" title="原文 : More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/">詳細情報: <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names/" id="" target="_blank" >https://kubernetes.io/docs/concepts/overview/working-with-objects/names/</a></span> </td>
<td class=""><span class="merged" id="all.W18FC.12"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.144"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Dbs6Z.2"  title="原文: labels"><code>labels</code></span></td>
<td class=""><span class="merged" id="all.1NGASV.spl1" title="原文 : Map of string keys and values that can be used to organize and categorize (scope and select) objects.">オブジェクトの編成および分類(スコープおよび選択)に使用できる文字列キーおよび値のマップ。</span> <span class="merged" id="all.1NGASV.spl2" title="原文 : May match selectors of replication controllers and services.">レプリケーション・コントローラとサービスのセレクタを一致させることができます。</span> <span class="merged" id="all.1NGASV.spl3" title="原文 : More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/">詳細情報: <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/" id="" target="_blank" >https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/</a></span> </td>
<td class=""><span class="merged" id="all.6My6t.5"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.145"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uY9DD.2"  title="原文: annotations"><code>annotations</code></span></td>
<td class=""><span class="merged" id="all.RADJ8.spl1" title="原文 : Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.">注釈は、任意のメタデータを格納および取得するために外部ツールで設定できるリソースとともに格納される非構造化キー値マップです。</span> <span class="merged" id="all.RADJ8.spl2" title="原文 : They are not queryable and should be preserved when modifying objects.">これらはクエリー可能ではなく、オブジェクトを変更するときに保持する必要があります。</span> <span class="merged" id="all.RADJ8.spl3" title="原文 : More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/">詳細情報: <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/" id="" target="_blank" >https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/</a></span> </td>
<td class=""><span class="merged" id="all.6My6t.6"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.146"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.21" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_poddnsconfig"><span class="merged" id="all.2hBMCe"  title="原文: PodDNSConfig">PodDNSConfig</span></h3>
<div class="section">
<p><span class="merged" id="all.2HSjaL" title="原文 : PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.">PodDNSConfigは、DNSPolicyから生成されたものに加えて、ポッドのDNSパラメータを定義します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.22"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.22"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.22"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.22"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3jGawz"  title="原文: nameservers"><code>nameservers</code></span></td>
<td class=""><span class="merged" id="all.2WPUt6.spl1" title="原文 : A list of DNS name server IP addresses.">DNSネーム・サーバーのIPアドレスのリスト。</span> <span class="merged" id="all.2WPUt6.spl2" title="原文 : This will be appended to the base nameservers generated from DNSPolicy.">これは、DNSPolicyから生成されたベース・ネーム・サーバーに追加されます。</span> <span class="merged" id="all.2WPUt6.spl3" title="原文 : Duplicated nameservers will be removed.">重複したネーム・サーバーが削除されます。</span> </td>
<td class=""><span class="merged" id="all.rXwhA.6"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.147"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.uHfFv"  title="原文: searches"><code>searches</code></span></td>
<td class=""><span class="merged" id="all.3OBhnb.spl1" title="原文 : A list of DNS search domains for host-name lookup.">ホスト名検索用のDNS検索ドメインのリスト。</span> <span class="merged" id="all.3OBhnb.spl2" title="原文 : This will be appended to the base search paths generated from DNSPolicy.">これは、DNSPolicyから生成されたベース検索パスに追加されます。</span> <span class="merged" id="all.3OBhnb.spl3" title="原文 : Duplicated search paths will be removed.">重複した検索パスが削除されます。</span> </td>
<td class=""><span class="merged" id="all.rXwhA.7"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.148"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ueYs0"  title="原文: options"><code>options</code></span></td>
<td class=""><span class="merged" id="all.3HNitx.spl1" title="原文 : A list of DNS resolver options.">DNSリゾルバ・オプションのリスト。</span> <span class="merged" id="all.3HNitx.spl2" title="原文 : This will be merged with the base options generated from DNSPolicy.">これは、DNSPolicyから生成された基本オプションとマージされます。</span> <span class="merged" id="all.3HNitx.spl3" title="原文 : Duplicated entries will be removed.">重複するエントリが削除されます。</span> <span class="merged" id="all.3HNitx.spl4" title="原文 : Resolution options given in Options will override those that appear in the base DNSPolicy.">オプションで指定された解決オプションは、ベースDNSPolicyに表示される解決オプションをオーバーライドします。</span> </td>
<td class=""><span class="merged" id="all.2tSLPp"  title="原文: []corev1.PodDNSConfigOption"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#poddnsconfigoption-v1-core" id="" target="_blank" >corev1.PodDNSConfigOption</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.149"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.22" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_portspecwithssl"><span class="merged" id="all.2p3Ou5"  title="原文: PortSpecWithSSL">PortSpecWithSSL</span></h3>
<div class="section">
<p><span class="merged" id="all.46Rlsw" title="原文 : PortSpecWithSSL defines a port with SSL settings for a Coherence component">PortSpecWithSSLは、CoherenceコンポーネントのSSL設定を含むポートを定義</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.23"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.23"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.23"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.23"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.2"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.45nQBa" title="原文 : Enable or disable flag.">フラグを有効または無効にします。</span></td>
<td class=""><span class="merged" id="all.q9cn0.20"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.150"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.2"  title="原文: port"><code>port</code></span></td>
<td class=""><span class="merged" id="all.2UaWjr" title="原文 : The port to bind to.">バインド先のポート。</span></td>
<td class=""><span class="merged" id="all.C5sgP.9"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.151"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3vz3n4"  title="原文: ssl"><code>ssl</code></span></td>
<td class=""><span class="merged" id="all.IqoZH" title="原文 : SSL configures SSL settings for a Coherence component">SSLはCoherenceコンポーネントのSSL設定を構成</span></td>
<td class=""><span class="merged" id="all.3T4zQC"  title="原文: *SSLSpec"><code>*<router-link @click.native="this.scrollFix('#_sslspec')" to="#_sslspec">SSLSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.152"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.23" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_probe"><span class="merged" id="all.PgUUo"  title="原文:: Probe">Probe</span></h3>
<div class="section">
<p><span class="merged" id="all.cMrNZ.spl1" title="原文 : Probe is the handler that will be used to determine how to communicate with a Coherence deployment for operations like StatusHA checking and service suspension.">Probeは、StatusHAチェックやサービス停止などの操作のためにCoherenceデプロイメントと通信する方法を決定するために使用されるハンドラです。</span> <span class="merged" id="all.cMrNZ.spl2" title="原文 : StatusHA checking is primarily used during scaling of a deployment, a deployment must be in a safe Phase HA state before scaling takes place.">StatusHAチェックは、主にデプロイメントのスケーリング中に使用されます。スケーリングが実行される前に、デプロイメントはセーフ・フェーズのHA状態である必要があります。</span> <span class="merged" id="all.cMrNZ.spl3" title="原文 : If StatusHA handler is disabled for a deployment (by specifically setting Enabled to false then no check will take place and a deployment will be assumed to be safe).">デプロイメントに対してStatusHAハンドラが無効になっている場合(特に有効をfalseに設定すると、チェックは実行されず、デプロイメントは安全であるとみなされます)。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.24"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.24"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.24"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.24"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1uWagV"  title="原文: timeoutSeconds"><code>timeoutSeconds</code></span></td>
<td class=""><span class="merged" id="all.3XJmsn.spl1" title="原文 : Number of seconds after which the handler times out (only applies to http and tcp handlers).">ハンドラがタイムアウトするまでの秒数(httpおよびtcpハンドラにのみ適用されます)。</span> <span class="merged" id="all.3XJmsn.spl2" title="原文 : Defaults to 1 second.">デフォルトは1秒です。</span> <span class="merged" id="all.3XJmsn.spl3"  title="原文:: Minimum value is 1.">最小値は1です。</span> </td>
<td class=""><span class="merged" id="all.3IVb0a"  title="原文: *int"><code>*int</code></span></td>
<td class=""><span class="merged" id="all.njUKu.153"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.24" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_probehandler"><span class="merged" id="all.4Id4ne"  title="原文: ProbeHandler">ProbeHandler</span></h3>
<div class="section">
<p><span class="merged" id="all.1pnqn7" title="原文 : ProbeHandler is the definition of a probe handler.">ProbeHandlerは、プローブ・ハンドラの定義です。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.25"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.25"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.25"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.25"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.i6xEu"  title="原文: exec"><code>exec</code></span></td>
<td class=""><span class="merged" id="all.4bLZgz.spl1" title="原文 : One and only one of the following should be specified.">次のうち1つだけを指定する必要があります。</span> <span class="merged" id="all.4bLZgz.spl2" title="原文 : Exec specifies the action to take.">実行は実行するアクションを指定します。</span> </td>
<td class=""><span class="merged" id="all.4auBYg"  title="原文: *corev1.ExecAction"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#execaction-v1-core" id="" target="_blank" >corev1.ExecAction</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.154"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24jtXI"  title="原文: httpGet"><code>httpGet</code></span></td>
<td class=""><span class="merged" id="all.3Jk3is" title="原文 : HTTPGet specifies the http request to perform.">HTTPGetでは、実行するHTTPリクエストを指定します。</span></td>
<td class=""><span class="merged" id="all.1e3ZLo"  title="原文: *corev1.HTTPGetAction"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#httpgetaction-v1-core" id="" target="_blank" >corev1.HTTPGetAction</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.155"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4NJYXE"  title="原文: tcpSocket"><code>tcpSocket</code></span></td>
<td class=""><span class="merged" id="all.3HTJ82.spl1" title="原文 : TCPSocket specifies an action involving a TCP port.">TCPSocketは、TCPポートに関連するアクションを指定します。</span> <span class="merged" id="all.3HTJ82.spl2" title="原文 : TCP hooks not yet supported">TCPフックはまだサポートされていません</span> </td>
<td class=""><span class="merged" id="all.28LQzq"  title="原文: *corev1.TCPSocketAction"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#tcpsocketaction-v1-core" id="" target="_blank" >corev1.TCPSocketAction</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.156"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.25" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_readinessprobespec"><span class="merged" id="all.2SZDwB"  title="原文: ReadinessProbeSpec">ReadinessProbeSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.4cdcFV" title="原文 : ReadinessProbeSpec defines the settings for the Coherence Pod readiness probe">ReadinessProbeSpecは、Coherenceポッド・レディネス・プローブの設定を定義</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.26"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.26"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.26"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.26"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.i6xEu.1"  title="原文: exec"><code>exec</code></span></td>
<td class=""><span class="merged" id="all.4bLZgz.1.spl1" title="原文 : One and only one of the following should be specified.">次のうち1つだけを指定する必要があります。</span> <span class="merged" id="all.4bLZgz.1.spl2" title="原文 : Exec specifies the action to take.">実行は実行するアクションを指定します。</span> </td>
<td class=""><span class="merged" id="all.4auBYg.1"  title="原文: *corev1.ExecAction"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#execaction-v1-core" id="" target="_blank" >corev1.ExecAction</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.157"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24jtXI.1"  title="原文: httpGet"><code>httpGet</code></span></td>
<td class=""><span class="merged" id="all.3Jk3is.1" title="原文 : HTTPGet specifies the http request to perform.">HTTPGetでは、実行するHTTPリクエストを指定します。</span></td>
<td class=""><span class="merged" id="all.1e3ZLo.1"  title="原文: *corev1.HTTPGetAction"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#httpgetaction-v1-core" id="" target="_blank" >corev1.HTTPGetAction</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.158"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4NJYXE.1"  title="原文: tcpSocket"><code>tcpSocket</code></span></td>
<td class=""><span class="merged" id="all.3HTJ82.1.spl1" title="原文 : TCPSocket specifies an action involving a TCP port.">TCPSocketは、TCPポートに関連するアクションを指定します。</span> <span class="merged" id="all.3HTJ82.1.spl2" title="原文 : TCP hooks not yet supported">TCPフックはまだサポートされていません</span> </td>
<td class=""><span class="merged" id="all.28LQzq.1"  title="原文: *corev1.TCPSocketAction"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#tcpsocketaction-v1-core" id="" target="_blank" >corev1.TCPSocketAction</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.159"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ESiyH"  title="原文: initialDelaySeconds"><code>initialDelaySeconds</code></span></td>
<td class=""><span class="merged" id="all.121UKb.spl1" title="原文 : Number of seconds after the container has started before liveness probes are initiated.">リブネス・プローブが開始されるまでのコンテナ起動後の秒数。</span> <span class="merged" id="all.121UKb.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">詳細情報: <a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes" id="" target="_blank" >https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes</a></span> </td>
<td class=""><span class="merged" id="all.C5sgP.10"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.160"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1uWagV.1"  title="原文: timeoutSeconds"><code>timeoutSeconds</code></span></td>
<td class=""><span class="merged" id="all.1lcHAE.spl1" title="原文 : Number of seconds after which the probe times out.">プローブがタイムアウトするまでの秒数。</span> <span class="merged" id="all.1lcHAE.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">詳細情報: <a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes" id="" target="_blank" >https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes</a></span> </td>
<td class=""><span class="merged" id="all.C5sgP.11"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.161"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1BeYeS"  title="原文: periodSeconds"><code>periodSeconds</code></span></td>
<td class=""><span class="merged" id="all.3QeOdD" title="原文 : How often (in seconds) to perform the probe.">プローブを実行する頻度(秒)。</span></td>
<td class=""><span class="merged" id="all.C5sgP.12"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.162"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1tg8tz"  title="原文: successThreshold"><code>successThreshold</code></span></td>
<td class=""><span class="merged" id="all.3FlaF" title="原文 : Minimum consecutive successes for the probe to be considered successful after having failed.">失敗したあとにプローブが成功したとみなされる最小連続成功。</span></td>
<td class=""><span class="merged" id="all.C5sgP.13"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.163"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ZE4zx"  title="原文: failureThreshold"><code>failureThreshold</code></span></td>
<td class=""><span class="merged" id="all.3FUYTt" title="原文 : Minimum consecutive failures for the probe to be considered failed after having succeeded.">成功したあと、プローブが失敗したとみなされる最小連続障害。</span></td>
<td class=""><span class="merged" id="all.C5sgP.14"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.164"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.26" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_resource"><span class="merged" id="all.1HMyCe"  title="原文:: Resource">Resource</span></h3>
<div class="section">
<p><span class="merged" id="all.4NSQyu" title="原文 : Resource is a structure holding a resource to be managed">Resourceは、管理対象のリソースを保持する構造です</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.27"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.27"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.27"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.27"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.xPaN2"  title="原文: kind"><code>kind</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3NqnZg"  title="原文: ResourceType"><code>ResourceType</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.6"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.5"  title="原文: name"><code>name</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.W18FC.13"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.7"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.26upHQ.2"  title="原文: spec"><code>spec</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3uVVnc"  title="原文: client.Object"><code>client.Object</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.8"  title="原文:: true">true</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.27" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_resources"><span class="merged" id="all.20Qk5l"  title="原文:: Resources">Resources</span></h3>
<div class="section">
<p><span class="merged" id="all.1QiY8w" title="原文 : Resources is a cloolection of resources to be managed.">Resourcesは、管理対象のリソースの選択です。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.28"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.28"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.28"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.28"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4IYcyO"  title="原文: version"><code>version</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2UR1bd.1"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.9"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WuGEZ.1"  title="原文: items"><code>items</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.PvmPk"  title="原文: []Resource"><code>[]<router-link @click.native="this.scrollFix('#_resource')" to="#_resource">Resource</router-link></code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.10"  title="原文:: true">true</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.28" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_sslspec"><span class="merged" id="all.3ybA41" title="原文 : SSLSpec">SSLSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.1EBKNI" title="原文 : SSLSpec defines the SSL settings for a Coherence component over REST endpoint.">SSLSpecは、RESTエンドポイントを介したCoherenceコンポーネントのSSL設定を定義します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.29"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.29"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.29"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.29"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.3"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.9SH9w" title="原文 : Enabled is a boolean flag indicating whether enables or disables SSL on the Coherence management over REST endpoint, the default is false (disabled).">Enabledは、RESTエンドポイントでのCoherence管理でSSLを有効または無効にするかどうかを示すブール・フラグで、デフォルトはfalse (無効)です。</span></td>
<td class=""><span class="merged" id="all.q9cn0.21"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.165"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4J7Xby"  title="原文: secrets"><code>secrets</code></span></td>
<td class=""><span class="merged" id="all.bhvIc.spl1" title="原文 : Secrets is the name of the k8s secret containing the Java key stores and password files.">シークレットは、Javaキー・ストアおよびパスワード・ファイルを含むk8sシークレットの名前です。</span> <span class="merged" id="all.bhvIc.spl2" title="原文 :  The secret should be in the same namespace as the Coherence resource. + This value MUST be provided if SSL is enabled on the Coherence management over REST endpoint. "><br>シークレットは、Coherenceリソースと同じネームスペースに存在する必要があります。+<br>RESTエンドポイントを介したCoherence管理でSSLが有効になっている場合は、この値を指定する必要があります。<br></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.31"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.166"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Wcxcg"  title="原文: keyStore"><code>keyStore</code></span></td>
<td class=""><span class="merged" id="all.445sAO" title="原文 : Keystore is the name of the Java key store file in the k8s secret to use as the SSL keystore when configuring component over REST to use SSL. ">キーストアは、SSLキーストアとして使用するk8sシークレット内のJavaキー・ストア・ファイルの名前です<br>SSLを使用するようにREST上でコンポーネントを構成する場合。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.32"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.167"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3tiPQ1"  title="原文: keyStorePasswordFile"><code>keyStorePasswordFile</code></span></td>
<td class=""><span class="merged" id="all.2Ec4Gp" title="原文 : KeyStorePasswordFile is the name of the file in the k8s secret containing the keystore password when configuring component over REST to use SSL. ">KeyStorePasswordFileは、キーストアを含むk8sシークレット内のファイルの名前です<br>SSLを使用するようにREST経由でコンポーネントを構成するときのパスワード。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.33"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.168"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eFPwp"  title="原文: keyPasswordFile"><code>keyPasswordFile</code></span></td>
<td class=""><span class="merged" id="all.1yiamx" title="原文 : KeyStorePasswordFile is the name of the file in the k8s secret containing the key password when configuring component over REST to use SSL. ">KeyStorePasswordFileは、キーを含むk8sシークレット内のファイルの名前です<br>SSLを使用するようにREST経由でコンポーネントを構成するときのパスワード。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.34"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.169"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Fbf8S"  title="原文: keyStoreAlgorithm"><code>keyStoreAlgorithm</code></span></td>
<td class=""><span class="merged" id="all.BhZeE.spl1" title="原文 : KeyStoreAlgorithm is the name of the keystore algorithm for the keystore in the k8s secret used when configuring component over REST to use SSL.">KeyStoreAlgorithmは、k8sシークレット内のキーストアのキーストア・アルゴリズムの名前です<br>SSLを使用するようにREST上でコンポーネントを構成するときに使用されます。</span> <span class="merged" id="all.BhZeE.spl2" title="原文 : If not set the default is SunX509 ">設定しない場合、デフォルトはSunX509です<br></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.35"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.170"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZrX6S"  title="原文: keyStoreProvider"><code>keyStoreProvider</code></span></td>
<td class=""><span class="merged" id="all.1O9G9E" title="原文 : KeyStoreProvider is the name of the keystore provider for the keystore in the k8s secret used when configuring component over REST to use SSL. ">KeyStoreProviderは、k8sシークレット内のキーストアのキーストア・プロバイダの名前です<br>SSLを使用するようにREST上でコンポーネントを構成するときに使用されます。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.36"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.171"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.zkQo5"  title="原文: keyStoreType"><code>keyStoreType</code></span></td>
<td class=""><span class="merged" id="all.1hHlJV.spl1" title="原文 : KeyStoreType is the name of the Java keystore type for the keystore in the k8s secret used when configuring component over REST to use SSL.">KeyStoreTypeは、使用するk8sシークレット内のキーストアのJavaキーストア・タイプの名前です<br>SSLを使用するようにREST上でコンポーネントを構成する場合。</span> <span class="merged" id="all.1hHlJV.spl2" title="原文 : If not set the default is JKS. ">設定しない場合、デフォルトはJKSです。<br></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.37"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.172"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17D7fw"  title="原文: trustStore"><code>trustStore</code></span></td>
<td class=""><span class="merged" id="all.bU4cZ" title="原文 : TrustStore is the name of the Java trust store file in the k8s secret to use as the SSL trust store when configuring component over REST to use SSL. ">TrustStoreは、SSLとして使用するk8sシークレット内のJavaトラスト・ストア・ファイルの名前です<br>SSLを使用するようにREST上でコンポーネントを構成する際のトラスト・ストア。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.38"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.173"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1uvqWl"  title="原文: trustStorePasswordFile"><code>trustStorePasswordFile</code></span></td>
<td class=""><span class="merged" id="all.3Ys3u1" title="原文 : TrustStorePasswordFile is the name of the file in the k8s secret containing the trust store password when configuring component over REST to use SSL. ">TrustStorePasswordFileは、トラスト・ストアを含むk8sシークレット内のファイルの名前です<br>SSLを使用するようにREST経由でコンポーネントを構成するときのパスワード。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.39"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.174"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.R0RdG"  title="原文: trustStoreAlgorithm"><code>trustStoreAlgorithm</code></span></td>
<td class=""><span class="merged" id="all.2x696O.spl1" title="原文 : TrustStoreAlgorithm is the name of the keystore algorithm for the trust store in the k8s secret used when configuring component over REST to use SSL.">TrustStoreAlgorithmは、k8s内のトラスト・ストアのキーストア・アルゴリズムの名前です<br>SSLを使用するようにREST上でコンポーネントを構成するときに使用されるシークレット。</span> <span class="merged" id="all.2x696O.spl2" title="原文 : If not set the default is SunX509. ">設定しない場合、デフォルトはSunX509です。<br></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.40"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.175"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4aeuWP"  title="原文: trustStoreProvider"><code>trustStoreProvider</code></span></td>
<td class=""><span class="merged" id="all.3hT0mG" title="原文 : TrustStoreProvider is the name of the keystore provider for the trust store in the k8s secret used when configuring component over REST to use SSL. ">TrustStoreProviderは、k8s内のトラスト・ストア用のキーストア・プロバイダの名前です<br>SSLを使用するようにREST上でコンポーネントを構成するときに使用されるシークレット。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.41"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.176"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1FRUfB"  title="原文: trustStoreType"><code>trustStoreType</code></span></td>
<td class=""><span class="merged" id="all.28kb4y.spl1" title="原文 : TrustStoreType is the name of the Java keystore type for the trust store in the k8s secret used when configuring component over REST to use SSL.">TrustStoreTypeは、k8sシークレット内のトラスト・ストアのJavaキーストア・タイプの名前です<br>SSLを使用するようにREST上でコンポーネントを構成するときに使用されます。</span> <span class="merged" id="all.28kb4y.spl2" title="原文 : If not set the default is JKS. ">設定しない場合、デフォルトはJKSです。<br></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.42"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.177"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ESibs"  title="原文: requireClientCert"><code>requireClientCert</code></span></td>
<td class=""><span class="merged" id="all.2Cqr89" title="原文 : RequireClientCert is a boolean flag indicating whether the client certificate will be authenticated by the server (two-way SSL) when configuring component over REST to use SSL. + If not set the default is false ">RequireClientCertは、クライアント証明書が取得されるかどうかを示すブール・フラグです<br>SSLを使用するようにREST上でコンポーネントを構成するときにサーバー(双方向SSL)によって認証されます。+<br>設定しない場合、デフォルトはfalseです<br></span></td>
<td class=""><span class="merged" id="all.q9cn0.22"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.178"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.29" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_scalingspec"><span class="merged" id="all.14uAxY"  title="原文: ScalingSpec">ScalingSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.2YcDAs" title="原文 : ScalingSpec is the configuration to control safe scaling.">ScalingSpecは、安全なスケーリングを制御する構成です。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.30"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.30"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.30"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.30"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3NXaiv"  title="原文: policy"><code>policy</code></span></td>
<td class=""><span class="merged" id="all.49SfOl.spl1" title="原文 : ScalingPolicy describes how the replicas of the deployment will be scaled.">ScalingPolicyは、デプロイメントのレプリカのスケーリング方法を示します。</span> <span class="merged" id="all.49SfOl.spl2" title="原文 : The default if not specified is based upon the value of the StorageEnabled field.">指定しない場合のデフォルトは、StorageEnabledフィールドの値に基づきます。</span> <span class="merged" id="all.49SfOl.spl3" title="原文 : If StorageEnabled field is not specified or is true the default scaling will be safe, if StorageEnabled is set to false the default scaling will be parallel.">StorageEnabledフィールドが指定されていないか、trueの場合、デフォルトのスケーリングは安全です。StorageEnabledがfalseに設定されている場合、デフォルトのスケーリングはパラレルになります。</span> </td>
<td class=""><span class="merged" id="all.3aTqB5"  title="原文: *ScalingPolicy"><code>*ScalingPolicy</code></span></td>
<td class=""><span class="merged" id="all.njUKu.179"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ctnoL.1"  title="原文: probe"><code>probe</code></span></td>
<td class=""><span class="merged" id="all.2aZXNh.spl1" title="原文 : The probe to use to determine whether a deployment is Phase HA.">デプロイメントがフェーズHAかどうかを判断するために使用するプローブ。</span> <span class="merged" id="all.2aZXNh.spl2" title="原文 : If not set the default handler will be used.">設定されていない場合、デフォルト・ハンドラが使用されます。</span> <span class="merged" id="all.2aZXNh.spl3" title="原文 : In most use-cases the default handler would suffice but in advanced use-cases where the application code has a different concept of Phase HA to just checking Coherence services then a different handler may be specified.">ほとんどのユースケースでは、デフォルト・ハンドラは十分ですが、高度なユースケースでは、アプリケーション・コードにフェーズHAの異なる概念があり、Coherenceサービスをチェックするだけで、別のハンドラを指定できます。</span> </td>
<td class=""><span class="merged" id="all.3aDXpb.1"  title="原文: *Probe"><code>*<router-link @click.native="this.scrollFix('#_probe')" to="#_probe">Probe</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.180"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.30" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_secretvolumespec"><span class="merged" id="all.2shwm"  title="原文: SecretVolumeSpec">SecretVolumeSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.tPNp1" title="原文 : SecretVolumeSpec represents a Secret that will be added to the deployment’s Pods as an additional Volume and as a VolumeMount in the containers. see: Add Secret Volumes">SecretVolumeSpecは、追加のボリュームとしてデプロイメント・ポッドに追加され、コンテナ内のVolumeMountとして追加されるシークレットを表します。<br>参照: <router-link @click.native="this.scrollFix('#misc_pod_settings/020_secret_volumes.adoc')" to="#misc_pod_settings/020_secret_volumes.adoc">シークレット・ボリュームの追加</router-link></span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.31"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.31"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.31"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.31"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.6"  title="原文: name"><code>name</code></span></td>
<td class=""><span class="merged" id="all.1pxTLq.spl1" title="原文 : The name of the Secret to mount.">マウントするシークレットの名前。</span> <span class="merged" id="all.1pxTLq.spl2" title="原文 : This will also be used as the name of the Volume added to the Pod if the VolumeName field is not set.">これは、VolumeNameフィールドが設定されていない場合、ポッドに追加されたボリュームの名前としても使用されます。</span> </td>
<td class=""><span class="merged" id="all.W18FC.14"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.11"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZMeSS.1"  title="原文: mountPath"><code>mountPath</code></span></td>
<td class=""><span class="merged" id="all.2cupoy.1.spl1" title="原文 : Path within the container at which the volume should be mounted.">ボリュームをマウントするコンテナ内のパス。</span> <span class="merged" id="all.2cupoy.1.spl2" title="原文 : Must not contain &apos;:&apos;.">':'を含めることはできません。</span> </td>
<td class=""><span class="merged" id="all.W18FC.15"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.12"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yWp2V.1"  title="原文: volumeName"><code>volumeName</code></span></td>
<td class=""><span class="merged" id="all.3Le7a9.spl1" title="原文 : The optional name to use for the Volume added to the Pod.">ポッドに追加されたボリュームに使用するオプションの名前。</span> <span class="merged" id="all.3Le7a9.spl2" title="原文 : If not set, the Secret name will be used as the VolumeName.">設定しない場合、シークレット名はVolumeNameとして使用されます。</span> </td>
<td class=""><span class="merged" id="all.W18FC.16"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.181"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3wva11.1"  title="原文: readOnly"><code>readOnly</code></span></td>
<td class=""><span class="merged" id="all.2zWRdn.1.spl1" title="原文 : Mounted read-only if true, read-write otherwise (false or unspecified).">trueの場合は読取り専用でマウントされ、それ以外の場合は読取り/書込み(falseまたは未指定)されます。</span> <span class="merged" id="all.2zWRdn.1.spl2"  title="原文:: Defaults to false.">デフォルトはfalseです。</span> </td>
<td class=""><span class="merged" id="all.2Sqi2i.1"  title="原文: bool"><code>bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.182"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.uxrbO.1"  title="原文: subPath"><code>subPath</code></span></td>
<td class=""><span class="merged" id="all.18jA47.1.spl1" title="原文 : Path within the volume from which the container’s volume should be mounted.">コンテナのボリュームをマウントするボリューム内のパス。</span> <span class="merged" id="all.18jA47.1.spl2" title="原文 : Defaults to &quot;&quot; (volume’s root).">デフォルトは"" (ボリュームのルート)です。</span> </td>
<td class=""><span class="merged" id="all.W18FC.17"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.183"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Ps765.1"  title="原文: mountPropagation"><code>mountPropagation</code></span></td>
<td class=""><span class="merged" id="all.3fjZ9a.1.spl1" title="原文 : mountPropagation determines how mounts are propagated from the host to container and the other way around.">mountPropagationは、ホストからコンテナへのマウントの伝播方法と、その逆方向を決定します。</span> <span class="merged" id="all.3fjZ9a.1.spl2" title="原文 : When not set, MountPropagationNone is used.">設定しない場合、MountPropagationNoneが使用されます。</span> </td>
<td class=""><span class="merged" id="all.1ePFZ9.1"  title="原文: *https://pkg.go.dev/k8s.io/api/core/v1#MountPropagationMode"><code>*<a href="https://pkg.go.dev/k8s.io/api/core/v1#MountPropagationMode" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#MountPropagationMode</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.184"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XcR2k.1"  title="原文: subPathExpr"><code>subPathExpr</code></span></td>
<td class=""><span class="merged" id="all.37dv3Z.1.spl1" title="原文 : Expanded path within the volume from which the container’s volume should be mounted.">コンテナのボリュームをマウントするボリューム内の拡張パス。</span> <span class="merged" id="all.37dv3Z.1.spl2" title="原文 : Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container’s environment.">SubPathと同様に動作しますが、環境変数参照$(VAR_NAME)はコンテナの環境を使用して展開されます。</span> <span class="merged" id="all.37dv3Z.1.spl3" title="原文 : Defaults to &quot;&quot; (volume’s root).">デフォルトは"" (ボリュームのルート)です。</span> <span class="merged" id="all.37dv3Z.1.spl4" title="原文 : SubPathExpr and SubPath are mutually exclusive.">SubPathExprとSubPathは相互に排他的です。</span> </td>
<td class=""><span class="merged" id="all.W18FC.18"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.185"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WuGEZ.2"  title="原文: items"><code>items</code></span></td>
<td class=""><span class="merged" id="all.3YHKkj.spl1" title="原文 : If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value.">指定しない場合、参照されるシークレットのデータ・フィールドの各キーと値のペアは、名前がキーでコンテンツが値であるファイルとしてボリュームに投影されます。</span> <span class="merged" id="all.3YHKkj.spl2" title="原文 : If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present.">指定した場合、リストされたキーは指定されたパスに投影され、リストされていないキーは表示されません。</span> <span class="merged" id="all.3YHKkj.spl3" title="原文 : If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional.">シークレットに存在しないキーが指定されている場合、ボリュームの設定はオプションとしてマークされていないかぎりエラーになります。</span> <span class="merged" id="all.3YHKkj.spl4" title="原文 : Paths must be relative and may not contain the &apos;..&apos; path or start with &apos;..&apos;.">パスは相対パスで、'..'パスを含めることも、'..'で始めることもできません。</span> </td>
<td class=""><span class="merged" id="all.1g8dx5.1"  title="原文: []corev1.KeyToPath"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#keytopath-v1-core" id="" target="_blank" >corev1.KeyToPath</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.186"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hViGd.1"  title="原文: defaultMode"><code>defaultMode</code></span></td>
<td class=""><span class="merged" id="all.2c3pwb.1.spl1" title="原文 : Optional: mode bits to use on created files by default.">オプション: 作成されたファイルで使用するビットをデフォルトでモードにします。</span> <span class="merged" id="all.2c3pwb.1.spl2" title="原文 : Must be a value between 0 and 0777.">0から0777の値である必要があります。</span> <span class="merged" id="all.2c3pwb.1.spl3"  title="原文:: Defaults to 0644.">デフォルトは0644です。</span> <span class="merged" id="all.2c3pwb.1.spl4" title="原文 : Directories within the path are not affected by this setting.">パス内のディレクトリはこの設定の影響を受けません。</span> <span class="merged" id="all.2c3pwb.1.spl5" title="原文 : This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.">これは、fsGroupなどのファイル・モードに影響するほかのオプションと競合する場合があり、結果はほかのモード・ビット・セットになる可能性があります。</span> </td>
<td class=""><span class="merged" id="all.C5sgP.15"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.187"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.1"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.6vRTB" title="原文 : Specify whether the Secret or its keys must be defined">シークレットまたはそのキーを定義する必要があるかどうかを指定</span></td>
<td class=""><span class="merged" id="all.q9cn0.23"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.188"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.31" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_servicemonitorspec"><span class="merged" id="all.2S9Szv"  title="原文: ServiceMonitorSpec">ServiceMonitorSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.4bnwN9" title="原文 : ServiceMonitorSpec the ServiceMonitor spec for a port service.">ポート・サービスのServiceMonitor仕様をServiceMonitorSpecします。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.32"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.32"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.32"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.32"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.4"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.RO6Bw.spl1" title="原文 : Enabled is a flag to enable or disable creation of a Prometheus ServiceMonitor for a port.">Enabledは、ポートに対するPrometheus ServiceMonitorの作成を有効または無効にするフラグです。</span> <span class="merged" id="all.RO6Bw.spl2" title="原文 : If Prometheus ServiceMonitor CR is not installed no ServiceMonitor then even if this flag is true no ServiceMonitor will be created.">Prometheus ServiceMonitor CRがインストールされていない場合、ServiceMonitorはインストールされません。このフラグがtrueの場合でも、ServiceMonitorは作成されません。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.24"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.189"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Dbs6Z.3"  title="原文: labels"><code>labels</code></span></td>
<td class=""><span class="merged" id="all.4KLQrR.spl1" title="原文 : Additional labels to add to the ServiceMonitor.">ServiceMonitorに追加する追加のラベル。</span> <span class="merged" id="all.4KLQrR.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/">詳細情報: <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/" id="" target="_blank" >https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/</a></span> </td>
<td class=""><span class="merged" id="all.6My6t.7"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.190"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2GRg4F"  title="原文: jobLabel"><code>jobLabel</code></span></td>
<td class=""><span class="merged" id="all.NVIlv.spl1" title="原文 : The label to use to retrieve the job name from.">ジョブ名の取得に使用するラベル。</span> <span class="merged" id="all.NVIlv.spl2" title="原文 : See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec"><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.W18FC.19"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.191"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ztHUZ"  title="原文: targetLabels"><code>targetLabels</code></span></td>
<td class=""><span class="merged" id="all.L0mcg.spl1" title="原文 : TargetLabels transfers labels on the Kubernetes Service onto the target.">TargetLabelsは、Kubernetesサービスのラベルをターゲットに転送します。</span> <span class="merged" id="all.L0mcg.spl2" title="原文 : See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec"><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.rXwhA.8"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.192"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2bXrDK"  title="原文: podTargetLabels"><code>podTargetLabels</code></span></td>
<td class=""><span class="merged" id="all.1vjOyb.spl1" title="原文 : PodTargetLabels transfers labels on the Kubernetes Pod onto the target.">PodTargetLabelsは、Kubernetesポッドのラベルをターゲットに転送します。</span> <span class="merged" id="all.1vjOyb.spl2" title="原文 : See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec"><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.rXwhA.9"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.193"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.33ZEoc"  title="原文: sampleLimit"><code>sampleLimit</code></span></td>
<td class=""><span class="merged" id="all.2c56yY.spl1" title="原文 : SampleLimit defines per-scrape limit on number of scraped samples that will be accepted.">SampleLimitは、受け入れられるスクレイプされたサンプルの数に対するスクレイプごとの制限を定義します。</span> <span class="merged" id="all.2c56yY.spl2" title="原文 : See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec"><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.1N9Cn0"  title="原文: uint64"><code>uint64</code></span></td>
<td class=""><span class="merged" id="all.njUKu.194"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3acZhn"  title="原文: path"><code>path</code></span></td>
<td class=""><span class="merged" id="all.1nlAOx.spl1" title="原文 : HTTP path to scrape for metrics.">メトリクスのスクレイプへのHTTPパス。</span> <span class="merged" id="all.1nlAOx.spl2" title="原文 : See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint"><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.W18FC.20"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.195"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1LRcmy"  title="原文: scheme"><code>scheme</code></span></td>
<td class=""><span class="merged" id="all.1R0aUU.spl1" title="原文 : HTTP scheme to use for scraping.">スクレイピングに使用するHTTPスキーム。</span> <span class="merged" id="all.1R0aUU.spl2" title="原文 : See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint"><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.W18FC.21"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.196"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4FJaVQ"  title="原文: params"><code>params</code></span></td>
<td class=""><span class="merged" id="all.Uq0CS" title="原文 : Optional HTTP URL parameters See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint">オプションのHTTP URLパラメータ<a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span></td>
<td class=""><span class="merged" id="all.4gUs8B"  title="原文: map[string][]string"><code>map[string][]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.197"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.cdWjK"  title="原文: interval"><code>interval</code></span></td>
<td class=""><span class="merged" id="all.1zyUqL" title="原文 : Interval at which metrics should be scraped See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint">メトリクスを廃棄する間隔(<a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照)</span></td>
<td class=""><span class="merged" id="all.BjwP9"  title="原文: monitoringv1.Duration"><code>monitoringv1.Duration</code></span></td>
<td class=""><span class="merged" id="all.njUKu.198"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4OK5JD"  title="原文: scrapeTimeout"><code>scrapeTimeout</code></span></td>
<td class=""><span class="merged" id="all.43ntvt" title="原文 : Timeout after which the scrape is ended See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint">スクレイプが終了するまでのタイムアウト<a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span></td>
<td class=""><span class="merged" id="all.BjwP9.1"  title="原文: monitoringv1.Duration"><code>monitoringv1.Duration</code></span></td>
<td class=""><span class="merged" id="all.njUKu.199"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1cQ02l"  title="原文: tlsConfig"><code>tlsConfig</code></span></td>
<td class=""><span class="merged" id="all.2nG066" title="原文 : TLS configuration to use when scraping the endpoint See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint">エンドポイントをスクレイピングする際に使用するTLS構成。<a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span></td>
<td class=""><span class="merged" id="all.3fuOE5"  title="原文: *monitoringv1.TLSConfig"><code>*monitoringv1.TLSConfig</code></span></td>
<td class=""><span class="merged" id="all.njUKu.200"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.EE3Jk"  title="原文: bearerTokenFile"><code>bearerTokenFile</code></span></td>
<td class=""><span class="merged" id="all.1x9Ebl.spl1" title="原文 : File to read bearer token for scraping targets.">スクレイピング・ターゲットの負担者トークンを読み取るファイル。</span> <span class="merged" id="all.1x9Ebl.spl2" title="原文 : See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint"><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.W18FC.22"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.201"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2nroIb"  title="原文: bearerTokenSecret"><code>bearerTokenSecret</code></span></td>
<td class=""><span class="merged" id="all.4Otqug.spl1" title="原文 : Secret to mount to read bearer token for scraping targets.">スクレイピング・ターゲットのベアラー・トークンを読み取るためにマウントするシークレット。</span> <span class="merged" id="all.4Otqug.spl2" title="原文 : The secret needs to be in the same namespace as the service monitor and accessible by the Prometheus Operator.">シークレットは、サービス・モニターと同じネームスペースにあり、Prometheusオペレータからアクセス可能である必要があります。</span> <span class="merged" id="all.4Otqug.spl3" title="原文 : See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint"><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.1si9Zf"  title="原文: corev1.SecretKeySelector"><code><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#secretkeyselector-v1-core" id="" target="_blank" >corev1.SecretKeySelector</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.202"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nppaN"  title="原文: honorLabels"><code>honorLabels</code></span></td>
<td class=""><span class="merged" id="all.4Nbn2B.spl1" title="原文 : HonorLabels chooses the metric labels on collisions with target labels.">HonorLabelsは、ターゲット・ラベルとの衝突のメトリック・ラベルを選択します。</span> <span class="merged" id="all.4Nbn2B.spl2" title="原文 : See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint"><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.2Sqi2i.2"  title="原文: bool"><code>bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.203"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2GMlFL"  title="原文: honorTimestamps"><code>honorTimestamps</code></span></td>
<td class=""><span class="merged" id="all.11wmDe.spl1" title="原文 : HonorTimestamps controls whether Prometheus respects the timestamps present in scraped data.">HonorTimestampsは、Prometheusが、スクレイプされたデータに存在するタイムスタンプを尊重するかどうかを制御します。</span> <span class="merged" id="all.11wmDe.spl2" title="原文 : See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint"><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.q9cn0.25"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.204"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WmXmB"  title="原文: basicAuth"><code>basicAuth</code></span></td>
<td class=""><span class="merged" id="all.1PWORt" title="原文 : BasicAuth allow an endpoint to authenticate over basic authentication More info: https://prometheus.io/docs/operating/configuration/#endpoints See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint">BasicAuthでは、エンドポイントが基本認証で認証できるようにします 詳細情報: <a href="https://prometheus.io/docs/operating/configuration/#endpoints" id="" target="_blank" >https://prometheus.io/docs/operating/configuration/#endpoints</a> <a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span></td>
<td class=""><span class="merged" id="all.OoNvH"  title="原文: *monitoringv1.BasicAuth"><code>*monitoringv1.BasicAuth</code></span></td>
<td class=""><span class="merged" id="all.njUKu.205"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.sFTbd"  title="原文: metricRelabelings"><code>metricRelabelings</code></span></td>
<td class=""><span class="merged" id="all.7UHlR.spl1" title="原文 : MetricRelabelings to apply to samples before ingestion.">取込み前にサンプルに適用するMetricRelabelings。</span> <span class="merged" id="all.7UHlR.spl2" title="原文 : See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint"><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.Uw8bD"  title="原文: []*monitoringv1.RelabelConfig"><code>[]*monitoringv1.RelabelConfig</code></span></td>
<td class=""><span class="merged" id="all.njUKu.206"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hm97K"  title="原文: relabelings"><code>relabelings</code></span></td>
<td class=""><span class="merged" id="all.2wJTmi.spl1" title="原文 : Relabelings to apply to samples before scraping.">スクレイピング前にサンプルに適用するラベル変更。</span> <span class="merged" id="all.2wJTmi.spl2" title="原文 : More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint">詳細情報: <a href="https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config" id="" target="_blank" >https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config</a> <a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.Uw8bD.1"  title="原文: []*monitoringv1.RelabelConfig"><code>[]*monitoringv1.RelabelConfig</code></span></td>
<td class=""><span class="merged" id="all.njUKu.207"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Tmw7K"  title="原文: proxyURL"><code>proxyURL</code></span></td>
<td class=""><span class="merged" id="all.4HeJEj.spl1" title="原文 : ProxyURL eg http://proxyserver:2195 Directs scrapes to proxy through this endpoint.">ProxyURL例:<a href="http://proxyserver:2195" id="" target="_blank" >http://proxyserver:2195</a>このエンドポイントを介してプロキシに廃棄を指示します。</span> <span class="merged" id="all.4HeJEj.spl2" title="原文 : See https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint"><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint" id="" target="_blank" >https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.43"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.208"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.32" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_servicespec"><span class="merged" id="all.2WEu4o"  title="原文: ServiceSpec">ServiceSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.3IatJx" title="原文 : ServiceSpec defines the settings for a Service">ServiceSpecは、サービスの設定を定義</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.33"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.33"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.33"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.33"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.5"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.4OOc8O" title="原文 : Enabled controls whether to create the service yaml or not">Enabledは、サービスyamlを作成するかどうかを制御</span></td>
<td class=""><span class="merged" id="all.q9cn0.26"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.209"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.7"  title="原文: name"><code>name</code></span></td>
<td class=""><span class="merged" id="all.4RJCwK" title="原文 : An optional name to use to override the generated service name.">生成されたサービス名をオーバーライドするために使用するオプションの名前。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.44"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.210"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30SaAJ"  title="原文: portName"><code>portName</code></span></td>
<td class=""><span class="merged" id="all.3o8LMw" title="原文 : An optional name to use to override the port name.">ポート名をオーバーライドするために使用するオプションの名前。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.45"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.211"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.3"  title="原文: port"><code>port</code></span></td>
<td class=""><span class="merged" id="all.3sQs2k" title="原文 : The service port value">サービス・ポート値</span></td>
<td class=""><span class="merged" id="all.C5sgP.16"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.212"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2SYAnU.1"  title="原文: type"><code>type</code></span></td>
<td class=""><span class="merged" id="all.1FPe7T" title="原文 : Kind is the K8s service type (typically ClusterIP or LoadBalancer) The default is &quot;ClusterIP&quot;.">K8sサービス・タイプ(通常はClusterIPまたはLoadBalancer)は、デフォルトは"ClusterIP"です。</span></td>
<td class=""><span class="merged" id="all.44Oq0i"  title="原文: *https://pkg.go.dev/k8s.io/api/core/v1#ServiceType"><code>*<a href="https://pkg.go.dev/k8s.io/api/core/v1#ServiceType" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#ServiceType</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.213"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3nrevq"  title="原文: externalIPs"><code>externalIPs</code></span></td>
<td class=""><span class="merged" id="all.4FTeFk.spl1" title="原文 : externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.">externalIPsは、クラスタ内のノードがこのサービスのトラフィックも受け入れるIPアドレスのリストです。</span> <span class="merged" id="all.4FTeFk.spl2" title="原文 : These IPs are not managed by Kubernetes.">これらのIPはKubernetesによって管理されません。</span> <span class="merged" id="all.4FTeFk.spl3" title="原文 : The user is responsible for ensuring that traffic arrives at a node with this IP.">ユーザーは、トラフィックがこのIPを持つノードに確実にすることになります。</span> <span class="merged" id="all.4FTeFk.spl4" title="原文 : A common example is external load-balancers that are not part of the Kubernetes system.">一般的な例は、Kubernetesシステムの一部ではない外部ロード・バランサです。</span> </td>
<td class=""><span class="merged" id="all.rXwhA.10"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.214"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3X9Bve"  title="原文: clusterIP"><code>clusterIP</code></span></td>
<td class=""><span class="merged" id="all.3QFcN0.spl1" title="原文 : clusterIP is the IP address of the service and is usually assigned randomly by the master.">clusterIPはサービスのIPアドレスで、通常はマスターによってランダムに割り当てられます。</span> <span class="merged" id="all.3QFcN0.spl2" title="原文 : If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail.">アドレスが手動で指定され、ほかのアドレスで使用されていない場合、そのアドレスはサービスに割り当てられます。そうしないと、サービスの作成は失敗します。</span> <span class="merged" id="all.3QFcN0.spl3" title="原文 : This field can not be changed through updates.">このフィールドは更新によって変更できません。</span> <span class="merged" id="all.3QFcN0.spl4" title="原文 : Valid values are &quot;None&quot;, empty string (&quot;&quot;), or a valid IP address.">有効な値は、「なし」、空の文字列("")または有効なIPアドレスです。</span> <span class="merged" id="all.3QFcN0.spl5" title="原文 : &quot;None&quot; can be specified for headless services when proxying is not required.">プロキシが不要な場合、ヘッドレス・サービスに「なし」を指定できます。</span> <span class="merged" id="all.3QFcN0.spl6" title="原文 : Only applies to types ClusterIP, NodePort, and LoadBalancer.">タイプClusterIP、NodePortおよびLoadBalancerにのみ適用されます。</span> <span class="merged" id="all.3QFcN0.spl7" title="原文 : Ignored if type is ExternalName.">タイプがExternalNameの場合は無視されます。</span> <span class="merged" id="all.3QFcN0.spl8" title="原文 : More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies">詳細情報: <a href="https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies" id="" target="_blank" >https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies</a></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.46"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.215"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XPGUA"  title="原文: clusterIPs"><code>clusterIPs</code></span></td>
<td class=""><span class="merged" id="all.fdvKT.spl1" title="原文 : ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.">ClusterIPsは、このサービスに割り当てられたIPアドレスのリストであり、通常はランダムに割り当てられます。</span> <span class="merged" id="all.fdvKT.spl2" title="原文 : If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail.">アドレスが手動で指定され、(システム構成に従って)範囲内に指定され、使用されていない場合、そのアドレスはサービスに割り当てられます。そうしないと、サービスの作成は失敗します。</span> <span class="merged" id="all.fdvKT.spl3" title="原文 : This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).">このフィールドは、タイプ・フィールドがExternalNameにも変更される場合(このフィールドを空にする必要がある)、またはタイプ・フィールドがExternalNameから変更される場合(このフィールドを前述のようにオプションで指定する場合)以外は、更新によって変更できません。</span> <span class="merged" id="all.fdvKT.spl4" title="原文 : Valid values are &quot;None&quot;, empty string (&quot;&quot;), or a valid IP address.">有効な値は、「なし」、空の文字列("")または有効なIPアドレスです。</span> <span class="merged" id="all.fdvKT.spl5" title="原文 : Setting this to &quot;None&quot; makes a &quot;headless service&quot; (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.">これを「なし」に設定するとヘッドレス・サービス(仮想IPなし)になります。これは、ダイレクト・エンドポイント接続が優先され、プロキシが不要な場合に便利です。</span> <span class="merged" id="all.fdvKT.spl6" title="原文 : Only applies to types ClusterIP, NodePort, and LoadBalancer.">タイプClusterIP、NodePortおよびLoadBalancerにのみ適用されます。</span> <span class="merged" id="all.fdvKT.spl7" title="原文 : If this field is specified when creating a Service of type ExternalName, creation will fail.">タイプExternalNameのサービスの作成時にこのフィールドを指定した場合、作成は失敗します。</span> <span class="merged" id="all.fdvKT.spl8" title="原文 : This field will be wiped when updating a Service to type ExternalName.">このフィールドは、サービスをタイプExternalNameに更新するときに消去されます。</span> <span class="merged" id="all.fdvKT.spl9" title="原文 : If this field is not specified, it will be initialized from the clusterIP field.">このフィールドを指定しない場合、clusterIPフィールドから初期化されます。</span> <span class="merged" id="all.fdvKT.spl10" title="原文 : If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.">このフィールドを指定する場合、クライアントはclusterIPs[0]およびclusterIPの値が同じであることを確認する必要があります。</span> <span class="merged" id="all.fdvKT.spl11" title="原文 :  Unless the &quot;IPv6DualStack&quot; feature gate is enabled, this field is limited to one value, which must be the same as the clusterIP field."><br> <br> "IPv6DualStack"機能ゲートが有効になっていない場合、このフィールドは1つの限定され、clusterIPフィールドと同じである必要があります。</span> <span class="merged" id="all.fdvKT.spl12" title="原文 : If the feature gate is enabled, this field may hold a maximum of two entries (dual-stack IPs, in either order).">機能ゲートが有効な場合、このフィールドには最大2つのエントリ(デュアル・スタックIPの順序)が保持されます。</span> <span class="merged" id="all.fdvKT.spl13" title="原文 : These IPs must correspond to the values of the ipFamilies field.">これらのIPは、ipFamiliesフィールドの値に対応している必要があります。</span> <span class="merged" id="all.fdvKT.spl14" title="原文 : Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.">clusterIPsとipFamiliesの両方は、ipFamilyPolicyフィールドによって制御されます。</span> <span class="merged" id="all.fdvKT.spl15" title="原文 : More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies">詳細情報: <a href="https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies" id="" target="_blank" >https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies</a></span> </td>
<td class=""><span class="merged" id="all.rXwhA.11"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.216"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2JEMSo"  title="原文: loadBalancerIP"><code>loadBalancerIP</code></span></td>
<td class=""><span class="merged" id="all.3ndEHX" title="原文 : LoadBalancerIP is the IP address of the load balancer">LoadBalancerIPは、ロード・バランサのIPアドレスです</span></td>
<td class=""><span class="merged" id="all.2JXhOu.47"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.217"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Dbs6Z.4"  title="原文: labels"><code>labels</code></span></td>
<td class=""><span class="merged" id="all.3s8jCm.spl1" title="原文 : The extra labels to add to the service.">サービスに追加する追加ラベル。</span> <span class="merged" id="all.3s8jCm.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/">詳細情報: <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/" id="" target="_blank" >https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/</a></span> </td>
<td class=""><span class="merged" id="all.6My6t.8"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.218"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uY9DD.3"  title="原文: annotations"><code>annotations</code></span></td>
<td class=""><span class="merged" id="all.MQHKW" title="原文 : Annotations is free form yaml that will be added to the service annotations">注釈はフリー・フォームyamlで、サービス注釈に追加されます</span></td>
<td class=""><span class="merged" id="all.6My6t.9"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.219"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1K2eTw"  title="原文: sessionAffinity"><code>sessionAffinity</code></span></td>
<td class=""><span class="merged" id="all.4HzEoK.spl1" title="原文 : Supports &quot;ClientIP&quot; and &quot;None&quot;.">"ClientIP"および"None"がサポートされています。</span> <span class="merged" id="all.4HzEoK.spl2" title="原文 : Used to maintain session affinity.">セッション・アフィニティを維持するために使用します。</span> <span class="merged" id="all.4HzEoK.spl3" title="原文 : Enable client IP based session affinity.">クライアントIPベースのセッションアフィニティを有効にします。</span> <span class="merged" id="all.4HzEoK.spl4" title="原文 : Must be ClientIP or None.">ClientIPまたはなしである必要があります。</span> <span class="merged" id="all.4HzEoK.spl5"  title="原文:: Defaults to None.">デフォルトはNoneです。</span> <span class="merged" id="all.4HzEoK.spl6" title="原文 : More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies">詳細情報: <a href="https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies" id="" target="_blank" >https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies</a></span> </td>
<td class=""><span class="merged" id="all.22L7lO"  title="原文: *https://pkg.go.dev/k8s.io/api/core/v1#ServiceAffinity"><code>*<a href="https://pkg.go.dev/k8s.io/api/core/v1#ServiceAffinity" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#ServiceAffinity</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.220"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3hQeLO"  title="原文: loadBalancerSourceRanges"><code>loadBalancerSourceRanges</code></span></td>
<td class=""><span class="merged" id="all.2b3wMI.spl1" title="原文 : If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs.">プラットフォームによって指定およびサポートされている場合、これにより、クラウド・プロバイダのロード・バランサを介したトラフィックが指定のクライアントIPに制限されます。</span> <span class="merged" id="all.2b3wMI.spl2" title="原文 : This field will be ignored if the cloud-provider does not support the feature.&quot;">クラウド・プロバイダがこの機能をサポートしていない場合、このフィールドは無視されます。</span> </td>
<td class=""><span class="merged" id="all.rXwhA.12"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.221"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3XGeGz"  title="原文: externalName"><code>externalName</code></span></td>
<td class=""><span class="merged" id="all.LMWBy.spl1" title="原文 : externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service.">externalNameは、このサービスのCNAMEレコードとしてkubednsまたは同等のものが返す外部参照です。</span> <span class="merged" id="all.LMWBy.spl2" title="原文 : No proxying will be involved.">プロキシは関係ありません。</span> <span class="merged" id="all.LMWBy.spl3" title="原文 : Must be a valid RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires Kind to be ExternalName.">有効なRFC-1123ホスト名(<a href="https://tools.ietf.org/html/rfc1123" id="" target="_blank" >https://tools.ietf.org/html/rfc1123</a>)であり、KindはExternalNameである必要があります。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.48"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.222"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.39l4ro"  title="原文: externalTrafficPolicy"><code>externalTrafficPolicy</code></span></td>
<td class=""><span class="merged" id="all.HMXZL.spl1" title="原文 : externalTrafficPolicy denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints.">externalTrafficPolicyは、このサービスが外部トラフィックをノード・ローカル・エンドポイントまたはクラスタ全体のエンドポイントにルーティングするかどうかを示します。</span> <span class="merged" id="all.HMXZL.spl2" title="原文 : &quot;Local&quot; preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading.">「ローカル」では、クライアント・ソースIPが保持され、LoadBalancerおよびNodeportタイプのサービスの2番目のホップが回避されますが、不均衡なトラフィックが分散する可能性があります。</span> <span class="merged" id="all.HMXZL.spl3" title="原文 : &quot;Cluster&quot; obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading.">「クラスタ」はクライアント・ソースIPを隠し、別のノードへの2回目のホップを引き起こす可能性がありますが、全体的な負荷分散は良好です。</span> </td>
<td class=""><span class="merged" id="all.3TILwI"  title="原文: *https://pkg.go.dev/k8s.io/api/core/v1#ServiceExternalTrafficPolicyType"><code>*<a href="https://pkg.go.dev/k8s.io/api/core/v1#ServiceExternalTrafficPolicyType" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#ServiceExternalTrafficPolicyType</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.223"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.11URVe"  title="原文: healthCheckNodePort"><code>healthCheckNodePort</code></span></td>
<td class=""><span class="merged" id="all.1JNgdN.spl1" title="原文 : healthCheckNodePort specifies the healthcheck nodePort for the service.">healthCheckNodePortは、サービスのヘルス・チェックnodePortを指定します。</span> <span class="merged" id="all.1JNgdN.spl2" title="原文 : If not specified, HealthCheckNodePort is created by the service api backend with the allocated nodePort.">指定しない場合、HealthCheckNodePortは、割り当てられたnodePortを使用してサービスAPIバックエンドによって作成されます。</span> <span class="merged" id="all.1JNgdN.spl3" title="原文 : Will use user-specified nodePort value if specified by the client.">クライアントによってされている場合、ユーザー指定のnodePort値を使用します。</span> <span class="merged" id="all.1JNgdN.spl4" title="原文 : Only effects when Kind is set to LoadBalancer and ExternalTrafficPolicy is set to Local.">KindがLoadBalancerに設定され、ExternalTrafficPolicyがLocalに設定されている場合にのみ有効です。</span> </td>
<td class=""><span class="merged" id="all.C5sgP.17"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.224"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2YOyFT"  title="原文: publishNotReadyAddresses"><code>publishNotReadyAddresses</code></span></td>
<td class=""><span class="merged" id="all.2LicmE.spl1" title="原文 : publishNotReadyAddresses, when set to true, indicates that DNS implementations must publish the notReadyAddresses of subsets for the Endpoints associated with the Service.">publishNotReadyAddressesがtrueに設定されている場合、DNS実装がサービスに関連付けられたエンドポイントのサブセットのnotReadyAddressesを公開する必要があることを示します。</span> <span class="merged" id="all.2LicmE.spl2"  title="原文: The default value is false.">デフォルト値はfalseです。</span> <span class="merged" id="all.2LicmE.spl3" title="原文 : The primary use case for setting this field is to use a StatefulSet’s Headless Service to propagate SRV records for its Pods without respect to their readiness for purpose of peer discovery.">このフィールドを設定する主なユース・ケースは、StatefulSetのヘッドレス・サービスを使用して、ピア検出のためのレディネスを考慮せずに、ポッドのSRVレコードを伝播することです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.27"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.225"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2y4g10"  title="原文: sessionAffinityConfig"><code>sessionAffinityConfig</code></span></td>
<td class=""><span class="merged" id="all.UOXDn" title="原文 : sessionAffinityConfig contains the configurations of session affinity.">sessionAffinityConfigには、セッション・アフィニティの構成が含まれます。</span></td>
<td class=""><span class="merged" id="all.1iCDkJ"  title="原文: *corev1.SessionAffinityConfig"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#sessionaffinityconfig-v1-core" id="" target="_blank" >corev1.SessionAffinityConfig</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.226"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1DQMR1"  title="原文: ipFamilies"><code>ipFamilies</code></span></td>
<td class=""><span class="merged" id="all.MU7Qf.spl1" title="原文 : IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service, and is gated by the &quot;IPv6DualStack&quot; feature gate.">IPFamiliesは、IPファミリのリストです。(例、IPv4、IPv6)はこのサービスに割り当てられ、「IPv6DualStack」機能ゲートによってゲート付けられます。</span> <span class="merged" id="all.MU7Qf.spl2" title="原文 : This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field.">通常、このフィールドはクラスタ構成およびipFamilyPolicyフィールドに基づいて自動的に割り当てられます。</span> <span class="merged" id="all.MU7Qf.spl3" title="原文 : If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail.">このフィールドを手動で指定すると、リクエストされたファミリがクラスタで使用可能になり、ipFamilyPolicyによって許可されるため、サービスの作成は失敗します。</span> <span class="merged" id="all.MU7Qf.spl4" title="原文 : This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service.">このフィールドは条件に応じて変更可能です: セカンダリIPファミリを追加または削除できますが、サービスのプライマリIPファミリを変更することはできません。</span> <span class="merged" id="all.MU7Qf.spl5" title="原文 : Valid values are &quot;IPv4&quot; and &quot;IPv6&quot;.">有効な値は、"IPv4"および"IPv6"です。</span> <span class="merged" id="all.MU7Qf.spl6" title="原文 : This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to &quot;headless&quot; services.">このフィールドは、ClusterIP、NodePortおよびLoadBalancerタイプのサービスにのみ適用され、ヘッドレス・サービスに適用されます。</span> <span class="merged" id="all.MU7Qf.spl7" title="原文 : This field will be wiped when updating a Service to type ExternalName.">このフィールドは、サービスをタイプExternalNameに更新するときに消去されます。</span> <span class="merged" id="all.MU7Qf.spl8" title="原文 :  This field may hold a maximum of two entries (dual-stack families, in either order)."><br> <br> このフィールドには、最大2つのエントリ(二重スタック・ファミリのいずれかの順序)を保持できます。</span> <span class="merged" id="all.MU7Qf.spl9" title="原文 : These families must correspond to the values of the clusterIPs field, if specified.">これらのファミリは、clusterIPsフィールドの値(指定されている場合)に対応している必要があります。</span> <span class="merged" id="all.MU7Qf.spl10" title="原文 : Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.">clusterIPsとipFamiliesの両方は、ipFamilyPolicyフィールドによって制御されます。</span> </td>
<td class=""><span class="merged" id="all.1VFbPJ"  title="原文: []https://pkg.go.dev/k8s.io/api/core/v1#IPFamily"><code>[]<a href="https://pkg.go.dev/k8s.io/api/core/v1#IPFamily" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#IPFamily</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.227"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QgAAH"  title="原文: ipFamilyPolicy"><code>ipFamilyPolicy</code></span></td>
<td class=""><span class="merged" id="all.2bNYDv.spl1" title="原文 : IPFamilyPolicy represents the dual-stack-ness requested or required by this Service, and is gated by the &quot;IPv6DualStack&quot; feature gate.">IPFamilyPolicyは、このサービスによってリクエストまたは要求されるデュアル・スタック・ネスを表し、「IPv6DualStack」機能ゲートによってゲート付けされます。</span> <span class="merged" id="all.2bNYDv.spl2" title="原文 : If there is no value provided, then this field will be set to SingleStack.">値が指定されていない場合、このフィールドはSingleStackに設定されます。</span> <span class="merged" id="all.2bNYDv.spl3" title="原文 : Services can be &quot;SingleStack&quot; (a single IP family), &quot;PreferDualStack&quot; (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or &quot;RequireDualStack&quot; (two IP families on dual-stack configured clusters, otherwise fail).">サービスには、「SingleStack」(単一のIPファミリ)、「PreferDualStack」(デュアル・スタック構成クラスタ上の2つのIPファミリまたはシングル・スタック・クラスタ上の1つのIPファミリ)、または「RequireDualStack」(デュアル・スタック構成クラスタ上の2つのIPファミリ、それ以外の場合は失敗します)があります。</span> <span class="merged" id="all.2bNYDv.spl4" title="原文 : The ipFamilies and clusterIPs fields depend on the value of this field.">ipFamiliesおよびclusterIPsフィールドは、このフィールドの値によって異なります。</span> <span class="merged" id="all.2bNYDv.spl5" title="原文 : This field will be wiped when updating a service to type ExternalName.">このフィールドは、サービスをタイプExternalNameに更新するときに消去されます。</span> </td>
<td class=""><span class="merged" id="all.2w0P5H"  title="原文: *https://pkg.go.dev/k8s.io/api/core/v1#IPFamilyPolicyType"><code>*<a href="https://pkg.go.dev/k8s.io/api/core/v1#IPFamilyPolicyType" id="" target="_blank" >https://pkg.go.dev/k8s.io/api/core/v1#IPFamilyPolicyType</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.228"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3QLBd9"  title="原文: allocateLoadBalancerNodePorts"><code>allocateLoadBalancerNodePorts</code></span></td>
<td class=""><span class="merged" id="all.29OoBx.spl1" title="原文 : allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.">allocateLoadBalancerNodePortsは、LoadBalancerタイプのサービスに対してNodePortsを自動的に割り当てるかどうかを定義します。</span> <span class="merged" id="all.29OoBx.spl2"  title="原文:: Default is &quot;true&quot;.">デフォルトは、trueです。</span> <span class="merged" id="all.29OoBx.spl3" title="原文 : It may be set to &quot;false&quot; if the cluster load-balancer does not rely on NodePorts. allocateLoadBalancerNodePorts may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.">クラスタ・ロード・バランサがNodePortsに依存しない場合、falseに設定される場合があります。allocateLoadBalancerNodePortsは、タイプLoadBalancerのサービスに対してのみ設定でき、タイプが他のタイプに変更されるとクリアされます。</span> <span class="merged" id="all.29OoBx.spl4" title="原文 : This field is alpha-level and is only honored by servers that enable the ServiceLBNodePortControl feature.">このフィールドはアルファ・レベルであり、ServiceLBNodePortControl機能を有効にするサーバーによってのみ適用されます。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.28"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.229"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.33" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_startquorum"><span class="merged" id="all.1yEh3p"  title="原文: StartQuorum">StartQuorum</span></h3>
<div class="section">
<p><span class="merged" id="all.2fbh5V" title="原文 : StartQuorum defines the order that deployments will be started in a Coherence cluster made up of multiple deployments.">StartQuorumは、複数のデプロイメントで構成されるCoherenceクラスタでデプロイメントが開始される順序を定義します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.34"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.34"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.34"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.34"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.37VxbY.1"  title="原文: deployment"><code>deployment</code></span></td>
<td class=""><span class="merged" id="all.1LVaJF" title="原文 : The name of deployment that this deployment depends on.">このデプロイメントが依存するデプロイメントの名前。</span></td>
<td class=""><span class="merged" id="all.W18FC.23"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.13"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fCyV9.1"  title="原文: namespace"><code>namespace</code></span></td>
<td class=""><span class="merged" id="all.2Xc3GC.spl1" title="原文 : The namespace that the deployment that this deployment depends on is installed into.">このデプロイメントが依存するデプロイメントが依存するネームスペースがインストールされます。</span> <span class="merged" id="all.2Xc3GC.spl2" title="原文 : Default to the same namespace as this deployment">このデプロイメントと同じネームスペースにデフォルト設定されます</span> </td>
<td class=""><span class="merged" id="all.W18FC.24"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.230"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.tDWLO"  title="原文: podCount"><code>podCount</code></span></td>
<td class=""><span class="merged" id="all.I302D" title="原文 : The number of the Pods that should have been started before this deployments will be started, defaults to all Pods for the deployment.">このデプロイメントの開始前に開始する必要があるポッドの数。デフォルトでは、デプロイメントのすべてのポッドに設定されます。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.2"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.231"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.34" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_startquorumstatus"><span class="merged" id="all.1FHhKl"  title="原文: StartQuorumStatus">StartQuorumStatus</span></h3>
<div class="section">
<p><span class="merged" id="all.227ypn" title="原文 : StartQuorumStatus tracks the state of a deployment’s start quorums.">StartQuorumStatusは、デプロイメントの開始コーラムの状態を追跡します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.35"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.35"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.35"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.35"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.37VxbY.2"  title="原文: deployment"><code>deployment</code></span></td>
<td class=""><span class="merged" id="all.1LVaJF.1" title="原文 : The name of deployment that this deployment depends on.">このデプロイメントが依存するデプロイメントの名前。</span></td>
<td class=""><span class="merged" id="all.W18FC.25"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.14"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fCyV9.2"  title="原文: namespace"><code>namespace</code></span></td>
<td class=""><span class="merged" id="all.2Xc3GC.1.spl1" title="原文 : The namespace that the deployment that this deployment depends on is installed into.">このデプロイメントが依存するデプロイメントが依存するネームスペースがインストールされます。</span> <span class="merged" id="all.2Xc3GC.1.spl2" title="原文 : Default to the same namespace as this deployment">このデプロイメントと同じネームスペースにデフォルト設定されます</span> </td>
<td class=""><span class="merged" id="all.W18FC.26"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.232"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.tDWLO.1"  title="原文: podCount"><code>podCount</code></span></td>
<td class=""><span class="merged" id="all.I302D.1" title="原文 : The number of the Pods that should have been started before this deployments will be started, defaults to all Pods for the deployment.">このデプロイメントの開始前に開始する必要があるポッドの数。デフォルトでは、デプロイメントのすべてのポッドに設定されます。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.3"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.233"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.29tQvf"  title="原文: ready"><code>ready</code></span></td>
<td class=""><span class="merged" id="all.2qSX8I" title="原文 : Whether this quorum’s condition has been met">この定足数の条件が満たされているかどうか</span></td>
<td class=""><span class="merged" id="all.2Sqi2i.3"  title="原文: bool"><code>bool</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.15"  title="原文:: true">true</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.35" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_coherence"><span class="merged" id="all.1ZkKTX"  title="原文:: Coherence">Coherence</span></h3>
<div class="section">
<p><span class="merged" id="all.3Vz8p" title="原文 : Coherence is the top level schema for the Coherence API and custom resource definition (CRD).">Coherenceは、Coherence APIおよびカスタム・リソース定義(CRD)の最上位スキーマです。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.36"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.36"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.36"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.36"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.Tgr1J.1"  title="原文: metadata"><code>metadata</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2fs0Qt"  title="原文: metav1.ObjectMeta"><code><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#objectmeta-v1-meta" id="" target="_blank" >metav1.ObjectMeta</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.234"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.26upHQ.3"  title="原文: spec"><code>spec</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.21x13G"  title="原文: CoherenceStatefulSetResourceSpec"><code><router-link @click.native="this.scrollFix('#_coherencestatefulsetresourcespec')" to="#_coherencestatefulsetresourcespec">CoherenceStatefulSetResourceSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.235"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.rRvWD"  title="原文: status"><code>status</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2wZwP8"  title="原文: CoherenceResourceStatus"><code><router-link @click.native="this.scrollFix('#_coherenceresourcestatus')" to="#_coherenceresourcestatus">CoherenceResourceStatus</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.236"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.36" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_coherencelist"><span class="merged" id="all.I80PY"  title="原文: CoherenceList">CoherenceList</span></h3>
<div class="section">
<p><span class="merged" id="all.DZPLp" title="原文 : CoherenceList is a list of Coherence resources.">CoherenceListは、Coherenceリソースのリストです。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.37"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.37"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.37"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.37"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.Tgr1J.2"  title="原文: metadata"><code>metadata</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.DOcSQ"  title="原文: metav1.ListMeta"><code><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#listmeta-v1-meta" id="" target="_blank" >metav1.ListMeta</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.237"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WuGEZ.3"  title="原文: items"><code>items</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.38yAHJ"  title="原文: []Coherence"><code>[]<router-link @click.native="this.scrollFix('#_coherence')" to="#_coherence">Coherence</router-link></code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.16"  title="原文:: true">true</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.37" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_coherenceresourcestatus"><span class="merged" id="all.1Bdf14"  title="原文: CoherenceResourceStatus">CoherenceResourceStatus</span></h3>
<div class="section">
<p><span class="merged" id="all.aoUKF" title="原文 : CoherenceResourceStatus defines the observed state of Coherence resource.">CoherenceResourceStatusは、Coherenceリソースの観測された状態を定義します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.38"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.38"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.38"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.38"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3G3hIZ"  title="原文: phase"><code>phase</code></span></td>
<td class=""><span class="merged" id="all.1RGapB.spl1" title="原文 : The phase of a Coherence resource is a simple, high-level summary of where the Coherence resource is in its lifecycle.">Coherenceリソースのフェーズは、Coherenceリソースがライフサイクル内にある単純な概要です。</span> <span class="merged" id="all.1RGapB.spl2" title="原文 : The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod’s status.">条件配列、理由およびメッセージ・フィールドおよび個々のコンテナ・ステータス配列には、ポッドのステータスに関する詳細が含まれます。</span> <span class="merged" id="all.1RGapB.spl3" title="原文 : There are eight possible phase values: Initialized: The deployment has been accepted by the Kubernetes system.">次の8つのフェーズ値があります:<br><br> 初期化済: デプロイメントはKubernetesシステムによって受け入れられました。</span> <span class="merged" id="all.1RGapB.spl4" title="原文 : Created: The deployments secondary resources, (e.g. the StatefulSet, Services etc.) have been created.">作成日: デプロイメントのセカンダリ・リソース(StatefulSet、サービスなど)が作成されました。</span> <span class="merged" id="all.1RGapB.spl5" title="原文 : Ready: The StatefulSet for the deployment has the correct number of replicas and ready replicas.">準備完了: デプロイメントのStatefulSetには、適切な数のレプリカおよび準備完了レプリカがあります。</span> <span class="merged" id="all.1RGapB.spl6" title="原文 : Waiting: The deployment’s start quorum conditions have not yet been met.">待機中: デプロイメント開始定足数の条件がまだ満たされていません。</span> <span class="merged" id="all.1RGapB.spl7" title="原文 : Scaling: The number of replicas in the deployment is being scaled up or down.">スケーリング: デプロイメント内のレプリカの数がスケール・アップまたはスケール・ダウン中です。</span> <span class="merged" id="all.1RGapB.spl8" title="原文 : RollingUpgrade: The StatefulSet is performing a rolling upgrade.">RollingUpgrade: StatefulSetはローリング・アップグレードを実行しています。</span> <span class="merged" id="all.1RGapB.spl9" title="原文 : Stopped: The replica count has been set to zero.">停止: レプリカ数がゼロに設定されています。</span> <span class="merged" id="all.1RGapB.spl10" title="原文 : Completed: The Coherence resource is running a Job and the Job has completed.">完了: Coherenceリソースがジョブを実行中で、ジョブが完了しました。</span> <span class="merged" id="all.1RGapB.spl11" title="原文 : Failed: An error occurred reconciling the deployment and its secondary resources.">失敗: デプロイメントとそのセカンダリ・リソースの調整中にエラーが発生しました。</span> </td>
<td class=""><span class="merged" id="all.8ejUe"  title="原文: ConditionType"><code>ConditionType</code></span></td>
<td class=""><span class="merged" id="all.njUKu.238"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.NYiec"  title="原文: coherenceCluster"><code>coherenceCluster</code></span></td>
<td class=""><span class="merged" id="all.43ERvl" title="原文 : The name of the Coherence cluster that this deployment is part of.">このデプロイメントに含まれるCoherenceクラスタの名前。</span></td>
<td class=""><span class="merged" id="all.W18FC.27"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.239"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2SYAnU.2"  title="原文: type"><code>type</code></span></td>
<td class=""><span class="merged" id="all.4XDt2m" title="原文 : The type of the Coherence resource.">Coherenceリソースのタイプ。</span></td>
<td class=""><span class="merged" id="all.1Cg07L"  title="原文: CoherenceType"><code>CoherenceType</code></span></td>
<td class=""><span class="merged" id="all.njUKu.240"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Ea5yX.1"  title="原文: replicas"><code>replicas</code></span></td>
<td class=""><span class="merged" id="all.4VFdaA" title="原文 : Replicas is the desired number of members in the Coherence deployment represented by the Coherence resource.">レプリカは、Coherenceリソースで表されるCoherenceデプロイメントで必要なメンバー数です。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.4"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.17"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2IhR8Q"  title="原文: currentReplicas"><code>currentReplicas</code></span></td>
<td class=""><span class="merged" id="all.4ERmbc" title="原文 : CurrentReplicas is the current number of members in the Coherence deployment represented by the Coherence resource.">CurrentReplicasは、Coherenceリソースで表されるCoherenceデプロイメントの現在のメンバー数です。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.5"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.18"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xL0Qh"  title="原文: readyReplicas"><code>readyReplicas</code></span></td>
<td class=""><span class="merged" id="all.EZCm6" title="原文 : ReadyReplicas is the number of members in the Coherence deployment represented by the Coherence resource that are in the ready state.">ReadyReplicasは、Coherenceリソースによって表現される、準備完了状態のメンバーの数です。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.6"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.19"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FBZDf"  title="原文: active"><code>active</code></span></td>
<td class=""><span class="merged" id="all.1OA0Zd" title="原文 : When the Coherence resource is running a Job, the number of pending and running pods.">Coherenceリソースがジョブを実行している場合、保留中および実行中のポッドの数。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.7"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.241"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4EKiW8"  title="原文: succeeded"><code>succeeded</code></span></td>
<td class=""><span class="merged" id="all.wldLI" title="原文 : When the Coherence resource is running a Job, the number of pods which reached phase Succeeded.">Coherenceリソースがジョブを実行している場合、フェーズ成功に達したポッドの数。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.8"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.242"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1I4BXC"  title="原文: failed"><code>failed</code></span></td>
<td class=""><span class="merged" id="all.2DkbYi" title="原文 : When the Coherence resource is running a Job, the number of pods which reached phase Failed.">Coherenceリソースがジョブを実行している場合、フェーズ失敗に達したポッドの数。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.9"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.243"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.GeJKv.1"  title="原文: role"><code>role</code></span></td>
<td class=""><span class="merged" id="all.1Oa0IZ.spl1" title="原文 : The effective role name for this deployment.">このデプロイメントの有効なロール名。</span> <span class="merged" id="all.1Oa0IZ.spl2" title="原文 : This will come from the Spec.Role field if set otherwise the deployment name will be used for the role name">これは、Spec.Roleフィールド(設定されている場合)から取得されます。設定しない場合、デプロイメント名がロール名に使用されます</span> </td>
<td class=""><span class="merged" id="all.W18FC.28"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.244"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1wWw2u"  title="原文: selector"><code>selector</code></span></td>
<td class=""><span class="merged" id="all.1zPlMd.spl1" title="原文 : label query over deployments that should match the replicas count.">レプリカ数と一致するデプロイメントに対するラベルクエリー。</span> <span class="merged" id="all.1zPlMd.spl2" title="原文 : This is same as the label selector but in the string format to avoid introspection by clients.">これはラベル・セレクタと同じですが、クライアントによるイントロスペクションを回避するための文字列形式です。</span> <span class="merged" id="all.1zPlMd.spl3" title="原文 : The string will be in the same format as the query-param syntax.">文字列はquery-param構文と同じ形式になります。</span> <span class="merged" id="all.1zPlMd.spl4" title="原文 : More info about label selectors: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/">ラベル・セレクタの詳細: <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/" id="" target="_blank" >https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/</a></span> </td>
<td class=""><span class="merged" id="all.W18FC.29"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.245"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Bcdc6"  title="原文: conditions"><code>conditions</code></span></td>
<td class=""><span class="merged" id="all.1ttNjt" title="原文 : The status conditions.">ステータス条件。</span></td>
<td class=""><span class="merged" id="all.1dyuuC"  title="原文: Conditions"><code>Conditions</code></span></td>
<td class=""><span class="merged" id="all.njUKu.246"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3IgUAy"  title="原文: hash"><code>hash</code></span></td>
<td class=""><span class="merged" id="all.32Oy2i" title="原文 : Hash is the hash of the latest applied Coherence spec">ハッシュは、適用された最新のCoherenceスペックのハッシュです</span></td>
<td class=""><span class="merged" id="all.W18FC.30"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.247"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2zSHoK"  title="原文: actionsExecuted"><code>actionsExecuted</code></span></td>
<td class=""><span class="merged" id="all.2zgHoU" title="原文 : ActionsExecuted tracks whether actions were executed">ActionsExecutedは、アクションが実行されたかどうかを追跡</span></td>
<td class=""><span class="merged" id="all.2Sqi2i.4"  title="原文: bool"><code>bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.248"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.13dMGa"  title="原文: jobProbes"><code>jobProbes</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4Sivym"  title="原文: []CoherenceJobProbeStatus"><code>[]CoherenceJobProbeStatus</code></span></td>
<td class=""><span class="merged" id="all.njUKu.249"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.38" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>

<h3 id="_coherencestatefulsetresourcespec"><span class="merged" id="all.1WpAnQ"  title="原文: CoherenceStatefulSetResourceSpec">CoherenceStatefulSetResourceSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.2SuFxp.spl1" title="原文 : CoherenceStatefulSetResourceSpec defines the specification of a Coherence resource.">CoherenceStatefulSetResourceSpecは、Coherenceリソースの仕様を定義します。</span> <span class="merged" id="all.2SuFxp.spl2" title="原文 : A Coherence resource is typically one or more Pods that perform the same functionality, for example storage members.">Coherenceリソースは、通常、同じ機能を実行する1つ以上のポッド(ストレージ・メンバーなど)です。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 7.692%;">
<col style="width: 76.923%;">
<col style="width: 7.692%;">
<col style="width: 7.692%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2p5Jka.39"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.39"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.39"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.39"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2mErj2"  title="原文: cluster"><code>cluster</code></span></td>
<td class=""><span class="merged" id="all.2S83jb.spl1" title="原文 : The optional name of the Coherence cluster that this Coherence resource belongs to.">このCoherenceリソースが属するCoherenceクラスタのオプション名。</span> <span class="merged" id="all.2S83jb.spl2" title="原文 : If this value is set the Pods controlled by this Coherence resource will form a cluster with other Pods controlled by Coherence resources with the same cluster name.">この値が設定されている場合、このCoherenceリソースによって制御されるポッドは、同じクラスタ名を持つCoherenceリソースによって制御される他のポッドを持つクラスタを形成します。</span> <span class="merged" id="all.2S83jb.spl3" title="原文 : If not set the Coherence resource’s name will be used as the cluster name.">設定しない場合、Coherenceリソースの名前はクラスタ名として使用されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.49"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.250"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.OBQ0S"  title="原文: statefulSetAnnotations"><code>statefulSetAnnotations</code></span></td>
<td class=""><span class="merged" id="all.2tvxlJ.spl1" title="原文 : StatefulSetAnnotations are free-form yaml that will be added to the Coherence cluster StatefulSet as annotations.">StatefulSetAnnotationsは、Coherenceクラスタ<code>StatefulSet</code>に注釈として追加される自由形式のyamlです。</span> <span class="merged" id="all.2tvxlJ.spl2" title="原文 : Any annotations should be placed BELOW this &quot;annotations:&quot; key, for example: The default behaviour is to copy all annotations from the Coherence resource to the StatefulSet, specifying any annotations in the StatefulSetAnnotations will override this behaviour and only include the StatefulSetAnnotations. annotations: foo.io/one: &quot;value1&quot; + foo.io/two: &quot;value2&quot; + see: Kubernetes Annotations">次のように、すべての注釈をこの"annotations:"キーの下に置く必要があります:<br><br>デフォルトの動作では、<code>Coherence</code>リソースから<code>StatefulSet</code>にすべての注釈をコピーします。<code>StatefulSetAnnotations</code>に注釈を指定すると、この動作はオーバーライドされ、<code>StatefulSetAnnotations</code>のみが含まれます。<br><br>annotations:<br>foo.io/one: "value1" +<br>foo.io/two: "value2" +<br><br>参照: <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/" id="" target="_blank" >Kubernetes注釈</a></span> </td>
<td class=""><span class="merged" id="all.6My6t.10"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.251"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Dt3tM"  title="原文: volumeClaimTemplates"><code>volumeClaimTemplates</code></span></td>
<td class=""><span class="merged" id="all.HOEVT.spl1" title="原文 : VolumeClaimTemplates defines extra PVC mappings that will be added to the Coherence Pod.">VolumeClaimTemplatesは、Coherenceポッドに追加される追加のPVCマッピングを定義します。</span> <span class="merged" id="all.HOEVT.spl2" title="原文 : The content of this yaml should match the normal k8s volumeClaimTemplates section of a StatefulSet spec as described in https://kubernetes.io/docs/concepts/storage/persistent-volumes/ Every claim in this list must have at least one matching (by name) volumeMount in one container in the template.">このyamlの内容は、<a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes/" id="" target="_blank" >https://kubernetes.io/docs/concepts/storage/persistent-volumes/</a>で説明されているStatefulSet仕様の通常のk8s volumeClaimTemplatesセクションと一致する必要があります。このリストのすべての要求は、テンプレート内の1つのコンテナに少なくとも1つの一致(名前による) volumeMountが必要です。</span> <span class="merged" id="all.HOEVT.spl3" title="原文 : A claim in this list takes precedence over any volumes in the template, with the same name.">このリスト内の要求は、同じ内のボリュームよりも優先されます。</span> </td>
<td class=""><span class="merged" id="all.3PR8MP"  title="原文: []PersistentVolumeClaim"><code>[]<router-link @click.native="this.scrollFix('#_persistentvolumeclaim')" to="#_persistentvolumeclaim">PersistentVolumeClaim</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.252"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2LbhhJ"  title="原文: scaling"><code>scaling</code></span></td>
<td class=""><span class="merged" id="all.2OU4S6" title="原文 : The configuration to control safe scaling.">安全なスケーリングを制御する構成。</span></td>
<td class=""><span class="merged" id="all.1Oe3qO"  title="原文: *ScalingSpec"><code>*<router-link @click.native="this.scrollFix('#_scalingspec')" to="#_scalingspec">ScalingSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.253"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.tFHYk"  title="原文: suspendProbe"><code>suspendProbe</code></span></td>
<td class=""><span class="merged" id="all.e3NAH" title="原文 : The configuration of the probe used to signal that services must be suspended before a deployment is stopped.">デプロイメントを停止する前にサービスを中断する必要があることを示すために使用されるプローブの構成。</span></td>
<td class=""><span class="merged" id="all.3aDXpb.2"  title="原文: *Probe"><code>*<router-link @click.native="this.scrollFix('#_probe')" to="#_probe">Probe</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.254"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FQBUZ"  title="原文: suspendServicesOnShutdown"><code>suspendServicesOnShutdown</code></span></td>
<td class=""><span class="merged" id="all.2NSRgj.spl1" title="原文 : A flag controlling whether storage enabled cache services in this deployment will be suspended before the deployment is shutdown or scaled to zero.">デプロイメントが停止またはゼロにスケーリングされる前に、このデプロイメントでストレージが有効なキャッシュ・サービスを一時停止するかどうかを制御するフラグ。</span> <span class="merged" id="all.2NSRgj.spl2" title="原文 : The action of suspending storage enabled services when the whole deployment is being stopped ensures that cache services with persistence enabled will shut down cleanly without the possibility of Coherence trying to recover and re-balance partitions as Pods are stopped.">デプロイメント全体を停止しているときにストレージが有効なサービスを一時停止するアクションによって、永続性が有効化されたキャッシュ・サービスが、ポッドが停止されるとCoherenceがパーティションをリカバリおよび再バランスしようとする可能性がなくてもクリーンに停止されます。</span> <span class="merged" id="all.2NSRgj.spl3"  title="原文: The default value if not specified is true.">指定しない場合のデフォルト値はtrueです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.29"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.255"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Y0oy2"  title="原文: resumeServicesOnStartup"><code>resumeServicesOnStartup</code></span></td>
<td class=""><span class="merged" id="all.1a5L7s.spl1" title="原文 : ResumeServicesOnStartup allows the Operator to resume suspended Coherence services when the Coherence container is started.">ResumeServicesOnStartupを使用すると、オペレータは、Coherenceコンテナの起動時に一時停止されたCoherenceサービスを再開できます。</span> <span class="merged" id="all.1a5L7s.spl2" title="原文 : This only applies to storage enabled distributed cache services.">これは、ストレージが有効な分散キャッシュ・サービスにのみ適用されます。</span> <span class="merged" id="all.1a5L7s.spl3" title="原文 : This ensures that services that are suspended due to the shutdown of a storage tier, but those services are still running (albeit suspended) in other storage disabled deployments, will be resumed when storage comes back.">これにより、ストレージ層の停止が原因で一時停止されているサービスが、ストレージが無効になっている他のデプロイメントで引き続き実行されている(一時停止されている)サービスが、ストレージが戻ってきたときに再開されます。</span> <span class="merged" id="all.1a5L7s.spl4" title="原文 : Note that starting Pods with suspended partitioned cache services may stop the Pod reaching the ready state.">一時停止されたパーティション・キャッシュ・サービスでポッドを起動すると、ポッドが準備完了状態になる可能性があることに注意してください。</span> <span class="merged" id="all.1a5L7s.spl5"  title="原文: The default value if not specified is true.">指定しない場合のデフォルト値はtrueです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.30"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.256"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.20PWS7"  title="原文: autoResumeServices"><code>autoResumeServices</code></span></td>
<td class=""><span class="merged" id="all.jjXl1.spl1" title="原文 : AutoResumeServices is a map of Coherence service names to allow more fine-grained control over which services may be auto-resumed by the operator when a Coherence Pod starts.">AutoResumeServicesは、Coherenceポッドの起動時にオペレータがどのサービスを自動再開できるかをより細かく制御できるように、Coherenceサービス名のマップです。</span> <span class="merged" id="all.jjXl1.spl2" title="原文 : The key to the map is the name of the Coherence service.">マップのキーは、Coherenceサービスの名前です。</span> <span class="merged" id="all.jjXl1.spl3" title="原文 : This should be the fully qualified name if scoped services are being used in Coherence.">スコープ指定サービスがCoherenceで使用されている場合、これは完全修飾名である必要があります。</span> <span class="merged" id="all.jjXl1.spl4" title="原文 : The value is a bool, set to true to allow the service to be auto-resumed or false to not allow the service to be auto-resumed.">値はboolで、サービスを自動再開できるように<code>true</code>に設定するか、サービスを自動再開できないように<code>false</code>に設定します。</span> <span class="merged" id="all.jjXl1.spl5" title="原文 : Adding service names to this list will override any value set in ResumeServicesOnStartup, so if the ResumeServicesOnStartup field is false but there are service names in the AutoResumeServices, mapped to true, those services will still be resumed.">このリストにサービス名を追加すると、<code>ResumeServicesOnStartup</code>に設定されている値がオーバーライドされるため、<code>ResumeServicesOnStartup</code>フィールドが<code>false</code>であるが、<code>true</code>にマップされた<code>AutoResumeServices</code>にサービス名がある場合、それらのサービスは引き続き再開されます。</span> <span class="merged" id="all.jjXl1.spl6" title="原文 : Note that starting Pods with suspended partitioned cache services may stop the Pod reaching the ready state.">一時停止されたパーティション・キャッシュ・サービスでポッドを起動すると、ポッドが準備完了状態になる可能性があることに注意してください。</span> </td>
<td class=""><span class="merged" id="all.3badHx"  title="原文: map[string]bool"><code>map[string]bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.257"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FA11u"  title="原文: suspendServiceTimeout"><code>suspendServiceTimeout</code></span></td>
<td class=""><span class="merged" id="all.1RYHtc" title="原文 : SuspendServiceTimeout sets the number of seconds to wait for the service suspend call to return (the default is 60 seconds)">SuspendServiceTimeoutは、サービス中断コールが返されるのを待機する秒数を設定します(デフォルトは60秒です)</span></td>
<td class=""><span class="merged" id="all.3IVb0a.1"  title="原文: *int"><code>*int</code></span></td>
<td class=""><span class="merged" id="all.njUKu.258"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Zvz2Y"  title="原文: haBeforeUpdate"><code>haBeforeUpdate</code></span></td>
<td class=""><span class="merged" id="all.1cmKRu.spl1" title="原文 : Whether to perform a StatusHA test on the cluster before performing an update or deletion.">更新または削除を実行する前に、クラスタでStatusHAテストを実行するかどうか。</span> <span class="merged" id="all.1cmKRu.spl2" title="原文 : This field can be set to &quot;false&quot; to force through an update even when a Coherence deployment is in an unstable state.">このフィールドをfalseに設定すると、Coherenceデプロイメントが不安定な状態であっても更新を強制的に実行できます。</span> <span class="merged" id="all.1cmKRu.spl3" title="原文 : The default is true, to always check for StatusHA before updating a Coherence deployment.">デフォルトはtrueで、Coherenceデプロイメントを更新する前に常にStatusHAを確認します。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.31"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.259"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3oOKf5"  title="原文: allowUnsafeDelete"><code>allowUnsafeDelete</code></span></td>
<td class=""><span class="merged" id="all.2L6Fxd.spl1" title="原文 : AllowUnsafeDelete controls whether the Operator will add a finalizer to the Coherence resource so that it can intercept deletion of the resource and initiate a controlled shutdown of the Coherence cluster.">AllowUnsafeDeleteは、リソースの削除をインターセプトし、Coherenceクラスタの制御された停止を開始できるように、オペレータがCoherenceリソースにファイナライザを追加するかどうかを制御します。</span> <span class="merged" id="all.2L6Fxd.spl2"  title="原文: The default value is false.">デフォルト値は<code>false</code>です。</span> <span class="merged" id="all.2L6Fxd.spl3" title="原文 : The primary use for setting this flag to true is in CI/CD environments so that cleanup jobs can delete a whole namespace without requiring the Operator to have removed finalizers from any Coherence resources deployed into that namespace.">このフラグを<code>true</code>に設定する主な用途はCI/CD環境にあるため、クリーン・アップ・ジョブは、オペレータがそのネームスペースにデプロイされたCoherenceリソースからファイナライザを削除することなく、ネームスペース全体を削除できます。</span> <span class="merged" id="all.2L6Fxd.spl4" title="原文 : It is not recommended to set this flag to true in a production environment, especially when using Coherence persistence features.">本番環境では、特にCoherenceの永続性機能を使用する場合、このフラグを<code>true</code>に設定することはお薦めしません。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.32"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.260"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.R78YK"  title="原文: actions"><code>actions</code></span></td>
<td class=""><span class="merged" id="all.4IJSnK" title="原文 : Actions to execute once all the Pods are ready after an initial deployment">初期デプロイメント後にすべてのポッドの準備が完了した後に実行するアクション</span></td>
<td class=""><span class="merged" id="all.gp6GE"  title="原文: []Action"><code>[]<router-link @click.native="this.scrollFix('#_action')" to="#_action">Action</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.261"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Vx9aD"  title="原文: envFrom"><code>envFrom</code></span></td>
<td class=""><span class="merged" id="all.1Aj2AL.spl1" title="原文 : List of sources to populate environment variables in the container.">コンテナに環境変数を移入するソースのリスト。</span> <span class="merged" id="all.1Aj2AL.spl2" title="原文 : The keys defined within a source must be a C_IDENTIFIER.">ソース内で定義されているキーは、C_IDENTIFIERである必要があります。</span> <span class="merged" id="all.1Aj2AL.spl3" title="原文 : All invalid keys will be reported as an event when the container is starting.">コンテナの起動時に、すべての無効なキーがイベントとして報告されます。</span> <span class="merged" id="all.1Aj2AL.spl4" title="原文 : When a key exists in multiple sources, the value associated with the last source will take precedence.">キーが複数のソースに存在する場合は、最後のソースに関連付けられた値が優先されます。</span> <span class="merged" id="all.1Aj2AL.spl5" title="原文 : Values defined by an Env with a duplicate key will take precedence.">重複キーを持つEnvによって定義された値が優先されます。</span> <span class="merged" id="all.1Aj2AL.spl6"  title="原文:: Cannot be updated.">更新できません。</span> </td>
<td class=""><span class="merged" id="all.1vuOYE"  title="原文: []corev1.EnvFromSource"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#envfromsource-v1-core" id="" target="_blank" >corev1.EnvFromSource</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.262"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.39" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">目次に戻る</router-link></span></p>

</div>
</div>
</doc-view>
