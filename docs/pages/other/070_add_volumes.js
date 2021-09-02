<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_add_pod_volumes"><span class="merged" id="all.22b0zY" title="原文 : Add Pod Volumes">ポッド・ボリュームの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.SjWK1" title="原文 : Volumes and volume mappings can easily be added to a Coherence resource Pod to allow application code deployed in the Pods to access additional storage.">ボリュームとボリュームのマッピングは、<code>Coherence</code>リソースPodに簡単に追加できるため、Podにデプロイされたアプリケーション・コードで追加のストレージにアクセスできます。</span></p>

<p><span class="merged" id="all.A0D3c.spl1" title="原文 : Volumes are added by adding configuration to the volumes list in the Coherence CRD spec.">ボリュームを追加するには、<code>Coherence</code> CRD仕様の<code>volumes</code>リストに構成を追加します。</span> <span class="merged" id="all.A0D3c.spl2" title="原文 : The configuration of the volume can be any valid yaml that would be used when adding a Volume to a Pod spec.">ボリュームの構成は、<code>Pod</code>仕様に<code>Volume</code>を追加するときに使用される任意の有効なyamlにできます。</span> </p>

<p><span class="merged" id="all.3THh7L.spl1" title="原文 : Volume mounts are added by adding configuration to the volumeMounts list in the Coherence CRD spec.">ボリューム・マウントは、<code>Coherence</code> CRD仕様の<code>volumeMounts</code>リストに構成を追加することで追加されます。</span> <span class="merged" id="all.3THh7L.spl2" title="原文 : The configuration of the volume mount can be any valid yaml that would be used when adding a volume mount to a container in a Pod spec.">ボリューム・マウントの構成は、<code>Pod</code>仕様のコンテナにボリューム・マウントを追加するときに使用される任意の有効なYamlにできます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1kLbEJ" title="原文 : Additional volumes added in this way will be added to all containers in the Pod.">この方法で追加された追加のボリュームは、<code>Pod</code>内のすべてのコンテナに追加されます。</span></p>
</div>
<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  volumes:
    - name: data-volume      <span class="conum" data-value="1" />
      nfs:
        path: /shared/data
        server: nfs-server
  volumeMounts:
    - name: data-volume      <span class="conum" data-value="2" />
      mountPath: /data</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.NkC2X" title="原文 : An additional Volume named data-volume has been added (in this case the volume is an NFS volume)."><code>data-volume</code>という名前の追加の<code>Volume</code>が追加されました(この場合、ボリュームはNFSボリュームです)。</span></li>
<li data-value="2"><span class="merged" id="all.1A1cop" title="原文 : An additional volume mount has been added tthat will mount the data-volume at the /data mount point."><code>/data</code>マウント・ポイントで<code>data-volume</code>をマウントする追加のボリューム・マウントが追加されました。</span></li>
</ul>
<p><span class="merged" id="all.2i98ou.2" title="原文 : The yaml above would result in a Pod spec similar to the following (a lot of the Pod spec has been omitted to just show the relevant volume information):">前述のyamlは、次のような<code>Pod</code>仕様になります(関連するボリューム情報のみを表示ために、<code>Pod</code>仕様の多くが省略されています):</span></p>

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
        - name: data-volume
          mountPath: /data
  volumes:
    - name: data-volume
      nfs:
        path: /shared/data
        server: nfs-server</markup>

</div>
</doc-view>
