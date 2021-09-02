<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_using_jmx"><span class="merged" id="all.7Q39f" title="原文 : Using JMX">JMXの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.2wDVPQ.spl1" title="原文 : The Java Management Extensions (JMX) are a common way to connect to a JVM and retrieve information from MBeans attributes or trigger operations by calling MBean methods.">Java Management Extensions (JMX)は、JVMに接続し、MBeans属性またはMBeanメソッドを呼び出して操作を起動するための一般的な方法です。</span> <span class="merged" id="all.2wDVPQ.spl2" title="原文 : By default, the JVM uses RMI as the transport layer for JMX but RMI can be notoriously tricky to make work in a container environment due to the address and port NAT&rsquo;ing that is typical with containers or clouds.">デフォルトでは、JVMはJMXのトランスポート・レイヤーとしてRMIを使用しますが、RMIは、コンテナまたはクラウドで典型的なアドレスとポートNATが使用されているため、コンテナ環境で作業するのが難しい場合があります。</span> <span class="merged" id="all.2wDVPQ.spl3" title="原文 : For this reason the Operator supports an alternative transport called JMXMP.">このため、オペレータはJMXMPという代替トランスポートをサポートしています。</span> <span class="merged" id="all.2wDVPQ.spl4" title="原文 : The difference is that JMXMP only requires a single port for communications and this port is simple to configure.">違いは、JMXMPでは通信に単一のポートのみが必要であり、このポートは簡単に構成できます。</span> </p>

<p><span class="merged" id="all.3PxnyJ.spl1" title="原文 : JMXMP is configured using the fields in the jvm.jmxmp section of the Coherence CRD spec.">JMXMPは、<code>Coherence</code> CRD仕様の<code>jvm.jmxmp</code>セクションのフィールドを使用して構成されます。</span> <span class="merged" id="all.3PxnyJ.spl2" title="原文 : Enabling JMXMP support adds the opendmk_jmxremote_optional_jar.jar JMXMP library to the classpath and sets the the Coherence MBean server factory to produce a JMXMP MBean server.">JMXMPサポートを有効にすると、<code>opendmk_jmxremote_optional_jar.jar</code> JMXMPライブラリがクラスパスに追加され、Coherence MBeanサーバー・ファクトリを設定してJMXMP MBeanサーバーを生成します。</span> <span class="merged" id="all.3PxnyJ.spl3" title="原文 : By default, the JMXMP server will bind to port 9099 in the container but this can be configured to bind to a different port.">デフォルトでは、JMXMPサーバーはコンテナ内のポート9099にバインドされますが、別のポートにバインドするように構成できます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.IyflO" title="原文 : Using a custom transport for JMX, such as JMXMP, requires any JMX client that will connect to the JMX server to also have a JMXMP library on its classpath.">JMXにカスタム・トランスポート(JMXMPなど)を使用するには、JMXサーバーに接続するJMXクライアントがクラスパスにJMXMPライブラリもある必要があります。</span></p>
</div>
<p><span class="merged" id="all.1y71fu" title="原文 : See the VisualVM Example for a detailed example of how to configure JMX and connect to a server in a Coherence resource.">JMXを構成して<code>Coherence</code>リソースでサーバーに接続する方法の詳細な例は、<router-link to="/management/030_visualvm">「VisualVMの例」</router-link>を参照してください。</span></p>

<p><span class="merged" id="all.2apT5L"  title="原文:: Example:">例:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    jmxmp:
      enabled: true  <span class="conum" data-value="1" />
      port: 9099     <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1tjJZV" title="原文 : JMXMP is enabled so that a JMXMP server will be started in the Coherence container&rsquo;s JVM">JMXMPは、JMXMPサーバーがCoherenceコンテナのJVMで起動されるように有効化されています</span></li>
<li data-value="2"><span class="merged" id="all.4T9zqT" title="原文 : The port that the JMX server will bind to in the container is 9099">JMXサーバーがコンテナ内でバインドされるポートは9099です</span></li>
</ul>
</div>
</doc-view>
