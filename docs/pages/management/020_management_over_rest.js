<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_management_over_rest"><span class="merged" id="all.13uigM" title="原文 : Management over REST">RESTを介した管理</span></h2>
<div class="section">
<p><span class="merged" id="all.2StENU" title="原文 : Since version 12.2.1.4 Coherence has had functionality to expose a management API over REST.">バージョン12.2.1.4 Coherenceには、RESTを介して管理APIを公開する機能がありました。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1utRnU" title="原文 : The Management over REST API is disabled by default in Coherence clusters but can be enabled and configured by setting the relevant fields in the Coherence CRD.">REST APIを介した管理は、デフォルトではCoherenceクラスタでは<strong>「無効」</strong>ですが、<code>Coherence</code> CRDの関連フィールドを設定することで有効化および構成できます。</span></p>
</div>
<p><span class="merged" id="all.12pNpH" title="原文 : The example below shows how to enable and access Coherence MBeans using Management over REST.">次の例は、RESTを介した管理を使用してCoherence MBeansを有効にしてアクセスする方法を示しています。</span></p>

<p><span class="merged" id="all.16eozu.spl1" title="原文 : Once the Management port has been exposed, for example via a load balancer or port-forward command, the REST endpoint is available at http://host:port/management/coherence/cluster.">管理ポートが公開されると(ロード・バランサやport-forwardコマンドなどを介して)、RESTエンドポイントは<code><a href="http://host:port/management/coherence/cluster" id="" target="_blank" >http://host:port/management/coherence/cluster</a></code>から使用できます。</span> <span class="merged" id="all.16eozu.spl2" title="原文 : The Swagger JSON document for the API is available at http://host:port/management/coherence/cluster/metadata-catalog.">APIのSwagger JSONドキュメントは、<code><a href="http://host:port/management/coherence/cluster/metadata-catalog" id="" target="_blank" >http://host:port/management/coherence/cluster/metadata-catalog</a></code>で入手できます。</span> </p>

<p><span class="merged" id="all.YyoSr" title="原文 : See the REST API for Managing Oracle Coherence documentation for full details on each of the endpoints.">各エンドポイントの詳細は、<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/rest-reference/" id="" target="_blank" >「Oracle Coherenceを管理するためのREST API」</a>ドキュメントを参照してください。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2cwaJr" title="原文 : Note: Use of Management over REST is available only when using the operator with clusters running Coherence 12.2.1.4 or later version.">ノート: RESTを介した管理の使用は、Coherence 12.2.1.4以上のバージョンを実行しているクラスタでオペレータを使用している場合にのみ使用できます。</span></p>
</div>

<h3 id="_deploy_coherence_with_management_over_rest_enabled"><span class="merged" id="all.2USgMY" title="原文 : Deploy Coherence with Management over REST Enabled">RESTを介した管理でのCoherenceのデプロイ使用可能</span></h3>
<div class="section">
<p><span class="merged" id="all.2bEW3F" title="原文 : To deploy a Coherence resource with management over REST enabled and exposed on a port, the simplest yaml would look like this:">RESTを介した管理が有効でポートに公開されている<code>Coherence</code>リソースをデプロイするには、最も単純なYamlは次のようになります:</span></p>

<markup
lang="yaml"
title="management-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: management-cluster
spec:
  coherence:
    management:
      enabled: true     <span class="conum" data-value="1" />
  ports:
    - name: management  <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3FP4g3" title="原文 : Setting the coherence.management.enabled field to true will enable Management over REST"><code>coherence.management.enabled</code>フィールドを<code>true</code>に設定すると、RESTを介した管理が有効になります</span></li>
<li data-value="2"><span class="merged" id="all.2BsDNV.spl1" title="原文 : To expose Management over REST via a Service it is added to the ports list."><code>Service</code>を介してRESTで管理を公開するには、<code>ports</code>リストに追加されます。</span> <span class="merged" id="all.2BsDNV.spl2" title="原文 : The management port is a special case where the port number is optional so in this case Management over REST will bind to the default port 30000. (see Exposing Ports for details)"><code>management</code>ポートは、<code>port</code>番号がオプションであるため、RESTを介した管理はデフォルトのポート<code>30000</code>にバインドされます(詳細は、<router-link to="/ports/020_container_ports">「ポートの公開」</router-link>を参照してください)</span> </li>
</ul>
<p><span class="merged" id="all.vQ7vZ" title="原文 : To expose Management over REST on a different port the alternative port value can be set in the coherence.management section, for example:">RESTを介した管理を別のポートで公開するには、代替ポート値を<code>coherence.management</code>セクションに設定できます。次に例を示します:</span></p>

<markup
lang="yaml"
title="management-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: management-cluster
spec:
  coherence:
    management:
      enabled: true
      port: 8080      <span class="conum" data-value="1" />
  ports:
    - name: management</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3argMW" title="原文 : Management over REST will now be exposed on port 8080">RESTを介した管理がポート<code>8080</code>で公開されるようになりました</span></li>
</ul>
</div>

<h3 id="_port_forward_the_management_over_rest_port"><span class="merged" id="all.40fr0Z" title="原文 : Port-forward the Management over REST Port">RESTポートを介した管理のポート・フォワード</span></h3>
<div class="section">
<p><span class="merged" id="all.RRdmd" title="原文 : After installing the basic management-cluster.yaml from the first example above there would be a three member Coherence cluster installed into Kubernetes.">前述の例から基本的な<code>management-cluster.yaml</code>をインストールすると、3つのメンバーCoherenceクラスタがKubernetesにインストールされます。</span></p>

<p><span class="merged" id="all.pMJUa" title="原文 : For example, the cluster can be installed with kubectl">たとえば、<code>kubectl</code>を使用してクラスタをインストールできます</span></p>

<markup
lang="bash"

>kubectl -n coherence-test create -f management-cluster.yaml

coherence.coherence.oracle.com/management-cluster created</markup>

<p><span class="merged" id="all.4Z0Y0O" title="原文 : The kubectl CLI can be used to list Pods for the cluster:"><code>kubectl</code> CLIを使用して、クラスタの<code>Pods</code>をリストできます:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test get pod -l coherenceCluster=management-cluster

NAME                   READY   STATUS    RESTARTS   AGE
management-cluster-0   1/1     Running   0          36s
management-cluster-1   1/1     Running   0          36s
management-cluster-2   1/1     Running   0          36s</markup>

<p><span class="merged" id="all.2Dp1Jz.spl1" title="原文 : In a test or development environment the simplest way to reach an exposed port is to use the kubectl port-forward command.">テスト環境または開発環境では、公開ポートに到達する最も簡単な方法は、<code>kubectl port-forward</code>コマンドを使用することです。</span> <span class="merged" id="all.2Dp1Jz.spl2" title="原文 : For example to connect to the first Pod in the deployment:">たとえば、デプロイメントの最初の<code>Pod</code>に接続するには:</span> </p>

<markup
lang="bash"

>kubectl -n coherence-test port-forward management-cluster-0 30000:30000

Forwarding from [::1]:30000 -&gt; 30000
Forwarding from 127.0.0.1:30000 -&gt; 30000</markup>

</div>

<h3 id="_access_the_rest_endpoint"><span class="merged" id="all.3B19Qa" title="原文 : Access the REST Endpoint">RESTエンドポイントへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.2SnRCd" title="原文 : Now that a port is being forwarded from localhost to a Pod in the cluster the Management over REST endpoints can be accessed.">これで、ポートがlocalhostからクラスタ内の<code>Pod</code>に転送され、RESTエンドポイントの管理にアクセスできます。</span></p>

<p><span class="merged" id="all.13frAM" title="原文 : Issue the following curl command to access the REST endpoint:">次の<code>curl</code>コマンドを発行して、RESTエンドポイントにアクセスします:</span></p>

<markup
lang="bash"

>curl http://127.0.0.1:30000/management/coherence/cluster/</markup>

<p><span class="merged" id="all.2rLj0Z" title="原文 : Which should result in a response similar to the following:">次のようなレスポンスになります:</span></p>

<markup
lang="json"

>{
  "links": [
    {
      "rel": "parent",
      "href": "http://127.0.0.1:30000/management/coherence"
    },
    {
      "rel": "self",
      "href": "http://127.0.0.1:30000/management/coherence/cluster/"
    },
    {
      "rel": "canonical",
      "href": "http://127.0.0.1:30000/management/coherence/cluster/"
    },
    {
      "rel": "services",
      "href": "http://127.0.0.1:30000/management/coherence/cluster/services"
    },
    {
      "rel": "caches",
      "href": "http://127.0.0.1:30000/management/coherence/cluster/caches"
    },
    {
      "rel": "members",
      "href": "http://127.0.0.1:30000/management/coherence/cluster/members"
    },
    {
      "rel": "management",
      "href": "http://127.0.0.1:30000/management/coherence/cluster/management"
    },
    {
      "rel": "journal",
      "href": "http://127.0.0.1:30000/management/coherence/cluster/journal"
    },
    {
      "rel": "hotcache",
      "href": "http://127.0.0.1:30000/management/coherence/cluster/hotcache"
    },
    {
      "rel": "reporters",
      "href": "http://127.0.0.1:30000/management/coherence/cluster/reporters"
    },
    {
      "rel": "webApplications",
      "href": "http://127.0.0.1:30000/management/coherence/cluster/webApplications"
    }
  ],
  "clusterSize": 3,
  "membersDeparted": [],
  "memberIds": [
    1,
    2,
    3
  ],
  "oldestMemberId": 1,
  "refreshTime": "2019-10-15T03:55:46.461Z",
  "licenseMode": "Development",
  "localMemberId": 1,
  "version": "14.1.1.0.0",
  "running": true,
  "clusterName": "management-cluster",
  "membersDepartureCount": 0,
  "members": [
    "Member(Id=1, Timestamp=2019-10-15 03:46:15.848, Address=10.1.2.184:36531, MachineId=49519, Location=site:coherence.coherence-test.svc.cluster.local,machine:docker-desktop,process:1,member:management-cluster-1, Role=storage)",
    "Member(Id=2, Timestamp=2019-10-15 03:46:19.405, Address=10.1.2.183:40341, MachineId=49519, Location=site:coherence.coherence-test.svc.cluster.local,machine:docker-desktop,process:1,member:management-cluster-2, Role=storage)",
    "Member(Id=3, Timestamp=2019-10-15 03:46:19.455, Address=10.1.2.185:38719, MachineId=49519, Location=site:coherence.coherence-test.svc.cluster.local,machine:docker-desktop,process:1,member:management-cluster-0, Role=storage)"
  ],
  "type": "Cluster"
}</markup>

</div>

<h3 id="_access_the_swagger_endpoint"><span class="merged" id="all.3qP6rL" title="原文 : Access the Swagger Endpoint">Swaggerエンドポイントへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.2T0axS" title="原文 : Issue the following curl command to access the Sagger endpoint, which documents all the REST API&rsquo;s available.">次の<code>curl</code>コマンドを発行して、使用可能なすべてのREST APIを文書化するSaggerエンドポイントにアクセスします。</span></p>

<markup
lang="bash"

>curl http://127.0.0.1:30000/management/coherence/cluster/metadata-catalog</markup>

<p><span class="merged" id="all.3Vpw6j" title="原文 : Which should result in a response like the following:">次のようなレスポンスになります:</span></p>

<markup
lang="json"

>{
  "swagger": "2.0",
  "info": {
    "title": "RESTful Management Interface for Oracle Coherence MBeans",
    "description": "RESTful Management Interface for Oracle Coherence MBeans",
    "version": "14.1.1.0.0"
  },
  "schemes": [
    "http",
    "https"
  ],
...</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4MQfw" title="原文 : The above output has been truncated due to the large size.">上の出力はサイズが大きいため切り捨てられました。</span></p>
</div>
</div>

<h3 id="_other_rest_resources"><span class="merged" id="all.1UFsij" title="原文 : Other REST Resources">その他のRESTリソース</span></h3>
<div class="section">
<p><span class="merged" id="all.3xjHYH" title="原文 : Management over REST can be used for all Coherence management functions, the same as would be available when using standard MBean access over JMX.">RESTを介した管理は、JMXで標準のMBeanアクセスを使用する場合と同様、すべてのCoherence管理機能に使用できます。</span></p>

<p><span class="merged" id="all.2UUp4o" title="原文 : Please see the Coherence REST API for more information on these features.">これらの機能の詳細は、<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/rest-reference/" id="" target="_blank" >Coherence REST API</a>を参照してください。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1bJ0bA" title="原文 : Connecting JVisualVM to Management over REST"><a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/manage/using-jmx-manage-oracle-coherence.html#GUID-D160B16B-7C1B-4641-AE94-3310DF8082EC" id="" target="_blank" >RESTを介した管理へのJVisualVMの接続</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2NpEqr" title="原文 : Enabling SSL"><router-link @click.native="this.scrollFix('#clusters/058_coherence_management.adoc')" to="#clusters/058_coherence_management.adoc">SSLの有効化</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2KqXXX" title="原文 : Produce and extract a Java Flight Recorder (JFR) file"><a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/rest-reference/op-management-coherence-cluster-members-memberidentifier-diagnostic-cmd-jfrcmd-post.html" id="" target="_blank" >Java Flight Recorder (JFR)ファイルの生成および抽出</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1MT10a" title="原文 : Access the Reporter"><a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/rest-reference/api-reporter.html" id="" target="_blank" >レポータへのアクセス</a></span></p>

</li>
</ul>
</div>
</div>
</doc-view>
