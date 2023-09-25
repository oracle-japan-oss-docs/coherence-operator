<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_log_capture_with_fluentd"><span class="merged" id="all.ChwYm" title="原文 : Log Capture with Fluentd">Fluentdによるログ・キャプチャ</span></h2>
<div class="section">
<p><span class="merged" id="all.TbhNk.spl1" title="原文 : There are many ways to capture container logs in Kubernetes, one possibility that this guide will cover is using a Fluentd side-car container to ship log files to Elasticsearch.">Kubernetesでコンテナ・ログを取得する方法は数多くあります。このガイドでは、Fluentdサイドカー・コンテナを使用してログ・ファイルをElasticsearchに送信する可能性もあります。</span> <span class="merged" id="all.TbhNk.spl2" title="原文 : This is a common pattern and one the the Coherence CRD makes simple by allowing easy injection of additional containers.">これは共通パターンであり、<code>Coherence</code> CRDは追加コンテナを簡単にインジェクションできるようにすることで簡単になります。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3c8oKb.spl1" title="原文 : This guide is going to assume that the default logging related configurations provided by the operator will be used.">このガイドでは、オペレータによって提供されるデフォルトのロギング関連構成が使用されると想定します。</span> <span class="merged" id="all.3c8oKb.spl2" title="原文 : For example, Coherence will be configured to use Java util logging for logs, and the default logging configuration file will be used.">たとえば、Coherenceはログに対してJavaのユーティリティ・ロギングを使用するように構成され、デフォルトのロギング構成ファイルが使用されます。</span> <span class="merged" id="all.3c8oKb.spl3" title="原文 : Whilst these things are not pre-requisites for shipping logs to Elasticsearch they are required to make the examples below work.">これらのことは、Elasticsearchへのログの送信の前提条件ではありませんが、次の例を機能させるために必要です。</span> </p>
</div>
<p><span class="merged" id="all.1J8rVY" title="原文 : To be able to send Coherence logs to Elasticsearch there are some steps that must be completed:">CoherenceログをElasticsearchに送信できるようにするには、いくつかのステップを完了する必要があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.NxRmt" title="原文 : Configure Coherence to log to files">ファイルに記録するCoherenceの構成</span></p>

</li>
<li>
<p><span class="merged" id="all.10vZYc" title="原文 : Add a Volume and VolumeMount to be used for log files">ログ・ファイルに使用する<code>Volume</code>および<code>VolumeMount</code>を追加</span></p>

</li>
<li>
<p><span class="merged" id="all.caU9K" title="原文 : Add the Fluentd side-car container">Fluentdサイドカー・コンテナの追加</span></p>

</li>
</ul>

<h3 id="_configure_coherence_to_log_to_files"><span class="merged" id="all.3kelPT" title="原文 : Configure Coherence to Log to Files">ファイルにログするCoherenceの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.4JPcBS.spl1" title="原文 : Coherence will log to the console by default so to be able to ship logs to Elasticsearch it needs to be configured to write to log files.">Coherenceはデフォルトでコンソールに記録されるため、ログ・ファイルに書き込むように構成する必要があるElasticsearchにログを送信できます。</span> <span class="merged" id="all.4JPcBS.spl2" title="原文 : One way to do this is to add a Java Util Logging configuration file and then to configure Coherence to use the JDK logger.">これを行う方法の1つは、Javaユーティリティ・ロギング構成ファイルを追加し、JDKロガーを使用するようにCoherenceを構成することです。</span> </p>

<p><span class="merged" id="all.1QRIdX.spl1" title="原文 : In the jvm.args section of the Coherence CRD the system properties should be added to set the configuration file used by Java util logging and to configure Coherence logging."><code>Coherence</code> CRDの<code>jvm.args</code>セクションで、システム・プロパティを追加して、Javaユーティリティ・ロギングで使用される構成ファイルを設定し、Coherenceロギングを構成する必要があります。</span> <span class="merged" id="all.1QRIdX.spl2" title="原文 : See the Coherence Logging Config documentation for more details.">詳細は、Coherenceの<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/develop-applications/operational-configuration-elements.html" id="" target="_blank" >「ロギング構成」</a>ドキュメントを参照してください。</span> </p>

<p><span class="merged" id="all.3fnSm1.spl1" title="原文 : There are alternative ways to configure the Java util logger besides using a configuration file, just as there are alternative logging frameworks that Coherence can be configured to use to produce log files.">Javaのユーティリティ・ロガーを構成する代替方法は、構成ファイルを使用する以外に、ログ・ファイルの生成に使用するようCoherenceを構成できる代替ロギング・フレームワークがあるのと同様です。</span> <span class="merged" id="all.3fnSm1.spl2" title="原文 : This example is going to use Java util logging as that is the simplest to demonstrate without requiring any additional logging libraries.">この例では、Javaのユーティリティ・ロギングを使用します。これは、追加のロギング・ライブラリを必要とせずに、最も簡単に実証できるためです。</span> </p>


<h4 id="_operator_provided_logging_configuration_file"><span class="merged" id="all.4RDdvb" title="原文 : Operator Provided Logging Configuration File">オペレータ指定ロギング構成ファイル</span></h4>
<div class="section">
<p><span class="merged" id="all.16bdta.spl1" title="原文 : Whilst any valid Java util logging configuration file may be used, the Coherence Operator injects a default logging configuration file into the coherence container that can be used to configure the logger to write logs to files under the /logs directory.">有効なJavaユーティリティ・ロギング構成ファイルを使用できる間、Coherence Operatorはデフォルトのロギング構成ファイルを<code>coherence</code>コンテナにインジェクトします。このコンテナを使用して、ログ出力を<code>/logs</code>ディレクトリのファイルに書き込むようにロガーを構成できます。</span> <span class="merged" id="all.16bdta.spl2" title="原文 : The log files will have the name coherence-%g.log, where %g is the log file generation created as logs get rotated.">ログ・ファイルの名前は<code>coherence-%g.log</code>になります。<code>%g</code>は、ログがローテーションされたときに作成されたログ・ファイルの生成です。</span> </p>

<p><span class="merged" id="all.1OOwcl" title="原文 : This file will be injected into the container at /coherence-operator/utils/logging/logging.properties and will look something like this:">このファイルは<code>/coherence-operator/utils/logging/logging.properties</code>のコンテナにインジェクトされ、次のようになります:</span></p>

<markup


>com.oracle.coherence.handlers=java.util.logging.ConsoleHandler,java.util.logging.FileHandler

com.oracle.coherence.level=FINEST

java.util.logging.ConsoleHandler.formatter=java.util.logging.SimpleFormatter
java.util.logging.ConsoleHandler.level=FINEST

java.util.logging.FileHandler.pattern=/logs/coherence-%g.log
java.util.logging.FileHandler.limit=10485760
java.util.logging.FileHandler.count=50
java.util.logging.FileHandler.formatter=java.util.logging.SimpleFormatter

java.util.logging.SimpleFormatter.format=%5$s%6$s%n</markup>

<p><span class="merged" id="all.1EOCPa" title="原文 : To configure Cohrence and the logger some system properties need to be added to the jvm.args field of the Coherence CRD spec:">Cohrenceとロガーを構成するには、<code>Coherence</code> CRD仕様の<code>jvm.args</code>フィールドにシステム・プロパティを追加する必要があります:</span></p>

<p><span class="merged" id="all.6vDv5.16"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: cluster-one
spec:
  jvm:
    args:
      - "-Dcoherence.log=jdk"                                                                   <span class="conum" data-value="1" />
      - "-Dcoherence.log.logger=com.oracle.coherence"                                           <span class="conum" data-value="2" />
      - "-Djava.util.logging.config.file=/coherence-operator/utils/logging/logging.properties"  <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4gbTpN" title="原文 : Coherence has been configured to use the Java util logging.">Coherenceは、Javaのユーティリティ・ロギングを使用するように構成されています。</span></li>
<li data-value="2"><span class="merged" id="all.20m6qG" title="原文 : The Coherence logger name has been set to com.oracle.coherence, which matches the logging configuration file.">Coherenceログ出力名は、ロギング構成ファイルと一致する<code>com.oracle.coherence</code>に設定されています。</span></li>
<li data-value="3"><span class="merged" id="all.44gOai" title="原文 : The Java util logging configuration file is set to the file injected by the Operator.">Javaのユーティリティ・ロギング構成ファイルは、オペレータによってインジェクトされるファイルに設定されます。</span></li>
</ul>
</div>

<h4 id="_log_files_volume"><span class="merged" id="all.48tUHx" title="原文 : Log Files Volume">ログ・ファイル・ボリューム</span></h4>
<div class="section">
<p><span class="merged" id="all.1gjS7m.spl1" title="原文 : The logging configuration above configures Coherence to write logs to the /logs directory.">前述のロギング構成では、Coherenceを構成してログを<code>/logs</code>ディレクトリに書き込みます。</span> <span class="merged" id="all.1gjS7m.spl2" title="原文 : For this location to be accessible to both the coherence container and to the fluentd container it needs to be created as a Volume in the Pod and mounted to both containers.">このロケーションが<code>coherence</code>コンテナと<code>fluentd</code>コンテナの両方からアクセスできるようにするには、<code>Pod</code>で<code>Volume</code>として作成し、両方のコンテナにマウントする必要があります。</span> <span class="merged" id="all.1gjS7m.spl3" title="原文 : As this Volume can be ephemeral and is typically not required to live longer than the Pod the simplest type of Volume to use is an emptyDir volume source.">この<code>Volume</code>は一時的であり、通常は<code>Pod</code>より長く存続する必要がないため、使用する最も単純なタイプの<code>Volume</code>は<code>emptyDir</code>ボリューム・ソースです。</span> </p>

<p><span class="merged" id="all.6vDv5.17"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: cluster-one
spec:
  jvm:
    args:
      - "-Dcoherence.log=jdk"
      - "-Dcoherence.log.logger=com.oracle.coherence"
      - "-Djava.util.logging.config.file=/coherence-operator/utils/logging/logging.properties"
  volumes:
    - name: logs           <span class="conum" data-value="1" />
      emptyDir: {}
  volumeMounts:
    - name: logs           <span class="conum" data-value="2" />
      mountPath: /logs</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4b9eRK" title="原文 : An additional empty-dir Volume named logs has been added to the Coherence spec."><code>logs</code>という名前の空ディレクトリ<code>Volume</code>が<code>Coherence</code>仕様に追加されました。</span></li>
<li data-value="2"><span class="merged" id="all.33S67x" title="原文 : The logs volume will be mounted at /logs in all containers in the Pod."><code>logs</code>ボリュームは、<code>Pod</code>内のすべてのコンテナの<code>/logs</code>にマウントされます。</span></li>
</ul>
</div>
</div>

<h3 id="_add_the_fluentd_side_car"><span class="merged" id="all.2731lU" title="原文 : Add the Fluentd Side-Car">Fluentdサイドカーの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.3hspvP" title="原文 : With Coherence configured to write to log files, and those log files visible to other containers in the Pod the Fluentd side-car container can be added.">Coherenceがログ・ファイルに書き込むように構成され、これらのログ・ファイルが<code>Pod</code>内の他のコンテナに表示されるように構成されている場合、Fluentdサイドカー・コンテナを追加できます。</span></p>

<p><span class="merged" id="all.xo4LL" title="原文 : The example yaml below shows a Coherence resource with the additional Fluentd container added.">次のyaml例は、追加のFluentdコンテナが追加された<code>Coherence</code>リソースを示しています。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: cluster-one
spec:
  jvm:
    args:
      - "-Dcoherence.log=jdk"
      - "-Dcoherence.log.logger=com.oracle.coherence"
      - "-Djava.util.logging.config.file=/coherence-operator/utils/logging/logging.properties"
  volumes:
    - name: logs
      emptyDir: {}
  volumeMounts:
    - name: logs
      mountPath: /logs
  sideCars:
    - name: fluentd                                     <span class="conum" data-value="1" />
      image: "fluent/fluentd-kubernetes-daemonset:v1.14-debian-elasticsearch7-1"
      args:
        - "-c"
        - "/etc/fluent.conf"
      env:
        - name: "FLUENTD_CONF"                          <span class="conum" data-value="2" />
          value: "fluentd-coherence.conf"
        - name: "FLUENT_ELASTICSEARCH_SED_DISABLE"      <span class="conum" data-value="3" />
          value: "true"
  configMapVolumes:
    - name: "efk-config"                                <span class="conum" data-value="4" />
      mountPath: "/fluentd/etc/fluentd-coherence.conf"
      subPath: "fluentd-coherence.conf"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2hfygH.spl1" title="原文 : The fluentd container has been added to the sideCars list."><code>fluentd</code>コンテナが<code>sideCars</code>リストに追加されました。</span> <span class="merged" id="all.2hfygH.spl2" title="原文 : This will create another container in the Pod exactly as configured.">これにより、構成済とまったく同じように、<code>Pod</code>に別のコンテナが作成されます。</span> </li>
<li data-value="2"><span class="merged" id="all.1k03Kh.spl1" title="原文 : The FLUENTD_CONF environment variable has been set to the name of the configuration file that Fluentd should use."><code>FLUENTD_CONF</code>環境変数は、Fluentdが使用する構成ファイルの名前に設定されています。</span> <span class="merged" id="all.1k03Kh.spl2" title="原文 : The standard Fluentd behaviour is to locate this file in the /fluentd/etc/ directory.">Fluentdの標準的な動作では、<code>/fluentd/etc/</code>ディレクトリにこのファイルを配置します。</span> </li>
<li data-value="3"><span class="merged" id="all.4enDVB" title="原文 : The FLUENT_ELASTICSEARCH_SED_DISABLE environment variable has been set to work around a known issue here."><code>FLUENT_ELASTICSEARCH_SED_DISABLE</code>環境変数は、既知の問題<a href="https://github.com/fluent/fluentd-kubernetes-daemonset#disable-sed-execution-on-elasticsearch-image" id="" target="_blank" >「こちら」</a>に対処するように設定されています。</span></li>
<li data-value="4"><span class="merged" id="all.3GIvmW.spl1" title="原文 : An additional volume has been added from a ConfigMap named efk-config, that contains the Fluentd configuration to use.">使用するFluentd構成を含む<code>efk-config</code>という名前の<code>ConfigMap</code>から追加のボリュームが追加されました。</span> <span class="merged" id="all.3GIvmW.spl2" title="原文 : This will be mounted to the fluentd container at /fluentd/etc/fluentd-coherence.conf, which corresponds to the name of the file set in the FLUENTD_CONF environment variable.">これは、<code>/fluentd/etc/fluentd-coherence.conf</code>の<code>fluentd</code>コンテナにマウントされます。これは、<code>FLUENTD_CONF</code>環境変数内のファイル・セットの名前に対応します。</span> </li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1XnGR3.spl1" title="原文 : There is no need to add a /logs volume mount to the fluentd container."><code>/logs</code>ボリューム・マウントを<code>fluentd</code>コンテナに追加する必要はありません。</span> <span class="merged" id="all.1XnGR3.spl2" title="原文 : The operator will mount the logs Volume to all containers in the Pod.">オペレータは、<code>logs</code> <code>Volume</code>を<code>Pod</code>の<strong>「すべて」</strong>コンテナにマウントします。</span> </p>
</div>
<p><span class="merged" id="all.1E9N3E.spl1" title="原文 : In the example above the Fluentd configuration has been provided from a ConfigMap.">前述の例では、Fluentd構成が<code>ConfigMap</code>から提供されています。</span> <span class="merged" id="all.1E9N3E.spl2" title="原文 : It could just as easily have come from a Secret or some other external Volume mount, or it could have been baked into the Fluentd image to be used."><code>Secret</code>またはその他の外部<code>Volume</code>マウントから簡単に取得したり、使用するFluentdイメージにベイク処理されたりすることもできます。</span> </p>


<h4 id="_the_fluentd_configuration_file"><span class="merged" id="all.2KmeuD" title="原文 : The Fluentd Configuration File">Fluentd構成ファイル</span></h4>
<div class="section">
<p><span class="merged" id="all.3JMqKt" title="原文 : The ConfigMap used to provide the Fluentd configuration might look something like this:">Fluentd構成を提供するために使用される<code>ConfigMap</code>は次のようになります:</span></p>

<markup
lang="yaml"

>apiVersion: v1
kind: ConfigMap
metadata:
  name: efk-config                              <span class="conum" data-value="1" />
  labels:
    component: coherence-efk-config
data:
  fluentd-coherence.conf: |
    # Ignore fluentd messages
    &lt;match fluent.**&gt;
      @type null
    &lt;/match&gt;

    # Coherence Logs
    &lt;source&gt;                                    <span class="conum" data-value="2" />
      @type tail
      path /logs/coherence-*.log
      pos_file /tmp/cohrence.log.pos
      read_from_head true
      tag coherence-cluster
      multiline_flush_interval 20s
      &lt;parse&gt;
       @type multiline
       format_firstline /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}.\d{3}/
       format1 /^(?&lt;time&gt;\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}.\d{3})\/(?&lt;uptime&gt;[0-9\.]+) (?&lt;product&gt;.+) &lt;(?&lt;level&gt;[^\s]+)&gt; \(thread=(?&lt;thread&gt;.+), member=(?&lt;member&gt;.+)\):[\S\s](?&lt;log&gt;.*)/
      &lt;/parse&gt;
    &lt;/source&gt;

    &lt;filter coherence-cluster&gt;                  <span class="conum" data-value="3" />
     @type record_transformer
     &lt;record&gt;
       cluster "#{ENV['COH_CLUSTER_NAME']}"
       role "#{ENV['COH_ROLE']}"
       host "#{ENV['HOSTNAME']}"
       pod-uid "#{ENV['COH_POD_UID']}"
     &lt;/record&gt;
    &lt;/filter&gt;

    &lt;match coherence-cluster&gt;                   <span class="conum" data-value="4" />
      @type elasticsearch
      hosts "http://elasticsearch-master:9200"
      logstash_format true
      logstash_prefix coherence-cluster
    &lt;/match&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1353pS" title="原文 : The name of the ConfigMap is efk-config to match the name specified in the Coherence CRD spec."><code>ConfigMap</code>の名前は<code>efk-config</code>で、<code>Coherence</code> CRD仕様で指定された名前と一致します。</span></li>
<li data-value="2"><span class="merged" id="all.2Cgm9f.spl1" title="原文 : The source section is configured to match log files with the name /logs/coherence-*.log, which is the name that Coherence logging has been configured to use."><code>source</code>セクションは、<code>/logs/coherence-*.log</code>という名前のログ・ファイルを一致するように構成されています。これは、Coherenceロギングが使用するように構成されている名前です。</span> <span class="merged" id="all.2Cgm9f.spl2" title="原文 : The pattern in the source section is a Fluentd pattern that matches the standard Coherence log message format."><code>source</code>セクションのパターンは、標準のCoherenceログ・メッセージ形式と一致するFluentdパターンです。</span> </li>
<li data-value="3"><span class="merged" id="all.2tORmE.spl1" title="原文 : A filter section will add additional fields to the log message."><code>filter</code>セクションは、ログ・メッセージにフィールドを追加します。</span> <span class="merged" id="all.2tORmE.spl2" title="原文 : These come from the environment variables that the Operator will inject into all containers in the Pod.">これらは、オペレータがポッド内のすべてのコンテナにインジェクトする環境変数から取得されます。</span> <span class="merged" id="all.2tORmE.spl3" title="原文 : In this case the Coherence cluster name, the Coherence role name, the Pod host name and Pod UID.">この場合、Coherenceクラスタ名、Coherenceロール名、ポッド・ホスト名およびポッドUID。</span> </li>
<li data-value="4"><span class="merged" id="all.3gG0Cf" title="原文 : The final section tells Fluentd how to ship the logs to Elasticsearch, in this case to the endpoint http://elasticsearch-master:9200">最後のセクションは、ログをElasticsearchに送信する方法(この場合はエンドポイント<code><a href="http://elasticsearch-master:9200" id="" target="_blank" >http://elasticsearch-master:9200</a></code>)をFluentdに示します</span></li>
</ul>
<p><span class="merged" id="all.2S5gkW" title="原文 : There are many ways to configure Fluentd, the example above is just one way and is in fact taken from one of the Operator’s functional tests.">Fluentdを構成する方法は数多くありますが、前述の例は1つの方法にすぎず、実際はOperatorの機能テストの1つ。</span></p>

<p><span class="merged" id="all.rCwOn" title="原文 : With the efk-config ConfigMap created in the same namespace as the Coherence resource the Coherence logs from the containers will now be shipped to Elasticsearch."><code>Coherence</code>リソースと同じネームスペースに<code>efk-config</code> <code>ConfigMap</code>を作成すると、コンテナからのCoherenceログがElasticsearchに出荷されます。</span></p>

</div>
</div>
</div>
</doc-view>
