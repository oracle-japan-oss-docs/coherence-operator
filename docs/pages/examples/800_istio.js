<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_istio_support"><span class="merged" id="all.3BJaXa.1" title="原文 : Istio Support">Istioサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.J2FaR.spl1" title="原文 : You can run the Coherence cluster and manage then using the Coherence Operator alongside Istio.">Coherenceクラスタを実行し、Coherence OperatorとIstioを使用して管理できます。</span> <span class="merged" id="all.J2FaR.spl2" title="原文 : Coherence clusters managed with the Coherence Operator 3.2.0 and later work with Istio 1.9.1 and later.">Coherenceクラスタは、Coherence Operator 3.2.0以降で管理され、Istio 1.9.1以降で動作します。</span> <span class="merged" id="all.J2FaR.spl3" title="原文 : Coherence caches can be accessed from outside the Coherence cluster via Coherence*Extend, REST, and other supported Coherence clients.">Coherenceキャッシュには、Coherence*Extend、REST、およびその他のサポートされるCoherenceクライアントを介して、Coherenceクラスタの外部からアクセスできます。</span> <span class="merged" id="all.J2FaR.spl4" title="原文 : Using Coherence clusters with Istio does not require the Coherence Operator to also be using Istio (and vice-versa) .">IstioでCoherenceクラスタを使用する場合、Coherence OperatorはIstio(またはその逆)も使用する必要はありません。</span> <span class="merged" id="all.J2FaR.spl5" title="原文 : The Coherence Operator can manage Coherence clusters independent of whether those clusters are using Istio or not.">Coherence Operatorは、これらのクラスタがIstioを使用しているかどうかに関係なく、Coherenceクラスタを管理できます。</span> </p>

<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.bumGS" title="原文 : The current support for Istio has the following limitation:">Istioの現在のサポートには、次の制限があります:</span></p>

<p><span class="merged" id="all.1ca6PD.spl1" title="原文 : Ports that are exposed in the ports list of the container spec in a Pod will be intercepted by the Envoy proxy in the Istio side-car container.">ポッド内のコンテナ・スペックのポート・リストで公開されるポートは、Istioサイドカー・コンテナ内のEnvoyプロキシによってインターセプトされます。</span> <span class="merged" id="all.1ca6PD.spl2" title="原文 : Coherence cluster traffic must not pass through Envoy proxies as this will break Coherence, so the Coherence cluster port must never be exposed as a container port if using Istio.">Coherenceクラスタ・トラフィックはEnvoyプロキシを通過しないでください。これはCoherenceを壊すため、Istioを使用する場合は、Coherenceクラスタ・ポートをコンテナ・ポートとして公開しないでください。</span> <span class="merged" id="all.1ca6PD.spl3" title="原文 : There is no real reason to expose the Coherence cluster port in a container because there is no requirement to have this port externally visible.">このポートを外部から表示する必要がないため、コンテナにCoherenceクラスタ・ポートを公開する実際の理由はありません。</span> </p>
</p>
</div>

<h3 id="_prerequisites"><span class="merged" id="all.2LZvWc.3"  title="原文:: Prerequisites">前提条件</span></h3>
<div class="section">
<p><span class="merged" id="all.2G7Qr4" title="原文 : The instructions assume that you are using a Kubernetes cluster with Istio installed and configured already.">この手順では、Istioがすでにインストールおよび構成されているKubernetesクラスタを使用していることを前提としています。</span></p>

</div>

<h3 id="_using_the_coherence_operator_with_istio"><span class="merged" id="all.4XxsVx" title="原文 : Using the Coherence operator with Istio">IstioでのCoherence Operatorの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3dHXz2.spl1" title="原文 : To use Coherence operator with Istio, you can deploy the operator into a namespace which has Istio automatic sidecar injection enabled.">IstioでCoherence Operatorを使用するには、Istio自動サイドカー・インジェクションが有効になっているネームスペースにオペレータをデプロイできます。</span> <span class="merged" id="all.3dHXz2.spl2" title="原文 : Before installing the operator, create the namespace in which you want to run the Coherence operator and label it for automatic injection.">オペレータをインストールする前に、Coherence Operatorを実行するネームスペースを作成し、自動インジェクション用にラベルを付けます。</span> </p>

<markup
lang="bash"

>kubectl create namespace coherence
kubectl label namespace coherence istio-injection=enabled</markup>

<p><span class="merged" id="all.1KxioB" title="原文 : Istio Sidecar AutoInjection is done automatically when you label the coherence namespace with istio-injection.">Istio Sidecar AutoInjectionは、istio-injectでCoherenceネームスペースにラベルを付けると自動的に実行されます。</span></p>

<p><span class="merged" id="all.490EQ2" title="原文 : After the namespace is labeled, you can install the operator using your preferred method in the Operator Installation Guide.">ネームスペースのラベル付け後、優先メソッドを使用してオペレータをオペレータ<a href="https://oracle.github.io/coherence-operator/docs/latest/#/installation/01_installation" id="" target="_blank" >「インストレーション・ガイド」</a>にインストールできます。</span></p>

<p><span class="merged" id="all.8zuvh" title="原文 : After installed operator, use the following command to confirm the operator is running:">インストール済オペレータの後、次のコマンドを使用して、オペレータが実行中であることを確認します:</span></p>

<markup
lang="bash"

>kubectl get pods -n coherence

NAME                                                     READY   STATUS    RESTARTS   AGE
coherence-operator-controller-manager-7d76f9f475-q2vwv   2/2     Running   1          17h</markup>

<p><span class="merged" id="all.42E0ql.spl1" title="原文 : 2/2 in READY column means that there are 2 containers running in the operator Pod.">READY列の2/2は、オペレータPodで2つのコンテナが実行されていることを意味します。</span> <span class="merged" id="all.42E0ql.spl2" title="原文 : One is Coherence operator and the other is Envoy Proxy.">1つはCoherence Operatorで、もう1つはEnvoyプロキシです。</span> </p>

</div>

<h3 id="_creating_a_coherence_cluster_with_istio"><span class="merged" id="all.4VO6QC" title="原文 : Creating a Coherence cluster with Istio">Istioを使用したCoherenceクラスタの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.1uY7Jg.spl1" title="原文 : You can configure your cluster to run with Istio automatic sidecar injection enabled.">Istio自動サイドカー・インジェクションを有効にしてクラスタを実行するように構成できます。</span> <span class="merged" id="all.1uY7Jg.spl2" title="原文 : Before creating your cluster, create the namespace in which you want to run the cluster and label it for automatic injection.">クラスタを作成する前に、クラスタを実行するネームスペースを作成し、自動インジェクション用にラベルを付けます。</span> </p>

<markup
lang="bash"

>kubectl create namespace coherence-example
kubectl label namespace coherence-example istio-injection=enabled</markup>

<p><span class="merged" id="all.1q9Wxn" title="原文 : There is no other requirements to run Coherence in Istio environment.">Istio環境でCoherenceを実行する他の要件はありません。</span></p>

<p><span class="merged" id="all.40P3WW" title="原文 : The following is an example that creates a cluster named example-cluster-storage:">example-cluster-storageという名前のクラスタを作成する例を次に示します:</span></p>

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

<p><span class="merged" id="all.dPvOM.spl1" title="原文 : You can see that 3 members in the cluster are running with 3 pods. 2/2 in READY column means that there are 2 containers running in each Pod.">クラスタ内の3つのメンバーが3つのポッドで実行中であることがわかります。READY列の2/2は、各ポッドに2つのコンテナが実行されていることを意味します。</span> <span class="merged" id="all.dPvOM.spl2" title="原文 : One is Coherence member and the other is Envoy Proxy.">1つはCoherenceメンバーで、もう1つはEnvoyプロキシです。</span> </p>

</div>

<h3 id="_tls"><span class="merged" id="all.14Fmv3"  title="原文:: TLS">TLS</span></h3>
<div class="section">
<p><span class="merged" id="all.14GrBt.spl1" title="原文 : Coherence cluster works with mTLS.">CoherenceクラスタはmTLSで動作します。</span> <span class="merged" id="all.14GrBt.spl2" title="原文 : Coherence client can also support TLS through Istio Gateway with TLS termination to connect to Coherence cluster running inside kubernetes.">Coherenceクライアントは、Istio GatewayとTLS終了を介してTLSをサポートし、kubernetes内で実行されているCoherenceクラスタに接続することもできます。</span> <span class="merged" id="all.14GrBt.spl3" title="原文 : For example, you can apply the following Istio Gateway and Virtual Service in the namespace of the Coherence cluster.">たとえば、Coherenceクラスタのネームスペースに次のIstio GatewayおよびVirtual Serviceを適用できます。</span> <span class="merged" id="all.14GrBt.spl4" title="原文 : Before applying the gateway, create a secret for the credential from the certiticate and key (e.g. server.crt and server.key) to be used by the Gateway:">ゲートウェイを適用する前に、ゲートウェイが使用する証明書およびキー(server.crtやserver.keyなど)から資格証明のシークレットを作成します:</span> </p>

<markup
lang="bash"

>kubectl create -n istio-system secret tls extend-credential --key=server.key --cert=server.crt</markup>

<p><span class="merged" id="all.IQD0W" title="原文 : Then, create a keystore (server.jks) to be used by the Coherence Extend client, e.g.:">次に、Coherence拡張クライアントが使用するキーストア(server.jks)を作成します。次に例を示します:</span></p>

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

<p><span class="merged" id="all.dO86X" title="原文 : Apply the Gateway and VirtualService:">GatewayおよびVirtualServiceを適用します:</span></p>

<markup
lang="bash"

>kubectl apply -f tlsGateway.yaml -n coherence-example
kubectl apply -f tlsVS.yaml -n coherence-example</markup>

<p><span class="merged" id="all.1kUPlg.spl1" title="原文 : Then configure a Coherence*Extend client to connect to the proxy server via TLS protocol.">次に、TLSプロトコルを介してプロキシ・サーバーに接続するようにCoherence*Extendクライアントを構成します。</span> <span class="merged" id="all.1kUPlg.spl2" title="原文 : Below is an example of a &lt;remoce-cache-scheme&gt; configuration of an Extend client using TLS port 8043 configured in the Gateway and server.jks created earlier in the example.">次に、ゲートウェイで構成されたTLSポート8043と、前述の例で作成したserver.jksを使用した拡張クライアントの&lt;remoce-cache-scheme>構成の例を示します。</span> </p>

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

<p><span class="merged" id="all.hLJu6" title="原文 : If you are using Docker for Desktop, $INGRESS_HOST is 127.0.0.1 and you can use the Kubectl port-forward to allow the Extend client to access the Coherence cluster from your localhost:">デスクトップにDockerを使用している場合、$INGRESS_HOSTは127.0.0.1で、Kubectl port-forwardを使用して、クライアントをローカル・ホストからCoherenceクラスタにアクセスできるようにします:</span></p>

<markup
lang="bash"

>kubectl port-forward -n istio-system &lt;istio-ingressgateway-pod&gt; 8043:8043</markup>

</div>

<h3 id="_prometheus"><span class="merged" id="all.S6LiV"  title="原文:: Prometheus">Prometheus</span></h3>
<div class="section">
<p><span class="merged" id="all.1HX4gc.spl1" title="原文 : The coherence metrics that record and track the health of Coherence cluster using Prometheus are also available in Istio environment and can be viewed through Granfana.">Prometheusを使用してCoherenceクラスタの健全性を記録および追跡するコヒーレンス・メトリクスは、Istio環境で利用でき、Granfanaを介して表示できます。</span> <span class="merged" id="all.1HX4gc.spl2" title="原文 : However, Coherence cluster traffic is not visible by Istio.">ただし、Coherenceクラスタ・トラフィックはIstioでは表示されません。</span> </p>

</div>

<h3 id="_traffic_visualization"><span class="merged" id="all.1R5zVa" title="原文 : Traffic Visualization">Traffic Visualization</span></h3>
<div class="section">
<p><span class="merged" id="all.3US2it.spl1" title="原文 : Istio provides traffic management capabilities, including the ability to visualize traffic in Kiali.">Istioは、Kialiのトラフィックをビジュアル化する機能など、トラフィック管理機能を提供します。</span> <span class="merged" id="all.3US2it.spl2" title="原文 : You do not need to change your applications to use this feature.">この機能を使用するためにアプリケーションを変更する必要はありません。</span> <span class="merged" id="all.3US2it.spl3" title="原文 : The Istio proxy (envoy) sidecar that is injected into your pods provides it.">ポッドにインジェクトされたIstioプロキシ(envoy)サイドカーにより提供されます。</span> <span class="merged" id="all.3US2it.spl4" title="原文 : The image below shows an example with traffic flow.">次のイメージは、トラフィック・フローの例を示しています。</span> <span class="merged" id="all.3US2it.spl5" title="原文 : In this example, you can see how the traffic flows in from the Istio gateway on the left, to the cluster services, and then to the individual cluster members.">この例では、トラフィックが左側のIstioゲートウェイからクラスタ・サービスに流れ、各クラスタ・メンバーに流れている様子を確認できます。</span> <span class="merged" id="all.3US2it.spl6" title="原文 : This example has storage members (example-cluster-storage), a proxy member running proxy service (example-cluster-proxy), and a REST member running http server (example-cluster-rest).">この例には、ストレージ・メンバー(example-cluster-storage)、プロキシ・サービスを実行しているプロキシ・メンバー(example-cluster-proxy)、およびhttpサーバーを実行しているRESTメンバー(example-cluster-rest)があります。</span> <span class="merged" id="all.3US2it.spl7" title="原文 : However, Coherence cluster traffic between members is not visible.">ただし、メンバー間のCoherenceクラスタ・トラフィックは表示されません。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="istioKiali" src="./images/istioKiali.png" width="1024" /> </v-card-text> </v-card>

<p><span class="merged" id="all.3LEnbm" title="原文 : To learn more, see Istio traffic management.">詳細は、<a href="https://istio.io/latest/docs/concepts/traffic-management/" id="" target="_blank" >Istio traffic management</a>を参照してください。</span></p>

</div>
</div>
</doc-view>
