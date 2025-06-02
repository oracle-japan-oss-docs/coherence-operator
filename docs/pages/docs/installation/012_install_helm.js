<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_install_using_helm"><span class="merged" id="all.4g555R" title="原文 : Install Using Helm">Helmを使用したインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.ddGSo.spl1" title="原文 : For more flexibility the simplest way to install the Coherence Operator is to use the Helm chart.">柔軟性を高めるために、Coherence Operatorをインストールする最も簡単な方法は、Helmチャートを使用することです。</span> <span class="merged" id="all.ddGSo.spl2" title="原文 : This ensures that all the correct resources will be created in Kubernetes.">これにより、すべての正しいリソースがKubernetesに作成されます。</span> </p>

<div class="admonition warning">
<p class="admonition-textlabel"><span class="merged" id="all.2dRYIU"  title="原文:: Warning">警告</span></p>
<p ><p><span class="merged" id="all.2AglhP" title="原文 : Helm Upgrades"><strong>Helmのアップグレード</strong></span></p>

<p><span class="merged" id="all.3QCpxR.spl1" title="原文 : Now that the Coherence Operator no longer installs the CRDs when it starts, the CRDs are installed as part of the Helm chart.">Coherence Operatorは起動時にCRDをインストールしなくなったため、CRDはHelmチャートの一部としてインストールされます。</span> <span class="merged" id="all.3QCpxR.spl2" title="原文 : This works ok when installing the operator for the first time into a Kubernetes cluster.">オペレータをKubernetesクラスタに初めてインストールする場合は問題ありません。</span> <span class="merged" id="all.3QCpxR.spl3" title="原文 : If the Helm chart is being used to upgrade an existing install of an earlier Coherence Operator version, or the CRDs already exist, then the installation can fail with an error message similar to this:">Helmチャートを使用して以前のCoherence Operatorバージョンの既存のインストールをアップグレードする場合、またはCRDがすでに存在する場合、次のようなエラー・メッセージでインストールが失敗する可能性があります:</span> </p>

<p><code>Error: INSTALLATION FAILED: Unable to continue with install: CustomResourceDefinition "coherence.coherence.oracle.com" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "operator"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "default"</code></p>

<p><span class="merged" id="all.31GJ6B" title="原文 : This is because Helm will refuse to overwrite any resources that it did not originally install.">これは、Helmが最初にインストールしなかったリソースの上書きを拒否するためです。</span></p>

<p><span class="merged" id="all.3oqpV9.spl1" title="原文 : In this case the CRDs have to be installed manually from the CRD manifest files before the Helm install or upgrade can be performed.">この場合、Helmのインストールまたはアップグレードを実行する前に、CRDマニフェスト・ファイルからCRDを手動でインストールする必要があります。</span> <span class="merged" id="all.3oqpV9.spl2" title="原文 : The Helm install or upgrade then needs to set the installCrd value to false so that the CRDs are not installed as part of the Helm chart install.">その後、Helmのインストールまたはアップグレードでは、CRDがHelmチャートのインストールの一部としてインストールされないように、<code>installCrd</code>値を<code>false</code>に設定する必要があります。</span> </p>
</p>
</div>

<h3 id="_add_the_coherence_helm_repository"><span class="merged" id="all.2LiYhP" title="原文 : Add the Coherence Helm Repository">Coherence Helmリポジトリの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.34cW7K" title="原文 : Add the coherence helm repository using the following commands:">次のコマンドを使用して、<code>coherence</code> helmリポジトリを追加します:</span></p>

<markup
lang="bash"

>helm repo add coherence https://oracle.github.io/coherence-operator/charts

helm repo update</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.bLbzF.spl1" title="原文 : To avoid confusion, the URL https://oracle.github.io/coherence-operator/charts is a Helm repo, it is not a website you open in a browser.">混乱を避けるために、URL <code><a href="https://oracle.github.io/coherence-operator/charts" id="" target="_blank" >https://oracle.github.io/coherence-operator/charts</a></code>はHelmリポジトリであり、ブラウザで開くwebサイトではありません。</span> <span class="merged" id="all.bLbzF.spl2" title="原文 : You may think we shouldn’t have to say this, but you’d be surprised.">知らない方のために。</span> </p>
</div>
</div>

<h3 id="_install_the_coherence_operator_helm_chart"><span class="merged" id="all.4IuD5z.1" title="原文 : Install the Coherence Operator Helm chart">Coherence Operator Helmチャートのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.tJHr4" title="原文 : Once the Coherence Helm repo has been configured the Coherence Operator can be installed using a normal Helm 3 install command:">Coherence Helmリポジトリが構成されると、通常のHelm 3インストール・コマンドを使用してCoherence Operatorをインストールできます:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \      <span class="conum" data-value="1" />
    coherence \                    <span class="conum" data-value="2" />
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3sabbS" title="原文 : where &lt;namespace&gt; is the namespace that the Coherence Operator will be installed into."><code>&lt;namespace></code>は、Coherence Operatorがインストールされるネームスペースです。</span></li>
<li data-value="2"><span class="merged" id="all.253KRR" title="原文 : coherence is the name of this Helm installation."><code>coherence</code>は、このHelmインストールの名前です。</span></li>
</ul>
</div>

<h3 id="helm-operator-image"><span class="merged" id="all.3NvRwL" title="原文 : Set the Operator Image">オペレータ・イメージの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3izK6.spl1" title="原文 : The Helm chart uses a default Operator image from container-registry.oracle.com/middleware/coherence-operator:3.5.0.">Helmチャートでは、<code>container-registry.oracle.com/middleware/coherence-operator:3.5.0</code>のデフォルトのオペレータ・イメージが使用されます。</span> <span class="merged" id="all.3izK6.spl2" title="原文 : If the image needs to be pulled from a different location (for example an internal registry) then there are two ways to override the default.">イメージを別のロケーション(内部レジストリなど)からプルする必要がある場合は、デフォルトを上書きする方法が2つあります。</span> <span class="merged" id="all.3izK6.spl3" title="原文 : Either set the individual image.registry, image.name and image.tag values, or set the whole image name by setting the image value.">個別の<code>image.registry</code>、<code>image.name</code>および<code>image.tag</code>値を設定するか、<code>image</code>値を設定してイメージ名全体を設定します。</span> </p>

<p><span class="merged" id="all.B8HNT" title="原文 : For example, if the Operator image has been deployed into a private registry named foo.com but with the same image name coherence-operator and tag 3.5.0 as the default image, then just the image.registry needs to be specified.">たとえば、オペレータ・イメージが<code>foo.com</code>という名前のプライベート・レジストリにデプロイされているが、デフォルト・イメージと同じイメージ名<code>coherence-operator</code>およびタグ<code>3.5.0</code>の場合は、<code>image.registry</code>のみを指定する必要があります。</span></p>

<p><span class="merged" id="all.DxdMR" title="原文 : In the example below, the image used to run the Operator will be foo.com/coherence-operator:3.5.0.">次の例では、オペレータの実行に使用されるイメージは<code>foo.com/coherence-operator:3.5.0</code>です。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set image.registry=foo.com \
    coherence-operator \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.2omWLr.spl1" title="原文 : All three of the image parts can be specified individually using --set options.">3つのイメージ・パーツはすべて、<code>--set</code>オプションを使用して個別に指定できます。</span> <span class="merged" id="all.2omWLr.spl2" title="原文 : In the example below, the image used to run the Operator will be foo.com/operator:1.2.3.">次の例では、オペレータの実行に使用されるイメージは<code>foo.com/operator:1.2.3</code>です。</span> </p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set image.registry=foo.com \
    --set image.name=operator \
    --set image.tag=1.2.3
    coherence-operator \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.4NBaDS.spl1" title="原文 : Alternatively, the image can be set using a single image value.">または、単一の<code>image</code>値を使用してイメージを設定できます。</span> <span class="merged" id="all.4NBaDS.spl2" title="原文 : For example, the command below will set the Operator image to images.com/coherence-operator:0.1.2.">たとえば、次のコマンドは、オペレータ・イメージを<code>images.com/coherence-operator:0.1.2</code>に設定します。</span> </p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set image=images.com/coherence-operator:0.1.2 \
    coherence-operator \
    coherence/coherence-operator</markup>

</div>

<h3 id="helm-pull-secrets"><span class="merged" id="all.MUXab.1" title="原文 : Image Pull Secrets">イメージ・プル・シークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.1eXQf4.spl1" title="原文 : If the image is to be pulled from a secure repository that requires credentials then the image pull secrets can be specified.">資格証明を必要とするセキュアなリポジトリからイメージをプルする場合は、イメージ・プル・シークレットを指定できます。</span> <span class="merged" id="all.1eXQf4.spl2" title="原文 : See the Kubernetes documentation on Pulling from a Private Registry."><a href="https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/" id="" target="_blank" >「プライベート・レジストリからのプル」</a>のKubernetesドキュメントを参照してください。</span> </p>


<h4 id="_add_pull_secrets_using_a_values_file"><span class="merged" id="all.4FZ6dN" title="原文 : Add Pull Secrets Using a Values File">値ファイルを使用したプル・シークレットの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.1RwZcr" title="原文 : Create a values file that specifies the secrets, for example the private-repo-values.yaml file below:">次の<code>private-repo-values.yaml</code>ファイルなど、シークレットを指定する値ファイルを作成します:</span></p>

<markup
lang="yaml"
title="private-repo-values.yaml"
>imagePullSecrets:
- name: registry-secrets</markup>

<p><span class="merged" id="all.4XkK8C" title="原文 : Now use that file in the Helm install command:">次に、Helm installコマンドでそのファイルを使用します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    -f private-repo-values.yaml <span class="conum" data-value="1" />
    coherence-operator \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.17BX2K" title="原文 : the private-repo-values.yaml values fle will be used by Helm to inject the settings into the Operator deployment"><code>private-repo-values.yaml</code>値fleは、Helmがオペレータ・デプロイメントに設定をインジェクトするために使用されます</span></li>
</ul>
</div>

<h4 id="_add_pull_secrets_using_set"><span class="merged" id="all.210nlY" title="原文 : Add Pull Secrets Using --set">--setを使用したプル・シークレットの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.2Rjtfu" title="原文 : Although the imagePullSecrets field in the values file is an array of name to value pairs it is possible to set these values with the normal Helm --set parameter.">値ファイルの<code>imagePullSecrets</code>フィールドは、値ペアに対する<code>name</code>の配列ですが、これらの値を通常のHelm <code>--set</code>パラメータで設定できます。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set imagePullSecrets[0].name=registry-secrets <span class="conum" data-value="1" />
    coherence-operator \
    coherence/coherence-operator</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2GksBu" title="原文 : this creates the same imagePullSecrets as the values file above.">これにより、前述の値ファイルと同じimagePullSecretsが作成されます。</span></li>
</ul>
</div>
</div>

<h3 id="_change_the_operator_replica_count"><span class="merged" id="all.1w2ScV.1" title="原文 : Change the Operator Replica Count">オペレータ・レプリカ数の変更</span></h3>
<div class="section">
<p><span class="merged" id="all.1hJJIo" title="原文 : To change the replica count when installing the Operator using Helm, the replicas value can be set.">Helmを使用してオペレータをインストールするときにレプリカ数を変更するには、<code>replicas</code>値を設定できます。</span></p>

<p><span class="merged" id="all.3BtSTW" title="原文 : For example, to change the replica count from 3 to 1, the --set replicas=1 option can be used.">たとえば、レプリカ数を3から1に変更するには、<code>--set replicas=1</code>オプションを使用できます。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set replicas=1
    coherence \
    coherence/coherence-operator</markup>

</div>

<h3 id="helm-watch-ns"><span class="merged" id="all.3ZRPoT" title="原文 : Set the Watch Namespaces">ウォッチ・ネームスペースの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3e8B11" title="原文 : To set the watch namespaces when installing with helm set the watchNamespaces value, for example:">helmでインストールするときにウォッチ・ネームスペースを設定するには、<code>watchNamespaces</code>値を設定します。次に例を示します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set watchNamespaces=payments,catalog,customers \
    coherence-operator \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.2XUFDk" title="原文 : The payments, catalog and customers namespaces will be watched by the Operator."><code>payments</code>、<code>catalog</code>および<code>customers</code>ネームスペースは、オペレータによって監視されます。</span></p>


<h4 id="_set_the_watch_namespace_to_the_operators_install_namespace"><span class="merged" id="all.45ohWm" title="原文 : Set the Watch Namespace to the Operator’s Install Namespace">監視ネームスペースをオペレータのインストール・ネームスペースに設定</span></h4>
<div class="section">
<p><span class="merged" id="all.2p0ISm.spl1" title="原文 : When installing the Operator using the Helm chart, there is a convenience value that can be set if the Operator should only monitor the same namespace that it is installed into.">Helmチャートを使用してオペレータをインストールする場合、オペレータがインストールされているネームスペースと同じネームスペースのみをモニターする必要がある場合に設定できる便利な値があります。</span> <span class="merged" id="all.2p0ISm.spl2" title="原文 : By setting the onlySameNamespace value to true the watch namespace will be set to the installation namespace."><code>onlySameNamespace</code>値を<code>true</code>に設定すると、ウォッチ・ネームスペースはインストール・ネームスペースに設定されます。</span> <span class="merged" id="all.2p0ISm.spl3" title="原文 : If the onlySameNamespace value is set to true then any value set for the watchNamespaces value will be ignored."><code>onlySameNamespace</code>値が<code>true</code>に設定されている場合、<code>watchNamespaces</code>値に設定された値は無視されます。</span> </p>

<p><span class="merged" id="all.Mqgar" title="原文 : For example, the command below will set onlySameNamespace to true, and the Operator will be installed into, and only monitor the coh-testing namespace.">たとえば、次のコマンドは、<code>onlySameNamespace</code>をtrueに設定し、Operatorをインストールして、<code>coh-testing</code>ネームスペースのみをモニターします。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace coh-testing \
    --set onlySameNamespace=true \
    coherence-operator \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.4IyFRm.spl1" title="原文 : In the example below, the onlySameNamespace is set to true, so the Operator will be installed into, and only monitor the coh-testing namespace.">次の例では、<code>onlySameNamespace</code>がtrueに設定されているため、Operatorはインストールされ、<code>coh-testing</code>ネームスペースのみを監視します。</span> <span class="merged" id="all.4IyFRm.spl2" title="原文 : Even though the watchNamespaces value is set, it will be ignored."><code>watchNamespaces</code>値が設定されていても、無視されます。</span> </p>

<markup
lang="bash"

>helm install  \
    --namespace coh-testing \
    --set watchNamespaces=payments,catalog,customers \
    --set onlySameNamespace=true \
    coherence-operator \
    coherence/coherence-operator</markup>

</div>
</div>

<h3 id="helm-sec-context"><span class="merged" id="all.2FZhLM" title="原文 : Install the Operator with a Security Context">セキュリティ・コンテキストを使用したオペレータのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.37fvA8" title="原文 : The Operator container can be configured with a Pod securityContext or a container securityContext, so that it runs as a non-root user.">オペレータ・コンテナは、ポッド<code>securityContext</code>またはコンテナ<code>securityContext</code>で構成して、非rootユーザーとして実行できます。</span></p>

<p><span class="merged" id="all.2uqFQU" title="原文 : This can be done using a values file:">これは、値ファイルを使用して実行できます:</span></p>

<p><span class="merged" id="all.2dhgZ2" title="原文 : Set the Pod securityContext"><strong>ポッドの設定securityContext</strong></span></p>

<markup
lang="yaml"
title="security-values.yaml"
>podSecurityContext:
  runAsNonRoot: true
  runAsUser: 1000</markup>

<p><span class="merged" id="all.kbaNs" title="原文 : Set the Container securityContext"><strong>コンテナsecurityContextの設定</strong></span></p>

<markup
lang="yaml"
title="security-values.yaml"
>securityContext:
  runAsNonRoot: true
  runAsUser: 1000</markup>

<p><span class="merged" id="all.3Mljgx" title="原文 : Then the security-values.yaml values file above can be used in the Helm install command.">次に、前述の<code>security-values.yaml</code>値ファイルをHelmインストール・コマンドで使用できます。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --values security-values.yaml \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.2nn9ac" title="原文 : Alternatively, the Pod or container securityContext values can be set on the command line as --set parameters:">または、ポッドまたはコンテナの<code>securityContext</code>値をコマンドラインで<code>--set</code>パラメータとして設定できます:</span></p>

<p><span class="merged" id="all.2dhgZ2.1" title="原文 : Set the Pod securityContext"><strong>ポッドの設定securityContext</strong></span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set podSecurityContext.runAsNonRoot=true \
    --set podSecurityContext.runAsUser=1000 \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.kbaNs.1" title="原文 : Set the Container securityContext"><strong>コンテナsecurityContextの設定</strong></span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set securityContext.runAsNonRoot=true \
    --set securityContext.runAsUser=1000 \
    coherence \
    coherence/coherence-operator</markup>

</div>

<h3 id="helm-labels"><span class="merged" id="all.1X6N5U" title="原文 : Set Additional Labels">追加ラベルの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.450GmD" title="原文 : When installing the Operator with Helm, it is possible to set additional labels to be applied to the Operator Pods and to the Operator Deployment.">Helmを使用してOperatorをインストールする場合、オペレータ・ポッドおよびオペレータ・デプロイメントに適用する追加のラベルを設定できます。</span></p>


<h4 id="_adding_pod_labels"><span class="merged" id="all.2nGABN" title="原文 : Adding Pod Labels">ポッド・ラベルの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.2HdWxr" title="原文 : To add labels to the Operator Pods set the labels value, either on the command line using --set or in the values file.">オペレータ・ポッドにラベルを追加するには、コマンドラインで<code>--set</code>を使用するか、値ファイルで<code>labels</code>値を設定します。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.9"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3w23N8" title="原文 : Setting labels will only apply the additional labels to the Operator Pods, they will not be applied to any other resource created by the Helm chart."><code>labels</code>を設定すると、追加のラベルがオペレータ・ポッドにのみ適用され、Helmチャートによって作成された他のリソースには適用されません。</span></p>
</p>
</div>
<p><span class="merged" id="all.2zuz5R" title="原文 : For example, using the command line:">たとえば、次のコマンドラインを使用します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set labels.one=value-one \
    --set labels.two=value-two \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.jrqdO" title="原文 : The command above would add the following additional labels one and two to the Operator Pod as shown below:">前述のコマンドでは、次に示すように、オペレータ・ポッドに次のラベル<code>one</code>および<code>two</code>が追加されます:</span></p>

<markup
lang="yaml"

>apiVersion: v1
kind: Pod
metadata:
  name: coherence-operator
  labels:
    one: value-one
    two: value-two</markup>

<p><span class="merged" id="all.1Ay9lA" title="原文 : The same labels could also be specified in a values file:">同じラベルを値ファイルで指定することもできます:</span></p>

<markup

title="add-labels-values.yaml"
>labels:
  one: value-one
  two: value-two</markup>

</div>

<h4 id="_adding_deployment_labels"><span class="merged" id="all.HLULy" title="原文 : Adding Deployment Labels">デプロイメント・ラベルの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.3HA9p9" title="原文 : To add labels to the Operator Deployment set the deploymentLabels value, either on the command line using --set or in the values file.">オペレータ・デプロイメントにラベルを追加するには、コマンドラインで<code>--set</code>を使用するか、値ファイルで<code>deploymentLabels</code>値を設定します。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.10"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.eHe7w" title="原文 : Setting deploymentLabels will only apply the additional labels to the Deployment, they will not be applied to any other resource created by the Helm chart."><code>deploymentLabels</code>を設定すると、追加のラベルがデプロイメントにのみ適用され、Helmチャートによって作成された他のリソースには適用されません。</span></p>
</p>
</div>
<p><span class="merged" id="all.2zuz5R.1" title="原文 : For example, using the command line:">たとえば、次のコマンドラインを使用します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set deploymentLabels.one=value-one \
    --set deploymentLabels.two=value-two \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.jrqdO.1" title="原文 : The command above would add the following additional labels one and two to the Operator Pod as shown below:">前述のコマンドでは、次に示すように、オペレータ・ポッドに次のラベル<code>one</code>および<code>two</code>が追加されます:</span></p>

<markup
lang="yaml"

>apiVersion: apps/v1
kind: Deployment
metadata:
  name: coherence-operator
  labels:
    one: value-one
    two: value-two</markup>

<p><span class="merged" id="all.1Ay9lA.1" title="原文 : The same labels could also be specified in a values file:">同じラベルを値ファイルで指定することもできます:</span></p>

<markup

title="add-labels-values.yaml"
>deploymentLabels:
  one: value-one
  two: value-two</markup>

</div>
</div>

<h3 id="helm-annotations"><span class="merged" id="all.ctz0o" title="原文 : Set Additional Annotations">追加注釈の設定</span></h3>
<div class="section">
<p><span class="merged" id="all.2HE8Re" title="原文 : When installing the Operator with Helm, it is possible to set additional annotations to be applied to the Operator Pods and to the Operator Deployment.">Helmを使用してOperatorをインストールする場合、オペレータ・ポッドおよびオペレータ・デプロイメントに適用される追加の注釈を設定できます。</span></p>


<h4 id="_adding_pod_annotations"><span class="merged" id="all.1PevBK" title="原文 : Adding Pod Annotations">ポッド注釈の追加</span></h4>
<div class="section">
<p><span class="merged" id="all.1NeKgb" title="原文 : To add annotations to the Operator Pods set the annotations value, either on the command line using --set or in the values file.">オペレータ・ポッドに注釈を追加するには、コマンドラインで<code>--set</code>を使用するか、値ファイルで<code>annotations</code>値を設定します。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.11"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.2kJ2CK" title="原文 : Setting annotations will only apply the additional annotations to the Operator Pods, they will not be applied to any other resource created by the Helm chart."><code>annotations</code>を設定すると、オペレータ・ポッドに追加の注釈のみが適用され、Helmチャートによって作成された他のリソースには適用されません。</span></p>
</p>
</div>
<p><span class="merged" id="all.2zuz5R.2" title="原文 : For example, using the command line:">たとえば、次のコマンドラインを使用します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set annotations.one=value-one \
    --set annotations.two=value-two \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.YvWEt" title="原文 : The command above would add the following additional annotations one and two to the Operator Pod as shown below:">前述のコマンドでは、次に示すように、オペレータ・ポッドに次の注釈<code>one</code>および<code>two</code>が追加されます:</span></p>

<markup
lang="yaml"

>apiVersion: v1
kind: Pod
metadata:
  name: coherence-operator
  annotations:
    one: value-one
    two: value-two</markup>

<p><span class="merged" id="all.1aHXze" title="原文 : The same annotations could also be specified in a values file:">同じ注釈を値ファイルで指定することもできます:</span></p>

<markup

title="add-annotations-values.yaml"
>annotations:
  one: value-one
  two: value-two</markup>

</div>

<h4 id="_adding_deployment_annotations"><span class="merged" id="all.2Y3cEV" title="原文 : Adding Deployment Annotations">デプロイメント注釈の追加</span></h4>
<div class="section">
<p><span class="merged" id="all.3RGv6C" title="原文 : To add annotations to the Operator Deployment set the deploymentAnnotations value, either on the command line using --set or in the values file.">オペレータ・デプロイメントに注釈を追加するには、コマンドラインで<code>--set</code>を使用して、または値ファイルで<code>deploymentAnnotations</code>値を設定します。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.12"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.P1hvE" title="原文 : Setting deploymentAnnotations will only apply the additional annotations to the Deployment, they will not be applied to any other resource created by the Helm chart."><code>deploymentAnnotations</code>を設定すると、追加の注釈のみがデプロイメントに適用され、Helmチャートによって作成された他のリソースには適用されません。</span></p>
</p>
</div>
<p><span class="merged" id="all.2zuz5R.3" title="原文 : For example, using the command line:">たとえば、次のコマンドラインを使用します:</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set deploymentAnnotations.one=value-one \
    --set deploymentAnnotations.two=value-two \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.YvWEt.1" title="原文 : The command above would add the following additional annotations one and two to the Operator Pod as shown below:">前述のコマンドでは、次に示すように、オペレータ・ポッドに次の注釈<code>one</code>および<code>two</code>が追加されます:</span></p>

<markup
lang="yaml"

>apiVersion: apps/v1
kind: Deployment
metadata:
  name: coherence-operator
  annotations:
    one: value-one
    two: value-two</markup>

<p><span class="merged" id="all.1aHXze.1" title="原文 : The same annotations could also be specified in a values file:">同じ注釈を値ファイルで指定することもできます:</span></p>

<markup

title="add-annotations-values.yaml"
>deploymentAnnotations:
  one: value-one
  two: value-two</markup>

</div>
</div>

<h3 id="helm-job"><span class="merged" id="all.ryYBR" title="原文 : CoherenceJob CRD Support">CoherenceJob CRDのサポート</span></h3>
<div class="section">
<p><span class="merged" id="all.1tOvVd.spl1" title="原文 : By default, the Operator will install both CRDs, Coherence and CoherenceJob.">デフォルトでは、オペレータはCRD (<code>Coherence</code>および<code>CoherenceJob</code>)の両方をインストールします。</span> <span class="merged" id="all.1tOvVd.spl2" title="原文 : If support for CoherenceJob is not required then it can be excluded from being installed setting the Operator command line parameter --install-job-crd to false."><code>CoherenceJob</code>のサポートが不要な場合は、オペレータ・コマンドライン・パラメータ<code>--install-job-crd</code>を<code>false</code>に設定してインストールから除外できます。</span> </p>

<p><span class="merged" id="all.1G3c44" title="原文 : When installing with Helm, the allowCoherenceJobs value can be set to false to disable support for CoherenceJob resources (the default value is true).">Helmを使用してインストールする場合、<code>allowCoherenceJobs</code>値を<code>false</code>に設定して、<code>CoherenceJob</code>リソースのサポートを無効にできます(デフォルト値は<code>true</code>です)。</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set allowCoherenceJobs=false \
    coherence \
    coherence/coherence-operator</markup>

</div>
</div>

<h2 id="helm-upgrade"><span class="merged" id="all.3XS4W" title="原文 : Upgrade the Coherence Operator Using Helm">Helmを使用したCoherence Operatorのアップグレード</span></h2>
<div class="section">
<p><span class="merged" id="all.3JmTru" title="原文 : If the Coherence operator was originally installed using Helm then it can be upgraded to a new version using a newer Helm chart.">CoherenceオペレータがHelmを使用して最初にインストールされた場合は、新しいHelmチャートを使用して新しいバージョンにアップグレードできます。</span></p>

<p><span class="merged" id="all.VPlyq" title="原文 : To upgrade to the latest version of the Coherence operator simply use the Helm upgrade command as shown below.">Coherenceオペレータの最新バージョンにアップグレードするには、次に示すようにHelmアップグレード・コマンドを使用します。</span></p>

<markup
lang="bash"

>helm upgrade  \
    --namespace &lt;namespace&gt; \
    coherence \
    coherence/coherence-operator</markup>

<p><span class="merged" id="all.1YjReb" title="原文 : The command above will use all the default configurations, but the usual methods of applying values to the install can be used.">前述のコマンドではすべてのデフォルト構成が使用されますが、インストールに値を適用する通常のメソッドを使用できます。</span></p>


<h3 id="helm-upgrade-350"><span class="merged" id="all.2ubD0E" title="原文 : Upgrading From pre-3.5.1 Versions">3.5.1より前のバージョンからのアップグレード</span></h3>
<div class="section">
<p><span class="merged" id="all.3fIXM4.spl1" title="原文 : Before version 3.5.1 of the Coherence operator, the operator used to install the CRDs when it started.">Coherenceオペレータのバージョン3.5.1より前は、CRDの起動時にCRDのインストールに使用されるオペレータです。</span> <span class="merged" id="all.3fIXM4.spl2" title="原文 : In 3.5.1 this behaviour was changed and the operator no longer installs the CRDs, these must be installed along with the operator.">3.5.1では、この動作が変更され、オペレータがCRDをインストールしなくなったため、これらをオペレータとともにインストールする必要があります。</span> <span class="merged" id="all.3fIXM4.spl3" title="原文 : The 3.5.1 and above Helm chart includes the CRDs.">3.5.1以上のHelmチャートには、CRDが含まれます。</span> </p>

<p><span class="merged" id="all.BmTO8.spl1" title="原文 : This causes an issue when performing a Helm upgrade from a pre-3.5.1 version because Helm did not install the CRDs.">これにより、HelmがCRDをインストールしなかったため、3.5.1より前のバージョンからHelmアップグレードを実行するときに問題が発生します。</span> <span class="merged" id="all.BmTO8.spl2" title="原文 : When attempting an upgrade Helm will display an error similar to the one below:">アップグレードを試行すると、Helmに次のようなエラーが表示されます:</span> </p>

<markup


>Error: INSTALLATION FAILED: Unable to continue with install: CustomResourceDefinition
"coherence.coherence.oracle.com" in namespace "" exists and cannot be imported into the
current release: invalid ownership metadata; label validation error: missing key
"app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error:
missing key "meta.helm.sh/release-name": must be set to "operator"; annotation validation
error: missing key "meta.helm.sh/release-namespace": must be set to "default"</markup>

<p><span class="merged" id="all.jGFj0.spl1" title="原文 : This is because Helm will refuse to overwrite any resources that it did not originally install.">これは、Helmが最初にインストールしなかったリソースの上書きを拒否するためです。</span> <span class="merged" id="all.jGFj0.spl2" title="原文 : There are a few options to work around this.">これに対処するためのオプションがいくつかあります。</span> </p>

<div class="admonition warning">
<p class="admonition-textlabel"><span class="merged" id="all.2dRYIU.1"  title="原文:: Warning">警告</span></p>
<p ><p><span class="merged" id="all.4BcyBr.spl1" title="原文 : As a work-around to the issue, you should not uninstall the existing CRDs.">この問題の回避方法として、既存のCRDをアンインストールしないでください。</span> <span class="merged" id="all.4BcyBr.spl2" title="原文 : Any running Coherence clusters being managed by the Operator will be deleted if the CRDs are deleted.">CRDが削除されると、オペレータによって管理されている実行中のCoherenceクラスタはすべて削除されます。</span> </p>
</p>
</div>

<h4 id="_continue_to_install_the_crds_manually"><span class="merged" id="all.1wZJki" title="原文 : Continue to install the CRDs manually">手動でCRDをインストール</span></h4>
<div class="section">
<p><span class="merged" id="all.I8l3N" title="原文 : The CRDs can be installed manually from the manifest yaml files as described in the documentation section Manually Install the CRDs The Helm install or upgrade then needs to set the installCrd value to false so that the CRDs are not installed as part of the Helm chart install.">CRDは、マニュアルのセクション<router-link :to="{path: '/docs/installation/011_install_manifests', hash: '#manual-crd'}">「CRDを手動でインストール」</router-link>の説明に従ってマニフェストyamlファイルから手動でインストールできます。Helmのインストールまたはアップグレードでは、Helmチャートのインストールの一部としてCRDがインストールされないように、<code>installCrd</code>値を<code>false</code>に設定する必要があります。</span></p>

<div class="admonition warning">
<p class="admonition-textlabel"><span class="merged" id="all.2dRYIU.2"  title="原文:: Warning">警告</span></p>
<p ><p><span class="merged" id="all.1sYYC0" title="原文 : The CRDs for the new version MUST be installed BEFORE running the Helm upgrade.">Helmアップグレードを実行する<em>前に</em>、新しいバージョンのCRDをインストールする<em>必要があります</em>。</span></p>
</p>
</div>
<markup
lang="bash"

>helm upgrade  \
    --namespace &lt;namespace&gt; \
    --set installCrd=false
    coherence \
    coherence/coherence-operator</markup>

</div>

<h4 id="_patch_the_crds_so_helm_manages_them"><span class="merged" id="all.3862IC" title="原文 : Patch the CRDs So Helm Manages Them">Helmがそれらを管理するようにCRDにパッチを適用</span></h4>
<div class="section">
<p><span class="merged" id="all.4Nk0zY" title="原文 : The CRDs can be patched with the required labels and annotations so that Helm thinks it originally installed them and will then update them.">CRDには、必要なラベルおよび注釈でパッチを適用できるため、Helmは最初にそれらをインストールしたと考え、その後、それらを更新します。</span></p>

<p><span class="merged" id="all.2GPn8E" title="原文 : The commands below can be used to patch the CRDs:">次のコマンドを使用して、CRDにパッチを適用できます:</span></p>

<markup
lang="bash"

>export HELM_RELEASE=operator
export HELM_NAMESPACE=coherence
kubectl patch customresourcedefinition coherence.coherence.oracle.com \
    --patch '{"metadata": {"labels": {"app.kubernetes.io/managed-by": "Helm"}}}'
kubectl patch customresourcedefinition coherence.coherence.oracle.com \
    --patch "{\"metadata\": {\"annotations\": {\"meta.helm.sh/release-name\": \"$HELM_RELEASE\"}}}"
kubectl patch customresourcedefinition coherence.coherence.oracle.com \
    --patch "{\"metadata\": {\"annotations\": {\"meta.helm.sh/release-namespace\": \"$HELM_NAMESPACE\"}}}"
kubectl patch customresourcedefinition coherencejob.coherence.oracle.com \
    --patch '{"metadata": {"labels": {"app.kubernetes.io/managed-by": "Helm"}}}'
kubectl patch customresourcedefinition coherencejob.coherence.oracle.com \
    --patch "{\"metadata\": {\"annotations\": {\"meta.helm.sh/release-name\": \"$HELM_RELEASE\"}}}"
kubectl patch customresourcedefinition coherencejob.coherence.oracle.com \
    --patch "{\"metadata\": {\"annotations\": {\"meta.helm.sh/release-namespace\": \"$HELM_NAMESPACE\"}}}"</markup>

<p><span class="merged" id="all.k3Ej7.spl1" title="原文 : The first line exports the name of the Helm release being upgraded.">最初の行は、アップグレードするHelmリリースの名前をエクスポートします。</span> <span class="merged" id="all.k3Ej7.spl2" title="原文 : The second line exports the name of the Kubernetes namespace the operator was installed into.">2行目は、オペレータがインストールされたKubernetesネームスペースの名前をエクスポートします。</span> </p>

<p><span class="merged" id="all.46F2In" title="原文 : After patching as described above the operator can be upgraded with a normal Helm upgrade command:">前述のようにパッチ適用した後、オペレータは通常のHelmアップグレード・コマンドを使用してアップグレードできます:</span></p>

<markup
lang="bash"

>helm upgrade  \
    --namespace $HELM_NAMESPACE \
    $HELM_RELEASE \
    coherence/coherence-operator</markup>

</div>
</div>
</div>

<h2 id="helm-uninstall"><span class="merged" id="all.xWyRu" title="原文 : Uninstall the Coherence Operator Helm chart">Coherence Operator Helmチャートをアンインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.4Kyu3l" title="原文 : To uninstall the operator:">オペレータをアンインストールするには:</span></p>

<markup
lang="bash"

>helm delete coherence-operator --namespace &lt;namespace&gt;</markup>

</div>
</doc-view>
