<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_kubernetes_horizontal_pod_autoscaler_example"><span class="merged" id="all.4S0GCZ" title="原文 : Kubernetes Horizontal Pod autoscaler Example">Kubernetes水平ポッド自動スケーリングの例</span></h2>
<div class="section">
<p><span class="merged" id="all.Bt582.spl1" title="原文 : This example shows how to use the Kubernetes Horizontal Pod Autoscaler to scale Coherence clusters.">この例では、Kubernetes水平ポッド自動スケーリングを使用してCoherenceクラスタをスケーリングする方法を示します。</span> <span class="merged" id="all.Bt582.spl2" title="原文 : You can find the source code in the Operator GitHub Repo">ソース・コードは<a href="https://github.com/oracle/coherence-operator/tree/master/examples/autoscaler" id="" target="_blank" >「オペレータGitHubリポジトリ」</a>にあります</span> </p>

</div>

<h2 id="_how_does_the_horizontal_pod_autoscaler_work"><span class="merged" id="all.3ikH0K" title="原文 : How Does the Horizontal Pod autoscaler Work">水平ポッドの自動スケーリングの動作</span></h2>
<div class="section">
<p><span class="merged" id="all.1zRMiS" title="原文 : There is a lot of good documentation on the HPA, particularly the Kubernetes documentation.">HPAには、特に<a href="https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/" id="" target="_blank" >「Kubernetesドキュメント」</a>に関する多くのドキュメントがあります。</span></p>

<p><span class="merged" id="all.3Um8dr.spl1" title="原文 : The HPA uses metrics, which it obtains from one of the Kubernetes metrics APIs.">HPAではメトリクスが使用され、KubernetesメトリクスAPIのいずれかから取得されます。</span> <span class="merged" id="all.3Um8dr.spl2" title="原文 : Many cloud providers and custom Kubernetes installations have metrics features that may be able to expose those metrics to the custom/metrics.k8s.io API.">多くのクラウド・プロバイダおよびカスタムKubernetesインストールには、それらのメトリクスを<code>custom/metrics.k8s.io</code> APIに公開できるメトリクス機能があります。</span> <span class="merged" id="all.3Um8dr.spl3" title="原文 : It is possible to even do everything yourself and build a custom REST endpoint that serves custom metrics to the HPA.">すべて自分で行うこともでき、カスタム・メトリクスをHPAに提供するカスタムRESTエンドポイントを構築することもできます。</span> <span class="merged" id="all.3Um8dr.spl4" title="原文 : Those alternatives are beyond the scope of this example though so to keep things simple we will use Prometheus.">これらの選択肢は、この例の範囲を超えるものですが、目的をシンプルにするために、Prometheusを使用します。</span> <span class="merged" id="all.3Um8dr.spl5" title="原文 : The diagram below shows, at a high level, how this works.">次の図は、この動作の概要を示しています。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="自動スケーリング" src="./images/images/autoscaler.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.1DrLL7.spl1" title="原文 : Prometheus will obtain metrics from the Coherence Pod&rsquo;s metrics endpoints.">Prometheusは、Coherenceポッドのメトリクス・エンドポイントからメトリクスを取得します。</span> <span class="merged" id="all.1DrLL7.spl2" title="原文 : The Prometheus Adapter exposes certain configured metrics polled from Prometheus as custom Kubernetes metrics.">Prometheusアダプタは、Prometheusからポーリングされる特定の構成済メトリクスをカスタムKubernetesメトリクスとして公開します。</span> <span class="merged" id="all.1DrLL7.spl3" title="原文 : The HPA is configured to poll the custom metrics and use those to scale the Coherence resource (which will in turn cause the Coherence Operator to scale the StatefulSet).">HPAはカスタム・メトリクスをポーリングするように構成され、それらのメトリクスを使用して<code>Coherence</code>リソースをスケーリングします(その結果、Coherence Operatorは<code>StatefulSet</code>をスケーリングします)。</span> </p>

</div>

<h2 id="_autoscaling_coherence_clusters"><span class="merged" id="all.3GcPV7" title="原文 : Autoscaling Coherence Clusters">Coherenceクラスタの自動スケーリング</span></h2>
<div class="section">
<p><span class="merged" id="all.1nZPEP.spl1" title="原文 : This example will show how to configure the HPA to scale Coherence clusters based on heap usage metrics.">この例では、ヒープ使用量メトリクスに基づいてCoherenceクラスタをスケーリングするようにHPAを構成する方法を示します。</span> <span class="merged" id="all.1nZPEP.spl2" title="原文 : As Coherence stores data in memory, monitoring heap usage and using it to scale seems a sensible approach.">Coherenceはデータをメモリーに格納するため、ヒープ使用量のモニタリングおよびスケールに使用すると、適切なアプローチになります。</span> </p>

<p><span class="merged" id="all.2YpAyC.spl1" title="原文 : The Coherence CRD supports the scale sub-resource, which means that the Kubernetes HPA can be used to scale a Coherence deployment."><code>Coherence</code> CRDは<code>scale</code>サブリソースをサポートしているため、Kubernetes HPAを使用して<code>Coherence</code>デプロイメントをスケーリングできます。</span> <span class="merged" id="all.2YpAyC.spl2" title="原文 : In this example we are going to use heap usage as the metric - or to be more specific the amount of heap in use after the last garbage collection.">この例では、メトリックとしてヒープ使用量を使用 - または、最後のガベージ・コレクション<em>「後に」</em>使用されたヒープの量をより具体的にします。</span> <span class="merged" id="all.2YpAyC.spl3" title="原文 : This is an important point, plain heap usage is a poor metric to use for scaling decisions because the heap may be very full at a given point in time, but most of that memory may be garbage so scaling on the plain heap usage figure may cause the cluster to scale up needlessly as a milli-second later a GC could run, and the heap use shrinks down to acceptable levels.">これは重要なポイントであり、特定の時点でヒープが非常にいっぱいになる可能性があるため、スケールのディシジョンに使用するプレーン・ヒープ使用量は低いメトリックです。しかし、そのメモリーの大部分がガベージになる可能性があるため、プレーン・ヒープ使用量の図でスケール・アップすると、クラスタが1ミリ秒後に実行でき、ヒープの使用によって許容範囲レベルが縮小されることがあります。</span> </p>

<p><span class="merged" id="all.24jLgY.spl1" title="原文 : The problem is that there is no single metric in a JVM that gives heap usage after garbage collection.">問題は、ガベージ・コレクション後にヒープ使用量を指定するJVMに単一のメトリックがないことです。</span> <span class="merged" id="all.24jLgY.spl2" title="原文 : Coherence has some metrics that report this value, but they are taken from the MemoryPool MBeans and this is not reliable for scaling.">Coherenceには、この値をレポートするいくつかのメトリクスがありますが、これらは<code>MemoryPool</code> MBeansから取得されるため、スケーリングに信頼できません。</span> <span class="merged" id="all.24jLgY.spl3" title="原文 : For example, if the JVM is using the G1 collector the G1 Old Gen memory pool value for heap use after garbage collection will be zero unless a full GC has run.">たとえば、JVMでG1コレクタを使用している場合、ガベージ・コレクション後にヒープに使用する<code>G1 Old Gen</code>メモリー・プール値は、完全なGCが実行されていないかぎりゼロになります。</span> <span class="merged" id="all.24jLgY.spl4" title="原文 : It is quite possible to almost fill the heap without running a full GC so this figure could remain zero or be wildly inaccurate.">全GCを実行せずにヒープをほぼ一杯にすることができるため、この数字はゼロのままになるか、不正確になる可能性があります。</span> </p>

<p><span class="merged" id="all.c040V.spl1" title="原文 : A more reliable way to work out the heap usage is to obtain the values for the different heap memory pools from the Garbage Collector MBeans.">ヒープ使用量を明らかにするより確実な方法は、ガベージ・コレクタMBeansから異なるヒープ・メモリー・プールの値を取得することです。</span> <span class="merged" id="all.c040V.spl2" title="原文 : There could be multiple of these MBeans with different names depending on which collector has been configured for the JVM.">JVMに対して構成されているコレクタに応じて、異なる名前を持つMBeansが複数存在する可能性があります。</span> <span class="merged" id="all.c040V.spl3" title="原文 : The Garbage Collector Mbeans have a LastGCcInfo attribute, which is a composite attribute containing information about the last garbage collection that ran on this collector.">ガベージ・コレクタMbeansには、<code>LastGCcInfo</code>属性があります。これは、このコレクタで実行された最後のガベージ・コレクションに関する情報を含むコンポジット属性です。</span> <span class="merged" id="all.c040V.spl4" title="原文 : One of the attributes is the endTime, which we can use to determine which collector&rsquo;s LastGCcInfo is the most recent.">属性の1つは<code>endTime</code>で、どのコレクタの<code>LastGCcInfo</code>が最新かを判断するために使用できます。</span> <span class="merged" id="all.c040V.spl5" title="原文 : Once we have this we can obtain the memoryUsageAfterGc attribute for the last gc, which is a map of memory pool name to heap use data after the GC.">これが完了すると、最後のgcの<code>memoryUsageAfterGc</code>属性を取得できます。これは、GC後にデータをヒープで使用するメモリー・プール名のマップです。</span> <span class="merged" id="all.c040V.spl6" title="原文 : We can use this to then sum up the usages for the different heap memory pools.">これを使用して、様々なヒープ・メモリー・プールの使用量を合計できます。</span> </p>

<p><span class="merged" id="all.1KXW29.spl1" title="原文 : The Java code in this example contains a simple MBean class HeapUsage and corresponding MBean interface HeapUsageMBean that obtain heap use metrics in the way detailed above.">この例のJavaコードには、単純なMBeanクラス<code>HeapUsage</code>および対応するMBeanインタフェース<code>HeapUsageMBean</code>が含まれており、これに基づいて、ヒープ使用メトリクスを取得します。</span> <span class="merged" id="all.1KXW29.spl2" title="原文 : There is also a configuration file custom-mbeans.xml that Coherence will use to automatically add the custom MBean to Coherence management and metrics.">CoherenceがカスタムMBeanをCoherence管理およびメトリクスに自動的に追加するために使用する構成ファイル<code>custom-mbeans.xml</code>もあります。</span> <span class="merged" id="all.1KXW29.spl3" title="原文 : There is Coherence documentation on how to add custom metrics and how to register custom MBeans."><a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/manage/using-coherence-metrics.html#GUID-CFC31D23-06B8-49AF-8996-ADBA806E0DD9" id="" target="_blank" >「カスタム・メトリクスの追加方法」</a>および<a href="https://docs.oracle.com/en/middleware/standalone/coherence/14.1.1.0/manage/registering-custom-mbeans.html#GUID-1EE749C5-BC0D-4353-B5FE-1C5DCDEAE48C" id="" target="_blank" >「カスタムMBeansの登録方法」</a>にCoherenceドキュメントがあります。</span> </p>

<p><span class="merged" id="all.4VrEGv.spl1" title="原文 : The custom heap use MBean will be added with an ObjectName of Coherence:type=HeapUsage,nodeId=1 where nodeId will change to match the Coherence member id for the specific JVM.">カスタム・ヒープの使用MBeanは、<code>Coherence:type=HeapUsage,nodeId=1</code>のObjectNameで追加されます。ここで、<code>nodeId</code>は、特定のJVMのCoherenceメンバーIDと一致するように変更されます。</span> <span class="merged" id="all.4VrEGv.spl2" title="原文 : There will be one heap usage MBean for each cluster member.">各クラスタ・メンバーには、1つのヒープ使用量MBeanがあります。</span> </p>

<p><span class="merged" id="all.4Eg0Lq.spl1" title="原文 : The Coherence metrics framework will expose the custom metrics with metric names made up from the MBean domain name, type, and the attribute name.">Coherenceメトリクス・フレームワークは、MBeanドメイン名、タイプおよび属性名から構成されるメトリック名を使用して、カスタム・メトリクスを公開します。</span> <span class="merged" id="all.4Eg0Lq.spl2" title="原文 : The MBean has attribute names Used and PercentageUsed, so the metric names will be:">MBeanには属性名<code>Used</code>および<code>PercentageUsed</code>があるため、メトリック名は次のようになります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2iWPmR"  title="原文: Coherence.HeapUsage.Used"><code>Coherence.HeapUsage.Used</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2LolzE"  title="原文: Coherence.HeapUsage.PercentageUsed"><code>Coherence.HeapUsage.PercentageUsed</code></span></p>

</li>
</ul>
<p><span class="merged" id="all.3WCSJt.spl1" title="原文 : These metrics will be scoped as application metrics, as opposed to Coherence standard metrics that are vendor scoped.">これらのメトリクスは、ベンダー・スコープであるCoherence標準メトリクスではなく、アプリケーション・メトリクスとしてスコープ設定されます。</span> <span class="merged" id="all.3WCSJt.spl2" title="原文 : This means that in Prometheus the names will be converted to:">これは、Prometheusでは名前が次のように変換されることを意味します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2EGa2l"  title="原文: application:coherence_heap_usage_used"><code>application:coherence_heap_usage_used</code></span></p>

</li>
<li>
<p><span class="merged" id="all.4GeXGv"  title="原文: application:coherence_heap_usage_percentage_used"><code>application:coherence_heap_usage_percentage_used</code></span></p>

</li>
</ul>
<p><span class="merged" id="all.2pyEYg" title="原文 : The metrics will have corresponding tags to identify which cluster member (Pod) they relate to.">メトリクスには、関連するクラスタ・メンバー(<code>Pod</code>)を識別するための対応するタグが含まれます。</span></p>

</div>

<h2 id="_building_the_example"><span class="merged" id="all.4CD4mF" title="原文 : Building the Example">サンプルの構築</span></h2>
<div class="section">

<h3 id="_clone_the_coherence_operator_repository"><span class="merged" id="all.1EfVIm" title="原文 : Clone the Coherence Operator Repository:">Coherence Operatorリポジトリのクローニング:</span></h3>
<div class="section">
<p><span class="merged" id="all.3xVBeR" title="原文 : To build the examples, you first need to clone the Operator GitHub repository to your development machine.">例を作成するには、まず、オペレータGitHubリポジトリを開発マシンにクローニングする必要があります。</span></p>

<markup
lang="bash"

>git clone https://github.com/oracle/coherence-operator

cd coherence-operator/examples</markup>

</div>

<h3 id="_build_the_examples"><span class="merged" id="all.KkREp" title="原文 : Build the Examples">例の構築</span></h3>
<div class="section">

<h4 id="_prerequisites"><span class="merged" id="all.2LZvWc.2"  title="原文:: Prerequisites">前提条件</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2QWpOS.1" title="原文 : Java 11+ JDK either [OpenJDK](https://adoptopenjdk.net/) or [Oracle JDK](https://www.oracle.com/java/technologies/javase-downloads.html)">Java 11+ JDK ([OpenJDK](<a href="https://adoptopenjdk.net/" id="" target="_blank" >https://adoptopenjdk.net/</a>)または[Oracle JDK](<a href="https://www.oracle.com/java/technologies/javase-downloads.html" id="" target="_blank" >https://www.oracle.com/java/technologies/javase-downloads.html</a>)</span></p>

</li>
<li>
<p><span class="merged" id="all.4TToE6" title="原文 : [Docker](https://docs.docker.com/install/) version 17.03+.">[Docker](<a href="https://docs.docker.com/install/" id="" target="_blank" >https://docs.docker.com/install/</a>)バージョン17.03+。</span></p>

</li>
<li>
<p><span class="merged" id="all.cRWHJ" title="原文 : [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) version v1.13.0+ .">[kubectl](<a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" id="" target="_blank" >https://kubernetes.io/docs/tasks/tools/install-kubectl/</a>)バージョンv1.13.0+ .</span></p>

</li>
<li>
<p><span class="merged" id="all.4dbHBC.1" title="原文 : Access to a Kubernetes v1.14.0+ cluster.">Kubernetes v1.14.0+クラスタにアクセスします。</span></p>

</li>
<li>
<p><span class="merged" id="all.4L7e4p" title="原文 : [Helm](https://helm.sh/docs/intro/install/) version 3.2.4+">[Helm](<a href="https://helm.sh/docs/intro/install/" id="" target="_blank" >https://helm.sh/docs/intro/install/</a>)バージョン3.2.4 +</span></p>

</li>
</ul>
<p><span class="merged" id="all.3dG61P.spl1" title="原文 : Building the project requires [Maven](https://maven.apache.org) version 3.6.0+.">プロジェクトを作成するには、[Maven](<a href="https://maven.apache.org" id="" target="_blank" >https://maven.apache.org</a>)バージョン3.6.0 +が必要です。</span> <span class="merged" id="all.3dG61P.spl2" title="原文 : The commands below use the Maven Wrapper to run the commands, which will install Maven if it is not already on the development machine.">次のコマンドでは、Mavenラッパーを使用してコマンドを実行し、Mavenがまだ開発マシン上にない場合はインストールします。</span> <span class="merged" id="all.3dG61P.spl3" title="原文 : If you already have a suitable version of Maven installed feel free to replace the use of ./mvnw in the examples with your normal Maven command (typically just mvn).">Mavenの適切なバージョンがすでにインストールされている場合は、例の<code>./mvnw</code>の使用を通常のMavenコマンド(通常は<code>mvn</code>のみ)に置き換えます。</span> </p>


<h5 id="_corporate_proxies"><span class="merged" id="all.LW0uM" title="原文 : Corporate Proxies">企業のプロキシ</span></h5>
<div class="section">
<p><span class="merged" id="all.el5gh" title="原文 : If building inside a corporate proxy (or any machine that requires http and https proxies to be configured) then the build will require the MAVEN_OPTS environment variable to be properly set, for example:">企業プロキシ(またはhttpおよびhttpsプロキシを構成する必要がある任意のマシン)内で構築する場合、ビルドでは<code>MAVEN_OPTS</code>環境変数が正しく設定されている必要があります。次に例を示します:</span></p>

<markup
lang="bash"

>export MAVEN_OPTS="-Dhttps.proxyHost=host -Dhttps.proxyPort=80 -Dhttp.proxyHost=host -Dhttp.proxyPort=80"</markup>

<p><span class="merged" id="all.4QgOEp" title="原文 : replacing host with the required proxy hostname and 80 with the proxy&rsquo;s port."><code>host</code>を必要なプロキシ・ホスト名に置き換え、<code>80</code>をプロキシのポートに置き換えます。</span></p>

</div>
</div>

<h4 id="_build_instructions"><span class="merged" id="all.2BOTDg"  title="原文:: Build Instructions">ビルド手順</span></h4>
<div class="section">
<p><span class="merged" id="all.1ELgQ4.spl1" title="原文 : The autoscaler example uses the JIB Maven plugin to build the example image.">自動スケーリングの例では、<a href="https://github.com/GoogleContainerTools/jib/tree/master/jib-maven-plugin#build-your-image" id="" target="_blank" >「JIB Mavenプラグイン」</a>を使用してサンプル・イメージを作成します。</span> <span class="merged" id="all.1ELgQ4.spl2" title="原文 : To build the image run the following command from the examples/autoscaler directory:">イメージを作成するには、<code>examples/autoscaler</code>ディレクトリから次のコマンドを実行します:</span> </p>

<markup
lang="bash"

>./mvnw package jib:dockerBuild</markup>

<p><span class="merged" id="all.2e5sLn" title="原文 : The build will produce various example images, for the autoscaler example we will be using the autoscaler-example:latest image.">ビルドでは様々な例のイメージが生成されます。自動スケーリングの例では、<code>autoscaler-example:latest</code>イメージを使用します。</span></p>

</div>
</div>
</div>

<h2 id="_run_the_example"><span class="merged" id="all.oJSYR.1"  title="原文:: Run the Example"> 例の実行</span></h2>
<div class="section">
<p><span class="merged" id="all.1RTqzx.spl1" title="原文 : Running the example requires a number of components to be installed.">この例を実行するには、多数のコンポーネントをインストールする必要があります。</span> <span class="merged" id="all.1RTqzx.spl2" title="原文 : The example will use Prometheus as a custom metrics source, which requires installation of Prometheus and the Prometheus Adapter custom metrics source.">この例では、Prometheusをカスタム・メトリクス・ソースとして使用し、PrometheusおよびPrometheusアダプタのカスタム・メトリクス・ソースをインストールする必要があります。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2SIvEd.spl1" title="原文 : To simplify the example commands none of the examples below use a Kubernetes namespace.">次のコマンド例を単純化するために、次の例のいずれもKubernetesネームスペースを使用します。</span> <span class="merged" id="all.2SIvEd.spl2" title="原文 : If you wish to install the components below into a namespace other than default, then use the required kubectl and Helm namespace options.">次のコンポーネントを<code>default</code>以外のネームスペースにインストールする場合は、必要なkubectlおよびHelmネームスペース・オプションを使用します。</span> </p>
</div>

<h3 id="_install_the_coherence_operator"><span class="merged" id="all.LO8kI.2" title="原文 : Install the Coherence Operator">Coherence Operatorのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.3AJ9nf" title="原文 : First install the Coherence Operator, TBD…​">最初にCoherence Operator TBDをインストールします…</span></p>

</div>

<h3 id="_install_coherence_cluster"><span class="merged" id="all.2VfhMG" title="原文 : Install Coherence cluster">Coherenceクラスタのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2OVmza.spl1" title="原文 : With the Coherence Operator running we can now install a simple Coherence cluster.">Coherence Operatorを実行して、単純なCoherenceクラスタをインストールできるようになりました。</span> <span class="merged" id="all.2OVmza.spl2" title="原文 : An example of the yaml required is below:">必要なYamlの例を次に示します:</span> </p>

<markup
lang="yaml"
title="cluster.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test-cluster
spec:
  image: autoscaler-example:latest  <span class="conum" data-value="1" />
  imagePullPolicy: IfNotPresent
  replicas: 2                       <span class="conum" data-value="2" />
  coherence:
    metrics:
      enabled: true                 <span class="conum" data-value="3" />
  jvm:
    memory:
      heapSize: 500m                <span class="conum" data-value="4" />
  ports:
    - name: metrics                 <span class="conum" data-value="5" />
      serviceMonitor:
        enabled: true               <span class="conum" data-value="6" />
    - name: extend                  <span class="conum" data-value="7" />
      port: 20000</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.W1nm5" title="原文 : The image used for the application will be the autoscaler-example:latest image we built above.">アプリケーションに使用されるイメージは、前述の<code>autoscaler-example:latest</code>イメージになります。</span></li>
<li data-value="2"><span class="merged" id="all.1IFu87" title="原文 : The deployment will initially have 2 replicas.">デプロイメントには、最初は2つのレプリカが含まれます。</span></li>
<li data-value="3"><span class="merged" id="all.yB33U" title="原文 : Coherence metrics must be enabled to publish the metrics we require for scaling.">スケーリングに必要なメトリクスを公開するには、Coherenceメトリクスを有効にする必要があります。</span></li>
<li data-value="4"><span class="merged" id="all.1fGmy7" title="原文 : In this example the JVM heap has been fixed to 500m, which is quite small but this means we do not need to add a lot of data to cause excessive heap usage when we run the example.">この例では、JVMヒープは<code>500m</code>に固定されていますが、これは非常に小さいものですが、これは、例を実行するときに大量のデータを付加する必要がないことを意味します。</span></li>
<li data-value="5"><span class="merged" id="all.1oIv5l" title="原文 : The metrics port must also be exposed on a Service.">メトリクス・ポートは、<code>Service</code>でも公開する必要があります。</span></li>
<li data-value="6"><span class="merged" id="all.33Gziw" title="原文 : A Prometheus ServiceMonitor must also be enabled for the metrics service so that Prometheus can find the Coherence Pods and poll metrics from them.">PrometheusがCoherence <code>Pods</code>を見つけてメトリクスをポーリングできるように、メトリクス・サービスに対してPrometheus <code>ServiceMonitor</code>も有効にする必要があります。</span></li>
<li data-value="7"><span class="merged" id="all.2K2UGA" title="原文 : This example also exposes a Coherence Extend port so that test data can easily be loaded into the caches.">この例では、テスト・データをキャッシュに簡単にロードできるように、Coherence拡張ポートも公開しています。</span></li>
</ul>
<p><span class="merged" id="all.1Cj2sT" title="原文 : The autoscaler example includes a suitable yaml file named cluster.yaml in the manifests/ directory that can be used to create a Coherence deployment.">自動スケーリングの例には、Coherenceデプロイメントの作成に使用できる<code>manifests/</code>ディレクトリに<code>cluster.yaml</code>という名前の適切なyamlファイルが含まれています。</span></p>

<markup
lang="bash"

>kubectl create -f manifests/cluster.yaml</markup>

<p><span class="merged" id="all.19F47U.spl1" title="原文 : The Pods that are part of the Coherence cluster can be listed with kubectl.">Coherenceクラスタの一部である<code>Pods</code>は、<code>kubectl</code>とともにリストできます。</span> <span class="merged" id="all.19F47U.spl2" title="原文 : All the Pods have a label coherenceCluster set by the Coherence Operator to match the name of the Coherence resource that they belong to, which makes it easier to list Pods for a specific deployment using kubectl:">すべての<code>Pods</code>に、Coherence Operatorによってラベル<code>coherenceCluster</code>が設定され、それが属する<code>Coherence</code>リソースの名前と一致するため、<code>kubectl</code>を使用して特定のデプロイメントに対して<code>Pods</code>を簡単にリストできます:</span> </p>

<markup
lang="bash"

>kubectl get pod -l coherenceCluster=test-cluster</markup>

<p><span class="merged" id="all.3zf6DQ" title="原文 : In a short time the Pods should both be ready.">短期間で、<code>Pods</code>は両方とも準備ができている必要があります。</span></p>

<markup
lang="bash"

>NAME             READY   STATUS    RESTARTS   AGE
test-cluster-0   1/1     Running   0          2m52s
test-cluster-1   1/1     Running   0          2m52s</markup>


<h4 id="_test_the_custom_heap_metrics"><span class="merged" id="all.2rBIbY" title="原文 : Test the Custom Heap Metrics">カスタム・ヒープ・メトリクスのテスト</span></h4>
<div class="section">
<p><span class="merged" id="all.1Zyb1g.spl1" title="原文 : The Metrics endpoint will be exposed on port 9612 on each Pod, so it is possible to query the metrics endpoints for the custom heap metrics.">メトリクス・エンドポイントは、各<code>Pod</code>のポート9612で公開されるため、カスタム・ヒープ・メトリクスのメトリクス・エンドポイントを問い合せることができます。</span> <span class="merged" id="all.1Zyb1g.spl2" title="原文 : The simplest way to test the metrics is to use the kubectl port-forward command and curl.">メトリクスをテストする最も簡単な方法は、<code>kubectl</code> <code>port-forward</code>コマンドおよび<code>curl</code>を使用することです。</span> </p>

<p><span class="merged" id="all.3yHuRy" title="原文 : In one terminal session start the port forwarder to the first Pod, test-cluster-0:">1つの端末セッションで、最初の<code>Pod</code>、<code>test-cluster-0</code>へのポート・フォワーダを起動します:</span></p>

<markup
lang="bash"

>kubectl port-forward pod/test-cluster-0 9612:9612</markup>

<p><span class="merged" id="all.1J2GAO" title="原文 : metrics from Pod, test-cluster-0 can be queried on http://127.0.0.1:9612/metrics"><code>Pod</code>のメトリクス、<code>test-cluster-0</code>は<code><a href="http://127.0.0.1:9612/metrics" id="" target="_blank" >http://127.0.0.1:9612/metrics</a></code>でクエリーできます</span></p>

<p><span class="merged" id="all.2Q70Fq.spl1" title="原文 : In a second terminal we can use curl to query the metrics.">2つ目の端末では、curlを使用してメトリクスを問い合せることができます。</span> <span class="merged" id="all.2Q70Fq.spl2" title="原文 : The Coherence metrics endpoint serves metrics in two formats, plain text compatible with Prometheus and JSON.">Coherenceメトリクス・エンドポイントは、PrometheusおよびJSONと互換性のあるプレーン・テキスト形式のメトリクスを提供します。</span> <span class="merged" id="all.2Q70Fq.spl3" title="原文 : If the required content type has not been specified in the curl command it could be either that is returned.">必要なコンテンツ・タイプがcurlコマンドで指定されていない場合、それは戻される可能性があります。</span> <span class="merged" id="all.2Q70Fq.spl4" title="原文 : To specify a content type set the accepted type in the header, for example --header &quot;Accept: text/plain&quot; or --header &quot;Accept: application/json&quot;.">コンテンツ・タイプを指定するには、ヘッダーに受け入れられるタイプを設定します(例: <code>--header "Accept: text/plain"</code>または<code>--header "Accept: application/json"</code>)。</span> </p>

<p><span class="merged" id="all.34G8Tn" title="原文 : This command will retrieve metrics from test-cluster-0 in the same format that Prometheus would.">このコマンドは、Prometheusと同じ形式で<code>test-cluster-0</code>からメトリクスを取得します。</span></p>

<markup
lang="bash"

>curl -s --header "Accept: text/plain" -X GET http://127.0.0.1:9612/metrics</markup>

<p><span class="merged" id="all.253j1u.spl1" title="原文 : This will return quite a lot of metrics, somewhere in that output is the custom application metrics for heap usage.">これは、非常に多くのメトリクスを返します。出力のどこかは、ヒープ使用量のカスタム・アプリケーション・メトリクスです。</span> <span class="merged" id="all.253j1u.spl2" title="原文 : The simplest way to isolate them would be to use grep, for example:">分離する最も簡単な方法は、<code>grep</code>を使用する方法です。次に例を示します:</span> </p>

<markup
lang="bash"

>curl -s --header "Accept: text/plain" -X GET http://127.0.0.1:9612/metrics | grep application</markup>

<p><span class="merged" id="all.3cWG2" title="原文 : which should show something like:">次のように表示されます:</span></p>

<markup
lang="bash"

>application:coherence_heap_usage_percentage_used{cluster="test-cluster", machine="docker-desktop", member="test-cluster-0", node_id="2", role="test-cluster", site="test-cluster-sts.operator-test.svc.cluster.local"} 3.09
application:coherence_heap_usage_used{cluster="test-cluster", machine="docker-desktop", member="test-cluster-0", node_id="2", role="test-cluster", site="test-cluster-sts.operator-test.svc.cluster.local"} 16177976</markup>

<p><span class="merged" id="all.27BC9L.spl1" title="原文 : The first metric application:coherence_heap_usage_percentage_used shows the heap was 3.09% full after the last gc.">最初のメトリック<code>application:coherence_heap_usage_percentage_used</code>は、最後のgcの後に<code>3.09%</code>が一杯になったことを示します。</span> <span class="merged" id="all.27BC9L.spl2" title="原文 : The second metric application:coherence_heap_usage_used shows that the in-use heap after the last gc was 16177976 bytes, or around 16 MB.">2つ目のメトリック<code>application:coherence_heap_usage_used</code>は、最後のgcの後の使用中ヒープが16177976バイト、または約16 MBであることを示しています。</span> </p>

<p><span class="merged" id="all.1rQIuW" title="原文 : The port forwarder can be changed to connect to the second Pod test-cluster-1, and the same curl command will retrieve metrics from the second Pod, which should show different heap use values.">ポート・フォワーダは、2番目の<code>Pod</code> <code>test-cluster-1</code>に接続するように変更でき、同じcurlコマンドは2番目の<code>Pod</code>からメトリクスを取得します。これは、異なるヒープ使用値を示します。</span></p>

</div>
</div>

<h3 id="_install_prometheus"><span class="merged" id="all.3NplFl" title="原文 : Install Prometheus">Prometheusのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2D7Aj9" title="原文 : The simplest way to install Prometheus as part of an example or demo is to use the Prometheus Operator, which can be installed using a Helm chart.">例またはデモの一部としてPrometheusをインストールする最も簡単な方法は、Helmチャートを使用してインストールできる<a href="https://github.com/prometheus-operator/prometheus-operator" id="" target="_blank" >「Prometheusオペレータ」</a>を使用することです。</span></p>


<h4 id="_setup_the_helm_repo"><span class="merged" id="all.2Jef6E" title="原文 : Setup the Helm Repo">Helm Repoの設定</span></h4>
<div class="section">
<p><span class="merged" id="all.4dTk9F" title="原文 : Make sure the stable helm repository has been added to Helm if it isn&rsquo;t already present in your local Helm repositories."><code>stable</code> helmリポジトリがローカルHelmリポジトリに存在しない場合は、Helmに追加されていることを確認します。</span></p>

<markup
lang="bash"

>helm repo add stable https://kubernetes-charts.storage.googleapis.com/</markup>

<p><span class="merged" id="all.hYwoZ" title="原文 : Make sure the local Helm repository is up to date.">ローカルのHelmリポジトリが最新であることを確認してください。</span></p>

<markup
lang="bash"

>helm repo update</markup>

</div>

<h4 id="_configure_prometheus_rbac"><span class="merged" id="all.3vO3pm" title="原文 : Configure Prometheus RBAC">Prometheus RBACの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.2TGL7p.spl1" title="原文 : If you are using a Kubernetes cluster with RBAC enabled then the rules required by Prometheus need to be added.">RBACが有効なKubernetesクラスタを使用している場合は、Prometheusに必要なルールを追加する必要があります。</span> <span class="merged" id="all.2TGL7p.spl2" title="原文 : The autoscale example contains a yaml file with the required RBAC rules in it in the manifests/ directory.">自動スケールの例には、<code>manifests/</code>ディレクトリ内に必要なRBACルールを持つyamlファイルが含まれています。</span> </p>

<p><span class="merged" id="all.3kH4bU" title="原文 : The manifests/prometheus-rbac.yaml uses a namespace coherence-example which may need to be changed if you are installing into a different namespace."><code>manifests/prometheus-rbac.yaml</code>はネームスペース<code>coherence-example</code>を使用します。異なるネームスペースにインストールする場合は、変更が必要になることがあります。</span></p>

<p><span class="merged" id="all.4ArECM" title="原文 : The following commands use sed to replace coherence-example with default and pipe the result to kubectl to create the RBAC rules in the default Kubernetes namespace.">次のコマンドでは、<code>sed</code>を使用して<code>coherence-example</code>を<code>default</code>に置き換え、結果を<code>kubectl</code>にパイプして、<code>default</code> KubernetesネームスペースにRBACルールを作成します。</span></p>

<markup
lang="bash"

>sed "s/coherence-example/default/g"  manifests/prometheus-rbac.yaml | kubectl create -f -</markup>

</div>

<h4 id="_install_the_prometheus_operator"><span class="merged" id="all.3wqp7h" title="原文 : Install the Prometheus Operator">Prometheusオペレータのインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.3W9Sj2.spl1" title="原文 : The Prometheus Operator can now be installed using Helm.">PrometheusオペレータはHelmを使用してインストールできるようになりました。</span> <span class="merged" id="all.3W9Sj2.spl2" title="原文 : The autoscaler example contains a simple values files that can be used when installing the chart in the manifests/ directory.">自動スケーリングの例には、<code>manifests/</code>ディレクトリにチャートをインストールするときに使用できる単純な値ファイルが含まれています。</span> </p>

<markup
lang="bash"

>helm install --atomic --version 8.13.9 --wait \
    --set prometheus.service.type=NodePort \
    --values manifests/prometheus-values.yaml prometheus stable/prometheus-operator</markup>

<p><span class="merged" id="all.3p7cv3" title="原文 : The --wait parameter makes Helm block until all the installed resources are ready."><code>--wait</code>パラメータは、インストールされたすべてのリソースの準備ができるまでHelmブロックを作成します。</span></p>

<p><span class="merged" id="all.1bKNAG.spl1" title="原文 : The command above sets the prometheus.service.type value to NodePort so that the Prometheus UI will be exposed on a port on the Kubernetes node.">前述のコマンドは、KubernetesノードのポートでPrometheus UIが公開されるように、<code>prometheus.service.type</code>値を<code>NodePort</code>に設定します。</span> <span class="merged" id="all.1bKNAG.spl2" title="原文 : This is particularly useful when testing with a local Kubernetes cluster, such as in Docker on a laptop because the UI can be reached on localhost at that port.">これは、ローカルKubernetesクラスタ(ラップトップのDockerなど)でテストする場合に特に便利です。これは、そのポートでlocalhostでUIに到達できるためです。</span> <span class="merged" id="all.1bKNAG.spl3" title="原文 : The default node port is 30090, this can be changed by setting a different port, e.g: --set prometheus.service.nodePort=9090.">デフォルトのノード・ポートは<code>30090</code>です。これは、別のポートを設定することで変更できます。たとえば、: <code>--set prometheus.service.nodePort=9090</code>.</span> </p>

<p><span class="merged" id="all.3aGBZW" title="原文 : Assuming the default port of 30090 is used the UI can be reached on http://127.0.0.1:30090."><code>30090</code>のデフォルト・ポートを使用する場合、<a href="http://127.0.0.1:30090" id="" target="_blank" >http:// 127.0.0.1 :30090</a>でUIにアクセスできます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="prometheus ui empty" src="./images/images/prometheus-ui-empty.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.2rK5lb.spl1" title="原文 : After Prometheus has started up and is scraping metrics we should be able to see our custom metrics in the UI.">Prometheusが起動し、メトリクスをスクラープした後は、UIでカスタム・メトリクスを確認できます。</span> <span class="merged" id="all.2rK5lb.spl2" title="原文 : Type the metric name application:coherence_heap_usage_percentage_used in the expression box and click Execute and Prometheus should show two values for the metric, one for each Pod.">式ボックスにメトリック名<code>application:coherence_heap_usage_percentage_used</code>を入力し、<code>Execute</code>をクリックして、メトリックに2つの値を表示します(<code>Pod</code>ごとに1つずつ)。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="prometheus uiメトリクス" src="./images/images/prometheus-ui-metrics.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.VC70F" title="原文 : Prometheus is scraping many more Coherence metrics that can also be queried in the UI.">Prometheusは、UIで問合せを行うことができる多くのCoherenceメトリクスを縮小しています。</span></p>

</div>
</div>

<h3 id="_install_prometheus_adapter"><span class="merged" id="all.2Z7Szp" title="原文 : Install Prometheus Adapter">Prometheusアダプタのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2DlPDi.spl1" title="原文 : The next step in the example is to install the Prometheus Adapter.">この例の次のステップは、Prometheusアダプタのインストールです。</span> <span class="merged" id="all.2DlPDi.spl2" title="原文 : This is a custom metrics server that published metrics using the Kubernetes custom/metrics.k8s.io API.">これは、Kubernetes <code>custom/metrics.k8s.io</code> APIを使用してメトリクスを公開したカスタム・メトリクス・サーバーです。</span> <span class="merged" id="all.2DlPDi.spl3" title="原文 : This is required because the HPA cannot query metrics directly from Prometheus, only from standard Kubernetes metrics APIs.">HPAは標準のKubernetesメトリクスAPIからのみ、Prometheusから直接メトリクスを問い合せることができないため、これは必須です。</span> <span class="merged" id="all.2DlPDi.spl4" title="原文 : As with Prometheus the simplest way to install the adapter is by using the Helm chart.">Prometheusと同様に、アダプタをインストールする最も簡単な方法は、Helmチャートを使用することです。</span> <span class="merged" id="all.2DlPDi.spl5" title="原文 : Before installing though we need to create the adapter configuration so that it can publish our custom metrics.">ただし、インストールする前に、カスタム・メトリクスを公開できるようにアダプタ構成を作成する必要があります。</span> </p>

<p><span class="merged" id="all.3Y7ZfR.spl1" title="原文 : The documentation for the adapter configuration is not the simplest to understand quickly.">アダプタ構成のドキュメントは、簡単に理解できるほどシンプルではありません。</span> <span class="merged" id="all.3Y7ZfR.spl2" title="原文 : On top of that the adapter documentation shows how to configure the adapter using a ConfigMap whereas the Helm chart adds the configuration to the Helm values file.">その上に、アダプタのドキュメントには、<code>ConfigMap</code>を使用してアダプタを構成する方法が示されていますが、Helmチャートでは構成がHelm値ファイルに追加されます。</span> </p>

<p><span class="merged" id="all.1gad1G" title="原文 : The basic format for configuring a metric in the adapter is as follows:">アダプタのメトリックを構成するための基本形式は次のとおりです:</span></p>

<markup
lang="yaml"

>- seriesQuery: 'application:coherence_heap_usage_percentage_used'   <span class="conum" data-value="1" />
  resources:
    overrides:   <span class="conum" data-value="2" />
      namespace: <span class="conum" data-value="3" />
        resource: "namespace"
      pod:   <span class="conum" data-value="4" />
        resource: "pod"
      role:  <span class="conum" data-value="5" />
        group: "coherence.oracle.com"
        resource: "coherence"
  name:
    matches: ""
    as: "heap_memory_usage_after_gc_pct"  <span class="conum" data-value="6" />
  metricsQuery: sum(&lt;&lt;.Series&gt;&gt;{&lt;&lt;.LabelMatchers&gt;&gt;}) by (&lt;&lt;.GroupBy&gt;&gt;)  <span class="conum" data-value="7" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.45zMIj.spl1" title="原文 : The seriesQuery is the name of the metric to be retrieved from Prometheus."><code>seriesQuery</code>は、Prometheusから取得するメトリックの名前です。</span> <span class="merged" id="all.45zMIj.spl2" title="原文 : This is the same name used when querying in the UI.">これは、UIでの問合せ時に使用される名前と同じです。</span> <span class="merged" id="all.45zMIj.spl3" title="原文 : The name can be qualified further with tags/labels but in our case just the metric name is sufficient.">名前はタグ/ラベルでさらに修飾できますが、ここではメトリック名のみが十分です。</span> </li>
<li data-value="2"><span class="merged" id="all.3wYs7N" title="原文 : The overrides section matches metric labels to Kubernetes resources, which can be used in queries (more about this below)."><code>overrides</code>セクションはメトリック・ラベルをKubernetesリソースと照合します。このリソースは問合せで使用できます(詳細は後述)。</span></li>
<li data-value="3"><span class="merged" id="all.2t9vIX" title="原文 : The metrics have a namespace label (as can be seen in the UI above) and this maps to a Kubernetes Namespace resource.">メトリクスには、(前述のUIで見られるように)<code>namespace</code>ラベルがあり、これはKubernetes <code>Namespace</code>リソースにマップされます。</span></li>
<li data-value="4"><span class="merged" id="all.3rtew6" title="原文 : The metrics have a pod label (as can be seen in the UI above) and this maps to a Kubernetes Pod resource.">メトリクスには、(前述のUIで見られるように)<code>pod</code>ラベルがあり、これはKubernetes <code>Pod</code>リソースにマップされます。</span></li>
<li data-value="5"><span class="merged" id="all.1LueQ7" title="原文 : The metrics have a role label (as can be seen in the UI above) and this maps to a Kubernetes coherence.coherence.oracle.com resource.">メトリクスには、(前述のUIで見られるように)<code>role</code>ラベルがあり、これはKubernetes <code>coherence.coherence.oracle.com</code>リソースにマップされます。</span></li>
<li data-value="6"><span class="merged" id="all.3Wpqqd" title="原文 : The name.as field gives the name of the metric in the metrics API."><code>name.as</code>フィールドには、メトリクスAPIのメトリック名が表示されます。</span></li>
<li data-value="7"><span class="merged" id="all.2hIMiD" title="原文 : The metricsQuery determines how a specific metric will be fetched, in this case we are summing the values."><code>metricsQuery</code>は、特定のメトリックをフェッチする方法を決定します。この場合、値を合計します。</span></li>
</ul>
<p><span class="merged" id="all.1IG2BY.spl1" title="原文 : The configuration above will create a metric in the custom/metrics.k8s.io API named heap_memory_usage_after_gc_pct.">前述の構成では、heap_memory_usage_after_gc_pctという名前の<code>custom/metrics.k8s.io</code> APIにメトリックが作成されます。</span> <span class="merged" id="all.1IG2BY.spl2" title="原文 : This metric can be retrieved from the API for a namespace, for a Pod or for a Coherence deployment (the coherence.coherence.oracle.com resource).">このメトリックは、ネームスペース、PodまたはCoherenceデプロイメント(<code>coherence.coherence.oracle.com</code>リソース)のAPIから取得できます。</span> <span class="merged" id="all.1IG2BY.spl3" title="原文 : This is why the metricsQuery uses sum, so that when querying for a metric at the namespace level we see the total summed up for the namespace.">そのため、<code>metricsQuery</code>では<code>sum</code>が使用されるため、ネームスペース・レベルでメトリックを問い合せると、ネームスペースの合計が表示されます。</span> </p>

<p><span class="merged" id="all.1hr6rp.spl1" title="原文 : Summing up the metric might not be the best approach.">メトリックの合計は最善のアプローチではない可能性があります。</span> <span class="merged" id="all.1hr6rp.spl2" title="原文 : Imagine that we want to scale when the heap after gc usage exceeds 80%.">gcの使用後、ヒープが80%を超える場合にスケーリングする必要があるとします。</span> <span class="merged" id="all.1hr6rp.spl3" title="原文 : Ideally this is when any JVM heap in use after garbage collection exceeds 80%.">これは、ガベージ・コレクション後に使用されたJVMヒープが80%を超える場合に最適です。</span> <span class="merged" id="all.1hr6rp.spl4" title="原文 : Whilst Coherence will distribute data evenly across the cluster so that each member holds a similar amount of data and has similar heap usage, there could be an occasion where one member for whatever reason is processing extra load and exceeds 80% before other members.">Coherenceでは、データがクラスタ間で均等に分散されるため、各メンバーが同様のデータ量を保持し、ヒープ使用量が類似します。また、なんらかの理由で1人のメンバーが追加のロードを処理し、他のメンバーの80%を超える場合があります。</span> </p>

<p><span class="merged" id="all.1fDUVC.spl1" title="原文 : One way to approach this issue is instead of summing the metric value for a namespace or coherence.coherence.oracle.com resource we can fetch the maximum value.">この問題に対処する方法の1つに、ネームスペースまたは<code>coherence.coherence.oracle.com</code>リソースのメトリック値を合計するかわりに、最大値を取得できます。</span> <span class="merged" id="all.1fDUVC.spl2" title="原文 : We do this by changing the metricsQuery to use max as shown below:">これを行うには、次に示すように<code>max</code>を使用するように<code>metricsQuery</code>を変更します:</span> </p>

<markup
lang="yaml"

>- seriesQuery: 'application:coherence_heap_usage_percentage_used'
  resources:
    overrides:
      namespace:
        resource: "namespace"
      pod:
        resource: "pod"
      role:
        group: "coherence.oracle.com"
        resource: "coherence"
  name:
    matches: ""
    as: "heap_memory_usage_after_gc_max_pct"
  metricsQuery: max(&lt;&lt;.Series&gt;&gt;{&lt;&lt;.LabelMatchers&gt;&gt;}) by (&lt;&lt;.GroupBy&gt;&gt;)</markup>

<p><span class="merged" id="all.32lv0t" title="原文 : This is the same configuration as previously but now the metricsQuery uses the max function, and the metric name has been changed to heap_memory_usage_after_gc_max_pct so that it is obvious it is a maximum value.">これは以前と同じ構成ですが、<code>metricsQuery</code>は<code>max</code>関数を使用し、メトリック名が<code>heap_memory_usage_after_gc_max_pct</code>に変更されているため、最大値がわかります。</span></p>

<p><span class="merged" id="all.4B19gO" title="原文 : We can repeat the configuration above for the application:coherence_heap_usage_used metric too so that we will end up with four metrics in the custom/metrics.k8s.io API:"><code>application:coherence_heap_usage_used</code>メトリックに対して前述の構成を繰り返すことができるため、<code>custom/metrics.k8s.io</code> APIで4つのメトリクスを使用します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1waqFW"  title="原文: heap_memory_usage_after_gc_max_pct"><code>heap_memory_usage_after_gc_max_pct</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3VJiK0"  title="原文: heap_memory_usage_after_gc_pct"><code>heap_memory_usage_after_gc_pct</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3CnLg4"  title="原文: heap_memory_usage_after_gc"><code>heap_memory_usage_after_gc</code></span></p>

</li>
<li>
<p><span class="merged" id="all.NCV6H"  title="原文: heap_memory_usage_after_gc_max"><code>heap_memory_usage_after_gc_max</code></span></p>

</li>
</ul>
<p><span class="merged" id="all.2sP7vq.spl1" title="原文 : The autoscaler example has a Prometheus Adapter Helm chart values file that contains the configuration for the four metrics.">自動スケーリングの例には、4つのメトリクスの構成を含むPrometheus Adapter Helmチャート値ファイルがあります。</span> <span class="merged" id="all.2sP7vq.spl2" title="原文 : This can be used to install the adapter Helm chart:">これは、アダプタ<a href="https://hub.helm.sh/charts/prometheus-com/prometheus-adapter" id="" target="_blank" >Helmチャート</a>のインストールに使用できます:</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.w4IIO.spl1" title="原文 : In the command below the --set prometheus.url=http://prometheus-prometheus-oper-prometheus.default.svc parameter tells the adapter how to connect to Prometheus."><code>--set prometheus.url=http://prometheus-prometheus-oper-prometheus.default.svc</code>パラメータの下のコマンドでは、アダプタにPrometheusへの接続方法を指示します。</span> <span class="merged" id="all.w4IIO.spl2" title="原文 : The Prometheus Operator creates a Service named prometheus-prometheus-oper-prometheus to expose Prometheus.">Prometheusオペレータは、<code>prometheus-prometheus-oper-prometheus</code>という名前の<code>Service</code>を作成してPrometheusを公開します。</span> <span class="merged" id="all.w4IIO.spl3" title="原文 : In this case the command assumes Prometheus is installed in the default namespace.">この場合、このコマンドは、<code>default</code>ネームスペースにPrometheusがインストールされていることを前提としています。</span> <span class="merged" id="all.w4IIO.spl4" title="原文 : If you installed Prometheus into a different namespace change the default part of prometheus-prometheus-oper-prometheus.default.svc to the actual namespace name.">Prometheusを別のネームスペースにインストールした場合、<code>prometheus-prometheus-oper-prometheus.<strong>default</strong>.svc</code>の<code>default</code>部分を実際のネームスペース名に変更します。</span> </p>
</div>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4BoM3x.spl1" title="原文 : The manifests/prometheus-adapter-values.yaml contains the configurations for metrics that the adapter will publish."><code>manifests/prometheus-adapter-values.yaml</code>には、アダプタが公開するメトリクスの構成が含まれます。</span> <span class="merged" id="all.4BoM3x.spl2" title="原文 : These work with Coherence Operator 3.1.0 and above.">これらは、Coherence Operator 3.1.0以上で機能します。</span> <span class="merged" id="all.4BoM3x.spl3" title="原文 : If using an earlier 3.0.x version the values file must first be edited to change all occurrences of resource: &quot;coherence&quot; to resource: &quot;coherence&quot; (to make the resource name singular).">以前の3.0.xバージョンを使用する場合は、最初に値ファイルを編集して、<code>resource: "coherence"</code>のすべての出現を<code>resource: "coherence"</code>に変更する必要があります(リソース名を単数にします)。</span> </p>
</div>
<markup
lang="bash"

>helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

helm install --atomic --wait \
    --set prometheus.url=http://prometheus-prometheus-oper-prometheus.default.svc \
    --values manifests/prometheus-adapter-values.yaml \
    prometheus-adapter prometheus-community/prometheus-adapter</markup>


<h4 id="_query_custom_metrics"><span class="merged" id="all.1EXFFb" title="原文 : Query Custom Metrics">カスタム・メトリクスの問合せ</span></h4>
<div class="section">
<p><span class="merged" id="all.4KGNzK.spl1" title="原文 : Now the Prometheus adapter is running we can query metrics from the custom/metrics.k8s.io API using kubectl raw API access.">Prometheusアダプタが実行されると、<code>kubectl</code> raw APIアクセスを使用して<code>custom/metrics.k8s.io</code> APIからメトリクスを問い合せることができます。</span> <span class="merged" id="all.4KGNzK.spl2" title="原文 : This is the same API that the HPA will use to obtain metrics.">これは、HPAがメトリクスの取得に使用するAPIと同じです。</span> </p>

<p><span class="merged" id="all.3Dhbhd" title="原文 : If a Coherence cluster had been installed into the default namespace, then metrics could be fetched for all Pods in that specific namespace, for example to obtain the heap_memory_usage_after_gc_pct metric:">Coherenceクラスタが<code>default</code>ネームスペースにインストールされている場合は、<code>heap_memory_usage_after_gc_pct</code>メトリックを取得するために、その特定のネームスペース内のすべての<code>Pods</code>のメトリクスをフェッチできます:</span></p>

<markup
lang="bash"

>kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1/namespaces/default/pods/*/heap_memory_usage_after_gc_pct</markup>

<p><span class="merged" id="all.21TVHz.spl1" title="原文 : The * after pods/ tells the adapter to fetch metrics for all Pods in the namespace."><code>pods/</code>の後の<code>*</code>は、ネームスペース内のすべての<code>Pods</code>のメトリクスをフェッチするようにアダプタに指示します。</span> <span class="merged" id="all.21TVHz.spl2" title="原文 : To fetch the metric for pods in another namespace change the default part of the URL to the namespace name.">別のネームスペースのポッドのメトリックをフェッチするには、URLの<code>default</code>部分をネームスペース名に変更します。</span> </p>

<p><span class="merged" id="all.20uw6r" title="原文 : If you have the jq utility installed that formats json then piping the output to jq will make it prettier."><code>jq</code>ユーティリティにそのjson形式がインストールされている場合、出力を<code>jq</code>にパイプすると、より美しくなります。</span></p>

<markup
lang="bash"

>kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1/namespaces/default/pods/*/heap_memory_usage_after_gc_pct | jq</markup>

<p><span class="merged" id="all.22Nilv" title="原文 : We could fetch a metric for a specific Pod in the default namespace, for example a Pod named test-cluster-1 as follows:"><code>default</code>ネームスペースの特定の<code>Pod</code>のメトリックをフェッチできます。たとえば、<code>test-cluster-1</code>という名前の<code>Pod</code>は次のようになります:</span></p>

<markup
lang="bash"

>kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1/namespaces/default/pods/test-cluster-1/heap_memory_usage_after_gc_pct</markup>

<p><span class="merged" id="all.3ACRQl" title="原文 : which might display something like:">次のように表示されます:</span></p>

<markup
lang="json"

>{
  "kind": "MetricValueList",
  "apiVersion": "custom.metrics.k8s.io/v1beta1",
  "metadata": {
    "selfLink": "/apis/custom.metrics.k8s.io/v1beta1/namespaces/coherence-test/pods/test-cluster-1/heap_memory_usage_after_gc_pct"
  },
  "items": [
    {
      "describedObject": {
        "kind": "Pod",
        "namespace": "operator-test",
        "name": "test-cluster-1",
        "apiVersion": "/v1"
      },
      "metricName": "heap_memory_usage_after_gc_pct",
      "timestamp": "2020-09-02T12:12:01Z",
      "value": "1300m",
      "selector": null
    }
  ]
}</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2C8ooU.spl1" title="原文 : The format of the value field above might look a little strange.">前述の<code>value</code>フィールドの形式は、少し奇妙に見えます。</span> <span class="merged" id="all.2C8ooU.spl2" title="原文 : This is because it is a Kubernetes Quantity format, in this case it is 1300m where the m stand for millis.">これは、Kubernetes <code>Quantity</code>形式であるためです。この場合、これは<code>1300m</code>で、<code>m</code>はmillisを表します。</span> <span class="merged" id="all.2C8ooU.spl3" title="原文 : So in this case 1300 millis is 1.3% heap usage.">したがって、この場合は1300ミリ秒が1.3 %ヒープ使用量になります。</span> <span class="merged" id="all.2C8ooU.spl4" title="原文 : This is to get around the poor support in yaml and json for accurate floating-point numbers.">これは、正確な浮動小数点数に対するyamlおよびjsonの不十分なサポートを回避することです。</span> </p>
</div>
<p><span class="merged" id="all.424k39.spl1" title="原文 : In our case for auto-scaling we are interested in the maximum heap for a specific Coherence resource.">自動スケーリングの場合、特定の<code>Coherence</code>リソースの最大ヒープに関心があります。</span> <span class="merged" id="all.424k39.spl2" title="原文 : Remember in the Prometheus Adapter configuration we configured the role metric tag to map to coherence.coherence.oracle.com resources.">Prometheusアダプタの構成では、<code>coherence.coherence.oracle.com</code>リソースにマップするための<code>role</code>メトリック・タグを構成したことに注意してください。</span> <span class="merged" id="all.424k39.spl3" title="原文 : We also configured a query that will give back the maximum heap usage value for a query.">また、問合せの最大ヒープ使用量値を戻す問合せを構成しました。</span> </p>

<p><span class="merged" id="all.3Qcn06.spl1" title="原文 : The example yaml used to deploy the Coherence resource above will create a resource named test-cluster.">前述の<code>Coherence</code>リソースのデプロイに使用する例yamlは、<code>test-cluster</code>という名前のリソースを作成します。</span> <span class="merged" id="all.3Qcn06.spl2" title="原文 : If we installed this into the default Kubernetes namespace then we can fetch the maximum heap use after gc for the Pods in that Coherence deployment as follows:">これを<code>default</code> Kubernetesネームスペースにインストールした場合、次のように、その<code>Coherence</code>デプロイメントの<code>Pods</code>に対するgcの後の最大ヒープ使用量をフェッチできます:</span> </p>

<markup
lang="bash"

>kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1/namespaces/default/coherence.coherence.oracle.com/test-cluster/heap_memory_usage_after_gc_max_pct</markup>

<p><span class="merged" id="all.3ACRQl.1" title="原文 : which might display something like:">次のように表示されます:</span></p>

<markup
lang="json"

>{
  "kind": "MetricValueList",
  "apiVersion": "custom.metrics.k8s.io/v1beta1",
  "metadata": {
    "selfLink": "/apis/custom.metrics.k8s.io/v1beta1/namespaces/operator-test/coherence.coherence.oracle.com/test-cluster/heap_memory_usage_after_gc_max_pct"
  },
  "items": [
    {
      "describedObject": {
        "kind": "Coherence",
        "namespace": "operator-test",
        "name": "test-cluster",
        "apiVersion": "coherence.oracle.com/v1"
      },
      "metricName": "heap_memory_usage_after_gc_max_pct",
      "timestamp": "2020-09-02T12:21:02Z",
      "value": "3300m",
      "selector": null
    }
  ]
}</markup>

</div>
</div>

<h3 id="_configure_the_horizontal_pod_autoscaler"><span class="merged" id="all.34zN9v" title="原文 : Configure The Horizontal Pod autoscaler">水平ポッド自動スケーリングの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.BroZd.spl1" title="原文 : Now that we have custom metrics in the Kubernets custom.metrics.k8s.io API, the final piece is to add the HPA configuration for the Coherence deployment that we want to scale.">Kubernets <code>custom.metrics.k8s.io</code> APIにカスタム・メトリクスがあるため、最終的な部分として、拡張するCoherenceデプロイメントのHPA構成を追加します。</span> <span class="merged" id="all.BroZd.spl2" title="原文 : To configure the HPA we need to create a HorizontalPodautoscaler resource for each Coherence deployment in the same namespace as we deployed the Coherence deployment to.">HPAを構成するには、Coherenceデプロイメントのデプロイ先と同じネームスペースで、各Coherenceデプロイメントの<code>HorizontalPodautoscaler</code>リソースを作成する必要があります。</span> </p>

<p><span class="merged" id="all.1AKAA7" title="原文 : Below is an example HorizontalPodautoscaler resource that will scale our example Coherence deployment:">次に、Coherenceデプロイメントの例をスケーリングする<code>HorizontalPodautoscaler</code>リソースの例を示します:</span></p>

<markup
lang="yaml"
title="hpa.yaml"
>apiVersion: autoscaling/v2beta2
kind: HorizontalPodautoscaler
metadata:
  name: test-cluster-hpa
spec:
  scaleTargetRef:                         <span class="conum" data-value="1" />
    apiVersion: coherence.oracle.com/v1
    kind: Coherence
    name: test-cluster
  minReplicas: 2         <span class="conum" data-value="2" />
  maxReplicas: 5
  metrics:               <span class="conum" data-value="3" />
  - type: Object
    object:
      describedObject:
        apiVersion: coherence.oracle.com/v1
        kind: Coherence
        name: test-cluster
      metric:
        name: heap_memory_usage_after_gc_max_pct  <span class="conum" data-value="4" />
      target:
        type: Value       <span class="conum" data-value="5" />
        value: 80
  behavior:                             <span class="conum" data-value="6" />
    scaleUp:
      stabilizationWindowSeconds: 120
    scaleDown:
      stabilizationWindowSeconds: 120</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1lWu6r.spl1" title="原文 : The scaleTargetRef points to the resource that the HPA will scale."><code>scaleTargetRef</code>は、HPAがスケーリングするリソースを指します。</span> <span class="merged" id="all.1lWu6r.spl2" title="原文 : In this case it is our Coherence deployment which is named test-cluster.">この場合、<code>test-cluster</code>という名前の<code>Coherence</code>デプロイメントになります。</span> <span class="merged" id="all.1lWu6r.spl3" title="原文 : The apiVersion and kind fields match those in the Coherence resource."><code>apiVersion</code>および<code>kind</code>フィールドは、<code>Coherence</code>リソースのフィールドと一致します。</span> </li>
<li data-value="2"><span class="merged" id="all.1o38R0" title="原文 : For this example, the Coherence deployment will have a minimum of 2 replicas and a maximum of 5, so the HPA will not scale up too much.">この例では、Coherenceデプロイメントには少なくとも2つのレプリカがあり、最大5つのレプリカがあるため、HPAのスケール・アップはあまりありません。</span></li>
<li data-value="3"><span class="merged" id="all.e7bFu.spl1" title="原文 : The metrics section in the yaml above tells the HPA how to query our custom metric.">前述のyamlの<code>metrics</code>セクションは、カスタム・メトリックの問合せ方法をHPAに示します。</span> <span class="merged" id="all.e7bFu.spl2" title="原文 : In this case we want to query the single max usage value metric for the Coherence deployment (like we did manually when using kubectl above).">この場合、<code>Coherence</code>デプロイメントの単一の最大使用値メトリックを問い合せます(前述のkubectlの使用時に手動で実行したように)。</span> <span class="merged" id="all.e7bFu.spl3" title="原文 : To do this we add a metric with a type of Object.">これを行うには、<code>Object</code>の<code>type</code>を含むメトリックを追加します。</span> <span class="merged" id="all.e7bFu.spl4" title="原文 : The describedObject section describes the resource to query, in this case kind Coherence in resource group coherence.oracle.com with the name test-cluster."><code>describedObject</code>セクションでは、問い合せるリソースについて説明します。この場合、<code>test-cluster</code>という名前のリソース・グループ<code>coherence.oracle.com</code>の<code>Coherence</code>というようになります。</span> </li>
<li data-value="4"><span class="merged" id="all.RZPL6" title="原文 : The metric name to query is our custom max heap usage percentage metric heap_memory_usage_after_gc_max_pct.">問合せするメトリック名は、カスタムの最大ヒープ使用率のメトリック<code>heap_memory_usage_after_gc_max_pct</code>です。</span></li>
<li data-value="5"><span class="merged" id="all.2oX8a2" title="原文 : The target section describes the target value for the metric, in this case 80 thousand millis - which is 80%."><code>target</code>セクションでは、メトリックのターゲット値(この場合は80千ミリ秒)について説明 - これは80%です。</span></li>
<li data-value="6"><span class="merged" id="all.2312zO.spl1" title="原文 : The behavior section sets a window of 120 seconds so that the HAP will wait at least 120 seconds after scaling up or down before re-evaluating the metric."><code>behavior</code>セクションは、メトリックを再評価する前に、スケール・アップまたは停止後にHAPが少なくとも120秒待機するように、120秒のウィンドウを設定します。</span> <span class="merged" id="all.2312zO.spl2" title="原文 : This gives Coherence enough time to scale the deployment and for the data to redistribute and gc to occur.">これにより、Coherenceは、デプロイメントをスケーリングし、データを再分散してgcが発生するのに十分な時間を与えます。</span> <span class="merged" id="all.2312zO.spl3" title="原文 : In real life this value would need to be adjusted to work correctly on your actual cluster.">実際のクラスタで正しく動作するには、この値を調整する必要があります。</span> </li>
</ul>
<p><span class="merged" id="all.salzU" title="原文 : The autoscaler example contains yaml to create the HorizontalPodautoscaler resource in the manifests/ directory.">自動スケーリングの例には、<code>manifests/</code>ディレクトリに<code>HorizontalPodautoscaler</code>リソースを作成するためのyamlが含まれています。</span></p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.1KVwUd.spl1" title="原文 : If using a version of Kubernetes prior to 1.18 the behaviour secion of the yaml above is invalid and should be removed.">1.18より前のバージョンのKubernetesを使用している場合、前述のyamlの<code>behaviour</code>秒は無効であり、削除する必要があります。</span> <span class="merged" id="all.1KVwUd.spl2" title="原文 : This could cause the HPA not to work the way we want it to as there will be no cool-down period specified between scaling operations, and the HPA could thrash or suddenly scale up or down by a lot of Pods.">これにより、HPAはスケーリング操作の間に冷却期間が設けられず、HPAはポッドの多くによってクラッシュまたは突然スケール・アップまたはスケール・ダウンを行うことができます。</span> <span class="merged" id="all.1KVwUd.spl3" title="原文 : The only way to set these values prior to 1.18 was for the HPA as a whole (see the documentation support for cooldown delay).">1.18の前にこれらの値を設定する方法は、HPA全体に対する唯一の方法です(ドキュメント<a href="https://v1-17.docs.kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#support-for-cooldown-delay" id="" target="_blank" >「クール・ダウン遅延のサポート」</a>を参照)。</span> </p>
</div>
<markup
lang="bash"

>kubectl create -f manifests/hpa.yaml</markup>

<p><span class="merged" id="all.28goWH.spl1" title="原文 : The hpa.yaml file will create a HorizontalPodautoscaler resource named test-cluster-hpa."><code>hpa.yaml</code>ファイルでは、<code>test-cluster-hpa</code>という名前の<code>HorizontalPodautoscaler</code>リソースが作成されます。</span> <span class="merged" id="all.28goWH.spl2" title="原文 : After waiting a minute or two for the HPA to get around to polling our new HorizontalPodautoscaler resource we can check its status.">HPAが新しい<code>HorizontalPodautoscaler</code>リソースをポーリングするために1、または2分待ってから、そのステータスを確認できます。</span> </p>

<markup
lang="bash"

>kubectl describe horizontalpodautoscaler.autoscaling/test-cluster-hpa</markup>

<p><span class="merged" id="all.1yRZSh" title="原文 : Which should show something like:">次のようなものが表示されます:</span></p>

<markup
lang="bash"

>Name:                                                                             test-cluster-hpa
Namespace:                                                                        operator-test
Labels:                                                                           &lt;none&gt;
Annotations:                                                                      &lt;none&gt;
CreationTimestamp:                                                                Wed, 02 Sep 2020 15:58:26 +0300
Reference:                                                                        Coherence/test-cluster
Metrics:                                                                          ( current / target )
  "heap_memory_usage_after_gc_max_pct" on Coherence/test-cluster (target value):  3300m / 80
Min replicas:                                                                     2
Max replicas:                                                                     10
Coherence pods:                                                                   2 current / 2 desired
Conditions:
  Type            Status  Reason               Message
  ----            ------  ------               -------
  AbleToScale     True    ScaleDownStabilized  recent recommendations were higher than current one, applying the highest recent recommendation
  ScalingActive   True    ValidMetricFound     the HPA was able to successfully calculate a replica count from Coherence metric heap_memory_usage_after_gc_max_pct
  ScalingLimited  False   DesiredWithinRange   the desired count is within the acceptable range
Events:           &lt;none&gt;</markup>

<p><span class="merged" id="all.3IR4Ps" title="原文 : We can see that the HPA has successfully polled the metric and obtained a value of 3300m (so 3.3%) and has decided that it does not need to scale.">HPAがメトリックを正常にポーリングし、<code>3300m</code>の値(3.3 %)を取得し、スケーリングする必要がないことを確認できます。</span></p>

</div>

<h3 id="_add_data_scale_up"><span class="merged" id="all.2qkNzT" title="原文 : Add Data - Scale Up!">データの追加 - スケール・アップ</span></h3>
<div class="section">
<p><span class="merged" id="all.412zl.spl1" title="原文 : The HPA is now monitoring our Coherence deployment so we can now add data to the cluster and see the HPA scale up when heap use grows.">HPAでは現在、Coherenceデプロイメントをモニタリングしています。これにより、クラスタにデータを追加し、ヒープの使用量が増えたときにHPAスケール・アップを確認できます。</span> <span class="merged" id="all.412zl.spl2" title="原文 : The autoscaler example Maven pom file has been configured to use the Maven exec plugin to execute a Coherence command line client that will connect over Coherence Extend to the demo cluster that we have deployed.">自動スケーリング例のMaven pomファイルは、Maven execプラグインを使用して、Coherence拡張を介してデプロイしたデモ・クラスタに接続するCoherenceコマンドライン・クライアントを実行するように構成されています。</span> </p>

<p><span class="merged" id="all.15ws0F.spl1" title="原文 : First we need to create a port forwarder to expose the Coherence Extend port locally.">まず、ポート・フォワーダを作成して、Coherence拡張ポートをローカルで公開する必要があります。</span> <span class="merged" id="all.15ws0F.spl2" title="原文 : Extend is bound to port 20000 in the Pods in our example.">この例では、<code>Pods</code>のポート20000に拡張がバインドされています。</span> </p>

<markup
lang="bash"

>kubectl port-forward pod/test-cluster-0 20000:20000</markup>

<p><span class="merged" id="all.3nIv3z" title="原文 : The command above forwards port 20000 in the Pod test-cluster-0 to the local port 20000.">前述のコマンドは、<code>Pod</code> <code>test-cluster-0</code>のポート20000をローカル・ポート20000に転送します。</span></p>

<p><span class="merged" id="all.brIzT" title="原文 : To start the client, run the following command in a terminal:">クライアントを起動するには、端末で次のコマンドを実行します:</span></p>

<markup
lang="bash"

>./mvnw exec:java -pl autoscaler/</markup>

<p><span class="merged" id="all.10sVpB" title="原文 : The command above will start the console client and eventually display a Map (?): prompt.">前述のコマンドはコンソール・クライアントを起動し、最終的に<code>Map (?):</code>プロンプトを表示します。</span></p>

<p><span class="merged" id="all.36Dv0k" title="原文 : At the map prompt, first create a cache named test with the cache command, type cache test and hit enter:">マップ・プロンプトで、最初に<code>cache</code>コマンドを使用して<code>test</code>という名前のキャッシュを作成し、<code>cache test</code>と入力してEnterを押します:</span></p>

<markup
lang="bash"

>Map (?): cache test</markup>

<p><span class="merged" id="all.2jiXcm.spl1" title="原文 : There will now be a cache created in the cluster named test, and the map prompt will change to Map (test):.">これで、クラスタ内で<code>test</code>という名前のキャッシュが作成され、マップ・プロンプトが<code>Map (test):</code>に変更されます。</span> <span class="merged" id="all.2jiXcm.spl2" title="原文 : We can add random data to this with the bulkput command."><code>bulkput</code>コマンドを使用して、ランダム・データをこれに追加できます。</span> <span class="merged" id="all.2jiXcm.spl3" title="原文 : The format of the bulkput command is:"><code>bulkput</code>コマンドの形式は次のとおりです:</span> </p>

<markup
lang="bash"

>bulkput &lt;# of iterations&gt; &lt;block size&gt; &lt;start key&gt; [&lt;batch size&gt; | all]</markup>

<p><span class="merged" id="all.462iXk" title="原文 : So to add 20,000 entries of 10k bytes each starting at key 1 adding in batches of 1000 we can run the bulkput 20000 10000 1 1000 command at the map prompt:">そのため、キー<code>1</code>から10kバイトの20,000エントリを追加するたびに、1000のバッチで追加するために、マップ・プロンプトで<code>bulkput 20000 10000 1 1000</code>コマンドを実行できます:</span></p>

<markup
lang="bash"

>Map (test): bulkput 20000 10000 1 1000</markup>

<p><span class="merged" id="all.4ZYgh9" title="原文 : We can now look at the HorizontalPodautoscaler resource we create earlier with the command:">これで、前述のコマンドで作成する<code>HorizontalPodautoscaler</code>リソースを確認できます:</span></p>

<markup
lang="bash"

>kubectl get horizontalpodautoscaler.autoscaling/test-cluster-hpa</markup>

<p><span class="merged" id="all.3iiwry" title="原文 : Which will display something like:">次のように表示されます:</span></p>

<markup
lang="bash"

>NAME               REFERENCE                TARGETS     MINPODS   MAXPODS   REPLICAS   AGE
test-cluster-hpa   Coherence/test-cluster   43700m/80   2         10        2          41m</markup>

<p><span class="merged" id="all.2wSsXj.spl1" title="原文 : The HPA is now saying that the value of our heap use metric is 43.7%, so we can add a bit more data.">HPAでは、ヒープ使用メトリックの値が43.7 %であることが示されるため、もう少しデータを追加できます。</span> <span class="merged" id="all.2wSsXj.spl2" title="原文 : It may take a minute or two for the heap to increase and stabilise as different garbage collections happen across the Pods.">ポッド全体で異なるガベージ・コレクションが発生した場合に、ヒープが増加および安定するまでに1、または2分かかる場合があります。</span> <span class="merged" id="all.2wSsXj.spl3" title="原文 : We should be able to safely add another 20000 entries putting the heap above 80% and hopefully scaling our deployment.">ヒープが80%を超える別の20000エントリを安全に追加でき、デプロイメントを適切にスケーリングできます。</span> </p>

<p><span class="merged" id="all.3oE1OP" title="原文 : We need to change the third parameter to bulk put to 20000 otherwise the put will start again at key 1 and just overwrite the previous entries, not really adding to the heap.">3つ目のパラメータを20000に一括配置するように変更する必要があります。そうしないと、PUTはキー<code>1</code>で再度開始され、ヒープには実際に追加されず、前のエントリが上書きされます。</span></p>

<markup
lang="bash"

>Map (test): bulkput 20000 10000 20000 1000</markup>

<p><span class="merged" id="all.3eVlGd.spl1" title="原文 : Now run the kubectl describe command on the HorizontalPodautoscaler resource again, and we should see that it has scaled our cluster.">次に、<code>HorizontalPodautoscaler</code>リソースで<code>kubectl describe</code>コマンドを再度実行し、クラスタがスケールされていることがわかります。</span> <span class="merged" id="all.3eVlGd.spl2" title="原文 : If another 20,000 entries does not cause the heap to exceed 80% then you may need to run the bulkput command once or twice more with a smaller number of entries to push the heap over 80%.">別の20,000エントリによってヒープが80%を超えない場合、<code>bulkput</code>コマンドを1回または2回以上実行し、それより少ない数のエントリでヒープを80%以上プッシュする必要があります。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4Rlbu.spl1" title="原文 : As previously mentioned, everything with HPA is slightly delayed due to the different components polling, and stabilization times.">前述したように、HPAを持つものはすべて、コンポーネントのポーリングや安定化の時間によって少し遅くなります。</span> <span class="merged" id="all.4Rlbu.spl2" title="原文 : It could take a few minutes for the HPA to actually scale the cluster.">HPAが実際にクラスタをスケーリングするのに数分かかる場合があります。</span> </p>
</div>
<markup
lang="bash"

>kubectl describe horizontalpodautoscaler.autoscaling/test-cluster-hpa</markup>

<p><span class="merged" id="all.3JU24O" title="原文 : The output of the kubectl describe command should now be something like this:"><code>kubectl describe</code>コマンドの出力は次のようになります:</span></p>

<markup
lang="bash"

>Name:                                                                             test-cluster-hpa
Namespace:                                                                        operator-test
Labels:                                                                           &lt;none&gt;
Annotations:                                                                      &lt;none&gt;
CreationTimestamp:                                                                Wed, 02 Sep 2020 15:58:26 +0300
Reference:                                                                        Coherence/test-cluster
Metrics:                                                                          ( current / target )
  "heap_memory_usage_after_gc_max_pct" on Coherence/test-cluster (target value):  88300m / 80
Min replicas:                                                                     2
Max replicas:                                                                     10
Coherence pods:                                                                   2 current / 3 desired
Conditions:
  Type            Status  Reason              Message
  ----            ------  ------              -------
  AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 3
  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from Coherence metric heap_memory_usage_after_gc_max_pct
  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range
Events:
  Type    Reason             Age   From                       Message
  ----    ------             ----  ----                       -------
  Normal  SuccessfulRescale  1s    horizontal-pod-autoscaler  New size: 3; reason: Coherence metric heap_memory_usage_after_gc_max_pct above target</markup>

<p><span class="merged" id="all.4Xm02M.spl1" title="原文 : We can see that the heap use value is now 88300m or 88.3% and the events section shows that the HPA has scaled the Coherence deployment to 3.">ヒープの使用値が<code>88300m</code>または88.3 %になったことがわかります。イベント・セクションには、HPAが<code>Coherence</code>デプロイメントを<code>3</code>にスケーリングしたことが示されています。</span> <span class="merged" id="all.4Xm02M.spl2" title="原文 : We can list the Pods and there should be three:"><code>Pods</code>を一覧表示でき、次の3つが必要です:</span> </p>

<markup
lang="bash"

>kubectl get pod -l coherenceCluster=test-cluster</markup>

<markup
lang="bash"

>NAME             READY   STATUS    RESTARTS   AGE
test-cluster-0   1/1     Running   0          3h14m
test-cluster-1   1/1     Running   0          3h14m
test-cluster-2   1/1     Running   0          1m10s</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.29gOt1.spl1" title="原文 : At this point Coherence will redistribute data to balance it over the three members of the cluster.">この時点で、Coherenceはデータを再分散して、クラスタの3つのメンバー間でバランスをとります。</span> <span class="merged" id="all.29gOt1.spl2" title="原文 : It may be that it takes considerable time for this to affect the heap usage as a lot of the cache data will be in the old generation of the heap and not be immediately collected.">キャッシュ・データの多くがヒープの古い世代に存在し、すぐに収集されないため、ヒープ使用量に影響を与えるには非常に時間がかかります。</span> <span class="merged" id="all.29gOt1.spl3" title="原文 : This may then trigger another scale after the 120 second stabilization period that we configured in the HorizontalPodautoscaler.">これにより、<code>HorizontalPodautoscaler</code>で構成した120秒の安定化期間の後に別のスケールをトリガーできます。</span> </p>
</div>
</div>

<h3 id="_clean_up"><span class="merged" id="all.GvSAu" title="原文 : Clean-Up">Clean-Up</span></h3>
<div class="section">
<p><span class="merged" id="all.3AWF56" title="原文 : To clean-up after running the example just uninstall everything in the reverse order:">例の実行後にクリーンアップするには、すべて逆の順序でアンインストールするだけです:</span></p>

<markup
lang="bash"

>kubectl delete -f manifests/hpa.yaml
helm delete prometheus-adapter
helm delete prometheus
kubectl delete -f manifests/cluster.yaml</markup>

<p><span class="merged" id="all.1Zc3CV" title="原文 : Remove the Prometheus RBAC rules, remembering to change the namespace name.">ネームスペース名を忘れずに、Prometheus RBACの規則を削除します。</span></p>

<markup
lang="bash"

>sed "s/coherence-example/default/g"  manifests/prometheus-rbac.yaml | kubectl delete -f -</markup>

<p><span class="merged" id="all.3OUUA3" title="原文 : Delete the Coherence deployment.">Coherenceデプロイメントを削除します。</span></p>

<markup
lang="bash"

>kubectl delete manifests/cluster.yaml</markup>

<p><span class="merged" id="all.2uFs7s.spl1" title="原文 : Undeploy the Operator.">オペレータをアンデプロイします。</span> <span class="merged" id="all.2uFs7s.spl2" title="原文 : TBD…​">TBD…​</span> </p>

</div>
</div>

<h2 id="_conclusions"><span class="merged" id="all.1TDrwk"  title="原文:: Conclusions">結論</span></h2>
<div class="section">
<p><span class="merged" id="all.2fB6Ox.spl1" title="原文 : As we&rsquo;ve shown, it is possible to use the HPA to scale a Coherence cluster based on metrics published by Coherence or custom metrics, but there are some obvious caveats due to how HPA works.">ここに示すとおり、HPAを使用して、Coherenceまたはカスタム・メトリクスによって発行されたメトリクスに基づいてCoherenceクラスタをスケーリングできますが、HPAの動作による明らかな警告があります。</span> <span class="merged" id="all.2fB6Ox.spl2" title="原文 : There are inherent delays in the scaling process, the HPA only polls metrics periodically, which themselves have been polled by Prometheus periodically and hence there can be some delay after reaching a given heap size before the scale command actually reaches the Coherence Operator.">スケーリング・プロセスには固有の遅延があり、HPAは定期的にメトリクスのみをポーリングします。このメトリクスはPrometheusによって定期的にポーリングされるため、scaleコマンドが実際にCoherence Operatorに到達する前に、特定のヒープ・サイズに達した後、なんらかの遅延が発生する可能性があります。</span> <span class="merged" id="all.2fB6Ox.spl3" title="原文 : This will be obvious when running the example below.">これは、次の例を実行すると明らかになります。</span> <span class="merged" id="all.2fB6Ox.spl4" title="原文 : Given a suitable configuration the HPA can be useful to scale as load increases but in no way can it guarantee that an out of memory exception will never happen.">適切な構成の場合、HPAは負荷の増加に伴ってスケーリングすると役立ちますが、メモリー不足の例外は発生しません。</span> </p>

<p><span class="merged" id="all.3i8p9B" title="原文 : Using the HPA to scale as Coherence Pod&rsquo;s heaps become filled is in no way an excuse not to do proper capacity planning and size your Coherence clusters appropriately.">HPAを使用してCoherenceポッドがいっぱいになったときにスケーリングすることは、適切な容量計画を行わずにCoherenceクラスタを適切にサイズ設定する方法ではありません。</span></p>

</div>
</doc-view>
