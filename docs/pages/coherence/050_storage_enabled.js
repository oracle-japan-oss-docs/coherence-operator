<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_storage_enabled_or_disabled_deployments"><span class="merged" id="all.3BDAwZ" title="原文 : Storage Enabled or Disabled Deployments">ストレージの有効化または無効化</span></h2>
<div class="section">
<p><span class="merged" id="all.1feFKd.spl1" title="原文 : Partitioned cache services that manage Coherence caches are configured as storage enabled or storage disabled.">Coherenceキャッシュを管理するパーティション・キャッシュ・サービスは、ストレージが有効またはストレージが無効として構成されます。</span> <span class="merged" id="all.1feFKd.spl2" title="原文 : Whilst it is possible to configure individual services to be storage enabled or disabled in the cache configuration file and have a mixture of modes in a single JVM, typically all the services in a JVM share the same mode by setting the coherence.distributed.localstorage system property to true for storage enabled members and to false for storage disabled members.">個々のサービスをキャッシュ構成ファイルでストレージが有効または無効にし、単一のJVMにモードを混在させるように構成できます。通常、JVM内のすべてのサービスは、ストレージが有効なメンバーの場合は<code>coherence.distributed.localstorage</code>システム・プロパティを<code>true</code>に設定し、ストレージが無効になっているメンバーの場合は<code>false</code>に設定することで、同じモードを共有します。</span> <span class="merged" id="all.1feFKd.spl3" title="原文 : The Coherence CRD allows this property to be set by specifying the spec.coherence.storageEnabled field to either true or false."><code>Coherence</code> CRDでは、<code>spec.coherence.storageEnabled</code>フィールドをtrueまたはfalseに指定することで、このプロパティを設定できます。</span> <span class="merged" id="all.1feFKd.spl4" title="原文 : The default value when nothing is specified is true.">何も指定しない場合のデフォルト値は<code>true</code>です。</span> </p>

<markup
lang="yaml"
title="storage enabled"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    storageEnabled: true  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3z6zdx" title="原文 : The Coherence resource specifically sets coherence.distributed.localstorage to true"><code>Coherence</code>リソースは、特に<code>coherence.distributed.localstorage</code>を<code>true</code>に設定</span></li>
</ul>
<markup
lang="yaml"
title="storage disabled"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    storageEnabled: false  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.136zD5" title="原文 : The Coherence resource specifically sets coherence.distributed.localstorage to false"><code>Coherence</code>リソースは、特に<code>coherence.distributed.localstorage</code>を<code>false</code>に設定</span></li>
</ul>
</div>
</doc-view>
