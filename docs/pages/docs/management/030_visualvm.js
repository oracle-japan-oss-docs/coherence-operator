<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1q8Sa2" title="原文 : Using VisualVM">VisualVMの使用</span></dt>
<dd slot="desc"><p><span class="merged" id="all.12Q29t" title="原文 : VisualVM is a visual tool integrating commandline JDK tools and lightweight profiling capabilities, designed for both development and production time use."><a href="https://visualvm.github.io/" id="" target="_blank" >VisualVM</a>は、コマンドラインJDKツールと軽量プロファイリング機能を統合するビジュアル・ツールで、開発時と本番時の両方の使用のために設計されています。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_access_a_coherence_cluster_via_visualvm"><span class="merged" id="all.1hCM4w" title="原文 : Access A Coherence Cluster via VisualVM">VisualVMを介したCoherenceクラスタへのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.2mhgKs.spl1"  title="原文: Coherence management is implemented using Java Management Extensions (JMX).">Coherence管理は、Java Management Extensions (JMX)を使用して実装されます。</span> <span class="merged" id="all.2mhgKs.spl2"  title="原文: JMX is a Java standard for managing and monitoring Java applications and services.">JMXは、Javaアプリケーションとサービスを管理およびモニタリングするためのJava標準です。</span> <span class="merged" id="all.2mhgKs.spl3" title="原文 : VisualVM and other JMX tools can be used to manage and monitor Coherence Clusters via JMX.">VisualVMおよびその他のJMXツールを使用して、JMXを介してCoherenceクラスタを管理および監視できます。</span> </p>

<p><span class="merged" id="all.1qFiAB.spl1" title="原文 : The default transport used by JMX is RMI but RMI can be difficult to set-up reliably in containers and Kubernetes so that it can be accessed externally due to its use of multiple TCP ports that are difficult to configure and it does not work well with the NAT&rsquo;ed type of networking typically found in these environments.">JMXで使用されるデフォルト・トランスポートはRMIですが、コンテナおよびKubernetesでは、構成が困難で、通常これらの環境で見つかったNATタイプのネットワーキングではうまく機能しない複数TCPポートの使用のため、外部からアクセスできるように、コンテナおよびKubernetesでRMIを確実に設定することは困難です。</span> <span class="merged" id="all.1qFiAB.spl2" title="原文 : JMXMP on the other hand is an alternative to RMI that does work well in containers and only requires a single TCP port.">一方、JMXMPは、コンテナで適切に動作し、単一のTCPポートのみを必要とするRMIの代替手段です。</span> </p>

<p><span class="merged" id="all.WYNg1" title="原文 : This example shows how to connect to a cluster via JMX over JMXMP.">この例は、JMXMPを介してクラスタに接続する方法を示しています。</span></p>

<p><span class="merged" id="all.4YbFG3" title="原文 : As an alternative to JMX see Management over REST for how to connect to a cluster via the VisualVM plugin using REST.">JMXの代わりとして、RESTを使用してVisualVMプラグインでクラスタに接続する方法については、<router-link to="/docs/management/020_management_over_rest">「RESTを介した管理」</router-link>を参照してください。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.OFnc7" title="原文 : See the Coherence Management Documentation for more information on JMX and Management.">JMXおよび管理の詳細は、<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/manage/introduction-oracle-coherence-management.html" id="" target="_blank" >「Coherence管理ドキュメント」</a>を参照してください。</span></p>
</div>

<h3 id="_prerequisites"><span class="merged" id="all.2LZvWc.2"  title="原文:: Prerequisites">前提条件</span></h3>
<div class="section">
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.LO8kI" title="原文 : Install the Coherence Operator">Coherence Operatorのインストール</span>
<p><span class="merged" id="all.3W2nrX" title="原文 : Ensure you have installed the Coherence Operator using the Install Guide."><router-link to="/docs/installation/01_installation">「インストール・ガイド」</router-link>を使用してCoherence Operatorがインストールされていることを確認します。</span></p>

</li>
<li>
<span class="merged" id="all.LIPgd" title="原文 : Download the JMXMP connector JAR">JMXMPコネクタJARのダウンロード</span>
<p><span class="merged" id="all.3LmQyy.spl1" title="原文 : The JMX endpoint does not use RMI, instead it uses JMXMP.">JMXエンドポイントではRMIは使用されず、かわりにJMXMPが使用されます。</span> <span class="merged" id="all.3LmQyy.spl2" title="原文 : This requires an additional JAR on the classpath of the Java JMX client (VisualVM and JConsole).">これには、Java JMXクライアント(VisualVMおよびJConsole)のクラスパスに追加のJARが必要です。</span> <span class="merged" id="all.3LmQyy.spl3" title="原文 : You can use curl to download the required JAR.">curlを使用して、必要なJARをダウンロードできます。</span> </p>

<markup
lang="bash"

>curl http://central.maven.org/maven2/org/glassfish/external/opendmk_jmxremote_optional_jar/1.0-b01-ea/opendmk_jmxremote_optional_jar-1.0-b01-ea.jar \
    -o opendmk_jmxremote_optional_jar-1.0-b01-ea.jar</markup>

<p><span class="merged" id="all.1Wt62N" title="原文 : This jar can also be downloaded as a Maven dependency if you are connecting through a Maven project.">Mavenプロジェクトを介して接続する場合は、このjarをMaven依存関係としてダウンロードすることもできます。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
  &lt;groupId&gt;org.glassfish.external&lt;/groupId&gt;
  &lt;artifactId&gt;opendmk_jmxremote_optional_jar&lt;/artifactId&gt;
  &lt;version&gt;1.0-b01-ea&lt;/version&gt;
&lt;/dependency&gt;</markup>

</li>
</ol>
</div>

<h3 id="_install_a_jmx_enabled_coherence_cluster"><span class="merged" id="all.1yIHAK" title="原文 : Install a JMX Enabled Coherence Cluster">JMX対応Coherenceクラスタのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.3gUC9g" title="原文 : In this example a simple minimal cluster will be created running the MBean server.">この例では、MBeanサーバーを実行している単純な最小限のクラスタが作成されます。</span></p>

<markup
lang="yaml"
title="cluster-with-jmx.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  jvm:
    args:                                                  <span class="conum" data-value="1" />
      - -Dcoherence.management=all
      - -Dcoherence.management.remote=true
      - -Dcom.sun.management.jmxremote.ssl=false
      - -Dcom.sun.management.jmxremote.authenticate=false
    jmxmp:
      enabled: true                                        <span class="conum" data-value="2" />
      port: 9099
  ports:
    - name: jmx                                            <span class="conum" data-value="3" />
      port: 9099</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.31K2gF" title="原文 : Additional system properties are added to enable Coherence management See the Coherence Management Documentation">Coherence管理を有効にするために追加のシステム・プロパティが追加されました。<a href="https://docs.oracle.com/en/middleware/fusion-middleware/coherence/12.2.1.4/manage/introduction-oracle-coherence-management.html" id="" target="_blank" >「Coherence管理ドキュメント」</a>を参照してください</span></li>
<li data-value="2"><span class="merged" id="all.2cvWli" title="原文 : JMXMP is enabled on port 9099 so that a reliable JMX connection can be made to the MBean server from outside the Pods">JMXMPはポート<code>9099</code>で有効化されているため、<code>Pods</code>の外部からMBeanサーバーに信頼性のあるJMX接続を作成できます</span></li>
<li data-value="3"><span class="merged" id="all.3wuHOT" title="原文 : The JMXMP port is exposed as an additional port">JMXMPポートが追加ポートとして公開されます</span></li>
</ul>
<p><span class="merged" id="all.G8DqN" title="原文 : The example cluster-with-jmx.yaml can be installed into Kubernetes with the following command:">例<code>cluster-with-jmx.yaml</code>は、次のコマンドを使用してKubernetesにインストールできます:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test apply -f cluster-with-jmx.yaml</markup>

<p><span class="merged" id="all.1m3CBL" title="原文 : This should install the cluster into the namespace coherence-test with a default replica count of three, resulting in a StatefulSet with three Pods.">これにより、クラスタがネームスペース<code>coherence-test</code>にインストールされ、デフォルトのレプリカ数が3になり、<code>Pods</code>が3つある<code>StatefulSet</code>になります。</span></p>

</div>

<h3 id="_port_forward_the_mbean_server_pod"><span class="merged" id="all.hYNRy" title="原文 : Port Forward the MBean Server Pod:">MBeanサーバー・ポッドのポート転送:</span></h3>
<div class="section">
<p><span class="merged" id="all.2DCRhW" title="原文 : After installing the basic cluster-with-jmx.yaml from the example above there would be a three member Coherence cluster installed into Kubernetes.">前述の例から基本的な<code>cluster-with-jmx.yaml</code>をインストールすると、3つのメンバーCoherenceクラスタがKubernetesにインストールされます。</span></p>

<p><span class="merged" id="all.4Z0Y0O.1" title="原文 : The kubectl CLI can be used to list Pods for the cluster:"><code>kubectl</code> CLIを使用して、クラスタの<code>Pods</code>をリストできます:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test get pod -l coherenceCluster=test-cluster

NAME             READY   STATUS    RESTARTS   AGE
test-cluster-0   1/1     Running   0          36s
test-cluster-1   1/1     Running   0          36s
test-cluster-2   1/1     Running   0          36s</markup>

<p><span class="merged" id="all.2Dp1Jz.1.spl1" title="原文 : In a test or development environment the simplest way to reach an exposed port is to use the kubectl port-forward command.">テストまたは開発環境では、公開されたポートに到達する最も簡単な方法は、<code>kubectl port-forward</code>コマンドを使用することです。</span> <span class="merged" id="all.2Dp1Jz.1.spl2" title="原文 : For example to connect to the first Pod in the deployment:">たとえば、デプロイメントの最初の<code>Pod</code>に接続するには:</span> </p>

<markup
lang="bash"

>kubectl -n coherence-test port-forward test-cluster-0 9099:9099

Forwarding from [::1]:9099 -&gt; 9099
Forwarding from 127.0.0.1:9099 -&gt; 9099</markup>

<p><span class="merged" id="all.jYyDQ" title="原文 : JMX can now be access using the URL service:jmx:jmxmp://127.0.0.1:9099">JMXは、URL <code>service:jmx:jmxmp://127.0.0.1:9099</code>を使用してアクセスできるようになりました</span></p>

</div>

<h3 id="_access_mbeans_through_jconsole"><span class="merged" id="all.fjnx8" title="原文 : Access MBeans Through JConsole">JConsoleを介したMBeansへのアクセス</span></h3>
<div class="section">
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4NBJqY" title="原文 : Run JConsole with the JMXMP connector on the classpath:">クラスパスでJMXMPコネクタを使用してJConsoleを実行します:</span>
<markup
lang="bash"

>jconsole -J-Djava.class.path="$JAVA_HOME/lib/jconsole.jar:$JAVA_HOME/lib/tools.jar:opendmk_jmxremote_optional_jar-1.0-b01-ea.jar" service:jmx:jmxmp://127.0.0.1:9099</markup>

</li>
<li>
<span class="merged" id="all.4V6vV8.spl1" title="原文 : In the console UI, select the MBeans tab and then Coherence Cluster attributes.">コンソールUIで、<code>MBeans</code>タブを選択し、<code>Coherence Cluster</code>属性を選択します。</span> <span class="merged" id="all.4V6vV8.spl2" title="原文 : You should see the Coherence MBeans as shown below:">Coherence MBeansは次のように表示されます:</span> 
<p><img alt="VisualVM" src="./images/jconsole.png" width="513" />
</p>

</li>
</ol>
</div>

<h3 id="_access_mbeans_through_visualvm"><span class="merged" id="all.4Nstnx" title="原文 : Access MBeans Through VisualVM">VisualVMを介したMBeansへのアクセス</span></h3>
<div class="section">
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4Xd4Zh" title="原文 : Ensure you run VisualVM with the JMXMP connector on the classpath:">クラスパスでJMXMPコネクタとともにVisualVMを実行してください:</span>
<markup
lang="bash"

>jvisualvm -cp "$JAVA_HOME/lib/tools.jar:opendmk_jmxremote_optional_jar-1.0-b01-ea.jar"</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1Ozs6S" title="原文 : If you have downloaded VisualVM separately (as VisualVM has not been part of the JDK from Java 9 onwards), then the executable is visualvm (or on MacOS it is /Applications/VisualVM.app/Contents/MacOS/visualvm).">VisualVMを個別にダウンロードした場合(VisualVMがJava 9以降からJDKの一部ではないため)、実行可能ファイルは<code>visualvm</code> (またはMacOSの場合は<code>/Applications/VisualVM.app/Contents/MacOS/visualvm</code>)。</span></p>
</div>
</li>
<li>
<span class="merged" id="all.3U5iLh" title="原文 : From the VisualVM menu select File / Add JMX Connection">VisualVMメニューから、<code>File</code> / <code>Add JMX Connection</code>を選択</span>

</li>
<li>
<span class="merged" id="all.39yHqS" title="原文 : Enter service:jmx:jmxmp://127.0.0.1:9099 for the Connection value and click OK."><code>Connection</code>値に<code>service:jmx:jmxmp://127.0.0.1:9099</code>と入力し、<code>OK</code>をクリックします。</span>
<p><span class="merged" id="all.ZDVai" title="原文 : A JMX connection should be added under the Local section of the left hand panel.">JMX接続は、左側のパネルの<code>Local</code>セクションの下に追加する必要があります。</span></p>

</li>
<li>
<span class="merged" id="all.32NDus.spl1" title="原文 : Double-click the new local connection to connect to the management Pod.">新しいローカル接続をダブルクリックして、管理<code>Pod</code>に接続します。</span> <span class="merged" id="all.32NDus.spl2" title="原文 : You can see the Coherence MBeans under the MBeans tab."><code>Coherence</code> MBeansは、<code>MBeans</code>タブの下に表示されます。</span> <span class="merged" id="all.32NDus.spl3" title="原文 : If you have installed the Coherence VisualVM plugin, you can also see a Coherence tab.">Coherence VisualVMプラグインをインストールした場合は、<code>Coherence</code>タブも表示されます。</span> 
<p><img alt="VisualVM" src="./images/jvisualvm.png" width="735" />
</p>

</li>
</ol>
<p><span class="merged" id="all.48oq9n" title="原文 : Refer to the Coherence MBean Reference for detailed information about Coherence MBeans.">Coherence MBeansの詳細は、<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/manage/oracle-coherence-mbeans-reference.html#GUID-5E57FA4D-9CF8-4069-A8FD-B50E4FAB2687" id="" target="_blank" >「Coherence MBeanリファレンス」</a>を参照してください。</span></p>

</div>
</div>
</doc-view>
