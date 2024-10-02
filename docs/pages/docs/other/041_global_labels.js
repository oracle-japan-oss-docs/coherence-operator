<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_global_labels_and_annotations"><span class="merged" id="all.11MrOK" title="原文 : Global Labels and Annotations">グローバル・ラベルと注釈</span></h2>
<div class="section">
<p><span class="merged" id="all.nuuE9.spl1" title="原文 : It is possible to specify a global set of labels and annotations that will be applied to all resources.">すべてのリソースに適用されるラベルおよび注釈のグローバル・セットを指定できます。</span> <span class="merged" id="all.nuuE9.spl2" title="原文 : Global labels and annotations can be specified in two ways:">グローバル・ラベルと注釈は、次の2つの方法で指定できます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.26tX9j" title="原文 : For an individual Coherence deployment, in which case they will be applied to all the Kubernetes resources created for that deployment">個々の<code>Coherence</code>デプロイメントの場合、そのデプロイメント用に作成されたすべてのKubernetesリソースに適用されます</span></p>

</li>
<li>
<p><span class="merged" id="all.4ySic" title="原文 : As part of the Operator install, in which case they will be applied to all Kubernetes resources managed by the Operator, including all Coherence clusters and related resources">オペレータ・インストールの一部として、オペレータが管理するすべてのKubernetesリソース(すべてのCoherenceクラスタおよび関連リソースを含む)に適用されます</span></p>

</li>
</ul>
</div>

<h2 id="_specify_global_labels_for_a_coherence_resource"><span class="merged" id="all.ss49o" title="原文 : Specify Global Labels for a Coherence Resource">Coherenceリソースのグローバル・ラベルの指定</span></h2>
<div class="section">
<p><span class="merged" id="all.4XjOm6" title="原文 : The Coherence CRD contains a global field that allows global labels to be specified."><code>Coherence</code> CRDには、グローバル・ラベルを指定できる<code>global</code>フィールドが含まれています。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  global:
    labels:
      one: "label-one"
      two: "label-two"</markup>

<p><span class="merged" id="all.sY7r0.spl1" title="原文 : If the yaml above is applied to Kubernetes, then every resource the Operator creates for the storage Coherence deployment, it will add the two labels, one=label-one and two=label-two.">前述のyamlをKubernetesに適用すると、オペレータが<code>storage</code> Coherenceデプロイメント用に作成するすべてのリソースに、<code>one=label-one</code>と<code>two=label-two</code>という2つのラベルが追加されます。</span> <span class="merged" id="all.sY7r0.spl2" title="原文 : This includes the StatefulSet, the Pods, any Service such as the stateful set service, the WKA service, etc.">これには、<code>StatefulSet</code>、<code>Pods</code>、ステートフル・セット・サービス、WKAサービスなどの<code>Service</code>が含まれます。</span> </p>

<p><span class="merged" id="all.4DJaQJ" title="原文 : If any of the labels in the global section are also in the Pod labels section or for the Services for exposed ports, those labels will take precedence."><code>global</code>セクションのいずれかのラベルがポッド・ラベル・セクションまたは公開ポートのサービスにも存在する場合は、それらのラベルが優先されます。</span></p>

<p><span class="merged" id="all.2x2VMf.1"  title="原文:: For example">たとえば</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  labels:
    one: "pod-label-one"
  global:
    labels:
      one: "label-one"
      two: "label-one"</markup>

<p><span class="merged" id="all.2GLRzA.spl1" title="原文 : In the yaml above, the global label one=label-one and two=labl-two will be applied to every resource created for the Coherence deployment except for the Pods.">前述のyamlでは、グローバル・ラベル<code>one=label-one</code>および<code>two=labl-two</code>は、ポッドを除く<code>Coherence</code>デプロイメント用に作成されたすべてのリソースに適用されます。</span> <span class="merged" id="all.2GLRzA.spl2" title="原文 : The Operator uses the spec.labels field to define Pods specific labels, so in this case the Pod labels will be one=pod-label-one from the spec.labels field and two=labl-two from the global labels.">オペレータは、<code>spec.labels</code>フィールドを使用してポッド固有のラベルを定義するため、この場合、ポッド・ラベルは<code>spec.labels</code>フィールドの<code>one=pod-label-one</code>、グローバル・ラベルの<code>two=labl-two</code>になります。</span> </p>

</div>

<h2 id="_specify_global_annotations_for_a_coherence_resource"><span class="merged" id="all.3XUOCk" title="原文 : Specify Global Annotations for a Coherence Resource">Coherenceリソースのグローバル注釈の指定</span></h2>
<div class="section">
<p><span class="merged" id="all.3SR05p" title="原文 : The Coherence CRD contains a global field that allows global annotations to be specified."><code>Coherence</code> CRDには、グローバル注釈を指定できる<code>global</code>フィールドが含まれています。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  global:
    annotations:
      one: "annotation-one"
      two: "annotation-two"</markup>

<p><span class="merged" id="all.39r2PK.spl1" title="原文 : If the yaml above is applied to Kubernetes, then every resource the Operator creates for the storage Coherence deployment, it will add the two annotations, one=annotation-one and two=annotation-two.">前述のyamlをKubernetesに適用すると、オペレータが<code>storage</code> Coherenceデプロイメント用に作成するすべてのリソースに、<code>one=annotation-one</code>および<code>two=annotation-two</code>という2つの注釈が追加されます。</span> <span class="merged" id="all.39r2PK.spl2" title="原文 : This includes the StatefulSet, the Pods, any Service such as the stateful set service, the WKA service, etc.">これには、<code>StatefulSet</code>、<code>Pods</code>、ステートフル・セット・サービス、WKAサービスなどの<code>Service</code>が含まれます。</span> </p>

<p><span class="merged" id="all.3dbHf8" title="原文 : If any of the annotations in the global section are also in the Pod annotations section or for the Services for exposed ports, those annotations will take precedence."><code>global</code>セクションのいずれかの注釈がポッド注釈セクションまたは公開ポートのサービスにも存在する場合、それらの注釈が優先されます。</span></p>

<p><span class="merged" id="all.2x2VMf.2"  title="原文:: For example">たとえば</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  annotations:
    one: "pod-annotation-one"
  global:
    annotations:
      one: "annotation-one"
      two: "annotation-one"</markup>

<p><span class="merged" id="all.4CzwSE.spl1" title="原文 : In the yaml above, the global annotation one=annotation-one and two=labl-two will be applied to every resource created for the Coherence deployment except for the Pods.">前述のyamlでは、グローバル注釈<code>one=annotation-one</code>および<code>two=labl-two</code>は、ポッドを除く<code>Coherence</code>デプロイメント用に作成されたすべてのリソースに適用されます。</span> <span class="merged" id="all.4CzwSE.spl2" title="原文 : The Operator uses the spec.annotations field to define Pods specific annotations, so in this case the Pod annotations will be one=pod-annotation-one from the spec.annotations field and two=labl-two from the global annotations.">オペレータは、<code>spec.annotations</code>フィールドを使用してポッド固有の注釈を定義するため、この場合、ポッド注釈は<code>spec.annotations</code>フィールドから<code>one=pod-annotation-one</code>、グローバル注釈から<code>two=labl-two</code>になります。</span> </p>

</div>

<h2 id="_specify_global_labels_and_annotations_when_installing_the_operator"><span class="merged" id="all.16zrh0" title="原文 : Specify Global Labels and Annotations when Installing the Operator">オペレータのインストール時のグローバル・ラベルおよび注釈の指定</span></h2>
<div class="section">
<p><span class="merged" id="all.HclVk.spl1" title="原文 : The Operator runner binary has various command line flags that can be specified on its command line.">オペレータ<code>runner</code>バイナリには、コマンドラインで指定できる様々なコマンドライン・フラグがあります。</span> <span class="merged" id="all.HclVk.spl2" title="原文 : Two of these flags when starting the Operator are:">オペレータの起動時に次の2つのフラグがあります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3tPFv2" title="原文 : --global-label to specify a global label key and value"><code>--global-label</code>:グローバル・ラベル・キーと値を指定</span></p>

</li>
<li>
<p><span class="merged" id="all.RZ53O" title="原文 : --global-annotation to specify a global annotation key and value"><code>--global-annotation</code>:グローバル注釈キーおよび値を指定</span></p>

</li>
</ul>
<p><span class="merged" id="all.4058X6" title="原文 : Both of these command line flags can be specified multiple times if required.">これらのコマンド行フラグは、必要に応じて複数回指定できます。</span></p>

<p><span class="merged" id="all.6vDv5.20"  title="原文:: For example:">例えば:</span></p>

<markup
lang="bash"

>runner operator --global-label one=label-one --global-annoataion foo=bar --global-label two=label-two</markup>

<p><span class="merged" id="all.2lCuKw" title="原文 : The command above will start the Operator with two global labels,one=label-one and two=labl-two and with one global annotation foo=bar.">前述のコマンドは、2つのグローバル・ラベル<code>one=label-one</code>および<code>two=labl-two</code>と1つのグローバル注釈<code>foo=bar</code>を使用してオペレータを起動します。</span></p>

<p><span class="merged" id="all.44gHtx" title="原文 : The Operator will then apply these labels and annotations to every Kubernetes resource that it creates.">オペレータは、これらのラベルおよび注釈を、作成するすべてのKubernetesリソースに適用します。</span></p>


<h3 id="_installing_using_the_manifest_files"><span class="merged" id="all.2yGdxv" title="原文 : Installing Using the Manifest Files">マニフェスト・ファイルを使用したインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.44DFzA" title="原文 : When installing the Operator using the manifest yaml files, additional command line flags can be configured by manually editing the yaml file before installing.">マニフェストyamlファイルを使用してオペレータをインストールする場合、インストール前にyamlファイルを手動で編集することで、追加のコマンドライン・フラグを構成できます。</span></p>

<p><span class="merged" id="all.1M13CC" title="原文 : Download the yaml manifest file from the GitHub repo https://github.com/oracle/coherence-operator/releases/download/v3.4.1/coherence-operator.yaml">GitHubリポジトリ<a href="https://github.com/oracle/coherence-operator/releases/download/v3.4.1/coherence-operator.yaml" id="" target="_blank" >https://github.com/oracle/coherence-operator/releases/download/v3.4.1/coherence-operator.yaml</a>からyamlマニフェスト・ファイルをダウンロード</span></p>

<p><span class="merged" id="all.SBiqw" title="原文 : Find the section of the yaml file the defines the Operator container args, the default looks like this">オペレータ・コンテナ引数を定義するyamlファイルのセクションを検索します。デフォルトはこんな感じです</span></p>

<markup
lang="yaml"
title="coherence-operator.yaml"
>      - args:
        - operator
        - --enable-leader-election</markup>

<p><span class="merged" id="all.sUzwe" title="原文 : Then edit the argument list to add the required --global-label and --global-annotation flags.">次に、引数リストを編集して、必要な<code>--global-label</code>および<code>--global-annotation</code>フラグを追加します。</span></p>

<p><span class="merged" id="all.10F9WY" title="原文 : For example, to add the same --global-label one=label-one --global-annotation foo=bar --global-label two=label-two flags, the file would look like this:">たとえば、同じ<code>--global-label one=label-one --global-annotation foo=bar --global-label two=label-two</code>フラグを追加する場合、ファイルは次のようになります:</span></p>

<markup
lang="yaml"
title="coherence-operator.yaml"
>      - args:
        - operator
        - --enable-leader-election
        - --global-label
        - one=label-one
        - --global-annotation
        - foo=bar
        - --global-label
        - two=label-two`</markup>

<div class="admonition important">
<p class="admonition-textlabel"><span class="merged" id="all.1K6f2p.5"  title="原文:: Important">重要</span></p>
<p ><p><span class="merged" id="all.315hcL.spl1" title="原文 : Container arguments must each be a separate entry in the arg list.">コンテナ引数は、それぞれ引数リスト内の個別のエントリである必要があります。</span> <span class="merged" id="all.315hcL.spl2" title="原文 : This is valid">これは有効です</span> </p>

<markup
lang="yaml"
title="coherence-operator.yaml"
>      - args:
        - operator
        - --enable-leader-election
        - --global-label
        - one=label-one</markup>

<p><span class="merged" id="all.4eexzm" title="原文 : This is not valid">これは無効です</span></p>

<markup
lang="yaml"
title="coherence-operator.yaml"
>      - args:
        - operator
        - --enable-leader-election
        - --global-label  one=label-one</markup>
</p>
</div>
</div>

<h3 id="_installing_using_the_helm_chart"><span class="merged" id="all.XvOeq" title="原文 : Installing Using the Helm Chart">Helmチャートを使用したインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2NYnee" title="原文 : If installing the Operator using the Helm chart, the global labels and annotations can be specified as values as part of the Helm command or in a values file.">Helmチャートを使用してオペレータをインストールする場合、グローバル・ラベルおよび注釈は、Helmコマンドの一部として、または値ファイルに値として指定できます。</span></p>

<p><span class="merged" id="all.1RdnHs" title="原文 : For example, to add the same --global-label one=label-one --global-annotation foo=bar --global-label two=label-two flags, create a simple values file:">たとえば、同じ<code>--global-label one=label-one --global-annotation foo=bar --global-label two=label-two</code>フラグを追加するには、単純な値ファイルを作成します:</span></p>

<markup

title="global-values.yaml"
>globalLabels:
  one: "label-one"
  two: "label-two"

globalAnnotations:
  foo: "bar"</markup>

<p><span class="merged" id="all.3E8hoc" title="原文 : Use the values file when installing the Helm chart">Helmチャートのインストール時に値ファイルを使用</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --values global-values.yaml
    coherence \
    coherence/coherence-operator</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.12"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.k4S1B" title="原文 : When setting the Helm chart values globalLabels or globalAnnotations any labels and annotations specified will also be applied to all the resources installed by the Helm Chart too.">Helmチャート値<code>globalLabels</code>または<code>globalAnnotations</code>を設定すると、指定したラベルおよび注釈も、Helmチャートによってインストールされたすべてのリソースに適用されます。</span></p>
</p>
</div>
</div>
</div>
</doc-view>
