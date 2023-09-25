<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.cRo0P" title="原文 : Add ConfigMap Volumes">ConfigMapボリュームの追加</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3kwkrC" title="原文 : Additional Volumes and VolumeMounts from ConfigMaps can easily be added to a Coherence resource."><code>ConfigMaps</code>からの<code>Volumes</code>および<code>VolumeMounts</code>は、<code>Coherence</code>リソースに簡単に追加できます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_add_configmap_volumes"><span class="merged" id="all.cRo0P.1" title="原文 : Add ConfigMap Volumes">ConfigMapボリュームの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.1dEAUE.spl1" title="原文 : To add a ConfigMap as an additional volume to the Pods of a Coherence deployment add entries to the configMapVolumes list in the CRD spec."><code>ConfigMap</code>を追加のボリュームとしてCoherenceデプロイメントの<code>Pods</code>に追加するには、CRD仕様の<code>configMapVolumes</code>リストにエントリを追加します。</span> <span class="merged" id="all.1dEAUE.spl2" title="原文 : Each entry in the list has a mandatory name and mountPath field, all other fields are optional.">リストの各エントリには、必須の<code>name</code>および<code>mountPath</code>フィールドがあり、他のすべてのフィールドはオプションです。</span> <span class="merged" id="all.1dEAUE.spl3" title="原文 : The name field is the name of the ConfigMap to mount and is also used as the volume name."><code>name</code>フィールドは、マウントする<code>ConfigMap</code>の名前で、ボリューム名としても使用されます。</span> <span class="merged" id="all.1dEAUE.spl4" title="原文 : The mountPath field is the path in the container to mount the volume to."><code>mountPath</code>フィールドは、ボリュームをマウントするコンテナ内のパスです。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2UAqjx" title="原文 : Additional volumes added in this way (either ConfigMaps shown here, or Secrets or plain Volumes) will be added to all containers in the Pod.">この方法で追加された追加のボリューム(ここに示す<code>ConfigMaps</code>、または<code>Secrets</code>またはプレーン<code>Volumes</code>のいずれか)は、<code>Pod</code>内のすべてのコンテナに追加されます。</span></p>
</div>
<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  configMapVolumes:
    - name: storage-config               <span class="conum" data-value="1" />
      mountPath: /home/coherence/config  <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1fGMpR" title="原文 : The ConfigMap named storage-config will be mounted to the Pod as an additional Volume named storage-config"><code>storage-config</code>という名前の<code>ConfigMap</code>は、<code>storage-config</code>という名前の追加の<code>Volume</code>として<code>Pod</code>にマウントされます</span></li>
<li data-value="2"><span class="merged" id="all.29dUnh" title="原文 : The ConfigMap will be mounted at /home/coherence/config in the containers."><code>ConfigMap</code>は、コンテナの<code>/home/coherence/config</code>にマウントされます。</span></li>
</ul>
<p><span class="merged" id="all.2i98ou" title="原文 : The yaml above would result in a Pod spec similar to the following (a lot of the Pod spec has been omitted to just show the relevant volume information):">前述のyamlでは、次のような<code>Pod</code>仕様になります(関連するボリューム情報を表示するため、多くの<code>Pod</code>仕様が省略されています):</span></p>

<markup
lang="yaml"

>apiVersion: v1
kind: Pod
metadata:
  name: storage-0
spec:
  containers:
    - name: coherence
      volumeMounts:
        - name: storage-config
          mountPath: /home/coherence/config
  volumes:
    - name: storage-config
      configMap:
        name: storage-config</markup>

<p><span class="merged" id="all.1LxhrB" title="原文 : As already stated, if the Coherence resource has additional containers the ConfigMap will be mounted in all of them.">すでに説明したように、<code>Coherence</code>リソースに追加のコンテナがある場合、<code>ConfigMap</code>はすべてのコンテナにマウントされます。</span></p>

<p><span class="merged" id="all.6vDv5.20"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  sideCars:
    - name: fluentd
      image: "fluent/fluentd:v1.3.3"
  configMapVolumes:
    - name: storage-config
      mountPath: /home/coherence/config</markup>

<p><span class="merged" id="all.3sh3ZX.spl1" title="原文 : In this example the storage-config ConfigMap will be mounted as a Volume and mounted to both the coherence container and the fluentd container.">この例では、<code>storage-config</code> <code>ConfigMap</code>は<code>Volume</code>としてマウントされ、<code>coherence</code>コンテナと<code>fluentd</code>コンテナの両方にマウントされます。</span> <span class="merged" id="all.3sh3ZX.spl2" title="原文 : The yaml above would result in a Pod spec similar to the following (a lot of the Pod spec has been omitted to just show the relevant volume information):">前述のyamlでは、次のような<code>Pod</code>仕様になります(関連するボリューム情報を表示するため、多くの<code>Pod</code>仕様が省略されています):</span> </p>

<markup
lang="yaml"

>apiVersion: v1
kind: Pod
metadata:
  name: storage-0
spec:
  containers:
    - name: coherence
      volumeMounts:
        - name: storage-config
          mountPath: /home/coherence/config
    - name: fluentd
      image: "fluent/fluentd-kubernetes-daemonset:v1.3.3-debian-elasticsearch-1.3"
      volumeMounts:
        - name: storage-config
          mountPath: /home/coherence/config
  volumes:
    - name: storage-config
      configMap:
        name: storage-config</markup>

</div>
</doc-view>
