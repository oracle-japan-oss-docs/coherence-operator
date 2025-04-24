<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_configure_services_for_ports"><span class="merged" id="all.1OYhnY" title="原文 : Configure Services for Ports">ポートのサービスの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.tvuys.spl1" title="原文 : As described in the Additional Container Ports documentation, it is possible to expose additional ports on the Coherence container in the Pods of a Coherence resource."><router-link to="/docs/ports/020_container_ports">「追加コンテナ・ポート」</router-link>ドキュメントで説明されているように、<code>Coherence</code>リソースのポッドにCoherenceコンテナに追加のポートを公開できます。</span> <span class="merged" id="all.tvuys.spl2" title="原文 : The Coherence Operator will create a Service to expose each additional port.">Coherence Operatorは、追加の各ポートを公開する<code>Service</code>を作成します。</span> <span class="merged" id="all.tvuys.spl3" title="原文 : By default, the name of the service is the combination of the Coherence resource name and the port name (this can default behaviour can be overridden as shown below in the section).">デフォルトでは、サービスの名前は<code>Coherence</code>リソース名とポート名の組合せです(これは、<router-link @click.native="this.scrollFix('#_override_the_service_name')" to="#_override_the_service_name"></router-link>セクションの次に示すように、デフォルトの動作をオーバーライドできます)。</span> <span class="merged" id="all.tvuys.spl4" title="原文 : The configuration of the Service can be altered using fields in the port spec’s service section."><code>Service</code>の構成は、ポート仕様の<code>service</code>セクションのフィールドを使用して変更できます。</span> </p>

<p><span class="merged" id="all.6vDv5.32"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"
title="test-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  ports:
    - name: rest   <span class="conum" data-value="1" />
      port: 8080
      service: {}  <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.hUEsl.1" title="原文 : This example exposes a single port named rest on port 8080.">この例では、ポート<code>8080</code>で<code>rest</code>という名前の単一ポートを公開します。</span></li>
<li data-value="2"><span class="merged" id="all.2uubdX" title="原文 : The service section of the port spec is empty so the Operator will use its default behaviour to create a Service in the same namespace with the name test-cluster-rest.">ポート仕様の<code>service</code>セクションは空であるため、オペレータはデフォルトの動作を使用して、<code>test-cluster-rest</code>という名前の同じネームスペースに<code>Service</code>を作成します。</span></li>
</ul>
</div>

<h2 id="_override_the_service_name"><span class="merged" id="all.1kQm6H" title="原文 : Override the Service Name">サービス名のオーバーライド</span></h2>
<div class="section">
<p><span class="merged" id="all.3qw4fY.spl1" title="原文 : Sometimes it is useful to use a different name than the default for a Service for a port, for example, when the port is exposing functionality that other applications want to consume on a fixed well know endpoint.">ポートの<code>Service</code>のデフォルトとは異なる名前を使用すると便利な場合があります。たとえば、ポートが固定の正常な認識エンドポイントで他のアプリケーションが使用する機能を公開している場合などです。</span> <span class="merged" id="all.3qw4fY.spl2" title="原文 : To override the generated service name with another name the service.name field can be set.">生成されたサービス名を別の名前でオーバーライドするには、<code>service.name</code>フィールドを設定できます。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  ports:
    - name: rest
      port: 8080
      service:
        name: payments  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.47hXCo" title="原文 : By setting the service.name field the Service for this port will be named payments."><code>service.name</code>フィールドを設定すると、このポートの<code>Service</code>の名前は<code>payments</code>になります。</span></li>
</ul>
<p><span class="merged" id="all.1KoARg" title="原文 : The service for the above example would look like this:">前述の例のサービスは次のようになります:</span></p>

<markup
lang="yaml"

>apiVersion: v1
kind: Service
metadata:
  name: payments  <span class="conum" data-value="1" />
spec:
  ports:
    - name: rest
      port: 8080
      targetPort: rest
  type: ClusterIP
  selector:
    coherenceDeployment: test-cluster
    coherenceCluster: test-cluster
    coherenceRole: storage
    coherenceComponent: coherencePod</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.xfdIZ" title="原文 : The Service name is payments instead of test-cluster-rest"><code>Service</code>名は、<code>test-cluster-rest</code>ではなく<code>payments</code>です</span></li>
</ul>
</div>

<h2 id="_override_the_service_port"><span class="merged" id="all.1D9tJX" title="原文 : Override the Service Port">サービス・ポートのオーバーライド</span></h2>
<div class="section">
<p><span class="merged" id="all.1WS89L.spl1" title="原文 : It is sometimes useful to be able to expose a service on a different port on the Service to that being used by the container.">サービスを<code>Service</code>上の別のポートに、コンテナで使用されているポートに公開できる場合があります。</span> <span class="merged" id="all.1WS89L.spl2" title="原文 : One use-case for this would be where the Coherence deployment is providing a http service where the container exposes the service on port 8080 whereas the Service can use port 80.">このユースケースの1つは、<code>Coherence</code>デプロイメントがhttpサービスを提供しており、コンテナはポート<code>8080</code>でサービスを公開しますが、<code>Service</code>はポート<code>80</code>を使用できます。</span> </p>

<p><span class="merged" id="all.2xSMYS" title="原文 : For example, using the same example payemnts service above:">たとえば、前述の同じpayemntsサービスを使用します:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  ports:
    - name: rest
      port: 8080
      service:
        name: payments  <span class="conum" data-value="1" />
        port: 80        <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.47Dlpw" title="原文 : The Service name will be payments"><code>Service</code>名は<code>payments</code>になります</span></li>
<li data-value="2"><span class="merged" id="all.4DBgFk" title="原文 : The Service port will be 80"><code>Service</code>ポートは<code>80</code>になります</span></li>
</ul>
<p><span class="merged" id="all.43BRRe" title="原文 : This then allows the payments service to be accessed on a simple url of http://payments">これにより、<code><a href="http://payments" id="" target="_blank" >http://payments</a></code>の単純なURLで支払サービスにアクセスできるようになります</span></p>

</div>

<h2 id="_disable_service_creation"><span class="merged" id="all.2tfjWw" title="原文 : Disable Service Creation">サービス作成の無効化</span></h2>
<div class="section">
<p><span class="merged" id="all.2tGmOf.spl1" title="原文 : Sometimes it may be desirable to expose a port on the Coherence container but not have the Operator automatically create a Service to expose the port.">Coherenceコンテナにポートを公開するが、オペレータがポートを公開するための<code>Service</code>を自動的に作成しないことが望ましい場合があります。</span> <span class="merged" id="all.2tGmOf.spl2" title="原文 : For example, maybe the port is to be exposed via some other load balancer service controlled by another system.">たとえば、別のシステムで制御される他のロード・バランサ・サービスを介してポートが公開される場合があります。</span> <span class="merged" id="all.2tGmOf.spl3" title="原文 : To disable automatic service creation set the service.enabled field to false.">自動サービス作成を無効にするには、<code>service.enabled</code>フィールドを<code>false</code>に設定します。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  ports:
    - name: rest
      port: 8080
      service:
        enabled: false  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4NJ9lE" title="原文 : With the service.enabled field set to false no Service will be created."><code>service.enabled</code>フィールドを<code>false</code>に設定すると、<code>Service</code>は作成されません。</span></li>
</ul>
</div>

<h2 id="_other_service_configuration"><span class="merged" id="all.3QUaYP" title="原文 : Other Service Configuration">その他のサービス構成</span></h2>
<div class="section">
<p><span class="merged" id="all.481XJl.spl1" title="原文 : The Coherence resource CRD allows many other settings to be configured on the Service."><code>Coherence</code>リソースのCRDを使用すると、他の多くの設定を<code>Service</code>で構成できます。</span> <span class="merged" id="all.481XJl.spl2" title="原文 : These fields are identical to the corresponding fields in the Kubernetes Service spec.">これらのフィールドは、Kubernetes <code>Service</code>仕様の対応するフィールドと同じです。</span> </p>

<p><span class="merged" id="all.kzS7h" title="原文 : See the Coherence CRD Service Spec documentation and the Kubernetes Service API reference."><code>Coherence</code> CRD <router-link @click.native="this.scrollFix('#_servicespec')" to="#_servicespec">「サービス仕様」</router-link>ドキュメントおよびKubernetes <a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/${k8s-doc-version}/#servicespec-v1-core" id="" target="_blank" >「Service APIリファレンス」</a>を参照してください。</span></p>

</div>
</doc-view>
