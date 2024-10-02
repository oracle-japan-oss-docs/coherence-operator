<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_member_identity"><span class="merged" id="all.3aP1Fa" title="原文 : Member Identity">メンバー・アイデンティティ</span></h2>
<div class="section">
<p><span class="merged" id="all.1r1IYE.spl1" title="原文 : Each JVM in a Coherence cluster has an identity.">Coherenceクラスタ内の各JVMには、アイデンティティがあります。</span> <span class="merged" id="all.1r1IYE.spl2" title="原文 : This is made up of a number of values for site, rack, member, machine and node-id.">これは、<code>site</code>, <code>rack</code>, <code>member</code>, <code>machine</code>および<code>node-id</code>の値の数で構成されます。</span> <span class="merged" id="all.1r1IYE.spl3" title="原文 : The node-id is assigned by Coherence when a node joins a cluster."><code>node-id</code>は、ノードがクラスタに参加したときにCoherenceによって割り当てられます。</span> <span class="merged" id="all.1r1IYE.spl4" title="原文 : The other values can be assigned using system properties, or will have defaults assigned by Coherence if not set.">その他の値は、システム・プロパティを使用して割り当てることができます。設定されていない場合、Coherenceによってデフォルトが割り当てられます。</span> <span class="merged" id="all.1r1IYE.spl5" title="原文 : The Coherence Operator will configure properties for these values.">Coherence Operatorは、これらの値のプロパティを構成します。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.Vgkda" title="原文 : The member name is set to the Pod name.">メンバー名はポッド名に設定されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.1LN6Hs" title="原文 : The machine name is set to the name of the Node that the Pod has been scheduled onto.">マシン名は、ポッドがスケジュールされているノードの名前に設定されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.1kjUf8.spl1" title="原文 : The site name is taken from the topology.kubernetes.io/zone label on the Node that the Pod has been scheduled onto.">サイト名は、ポッドがスケジュールされたノードの<code>topology.kubernetes.io/zone</code>ラベルから取得されます。</span> <span class="merged" id="all.1kjUf8.spl2" title="原文 : If the topology.kubernetes.io/zone label is not set then the deprecated failure-domain.beta.kubernetes.io/zone label will be tried."><code>topology.kubernetes.io/zone</code>ラベルが設定されていない場合は、非推奨の<code>failure-domain.beta.kubernetes.io/zone</code>ラベルが試行されます。</span> <span class="merged" id="all.1kjUf8.spl3" title="原文 : If neither of these labels are set then the site will be unset, and the cache services may not reach site safe.">これらのラベルのどちらも設定されていない場合、サイトは設定解除され、キャッシュ・サービスはサイト安全に到達しない可能性があります。</span> </p>

</li>
<li>
<p><span class="merged" id="all.vcYHN.spl1" title="原文 : The rack name is taken from the oci.oraclecloud.com/fault-domain label on the Node that the Pod has been scheduled onto.">ラック名は、ポッドがスケジュールされているノードの<code>oci.oraclecloud.com/fault-domain</code>ラベルから取得されます。</span> <span class="merged" id="all.vcYHN.spl2" title="原文 : If the oci.oraclecloud.com/fault-domain label is not set then the site labels will be set to the same value as the site name."><code>oci.oraclecloud.com/fault-domain</code>ラベルが設定されていない場合、サイト・ラベルはサイト名と同じ値に設定されます。</span> </p>

</li>
</ul>
</div>

<h2 id="_status_ha_values"><span class="merged" id="all.3TcgPE" title="原文 : Status HA Values">ステータスHA値</span></h2>
<div class="section">
<p><span class="merged" id="all.20X6TR.spl1" title="原文 : As well as identifying cluster members, these values are also used by the partitioned cache service to distribute data as widely (safely) as possible in the cluster.">クラスタ・メンバーを識別するだけでなく、これらの値はパーティション・キャッシュ・サービスでも使用され、クラスタ内で可能なかぎり広く(安全)データを分散します。</span> <span class="merged" id="all.20X6TR.spl2" title="原文 : The backup owner will be as far away as possible from the primary owner.">バックアップ所有者は、プライマリ所有者からできるかぎり遠く離れます。</span> <span class="merged" id="all.20X6TR.spl3" title="原文 : Ideally this would be on a member with a different site; failing that, a different rack, machine and finally member.">理想的には、異なるサイト(別のラック、マシン、最後にメンバー)を持つメンバーの場合です。</span> </p>

</div>

<h2 id="_changing_site_and_rack_values"><span class="merged" id="all.2WIoFQ" title="原文 : Changing Site and Rack Values">サイトおよびラックの値の変更</span></h2>
<div class="section">
<p><span class="merged" id="all.C4GKm.spl1" title="原文 : You should not usually need to change the default values applied for the member and machine names, but you may need to change the values used for the site, or rack.">通常、<code>member</code>および<code>machine</code>名に適用されるデフォルト値を変更する必要はありませんが、サイトまたはラックに使用される値を変更する必要がある場合があります。</span> <span class="merged" id="all.C4GKm.spl2" title="原文 : The labels used for the site and rack are standard k8s labels but the k8s cluster being used may not have these labels set."><code>site</code>および<code>rack</code>に使用されるラベルは標準のk8sラベルですが、使用されるk8sクラスタにはこれらのラベルが設定されていない可能性があります。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.2"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.WYKOG.spl1" title="原文 : If the Coherence site is specified but no value is set for rack, the Operator will configure the rack value to be the same as the site.">Coherenceサイトが指定されているが、ラックに値が設定されていない場合、オペレータはラック値をサイトと同じ値に構成します。</span> <span class="merged" id="all.WYKOG.spl2" title="原文 : Coherence will not set the site if any of the identity values below it are missing (i.e. rack, machine, member).">Coherenceは、その下のアイデンティティ値(ラック、マシン、メンバー)のいずれかが欠落している場合、サイトを設定しません。</span> </p>
</p>
</div>
<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.3WM05I" title="原文 : Maintaining Site and Rack Safety"><strong>サイトおよびラックの安全性の維持</strong></span></p>

<p><span class="merged" id="all.14UvK.spl1" title="原文 : The details below show alternate approaches to set the Coherence site and rack identity.">次の詳細は、Coherenceサイトおよびラック・アイデンティティを設定するための代替アプローチを示しています。</span> <span class="merged" id="all.14UvK.spl2" title="原文 : If site and rack are set to a fixed value for the deployment, then all Coherence members in that deployment will have the same value.">サイトとラックがデプロイメントの固定値に設定されている場合、そのデプロイメント内のすべてのCoherenceメンバーは同じ値になります。</span> <span class="merged" id="all.14UvK.spl3" title="原文 : This means it would be impossible for Coherence to become site or rack safe.">つまり、Coherenceがサイトまたはラック・セーフになることは不可能です。</span> </p>

<p><span class="merged" id="all.jCBm.spl1" title="原文 : A work-around for this would be to use multiple Coherence deployments configured with the same cluster name and each having different site and rack values.">これを回避するには、同じクラスタ名で構成された複数のCoherenceデプロイメントを使用し、それぞれが異なるサイトとラックの値を持つようにします。</span> <span class="merged" id="all.jCBm.spl2" title="原文 : For examples, if a Kubernetes cluster has two fault domains, two separate Coherence resources could be created with different site and rack values.">たとえば、Kubernetesクラスタに2つのフォルト・ドメインがある場合、異なるサイト値とラック値を使用して2つの別々のCoherenceリソースを作成できます。</span> <span class="merged" id="all.jCBm.spl3" title="原文 : Each Coherence resource would then have different Pod scheduling rules, so that each Coherence deployment is targeted at only one fault domain.">各Coherenceリソースにはそれぞれ異なるポッド・スケジューリング・ルールがあるため、各Coherenceデプロイメントのターゲットは1つのフォルト・ドメインのみです。</span> <span class="merged" id="all.jCBm.spl4" title="原文 : All the Pods in the two Coherence deployments would form a single Cluster, and because there will be Pods with different site and rack values, Coherence will be able to reach site safety.">2つのCoherenceデプロイメントのすべてのポッドは1つのクラスタを形成し、サイトとラックの値が異なるポッドが存在するため、Coherenceはサイトの安全性を確保できます。</span> </p>
</p>
</div>

<h3 id="_apply_node_labels"><span class="merged" id="all.3N1eZo" title="原文 : Apply Node Labels">ノード・ラベルの適用</span></h3>
<div class="section">
<p><span class="merged" id="all.1adgef" title="原文 : One solution to missing site and rack values is to apply the required labels to the Nodes in the k8s cluster.">サイトおよびラックの値が欠落する1つの解決策は、k8sクラスタのノードに必要なラベルを適用することです。</span></p>

<p><span class="merged" id="all.1BU55B" title="原文 : For example the command below labels the node in Docker dDesktop on MacOS to &quot;twighlight-zone&quot;.">たとえば、次のコマンドは、MacOSのDocker dDesktopのノードをtwighlight-zoneにラベル付けします。</span></p>

<markup
lang="bash"

>kubectl label node docker-desktop topology.kubernetes.io/zone=twighlight-zone</markup>

</div>

<h3 id="_specify_site_and_rack_using_environment_variables"><span class="merged" id="all.4F7ZgF" title="原文 : Specify Site and Rack using Environment Variables">環境変数を使用したサイトおよびラックの指定</span></h3>
<div class="section">
<p><span class="merged" id="all.2Q5Lxh" title="原文 : The site and rack values can be set by setting the COHERENCE_SITE and COHERENCE_RACK environment variables.">サイトおよびラックの値は、<code>COHERENCE_SITE</code>および<code>COHERENCE_RACK</code>環境変数を設定することで設定できます。</span></p>

<p><span class="merged" id="all.2uQlPh" title="原文 : If these values are set then the Operator will not set the coherence.site or coherence.rack system properties as Coherence will read the environment variable values.">これらの値が設定されている場合、Coherenceは環境変数値を読み取るため、オペレータは<code>coherence.site</code>または<code>coherence.rack</code>システム・プロパティを設定しません。</span></p>

<p><span class="merged" id="all.XyQaC" title="原文 : For example, the yaml below will set the sit to test-site and the rack to test-rack:">たとえば、次のyamlは、サイトを<code>test-site</code>に設定し、ラックを<code>test-rack</code>に設定します:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: my-cluster
spec:
  env:
    - name: COHERENCE_SITE
      value: test-site
    - name: COHERENCE_RACK
      value: test-rack</markup>

<p><span class="merged" id="all.3qE4WT" title="原文 : Site and rack environment variables will be expanded if they reference other variables.">サイトおよびラックの環境変数は、他の変数を参照すると展開されます。</span></p>

<p><span class="merged" id="all.2ZCAH6" title="原文 : For example, the yaml below will set the site to the value of the MY_SITE environment variables, and rack to the value of the MY_RACK environment variable.">たとえば、次のyamlは、サイトを<code>MY_SITE</code>環境変数の値に設定し、ラックを<code>MY_RACK</code>環境変数の値に設定します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: my-cluster
spec:
  env:
    - name: COHERENCE_SITE
      value: "${MY_SITE}"
    - name: COHERENCE_RACK
      value: "${MY_RACK}"</markup>

</div>

<h3 id="_specify_site_and_rack_using_system_properties"><span class="merged" id="all.1fZak1" title="原文 : Specify Site and Rack Using System Properties">システム・プロパティを使用したサイトおよびラックの指定</span></h3>
<div class="section">
<p><span class="merged" id="all.1atKBX" title="原文 : The site and rack values can be specified as system properties as part of the Coherence deployment yaml.">サイトおよびラックの値は、Coherenceデプロイメントyamlの一部としてシステム・プロパティとして指定できます。</span></p>

<p><span class="merged" id="all.6vDv5.1"  title="原文:: For example:">例えば:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: my-cluster
spec:
  jvm:
    args:
      - "-Dcoherence.site=foo"
      - "-Dcoherence.rack=fbar"</markup>

<p><span class="merged" id="all.4KJIJ9.spl1" title="原文 : In the deployment above the site name is set to &quot;foo&quot; using the coherence.site system property.">上のデプロイメントでは、<code>coherence.site</code>システム・プロパティを使用して、サイト名が"foo"に設定されます。</span> <span class="merged" id="all.4KJIJ9.spl2" title="原文 : The rack name is set to &quot;bar&quot; using the coherence.rack system property.">ラック名は、<code>coherence.rack</code>システム・プロパティを使用して"bar"に設定されます。</span> </p>

</div>

<h3 id="_configure_the_operator_to_use_different_labels"><span class="merged" id="all.mEWoI" title="原文 : Configure the Operator to Use Different Labels">異なるラベルを使用するようにオペレータを構成</span></h3>
<div class="section">
<p><span class="merged" id="all.rA4Ep.spl1" title="原文 : The Operator can be configured to use different labels to obtain values for the site and rack names.">オペレータは、異なるラベルを使用してサイト名とラック名の値を取得するように構成できます。</span> <span class="merged" id="all.rA4Ep.spl2" title="原文 : This will obviously apply to all Coherence deployments managed by the Operator, but is useful if the Nodes in the k8s cluster do not have the normal k8s labels.">これは明らかに、オペレータによって管理されるすべてのCoherenceデプロイメントに適用されますが、k8sクラスタ内のノードに通常のk8sラベルがない場合に役立ちます。</span> <span class="merged" id="all.rA4Ep.spl3" title="原文 : The SITE_LABEL and RACK_LABEL environment variables are used to specify different labels to use."><code>SITE_LABEL</code>および<code>RACK_LABEL</code>環境変数を使用して、使用する別のラベルを指定します。</span> <span class="merged" id="all.rA4Ep.spl4" title="原文 : How these environment variables are set depends on how you are installing the Operator.">これらの環境変数の設定方法は、オペレータのインストール方法によって異なります。</span> </p>


<h4 id="_using_helm"><span class="merged" id="all.1kNCVv" title="原文 : Using Helm">Helmの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.254z5f" title="原文 : If the Operator is installed using the Helm chart then the site and rack labels can be set using the siteLabel and rackLabel values; for example:">オペレータがHelmチャートを使用してインストールされている場合、サイトおよびラックのラベルは、<code>siteLabel</code>および<code>rackLabel</code>の値を使用して設定できます。次に例を示します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set siteLabel=identity/site \
    --set siteLabel=identity/rack \
    coherence-operator \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.Qkn4E" title="原文 : In the example above the Node label used by the Operator to get the value for the site will be identity/site, and the Node label used to get the value for the rack will be identity/rack.">上記の例では、オペレータがサイトの値を取得するために使用するノード・ラベルは<code>identity/site</code>になり、ラックの値を取得するために使用されるノード・ラベルは<code>identity/rack</code>になります。</span></p>

</div>

<h4 id="_using_kubectl_or_kustomize"><span class="merged" id="all.peXrY" title="原文 : Using Kubectl or Kustomize">KubectlまたはKustomizeの使用</span></h4>
<div class="section">
<p><span class="merged" id="all.3XiipX" title="原文 : If using kubectl or kustomize as described in the Installation Guide the additional environment variables can be applied using kustomize commands."><router-link to="/docs/installation/01_installation">「インストール・ガイド」</router-link>の説明に従って<code>kubectl</code>または<code>kustomize</code>を使用する場合、<code>kustomize</code>コマンドを使用して追加の環境変数を適用できます。</span></p>

<markup
lang="bash"

>cd ./manager &amp;&amp; $(GOBIN)/kustomize edit add configmap env-vars --from-literal SITE_LABEL='identity/site'</markup>

<markup
lang="bash"

>cd ./manager &amp;&amp; $(GOBIN)/kustomize edit add configmap env-vars --from-literal RACK_LABEL='identity/rack'</markup>

</div>
</div>
</div>
</doc-view>
