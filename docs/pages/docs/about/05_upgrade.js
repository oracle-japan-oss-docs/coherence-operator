<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_upgrading_from_operator_v2"><span class="merged" id="all.2gwyAA" title="原文 : Upgrading from Operator v2">オペレータv2からのアップグレード</span></h2>
<div class="section">
<p><span class="merged" id="all.sJkLq.spl1" title="原文 : Version 3 of the Coherence Operator is very different to version 2.">Coherence Operatorのバージョン3は、バージョン2と大きく異なります。</span> <span class="merged" id="all.sJkLq.spl2" title="原文 : There is only a single CRD named Coherence instead of the three CRDs used by v2, and the operator no longer uses Helm internally to install the Kubernetes resources.">v2で使用される3つのCRDではなく、<code>Coherence</code>という名前のCRDが1つのみ存在し、オペレータはKubernetesリソースをインストールするために内部的にHelmを使用しません。</span> </p>

<p><span class="merged" id="all.2DeZIo.spl1" title="原文 : In terms of usage and concepts, the biggest change is that there are no longer clusters and roles.">使用方法および概念に関して、最大の変化は、クラスタおよびロールがないことです。</span> <span class="merged" id="all.2DeZIo.spl2" title="原文 : The Coherence CRD represents what would previously in v2 have been a role."><code>Coherence</code> CRDは、v2で以前はロールであったものを表します。</span> <span class="merged" id="all.2DeZIo.spl3" title="原文 : A Coherence cluster that is made up of multiple roles will just require multiple Coherence resources deploying to Kubernetes.">複数のロールで構成されるCoherenceクラスタでは、Kubernetesにデプロイする複数の<code>Coherence</code>リソースのみが必要です。</span> <span class="merged" id="all.2DeZIo.spl4" title="原文 : The simplification of the operator, and consequently the better reliability, far outweigh any advantage of being able to put multiple roles in a single yaml file.">オペレータの簡素化、そしてその結果、信頼性の向上が、複数のロールを1つのyamlファイルに配置できるという利点よりもはるかに優れています。</span> <span class="merged" id="all.2DeZIo.spl5" title="原文 : If this is desire just put multiple Coherence resource definitions in a single yaml file with the --- separator.">これが必要な場合は、<code>---</code>セパレータを含む単一のyamlファイルに複数の<code>Coherence</code>リソース定義を置きます。</span> </p>

<p><span class="merged" id="all.6vDv5"  title="原文:: For example:">例えば:</span></p>

<p><span class="merged" id="all.3c0vu" title="原文 : In Operator v2 a cluster may have been defined with two roles, storage and proxy like this:">オペレータv2では、<code>storage</code>および<code>proxy</code>という2つのロールを使用してクラスタが定義されている場合があります:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: CoherenceCluster
metadata:
  name: my-cluster
spec:
  roles:
    - role: storage
      replicas: 3
    - role: proxy
      replicas: 2</markup>

<p><span class="merged" id="all.1ShySF" title="原文 : In Operator v3 this needs to be two separate`Coherence` resources.">オペレータv3では、これは2つの別々のCoherenceリソースである必要があります。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: my-cluster-storage
spec:
  - role: storage
    replicas: 3
    cluster: my-cluster
---
apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: my-cluster-proxy
spec:
  - role: proxy
    replicas: 2
    cluster: my-cluster</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.35TyzC" title="原文 : To make both Coherence resources part of the same cluster the cluster field must now be set in both resources to the same value, in this case my-cluster.">両方の<code>Coherence</code>リソースを同じクラスタの一部にするには、両方のリソースの<code>cluster</code>フィールドを同じ値(この場合は<code>my-cluster</code>)に設定する必要があります。</span></p>
</div>
</div>

<h2 id="_applications"><span class="merged" id="all.4OSv4C"  title="原文:: Applications">アプリケーション</span></h2>
<div class="section">
<p><span class="merged" id="all.4Iq9VD.spl1" title="原文 : Coherence applications in Operator v2 worked by application resources (jar files etc) being provided in an image that was loaded as an init-container in the Pod, and the application artifacts copied to the classpath of the Coherence container.">オペレータv2のCoherenceアプリケーションは、アプリケーション・リソース(jarファイルなど)が<code>Pod</code>にinitコンテナとしてロードされたイメージで提供され、アプリケーション・アーティファクトがCoherenceコンテナのクラスパスにコピーされました。</span> <span class="merged" id="all.4Iq9VD.spl2" title="原文 : In version 3 of the Operator there is only one image required that should contain all of the resources required for the application, including Coherence jar.">バージョン3のオペレータには、アプリケーションに必要なすべてのリソース(Coherence jarを含む)を含める必要があるイメージが1つのみあります。</span> <span class="merged" id="all.4Iq9VD.spl3" title="原文 : This gives the application developer much more control over how the image is built and what resources it contains, as well as making it more obvious what is going to be run when the container starts.">これにより、アプリケーション開発者は、イメージのビルド方法およびそれに含まれるリソースをより詳細に制御でき、コンテナの起動時に実行される内容をより明確にすることができます。</span> </p>


<h3 id="_images"><span class="merged" id="all.4F4mQ0"  title="原文:: Images">イメージ</span></h3>
<div class="section">
<p><span class="merged" id="all.1b0lSe.spl1" title="原文 : In Operator v2 there were multiple images defined, one for Coherence and one used to provide application artifacts.">オペレータv2には、Coherence用に1つ、アプリケーション・アーティファクトを提供するために使用されたイメージが複数定義されています。</span> <span class="merged" id="all.1b0lSe.spl2" title="原文 : Because of the application changes described only a single image now needs to be specified in the image field of the CRD spec.">アプリケーションが変更されたため、<code>CRD</code>スペックの<code>image</code>フィールドに単一のイメージのみを指定する必要があります。</span> </p>

<p><span class="merged" id="all.n90EJ" title="原文 : See the Applications section of the doecumentation for more details.">詳細は、説明の<router-link @click.native="this.scrollFix('#applications/010_overview.adoc')" to="#applications/010_overview.adoc">「アプリケーション」</router-link>セクションを参照してください。</span></p>

</div>
</div>

<h2 id="_crd_differences"><span class="merged" id="all.1XJjgJ" title="原文 : CRD Differences">CRD差異</span></h2>
<div class="section">
<p><span class="merged" id="all.Fwo2U.spl1" title="原文 : A lot of the fields in the Coherence CRD are the same as when defining a role in version 2."><code>Coherence</code> CRDのフィールドの多くは、バージョン2でロールを定義する場合と同じです。</span> <span class="merged" id="all.Fwo2U.spl2" title="原文 : Whilst a number of new fields and features have been added in version 3, a handful of fields have moved, and a small number, that no longer made sense, have been removed.">バージョン3で多数の新しいフィールドや機能が追加されている間に、いくつかのフィールドが移動し、意味のない数値が少なくなりました。</span> <span class="merged" id="all.Fwo2U.spl3" title="原文 : The Coherence Spec page documents the full Coherence CRD, so it is simple to locate where a field might have moved to."><router-link @click.native="this.scrollFix('#about/04_coherence_spec.adoc')" to="#about/04_coherence_spec.adoc">「Coherence仕様」</router-link>ページでは、完全な<code>Coherence</code> CRDがドキュメント化されるため、フィールドの移動先の場所を簡単に特定できます。</span> </p>

</div>

<h2 id="_logging_and_fluentd"><span class="merged" id="all.1vffzo" title="原文 : Logging and Fluentd">ロギングおよびFluentd</span></h2>
<div class="section">
<p><span class="merged" id="all.1aKWRe.spl1" title="原文 : Version 3 of the operator no longer has fields to configure a Fluentd side-car container.">オペレータのバージョン3には、Fluentdサイドカー・コンテナを構成するためのフィールドがありません。</span> <span class="merged" id="all.1aKWRe.spl2" title="原文 : There are a lot of different ways to configure Fluentd and making the Operator accomodate all of these was becoming too much of a head-ache to do in a backwards compatible way.">Fluentdを構成し、オペレータに納めるためのさまざまな方法があります。これらはすべて、後方互換性のある方法で行う頭痛が多すぎます。</span> <span class="merged" id="all.1aKWRe.spl3" title="原文 : If a Fluentd side-car is required it can just be added to the Coherence resource spec as an additional container, so there is no limitation on the Fluentd configuration.">Fluentdサイドカーが必要な場合、<code>Coherence</code>リソース仕様に追加コンテナとしてのみ追加できるため、Fluentd構成に制限はありません。</span> <span class="merged" id="all.1aKWRe.spl4" title="原文 : See the Logging documentation for more examples.">詳細は、<router-link @click.native="this.scrollFix('#logging/010_overview.adoc')" to="#logging/010_overview.adoc">「ロギング・ドキュメント」</router-link>を参照してください。</span> </p>

</div>

<h2 id="_prometheus_and_elasticsearch"><span class="merged" id="all.2xJpeC" title="原文 : Prometheus and Elasticsearch">PrometheusおよびElasticsearch</span></h2>
<div class="section">
<p><span class="merged" id="all.cPO4b.spl1" title="原文 : Version 3 of the Operator no longer comes with the option to install Prometheus and/or Elasticsearch.">オペレータのバージョン3には、PrometheusまたはElasticsearch(あるいはその両方)をインストールするオプションが含まれなくなりました。</span> <span class="merged" id="all.cPO4b.spl2" title="原文 : This feature was only ever intended to make it easier to demo features that required Prometheus and Elasticsearch and keeping this up to date was a headache nobody needed.">この機能は、PrometheusおよびElasticsearchを必要とする機能をデモしやすくすることを目的としており、これに最新の状態を維持することは誰も必要ありませんでした。</span> <span class="merged" id="all.cPO4b.spl3" title="原文 : Both Prometheus and Elasticsearch have operators of their own which make installing them simple and importing the dashboards provided by the Coherence Operator simple too.">PrometheusとElasticsearchの両方に独自のオペレータがあり、それらを簡単にインストールし、Coherence Operatorによって提供されるダッシュボードも簡単にインポートします。</span> </p>

</div>
</doc-view>
