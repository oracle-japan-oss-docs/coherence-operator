<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coherence_ipmonitor"><span class="merged" id="all.56c51" title="原文 : Coherence IPMonitor">Coherence IPMonitor</span></h2>
<div class="section">
<p><span class="merged" id="all.3RNG8G.spl1" title="原文 : The Coherence IPMonitor is a failure detection mechanism used by Coherence to detect machine failures.">Coherence IPMonitorは、マシン障害を検出するためにCoherenceで使用される障害検出メカニズムです。</span> <span class="merged" id="all.3RNG8G.spl2" title="原文 : It does this by pinging the echo port, (port 7) on remote hosts that other cluster members are running on.">これは、他のクラスタ・メンバーが実行されているリモート・ホストでエコー・ポート(ポート7)をpingすることによって行われます。</span> <span class="merged" id="all.3RNG8G.spl3" title="原文 : When running in Kubernetes, every Pod has its own IP address, so it looks to Coherence like every member is on a different host.">Kubernetesで実行する場合、すべてのポッドに独自のIPアドレスがあるため、すべてのメンバーが別のホスト上にあるようにCoherenceが参照されます。</span> <span class="merged" id="all.3RNG8G.spl4" title="原文 : Failure detection using IPMonitor is less useful in Kubernetes than it is on physical machines or VMs, so the Operator disables the IPMonitor by default.">IPMonitorを使用した障害検出は、物理マシンまたはVM上の障害よりKubernetesではあまり便利ではないため、オペレータはデフォルトでIPMonitorを無効にします。</span> <span class="merged" id="all.3RNG8G.spl5" title="原文 : This is configurable though and if it is felt that using IPMonitor is useful to an application, it can be re-enabled.">これは構成可能ですが、IPMonitorの使用がアプリケーションにとって有用であると思われる場合は、再有効化できます。</span> </p>


<h3 id="_coherence_warning_message"><span class="merged" id="all.hzYlG" title="原文 : Coherence Warning Message">Coherence警告メッセージ</span></h3>
<div class="section">
<p><span class="merged" id="all.2fkOoL.spl1" title="原文 : Disabling IP Monitor causes Coherence to print a warning in the logs similar to the one shown below.">IPモニターを無効にすると、Coherenceは、次に示すような警告をログに出力します。</span> <span class="merged" id="all.2fkOoL.spl2" title="原文 : This can be ignored when using the Operator.">これは、オペレータの使用時に無視できます。</span> </p>

<markup


>2024-07-01 14:43:55.410/3.785 Oracle Coherence GE 14.1.1.2206.10 (dev-jonathanknight) &lt;Warning&gt; (thread=Coherence, member=n/a): IPMonitor has been explicitly disabled, this is not a recommended practice and will result in a minimum death detection time of 300 seconds for failed machines or networks.</markup>

</div>

<h3 id="_re_enable_the_ip_monitor"><span class="merged" id="all.vE3I5" title="原文 : Re-Enable the IP Monitor">IPモニターの再有効化</span></h3>
<div class="section">
<p><span class="merged" id="all.2pWYOG" title="原文 : To re-enable IPMonitor set the boolean flag enableIpMonitor in the coherence section of the Coherence resource yaml.">IPMonitorを再度有効にするには、Coherenceリソースyamlの<code>coherence</code>セクションでブール・フラグ<code>enableIpMonitor</code>を設定します。</span></p>

<div class="admonition caution">
<p class="admonition-textlabel"><span class="merged" id="all.4Pmf1N.2"  title="原文:: Caution">注意</span></p>
<p ><p><span class="merged" id="all.3M2yrb.spl1" title="原文 : The Coherence IP Monitor works by using Java’s INetAddress.isReachable() method to &quot;ping&quot; another cluster member’s IP address.">Coherence IPモニターは、Javaの<code>INetAddress.isReachable()</code>メソッドを使用して別のクラスタ・メンバーのIPアドレスをpingすることで機能します。</span> <span class="merged" id="all.3M2yrb.spl2" title="原文 : Under the covers the JDK will use an ICMP echo request to port 7 of the server.">JDKでは、サーバーのポート7にICMPエコー・リクエストが使用されます。</span> <span class="merged" id="all.3M2yrb.spl3" title="原文 : This can fail if port 7 is blocked, for example using firewalls, or in Kubernetes using Network Policies or tools such as Istio.">これは、ファイアウォールを使用するなど、ポート7がブロックされている場合、またはネットワーク・ポリシーやIstioなどのツールを使用してKubernetesで失敗する可能性があります。</span> <span class="merged" id="all.3M2yrb.spl4" title="原文 : In particular when using Network Policies it is impossible to open a port for ICMP as currently Network Policies only support TCP or UDP and not ICMP.">特に、ネットワーク・ポリシーを使用する場合、ICMPのポートを開くことはできません。現在、ネットワーク・ポリシーではTCPまたはUDPのみがサポートされ、ICMPはサポートされません。</span> </p>

<p><span class="merged" id="all.3tZrIt.spl1" title="原文 : If the Coherence IP Monitor is enabled in a Kubernetes cluster where port 7 is blocked then the cluster will fail to start.">ポート7がブロックされているKubernetesクラスタでCoherence IPモニターが有効になっている場合、クラスタは起動に失敗します。</span> <span class="merged" id="all.3tZrIt.spl2" title="原文 : Typically, the issue will be seen as one member will start and become the senior member.">通常、問題は1人のメンバーが始まって上級メンバーになるとみなされます。</span> <span class="merged" id="all.3tZrIt.spl3" title="原文 : None of the other cluster members will be abe to get IP Monitor to connect to the senior member, so they wil fail to start.">他のクラスタ・メンバーはいずれも、IPモニターを上位メンバーに接続するために異常終了しないため、起動に失敗します。</span> </p>
</p>
</div>
<p><span class="merged" id="all.uoamv" title="原文 : The yaml below shows an example of re-enabling the IP Monitor.">次のyamlは、IPモニターの再有効化の例を示しています。</span></p>

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

<p><span class="merged" id="all.4FA9KW" title="原文 : Setting enableIpMonitor field to false will disable the IPMonitor, which is the default behaviour when enableIpMonitor is not specified in the yaml."><code>enableIpMonitor</code>フィールドを<code>false</code>に設定すると、IPMonitorが無効になります。これは、<code>enableIpMonitor</code>がyamlで指定されていない場合のデフォルトの動作です。</span></p>

</div>
</div>
</doc-view>
