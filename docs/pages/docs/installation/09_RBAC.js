<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_rbac_roles"><span class="merged" id="all.2VAc8L" title="原文 : RBAC Roles">RBACのロール</span></h2>
<div class="section">
<p><span class="merged" id="all.2hS9ni.spl1" title="原文 : When installing the Coherence Operator into Kubernetes clusters with RBAC enabled, the Operator will require certain roles to work properly.">RBACが有効なKubernetesクラスタにCoherence Operatorをインストールする場合、オペレータは特定のロールが正しく動作する必要があります。</span> <span class="merged" id="all.2hS9ni.spl2" title="原文 : Both the Operator Helm chart, and the Operator k8s manifest files will install all the required roles, role bindings and create a service account.">Operator HelmチャートとOperator k8sマニフェスト・ファイルはどちらも、必要なすべてのロール、ロール・バインディングをインストールし、サービス・アカウントを作成します。</span> </p>

</div>

<h2 id="_cluster_roles"><span class="merged" id="all.1KT71M" title="原文 : Cluster Roles">クラスタ・ロール</span></h2>
<div class="section">
<p><span class="merged" id="all.1uH7Is.spl1" title="原文 : By default, both install methods will create ClusterRole resources and ClusterRoleBinding resources to bind those roles to the Operator ServiceAccount.">デフォルトでは、どちらのインストール・メソッドもClusterRoleリソースとClusterRoleBindingリソースを作成して、それらのロールをオペレータServiceAccountにバインドします。</span> <span class="merged" id="all.1uH7Is.spl2" title="原文 : Some Kubernetes administrators are wary of letting arbitrary installations have ClusterRole permissions and try to discourage it.">一部のKubernetes管理者は、任意のインストールにClusterRole権限を持たせるようにし、それを推奨しません。</span> <span class="merged" id="all.1uH7Is.spl3" title="原文 : The Coherence Operator can run without ClusterRole permissions, but it is important to understand what this means from an operational point of view.">Coherence Operatorは、ClusterRole権限なしで実行できますが、操作上の観点からこの意味を理解することが重要です。</span> </p>

<p><span class="merged" id="all.2lIcie" title="原文 : Cluster roles are used for a number of operator features:">クラスタ・ロールは、いくつかのオペレータ機能に使用されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.14nnbO" title="原文 : Installing the CRDs - the Operator automatically ensures that the CRDs it requires are installed when it starts.">CRDのインストール - オペレータは、起動時に必要なCRDがインストールされることを自動的に確認します。</span></p>

</li>
<li>
<p><span class="merged" id="all.1VPAD7.spl1" title="原文 : Installing the Web-Hook - the Operator automatically installs the defaulting and validating web-hooks for the Coherence resource when it starts.">Webフックのインストール - オペレータは、起動時に<code>Coherence</code>リソースのデフォルト設定および検証webフックを自動的にインストールします。</span> <span class="merged" id="all.1VPAD7.spl2" title="原文 : Without the validating web-hook a lot more care must be taken to ensure that only valid Coherence resource yaml is added to k8s.">webフックを検証しない場合は、有効な<code>Coherence</code>リソースyamlのみがk8sに追加されるように、さらに注意する必要があります。</span> <span class="merged" id="all.1VPAD7.spl3" title="原文 : In the worst case, invalid yaml may ultimately cause the Operator to panic where invalid yaml would normally have been disallowed by the web-hook.">最悪の場合、無効なyamlは最終的にはオペレータにパニックを引き起こし、webフックでは通常、無効なyamlは許可されません。</span> </p>

</li>
<li>
<p><span class="merged" id="all.nxCCL.spl1" title="原文 : Coherence CLuster site and rack information - the Operator is used to supply site and rack values for the Coherence clusters that it manages.">Coherence CLusterサイトおよびラック情報 - オペレータは、管理対象のCoherenceクラスタのサイトおよびラックの値を提供するために使用されます。</span> <span class="merged" id="all.nxCCL.spl2" title="原文 : These values come from Node labels that the Operator must be able to look up.">これらの値は、オペレータが検索できる必要がある<code>Node</code>ラベルから取得されます。</span> <span class="merged" id="all.nxCCL.spl3" title="原文 : Without this information a Coherence cluster will have empty values for the coherence.site and coherence.rack system properties, meaning that Coherence will be unable to make data site-safe in k8s clusters that have multiple availability zones.">この情報がない場合、Coherenceクラスタには<code>coherence.site</code>および<code>coherence.rack</code>システム・プロパティの値が空になります。つまり、Coherenceは、複数の可用性ゾーンを持つk8sクラスタでデータ・サイトを安全にすることはできません。</span> </p>

</li>
<li>
<p><span class="merged" id="all.2DJs3Q" title="原文 : Monitoring multiple namespaces - if the Operator is to monitor multiple namespaces it must have cluster wide roles to do this">複数のネームスペースのモニタリング - オペレータが複数のネームスペースをモニターする場合は、これを実行するためにクラスタ全体ロールが必要です</span></p>

</li>
</ul>
<p><span class="merged" id="all.3D4tP2" title="原文 : Assuming that all the above reductions in features are acceptable then the Operator can be installed without creating cluster roles.">前述の機能の削減がすべて許容できるとすると、クラスタ・ロールを作成せずにオペレータをインストールできます。</span></p>

</div>

<h2 id="_install_the_operator_without_clusterroles"><span class="merged" id="all.Sj9Z2" title="原文 : Install the Operator Without ClusterRoles">ClusterRolesなしでオペレータをインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.Xacl0" title="原文 : The two methods of installing the Operator discussed in the Install Guide can be used to install the Operator without ClusterRoles."><router-link to="/docs/installation/01_installation">「インストール・ガイド」</router-link>で説明したオペレータをインストールする2つのメソッドを使用して、ClusterRolesを使用せずにオペレータをインストールできます。</span></p>


<h3 id="_manually_install_crds"><span class="merged" id="all.1ZVh36" title="原文 : Manually Install CRDs">CRDを手動でインストール</span></h3>
<div class="section">
<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p.4"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.2cA5Zk" title="原文 : Before installing the Operator, with either method described below, the CRDs MUST be manually installed from the Operator manifest files.">オペレータをインストールする前に、後述するいずれかのメソッドで、オペレータ・マニフェスト・ファイルからCRDを手動でインストールする必要があります。</span></p>

<p><span class="merged" id="all.46mhhx" title="原文 : The manifest files are published with the GitHub release at this link: 3.3.5 Manifests">マニフェスト・ファイルは、このリンクでGitHubリリースとともに公開されます: <a href="https://github.com/oracle/coherence-operator/releases/download/v3.5.0/coherence-operator-manifests.tar.gz" id="" target="_blank" >3.3.5 マニフェスト</a></span></p>

<p><span class="merged" id="all.3wyRpn" title="原文 : You MUST ensure that the CRD manifests match the version of the Operator being installed.">CRDマニフェストがインストールされるオペレータのバージョンと一致していることを確認する必要があります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2mPLTC" title="原文 : Download the manifests and unpack them.">マニフェストをダウンロードして開梱します。</span></p>

</li>
<li>
<p><span class="merged" id="all.2twk1x.spl1" title="原文 : In the directory that the .tar.gz file the was unpacked the crd/ directory will the Coherence CRD.">.tar.gzファイルが解凍されたディレクトリでは、<code>crd/</code>ディレクトリがCoherence CRDになります。</span> <span class="merged" id="all.2twk1x.spl2" title="原文 : The CRD can be installed with kubectl">CRDはkubectlでインストールできます</span> </p>

</li>
</ul>
<markup
lang="bash"

>kubectl create -f crd/coherence.oracle.com_coherence.yaml</markup>

<p><span class="merged" id="all.1VKZPs" title="原文 : To update an existing CRD install use the replace command:">既存のCRDインストールを更新するには、replaceコマンドを使用します:</span></p>

<markup
lang="bash"

>kubectl replace -f crd/coherence.oracle.com_coherence.yaml</markup>

<p><span class="merged" id="all.KdOtV" title="原文 : Installing the CRD Using kubectl apply"><strong><code>kubectl apply</code>を使用したCRDのインストール</strong></span></p>

<p><span class="merged" id="all.20KYoc.spl1" title="原文 : The default Coherence CRD cannot be installed using kubectl apply as it is larger than the 1MB limit imposed by Etcd.">デフォルトのCoherence CRDは、Etcdによって課される1MBの制限を超えているため、<code>kubectl apply</code>を使用してインストールできません。</span> <span class="merged" id="all.20KYoc.spl2" title="原文 : For customers who cannot use the kubectl create/replace combination, a smaller version of the CRD is available."><code>kubectl create/replace</code>の組合せを使用できない顧客の場合は、より小さいバージョンのCRDを使用できます。</span> <span class="merged" id="all.20KYoc.spl3" title="原文 : This small CRD has no description fields which makes is smaller to install, but less useful for validating the yaml in an IDE.">この小さいCRDには<code>description</code>フィールドがないため、インストールは小さくなりますが、IDEでのyamlの検証にはあまり役立ちません。</span> </p>

<p><span class="merged" id="all.2RWjME" title="原文 : The small CRD can be found in the coherence-operator-manifests.tar.gz file in the crd-small/ directory.">小さいCRDは、<code>crd-small/</code>ディレクトリのcoherence-operator-manifests.tar.gzファイルにあります。</span></p>

<markup
lang="bash"

>kubectl apply -f crd-small/coherence.oracle.com_coherence.yaml</markup>
</p>
</div>
</div>

<h3 id="_install_using_helm"><span class="merged" id="all.4g555R.2" title="原文 : Install Using Helm">Helmを使用したインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.1unTuj.spl1" title="原文 : The Operator can be installed from the Helm chart, as described in the Install Guide.">オペレータは、<router-link to="/docs/installation/01_installation">「インストール・ガイド」</router-link>の説明に従ってHelmチャートからインストールできます。</span> <span class="merged" id="all.1unTuj.spl2" title="原文 : The Helm chart contains values that control whether cluster roles are created when installing the chart.">Helmチャートには、チャートのインストール時にクラスタ・ロールを作成するかどうかを制御する値が含まれています。</span> <span class="merged" id="all.1unTuj.spl3" title="原文 : To install the chart without any cluster roles set the clusterRoles value to false.">クラスタ・ロールなしでチャートをインストールするには、<code>clusterRoles</code>値を<code>false</code>に設定します。</span> </p>

<markup
lang="bash"

>helm install  \
    --set clusterRoles=false       <span class="conum" data-value="1" />
    --namespace &lt;namespace&gt; \      <span class="conum" data-value="2" />
    coherence \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4JGqen" title="原文 : The clusterRoles value is set to false."><code>clusterRoles</code>値はfalseに設定されます。</span></li>
<li data-value="2"><span class="merged" id="all.4Cl9vS" title="原文 : The &lt;namespace&gt; value is the namespace that the Coherence Operator will be installed into and without cluster roles will be the only namespace that the Operator monitors."><code>&lt;namespace></code>値は、Coherence Operatorがクラスタ・ロールとともにインストールされるネームスペースで、クラスタ・ロールなしでインストールされるネームスペースです。このネームスペースは、オペレータがモニターする<em>「のみの」</em>ネームスペースです。</span></li>
</ul>

<h4 id="_allow_node_lookup"><span class="merged" id="all.15qTzC" title="原文 : Allow Node Lookup">ノード・ルックアップの許可</span></h4>
<div class="section">
<p><span class="merged" id="all.2LlMOl.spl1" title="原文 : The Helm chart allows the Operator to be installed with a single ClusterRole allowing it to read k8s Node information.">Helmチャートを使用すると、オペレータを単一の<code>ClusterRole</code>とともにインストールでき、k8s <code>Node</code>情報を読み取ることができます。</span> <span class="merged" id="all.2LlMOl.spl2" title="原文 : This is used to provide site, and rack labels, for Coherence cluster members.">これは、Coherenceクラスタ・メンバー用のサイトおよびラック・ラベルを提供するために使用されます。</span> <span class="merged" id="all.2LlMOl.spl3" title="原文 : In environments where Kubernetes administrators are happy to allow the Operator read-only access to Node information the nodeRoles value can be set to true.">Kubernetes管理者が<code>Node</code>情報へのオペレータの読取り専用アクセスを許可する環境では、<code>nodeRoles</code>値を<code>true</code>に設定できます。</span> </p>

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
<li data-value="2"><span class="merged" id="all.Xi4ln" title="原文 : The nodeRoles value is set to true, so a single ClusterRole will be applied to the Operator’s service account"><code>nodeRoles</code>値は<code>true</code>に設定されているため、1つのClusterRoleがオペレータのサービス・アカウントに適用されます</span></li>
</ul>
</div>
</div>

<h3 id="_install_using_kustomize"><span class="merged" id="all.42E3lU" title="原文 : Install Using Kustomize">Kustomizeを使ってインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.3s6uQw" title="原文 : The Operator can be installed using Kustomize with the manifest files, as described in the Install Guide.">オペレータは、<router-link to="/docs/installation/01_installation">「インストール・ガイド」</router-link>で説明されているように、マニフェスト・ファイルとともにKustomizeを使用してインストールできます。</span></p>


<h4 id="_exclude_the_clusterrole_manifests"><span class="merged" id="all.4QzR2a" title="原文 : Exclude the ClusterRole Manifests">ClusterRoleマニフェストを除外</span></h4>
<div class="section">
<p><span class="merged" id="all.357g24" title="原文 : To install without cluster roles, after unpacking the manifests .tar.gz edit the config/kustomization.yaml file to comment out the inclusion of the cluster role bindings.">クラスタ・ロールなしでインストールするには、マニフェスト<code>.tar.gz</code>を解凍した後、<code>config/kustomization.yaml</code>ファイルを編集して、クラスタ・ロール・バインディングの包含をコメント・アウトします。</span></p>

<p><span class="merged" id="all.6vDv5.7"  title="原文:: For example:">例えば:</span></p>

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

<h4 id="_disable_web_hooks_and_crd_installation"><span class="merged" id="all.sMLry" title="原文 : Disable Web-Hooks and CRD Installation">WebフックおよびCRDインストールの無効化</span></h4>
<div class="section">
<p><span class="merged" id="all.3Sa9ud.spl1" title="原文 : The Operator would normally install validating and defaulting web-hooks as well as ensuring that the Coherence CRDs are installed.">オペレータは通常、検証およびデフォルトwebフックをインストールし、Coherence CRDがインストールされていることを確認します。</span> <span class="merged" id="all.3Sa9ud.spl2" title="原文 : Without cluster roles this must be disabled by editing the manager/manager.yaml file in the manifests.">クラスタ・ロールがない場合は、マニフェスト内の<code>manager/manager.yaml</code>ファイルを編集して無効にする必要があります。</span> </p>

<p><span class="merged" id="all.9PHjp" title="原文 : Edit the Operator container args section of the deployment yaml to add command line arguments to --enable-webhook=false to disable web-hook creation and --install-crd=false to disable CRD installation.">デプロイメントyamlのオペレータ・コンテナ<code>args</code>セクションを編集して、コマンドライン引数を<code>--enable-webhook=false</code>に追加し、webフックの作成を無効にし、<code>--install-crd=false</code>を使用してCRDのインストールを無効にします。</span></p>

<p><span class="merged" id="all.4Z0Nyk" title="原文 : For example, change the section of the manager/manager.yaml file that looks like this:">たとえば、次のような<code>manager/manager.yaml</code>ファイルのセクションを変更します:</span></p>

<markup
lang="yaml"
title="manager/manager.yaml"
>        command:
          - /files/runner
        args:
          - --enable-leader-election
        envFrom:</markup>

<p><span class="merged" id="all.I7IIy" title="原文 : to be:">対象:</span></p>

<markup
lang="yaml"
title="manager/manager.yaml"
>        command:
          - /files/runner
        args:
          - --enable-leader-election
          - --enable-webhook=false
          - --install-crd=false
        envFrom:</markup>

</div>

<h4 id="_edit_the_operator_clusterrole_clusterrolebinding"><span class="merged" id="all.2iMJuh" title="原文 : Edit the Operator ClusterRole &amp; ClusterRoleBinding">オペレータClusterRole &amp; ClusterRoleBindingの編集</span></h4>
<div class="section">
<p><span class="merged" id="all.2iS3e0.spl1" title="原文 : The Operator will require a role and role binding to work in a single namespace.">オペレータは、単一のネームスペースで機能するには、ロールおよびロール・バインディングが必要です。</span> <span class="merged" id="all.2iS3e0.spl2" title="原文 : Edit the config/role.yaml to change its type from ClusterRole to Role."><code>config/role.yaml</code>を編集して、そのタイプを<code>ClusterRole</code>から<code>Role</code>に変更します。</span> </p>

<p><span class="merged" id="all.3WWi6T"  title="原文:: For example, change:">たとえば、次のものを変更します:</span></p>

<markup
lang="yaml"
title="role.yaml"
>apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  creationTimestamp: null
  name: manager-role</markup>

<p><span class="merged" id="all.I7IIy.1" title="原文 : to be:">対象:</span></p>

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

<p><span class="merged" id="all.I7IIy.2" title="原文 : to be:">対象:</span></p>

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

<h4 id="_allow_node_lookup_2"><span class="merged" id="all.15qTzC.1" title="原文 : Allow Node Lookup">ノード・ルックアップの許可</span></h4>
<div class="section">
<p><span class="merged" id="all.10x5oR" title="原文 : In environments where Kubernetes administrators are happy to allow the Operator read-only access to Node information, the required ClusterRole can be created by leaving the relevant lines uncommented in the config/kustomization.yaml file.">Kubernetes管理者が<code>Node</code>情報へのオペレータの読取り専用アクセスを満足できる環境では、関連する行を<code>config/kustomization.yaml</code>ファイルにコメント解除して、必要な<code>ClusterRole</code>を作成できます。</span></p>

<p><span class="merged" id="all.6vDv5.8"  title="原文:: For example:">例えば:</span></p>

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
<li data-value="1"><span class="merged" id="all.2v42vF" title="原文 : The node_viewer_role.yaml and node_viewer_role_binding.yaml will now be left in the installation."><code>node_viewer_role.yaml</code>および<code>node_viewer_role_binding.yaml</code>がインストールに残ります。</span></li>
</ul>
</div>
</div>
</div>
</doc-view>
