<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coherence_ipmonitor"><span class="merged" id="all.56c51" title="原文 : Coherence IPMonitor">Coherence IPMonitor</span></h2>
<div class="section">
<p><span class="merged" id="all.3RNG8G.spl1" title="原文 : The Coherence IPMonitor is a failure detection mechanism used by Coherence to detect machine failures.">Coherence IPMonitorは、マシンの障害を検出するためにCoherenceで使用される障害検出メカニズムです。</span> <span class="merged" id="all.3RNG8G.spl2" title="原文 : It does this by pinging the echo port, (port 7) on remote hosts that other cluster members are running on.">これは、ほかのクラスタ・メンバーが実行しているリモート・ホストでエコー・ポート(ポート7)をpingすることにより行います。</span> <span class="merged" id="all.3RNG8G.spl3" title="原文 : When running in Kubernetes, every Pod has its own IP address, so it looks to Coherence like every member is on a different host.">Kubernetesで実行すると、すべてのポッドに独自のIPアドレスがあるため、すべてのメンバーが別のホスト上にあるようにCoherenceが参照されます。</span> <span class="merged" id="all.3RNG8G.spl4" title="原文 : Failure detection using IPMonitor is less useful in Kubernetes than it is on physical machines or VMs, so the Operator disables the IPMonitor by default.">IPMonitorを使用した障害検出は、Kubernetesでは物理マシンまたはVMよりも有用ではないため、オペレータはデフォルトでIPMonitorを無効にします。</span> <span class="merged" id="all.3RNG8G.spl5" title="原文 : This is configurable though and if it is felt that using IPMonitor is useful to an application, it can be re-enabled.">これは構成可能ですが、IPMonitorを使用する方がアプリケーションに有用であると感じている場合は、再度有効化できます。</span> </p>

<p><span class="merged" id="all.2LfyA1" title="原文 : To re-enable IPMonitor set the boolean flag enableIpMonitor in the coherence section of the Coherence resource yaml:">IPMonitorを再度有効にするには、Coherenceリソースyamlの<code>coherence</code>セクションでブール・フラグ<code>enableIpMonitor</code>を設定します:</span></p>

<markup
lang="yaml"
title="coherence-storage.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    enableIpMonitor: true</markup>

<p><span class="merged" id="all.123zPJ" title="原文 : Setting enableIpMonitor will disable the IPMonitor, which is the default behaviour when enableIpMonitor is not specified in the yaml."><code>enableIpMonitor</code>を設定すると、IPMonitorが無効になります。これは、yamlで<code>enableIpMonitor</code>が指定されていない場合のデフォルトの動作です。</span></p>

</div>
</doc-view>
