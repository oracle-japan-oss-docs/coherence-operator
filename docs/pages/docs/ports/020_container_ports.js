<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_additional_container_ports"><span class="merged" id="all.4aNyWk" title="原文 : Additional Container Ports">追加コンテナ・ポート</span></h2>
<div class="section">
<p><span class="merged" id="all.16VCRX.spl1" title="原文 : Except for rare cases most applications deployed into a Kubernetes cluster will need to expose ports that they provide services on to other applications.">Kubernetesクラスタにデプロイされるほとんどのアプリケーションは、まれなケースを除き、他のアプリケーションにサービスを提供するポートを公開する必要があります。</span> <span class="merged" id="all.16VCRX.spl2" title="原文 : This is covered in the Kubernetes documentation, Connect Applications with Services">これについては、Kubernetesドキュメント<a href="https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/" id="" target="_blank" >「サービスとのアプリケーションの接続」</a>で説明</span> </p>

<p><span class="merged" id="all.T2lTz.spl1" title="原文 : The Coherence CRD makes it simple to expose ports and configure their services."><code>Coherence</code> CRDを使用すると、ポートの表示とそのサービスの構成が簡単になります。</span> <span class="merged" id="all.T2lTz.spl2" title="原文 : The CRD contains a field named ports, which is an array of named ports.">CRDには、名前付きポートの配列である<code>ports</code>というフィールドが含まれています。</span> <span class="merged" id="all.T2lTz.spl3" title="原文 : In the most basic configuration the only required values are the name and port to expose, for example:">最も基本的な構成では、必要な値は公開する名前とポートのみです。次に例を示します:</span> </p>

<markup
lang="yaml"
title="test-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  ports:
    - name: rest  <span class="conum" data-value="1" />
      port: 8080</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.hUEsl" title="原文 : This example exposes a single port named rest on port 8080.">この例では、ポート<code>8080</code>で<code>rest</code>という名前の単一ポートを公開します。</span></li>
</ul>
<p><span class="merged" id="all.sq64i" title="原文 : When the example above is deployed the Coherence Operator will add configure the ports for the Coherence container in the Pods to expose that port and will also create a Service for the port.">前述の例をデプロイすると、Coherence Operatorは、<code>Pods</code>にCoherenceコンテナのポートを追加してそのポートを公開し、ポートの<code>Service</code>も作成します。</span></p>

<p><span class="merged" id="all.2fS5P" title="原文 : For example, the relevant snippet of the StatefulSet configuration would be:">たとえば、<code>StatefulSet</code>構成の関連するスニペットは次のようになります:</span></p>

<markup
lang="yaml"

>apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: test-cluster
spec:
  template:
    spec:
      containers:
      - name: coherence
        ports:
          - name: rest           <span class="conum" data-value="1" />
            containerPort: 8080  <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2MVJcH.spl1" title="原文 : The Operator has added the rest port to the coherence containers port list.">オペレータは、<code>rest</code>ポートを<code>coherence</code>コンテナ・ポート・リストに追加しました。</span> <span class="merged" id="all.2MVJcH.spl2" title="原文 : The name field in the Coherence CRD’s port spec maps to the name field in the Container port spec."><code>Coherence</code> CRDのポート仕様の<code>name</code>フィールドは、コンテナ・ポート仕様の<code>name</code>フィールドにマップされます。</span> </li>
<li data-value="2"><span class="merged" id="all.3Kvrbg" title="原文 : The port field in the Coherence CRD’s port spec maps to the containerPort in the Container port spec."><code>Coherence</code> CRDのポート仕様の<code>port</code>フィールドは、コンテナ・ポート仕様の<code>containerPort</code>にマップされます。</span></li>
</ul>
<p><span class="merged" id="all.17nxmS.spl1" title="原文 : For each additional port the Operator will create a Service of tyep ClusterIP with a default configuration.">追加ポートごとに、オペレータはデフォルト構成を使用して、tyep <code>ClusterIP</code>の<code>Service</code>を作成します。</span> <span class="merged" id="all.17nxmS.spl2" title="原文 : The name of the service will be the Coherence resource’s name with the port name appended to it, so in this case it will be test-cluster-rest.">サービスの名前は、ポート名が付加された<code>Coherence</code>リソースの名前になるため、この場合、<code>test-cluster-rest</code>になります。</span> <span class="merged" id="all.17nxmS.spl3" title="原文 : The Service might look like this:"><code>Service</code>は次のようになります:</span> </p>

<markup
lang="yaml"

>apiVersion: v1
kind: Service
metadata:
  name: test-cluster-rest                 <span class="conum" data-value="1" />
spec:
  ports:
    - name: rest                          <span class="conum" data-value="2" />
      port: 8080                          <span class="conum" data-value="3" />
      targetPort: rest                    <span class="conum" data-value="4" />
  type: ClusterIP                         <span class="conum" data-value="5" />
  selector:
    coherenceDeployment: test-cluster     <span class="conum" data-value="6" />
    coherenceCluster: test-cluster
    coherenceRole: storage
    coherenceComponent: coherencePod</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1QlHKi" title="原文 : The Service name will be automatically generated (this can be overridden)."><code>Service</code>名は自動的に生成されます(これはオーバーライドできます)。</span></li>
<li data-value="2"><span class="merged" id="all.1cNdu7" title="原文 : The ports section will have just the single port being exposed by this service with the same name as the port."><code>ports</code>セクションには、このサービスによってポートと同じ名前で公開される単一のポートのみが含まれます。</span></li>
<li data-value="3"><span class="merged" id="all.23eWLu" title="原文 : The port exposed by the Service will be the same as the container port value (this can be overridden)."><code>Service</code>によって公開される<code>port</code>は、コンテナ・ポート値と同じになります(これはオーバーライドできます)。</span></li>
<li data-value="4"><span class="merged" id="all.2TpeqO" title="原文 : The target port will be set to the port being exposed from the container.">ターゲット・ポートは、コンテナから公開されるポートに設定されます。</span></li>
<li data-value="5"><span class="merged" id="all.2ZVWu3" title="原文 : The default Service type is ClusterIP (this can be overridden).">デフォルトの<code>Service</code>タイプは<code>ClusterIP</code>です(これはオーバーライドできます)。</span></li>
<li data-value="6"><span class="merged" id="all.2M2E48" title="原文 : A selector will be created to match the Pods in the Coherence resource."><code>Coherence</code>リソースの<code>Pods</code>と一致するようにセレクタが作成されます。</span></li>
</ul>
<p><span class="merged" id="all.2UZr1V" title="原文 : The Coherence CRD spec allows port and service to be further configured and allows a Prometheus ServiceMonitor to be created for the port if that port is to expose metrics."><code>Coherence</code> CRD仕様では、ポートとサービスをさらに構成でき、ポートがメトリクスを公開する場合、そのポートのPrometheus <code>ServiceMonitor</code>を作成できます。</span></p>

<p><span class="merged" id="all.1OsIk7"  title="原文:: See also:">関連項目:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.dfzh0" title="原文 : Configure Services for Ports"><router-link @click.native="this.scrollFix('#ports/030_services.adoc')" to="#ports/030_services.adoc">ポートのサービスの構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.QeuA8" title="原文 : Prometheus ServiceMonitors"><router-link @click.native="this.scrollFix('#ports/040_servicemonitors.adoc')" to="#ports/040_servicemonitors.adoc">Prometheus ServiceMonitors</router-link></span></p>

</li>
</ul>

<h3 id="_metrics_management_ports"><span class="merged" id="all.2ZEgl2" title="原文 : Metrics &amp; Management Ports">メトリクス&amp;管理ポート</span></h3>
<div class="section">
<p><span class="merged" id="all.2z44wn.spl1" title="原文 : Exposing the Coherence metrics port or Coherence Management over REST port are treated as a special case in the configuration.">RESTポートを介したCoherenceメトリクス・ポートまたはCoherence管理の公開は、構成の特殊なケースとして扱われます。</span> <span class="merged" id="all.2z44wn.spl2" title="原文 : Normally both the port’s name and port value are required fields.">通常、ポートの<code>name</code>値と<code>port</code>値の両方が必須フィールドです。</span> <span class="merged" id="all.2z44wn.spl3" title="原文 : If the port name is metrics or management the Operator already knows the port values (either from the defaults or from the metrics or management configuration) so these do not need to be specified again.">ポート名が<code>metrics</code>または<code>management</code>の場合、オペレータはすでに<code>port</code>値(デフォルトまたはメトリクスまたは管理構成のいずれか)を認識しているため、これらを再度指定する必要はありません。</span> </p>

<p><span class="merged" id="all.1RUhOV" title="原文 : For example, if the Coherence resource above also exposed Coherence metrics and management it might look like this:">たとえば、前述の<code>Coherence</code>リソースでもCoherenceメトリクスと管理が公開されている場合、次のようになります:</span></p>

<markup
lang="yaml"
title="test-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  coherence:
    metrics:
      enabled: true
      port: 9876
    management:
      enabled: true
      port: 1234
  ports:
    - name: rest         <span class="conum" data-value="1" />
      port: 8080
    - name: metrics      <span class="conum" data-value="2" />
    - name: management   <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3Tjn1k" title="原文 : The rest port is not a special case and must have a port defined, in this case 8080."><code>rest</code>ポートは特殊なケースではなく、ポートが定義されている必要があります(この場合は<code>8080</code>)。</span></li>
<li data-value="2"><span class="merged" id="all.2z4Dqn" title="原文 : The metrics port is exposed, but the port is not required as the Operator already knows the port value, which is configured in the coherence.metrics section to be 9876."><code>metrics</code>ポートは公開されますが、オペレータはすでにポート値を認識しているため、ポートは不要です。ポート値は、<code>coherence.metrics</code>セクションで構成され、9876になります。</span></li>
<li data-value="3"><span class="merged" id="all.1gVqEX" title="原文 : The management port is exposed, but the port is not required as the Operator already knows the port value, which is configured in the coherence.management section to be 1234."><code>management</code>ポートは公開されますが、オペレータはすでにポート値を認識しているため、ポートは必要ありません。このポートは、<code>coherence.management</code>セクションで構成され、1234になります。</span></li>
</ul>
<p><span class="merged" id="all.4GKPPR" title="原文 : If the port value is not set in coherence.metrics.port or in coherence.management.port then the Operator will use the defaults for these values, 9612 for metrics and 30000 for management.">ポート値が<code>coherence.metrics.port</code>または<code>coherence.management.port</code>に設定されていない場合、オペレータではこれらの値のデフォルト、メトリクスには9612、管理には30000が使用されます。</span></p>

</div>
</div>

<h2 id="_configuring_the_port"><span class="merged" id="all.3rdY6f" title="原文 : Configuring the Port">ポートの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3k6nkj.spl1" title="原文 : The only mandatory fields when adding a port to a Coherence resource are the name and port number."><code>Coherence</code>リソースにポートを追加する場合の必須フィールドは、名前とポート番号のみです。</span> <span class="merged" id="all.3k6nkj.spl2" title="原文 : There are a number of optional fields, which when not specified use the Kubernetes default values.">オプション・フィールドは多数あり、指定しない場合はKubernetesデフォルト値を使用します。</span> </p>

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
      protocol: TCP
      hostIP: 10.10.1.19
      hostPort: 1000
      nodePort: 5000</markup>

<p><span class="merged" id="all.16JABA.spl1" title="原文 : The additional fields, protocol, hostIP, hostPort have the same meaning and same defaults in the Coherence CRD port spec as they have in a Kubernetes container port (see the Kubernetes ContainerPort API reference).">追加のフィールド<code>protocol</code>, <code>hostIP</code>, <code>hostPort</code>は、Kubernetesコンテナ・ポートにあるものと同じ意味およびデフォルトを<code>Coherence</code> CRDポート仕様に指定します(Kubernetes <a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#containerport-v1-core" id="" target="_blank" >ContainerPort</a> APIリファレンスを参照)。</span> <span class="merged" id="all.16JABA.spl2" title="原文 : These fields map directly from the Coherence CRD port spec to the container port spec.">これらのフィールドは、<code>Coherence</code> CRDポート仕様からコンテナ・ポート仕様に直接マップされます。</span> </p>

<p><span class="merged" id="all.2vz1TH" title="原文 : The example above would create a container port shown below:">前述の例では、次に示すコンテナ・ポートが作成されます:</span></p>

<markup
lang="yaml"

>apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: test-cluster
spec:
  template:
    spec:
      containers:
      - name: coherence
        ports:
          - name: rest
            containerPort: 8080
            protocol: TCP
            hostIP: 10.10.1.19
            hostPort: 1000</markup>

<p><span class="merged" id="all.2wp4id.spl1" title="原文 : The nodePort field in the Coherence CRD port spec maps to the nodePort field in the Service port spec."><code>Coherence</code> CRDポート仕様の<code>nodePort</code>フィールドは、<code>Service</code>ポート仕様の<code>nodePort</code>フィールドにマップされます。</span> <span class="merged" id="all.2wp4id.spl2" title="原文 : The nodePort is described in the Kubernetes ServicePort API reference."><code>nodePort</code>については、Kubernetes <a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#serviceport-v1-core" id="" target="_blank" >ServicePort</a> APIリファレンスを参照してください。</span> </p>

<p><span class="merged" id="all.3whYlc" title="原文 : The Coherence CRD example above with nodePort set would create a Service with the same nodePort value:">前述の<code>Coherence</code> CRD前述の<code>nodePort</code>セットの例では、同じ<code>nodePort</code>値を持つ<code>Service</code>が作成されます:</span></p>

<markup
lang="yaml"

>apiVersion: v1
kind: Service
metadata:
  name: test-cluster-rest
spec:
  ports:
    - name: rest
      port: 8080
      targetPort: rest
      nodePort: 5000
  type: ClusterIP
  selector:
    coherenceDeployment: test-cluster
    coherenceCluster: test-cluster
    coherenceRole: storage
    coherenceComponent: coherencePod</markup>

</div>
</doc-view>
