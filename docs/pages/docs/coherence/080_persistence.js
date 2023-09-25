<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1MYoEr"  title="原文:: Coherence Persistence">Coherence永続性</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1vAnSU.spl1"  title="原文: Coherence persistence is a set of tools and technologies that manage the persistence and recovery of Coherence distributed caches.">Coherence永続性は、Coherence分散キャッシュの永続性およびリカバリを管理する、一連のツールおよびテクノロジです。</span> <span class="merged" id="all.1vAnSU.spl2" title="原文 : Cached data can be persisted so that it can be quickly recovered after a catastrophic failure or after a cluster restart due to planned maintenance.">キャッシュされたデータは保持できるため、致命的な障害が発生した後、または計画メンテナンスのためにクラスタの再起動後に迅速にリカバリできます。</span> <span class="merged" id="all.1vAnSU.spl3"  title="原文: Persistence and federated caching can be used together as required.">永続性とフェデレーテッド・キャッシュは必要に応じて共に使用できます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_configure_coherence_persistence"><span class="merged" id="all.2bBcAD" title="原文 : Configure Coherence Persistence">Coherence永続性の構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1tm3SF.spl1" title="原文 : The Coherence CRD allows the default persistence mode, and the storage location of persistence data to be configured."><code>Coherence</code> CRDを使用すると、デフォルトの永続性モードおよび永続性データのストレージのロケーションを構成できます。</span> <span class="merged" id="all.1tm3SF.spl2" title="原文 : Persistence can be configured in the spec.coherence.persistence section of the CRD.">永続性は、CRDの<code>spec.coherence.persistence</code>セクションで構成できます。</span> <span class="merged" id="all.1tm3SF.spl3" title="原文 : See the Coherence Persistence documentation for more details of how persistence works and its configuration.">永続性およびその構成の詳細は、<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/administer/persisting-caches.html#GUID-3DC46E44-21E4-4DC4-9D12-231DE57FE7A1" id="" target="_blank" >「Coherenceの永続性」</a>ドキュメントを参照してください。</span> </p>

</div>

<h2 id="_persistence_mode"><span class="merged" id="all.2gHMSK"  title="原文:: Persistence Mode">永続性モード</span></h2>
<div class="section">
<p><span class="merged" id="all.3skhD1.spl1" title="原文 : There are three default persistence modes available, active, active-async and on-demand; the default mode is on-demand.">使用可能なデフォルトの永続性モードは、<code>active</code>、<code>active-async</code>および<code>on-demand</code>の3つです。デフォルトのモードは<code>on-demand</code>です。</span> <span class="merged" id="all.3skhD1.spl2" title="原文 : The persistence mode will be set using the spec.coherence.persistence,mode field in the CRD.">永続性モードは、CRDの<code>spec.coherence.persistence,mode</code>フィールドを使用して設定されます。</span> <span class="merged" id="all.3skhD1.spl3" title="原文 : The value of this field will be used to set the coherence.distributed.persistence-mode system property in the Coherence JVM.">このフィールドの値は、Coherence JVMで<code>coherence.distributed.persistence-mode</code>システム・プロパティを設定するために使用されます。</span> </p>

<p><span class="merged" id="all.6vDv5.2"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    persistence:
      mode: active  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2pVD1d" title="原文 : The example above sets the persistence mode to active which will effectively pass -Dcoherence.distributed.persistence-mode=active to the Coherence JVM’s command line.">前述の例では、永続性モードを<code>active</code>に設定し、Coherence JVMのコマンドラインに<code>-Dcoherence.distributed.persistence-mode=active</code>を効果的に渡します。</span></li>
</ul>
</div>

<h2 id="_persistence_storage"><span class="merged" id="all.2DJabT" title="原文 : Persistence Storage">永続性ストレージ</span></h2>
<div class="section">
<p><span class="merged" id="all.4DMlVs.spl1" title="原文 : The purpose of persistence in Coherence is to store data on disc so that it is available outside of the lifetime of the JVMs that make up the cluster.">Coherenceでの永続性の目的は、クラスタを構成するJVMの存続期間外で使用できるように、データをディスクに格納することです。</span> <span class="merged" id="all.4DMlVs.spl2" title="原文 : In a containerised environment like Kubernetes this means storing that data in storage that also lives outside of the containers.">Kubernetesなどのコンテナ化された環境では、コンテナ外にも存在するデータをストレージに格納します。</span> </p>

<p><span class="merged" id="all.3y6wwv" title="原文 : When persistence storage has been configured a VolumeMount will be added to the Coherence container mounted at /persistence, and the coherence.distributed.persistence.base.dir system property will be configured to point to the storage location.">永続ストレージが構成されている場合、<code>/persistence</code>にマウントされたCoherenceコンテナに<code>VolumeMount</code>が追加され、ストレージのロケーションを指すように<code>coherence.distributed.persistence.base.dir</code>システム・プロパティが構成されます。</span></p>


<h3 id="_using_a_persistentvolumeclaim"><span class="merged" id="all.4IZb6j" title="原文 : Using a PersistentVolumeClaim">PersistentVolumeClaimの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.LiZNa" title="原文 : The Coherence Operator creates a StatefulSet for each Coherence resource, so the logical place to store persistence data is in a PersistentVolumeClaim.">Coherence Operatorでは、<code>Coherence</code>リソースごとに<code>StatefulSet</code>が作成されるため、永続性データを格納する論理的な場所は<code>PersistentVolumeClaim</code>にあります。</span></p>

<p><span class="merged" id="all.14zUe3" title="原文 : The PVC used for persistence can be configured in the spec.coherence.persistence.persistentVolumeClaim section of the CRD.">永続性に使用されるPVCは、CRDの<code>spec.coherence.persistence.persistentVolumeClaim</code>セクションで構成できます。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    persistence:
      persistentVolumeClaim:     <span class="conum" data-value="1" />
        storageClassName: "SSD"
        accessModes:
          - ReadWriteOnce
        resources:
          requests:
            storage: 50Gi</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2kYvt1" title="原文 : The example above configures a 50GB PVC with a storage class name of &quot;SSD&quot; (assuming the Kubernetes cluster has a storage class of that name configured).">上の例では、"SSD"というストレージ・クラス名を持つ50GBのPVCを構成します(Kubernetesクラスタにその名前のストレージ・クラスが構成されていると仮定します)。</span></li>
</ul>
<p><span class="merged" id="all.1jGxa7.spl1" title="原文 : The configuration under the spec.coherence.persistence.persistentVolumeClaim section is exactly the same as configuring a PVC for a normal Kubernetes Pod and all the possible options are beyond the scope of this document."><code>spec.coherence.persistence.persistentVolumeClaim</code>セクションの構成は、通常のKubernetesポッドのPVCの構成とまったく同じであり、考えられるすべてのオプションは、このドキュメントのスコープを超えています。</span> <span class="merged" id="all.1jGxa7.spl2" title="原文 : For more details on configuring PVC, see the Kubernetes Persistent Volumes documentation.">PVCの構成の詳細は、Kubernetes <a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes/" id="" target="_blank" >「永続ボリューム」</a>のドキュメントを参照してください。</span> </p>

</div>

<h3 id="_using_a_normal_volume"><span class="merged" id="all.3OVF1a" title="原文 : Using a Normal Volume">通常のボリュームの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1KqkpY.spl1" title="原文 : An alternative to a PVC is to use a normal Kubernetes Volume to store the persistence data.">PVCの代替手段は、通常のKubernetesボリュームを使用して永続性データを格納することです。</span> <span class="merged" id="all.1KqkpY.spl2" title="原文 : An example of this use-case could be when the Kubernetes Nodes that the Coherence Pods are scheduled onto have locally attached fast SSD drives, which is ideal storage for persistence.">このユースケースの例は、CoherenceポッドがスケジュールされているKubernetesノードにローカルにアタッチされた高速SSDドライブがある場合にあり、永続化に最適なストレージです。</span> <span class="merged" id="all.1KqkpY.spl3" title="原文 : In this case a normal Volume can be configured in the spec.coherence.persistence.volume section of the CRD.">この場合、通常のボリュームは、CRDの<code>spec.coherence.persistence.volume</code>セクションで構成できます。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    persistence:                                 <span class="conum" data-value="1" />
      volume:
        hostPath:
          path: /mnt/ssd/coherence/persistence</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1aAvV6" title="原文 : In the example above a Volume has been configured for persistence, in this case a HostPath volume pointing to the /mnt/ssd/coherence/persistence directory on the Node.">前述の例では、ボリュームが永続性用に構成されています。この場合、ノードの<code>/mnt/ssd/coherence/persistence</code>ディレクトリを指す<code>HostPath</code>ボリュームになります。</span></li>
</ul>
<p><span class="merged" id="all.2CcQX2.spl1" title="原文 : The configuration under the spec.coherence.persistence.volume section is a normal Kubernetes VolumeSource so any valid VolumeSource configuration can be used."><code>spec.coherence.persistence.volume</code>セクションの下の構成は通常のKubernetes <a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#volume-v1-core" id="" target="_blank" >VolumeSource</a>であるため、有効な<code>VolumeSource</code>構成を使用できます。</span> <span class="merged" id="all.2CcQX2.spl2" title="原文 : See the Kubernetes Volumes documentation for more details.">詳細は、Kubernetes <a href="https://kubernetes.io/docs/concepts/storage/volumes/" id="" target="_blank" >「ボリューム」</a>のドキュメントを参照してください。</span> </p>

</div>
</div>

<h2 id="_snapshot_storage"><span class="merged" id="all.3ZO2DL"  title="原文:: Snapshot Storage">スナップショットの格納</span></h2>
<div class="section">
<p><span class="merged" id="all.VlHYx.spl1" title="原文 : Coherence allows on-demand snapshots to be taken of cache data.">Coherenceでは、オンデマンド・スナップショットをキャッシュ・データから取得できます。</span> <span class="merged" id="all.VlHYx.spl2" title="原文 : With the default configuration the snapshot files will be stored under the same persistence root location as active persistence data.">デフォルトの構成では、スナップショット・ファイルは、アクティブな永続性データと同じ永続性ルートのロケーションに格納されます。</span> <span class="merged" id="all.VlHYx.spl3" title="原文 : The Coherence spec allows a different location to be specified for storage of snapshot files so that active data and snapshot data can be stored in different locations and/or on different storage types in Kubernetes."><code>Coherence</code>仕様では、スナップショット・ファイルの格納に異なるロケーションを指定できるため、アクティブなデータおよびスナップショット・データを異なるロケーションに格納したり、Kubernetes異なるストレージ・タイプに格納できます。</span> </p>

<p><span class="merged" id="all.3Uohoq.spl1" title="原文 : The same two options are available for snapshot storage that are available for persistence storage, namely PVCs and normal Volumes.">永続性ストレージ(PVCおよび通常のボリューム)で使用可能なスナップショット・ストレージには、同じ2つのオプションを使用できます。</span> <span class="merged" id="all.3Uohoq.spl2" title="原文 : The spec.coherence.persistence.snapshots section is used to configure snapshot storage."><code>spec.coherence.persistence.snapshots</code>セクションは、スナップショット・ストレージの構成に使用されます。</span> <span class="merged" id="all.3Uohoq.spl3" title="原文 : When this is used a VolumeMount will be added to the Coherence container with a mount path of /snapshots, and the coherence.distributed.persistence.snapshot.dir system property will be set to point to this location.">これを使用すると、<code>VolumeMount</code>が<code>/snapshots</code>のマウント・パスでCoherenceコンテナに追加され、<code>coherence.distributed.persistence.snapshot.dir</code>システム・プロパティがこのロケーションを指すように設定されます。</span> </p>


<h3 id="_snapshots_using_a_persistentvolumeclaim"><span class="merged" id="all.1NsvTd" title="原文 : Snapshots Using a PersistentVolumeClaim">PersistentVolumeClaimを使用したスナップショット</span></h3>
<div class="section">
<p><span class="merged" id="all.1qX9Tt" title="原文 : A PVC can be configured for persistence snapshot data as shown below.">次に示すように、PVCは永続性スナップショット・データ用に構成できます。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    persistence:                                 <span class="conum" data-value="1" />
      volume:
        hostPath:
          path: /mnt/ssd/coherence/persistence
      snapshots:
        persistentVolumeClaim:                   <span class="conum" data-value="2" />
          resources:
            requests:
              storage: 50Gi</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.wilHm" title="原文 : Active persistence data will be stored on a normal Volume using a HostPath volume source.">アクティブな永続性データは、HostPathボリューム・ソースを使用して通常のボリュームに格納されます。</span></li>
<li data-value="2"><span class="merged" id="all.3l1zJy" title="原文 : Snapshot data will be stored in a 50GB PVC.">スナップショット・データは50GB PVCに格納されます。</span></li>
</ul>
</div>

<h3 id="_snapshots_using_a_normal_volumes"><span class="merged" id="all.3mynkw" title="原文 : Snapshots Using a Normal Volumes">通常のボリュームを使用したスナップショット</span></h3>
<div class="section">
<p><span class="merged" id="all.4HtdeU" title="原文 : A normal volume can be configured for snapshot data as shown below.">次に示すように、通常のボリュームをスナップショット・データ用に構成できます。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    persistence:                                 <span class="conum" data-value="1" />
      volume:
        hostPath:
          path: /mnt/ssd/coherence/persistence
      snapshots:
        volume:
          hostPath:
            path: /mnt/ssd/coherence/snapshots   <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.wilHm.1" title="原文 : Active persistence data will be stored on a normal Volume using a HostPath volume source.">アクティブな永続性データは、HostPathボリューム・ソースを使用して通常のボリュームに格納されます。</span></li>
<li data-value="2"><span class="merged" id="all.3sXd0j" title="原文 : Snapshot data will be stored on a normal Volume using a different HostPath volume source.">スナップショット・データは、別のHostPathボリューム・ソースを使用して通常のボリュームに格納されます。</span></li>
</ul>
</div>
</div>
</doc-view>
