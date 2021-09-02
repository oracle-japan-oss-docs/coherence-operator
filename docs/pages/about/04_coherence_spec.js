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
<p><span class="merged" id="all.4Lnj75.spl1" title="原文 : This is a reference for the Coherence Operator API types.">これはCoherence Operator APIタイプの参照です。</span> <span class="merged" id="all.4Lnj75.spl2" title="原文 : These are all the types and fields that are used in the Coherence CRD.">これらは、Coherence CRDで使用されるすべてのタイプとフィールドです。</span> </p>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.2bjrw3" title="原文 : This document was generated from comments in the Go structs in the pkg/api/ directory.">このドキュメントは、pkg/api/ディレクトリのGo構造体のコメントから生成されました。</span></p>
</div>

<h3 id="_table_of_contents"><span class="merged" id="all.2jNfVE"  title="原文:: Table of Contents">目次</span></h3>
<div class="section">
<ul class="ulist">
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
<p><span class="merged" id="all.2pmcIo" title="原文 : JvmJmxmpSpec"><router-link @click.native="this.scrollFix('#_jvmjmxmpspec')" to="#_jvmjmxmpspec">JvmJmxmpSpec</router-link></span></p>

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
<p><span class="merged" id="all.4WF2Cu" title="原文 : PodDNSConfig"><router-link @click.native="this.scrollFix('#_poddnsconfig')" to="#_poddnsconfig">PodDNSConfig</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.41U981" title="原文 : PortSpecWithSSL"><router-link @click.native="this.scrollFix('#_portspecwithssl')" to="#_portspecwithssl">PortSpecWithSSL</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1TGNXU" title="原文 : Probe"><router-link @click.native="this.scrollFix('#_probe')" to="#_probe">プローブ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.24ZleF" title="原文 : ProbeHandler"><router-link @click.native="this.scrollFix('#_probehandler')" to="#_probehandler">ProbeHandler</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3y6oZS" title="原文 : ReadinessProbeSpec"><router-link @click.native="this.scrollFix('#_readinessprobespec')" to="#_readinessprobespec">ReadinessProbeSpec</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3OohcD" title="原文 : Resource"><router-link @click.native="this.scrollFix('#_resource')" to="#_resource">リソース</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1hiLqH" title="原文 : Resources"><router-link @click.native="this.scrollFix('#_resources')" to="#_resources">リソース</router-link></span></p>

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
</ul>
</div>

<h3 id="_coherenceresourcespec"><span class="merged" id="all.pHcwt"  title="原文: CoherenceResourceSpec">CoherenceResourceSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.237THp.spl1" title="原文 : CoherenceResourceSpec defines the specification of a Coherence resource.">CoherenceResourceSpecは、Coherenceリソースの仕様を定義します。</span> <span class="merged" id="all.237THp.spl2" title="原文 : A Coherence resource is typically one or more Pods that perform the same functionality, for example storage members.">Coherenceリソースは、通常、ストレージ・メンバーなどの同じ機能を実行する1つ以上のポッドです。</span> </p>


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
<td class=""><span class="merged" id="all.2vvqy1"  title="原文: image"><code>image</code></span></td>
<td class=""><span class="merged" id="all.4dlwuw.spl1"  title="原文: The name of the image.">イメージの名前。</span> <span class="merged" id="all.4dlwuw.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/containers/images">詳細情報 : <a href="https://kubernetes.io/docs/concepts/containers/images" id="" target="_blank" >https://kubernetes.io/docs/concepts/containers/images</a></span> </td>
<td class=""><span class="merged" id="all.2JXhOu"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yaYc3"  title="原文: imagePullPolicy"><code>imagePullPolicy</code></span></td>
<td class=""><span class="merged" id="all.267YMn.spl1" title="原文 : Image pull policy.">イメージ・プル・ポリシー。</span> <span class="merged" id="all.267YMn.spl2" title="原文 : One of Always, Never, IfNotPresent.">Always、Never、IfNotPresentのいずれか。</span> <span class="merged" id="all.267YMn.spl3" title="原文 : More info: https://kubernetes.io/docs/concepts/containers/images#updating-images">詳細情報 : <a href="https://kubernetes.io/docs/concepts/containers/images#updating-images" id="" target="_blank" >https://kubernetes.io/docs/concepts/containers/images#updating-images</a></span> </td>
<td class=""><span class="merged" id="all.3NkYuH"  title="原文: *corev1.PullPolicy"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#pullpolicy-v1-core" id="" target="_blank" >corev1.PullPolicy</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.1"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1SIm27"  title="原文: imagePullSecrets"><code>imagePullSecrets</code></span></td>
<td class=""><span class="merged" id="all.tBKQ8.spl1" title="原文 : ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec.">ImagePullSecretsは、このPodSpecで使用されるイメージのプルに使用する同じネームスペース内のシークレットへの参照のオプションのリストです。</span> <span class="merged" id="all.tBKQ8.spl2" title="原文 : If specified, these secrets will be passed to individual puller implementations for them to use.">指定した場合、これらのシークレットは、使用する個別のプルラー実装に渡されます。</span> <span class="merged" id="all.tBKQ8.spl3" title="原文 : For example, in the case of docker, only DockerConfig type secrets are honored.">たとえば、dockerの場合、DockerConfigタイプのシークレットのみが優先されます。</span> <span class="merged" id="all.tBKQ8.spl4" title="原文 : More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod">詳細情報 : <a href="https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod" id="" target="_blank" >https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod</a></span> </td>
<td class=""><span class="merged" id="all.1CKz3v"  title="原文: []LocalObjectReference"><code>[]<router-link @click.native="this.scrollFix('#_localobjectreference')" to="#_localobjectreference">LocalObjectReference</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.2"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Ea5yX"  title="原文: replicas"><code>replicas</code></span></td>
<td class=""><span class="merged" id="all.3iXS82.spl1" title="原文 : The desired number of cluster members of this deployment.">このデプロイメントのクラスタ・メンバーの希望数。</span> <span class="merged" id="all.3iXS82.spl2" title="原文 : This is a pointer to distinguish between explicit zero and not specified.">これは、明示的なゼロと指定されていないを区別するためのポインタです。</span> <span class="merged" id="all.3iXS82.spl3" title="原文 : If not specified a default value of 3 will be used.">指定しない場合、デフォルト値3が使用されます。</span> <span class="merged" id="all.3iXS82.spl4" title="原文 : This field cannot be negative.">このフィールドはマイナスにできません。</span> </td>
<td class=""><span class="merged" id="all.C5sgP"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.3"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2mErj2"  title="原文: cluster"><code>cluster</code></span></td>
<td class=""><span class="merged" id="all.2S83jb.spl1" title="原文 : The optional name of the Coherence cluster that this Coherence resource belongs to.">このCoherenceリソースが属するCoherenceクラスタのオプション名。</span> <span class="merged" id="all.2S83jb.spl2" title="原文 : If this value is set the Pods controlled by this Coherence resource will form a cluster with other Pods controlled by Coherence resources with the same cluster name.">この値が設定されている場合、このCoherenceリソースによって制御されるポッドは、同じクラスタ名でCoherenceリソースによって制御される他のポッドを持つクラスタを形成します。</span> <span class="merged" id="all.2S83jb.spl3" title="原文 : If not set the Coherence resource&rsquo;s name will be used as the cluster name.">Coherenceリソースの名前を設定しない場合、クラスタ名として使用されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.1"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.4"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.GeJKv"  title="原文: role"><code>role</code></span></td>
<td class=""><span class="merged" id="all.4bdm8F.spl1" title="原文 : The name of the role that this deployment represents in a Coherence cluster.">Coherenceクラスタでこのデプロイメントが表すロールの名前。</span> <span class="merged" id="all.4bdm8F.spl2" title="原文 : This value will be used to set the Coherence role property for all members of this role">この値は、このロールのすべてのメンバーのCoherenceロール・プロパティの設定に使用されます</span> </td>
<td class=""><span class="merged" id="all.W18FC"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.5"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1C42zK"  title="原文: appLabel"><code>appLabel</code></span></td>
<td class=""><span class="merged" id="all.LfFTM.spl1" title="原文 : An optional app label to apply to resources created for this deployment.">このデプロイメント用に作成されたリソースに適用するオプションのアプリケーション・ラベル。</span> <span class="merged" id="all.LfFTM.spl2" title="原文 : This is useful for example to apply an app label for use by Istio.">これは、たとえば、Istioで使用するアプリケーション・ラベルを適用する場合に便利です。</span> <span class="merged" id="all.LfFTM.spl3" title="原文 : This field follows standard Kubernetes label syntax.">このフィールドは、標準のKubernetesラベル構文に従います。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.2"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.6"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.42TwHc"  title="原文: versionLabel"><code>versionLabel</code></span></td>
<td class=""><span class="merged" id="all.1R4TgI.spl1" title="原文 : An optional version label to apply to resources created for this deployment.">このデプロイメント用に作成されたリソースに適用するオプションのバージョン・ラベル。</span> <span class="merged" id="all.1R4TgI.spl2" title="原文 : This is useful for example to apply an version label for use by Istio.">これは、たとえばIstioで使用するバージョン・ラベルを適用する場合に便利です。</span> <span class="merged" id="all.1R4TgI.spl3" title="原文 : This field follows standard Kubernetes label syntax.">このフィールドは、標準のKubernetesラベル構文に従います。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.3"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.7"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.XXOb3"  title="原文: coherence"><code>coherence</code></span></td>
<td class=""><span class="merged" id="all.2Jjl89" title="原文 : The optional settings specific to Coherence functionality.">Coherence機能固有の設定(オプション)。</span></td>
<td class=""><span class="merged" id="all.12SMNT"  title="原文: *CoherenceSpec"><code>*<router-link @click.native="this.scrollFix('#_coherencespec')" to="#_coherencespec">CoherenceSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.8"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2zvFMg"  title="原文: application"><code>application</code></span></td>
<td class=""><span class="merged" id="all.v9mpl" title="原文 : The optional application specific settings.">オプションのアプリケーション固有の設定。</span></td>
<td class=""><span class="merged" id="all.vGxac"  title="原文: *ApplicationSpec"><code>*<router-link @click.native="this.scrollFix('#_applicationspec')" to="#_applicationspec">ApplicationSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.9"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2YGztV"  title="原文: jvm"><code>jvm</code></span></td>
<td class=""><span class="merged" id="all.2AdbYG" title="原文 : The JVM specific options">JVM固有のオプション</span></td>
<td class=""><span class="merged" id="all.1AdUN1"  title="原文: *JVMSpec"><code>*<router-link @click.native="this.scrollFix('#_jvmspec')" to="#_jvmspec">JVMSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.10"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XgXVu"  title="原文: ports"><code>ports</code></span></td>
<td class=""><span class="merged" id="all.4BbCFZ" title="原文 : Ports specifies additional port mappings for the Pod and additional Services for those ports.">ポートは、ポッドの追加ポート・マッピングと、それらのポートの追加サービスを指定します。</span></td>
<td class=""><span class="merged" id="all.3RPuHO"  title="原文: []NamedPortSpec"><code>[]<router-link @click.native="this.scrollFix('#_namedportspec')" to="#_namedportspec">NamedPortSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.11"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2LbhhJ"  title="原文: scaling"><code>scaling</code></span></td>
<td class=""><span class="merged" id="all.2OU4S6" title="原文 : The configuration to control safe scaling.">安全にスケーリングを制御するための構成。</span></td>
<td class=""><span class="merged" id="all.1Oe3qO"  title="原文: *ScalingSpec"><code>*<router-link @click.native="this.scrollFix('#_scalingspec')" to="#_scalingspec">ScalingSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.12"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.tFHYk"  title="原文: suspendProbe"><code>suspendProbe</code></span></td>
<td class=""><span class="merged" id="all.e3NAH" title="原文 : The configuration of the probe used to signal that services must be suspended before a deployment is stopped.">デプロイメントを停止する前にサービスを一時停止する必要があることを示すために使用されるプローブの構成。</span></td>
<td class=""><span class="merged" id="all.3aDXpb"  title="原文: *Probe"><code>*<router-link @click.native="this.scrollFix('#_probe')" to="#_probe">Probe</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.13"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FQBUZ"  title="原文: suspendServicesOnShutdown"><code>suspendServicesOnShutdown</code></span></td>
<td class=""><span class="merged" id="all.IZLou.spl1" title="原文 : A flag controlling whether storage enabled cache services in this deployment will be suspended before the deployment is shutdown or scaled to zero.">デプロイメントが停止またはゼロにスケーリングされる前に、このデプロイメントのストレージ対応キャッシュ・サービスが一時停止されるかどうかを制御するフラグ。</span> <span class="merged" id="all.IZLou.spl2" title="原文 : The action of suspending storage enabled services when the whole deployment is being stopped ensures that cache services with persistence enabled will shutdown cleanly without the possibility of Coherence trying to recover and re-balance partitions as Pods are stopped.">デプロイメント全体が停止しているときにストレージが有効なサービスを一時停止するアクションにより、Podsが停止すると、Coherenceがパーティションのリカバリおよびリバランスを試行する可能性なく、永続性が有効なキャッシュ・サービスを正常に停止できるようになります。</span> <span class="merged" id="all.IZLou.spl3"  title="原文: The default value if not specified is true.">指定しない場合のデフォルト値はtrueです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.14"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FA11u"  title="原文: suspendServiceTimeout"><code>suspendServiceTimeout</code></span></td>
<td class=""><span class="merged" id="all.1RYHtc" title="原文 : SuspendServiceTimeout sets the number of seconds to wait for the service suspend call to return (the default is 60 seconds)">SuspendServiceTimeoutは、サービス一時停止コールが返されるまで待機する秒数を設定します(デフォルトは60秒です)</span></td>
<td class=""><span class="merged" id="all.3IVb0a"  title="原文: *int"><code>*int</code></span></td>
<td class=""><span class="merged" id="all.njUKu.15"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1HZjTT"  title="原文: startQuorum"><code>startQuorum</code></span></td>
<td class=""><span class="merged" id="all.oQHND" title="原文 : StartQuorum controls the start-up order of this Coherence resource in relation to other Coherence resources.">StartQuorumは、他のCoherenceリソースとの関連でこのCoherenceリソースの起動順序を制御します。</span></td>
<td class=""><span class="merged" id="all.vw7Bg"  title="原文: []StartQuorum"><code>[]<router-link @click.native="this.scrollFix('#_startquorum')" to="#_startquorum">StartQuorum</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.16"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1P26zU"  title="原文: env"><code>env</code></span></td>
<td class=""><span class="merged" id="all.3UEI8.spl1" title="原文 : Env is additional environment variable mappings that will be passed to the Coherence container in the Pod.">Envは、ポッドのCoherenceコンテナに渡される追加の環境変数マッピングです。</span> <span class="merged" id="all.3UEI8.spl2" title="原文 : To specify extra variables add them as name value pairs the same as they would be added to a Pod containers spec.">追加の変数を指定するには、これらをPodコンテナ・スペックに追加する場合と同じ名前値のペアとして追加します。</span> </td>
<td class=""><span class="merged" id="all.4aFO7m"  title="原文: []corev1.EnvVar"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#envvar-v1-core" id="" target="_blank" >corev1.EnvVar</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.17"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Dbs6Z"  title="原文: labels"><code>labels</code></span></td>
<td class=""><span class="merged" id="all.4H3pyu.spl1" title="原文 : The extra labels to add to the all of the Pods in this deployments.">このデプロイメントのすべてのポッドに追加のラベル。</span> <span class="merged" id="all.4H3pyu.spl2" title="原文 : Labels here will add to or override those defined for the cluster.">ここでのラベルは、クラスタに定義されたラベルに追加またはオーバーライドします。</span> <span class="merged" id="all.4H3pyu.spl3" title="原文 : More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/">詳細情報 : <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/" id="" target="_blank" >https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/</a></span> </td>
<td class=""><span class="merged" id="all.6My6t"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.18"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uY9DD"  title="原文: annotations"><code>annotations</code></span></td>
<td class=""><span class="merged" id="all.2lEfac.spl1" title="原文 : Annotations are free-form yaml that will be added to the store release as annotations Any annotations should be placed BELOW this annotations: key.">注釈としてストア・リリースに追加される注釈は、注釈として自由形式のyamlです。注釈は、この注釈の下に配置する必要があります: key.</span> <span class="merged" id="all.2lEfac.spl2" title="原文 : For example if we wanted to include annotations for Prometheus it would look like this: annotations: prometheus.io/scrape: &quot;true&quot; + prometheus.io/port: &quot;2408&quot; ">たとえば、Prometheusの注釈を含める場合、次のようになります:<br><br>annotations: <br>prometheus.io/scrape:"true"+ <br>prometheus.io/port:"2408"<br></span> </td>
<td class=""><span class="merged" id="all.6My6t.1"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.19"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.39gtZv"  title="原文: initContainers"><code>initContainers</code></span></td>
<td class=""><span class="merged" id="all.1919Iy.spl1" title="原文 : List of additional initialization containers to add to the deployment&rsquo;s Pod.">デプロイメントのポッドに追加する追加の初期化コンテナのリスト。</span> <span class="merged" id="all.1919Iy.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/">詳細情報 : <a href="https://kubernetes.io/docs/concepts/workloads/pods/init-containers/" id="" target="_blank" >https://kubernetes.io/docs/concepts/workloads/pods/init-containers/</a></span> </td>
<td class=""><span class="merged" id="all.REbdI"  title="原文: []corev1.Container"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#container-v1-core" id="" target="_blank" >corev1.Container</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.20"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3kcK47"  title="原文: sideCars"><code>sideCars</code></span></td>
<td class=""><span class="merged" id="all.4c1uYW" title="原文 : List of additional side-car containers to add to the deployment&rsquo;s Pod.">デプロイメントのポッドに追加する追加のサイドカー・コンテナのリスト。</span></td>
<td class=""><span class="merged" id="all.REbdI.1"  title="原文: []corev1.Container"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#container-v1-core" id="" target="_blank" >corev1.Container</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.21"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Q1gqJ"  title="原文: configMapVolumes"><code>configMapVolumes</code></span></td>
<td class=""><span class="merged" id="all.2K1tBy.spl1" title="原文 : A list of ConfigMaps to add as volumes.">ボリュームとして追加するConfigMapsのリスト。</span> <span class="merged" id="all.2K1tBy.spl2" title="原文 : Each entry in the list will be added as a ConfigMap Volume to the deployment&rsquo;s Pods and as a VolumeMount to all of the containers and init-containers in the Pod. see: Add ConfigMap Volumes">リスト内の各エントリは、デプロイメント・ポッドにConfigMapボリュームとして追加され、ポッド内のすべてのコンテナおよびinit-containersにVolumeMountとして追加されます。<br>見る: <router-link @click.native="this.scrollFix('#misc_pod_settings/050_configmap_volumes.adoc')" to="#misc_pod_settings/050_configmap_volumes.adoc">ConfigMapボリュームの追加</router-link></span> </td>
<td class=""><span class="merged" id="all.1Ir1sQ"  title="原文: []ConfigMapVolumeSpec"><code>[]<router-link @click.native="this.scrollFix('#_configmapvolumespec')" to="#_configmapvolumespec">ConfigMapVolumeSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.22"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1BjbC2"  title="原文: secretVolumes"><code>secretVolumes</code></span></td>
<td class=""><span class="merged" id="all.3LUywk.spl1" title="原文 : A list of Secrets to add as volumes.">ボリュームとして追加するシークレットのリスト。</span> <span class="merged" id="all.3LUywk.spl2" title="原文 : Each entry in the list will be added as a Secret Volume to the deployment&rsquo;s Pods and as a VolumeMount to all of the containers and init-containers in the Pod. see: Add Secret Volumes">リスト内の各エントリは、デプロイメント・ポッドにシークレット・ボリュームとして追加され、ポッド内のすべてのコンテナおよびinit-containersにVolumeMountとして追加されます。<br>見る: <router-link @click.native="this.scrollFix('#misc_pod_settings/020_secret_volumes.adoc')" to="#misc_pod_settings/020_secret_volumes.adoc">シークレット・ボリュームの追加</router-link></span> </td>
<td class=""><span class="merged" id="all.3Av1V3"  title="原文: []SecretVolumeSpec"><code>[]<router-link @click.native="this.scrollFix('#_secretvolumespec')" to="#_secretvolumespec">SecretVolumeSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.23"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.331nmb"  title="原文: volumes"><code>volumes</code></span></td>
<td class=""><span class="merged" id="all.1g7cOn.spl1" title="原文 : Volumes defines extra volume mappings that will be added to the Coherence Pod.">ボリュームは、Coherenceポッドに追加される追加のボリューム・マッピングを定義します。</span> <span class="merged" id="all.1g7cOn.spl2" title="原文 :  The content of this yaml should match the normal k8s volumes section of a Pod definition + as described in https://kubernetes.io/docs/concepts/storage/volumes/ "><br>このyamlのコンテンツは、Pod定義+の通常のk8sボリューム・セクションと一致する必要があります<br><a href="https://kubernetes.io/docs/concepts/storage/volumes/" id="" target="_blank" >https://kubernetes.io/docs/concepts/storage/volumes/</a>で説明されているように<br></span> </td>
<td class=""><span class="merged" id="all.yfuHX"  title="原文: []corev1.Volume"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#volume-v1-core" id="" target="_blank" >corev1.Volume</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.24"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Dt3tM"  title="原文: volumeClaimTemplates"><code>volumeClaimTemplates</code></span></td>
<td class=""><span class="merged" id="all.24dFFa.spl1" title="原文 : VolumeClaimTemplates defines extra PVC mappings that will be added to the Coherence Pod.">VolumeClaimTemplatesは、Coherenceポッドに追加される追加のPVCマッピングを定義します。</span> <span class="merged" id="all.24dFFa.spl2" title="原文 :  The content of this yaml should match the normal k8s volumeClaimTemplates section of a Pod definition + as described in https://kubernetes.io/docs/concepts/storage/persistent-volumes/ "><br>このyamlのコンテンツは、Pod定義+の通常のk8s volumeClaimTemplatesセクションと一致する必要があります<br><a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes/" id="" target="_blank" >https://kubernetes.io/docs/concepts/storage/persistent-volumes/</a>で説明されているように<br></span> </td>
<td class=""><span class="merged" id="all.15Fm2B"  title="原文: []corev1.PersistentVolumeClaim"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#persistentvolumeclaim-v1-core" id="" target="_blank" >corev1.PersistentVolumeClaim</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.25"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4G7Ikf"  title="原文: volumeMounts"><code>volumeMounts</code></span></td>
<td class=""><span class="merged" id="all.bbAYO" title="原文 : VolumeMounts defines extra volume mounts to map to the additional volumes or PVCs declared above in store.volumes and store.volumeClaimTemplates ">VolumeMountsは、上で宣言された追加のボリュームまたはPVCにマップする追加のボリューム・マウントを定義<br>store.volumesおよびstore.volumeClaimTemplates<br></span></td>
<td class=""><span class="merged" id="all.2EoRn3"  title="原文: []corev1.VolumeMount"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#volumemount-v1-core" id="" target="_blank" >corev1.VolumeMount</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.26"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3NiYQp"  title="原文: healthPort"><code>healthPort</code></span></td>
<td class=""><span class="merged" id="all.3X51gy" title="原文 : The port that the health check endpoint will bind to.">ヘルス・チェック・エンドポイントがバインドされるポート。</span></td>
<td class=""><span class="merged" id="all.C5sgP.1"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.27"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1iiaw7"  title="原文: readinessProbe"><code>readinessProbe</code></span></td>
<td class=""><span class="merged" id="all.2tch6x" title="原文 : The readiness probe config to be used for the Pods in this deployment. ref: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/">このデプロイメントのポッドに使用されるレディネス・プローブ構成。参照 : <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/" id="" target="_blank" >https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/</a></span></td>
<td class=""><span class="merged" id="all.28MWCq"  title="原文: *ReadinessProbeSpec"><code>*<router-link @click.native="this.scrollFix('#_readinessprobespec')" to="#_readinessprobespec">ReadinessProbeSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.28"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4AQYCS"  title="原文: livenessProbe"><code>livenessProbe</code></span></td>
<td class=""><span class="merged" id="all.3MbtBY" title="原文 : The liveness probe config to be used for the Pods in this deployment. ref: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/">このデプロイメントのポッドに使用されるリブネス・プローブ構成。ref : <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/" id="" target="_blank" >https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/</a></span></td>
<td class=""><span class="merged" id="all.28MWCq.1"  title="原文: *ReadinessProbeSpec"><code>*<router-link @click.native="this.scrollFix('#_readinessprobespec')" to="#_readinessprobespec">ReadinessProbeSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.29"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4MlaEo"  title="原文: resources"><code>resources</code></span></td>
<td class=""><span class="merged" id="all.3WsCSk.spl1" title="原文 : Resources is the optional resource requests and limits for the containers ref: http://kubernetes.io/docs/user-guide/compute-resources/ + By default the cpu requests is set to zero and the cpu limit set to 32.">リソースは、コンテナのオプションのリソース・リクエストおよび制限です<br>ref : <a href="http://kubernetes.io/docs/user-guide/compute-resources/" id="" target="_blank" >http://kubernetes.io/docs/user-guide/compute-resources/</a> +<br><br>Bydefaultthecpurequestsissettozeroandthecpulimitsetto32.</span> <span class="merged" id="all.3WsCSk.spl2" title="原文 : This is because it appears that K8s defaults cpu to one and since Java 10 the JVM now correctly picks up cgroup cpu limits then the JVM will only see one cpu.">これは、K8sによってCPUが1にデフォルト設定され、Java 10以降、JVMによってcgroupのCPU制限が正しく取得されるようになったため、JVMは1つのCPUのみが表示されるためです。</span> <span class="merged" id="all.3WsCSk.spl3" title="原文 : By setting resources.requests.cpu=0 and resources.limits.cpu=32 it ensures that the JVM will see the either the number of cpus on the host if this is ⇐ 32 or the JVM will see 32 cpus if the host has &gt; 32 cpus.">resources.requests.cpu=0およびresources.limits.cpu=32を設定すると、JVMによってホスト上のCPU数が⇐ 32個であること、またはホストが> 32 cpuを持つ場合はJVMに32個のCPUを表示することが確認されます。</span> <span class="merged" id="all.3WsCSk.spl4" title="原文 : The limit is set to zero so that there is no hard-limit applied.">強い制限が適用されないように、制限はゼロに設定されます。</span> <span class="merged" id="all.3WsCSk.spl5" title="原文 :  No default memory limits are applied."><br> <br> No default memory limits are applied.</span> </td>
<td class=""><span class="merged" id="all.1pFFVf"  title="原文: *corev1.ResourceRequirements"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#resourcerequirements-v1-core" id="" target="_blank" >corev1.ResourceRequirements</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.30"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3DZ0qh"  title="原文: affinity"><code>affinity</code></span></td>
<td class=""><span class="merged" id="all.3obIbW" title="原文 : Affinity controls Pod scheduling preferences. ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity ">アフィニティはスケジューリング設定を制御します。<br>ref : <a href="https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity" id="" target="_blank" >https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity</a><br></span></td>
<td class=""><span class="merged" id="all.3pMarB"  title="原文: *corev1.Affinity"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#affinity-v1-core" id="" target="_blank" >corev1.Affinity</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.31"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3aBnkC"  title="原文: nodeSelector"><code>nodeSelector</code></span></td>
<td class=""><span class="merged" id="all.eAYYa" title="原文 : NodeSelector is the Node labels for pod assignment ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector ">NodeSelectorはポッド割当てのノード・ラベルです<br>ref : <a href="https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector" id="" target="_blank" >https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector</a><br></span></td>
<td class=""><span class="merged" id="all.6My6t.2"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.32"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3i1GxM"  title="原文: tolerations"><code>tolerations</code></span></td>
<td class=""><span class="merged" id="all.2FJ8Dd.spl1" title="原文 : Tolerations is for nodes that have taints on them.">Tolerationsは、それらのノード上にTaintsがあるノード用です。</span> <span class="merged" id="all.2FJ8Dd.spl2" title="原文 :  Useful if you want to dedicate nodes to just run the coherence container + For example: tolerations: + - key: &quot;key&quot; + operator: &quot;Equal&quot; + value: &quot;value&quot; + effect: &quot;NoSchedule&quot; + ref: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ "><br>コヒーレンス・コンテナを実行するのみのノード専用にする場合に便利です+<br>次に例を示します:<br>許容範囲: +<br>- key : "key" +<br>オペレータ : "Equal" +<br>value : "value" +<br>作用 : "NoSchedule" +<br><br>ref:<a href="https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/" id="" target="_blank" >https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/</a><br></span> </td>
<td class=""><span class="merged" id="all.Jej5F"  title="原文: []corev1.Toleration"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#toleration-v1-core" id="" target="_blank" >corev1.Toleration</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.33"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3XP0J8"  title="原文: securityContext"><code>securityContext</code></span></td>
<td class=""><span class="merged" id="all.2AftNP.spl1" title="原文 : SecurityContext is the PodSecurityContext that will be added to all of the Pods in this deployment.">SecurityContextは、このデプロイメントのすべてのポッドに追加されるPodSecurityContextです。</span> <span class="merged" id="all.2AftNP.spl2" title="原文 : See: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">参照 : <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/" id="" target="_blank" >https://kubernetes.io/docs/tasks/configure-pod-container/security-context/</a></span> </td>
<td class=""><span class="merged" id="all.3EVrUx"  title="原文: *corev1.PodSecurityContext"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#podsecuritycontext-v1-core" id="" target="_blank" >corev1.PodSecurityContext</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.34"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.wjpuU"  title="原文: shareProcessNamespace"><code>shareProcessNamespace</code></span></td>
<td class=""><span class="merged" id="all.M4Z66.spl1" title="原文 : Share a single process namespace between all of the containers in a pod.">ポッド内のすべてのコンテナ間で単一のプロセス・ネームスペースを共有します。</span> <span class="merged" id="all.M4Z66.spl2" title="原文 : When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1.">これを設定すると、コンテナは同じポッド内の他のコンテナからのプロセスを表示およびシグナル送信でき、各コンテナの最初のプロセスにはPID 1が割り当てられません。</span> <span class="merged" id="all.M4Z66.spl3" title="原文 : HostPID and ShareProcessNamespace cannot both be set.">HostPIDとShareProcessNamespaceの両方を設定できません。</span> <span class="merged" id="all.M4Z66.spl4" title="原文 : Optional: Default to false.">オプション: デフォルトはfalseです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.1"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.35"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.MBbPG"  title="原文: hostIPC"><code>hostIPC</code></span></td>
<td class=""><span class="merged" id="all.2q45Bb.spl1" title="原文 : Use the host&rsquo;s ipc namespace.">ホストのipcネームスペースを使用します。</span> <span class="merged" id="all.2q45Bb.spl2" title="原文 : Optional: Default to false.">オプション: デフォルトはfalseです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.2"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.36"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4YPMmb"  title="原文: network"><code>network</code></span></td>
<td class=""><span class="merged" id="all.2Bm4w4" title="原文 : Configure various networks and DNS settings for Pods in this rolw.">この屋根のポッドの様々なネットワークおよびDNS設定を構成します。</span></td>
<td class=""><span class="merged" id="all.8OkLp"  title="原文: *NetworkSpec"><code>*<router-link @click.native="this.scrollFix('#_networkspec')" to="#_networkspec">NetworkSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.37"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3IviYI"  title="原文: coherenceUtils"><code>coherenceUtils</code></span></td>
<td class=""><span class="merged" id="all.1llc6p" title="原文 : The configuration for the Coherence utils image">Coherenceユーティリティ・イメージの構成</span></td>
<td class=""><span class="merged" id="all.BZSIN"  title="原文: *ImageSpec"><code>*<router-link @click.native="this.scrollFix('#_imagespec')" to="#_imagespec">ImageSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.38"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Ywsyf"  title="原文: serviceAccountName"><code>serviceAccountName</code></span></td>
<td class=""><span class="merged" id="all.2LWnmc" title="原文 : The name to use for the service account to use when RBAC is enabled The role bindings must already have been created as this chart does not create them it just sets the serviceAccountName value in the Pod spec.">RBACが有効になっている場合に使用するサービス・アカウントに使用する名前。このチャートではポッド仕様でserviceAccountName値を設定するだけなので、ロール・バインドはすでに作成されている必要があります。</span></td>
<td class=""><span class="merged" id="all.W18FC.1"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.39"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.103ZMv"  title="原文: automountServiceAccountToken"><code>automountServiceAccountToken</code></span></td>
<td class=""><span class="merged" id="all.2nFZqD" title="原文 : Whether or not to auto-mount the Kubernetes API credentials for a service account">サービス・アカウントのKubernetes API資格証明を自動マウントするかどうか</span></td>
<td class=""><span class="merged" id="all.q9cn0.3"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.40"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3oi8J3"  title="原文: operatorRequestTimeout"><code>operatorRequestTimeout</code></span></td>
<td class=""><span class="merged" id="all.2UQ4am.spl1" title="原文 : The timeout to apply to REST requests made back to the Operator from Coherence Pods.">Coherenceポッドからオペレータに戻されたRESTリクエストに適用するタイムアウト。</span> <span class="merged" id="all.2UQ4am.spl2" title="原文 : These requests are typically to obtain site and rack information for the Pod.">これらのリクエストは通常、ポッドのサイトおよびラック情報を取得します。</span> </td>
<td class=""><span class="merged" id="all.C5sgP.2"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.41"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Zvz2Y"  title="原文: haBeforeUpdate"><code>haBeforeUpdate</code></span></td>
<td class=""><span class="merged" id="all.3EIibW.spl1" title="原文 : Whether or not to perform a StatusHA test on the cluster before performing an update or deletion.">更新または削除を実行する前に、クラスタでStatusHAテストを実行するかどうか。</span> <span class="merged" id="all.3EIibW.spl2" title="原文 : This field can be set to false to force through an update even when a Coherence deployment is in an unstable state.">Coherenceデプロイメントが不安定な状態の場合でも、このフィールドをfalseに設定すると、更新を強制的に実行できます。</span> <span class="merged" id="all.3EIibW.spl3" title="原文 : The default is true, to always check for StatusHA before updating a Coherence deployment.">デフォルトでは、Coherenceデプロイメントを更新する前にStatusHAを常にチェックします。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.4"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.42"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_applicationspec"><span class="merged" id="all.naep6"  title="原文: ApplicationSpec">ApplicationSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.4ejKFc" title="原文 : ApplicationSpec is the specification of the application deployed into the Coherence.">ApplicationSpecは、Coherenceにデプロイされるアプリケーションの仕様です。</span></p>


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
<td class=""><span class="merged" id="all.2SYAnU"  title="原文: type"><code>type</code></span></td>
<td class=""><span class="merged" id="all.1Le4zC.spl1" title="原文 : The application type to execute.">実行するアプリケーション・タイプ。</span> <span class="merged" id="all.1Le4zC.spl2" title="原文 : This field would be set if using the Coherence Graal image and running a none-Java application.">このフィールドは、Coherence Graalイメージを使用して非Javaアプリケーションを実行する場合に設定されます。</span> <span class="merged" id="all.1Le4zC.spl3" title="原文 : For example if the application was a Node application this field would be set to &quot;node&quot;.">たとえば、アプリケーションがノード・アプリケーションの場合、このフィールドはノードに設定されます。</span> <span class="merged" id="all.1Le4zC.spl4" title="原文 : The default is to run a plain Java application.">デフォルトでは、プレーンJavaアプリケーションが実行されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.4"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.43"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.14UbjG"  title="原文: main"><code>main</code></span></td>
<td class=""><span class="merged" id="all.3CylWs.spl1" title="原文 : Class is the Coherence container main class.">クラスはCoherenceコンテナ・メイン・クラスです。</span> <span class="merged" id="all.3CylWs.spl2" title="原文 : The default value is com.tangosol.net.DefaultCacheServer.">デフォルト値はcom.tangosol.net.DefaultCacheServerです。</span> <span class="merged" id="all.3CylWs.spl3" title="原文 : If the application type is non-Java this would be the name of the corresponding language specific runnable, for example if the application type is &quot;node&quot; the main may be a Javascript file.">アプリケーション・タイプがJavaでない場合、これは対応する言語固有の実行可能の名前になります。たとえば、アプリケーション・タイプがノードの場合、メインはJavascriptファイルになります。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.5"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.44"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3s3zbi"  title="原文: args"><code>args</code></span></td>
<td class=""><span class="merged" id="all.Pd4D2" title="原文 : Args is the optional arguments to pass to the main class.">Argsは、メイン・クラスに渡すオプションの引数です。</span></td>
<td class=""><span class="merged" id="all.rXwhA"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.45"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4NOXDu"  title="原文: workingDir"><code>workingDir</code></span></td>
<td class=""><span class="merged" id="all.2TKUTt.spl1" title="原文 : The application folder in the custom artifacts Docker image containing application artifacts.">アプリケーション・アーティファクトを含むカスタム・アーティファクトDockerイメージ内のアプリケーション・フォルダ。</span> <span class="merged" id="all.2TKUTt.spl2" title="原文 : This will effectively become the working directory of the Coherence container.">これにより、効果的にCoherenceコンテナの作業ディレクトリになります。</span> <span class="merged" id="all.2TKUTt.spl3" title="原文 : If not set the application directory default value is &quot;/app&quot;.">アプリケーション・ディレクトリのデフォルト値が「/app"」に設定されていない場合。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.6"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.46"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3NzqlH"  title="原文: cloudNativeBuildPack"><code>cloudNativeBuildPack</code></span></td>
<td class=""><span class="merged" id="all.3cLHIh.spl1" title="原文 : Optional settings that may be configured if using a Cloud Native Buildpack Image.">クラウド・ネイティブのBuildpackイメージを使用している場合で構成できるオプションの設定。</span> <span class="merged" id="all.3cLHIh.spl2" title="原文 : For example an image build with the Spring Boot Maven/Gradle plugin.">たとえば、Spring Boot Maven/Gradleプラグインを使用したイメージ・ビルドなどです。</span> <span class="merged" id="all.3cLHIh.spl3" title="原文 : See: https://github.com/paketo-buildpacks/spring-boot and https://buildpacks.io/">参照 : <a href="https://github.com/paketo-buildpacks/spring-boot" id="" target="_blank" >https://github.com/paketo-buildpacks/spring-boot</a>および<a href="https://buildpacks.io/" id="" target="_blank" >https://buildpacks.io/</a></span> </td>
<td class=""><span class="merged" id="all.1I4APv"  title="原文: *CloudNativeBuildPackSpec"><code>*<router-link @click.native="this.scrollFix('#_cloudnativebuildpackspec')" to="#_cloudnativebuildpackspec">CloudNativeBuildPackSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.47"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4eerEa"  title="原文: springBootFatJar"><code>springBootFatJar</code></span></td>
<td class=""><span class="merged" id="all.4Za6HR.spl1" title="原文 : SpringBootFatJar is the full path name to the Spring Boot fat jar if the application image has been built by just adding a Spring Boot fat jar to the image.">SpringBootFatJarは、リング・ブート・ファットjarをイメージに追加するだけでアプリケーション・イメージが構築されている場合のSpring Boot fat jarへのフルパス名です。</span> <span class="merged" id="all.4Za6HR.spl2" title="原文 : If this field is set then the application will be run by executing this jar.">このフィールドを設定すると、このjarを実行してアプリケーションが実行されます。</span> <span class="merged" id="all.4Za6HR.spl3" title="原文 : For example, if this field is &quot;/app/libs/foo.jar&quot; the command line will be &quot;java -jar app/libs/foo.jar&quot;">たとえば、このフィールドが"/app/libs/foo.jar""の場合、コマンドラインは"java -jar app/libs/foo.jar"になります</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.7"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.48"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.1" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_cloudnativebuildpackspec"><span class="merged" id="all.1bls7w"  title="原文: CloudNativeBuildPackSpec">CloudNativeBuildPackSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.1UM8FI.spl1" title="原文 : CloudNativeBuildPackSpec is the configuration when using a Cloud Native Buildpack Image.">CloudNativeBuildPackSpecは、Cloud Native Buildpackイメージを使用する場合の構成です。</span> <span class="merged" id="all.1UM8FI.spl2" title="原文 : For example an image build with the Spring Boot Maven/Gradle plugin.">たとえば、Spring Boot Maven/Gradleプラグインを使用したイメージ・ビルドなどです。</span> <span class="merged" id="all.1UM8FI.spl3" title="原文 : See: https://github.com/paketo-buildpacks/spring-boot and https://buildpacks.io/">参照 : <a href="https://github.com/paketo-buildpacks/spring-boot" id="" target="_blank" >https://github.com/paketo-buildpacks/spring-boot</a>および<a href="https://buildpacks.io/" id="" target="_blank" >https://buildpacks.io/</a></span> </p>


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
<td class=""><span class="merged" id="all.48UcwL"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.Q9pX.spl1" title="原文 : Enable or disable buildpack detection.">ビルド・パック検出を有効または無効にします。</span> <span class="merged" id="all.Q9pX.spl2" title="原文 : The operator will automatically detect Cloud Native Buildpack images but if this auto-detection fails to work correctly for a specific image then this field can be set to true to signify that the image is a buildpack image or false to signify that it is not a buildpack image.">オペレータは、クラウド・ネイティブのBuildpackイメージを自動的に検出しますが、この自動検出が特定のイメージに対して正しく動作しない場合、このフィールドをtrueに設定して、イメージがビルド・パック・イメージであることを確認するか、falseに設定してビルド・パック・イメージではないことを示すことができます。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.5"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.49"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WTzgP"  title="原文: launcher"><code>launcher</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2JXhOu.8"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.50"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.2" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_coherencespec"><span class="merged" id="all.2Y2Y7i"  title="原文: CoherenceSpec">CoherenceSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.1sdvBC" title="原文 : CoherenceSpec is the section of the CRD configures settings specific to Coherence. see: Coherence Configuration">CoherenceSpecは、CRDがCoherence固有の設定を構成するセクションです。<br>見る: <router-link @click.native="this.scrollFix('#coherence_settings/010_overview.adoc')" to="#coherence_settings/010_overview.adoc">Coherence構成</router-link></span></p>


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
<td class=""><span class="merged" id="all.3rE981"  title="原文: cacheConfig"><code>cacheConfig</code></span></td>
<td class=""><span class="merged" id="all.43UHWt" title="原文 : CacheConfig is the name of the cache configuration file to use see: Configure Cache Config File">CacheConfigは、使用するキャッシュ構成ファイルの名前です<br>見る: <router-link @click.native="this.scrollFix('#coherence_settings/030_cache_config.adoc')" to="#coherence_settings/030_cache_config.adoc">キャッシュ構成ファイルの構成</router-link></span></td>
<td class=""><span class="merged" id="all.2JXhOu.9"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.51"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3P8H6e"  title="原文: overrideConfig"><code>overrideConfig</code></span></td>
<td class=""><span class="merged" id="all.uyNQU" title="原文 : OverrideConfig is name of the Coherence operational configuration override file, the default is tangosol-coherence-override.xml see: Configure Operational Config File">OverrideConfigは、Coherence操作構成オーバーライド・ファイルの名前です。デフォルトはtangosol-coherence-override.xmlです<br>見る: <router-link @click.native="this.scrollFix('#coherence_settings/040_override_file.adoc')" to="#coherence_settings/040_override_file.adoc">操作構成ファイルの構成</router-link></span></td>
<td class=""><span class="merged" id="all.2JXhOu.10"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.52"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CRqYJ"  title="原文: storageEnabled"><code>storageEnabled</code></span></td>
<td class=""><span class="merged" id="all.3nDRhc.spl1" title="原文 : A boolean flag indicating whether members of this deployment are storage enabled.">このデプロイメントのメンバーがストレージに対応しているかどうかを示すブール・フラグ。</span> <span class="merged" id="all.3nDRhc.spl2" title="原文 : This value will set the corresponding coherence.distributed.localstorage System property.">この値は、対応するcoherence.distributed.localstorageシステム・プロパティを設定します。</span> <span class="merged" id="all.3nDRhc.spl3" title="原文 : If not specified the default value is true.">指定しない場合、デフォルト値はtrueです。</span> <span class="merged" id="all.3nDRhc.spl4" title="原文 : This flag is also used to configure the ScalingPolicy value if a value is not specified.">このフラグは、値が指定されていない場合にScalingPolicy値を構成するためにも使用されます。</span> <span class="merged" id="all.3nDRhc.spl5" title="原文 : If the StorageEnabled field is not specified or is true the scaling will be safe, if StorageEnabled is set to false scaling will be parallel. see: Configure Storage Enabled">StorageEnabledフィールドが指定されていないか、trueの場合、StorageEnabledをfalseスケールに設定するとスケーリングは安全になります。<br>見る: <router-link @click.native="this.scrollFix('#coherence_settings/050_storage_enabled.adoc')" to="#coherence_settings/050_storage_enabled.adoc">ストレージの構成が有効</router-link></span> </td>
<td class=""><span class="merged" id="all.q9cn0.6"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.53"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.qBRd"  title="原文: persistence"><code>persistence</code></span></td>
<td class=""><span class="merged" id="all.4dEFWz.spl1" title="原文 : Persistence values configure the on-disc data persistence settings.">永続性値は、オン・ディスクのデータ永続性の設定を構成します。</span> <span class="merged" id="all.4dEFWz.spl2" title="原文 : The bool Enabled enables or disabled on disc persistence of data. see: Configure Persistence">bool Enabledは、データのディスク永続性に対して有効または無効にします。<br>見る: <router-link @click.native="this.scrollFix('#coherence_settings/080_persistence.adoc')" to="#coherence_settings/080_persistence.adoc">永続性の構成</router-link></span> </td>
<td class=""><span class="merged" id="all.2z4pO5"  title="原文: *PersistenceSpec"><code>*<router-link @click.native="this.scrollFix('#_persistencespec')" to="#_persistencespec">PersistenceSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.54"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.40dLS2"  title="原文: logLevel"><code>logLevel</code></span></td>
<td class=""><span class="merged" id="all.3IXIHj" title="原文 : The Coherence log level, default being 5 (info level). see: Configure Coherence log level">Coherenceログ・レベル(デフォルトは5(情報レベル)です。<br>見る: <router-link @click.native="this.scrollFix('#coherence_settings/060_log_level.adoc')" to="#coherence_settings/060_log_level.adoc">Coherenceログ・レベルの構成</router-link></span></td>
<td class=""><span class="merged" id="all.C5sgP.3"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.55"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1VBdjz"  title="原文: management"><code>management</code></span></td>
<td class=""><span class="merged" id="all.2l56S0" title="原文 : Management configures Coherence management over REST Note: Coherence management over REST will is available in Coherence version &gt;= 12.2.1.4. see: Management &amp; Diagnostics">管理は、RESTノートでCoherence管理を構成: RESTを介したCoherence管理は、Coherenceバージョン>= 12.2.1.4で使用できます。<br>見る: <router-link @click.native="this.scrollFix('#management_and_diagnostics/010_overview.adoc')" to="#management_and_diagnostics/010_overview.adoc">管理&amp;診断</router-link></span></td>
<td class=""><span class="merged" id="all.AQZbL"  title="原文: *PortSpecWithSSL"><code>*<router-link @click.native="this.scrollFix('#_portspecwithssl')" to="#_portspecwithssl">PortSpecWithSSL</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.56"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4KU3uR"  title="原文: metrics"><code>metrics</code></span></td>
<td class=""><span class="merged" id="all.3Vygx" title="原文 : Metrics configures Coherence metrics publishing Note: Coherence metrics publishing will is available in Coherence version &gt;= 12.2.1.4. see: Metrics">メトリクスは、Coherenceメトリクス公開ノートを構成: Coherenceメトリクス公開は、Coherenceバージョン>= 12.2.1.4で使用できます。<br>見る: <router-link to="/metrics/010_overview">メトリクス</router-link></span></td>
<td class=""><span class="merged" id="all.AQZbL.1"  title="原文: *PortSpecWithSSL"><code>*<router-link @click.native="this.scrollFix('#_portspecwithssl')" to="#_portspecwithssl">PortSpecWithSSL</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.57"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Zsfo8"  title="原文: tracing"><code>tracing</code></span></td>
<td class=""><span class="merged" id="all.2jLpSN" title="原文 : Tracing is used to configure Coherence distributed tracing functionality.">トレースは、Coherence分散トレース機能の構成に使用されます。</span></td>
<td class=""><span class="merged" id="all.4A3j4V"  title="原文: *CoherenceTracingSpec"><code>*<router-link @click.native="this.scrollFix('#_coherencetracingspec')" to="#_coherencetracingspec">CoherenceTracingSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.58"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4IvmVv"  title="原文: allowEndangeredForStatusHA"><code>allowEndangeredForStatusHA</code></span></td>
<td class=""><span class="merged" id="all.3CPk4x.spl1" title="原文 : AllowEndangeredForStatusHA is a list of Coherence partitioned cache service names that are allowed to be in an endangered state when testing for StatusHA.">AllowEndangeredForStatusHAは、StatusHAのテスト時に危険にさらされる状態にあるCoherenceパーティション・キャッシュ・サービス名のリストです。</span> <span class="merged" id="all.3CPk4x.spl2" title="原文 : Instances where a StatusHA check is performed include the readiness probe and when scaling a deployment.">StatusHAチェックが実行されるインスタンスには、レディネス・プローブおよびデプロイメントをスケーリングするときが含まれます。</span> <span class="merged" id="all.3CPk4x.spl3" title="原文 : This field would not typically be used except in cases where a cache service is configured with a backup count greater than zero but it does not matter if caches in those services loose data due to member departure.">このフィールドは、通常、キャッシュ・サービスがゼロより大きいバックアップ数で構成されていても、メンバーの出発のためにそれらのサービスが緩んだデータにある場合は使用されません。</span> <span class="merged" id="all.3CPk4x.spl4" title="原文 : Normally, such cache services would have a backup count of zero, which would automatically excluded them from the StatusHA check.">通常、このようなキャッシュ・サービスのバックアップ数はゼロになり、StatusHAチェックから自動的に除外されます。</span> </td>
<td class=""><span class="merged" id="all.rXwhA.1"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.59"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3T4f2k"  title="原文: excludeFromWKA"><code>excludeFromWKA</code></span></td>
<td class=""><span class="merged" id="all.cgqYC" title="原文 : Exclude members of this deployment from being part of the cluster&rsquo;s WKA list. see: Well Known Addressing">このデプロイメントのメンバーをクラスタWKAリストの一部から除外します。<br>見る: <router-link @click.native="this.scrollFix('#coherence_settings/070_wka.adoc')" to="#coherence_settings/070_wka.adoc">よく知られたアドレス指定</router-link></span></td>
<td class=""><span class="merged" id="all.q9cn0.7"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.60"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WKgbM"  title="原文: wka"><code>wka</code></span></td>
<td class=""><span class="merged" id="all.vgvLE.spl1" title="原文 : Specify an existing Coherence deployment to be used for WKA.">WKAに使用する既存のCoherenceデプロイメントを指定します。</span> <span class="merged" id="all.vgvLE.spl2" title="原文 : If an existing deployment is to be used for WKA the ExcludeFromWKA is implicitly set to true. see: Well Known Addressing">既存のデプロイメントをWKAで使用する場合、ExcludeFromWKAは暗黙的にtrueに設定されます。<br>見る: <router-link @click.native="this.scrollFix('#coherence_settings/070_wka.adoc')" to="#coherence_settings/070_wka.adoc">よく知られたアドレス指定</router-link></span> </td>
<td class=""><span class="merged" id="all.2O1tGw"  title="原文: *CoherenceWKASpec"><code>*<router-link @click.native="this.scrollFix('#_coherencewkaspec')" to="#_coherencewkaspec">CoherenceWKASpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.61"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4054yt"  title="原文: skipVersionCheck"><code>skipVersionCheck</code></span></td>
<td class=""><span class="merged" id="all.1HI3bm.spl1" title="原文 : Certain features rely on a version check prior to starting the server, e.g. metrics requires &gt;= 12.2.1.4.">特定の機能は、サーバーを起動する前にバージョン・チェックに依存します。たとえば、メトリクスには12.2.1.4が必要です。</span> <span class="merged" id="all.1HI3bm.spl2" title="原文 : The version check relies on the ability of the start script to find coherence.jar but if due to how the image has been built this check is failing then setting this flag to true will skip version checking and assume that the latest coherence.jar is being used.">バージョン・チェックでは、coherence.jarを検索するための起動スクリプトの機能を使用しますが、イメージが構築されたことが原因で、このチェックが失敗している場合は、このフラグをtrueに設定するとバージョン・チェックがスキップされ、最新のcoherence.jarが使用されているとみなされます。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.8"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.62"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hW34l"  title="原文: enableIpMonitor"><code>enableIpMonitor</code></span></td>
<td class=""><span class="merged" id="all.1uoXWI.spl1" title="原文 : Enables the Coherence IP Monitor feature.">Coherence IPモニター機能を有効にします。</span> <span class="merged" id="all.1uoXWI.spl2" title="原文 : The Operator disables the IP Monitor by default.">オペレータは、デフォルトでIPモニターを無効にします。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.9"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.63"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.3" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.4"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.4"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.4"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.4"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1RsXFS"  title="原文: ratio"><code>ratio</code></span></td>
<td class=""><span class="merged" id="all.2shXUo.spl1" title="原文 : Ratio is the tracing sampling-ratio, which controls the likelihood of a tracing span being collected.">比率は、収集されるトレース・スパンの可能性を制御するトレース・サンプリング率です。</span> <span class="merged" id="all.2shXUo.spl2" title="原文 : For instance, a value of 1.0 will result in all tracing spans being collected, while a value of 0.1 will result in roughly 1 out of every 10 tracing spans being collected.">たとえば、1.0の値を指定すると、すべてのトレース・スパンが収集され、0.1の値を指定すると、収集される10個のトレース・スパンごとにほぼ1つずつ生成されます。</span> <span class="merged" id="all.2shXUo.spl3"  title="原文:  A value of 0 indicates that tracing spans should only be collected if they are already in the context of another tracing span."><br> <br> 0の値は、トレース・スパンが、別のトレース・スパンのコンテキストですでに存在する場合にのみ収集される必要があることを示します。</span> <span class="merged" id="all.2shXUo.spl4" title="原文 : With such a configuration, Coherence will not initiate tracing on its own, and it is up to the application to start an outer tracing span, from which Coherence will then collect inner tracing spans.">このような構成では、Coherenceは自身でトレースを開始せず、外部トレース・スパンを起動するアプリケーションまでで、Coherenceは内部トレース・スパンを収集します。</span> <span class="merged" id="all.2shXUo.spl5"  title="原文:  A value of -1 disables tracing completely."><br> <br> 値-1を指定すると、トレースが完全に無効化されます。</span> <span class="merged" id="all.2shXUo.spl6" title="原文 :  The Coherence default is -1 if not overridden."><br> <br> The Coherence default is -1 if not overridden.</span> <span class="merged" id="all.2shXUo.spl7" title="原文 : For values other than -1, numbers between 0 and 1 are acceptable.">-1以外の値の場合、0から1までの数字を使用できます。</span> <span class="merged" id="all.2shXUo.spl8" title="原文 :  NOTE: This field is a k8s resource.Quantity value as CRDs do not support decimal numbers."><br><br>ノート: Thisfieldisak8sresource.QuantityvalueasCRDsdonotsupportdecimalnumbers.</span> <span class="merged" id="all.2shXUo.spl9" title="原文 : See https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity for the different formats of number that may be entered.">入力可能な数の様々な形式については、<a href="https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity" id="" target="_blank" >https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity</a>を参照してください。</span> </td>
<td class=""><span class="merged" id="all.2y07uS"  title="原文: *resource.Quantity"><code>*resource.Quantity</code></span></td>
<td class=""><span class="merged" id="all.njUKu.64"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.4" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.5"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.5"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.5"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.5"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.37VxbY"  title="原文: deployment"><code>deployment</code></span></td>
<td class=""><span class="merged" id="all.42nFrj" title="原文 : The name of the existing Coherence deployment to use for WKA.">WKAに使用する既存のCoherenceデプロイメントの名前。</span></td>
<td class=""><span class="merged" id="all.W18FC.2"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fCyV9"  title="原文: namespace"><code>namespace</code></span></td>
<td class=""><span class="merged" id="all.2nilNh" title="原文 : The optional namespace of the existing Coherence deployment to use for WKA if different from this deployment&rsquo;s namespace.">WKAに使用する既存のCoherenceデプロイメントのオプション・ネームスペース(このデプロイメントのネームスペースと異なる場合)。</span></td>
<td class=""><span class="merged" id="all.W18FC.3"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.65"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.5" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_configmapvolumespec"><span class="merged" id="all.3Ta4Lu"  title="原文: ConfigMapVolumeSpec">ConfigMapVolumeSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.3RZ7S2" title="原文 : ConfigMapVolumeSpec represents a ConfigMap that will be added to the deployment&rsquo;s Pods as an additional Volume and as a VolumeMount in the containers. see: Add ConfigMap Volumes">ConfigMapVolumeSpecは、デプロイメント・ポッドに追加ボリュームとして追加され、コンテナ内のVolumeMountとして追加されるConfigMapを表します。<br>見る: <router-link @click.native="this.scrollFix('#misc_pod_settings/050_configmap_volumes.adoc')" to="#misc_pod_settings/050_configmap_volumes.adoc">ConfigMapボリュームの追加</router-link></span></p>


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
<td class=""><span class="merged" id="all.309fiz"  title="原文: name"><code>name</code></span></td>
<td class=""><span class="merged" id="all.pl6eE.spl1" title="原文 : The name of the ConfigMap to mount.">マウントするConfigMapの名前。</span> <span class="merged" id="all.pl6eE.spl2" title="原文 : This will also be used as the name of the Volume added to the Pod if the VolumeName field is not set.">これは、VolumeNameフィールドが設定されていない場合、ポッドに追加されたボリュームの名前としても使用されます。</span> </td>
<td class=""><span class="merged" id="all.W18FC.4"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.1"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZMeSS"  title="原文: mountPath"><code>mountPath</code></span></td>
<td class=""><span class="merged" id="all.2cupoy.spl1" title="原文 : Path within the container at which the volume should be mounted.">ボリュームをマウントするコンテナ内のパス。</span> <span class="merged" id="all.2cupoy.spl2" title="原文 : Must not contain &apos;:&apos;.">':'を含めることはできません。</span> </td>
<td class=""><span class="merged" id="all.W18FC.5"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.2"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yWp2V"  title="原文: volumeName"><code>volumeName</code></span></td>
<td class=""><span class="merged" id="all.2XBZuL.spl1" title="原文 : The optional name to use for the Volume added to the Pod.">ポッドに追加されるボリュームに使用するオプションの名前。</span> <span class="merged" id="all.2XBZuL.spl2" title="原文 : If not set, the ConfigMap name will be used as the VolumeName.">設定しない場合、ConfigMap名がVolumeNameとして使用されます。</span> </td>
<td class=""><span class="merged" id="all.W18FC.6"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.66"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3wva11"  title="原文: readOnly"><code>readOnly</code></span></td>
<td class=""><span class="merged" id="all.2zWRdn.spl1" title="原文 : Mounted read-only if true, read-write otherwise (false or unspecified).">trueの場合、読み取り専用でマウントされます。それ以外の場合は読み取り/書き込み(falseまたは未指定)。</span> <span class="merged" id="all.2zWRdn.spl2"  title="原文:: Defaults to false.">デフォルトはfalseです。</span> </td>
<td class=""><span class="merged" id="all.2Sqi2i"  title="原文: bool"><code>bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.67"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.uxrbO"  title="原文: subPath"><code>subPath</code></span></td>
<td class=""><span class="merged" id="all.3eNCa5.spl1" title="原文 : Path within the volume from which the container&rsquo;s volume should be mounted.">コンテナのボリュームをマウントするボリューム内のパス。</span> <span class="merged" id="all.3eNCa5.spl2" title="原文 : Defaults to &quot;&quot; (volume&rsquo;s root).">デフォルトは"" (ボリュームのルート)です。</span> </td>
<td class=""><span class="merged" id="all.W18FC.7"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.68"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Ps765"  title="原文: mountPropagation"><code>mountPropagation</code></span></td>
<td class=""><span class="merged" id="all.3fjZ9a.spl1" title="原文 : mountPropagation determines how mounts are propagated from the host to container and the other way around.">mountPropagationは、ホストからコンテナへのマウントの伝播方法と、その逆の方法を決定します。</span> <span class="merged" id="all.3fjZ9a.spl2" title="原文 : When not set, MountPropagationNone is used.">設定しない場合、MountPropagationNoneが使用されます。</span> </td>
<td class=""><span class="merged" id="all.2gOAM6"  title="原文: *corev1.MountPropagationMode"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#mountpropagationmode-v1-core" id="" target="_blank" >corev1.MountPropagationMode</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.69"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XcR2k"  title="原文: subPathExpr"><code>subPathExpr</code></span></td>
<td class=""><span class="merged" id="all.2xHhZ1.spl1" title="原文 : Expanded path within the volume from which the container&rsquo;s volume should be mounted.">コンテナのボリュームをマウントするボリューム内の拡張パス。</span> <span class="merged" id="all.2xHhZ1.spl2" title="原文 : Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container&rsquo;s environment.">SubPathと同様に動作しますが、環境変数参照$(VAR_NAME)はコンテナの環境を使用して拡張されます。</span> <span class="merged" id="all.2xHhZ1.spl3" title="原文 : Defaults to &quot;&quot; (volume&rsquo;s root).">デフォルトは"" (ボリュームのルート)です。</span> <span class="merged" id="all.2xHhZ1.spl4" title="原文 : SubPathExpr and SubPath are mutually exclusive.">SubPathExprとSubPathは相互に排他的です。</span> </td>
<td class=""><span class="merged" id="all.W18FC.8"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.70"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WuGEZ"  title="原文: items"><code>items</code></span></td>
<td class=""><span class="merged" id="all.3dILuD.spl1" title="原文 : If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value.">指定しない場合、参照されているConfigMapのデータ・フィールドの各キーと値のペアは、名前がキーで内容が値であるファイルとしてボリュームに投影されます。</span> <span class="merged" id="all.3dILuD.spl2" title="原文 : If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present.">指定された場合、リストされているキーは指定されたパスに投影され、リストされていないキーは表示されません。</span> <span class="merged" id="all.3dILuD.spl3" title="原文 : If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional.">ConfigMapに存在しないキーが指定されている場合、ボリューム設定はオプションとしてマークされないかぎりエラーになります。</span> <span class="merged" id="all.3dILuD.spl4" title="原文 : Paths must be relative and may not contain the &apos;..&apos; path or start with &apos;..&apos;.">パスは相対パスである必要があり、'..'パスを含むことも、'..'で始まることもできません。</span> </td>
<td class=""><span class="merged" id="all.4eeJz2"  title="原文: []corev1.KeyToPath"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#keytopath-v1-core" id="" target="_blank" >corev1.KeyToPath</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.71"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hViGd"  title="原文: defaultMode"><code>defaultMode</code></span></td>
<td class=""><span class="merged" id="all.2c3pwb.spl1" title="原文 : Optional: mode bits to use on created files by default.">オプション: デフォルトでは、作成されたファイルで使用するモード・ビット。</span> <span class="merged" id="all.2c3pwb.spl2"  title="原文:: Must be a value between 0 and 0777.">0から0777の間の値である必要があります。</span> <span class="merged" id="all.2c3pwb.spl3"  title="原文:: Defaults to 0644.">デフォルトは0644です。</span> <span class="merged" id="all.2c3pwb.spl4" title="原文 : Directories within the path are not affected by this setting.">パス内のディレクトリは、この設定に影響されません。</span> <span class="merged" id="all.2c3pwb.spl5" title="原文 : This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.">これは、fsGroupなどのファイル・モードに影響を与えるほかのオプションと競合し、その結果がその他のモード・ビット・セットになることがあります。</span> </td>
<td class=""><span class="merged" id="all.C5sgP.4"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.72"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.26yA7g" title="原文 : Specify whether the ConfigMap or its keys must be defined">ConfigMapまたはそのキーを定義する必要があるかどうかを指定</span></td>
<td class=""><span class="merged" id="all.q9cn0.10"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.73"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.6" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.7"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.7"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.7"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.7"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2vvqy1.1"  title="原文: image"><code>image</code></span></td>
<td class=""><span class="merged" id="all.4Fzn0M.spl1" title="原文 : The image name.">イメージ名。</span> <span class="merged" id="all.4Fzn0M.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/containers/images">詳細情報 : <a href="https://kubernetes.io/docs/concepts/containers/images" id="" target="_blank" >https://kubernetes.io/docs/concepts/containers/images</a></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.11"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.74"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yaYc3.1"  title="原文: imagePullPolicy"><code>imagePullPolicy</code></span></td>
<td class=""><span class="merged" id="all.267YMn.1.spl1" title="原文 : Image pull policy.">イメージ・プル・ポリシー。</span> <span class="merged" id="all.267YMn.1.spl2" title="原文 : One of Always, Never, IfNotPresent.">Always、Never、IfNotPresentのいずれか。</span> <span class="merged" id="all.267YMn.1.spl3" title="原文 : More info: https://kubernetes.io/docs/concepts/containers/images#updating-images">詳細情報 : <a href="https://kubernetes.io/docs/concepts/containers/images#updating-images" id="" target="_blank" >https://kubernetes.io/docs/concepts/containers/images#updating-images</a></span> </td>
<td class=""><span class="merged" id="all.3NkYuH.1"  title="原文: *corev1.PullPolicy"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#pullpolicy-v1-core" id="" target="_blank" >corev1.PullPolicy</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.75"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.7" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.8"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.8"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.8"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.8"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1TsKfV"  title="原文: classpath"><code>classpath</code></span></td>
<td class=""><span class="merged" id="all.1bK9Se" title="原文 : Classpath specifies additional items to add to the classpath of the JVM.">Classpathは、JVMのクラスパスに追加するアイテムを指定します。</span></td>
<td class=""><span class="merged" id="all.rXwhA.2"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.76"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3s3zbi.1"  title="原文: args"><code>args</code></span></td>
<td class=""><span class="merged" id="all.4DE6EC" title="原文 : Args specifies the options (System properties, -XX: args etc) to pass to the JVM.">引数はオプション(システム・プロパティ、 -XX)を指定: argsなど)JVMに渡されます。</span></td>
<td class=""><span class="merged" id="all.rXwhA.3"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.77"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3DDEId"  title="原文: debug"><code>debug</code></span></td>
<td class=""><span class="merged" id="all.3LJPM9" title="原文 : The settings for enabling debug mode in the JVM.">JVMでデバッグ・モードを有効にするための設定。</span></td>
<td class=""><span class="merged" id="all.3f1Yhp"  title="原文: *JvmDebugSpec"><code>*<router-link @click.native="this.scrollFix('#_jvmdebugspec')" to="#_jvmdebugspec">JvmDebugSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.78"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4bQ389"  title="原文: useContainerLimits"><code>useContainerLimits</code></span></td>
<td class=""><span class="merged" id="all.42wm5G.spl1" title="原文 : If set to true Adds the -XX:+UseContainerSupport JVM option to ensure that the JVM respects any container resource limits.">trueに設定すると、 -XX:+「UseContainerSupport JVM」オプションが追加され、JVMによってコンテナ・リソース制限が考慮されます。</span> <span class="merged" id="all.42wm5G.spl2"  title="原文: The default value is true">デフォルト値はtrueです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.11"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.79"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.sQ6yG"  title="原文: gc"><code>gc</code></span></td>
<td class=""><span class="merged" id="all.3ns69n" title="原文 : Set JVM garbage collector options.">JVMガベージ・コレクタのオプションを設定します。</span></td>
<td class=""><span class="merged" id="all.wyruN"  title="原文: *JvmGarbageCollectorSpec"><code>*<router-link @click.native="this.scrollFix('#_jvmgarbagecollectorspec')" to="#_jvmgarbagecollectorspec">JvmGarbageCollectorSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.80"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.YZ2mr"  title="原文: diagnosticsVolume"><code>diagnosticsVolume</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.245IHg"  title="原文: *corev1.VolumeSource"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#volumesource-v1-core" id="" target="_blank" >corev1.VolumeSource</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.81"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3vo31V"  title="原文: memory"><code>memory</code></span></td>
<td class=""><span class="merged" id="all.2U53rs" title="原文 : Configure the JVM memory options.">JVMメモリー・オプションを構成します。</span></td>
<td class=""><span class="merged" id="all.3stUfh"  title="原文: *JvmMemorySpec"><code>*<router-link @click.native="this.scrollFix('#_jvmmemoryspec')" to="#_jvmmemoryspec">JvmMemorySpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.82"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3AuGXa"  title="原文: jmxmp"><code>jmxmp</code></span></td>
<td class=""><span class="merged" id="all.cZX06" title="原文 : Configure JMX using JMXMP.">JMXMPを使用してJMXを構成します。</span></td>
<td class=""><span class="merged" id="all.2KOArF"  title="原文: *JvmJmxmpSpec"><code>*<router-link @click.native="this.scrollFix('#_jvmjmxmpspec')" to="#_jvmjmxmpspec">JvmJmxmpSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.83"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.6Gtfh"  title="原文: useJibClasspath"><code>useJibClasspath</code></span></td>
<td class=""><span class="merged" id="all.2LpiUx.spl1" title="原文 : A flag indicating whether to automatically add the default classpath for images created by the JIB tool https://github.com/GoogleContainerTools/jib If true then the /app/lib/* /app/classes and /app/resources entries are added to the JVM classpath.">JIBツール<a href="https://github.com/GoogleContainerTools/jib" id="" target="_blank" >https://github.com/GoogleContainerTools/jib</a>によって作成されたイメージのデフォルト・クラスパスを自動的に追加するかどうかを示すフラグ。trueの場合、/app/lib/* /app/classesおよび/app/resourcesエントリがJVMクラスパスに追加されます。</span> <span class="merged" id="all.2LpiUx.spl2" title="原文 : The default value fif not specified is true.">指定されていないデフォルト値fifはtrueです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.12"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.84"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.8" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_jvmdebugspec"><span class="merged" id="all.32IEoX"  title="原文: JvmDebugSpec">JvmDebugSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.4MGoV4" title="原文 : JvmDebugSpec the JVM Debug specific configuration.">JvmDebugSpec JVMデバッグ固有の構成。</span></p>


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
<td class=""><span class="merged" id="all.48UcwL.1"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.3HNNjr.spl1" title="原文 : Enabled is a flag to enable or disable running the JVM in debug mode.">Enabledは、デバッグ・モードでのJVMの実行を有効または無効にするフラグです。</span> <span class="merged" id="all.3HNNjr.spl2"  title="原文:: Default is disabled.">デフォルトでは無効化されています。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.13"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.85"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Fv48C"  title="原文: suspend"><code>suspend</code></span></td>
<td class=""><span class="merged" id="all.2AlXbN.spl1" title="原文 : A boolean true if the target VM is to be suspended immediately before the main class is loaded; false otherwise.">ターゲットVMがメイン・クラスのロード直前に停止される場合はブールtrue、それ以外の場合はfalse。</span> <span class="merged" id="all.2AlXbN.spl2"  title="原文: The default value is false.">デフォルト値はfalseです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.14"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.86"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.V6X3T"  title="原文: attach"><code>attach</code></span></td>
<td class=""><span class="merged" id="all.2NRQKY" title="原文 : Attach specifies the address of the debugger that the JVM should attempt to connect back to instead of listening on a port.">アタッチは、ポートでリスニングするかわりにJVMが接続を試行するデバッガのアドレスを指定します。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.12"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.87"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4"  title="原文: port"><code>port</code></span></td>
<td class=""><span class="merged" id="all.4YjNjK" title="原文 : The port that the debugger will listen on; the default is 5005.">デバッガが待機するポート。デフォルトは5005です。</span></td>
<td class=""><span class="merged" id="all.C5sgP.5"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.88"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.9" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.10"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.10"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.10"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.10"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3HXLi1"  title="原文: collector"><code>collector</code></span></td>
<td class=""><span class="merged" id="all.2dvgNy.spl1" title="原文 : The name of the JVM garbage collector to use.">使用するJVMガベージ・コレクタの名前。</span> <span class="merged" id="all.2dvgNy.spl2" title="原文 : G1 - adds the -XX:+UseG1GC option CMS - adds the -XX:+UseConcMarkSweepGC option Parallel - adds the -XX:+UseParallelGC Default - use the JVMs default collector The field value is case insensitive If not set G1 is used.">G1 - -XX:+UseG1GCオプションCMSを追加 - -XX:+UseConcMarkSweepGCオプションをParallelに追加 - -XX:+UseParallelGC Defaultを追加 - JVMデフォルト・コレクタを使用します。フィールド値は大/小文字を区別しません。G1が設定されていない場合。</span> <span class="merged" id="all.2dvgNy.spl3" title="原文 : If set to a value other than those above then the default collector for the JVM will be used.">前述の値以外の値に設定すると、JVMのデフォルト・コレクタが使用されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.13"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.89"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3s3zbi.2"  title="原文: args"><code>args</code></span></td>
<td class=""><span class="merged" id="all.QA8uj" title="原文 : Args specifies the GC options to pass to the JVM.">引数は、JVMに渡すGCオプションを指定します。</span></td>
<td class=""><span class="merged" id="all.rXwhA.4"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.90"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4DzDoS"  title="原文: logging"><code>logging</code></span></td>
<td class=""><span class="merged" id="all.2YeKC5" title="原文 : Enable the following GC logging args -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintHeapAtGC -XX:+PrintTenuringDistribution -XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTime Default is true">次のGCロギングargs -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintHeapAtGC -XX:+PrintTenuringDistribution -XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTimeデフォルトはtrueです</span></td>
<td class=""><span class="merged" id="all.q9cn0.15"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.91"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.10" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_jvmjmxmpspec"><span class="merged" id="all.1Amemc"  title="原文: JvmJmxmpSpec">JvmJmxmpSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.aKg6v" title="原文 : JvmJmxmpSpec is options for configuring JMX using JMXMP.">JvmJmxmpSpecは、JMXMPを使用してJMXを構成するためのオプションです。</span></p>


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
<td class=""><span class="merged" id="all.48UcwL.2"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.1NzDi8.spl1" title="原文 : If set to true the JMXMP support will be enabled.">trueに設定すると、JMXMPサポートが有効になります。</span> <span class="merged" id="all.1NzDi8.spl2"  title="原文:: Default is false">デフォルトはfalseです</span> </td>
<td class=""><span class="merged" id="all.q9cn0.16"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.92"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.1"  title="原文: port"><code>port</code></span></td>
<td class=""><span class="merged" id="all.4OS2UV.spl1" title="原文 : The port tht the JMXMP MBeanServer should bind to.">JMXMP MBeanServerをバインドするポート。</span> <span class="merged" id="all.4OS2UV.spl2" title="原文 : If not set the default port is 9099">デフォルト・ポートが9099に設定されていない場合</span> </td>
<td class=""><span class="merged" id="all.C5sgP.6"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.93"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.11" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.12"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.12"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.12"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.12"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1L90lj"  title="原文: heapSize"><code>heapSize</code></span></td>
<td class=""><span class="merged" id="all.NSmuX.spl1" title="原文 : HeapSize sets both the initial and max heap size values for the JVM.">HeapSizeは、JVMの初期ヒープ・サイズ値と最大ヒープ・サイズ値の両方を設定します。</span> <span class="merged" id="all.NSmuX.spl2" title="原文 : This will set both the -XX:InitialHeapSize and -XX:MaxHeapSize JVM options to the same value (the equivalent of setting -Xms and -Xmx to the same value).">これにより、 -XX:InitialHeapSizeおよび -XX:「MaxHeapSize JVM」オプションの両方を同じ値( -Xmsと -Xmxを同じ値に設定することと同等)に設定されます。</span> <span class="merged" id="all.NSmuX.spl3" title="原文 :  The format should be the same as that used when specifying these JVM options."><br> <br> The format should be the same as that used when specifying these JVM options.</span> <span class="merged" id="all.NSmuX.spl4" title="原文 :  If not set the JVM defaults are used."><br> <br> If not set the JVM defaults are used.</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.14"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.94"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V8xor"  title="原文: initialHeapSize"><code>initialHeapSize</code></span></td>
<td class=""><span class="merged" id="all.fzr8B.spl1" title="原文 : InitialHeapSize sets the initial heap size value for the JVM.">InitialHeapSizeは、JVMの初期ヒープ・サイズ値を設定します。</span> <span class="merged" id="all.fzr8B.spl2" title="原文 : This will set the -XX:InitialHeapSize JVM option (the equivalent of setting -Xms).">これにより、 -XX:「InitialHeapSize JVM」オプション( -Xmsの設定と同等)が設定されます。</span> <span class="merged" id="all.fzr8B.spl3" title="原文 :  The format should be the same as that used when specifying this JVM options."><br> <br> The format should be the same as that used when specifying this JVM options.</span> <span class="merged" id="all.fzr8B.spl4" title="原文 :  NOTE: If the HeapSize field is set it will override this field."><br> <br> NOTE: If the HeapSize field is set it will override this field.</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.15"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.95"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2m6iVB"  title="原文: maxHeapSize"><code>maxHeapSize</code></span></td>
<td class=""><span class="merged" id="all.4BgC1M.spl1" title="原文 : MaxHeapSize sets the maximum heap size value for the JVM.">MaxHeapSizeは、JVMの最大ヒープ・サイズ値を設定します。</span> <span class="merged" id="all.4BgC1M.spl2" title="原文 : This will set the -XX:MaxHeapSize JVM option (the equivalent of setting -Xmx).">これにより、 -XX:「MaxHeapSize JVM」オプション(設定 -Xmxと同等)が設定されます。</span> <span class="merged" id="all.4BgC1M.spl3" title="原文 :  The format should be the same as that used when specifying this JVM options."><br> <br> The format should be the same as that used when specifying this JVM options.</span> <span class="merged" id="all.4BgC1M.spl4" title="原文 :  NOTE: If the HeapSize field is set it will override this field."><br> <br> NOTE: If the HeapSize field is set it will override this field.</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.16"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.96"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2MeqPf"  title="原文: maxRAM"><code>maxRAM</code></span></td>
<td class=""><span class="merged" id="all.3OqlOi" title="原文 : Sets the JVM option -XX:MaxRAM=N which sets the maximum amount of memory used by the JVM to n, where n is expressed in terms of megabytes (for example, 100m) or gigabytes (for example 2g).">JVMで使用されるメモリーの最大量を<code>n</code>に設定するJVMオプション<code>-XX:MaxRAM=N</code>を設定します。ここで、<code>n</code>はメガバイト (<code>100m</code>など)またはギガバイト (<code>2g</code>など)で表現されます。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.17"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.97"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3GDTJ0"  title="原文: percentage"><code>percentage</code></span></td>
<td class=""><span class="merged" id="all.3jIE2a.spl1" title="原文 : Percentage sets the initial and maximum and minimum heap percentage sizes to the same value, This will set the -XX:InitialRAMPercentage -XX:MinRAMPercentage and -XX:MaxRAMPercentage JVM options to the same value.">パーセントは、初期および最大および最小のヒープ・パーセント・サイズを同じ値に設定します。これにより、 -XX:InitialRAMPercentage -XX:MinRAMPercentageおよび -XX:「MaxRAMPercentage JVM」オプションが同じ値に設定されます。</span> <span class="merged" id="all.3jIE2a.spl2" title="原文 :  The JVM will ignore this option if any of the HeapSize, InitialHeapSize or MaxHeapSize options have been set."><br> <br> The JVM will ignore this option if any of the HeapSize, InitialHeapSize or MaxHeapSize options have been set.</span> <span class="merged" id="all.3jIE2a.spl3" title="原文 :  Valid values are decimal numbers between 0 and 100."><br> <br> Valid values are decimal numbers between 0 and 100.</span> <span class="merged" id="all.3jIE2a.spl4" title="原文 :  NOTE: This field is a k8s resource.Quantity value as CRDs do not support decimal numbers."><br><br>ノート: Thisfieldisak8sresource.QuantityvalueasCRDsdonotsupportdecimalnumbers.</span> <span class="merged" id="all.3jIE2a.spl5" title="原文 : See https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity for the different formats of number that may be entered.">入力可能な数の様々な形式については、<a href="https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity" id="" target="_blank" >https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity</a>を参照してください。</span> <span class="merged" id="all.3jIE2a.spl6" title="原文 :  NOTE: This field maps to the -XX:InitialRAMPercentage -XX:MinRAMPercentage and -XX:MaxRAMPercentage JVM options and will be incompatible with some JVMs that do not have this option (e.g. Java 8)."><br> <br> NOTE: This field maps to the -XX:InitialRAMPercentage -XX:MinRAMPercentage and -XX:MaxRAMPercentage JVM options and will be incompatible with some JVMs that do not have this option (e.g. Java 8).</span> </td>
<td class=""><span class="merged" id="all.2y07uS.1"  title="原文: *resource.Quantity"><code>*resource.Quantity</code></span></td>
<td class=""><span class="merged" id="all.njUKu.98"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2IT1Dp"  title="原文: initialRAMPercentage"><code>initialRAMPercentage</code></span></td>
<td class=""><span class="merged" id="all.2opQc6.spl1" title="原文 : Set initial heap size as a percentage of total memory.">初期ヒープ・サイズを合計メモリーに対する割合として設定します。</span> <span class="merged" id="all.2opQc6.spl2" title="原文 :  The JVM will ignore this option if any of the HeapSize, InitialHeapSize or MaxHeapSize options have been set."><br> <br> The JVM will ignore this option if any of the HeapSize, InitialHeapSize or MaxHeapSize options have been set.</span> <span class="merged" id="all.2opQc6.spl3" title="原文 :  Valid values are decimal numbers between 0 and 100."><br> <br> Valid values are decimal numbers between 0 and 100.</span> <span class="merged" id="all.2opQc6.spl4" title="原文 :  NOTE: If the Percentage field is set it will override this field."><br> <br> NOTE: If the Percentage field is set it will override this field.</span> <span class="merged" id="all.2opQc6.spl5" title="原文 :  NOTE: This field is a k8s resource.Quantity value as CRDs do not support decimal numbers."><br><br>ノート: Thisfieldisak8sresource.QuantityvalueasCRDsdonotsupportdecimalnumbers.</span> <span class="merged" id="all.2opQc6.spl6" title="原文 : See https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity for the different formats of number that may be entered.">入力可能な数の様々な形式については、<a href="https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity" id="" target="_blank" >https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity</a>を参照してください。</span> <span class="merged" id="all.2opQc6.spl7" title="原文 :  NOTE: This field maps to the -XX:InitialRAMPercentage JVM option and will be incompatible with some JVMs that do not have this option (e.g. Java 8)."><br> <br> NOTE: This field maps to the -XX:InitialRAMPercentage JVM option and will be incompatible with some JVMs that do not have this option (e.g. Java 8).</span> </td>
<td class=""><span class="merged" id="all.2y07uS.2"  title="原文: *resource.Quantity"><code>*resource.Quantity</code></span></td>
<td class=""><span class="merged" id="all.njUKu.99"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3lHoLp"  title="原文: maxRAMPercentage"><code>maxRAMPercentage</code></span></td>
<td class=""><span class="merged" id="all.4dTiGq.spl1" title="原文 : Set maximum heap size as a percentage of total memory.">最大ヒープ・サイズを合計メモリーに対する割合として設定します。</span> <span class="merged" id="all.4dTiGq.spl2" title="原文 :  The JVM will ignore this option if any of the HeapSize, InitialHeapSize or MaxHeapSize options have been set."><br> <br> The JVM will ignore this option if any of the HeapSize, InitialHeapSize or MaxHeapSize options have been set.</span> <span class="merged" id="all.4dTiGq.spl3" title="原文 :  Valid values are decimal numbers between 0 and 100."><br> <br> Valid values are decimal numbers between 0 and 100.</span> <span class="merged" id="all.4dTiGq.spl4" title="原文 :  NOTE: If the Percentage field is set it will override this field."><br> <br> NOTE: If the Percentage field is set it will override this field.</span> <span class="merged" id="all.4dTiGq.spl5" title="原文 :  NOTE: This field is a k8s resource.Quantity value as CRDs do not support decimal numbers."><br><br>ノート: Thisfieldisak8sresource.QuantityvalueasCRDsdonotsupportdecimalnumbers.</span> <span class="merged" id="all.4dTiGq.spl6" title="原文 : See https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity for the different formats of number that may be entered.">入力可能な数の様々な形式については、<a href="https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity" id="" target="_blank" >https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity</a>を参照してください。</span> <span class="merged" id="all.4dTiGq.spl7" title="原文 :  NOTE: This field maps to the -XX:MaxRAMPercentage JVM option and will be incompatible with some JVMs that do not have this option (e.g. Java 8)."><br> <br> NOTE: This field maps to the -XX:MaxRAMPercentage JVM option and will be incompatible with some JVMs that do not have this option (e.g. Java 8).</span> </td>
<td class=""><span class="merged" id="all.2y07uS.3"  title="原文: *resource.Quantity"><code>*resource.Quantity</code></span></td>
<td class=""><span class="merged" id="all.njUKu.100"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3hGjB5"  title="原文: minRAMPercentage"><code>minRAMPercentage</code></span></td>
<td class=""><span class="merged" id="all.4PFaMy.spl1" title="原文 : Set the minimal JVM Heap size as a percentage of the total memory.">最小JVMヒープ・サイズを合計メモリーに対する割合として設定します。</span> <span class="merged" id="all.4PFaMy.spl2" title="原文 :  This option will be ignored if HeapSize is set."><br> <br> This option will be ignored if HeapSize is set.</span> <span class="merged" id="all.4PFaMy.spl3" title="原文 :  Valid values are decimal numbers between 0 and 100."><br> <br> Valid values are decimal numbers between 0 and 100.</span> <span class="merged" id="all.4PFaMy.spl4" title="原文 :  NOTE: This field is a k8s resource.Quantity value as CRDs do not support decimal numbers."><br><br>ノート: Thisfieldisak8sresource.QuantityvalueasCRDsdonotsupportdecimalnumbers.</span> <span class="merged" id="all.4PFaMy.spl5" title="原文 : See https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity for the different formats of number that may be entered.">入力可能な数の様々な形式については、<a href="https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity" id="" target="_blank" >https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity</a>を参照してください。</span> <span class="merged" id="all.4PFaMy.spl6" title="原文 :  NOTE: This field maps the the -XX:MinRAMPercentage JVM option and will be incompatible with some JVMs that do not have this option (e.g. Java 8)."><br> <br> NOTE: This field maps the the -XX:MinRAMPercentage JVM option and will be incompatible with some JVMs that do not have this option (e.g. Java 8).</span> </td>
<td class=""><span class="merged" id="all.2y07uS.4"  title="原文: *resource.Quantity"><code>*resource.Quantity</code></span></td>
<td class=""><span class="merged" id="all.njUKu.101"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.42BsZO"  title="原文: stackSize"><code>stackSize</code></span></td>
<td class=""><span class="merged" id="all.8rQwl.spl1" title="原文 : StackSize is the stack size value to pass to the JVM.">StackSizeは、JVMに渡すスタック・サイズ値です。</span> <span class="merged" id="all.8rQwl.spl2" title="原文 : The format should be the same as that used for Java&rsquo;s -Xss JVM option.">形式は、Javaの -Xss JVMオプションで使用されている形式と同じである必要があります。</span> <span class="merged" id="all.8rQwl.spl3" title="原文 : If not set the JVM defaults are used.">設定しない場合、JVMのデフォルトが使用されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.18"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.102"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1wVw4S"  title="原文: metaspaceSize"><code>metaspaceSize</code></span></td>
<td class=""><span class="merged" id="all.4563tl.spl1" title="原文 : MetaspaceSize is the min/max metaspace size to pass to the JVM.">MetaspaceSizeは、JVMに渡す最小/最大メタ領域サイズです。</span> <span class="merged" id="all.4563tl.spl2" title="原文 : This sets the -XX:MetaspaceSize and -XX:MaxMetaspaceSize=size JVM options.">これにより、 -XX:MetaspaceSizeおよび -XX:「MaxMetaspaceSize=size JVM」オプションが設定されます。</span> <span class="merged" id="all.4563tl.spl3" title="原文 : If not set the JVM defaults are used.">設定しない場合、JVMのデフォルトが使用されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.19"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.103"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2PQYhe"  title="原文: directMemorySize"><code>directMemorySize</code></span></td>
<td class=""><span class="merged" id="all.SoAiZ.spl1" title="原文 : DirectMemorySize sets the maximum total size (in bytes) of the New I/O (the java.nio package) direct-buffer allocations.">DirectMemorySizeは、新しいI/O (java.nioパッケージ)ダイレクト・バッファ割当ての最大合計サイズ(バイト単位)を設定します。</span> <span class="merged" id="all.SoAiZ.spl2" title="原文 : This value sets the -XX:MaxDirectMemorySize JVM option.">この値は、 -XX:「MaxDirectMemorySize JVM」オプションを設定します。</span> <span class="merged" id="all.SoAiZ.spl3" title="原文 : If not set the JVM defaults are used.">設定しない場合、JVMのデフォルトが使用されます。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.20"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.104"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ueV9n"  title="原文: nativeMemoryTracking"><code>nativeMemoryTracking</code></span></td>
<td class=""><span class="merged" id="all.3NbhRX" title="原文 : Adds the -XX:NativeMemoryTracking=mode JVM options where mode is on of &quot;off&quot;, &quot;summary&quot; or &quot;detail&quot;, the default is &quot;summary&quot; If not set to &quot;off&quot; also add -XX:+PrintNMTStatistics">モードが「off」、「summary」または「detail」である -XX:「NativeMemoryTracking=mode JVM」オプションを追加します。「off」に設定されていない場合は、 -XX:+PrintNMTStatisticsも追加</span></td>
<td class=""><span class="merged" id="all.2JXhOu.21"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.105"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Qp9gL"  title="原文: onOutOfMemory"><code>onOutOfMemory</code></span></td>
<td class=""><span class="merged" id="all.4WrsBH" title="原文 : Configure the JVM behaviour when an OutOfMemoryError occurs.">OutOfMemoryErrorが発生したときにJVMの動作を構成します。</span></td>
<td class=""><span class="merged" id="all.1qaGc3"  title="原文: *JvmOutOfMemorySpec"><code>*<router-link @click.native="this.scrollFix('#_jvmoutofmemoryspec')" to="#_jvmoutofmemoryspec">JvmOutOfMemorySpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.106"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.12" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_jvmoutofmemoryspec"><span class="merged" id="all.4T5s3O"  title="原文: JvmOutOfMemorySpec">JvmOutOfMemorySpec</span></h3>
<div class="section">
<p><span class="merged" id="all.1K4rGN" title="原文 : JvmOutOfMemorySpec is options for managing the JVM behaviour when an OutOfMemoryError occurs.">JvmOutOfMemorySpecは、OutOfMemoryErrorが発生したときにJVMの動作を管理するオプションです。</span></p>


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
<td class=""><span class="merged" id="all.3LIRMU"  title="原文: exit"><code>exit</code></span></td>
<td class=""><span class="merged" id="all.2qzisx.spl1" title="原文 : If set to true the JVM will exit when an OOM error occurs.">trueに設定すると、OOMエラーが発生したときにJVMが終了します。</span> <span class="merged" id="all.2qzisx.spl2"  title="原文:: Default is true">デフォルトはtrueです</span> </td>
<td class=""><span class="merged" id="all.q9cn0.17"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.107"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.HjftG"  title="原文: heapDump"><code>heapDump</code></span></td>
<td class=""><span class="merged" id="all.1VOKOH.spl1" title="原文 : If set to true adds the -XX:+HeapDumpOnOutOfMemoryError JVM option to cause a heap dump to be created when an OOM error occurs.">trueに設定すると、 -XX:+「HeapDumpOnOutOfMemoryError JVM」オプションが追加され、OOMエラーが発生したときにヒープ・ダンプが作成されます。</span> <span class="merged" id="all.1VOKOH.spl2"  title="原文:: Default is true">デフォルトはtrueです</span> </td>
<td class=""><span class="merged" id="all.q9cn0.18"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.108"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.13" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_localobjectreference"><span class="merged" id="all.pL3r9"  title="原文: LocalObjectReference">LocalObjectReference</span></h3>
<div class="section">
<p><span class="merged" id="all.159XiV" title="原文 : LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.">LocalObjectReferenceには、同じネームスペース内で参照先オブジェクトを見つけるための十分な情報が含まれています。</span></p>


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
<td class=""><span class="merged" id="all.309fiz.1"  title="原文: name"><code>name</code></span></td>
<td class=""><span class="merged" id="all.2JSjEr.spl1" title="原文 : Name of the referent.">差戻しの名前。</span> <span class="merged" id="all.2JSjEr.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names">詳細情報 : <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names" id="" target="_blank" >https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names</a></span> </td>
<td class=""><span class="merged" id="all.W18FC.9"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.3"  title="原文:: true">true</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.14" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.15"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.15"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.15"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.15"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.2"  title="原文: name"><code>name</code></span></td>
<td class=""><span class="merged" id="all.xrI53" title="原文 : Name specifies the name of the port.">名前はポートの名前を指定します。</span></td>
<td class=""><span class="merged" id="all.W18FC.10"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.4"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.2"  title="原文: port"><code>port</code></span></td>
<td class=""><span class="merged" id="all.3BfDXR" title="原文 : Port specifies the port used.">Portは、使用されるポートを指定します。</span></td>
<td class=""><span class="merged" id="all.2UR1bd"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.109"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4T3cXD"  title="原文: protocol"><code>protocol</code></span></td>
<td class=""><span class="merged" id="all.1vGaWB.spl1" title="原文 : Protocol for container port.">コンテナ・ポートのプロトコル。</span> <span class="merged" id="all.1vGaWB.spl2" title="原文 : Must be UDP or TCP.">UDPまたはTCPである必要があります。</span> <span class="merged" id="all.1vGaWB.spl3" title="原文 : Defaults to &quot;TCP&quot;">デフォルトはTCPです</span> </td>
<td class=""><span class="merged" id="all.4Dw50I"  title="原文: *corev1.Protocol"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#protocol-v1-core" id="" target="_blank" >corev1.Protocol</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.110"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ueISg"  title="原文: appProtocol"><code>appProtocol</code></span></td>
<td class=""><span class="merged" id="all.36IyQe.spl1" title="原文 : The application protocol for this port.">このポートのアプリケーション・プロトコル。</span> <span class="merged" id="all.36IyQe.spl2" title="原文 : This field follows standard Kubernetes label syntax.">このフィールドは、標準のKubernetesラベル構文に従います。</span> <span class="merged" id="all.36IyQe.spl3" title="原文 : Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names).">非同一名は、IANA標準サービス名用に予約されています(RFC-6335および<a href="http://www.iana.org/assignments/service-names" id="" target="_blank" >http://www.iana.org/assignments/service-names</a>など)。</span> <span class="merged" id="all.36IyQe.spl4" title="原文 : Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.">標準以外のプロトコルでは、mycompany.com/my-custom-protocolなどのプレフィクス名を使用する必要があります。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.22"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.111"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3D4sOI"  title="原文: nodePort"><code>nodePort</code></span></td>
<td class=""><span class="merged" id="all.1mnvor.spl1" title="原文 : The port on each node on which this service is exposed when type=NodePort or LoadBalancer.">type=NodePortまたはLoadBalancerの場合に、このサービスが公開される各ノードのポート。</span> <span class="merged" id="all.1mnvor.spl2" title="原文 : Usually assigned by the system.">通常はシステムによって割り当てられます。</span> <span class="merged" id="all.1mnvor.spl3" title="原文 : If specified, it will be allocated to the service if unused or else creation of the service will fail.">指定すると、未使用の場合またはサービスの作成が失敗した場合はサービスに割り当てられます。</span> <span class="merged" id="all.1mnvor.spl4" title="原文 : If set, this field must be in the range 30000 - 32767 inclusive.">設定した場合、このフィールドは30000の範囲内である必要があります - 32767 inclusive.</span> <span class="merged" id="all.1mnvor.spl5" title="原文 : Default is to auto-allocate a port if the ServiceType of this Service requires one.">デフォルトでは、このサービスのServiceTypeにポートが必要な場合は、ポートを自動的に割り当てます。</span> <span class="merged" id="all.1mnvor.spl6" title="原文 : More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport">詳細情報 : <a href="https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport" id="" target="_blank" >https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport</a></span> </td>
<td class=""><span class="merged" id="all.C5sgP.7"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.112"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3s1Qpl"  title="原文: hostPort"><code>hostPort</code></span></td>
<td class=""><span class="merged" id="all.2uXXZu.spl1" title="原文 : Number of port to expose on the host.">ホスト上で公開するポートの数。</span> <span class="merged" id="all.2uXXZu.spl2" title="原文 : If specified, this must be a valid port number, 0 &lt; x &lt; 65536.">指定する場合は、有効なポート番号0 &lt; x &lt; 65536である必要があります。</span> <span class="merged" id="all.2uXXZu.spl3" title="原文 : If HostNetwork is specified, this must match ContainerPort.">HostNetworkが指定されている場合、これはContainerPortと一致する必要があります。</span> <span class="merged" id="all.2uXXZu.spl4" title="原文 : Most containers do not need this.">ほとんどのコンテナでこれは必要ありません。</span> </td>
<td class=""><span class="merged" id="all.C5sgP.8"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.113"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Jxxyl"  title="原文: hostIP"><code>hostIP</code></span></td>
<td class=""><span class="merged" id="all.mUPtR" title="原文 : What host IP to bind the external port to.">外部ポートをバインドするホストIP。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.23"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.114"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30hFTR"  title="原文: service"><code>service</code></span></td>
<td class=""><span class="merged" id="all.3CYRE4" title="原文 : Service configures the Kubernetes Service used to expose the port.">サービスは、ポートを公開するために使用されるKubernetesサービスを構成します。</span></td>
<td class=""><span class="merged" id="all.2W8QHW"  title="原文: *ServiceSpec"><code>*<router-link @click.native="this.scrollFix('#_servicespec')" to="#_servicespec">ServiceSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.115"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.zeyxS"  title="原文: serviceMonitor"><code>serviceMonitor</code></span></td>
<td class=""><span class="merged" id="all.3ckekZ" title="原文 : The specification of a Prometheus ServiceMonitor resource that will be created for the Service being exposed for this port.">このポートで公開されるサービスに対して作成されるPrometheus ServiceMonitorリソースの仕様。</span></td>
<td class=""><span class="merged" id="all.3QTh8q"  title="原文: *ServiceMonitorSpec"><code>*<router-link @click.native="this.scrollFix('#_servicemonitorspec')" to="#_servicemonitorspec">ServiceMonitorSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.116"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.15" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_networkspec"><span class="merged" id="all.1IlyA3"  title="原文: NetworkSpec">NetworkSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.3boW9p" title="原文 : NetworkSpec configures various networking and DNS settings for Pods in a deployment.">NetworkSpecは、デプロイメントにおけるポッドの様々なネットワーキングおよびDNS設定を構成します。</span></p>


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
<td class=""><span class="merged" id="all.PuAL6"  title="原文: dnsConfig"><code>dnsConfig</code></span></td>
<td class=""><span class="merged" id="all.28ajSY.spl1" title="原文 : Specifies the DNS parameters of a pod.">ポッドのDNSパラメータを指定します。</span> <span class="merged" id="all.28ajSY.spl2" title="原文 : Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.">ここで指定したパラメータは、DNSPolicyに基づいて生成されたDNS構成にマージされます。</span> </td>
<td class=""><span class="merged" id="all.3xOLGe"  title="原文: *PodDNSConfig"><code>*<router-link @click.native="this.scrollFix('#_poddnsconfig')" to="#_poddnsconfig">PodDNSConfig</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.117"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1MTAcN"  title="原文: dnsPolicy"><code>dnsPolicy</code></span></td>
<td class=""><span class="merged" id="all.3L8aVK.spl1" title="原文 : Set DNS policy for the pod.">ポッドのDNSポリシーを設定します。</span> <span class="merged" id="all.3L8aVK.spl2" title="原文 : Defaults to &quot;ClusterFirst&quot;.">デフォルトは"ClusterFirst"です。</span> <span class="merged" id="all.3L8aVK.spl3" title="原文 : Valid values are &apos;ClusterFirstWithHostNet&apos;, &apos;ClusterFirst&apos;, &apos;Default&apos; or &apos;None&apos;.">有効な値は、'ClusterFirstWithHostNet'、'ClusterFirst'、'Default'または'None'です。</span> <span class="merged" id="all.3L8aVK.spl4" title="原文 : DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy.">DNSConfigに指定されたDNSパラメータは、DNSPolicyで選択したポリシーとマージされます。</span> <span class="merged" id="all.3L8aVK.spl5" title="原文 : To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to &apos;ClusterFirstWithHostNet&apos;.">DNSオプションをhostNetworkとともに設定するには、DNSポリシーを明示的に'ClusterFirstWithHostNet'に指定する必要があります。</span> </td>
<td class=""><span class="merged" id="all.3TQ9FB"  title="原文: *corev1.DNSPolicy"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#dnspolicy-v1-core" id="" target="_blank" >corev1.DNSPolicy</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.118"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1x8Vka"  title="原文: hostAliases"><code>hostAliases</code></span></td>
<td class=""><span class="merged" id="all.csLDP.spl1" title="原文 : HostAliases is an optional list of hosts and IPs that will be injected into the pod&rsquo;s hosts file if specified.">HostAliasesは、ポッドのホスト・ファイルにインジェクトされるホストおよびIPのオプションのリストです(指定されている場合)。</span> <span class="merged" id="all.csLDP.spl2" title="原文 : This is only valid for non-hostNetwork pods.">これは、hostNetwork以外のポッドに対してのみ有効です。</span> </td>
<td class=""><span class="merged" id="all.1KmB5p"  title="原文: []corev1.HostAlias"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#hostalias-v1-core" id="" target="_blank" >corev1.HostAlias</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.119"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.yM6uO"  title="原文: hostNetwork"><code>hostNetwork</code></span></td>
<td class=""><span class="merged" id="all.42LdBP.spl1" title="原文 : Host networking requested for this pod.">このポッドにホスト・ネットワーキングがリクエストされました。</span> <span class="merged" id="all.42LdBP.spl2" title="原文 : Use the host&rsquo;s network namespace.">ホストのネットワーク・ネームスペースを使用します。</span> <span class="merged" id="all.42LdBP.spl3" title="原文 : If this option is set, the ports that will be used must be specified.">このオプションが設定されている場合、使用されるポートを指定する必要があります。</span> <span class="merged" id="all.42LdBP.spl4"  title="原文:: Default to false.">デフォルトはfalseです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.19"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.120"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28fJbR"  title="原文: hostname"><code>hostname</code></span></td>
<td class=""><span class="merged" id="all.VMWGt" title="原文 : Specifies the hostname of the Pod If not specified, the pod&rsquo;s hostname will be set to a system-defined value.">ポッドのホスト名を指定しない場合、ポッドのホスト名にはシステム定義の値が設定されます。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.24"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.121"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.16" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_persistencespec"><span class="merged" id="all.2u8vXr"  title="原文: PersistenceSpec">PersistenceSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.rtat5" title="原文 : PersistenceSpec is the spec for Coherence persistence.">PersistenceSpecは、Coherence永続性の指定です。</span></p>


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
<td class=""><span class="merged" id="all.2Uy1sm"  title="原文: mode"><code>mode</code></span></td>
<td class=""><span class="merged" id="all.Ly09c.spl1" title="原文 : The persistence mode to use.">使用する永続性モード。</span> <span class="merged" id="all.Ly09c.spl2" title="原文 : Valid choices are &quot;on-demand&quot;, &quot;active&quot;, &quot;active-async&quot;.">有効なオプションは、「on-demand」、「active」、「active-async」です。</span> <span class="merged" id="all.Ly09c.spl3" title="原文 : This field will set the coherence.distributed.persistence-mode System property to &quot;default-&quot; + Mode.">このフィールドは、coherence.distributed.persistence-mode Systemプロパティを"default-" + Modeに設定します。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.25"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.122"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2s8E51"  title="原文: persistentVolumeClaim"><code>persistentVolumeClaim</code></span></td>
<td class=""><span class="merged" id="all.14q9J9" title="原文 : PersistentVolumeClaim allows the configuration of a normal k8s persistent volume claim for persistence data.">PersistentVolumeClaimでは、永続データに対する通常のk8s永続ボリューム要求を構成できます。</span></td>
<td class=""><span class="merged" id="all.MN91x"  title="原文: *corev1.PersistentVolumeClaimSpec"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#persistentvolumeclaimspec-v1-core" id="" target="_blank" >corev1.PersistentVolumeClaimSpec</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.123"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3d0WZg"  title="原文: volume"><code>volume</code></span></td>
<td class=""><span class="merged" id="all.2Qq2Md.spl1" title="原文 : Volume allows the configuration of a normal k8s volume mapping for persistence data instead of a persistent volume claim.">ボリュームを使用すると、永続ボリューム要求ではなく永続性データに対して通常のk8sボリューム・マッピングを構成できます。</span> <span class="merged" id="all.2Qq2Md.spl2" title="原文 : If a value is defined for store.persistence.volume then no PVC will be created and persistence data will instead be written to this volume.">store.persistence.volumeに値が定義されている場合、PVCは作成されず、永続性データはこのボリュームに書き込まれます。</span> <span class="merged" id="all.2Qq2Md.spl3" title="原文 : It is up to the deployer to understand the consequences of this and how the guarantees given when using PVCs differ to the storage guarantees for the particular volume type configured here.">PVCを使用する場合の保証が、ここで構成した特定のボリューム・タイプのストレージ保証とどのように異なるかを理解するために、デプロイ者はデプロイ者によって行われます。</span> </td>
<td class=""><span class="merged" id="all.245IHg.1"  title="原文: *corev1.VolumeSource"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#volumesource-v1-core" id="" target="_blank" >corev1.VolumeSource</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.124"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2VBWrk"  title="原文: snapshots"><code>snapshots</code></span></td>
<td class=""><span class="merged" id="all.4UpbE4.spl1" title="原文 : Snapshot values configure the on-disc persistence data snapshot (backup) settings.">スナップショット値は、オン・パスの永続性データ・スナップショット(バックアップ)の設定を構成します。</span> <span class="merged" id="all.4UpbE4.spl2" title="原文 : These settings enable a different location for persistence snapshot data.">これらの設定によって、永続性スナップショット・データの別のロケーションが有効になります。</span> <span class="merged" id="all.4UpbE4.spl3" title="原文 : If not set then snapshot files will be written to the same volume configured for persistence data in the Persistence section.">設定しない場合、スナップショット・ファイルは、永続性セクションの永続性データ用に構成された同じボリュームに書き込まれます。</span> </td>
<td class=""><span class="merged" id="all.44JnR9"  title="原文: *PersistentStorageSpec"><code>*<router-link @click.native="this.scrollFix('#_persistentstoragespec')" to="#_persistentstoragespec">PersistentStorageSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.125"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.17" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.18"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.18"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.18"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.18"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2s8E51.1"  title="原文: persistentVolumeClaim"><code>persistentVolumeClaim</code></span></td>
<td class=""><span class="merged" id="all.14q9J9.1" title="原文 : PersistentVolumeClaim allows the configuration of a normal k8s persistent volume claim for persistence data.">PersistentVolumeClaimでは、永続データに対する通常のk8s永続ボリューム要求を構成できます。</span></td>
<td class=""><span class="merged" id="all.MN91x.1"  title="原文: *corev1.PersistentVolumeClaimSpec"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#persistentvolumeclaimspec-v1-core" id="" target="_blank" >corev1.PersistentVolumeClaimSpec</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.126"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3d0WZg.1"  title="原文: volume"><code>volume</code></span></td>
<td class=""><span class="merged" id="all.2Qq2Md.1.spl1" title="原文 : Volume allows the configuration of a normal k8s volume mapping for persistence data instead of a persistent volume claim.">ボリュームを使用すると、永続ボリューム要求ではなく永続性データに対して通常のk8sボリューム・マッピングを構成できます。</span> <span class="merged" id="all.2Qq2Md.1.spl2" title="原文 : If a value is defined for store.persistence.volume then no PVC will be created and persistence data will instead be written to this volume.">store.persistence.volumeに値が定義されている場合、PVCは作成されず、永続性データはこのボリュームに書き込まれます。</span> <span class="merged" id="all.2Qq2Md.1.spl3" title="原文 : It is up to the deployer to understand the consequences of this and how the guarantees given when using PVCs differ to the storage guarantees for the particular volume type configured here.">PVCを使用する場合の保証が、ここで構成した特定のボリューム・タイプのストレージ保証とどのように異なるかを理解するために、デプロイ者はデプロイ者によって行われます。</span> </td>
<td class=""><span class="merged" id="all.245IHg.2"  title="原文: *corev1.VolumeSource"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#volumesource-v1-core" id="" target="_blank" >corev1.VolumeSource</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.127"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.18" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_poddnsconfig"><span class="merged" id="all.2hBMCe"  title="原文: PodDNSConfig">PodDNSConfig</span></h3>
<div class="section">
<p><span class="merged" id="all.2HSjaL" title="原文 : PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.">PodDNSConfigは、DNSPolicyから生成されたパラメータに加えて、ポッドのDNSパラメータを定義します。</span></p>


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
<td class=""><span class="merged" id="all.3jGawz"  title="原文: nameservers"><code>nameservers</code></span></td>
<td class=""><span class="merged" id="all.2WPUt6.spl1" title="原文 : A list of DNS name server IP addresses.">DNSネーム・サーバーのIPアドレスのリスト。</span> <span class="merged" id="all.2WPUt6.spl2" title="原文 : This will be appended to the base nameservers generated from DNSPolicy.">これは、DNSPolicyから生成されたベース・ネーム・サーバーに付加されます。</span> <span class="merged" id="all.2WPUt6.spl3" title="原文 : Duplicated nameservers will be removed.">重複したネーム・サーバーは削除されます。</span> </td>
<td class=""><span class="merged" id="all.rXwhA.5"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.128"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.uHfFv"  title="原文: searches"><code>searches</code></span></td>
<td class=""><span class="merged" id="all.3OBhnb.spl1" title="原文 : A list of DNS search domains for host-name lookup.">ホスト名検索のDNS検索ドメインのリスト。</span> <span class="merged" id="all.3OBhnb.spl2" title="原文 : This will be appended to the base search paths generated from DNSPolicy.">これは、DNSPolicyから生成されたベース検索パスに追加されます。</span> <span class="merged" id="all.3OBhnb.spl3" title="原文 : Duplicated search paths will be removed.">重複した検索パスが削除されます。</span> </td>
<td class=""><span class="merged" id="all.rXwhA.6"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.129"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ueYs0"  title="原文: options"><code>options</code></span></td>
<td class=""><span class="merged" id="all.3HNitx.spl1" title="原文 : A list of DNS resolver options.">DNSリゾルバ・オプションのリスト。</span> <span class="merged" id="all.3HNitx.spl2" title="原文 : This will be merged with the base options generated from DNSPolicy.">これは、DNSPolicyから生成されたベース・オプションとマージされます。</span> <span class="merged" id="all.3HNitx.spl3" title="原文 : Duplicated entries will be removed.">重複したエントリは削除されます。</span> <span class="merged" id="all.3HNitx.spl4" title="原文 : Resolution options given in Options will override those that appear in the base DNSPolicy.">オプションに示されている解決オプションは、ベースDNSPolicyに表示される解決オプションより優先されます。</span> </td>
<td class=""><span class="merged" id="all.1sSdAu"  title="原文: []corev1.PodDNSConfigOption"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#poddnsconfigoption-v1-core" id="" target="_blank" >corev1.PodDNSConfigOption</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.130"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.19" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.20"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.20"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.20"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.20"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.3"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.45nQBa" title="原文 : Enable or disable flag.">フラグを有効または無効にします。</span></td>
<td class=""><span class="merged" id="all.q9cn0.20"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.131"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.3"  title="原文: port"><code>port</code></span></td>
<td class=""><span class="merged" id="all.2UaWjr" title="原文 : The port to bind to.">バインド先のポート。</span></td>
<td class=""><span class="merged" id="all.C5sgP.9"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.132"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3vz3n4"  title="原文: ssl"><code>ssl</code></span></td>
<td class=""><span class="merged" id="all.IqoZH" title="原文 : SSL configures SSL settings for a Coherence component">SSLは、CoherenceコンポーネントのSSL設定を構成</span></td>
<td class=""><span class="merged" id="all.3T4zQC"  title="原文: *SSLSpec"><code>*<router-link @click.native="this.scrollFix('#_sslspec')" to="#_sslspec">SSLSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.133"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.20" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_probe"><span class="merged" id="all.PgUUo"  title="原文:: Probe">プローブ</span></h3>
<div class="section">
<p><span class="merged" id="all.cMrNZ.spl1" title="原文 : Probe is the handler that will be used to determine how to communicate with a Coherence deployment for operations like StatusHA checking and service suspension.">Probeは、StatusHAチェックやサービス停止などの操作のCoherenceデプロイメントと通信する方法を決定するために使用されるハンドラです。</span> <span class="merged" id="all.cMrNZ.spl2" title="原文 : StatusHA checking is primarily used during scaling of a deployment, a deployment must be in a safe Phase HA state before scaling takes place.">StatusHAチェックは主にデプロイメントのスケーリング中に使用されます。スケールを実行する前に、デプロイメントをセーフ・フェーズHA状態にする必要があります。</span> <span class="merged" id="all.cMrNZ.spl3" title="原文 : If StatusHA handler is disabled for a deployment (by specifically setting Enabled to false then no check will take place and a deployment will be assumed to be safe).">StatusHAハンドラがデプロイメントに対して無効化されている場合(特に有効をfalseに設定すると、チェックが行われず、デプロイメントが安全であるとみなされます)。</span> </p>


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
<td class=""><span class="merged" id="all.1uWagV"  title="原文: timeoutSeconds"><code>timeoutSeconds</code></span></td>
<td class=""><span class="merged" id="all.3XJmsn.spl1" title="原文 : Number of seconds after which the handler times out (only applies to http and tcp handlers).">ハンドラがタイムアウトするまでの秒数(httpおよびtcpハンドラにのみ適用されます)。</span> <span class="merged" id="all.3XJmsn.spl2" title="原文 : Defaults to 1 second.">デフォルトは1秒です。</span> <span class="merged" id="all.3XJmsn.spl3"  title="原文:: Minimum value is 1.">最小値は1です。</span> </td>
<td class=""><span class="merged" id="all.3IVb0a.1"  title="原文: *int"><code>*int</code></span></td>
<td class=""><span class="merged" id="all.njUKu.134"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.21" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.22"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.22"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.22"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.22"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.i6xEu"  title="原文: exec"><code>exec</code></span></td>
<td class=""><span class="merged" id="all.4bLZgz.spl1" title="原文 : One and only one of the following should be specified.">次のいずれかを指定する必要があります。</span> <span class="merged" id="all.4bLZgz.spl2" title="原文 : Exec specifies the action to take.">Execは実行するアクションを指定します。</span> </td>
<td class=""><span class="merged" id="all.4xDiL"  title="原文: *corev1.ExecAction"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#execaction-v1-core" id="" target="_blank" >corev1.ExecAction</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.135"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24jtXI"  title="原文: httpGet"><code>httpGet</code></span></td>
<td class=""><span class="merged" id="all.3Jk3is" title="原文 : HTTPGet specifies the http request to perform.">HTTPGetには、実行するhttpリクエストを指定します。</span></td>
<td class=""><span class="merged" id="all.2w1wiM"  title="原文: *corev1.HTTPGetAction"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#httpgetaction-v1-core" id="" target="_blank" >corev1.HTTPGetAction</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.136"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4NJYXE"  title="原文: tcpSocket"><code>tcpSocket</code></span></td>
<td class=""><span class="merged" id="all.3HTJ82.spl1" title="原文 : TCPSocket specifies an action involving a TCP port.">TCPSocketは、TCPポートに関係するアクションを指定します。</span> <span class="merged" id="all.3HTJ82.spl2" title="原文 : TCP hooks not yet supported">TCPフックはまだサポートされていません</span> </td>
<td class=""><span class="merged" id="all.4Cz1Ra"  title="原文: *corev1.TCPSocketAction"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#tcpsocketaction-v1-core" id="" target="_blank" >corev1.TCPSocketAction</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.137"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.22" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.23"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.23"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.23"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.23"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.i6xEu.1"  title="原文: exec"><code>exec</code></span></td>
<td class=""><span class="merged" id="all.4bLZgz.1.spl1" title="原文 : One and only one of the following should be specified.">次のいずれかを指定する必要があります。</span> <span class="merged" id="all.4bLZgz.1.spl2" title="原文 : Exec specifies the action to take.">Execは実行するアクションを指定します。</span> </td>
<td class=""><span class="merged" id="all.4xDiL.1"  title="原文: *corev1.ExecAction"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#execaction-v1-core" id="" target="_blank" >corev1.ExecAction</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.138"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24jtXI.1"  title="原文: httpGet"><code>httpGet</code></span></td>
<td class=""><span class="merged" id="all.3Jk3is.1" title="原文 : HTTPGet specifies the http request to perform.">HTTPGetには、実行するhttpリクエストを指定します。</span></td>
<td class=""><span class="merged" id="all.2w1wiM.1"  title="原文: *corev1.HTTPGetAction"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#httpgetaction-v1-core" id="" target="_blank" >corev1.HTTPGetAction</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.139"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4NJYXE.1"  title="原文: tcpSocket"><code>tcpSocket</code></span></td>
<td class=""><span class="merged" id="all.3HTJ82.1.spl1" title="原文 : TCPSocket specifies an action involving a TCP port.">TCPSocketは、TCPポートに関係するアクションを指定します。</span> <span class="merged" id="all.3HTJ82.1.spl2" title="原文 : TCP hooks not yet supported">TCPフックはまだサポートされていません</span> </td>
<td class=""><span class="merged" id="all.4Cz1Ra.1"  title="原文: *corev1.TCPSocketAction"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#tcpsocketaction-v1-core" id="" target="_blank" >corev1.TCPSocketAction</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.140"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ESiyH"  title="原文: initialDelaySeconds"><code>initialDelaySeconds</code></span></td>
<td class=""><span class="merged" id="all.121UKb.spl1" title="原文 : Number of seconds after the container has started before liveness probes are initiated.">コンテナが開始されてからリブネス・プローブが開始されるまでの秒数。</span> <span class="merged" id="all.121UKb.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">詳細情報 : <a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes" id="" target="_blank" >https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes</a></span> </td>
<td class=""><span class="merged" id="all.C5sgP.10"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.141"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1uWagV.1"  title="原文: timeoutSeconds"><code>timeoutSeconds</code></span></td>
<td class=""><span class="merged" id="all.1lcHAE.spl1" title="原文 : Number of seconds after which the probe times out.">プローブがタイムアウトするまでの秒数。</span> <span class="merged" id="all.1lcHAE.spl2" title="原文 : More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">詳細情報 : <a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes" id="" target="_blank" >https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes</a></span> </td>
<td class=""><span class="merged" id="all.C5sgP.11"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.142"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1BeYeS"  title="原文: periodSeconds"><code>periodSeconds</code></span></td>
<td class=""><span class="merged" id="all.3QeOdD" title="原文 : How often (in seconds) to perform the probe.">プローブを実行する頻度(秒)。</span></td>
<td class=""><span class="merged" id="all.C5sgP.12"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.143"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1tg8tz"  title="原文: successThreshold"><code>successThreshold</code></span></td>
<td class=""><span class="merged" id="all.3FlaF" title="原文 : Minimum consecutive successes for the probe to be considered successful after having failed.">障害が発生したあと、プローブが成功したとみなされる最小連続成功回数。</span></td>
<td class=""><span class="merged" id="all.C5sgP.13"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.144"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ZE4zx"  title="原文: failureThreshold"><code>failureThreshold</code></span></td>
<td class=""><span class="merged" id="all.3FUYTt" title="原文 : Minimum consecutive failures for the probe to be considered failed after having succeeded.">検証が成功したあとで検証が失敗したとみなされる最小連続障害。</span></td>
<td class=""><span class="merged" id="all.C5sgP.14"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.145"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.23" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_resource"><span class="merged" id="all.1HMyCe"  title="原文:: Resource">リソース</span></h3>
<div class="section">
<p><span class="merged" id="all.4NSQyu" title="原文 : Resource is a structure holding a resource to be managed">リソースとは、管理対象のリソースを保持する構造です</span></p>


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
<td class=""><span class="merged" id="all.xPaN2"  title="原文: kind"><code>kind</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3NqnZg"  title="原文: ResourceType"><code>ResourceType</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.5"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.3"  title="原文: name"><code>name</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.W18FC.11"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.6"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.26upHQ"  title="原文: spec"><code>spec</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3uVVnc"  title="原文: client.Object"><code>client.Object</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.7"  title="原文:: true">true</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.24" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_resources"><span class="merged" id="all.20Qk5l"  title="原文:: Resources">リソース</span></h3>
<div class="section">
<p><span class="merged" id="all.1QiY8w" title="原文 : Resources is a cloolection of resources to be managed.">リソースは管理対象のリソースの表示です。</span></p>


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
<td class=""><span class="merged" id="all.4IYcyO"  title="原文: version"><code>version</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2UR1bd.1"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.8"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WuGEZ.1"  title="原文: items"><code>items</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.PvmPk"  title="原文: []Resource"><code>[]<router-link @click.native="this.scrollFix('#_resource')" to="#_resource">Resource</router-link></code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.9"  title="原文:: true">true</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.25" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.26"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.26"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.26"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.26"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.4"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.9SH9w" title="原文 : Enabled is a boolean flag indicating whether enables or disables SSL on the Coherence management over REST endpoint, the default is false (disabled).">Enabledは、RESTエンドポイントを介したCoherence管理でSSLを有効化または無効化するかどうかを示すブール・フラグで、デフォルトはfalse (無効)です。</span></td>
<td class=""><span class="merged" id="all.q9cn0.21"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.146"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4J7Xby"  title="原文: secrets"><code>secrets</code></span></td>
<td class=""><span class="merged" id="all.ixwnT.spl1" title="原文 : Secrets is the name of the k8s secrets containing the Java key stores and password files.">シークレットは、Javaキー・ストアおよびパスワード・ファイルを含むk8sシークレットの名前です。</span> <span class="merged" id="all.ixwnT.spl2" title="原文 :  This value MUST be provided if SSL is enabled on the Coherence management over ReST endpoint. "><br>この値は、ReSTエンドポイントを介したCoherence管理でSSLが有効になっている場合に指定する必要があります。<br></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.26"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.147"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Wcxcg"  title="原文: keyStore"><code>keyStore</code></span></td>
<td class=""><span class="merged" id="all.445sAO" title="原文 : Keystore is the name of the Java key store file in the k8s secret to use as the SSL keystore when configuring component over REST to use SSL. ">キーストアは、SSLキーストアとして使用するk8sシークレット内のJavaキー・ストア・ファイルの名前です<br>SSLを使用するようにRESTを介してコンポーネントを構成する場合。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.27"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.148"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3tiPQ1"  title="原文: keyStorePasswordFile"><code>keyStorePasswordFile</code></span></td>
<td class=""><span class="merged" id="all.2Ec4Gp" title="原文 : KeyStorePasswordFile is the name of the file in the k8s secret containing the keystore password when configuring component over REST to use SSL. ">KeyStorePasswordFileは、キーストアを含むk8sシークレット内のファイルの名前です<br>SSLを使用するようにRESTを介してコンポーネントを構成する際のパスワード。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.28"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.149"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eFPwp"  title="原文: keyPasswordFile"><code>keyPasswordFile</code></span></td>
<td class=""><span class="merged" id="all.1yiamx" title="原文 : KeyStorePasswordFile is the name of the file in the k8s secret containing the key password when configuring component over REST to use SSL. ">KeyStorePasswordFileは、キーを含むk8sシークレット内のファイルの名前です<br>SSLを使用するようにRESTを介してコンポーネントを構成する際のパスワード。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.29"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.150"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Fbf8S"  title="原文: keyStoreAlgorithm"><code>keyStoreAlgorithm</code></span></td>
<td class=""><span class="merged" id="all.BhZeE.spl1" title="原文 : KeyStoreAlgorithm is the name of the keystore algorithm for the keystore in the k8s secret used when configuring component over REST to use SSL.">KeyStoreAlgorithmは、k8sシークレットのキーストアのキーストア・アルゴリズムの名前です<br>SSLを使用するようにRESTを介してコンポーネントを構成する場合に使用されます。</span> <span class="merged" id="all.BhZeE.spl2" title="原文 : If not set the default is SunX509 ">設定しない場合、デフォルトはSunX509です<br></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.30"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.151"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZrX6S"  title="原文: keyStoreProvider"><code>keyStoreProvider</code></span></td>
<td class=""><span class="merged" id="all.1O9G9E" title="原文 : KeyStoreProvider is the name of the keystore provider for the keystore in the k8s secret used when configuring component over REST to use SSL. ">KeyStoreProviderは、k8sシークレットのキーストアのキーストア・プロバイダの名前です<br>SSLを使用するようにRESTを介してコンポーネントを構成する場合に使用されます。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.31"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.152"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.zkQo5"  title="原文: keyStoreType"><code>keyStoreType</code></span></td>
<td class=""><span class="merged" id="all.1hHlJV.spl1" title="原文 : KeyStoreType is the name of the Java keystore type for the keystore in the k8s secret used when configuring component over REST to use SSL.">KeyStoreTypeは、使用されるk8sシークレットのキーストアのJavaキーストア・タイプの名前です<br>SSLを使用するようにRESTを介してコンポーネントを構成する場合。</span> <span class="merged" id="all.1hHlJV.spl2" title="原文 : If not set the default is JKS. ">設定しない場合、デフォルトはJKSです。<br></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.32"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.153"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17D7fw"  title="原文: trustStore"><code>trustStore</code></span></td>
<td class=""><span class="merged" id="all.bU4cZ" title="原文 : TrustStore is the name of the Java trust store file in the k8s secret to use as the SSL trust store when configuring component over REST to use SSL. ">TrustStoreは、SSLとして使用するk8sシークレット内のJavaトラスト・ストア・ファイルの名前です<br>SSLを使用するようにRESTを介してコンポーネントを構成する場合のトラスト・ストア。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.33"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.154"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1uvqWl"  title="原文: trustStorePasswordFile"><code>trustStorePasswordFile</code></span></td>
<td class=""><span class="merged" id="all.3Ys3u1" title="原文 : TrustStorePasswordFile is the name of the file in the k8s secret containing the trust store password when configuring component over REST to use SSL. ">TrustStorePasswordFileは、トラスト・ストアを含むk8sシークレット内のファイルの名前です<br>SSLを使用するようにRESTを介してコンポーネントを構成する際のパスワード。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.34"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.155"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.R0RdG"  title="原文: trustStoreAlgorithm"><code>trustStoreAlgorithm</code></span></td>
<td class=""><span class="merged" id="all.2x696O.spl1" title="原文 : TrustStoreAlgorithm is the name of the keystore algorithm for the trust store in the k8s secret used when configuring component over REST to use SSL.">TrustStoreAlgorithmは、k8sにあるトラスト・ストアのキーストア・アルゴリズムの名前です<br>SSLを使用するようにRESTを介してコンポーネントを構成するときに使用されるシークレット。</span> <span class="merged" id="all.2x696O.spl2" title="原文 : If not set the default is SunX509. ">設定しない場合、デフォルトはSunX509です。<br></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.35"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.156"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4aeuWP"  title="原文: trustStoreProvider"><code>trustStoreProvider</code></span></td>
<td class=""><span class="merged" id="all.3hT0mG" title="原文 : TrustStoreProvider is the name of the keystore provider for the trust store in the k8s secret used when configuring component over REST to use SSL. ">TrustStoreProviderは、k8sのトラスト・ストアのキーストア・プロバイダの名前です<br>SSLを使用するようにRESTを介してコンポーネントを構成するときに使用されるシークレット。<br></span></td>
<td class=""><span class="merged" id="all.2JXhOu.36"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.157"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1FRUfB"  title="原文: trustStoreType"><code>trustStoreType</code></span></td>
<td class=""><span class="merged" id="all.28kb4y.spl1" title="原文 : TrustStoreType is the name of the Java keystore type for the trust store in the k8s secret used when configuring component over REST to use SSL.">TrustStoreTypeは、k8sシークレットのトラスト・ストアのJavaキーストア・タイプの名前です<br>SSLを使用するようにRESTを介してコンポーネントを構成する場合に使用されます。</span> <span class="merged" id="all.28kb4y.spl2" title="原文 : If not set the default is JKS. ">設定しない場合、デフォルトはJKSです。<br></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.37"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.158"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ESibs"  title="原文: requireClientCert"><code>requireClientCert</code></span></td>
<td class=""><span class="merged" id="all.2Cqr89" title="原文 : RequireClientCert is a boolean flag indicating whether the client certificate will be authenticated by the server (two-way SSL) when configuring component over REST to use SSL. + If not set the default is false ">RequireClientCertは、クライアント証明書であるかどうかを示すブール・フラグです<br>SSLを使用するようにRESTを介してコンポーネントを構成するときに、サーバーによって認証されます(双方向SSL)。+<br>設定されていない場合、デフォルトはfalseです<br></span></td>
<td class=""><span class="merged" id="all.q9cn0.22"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.159"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.26" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_scalingspec"><span class="merged" id="all.14uAxY"  title="原文: ScalingSpec">ScalingSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.2YcDAs" title="原文 : ScalingSpec is the configuration to control safe scaling.">ScalingSpecは、安全なスケーリングを制御するための構成です。</span></p>


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
<td class=""><span class="merged" id="all.3NXaiv"  title="原文: policy"><code>policy</code></span></td>
<td class=""><span class="merged" id="all.49SfOl.spl1" title="原文 : ScalingPolicy describes how the replicas of the deployment will be scaled.">ScalingPolicyでは、デプロイメントのレプリカのスケーリング方法を説明します。</span> <span class="merged" id="all.49SfOl.spl2" title="原文 : The default if not specified is based upon the value of the StorageEnabled field.">指定しない場合のデフォルトは、StorageEnabledフィールドの値に基づいています。</span> <span class="merged" id="all.49SfOl.spl3" title="原文 : If StorageEnabled field is not specified or is true the default scaling will be safe, if StorageEnabled is set to false the default scaling will be parallel.">「StorageEnabledの場合」フィールドが指定されていないか、trueの場合、デフォルトのスケーリングは安全です。StorageEnabledがfalseに設定されている場合、デフォルトのスケーリングはパラレルになります。</span> </td>
<td class=""><span class="merged" id="all.3aTqB5"  title="原文: *ScalingPolicy"><code>*ScalingPolicy</code></span></td>
<td class=""><span class="merged" id="all.njUKu.160"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ctnoL"  title="原文: probe"><code>probe</code></span></td>
<td class=""><span class="merged" id="all.2aZXNh.spl1" title="原文 : The probe to use to determine whether a deployment is Phase HA.">デプロイメントがフェーズHAかどうかを判断するために使用するプローブ。</span> <span class="merged" id="all.2aZXNh.spl2" title="原文 : If not set the default handler will be used.">設定しない場合、デフォルトのハンドラが使用されます。</span> <span class="merged" id="all.2aZXNh.spl3" title="原文 : In most use-cases the default handler would suffice but in advanced use-cases where the application code has a different concept of Phase HA to just checking Coherence services then a different handler may be specified.">ほとんどのユースケースでは、デフォルト・ハンドラが適していますが、アプリケーション・コードにフェーズHAの概念が異なる高度なユースケースでは、Coherenceサービスを確認するだけに別のハンドラを指定できます。</span> </td>
<td class=""><span class="merged" id="all.3aDXpb.1"  title="原文: *Probe"><code>*<router-link @click.native="this.scrollFix('#_probe')" to="#_probe">Probe</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.161"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.27" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_secretvolumespec"><span class="merged" id="all.2shwm"  title="原文: SecretVolumeSpec">SecretVolumeSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.tPNp1" title="原文 : SecretVolumeSpec represents a Secret that will be added to the deployment&rsquo;s Pods as an additional Volume and as a VolumeMount in the containers. see: Add Secret Volumes">SecretVolumeSpecは、デプロイメント・ポッドに追加ボリュームとして追加され、コンテナ内のVolumeMountとして追加されるシークレットを表します。<br>見る: <router-link @click.native="this.scrollFix('#misc_pod_settings/020_secret_volumes.adoc')" to="#misc_pod_settings/020_secret_volumes.adoc">シークレット・ボリュームの追加</router-link></span></p>


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
<td class=""><span class="merged" id="all.309fiz.4"  title="原文: name"><code>name</code></span></td>
<td class=""><span class="merged" id="all.1pxTLq.spl1" title="原文 : The name of the Secret to mount.">マウントするシークレットの名前。</span> <span class="merged" id="all.1pxTLq.spl2" title="原文 : This will also be used as the name of the Volume added to the Pod if the VolumeName field is not set.">これは、VolumeNameフィールドが設定されていない場合、ポッドに追加されたボリュームの名前としても使用されます。</span> </td>
<td class=""><span class="merged" id="all.W18FC.12"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.10"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZMeSS.1"  title="原文: mountPath"><code>mountPath</code></span></td>
<td class=""><span class="merged" id="all.2cupoy.1.spl1" title="原文 : Path within the container at which the volume should be mounted.">ボリュームをマウントするコンテナ内のパス。</span> <span class="merged" id="all.2cupoy.1.spl2" title="原文 : Must not contain &apos;:&apos;.">':'を含めることはできません。</span> </td>
<td class=""><span class="merged" id="all.W18FC.13"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.11"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yWp2V.1"  title="原文: volumeName"><code>volumeName</code></span></td>
<td class=""><span class="merged" id="all.3Le7a9.spl1" title="原文 : The optional name to use for the Volume added to the Pod.">ポッドに追加されるボリュームに使用するオプションの名前。</span> <span class="merged" id="all.3Le7a9.spl2" title="原文 : If not set, the Secret name will be used as the VolumeName.">設定しない場合、シークレット名がVolumeNameとして使用されます。</span> </td>
<td class=""><span class="merged" id="all.W18FC.14"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.162"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3wva11.1"  title="原文: readOnly"><code>readOnly</code></span></td>
<td class=""><span class="merged" id="all.2zWRdn.1.spl1" title="原文 : Mounted read-only if true, read-write otherwise (false or unspecified).">trueの場合、読み取り専用でマウントされます。それ以外の場合は読み取り/書き込み(falseまたは未指定)。</span> <span class="merged" id="all.2zWRdn.1.spl2"  title="原文:: Defaults to false.">デフォルトはfalseです。</span> </td>
<td class=""><span class="merged" id="all.2Sqi2i.1"  title="原文: bool"><code>bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.163"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.uxrbO.1"  title="原文: subPath"><code>subPath</code></span></td>
<td class=""><span class="merged" id="all.3eNCa5.1.spl1" title="原文 : Path within the volume from which the container&rsquo;s volume should be mounted.">コンテナのボリュームをマウントするボリューム内のパス。</span> <span class="merged" id="all.3eNCa5.1.spl2" title="原文 : Defaults to &quot;&quot; (volume&rsquo;s root).">デフォルトは"" (ボリュームのルート)です。</span> </td>
<td class=""><span class="merged" id="all.W18FC.15"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.164"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Ps765.1"  title="原文: mountPropagation"><code>mountPropagation</code></span></td>
<td class=""><span class="merged" id="all.3fjZ9a.1.spl1" title="原文 : mountPropagation determines how mounts are propagated from the host to container and the other way around.">mountPropagationは、ホストからコンテナへのマウントの伝播方法と、その逆の方法を決定します。</span> <span class="merged" id="all.3fjZ9a.1.spl2" title="原文 : When not set, MountPropagationNone is used.">設定しない場合、MountPropagationNoneが使用されます。</span> </td>
<td class=""><span class="merged" id="all.2gOAM6.1"  title="原文: *corev1.MountPropagationMode"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#mountpropagationmode-v1-core" id="" target="_blank" >corev1.MountPropagationMode</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.165"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XcR2k.1"  title="原文: subPathExpr"><code>subPathExpr</code></span></td>
<td class=""><span class="merged" id="all.2xHhZ1.1.spl1" title="原文 : Expanded path within the volume from which the container&rsquo;s volume should be mounted.">コンテナのボリュームをマウントするボリューム内の拡張パス。</span> <span class="merged" id="all.2xHhZ1.1.spl2" title="原文 : Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container&rsquo;s environment.">SubPathと同様に動作しますが、環境変数参照$(VAR_NAME)はコンテナの環境を使用して拡張されます。</span> <span class="merged" id="all.2xHhZ1.1.spl3" title="原文 : Defaults to &quot;&quot; (volume&rsquo;s root).">デフォルトは"" (ボリュームのルート)です。</span> <span class="merged" id="all.2xHhZ1.1.spl4" title="原文 : SubPathExpr and SubPath are mutually exclusive.">SubPathExprとSubPathは相互に排他的です。</span> </td>
<td class=""><span class="merged" id="all.W18FC.16"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.166"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WuGEZ.2"  title="原文: items"><code>items</code></span></td>
<td class=""><span class="merged" id="all.3YHKkj.spl1" title="原文 : If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value.">指定しない場合、参照されているシークレットのデータ・フィールドの各キー/値のペアは、名前がキーでコンテンツが値であるファイルとしてボリュームに投影されます。</span> <span class="merged" id="all.3YHKkj.spl2" title="原文 : If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present.">指定された場合、リストされているキーは指定されたパスに投影され、リストされていないキーは表示されません。</span> <span class="merged" id="all.3YHKkj.spl3" title="原文 : If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional.">シークレットに存在しないキーが指定されている場合、ボリューム設定はオプションとしてマークされないかぎりエラーになります。</span> <span class="merged" id="all.3YHKkj.spl4" title="原文 : Paths must be relative and may not contain the &apos;..&apos; path or start with &apos;..&apos;.">パスは相対パスである必要があり、'..'パスを含むことも、'..'で始まることもできません。</span> </td>
<td class=""><span class="merged" id="all.4eeJz2.1"  title="原文: []corev1.KeyToPath"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#keytopath-v1-core" id="" target="_blank" >corev1.KeyToPath</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.167"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hViGd.1"  title="原文: defaultMode"><code>defaultMode</code></span></td>
<td class=""><span class="merged" id="all.2c3pwb.1.spl1" title="原文 : Optional: mode bits to use on created files by default.">オプション: デフォルトでは、作成されたファイルで使用するモード・ビット。</span> <span class="merged" id="all.2c3pwb.1.spl2"  title="原文:: Must be a value between 0 and 0777.">0から0777の間の値である必要があります。</span> <span class="merged" id="all.2c3pwb.1.spl3"  title="原文:: Defaults to 0644.">デフォルトは0644です。</span> <span class="merged" id="all.2c3pwb.1.spl4" title="原文 : Directories within the path are not affected by this setting.">パス内のディレクトリは、この設定に影響されません。</span> <span class="merged" id="all.2c3pwb.1.spl5" title="原文 : This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.">これは、fsGroupなどのファイル・モードに影響を与えるほかのオプションと競合し、その結果がその他のモード・ビット・セットになることがあります。</span> </td>
<td class=""><span class="merged" id="all.C5sgP.15"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.168"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.1"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.6vRTB" title="原文 : Specify whether the Secret or its keys must be defined">シークレットまたはそのキーを定義する必要があるかどうかを指定</span></td>
<td class=""><span class="merged" id="all.q9cn0.23"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.169"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.28" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_servicemonitorspec"><span class="merged" id="all.2S9Szv"  title="原文: ServiceMonitorSpec">ServiceMonitorSpec</span></h3>
<div class="section">
<p><span class="merged" id="all.4bnwN9" title="原文 : ServiceMonitorSpec the ServiceMonitor spec for a port service.">ServiceMonitorSpec:ポート・サービスのServiceMonitor仕様。</span></p>


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
<td class=""><span class="merged" id="all.48UcwL.5"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.RO6Bw.spl1" title="原文 : Enabled is a flag to enable or disable creation of a Prometheus ServiceMonitor for a port.">Enabledは、ポートに対するPrometheus ServiceMonitorの作成を有効または無効にするフラグです。</span> <span class="merged" id="all.RO6Bw.spl2" title="原文 : If Prometheus ServiceMonitor CR is not installed no ServiceMonitor then even if this flag is true no ServiceMonitor will be created.">Prometheus ServiceMonitor CRがインストールされていない場合、このフラグがtrueであってもServiceMonitorは作成されません。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.24"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.170"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Dbs6Z.1"  title="原文: labels"><code>labels</code></span></td>
<td class=""><span class="merged" id="all.2IpEis.spl1" title="原文 : Additional labels to add to the ServiceMonitor.">ServiceMonitorに追加するラベル。</span> <span class="merged" id="all.2IpEis.spl2" title="原文 : More info: http://kubernetes.io/docs/user-guide/labels">詳細情報 : <a href="http://kubernetes.io/docs/user-guide/labels" id="" target="_blank" >http://kubernetes.io/docs/user-guide/labels</a></span> </td>
<td class=""><span class="merged" id="all.6My6t.3"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.171"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2GRg4F"  title="原文: jobLabel"><code>jobLabel</code></span></td>
<td class=""><span class="merged" id="all.O22Qr.spl1" title="原文 : The label to use to retrieve the job name from.">ジョブ名の取得に使用するラベル。</span> <span class="merged" id="all.O22Qr.spl2" title="原文 : See https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec"><a href="https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.W18FC.17"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.172"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ztHUZ"  title="原文: targetLabels"><code>targetLabels</code></span></td>
<td class=""><span class="merged" id="all.ppZ3r.spl1" title="原文 : TargetLabels transfers labels on the Kubernetes Service onto the target.">TargetLabelsは、Kubernetesサービスのラベルをターゲットに転送します。</span> <span class="merged" id="all.ppZ3r.spl2" title="原文 : See https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec"><a href="https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.rXwhA.7"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.173"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2bXrDK"  title="原文: podTargetLabels"><code>podTargetLabels</code></span></td>
<td class=""><span class="merged" id="all.2Q8ZiE.spl1" title="原文 : PodTargetLabels transfers labels on the Kubernetes Pod onto the target.">PodTargetLabelsは、Kubernetesポッドのラベルをターゲットに転送します。</span> <span class="merged" id="all.2Q8ZiE.spl2" title="原文 : See https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec"><a href="https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.rXwhA.8"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.174"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.33ZEoc"  title="原文: sampleLimit"><code>sampleLimit</code></span></td>
<td class=""><span class="merged" id="all.OJWbF.spl1" title="原文 : SampleLimit defines per-scrape limit on number of scraped samples that will be accepted.">SampleLimitは、受け入れられるサンプルの数に対するスクラープ当たりの制限を定義します。</span> <span class="merged" id="all.OJWbF.spl2" title="原文 : See https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec"><a href="https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitorspec</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.1N9Cn0"  title="原文: uint64"><code>uint64</code></span></td>
<td class=""><span class="merged" id="all.njUKu.175"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3acZhn"  title="原文: path"><code>path</code></span></td>
<td class=""><span class="merged" id="all.3FGXmo.spl1" title="原文 : HTTP path to scrape for metrics.">メトリクスのscrapeへのHTTPパス。</span> <span class="merged" id="all.3FGXmo.spl2" title="原文 : See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint"><a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.W18FC.18"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.176"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1LRcmy"  title="原文: scheme"><code>scheme</code></span></td>
<td class=""><span class="merged" id="all.cYpTN.spl1" title="原文 : HTTP scheme to use for scraping.">スクレーピングに使用するHTTPスキーム。</span> <span class="merged" id="all.cYpTN.spl2" title="原文 : See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint"><a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.W18FC.19"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.177"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4FJaVQ"  title="原文: params"><code>params</code></span></td>
<td class=""><span class="merged" id="all.ibfFx" title="原文 : Optional HTTP URL parameters See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint">オプションのHTTP URLパラメータ、<a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照</span></td>
<td class=""><span class="merged" id="all.4gUs8B"  title="原文: map[string][]string"><code>map[string][]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.178"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.cdWjK"  title="原文: interval"><code>interval</code></span></td>
<td class=""><span class="merged" id="all.jDdN6" title="原文 : Interval at which metrics should be scraped See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint">メトリクスを縮小する間隔(<a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照)</span></td>
<td class=""><span class="merged" id="all.W18FC.20"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.179"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4OK5JD"  title="原文: scrapeTimeout"><code>scrapeTimeout</code></span></td>
<td class=""><span class="merged" id="all.25F90W" title="原文 : Timeout after which the scrape is ended See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint">スクライプが終了するまでのタイムアウト(<a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照)</span></td>
<td class=""><span class="merged" id="all.W18FC.21"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.180"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1cQ02l"  title="原文: tlsConfig"><code>tlsConfig</code></span></td>
<td class=""><span class="merged" id="all.49cl2U" title="原文 : TLS configuration to use when scraping the endpoint See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint">エンドポイントのスクレーピング時に使用するTLS構成<a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照してください</span></td>
<td class=""><span class="merged" id="all.3fuOE5"  title="原文: *monitoringv1.TLSConfig"><code>*monitoringv1.TLSConfig</code></span></td>
<td class=""><span class="merged" id="all.njUKu.181"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.EE3Jk"  title="原文: bearerTokenFile"><code>bearerTokenFile</code></span></td>
<td class=""><span class="merged" id="all.4PH7Tl.spl1" title="原文 : File to read bearer token for scraping targets.">ターゲットのスクレイピングのためにトークンを読み取るファイル。</span> <span class="merged" id="all.4PH7Tl.spl2" title="原文 : See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint"><a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.W18FC.22"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.182"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2nroIb"  title="原文: bearerTokenSecret"><code>bearerTokenSecret</code></span></td>
<td class=""><span class="merged" id="all.4DlIr1.spl1" title="原文 : Secret to mount to read bearer token for scraping targets.">ターゲットのスクレイピングのためにトークンを読み取るためにマウントするシークレット。</span> <span class="merged" id="all.4DlIr1.spl2" title="原文 : The secret needs to be in the same namespace as the service monitor and accessible by the Prometheus Operator.">このシークレットは、サービス・モニターと同じネームスペースに存在し、Prometheusオペレータがアクセスできる必要があります。</span> <span class="merged" id="all.4DlIr1.spl3" title="原文 : See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint"><a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.2bqVW9"  title="原文: corev1.SecretKeySelector"><code><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#secretkeyselector-v1-core" id="" target="_blank" >corev1.SecretKeySelector</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.183"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nppaN"  title="原文: honorLabels"><code>honorLabels</code></span></td>
<td class=""><span class="merged" id="all.1w6KJt.spl1" title="原文 : HonorLabels chooses the metric labels on collisions with target labels.">HonorLabelsは、ターゲット・ラベルとの衝突のメトリック・ラベルを選択します。</span> <span class="merged" id="all.1w6KJt.spl2" title="原文 : See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint"><a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.2Sqi2i.2"  title="原文: bool"><code>bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.184"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2GMlFL"  title="原文: honorTimestamps"><code>honorTimestamps</code></span></td>
<td class=""><span class="merged" id="all.OHEns.spl1" title="原文 : HonorTimestamps controls whether Prometheus respects the timestamps present in scraped data.">HonorTimestampsは、Prometheusが、縮小されたデータに存在するタイムスタンプを尊重するかどうかを制御します。</span> <span class="merged" id="all.OHEns.spl2" title="原文 : See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint"><a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.q9cn0.25"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.185"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WmXmB"  title="原文: basicAuth"><code>basicAuth</code></span></td>
<td class=""><span class="merged" id="all.1YsSzd" title="原文 : BasicAuth allow an endpoint to authenticate over basic authentication More info: https://prometheus.io/docs/operating/configuration/#endpoints See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint">BasicAuthでは、エンドポイントによる基本認証での認証を許可詳細情報 : <a href="https://prometheus.io/docs/operating/configuration/#endpoints" id="" target="_blank" >https://prometheus.io/docs/operating/configuration/#endpoints</a>、<a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照してください</span></td>
<td class=""><span class="merged" id="all.OoNvH"  title="原文: *monitoringv1.BasicAuth"><code>*monitoringv1.BasicAuth</code></span></td>
<td class=""><span class="merged" id="all.njUKu.186"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.sFTbd"  title="原文: metricRelabelings"><code>metricRelabelings</code></span></td>
<td class=""><span class="merged" id="all.oSn5J.spl1" title="原文 : MetricRelabelings to apply to samples before ingestion.">MetricRelabelings:取込み前のサンプルに適用されます。</span> <span class="merged" id="all.oSn5J.spl2" title="原文 : See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint"><a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.Uw8bD"  title="原文: []*monitoringv1.RelabelConfig"><code>[]*monitoringv1.RelabelConfig</code></span></td>
<td class=""><span class="merged" id="all.njUKu.187"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2hm97K"  title="原文: relabelings"><code>relabelings</code></span></td>
<td class=""><span class="merged" id="all.3EcNpQ.spl1" title="原文 : Relabelings to apply to samples before scraping.">スクレーピング前にサンプルに適用するラベルを変更します。</span> <span class="merged" id="all.3EcNpQ.spl2" title="原文 : More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint">詳細情報 : <a href="https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config" id="" target="_blank" >https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config</a>、<a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.Uw8bD.1"  title="原文: []*monitoringv1.RelabelConfig"><code>[]*monitoringv1.RelabelConfig</code></span></td>
<td class=""><span class="merged" id="all.njUKu.188"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Tmw7K"  title="原文: proxyURL"><code>proxyURL</code></span></td>
<td class=""><span class="merged" id="all.1OuRcN.spl1" title="原文 : ProxyURL eg http://proxyserver:2195 Directs scrapes to proxy through this endpoint.">ProxyURL例:<a href="http://proxyserver:2195" id="" target="_blank" >http://proxyserver:2195</a>このエンドポイントをプロキシに廃棄します。</span> <span class="merged" id="all.1OuRcN.spl2" title="原文 : See https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint"><a href="https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint" id="" target="_blank" >https://coreos.com/operators/prometheus/docs/latest/api.html#endpoint</a>を参照してください</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.38"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.189"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.29" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

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
<th><span class="merged" id="all.2p5Jka.30"  title="原文:: Field">フィールド</span></th>
<th><span class="merged" id="all.4JM9z7.30"  title="原文:: Description">説明</span></th>
<th><span class="merged" id="all.p0YxL.30"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.TRGsJ.30"  title="原文:: Required">必須</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.6"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.4OOc8O" title="原文 : Enabled controls whether to create the service yaml or not">有効は、サービスYamlを作成するかどうかを制御</span></td>
<td class=""><span class="merged" id="all.q9cn0.26"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.190"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.5"  title="原文: name"><code>name</code></span></td>
<td class=""><span class="merged" id="all.4RJCwK" title="原文 : An optional name to use to override the generated service name.">生成されたサービス名を上書きするために使用するオプションの名前。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.39"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.191"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30SaAJ"  title="原文: portName"><code>portName</code></span></td>
<td class=""><span class="merged" id="all.3o8LMw" title="原文 : An optional name to use to override the port name.">ポート名をオーバーライドするために使用するオプションの名前。</span></td>
<td class=""><span class="merged" id="all.2JXhOu.40"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.192"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.4"  title="原文: port"><code>port</code></span></td>
<td class=""><span class="merged" id="all.3sQs2k" title="原文 : The service port value">サービス・ポート値</span></td>
<td class=""><span class="merged" id="all.C5sgP.16"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.193"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2SYAnU.1"  title="原文: type"><code>type</code></span></td>
<td class=""><span class="merged" id="all.3aOt7f" title="原文 : Kind is the K8s service type (typically ClusterIP or LoadBalancer) The default is &quot;ClusterIP&quot;.">K8sサービス・タイプ(通常はClusterIPまたはLoadBalancer)です。デフォルトは"ClusterIP"です。</span></td>
<td class=""><span class="merged" id="all.2sskTS"  title="原文: *corev1.ServiceType"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#servicetype-v1-core" id="" target="_blank" >corev1.ServiceType</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.194"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3nrevq"  title="原文: externalIPs"><code>externalIPs</code></span></td>
<td class=""><span class="merged" id="all.4FTeFk.spl1" title="原文 : externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.">externalIPsは、クラスタ内のノードがこのサービスのトラフィックも受け入れるIPアドレスのリストです。</span> <span class="merged" id="all.4FTeFk.spl2" title="原文 : These IPs are not managed by Kubernetes.">これらのIPは、Kubernetesによって管理されません。</span> <span class="merged" id="all.4FTeFk.spl3" title="原文 : The user is responsible for ensuring that traffic arrives at a node with this IP.">ユーザーは、このIPを持つノードにトラフィックが到着することを確認します。</span> <span class="merged" id="all.4FTeFk.spl4" title="原文 : A common example is external load-balancers that are not part of the Kubernetes system.">一般的な例は、Kubernetesシステムの一部ではない外部ロード・バランサです。</span> </td>
<td class=""><span class="merged" id="all.rXwhA.9"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.195"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3X9Bve"  title="原文: clusterIP"><code>clusterIP</code></span></td>
<td class=""><span class="merged" id="all.3Dc7s7.spl1" title="原文 : clusterIP is the IP address of the service and is usually assigned randomly by the master.">clusterIPはサービスのIPアドレスで、通常はマスターによってランダムに割り当てられます。</span> <span class="merged" id="all.3Dc7s7.spl2" title="原文 : If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail.">アドレスが手動で指定され、他のユーザーによって使用されていない場合、そのアドレスがサービスに割り当てられます。指定しないと、サービスの作成は失敗します。</span> <span class="merged" id="all.3Dc7s7.spl3" title="原文 : This field can not be changed through updates.">このフィールドは更新では変更できません。</span> <span class="merged" id="all.3Dc7s7.spl4" title="原文 : Valid values are &quot;None&quot;, empty string (&quot;&quot;), or a valid IP address. &quot;None&quot; can be specified for headless services when proxying is not required.">有効な値は、「なし」、「空の文字列(")」または有効なIPアドレスです。プロキシが不要な場合は、ヘッドレス・サービスに「なし」を指定できます。</span> <span class="merged" id="all.3Dc7s7.spl5" title="原文 : Only applies to types ClusterIP, NodePort, and LoadBalancer.">タイプClusterIP、NodePortおよびLoadBalancerにのみ適用されます。</span> <span class="merged" id="all.3Dc7s7.spl6" title="原文 : Ignored if type is ExternalName.">typeがExternalNameの場合は無視されます。</span> <span class="merged" id="all.3Dc7s7.spl7" title="原文 : More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies">詳細情報 : <a href="https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies" id="" target="_blank" >https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies</a></span> </td>
<td class=""><span class="merged" id="all.2JXhOu.41"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.196"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XPGUA"  title="原文: clusterIPs"><code>clusterIPs</code></span></td>
<td class=""><span class="merged" id="all.4dlTqb.spl1" title="原文 : ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.">ClusterIPsは、このサービスに割り当てられたIPアドレスのリストであり、通常はランダムに割り当てられます。</span> <span class="merged" id="all.4dlTqb.spl2" title="原文 : If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail.">アドレスが手動で指定され、(システム構成に従って)範囲内であり、使用されていない場合、そのアドレスはサービスに割り当てられます。指定しないと、サービスの作成は失敗します。</span> <span class="merged" id="all.4dlTqb.spl3" title="原文 : This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).">このフィールドは、タイプ・フィールドがExternalName(このフィールドを空にする必要がある)に変更されないか、ExternalNameからタイプ・フィールドを変更していないかぎり、更新によって変更することはできません(この場合、前述のとおり、このフィールドは任意に指定できます)。</span> <span class="merged" id="all.4dlTqb.spl4" title="原文 : Valid values are &quot;None&quot;, empty string (&quot;&quot;), or a valid IP address.">有効な値は、「なし」、「空の文字列(")」または有効なIPアドレスです。</span> <span class="merged" id="all.4dlTqb.spl5" title="原文 : Setting this to &quot;None&quot; makes a &quot;headless service&quot; (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.">これを「なし」に設定すると、「ヘッドレス・サービス」(仮想IPなし)が作成されます。これは、直接エンドポイント接続が優先され、プロキシが不要な場合に便利です。</span> <span class="merged" id="all.4dlTqb.spl6" title="原文 : Only applies to types ClusterIP, NodePort, and LoadBalancer.">タイプClusterIP、NodePortおよびLoadBalancerにのみ適用されます。</span> <span class="merged" id="all.4dlTqb.spl7" title="原文 : If this field is specified when creating a Service of type ExternalName, creation will fail.">タイプがExternalNameのサービスの作成時にこのフィールドを指定した場合、作成は失敗します。</span> <span class="merged" id="all.4dlTqb.spl8" title="原文 : This field will be wiped when updating a Service to type ExternalName.">このフィールドは、サービスをタイプExternalNameに更新するときに消去されます。</span> <span class="merged" id="all.4dlTqb.spl9" title="原文 : If this field is not specified, it will be initialized from the clusterIP field.">このフィールドを指定しない場合、clusterIPフィールドから初期化されます。</span> <span class="merged" id="all.4dlTqb.spl10" title="原文 : If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.">このフィールドが指定されている場合、クライアントはclusterIPs[0]とclusterIPの値が同じであることを確認する必要があります。</span> <span class="merged" id="all.4dlTqb.spl11" title="原文 :  Unless the &quot;IPv6DualStack&quot; feature gate is enabled, this field is limited to one value, which must be the same as the clusterIP field."><br> <br> Unless the "IPv6DualStack" feature gate is enabled, this field is limited to one value, which must be the same as the clusterIP field.</span> <span class="merged" id="all.4dlTqb.spl12" title="原文 : If the feature gate is enabled, this field may hold a maximum of two entries (dual-stack IPs, in either order).">フィーチャ・ゲートが有効な場合は、最大2つのエントリ(デュアル・スタックIPのいずれか順)を保持できます。</span> <span class="merged" id="all.4dlTqb.spl13" title="原文 : These IPs must correspond to the values of the ipFamilies field.">これらのIPは、ipFamiliesフィールドの値に対応している必要があります。</span> <span class="merged" id="all.4dlTqb.spl14" title="原文 : Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.">clusterIPsとipFamiliesは両方ともipFamilyPolicyフィールドで管理されます。</span> <span class="merged" id="all.4dlTqb.spl15" title="原文 : More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies">詳細情報 : <a href="https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies" id="" target="_blank" >https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies</a></span> </td>
<td class=""><span class="merged" id="all.rXwhA.10"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.197"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2JEMSo"  title="原文: loadBalancerIP"><code>loadBalancerIP</code></span></td>
<td class=""><span class="merged" id="all.3ndEHX" title="原文 : LoadBalancerIP is the IP address of the load balancer">LoadBalancerIPはロード・バランサのIPアドレスです</span></td>
<td class=""><span class="merged" id="all.2JXhOu.42"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.198"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Dbs6Z.2"  title="原文: labels"><code>labels</code></span></td>
<td class=""><span class="merged" id="all.1tPEcY.spl1" title="原文 : The extra labels to add to the service.">サービスに追加する追加のラベル。</span> <span class="merged" id="all.1tPEcY.spl2" title="原文 : More info: http://kubernetes.io/docs/user-guide/labels">詳細情報 : <a href="http://kubernetes.io/docs/user-guide/labels" id="" target="_blank" >http://kubernetes.io/docs/user-guide/labels</a></span> </td>
<td class=""><span class="merged" id="all.6My6t.4"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.199"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uY9DD.1"  title="原文: annotations"><code>annotations</code></span></td>
<td class=""><span class="merged" id="all.MQHKW" title="原文 : Annotations is free form yaml that will be added to the service annotations">注釈は、サービス注釈に追加されるフリー・フォームyamlです</span></td>
<td class=""><span class="merged" id="all.6My6t.5"  title="原文: map[string]string"><code>map[string]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.200"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1K2eTw"  title="原文: sessionAffinity"><code>sessionAffinity</code></span></td>
<td class=""><span class="merged" id="all.2psbII.spl1" title="原文 : Supports &quot;ClientIP&quot; and &quot;None&quot;.">"ClientIP"および"None"をサポートしています。</span> <span class="merged" id="all.2psbII.spl2" title="原文 : Used to maintain session affinity.">セッション・アフィニティを維持するために使用されます。</span> <span class="merged" id="all.2psbII.spl3" title="原文 : Enable client IP based session affinity.">クライアントIPベースのセッションアフィニティを有効にします。</span> <span class="merged" id="all.2psbII.spl4" title="原文 : Must be ClientIP or None.">ClientIPまたはNoneにする必要があります。</span> <span class="merged" id="all.2psbII.spl5"  title="原文:: Defaults to None.">デフォルトはNoneです。</span> <span class="merged" id="all.2psbII.spl6" title="原文 : More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies">詳細情報 : <a href="https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies" id="" target="_blank" >https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies</a></span> </td>
<td class=""><span class="merged" id="all.2B0TX2"  title="原文: *corev1.ServiceAffinity"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#serviceaffinity-v1-core" id="" target="_blank" >corev1.ServiceAffinity</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.201"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3hQeLO"  title="原文: loadBalancerSourceRanges"><code>loadBalancerSourceRanges</code></span></td>
<td class=""><span class="merged" id="all.JgA9l.spl1" title="原文 : If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs.">プラットフォームで指定およびサポートされている場合、クラウド・プロバイダのロード・バランサを介したトラフィックは、指定されたクライアントIPに制限されます。</span> <span class="merged" id="all.JgA9l.spl2" title="原文 : This field will be ignored if the cloud-provider does not support the feature.&quot; More info: https://kubernetes.io/docs/tasks/access-application-cluster/configure-cloud-provider-firewall/">クラウド・プロバイダがこの機能をサポートしていない場合、このフィールドは無視されます。"詳細情報 : <a href="https://kubernetes.io/docs/tasks/access-application-cluster/configure-cloud-provider-firewall/" id="" target="_blank" >https://kubernetes.io/docs/tasks/access-application-cluster/configure-cloud-provider-firewall/</a></span> </td>
<td class=""><span class="merged" id="all.rXwhA.11"  title="原文: []string"><code>[]string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.202"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3XGeGz"  title="原文: externalName"><code>externalName</code></span></td>
<td class=""><span class="merged" id="all.LMWBy.spl1" title="原文 : externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service.">externalNameは、kubednsまたは同等の参照であり、このサービスのCNAMEレコードとして返されます。</span> <span class="merged" id="all.LMWBy.spl2" title="原文 : No proxying will be involved.">プロキシ処理は行われません。</span> <span class="merged" id="all.LMWBy.spl3" title="原文 : Must be a valid RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires Kind to be ExternalName.">有効なRFC-1123ホスト名(<a href="https://tools.ietf.org/html/rfc1123" id="" target="_blank" >https://tools.ietf.org/html/rfc1123</a>)であり、ExternalNameである必要があります。</span> </td>
<td class=""><span class="merged" id="all.2JXhOu.43"  title="原文: *string"><code>*string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.203"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.39l4ro"  title="原文: externalTrafficPolicy"><code>externalTrafficPolicy</code></span></td>
<td class=""><span class="merged" id="all.1KDS5n" title="原文 : externalTrafficPolicy denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. &quot;Local&quot; preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. &quot;Cluster&quot; obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading.">externalTrafficPolicyは、このサービスが外部トラフィックをノード・ローカルまたはクラスタ全体のエンドポイントにルーティングするかどうかを示します。「ローカル」では、クライアント・ソースIPが保持され、LoadBalancerおよびNodeportタイプ・サービスの2番目のホップが回避されますが、トラフィック分散が不均衡になる恐れがあります。「クラスタ」はクライアント・ソースのIPを隠し、別のノードに2回目のホップを引き起こす可能性がありますが、全体的な負荷分散は良好です。</span></td>
<td class=""><span class="merged" id="all.TGLMn"  title="原文: *corev1.ServiceExternalTrafficPolicyType"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#serviceexternaltrafficpolicytype-v1-core" id="" target="_blank" >corev1.ServiceExternalTrafficPolicyType</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.204"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.11URVe"  title="原文: healthCheckNodePort"><code>healthCheckNodePort</code></span></td>
<td class=""><span class="merged" id="all.1JNgdN.spl1" title="原文 : healthCheckNodePort specifies the healthcheck nodePort for the service.">healthCheckNodePortは、サービスのヘルス・チェックnodePortを指定します。</span> <span class="merged" id="all.1JNgdN.spl2" title="原文 : If not specified, HealthCheckNodePort is created by the service api backend with the allocated nodePort.">指定しない場合、nodePortが割り当てられたサービスAPIバックエンドによってHealthCheckNodePortが作成されます。</span> <span class="merged" id="all.1JNgdN.spl3" title="原文 : Will use user-specified nodePort value if specified by the client.">クライアントで指定する場合は、ユーザー指定のnodePort値を使用します。</span> <span class="merged" id="all.1JNgdN.spl4" title="原文 : Only effects when Kind is set to LoadBalancer and ExternalTrafficPolicy is set to Local.">種類がLoadBalancerに設定され、ExternalTrafficPolicyがローカルに設定されている場合にのみ効果があります。</span> </td>
<td class=""><span class="merged" id="all.C5sgP.17"  title="原文: *int32"><code>*int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.205"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2YOyFT"  title="原文: publishNotReadyAddresses"><code>publishNotReadyAddresses</code></span></td>
<td class=""><span class="merged" id="all.2LicmE.spl1" title="原文 : publishNotReadyAddresses, when set to true, indicates that DNS implementations must publish the notReadyAddresses of subsets for the Endpoints associated with the Service.">publishNotReadyAddressesをtrueに設定すると、DNS実装がサービスに関連付けられたエンドポイントのサブセットのnotReadyAddressesを公開する必要があることを示します。</span> <span class="merged" id="all.2LicmE.spl2"  title="原文: The default value is false.">デフォルト値はfalseです。</span> <span class="merged" id="all.2LicmE.spl3" title="原文 : The primary use case for setting this field is to use a StatefulSet&rsquo;s Headless Service to propagate SRV records for its Pods without respect to their readiness for purpose of peer discovery.">このフィールドを設定する主なユースケースは、StatefulSetのヘッドレス・サービスを使用して、ピア検出の目的でPodのSRVレコードを伝播することなく、そのPodのSRVレコードを伝播することです。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.27"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.206"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2y4g10"  title="原文: sessionAffinityConfig"><code>sessionAffinityConfig</code></span></td>
<td class=""><span class="merged" id="all.UOXDn" title="原文 : sessionAffinityConfig contains the configurations of session affinity.">sessionAffinityConfigには、セッション・アフィニティの構成が含まれます。</span></td>
<td class=""><span class="merged" id="all.27nZVw"  title="原文: *corev1.SessionAffinityConfig"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#sessionaffinityconfig-v1-core" id="" target="_blank" >corev1.SessionAffinityConfig</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.207"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1DQMR1"  title="原文: ipFamilies"><code>ipFamilies</code></span></td>
<td class=""><span class="merged" id="all.yVYk1.spl1" title="原文 : IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service, and is gated by the &quot;IPv6DualStack&quot; feature gate.">IPFamiliesは、このサービスに割り当てられたIPファミリ(IPv4、IPv6など)のリストであり、IPv6DualStack機能ゲートによってゲートされます。</span> <span class="merged" id="all.yVYk1.spl2" title="原文 : This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field.">通常、このフィールドはクラスタ構成およびipFamilyPolicyフィールドに基づいて自動的に割り当てられます。</span> <span class="merged" id="all.yVYk1.spl3" title="原文 : If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail.">このフィールドを手動で指定すると、リクエストされたファミリがクラスタで使用可能であり、ipFamilyPolicyにより許可されている場合はそれが使用されます。指定しないと、サービスの作成は失敗します。</span> <span class="merged" id="all.yVYk1.spl4" title="原文 : This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service.">このフィールドは条件付きで変更可能です: セカンダリIPファミリを追加または削除できますが、サービスのプライマリIPファミリは変更できません。</span> <span class="merged" id="all.yVYk1.spl5" title="原文 : Valid values are &quot;IPv4&quot; and &quot;IPv6&quot;.">有効な値は「IPv4」および「IPv6」です。</span> <span class="merged" id="all.yVYk1.spl6" title="原文 : This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to &quot;headless&quot; services.">このフィールドは、ClusterIP、NodePortおよびLoadBalancerタイプのサービスにのみ適用され、「ヘッドレス」サービスには適用されません。</span> <span class="merged" id="all.yVYk1.spl7" title="原文 : This field will be wiped when updating a Service to type ExternalName.">このフィールドは、サービスをタイプExternalNameに更新するときに消去されます。</span> <span class="merged" id="all.yVYk1.spl8" title="原文 :  This field may hold a maximum of two entries (dual-stack families, in either order)."><br> <br> This field may hold a maximum of two entries (dual-stack families, in either order).</span> <span class="merged" id="all.yVYk1.spl9" title="原文 : These families must correspond to the values of the clusterIPs field, if specified.">これらのファミリは、clusterIPsフィールドの値と一致する必要があります(指定されている場合)。</span> <span class="merged" id="all.yVYk1.spl10" title="原文 : Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.">clusterIPsとipFamiliesは両方ともipFamilyPolicyフィールドで管理されます。</span> </td>
<td class=""><span class="merged" id="all.1yCn4z"  title="原文: []corev1.IPFamily"><code>[]<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#ipfamily-v1-core" id="" target="_blank" >corev1.IPFamily</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.208"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QgAAH"  title="原文: ipFamilyPolicy"><code>ipFamilyPolicy</code></span></td>
<td class=""><span class="merged" id="all.1phIW1.spl1" title="原文 : IPFamilyPolicy represents the dual-stack-ness requested or required by this Service, and is gated by the &quot;IPv6DualStack&quot; feature gate.">IPFamilyPolicyは、このサービスでリクエストまたはリクエストされるデュアル・スタックのネスを表し、「IPv6DualStack」機能ゲートによってゲートされます。</span> <span class="merged" id="all.1phIW1.spl2" title="原文 : If there is no value provided, then this field will be set to SingleStack.">値が指定されていない場合、このフィールドはSingleStackに設定されます。</span> <span class="merged" id="all.1phIW1.spl3" title="原文 : Services can be &quot;SingleStack&quot; (a single IP family), &quot;PreferDualStack&quot; (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or &quot;RequireDualStack&quot; (two IP families on dual-stack configured clusters, otherwise fail).">サービスには、「SingleStack」(単一のIPファミリ)、「PreferDualStack」(デュアル・スタック構成クラスタ上の2つのIPファミリ、またはシングル・スタック・クラスタ上の1つのIPファミリ)、または「RequireDualStack」(デュアル・スタック構成クラスタ上の2つのIPファミリ、失敗)があります。</span> <span class="merged" id="all.1phIW1.spl4" title="原文 : The ipFamilies and clusterIPs fields depend on the value of this field.">ipFamiliesおよびclusterIPsフィールドは、このフィールドの値によって異なります。</span> <span class="merged" id="all.1phIW1.spl5" title="原文 : This field will be wiped when updating a service to type ExternalName.">このフィールドは、サービスをタイプExternalNameに更新するときに消去されます。</span> </td>
<td class=""><span class="merged" id="all.2lJxww"  title="原文: *corev1.IPFamilyPolicyType"><code>*<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#ipfamilypolicytype-v1-core" id="" target="_blank" >corev1.IPFamilyPolicyType</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.209"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3QLBd9"  title="原文: allocateLoadBalancerNodePorts"><code>allocateLoadBalancerNodePorts</code></span></td>
<td class=""><span class="merged" id="all.2unlPR.spl1" title="原文 : allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.">allocateLoadBalancerNodePortsは、タイプがLoadBalancerのサービスに対してNodePortsを自動的に割り当てるかどうかを定義します。</span> <span class="merged" id="all.2unlPR.spl2" title="原文 : Default is &quot;true&quot;.">デフォルトはtrueです。</span> <span class="merged" id="all.2unlPR.spl3" title="原文 : It may be set to &quot;false&quot; if the cluster load-balancer does not rely on NodePorts. allocateLoadBalancerNodePorts may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.">クラスタのロード・バランサがNodePortsに依存しない場合、falseに設定できます。allocateLoadBalancerNodePortsは、タイプがLoadBalancerのサービスにのみ設定でき、タイプが他のタイプに変更された場合、クリアされます。</span> <span class="merged" id="all.2unlPR.spl4" title="原文 : This field is alpha-level and is only honored by servers that enable the ServiceLBNodePortControl feature.">このフィールドはアルファ・レベルであり、ServiceLBNodePortControl機能を有効にするサーバーでのみ使用されます。</span> </td>
<td class=""><span class="merged" id="all.q9cn0.28"  title="原文: *bool"><code>*bool</code></span></td>
<td class=""><span class="merged" id="all.njUKu.210"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.30" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_startquorum"><span class="merged" id="all.1yEh3p"  title="原文: StartQuorum">StartQuorum</span></h3>
<div class="section">
<p><span class="merged" id="all.2fbh5V" title="原文 : StartQuorum defines the order that deployments will be started in a Coherence cluster made up of multiple deployments.">StartQuorumは、複数のデプロイメントで構成されるCoherenceクラスタでデプロイメントを開始する順序を定義します。</span></p>


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
<td class=""><span class="merged" id="all.37VxbY.1"  title="原文: deployment"><code>deployment</code></span></td>
<td class=""><span class="merged" id="all.1LVaJF" title="原文 : The name of deployment that this deployment depends on.">このデプロイメントが依存するデプロイメントの名前。</span></td>
<td class=""><span class="merged" id="all.W18FC.23"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.12"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fCyV9.1"  title="原文: namespace"><code>namespace</code></span></td>
<td class=""><span class="merged" id="all.2Xc3GC.spl1" title="原文 : The namespace that the deployment that this deployment depends on is installed into.">このデプロイメントが依存するネームスペースは、にインストールされます。</span> <span class="merged" id="all.2Xc3GC.spl2" title="原文 : Default to the same namespace as this deployment">このデプロイメントと同じネームスペースにデフォルト設定されます</span> </td>
<td class=""><span class="merged" id="all.W18FC.24"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.211"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.tDWLO"  title="原文: podCount"><code>podCount</code></span></td>
<td class=""><span class="merged" id="all.I302D" title="原文 : The number of the Pods that should have been started before this deployments will be started, defaults to all Pods for the deployment.">このデプロイメントを開始する前に起動されるポッドの数。デプロイメントのすべてのポッドにデフォルト設定されます。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.2"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.212"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.31" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_startquorumstatus"><span class="merged" id="all.1FHhKl"  title="原文: StartQuorumStatus">StartQuorumStatus</span></h3>
<div class="section">
<p><span class="merged" id="all.227ypn" title="原文 : StartQuorumStatus tracks the state of a deployment&rsquo;s start quorums.">StartQuorumStatusは、デプロイメントの開始quorumsの状態を追跡します。</span></p>


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
<td class=""><span class="merged" id="all.37VxbY.2"  title="原文: deployment"><code>deployment</code></span></td>
<td class=""><span class="merged" id="all.1LVaJF.1" title="原文 : The name of deployment that this deployment depends on.">このデプロイメントが依存するデプロイメントの名前。</span></td>
<td class=""><span class="merged" id="all.W18FC.25"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.13"  title="原文:: true">true</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fCyV9.2"  title="原文: namespace"><code>namespace</code></span></td>
<td class=""><span class="merged" id="all.2Xc3GC.1.spl1" title="原文 : The namespace that the deployment that this deployment depends on is installed into.">このデプロイメントが依存するネームスペースは、にインストールされます。</span> <span class="merged" id="all.2Xc3GC.1.spl2" title="原文 : Default to the same namespace as this deployment">このデプロイメントと同じネームスペースにデフォルト設定されます</span> </td>
<td class=""><span class="merged" id="all.W18FC.26"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.213"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.tDWLO.1"  title="原文: podCount"><code>podCount</code></span></td>
<td class=""><span class="merged" id="all.I302D.1" title="原文 : The number of the Pods that should have been started before this deployments will be started, defaults to all Pods for the deployment.">このデプロイメントを開始する前に起動されるポッドの数。デプロイメントのすべてのポッドにデフォルト設定されます。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.3"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.214"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.29tQvf"  title="原文: ready"><code>ready</code></span></td>
<td class=""><span class="merged" id="all.2qSX8I" title="原文 : Whether this quorum&rsquo;s condition has been met">この定足数条件が満たされているかどうか</span></td>
<td class=""><span class="merged" id="all.2Sqi2i.3"  title="原文: bool"><code>bool</code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.14"  title="原文:: true">true</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.32" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_coherence"><span class="merged" id="all.1ZkKTX"  title="原文:: Coherence">Coherence</span></h3>
<div class="section">
<p><span class="merged" id="all.4gH5Hd" title="原文 : Coherence is the Schema for the Coherence API.">Coherenceは、Coherence APIのスキーマです。</span></p>


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
<td class=""><span class="merged" id="all.Tgr1J"  title="原文: metadata"><code>metadata</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3nxA56"  title="原文: metav1.ObjectMeta"><code><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#objectmeta-v1-meta" id="" target="_blank" >metav1.ObjectMeta</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.215"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.26upHQ.1"  title="原文: spec"><code>spec</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.30O246"  title="原文: CoherenceResourceSpec"><code><router-link @click.native="this.scrollFix('#_coherenceresourcespec')" to="#_coherenceresourcespec">CoherenceResourceSpec</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.216"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.rRvWD"  title="原文: status"><code>status</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2wZwP8"  title="原文: CoherenceResourceStatus"><code><router-link @click.native="this.scrollFix('#_coherenceresourcestatus')" to="#_coherenceresourcestatus">CoherenceResourceStatus</router-link></code></span></td>
<td class=""><span class="merged" id="all.njUKu.217"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.33" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_coherencelist"><span class="merged" id="all.I80PY"  title="原文: CoherenceList">CoherenceList</span></h3>
<div class="section">
<p><span class="merged" id="all.3Cf608" title="原文 : CoherenceList contains a list of Coherence resources.">CoherenceListには、Coherenceリソースのリストが含まれます。</span></p>


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
<td class=""><span class="merged" id="all.Tgr1J.1"  title="原文: metadata"><code>metadata</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4eytpG"  title="原文: metav1.ListMeta"><code><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.17/#listmeta-v1-meta" id="" target="_blank" >metav1.ListMeta</a></code></span></td>
<td class=""><span class="merged" id="all.njUKu.218"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WuGEZ.3"  title="原文: items"><code>items</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.38yAHJ"  title="原文: []Coherence"><code>[]<router-link @click.native="this.scrollFix('#_coherence')" to="#_coherence">Coherence</router-link></code></span></td>
<td class=""><span class="merged" id="all.4eNR3V.15"  title="原文:: true">true</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.34" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>

<h3 id="_coherenceresourcestatus"><span class="merged" id="all.1Bdf14"  title="原文: CoherenceResourceStatus">CoherenceResourceStatus</span></h3>
<div class="section">
<p><span class="merged" id="all.aoUKF" title="原文 : CoherenceResourceStatus defines the observed state of Coherence resource.">CoherenceResourceStatusは、Coherenceリソースの監視状態を定義します。</span></p>


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
<td class=""><span class="merged" id="all.3G3hIZ"  title="原文: phase"><code>phase</code></span></td>
<td class=""><span class="merged" id="all.11nOhS.spl1" title="原文 : The phase of a Coherence resource is a simple, high-level summary of where the Coherence resource is in its lifecycle.">Coherenceリソースのフェーズは、Coherenceリソースがライフサイクル内にある、シンプルで高レベルのサマリーです。</span> <span class="merged" id="all.11nOhS.spl2" title="原文 : The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod&rsquo;s status.">条件配列、理由およびメッセージ・フィールドおよび個々のコンテナ・ステータス配列には、ポッドのステータスに関する詳細が含まれます。</span> <span class="merged" id="all.11nOhS.spl3" title="原文 : There are eight possible phase values: Initialized: The deployment has been accepted by the Kubernetes system.">フェーズ値は8つあります:<br><br>Initialized:ThedeploymenthasbeenacceptedbytheKubernetessystem.</span> <span class="merged" id="all.11nOhS.spl4" title="原文 : Created: The deployments secondary resources, (e.g. the StatefulSet, Services etc) have been created.">作成済: デプロイメントのセカンダリ・リソース(StatefulSet、サービスなど)が作成されました。</span> <span class="merged" id="all.11nOhS.spl5" title="原文 : Ready: The StatefulSet for the deployment has the correct number of replicas and ready replicas.">準備完了: デプロイメントのStatefulSetには、正しい数のレプリカと準備されたレプリカがあります。</span> <span class="merged" id="all.11nOhS.spl6" title="原文 : Waiting: The deployment&rsquo;s start quorum conditions have not yet been met.">待機中: デプロイメント開始定足数条件が満たされていません。</span> <span class="merged" id="all.11nOhS.spl7" title="原文 : Scaling: The number of replicas in the deployment is being scaled up or down.">スケーリング: デプロイメント内のレプリカの数はスケール・アップまたはスケール・ダウン中です。</span> <span class="merged" id="all.11nOhS.spl8" title="原文 : RollingUpgrade: The StatefulSet is performing a rolling upgrade.">RollingUpgrade: StatefulSetはローリング・アップグレードを実行しています。</span> <span class="merged" id="all.11nOhS.spl9" title="原文 : Stopped: The replica count has been set to zero.">停止済: レプリカ数がゼロに設定されています。</span> <span class="merged" id="all.11nOhS.spl10" title="原文 : Failed: An error occurred reconciling the deployment and its secondary resources.">失敗: デプロイメントおよびそのセカンダリ・リソースの調整中にエラーが発生しました。</span> </td>
<td class=""><span class="merged" id="all.3FAYn9"  title="原文: status.ConditionType"><code>status.ConditionType</code></span></td>
<td class=""><span class="merged" id="all.njUKu.219"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.NYiec"  title="原文: coherenceCluster"><code>coherenceCluster</code></span></td>
<td class=""><span class="merged" id="all.43ERvl" title="原文 : The name of the Coherence cluster that this deployment is part of.">このデプロイメントの一部であるCoherenceクラスタの名前。</span></td>
<td class=""><span class="merged" id="all.W18FC.27"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.220"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Ea5yX.1"  title="原文: replicas"><code>replicas</code></span></td>
<td class=""><span class="merged" id="all.4VFdaA" title="原文 : Replicas is the desired number of members in the Coherence deployment represented by the Coherence resource.">レプリカは、Coherenceリソースによって表されるCoherenceデプロイメント内の必要なメンバー数です。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.4"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.221"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2IhR8Q"  title="原文: currentReplicas"><code>currentReplicas</code></span></td>
<td class=""><span class="merged" id="all.4ERmbc" title="原文 : CurrentReplicas is the current number of members in the Coherence deployment represented by the Coherence resource.">CurrentReplicasは、Coherenceリソースによって表されるCoherenceデプロイメントの現在のメンバー数です。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.5"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.222"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xL0Qh"  title="原文: readyReplicas"><code>readyReplicas</code></span></td>
<td class=""><span class="merged" id="all.kNJs1" title="原文 : ReadyReplicas is the number of number of members in the Coherence deployment represented by the Coherence resource that are in the ready state.">ReadyReplicasは、Coherenceデプロイメントで表現される、準備完了状態のメンバー数です。</span></td>
<td class=""><span class="merged" id="all.2UR1bd.6"  title="原文: int32"><code>int32</code></span></td>
<td class=""><span class="merged" id="all.njUKu.223"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.GeJKv.1"  title="原文: role"><code>role</code></span></td>
<td class=""><span class="merged" id="all.1Oa0IZ.spl1" title="原文 : The effective role name for this deployment.">このデプロイメントの有効ロール名。</span> <span class="merged" id="all.1Oa0IZ.spl2" title="原文 : This will come from the Spec.Role field if set otherwise the deployment name will be used for the role name">これは、Spec.Roleフィールドからのものになります(設定しない場合、デプロイメント名はロール名に使用されます)</span> </td>
<td class=""><span class="merged" id="all.W18FC.28"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.224"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1wWw2u"  title="原文: selector"><code>selector</code></span></td>
<td class=""><span class="merged" id="all.31rVFp.spl1" title="原文 : label query over deployments that should match the replicas count.">レプリカ数と一致する必要があるデプロイメントに対するラベル問合せ。</span> <span class="merged" id="all.31rVFp.spl2" title="原文 : This is same as the label selector but in the string format to avoid introspection by clients.">これはラベル・セレクタと同じですが、クライアントによる侵入を回避するための文字列形式です。</span> <span class="merged" id="all.31rVFp.spl3" title="原文 : The string will be in the same format as the query-param syntax.">この文字列は、query-param構文と同じ形式になります。</span> <span class="merged" id="all.31rVFp.spl4" title="原文 : More info about label selectors: http://kubernetes.io/docs/user-guide/labels#label-selectors">ラベル・セレクタの詳細 : <a href="http://kubernetes.io/docs/user-guide/labels#label-selectors" id="" target="_blank" >http://kubernetes.io/docs/user-guide/labels#label-selectors</a></span> </td>
<td class=""><span class="merged" id="all.W18FC.29"  title="原文: string"><code>string</code></span></td>
<td class=""><span class="merged" id="all.njUKu.225"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Bcdc6"  title="原文: conditions"><code>conditions</code></span></td>
<td class=""><span class="merged" id="all.1ttNjt" title="原文 : The status conditions.">ステータス条件。</span></td>
<td class=""><span class="merged" id="all.2kU9IK"  title="原文: status.Conditions"><code>status.Conditions</code></span></td>
<td class=""><span class="merged" id="all.njUKu.226"  title="原文:: false">false</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.3NVDRH.35" title="原文 : Back to TOC"><router-link @click.native="this.scrollFix('#_table_of_contents')" to="#_table_of_contents">TOCに戻る</router-link></span></p>

</div>
</div>
</doc-view>
