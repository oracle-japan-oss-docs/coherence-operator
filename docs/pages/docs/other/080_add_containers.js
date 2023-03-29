<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_configure_additional_containers"><span class="merged" id="all.4WH1tp" title="原文 : Configure Additional Containers">追加コンテナの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3qacsb.spl1" title="原文 : Additional containers and init-containers can easily be added to a Coherence resource Pod.">追加のコンテナおよびinit-containersは、<code>Coherence</code>リソース・ポッドに簡単に追加できます。</span> <span class="merged" id="all.3qacsb.spl2" title="原文 : There are two types of container that can be added, init-containers and normal containers.">追加できるコンテナには、initコンテナと通常のコンテナの2つのタイプがあります。</span> <span class="merged" id="all.3qacsb.spl3" title="原文 : An example use case for this would be to add something like a Fluentd side-car container to ship logs to Elasticsearch.">この使用例としては、Fluentdサイドカー・コンテナのようなものを追加して、ログをElasticsearchに出荷します。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4QPTKL.spl1" title="原文 : A note about Volumes: The Operator created a number of volumes and volume mounts by default.">ボリュームに関するノート:<br>オペレータは、デフォルトでいくつかのボリュームおよびボリューム・マウントを作成しました。</span> <span class="merged" id="all.4QPTKL.spl2" title="原文 : These default volume mounts will be added to all containers in the Pod including containers added as described here.">これらのデフォルトのボリューム・マウントは、ここで説明するように追加されたコンテナを含めて、<code>Pod</code>の<strong>「すべて」</strong>コンテナに追加されます。</span> <span class="merged" id="all.4QPTKL.spl3" title="原文 :  Any additional volumes and volume mounts added to the Coherence resource spec will also be added all containers."><br><code>Coherence</code>リソース仕様に追加したボリュームおよびボリューム・マウントも、<strong>「すべて」</strong>コンテナに追加されます。</span> </p>
</div>

<h3 id="_add_a_container"><span class="merged" id="all.2pRT7G" title="原文 : Add a Container">コンテナを追加</span></h3>
<div class="section">
<p><span class="merged" id="all.SrKPK" title="原文 : To add a container to the Pods specify the container in the sideCars list in the Coherence CRD spec."><code>Pods</code>にコンテナを追加するには、<code>Coherence</code> CRD仕様の<code>sideCars</code>リストにコンテナを指定します。</span></p>

<p><span class="merged" id="all.2xG7pK" title="原文 : See the Logging Documentation for a bigger example of adding a side-car container.">サイドカー・コンテナの追加のより大きな例については、<router-link to="/docs/logging/020_logging">「ロギング・ドキュメント」</router-link>を参照してください。</span></p>

<p><span class="merged" id="all.6vDv5.22"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  sideCars:
    - name: fluentd                   <span class="conum" data-value="1" />
      image: "fluent/fluentd:v1.3.3"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4OrZu0" title="原文 : An additional container named fluentd has been added to the CRD spec."><code>fluentd</code>という名前のコンテナがCRD仕様に追加されました。</span></li>
</ul>
<p><span class="merged" id="all.26HQWq.spl1" title="原文 : The containers will added to the sideCars will be added to the Pods exactly as configured.">コンテナは<code>sideCars</code>に追加され、構成済と正確に<code>Pods</code>に追加されます。</span> <span class="merged" id="all.26HQWq.spl2" title="原文 : Any configuration that is valid in a Kubernetes Container Spec may be added to an entry in sideCars">Kubernetes <a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#container-v1-core" id="" target="_blank" >「コンテナ仕様」</a>で有効な構成はすべて、<code>sideCars</code>のエントリに追加できます</span> </p>

</div>

<h3 id="_add_an_init_container"><span class="merged" id="all.9J7Ds" title="原文 : Add an Init-Container">初期化コンテナの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.4JQ4py.spl1" title="原文 : Just like normal containers above, additional init-containers can also be added to the Pods.">前述の通常のコンテナと同様に、<code>Pods</code>に追加のinitコンテナを追加することもできます。</span> <span class="merged" id="all.4JQ4py.spl2" title="原文 : To add an init-container to the Pods specify the container in the initContainers list in the Coherence CRD spec.">init-containerを<code>Pods</code>に追加するには、<code>Coherence</code> CRD仕様の<code>initContainers</code>リストにコンテナを指定します。</span> <span class="merged" id="all.4JQ4py.spl3" title="原文 : As with containers, for init-containers any configuration that is valid in a Kubernetes Container Spec may be added to an entry in initContainers">コンテナの場合と同様に、initコンテナの場合、Kubernetes <a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#container-v1-core" id="" target="_blank" >「コンテナ仕様」</a>で有効なすべての構成を<code>initContainers</code>のエントリに追加できます</span> </p>

<p><span class="merged" id="all.6vDv5.23"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  initContainers:
    - name: setup                   <span class="conum" data-value="1" />
      image: "app-setup:1.0.0"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.22DfsA" title="原文 : An additional init-container named setup has been added to the CRD spec with an image named app-setup:1.0.0."><code>setup</code>という名前の別のinitコンテナが、<code>app-setup:1.0.0</code>という名前のイメージとともにCRD仕様に追加されました。</span></li>
</ul>
</div>
</div>
</doc-view>
