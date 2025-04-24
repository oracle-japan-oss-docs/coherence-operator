<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_dual_stack_networking"><span class="merged" id="all.1YFneH" title="原文 : Dual Stack Networking">デュアル・スタック・ネットワーキング</span></h2>
<div class="section">
<p><span class="merged" id="all.G7M8G" title="原文 : This section describes using Coherence and the Operator with a dual stack Kubernetes cluster, where Pods and Services can have both IPv4 and IPv6 interfaces.">この項では、デュアル・スタックKubernetesクラスタでのCoherenceおよびオペレータの使用について説明します。このクラスタでは、ポッドとサービスはIPv4インタフェースとIPv6インタフェースの両方を持つことができます。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.19"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.Elx8H.spl1" title="原文 : This section only really applies to making Coherence bind to the correct local IP address for inter-cluster communication.">この項は、クラスタ間通信の正しいローカルIPアドレスにCoherenceをバインドする場合にのみ実際に適用されます。</span> <span class="merged" id="all.Elx8H.spl2" title="原文 : Normally for other Coherence endpoints, such as Extend, gRPC, management, metrics, etc. Coherence will bind to all local addresses ubless specifically configured otherwise.">通常、Extend、gRPC、管理、メトリクスなど、他のCoherenceエンドポイントの場合、Coherenceは、特にそれ以外の場合に構成されていないかぎり、すべてのローカル・アドレスにバインドされます。</span> <span class="merged" id="all.Elx8H.spl3" title="原文 : This means that in and environment such as dual-stack Kubernetes where a Pod has both an IPv4 and IPv6 address, those Coherence endpoints will be reachable using either the IPv4 or IPv6 address of the Pod.">つまり、ポッドにIPv4アドレスとIPv6アドレスの両方があるデュアル・スタックKubernetesなどの環境では、それらのCoherenceエンドポイントはポッドのIPv4アドレスまたはIPv6アドレスのいずれかを使用して到達可能になります。</span> </p>
</p>
</div>
<p><span class="merged" id="all.1BaAee.spl1" title="原文 : Normally, using Coherence on a dual-stack server can cause issues due to the way that Coherence decides which local IP address to use for inter-cluster communication.">通常、デュアル・スタック・サーバー上でCoherenceを使用すると、Coherenceがクラスタ間通信に使用するローカルIPアドレスを決定する方法によって問題が発生する可能性があります。</span> <span class="merged" id="all.1BaAee.spl2" title="原文 : Similar problems can occur on any server that multiple IP addresses.">複数のIPアドレスを持つサーバーでも同様の問題が発生する可能性があります。</span> <span class="merged" id="all.1BaAee.spl3" title="原文 : When Coherence is configured to use well known addressing for cluster discovery, a Coherence JVM will choose a local address that is either in the WKA list, or is on an interface that can route to the WKA addresses.">Coherenceが、クラスタ検出に既知のアドレス指定を使用するように構成されている場合、Coherence JVMは、WKAリストにあるローカル・アドレス、またはWKAアドレスにルーティングできるインタフェース上にあるローカル・アドレスを選択します。</span> <span class="merged" id="all.1BaAee.spl4" title="原文 : In a dual stack environment the problem comes when an interface has both IPv4 and IPv6 addresses and Coherence is inconsistent about which one to choose.">デュアル・スタック環境では、インタフェースにIPv4アドレスとIPv6アドレスの両方があり、Coherenceがどのアドレスを選択するかについて一貫性がない場合に問題が発生します。</span> </p>

<p><span class="merged" id="all.2B23Km" title="原文 : There are a few simple ways to fix this:">これを修正するには、いくつかの簡単な方法があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1xv7xt.spl1" title="原文 : Set the JVM system property java.net.preferIPv4Stack=true or java.net.preferIPv6Addresses=true to set the Coherence JVM to use the desired stack.">JVMシステム・プロパティ<code>java.net.preferIPv4Stack=true</code>または<code>java.net.preferIPv6Addresses=true</code>を設定して、目的のスタックを使用するようにCoherence JVMを設定します。</span> <span class="merged" id="all.1xv7xt.spl2" title="原文 : If application code requires both stacks to be available though, this is not a good option.">ただし、アプリケーション・コードで両方のスタックが使用可能であることが必要な場合、これは適切なオプションではありません。</span> </p>

</li>
<li>
<p><span class="merged" id="all.1OSZeJ.spl1" title="原文 : Configure the WKA list to be only IPv4 addresses or IPv6 addresses.">WKAリストがIPv4アドレスまたはIPv6アドレスのみになるように構成します。</span> <span class="merged" id="all.1OSZeJ.spl2" title="原文 : Coherence will then choose a matching local address.">Coherenceは、一致するローカル・アドレスを選択します。</span> </p>

</li>
<li>
<p><span class="merged" id="all.3jaIwp.spl1" title="原文 : Set the coherence.localhost system property (or COHERENCE_LOCALHOST environment variable) to the IP address that Coherence should bind to."><code>coherence.localhost</code>システム・プロパティ(または<code>COHERENCE_LOCALHOST</code>環境変数)を、CoherenceがバインドするIPアドレスに設定します。</span> <span class="merged" id="all.3jaIwp.spl2" title="原文 : In a dual stack environment choose either the IPv4 address or IPv6 address and make sure that the corresponding addresses are used in the WKA list.">デュアル・スタック環境では、IPv4アドレスまたはIPv6アドレスのいずれかを選択し、対応するアドレスがWKAリストで使用されていることを確認します。</span> </p>

</li>
</ul>

<h3 id="_dual_stack_kubernetes_clusters"><span class="merged" id="all.2Acq6L" title="原文 : Dual Stack Kubernetes Clusters">デュアル・スタックKubernetesクラスタ</span></h3>
<div class="section">
<p><span class="merged" id="all.3YHsxh.spl1" title="原文 : In a dual-stack Kubernetes cluster, Pods will have both an IPv4 and IPv6 address.">デュアル・スタックKubernetesクラスタでは、ポッドはIPv4とIPv6の両方のアドレスを持ちます。</span> <span class="merged" id="all.3YHsxh.spl2" title="原文 : These can be seen by looking at the status section of a Pod spec:">これらは、ポッド仕様のステータス・セクションを参照することで確認できます:</span> </p>

<markup
lang="yaml"

>  podIP: 10.244.3.3
  podIPs:
  - ip: 10.244.3.3
  - ip: fd00:10:244:3::3</markup>

<p><span class="merged" id="all.bfG7H.spl1" title="原文 : The status section will have a podIP field, which is the Pods primary address.">ステータス・セクションには、ポッドのプライマリ・アドレスである<code>podIP</code>フィールドがあります。</span> <span class="merged" id="all.bfG7H.spl2" title="原文 : There is also an array of the dual-stack addresses in the podIPs field."><code>podIPs</code>フィールドには、デュアル・スタック・アドレスの配列もあります。</span> <span class="merged" id="all.bfG7H.spl3" title="原文 : The first address in podIPs is always the same as podIP and is usually the IPv4 address."><code>podIPs</code>の最初のアドレスは、常に<code>podIP</code>と同じであり、通常はIPv4アドレスです。</span> </p>

<p><span class="merged" id="all.3ufmQS.spl1" title="原文 : A Service in a dual-stack cluster can have a single IP family or multiple IP families configured in its spec.">デュアル・スタック・クラスタ内のサービスは、単一のIPファミリまたは複数のIPファミリをその仕様に構成できます。</span> <span class="merged" id="all.3ufmQS.spl2" title="原文 : The Operator will work out of the box if the default IP families configuration for Services is single stack, either IPv4 or IPv6.">サービスのデフォルトのIPファミリ構成がシングル・スタック(IPv4またはIPv6)の場合、オペレータはすぐに使用できます。</span> <span class="merged" id="all.3ufmQS.spl3" title="原文 : When the WKA Service is created it will only be populated with one type of address, and Coherence will bind to the correct type.">WKAサービスが作成されると、1つのタイプのアドレスのみが移入され、Coherenceは正しいタイプにバインドされます。</span> </p>

<p><span class="merged" id="all.5Sdi4" title="原文 : In Kubernetes clusters where the WKA service has multiple IP families by default, there are a few options to fix this:">WKAサービスにデフォルトで複数のIPファミリがあるKubernetesクラスタでは、これを修正するためのオプションがいくつかあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1xv7xt.1.spl1" title="原文 : Set the JVM system property java.net.preferIPv4Stack=true or java.net.preferIPv6Addresses=true to set the Coherence JVM to use the desired stack.">JVMシステム・プロパティ<code>java.net.preferIPv4Stack=true</code>または<code>java.net.preferIPv6Addresses=true</code>を設定して、目的のスタックを使用するようにCoherence JVMを設定します。</span> <span class="merged" id="all.1xv7xt.1.spl2" title="原文 : If application code requires both stacks to be available though, this is not a good option.">ただし、アプリケーション・コードで両方のスタックが使用可能であることが必要な場合、これは適切なオプションではありません。</span> </p>

</li>
</ul>
<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  jvm:
    args:
      - "java.net.preferIPv4Stack=true"</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4WvJqN.spl1" title="原文 : The COHERENCE_LOCALHOST environment variable can be configured to be the Pods IP address."><code>COHERENCE_LOCALHOST</code>環境変数は、ポッドIPアドレスとして構成できます。</span> <span class="merged" id="all.4WvJqN.spl2" title="原文 : Typically, this will be the IPv4 address.">通常、これはIPv4アドレスになります。</span> </p>

</li>
</ul>
<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  env:
    - name: COHERENCE_LOCALHOST
      valueFrom:
        fieldRef:
          apiVersion: v1
          fieldPath: status.podIP</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2TRFlp.spl1" title="原文 : Since Operator 3.5.0 it is possible to configure the IP family for the WKA Service.">オペレータ3.5.0は、WKAサービスのIPファミリを構成できます。</span> <span class="merged" id="all.2TRFlp.spl2" title="原文 : The spec.coherence.wka.ipFamily field can be set to either &quot;IPv4&quot; or &quot;IPv6&quot;."><code>spec.coherence.wka.ipFamily</code>フィールドは、IPv4またはIPv6のいずれかに設定できます。</span> <span class="merged" id="all.2TRFlp.spl3" title="原文 : This will cause Coherence to bind to the relevant IP address type.">これにより、Coherenceが関連するIPアドレス・タイプにバインドされます。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.68c1O" title="原文 : For example, the yaml below will cause Coherence to bind to the IPv6 address.">たとえば、次のyamlでは、CoherenceがIPv6アドレスにバインドされます。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  coherence:
    wka:
      ipFamily: IPv6</markup>

<p><span class="merged" id="all.3XZETE" title="原文 : Since Operator 3.5.0 it is also possible to configure the IP families used by the headless service created for the StatefulSet if this is required.">オペレータ3.5.0は、StatefulSet用に作成されたヘッドレス・サービスで使用されるIPファミリを構成することもできます(必要な場合)。</span></p>

<p><span class="merged" id="all.QZzKe" title="原文 : The yaml below will configure WKA to use only IPv6, the headless Service created for the StatefulSet will be a dual-stack, IPv4 and IPv6 service.">次のyamlは、IPv6のみを使用するようにWKAを構成します。StatefulSet用に作成されたヘッドレス・サービスは、デュアル・スタック、IPv4およびIPv6サービスになります。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  headlessServiceIpFamilies:
    - IPv4
    - IPv6
  coherence:
    wka:
      ipFamily: IPv6</markup>

<p><span class="merged" id="all.4XN0g2" title="原文 : The yaml below will configure both WKA and the headless Service created for the StatefulSet to use a single stack IPv6.">次のyamlでは、単一のスタックIPv6を使用するように、StatefulSet用に作成されたWKAとヘッドレス・サービスの両方を構成します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  headlessServiceIpFamilies:
    - IPv6
  coherence:
    wka:
      ipFamily: IPv6</markup>

</div>

<h3 id="_dual_stack_kubernetes_clusters_without_using_the_operator"><span class="merged" id="all.2e47EI" title="原文 : Dual Stack Kubernetes Clusters Without Using the Operator">オペレータを使用しないデュアル・スタックKubernetesクラスタ</span></h3>
<div class="section">
<p><span class="merged" id="all.UHCt1" title="原文 : If not using the Coherence Operator to manage clusters the same techniques described above can be used to manually configure Coherence to work correctly.">Coherence Operatorを使用してクラスタを管理しない場合は、前述と同じ方法を使用して、Coherenceを正しく動作するように手動で構成できます。</span></p>

<p><span class="merged" id="all.3VCH3C.spl1" title="原文 : The simplest option is to ensure that the headless service used for well known addressing is configured to be single stack.">もっとも簡単なオプションは、既知のアドレス指定に使用されるヘッドレス・サービスがシングル・スタックになるように構成されるようにすることです。</span> <span class="merged" id="all.3VCH3C.spl2" title="原文 : For example, the yaml below configures the service storage-sts to be a single stack IPv6 service.">たとえば、次のyamlは、サービス<code>storage-sts</code>を単一のスタックIPv6サービスとして構成します。</span> </p>

<markup
lang="yaml"

>apiVersion: v1
kind: Service
metadata:
  name: storage-sts
spec:
  clusterIP: None
  clusterIPs:
  - None
  ipFamilies:
  - IPv6
  ipFamilyPolicy: SingleStack</markup>

<p><span class="merged" id="all.4YsPk4" title="原文 : If for some reason it is not possible to ise a dedicated single stack service for WKA, then the COHERENCE_LOCALHOST environment variable can be set in the Pod to be the Pod IP address.">なんらかの理由でWKA専用のシングル・スタック・サービスをiseできない場合、ポッドで<code>COHERENCE_LOCALHOST</code>環境変数をポッドIPアドレスに設定できます。</span></p>

<markup
lang="yaml"

>apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: storage
spec:
  template:
    spec:
      containers:
        - name: coherence
          env:
            - name: COHERENCE_LOCALHOST
              valueFrom:
                fieldRef:
                  apiVersion: v1
                  fieldPath: status.podIP</markup>

</div>
</div>
</doc-view>
