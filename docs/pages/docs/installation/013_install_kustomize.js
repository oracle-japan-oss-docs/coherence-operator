<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_install_using_kustomize"><span class="merged" id="all.42E3lU" title="原文 : Install Using Kustomize">Kustomizeを使ってインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.284vot" title="原文 : If you want to use yaml directly to install the operator, with something like kubectl, you can use the manifest files published with the GitHub release at this link: 3.5.1 Manifests">yamlを直接使用してオペレータをインストールする場合は、<code>kubectl</code>のように、このリンクでGitHubリリースで公開されたマニフェスト・ファイルを使用できます: <a href="https://github.com/oracle/coherence-operator/releases/download/v3.5.1/coherence-operator-manifests.tar.gz" id="" target="_blank" >3.5.1 マニフェスト</a></span></p>

<p><span class="merged" id="all.3iFoWt" title="原文 : These manifest files are for use with a tool called Kustomize, which is built into kubectl see the documentation here: https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/">これらのマニフェスト・ファイルは、<code>kubectl</code>に組み込まれたKustomizeと呼ばれるツールで使用します。ここにあるドキュメントを参照してください: <a href="https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/" id="" target="_blank" >https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/</a></span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.13"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.v3f9B.1.spl1" title="原文 : As of v3.5.1 of the Operator the manifest yaml also installs the two CRDs that the Operator uses.">オペレータのv3.5.1以降、マニフェストyamlはオペレータが使用する2つのCRDもインストールします。</span> <span class="merged" id="all.v3f9B.1.spl2" title="原文 : In previous releases the Operator would install the CRDs when it started but this behaviour is disabled by default when installing with the manifest yaml.">以前のリリースでは、オペレータは起動時にCRDをインストールしていましたが、マニフェストyamlを使用してインストールすると、この動作はデフォルトで無効になっています。</span> </p>
</p>
</div>
<p><span class="merged" id="all.1eliL" title="原文 : Download the 3.5.1 Manifests from the release page and unpack the file, which should produce a directory called manifests with a structure like this:">リリース・ページから<a href="https://github.com/oracle/coherence-operator/releases/download/v3.5.1/coherence-operator-manifests.tar.gz" id="" target="_blank" >「3.5.1 マニフェスト」</a>をダウンロードし、ファイルを解凍します。これにより、次のような構造を持つ<code>manifests</code>というディレクトリが生成されます:</span></p>

<markup


>manifests
    default
        config.yaml
        kustomization.yaml
    manager
        kustomization.yaml
        manager.yaml
        service.yaml
    rbac
        coherence_editor_role.yaml
        coherence_viewer_role.yaml
        kustomization.yaml
        leader_election_role.yaml
        leader_election_role_binding.yaml
        role.yaml
        role_binding.yaml</markup>

<p><span class="merged" id="all.4cbMdu" title="原文 : There are two ways to use these manifest files, either install using kustomize or generate the yaml and manually install with kubectl.">これらのマニフェスト・ファイルを使用するには、<code>kustomize</code>を使用してインストールするか、yamlを生成し、<code>kubectl</code>を使用して手動でインストールする方法が2つあります。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.nBQpe" title="原文 : All the commands below are run from a console in the manifests/ directory from the extracted file above.">次のコマンドはすべて、前述の抽出ファイルの<code>manifests/</code>ディレクトリのコンソールから実行されます。</span></p>
</div>

<h3 id="_install_with_kustomize"><span class="merged" id="all.2DgR7T" title="原文 : Install with Kustomize">Kustomizeでのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.4Awmqj" title="原文 : If you have Kustomize installed (or can install it from https://github.com/kubernetes-sigs/kustomize) you can use Kustomize to configure the yaml and install.">Kustomizeをインストールしている場合(または<a href="https://github.com/kubernetes-sigs/kustomize" id="" target="_blank" >https://github.com/kubernetes-sigs/kustomize</a>からインストールできる場合)は、Kustomizeを使用してyamlを構成し、インストールできます。</span></p>


<h4 id="_change_the_operator_replica_count"><span class="merged" id="all.1w2ScV.2" title="原文 : Change the Operator Replica Count">オペレータ・レプリカ数の変更</span></h4>
<div class="section">
<p><span class="merged" id="all.ou9NB.spl1" title="原文 : To change the replica count using Kustomize a patch file needs to be applied.">Kustomizeを使用してレプリカ数を変更するには、パッチ・ファイルを適用する必要があります。</span> <span class="merged" id="all.ou9NB.spl2" title="原文 : The Operator manifests include a patch file, named manager/single-replica-patch.yaml, that changes the replica count from 3 to 1.">Operatorマニフェストには、レプリカ数を3から1に変更する<code>manager/single-replica-patch.yaml</code>という名前のパッチ・ファイルが含まれています。</span> <span class="merged" id="all.ou9NB.spl3" title="原文 : This patch can be applied with the following Kustomize command.">このパッチは、次のKustomizeコマンドで適用できます。</span> </p>

<markup
lang="bash"

>cd ./manager &amp;&amp; kustomize edit add patch \
  --kind Deployment --name controller-manager \
  --path single-replica-patch.yaml</markup>

</div>

<h4 id="_set_image_names"><span class="merged" id="all.KM6PA" title="原文 : Set Image Names">イメージ名の設定</span></h4>
<div class="section">
<p><span class="merged" id="all.49bQcp" title="原文 : If you need to use different iamge names from the defaults kustomize can be used to specify different names:">デフォルトとは異なるiamge名を使用する必要がある場合は、<code>kustomize</code>を使用して別の名前を指定できます:</span></p>

<p><span class="merged" id="all.s2gq7" title="原文 : Change the name of the Operator image by running the command below, changing the image name to the registry and image name that you are using for the Operator, for example if you have the images in a custom registry">次のコマンドを実行してOperatorイメージの名前を変更し、イメージ名をOperatorに使用するレジストリおよびイメージ名に変更します(カスタム・レジストリにイメージがある場合など)</span></p>

<markup
lang="bash"

>cd ./manager &amp;&amp; kustomize edit set image controller=myregistry/coherence-operator:3.5.1</markup>

<p><span class="merged" id="all.325mTV" title="原文 : Change the name of the Operator image by running the command below, changing the image name to the registry and image name that you are using for the Operator utilities image">次のコマンドを実行してOperatorイメージの名前を変更し、そのイメージ名を、Operatorユーティリティのイメージに使用するレジストリおよびイメージ名に変更</span></p>

<markup
lang="bash"

>cd ./manager &amp;&amp; kustomize edit add configmap env-vars --from-literal OPERATOR_IMAGE=myregistry/coherence-operator:3.5.1</markup>

<p><span class="merged" id="all.3AmH2f.spl1" title="原文 : Change the name of the default Coherence image.">デフォルトのCoherenceイメージの名前を変更します。</span> <span class="merged" id="all.3AmH2f.spl2" title="原文 : If you are always going to be deploying your own application images then this does not need to change.">独自のアプリケーション・イメージを常にデプロイする場合、これを変更する必要はありません。</span> </p>

<markup
lang="bash"

>cd ./manager &amp;&amp; $(GOBIN)/kustomize edit add configmap env-vars --from-literal COHERENCE_IMAGE=$(COHERENCE_IMAGE)</markup>

<p><span class="merged" id="all.1o8CEh" title="原文 : Set the namespace to install into, the example below sets the namespace to coherence-test:">インストールするネームスペースを設定します。次の例では、ネームスペースを<code>coherence-test</code>に設定します:</span></p>

<markup
lang="bash"

>cd ./default &amp;&amp; /kustomize edit set namespace coherence-test</markup>

</div>

<h4 id="_install"><span class="merged" id="all.46rSDN"  title="原文:: Install">インストール</span></h4>
<div class="section">
<p><span class="merged" id="all.1u9XQn.spl1" title="原文 : The Operator requires a Secret for its web-hook certificates.">オペレータは、webフック証明書に<code>Secret</code>が必要です。</span> <span class="merged" id="all.1u9XQn.spl2" title="原文 : This Secret needs to exist but can be empty.">この<code>Secret</code>は存在する必要がありますが、空にできます。</span> <span class="merged" id="all.1u9XQn.spl3" title="原文 : The Secret must be in the same namespace that the Operator will be deployed to."><code>Secret</code>は、オペレータのデプロイ先と同じネームスペースに存在する必要があります。</span> <span class="merged" id="all.1u9XQn.spl4" title="原文 : For example, if the Operator namespace is coherence-test, then the Secret can be created with this command:">たとえば、オペレータ・ネームスペースが<code>coherence-test</code>の場合、次のコマンドを使用して<code>Secret</code>を作成できます:</span> </p>

<markup
lang="bash"

>kubectl -n coherence-test create secret generic coherence-webhook-server-cert</markup>

<p><span class="merged" id="all.zekjR" title="原文 : The Operator can now be installed by running the following command from the manifests directory:"><code>manifests</code>ディレクトリから次のコマンドを実行して、オペレータをインストールできるようになりました:</span></p>

<markup
lang="bash"

>kustomize build ./default | kubectl apply -f -</markup>

</div>
</div>

<h3 id="_generate_yaml_install_with_kubectl"><span class="merged" id="all.2RQkSV" title="原文 : Generate Yaml - Install with Kubectl">Yamlを生成 - Kubectlでインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2PdPjI.spl1" title="原文 : Instead of using Kustomize to modify and install the Operator we can use kubectl to generate the yaml from the manifests."><code>kubectl</code>を使用してマニフェストからyamlを生成するには、Kustomizeを使用してオペレータを変更およびインストールするかわりに使用できます。</span> <span class="merged" id="all.2PdPjI.spl2" title="原文 : You can then edit this yaml and manually deploy it with kubectl.">その後、このyamlを編集し、<code>kubectl</code>を使用して手動でデプロイできます。</span> </p>

<p><span class="merged" id="all.1CFxDo" title="原文 : Run the following command from the manifests directory:"><code>manifests</code>ディレクトリから次のコマンドを実行します:</span></p>

<markup
lang="bash"

>kubectl create --dry-run -k default/ -o yaml &gt; operator.yaml</markup>

<p><span class="merged" id="all.Fq8xT.spl1" title="原文 : This will create a file in the manifests directory called operator.yaml that contains all the yaml required to install the Operator.">これにより、オペレータのインストールに必要なすべてのyamlを含む<code>operator.yaml</code>という<code>manifests</code>ディレクトリにファイルが作成されます。</span> <span class="merged" id="all.Fq8xT.spl2" title="原文 : You can then edit this yaml to change image names or add other settings.">その後、このyamlを編集してイメージ名を変更したり、他の設定を追加したりできます。</span> </p>

<p><span class="merged" id="all.1dWh3I" title="原文 : The Operator can be installed using the generated yaml.">オペレータは、生成されたyamlを使用してインストールできます。</span></p>

<p><span class="merged" id="all.4ftdmp" title="原文 : For example if the Operator is to be deployed to the coherence-test namespace:">たとえば、オペレータを<code>coherence-test</code>ネームスペースにデプロイする場合:</span></p>

<markup
lang="bash"

>kubectl -n coherence-test create secret generic coherence-webhook-server-cert
kubectl -n coherence-test create -f operator.yaml</markup>

</div>
</div>
</doc-view>
