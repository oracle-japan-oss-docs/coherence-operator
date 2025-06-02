<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_using_network_policies"><span class="merged" id="all.3HggH2" title="原文 : Using Network Policies">ネットワーク・ポリシーの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3qAAFk.spl1" title="原文 : This example covers running the Coherence Operator and Coherence clusters in Kubernetes with network policies.">この例では、ネットワーク・ポリシーを使用してKubernetesでCoherence OperatorおよびCoherenceクラスタを実行する方法について説明します。</span> <span class="merged" id="all.3qAAFk.spl2" title="原文 : In Kubernetes, a Network Policy is an application-centric construct which allow you to specify how a pod is allowed to communicate with various network &quot;entities&quot; (we use the word &quot;entity&quot; here to avoid overloading the more common terms such as &quot;endpoints&quot; and &quot;services&quot;, which have specific Kubernetes connotations) over the network.">Kubernetesでは、<a href="https://kubernetes.io/docs/concepts/services-networking/network-policies/" id="" target="_blank" >「ネットワーク・ポリシー」</a>はアプリケーション中心のコンストラクトであり、これによって、ポッドが様々なネットワーク・エンティティと通信する方法を指定できます(ここでは「エンティティ」という語を使用して、特定のKubernetes接続を持つ「エンドポイント」や「サービス」より一般的な用語のオーバーロードを回避します)。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.25"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3hLfz5.spl1" title="原文 : Network policies in Kubernetes are easy to get wrong if you are not careful.">注意しないと、Kubernetesのネットワーク・ポリシーが間違ってしまうことがよくあります。</span> <span class="merged" id="all.3hLfz5.spl2" title="原文 : In this case a policy will either block traffic it should not, in which case your application will not work, or it will let traffic through it should block, which will be an invisible security hole.">この場合、ポリシーによってトラフィックがブロックされる(この場合、アプリケーションが動作しない)か、ポリシーによってトラフィックがブロックされる(不可視のセキュリティ・ホールになる)かのいずれかになります。</span> </p>

<p><span class="merged" id="all.363qVI" title="原文 : It is obviously important to test your policies, but Kubernetes offers next to zero visibility into what the policies are actually doing, as it is typically the network CNI extensions that are providing the policy implementation and each of these may work in a different way.">ポリシーをテストすることは明らかに重要ですが、Kubernetesは、ポリシー実装を提供しているネットワークCNI拡張機能であり、これらのそれぞれが異なる方法で機能する可能性があるため、ポリシーが実際に行っていることはゼロの可視性に近くなります。</span></p>
</p>
</div>

<h3 id="_introduction"><span class="merged" id="all.4LJMHk"  title="原文:: Introduction">導入</span></h3>
<div class="section">
<p><span class="merged" id="all.3dATRc.spl1" title="原文 : Kubernetes network policies specify the access permissions for groups of pods, similar to security groups in the cloud are used to control access to VM instances and similar to firewalls.">Kubernetesネットワーク・ポリシーでは、ポッド・グループのアクセス権限を指定します。これは、クラウド内のセキュリティ・グループと同様で、VMインスタンスへのアクセスを制御するために使用され、ファイアウォールと同様です。</span> <span class="merged" id="all.3dATRc.spl2" title="原文 : The default behaviour of a Kubernetes cluster is to allow all Pods to freely talk to each other.">Kubernetesクラスタのデフォルト動作は、すべてのポッドが相互に自由に通信できるようにすることです。</span> <span class="merged" id="all.3dATRc.spl3" title="原文 : Whilst this sounds insecure, originally Kubernetes was designed to orchestrate services that communicated with each other, it was only later that network policies were added.">この音は安全ではありませんが、当初、Kubernetesは相互に通信するサービスを調整するように設計されていましたが、ネットワーク・ポリシーが追加されたのは後ほどでした。</span> </p>

<p><span class="merged" id="all.1UDcSJ.spl1" title="原文 : A network policy is applied to a Kubernetes namespace and controls ingress into and egress out of Pods in that namespace.">ネットワーク・ポリシーはKubernetesネームスペースに適用され、そのネームスペースのポッドへのイングレスおよびポッドからのエグレスを制御します。</span> <span class="merged" id="all.1UDcSJ.spl2" title="原文 : The ports specified in a NetworkPolicy are the ports exposed by the Pods, they are not any ports that may be exposed by any Service that exposes the Pod ports."><code>NetworkPolicy</code>で指定されたポートは、<code>Pods</code>によって公開されるポートであり、<code>Pod</code>ポートを公開する<code>Service</code>によって公開されるポートではありません。</span> <span class="merged" id="all.1UDcSJ.spl3" title="原文 : For example, if a Pod exposed port 8080 and a Service exposing the Pod mapped port 80 in the Service to port 8080 in the Pod, the NetworkPolicy ingress rule would be for the Pod port 8080.">たとえば、<code>Pod</code>がポート8080を公開し、<code>Service</code>の<code>Pod</code>マップされたポート80を<code>Pod</code>のポート<code>8080</code>に公開する<code>Service</code>の場合、<code>NetworkPolicy</code>イングレス・ルールは<code>Pod</code>ポート8080用です。</span> </p>

<p><span class="merged" id="all.9Q42x.spl1" title="原文 : Network polices would typically end up being dictated by corporate security standards where different companies may apply stricter or looser rules than others.">ネットワーク・ポリシーは通常、企業のセキュリティ標準によって決定され、様々な会社が他社より厳格なルールや緩やかなルールを適用する可能性があります。</span> <span class="merged" id="all.9Q42x.spl2" title="原文 : The examples in this document start from the premise that everything will be blocked by a &quot;deny all&quot; policy and then opened up as needed.">このドキュメントの例では、すべてが「すべて拒否」ポリシーによってブロックされ、必要に応じて開くという前提から開始されています。</span> <span class="merged" id="all.9Q42x.spl3" title="原文 : This is the most secure use of network policies, and hence the examples can easily be tweaked if looser rules are applied.">これはネットワーク・ポリシーの最も安全な使用であるため、緩やかなルールを適用すると簡単に例を微調整できます。</span> </p>

<p><span class="merged" id="all.4DGEvS" title="原文 : This example has the following sections:">この例の内容は、次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1uFwDS" title="原文 : Deny All Policy - denying all ingress and egress"><router-link @click.native="this.scrollFix('#deny')" to="#deny">「すべてのポリシーを拒否」</router-link> - すべてのイングレスとエグレスを拒否</span></p>

</li>
<li>
<p><span class="merged" id="all.NGAUn" title="原文 : Allow DNS - almost every use case will require egress to DNS"><router-link @click.native="this.scrollFix('#dns')" to="#dns">「DNSを許可」</router-link> - ほぼすべてのユース・ケースでDNSへのエグレスが必要になる</span></p>

</li>
<li>
<p><span class="merged" id="all.2qofFf" title="原文 : Coherence Operator Policies - the network policies required to run the Coherence Operator"><router-link @click.native="this.scrollFix('#operator')" to="#operator">「Coherence Operatorポリシー」</router-link> - Coherence Operatorの実行に必要なネットワーク・ポリシー</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.kbAcW" title="原文 : Kubernetes API Server - allow the Operator egress to the Kubernetes API server"><router-link @click.native="this.scrollFix('#k8sapi')" to="#k8sapi">「Kubernetes APIサーバー」</router-link> - Kubernetes APIサーバーへのオペレータ・エグレスを許可</span></p>

</li>
<li>
<p><span class="merged" id="all.1VLwOl" title="原文 : Coherence Clusters Pods - allow the Operator egress to the Coherence cluster Pods"><router-link @click.native="this.scrollFix('#cluster-access')" to="#cluster-access">「Coherenceクラスタ・ポッド」</router-link> - オペレータをCoherenceクラスタ・ポッドにエグレスできるようにします</span></p>

</li>
<li>
<p><span class="merged" id="all.17KIYo" title="原文 : Web Hooks - allow ingress to the Operator’s web hook port"><router-link @click.native="this.scrollFix('#webhook')" to="#webhook">「Webフック」</router-link> - オペレータwebフック・ポートへのイングレスを許可</span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.4XvjDE" title="原文 : Coherence Cluster Policies - the network policies required to run Coherence clusters"><router-link @click.native="this.scrollFix('#coherence')" to="#coherence">「Coherenceクラスタ・ポリシー」</router-link> - Coherenceクラスタの実行に必要なネットワーク・ポリシー</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.4WTbAW" title="原文 : Inter-Cluster Access - allow Coherence cluster Pods to communicate"><router-link @click.native="this.scrollFix('#inter-cluster')" to="#inter-cluster">「クラスタ間アクセス」</router-link> -Coherenceクラスタ・ポッドの通信を許可</span></p>

</li>
<li>
<p><span class="merged" id="all.2Eqf2v" title="原文 : Coherence Operator - allow Coherence cluster Pods to communicate with the Operator"><router-link @click.native="this.scrollFix('#cluster-to-operator')" to="#cluster-to-operator">Coherence Operator</router-link> - Coherenceクラスタ・ポッドがオペレータと通信することを許可</span></p>

</li>
<li>
<p><span class="merged" id="all.4OQSLs" title="原文 : Clients - allows access by Extend and gRPC clients"><router-link @click.native="this.scrollFix('#client')" to="#client">「クライアント」</router-link> - ExtendおよびgRPCクライアントによるアクセスを許可</span></p>

</li>
<li>
<p><span class="merged" id="all.3EB0Ri" title="原文 : Metrics - allow Coherence cluster member metrics to be scraped"><router-link @click.native="this.scrollFix('#metrics')" to="#metrics">「メトリクス」</router-link> - Coherenceクラスタ・メンバー・メトリクスの廃棄を許可</span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.1I4CD8" title="原文 : Testing Connectivity - using the Operator’s network connectivity test utility to test policies"><router-link @click.native="this.scrollFix('#testing')" to="#testing">「接続のテスト」</router-link> - オペレータのネットワーク接続テスト・ユーティリティを使用したポリシーのテスト</span></p>

</li>
</ul>

<h4 id="deny"><span class="merged" id="all.2fDxx6" title="原文 : Deny All Policy">すべてのポリシーを拒否</span></h4>
<div class="section">
<p><span class="merged" id="all.3kTyIh.spl1" title="原文 : Kubernetes does not have a “deny all” policy, but this can be achieved with a regular network policy that specifies a policyTypes of both &apos;Ingress` and Egress but omits any definitions.">Kubernetesには"deny all"ポリシーはありませんが、これは'Ingress`と<code>Egress</code>の両方の<code>policyTypes</code>を指定する通常のネットワーク・ポリシーで実現できますが、定義は省略できます。</span> <span class="merged" id="all.3kTyIh.spl2" title="原文 : A wild-card podSelector: {} applies the policy to all Pods in the namespace.">ワイルドカード<code>podSelector: {}</code>は、ネームスペース内のすべてのポッドにポリシーを適用します。</span> </p>

<markup
lang="yaml"
title="manifests/deny-all.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}
  policyTypes:
    - Ingress
    - Egress
  ingress: []
  egress: []</markup>

<p><span class="merged" id="all.2X5nny" title="原文 : The policy above can be installed into the coherence namespace with the following command:">前述のポリシーは、次のコマンドを使用して<code>coherence</code>ネームスペースにインストールできます:</span></p>

<markup
lang="bash"

>kubectl -n coherence apply -f manifests/deny-all.yaml</markup>

<p><span class="merged" id="all.4P4BeP.spl1" title="原文 : After installing the deny-all policy, any Pod in the coherence namespace will not be allowed either ingress, nor egress."><code>deny-all</code>ポリシーのインストール後、<code>coherence</code>ネームスペース内の<code>Pod</code>は、イングレスもエグレスも許可されません。</span> <span class="merged" id="all.4P4BeP.spl2" title="原文 : Very secure, but probably impractical for almost all use cases.">非常に安全ですが、ほとんどすべてのユース・ケースでは実用的ではありません。</span> <span class="merged" id="all.4P4BeP.spl3" title="原文 : After applying the deny-all policy more polices can be added to gradually open up the required access to run the Coherence Operator and Coherence clusters."><code>deny-all</code>ポリシーの適用後、Coherence OperatorおよびCoherenceクラスタを実行するために必要なアクセスを徐々にオープンするために、より多くのポリシーを追加できます。</span> </p>

</div>

<h4 id="dns"><span class="merged" id="all.XtxOa" title="原文 : Allow DNS">DNSを許可</span></h4>
<div class="section">
<p><span class="merged" id="all.2jHeTN" title="原文 : When enforcing egress, such as with the deny-all policy above, it is important to remember that virtually every Pod needs to communicate with other Pods or Services, and will therefore need to access DNS.">上記の<code>deny-all</code>ポリシーなどでエグレスを適用する場合は、事実上すべてのポッドが他のポッドまたはサービスと通信する必要があるため、DNSにアクセスする必要があることに注意してください。</span></p>

<p><span class="merged" id="all.3yD9h3" title="原文 : The policy below allows all Pods (using podSelector: {}) egress to both TCP and UDP on port 53 in all namespaces.">次のポリシーは、すべてのネームスペースのポート53でTCPとUDPの両方に対して(<code>podSelector: {}</code>を使用して)すべてのポッド・エグレスを許可します。</span></p>

<markup
lang="yaml"
title="manifests/allow-dns.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-dns
spec:
  podSelector: { }
  policyTypes:
    - Egress
  egress:
    - to:
        - namespaceSelector: { }
      ports:
        - protocol: UDP
          port: 53
#        - protocol: TCP
#          port: 53</markup>

<p><span class="merged" id="all.34zCyk.spl1" title="原文 : If allowing DNS egress to all namespaces is overly permissive, DNS could be further restricted to just the kube-system namespace, therefore restricting DNS lookups to only Kubernetes internal DNS.">すべてのネームスペースへのDNSエグレスの許可が過度に許容される場合、DNSは<code>kube-system</code>ネームスペースのみにさらに制限できるため、DNSルックアップはKubernetes内部DNSのみに制限されます。</span> <span class="merged" id="all.34zCyk.spl2" title="原文 : Kubernetes applies the kubernetes.io/metadata.name label to namespaces, and sets its value to the namespace name, so this can be used in label matchers.">Kubernetesは、ネームスペースに<code>kubernetes.io/metadata.name</code>ラベルを適用し、その値をネームスペース名に設定して、ラベル・マッチャで使用できます。</span> </p>

<p><span class="merged" id="all.3dzfE7" title="原文 : With the policy below, Pods will be able to use internal Kubernetes DNS only.">次のポリシーでは、ポッドは内部のKubernetes DNSのみを使用できます。</span></p>

<markup
lang="yaml"
title="manifests/allow-dns-kube-system.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-dns
spec:
  podSelector: { }
  policyTypes:
    - Egress
  egress:
    - to:
        - namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: kube-system
      ports:
        - protocol: UDP
          port: 53
#        - protocol: TCP
#          port: 53</markup>

<p><span class="merged" id="all.2X5nny.1" title="原文 : The policy above can be installed into the coherence namespace with the following command:">前述のポリシーは、次のコマンドを使用して<code>coherence</code>ネームスペースにインストールできます:</span></p>

<markup
lang="bash"

>kubectl -n coherence apply -f manifests/allow-dns-kube-system.yaml</markup>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.8"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.1cUiOj.spl1" title="原文 : Some documentation regarding allowing DNS with Kubernetes network policies only shows opening up UDP connections.">Kubernetesネットワーク・ポリシーによるDNSの許可に関する一部のドキュメントでは、UDP接続の開放のみが示されます。</span> <span class="merged" id="all.1cUiOj.spl2" title="原文 : During our testing with network policies, we discovered that with only UDP allowed any lookup for a fully qualified name would fail.">ネットワーク・ポリシーを使用したテストでは、UDPのみで完全修飾名のルックアップが許可されていると失敗することがわかりました。</span> <span class="merged" id="all.1cUiOj.spl3" title="原文 : For example nslookup my-service.my-namespace.svc would work, but the fully qualified nslookup my-service.my-namespace.svc.cluster.local would not.">たとえば、<code>nslookup my-service.my-namespace.svc</code>は機能しますが、完全修飾<code>nslookup my-service.my-namespace.svc.cluster.local</code>は機能しません。</span> <span class="merged" id="all.1cUiOj.spl4" title="原文 : Adding TCP to the DNS policy allowed DNS lookups with .cluster.local to also work.">DNSポリシーにTCPを追加すると、<code>.cluster.local</code>を使用したDNSルックアップも機能します。</span> </p>

<p><span class="merged" id="all.34PZHY.spl1" title="原文 : Neither the Coherence Operator, nor Coherence itself use a fully qualified service name for a DNS lookup.">Coherence OperatorもCoherence自体も、DNSルックアップに完全修飾サービス名を使用しません。</span> <span class="merged" id="all.34PZHY.spl2" title="原文 : It appears that Java’s InetAddress.findAllByName() method still works only with UDP, albeit extremely slowly.">Javaの<code>InetAddress.findAllByName()</code>メソッドは、UDPでのみ動作し、非常に低速であるように見えます。</span> <span class="merged" id="all.34PZHY.spl3" title="原文 : By default, the service name used for the Coherence WKA setting uses just the .svc suffix.">デフォルトでは、Coherence WKA設定に使用されるサービス名は、<code>.svc</code>サフィクスのみを使用します。</span> </p>
</p>
</div>
</div>
</div>

<h3 id="operator"><span class="merged" id="all.6N8zA" title="原文 : Coherence Operator Policies">Coherence Operatorポリシー</span></h3>
<div class="section">
<p><span class="merged" id="all.3Z0Bn8.spl1" title="原文 : Assuming the coherence namespace exists, and the deny-all and allow-dns policies described above have been applied, if the Coherence Operator is installed, it wil fail to start as it has no access to endpoints it needs to operate."><code>coherence</code>ネームスペースが存在し、前述した<code>deny-all</code>および<code>allow-dns</code>ポリシーが適用されていると仮定すると、Coherence Operatorがインストールされている場合、操作する必要があるエンドポイントへのアクセス権がないため起動に失敗します。</span> <span class="merged" id="all.3Z0Bn8.spl2" title="原文 : The following sections will add network polices to allow the Coherence Operator to access Kubernetes services and Pods it requires.">次のセクションでは、Coherence Operatorが必要なKubernetesサービスおよびポッドにアクセスできるように、ネットワーク・ポリシーを追加します。</span> </p>


<h4 id="k8sapi"><span class="merged" id="all.2bPg05" title="原文 : Access the Kubernetes API Server">Kubernetes APIサーバーへのアクセス</span></h4>
<div class="section">
<p><span class="merged" id="all.3Fhr4k.spl1" title="原文 : The Coherence Operator uses Kubernetes APIs to manage various resources in the Kubernetes cluster.">Coherence Operatorは、Kubernetes APIを使用して、Kubernetesクラスタ内の様々なリソースを管理します。</span> <span class="merged" id="all.3Fhr4k.spl2" title="原文 : For this to work, the Operator Pod must be allowed egress to the Kubernetes API server.">これが機能するには、オペレータ・ポッドがKubernetes APIサーバーへのエグレスを許可されている必要があります。</span> <span class="merged" id="all.3Fhr4k.spl3" title="原文 : Configuring access to the API server is not as straight forward as other network policies.">APIサーバーへのアクセスの構成は、他のネットワーク・ポリシーほど単純ではありません。</span> <span class="merged" id="all.3Fhr4k.spl4" title="原文 : The reason for this is that there is no Pod available with labels that can be used in the configuration, instead, the IP address of the API server itself must be used.">これは、構成で使用できるラベルでポッドを使用できないためです。かわりに、APIサーバー自体のIPアドレスを使用する必要があります。</span> </p>

<p><span class="merged" id="all.Oq4sL.spl1" title="原文 : There are various methods to find the IP address of the API server.">APIサーバーのIPアドレスを見つけるには様々なメソッドがあります。</span> <span class="merged" id="all.Oq4sL.spl2" title="原文 : The exact method required may vary depending on the type of Kubernetes cluster being used, for example a simple development cluster running in KinD on a laptop may differ from a cluster running in a cloud provider’s infrastructure.">必要なメソッドは、使用するKubernetesクラスタのタイプによって異なる場合があります。たとえば、ラップトップでKinDで実行されている単純な開発クラスタは、クラウド・プロバイダのインフラストラクチャで実行されているクラスタとは異なる場合があります。</span> </p>

<p><span class="merged" id="all.1Hh4Rh" title="原文 : The common way to find the API server’s IP address is to use kubectl cluster-info as follows:">APIサーバーのIPアドレスを見つける一般的な方法は、次のように<code>kubectl cluster-info</code>を使用することです:</span></p>

<markup
lang="bash"

>$ kubectl cluster-info
Kubernetes master is running at https://192.168.99.100:8443</markup>

<p><span class="merged" id="all.48t9ss" title="原文 : In the above case the IP address of the API server would be 192.168.99.100 and the port is 8443.">前述の場合、APIサーバーのIPアドレスは<code>192.168.99.100</code>で、ポートは<code>8443</code>です。</span></p>

<p><span class="merged" id="all.RN8Hj" title="原文 : In a simple KinD development cluster, the API server IP address can be obtained using kubectl as shown below:">単純なKinD開発クラスタでは、次に示すように、<code>kubectl</code>を使用してAPIサーバーのIPアドレスを取得できます:</span></p>

<markup
lang="bash"

>$ kubectl -n default get endpoints kubernetes -o json
{
    "apiVersion": "v1",
    "kind": "Endpoints",
    "metadata": {
        "creationTimestamp": "2023-02-08T10:31:26Z",
        "labels": {
            "endpointslice.kubernetes.io/skip-mirror": "true"
        },
        "name": "kubernetes",
        "namespace": "default",
        "resourceVersion": "196",
        "uid": "68b0a7de-c0db-4524-a1a2-9d29eb137f28"
    },
    "subsets": [
        {
            "addresses": [
                {
                    "ip": "192.168.49.2"
                }
            ],
            "ports": [
                {
                    "name": "https",
                    "port": 8443,
                    "protocol": "TCP"
                }
            ]
        }
    ]
}</markup>

<p><span class="merged" id="all.192jRm" title="原文 : In the above case the IP address of the API server would be 192.168.49.2 and the port is 8443.">前述の場合、APIサーバーのIPアドレスは<code>192.168.49.2</code>で、ポートは<code>8443</code>です。</span></p>

<p><span class="merged" id="all.33czMf.spl1" title="原文 : The IP address displayed for the API server can then be used in the network policy.">その後、APIサーバーに対して表示されるIPアドレスをネットワーク・ポリシーで使用できます。</span> <span class="merged" id="all.33czMf.spl2" title="原文 : The policy shown below allows Pods with the app.kubernetes.io/name: coherence-operator label (which the Operator has) egress access to the API server.">次に示すポリシーでは、<code>app.kubernetes.io/name: coherence-operator</code>ラベル(Operatorが持つ)でAPIサーバーへのエグレス・アクセスをポッドに許可します。</span> </p>

<markup
lang="yaml"
title="manifests/allow-k8s-api-server.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: operator-to-apiserver-egress
spec:
  podSelector:
    matchLabels:
      app.kubernetes.io/name: coherence-operator
  policyTypes:
    - Egress
    - Ingress
  egress:
    - to:
        - ipBlock:
            cidr: 172.18.0.2/24
        - ipBlock:
            cidr: 10.96.0.1/24
      ports:
        - port: 6443
          protocol: TCP
        - port: 443
          protocol: TCP</markup>

<p><span class="merged" id="all.yhs3n" title="原文 : The allow-k8s-api-server.yaml policy can be installed into the coherence namespace to allow the Operator to communicate with the API server."><code>allow-k8s-api-server.yaml</code>ポリシーを<code>coherence</code>ネームスペースにインストールして、オペレータがAPIサーバーと通信できるようにします。</span></p>

<markup
lang="bash"

>kubectl -n coherence apply -f manifests/allow-k8s-api-server.yaml</markup>

<p><span class="merged" id="all.BaaEU" title="原文 : With the allow-k8s-api-server.yaml policy applied, the Coherence Operator should now start correctly and its Pods should reach the &quot;ready&quot; state."><code>allow-k8s-api-server.yaml</code>ポリシーが適用されると、Coherence Operatorが正しく起動し、そのポッドは「ready」状態になります。</span></p>

</div>

<h4 id="cluster-access"><span class="merged" id="all.2gKKHA" title="原文 : Ingress From and Egress Into Coherence Cluster Member Pods">Coherenceクラスタ・メンバー・ポッドへのイングレスおよびエグレス</span></h4>
<div class="section">
<p><span class="merged" id="all.1R3D8B.spl1" title="原文 : When a Coherence cluster is deployed, on start-up of a Pod the cluster member will connect to the Operator’s REST endpoint to query the site name and rack name, based on the Node the Coherence member is running on.">Coherenceクラスタがデプロイされると、ポッドの起動時にクラスタ・メンバーがオペレータのRESTエンドポイントに接続し、Coherenceメンバーが実行されているノードに基づいてサイト名とラック名をクエリーします。</span> <span class="merged" id="all.1R3D8B.spl2" title="原文 : To allow this to happen the Operator needs to be configured with the relevant ingress policy.">これを実行するには、オペレータを関連するイングレス・ポリシーで構成する必要があります。</span> </p>

<p><span class="merged" id="all.4gM2Ri.spl1" title="原文 : The coherence-operator-rest-ingress policy applies to the Operator Pod, as it has a podSelector label of app.kubernetes.io/name: coherence-operator, which is a label applied to the Operator Pod."><code>coherence-operator-rest-ingress</code>ポリシーは、Operator Podに適用されるラベルである<code>app.kubernetes.io/name: coherence-operator</code>という<code>podSelector</code>ラベルがあるため、Operator Podに適用されます。</span> <span class="merged" id="all.4gM2Ri.spl2" title="原文 : The policy allows any Pod with the label coherenceComponent: coherencePod ingress into the operator REST port.">ポリシーでは、ラベル<code>coherenceComponent: coherencePod</code>のポッドを<code>operator</code> RESTポートにイングレスできます。</span> <span class="merged" id="all.4gM2Ri.spl3" title="原文 : When the Operator creates a Coherence cluster, it applies the label coherenceComponent: coherencePod to all the Coherence cluster Pods.">オペレータがCoherenceクラスタを作成すると、ラベル<code>coherenceComponent: coherencePod</code>がすべてのCoherenceクラスタ・ポッドに適用されます。</span> <span class="merged" id="all.4gM2Ri.spl4" title="原文 : The policy below allows access from all namespaces using namespaceSelector: { } but it could be tightened up to specific namespaces if required.">次のポリシーでは、<code>namespaceSelector: { }</code>を使用してすべてのネームスペースからのアクセスが許可されますが、必要に応じて特定のネームスペースまで絞り込むことができます。</span> </p>

<markup
lang="yaml"
title="manifests/allow-operator-rest-ingress.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: coherence-operator-rest-ingress
spec:
  podSelector:
    matchLabels:
      app.kubernetes.io/name: coherence-operator
  policyTypes:
    - Ingress
  ingress:
    - from:
        - namespaceSelector: { }
          podSelector:
            matchLabels:
              coherenceComponent: coherencePod
      ports:
        - port: operator
          protocol: TCP</markup>

<p><span class="merged" id="all.3lawko" title="原文 : During operations such as scaling and shutting down of a Coherence cluster, the Operator needs to connect to the health endpoint of the Coherence cluster Pods.">Coherenceクラスタのスケーリングや停止などの操作中に、オペレータはCoherenceクラスタ・ポッドのヘルス・エンドポイントに接続する必要があります。</span></p>

<p><span class="merged" id="all.2fYqzX.spl1" title="原文 : The coherence-operator-cluster-member-egress policy below applies to the Operator Pod, as it has a podSelector label of app.kubernetes.io/name: coherence-operator, which is a label applied to the Operator Pod.">次の<code>coherence-operator-cluster-member-egress</code>ポリシーは、オペレータ・ポッドに適用されます。<code>podSelector</code>ラベルが<code>app.kubernetes.io/name: coherence-operator</code>で、オペレータ・ポッドに適用されるラベルです。</span> <span class="merged" id="all.2fYqzX.spl2" title="原文 : The policy allows egress to the health port in any Pod with the label coherenceComponent: coherencePod.">ポリシーでは、ラベル<code>coherenceComponent: coherencePod</code>を持つ任意のポッドの<code>health</code>ポートにエグレスを許可します。</span> <span class="merged" id="all.2fYqzX.spl3" title="原文 : When the Operator creates a Coherence cluster, it applies the label coherenceComponent: coherencePod to all the Coherence cluster Pods.">オペレータがCoherenceクラスタを作成すると、ラベル<code>coherenceComponent: coherencePod</code>がすべてのCoherenceクラスタ・ポッドに適用されます。</span> <span class="merged" id="all.2fYqzX.spl4" title="原文 : The policy below allows egress to Coherence Pods in all namespaces using namespaceSelector: { } but it could be tightened up to specific namespaces if required.">次のポリシーでは、<code>namespaceSelector: { }</code>を使用してすべてのネームスペースでCoherenceポッドにエグレスを実行できますが、必要に応じて特定のネームスペースに絞り込むことができます。</span> </p>

<markup
lang="yaml"
title="manifests/allow-operator-cluster-member-egress.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: coherence-operator-cluster-member-egress
spec:
  podSelector:
    matchLabels:
      app.kubernetes.io/name: coherence-operator
  policyTypes:
    - Egress
  egress:
    - to:
        - namespaceSelector: { }
          podSelector:
            matchLabels:
              coherenceComponent: coherencePod
      ports:
        - port: health
          protocol: TCP</markup>

<p><span class="merged" id="all.1tdWE2" title="原文 : The two policies can be applied to the coherence namespace.">2つのポリシーを<code>coherence</code>ネームスペースに適用できます。</span></p>

<markup
lang="bash"

>kubectl -n coherence apply -f manifests/allow-operator-rest-ingress.yaml
kubectl -n coherence apply -f manifests/allow-operator-cluster-member-egress.yaml</markup>

</div>

<h4 id="webhook"><span class="merged" id="all.3aboYw" title="原文 : Webhook Ingress">Webフック・イングレス</span></h4>
<div class="section">
<p><span class="merged" id="all.2lZkDM" title="原文 : With all the above policies in place, the Operator is able to work correctly, but if a Coherence resource is now created Kubernetes will be unable to call the Operator’s webhook without the correct ingress policy.">前述のポリシーをすべて設定すると、オペレータは正しく動作できますが、<code>Coherence</code>リソースが作成された場合、Kubernetesは、正しいイングレス・ポリシーなしでオペレータのwebフックをコールできません。</span></p>

<p><span class="merged" id="all.3IVnXi.spl1"  title="原文: The following example demonstrates this.">次の例でこれを説明します。</span> <span class="merged" id="all.3IVnXi.spl2" title="原文 : Assume there is a minimal`Coherence` yaml file named minimal.yaml that will create a single member Coherence cluster.">単一のメンバーCoherenceクラスタを作成する最小限の`Coherence` yaml file name <code>minimal.yaml</code>があるとします。</span> </p>

<markup
lang="yaml"
title="minimal.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 1</markup>

<p><span class="merged" id="all.4R7hTh" title="原文 : If minimal.yaml is applied using kubectl with a small timeout of 10 seconds, the creation of the resource will fail due to Kubernetes not having access to the Coherence Operator webhook."><code>minimal.yaml</code>が10秒の短いタイムアウトで<code>kubectl</code>を使用して適用された場合、KubernetesがCoherence Operator webフックにアクセスできないため、リソースの作成は失敗します。</span></p>

<markup
lang="bash"

>$ kubectl apply --timeout=10s -f minimal.yaml
Error from server (InternalError): error when creating "minimal.yaml": Internal error occurred: failed calling webhook "coherence.oracle.com": failed to call webhook: Post "https://coherence-operator-webhook.operator-test.svc:443/mutate-coherence-oracle-com-v1-coherence?timeout=10s": context deadline exceeded</markup>

<p><span class="merged" id="all.4VccZQ.spl1" title="原文 : The simplest solution is to allow ingress from any IP address to the webhook on port, with a policy like that shown below.">最もシンプルなソリューションは、次に示すようなポリシーを使用して、任意のIPアドレスからポートのwebフックへのイングレスを許可することです。</span> <span class="merged" id="all.4VccZQ.spl2" title="原文 : This policy uses and empty from: [] attribute, which allows access from anywhere to the webhook-server port in the Pod.">このポリシーでは空の<code>from: []</code>属性が使用され、ポッド内の任意の場所から<code>webhook-server</code>ポートへのアクセスが許可されます。</span> </p>

<markup
lang="yaml"
title="manifests/allow-webhook-ingress-from-all.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: apiserver-to-operator-webhook-ingress
spec:
  podSelector:
    matchLabels:
      app.kubernetes.io/name: coherence-operator
  policyTypes:
    - Ingress
  ingress:
    - from: []
      ports:
        - port: webhook-server
          protocol: TCP</markup>

<p><span class="merged" id="all.1GN57f.spl1" title="原文 : Allowing access to the webhook from anywhere is not very secure, so a more restrictive from attribute could be used to limit access to the IP address (or addresses) of the Kubernetes API server.">どこからでもwebフックにアクセスできるようにすることは、あまり安全ではないため、より制限の厳しい<code>from</code>属性を使用して、Kubernetes APIサーバーのIPアドレス(またはアドレス)へのアクセスを制限できます。</span> <span class="merged" id="all.1GN57f.spl2" title="原文 : As with the API server policy above, the trick here is knowing the API server addresses to use.">前述のAPIサーバー・ポリシーと同様に、ここでは、使用するAPIサーバー・アドレスを把握しています。</span> </p>

<p><span class="merged" id="all.1XBLFl" title="原文 : The policy below only allows access from specific addresses:">次のポリシーでは、特定のアドレスからのアクセスのみが許可されます:</span></p>

<markup
lang="yaml"
title="manifests/allow-webhook-ingress-from-all.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: apiserver-to-operator-webhook-ingress
spec:
  podSelector:
    matchLabels:
      app.kubernetes.io/name: coherence-operator
  policyTypes:
    - Ingress
  ingress:
    - from:
        - ipBlock:
            cidr: 172.18.0.2/24
        - ipBlock:
            cidr: 10.96.0.1/24
      ports:
        - port: webhook-server
          protocol: TCP
        - port: 443
          protocol: TCP</markup>

</div>
</div>

<h3 id="coherence"><span class="merged" id="all.40q48V" title="原文 : Coherence Cluster Member Policies">Coherenceクラスタ・メンバー・ポリシー</span></h3>
<div class="section">
<p><span class="merged" id="all.3Uj0WB.spl1" title="原文 : Once the policies are in place to allow the Coherence Operator to work, the policies to allow Coherence clusters to run can be put in place.">Coherence Operatorが機能できるようにポリシーが配置されると、Coherenceクラスタを実行できるようにするポリシーを配置できます。</span> <span class="merged" id="all.3Uj0WB.spl2" title="原文 : The exact set of policies requires will vary depending on the Coherence functionality being used.">ポリシーの正確なセットは、使用されるCoherence機能によって異なります。</span> <span class="merged" id="all.3Uj0WB.spl3" title="原文 : If Coherence is embedded in another application, such as a web-server, then additional policies may also be needed to allow ingress to other endpoints.">Coherenceがwebサーバーなどの別のアプリケーションに埋め込まれている場合、他のエンドポイントへのイングレスを許可するために追加のポリシーが必要になる場合があります。</span> <span class="merged" id="all.3Uj0WB.spl4" title="原文 : Conversely, if the Coherence application needs access to other services, for example a database, then additional egress policies may need to be created.">逆に、Coherenceアプリケーションがデータベースなどの他のサービスにアクセスする必要がある場合は、追加のエグレス・ポリシーを作成する必要があります。</span> </p>

<p><span class="merged" id="all.265lRd" title="原文 : This example is only going to cover Coherence use cases, but it should be simple enough to apply the same techniques to policies for other applications.">この例は、Coherenceのユース・ケースのみを対象としていますが、他のアプリケーションのポリシーに同じテクニックを適用するには単純である必要があります。</span></p>


<h4 id="inter-cluster"><span class="merged" id="all.2kCa0r" title="原文 : Access Other Cluster Members">他のクラスタ・メンバーへのアクセス</span></h4>
<div class="section">
<p><span class="merged" id="all.1ZpdVt.spl1" title="原文 : All Pods in a Coherence cluster must be able to talk to each other (otherwise they wouldn’t be a cluster).">Coherenceクラスタ内のすべてのポッドは、相互に通信できる必要があります(そうしないとクラスタになりません)。</span> <span class="merged" id="all.1ZpdVt.spl2" title="原文 : This means that there needs to be ingress and egress policies to allow this.">つまり、これを許可するにはイングレスおよびエグレス・ポリシーが必要です。</span> </p>

<p><span class="merged" id="all.4gYgAv" title="原文 : Cluster port: The default cluster port is 7574, and there is almost never any need to change this, especially in a containerised environment where there is little chance of port conflicts."><strong>クラスタ・ポート</strong>: デフォルトのクラスタ・ポートは7574であり、特にポートが競合する可能性がほとんどないコンテナ化された環境で、これを変更する必要はありません。</span></p>

<p><span class="merged" id="all.3qEEhx.spl1" title="原文 : Unicast ports: Unicast uses TMB (default) and UDP."><strong>ユニキャスト・ポート</strong>: ユニキャストではTMB (デフォルト)とUDPを使用します。</span> <span class="merged" id="all.3qEEhx.spl2" title="原文 : Each cluster member listens on one UDP and one TCP port and both ports need to be opened in the network policy.">各クラスタ・メンバーは、1つのUDPと1つのTCPポートをリスニングし、両方のポートをネットワーク・ポリシーでオープンする必要があります。</span> <span class="merged" id="all.3qEEhx.spl3" title="原文 : The default behaviour of Coherence is for the unicast ports to be automatically assigned from the operating system’s available ephemeral port range.">Coherenceのデフォルトの動作は、オペレーティング・システムの使用可能なエフェメラル・ポート範囲から自動的に割り当てられるユニキャスト・ポート用です。</span> <span class="merged" id="all.3qEEhx.spl4" title="原文 : When securing Coherence with network policies, the use of ephemeral ports will not work, so a range of ports can be specified for coherence to operate within.">ネットワーク・ポリシーでCoherenceを保護する場合、エフェメラル・ポートの使用は機能しないため、内部で動作するようにポートの範囲を指定できます。</span> <span class="merged" id="all.3qEEhx.spl5" title="原文 : The Coherence Operator sets values for both unicast ports so that ephemeral ports will not be used.">Coherence Operatorは、エフェメラル・ポートが使用されないように、両方のユニキャスト・ポートの値を設定します。</span> <span class="merged" id="all.3qEEhx.spl6" title="原文 : The default values are 7575 and 7576.">デフォルト値は、<code>7575</code>および<code>7576</code>です。</span> </p>

<p><span class="merged" id="all.2QlCLR" title="原文 : The two unicast ports can be changed in the Coherence spec by setting the spec.coherence.localPort field, and the spec.coherence.localPortAdjust field for example:"><code>spec.coherence.localPort</code>フィールドおよび<code>spec.coherence.localPortAdjust</code>フィールドを設定して、<code>Coherence</code>仕様で2つのユニキャスト・ポートを変更できます。次に例を示します:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    localPort: 9000
    localPortAdjust: 9001</markup>

<p><span class="merged" id="all.sTAIS" title="原文 : Alternatively the values can also be configured using environment variables">または、環境変数を使用して値を構成することもできます</span></p>

<markup
lang="yaml"

>env:
  - name: COHERENCE_LOCALPORT
    value: "9000"
  - name: COHERENCE_LOCALPORT_ADJUST
    value: "9001"</markup>

<p><span class="merged" id="all.3RXOZi.spl1" title="原文 : Echo port 7: The default TCP port of the IpMonitor component that is used for detecting hardware failure of cluster members."><strong>エコー・ポート<code>7</code></strong>: クラスタ・メンバーのハードウェア障害の検出に使用されるIpMonitorコンポーネントのデフォルトのTCPポート。</span> <span class="merged" id="all.3RXOZi.spl2" title="原文 : Coherence doesn’t bind to this port, it only tries to connect to it as a means of pinging remote machines, or in this case Pods.">Coherenceはこのポートにバインドされません。リモート・マシンをpingする手段として、またはこの場合はPodsに接続しようとするのみです。</span> </p>

<p><span class="merged" id="all.20aNdB" title="原文 : The Coherence Operator applies the coherenceComponent: coherencePod label to all Coherence Pods, so this can be used in the network policy podSelector, to apply the policy to only the Coherence Pods.">Coherence Operatorは、すべてのCoherenceポッドに<code>coherenceComponent: coherencePod</code>ラベルを適用するため、これはネットワーク・ポリシー<code>podSelector</code>で使用して、Coherenceポッドにのみポリシーを適用できます。</span></p>

<p><span class="merged" id="all.1nOMWg" title="原文 : The policy below works with the default ports configured by the Operator.">次のポリシーは、オペレータによって構成されたデフォルトのポートと連携します。</span></p>

<markup
lang="yaml"
title="manifests/allow-cluster-member-access.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-coherence-cluster
spec:
  podSelector:
    matchLabels:
      coherenceComponent: coherencePod
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              coherenceComponent: coherencePod
      ports:
        - port: 7574
          endPort: 7576
          protocol: TCP
        - port: 7574
          endPort: 7576
          protocol: UDP
        - port: 7
          protocol: TCP
  egress:
    - to:
        - podSelector:
            matchLabels:
              coherenceComponent: coherencePod
      ports:
        - port: 7574
          endPort: 7576
          protocol: TCP
        - port: 7574
          endPort: 7576
          protocol: UDP
        - port: 7
          protocol: TCP</markup>

<p><span class="merged" id="all.SINAm.spl1" title="原文 : If the Coherence local port and local port adjust values are changed, then the policy would need to be amended.">Coherenceローカル・ポートおよびローカル・ポートの調整値を変更した場合、ポリシーを修正する必要があります。</span> <span class="merged" id="all.SINAm.spl2" title="原文 : For example, if COHERENCE_LOCALPORT=9000 and COHERENCE_LOCALPORT_ADJUST=9100">たとえば、<code>COHERENCE_LOCALPORT=9000</code>および<code>COHERENCE_LOCALPORT_ADJUST=9100</code>の場合</span> </p>

<markup
lang="yaml"
title="manifests/allow-cluster-member-access-non-default.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-coherence-cluster
spec:
  podSelector:
    matchLabels:
      coherenceComponent: coherencePod
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              coherenceComponent: coherencePod
      ports:
        - port: 7574
          protocol: TCP
        - port: 7574
          protocol: UDP
        - port: 9000
          endPort: 9100
          protocol: TCP
        - port: 9000
          endPort: 9100
          protocol: UDP
        - port: 7
          protocol: TCP
  egress:
    - to:
        - podSelector:
            matchLabels:
              coherenceComponent: coherencePod
      ports:
        - port: 7574
          protocol: TCP
        - port: 7574
          protocol: UDP
        - port: 9000
          endPort: 9100
          protocol: TCP
        - port: 9000
          endPort: 9100
          protocol: UDP
        - port: 7
          protocol: TCP</markup>

<p><span class="merged" id="all.2rRL3C.spl1" title="原文 : Both of the policies above should be applied to the namespace where the Coherence cluster will be deployed.">前述のポリシーの両方を、Coherenceクラスタがデプロイされるネームスペースに適用する必要があります。</span> <span class="merged" id="all.2rRL3C.spl2" title="原文 : With the two policies above in place, the Coherence Pods will be able to communicate.">前述の2つのポリシーによって、Coherenceポッドは通信できるようになります。</span> </p>

</div>

<h4 id="cluster-to-operator"><span class="merged" id="all.9pZCO" title="原文 : Egress to and Ingress From the Coherence Operator">Coherence Operatorからのエグレスとイングレス</span></h4>
<div class="section">
<p><span class="merged" id="all.4Ey2nj.spl1" title="原文 : When a Coherence Pod starts Coherence calls back to the Operator to obtain the site name and rack name based on the Node the Pod is scheduled onto.">Coherenceポッドがオペレータにコールバックし、ポッドがスケジュールされているノードに基づいてサイト名とラック名を取得します。</span> <span class="merged" id="all.4Ey2nj.spl2" title="原文 : For this to work, there needs to be an egress policy to allow Coherence Pods to access the Operator.">これが機能するには、Coherenceポッドがオペレータにアクセスできるようにするエグレス・ポリシーが必要です。</span> </p>

<p><span class="merged" id="all.19jW7Y.spl1" title="原文 : During certain operations the Operator needs to call the Coherence members health endpoint to check health and status.">特定の操作中に、オペレータは、ヘルスおよびステータスをチェックするためにCoherenceメンバーのヘルス・エンドポイントを呼び出す必要があります。</span> <span class="merged" id="all.19jW7Y.spl2" title="原文 : For this to work there needs to be an ingress policy to allow the Operator access to the health endpoint in the Coherence Pods">これを行うには、Coherenceポッド内のヘルス・エンドポイントへのオペレータ・アクセスを許可するイングレス・ポリシーが必要です</span> </p>

<p><span class="merged" id="all.4atcyT.spl1" title="原文 : The policy below applies to Pods with the coherenceComponent: coherencePod label, which will match Coherence cluster member Pods.">次のポリシーは、<code>coherenceComponent: coherencePod</code>ラベルのポッドに適用されます。これは、Coherenceクラスタ・メンバーのポッドと一致します。</span> <span class="merged" id="all.4atcyT.spl2" title="原文 : The policy allows ingress from the Operator to the Coherence Pod health port from namespace coherence using the namespace selector label kubernetes.io/metadata.name: coherence and Pod selector label app.kubernetes.io/name: coherence-operator The policy allows egress from the Coherence pods to the Operator’s REST server operator port.">ポリシーでは、ネームスペース・セレクタ・ラベル<code>kubernetes.io/metadata.name: coherence</code>およびポッド・セレクタ・ラベル<code>app.kubernetes.io/name: coherence-operator</code>を使用して、オペレータからネームスペース<code>coherence</code>のCoherenceポッド・ヘルス・ポートへのイングレスを許可します。このポリシーでは、CoherenceポッドからオペレータのRESTサーバーの<code>operator</code>ポートへのエグレスが可能です。</span> </p>

<markup
lang="yaml"
title="manifests/allow-cluster-member-operator-access.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: coherence-operator-cluster-member-access
spec:
  podSelector:
    matchLabels:
      coherenceComponent: coherencePod
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: coherence
          podSelector:
            matchLabels:
              app.kubernetes.io/name: coherence-operator
      ports:
        - port: health
          protocol: TCP
  egress:
    - to:
        - namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: coherence
          podSelector:
            matchLabels:
              app.kubernetes.io/name: coherence-operator
      ports:
        - port: operator
          protocol: TCP</markup>

<p><span class="merged" id="all.2mnvTk.spl1" title="原文 : If the Operator is not running in the coherence namespace then the namespace match label can be changed to the required value.">オペレータが<code>coherence</code>ネームスペースで実行されていない場合、ネームスペース一致ラベルを必要な値に変更できます。</span> <span class="merged" id="all.2mnvTk.spl2" title="原文 : The policy above should be applied to the namespace where the Coherence cluster will be deployed.">前述のポリシーは、Coherenceクラスタがデプロイされるネームスペースに適用する必要があります。</span> </p>

</div>

<h4 id="client"><span class="merged" id="all.1FfHrW" title="原文 : Client Access (Coherence*Extend and gRPC)">クライアント・アクセス(Coherence*ExtendおよびgRPC)</span></h4>
<div class="section">
<p><span class="merged" id="all.1cHE0c.spl1" title="原文 : A typical Coherence cluster does not run in isolation but as part of a larger application.">通常のCoherenceクラスタは分離では実行されず、大規模なアプリケーションの一部として実行されます。</span> <span class="merged" id="all.1cHE0c.spl2" title="原文 : If the application has other Pods that are Coherence clients, then they will need access to the Coherence cluster.">アプリケーションにCoherenceクライアントである他のポッドがある場合は、Coherenceクラスタにアクセスする必要があります。</span> <span class="merged" id="all.1cHE0c.spl3" title="原文 : This would usually mean creating ingress and egress policies for the Coherence Extend port and gRPC port, depending on which Coherence APIs are being used.">これは通常、使用されるCoherence APIに応じて、Coherence ExtendポートおよびgRPCポートのイングレス・ポリシーおよびエグレス・ポリシーを作成することを意味します。</span> </p>

<p><span class="merged" id="all.2fMlvX.spl1" title="原文 : Instead of using actual port numbers, a NetworkPolicy can be made more flexible by using port names.">実際のポート番号を使用するかわりに、ポート名を使用して<code>NetworkPolicy</code>の柔軟性を高めることができます。</span> <span class="merged" id="all.2fMlvX.spl2" title="原文 : When ports are defined in a container spec of a Pod, they are usually named.">ポートがポッドのコンテナ仕様で定義されている場合、通常は名前が付けられます。</span> <span class="merged" id="all.2fMlvX.spl3" title="原文 : By using the names of the ports in the NetworkPolicy instead of port numbers, the real port numbers can be changed without affecting the network policy.">ポート番号ではなく<code>NetworkPolicy</code>のポート名を使用することで、ネットワーク・ポリシーに影響を与えずに実際のポート番号を変更できます。</span> </p>


<h5 id="_coherence_extend_access"><span class="merged" id="all.9FDQ8" title="原文 : Coherence Extend Access">Coherenceアクセスの拡張</span></h5>
<div class="section">
<p><span class="merged" id="all.28oDvs.spl1" title="原文 : If Coherence Extend is being used, then first the Extend Proxy must be configured to use a fixed port.">Coherence Extendを使用する場合、最初にExtend Proxyを固定ポートを使用するように構成する必要があります。</span> <span class="merged" id="all.28oDvs.spl2" title="原文 : The default behaviour of Coherence is to bind the Extend proxy to an ephemeral port and clients use the Coherence NameService to look up the port to use.">Coherenceのデフォルトの動作では、Extendプロキシをエフェメラル・ポートにバインドし、クライアントはCoherence NameServiceを使用して使用するポートを検索します。</span> </p>

<p><span class="merged" id="all.rxoMf.spl1" title="原文 : When using the default Coherence images, for example container-registry.oracle.com/middleware/coherence-ce:22.06 the Extend proxy is already configured to run on a fixed port 20000.">デフォルトのCoherenceイメージを使用する場合(たとえば、<code>container-registry.oracle.com/middleware/coherence-ce:22.06</code>)、Extendプロキシは固定ポート<code>20000</code>で実行するようにすでに構成されています。</span> <span class="merged" id="all.rxoMf.spl2" title="原文 : When using this image, or any image that uses the default Coherence cache configuration file, this port can be changed by setting the COHERENCE_EXTEND_PORT environment variable.">このイメージ、またはデフォルトのCoherenceキャッシュ構成ファイルを使用するイメージを使用する場合、<code>COHERENCE_EXTEND_PORT</code>環境変数を設定してこのポートを変更できます。</span> </p>

<p><span class="merged" id="all.2axULO.spl1" title="原文 : When using the Coherence Concurrent extensions over Extend, the Concurrent Extend proxy also needs to be configured with a fixed port.">拡張を介してCoherenceコンカレント拡張を使用する場合、コンカレント拡張プロキシも固定ポートで構成する必要があります。</span> <span class="merged" id="all.2axULO.spl2" title="原文 : When using the default Coherence images, for example container-registry.oracle.com/middleware/coherence-ce:22.06 the Concurrent Extend proxy is already configured to run on a fixed port 20001.">デフォルトのCoherenceイメージを使用する場合(たとえば、<code>container-registry.oracle.com/middleware/coherence-ce:22.06</code>)、Concurrent Extendプロキシは、固定ポート<code>20001</code>で実行するようにすでに構成されています。</span> <span class="merged" id="all.2axULO.spl3" title="原文 : When using this image, or any image that uses the default Coherence cache configuration file, this port can be changed by setting the COHERENCE_CONCURRENT_EXTEND_PORT environment variable.">このイメージ、またはデフォルトのCoherenceキャッシュ構成ファイルを使用するイメージを使用する場合、<code>COHERENCE_CONCURRENT_EXTEND_PORT</code>環境変数を設定してこのポートを変更できます。</span> </p>

<p><span class="merged" id="all.168l9j.spl1" title="原文 : For the examples below, a Coherence deployment has the following configuration.">次の例では、<code>Coherence</code>デプロイメントに次の構成があります。</span> <span class="merged" id="all.168l9j.spl2" title="原文 : This will expose Extend on a port named extend with a port number of 20000, and a port named extend-atomics with a port number of 20001.">これにより、ポート番号が<code>20000</code>の<code>extend</code>という名前のポートと、ポート番号が<code>20001</code>の<code>extend-atomics</code>という名前のポートでExtendが公開されます。</span> <span class="merged" id="all.168l9j.spl3" title="原文 : The polices described below will then use the port names, so if required the port number could be changed and the policies would still work.">次に、次に示すポリシーではポート名が使用されるため、必要に応じてポート番号を変更でき、ポリシーは引き続き機能します。</span> </p>

<markup
lang="yaml"
title="coherence-cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  ports:
    - name: extend
      port: 20000
    - name: extend-atomics
      port: 20001</markup>

<p><span class="merged" id="all.2PQVaa.spl1" title="原文 : The ingress policy below will work with the default Coherence image and allow ingress into the Coherence Pods to both the default Extend port and Coherence Concurrent Extend port.">次のイングレス・ポリシーは、デフォルトのCoherenceイメージと連携し、デフォルトのExtendポートとCoherenceコンカレント拡張ポートの両方に対するCoherenceポッドへのイングレスを許可します。</span> <span class="merged" id="all.2PQVaa.spl2" title="原文 : The policy allows ingress from Pods that have the coherence.oracle.com/extendClient: true label, from any namespace.">ポリシーでは、任意のネームスペースから<code>coherence.oracle.com/extendClient: true</code>ラベルを持つポッドからのイングレスを許可します。</span> <span class="merged" id="all.2PQVaa.spl3" title="原文 : It could be tightened further by using a more specific namespace selector.">より具体的なネームスペース・セレクタを使用してさらに絞り込むことができます。</span> </p>

<markup
lang="yaml"
title="manifests/allow-extend-ingress.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: coherence-extend-ingress
spec:
  podSelector:
    matchLabels:
      coherenceComponent: coherencePod
  policyTypes:
    - Ingress
  ingress:
    - from:
        - namespaceSelector: {}
          podSelector:
            matchLabels:
              coherence.oracle.com/extendClient: "true"
      ports:
        - port: extend
          protocol: TCP
        - port: extend-atomics
          protocol: TCP</markup>

<p><span class="merged" id="all.2fajPY" title="原文 : The policy above should be applied to the namespace where the Coherence cluster is running.">前述のポリシーは、Coherenceクラスタが実行されているネームスペースに適用する必要があります。</span></p>

<p><span class="merged" id="all.4MFqJx" title="原文 : Instead of using fixed port numbers in the">固定ポート番号を使用する代わりに</span></p>

<p><span class="merged" id="all.4fpkCF" title="原文 : The egress policy below will work with the default Coherence image and allow egress from Pods with the coherence.oracle.com/extendClient: true label to Coherence Pods with the label coherenceComponent: coherencePod. on both the default Extend port and Coherence Concurrent Extend port.">次のエグレス・ポリシーは、デフォルトのCoherenceイメージで機能し、<code>coherence.oracle.com/extendClient: true</code>ラベルのポッドから、デフォルトのExtendポートとCoherenceコンカレント拡張ポートの両方でラベル<code>coherenceComponent: coherencePod</code>のCoherenceポッドへのエグレスを許可します。</span></p>

<markup
lang="yaml"
title="manifests/allow-extend-egress.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: coherence-extend-egress
spec:
  podSelector:
    matchLabels:
      coherence.oracle.com/extendClient: "true"
  policyTypes:
    - Ingress
  egress:
    - to:
      - namespaceSelector: { }
        podSelector:
          matchLabels:
            coherenceComponent: coherencePod
      ports:
        - port: extend
          protocol: TCP
        - port: extend-atomics
          protocol: TCP</markup>

<p><span class="merged" id="all.3cpSHF.spl1" title="原文 : The policy above allows egress to Coherence Pods in any namespace.">前述のポリシーにより、任意のネームスペースでCoherenceポッドへのエグレスが可能になります。</span> <span class="merged" id="all.3cpSHF.spl2" title="原文 : This would ideally be tightened up to the specific namespace that the Coherence cluster is deployed in.">これが理想的には、Coherenceクラスタがデプロイされる特定のネームスペースまで強化されます。</span> <span class="merged" id="all.3cpSHF.spl3" title="原文 : For example, if the Coherence cluster is deployed in the datastore namespace, then the to section of policy could be changed as follows:">たとえば、Coherenceクラスタが<code>datastore</code>ネームスペースにデプロイされている場合、ポリシーの<code>to</code>セクションは次のように変更できます:</span> </p>

<markup
lang="yaml"
title="manifests/allow-extend-egress.yaml"
>- to:
  - namespaceSelector:
      matchLabels:
        kubernetes.io/metadata.name: datastore
    podSelector:
      matchLabels:
        coherenceComponent: coherencePod</markup>

<p><span class="merged" id="all.3NeBXJ" title="原文 : This policy must be applied to the namespace where the client Pods will be deployed.">このポリシーは、ネームスペース<em>「クライアント・ポッドがデプロイされる場所」</em>に適用する必要があります。</span></p>

</div>

<h5 id="_coherence_grpc_access"><span class="merged" id="all.yC4Lk" title="原文 : Coherence gRPC Access">Coherence gRPCアクセス</span></h5>
<div class="section">
<p><span class="merged" id="all.2DCyj6" title="原文 : If Coherence gRPC is being used, then first the gRPC Proxy must be configured to use a fixed port.">Coherence gRPCが使用されている場合は、まず固定ポートを使用するようにgRPCプロキシを構成する必要があります。</span></p>

<p><span class="merged" id="all.1pI61H.spl1" title="原文 : When using the default Coherence images, for example container-registry.oracle.com/middleware/coherence-ce:22.06 the gRPC proxy is already configured to run on a fixed port 1408.">デフォルトのCoherenceイメージを使用する場合(たとえば、<code>container-registry.oracle.com/middleware/coherence-ce:22.06</code>)、gRPCプロキシは固定ポート<code>1408</code>で実行するようにすでに構成されています。</span> <span class="merged" id="all.1pI61H.spl2" title="原文 : The gRPC proxy port can be changed by setting the COHERENCE_GRPC_PORT environment variable.">gRPCプロキシ・ポートは、<code>COHERENCE_GRPC_PORT</code>環境変数を設定することによって変更できます。</span> </p>

<p><span class="merged" id="all.sdDoE.spl1" title="原文 : The ingress policy below will allow ingress into the Coherence Pods gRPC port.">次のイングレス・ポリシーでは、Coherence Pods gRPCポートへのイングレスが許可されます。</span> <span class="merged" id="all.sdDoE.spl2" title="原文 : The policy allows ingress from Pods that have the coherence.oracle.com/grpcClient: true label, from any namespace.">ポリシーでは、任意のネームスペースから<code>coherence.oracle.com/grpcClient: true</code>ラベルを持つポッドからのイングレスを許可します。</span> <span class="merged" id="all.sdDoE.spl3" title="原文 : It could be tightened further by using a more specific namespace selector.">より具体的なネームスペース・セレクタを使用してさらに絞り込むことができます。</span> </p>

<markup
lang="yaml"
title="manifests/allow-grpc-ingress.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: coherence-grpc-ingress
spec:
  podSelector:
    matchLabels:
      coherenceComponent: coherencePod
  policyTypes:
    - Ingress
  ingress:
    - from:
        - namespaceSelector: {}
          podSelector:
            matchLabels:
              coherence.oracle.com/grpcClient: "true"
      ports:
        - port: grpc
          protocol: TCP</markup>

<p><span class="merged" id="all.2fajPY.1" title="原文 : The policy above should be applied to the namespace where the Coherence cluster is running.">前述のポリシーは、Coherenceクラスタが実行されているネームスペースに適用する必要があります。</span></p>

<p><span class="merged" id="all.2YvV45" title="原文 : The egress policy below will allow egress to the gRPC port from Pods with the coherence.oracle.com/grpcClient: true label to Coherence Pods with the label coherenceComponent: coherencePod.">次のエグレス・ポリシーでは、<code>coherence.oracle.com/grpcClient: true</code>ラベルのポッドから<code>coherenceComponent: coherencePod</code>ラベルのCoherenceポッドへのgRPCポートへのエグレスが可能になります。</span></p>

<markup
lang="yaml"
title="manifests/allow-extend-egress.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: coherence-extend-egress
spec:
  podSelector:
    matchLabels:
      coherence.oracle.com/extendClient: "true"
  policyTypes:
    - Ingress
  egress:
    - to:
      - namespaceSelector: { }
        podSelector:
          matchLabels:
            coherenceComponent: coherencePod
      ports:
        - port: extend
          protocol: TCP
        - port: extend-atomics
          protocol: TCP</markup>

<p><span class="merged" id="all.3cpSHF.1.spl1" title="原文 : The policy above allows egress to Coherence Pods in any namespace.">前述のポリシーにより、任意のネームスペースでCoherenceポッドへのエグレスが可能になります。</span> <span class="merged" id="all.3cpSHF.1.spl2" title="原文 : This would ideally be tightened up to the specific namespace that the Coherence cluster is deployed in.">これが理想的には、Coherenceクラスタがデプロイされる特定のネームスペースまで強化されます。</span> <span class="merged" id="all.3cpSHF.1.spl3" title="原文 : For example, if the Coherence cluster is deployed in the datastore namespace, then the to section of policy could be changed as follows:">たとえば、Coherenceクラスタが<code>datastore</code>ネームスペースにデプロイされている場合、ポリシーの<code>to</code>セクションは次のように変更できます:</span> </p>

<markup
lang="yaml"
title="manifests/allow-extend-egress.yaml"
>- to:
  - namespaceSelector:
      matchLabels:
        kubernetes.io/metadata.name: datastore
    podSelector:
      matchLabels:
        coherenceComponent: coherencePod</markup>

<p><span class="merged" id="all.3NeBXJ.1" title="原文 : This policy must be applied to the namespace where the client Pods will be deployed.">このポリシーは、ネームスペース<em>「クライアント・ポッドがデプロイされる場所」</em>に適用する必要があります。</span></p>

</div>
</div>

<h4 id="metrics"><span class="merged" id="all.12J63u" title="原文 : Coherence Metrics">Coherenceメトリクス</span></h4>
<div class="section">
<p><span class="merged" id="all.3o31Pe.spl1" title="原文 : If Coherence metrics is enabled there will need to be an ingress policy to allow connections from metrics clients.">Coherenceメトリクスが有効になっている場合、メトリクス・クライアントからの接続を許可するイングレス・ポリシーが必要です。</span> <span class="merged" id="all.3o31Pe.spl2" title="原文 : There would also need to be a similar egress policy in the metrics client’s namespace to allow it to access the Coherence metrics endpoints.">また、メトリクス・クライアントのネームスペースには、Coherenceメトリクス・エンドポイントにアクセスできるように、同様のエグレス・ポリシーが必要です。</span> </p>

<p><span class="merged" id="all.2Xrzuz.spl1" title="原文 : A simple Coherence resource that will create a cluster with metrics enabled is shown below.">メトリクスを有効にしてクラスタを作成する単純な<code>Coherence</code>リソースを次に示します。</span> <span class="merged" id="all.2Xrzuz.spl2" title="原文 : This yaml will create a Coherence cluster with a port names metrics that maps to the default metrics port of &apos;9612`.">このyamlは、デフォルトのメトリクス・ポート'9612'にマップするポート名<code>metrics</code>を持つCoherenceクラスタを作成します。</span> </p>

<markup
lang="yaml"
title="manifests/coherence-cluster-with-metrics.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  coherence:
    metrics:
      enabled: true
  ports:
    - name: metrics
      serviceMonitor:
        enabled: true</markup>

<p><span class="merged" id="all.3pVpdI.spl1" title="原文 : The example below will assume that metrics will be scraped by Prometheus, and that Prometheus is installed into a namespace called monitoring.">次の例では、メトリクスがPrometheusによってスクレイプされ、Prometheusが<code>monitoring</code>というネームスペースにインストールされていると想定します。</span> <span class="merged" id="all.3pVpdI.spl2" title="原文 : An ingress policy must be created in the namespace where the Coherence cluster is deployed allowing ingress to the metrics port from the Prometheus Pods.">イングレス・ポリシーは、Coherenceクラスタがデプロイされるネームスペースに作成され、Prometheusポッドからメトリクス・ポートへのイングレスが可能になります。</span> <span class="merged" id="all.3pVpdI.spl3" title="原文 : The Pods running Prometheus have a label app.kubernetes.io/name: prometheus so this can be used in the policy’s Pod selector.">Prometheusを実行しているポッドにはラベル<code>app.kubernetes.io/name: prometheus</code>があるため、ポリシーのポッド・セレクタで使用できます。</span> <span class="merged" id="all.3pVpdI.spl4" title="原文 : This policy should be applied to the namespace where the Coherence cluster is running.">このポリシーは、Coherenceクラスタが実行されているネームスペースに適用する必要があります。</span> </p>

<markup
lang="yaml"
title="manifests/allow-metrics-ingress.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: coherence-metrics-ingress
spec:
  podSelector:
    matchLabels:
      coherenceComponent: coherencePod
  policyTypes:
    - Ingress
  ingress:
    - from:
        - namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: monitoring
          podSelector:
            matchLabels:
              app.kubernetes.io/name: prometheus
      ports:
        - port: metrics
          protocol: TCP</markup>

<p><span class="merged" id="all.4NvbwY" title="原文 : If the monitoring namespace also has a &quot;deny-all&quot; policy and needs egress opening up for Prometheus to scrape metrics then an egress policy will need to be added to the monitoring namespace."><code>monitoring</code>ネームスペースにも"deny-all"ポリシーがあり、メトリクスをスクレイプするためにPrometheusに対してエグレス・オープニングが必要な場合は、<code>monitoring</code>ネームスペースにエグレス・ポリシーを追加する必要があります。</span></p>

<p><span class="merged" id="all.109XLP.spl1" title="原文 : The policy below will allow Pods with the label app.kubernetes.io/name: prometheus egress to Pods with the coherenceComponent: coherencePod label in any namespace.">次のポリシーでは、任意のネームスペースで<code>coherenceComponent: coherencePod</code>ラベルのポッドへの<code>app.kubernetes.io/name: prometheus</code>エグレス・ラベルのポッドを許可します。</span> <span class="merged" id="all.109XLP.spl2" title="原文 : The policy could be further tightened up by adding a namespace selector to restrict egress to the specific namespace where the Coherence cluster is running.">ポリシーをさらに強化するには、ネームスペース・セレクタを追加して、Coherenceクラスタが実行されている特定のネームスペースにエグレスを制限します。</span> </p>

<markup
lang="yaml"
title="manifests/allow-metrics-egress.yaml"
>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: coherence-metrics-egress
spec:
  podSelector:
    matchLabels:
      app.kubernetes.io/name: prometheus
  policyTypes:
    - Egress
  egress:
    - to:
        - namespaceSelector: { }
          podSelector:
            matchLabels:
              coherenceComponent: coherencePod
      ports:
        - port: metrics
          protocol: TCP</markup>

</div>
</div>

<h3 id="testing"><span class="merged" id="all.2U5C0Z" title="原文 : Testing Network Policies">ネットワーク・ポリシーのテスト</span></h3>
<div class="section">
<p><span class="merged" id="all.2iXkb8.spl1" title="原文 : At the time of writing this documentation, Kubernetes provides no way to verify the correctness of network policies.">このドキュメントの記述時点で、Kubernetesは、ネットワーク・ポリシーの正確性を検証する方法を提供しません。</span> <span class="merged" id="all.2iXkb8.spl2" title="原文 : It is easy to mess up a policy, in which case policies will either block too much traffic, in which case your application will work, or worse they will not be blocking access and leave a security hole.">ポリシーを混乱させるのは簡単です。その場合、ポリシーは大量のトラフィックをブロックし、その場合はアプリケーションが動作するか、さらに悪い場合はアクセスをブロックせず、セキュリティ・ホールを残します。</span> </p>

<p><span class="merged" id="all.3toRfX.spl1" title="原文 : As we have had various requests for help from customers who cannot get Coherence to work with network policies enabled, the Operator has a simple utility to test connectivity outside of Coherence.">Coherenceを有効にしてネットワーク・ポリシーを使用できない顧客からの支援を求める様々なリクエストがあったため、オペレータはCoherence外部の接続をテストする簡単なユーティリティを備えています。</span> <span class="merged" id="all.3toRfX.spl2" title="原文 : This will allow testing pf policies without the complications of having to start a Coherence server.">これにより、Coherenceサーバーを起動する必要がなくなり、PFポリシーをテストできます。</span> </p>

<p><span class="merged" id="all.3YrYAx.spl1" title="原文 : This example includes some simple yaml files that will create simulator Pods that listen on all the ports used by the Operator and by a Coherence cluster member.">この例には、オペレータおよびCoherenceクラスタ・メンバーによって使用されるすべてのポートをリスニングするシミュレータ・ポッドを作成する単純なyamlファイルが含まれています。</span> <span class="merged" id="all.3YrYAx.spl2" title="原文 : These simulator Pods are configured with the same labels that the real Operator and Coherence Pods would have and the same labels used by the network policies in this example.">これらのシミュレータ・ポッドは、実際のオペレータおよびCoherenceポッドと同じラベルと、この例のネットワーク・ポリシーで使用される同じラベルで構成されます。</span> <span class="merged" id="all.3YrYAx.spl3" title="原文 : Also included are some yaml files that start a test client, that simulates either the Operator connecting to Coherence Pods or a Coherence Pod connecting to the Operator and to other Coherence Pods.">また、テスト・クライアントを起動するYAMLファイルの一部も含まれており、オペレータとその他のCoherenceポッドに接続するオペレータまたはCoherenceポッドをシミュレートします。</span> </p>

<p><span class="merged" id="all.33GvUO" title="原文 : To run these tests, the Operator does not have to be installed.">これらのテストを実行するには、オペレータをインストールする必要はありません。</span></p>


<h4 id="_create_the_test_namespaces"><span class="merged" id="all.41Xp6z" title="原文 : Create the Test Namespaces">テスト・ネームスペースの作成</span></h4>
<div class="section">
<p><span class="merged" id="all.EA4iW.spl1" title="原文 : In this example we will assume the Operator will eventually be running in a namespace called coherence and the Coherence cluster will run in a namespace called coh-test.">この例では、オペレータが最終的に<code>coherence</code>というネームスペースで実行され、Coherenceクラスタが<code>coh-test</code>というネームスペースで実行されると想定しています。</span> <span class="merged" id="all.EA4iW.spl2" title="原文 : We can create the namespaces using kubectl"><code>kubectl</code>を使用してネームスペースを作成できます</span> </p>

<markup
lang="bash"

>kubectl create ns coherence</markup>

<markup
lang="bash"

>kubectl create ns coh-test</markup>

<p><span class="merged" id="all.Pq3hW" title="原文 : At this point there are no network policies installed, this will allow us to confirm the connectivity tests work.">この時点でネットワーク・ポリシーがインストールされていないため、接続テストの動作を確認できます。</span></p>

</div>

<h4 id="_start_the_operator_simulator"><span class="merged" id="all.1iNGLo" title="原文 : Start the Operator Simulator">オペレータ・シミュレータの起動</span></h4>
<div class="section">
<p><span class="merged" id="all.3Hq6Jh.spl1" title="原文 : The Operator simulator server should run in the coherence namespace.">オペレータ・シミュレータ・サーバーは、<code>coherence</code>ネームスペースで実行する必要があります。</span> <span class="merged" id="all.3Hq6Jh.spl2" title="原文 : It can be created using the following command:">これは、次のコマンドを使用して作成できます:</span> </p>

<markup
lang="bash"

>kubectl -n coherence apply -f examples/095_network_policies/manifests/net-test-operator-server.yaml</markup>

</div>

<h4 id="_start_the_coherence_cluster_simulator"><span class="merged" id="all.1vi68j" title="原文 : Start the Coherence Cluster Simulator">Coherenceクラスタ・シミュレータの起動</span></h4>
<div class="section">
<p><span class="merged" id="all.iZW8D.spl1" title="原文 : The Coherence cluster member simulator server should run in the coh-test namespace.">Coherenceクラスタ・メンバー・シミュレータ・サーバーは、<code>coh-test</code>ネームスペースで実行する必要があります。</span> <span class="merged" id="all.iZW8D.spl2" title="原文 : It can be created using the following command:">これは、次のコマンドを使用して作成できます:</span> </p>

<markup
lang="bash"

>kubectl -n coh-test apply -f examples/095_network_policies/manifests/net-test-coherence-server.yaml</markup>

</div>

<h4 id="_run_the_operator_test"><span class="merged" id="all.IaX7G" title="原文 : Run the Operator Test">オペレータ・テストの実行</span></h4>
<div class="section">
<p><span class="merged" id="all.1YAcAS.spl1" title="原文 : We can now run the Operator test Job.">これで、オペレータ・テスト・ジョブを実行できます。</span> <span class="merged" id="all.1YAcAS.spl2" title="原文 : This wil run a Kubernetes Job that simulates the Operator connecting to the Kubernetes API server and to the Operator Pods.">これは、Kubernetes APIサーバーおよびオペレータ・ポッドに接続するオペレータをシミュレートするKubernetesジョブを実行します。</span> </p>

<markup
lang="bash"

>kubectl -n coherence apply -f examples/095_network_policies/manifests/net-test-operator.yaml</markup>

<p><span class="merged" id="all.dSpay.spl1" title="原文 : The test Job should complete very quickly as it is only testing connectivity to various ports.">テスト・ジョブは、様々なポートへの接続のテストのみであるため、非常に迅速に完了する必要があります。</span> <span class="merged" id="all.dSpay.spl2" title="原文 : The results of the test can be seen by looking at the Pod log.">テストの結果は、ポッド・ログを参照することで確認できます。</span> <span class="merged" id="all.dSpay.spl3" title="原文 : The command below will display the log:">次のコマンドを実行すると、ログが表示されます:</span> </p>

<markup
lang="bash"

>kubectl -n coherence logs $(kubectl -n coherence get pod -l 'coherenceNetTest=operator-client' -o name)</markup>

<p><span class="merged" id="all.bSUmn" title="原文 : The output from a successful test will look like this:">成功したテストの出力は、次のようになります:</span></p>

<markup


>1.6727606592497227e+09	INFO	runner	Operator Version: 3.3.2
1.6727606592497835e+09	INFO	runner	Operator Build Date: 2023-01-03T12:25:58Z
1.6727606592500978e+09	INFO	runner	Operator Built By: jonathanknight
1.6727606592501197e+09	INFO	runner	Operator Git Commit: c8118585b8f3d72b083ab1209211bcea364c85c5
1.6727606592501485e+09	INFO	runner	Go Version: go1.19.2
1.6727606592501757e+09	INFO	runner	Go OS/Arch: linux/amd64
1.6727606592504115e+09	INFO	net-test	Starting test	{"Name": "Operator Simulator"}
1.6727606592504556e+09	INFO	net-test	Testing connectivity	{"PortName": "K8s API Server"}
1.6727606592664087e+09	INFO	net-test	Testing connectivity PASSED	{"PortName": "K8s API Server", "Version": "v1.24.7"}
1.6727606592674055e+09	INFO	net-test	Testing connectivity	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "Health", "Port": 6676}
1.6727606592770455e+09	INFO	net-test	Testing connectivity PASSED	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "Health", "Port": 6676}</markup>

<p><span class="merged" id="all.32c9Xz" title="原文 : We can see that the test has connected to the Kubernetes API server and has connected to the health port on the Coherence cluster test server in the coh-test namespace.">テストがKubernetes APIサーバーに接続され、<code>coh-test</code>ネームスペースでCoherenceクラスタ・テスト・サーバーのヘルス・ポートに接続していることがわかります。</span></p>

<p><span class="merged" id="all.hhJWb" title="原文 : The test Job can then be deleted:">その後、テスト・ジョブを削除できます:</span></p>

<markup
lang="bash"

>kubectl -n coherence delete -f examples/095_network_policies/manifests/net-test-operator.yaml</markup>

</div>

<h4 id="_run_the_cluster_member_test"><span class="merged" id="all.2Y78fQ" title="原文 : Run the Cluster Member Test">クラスタ・メンバー・テストの実行</span></h4>
<div class="section">
<p><span class="merged" id="all.3SzK7Q" title="原文 : The cluster member test simulates a Coherence cluster member connecting to other cluster members in the same namespace and also making calls to the Operator’s REST endpoint.">クラスタ・メンバー・テストは、同じネームスペース内の他のクラスタ・メンバーに接続し、オペレータのRESTエンドポイントへのコールも行うCoherenceクラスタ・メンバーをシミュレートします。</span></p>

<markup
lang="bash"

>kubectl -n coh-test apply -f examples/095_network_policies/manifests/net-test-coherence.yaml</markup>

<p><span class="merged" id="all.2kqnZ1.spl1" title="原文 : Again, the test should complete quickly as it is just connecting to various ports.">この場合も、テストは様々なポートに接続するだけで、すぐに完了します。</span> <span class="merged" id="all.2kqnZ1.spl2" title="原文 : The results of the test can be seen by looking at the Pod log.">テストの結果は、ポッド・ログを参照することで確認できます。</span> <span class="merged" id="all.2kqnZ1.spl3" title="原文 : The command below will display the log:">次のコマンドを実行すると、ログが表示されます:</span> </p>

<markup
lang="bash"

>kubectl -n coh-test logs $(kubectl -n coh-test get pod -l 'coherenceNetTest=coherence-client' -o name)</markup>

<p><span class="merged" id="all.bSUmn.1" title="原文 : The output from a successful test will look like this:">成功したテストの出力は、次のようになります:</span></p>

<markup


>1.6727631152848177e+09	INFO	runner	Operator Version: 3.3.2
1.6727631152849226e+09	INFO	runner	Operator Build Date: 2023-01-03T12:25:58Z
1.6727631152849536e+09	INFO	runner	Operator Built By: jonathanknight
1.6727631152849755e+09	INFO	runner	Operator Git Commit: c8118585b8f3d72b083ab1209211bcea364c85c5
1.6727631152849965e+09	INFO	runner	Go Version: go1.19.2
1.6727631152850187e+09	INFO	runner	Go OS/Arch: linux/amd64
1.6727631152852216e+09	INFO	net-test	Starting test	{"Name": "Cluster Member Simulator"}
1.6727631152852666e+09	INFO	net-test	Testing connectivity	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "UnicastPort1", "Port": 7575}
1.6727631152997334e+09	INFO	net-test	Testing connectivity PASSED	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "UnicastPort1", "Port": 7575}
1.6727631152998908e+09	INFO	net-test	Testing connectivity	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "UnicastPort2", "Port": 7576}
1.6727631153059115e+09	INFO	net-test	Testing connectivity PASSED	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "UnicastPort2", "Port": 7576}
1.6727631153063197e+09	INFO	net-test	Testing connectivity	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "Management", "Port": 30000}
1.6727631153116117e+09	INFO	net-test	Testing connectivity PASSED	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "Management", "Port": 30000}
1.6727631153119817e+09	INFO	net-test	Testing connectivity	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "Metrics", "Port": 9612}
1.6727631153187876e+09	INFO	net-test	Testing connectivity PASSED	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "Metrics", "Port": 9612}
1.6727631153189638e+09	INFO	net-test	Testing connectivity	{"Host": "net-test-operator-server.coherence.svc", "PortName": "OperatorRest", "Port": 8000}
1.6727631153265746e+09	INFO	net-test	Testing connectivity PASSED	{"Host": "net-test-operator-server.coherence.svc", "PortName": "OperatorRest", "Port": 8000}
1.6727631153267298e+09	INFO	net-test	Testing connectivity	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "Echo", "Port": 7}
1.6727631153340726e+09	INFO	net-test	Testing connectivity PASSED	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "Echo", "Port": 7}
1.6727631153342876e+09	INFO	net-test	Testing connectivity	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "ClusterPort", "Port": 7574}
1.6727631153406997e+09	INFO	net-test	Testing connectivity PASSED	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "ClusterPort", "Port": 7574}</markup>

<p><span class="merged" id="all.1IJvBY" title="原文 : The test client successfully connected to the Coherence cluster port (7475), the two unicast ports (7575 and 7576), the Coherence management port (30000), the Coherence metrics port (9612), the Operator REST port (8000), and the echo port (7).">テスト・クライアントは、Coherenceクラスタ・ポート(7475)、2つのユニキャスト・ポート(7575および7576)、Coherence管理ポート(30000)、Coherenceメトリクス・ポート(9612)、オペレータのRESTポート(8000)およびエコー・ポート(7)に正常に接続されました。</span></p>

<p><span class="merged" id="all.hhJWb.1" title="原文 : The test Job can then be deleted:">その後、テスト・ジョブを削除できます:</span></p>

<markup
lang="bash"

>kubectl -n coh-test delete -f examples/095_network_policies/manifests/net-test-coherence.yaml</markup>

</div>

<h4 id="_testing_the_operator_web_hook"><span class="merged" id="all.3wdLF3" title="原文 : Testing the Operator Web Hook">オペレータWebフックのテスト</span></h4>
<div class="section">
<p><span class="merged" id="all.Cx97g.spl1" title="原文 : The Operator has a web-hook that k8s calls to validate Coherence resource configurations and to provide default values.">オペレータには、k8sがCoherenceリソース構成をバリデートし、デフォルト値を提供するためにコールするwebフックがあります。</span> <span class="merged" id="all.Cx97g.spl2" title="原文 : Web hooks in Kubernetes use TLS by default and listen on port 443.">KubernetesのWebフックは、デフォルトでTLSを使用し、ポート443でリスニングします。</span> <span class="merged" id="all.Cx97g.spl3" title="原文 : The Operator server simulator also listens on port 443 to allow this connectivity to be tested.">オペレータ・サーバー・シミュレータは、この接続をテストできるようにポート443でも待機します。</span> </p>

<p><span class="merged" id="all.1EekDL.spl1" title="原文 : The network policy in this example that allows ingress to the web-hook allows any client to connect.">この例のネットワーク・ポリシーで、webフックへのイングレスを許可すると、すべてのクライアントが接続できるようになります。</span> <span class="merged" id="all.1EekDL.spl2" title="原文 : This is because it is not always simple to work out the IP address that the API server will connect to the web-hook from.">これは、APIサーバーがwebフックに接続するIPアドレスを簡単に操作できるとは限らないためです。</span> </p>

<p><span class="merged" id="all.3UKoKj.spl1" title="原文 : We can use the network tester to simulate this by running a Job that will connect to the web hook port.">ネットワーク・テスターを使用して、webフック・ポートに接続するジョブを実行することで、これをシミュレートできます。</span> <span class="merged" id="all.3UKoKj.spl2" title="原文 : The web-hook test job in this example does not label the Pod and can be run from the default namespace to simulate a random external connection.">この例のwebフック・テスト・ジョブはポッドにラベルを付けず、デフォルトのネームスペースから実行してランダムな外部接続をシミュレートできます。</span> </p>

<markup
lang="bash"

>kubectl -n default apply -f examples/095_network_policies/manifests/net-test-webhook.yaml</markup>

<p><span class="merged" id="all.2scWZt" title="原文 : We can then check the results of the Job by looking at the Pod log.">その後、ポッド・ログを参照してジョブの結果を確認できます。</span></p>

<markup
lang="bash"

>kubectl -n default logs $(kubectl -n default get pod -l 'coherenceNetTest=webhook-client' -o name)</markup>

<p><span class="merged" id="all.bSUmn.2" title="原文 : The output from a successful test will look like this:">成功したテストの出力は、次のようになります:</span></p>

<markup


>1.6727639834559627e+09	INFO	runner	Operator Version: 3.3.2
1.6727639834562948e+09	INFO	runner	Operator Build Date: 2023-01-03T12:25:58Z
1.6727639834563956e+09	INFO	runner	Operator Built By: jonathanknight
1.6727639834565024e+09	INFO	runner	Operator Git Commit: c8118585b8f3d72b083ab1209211bcea364c85c5
1.6727639834566057e+09	INFO	runner	Go Version: go1.19.2
1.6727639834567096e+09	INFO	runner	Go OS/Arch: linux/amd64
1.6727639834570327e+09	INFO	net-test	Starting test	{"Name": "Web-Hook Client"}
1.6727639834571698e+09	INFO	net-test	Testing connectivity	{"Host": "net-test-operator-server.coherence.svc", "PortName": "WebHook", "Port": 443}
1.6727639834791095e+09	INFO	net-test	Testing connectivity PASSED	{"Host": "net-test-operator-server.coherence.svc", "PortName": "WebHook", "Port": 443}</markup>

<p><span class="merged" id="all.3774Ny" title="原文 : We can see that the client successfully connected to port 443.">クライアントがポート443に正常に接続されたことがわかります。</span></p>

<p><span class="merged" id="all.hhJWb.2" title="原文 : The test Job can then be deleted:">その後、テスト・ジョブを削除できます:</span></p>

<markup
lang="bash"

>kubectl -n default delete -f examples/095_network_policies/manifests/net-test-webhook.yaml</markup>

</div>

<h4 id="_testing_ad_hoc_ports"><span class="merged" id="all.1MDXVL" title="原文 : Testing Ad-Hoc Ports">アドホック・ポートのテスト</span></h4>
<div class="section">
<p><span class="merged" id="all.2XYDr7.spl1" title="原文 : The test client is able to test connectivity to any host and port.">テスト・クライアントは、任意のホストおよびポートへの接続をテストできます。</span> <span class="merged" id="all.2XYDr7.spl2" title="原文 : For example suppose we want to simulate a Prometheus Pod connecting to the metrics port of a Coherence cluster.">たとえば、Coherenceクラスタのメトリクス・ポートに接続するPrometheusポッドをシミュレートするとします。</span> <span class="merged" id="all.2XYDr7.spl3" title="原文 : The server simulator is listening on port 9612, so we need to run the client to connect to that port.">サーバー・シミュレータはポート9612でリスニングしているため、クライアントを実行してそのポートに接続する必要があります。</span> </p>

<p><span class="merged" id="all.A3oiu.spl1" title="原文 : We can create a Job yaml file to run the test client.">テスト・クライアントを実行するJob yamlファイルを作成できます。</span> <span class="merged" id="all.A3oiu.spl2" title="原文 : As the test will simulate a Prometheus client we add the labels that a standard Prometheus Pod would have and that we also use in the network policies in this example.">テストはPrometheusクライアントをシミュレートするため、標準のPrometheusポッドが持つラベルと、この例のネットワーク・ポリシーでも使用するラベルを追加します。</span> </p>

<p><span class="merged" id="all.3L0vNH.spl1" title="原文 : In the Job yaml, we need to set the HOST, PORT and optionally the PROTOCOL environment variables.">ジョブyamlでは、<code>HOST</code>、<code>PORT</code>およびオプションで<code>PROTOCOL</code>環境変数を設定する必要があります。</span> <span class="merged" id="all.3L0vNH.spl2" title="原文 : In this test, the host is the DNS name for the Service created for the Coherence server simulator net-test-coherence-server.coh-test.svc, the port is the metrics port 9612 and the protocol is tcp.">このテストでは、ホストはCoherenceサーバー・シミュレータ<code>net-test-coherence-server.coh-test.svc</code>用に作成されたサービスのDNS名、ポートはメトリクス・ポート<code>9612</code>、プロトコルは<code>tcp</code>です。</span> </p>

<markup
lang="yaml"
title="manifests/net-test-client.yaml"
>apiVersion: batch/v1
kind: Job
metadata:
  name: test-client
  labels:
    app.kubernetes.io/name: prometheus
    coherenceNetTest: client
spec:
  template:
    metadata:
      labels:
        app.kubernetes.io/name: prometheus
        coherenceNetTest: client
    spec:
      containers:
      - name: net-test
        image: container-registry.oracle.com/middleware/coherence-operator:3.5.1
        env:
          - name: HOST
            value: net-test-coherence-server.coh-test.svc
          - name: PORT
            value: "9612"
          - name: PROTOCOL
            value: tcp
        command:
          - /files/runner
        args:
          - net-test
          - client
      restartPolicy: Never
  backoffLimit: 4</markup>

<p><span class="merged" id="all.SYL5L" title="原文 : We need to run the test Job in the monitoring namespace, which is the same namespace that Prometheus is usually deployed into."><code>monitoring</code>ネームスペースでテスト・ジョブを実行する必要があります。このネームスペースは通常、Prometheusがデプロイされるのと同じネームスペースです。</span></p>

<markup
lang="bash"

>kubectl -n monitoring apply -f examples/095_network_policies/manifests/net-test-client.yaml</markup>

<p><span class="merged" id="all.2scWZt.1" title="原文 : We can then check the results of the Job by looking at the Pod log.">その後、ポッド・ログを参照してジョブの結果を確認できます。</span></p>

<markup
lang="bash"

>kubectl -n monitoring logs $(kubectl -n monitoring get pod -l 'coherenceNetTest=client' -o name)</markup>

<p><span class="merged" id="all.bSUmn.3" title="原文 : The output from a successful test will look like this:">成功したテストの出力は、次のようになります:</span></p>

<markup


>1.6727665901488597e+09	INFO	runner	Operator Version: 3.3.2
1.6727665901497366e+09	INFO	runner	Operator Build Date: 2023-01-03T12:25:58Z
1.6727665901498337e+09	INFO	runner	Operator Built By: jonathanknight
1.6727665901498716e+09	INFO	runner	Operator Git Commit: c8118585b8f3d72b083ab1209211bcea364c85c5
1.6727665901498966e+09	INFO	runner	Go Version: go1.19.2
1.6727665901499205e+09	INFO	runner	Go OS/Arch: linux/amd64
1.6727665901501486e+09	INFO	net-test	Starting test	{"Name": "Simple Client"}
1.6727665901501985e+09	INFO	net-test	Testing connectivity	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "net-test-coherence-server.coh-test.svc-9612", "Port": 9612}
1.6727665901573336e+09	INFO	net-test	Testing connectivity PASSED	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "net-test-coherence-server.coh-test.svc-9612", "Port": 9612}</markup>

<p><span class="merged" id="all.4FigtH" title="原文 : We can see that the test client successfully connected to the Coherence cluster member simulator on port 9612.">テスト・クライアントがポート9612でCoherenceクラスタ・メンバー・シミュレータに正常に接続されたことがわかります。</span></p>

<p><span class="merged" id="all.hhJWb.3" title="原文 : The test Job can then be deleted:">その後、テスト・ジョブを削除できます:</span></p>

<markup
lang="bash"

>kubectl -n monitoring delete -f examples/095_network_policies/manifests/net-test-client.yaml</markup>

</div>

<h4 id="_test_with_network_policies"><span class="merged" id="all.2AaWQU" title="原文 : Test with Network Policies">ネットワーク・ポリシーを使用したテスト</span></h4>
<div class="section">
<p><span class="merged" id="all.49kMSM.spl1" title="原文 : All the above tests ran successfully without any network policies.">前述のすべてのテストは、ネットワーク・ポリシーなしで正常に実行されました。</span> <span class="merged" id="all.49kMSM.spl2" title="原文 : We can now start to apply policies and re-run the tests to see what happens.">ポリシーの適用を開始し、テストを再実行して何が起きるかを確認できます。</span> </p>

<p><span class="merged" id="all.2iqhy.spl1" title="原文 : In a secure environment we would start with a policy that blocks all access and then gradually open up required ports.">セキュアな環境では、すべてのアクセスをブロックし、必要なポートを徐々に開けるポリシーから始めます。</span> <span class="merged" id="all.2iqhy.spl2" title="原文 : We can apply the deny-all.yaml policy and then re-run the tests."><code>deny-all.yaml</code>ポリシーを適用してから、テストを再実行できます。</span> <span class="merged" id="all.2iqhy.spl3" title="原文 : We should apply the policy to both of the namespaces we are using in this example:">この例で使用している両方のネームスペースにポリシーを適用する必要があります:</span> </p>

<markup
lang="bash"

>kubectl -n coherence apply -f examples/095_network_policies/manifests/deny-all.yaml
kubectl -n coh-test apply -f examples/095_network_policies/manifests/deny-all.yaml</markup>

<p><span class="merged" id="all.3VSUaq" title="原文 : Now, re-run the Operator test client:">次に、オペレータ・テスト・クライアントを再実行します:</span></p>

<markup
lang="bash"

>kubectl -n coherence apply -f examples/095_network_policies/manifests/net-test-operator.yaml</markup>

<p><span class="merged" id="all.aO2Bn" title="原文 : and check the result:">結果を確認します:</span></p>

<markup
lang="bash"

>kubectl -n coherence logs $(kubectl -n coherence get pod -l 'coherenceNetTest=operator-client' -o name)</markup>

<markup


>1.6727671834237397e+09	INFO	runner	Operator Version: 3.3.2
1.6727671834238796e+09	INFO	runner	Operator Build Date: 2023-01-03T12:25:58Z
1.6727671834239576e+09	INFO	runner	Operator Built By: jonathanknight
1.6727671834240365e+09	INFO	runner	Operator Git Commit: c8118585b8f3d72b083ab1209211bcea364c85c5
1.6727671834240875e+09	INFO	runner	Go Version: go1.19.2
1.6727671834241736e+09	INFO	runner	Go OS/Arch: linux/amd64
1.6727671834244306e+09	INFO	net-test	Starting test	{"Name": "Operator Simulator"}
1.6727671834245417e+09	INFO	net-test	Testing connectivity	{"PortName": "K8s API Server"}
1.6727672134268515e+09	INFO	net-test	Testing connectivity FAILED	{"PortName": "K8s API Server", "Error": "Get \"https://10.96.0.1:443/version?timeout=32s\": dial tcp 10.96.0.1:443: i/o timeout"}
1.6727672134269848e+09	INFO	net-test	Testing connectivity	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "Health", "Port": 6676}
1.6727672234281697e+09	INFO	net-test	Testing connectivity FAILED	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "Health", "Port": 6676, "Error": "dial tcp: lookup net-test-coherence-server.coh-test.svc: i/o timeout"}</markup>

<p><span class="merged" id="all.2Vs4oV.spl1" title="原文 : We can see that the test client failed to connect to the Kubernetes API server and failed to connect to the Coherence cluster health port.">テスト・クライアントがKubernetes APIサーバーへの接続に失敗したこと、およびCoherenceクラスタ・ヘルス・ポートへの接続に失敗したことがわかります。</span> <span class="merged" id="all.2Vs4oV.spl2" title="原文 : This means the deny-all policy is working.">これは、すべての拒否ポリシーが機能していることを意味します。</span> </p>

<p><span class="merged" id="all.HZyTc" title="原文 : We can now apply the various polices to fix the test">様々なポリシーを適用してテストを修正できます</span></p>

<markup
lang="bash"

>kubectl -n coherence apply -f examples/095_network_policies/manifests/allow-dns.yaml
kubectl -n coherence apply -f examples/095_network_policies/manifests/allow-k8s-api-server.yaml
kubectl -n coherence apply -f examples/095_network_policies/manifests/allow-operator-cluster-member-egress.yaml
kubectl -n coherence apply -f examples/095_network_policies/manifests/allow-operator-rest-ingress.yaml
kubectl -n coherence apply -f examples/095_network_policies/manifests/allow-webhook-ingress-from-all.yaml

kubectl -n coh-test apply -f examples/095_network_policies/manifests/allow-dns.yaml
kubectl -n coh-test apply -f examples/095_network_policies/manifests/allow-cluster-member-access.yaml
kubectl -n coh-test apply -f examples/095_network_policies/manifests/allow-cluster-member-operator-access.yaml
kubectl -n coh-test apply -f examples/095_network_policies/manifests/allow-metrics-ingress.yaml</markup>

<p><span class="merged" id="all.R45lW" title="原文 : Now, delete and re-run the Operator test client:">次に、Operatorテスト・クライアントを削除して再実行します:</span></p>

<markup
lang="bash"

>kubectl -n coherence delete -f examples/095_network_policies/manifests/net-test-operator.yaml
kubectl -n coherence apply -f examples/095_network_policies/manifests/net-test-operator.yaml</markup>

<p><span class="merged" id="all.aO2Bn.1" title="原文 : and check the result:">結果を確認します:</span></p>

<markup
lang="bash"

>kubectl -n coherence logs $(kubectl -n coherence get pod -l 'coherenceNetTest=operator-client' -o name)</markup>

<p><span class="merged" id="all.3SKjdi" title="原文 : Now with the policies applied the test should have passed.">ポリシーを適用すると、テストに合格したはずです。</span></p>

<markup


>1.6727691273634596e+09	INFO	runner	Operator Version: 3.3.2
1.6727691273635025e+09	INFO	runner	Operator Build Date: 2023-01-03T12:25:58Z
1.6727691273635256e+09	INFO	runner	Operator Built By: jonathanknight
1.6727691273635616e+09	INFO	runner	Operator Git Commit: c8118585b8f3d72b083ab1209211bcea364c85c5
1.6727691273637156e+09	INFO	runner	Go Version: go1.19.2
1.6727691273637407e+09	INFO	runner	Go OS/Arch: linux/amd64
1.6727691273639407e+09	INFO	net-test	Starting test	{"Name": "Operator Simulator"}
1.6727691273639877e+09	INFO	net-test	Testing connectivity	{"PortName": "K8s API Server"}
1.6727691273857167e+09	INFO	net-test	Testing connectivity PASSED	{"PortName": "K8s API Server", "Version": "v1.24.7"}
1.6727691273858056e+09	INFO	net-test	Testing connectivity	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "Health", "Port": 6676}
1.6727691273933685e+09	INFO	net-test	Testing connectivity PASSED	{"Host": "net-test-coherence-server.coh-test.svc", "PortName": "Health", "Port": 6676}</markup>

<p><span class="merged" id="all.gKL3y" title="原文 : The other tests can also be re-run and should also pass.">他のテストも再実行でき、合格する必要があります。</span></p>

</div>

<h4 id="_clean_up"><span class="merged" id="all.GvSAu" title="原文 : Clean-Up">クリーンアップ</span></h4>
<div class="section">
<p><span class="merged" id="all.2qUwy0" title="原文 : Once the tests are completed, the test servers and Jobs can be deleted.">テストが完了したら、テスト・サーバーおよびジョブを削除できます。</span></p>

<markup
lang="bash"

>kubectl -n coherence delete -f examples/095_network_policies/manifests/net-test-operator-server.yaml
kubectl -n coh-test delete -f examples/095_network_policies/manifests/net-test-coherence-server.yaml</markup>

</div>
</div>
</div>
</doc-view>
