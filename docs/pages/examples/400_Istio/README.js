<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_using_coherence_with_istio"><span class="merged" id="all.4OqKpf" title="原文 : Using Coherence with Istio">IstioでのCoherenceの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.4UycGL.spl1" title="原文 : You can run the Coherence cluster and manage then using the Coherence Operator alongside Istio.">Coherenceクラスタを実行し、<a href="https://istio.io" id="" target="_blank" >Istio</a>とともにCoherence Operatorを使用して管理できます。</span> <span class="merged" id="all.4UycGL.spl2" title="原文 : Coherence clusters managed with the Coherence Operator 3.2.0 and later work with Istio 1.9.1 and later.">Coherence Operator 3.2.0で管理されるCoherenceクラスタは、Istio 1.9.1以降を操作します。</span> <span class="merged" id="all.4UycGL.spl3" title="原文 : Coherence caches can be accessed from outside the Coherence cluster via Coherence*Extend, REST, and other supported Coherence clients.">Coherenceキャッシュには、Coherence*Extend、REST、サポートされているその他のCoherenceクライアントを介して、Coherenceクラスタの外部からアクセスできます。</span> <span class="merged" id="all.4UycGL.spl4" title="原文 : Using Coherence clusters with Istio does not require the Coherence Operator to also be using Istio (and vice-versa) .">IstioでCoherenceクラスタを使用する場合、Coherence OperatorもIstioを使用する必要はありません(逆も同様)。</span> <span class="merged" id="all.4UycGL.spl5" title="原文 : The Coherence Operator can manage Coherence clusters independent of whether those clusters are using Istio or not.">Coherence Operatorは、これらのクラスタがIstioを使用しているかどうかに関係なく、Coherenceクラスタを管理できます。</span> </p>

<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p.4"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.bumGS" title="原文 : The current support for Istio has the following limitation:">Istioの現在のサポートには、次の制限があります:</span></p>

<p><span class="merged" id="all.1ca6PD.spl1" title="原文 : Ports that are exposed in the ports list of the container spec in a Pod will be intercepted by the Envoy proxy in the Istio side-car container.">ポッドのコンテナ仕様のポート・リストに公開されるポートは、Istioサイドカー・コンテナのEnvoyプロキシによってインターセプトされます。</span> <span class="merged" id="all.1ca6PD.spl2" title="原文 : Coherence cluster traffic must not pass through Envoy proxies as this will break Coherence, so the Coherence cluster port must never be exposed as a container port if using Istio.">Coherenceクラスタ・トラフィックはEnvoyプロキシを渡さないでください。Coherenceが破損するため、Istioを使用している場合はCoherenceクラスタ・ポートをコンテナ・ポートとして公開しないでください。</span> <span class="merged" id="all.1ca6PD.spl3" title="原文 : There is no real reason to expose the Coherence cluster port in a container because there is no requirement to have this port externally visible.">このポートを外部から表示する必要がないため、コンテナにCoherenceクラスタ・ポートを公開する理由はありません。</span> </p>
</p>
</div>

<h3 id="_prerequisites"><span class="merged" id="all.2LZvWc.5"  title="原文:: Prerequisites">前提条件</span></h3>
<div class="section">
<p><span class="merged" id="all.2G7Qr4" title="原文 : The instructions assume that you are using a Kubernetes cluster with Istio installed and configured already.">この手順では、Istioがインストールされ、すでに構成されているKubernetesクラスタを使用していることを前提としています。</span></p>

</div>

<h3 id="_using_the_coherence_operator_with_istio"><span class="merged" id="all.4XxsVx" title="原文 : Using the Coherence operator with Istio">IstioでのCoherenceオペレータの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3dHXz2.spl1" title="原文 : To use Coherence operator with Istio, you can deploy the operator into a namespace which has Istio automatic sidecar injection enabled.">IstioでCoherenceオペレータを使用するには、Istio自動サイドカー・インジェクションが有効になっているネームスペースにオペレータをデプロイできます。</span> <span class="merged" id="all.3dHXz2.spl2" title="原文 : Before installing the operator, create the namespace in which you want to run the Coherence operator and label it for automatic injection.">オペレータをインストールする前に、Coherenceオペレータを実行するネームスペースを作成し、自動インジェクション用にラベル付けします。</span> </p>

<markup
lang="bash"

>kubectl create namespace coherence
kubectl label namespace coherence istio-injection=enabled</markup>

<p><span class="merged" id="all.1KxioB" title="原文 : Istio Sidecar AutoInjection is done automatically when you label the coherence namespace with istio-injection.">Istio Sidecar AutoInjectionは、istioインジェクションでコヒーレンス・ネームスペースにラベル付けすると自動的に実行されます。</span></p>

<p><span class="merged" id="all.1alxtK" title="原文 : After the namespace is labeled, you can install the operator using your preferred method in the Operator Installation Guide.">ネームスペースにラベルを付けると、オペレータ<router-link to="/docs/installation/01_installation">「インストール・ガイド」</router-link>の優先メソッドを使用してオペレータをインストールできます。</span></p>

<p><span class="merged" id="all.8zuvh" title="原文 : After installed operator, use the following command to confirm the operator is running:">オペレータのインストール後、次のコマンドを使用して、オペレータが実行中であることを確認します:</span></p>

<markup
lang="bash"

>kubectl get pods -n coherence

NAME                                                     READY   STATUS    RESTARTS   AGE
coherence-operator-controller-manager-7d76f9f475-q2vwv   2/2     Running   1          17h</markup>

<p><span class="merged" id="all.42E0ql.spl1" title="原文 : 2/2 in READY column means that there are 2 containers running in the operator Pod.">READY列の2/2は、オペレータPodで実行されている2つのコンテナがあることを意味します。</span> <span class="merged" id="all.42E0ql.spl2" title="原文 : One is Coherence operator and the other is Envoy Proxy.">1つはCoherenceオペレータで、もう1つはEnvoyプロキシです。</span> </p>

</div>

<h3 id="_creating_a_coherence_cluster_with_istio"><span class="merged" id="all.4VO6QC" title="原文 : Creating a Coherence cluster with Istio">Istioを使用したCoherenceクラスタの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.1uY7Jg.spl1" title="原文 : You can configure your cluster to run with Istio automatic sidecar injection enabled.">Istio自動サイドカー・インジェクションを有効にして実行するようにクラスタを構成できます。</span> <span class="merged" id="all.1uY7Jg.spl2" title="原文 : Before creating your cluster, create the namespace in which you want to run the cluster and label it for automatic injection.">クラスタを作成する前に、クラスタを実行するネームスペースを作成し、自動インジェクション用にラベルを付けます。</span> </p>

<markup
lang="bash"

>kubectl create namespace coherence-example
kubectl label namespace coherence-example istio-injection=enabled</markup>

<p><span class="merged" id="all.1q9Wxn" title="原文 : There is no other requirements to run Coherence in Istio environment.">Istio環境でCoherenceを実行するための他の要件はありません。</span></p>

<p><span class="merged" id="all.40P3WW" title="原文 : The following is an example that creates a cluster named example-cluster-storage:">次に、example-cluster-storageという名前のクラスタを作成する例を示します:</span></p>

<p><span class="merged" id="all.JY1of" title="原文 : example.yaml">example.yaml</span></p>

<markup
lang="bash"

># Example
apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: example-cluster-storage</markup>

<markup
lang="bash"

>$ kubectl -n coherence-example apply -f example.yaml</markup>

<p><span class="merged" id="all.4ElVtj" title="原文 : After you installed the Coherence cluster, run the following command to view the pods:">Coherenceクラスタをインストールした後、次のコマンドを実行してポッドを表示します:</span></p>

<markup
lang="bash"

>$ kubectl -n coherence-example get pods

NAME                                             READY   STATUS    RESTARTS   AGE
example-cluster-storage-0                        2/2     Running   0          45m
example-cluster-storage-1                        2/2     Running   0          45m
example-cluster-storage-2                        2/2     Running   0          45m</markup>

<p><span class="merged" id="all.dPvOM.spl1" title="原文 : You can see that 3 members in the cluster are running with 3 pods. 2/2 in READY column means that there are 2 containers running in each Pod.">クラスタ内の3つのメンバーが3つのポッドで実行されていることがわかります。READY列の2/2は、各ポッドで実行されているコンテナが2つあることを意味します。</span> <span class="merged" id="all.dPvOM.spl2" title="原文 : One is Coherence member and the other is Envoy Proxy.">一方はCoherenceメンバーで、もう一方はEnvoyプロキシです。</span> </p>

</div>

<h3 id="_tls"><span class="merged" id="all.14Fmv3"  title="原文:: TLS">TLS</span></h3>
<div class="section">
<p><span class="merged" id="all.2MDF0c.spl1" title="原文 : Coherence cluster works with mTLS.">CoherenceクラスタはmTLSで動作します。</span> <span class="merged" id="all.2MDF0c.spl2" title="原文 : Coherence client can also support TLS through Istio Gateway with TLS termination to connect to Coherence cluster running inside kubernetes.">Coherenceクライアントは、TLS終端を使用してIstio Gatewayを介したTLSをサポートし、kubernetes内で実行されているCoherenceクラスタに接続することもできます。</span> <span class="merged" id="all.2MDF0c.spl3" title="原文 : For example, you can apply the following Istio Gateway and Virtual Service in the namespace of the Coherence cluster.">たとえば、次のIstio Gatewayおよび仮想サービスをCoherenceクラスタのネームスペースに適用できます。</span> <span class="merged" id="all.2MDF0c.spl4" title="原文 : Before applying the gateway, create a secret for the credential from the certificate and key (e.g. server.crt and server.key) to be used by the Gateway:">ゲートウェイを適用する前に、ゲートウェイで使用される証明書およびキー(例、server.crtおよびserver.key)から資格証明のシークレットを作成します:</span> </p>

<markup
lang="bash"

>kubectl create -n istio-system secret tls extend-credential --key=server.key --cert=server.crt</markup>

<p><span class="merged" id="all.IQD0W" title="原文 : Then, create a keystore (server.jks) to be used by the Coherence Extend client, e.g.:">次に、Coherence Extendクライアントで使用するキーストア(server.jks)を作成します。例:</span></p>

<markup
lang="bash"

>openssl pkcs12 -export -in server.crt -inkey server.key -chain -CAfile ca.crt -name "server" -out server.p12

keytool -importkeystore -deststorepass password -destkeystore server.jks -srckeystore server.p12 -srcstoretype PKCS12</markup>

<p><span class="merged" id="all.3tlbAi"  title="原文: tlsGateway.yaml">tlsGateway.yaml</span></p>

<markup
lang="bash"

>apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: tlsgateway
spec:
  selector:
    istio: ingressgateway # use istio default ingress gateway
  servers:
  - port:
      number: 8043
      name: tls
      protocol: TLS
    tls:
      mode: SIMPLE
      credentialName: "extend-credential" # the secret created in the previous step
      maxProtocolVersion: TLSV1_3
    hosts:
    - "*"</markup>

<p><span class="merged" id="all.4bFjxe"  title="原文: tlsVS.yaml">tlsVS.yaml</span></p>

<markup
lang="bash"

>apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: extend
spec:
  hosts:
  - "*"
  gateways:
  - tlsgateway
  tcp:
  - match:
    route:
    - destination:
        host: example-cluster-proxy-proxy  # the service name used to expose the Extend proxy port</markup>

<p><span class="merged" id="all.dO86X" title="原文 : Apply the Gateway and VirtualService:">ゲートウェイおよびVirtualServiceを適用します:</span></p>

<markup
lang="bash"

>kubectl apply -f tlsGateway.yaml -n coherence-example
kubectl apply -f tlsVS.yaml -n coherence-example</markup>

<p><span class="merged" id="all.raDuM.spl1" title="原文 : Then configure a Coherence*Extend client to connect to the proxy server via TLS protocol.">次に、TLSプロトコルを介してプロキシ・サーバーに接続するようにCoherence*Extendクライアントを構成します。</span> <span class="merged" id="all.raDuM.spl2" title="原文 : Below is an example of a &lt;remote-cache-scheme&gt; configuration of an Extend client using TLS port 8043 configured in the Gateway and server.jks created earlier in the example.">次に、ゲートウェイで構成されたTLSポート8043を使用し、前述の例で作成したserver.jksを使用してExtendクライアントの&lt;remote-cache-scheme>構成の例を示します。</span> </p>

<p><span class="merged" id="all.3tYSju" title="原文 : client-cache-config.xml">client-cache-config.xml</span></p>

<div class="listing">
<markup>...
    &lt;remote-cache-scheme&gt;
        &lt;scheme-name&gt;extend-direct&lt;/scheme-name&gt;
        &lt;service-name&gt;ExtendTcpProxyService&lt;/service-name&gt;
        &lt;initiator-config&gt;
            &lt;tcp-initiator&gt;
                &lt;socket-provider&gt;
                    &lt;ssl&gt;
                        &lt;protocol&gt;TLS&lt;/protocol&gt;
                        &lt;trust-manager&gt;
                            &lt;algorithm&gt;PeerX509&lt;/algorithm&gt;
                            &lt;key-store&gt;
                                &lt;url&gt;file:server.jks&lt;/url&gt;
                                &lt;password&gt;password&lt;/password&gt;
                            &lt;/key-store&gt;
                        &lt;/trust-manager&gt;
                    &lt;/ssl&gt;
                &lt;/socket-provider&gt;
                &lt;remote-addresses&gt;
                    &lt;socket-address&gt;
                        &lt;address&gt;$INGRESS_HOST&lt;/address&gt;
                        &lt;port&gt;8043&lt;/port&gt;
                    &lt;/socket-address&gt;
                &lt;/remote-addresses&gt;
            &lt;/tcp-initiator&gt;
        &lt;/initiator-config&gt;
    &lt;/remote-cache-scheme&gt;
...</markup>
</div>

<p><span class="merged" id="all.30qeM" title="原文 : If you are using Docker for Desktop, $INGRESS_HOST is 127.0.0.1, and you can use the Kubectl port-forward to allow the Extend client to access the Coherence cluster from your localhost:">デスクトップにDockerを使用している場合、<code>$INGRESS_HOST</code>は<code>127.0.0.1</code>で、Kubectl port-forwardを使用して、ExtendクライアントがlocalhostからCoherenceクラスタにアクセスできるようにします:</span></p>

<markup
lang="bash"

>kubectl port-forward -n istio-system &lt;istio-ingressgateway-pod&gt; 8043:8043</markup>

</div>

<h3 id="_prometheus"><span class="merged" id="all.S6LiV"  title="原文:: Prometheus">Prometheus</span></h3>
<div class="section">
<p><span class="merged" id="all.1D9FW4.spl1" title="原文 : The coherence metrics that record and track the health of Coherence cluster using Prometheus are also available in Istio environment and can be viewed through Grafana.">Prometheusを使用してCoherenceクラスタのヘルスを記録および追跡するコヒーレンス・メトリクスは、Istio環境でも使用でき、Grafanaを介して表示できます。</span> <span class="merged" id="all.1D9FW4.spl2" title="原文 : However, Coherence cluster traffic is not visible by Istio.">ただし、Coherenceクラスタ・トラフィックはIstioでは表示されません。</span> </p>

</div>

<h3 id="_traffic_visualization"><span class="merged" id="all.1R5zVa" title="原文 : Traffic Visualization">トラフィックの可視化</span></h3>
<div class="section">
<p><span class="merged" id="all.PwTz5.spl1" title="原文 : Istio provides traffic management capabilities, including the ability to visualize traffic in Kiali.">Istioは、<a href="https://kiali.io" id="" target="_blank" >Kiali</a>内のトラフィックをビジュアル化する機能など、トラフィック管理機能を提供します。</span> <span class="merged" id="all.PwTz5.spl2" title="原文 : You do not need to change your applications to use this feature.">この機能を使用するためにアプリケーションを変更する必要はありません。</span> <span class="merged" id="all.PwTz5.spl3" title="原文 : The Istio proxy (envoy) sidecar that is injected into your pods provides it.">ポッドにインジェクトされたIstioプロキシ(envoy)サイドカーが提供します。</span> <span class="merged" id="all.PwTz5.spl4" title="原文 : The image below shows an example with traffic flow.">次の図は、トラフィック・フローの例を示しています。</span> <span class="merged" id="all.PwTz5.spl5" title="原文 : In this example, you can see how the traffic flows in from the Istio gateway on the left, to the cluster services, and then to the individual cluster members.">この例では、トラフィックが左側のIstioゲートウェイからクラスタ・サービス、個々のクラスタ・メンバーにどのように流れるかを確認できます。</span> <span class="merged" id="all.PwTz5.spl6" title="原文 : This example has storage members (example-cluster-storage), a proxy member running proxy service (example-cluster-proxy), and a REST member running http server (example-cluster-rest).">この例では、ストレージ・メンバー(example-cluster-storage)、プロキシ・サービスを実行しているプロキシ・メンバー(example-cluster-proxy)、およびhttpサーバー(example-cluster-rest)を実行しているRESTメンバーがあります。</span> <span class="merged" id="all.PwTz5.spl7" title="原文 : However, Coherence cluster traffic between members is not visible.">ただし、メンバー間のCoherenceクラスタ・トラフィックは表示されません。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="istioKiali" src="./images/images/istioKiali.png" width="1024" /> </v-card-text> </v-card>

<p><span class="merged" id="all.3LEnbm" title="原文 : To learn more, see Istio traffic management.">詳細は、<a href="https://istio.io/latest/docs/concepts/traffic-management/" id="" target="_blank" >「Istioトラフィック管理」</a>を参照してください。</span></p>

</div>
</div>
</doc-view>
