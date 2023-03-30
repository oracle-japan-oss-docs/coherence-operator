<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_using_jmx"><span class="merged" id="all.7Q39f" title="原文 : Using JMX">JMXの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.2wDVPQ.spl1" title="原文 : The Java Management Extensions (JMX) are a common way to connect to a JVM and retrieve information from MBeans attributes or trigger operations by calling MBean methods.">Java Management Extensions (JMX)は、JVMに接続し、MBeanメソッドをコールしてMBeans属性またはトリガー操作から情報を取得する一般的な方法です。</span> <span class="merged" id="all.2wDVPQ.spl2" title="原文 : By default, the JVM uses RMI as the transport layer for JMX but RMI can be notoriously tricky to make work in a container environment due to the address and port NAT’ing that is typical with containers or clouds.">デフォルトでは、JVMではJMXのトランスポート・レイヤーとしてRMIが使用されますが、コンテナまたはクラウドで典型的なアドレスおよびポートNATが原因で、RMIはコンテナ環境で作業を慎重に行うことができます。</span> <span class="merged" id="all.2wDVPQ.spl3" title="原文 : For this reason the Operator supports an alternative transport called JMXMP.">このため、オペレータはJMXMPという代替トランスポートをサポートします。</span> <span class="merged" id="all.2wDVPQ.spl4" title="原文 : The difference is that JMXMP only requires a single port for communications and this port is simple to configure.">違いは、JMXMPでは通信用に1つのポートのみが必要であり、このポートは簡単に構成できることです。</span> </p>

<p><span class="merged" id="all.3PxnyJ.spl1" title="原文 : JMXMP is configured using the fields in the jvm.jmxmp section of the Coherence CRD spec.">JMXMPは、<code>Coherence</code> CRD仕様の<code>jvm.jmxmp</code>セクションのフィールドを使用して構成されます。</span> <span class="merged" id="all.3PxnyJ.spl2" title="原文 : Enabling JMXMP support adds the opendmk_jmxremote_optional_jar.jar JMXMP library to the classpath and sets the the Coherence MBean server factory to produce a JMXMP MBean server.">JMXMPサポートを有効にすると、<code>opendmk_jmxremote_optional_jar.jar</code> JMXMPライブラリがクラスパスに追加され、JMXMP MBeanサーバーを生成するようにCoherence MBeanサーバー・ファクトリが設定されます。</span> <span class="merged" id="all.3PxnyJ.spl3" title="原文 : By default, the JMXMP server will bind to port 9099 in the container but this can be configured to bind to a different port.">デフォルトでは、JMXMPサーバーはコンテナ内のポート9099にバインドされますが、これは別のポートにバインドするように構成できます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.IyflO" title="原文 : Using a custom transport for JMX, such as JMXMP, requires any JMX client that will connect to the JMX server to also have a JMXMP library on its classpath.">JMXMPなどのJMXにカスタム・トランスポートを使用するには、JMXサーバーに接続するJMXクライアントがそのクラスパスにJMXMPライブラリを持つ必要があります。</span></p>
</div>
<p><span class="merged" id="all.3Ua3VS" title="原文 : See the VisualVM Example for a detailed example of how to configure JMX and connect to a server in a Coherence resource.">JMXを構成し、<code>Coherence</code>リソース内のサーバーに接続する方法の詳細な例については、<router-link to="/docs/management/030_visualvm">「VisualVM例」</router-link>を参照してください。</span></p>

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
<li data-value="1"><span class="merged" id="all.1tjJZV" title="原文 : JMXMP is enabled so that a JMXMP server will be started in the Coherence container’s JVM">JMXMPは、JMXMPサーバーがCoherenceコンテナのJVMで起動されるように有効です</span></li>
<li data-value="2"><span class="merged" id="all.4T9zqT" title="原文 : The port that the JMX server will bind to in the container is 9099">JMXサーバーがコンテナ内でバインドするポートは9099です</span></li>
</ul>
</div>
</doc-view>
