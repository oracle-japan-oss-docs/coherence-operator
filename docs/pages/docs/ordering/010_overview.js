<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coherence_deployment_dependencies_and_start_order"><span class="merged" id="all.uny00" title="原文 : Coherence Deployment Dependencies and Start Order">Coherenceデプロイメントの依存関係および開始順序</span></h2>
<div class="section">
<p><span class="merged" id="all.n8kaa.spl1" title="原文 : The default behaviour of the operator is to create the StatefulSet for a Coherence deployment immediately.">オペレータのデフォルトの動作では、<code>Coherence</code>デプロイメントの<code>StatefulSet</code>を即時に作成します。</span> <span class="merged" id="all.n8kaa.spl2" title="原文 : Sometimes this behaviour is not suitable if, for example, when application code running in one deployment depends on the availability of another deployment.">たとえば、あるデプロイメントで実行されているアプリケーション・コードが別のデプロイメントの可用性に依存する場合など、この動作が適していない場合があります。</span> <span class="merged" id="all.n8kaa.spl3" title="原文 : Typically, this might be storage disabled members having functionality that relies on the storage members being ready first.">通常、これはストレージが無効なメンバーで、最初に準備されているストレージ・メンバーに依存する機能を持つ可能性があります。</span> <span class="merged" id="all.n8kaa.spl4" title="原文 : The Coherence CRD can be configured with a startQuorum that defines a deployment’s dependency on other deployments in the cluster."><code>Coherence</code> CRDは、クラスタ内の他のデプロイメントへのデプロイメントの依存関係を定義する<code>startQuorum</code>を使用して構成できます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.QaNep" title="原文 : The startQuorum only applies when a cluster is initially being started by the operator, it does not apply in other functions such as upgrades, scaling, shut down etc."><code>startQuorum</code>は、クラスタが最初にオペレータによって起動されるときにのみ適用され、アップグレード、スケーリング、停止などの他の機能には適用されません。</span></p>
</div>
<p><span class="merged" id="all.3emlZj.spl1" title="原文 : An individual deployment can depend on one or more other deployment.">個々のデプロイメントは、1つ以上の他のデプロイメントに依存できます。</span> <span class="merged" id="all.3emlZj.spl2" title="原文 : The dependency can be such that the deployment will not be created until all of the Pods of the dependent deployment are ready, or it can be configured so that just a single Pod of the dependent deployment must be ready.">依存関係デプロイメントは、依存デプロイメントのすべての<code>Pods</code>が準備可能になるまでデプロイメントまたは依存デプロイメントの単一の<code>Pod</code>のみの準備ができるように構成できます。</span> </p>

<p><span class="merged" id="all.1s4oXm" title="原文 : For example: In the yaml snippet below there are two Coherence deployments, data and proxy">次に例を示します: 次のyamlスニペットには、<code>Coherence</code>デプロイメントが2つあります(<code>data</code>および<code>proxy</code>)</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: data
spec:
  replicas: 3           <span class="conum" data-value="1" />
---
apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: proxy
spec:
  startQuorum:          <span class="conum" data-value="2" />
    - deployment: data
      podCount: 1</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3iuBbk" title="原文 : The data deployment does not specify a startQuorum so this role will be created immediately by the operator."><code>data</code>デプロイメントでは<code>startQuorum</code>を指定しないため、このロールはオペレータによってすぐに作成されます。</span></li>
<li data-value="2"><span class="merged" id="all.21h8As.spl1" title="原文 : The proxy deployment has a start quorum that means that the proxy deployment depends on the data deployment."><code>proxy</code>デプロイメントには、<code>proxy</code>デプロイメントが<code>data</code>デプロイメントに依存することを意味する開始定足数があります。</span> <span class="merged" id="all.21h8As.spl2" title="原文 : The podCount field has been set to 1 meaning the proxy deployment’s StatefulSet will not be created until at least 1 of the data deployment’s Pods is in the Ready state."><code>podCount</code>フィールドが<code>1</code>に設定されているため、<code>proxy</code>デプロイメントの<code>StatefulSet</code>は、<code>data</code>デプロイメントの<code>Pods</code>の少なくとも<code>1</code>が<code>Ready</code>状態になるまで作成されません。</span> </li>
</ul>
<p><span class="merged" id="all.GL7nm" title="原文 : Omitting the podCount from the quorum means that the role will not start until all the configured replicas of the dependent deployment are ready; for example:"><code>podCount</code>を定足数から省略すると、依存デプロイメントのすべての構成済レプリカの準備が完了するまで、ロールされません。次に例を示します:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: data
spec:
  replicas: 3
---
apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: proxy
spec:
  startQuorum:          <span class="conum" data-value="1" />
    - deployment: data</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3QsUmv" title="原文 : The proxy deployment’s startQuorum just specifies a dependency on the data deployment with no podCount so all 3 of the data deployment’s Pods must be Ready before the proxy deployment’s StatefulSet is created by the operator."><code>proxy</code>デプロイメントの<code>startQuorum</code>は、<code>podCount</code>なしで<code>data</code>デプロイメントへの依存関係を指定するだけで、<code>proxy</code>デプロイメントの<code>StatefulSet</code>がオペレータによって作成される前に、<code>data</code>デプロイメントの<code>Pods</code>のすべての<code>3</code>が<code>Ready</code>である必要があります。</span></li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.307qBB" title="原文 : Setting a podCount less than or equal to zero is the same as not specifying a count."><code>podCount</code>をゼロ以下に設定することは、カウントを指定しないことと同じです。</span></p>
</div>

<h3 id="_multiple_dependencies"><span class="merged" id="all.1KnO29" title="原文 : Multiple Dependencies">複数の依存関係</span></h3>
<div class="section">
<p><span class="merged" id="all.1FUmby" title="原文 : The startQuorum can specify a dependency on more than on deployment; for example:"><code>startQuorum</code>では、デプロイメント以上の依存関係を指定できます。次に例を示します:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: data      <span class="conum" data-value="1" />
spec:
  replicas: 5
---
apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: proxy        <span class="conum" data-value="1" />
spec:
  replicas: 3
---
apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: web
spec:
  startQuorum:          <span class="conum" data-value="2" />
    - deployment: data
    - deployment: proxy
      podCount: 1</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1XTSXs" title="原文 : The data and proxy deployments do not specify a startQuorum, so the StatefulSets for these deployments will be created immediately by the operator."><code>data</code>および<code>proxy</code>デプロイメントでは<code>startQuorum</code>を指定しないため、これらのデプロイメントの<code>StatefulSets</code>はオペレータによってただちに作成されます。</span></li>
<li data-value="2"><span class="merged" id="all.4LTOuu.spl1" title="原文 : The web deployment has a startQuorum the defines a dependency on both the data deployment and the proxy deployment."><code>web</code>デプロイメントには、<code>data</code>デプロイメントと<code>proxy</code>デプロイメントの両方に対する依存関係を定義する<code>startQuorum</code>があります。</span> <span class="merged" id="all.4LTOuu.spl2" title="原文 : The proxy dependency also specifies a podCount of 1."><code>proxy</code>依存関係では、<code>1</code>の<code>podCount</code>も指定します。</span> <span class="merged" id="all.4LTOuu.spl3" title="原文 : This means that the operator wil not create the web role’s StatefulSet until all 5 replicas of the data deployment are Ready and at least 1 of the proxy deployment’s Pods is Ready.">つまり、<code>data</code>デプロイメントのすべての<code>5</code>レプリカが<code>Ready</code>で、<code>proxy</code>デプロイメントの<code>Pods</code>の<code>1</code>が<code>Ready</code>になるまで、オペレータは<code>web</code>ロールの<code>StatefulSet</code>を作成しません。</span> </li>
</ul>
</div>

<h3 id="_chained_dependencies"><span class="merged" id="all.moRsZ" title="原文 : Chained Dependencies">連鎖依存関係</span></h3>
<div class="section">
<p><span class="merged" id="all.1BdhmR" title="原文 : It is also possible to chain dependencies, for example:">依存関係を連鎖させることもできます。次に例を示します:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: data            <span class="conum" data-value="1" />
spec:
  replicas: 5
---
apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: proxy
spec:
  replicas: 3
  startQuorum:          <span class="conum" data-value="2" />
    - deployment: data
---
apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: web
spec:
  startQuorum:          <span class="conum" data-value="3" />
    - deployment: proxy
      podCount: 1</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2CsHl5" title="原文 : The data deployment does not specify a startQuorum so this deployment’s StatefulSet will be created immediately by the operator."><code>data</code>デプロイメントでは<code>startQuorum</code>を指定しないため、このデプロイメントの<code>StatefulSet</code>はオペレータによってすぐに作成されます。</span></li>
<li data-value="2"><span class="merged" id="all.4dVpnp" title="原文 : The proxy deployment defines a dependency on the data deployment without a podCount so all five Pods of the data role must be in a Ready state before the operator will create the proxy deployment’s StatefulSet."><code>proxy</code>デプロイメントでは、<code>podCount</code>なしで<code>data</code>デプロイメントへの依存関係を定義するため、オペレータによって<code>proxy</code>デプロイメントの<code>StatefulSet</code>が作成される前に、<code>data</code>ロールの5つの<code>Pods</code>がすべて<code>Ready</code>状態である必要があります。</span></li>
<li data-value="3"><span class="merged" id="all.2LQMos" title="原文 : The web deployment depends on the proxy deployment with a podCount of one, so the operator will not create the web deployment’s StatefulSet until at least one proxy deployment Pod is in a Ready state."><code>web</code>デプロイメントは、<code>podCount</code>が1の<code>proxy</code>デプロイメントに依存するため、オペレータは、<code>web</code>デプロイメントの<code>StatefulSet</code>は、少なくとも1つの<code>proxy</code>デプロイメント<code>Pod</code>が<code>Ready</code>状態になるまで作成しません。</span></li>
</ul>
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.nMtjX.spl1" title="原文 : The operator does not validate that a startQuorum makes sense.">オペレータは、<code>startQuorum</code>が意味があることをバリデートしません。</span> <span class="merged" id="all.nMtjX.spl2" title="原文 : It is possible to declare a quorum with circular dependencies, in which case the roles will never start.">循環依存関係を持つ定足数を宣言できます。この場合、ロールは起動しません。</span> <span class="merged" id="all.nMtjX.spl3" title="原文 : It would also be possible to create a quorum with a podCount greater than the replicas value of the dependent deployment, in which case the quorum would never be met, and the role would not start.">また、依存デプロイメントの<code>replicas</code>値より大きい<code>podCount</code>を持つ定足数を作成することもできます。この場合、定足数は満たされず、ロールは開始されません。</span> </p>
</div>
</div>
</div>
</doc-view>
