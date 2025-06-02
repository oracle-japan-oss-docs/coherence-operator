<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_polyglot_client_demo"><span class="merged" id="all.1Iaxqz" title="原文 : Polyglot Client Demo">多言語クライアント・デモ</span></h2>
<div class="section">
<p><span class="merged" id="all.3XStq.spl1" title="原文 : This example shows how to deploy simple Python, JavaScript or Go applications that connect to Coherence running in Kubernetes.">この例では、Kubernetesで実行されているCoherenceに接続する単純なPython、JavaScriptまたはGoアプリケーションをデプロイする方法を示します。</span> <span class="merged" id="all.3XStq.spl2" title="原文 : The Coherence Operator is used to deploy a Coherence cluster and the applications connect via gRPC using the gRPC proxy.">Coherence Operatorは、Coherenceクラスタをデプロイするために使用され、アプリケーションはgRPCプロキシを使用してgRPCを介して接続します。</span> </p>

<p><span class="merged" id="all.2u0EKq" title="原文 : A basic REST serve is written in each language which exposes the following endpoints to create, get, update or remove JSON people objects in the Coherence cluster.">基本的なRESTサービスは、CoherenceクラスタでJSON peopleオブジェクトを作成、取得、更新または削除するために次のエンドポイントを公開する各言語で記述されます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3cMETP" title="原文 : POST /api/people - create a person"><code>POST /api/people</code> - 個人の作成</span></p>

</li>
<li>
<p><span class="merged" id="all.2AVBGD" title="原文 : GET /api/people - return all people"><code>GET /api/people</code> - すべての人を戻す</span></p>

</li>
<li>
<p><span class="merged" id="all.3DI0q4" title="原文 : GET /api/people/{id} - return a single person"><code>GET /api/people/{id}</code> - 1個人を戻す</span></p>

</li>
<li>
<p><span class="merged" id="all.3JRrZR" title="原文 : DELETE /api/people/{id} - delete a person"><code>DELETE /api/people/{id}</code> - 個人の削除</span></p>

</li>
</ul>
<p><span class="merged" id="all.4XLXoc" title="原文 : The example shows how to connect to the Coherence cluster from any of the clients via two different methods:">この例では、2つの異なるメソッドで任意のクライアントからCoherenceクラスタに接続するメソッドを示します:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2dggLj" title="原文 : From an application deployed with Kubernetes (purple processes shown below, accessed via 1. REST Client)">Kubernetesを使用してデプロイされたアプリケーションから(次に示す紫色のプロセス、<code>1. REST Client</code>を介してアクセス)</span>

</li>
<li>
<span class="merged" id="all.3PuSNp" title="原文 : From an application outside of Kubernetes using simple port-forward or LBR (yellow gRPC Service, accessed via 2. Python, JS or Go Client)">単純なポート・フォワードまたはLBR (<code>2. Python, JS or Go Client</code>を介してアクセスされる黄色のgRPCサービス)を使用して、Kubernetes以外のアプリケーションから</span>

</li>
</ol>
<p><span class="merged" id="all.22XmUw" title="原文 : The diagram below outlines the example components."><strong>次の図は、コンポーネントの例の概要を示しています。</strong></span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.11KAUw" title="原文 : We use port-forward for this example, but you would normally expose the services via load balancers.">この例では<code>port-forward</code>を使用しますが、通常はロード・バランサを介してサービスを公開します。</span></p>
</div>


<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="サービス詳細" src="./images/images/example-overview.png" width="100%" /> </v-card-text> </v-card>

<p><span class="merged" id="all.1KNR16" title="原文 : See below for information on the Coherence langauge clients used:">使用されるCoherence言語クライアントの詳細は、次を参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2S26n3" title="原文 : Coherence Python Client"><a href="https://github.com/oracle/coherence-py-client" id="" target="_blank" >Coherence Pythonクライアント</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1a9keG" title="原文 : Coherence JavaScript Client"><a href="https://github.com/oracle/coherence-js-client" id="" target="_blank" >Coherence JavaScriptクライアント</a></span></p>

</li>
<li>
<p><span class="merged" id="all.10tXxR" title="原文 : Coherence Go Client"><a href="https://github.com/oracle/coherence-go-client" id="" target="_blank" >Coherence Goクライアント</a></span></p>

</li>
</ul>
</div>

<h2 id="_what_the_example_will_cover"><span class="merged" id="all.3jBruu" title="原文 : What the Example Will Cover">例の内容</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1wJHmB.1" title="原文 : Prerequisites"><router-link @click.native="this.scrollFix('#pre')" to="#pre">事前設定</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2yJom6" title="原文 : Clone the GitHub repository"><router-link @click.native="this.scrollFix('#pre-1')" to="#pre-1">GitHubリポジトリのクローニング</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.UOjea" title="原文 : Create the coherence-demo namespace"><router-link @click.native="this.scrollFix('#pre-2')" to="#pre-2">coherence-demoネームスペースの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.37i4lT" title="原文 : Install the Coherence Operator"><router-link @click.native="this.scrollFix('#pre-3')" to="#pre-3">Coherence Operatorのインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.434YdM" title="原文 : Download additional software (Optional)"><router-link @click.native="this.scrollFix('#pre-4')" to="#pre-4">追加ソフトウェアのダウンロード(オプション)</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.1JGmH9" title="原文 : Deploy the example"><router-link @click.native="this.scrollFix('#deploy')" to="#deploy">例のデプロイ</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1YTJ2v" title="原文 : Examine the Docker files"><router-link @click.native="this.scrollFix('#dep-1')" to="#dep-1">Dockerファイルの確認</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.nMYwl" title="原文 : Build the example images"><router-link @click.native="this.scrollFix('#dep-2')" to="#dep-2">サンプル・イメージの作成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2FIR9O" title="原文 : Push images"><router-link @click.native="this.scrollFix('#dep-3')" to="#dep-3">イメージのプッシュ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3BNaeJ" title="原文 : Deploy the Coherence Cluster"><router-link @click.native="this.scrollFix('#dep-4')" to="#dep-4">Coherenceクラスタのデプロイ</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.QwVso" title="原文 : Run the example"><router-link @click.native="this.scrollFix('#run-example')" to="#run-example">例の実行</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1Y0IEp" title="原文 : Run from within Kubernetes"><router-link @click.native="this.scrollFix('#run-1')" to="#run-1">Kubernetes内から実行</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3KK0UT" title="原文 : View the cache information"><router-link @click.native="this.scrollFix('#run-2')" to="#run-2">キャッシュ情報の表示</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3J6Jig" title="原文 : Run locally using native clients"><router-link @click.native="this.scrollFix('#run-3')" to="#run-3">ネイティブ・クライアントを使用してローカルで実行</router-link></span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.2popUQ" title="原文 : Cleaning up"><router-link @click.native="this.scrollFix('#cleanup')" to="#cleanup">クリーンアップ</router-link></span></p>

</li>
</ul>

<h3 id="pre"><span class="merged" id="all.3nVCHC"  title="原文: PreRequisites">PreRequisites</span></h3>
<div class="section">
<p><span class="merged" id="all.1Ocrc5"  title="原文:: You must have:">OCI CLIを:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2HCwE.spl1" title="原文 : Docker running on your system.">システムで実行されているDocker。</span> <span class="merged" id="all.2HCwE.spl2" title="原文 : Either Docker Desktop or Rancher will work">Docker DesktopまたはRancherが動作</span> 

</li>
<li>
<span class="merged" id="all.3I4kex.spl1" title="原文 : Access to a Kubernetes cluster.">Kubernetesクラスタへのアクセス。</span> <span class="merged" id="all.3I4kex.spl2" title="原文 : You can use kind to create a local cluster on Mac."><code>kind</code>を使用して、Macにローカル・クラスタを作成できます。</span> <span class="merged" id="all.3I4kex.spl3" title="原文 : See Kind Documentation"><a href="https://kind.sigs.k8s.io/" id="" target="_blank" >「種類ドキュメント」</a>を参照</span> 

</li>
<li>
<span class="merged" id="all.488SH0" title="原文 : kubectl executable - See Kubernetes Documentation"><code>kubectl</code>実行可能ファイル - <a href="https://kubernetes.io/docs/tasks/tools/" id="" target="_blank" >「Kubernetesのドキュメント」</a>を参照</span>

</li>
</ol>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.27NX5x" title="原文 : We have Makefile targets that will make the building and running of the example easier.">この例の構築と実行を容易にする<code>Makefile</code>ターゲットがあります。</span></p>
</div>

<h4 id="pre-1"><span class="merged" id="all.1EfVIm.1" title="原文 : Clone the Coherence Operator Repository:">Coherence Operatorリポジトリをクローニングします:</span></h4>
<div class="section">
<p><span class="merged" id="all.3xVBeR.1" title="原文 : To build the examples, you first need to clone the Operator GitHub repository to your development machine.">例をビルドするには、最初にオペレータGitHubリポジトリを開発マシンにクローニングする必要があります。</span></p>

<markup
lang="bash"

>git clone https://github.com/oracle/coherence-operator

cd coherence-operator/examples/910_polyglot_demo</markup>

</div>

<h4 id="pre-2"><span class="merged" id="all.RUJGu" title="原文 : Create the coherence-demo Namespace">coherence-demoネームスペースの作成</span></h4>
<div class="section">
<markup
lang="bash"

>make create-namespace</markup>

<markup
lang="bash"
title="Output"
>kubectl create namespace coherence-demo || true
namespace/coherence-demo created</markup>

</div>

<h4 id="pre-3"><span class="merged" id="all.LO8kI.3" title="原文 : Install the Coherence Operator">Coherence Operatorのインストール</span></h4>
<div class="section">
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.1ocleD.spl1" title="原文 : The Coherence Operator is installed into a namespace called coherence.">Coherence Operatorは、<code>coherence</code>というネームスペースにインストールされます。</span> <span class="merged" id="all.1ocleD.spl2" title="原文 : To change this see the documentation below.">これを変更するには、次のドキュメントを参照してください。</span> </p>
</div>
<markup
lang="bash"

>make deploy-operator</markup>

<markup
lang="bash"
title="Output"
>kubectl apply -f https://github.com/oracle/coherence-operator/releases/download/v3.4.3/coherence-operator.yaml

namespace/coherence created
customresourcedefinition.apiextensions.k8s.io/coherence.coherence.oracle.com created
...
service/coherence-operator-webhook created
deployment.apps/coherence-operator-controller-manager created</markup>

<p><span class="merged" id="all.4ELC8A" title="原文 : You can check to see the Coherence Operator in running by issuing the following command, which will wait for it to be available.">実行中のCoherence Operatorを確認するには、次のコマンドを発行します。このコマンドは、Coherence Operatorが使用可能になるまで待機します。</span></p>

<markup
lang="bash"

>kubectl -n coherence wait --for=condition=available deployment/coherence-operator-controller-manager --timeout 120s</markup>

<p><span class="merged" id="all.Vl6c8" title="原文 : When you see the following message, you can continue.">次のメッセージが表示されたら、続行できます。</span></p>

<markup
lang="bash"
title="Output"
>deployment.apps/coherence-operator-controller-manager condition met</markup>

<p><span class="merged" id="all.4ESH9E" title="原文 : See the Installation Guide for more information about installing the Coherence Operator.">Coherence Operatorのインストールの詳細は、<router-link to="/docs/installation/001_installation">「インストール・ガイド」</router-link>を参照してください。</span></p>

</div>

<h4 id="pre-4"><span class="merged" id="all.ptcnY" title="原文 : Download Additional Software (Optional)">追加ソフトウェアのダウンロード(オプション)</span></h4>
<div class="section">
<p><span class="merged" id="all.BLWck" title="原文 : If you are planning on running the clients locally, E.g. not just from within the Kuberenetes cluster, and connect to the cluster, you must install the following software for your operating system.">クライアントをローカルで実行する場合(例: <strong>Kuberenetesクラスタ内からだけでなく</strong>)、クラスタに接続する場合は、オペレーティング・システム用に次のソフトウェアをインストールする必要があります。</span></p>

<p><span class="merged" id="all.1MJOM6" title="原文 : Otherwise, you can continue to the next step.">それ以外の場合は、次のステップに進むことができます。</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2PLRGv" title="原文 : Python 3.9 or Later - https://www.python.org/downloads/">Python 3.9以上 - <a href="https://www.python.org/downloads/" id="" target="_blank" >https://www.python.org/downloads/</a></span>

</li>
<li>
<span class="merged" id="all.S0apl" title="原文 : Node 18.15.x or later and NPM 9.x or later - https://nodejs.org/en/download">ノード18.15.x以降およびNPM 9.x以降 - <a href="https://nodejs.org/en/download" id="" target="_blank" >https://nodejs.org/en/download</a></span>

</li>
<li>
<span class="merged" id="all.24tUF0" title="原文 : Go 1.23 or later - https://go.dev/doc/install">Go 1.23以降 - <a href="https://go.dev/doc/install" id="" target="_blank" >https://go.dev/doc/install</a></span>

</li>
</ol>
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.LHh8K" title="原文 : If you are just going to run the example within your Kubernetes cluster then you do not need the software.">Kubernetesクラスタ内で例を実行するのみの場合は、ソフトウェアは必要ありません。</span></p>
</div>
</div>
</div>

<h3 id="deploy"><span class="merged" id="all.lMA9p.1" title="原文 : Deploy the Example">例のデプロイ</span></h3>
<div class="section">

<h4 id="dep-1"><span class="merged" id="all.1714RY" title="原文 : Examine the Docker Files">Dockerファイルの確認</span></h4>
<div class="section">
<p><span class="merged" id="all.1F2aTa.spl1" title="原文 : Each of the clients has a Dockerfile to build for the specific language client.">各クライアントには、特定の言語クライアント用に構築する<code>Dockerfile</code>があります。</span> <span class="merged" id="all.1F2aTa.spl2" title="原文 : You can inspect each of them below:">以下でそれぞれ調べることができます:</span> </p>

<p><span class="merged" id="all.4euTLJ" title="原文 : Python Client"><strong>Pythonクライアント</strong></span></p>

<markup
lang="bash"

>FROM python:3.11-slim

RUN addgroup --system appgroup &amp;&amp; adduser --system --ingroup appgroup appuser

WORKDIR /app
COPY --chown=appuser:appgroup main.py .
RUN chmod 444 main.py

RUN pip install --no-cache-dir coherence-client==2.0.0 Quart

RUN chown -R appuser:appgroup /app

USER appuser

CMD ["python3", "./main.py"]</markup>

<p><span class="merged" id="all.16zoH0" title="原文 : JavScript Client"><strong>JavScriptクライアント</strong></span></p>

<markup
lang="bash"

>FROM node:18-alpine

RUN addgroup -S appgroup &amp;&amp; adduser -S appuser -G appgroup

WORKDIR /usr/src/app

COPY --chown=appuser:appgroup package*.json ./
COPY --chown=appuser:appgroup main.js ./

RUN chmod 444 package*.json main.js

RUN npm install --ignore-scripts
RUN chown -R appuser:appgroup /usr/src/app

USER appuser
EXPOSE 8080

CMD [ "node", "main.js" ]</markup>

<p><span class="merged" id="all.1g7ahg" title="原文 : Go Client"><strong>Goクライアント</strong></span></p>

<markup
lang="bash"

>FROM golang:1.24 as builder

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
COPY main.go ./

ENV APP_USER_UID=1000
ENV APP_USER_GID=1000

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o runner .
RUN chown ${APP_USER_UID}:${APP_USER_GID} /app/runner

FROM scratch

COPY --from=builder /app/runner /files/runner
USER 1000:1000

EXPOSE 8080
ENTRYPOINT ["/files/runner"]
CMD ["-h"]</markup>

</div>

<h4 id="code"><span class="merged" id="all.3tohTm" title="原文 : Examine the Code">コードの確認</span></h4>
<div class="section">
<p><span class="merged" id="all.2UDGoD" title="原文 : You can view the source of each of the language clients here:">各言語クライアントのソースは、ここで確認できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1YHVhf" title="原文 : py/main.py"><a href="https://github.com/oracle/coherence-operator/blob/main/examples/910_polyglot_demo/py/main.py" id="" target="_blank" >py/main.py</a></span></p>

</li>
<li>
<p><span class="merged" id="all.4QQWL2" title="原文 : js/main.js"><a href="https://github.com/oracle/coherence-operator/blob/main/examples/910_polyglot_demo/js/main.js" id="" target="_blank" >js/main.js</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2RY8Dv" title="原文 : go/main.go"><a href="https://github.com/oracle/coherence-operator/blob/main/examples/910_polyglot_demo/go/main.go" id="" target="_blank" >go/main.go</a></span></p>

</li>
</ul>
</div>

<h4 id="dep-2"><span class="merged" id="all.4CSi07" title="原文 : Build the Example images">サンプル・イメージの構築</span></h4>
<div class="section">
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.3a9gQS" title="原文 : If you are deploying to a remote cluster or deploying to a different architecture in Kubernetes, please read the Important Notes below before you build.">リモート・クラスタにデプロイする場合、またはKubernetes内の別のアーキテクチャにデプロイする場合は、ビルドする前に次の<strong>「重要なノート」</strong>を参照してください。</span></p>
</div>
<p><span class="merged" id="all.20mN3z" title="原文 : Build each of the images using make, or run make create-all-images, as shown below.">次に示すように、makeを使用して各イメージを構築するか、<code>make create-all-images</code>を実行します。</span></p>

<ul class="ulist">
<li>
<p><code>make create-py-image</code></p>

</li>
<li>
<p><code>make create-js-image</code></p>

</li>
<li>
<p><code>make create-go-image</code></p>

</li>
</ul>
<markup
lang="bash"

>make create-all-images</markup>

<markup
lang="bash"
title="Output"
>cd go &amp;&amp; docker buildx build --platform linux/arm64 -t polyglot-client-go:1.0.0 .
[+] Building 27.8s (12/12) FINISHED
....
cd js &amp;&amp; docker buildx build --platform linux/arm64 -t polyglot-client-js:1.0.0 .
[+] Building 4.2s (10/10) FINISHED
...
cd py &amp;&amp; docker buildx build --platform linux/arm64 -t polyglot-client-py:1.0.0 .
[+] Building 3.0s (8/8) FINISHED</markup>

<p><span class="merged" id="all.1NzFhY" title="原文 : You will end up with the following images:">次のイメージが表示されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1a0DQ" title="原文 : polyglot-client-py:1.0.0 - Python Client"><code>polyglot-client-py:1.0.0</code> - Pythonクライアント</span></p>

</li>
<li>
<p><span class="merged" id="all.31zIoo" title="原文 : polyglot-client-js:1.0.0 - JavaScript Client"><code>polyglot-client-js:1.0.0</code> - JavaScriptクライアント</span></p>

</li>
<li>
<p><span class="merged" id="all.3lSc21" title="原文 : polyglot-client-go:1.0.0 - Go Client"><code>polyglot-client-go:1.0.0</code> - Goクライアント</span></p>

</li>
</ul>
<p><span class="merged" id="all.2q2SVE"  title="原文:: Important Notes"><strong>重要なノート</strong></span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2QSk4A" title="原文 : The images are built by default for arm64, you can specify PLATFORM=linux/amd64 before your make commands to change the architecture.">イメージはデフォルトでarm64用に構築され、makeコマンドの前に<code>PLATFORM=linux/amd64</code>を指定してアーキテクチャを変更できます。</span>

</li>
<li>
<span class="merged" id="all.4KLE37" title="原文 : If you need to push the images to a remote repository, you will need to specify the IMAGE_PREFIX=.. before the make commands, e.g.:">イメージをリモート・リポジトリにプッシュする必要がある場合は、makeコマンドの前にIMAGE_PREFIX=..を指定する必要があります。たとえば:</span>
<markup
lang="bash"

>IMAGE_PREFIX=ghcr.io/username/repo/ make create-py-image</markup>

<markup
lang="bash"
title="Output"
>cd py &amp;&amp; docker buildx build --platform linux/arm64 -t ghcr.io/username/repo/polyglot-client-py:1.0.0 .
...</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2pT5MZ.spl1" title="原文 : In this example the image will be ghcr.io/username/repo/polyglot-client-py:1.0.0.">この例では、イメージは<code>ghcr.io/username/repo/polyglot-client-py:1.0.0</code>です。</span> <span class="merged" id="all.2pT5MZ.spl2" title="原文 : You will also need to update the deployment yaml files.">デプロイメントyamlファイルも更新する必要があります。</span> </p>
</div>
</li>
</ol>
</div>

<h4 id="dep-3"><span class="merged" id="all.1TdU65" title="原文 : Push Images">イメージのプッシュ</span></h4>
<div class="section">
<p><span class="merged" id="all.cojM" title="原文 : Choose one of the following methods, depending upon if you are using a local kind cluster or not.">ローカルの<strong>kind</strong>クラスタを使用しているかどうかに応じて、次のいずれかのメソッドを選択します。</span></p>

<p><span class="merged" id="all.1FNM8j" title="原文 : You are running a local cluster using kind"><strong>kindを使用してローカル・クラスタを実行しています</strong></span></p>

<p><span class="merged" id="all.2VdYoF" title="原文 : Run the following to load the images you just created to the cluster.">次を実行して、作成したイメージをクラスタにロードします。</span></p>

<markup
lang="bash"

>make kind-load-images</markup>

<p><span class="merged" id="all.3ZEPeH" title="原文 : You need to push to a remote repository"><strong>リモート・リポジトリにプッシュする必要があります</strong></span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3I2vEN.spl1" title="原文 : Push the images to your local container repository.">イメージをローカル・コンテナ・リポジトリにプッシュします。</span> <span class="merged" id="all.3I2vEN.spl2" title="原文 : E.g. for the example above:">例:前述の例:</span> 
<markup
lang="bash"

>docker push ghcr.io/username/repo/polyglot-client-py:1.0.0
docker push ghcr.io/username/repo/polyglot-client-js:1.0.0
docker push ghcr.io/username/repo/polyglot-client-go:1.0.0</markup>

</li>
<li>
<span class="merged" id="all.nEuvn" title="原文 : Modify the following files to change the image name accordingly in the following deployment yaml files:">次のファイルを変更して、次のデプロイメントyamlファイルでイメージ名を適宜変更します:</span>
<ul class="ulist">
<li>
<p><span class="merged" id="all.Tzkqt" title="原文 : py-client.yaml"><a href="https://github.com/oracle/coherence-operator/blob/main/examples/910_polyglot_demo/yaml/py-client.yaml" id="" target="_blank" >py-client.yaml</a></span></p>

</li>
<li>
<p><span class="merged" id="all.PoW1q" title="原文 : js-client.yaml"><a href="https://github.com/oracle/coherence-operator/blob/main/examples/910_polyglot_demo/yaml/js-client.yaml" id="" target="_blank" >js-client.yaml</a></span></p>

</li>
<li>
<p><span class="merged" id="all.11zyhu" title="原文 : go-client.yaml"><a href="https://github.com/oracle/coherence-operator/blob/main/examples/910_polyglot_demo/yaml/go-client.yaml" id="" target="_blank" >go-client.yaml</a></span></p>

</li>
</ul>
</li>
<li>
<span class="merged" id="all.2ueAhD" title="原文 : Create a secret if your repository is not public:">リポジトリがパブリックでない場合はシークレットを作成します:</span>
<p><span class="merged" id="all.XreoY" title="原文 : If the repository you are pushing to is not public, you will need to create a pull secret, and add this to the deployment yaml for each client.">プッシュするリポジトリがパブリックでない場合は、プル・シークレットを作成し、これを各クライアントのデプロイメントyamlに追加する必要があります。</span></p>

<markup
lang="bash"

>kubectl create secret docker-registry my-pull-secret \
    --docker-server=ghcr.io \
    --docker-username="&lt;username&gt;" --docker-password="&lt;password&gt;" \
    --docker-email="&lt;email&gt;" -n coherence-demo</markup>

<p><span class="merged" id="all.40RsCH.spl1" title="原文 : In each of the client deployment files, above add imagePullSecrets after the image.">前述の各クライアント・デプロイメント・ファイルで、イメージの後に<code>imagePullSecrets</code>を追加します。</span> <span class="merged" id="all.40RsCH.spl2" title="原文 : For example in the go-client:">たとえば、go-clientの場合:</span> </p>

<markup
lang="yaml"

>        - name: go-client
          image: ghcr.io/username/repo/polyglot-client-go:1.0.0
          imagePullPolicy: IfNotPresent
          imagePullSecrets:
            - name: my-pull-secret</markup>

</li>
</ol>
</div>

<h4 id="dep-4"><span class="merged" id="all.48fmlb" title="原文 : 4. Deploy the Coherence Cluster">4. Coherenceクラスタのデプロイ</span></h4>
<div class="section">
<p><span class="merged" id="all.2ybwtW" title="原文 : The following deployment file is used to deploy a 3 node Coherence cluster to your Kubernetes cluster.">次のデプロイメント・ファイルは、3ノードのCoherenceクラスタをKubernetesクラスタにデプロイするために使用します。</span></p>

<markup
lang="bash"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: demo-cluster  <span class="conum" data-value="1" />
spec:
  jvm:
    memory:
      initialHeapSize: 1g
      maxHeapSize: 1g
  replicas: 3 <span class="conum" data-value="2" />
  image: "ghcr.io/oracle/coherence-ce:14.1.2-0-1-java17" <span class="conum" data-value="3" />
  coherence:
    management: <span class="conum" data-value="4" />
      enabled: true
  ports:
    - name: grpc <span class="conum" data-value="5" />
      port: 1408
    - name: management</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.5SZbt" title="原文 : the cluster name">クラスタ名</span></li>
<li data-value="2"><span class="merged" id="all.3m0DKz" title="原文 : the number of replicas to create">作成するレプリカの数</span></li>
<li data-value="3"><span class="merged" id="all.2Kjmus" title="原文 : Image to use to start Coherence">Coherenceの起動に使用するイメージ</span></li>
<li data-value="4"><span class="merged" id="all.31i2WT"  title="原文:: Enable management">管理の有効化</span></li>
<li data-value="5"><span class="merged" id="all.EvadN" title="原文 : Enable gRPC port">gRPCポートの有効化</span></li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1KumWE" title="原文 : When we deploy this yaml, each of the ports will become a service that we can use to connect to.">このyamlをデプロイすると、各ポートが接続に使用できるサービスになります。</span></p>
</div>
<p><span class="merged" id="all.jzaU2" title="原文 : Deploy the Coherence Cluster using the following:">次を使用して、Coherenceクラスタをデプロイします:</span></p>

<markup
lang="bash"

>make deploy-coherence</markup>

<markup
lang="bash"
title="Output"
>kubectl -n coherence-demo apply -f yaml/coherence-cluster.yaml
coherence.coherence.oracle.com/demo-cluster created
sleep 5
kubectl -n coherence-demo get pods
NAME             READY   STATUS    RESTARTS   AGE
demo-cluster-0   0/1     Running   0          5s
demo-cluster-1   0/1     Running   0          5s
demo-cluster-2   0/1     Running   0          5s</markup>

<p><span class="merged" id="all.19mAVD" title="原文 : Issue the following command to wait until the Coherence cluster is ready.">次のコマンドを発行して、Coherenceクラスタの準備ができるまで待機します。</span></p>

<markup
lang="bash"

>kubectl -n coherence-demo wait --for=condition=ready coherence/demo-cluster --timeout 120s
coherence.coherence.oracle.com/demo-cluster condition met</markup>

</div>
</div>

<h3 id="run-example"><span class="merged" id="all.4Amwol" title="原文 : Run the example">例の実行</span></h3>
<div class="section">
<p><span class="merged" id="all.AdoJf" title="原文 : Choose one of the methods below to demo the application.">次のいずれかのメソッドを選択して、アプリケーションをデモします。</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1Y0IEp.1" title="原文 : Run from within Kubernetes"><router-link @click.native="this.scrollFix('#run-1')" to="#run-1">Kubernetes内から実行</router-link></span>

</li>
<li>
<span class="merged" id="all.3J6Jig.1" title="原文 : Run locally using native clients"><router-link @click.native="this.scrollFix('#run-3')" to="#run-3">ネイティブ・クライアントを使用してローカルで実行</router-link></span>

</li>
</ol>

<h4 id="run-1"><span class="merged" id="all.4JowMc" title="原文 : Run from within Kubernetes">Kubernetes内から実行</span></h4>
<div class="section">
<p><span class="merged" id="all.16mII7" title="原文 : In this section, we will deploy all the client pods to Kubernetes, and access the REST endpoints via their services, using the port-forward command.">この項では、すべてのクライアント・ポッドをKubernetesにデプロイし、<code>port-forward</code>コマンドを使用してそのサービスを介してRESTエンドポイントにアクセスします。</span></p>

<p><span class="merged" id="all.4HghiN.spl1" title="原文 : See 1."><strong>1を参照してください。</span> <span class="merged" id="all.4HghiN.spl2" title="原文 : REST Client on the right of the diagram below:">次の図の右側にあるREST Client</strong>:</span> </p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="サービス詳細" src="./images/images/example-overview.png" width="100%" /> </v-card-text> </v-card>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1PnHJT" title="原文 : We are accessing the application HTTP endpoint via port-forward, but the client pods within Kubernetes are directly accessing cluster within Kubernetes.">アプリケーションHTTPエンドポイントにはポート・フォワードを介してアクセスしていますが、Kubernetes内のクライアント・ポッドはKubernetes内のクラスタに直接アクセスしています。</span></p>
</div>
<p><span class="merged" id="all.1gCBZk" title="原文 : When we deploy the clients, the yaml used is shown below:">クライアントをデプロイすると、使用されるyamlは次のようになります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3RGfgE" title="原文 : Python Client"><a href="https://github.com/oracle/coherence-operator/blob/main/examples/910_polyglot_demo/yaml/py-client.yaml" id="" target="_blank" >Pythonクライアント</a></span></p>

</li>
<li>
<p><span class="merged" id="all.264QVD" title="原文 : JavaScript Client"><a href="https://github.com/oracle/coherence-operator/blob/main/examples/910_polyglot_demo/yaml/js-client.yaml" id="" target="_blank" >JavaScriptクライアント</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1QXgi3" title="原文 : Go Client"><a href="https://github.com/oracle/coherence-operator/blob/main/examples/910_polyglot_demo/yaml/go-client.yaml" id="" target="_blank" >Goクライアント</a></span></p>

</li>
</ul>
<p><span class="merged" id="all.48ojbJ" title="原文 : By default, the Python, JavaScript and Go clients connect to localhost:1408 on startup, but you can specify the gRPC host and port to connect to in the code or use the COHERENCE_SERVER_ADDRESS environment variable to specify this which is more flexible.">デフォルトでは、Python、JavaScriptおよびGoクライアントは起動時に<code>localhost:1408</code>に接続しますが、コードで接続するgRPCホストおよびポートを指定することも、<code>COHERENCE_SERVER_ADDRESS</code>環境変数を使用してより柔軟にこれを指定することもできます。</span></p>

<p><span class="merged" id="all.2F47oM" title="原文 : Each of the clients, (Python shown below for example), have this variable set to demo-cluster-grpc:1408 where demo-cluster-grpc is the service for the grpc port created when we deployed the Coherence cluster.">各クライアント(たとえば、次に示すPython)では、この変数を<code>demo-cluster-grpc:1408</code>に設定します。<code>demo-cluster-grpc</code>は、Coherenceクラスタをデプロイしたときに作成されるgrpcポートのサービスです。</span></p>

<markup
lang="yaml"

>- name: py-client
  image: polyglot-client-py:1.0.0
  imagePullPolicy: IfNotPresent
  env:
    - name: COHERENCE_SERVER_ADDRESS
      value: "demo-cluster-grpc:1408"
    - name: COHERENCE_READY_TIMEOUT
      value: "60000"
  resources:
    requests:
      memory: "512Mi"
    limits:
      memory: "512Mi"
  ports:
    - containerPort: 8080
  securityContext:
    runAsNonRoot: true
    runAsUser: 10001
    capabilities:
      drop:
        - all
    readOnlyRootFilesystem: true</markup>

<p><span class="merged" id="all.4Wac6i" title="原文 : Deploy the clients"><strong>クライアントのデプロイ</strong></span></p>

<p><span class="merged" id="all.3hx3xl.spl1" title="原文 : Firstly, run the following to deploy all the clients.">まず、次を実行してすべてのクライアントをデプロイします。</span> <span class="merged" id="all.3hx3xl.spl2" title="原文 : This yaml also deploys a service from which you can connect to the client.">また、このyamlは、クライアントに接続できるサービスをデプロイします。</span> </p>

<markup
lang="bash"

>make deploy-all-clients</markup>

<markup
lang="bash"
title="Output"
>kubectl -n coherence-demo apply -f yaml/go-client.yaml
service/go-client created
deployment.apps/go-client created
kubectl -n coherence-demo apply -f yaml/js-client.yaml
service/js-client created
deployment.apps/js-client created
kubectl -n coherence-demo apply -f yaml/py-client.yaml
service/py-client created
deployment.apps/py-client created</markup>

<p><span class="merged" id="all.2P8EVJ" title="原文 : Issue the following to show the deployments and services.">デプロイメントおよびサービスを表示するには、次を発行します。</span></p>

<markup
lang="bash"

>kubectl get deployments -n coherence-demo</markup>

<markup
lang="bash"
title="Output"
>NAME        READY   UP-TO-DATE   AVAILABLE   AGE
go-client   1/1     1            1           3s
js-client   1/1     1            1           3s
py-client   1/1     1            1           3s</markup>

<p><span class="merged" id="all.2m5fZO" title="原文 : Port forward to access the HTTP endpoint"><strong>HTTPエンドポイントにアクセスするためのポート転送</strong></span></p>

<p><span class="merged" id="all.4ffrJO" title="原文 : To port-forward the clients we will first need to view the services:">クライアントをポート・フォワードするには、最初にサービスを表示する必要があります:</span></p>

<markup
lang="bash"

>kubectl get services -n coherence-demo</markup>

<markup
lang="bash"
title="Output"
>NAME                      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                                               AGE
demo-cluster-grpc         ClusterIP   10.96.200.57    &lt;none&gt;        1408/TCP                                              8m2s
demo-cluster-management   ClusterIP   10.96.46.69     &lt;none&gt;        30000/TCP                                             8m2s
demo-cluster-sts          ClusterIP   None            &lt;none&gt;        7/TCP,7575/TCP,7574/TCP,6676/TCP,1408/TCP,30000/TCP   8m2s
demo-cluster-wka          ClusterIP   None            &lt;none&gt;        7/TCP,7575/TCP,7574/TCP,6676/TCP                      8m2s
go-client-http            ClusterIP   10.96.249.42    &lt;none&gt;        8080/TCP                                              32s
js-client-http            ClusterIP   10.96.114.88    &lt;none&gt;        8080/TCP                                              31s
py-client-http            ClusterIP   10.96.196.163   &lt;none&gt;        8080/TCP                                              31s</markup>

<p><span class="merged" id="all.1qKssH" title="原文 : The services we are interested in are the go-client-http, js-client-http or py-client-http.">関心のあるサービスは、<code>go-client-http</code>、<code>js-client-http</code>または<code>py-client-http</code>です。</span></p>

<p><span class="merged" id="all.2tX2wr.spl1" title="原文 : As all the clients expose the same API, You can choose any of the clients to port-forward to.">すべてのクライアントが同一のAPIを公開するように、ポート転送先の任意のクライアントを選択できます。</span> <span class="merged" id="all.2tX2wr.spl2" title="原文 : For this example will choose the JavaScript client.">この例では、JavaScriptクライアントを選択します。</span> </p>

<markup
lang="bash"

>kubectl port-forward -n coherence-demo svc/js-client-http 8080:8080</markup>

<markup
lang="bash"
title="Output"
>Forwarding from 127.0.0.1:8080 -&gt; 8080
Forwarding from [::1]:8080 -&gt; 8080</markup>

<p id="rest-endpoints"><span class="merged" id="all.48kFjb" title="原文 : Exercise the REST endpoints"><strong>RESTエンドポイントの演習</strong></span></p>

<p><span class="merged" id="all.4Qfln8" title="原文 : Use the following commands to work with the REST endpoints.">RESTエンドポイントを操作するには、次のコマンドを使用します。</span></p>

<p><span class="merged" id="all.2OgrUU" title="原文 : Create two People"><strong>2ユーザーの作成</strong></span></p>

<markup
lang="bash"

>curl -X POST -H 'Content-Type: application/json' http://localhost:8080/api/people -d '{"id": 1,"name":"Tim", "age": 25}'</markup>

<markup
lang="bash"

>curl -X POST -H 'Content-Type: application/json' http://localhost:8080/api/people -d '{"id": 2,"name":"John", "age": 35}'</markup>

<p><span class="merged" id="all.1fVAX4" title="原文 : List the people in the cache"><strong>キャッシュ内のユーザーのリスト</strong></span></p>

<markup
lang="bash"

>curl http://localhost:8080/api/people</markup>

<markup
lang="bash"
title="Output"
>[{"id":1,"name":"Tim","age":25},{"id":2,"name":"John","age":35}]</markup>

<p><span class="merged" id="all.39MPbm" title="原文 : Get a single Person"><strong>1個人の取得</strong></span></p>

<markup
lang="bash"

>curl http://localhost:8080/api/people/1</markup>

<markup
lang="bash"
title="Output"
>{"id":1,"name":"Tim","age":25}</markup>

<p><span class="merged" id="all.4GxMk" title="原文 : Remove a Person"><strong>個人の削除</strong></span></p>

<markup
lang="bash"

>curl -X DELETE http://localhost:8080/api/people/1</markup>

<markup
lang="bash"
title="Output"
>OK</markup>

<p><span class="merged" id="all.9Vy6f" title="原文 : Try to retrieve the deleted person"><strong>削除された個人の取得を試行</strong></span></p>

<markup
lang="bash"

>curl http://localhost:8080/api/people/1</markup>

<markup
lang="bash"
title="Output"
>Not Found</markup>

</div>

<h4 id="run-2"><span class="merged" id="all.hRMZq" title="原文 : View the cache information">キャッシュ情報の表示</span></h4>
<div class="section">
<p><span class="merged" id="all.4gKprf" title="原文 : You can use the Coherence CLI to view cluster and cache information."><a href="https://github.com/oracle/coherence-cli" id="" target="_blank" >Coherence CLI</a>を使用して、クラスタおよびキャッシュ情報を表示できます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.48SznU" title="原文 : The Coherence CLI is automatically bundled with the Coherence Operator and can be accessed via kuebctl exec.">Coherence CLIには、Coherence Operatorが自動的にバンドルされ、<code>kuebctl exec</code>を介してアクセスできます。</span></p>
</div>
<p><span class="merged" id="all.LtpCG" title="原文 : Display the cluster members"><strong>クラスタ・メンバーの表示</strong></span></p>

<p><span class="merged" id="all.9GF1d" title="原文 : Use the following to show the cluster members:">クラスタ・メンバーを表示するには、次を使用します:</span></p>

<markup
lang="bash"

>kubectl exec demo-cluster-0 -c coherence -n coherence-demo -- /coherence-operator/utils/cohctl get members</markup>

<markup
lang="bash"
title="Output"
>Total cluster members: 3
Storage enabled count: 3
Departure count:       0

Cluster Heap - Total: 8,964 MB Used: 150 MB Available: 8,814 MB (98.3%)
Storage Heap - Total: 8,964 MB Used: 150 MB Available: 8,814 MB (98.3%)

NODE ID  ADDRESS                                          PORT  PROCESS  MEMBER          ROLE          STORAGE  MAX HEAP  USED HEAP  AVAIL HEAP
      1  demo-cluster-wka.coherence-demo.svc/10.244.0.31  7575       56  demo-cluster-0  demo-cluster  true     2,988 MB      45 MB    2,943 MB
      2  demo-cluster-wka.coherence-demo.svc/10.244.0.32  7575       57  demo-cluster-2  demo-cluster  true     2,988 MB      36 MB    2,952 MB
      3  demo-cluster-wka.coherence-demo.svc/10.244.0.33  7575       57  demo-cluster-1  demo-cluster  true     2,988 MB      69 MB    2,919 MB</markup>

<p><span class="merged" id="all.3ISxDe" title="原文 : Display the cache information"><strong>キャッシュ情報の表示</strong></span></p>

<p><span class="merged" id="all.21JjbE" title="原文 : Use the following to show the cache information:">キャッシュ情報を表示するには、次を使用します:</span></p>

<markup
lang="bash"

>kubectl exec demo-cluster-0 -c coherence -n coherence-demo -- /coherence-operator/utils/cohctl get caches -o wide</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.CqwIv" title="原文 : You will see other system caches, but you should also see the people cache with one entry.">他のシステム・キャッシュが表示されますが、1つのエントリを含む<code>people</code>キャッシュも表示されます。</span></p>
</div>
<markup
lang="bash"
title="Output"
>Total Caches: 7, Total primary storage: 0 MB

SERVICE            CACHE                 COUNT  SIZE  AVG SIZE    PUTS    GETS  REMOVES  EVICTIONS    HITS   MISSES  HIT PROB
"$SYS:Concurrent"  executor-assignments      0  0 MB         0       0       0        0          0       0        0     0.00%
"$SYS:Concurrent"  executor-executors        2  0 MB     1,248  12,105  12,103        1          0  12,103        0   100.00%
"$SYS:Concurrent"  executor-tasks            0  0 MB         0       0       0        0          0       0        0     0.00%
"$SYS:Concurrent"  locks-exclusive           0  0 MB         0       0       0        0          0       0        0     0.00%
"$SYS:Concurrent"  locks-read-write          0  0 MB         0       0       0        0          0       0        0     0.00%
"$SYS:Concurrent"  semaphores                0  0 MB         0       0       0        0          0       0        0     0.00%
PartitionedCache   people                    1  0 MB       224       6      29        2          0      26        3    89.66%</markup>

</div>

<h4 id="run-3"><span class="merged" id="all.3JAoy9" title="原文 : Run locally using native clients">ネイティブ・クライアントを使用してローカルで実行</span></h4>
<div class="section">
<p><span class="merged" id="all.dR2u5" title="原文 : Depending upon the client you are wanting to run you need to ensure you have installed the relevant client software as shown in the pre-requisites here.">実行するクライアントに応じて、<router-link @click.native="this.scrollFix('#pre-4')" to="#pre-4">「前提条件」</router-link>に示すように、関連するクライアント・ソフトウェアがインストールされていることを確認する必要があります。</span></p>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.4TwgDY" title="原文 : Ensure you stopped the port-forward from the previous step if you ran this.">これを実行した場合は、前のステップからポート・フォワードを停止したことを確認してください。</span></p>
</div>
<p><span class="merged" id="all.471ZJs.spl1" title="原文 : See 2."><strong>2を参照してください。</span> <span class="merged" id="all.471ZJs.spl2" title="原文 : Python, JS or GO Client on the bottom of the diagram below:">次の図の下部にあるPython、JSまたはGOクライアント</strong>:</span> </p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="サービス詳細" src="./images/images/example-overview.png" width="100%" /> </v-card-text> </v-card>

<p><span class="merged" id="all.fonj0" title="原文 : Run Port forward"><strong>ポート転送の実行</strong></span></p>

<p><span class="merged" id="all.3Gyy2t" title="原文 : Firstly we have to run a port-forward command to port-forward the gRPC 1408 locally to the demo-cluster-grpc:1408 port on the Kubernetes cluster.">まず、<code>port-forward</code>コマンドを実行して、gRPC 1408をローカルにKubernetesクラスタの<code>demo-cluster-grpc:1408</code>ポートに転送する必要があります。</span></p>

<p><span class="merged" id="all.4KKYSK" title="原文 : Typically, if you want to access a service from outside the Kubernetes cluster, you would have a load balancer configured to access this directly, but in example we will use port-forward.">通常、Kubernetesクラスタの外部からサービスにアクセスする場合は、これに直接アクセスするようにロード・バランサが構成されますが、たとえば、<code>port-forward</code>を使用します。</span></p>

<p><span class="merged" id="all.357qSF"  title="原文:: Run the following:">次のコマンドを実行します。</span></p>

<markup
lang="bash"

>kubectl -n coherence-demo port-forward svc/demo-cluster-grpc 1408:1408</markup>

<markup
lang="bash"
title="Output"
>Forwarding from 127.0.0.1:1408 -&gt; 1408
Forwarding from [::1]:1408 -&gt; 1408</markup>

<p><span class="merged" id="all.3YBL81" title="原文 : the DIAGARM…​"><strong>DIAGARM</strong> …​</span></p>

<p><span class="merged" id="all.1ivdsQ" title="原文 : Then follow the instructions to start either of the clients below, which will list on port 8080 locally and connect to the Coherence cluster via gRPC on localhost:1408 which will be port-forwarded.">次に、次の手順に従って、ポート8080でローカルにリストされ、ポート転送されるlocalhost:1408のgRPCを介してCoherenceクラスタに接続する、次のいずれかのクライアントを起動します。</span></p>

<p><span class="merged" id="all.4euTLJ.1" title="原文 : Python Client"><strong>Pythonクライアント</strong></span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.j3etu" title="原文 : We are install a python virtual environment for this example.">この例のpython仮想環境をインストールします。</span></p>
</div>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.te1v5" title="原文 : Change to the py directory"><code>py</code>ディレクトリに移動</span>

</li>
<li>
<span class="merged" id="all.4EAQhE" title="原文 : Create a python virtual environment">python仮想環境の作成</span>
<markup
lang="bash"

>python3 -m venv ./venv
. venv/bin/activate</markup>

</li>
<li>
<span class="merged" id="all.4Vadyv" title="原文 : Install the requirements">要件のインストール</span>
<markup
lang="bash"

>python3 -m pip install -r requirements.txt</markup>

</li>
<li>
<span class="merged" id="all.31ZdAY" title="原文 : Run the Python example">Pythonの例の実行</span>
<markup
lang="bash"

>python3 main.py</markup>

<markup
lang="bash"
title="Output"
>2025-04-07 11:06:42,501 - coherence - INFO - Session [5d940a05-1cfc-4e6c-9ef8-52cc6e7705ba] connected to [localhost:1408].
2025-04-07 11:06:42,525 - coherence - INFO - Session(id=5d940a05-1cfc-4e6c-9ef8-52cc6e7705ba, connected to [localhost:1408] proxy-version=14.1.2.0.1, protocol-version=1 proxy-member-id=1)
[2025-04-07 11:06:42 +0800] [27645] [INFO] Running on http://0.0.0.0:8080 (CTRL + C to quit)</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.427gZ" title="原文 : This is now showing the HTTP server is running locally and connecting via port-forward to the Coherence Cluster.">これは、HTTPサーバーがローカルで実行され、ポート・フォワードを介してCoherenceクラスタに接続していることを示しています。</span></p>
</div>
</li>
<li>
<span class="merged" id="all.3bMf9Z" title="原文 : Exercise the REST end-points as per the instructions here">指示<router-link @click.native="this.scrollFix('#rest-endpoints')" to="#rest-endpoints">「こちら」</router-link>に従ってRESTエンドポイントを実行</span>

</li>
</ol>
<p><span class="merged" id="all.1HpEk5" title="原文 : JavaScript Client"><strong>JavaScriptクライアント</strong></span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1QLqgY" title="原文 : Change to the js directory"><code>js</code>ディレクトリに移動</span>

</li>
<li>
<span class="merged" id="all.2XeuwT" title="原文 : Install the modules">モジュールをインストール</span>
<markup
lang="bash"

>npm install</markup>

</li>
<li>
<span class="merged" id="all.3aDYZr" title="原文 : Run the JavaScript example">JavaScriptの例を実行</span>
<markup
lang="bash"

>node main.js</markup>

</li>
<li>
<span class="merged" id="all.3bMf9Z.1" title="原文 : Exercise the REST end-points as per the instructions here">指示<router-link @click.native="this.scrollFix('#rest-endpoints')" to="#rest-endpoints">「こちら」</router-link>に従ってRESTエンドポイントを実行</span>

</li>
</ol>
<p><span class="merged" id="all.1g7ahg.1" title="原文 : Go Client"><strong>Goクライアント</strong></span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1KSlOF" title="原文 : Change to the go directory"><code>go</code>ディレクトリに移動</span>

</li>
<li>
<span class="merged" id="all.22pIiB" title="原文 : Ensure you have the latest Coherence Go client">最新のCoherence Goクライアントがあることを確認</span>
<markup
lang="bash"

>npm install</markup>

</li>
<li>
<span class="merged" id="all.2bmdX8" title="原文 : Build the executable">実行可能ファイルのビルド</span>
<markup
lang="bash"

>go get github.com/oracle/coherence-go-client/v2@latest
go mod tidy</markup>

</li>
<li>
<span class="merged" id="all.2hwGl0" title="原文 : Run the Go example">Goの例の実行</span>
<markup
lang="bash"

>/runner</markup>

<markup
lang="bash"
title="Output"
>2025/04/07 11:19:21 INFO: Session [2073aa45-68aa-426d-a0b8-99405dcaa942] connected to [localhost:1408] Coherence version: 14.1.2.0.1, serverProtocolVersion: 1, proxyMemberId: 1
Server running on port 8080</markup>

</li>
<li>
<span class="merged" id="all.3bMf9Z.2" title="原文 : Exercise the REST end-points as per the instructions here">指示<router-link @click.native="this.scrollFix('#rest-endpoints')" to="#rest-endpoints">「こちら」</router-link>に従ってRESTエンドポイントを実行</span>

</li>
</ol>
</div>
</div>

<h3 id="cleanup"><span class="merged" id="all.18hyPz.1"  title="原文:: Cleaning Up">クリーンアップ</span></h3>
<div class="section">
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2E07zm" title="原文 : Undeploy the clients using:">次を使用してクライアントをアンデプロイします:</span>
<markup
lang="bash"

>make undeploy-all-clients</markup>

</li>
<li>
<span class="merged" id="all.WCXXd" title="原文 : Undeploy the Coherence cluster">Coherenceクラスタのアンデプロイ</span>
<markup
lang="bash"

>make undeploy-coherence</markup>

</li>
<li>
<span class="merged" id="all.3vJW94" title="原文 : Undeploy the Coherence Operator">Coherence Operatorのアンデプロイ</span>
<markup
lang="bash"

>make undeploy-operator</markup>

</li>
<li>
<span class="merged" id="all.5ke6G" title="原文 : Delete the namespace">ネームスペースの削除</span>
<markup
lang="bash"

>make delete-namespace</markup>

</li>
</ol>
</div>
</div>
</doc-view>
