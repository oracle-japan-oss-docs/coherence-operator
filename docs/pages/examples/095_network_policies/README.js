<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_using_network_policies"><span class="merged" id="all.3HggH2" title="原文 : Using Network Policies">ネットワーク・ポリシーの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3qAAFk.spl1" title="原文 : This example covers running the Coherence Operator and Coherence clusters in Kubernetes with network policies.">この例では、ネットワーク・ポリシーを使用してKubernetesでCoherence OperatorおよびCoherenceクラスタを実行する方法について説明します。</span> <span class="merged" id="all.3qAAFk.spl2" title="原文 : In Kubernetes, a Network Policy is an application-centric construct which allow you to specify how a pod is allowed to communicate with various network &quot;entities&quot; (we use the word &quot;entity&quot; here to avoid overloading the more common terms such as &quot;endpoints&quot; and &quot;services&quot;, which have specific Kubernetes connotations) over the network.">Kubernetesでは、<a href="https://kubernetes.io/docs/concepts/services-networking/network-policies/" id="" target="_blank" >「ネットワーク・ポリシー」</a>はアプリケーション中心のコンストラクトであり、これによって、ポッドが様々なネットワーク・エンティティと通信する方法を指定できます(ここでは「エンティティ」という語を使用して、特定のKubernetes接続を持つ「エンドポイント」や「サービス」より一般的な用語のオーバーロードを回避します)。</span> </p>


<h3 id="_introduction"><span class="merged" id="all.4LJMHk"  title="原文:: Introduction">概要</span></h3>
<div class="section">
<p><span class="merged" id="all.3dATRc.spl1" title="原文 : Kubernetes network policies specify the access permissions for groups of pods, similar to security groups in the cloud are used to control access to VM instances and similar to firewalls.">Kubernetesネットワーク・ポリシーでは、ポッド・グループのアクセス権限を指定します。これは、クラウド内のセキュリティ・グループと同様で、VMインスタンスへのアクセスを制御するために使用され、ファイアウォールと同様です。</span> <span class="merged" id="all.3dATRc.spl2" title="原文 : The default behaviour of a Kubernetes cluster is to allow all Pods to freely talk to each other.">Kubernetesクラスタのデフォルト動作は、すべてのポッドが相互に自由に通信できるようにすることです。</span> <span class="merged" id="all.3dATRc.spl3" title="原文 : Whilst this sounds insecure, originally Kubernetes was designed to orchestrate services that communicated with each other, it was only later that network policies were added.">この音は安全ではありませんが、当初、Kubernetesは相互に通信するサービスを調整するように設計されていましたが、ネットワーク・ポリシーが追加されたのは後ほどでした。</span> </p>

<p><span class="merged" id="all.3jSq03" title="原文 : A network policy is applied to a Kubernetes namespace and controls ingress into and egress out of Pods in that namespace.">ネットワーク・ポリシーはKubernetesネームスペースに適用され、そのネームスペースのポッドへのイングレスおよびポッドからのエグレスを制御します。</span></p>

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
  podSelector: { }
  policyTypes:
    - Ingress
    - Egress</markup>

<p><span class="merged" id="all.2X5nny" title="原文 : The policy above can be installed into the coherence namespace with the following command:">前述のポリシーは、次のコマンドを使用して<code>coherence</code>ネームスペースにインストールできます:</span></p>

<markup
lang="bash"

>kubectl -n coherence apply -f manifests/deny-all.yaml</markup>

<p><span class="merged" id="all.4P4BeP.spl1" title="原文 : After installing the deny-all policy, any Pod in the coherence namespace will not be allowed either ingress, nor egress."><code>deny-all</code>ポリシーのインストール後、<code>coherence</code>ネームスペース内の<code>Pod</code>は、イングレスもエグレスも許可されません。</span> <span class="merged" id="all.4P4BeP.spl2" title="原文 : Very secure, but probably impractical for almost all use cases.">非常に安全ですが、ほとんどすべてのユース・ケースでは実用的ではありません。</span> <span class="merged" id="all.4P4BeP.spl3" title="原文 : After applying the deny-all policy more polices can be added to gradually open up the required access to run the Coherence Operator and Coherence clusters."><code>deny-all</code>ポリシーの適用後、Coherence OperatorおよびCoherenceクラスタを実行するために必要なアクセスを徐々にオープンするために、より多くのポリシーを追加できます。</span> </p>

</div>

<h4 id="dns"><span class="merged" id="all.XtxOa" title="原文 : Allow DNS">DNSを許可</span></h4>
<div class="section">
<p><span class="merged" id="all.2jHeTN" title="原文 : When enforcing egress, such as with the deny-all policy above, it is important to remember that virtually every Pod needs to communicate with other Pods or Services, and will therefore need to access DNS.">上記の<code>deny-all</code>ポリシーなどでエグレスを適用する場合は、事実上すべてのポッドが他のポッドまたはサービスと通信する必要があるため、DNSにアクセスする必要があることに注意してください。</span></p>

<p><span class="merged" id="all.1qRz1X" title="原文 : The policy below allows all Pods (using podSelector: {}) egress to UDP port 53 in all namespaces.">次のポリシーでは、すべてのネームスペースでUDPポート53へのすべてのポッド(<code>podSelector: {}</code>を使用)エグレスが許可されます。</span></p>

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
          port: 53</markup>

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
          port: 53</markup>

<p><span class="merged" id="all.2X5nny.1" title="原文 : The policy above can be installed into the coherence namespace with the following command:">前述のポリシーは、次のコマンドを使用して<code>coherence</code>ネームスペースにインストールできます:</span></p>

<markup
lang="bash"

>kubectl -n coherence apply -f manifests/allow-dns-kube-system.yaml</markup>

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

<p><span class="merged" id="all.4FwWnB" title="原文 : In the above case the IP address of the API server would be 192.168.99.100.">前述の場合、APIサーバーのIPアドレスは<code>192.168.99.100</code>になります。</span></p>

<p><span class="merged" id="all.RN8Hj" title="原文 : In a simple KinD development cluster, the API server IP address can be obtained using kubectl as shown below:">単純なKinD開発クラスタでは、次に示すように、<code>kubectl</code>を使用してAPIサーバーのIPアドレスを取得できます:</span></p>

<markup
lang="bash"

>$ kubectl get pod -n kube-system kube-apiserver-operator-control-plane -o wide
NAME                                    READY   STATUS    RESTARTS   AGE     IP           NODE
kube-apiserver-operator-control-plane   1/1     Running   0          7h43m   172.18.0.5   operator-control-plane</markup>

<p><span class="merged" id="all.42p0PH" title="原文 : In the above case the IP address of the API server would be 172.18.0.5.">前述の場合、APIサーバーのIPアドレスは<code>172.18.0.5</code>になります。</span></p>

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
  egress:
    - to:
        - ipBlock:
            cidr: 172.18.0.5/32
      ports:
        - port: 6443
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

<p><span class="merged" id="all.3IVnXi.spl1" title="原文 : The following example demonstrates this.">次の例でこれを説明します。</span> <span class="merged" id="all.3IVnXi.spl2" title="原文 : Assume there is a minimal`Coherence` yaml file named minimal.yaml that will create a single member Coherence cluster.">単一のメンバーCoherenceクラスタを作成する最小限の`Coherence` yaml file name <code>minimal.yaml</code>があるとします。</span> </p>

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

<p><span class="merged" id="all.1BkxKk" title="原文 : The trick here is to know where the webhook call is coming from so that a network policy can be sufficiently secure.">ここでは、ネットワーク・ポリシーが十分にセキュアになるように、webフック・コールがどこから発生しているかを把握します。</span></p>

<p><span class="merged" id="all.3E5hiw.spl1" title="原文 : The simplest solution is to allow ingress from any IP address to the webhook with a policy like that shown below.">最も簡単な解決策は、次に示すようなポリシーを使用して、任意のIPアドレスからwebフックへのイングレスを許可することです。</span> <span class="merged" id="all.3E5hiw.spl2" title="原文 : This policy uses and empty from: [] attribute, which allows access from anywhere.">このポリシーでは、任意の場所からのアクセスを許可する空の<code>from: []</code>属性を使用します。</span> </p>

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

<p><span class="merged" id="all.2CK5wX" title="原文 : Allowing all access to the webhook is not very secure, so a more restrictive from attribute could be used to limit access to the IP address of the Kubernetes API server.">webフックへのすべてのアクセスを許可することは安全ではないため、Kubernetes APIサーバーのIPアドレスへのアクセスを制限するために、より制限的な<code>from</code>属性を使用できます。</span></p>

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
  name: coherence-operator-cluster-member-egress
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

<p><span class="merged" id="all.2uKY4g.spl1" title="原文 : When using the default Coherence images, for example ghcr.io/oracle/coherence-ce:22.06 the Extend proxy is already configured to run on a fixed port 20000.">デフォルトのCoherenceイメージを使用する場合(たとえば、<code>ghcr.io/oracle/coherence-ce:22.06</code>)、Extendプロキシはすでに固定ポート<code>20000</code>で実行されるように構成されています。</span> <span class="merged" id="all.2uKY4g.spl2" title="原文 : When using this image, or any image that uses the default Coherence cache configuration file, this port can be changed by setting the COHERENCE_EXTEND_PORT environment variable.">このイメージ、またはデフォルトのCoherenceキャッシュ構成ファイルを使用するイメージを使用する場合、<code>COHERENCE_EXTEND_PORT</code>環境変数を設定してこのポートを変更できます。</span> </p>

<p><span class="merged" id="all.14x9rV.spl1" title="原文 : When using the Coherence Concurrent extensions over Extend, the Concurrent Extend proxy also needs to be configured with a fixed port.">拡張を介してCoherenceコンカレント拡張を使用する場合、コンカレント拡張プロキシも固定ポートで構成する必要があります。</span> <span class="merged" id="all.14x9rV.spl2" title="原文 : When using the default Coherence images, for example ghcr.io/oracle/coherence-ce:22.06 the Concurrent Extend proxy is already configured to run on a fixed port 20001.">デフォルトのCoherenceイメージを使用する場合(たとえば、<code>ghcr.io/oracle/coherence-ce:22.06</code>)、コンカレント拡張プロキシはすでに固定ポート<code>20001</code>で実行するように構成されています。</span> <span class="merged" id="all.14x9rV.spl3" title="原文 : When using this image, or any image that uses the default Coherence cache configuration file, this port can be changed by setting the COHERENCE_CONCURRENT_EXTEND_PORT environment variable.">このイメージ、またはデフォルトのCoherenceキャッシュ構成ファイルを使用するイメージを使用する場合、<code>COHERENCE_CONCURRENT_EXTEND_PORT</code>環境変数を設定してこのポートを変更できます。</span> </p>

<p><span class="merged" id="all.eo3uq.spl1" title="原文 : For the examples below, a Coherence deployment has the following configuration.">次の例では、<code>Coherence</code>デプロイメントに次の構成があります。</span> <span class="merged" id="all.eo3uq.spl2" title="原文 : This will expose Extend on a port named extend with a port number of 20000, and a port named extend-concurrent with a port number of 20001.">これにより、ポート番号が<code>20000</code>の<code>extend</code>という名前のポートと、ポート番号が<code>20001</code>の<code>extend-concurrent</code>という名前のポートでExtendが公開されます。</span> <span class="merged" id="all.eo3uq.spl3" title="原文 : The polices described below will then use the port names, so if required the port number could be changed and the policies would still work.">次に、次に示すポリシーではポート名が使用されるため、必要に応じてポート番号を変更でき、ポリシーは引き続き機能します。</span> </p>

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
    - name: extend-concurrent
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
        - port: extend-concurrent
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
        - port: extend-concurrent
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

<p><span class="merged" id="all.RKdQt.spl1" title="原文 : When using the default Coherence images, for example ghcr.io/oracle/coherence-ce:22.06 the gRPC proxy is already configured to run on a fixed port 1408.">デフォルトのCoherenceイメージ(<code>ghcr.io/oracle/coherence-ce:22.06</code>など)を使用する場合、gRPCプロキシは固定ポート<code>1408</code>で実行するようにすでに構成されています。</span> <span class="merged" id="all.RKdQt.spl2" title="原文 : The gRPC proxy port can be changed by setting the COHERENCE_GRPC_PORT environment variable.">gRPCプロキシ・ポートは、<code>COHERENCE_GRPC_PORT</code>環境変数を設定することによって変更できます。</span> </p>

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
        - port: extend-concurrent
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

<h4 id="metrics"><span class="merged" id="all.12J63u"  title="原文:: Coherence Metrics">Coherenceメトリック</span></h4>
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
</div>
</doc-view>
