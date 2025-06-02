<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_install_using_manifests"><span class="merged" id="all.1iCnLn" title="原文 : Install Using Manifests">マニフェストを使用したインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.1v0YpD.1" title="原文 : If you want the default Coherence Operator installation then the simplest solution is use kubectl to apply the manifests from the Operator release.">デフォルトのCoherence Operatorインストールが必要な場合は、最も単純なソリューションは<code>kubectl</code>を使用して、Operatorリリースからのマニフェストを適用します。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.6"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.v3f9B.spl1" title="原文 : As of v3.5.1 of the Operator the manifest yaml also installs the two CRDs that the Operator uses.">オペレータのv3.5.1以降、マニフェストyamlはオペレータが使用する2つのCRDもインストールします。</span> <span class="merged" id="all.v3f9B.spl2" title="原文 : In previous releases the Operator would install the CRDs when it started but this behaviour is disabled by default when installing with the manifest yaml.">以前のリリースでは、オペレータは起動時にCRDをインストールしていましたが、マニフェストyamlを使用してインストールすると、この動作はデフォルトで無効になっています。</span> </p>
</p>
</div>
<p><span class="merged" id="all.3MEUKf.spl1" title="原文 : The following command will install the Operator.">次のコマンドによってオペレータがインストールされます。</span> <span class="merged" id="all.3MEUKf.spl2" title="原文 : This assumes that the Kubernetes account being used to perform the installation has all the RBAC permissions required to install all the resource types in the yaml file.">ここでは、インストールの実行に使用されるKubernetesアカウントに、すべてのリソース・タイプをyamlファイルにインストールするために必要なすべてのRBAC権限があることを前提としています。</span> </p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.5.1/coherence-operator.yaml</markup>

<p><span class="merged" id="all.H99fG.spl1" title="原文 : This will create a namespace called coherence and install the CRDs and the Operator into the namespace, along with all the required ClusterRole and RoleBinding resources.">これにより、<code>coherence</code>というネームスペースが作成され、必要なすべての<code>ClusterRole</code>および<code>RoleBinding</code>リソースとともに、CRDおよびオペレータがネームスペースにインストールされます。</span> <span class="merged" id="all.H99fG.spl2" title="原文 : The coherence namespace can be changed by downloading and editing the yaml file."><code>coherence</code>ネームスペースは、yamlファイルをダウンロードおよび編集することによって変更できます。</span> </p>

<p><span class="merged" id="all.2bCzj2.spl1" title="原文 : In some restricted environments, a Kubernetes user might not have RBAC permissions to install CRDs.">一部の制限付き環境では、KubernetesユーザーにCRDをインストールするためのRBAC権限がない場合があります。</span> <span class="merged" id="all.2bCzj2.spl2" title="原文 : In this case the coherence-operator.yaml file will need to be edited to remove the two CRDs from the beginning of the file.">この場合、<code>coherence-operator.yaml</code>ファイルを編集して、ファイルの先頭から2つのCRDを削除する必要があります。</span> <span class="merged" id="all.2bCzj2.spl3" title="原文 : The CRDs must be manually installed before the Operator is installed, as described below in Manually Install the CRDs.">下記の<router-link @click.native="this.scrollFix('#manual-crd')" to="#manual-crd">「CRDを手動でインストール」</router-link>で説明されているとおり、CRDは、<strong><em>オペレータをインストールする前に手動でインストールする必要があります</em></strong>。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.7"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.Ipng.1.spl1" title="原文 : Because the coherence-operator.yaml manifest also creates the namespace, the corresponding kubectl delete command will remove the namespace and everything deployed to it!"><code>coherence-operator.yaml</code>マニフェストではネームスペースも作成されるため、対応する<code>kubectl delete</code>コマンドは<em>「ネームスペースおよびそれにデプロイされたすべてのネームスペースを削除」</em>になります。</span> <span class="merged" id="all.Ipng.1.spl2" title="原文 : If you do not want this behaviour you should edit the coherence-operator.yaml to remove the namespace section from the start of the file.">この動作を行わない場合は、<code>coherence-operator.yaml</code>を編集して、ファイルの先頭からネームスペース・セクションを削除する必要があります。</span> </p>
</p>
</div>
<p><span class="merged" id="all.4ZBpBq" title="原文 : Instead of using a hard coded version in the command above you can find the latest Operator version using curl:">前述のコマンドでハードコードされたバージョンを使用するかわりに、<code>curl</code>を使用して最新のオペレータ・バージョンを検索できます:</span></p>

<markup
lang="bash"

>export VERSION=$(curl -s \
  https://api.github.com/repos/oracle/coherence-operator/releases/latest \
  | grep '"name": "v' \
  | cut -d '"' -f 4 \
  | cut -b 2-10)</markup>

<p><span class="merged" id="all.2HFASk" title="原文 : Then download with:">次でダウンロード:</span></p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/${VERSION}/coherence-operator.yaml</markup>

</div>

<h2 id="manifest-restrict"><span class="merged" id="all.4gI65F" title="原文 : Installing Without Cluster Roles">クラスタ・ロールなしのインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.2hB9ja.spl1" title="原文 : The default install for the Operator is to have one Operator deployment that manages all Coherence resources across all the namespaces in a Kubernetes cluster.">オペレータのデフォルト・インストールでは、1つのオペレータ・デプロイメントを使用して、Kubernetesクラスタ内のすべてのネームスペースのすべてのCoherenceリソースを管理します。</span> <span class="merged" id="all.2hB9ja.spl2" title="原文 : This requires the Operator to have cluster role RBAC permissions to manage and monitor all the resources.">これには、オペレータがすべてのリソースを管理およびモニターするためのクラスタ・ロールのRBAC権限を持っている必要があります。</span> </p>

<p><span class="merged" id="all.2IYyzw.spl1" title="原文 : Sometimes, for security reasons or for example in a shared Kubernetes cluster this is not desirable.">セキュリティ上の理由から、または共有Kubernetesクラスタなどでは、これは望ましくない場合があります。</span> <span class="merged" id="all.2IYyzw.spl2" title="原文 : The Operator can therefore be installed with plain namespaced scoped roles and role bindings.">したがって、オペレータは、ネームスペースの付いたプレーンなロールとロールのバインドを使用してインストールできます。</span> <span class="merged" id="all.2IYyzw.spl3" title="原文 : The Operator release includes a single yaml file named coherence-operator-restricted.yaml that may be used to install the Operator into a single namespace without any cluster roles.">オペレータ・リリースには、<code>coherence-operator-restricted.yaml</code>という名前の単一のyamlファイルが含まれています。このファイルは、オペレータをクラスタ・ロールなしで単一のネームスペースにインストールするために使用できます。</span> </p>

<p><span class="merged" id="all.3xYTUR" title="原文 : The Operator installed with this yaml">オペレータがこのyamlとともにインストールされました</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1zDY3G" title="原文 : will not use WebHooks">WebHooksは使用しません</span></p>

</li>
<li>
<p><span class="merged" id="all.3mePJB" title="原文 : will not look-up Node labels for Coherence site and rack configurations">Coherenceサイトおよびラック構成のノード・ラベルは参照されません</span></p>

</li>
</ul>
<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.8"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.2rVNSM.spl1" title="原文 : As of v3.5.1 of the Operator the coherence-operator-restricted.yaml also installs the two CRDs that the Operator uses.">オペレータのv3.5.1以降、<code>coherence-operator-restricted.yaml</code>はオペレータが使用する2つのCRDもインストールします。</span> <span class="merged" id="all.2rVNSM.spl2" title="原文 : In previous releases the Operator would install the CRDs when it started but this behaviour is disabled by default when installing with the manifest yaml.">以前のリリースでは、オペレータは起動時にCRDをインストールしていましたが、マニフェストyamlを使用してインストールすると、この動作はデフォルトで無効になっています。</span> </p>
</p>
</div>
<p><span class="merged" id="all.3MEUKf.1.spl1" title="原文 : The following command will install the Operator.">次のコマンドによってオペレータがインストールされます。</span> <span class="merged" id="all.3MEUKf.1.spl2" title="原文 : This assumes that the Kubernetes account being used to perform the installation has all the RBAC permissions required to install all the resource types in the yaml file.">ここでは、インストールの実行に使用されるKubernetesアカウントに、すべてのリソース・タイプをyamlファイルにインストールするために必要なすべてのRBAC権限があることを前提としています。</span> </p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.5.1/coherence-operator-restricted.yaml</markup>

<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p.3"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.2bCzj2.1.spl1" title="原文 : In some restricted environments, a Kubernetes user might not have RBAC permissions to install CRDs.">一部の制限付き環境では、KubernetesユーザーにCRDをインストールするためのRBAC権限がない場合があります。</span> <span class="merged" id="all.2bCzj2.1.spl2" title="原文 : In this case the coherence-operator.yaml file will need to be edited to remove the two CRDs from the beginning of the file.">この場合、<code>coherence-operator.yaml</code>ファイルを編集して、ファイルの先頭から2つのCRDを削除する必要があります。</span> <span class="merged" id="all.2bCzj2.1.spl3" title="原文 : The CRDs must be manually installed before the Operator is installed, as described below in Manually Install the CRDs.">下記の<router-link @click.native="this.scrollFix('#manual-crd')" to="#manual-crd">「CRDを手動でインストール」</router-link>で説明されているとおり、CRDは、<strong><em>オペレータをインストールする前に手動でインストールする必要があります</em></strong>。</span> </p>
</p>
</div>
</div>

<h2 id="manual-crd"><span class="merged" id="all.69n36" title="原文 : Manually Install the CRDs">CRDを手動でインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.9fcSC.spl1" title="原文 : Although by default the Operator will install its CRDs, they can be manually installed into Kubernetes.">オペレータはデフォルトでCRDをインストールしますが、手動でKubernetesにインストールできます。</span> <span class="merged" id="all.9fcSC.spl2" title="原文 : This may be required where the Operator is running with restricted permissions as described above.">これは、前述のとおり、オペレータが制限付き権限で実行されている場合に必要になる場合があります。</span> </p>

<p><span class="merged" id="all.BlPTJ" title="原文 : The Operator release artifacts include small versions of the two CRDs which can be installed with the following commands:">オペレータ・リリース・アーティファクトには、次のコマンドを使用してインストールできる2つのCRDの小さなバージョンが含まれています:</span></p>

<markup
lang="bash"

>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.5.1/coherence.oracle.com_coherence_small.yaml
kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.5.1/coherencejob.oracle.com_coherence_small.yaml</markup>

<p><span class="merged" id="all.2UQZFN" title="原文 : The small versions of the CRDs are identical to the full versions but hav a cut down OpenAPI spec with a lot of comments removed so that the CRDs are small enough to be installed with kubectl apply">CRDの小さなバージョンはフル・バージョンと同じですが、CRDが<code>kubectl apply</code>でインストールできるほど小さくなるように、多くのコメントが削除されたOpenAPI仕様の削減があります</span></p>

</div>

<h2 id="_change_the_operator_replica_count"><span class="merged" id="all.1w2ScV" title="原文 : Change the Operator Replica Count">オペレータ・レプリカ数の変更</span></h2>
<div class="section">
<p><span class="merged" id="all.2SLjj8" title="原文 : When installing with single manifest yaml file, the replica count can be changed by editing the yaml file itself to change the occurrence of replicas: 3 in the manifest yaml to replicas: 1">単一のマニフェストyamlファイルでインストールする場合、マニフェストyaml内の<code>replicas: 3</code>の出現を<code>replicas: 1</code>に変更するようにyamlファイル自体を編集することによって、レプリカ・カウントを変更できます</span></p>

<p><span class="merged" id="all.K7Kp1" title="原文 : For example, this could be done using sed">たとえば、<code>sed</code>を使用してこれを実行できます</span></p>

<markup
lang="bash"

>sed -i -e 's/replicas: 3/replicas: 1/g' coherence-operator.yaml</markup>

<p><span class="merged" id="all.cP0pn" title="原文 : Or on MacOS, where sed is slightly different:">または、MacOSで、<code>sed</code>は少し異なります:</span></p>

<markup
lang="bash"

>sed -i '' -e 's/replicas: 3/replicas: 1/g' coherence-operator.yaml</markup>

</div>
</doc-view>
