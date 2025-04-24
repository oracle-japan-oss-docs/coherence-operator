<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_manage_coherence_resources_using_helm"><span class="merged" id="all.2bRZ7e" title="原文 : Manage Coherence Resources using Helm">Helmを使用したCoherenceリソースの管理</span></h2>
<div class="section">
<p><span class="merged" id="all.3nsup9.spl1" title="原文 : Occasionally there is a requirement to manage Coherence resources using Helm instead of Kubernetes tools such as kubectl."><code>kubectl</code>などのKubernetesツールのかわりにHelmを使用してCoherenceリソースを管理する必要がある場合があります。</span> <span class="merged" id="all.3nsup9.spl2" title="原文 : There is no Helm chart for a Coherence resource as it is a single resource and any Helm chart and values file would need to replicate the entire Coherence CRD if it was to be of generic enough use for everyone.">Coherenceリソースは1つのリソースであるため、Helmチャートはありません。Helmチャートおよび値ファイルは、すべてのユーザーにとって十分な汎用的な使用である場合に、Coherence CRD全体をレプリケートする必要があります。</span> <span class="merged" id="all.3nsup9.spl3" title="原文 : For this reason, anyone wanting to manage Coherence resource using Helm will need to create their own chart, which can then be specific to their needs.">このため、Helmを使用してCoherenceリソースを管理したい人は、独自のチャートを作成する必要があります。チャートは、必要に応じて固有のものにできます。</span> </p>

<p><span class="merged" id="all.Dy8kq" title="原文 : This example shows some ways that Helm can be used to manage Coherence resources.">この例では、Helmを使用してCoherenceリソースを管理する方法を示します。</span></p>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.11"  title="原文:: Tip">ヒント</span></p>
<p ><p><span class="merged" id="all.2H6jHC" title="原文 :  The complete source code for this example is in the Coherence Operator GitHub repository."><img alt="GitHubマーク32px" src="./images/GitHub-Mark-32px.png" />この例の完全なソース・コードは、<a href="https://github.com/oracle/coherence-operator/tree/main/examples/300_helm" id="" target="_blank" >Coherence Operator GitHub</a>リポジトリにあります。</span></p>
</p>
</div>

<h3 id="_a_simple_generic_helm_chart"><span class="merged" id="all.4Za4iQ" title="原文 : A Simple Generic Helm Chart">単純な汎用Helmチャート</span></h3>
<div class="section">
<p><span class="merged" id="all.akQOP.spl1" title="原文 : This example contains the most basic Helm chart possible to support managing a Coherence resource locate in the chart/ directory.">この例では、<code>chart/</code>ディレクトリでのCoherenceリソース・ロケーションの管理をサポートできる最も基本的なHelmチャートが含まれています。</span> <span class="merged" id="all.akQOP.spl2" title="原文 : The chart is actually completely generic and would support any configuration of Coherence resource.">チャートは実際には完全に汎用的で、Coherenceリソースの構成をサポートします。</span> </p>

<p><span class="merged" id="all.3zWMbD" title="原文 : The values file contains a single value spec, which will contain the entire spec of the Coherence resource.">値ファイルには、1つの値<code>spec</code>が含まれており、これにはCoherenceリソースの仕様全体が含まれます。</span></p>

<markup
lang="yaml"
title="chart/values.yaml"
>spec:</markup>

<p><span class="merged" id="all.2cTkl1" title="原文 : There is a single template file, as we only create a single Coherence resource.">単一のCoherenceリソースのみを作成するため、1つのテンプレート・ファイルがあります。</span></p>

<span v-pre><div class="markup-container"><div class="block-title"><span class="merged" id="all.ic2CV" title="原文 : test-cluster.yaml"><span>test-cluster.yaml</span></span></div><div data-lang="yaml" class="markup"><markup><code class="yaml hljs makefile">apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: {{ .Release.Name }}
  namespace: {{ .Release.Namespace }}
  labels:
{{- include "coherence-labels" . | indent 4 }}
spec:
{{- if .Values.spec }}
{{ toYaml .Values.spec | indent 2 }}
{{- end }}</code></markup><div class="markup__copy"><span class="merged" id="all.33w43w" title="原文 : content_copyCopied"><i aria-hidden="true" class="material-icons icon">content_copy</i> <span class="markup__copy__message">「コピー済」</span></span></div></div></div></span>

<p><span class="merged" id="all.3w2GC9" title="原文 : The first part of the template is fairly standard for a Helm chart, we configure the resource name, namespace and add some labels.">テンプレートの最初の部分は、Helmチャートではかなり標準で、リソース名、ネームスペースを構成し、ラベルを追加します。</span></p>

<p><span class="merged" id="all.Ihyci.spl1" title="原文 : The generic nature of the chart comes from the fact that the template then just takes the whole spec value from the values file, and if it is not null converts it to yaml under the spec: section of the template.">チャートの一般的な性質は、テンプレートが値ファイルから<code>spec</code>値全体を取得したという事実から得られ、それが<code>null</code>でない場合は、テンプレートの<code>spec:</code>セクションの下のyamlに変換されます。</span> <span class="merged" id="all.Ihyci.spl2" title="原文 : This means that any yaml that is valid in a Coherence CRD spec section can be used in a values file (or with --set arguments) when installing the chart.">つまり、Coherence CRD <code>spec</code>セクションで有効なyamlは、チャートのインストール時に値ファイル(または<code>--set</code>引数)で使用できます。</span> </p>

</div>

<h3 id="_installing_the_chart"><span class="merged" id="all.3sFavt" title="原文 : Installing the Chart">チャートのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2w5M53.spl1" title="原文 : Installing the example Helm chart is as simple as any other chart.">Helmチャートの例のインストールは、他のチャートと同じくらい簡単です。</span> <span class="merged" id="all.2w5M53.spl2" title="原文 : One difference here being that the chart is not installed into a chart repository so has to be installed from the char/ directory.">ここで違いは、チャートがチャート・リポジトリにインストールされないため、<code>char/</code>ディレクトリからインストールする必要がある点です。</span> <span class="merged" id="all.2w5M53.spl3" title="原文 : If you wanted to you could">次の操作を実行</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.YqX4x.spl1" title="原文 : The following commands are all run from the examples/helm directory so that the chart location is specified as ./chart.">次のコマンドはすべて<code>examples/helm</code>ディレクトリから実行され、チャートのロケーションが<code>./chart</code>として指定されます。</span> <span class="merged" id="all.YqX4x.spl2" title="原文 : You can run the commands from anywhere, but you would need to specify the full path to the example chart directory.">任意の場所からコマンドを実行できますが、サンプル・チャート・ディレクトリのフルパスを指定する必要があります。</span> </p>
</div>

<h4 id="_a_simple_dry_run"><span class="merged" id="all.22uXpM" title="原文 : A Simple Dry Run">シンプルなドライ・ラン</span></h4>
<div class="section">
<p><span class="merged" id="all.1NOkQt" title="原文 : To start with we will do a simple dry-run install that will display the yaml Helm would have created if the install command had been real.">最初に、インストール・コマンドが実在した場合にyaml Helmが作成したことを示す単純なドライ・ラン・インストールを実行します。</span></p>

<markup
lang="bash"

>helm  install test ./chart --dry-run</markup>

<p><span class="merged" id="all.4g58SW" title="原文 : The above command should result in the following output">前述のコマンドを実行すると、次の出力になります</span></p>

<markup


>NAME: test
LAST DEPLOYED: Sat Aug 28 16:30:53 2021
NAMESPACE: default
STATUS: pending-install
REVISION: 1
TEST SUITE: None
HOOKS:
MANIFEST:
---
# Source: coherence-example/templates/coherence.yaml
apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
  namespace: default
  labels:
    app.kubernetes.io/managed-by: Helm
    app.kubernetes.io/name: test
    app.kubernetes.io/version: "1.0.0"
spec:</markup>

<p><span class="merged" id="all.37FPm8.spl1" title="原文 : We can see at the bottom of the output the simple Coherence resource that would have been created by helm.">出力の下部には、helmによって作成される単純なCoherenceリソースが表示されます。</span> <span class="merged" id="all.37FPm8.spl2" title="原文 : This is a valid Coherence resource because every field in the spec section is optional.">仕様セクションのすべてのフィールドがオプションであるため、これは有効なCoherenceリソースです。</span> <span class="merged" id="all.37FPm8.spl3" title="原文 : If the install had been real this would have resulted in a Coherence cluster named &quot;test&quot; with three storage enabled cluster members, as the default replica count is three.">インストールが実在していた場合、デフォルトのレプリカ数は3であるため、3つのストレージが有効なクラスタ・メンバーで"test"という名前のCoherenceクラスタになります。</span> </p>

</div>

<h4 id="_setting_values"><span class="merged" id="all.3oxaxr" title="原文 : Setting Values">値の設定</span></h4>
<div class="section">
<p><span class="merged" id="all.1Xjplc.spl1" title="原文 : But how do we set other values in the Coherence resouce.">ただし、Coherenceリソースで他の値を設定する方法はどれですか。</span> <span class="merged" id="all.1Xjplc.spl2" title="原文 : That is simple because Helm does not validate what we enter as values we can either create a values file with anything we like under the spec secion or we can specify values using the --set Helm argument.">これは簡単です。Helmでは、<code>spec</code>秒で好きなものを使用して値ファイルを作成できる値として入力する値がバリデートされないか、<code>--set</code> Helm引数を使用して値を指定できます。</span> </p>

<p><span class="merged" id="all.38i90C" title="原文 : For example, if we wanted to set the replica count to six in a Coherence resource we would need to set the spec.replicas field to 6, and we do exactly the same in the helm chart.">たとえば、Coherenceリソースでレプリカ数を6に設定する場合は、<code>spec.replicas</code>フィールドを<code>6</code>に設定し、ヘルム・チャートでまったく同じ操作を行う必要があります。</span></p>

<p><span class="merged" id="all.H81vx" title="原文 : We could create a values file like this:">次のように値ファイルを作成できます:</span></p>

<markup

title="test-values.yaml"
>spec:
  replicas: 6</markup>

<p><span class="merged" id="all.gsO6x" title="原文 : Which we can install with">インストールする対象</span></p>

<markup
lang="bash"

>helm  install test ./chart -f test-values.yaml</markup>

<p><span class="merged" id="all.Ukzex" title="原文 : Which would produce a Coherence resource like this:">これにより、次のようなCoherenceリソースが生成されます:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
  namespace: default
  labels:
    app.kubernetes.io/managed-by: Helm
    app.kubernetes.io/name: test
    app.kubernetes.io/version: "1.0.0"
spec:
  replicas: 6</markup>

<p><span class="merged" id="all.2CcCL7" title="原文 : We could have done the same thing using --set, for example:">たとえば、<code>--set</code>を使用して同じことをを実行できます:</span></p>

<markup
lang="bash"

>helm  install test ./chart -f test-values.yaml --set spec.replicas=6</markup>

<p><span class="merged" id="all.2SJ3O5" title="原文 : We can even set more deeply nested values, for example the Coherence log level is set in the spec.coherence.logLevel field of the Coherence CRD so we can use the same value in the Helm install command or values file:">また、より深くネストした値を設定することもできます。たとえば、CoherenceのCRDの<code>spec.coherence.logLevel</code>フィールドにCoherenceログ・レベルが設定されているため、Helmインストール・コマンドまたは値ファイルで同じ値を使用できます:</span></p>

<markup
lang="bash"

>helm  install test ./chart -f test-values.yaml --set spec.coherence.logLevel=9</markup>

<p><span class="merged" id="all.5UPQw" title="原文 : Which would produce the following Coherence resource:">これにより、次のCoherenceリソースが生成されます:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
  namespace: default
  labels:
    app.kubernetes.io/managed-by: Helm
    app.kubernetes.io/name: test
    app.kubernetes.io/version: "1.0.0"
spec:
  coherence:
    logLevel: 9</markup>

<p><span class="merged" id="all.3Pyq68.spl1" title="原文 : Just like any Helm chart, whether you use --set arguments or use a values file depends on how complex the resulting yaml will be.">Helmチャートと同様に、<code>--set</code>引数を使用するか、値ファイルを使用するかは、結果のyamlの複雑さによって異なります。</span> <span class="merged" id="all.3Pyq68.spl2" title="原文 : Some fields of the Coherence CRD spec would be impractical to try to configure on the command line with --set and would be much simpler in the values file.">Coherence CRD仕様の一部のフィールドは、<code>--set</code>を使用してコマンドラインで構成しようとすることは現実的ではないため、値ファイルではるかに単純になります。</span> </p>

</div>
</div>

<h3 id="_helm_wait_waiting_for_the_install_to_complete"><span class="merged" id="all.4573yU" title="原文 : Helm Wait - Waiting for the Install to Complete">Helm待機 - インストールの完了を待機中</span></h3>
<div class="section">
<p><span class="merged" id="all.168D3C.spl1" title="原文 : The Helm install command (and update command) have a --wait argument that tells Helm to wait until the installed resources are ready.">Helm <code>install</code>コマンド(および<code>update</code>コマンド)には、インストール済リソースの準備が完了するまでHelmに待機するように指示する<code>--wait</code>引数があります。</span> <span class="merged" id="all.168D3C.spl2" title="原文 : This can be very useful if you want to ensure that everything is created and running correctly after and install or upgrade.">これは、インストールまたはアップグレード後にすべてが正しく作成され、実行されていることを確認する場合に非常に役立ちます。</span> <span class="merged" id="all.168D3C.spl3" title="原文 : If you read the help test for the --wait argument you will see the following:"><code>--wait</code>引数のヘルプ・テストを読むと、次が表示されます:</span> </p>


<p><span class="merged" id="all.3CZRc3.spl1" title="原文 : The limitation should be obvious, Helm can only wait for a sub-set of al the possible resources that you can create from a Helm chart.">制限は明白です。Helmは、Helmチャートから作成できる可能性のあるリソースのサブセットのみ待機できます。</span> <span class="merged" id="all.3CZRc3.spl2" title="原文 : It has no idea how to wait for a Coherence resource to be ready."><code>Coherence</code>リソースの準備が完了するまで待機する方法はありません。</span> <span class="merged" id="all.3CZRc3.spl3" title="原文 : To work around this limitation we can use a Helm chart hook, mre specifically a post-install and post-upgrade hook.">この制限を回避するには、<a href="https://helm.sh/docs/topics/charts_hooks/" id="" target="_blank" >「Helmチャート・フック」</a>(特に、インストール後およびアップグレード後のフック)を使用します。</span> </p>

<p><span class="merged" id="all.2z8dHt" title="原文 : A hook is typically a k8s Job that Helm will execute, you create the Job spec as part of the Helm chart templates.">フックは通常、Helmが実行するk8sジョブで、Helmチャート・テンプレートの一部としてジョブ仕様を作成します。</span></p>


<h4 id="_the_coherence_operator_utils_runner"><span class="merged" id="all.4fjVOP" title="原文 : The Coherence Operator Utils Runner">Coherence Operatorユーティリティ・ランナー</span></h4>
<div class="section">
<p><span class="merged" id="all.sBYeo.spl1" title="原文 : The Coherence Operator has two images, the Operator itself and a second image containing an executable named runner which the Operator uses to run Coherence servers in the Pods it is managing.">Coherence Operatorには、オペレータ自体と、オペレータが管理しているポッドでCoherenceサーバーを実行するために使用する<code>runner</code>という実行可能ファイルを含む2番目のイメージがあります。</span> <span class="merged" id="all.sBYeo.spl2" title="原文 : One of the other commands that the runner can execute is a status command, which queries the Operator for the current status of a Coherence resource.">ランナーが実行できる他のコマンドの1つは、<code>status</code>コマンドであり、オペレータにCoherenceリソースの現在のステータスを問合せします。</span> <span class="merged" id="all.sBYeo.spl3" title="原文 : If you pull the image and execute it you can see the help text for the runner CLI.">イメージをプルして実行すると、ランナーCLIのヘルプ・テキストが表示されます。</span> </p>

<p><span class="merged" id="all.lNq0r" title="原文 : The following commands will pull the Operator utils image and run it to display the help fot eh status command:">次のコマンドは、Operatorのutilsイメージをプルして実行し、help fot eh statusコマンドを表示します:</span></p>

<markup
lang="bash"

>docker pull ${operator.image}
docker run -it --rm ${operator.image} status -h</markup>

<p><span class="merged" id="all.2xJXXp.spl1" title="原文 : By creating a K8s Job that runs the status command we can query the Operator for the status of the Coherence resource we installed from the Helm chart.">statusコマンドを実行するK8sジョブを作成することで、HelmチャートからインストールしたCoherenceリソースのステータスをオペレータにクエリーできます。</span> <span class="merged" id="all.2xJXXp.spl2" title="原文 : Of course, we could have written something similar that used kubectl in the Job or similar to query k8s for the state of the Coherence resource, but this becomes more complex in RBAC enabled cluster.">もちろん、ジョブでkubectlを使用した場合も、Coherenceリソースの状態に対してクエリーk8sに類似したものも、RBAC対応クラスタでは複雑になります。</span> <span class="merged" id="all.2xJXXp.spl3" title="原文 : Querying the simple REST endpoint of the Coherence Operator does not require RBAC rules for the Job to execute.">Coherence Operatorの単純なRESTエンドポイントをクエリーする場合、ジョブの実行にRBACルールは必要ありません。</span> </p>

<p><span class="merged" id="all.1GRoOZ" title="原文 : To run a simple status check we are only interested in the following parameters for the status command:">単純なステータス・チェックを実行するには、statusコマンドの次のパラメータにのみ関心があります:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4TUuwG"  title="原文:: Argument">引数</span></th>
<th><span class="merged" id="all.4JM9z7.53"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><code>--operator-url</code></td>
<td class=""><span class="merged" id="all.3QaiDq" title="原文 : The Coherence Operator URL, typically the operator’s REST service (default &quot;http://coherence-operator-rest.coherence.svc.local:8000&quot;">Coherence Operator URL。通常は、オペレータのRESTサービス(デフォルトはhttp://coherence-operator-rest.coherence.svc.local:8000")</span></td>
</tr>
<tr>
<td class=""><code>--namespace</code></td>
<td class=""><span class="merged" id="all.2F77t8.spl1" title="原文 : The namespace the Coherence resource is deployed into.">Coherenceリソースがデプロイされるネームスペース。</span> <span class="merged" id="all.2F77t8.spl2" title="原文 : This will be the namespace our Helm chart was installed into.">これは、Helmチャートがインストールされたネームスペースになります。</span> </td>
</tr>
<tr>
<td class=""><code>--name</code></td>
<td class=""><span class="merged" id="all.c5fVW.spl1" title="原文 : The name of the Coherence resource.">Coherenceリソースの名前。</span> <span class="merged" id="all.c5fVW.spl2" title="原文 : This will be the name from the Helm chart install">これはHelmチャートのインストールの名前になります</span> </td>
</tr>
<tr>
<td class=""><code>--timeout</code></td>
<td class=""><span class="merged" id="all.1gQqyv" title="原文 : The maximum amount of time to wait for the Coherence resource to reach the required condition (default 5m0s)">Coherenceリソースが必要な条件に達するまで待機する最大時間(デフォルトは5m0s)</span></td>
</tr>
<tr>
<td class=""><code>--interval</code></td>
<td class=""><span class="merged" id="all.1DOO9q" title="原文 : The status check re-try interval (default 10s)">ステータス・チェックの再試行間隔(デフォルトは10秒)</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.43HQAG" title="原文 : First we can add a few additional default values to our Helm chart values file that will be sensible defaults to pass to the hook Job.">まず、Helmチャート値ファイルにいくつかのデフォルト値を追加できます。これは、フック・ジョブに渡される適切なデフォルトになります。</span></p>

<markup
lang="yaml"
title="chart/values.yaml"
>spec:

operator:
  namespace: coherence
  service: coherence-operator-rest
  port: 8000
  image: container-registry.oracle.com/middleware/coherence-operator-utils:3.5.0
  condition: Ready
  timeout: 5m
  interval: 10s</markup>

<p><span class="merged" id="all.1Mezhv" title="原文 : We have added an operator section to isolate the values for the hook from the spec values used in our Coherence resource."><code>operator</code>セクションを追加して、フックの値をCoherenceリソースで使用される<code>spec</code>値から分離しました。</span></p>

<p><span class="merged" id="all.2ZXuHD" title="原文 : We can now create the hook template in our Helm chart using the new values in the values file.">値ファイルの新しい値を使用して、Helmチャートにフック・テンプレートを作成できるようになりました。</span></p>

<span v-pre><div class="markup-container"><div class="block-title"><span class="merged" id="all.DD6mt" title="原文 : chart/templates/hook.yaml"><span>chart/templates/hook.yaml</span></span></div><div data-lang="yaml" class="markup"><markup><code class="yaml hljs makefile">apiVersion: batch/v1
kind: Job
metadata:
  name: "{{ .Release.Name }}-helm-hook"
  namespace: {{ .Release.Namespace }}
  annotations:
    "helm.sh/hook": post-install,post-upgrade
    "helm.sh/hook-delete-policy": hook-succeeded
spec:
  template:
    metadata:
      name: "{{ .Release.Name }}-helm-hook"
    spec:
      restartPolicy: Never
      containers:
      - name: post-install-job
        image: {{ .Values.operator.image }}
        command:
          - "/files/runner"
          - "status"
          - "--namespace"
          -  {{ .Release.Namespace | quote }}
          - "--name"
          - {{ .Release.Name | quote }}
          - "--operator-url"
          - "http://{{ .Values.operator.service | default "coherence-operator-rest" }}.{{ .Values.operator.namespace | default "coherence" }}.svc:{{ .Values.operator.port | default 8000 }}"
          - "--condition"
          - {{ .Values.operator.condition | default "Ready" | quote }}
          - "--timeout"
          - {{ .Values.operator.timeout | default "5m" | quote }}
          - "--interval"
          - {{ .Values.operator.interval | default "10s" | quote }}</code></markup><div class="markup__copy"><span class="merged" id="all.33w43w.1" title="原文 : content_copyCopied"><i aria-hidden="true" class="material-icons icon">content_copy</i> <span class="markup__copy__message">「コピー済」</span></span></div></div></div></span>

<p><span class="merged" id="all.2nQBQu" title="原文 : The annotations section is what tells Helm that this is a hook resource:">注釈セクションは、これがフック・リソースであることをHelmに指示するものです:</span></p>

<markup
lang="yaml"

>  annotations:
    "helm.sh/hook": post-install,post-upgrade
    "helm.sh/hook-delete-policy": hook-succeeded</markup>

<p><span class="merged" id="all.3DlDso.spl1" title="原文 : We define the hook as a post-install and post-update hook, so that it runs on both install and update of the Coherence resource.">フックを<code>post-install</code>および<code>post-update</code>フックとして定義して、Coherenceリソースの<code>install</code>と<code>update</code>の両方で実行します。</span> <span class="merged" id="all.3DlDso.spl2" title="原文 : The hook job will also be deleted once it has successfully run.">フック・ジョブも正常に実行されると削除されます。</span> <span class="merged" id="all.3DlDso.spl3" title="原文 : It will not be deleted if it fails, so we can look at the output of the failure in the Jon Pod logs.">失敗しても削除されないため、Jon Podログで失敗の出力を確認できます。</span> </p>

</div>

<h4 id="_installing_with_the_hook"><span class="merged" id="all.2ws26w" title="原文 : Installing with the Hook">フックによる取り付け</span></h4>
<div class="section">
<p><span class="merged" id="all.1vdc8G" title="原文 : If we repeat the Helm install command to install a Coherence resource with the hook in the chart we should see Helm wait and not complete until the Coherence resource (and by inference the StatefulSet and Pods) are all ready.">Helmインストール・コマンドを繰り返して、チャートのフックでCoherenceリソースをインストールすると、Helm待機が表示され、Coherenceリソース(およびStatefulSetおよびポッドを推論して)の準備が完了するまで完了しません。</span></p>

<markup
lang="bash"

>helm  install test ./chart</markup>

<p><span class="merged" id="all.4UOmGb.spl1" title="原文 : If we were installing a large Coherence cluster, or doing a Helm upgrade, which results in a rolling upgrade of the Coherence cluster, this could take a lot longer than the default timeout we used of 5 minutes.">大規模なCoherenceクラスタをインストールする場合、またはHelmのアップグレードを実行した場合、Coherenceクラスタのローリング・アップグレードが発生すると、使用するデフォルトのタイムアウトよりも5分かかることがあります。</span> <span class="merged" id="all.4UOmGb.spl2" title="原文 : We can alter the timeout and re-try interval using --set arguments."><code>--set</code>引数を使用して、タイムアウトおよび再試行間隔を変更できます。</span> </p>

<markup
lang="bash"

>helm  install test ./chart --set operator.timeout=20m --set operator.interval=1m</markup>

<p><span class="merged" id="all.4WUdvb" title="原文 : In the above command the timeout is now 20 minutes and the status check will re-try every one minute.">上のコマンドでは、タイムアウトは20分になり、ステータス・チェックは1分ごとに再試行されます。</span></p>

</div>

<h4 id="_skipping_hooks"><span class="merged" id="all.31YIJD" title="原文 : Skipping Hooks">フックのスキップ</span></h4>
<div class="section">
<p><span class="merged" id="all.2XKL4s.spl1" title="原文 : Sometime we might want to install the chart and not wait for everything to be ready.">チャートを設置し、準備が完了するまで待つ必要がない場合があります。</span> <span class="merged" id="all.2XKL4s.spl2" title="原文 : We can use the Helm --no-hooks argument to skip hook execution.">Helmの<code>--no-hooks</code>引数を使用して、フックの実行をスキップできます。</span> </p>

<markup
lang="bash"

>helm  install test ./chart --no-hooks</markup>

<p><span class="merged" id="all.1IWTyb" title="原文 : Now the Helm install command will return as soon as the Coherence resource has been created.">これで、Helmインストール・コマンドは、Coherenceリソースが作成されるとすぐに返されます。</span></p>

</div>

<h4 id="_other_helm_hooks"><span class="merged" id="all.3tiFzK" title="原文 : Other Helm Hooks">その他のHelmフック</span></h4>
<div class="section">
<p><span class="merged" id="all.62SU9.spl1" title="原文 : We saw above how a custom post-install and post-update hook could be used to work aroud the restrictions of Helm’s --wait argument.">Helmの<code>--wait</code>引数の制限を補うために、カスタムの事後インストールおよび事後更新フックを使用する方法が上に示されました。</span> <span class="merged" id="all.62SU9.spl2" title="原文 : Of course there are other hooks available in Helm that the method above could be used in.">もちろん、Helmでは前述のメソッドを使用できる他のフックがあります。</span> <span class="merged" id="all.62SU9.spl3" title="原文 : For example, say I had a front end application to be deployed using a Helm chart, but I did not want Helm to start the deployment until the Coherence back-end was ready, I could use the same method above in a pre-install hook.">たとえば、Helmチャートを使用してフロント・エンド・アプリケーションをデプロイしたとしますが、Coherenceバックエンドの準備が完了するまでHelmでデプロイメントを開始したくない場合、インストール前フックで同じメソッドを使用できます。</span> </p>

</div>
</div>
</div>
</doc-view>
