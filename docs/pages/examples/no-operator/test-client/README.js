<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>

<p><span class="merged" id="all.2z542P.spl1" title="原文 : In the examples/no-operator/test-client/ directory is a simple Maven project that we will use to run a simple Extend client."><code>examples/no-operator/test-client/</code>ディレクトリには、単純なExtendクライアントの実行に使用する単純なMavenプロジェクトがあります。</span> <span class="merged" id="all.2z542P.spl2" title="原文 : This will allow us to show connectivity to our test cluster from outside of Kubernetes.">これにより、Kubernetesの外部からテスト・クラスタへの接続を表示できます。</span> </p>

<p><span class="merged" id="all.4Xg9KE" title="原文 : To run the test client we can run this command from the test-client/ directory:">テスト・クライアントを実行するには、<code>test-client/</code>ディレクトリから次のコマンドを実行します:</span></p>

<markup
lang="bash"

>mvn exec:java</markup>

<p><span class="merged" id="all.1ERWTE.spl1" title="原文 : This will start a Coherence interactive console as an Extend client.">これにより、ExtendクライアントとしてCoherence対話型コンソールが起動します。</span> <span class="merged" id="all.1ERWTE.spl2" title="原文 : We can then run various commands to test Extend connectivity.">その後、様々なコマンドを実行して、Extend接続をテストできます。</span> </p>

</doc-view>
