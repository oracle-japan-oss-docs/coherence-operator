<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_rbac_roles"><span class="merged" id="all.2VAc8L"  title="原文:: RBAC Roles">RBACの役割</span></h2>
<div class="section">
<p><span class="merged" id="all.2hS9ni.spl1" title="原文 : When installing the Coherence Operator into Kubernetes clusters with RBAC enabled, the Operator will require certain roles to work properly.">RBACが有効なKubernetesクラスタにCoherence Operatorをインストールする場合、オペレータは特定のロールを適切に動作させる必要があります。</span> <span class="merged" id="all.2hS9ni.spl2" title="原文 : Both the Operator Helm chart, and the Operator k8s manifest files will install all the required roles, role bindings and create a service account.">Operator HelmチャートとOperator k8sマニフェスト・ファイルはどちらも、必要なすべてのロール、ロール・バインディングをインストールし、サービス・アカウントを作成します。</span> </p>

</div>

<h2 id="_cluster_roles"><span class="merged" id="all.1KT71M" title="原文 : Cluster Roles">クラスタ・ロール</span></h2>
<div class="section">
<p><span class="merged" id="all.1uH7Is.spl1" title="原文 : By default, both install methods will create ClusterRole resources and ClusterRoleBinding resources to bind those roles to the Operator ServiceAccount.">デフォルトでは、どちらのインストール・メソッドもClusterRoleリソースおよびClusterRoleBindingリソースを作成し、それらのロールをオペレータServiceAccountにバインドします。</span> <span class="merged" id="all.1uH7Is.spl2" title="原文 : Some Kubernetes administrators are wary of letting arbitrary installations have ClusterRole permissions and try to discourage it.">一部のKubernetes管理者は、任意のインストールにClusterRole権限を持たせて、推奨しないようにする必要があります。</span> <span class="merged" id="all.1uH7Is.spl3" title="原文 : The Coherence Operator can run without ClusterRole permissions, but it is important to understand what this means from an operational point of view.">Coherence OperatorはClusterRole権限なしで実行できますが、このことが操作点からどのような意味を持つかを理解することが重要です。</span> </p>

<p><span class="merged" id="all.2lIcie" title="原文 : Cluster roles are used for a number of operator features:">クラスタ・ロールは、多くのオペレータ機能で使用されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.14nnbO" title="原文 : Installing the CRDs - the Operator automatically ensures that the CRDs it requires are installed when it starts.">CRDのインストール - オペレータは、起動時に必要なCRDが確実にインストールされます。</span></p>

</li>
<li>
<p><span class="merged" id="all.1VPAD7.spl1" title="原文 : Installing the Web-Hook - the Operator automatically installs the defaulting and validating web-hooks for the Coherence resource when it starts.">Webフックのインストール - 起動時に、オペレータは、<code>Coherence</code>リソースのwebフックのデフォルト設定および検証を自動的にインストールします。</span> <span class="merged" id="all.1VPAD7.spl2" title="原文 : Without the validating web-hook a lot more care must be taken to ensure that only valid Coherence resource yaml is added to k8s.">検証webフックがないと、有効な<code>Coherence</code>リソースyamlのみがk8sに追加されるように、より注意する必要があります。</span> <span class="merged" id="all.1VPAD7.spl3" title="原文 : In the worst case, invalid yaml may ultimately cause the Operator to panic where invalid yaml would normally have been disallowed by the web-hook.">最悪の場合、無効なYamlは最終的にオペレータがパニック状態になり、通常は無効なYamlがwebフックによって禁止されます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.nxCCL.spl1" title="原文 : Coherence CLuster site and rack information - the Operator is used to supply site and rack values for the Coherence clusters that it manages.">Coherence CLusterサイトおよびラックの情報 - オペレータは、管理対象のCoherenceクラスタのサイトとラックの値を指定するために使用されます。</span> <span class="merged" id="all.nxCCL.spl2" title="原文 : These values come from Node labels that the Operator must be able to look up.">これらの値は、オペレータが検索できる必要がある<code>Node</code>ラベルから取得されます。</span> <span class="merged" id="all.nxCCL.spl3" title="原文 : Without this information a Coherence cluster will have empty values for the coherence.site and coherence.rack system properties, meaning that Coherence will be unable to make data site-safe in k8s clusters that have multiple availability zones.">この情報がないと、Coherenceクラスタには<code>coherence.site</code>および<code>coherence.rack</code>システム・プロパティの値が空になります。つまり、Coherenceは、複数の可用性ゾーンを持つk8sクラスタでデータ・サイト・セーフを作成できません。</span> </p>

</li>
<li>
<p><span class="merged" id="all.2DJs3Q" title="原文 : Monitoring multiple namespaces - if the Operator is to monitor multiple namespaces it must have cluster wide roles to do this">複数のネームスペースのモニタリング - オペレータで複数のネームスペースを監視する場合、これを行うにはクラスタ全体のロールが必要です</span></p>

</li>
</ul>
<p><span class="merged" id="all.3D4tP2" title="原文 : Assuming that all the above reductions in features are acceptable then the Operator can be installed without creating cluster roles.">前述の機能削減がすべて許容可能であるとすると、クラスタ・ロールを作成せずにオペレータをインストールできます。</span></p>

</div>

<h2 id="_install_the_operator_without_clusterroles"><span class="merged" id="all.Sj9Z2" title="原文 : Install the Operator Without ClusterRoles">ClusterRolesのないオペレータのインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.3E66eW" title="原文 : The two methods of installing the Operator discussed in the Install Guide can be used to install the Operator without ClusterRoles."><router-link to="/installation/01_installation">「インストール・ガイド」</router-link>で説明されているオペレータをインストールする2つのメソッドを使用すると、ClusterRolesのないオペレータをインストールできます。</span></p>


<h3 id="_manually_install_crds"><span class="merged" id="all.1ZVh36" title="原文 : Manually Install CRDs">CRDの手動インストール</span></h3>
<div class="section">
<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p.1"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.2cA5Zk" title="原文 : Before installing the Operator, with either method described below, the CRDs MUST be manually installed from the Operator manifest files.">Operatorをインストールする前に、次に示すいずれかのメソッドでCRDをOperatorマニフェスト・ファイルから手動でインストールする必要があります。</span></p>

<p><span class="merged" id="all.RyeMv" title="原文 : The manifest files are published with the GitHub release at this link: 3.2.2 Manifests">マニフェスト・ファイルは、このリンクでGitHubリリースで公開されます: <a href="https://github.com/oracle/coherence-operator/releases/download/v3.2.2/coherence-operator-manifests.tar.gz" id="" target="_blank" >3.2.2 マニフェスト</a></span></p>

<p><span class="merged" id="all.3wyRpn" title="原文 : You MUST ensure that the CRD manifests match the version of the Operator being installed.">CRDマニフェストが、インストールされているオペレータのバージョンと一致していることを確認する必要があります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2mPLTC" title="原文 : Download the manifests and unpack them.">マニフェストをダウンロードして解凍します。</span></p>

</li>
<li>
<p><span class="merged" id="all.4E7lcN.spl1" title="原文 : In the directory that the .tar.gz file was unpacked to will be two versions of the CRDs.">.tar.gzファイルが解凍されたディレクトリは、CRDの2つのバージョンになります。</span> <span class="merged" id="all.4E7lcN.spl2" title="原文 : The directory crd/ contains the apiextensions.k8s.io/v1 version, which must be installed into Kubernetes cluster from k8s v1.16.x and above.">ディレクトリ<code>crd/</code>には<code>apiextensions.k8s.io/v1</code>バージョンが含まれており、k8s v1.16.x以上からKubernetesクラスタにインストールする必要があります。</span> <span class="merged" id="all.4E7lcN.spl3" title="原文 : The crd-v1beta1/ directory contains the apiextensions.k8s.io/v1beta1 version, which must be installed into Kubernetes cluster of k8s v1.15.x and below."><code>crd-v1beta1/</code>ディレクトリには、<code>apiextensions.k8s.io/v1beta1</code>バージョンが含まれています。このバージョンは、k8s v1.15.x以下のKubernetesクラスタにインストールする必要があります。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.36FZFQ" title="原文 : The required CRD can be installed with kubectl">必要なCRDは、kubectlを使用してインストールできます</span></p>

<markup
lang="bash"

>kubectl create -f crd/coherence.oracle.com_coherence.yaml</markup>
</p>
</div>
</div>

<h3 id="_install_using_helm"><span class="merged" id="all.4g555R" title="原文 : Install Using Helm">Helmを使用したインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.3G3DY6.spl1" title="原文 : The Operator can be installed from the Helm chart, as described in the Install Guide.">オペレータは、Helmチャートからインストールできます(<router-link to="/installation/01_installation">「インストール・ガイド」</router-link>を参照)。</span> <span class="merged" id="all.3G3DY6.spl2" title="原文 : The Helm chart contains values that control whether cluster roles are created when installing the chart.">Helmチャートには、チャートのインストール時にクラスタ・ロールを作成するかどうかを制御する値が含まれます。</span> <span class="merged" id="all.3G3DY6.spl3" title="原文 : To install the chart without any cluster roles set the clusterRoles value to false.">クラスタ・ロールなしでチャートをインストールするには、<code>clusterRoles</code>値を<code>false</code>に設定します。</span> </p>

<markup
lang="bash"

>helm install  \
    --set clusterRoles=false       <span class="conum" data-value="1" />
    --namespace &lt;namespace&gt; \      <span class="conum" data-value="2" />
    coherence \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4JGqen" title="原文 : The clusterRoles value is set to false."><code>clusterRoles</code>値はfalseに設定されます。</span></li>
<li data-value="2"><span class="merged" id="all.4Cl9vS" title="原文 : The &lt;namespace&gt; value is the namespace that the Coherence Operator will be installed into and without cluster roles will be the only namespace that the Operator monitors."><code>&lt;namespace></code>値は、Coherence Operatorがクラスタ・ロールにインストールされ、クラスタ・ロールなしでインストールされるネームスペースで、オペレータが監視するネームスペース<em>「のみ」</em>です。</span></li>
</ul>

<h4 id="_allow_node_lookup"><span class="merged" id="all.15qTzC" title="原文 : Allow Node Lookup">ノード参照の許可</span></h4>
<div class="section">
<p><span class="merged" id="all.2LlMOl.spl1" title="原文 : The Helm chart allows the Operator to be installed with a single ClusterRole allowing it to read k8s Node information.">Helmチャートでは、オペレータを単一の<code>ClusterRole</code>でインストールして、k8s <code>Node</code>情報を読み取ることができます。</span> <span class="merged" id="all.2LlMOl.spl2" title="原文 : This is used to provide site, and rack labels, for Coherence cluster members.">これは、Coherenceクラスタ・メンバーのサイトおよびラック・ラベルを提供するために使用されます。</span> <span class="merged" id="all.2LlMOl.spl3" title="原文 : In environments where Kubernetes administrators are happy to allow the Operator read-only access to Node information the nodeRoles value can be set to true.">Kubernetes管理者が<code>Node</code>情報へのオペレータの読取り専用アクセスを許可できる環境では、<code>nodeRoles</code>値を<code>true</code>に設定できます。</span> </p>

<markup
lang="bash"

>helm install  \
    --set clusterRoles=false       <span class="conum" data-value="1" />
    --set nodeRoles=true           <span class="conum" data-value="2" />
    --namespace &lt;namespace&gt; \
    coherence \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2s8QB" title="原文 : The clusterRoles value is set to false."><code>clusterRoles</code>値は<code>false</code>に設定されます。</span></li>
<li data-value="2"><span class="merged" id="all.Xi4ln" title="原文 : The nodeRoles value is set to true, so a single ClusterRole will be applied to the Operator&rsquo;s service account"><code>nodeRoles</code>値が<code>true</code>に設定されているため、単一のClusterRoleがオペレータのサービス・アカウントに適用されます</span></li>
</ul>
</div>
</div>

<h3 id="_install_using_kustomize"><span class="merged" id="all.42E3lU" title="原文 : Install Using Kustomize">Kustomizeを使用したインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.3wc4yO" title="原文 : The Operator can be installed using Kustomize with the manifest files, as described in the Install Guide.">オペレータは、<router-link to="/installation/01_installation">「インストール・ガイド」</router-link>で説明されているように、マニフェスト・ファイルとともにKustomizeを使用してインストールできます。</span></p>


<h4 id="_exclude_the_clusterrole_manifests"><span class="merged" id="all.4QzR2a" title="原文 : Exclude the ClusterRole Manifests">ClusterRoleマニフェストを除外</span></h4>
<div class="section">
<p><span class="merged" id="all.357g24" title="原文 : To install without cluster roles, after unpacking the manifests .tar.gz edit the config/kustomization.yaml file to comment out the inclusion of the cluster role bindings.">クラスタ・ロールなしでインストールするには、マニフェストの解凍後に<code>.tar.gz</code>を編集し、<code>config/kustomization.yaml</code>ファイルを編集して、クラスタ・ロール・バインディングの追加をコメントにします。</span></p>

<p><span class="merged" id="all.6vDv5.4"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"
title="kustomization.yaml"
>resources:
- service_account.yaml
- role.yaml
- role_binding.yaml
#- node_viewer_role.yaml
#- node_viewer_role_binding.yaml
#- cluster_role.yaml
#- cluster_role_binding.yaml</markup>

</div>

<h4 id="_disable_web_hooks_and_crd_installation"><span class="merged" id="all.sMLry" title="原文 : Disable Web-Hooks and CRD Installation">WebフックとCRDインストールを無効にします</span></h4>
<div class="section">
<p><span class="merged" id="all.3Sa9ud.spl1" title="原文 : The Operator would normally install validating and defaulting web-hooks as well as ensuring that the Coherence CRDs are installed.">オペレータは通常、検証およびデフォルト設定webフックをインストールし、Coherence CRDがインストールされていることを確認します。</span> <span class="merged" id="all.3Sa9ud.spl2" title="原文 : Without cluster roles this must be disabled by editing the manager/manager.yaml file in the manifests.">クラスタ・ロールがない場合、これはマニフェスト内の<code>manager/manager.yaml</code>ファイルを編集して無効にする必要があります。</span> </p>

<p><span class="merged" id="all.9PHjp" title="原文 : Edit the Operator container args section of the deployment yaml to add command line arguments to --enable-webhook=false to disable web-hook creation and --install-crd=false to disable CRD installation.">デプロイメントyamlのオペレータ・コンテナの<code>args</code>セクションを編集して、<code>--enable-webhook=false</code>にコマンドライン引数を追加してwebフックの作成を無効にし、CRDインストールを無効にするには<code>--install-crd=false</code>を指定します。</span></p>

<p><span class="merged" id="all.4Z0Nyk" title="原文 : For example, change the section of the manager/manager.yaml file that looks like this:">たとえば、次のような<code>manager/manager.yaml</code>ファイルのセクションを変更します:</span></p>

<markup
lang="yaml"
title="manager/manager.yaml"
>        command:
          - /manager
        args:
          - --enable-leader-election
        envFrom:</markup>

<p><span class="merged" id="all.I7IIy" title="原文 : to be:">次のようになります:</span></p>

<markup
lang="yaml"
title="manager/manager.yaml"
>        command:
          - /manager
        args:
          - --enable-leader-election
          - --enable-webhook=false
          - --install-crd=false
        envFrom:</markup>

</div>

<h4 id="_edit_the_operator_clusterrole_clusterrolebinding"><span class="merged" id="all.2iMJuh" title="原文 : Edit the Operator ClusterRole &amp; ClusterRoleBinding">オペレータClusterRole &amp; ClusterRoleBindingを編集</span></h4>
<div class="section">
<p><span class="merged" id="all.2iS3e0.spl1" title="原文 : The Operator will require a role and role binding to work in a single namespace.">単一のネームスペースで作業するには、オペレータがロールとロール・バインディングを必要とします。</span> <span class="merged" id="all.2iS3e0.spl2" title="原文 : Edit the config/role.yaml to change its type from ClusterRole to Role."><code>config/role.yaml</code>を編集して、そのタイプを<code>ClusterRole</code>から<code>Role</code>に変更します。</span> </p>

<p><span class="merged" id="all.3WWi6T"  title="原文:: For example, change:">次に例を示します。</span></p>

<markup
lang="yaml"
title="role.yaml"
>apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  creationTimestamp: null
  name: manager-role</markup>

<p><span class="merged" id="all.I7IIy.1" title="原文 : to be:">次のようになります:</span></p>

<markup
lang="yaml"
title="role.yaml"
>apiVersion: rbac.authorization.k8s.io/v1
kind: Role  <span class="conum" data-value="1" />
metadata:
  creationTimestamp: null
  name: manager-role</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3wie8O" title="原文 : ClusterRole has been changed to Role"><code>ClusterRole</code>が<code>Role</code>に変更されました</span></li>
</ul>
<p><span class="merged" id="all.9rRwC" title="原文 : Edit the config/role_binding.yaml to change its type from ClusterRoleBinding to RoleBinding."><code>config/role_binding.yaml</code>を編集して、そのタイプを<code>ClusterRoleBinding</code>から<code>RoleBinding</code>に変更します。</span></p>

<p><span class="merged" id="all.TWEPk" title="原文 : For example change:">たとえば、次のように変更します:</span></p>

<markup
lang="yaml"
title="role_binding.yaml"
>apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: manager-rolebinding
  labels:
    control-plane: coherence
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: manager-role
subjects:
- kind: ServiceAccount
  name: coherence-operator
  namespace: default</markup>

<p><span class="merged" id="all.I7IIy.2" title="原文 : to be:">次のようになります:</span></p>

<markup
lang="yaml"
title="role_binding.yaml"
>apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding  <span class="conum" data-value="1" />
metadata:
  name: manager-rolebinding
  labels:
    control-plane: coherence
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role <span class="conum" data-value="2" />
  name: manager-role
subjects:
- kind: ServiceAccount
  name: coherence-operator
  namespace: default</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2ZC8yj" title="原文 : The type has been changed from ClusterRoleBinding to RoleBinding">タイプが<code>ClusterRoleBinding</code>から<code>RoleBinding</code>に変更されました</span></li>
<li data-value="2"><span class="merged" id="all.230qry" title="原文 : The role being bound has been changed from ClusterRole to Role.">バインドされているロールが<code>ClusterRole</code>から<code>Role</code>に変更されました。</span></li>
</ul>
</div>

<h4 id="_allow_node_lookup_2"><span class="merged" id="all.15qTzC.1" title="原文 : Allow Node Lookup">ノード参照の許可</span></h4>
<div class="section">
<p><span class="merged" id="all.10x5oR" title="原文 : In environments where Kubernetes administrators are happy to allow the Operator read-only access to Node information, the required ClusterRole can be created by leaving the relevant lines uncommented in the config/kustomization.yaml file.">Kubernetes管理者が<code>Node</code>情報へのオペレータの読取り専用アクセスを許可できる環境では、関連する行を<code>config/kustomization.yaml</code>ファイルにコメント解除したままにすると、必要な<code>ClusterRole</code>を作成できます。</span></p>

<p><span class="merged" id="all.6vDv5.5"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"
title="kustomization.yaml"
>resources:
- service_account.yaml
- role.yaml
- role_binding.yaml
- node_viewer_role.yaml         <span class="conum" data-value="1" />
- node_viewer_role_binding.yaml
#- cluster_role.yaml
#- cluster_role_binding.yaml</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2v42vF" title="原文 : The node_viewer_role.yaml and node_viewer_role_binding.yaml will now be left in the installation."><code>node_viewer_role.yaml</code>および<code>node_viewer_role_binding.yaml</code>がインストールに残されます。</span></li>
</ul>
</div>
</div>
</div>
</doc-view>
