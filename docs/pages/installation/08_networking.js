<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_os_networking_configuration"><span class="merged" id="all.AkyGS" title="原文 : O/S Networking Configuration">O/Sネットワーキング構成</span></h2>
<div class="section">

<h3 id="_operating_system_library_requirements"><span class="merged" id="all.4bwahA" title="原文 : Operating System Library Requirements">オペレーティング・システム・ライブラリの要件</span></h3>
<div class="section">
<p><span class="merged" id="all.Lp5Oz.spl1" title="原文 : In order for Coherence clusters to form correctly, the conntrack library must be installed.">Coherenceクラスタが正しく形成されるようにするには、<code>conntrack</code>ライブラリをインストールする必要があります。</span> <span class="merged" id="all.Lp5Oz.spl2" title="原文 : Most Kubernetes distributions will do this for you.">ほとんどのKubernetesディストリビューションでこれが実行されます。</span> <span class="merged" id="all.Lp5Oz.spl3" title="原文 : If you have issues with clusters not forming, then you should check that conntrack is installed using this command (or equivalent):">形成しないクラスタに問題がある場合は、このコマンド(または同等のもの)を使用して<code>conntrack</code>がインストールされていることを確認します:</span> </p>

<markup
lang="bash"

>rpm -qa | grep conntrack</markup>

<p><span class="merged" id="all.2Qi10S.spl1" title="原文 : You should see output similar to that shown below.">次のような出力が表示されます。</span> <span class="merged" id="all.2Qi10S.spl2" title="原文 : If you do not, then you should install conntrack using your operating system tools.">そうでない場合は、オペレーティング・システム・ツールを使用して<code>conntrack</code>をインストールする必要があります。</span> </p>

<markup
lang="bash"

>libnetfilter_conntrack-1.0.6-1.el7_3.x86_64
conntrack-tools-1.4.4-4.el7.x86_64</markup>

</div>

<h3 id="_firewall_iptables_requirements"><span class="merged" id="all.2Fxxiw" title="原文 : Firewall (iptables) Requirements">ファイアウォール(iptables)要件</span></h3>
<div class="section">
<p><span class="merged" id="all.2rv2Dt.spl1" title="原文 : Some Kubernetes distributions create iptables rules that block some types of traffic that Coherence requires to form clusters.">一部のKubernetesディストリビューションでは、Coherenceでクラスタを形成するために必要なトラフィックのタイプをブロックする<code>iptables</code>ルールが作成されます。</span> <span class="merged" id="all.2rv2Dt.spl2" title="原文 : If you are not able to form clusters, then you can check for this issue using the following command:">クラスタを形成できない場合は、次のコマンドを使用してこの問題を確認できます:</span> </p>

<markup
lang="bash"

>iptables -t nat -v  -L POST_public_allow -n</markup>

<p><span class="merged" id="all.rIOyd" title="原文 : If you see output similar to the example below:">次の例のような出力が表示された場合:</span></p>

<markup
lang="bash"

>Chain POST_public_allow (1 references)
pkts bytes target     prot opt in     out     source               destination
164K   11M MASQUERADE  all  --  *      !lo     0.0.0.0/0            0.0.0.0/0
   0     0 MASQUERADE  all  --  *      !lo     0.0.0.0/0            0.0.0.0/0</markup>

<p><span class="merged" id="all.2A0CN2.spl1" title="原文 : For example, if you see any entries in this chain, then you need to remove them.">たとえば、このチェーンにエントリがある場合は削除する必要があります。</span> <span class="merged" id="all.2A0CN2.spl2"  title="原文: You can remove the entries using this command:">次のコマンドを使用して、エントリを削除できます:</span> </p>

<markup
lang="bash"

>iptables -t nat -v -D POST_public_allow 1</markup>

<p><span class="merged" id="all.3xfGCa.spl1" title="原文 : Note that you will need to run that command for each line.">このコマンドは各行で実行する必要があります。</span> <span class="merged" id="all.3xfGCa.spl2" title="原文 : So in the example above, you would need to run it twice.">そのため、前述の例では2回実行する必要があります。</span> </p>

<p><span class="merged" id="all.2kFZai" title="原文 : After you are done, you can run the previous command again and verify that the output is now an empty list.">終了したら、前のコマンドを再度実行し、出力が現在空のリストであることを確認します。</span></p>

<p><span class="merged" id="all.3NQnna" title="原文 : After making this change, restart your domains and the Coherence cluster should now form correctly.">この変更後、ドメインを再起動し、Coherenceクラスタが正しく形成されるようになりました。</span></p>


<h4 id="_make_iptables_updates_permanent_across_reboots"><span class="merged" id="all.3FOJYY" title="原文 : Make iptables Updates Permanent Across Reboots">リブート後もiptablesを完全に更新</span></h4>
<div class="section">
<p><span class="merged" id="all.4IYErZ" title="原文 : The recommended way to make iptables updates permanent across reboots is to create a systemd service that applies the necessary updates during the startup process.">再起動後に<code>iptables</code>を永続的に更新するには、起動プロセス中に必要な更新を適用する<code>systemd</code>サービスを作成することをお薦めします。</span></p>

<p><span class="merged" id="all.2orxxk" title="原文 : Here is an example; you may need to adjust this to suit your own environment:">次に例を示します。独自の環境に合せてこれを調整する必要があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.37ki2U" title="原文 : Create a systemd service:"><code>systemd</code>サービスを作成します:</span></p>

</li>
</ul>
<markup
lang="bash"

>echo 'Set up systemd service to fix iptables nat chain at each reboot (so Coherence will work)...'
mkdir -p /etc/systemd/system/
cat &gt; /etc/systemd/system/fix-iptables.service &lt;&lt; EOF
[Unit]
Description=Fix iptables
After=firewalld.service
After=docker.service

[Service]
ExecStart=/sbin/fix-iptables.sh

[Install]
WantedBy=multi-user.target
EOF</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1oy0st" title="原文 : Create the script to update iptables:"><code>iptables</code>を更新するスクリプトを作成します:</span></p>

</li>
</ul>
<markup
lang="bash"

>cat &gt; /sbin/fix-iptables.sh &lt;&lt; EOF
#!/bin/bash
echo 'Fixing iptables rules for Coherence issue...'
TIMES=$((`iptables -t nat -v -L POST_public_allow -n --line-number | wc -l` - 2))
COUNTER=1
while [ $COUNTER -le $TIMES ]; do
  iptables -t nat -v -D POST_public_allow 1
  ((COUNTER++))
done
EOF</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4DVz6" title="原文 : Start the service (or just reboot):">サービスを起動します(または再起動します):</span></p>

</li>
</ul>
<markup
lang="bash"

>echo 'Start the systemd service to fix iptables nat chain...'
systemctl enable --now fix-iptables</markup>

</div>
</div>
</div>
</doc-view>
