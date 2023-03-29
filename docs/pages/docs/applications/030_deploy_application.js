<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_deploy_coherence_application_images"><span class="merged" id="all.3HPfeY" title="原文 : Deploy Coherence Application Images">Coherenceアプリケーション・イメージのデプロイ</span></h2>
<div class="section">
<p><span class="merged" id="all.2Th844" title="原文 : Once a custom application image has been built (as described in Build Custom Application Images) a Coherence resource can be configured to use that image.">カスタム・アプリケーション・イメージがビルドされたら (<router-link to="/docs/applications/020_build_application">「カスタム・アプリケーション・イメージの作成」</router-link>で記述)、そのイメージを使用するように<code>Coherence</code>リソースを構成できます。</span></p>


<h3 id="_specify_the_image_to_use"><span class="merged" id="all.36sCNu" title="原文 : Specify the Image to Use">使用するイメージの指定</span></h3>
<div class="section">
<p><span class="merged" id="all.2J8vsM" title="原文 : To specify the image to use set the image field in the Coherence spec to the name of the image.">使用するイメージを指定するには、<code>Coherence</code>スペックの<code>image</code>フィールドをイメージの名前に設定します。</span></p>

<p><span class="merged" id="all.3GwwZT" title="原文 : For example if there was an application image called catalogue:1.0.0 it can be specified like this:">たとえば、<code>catalogue:1.0.0</code>というアプリケーション・イメージがある場合、次のように指定できます:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: catalogue:1.0.0  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2cggkz" title="原文 : The catalogue:1.0.0 will be used in the coherence container in the deployment&rsquo;s Pods."><code>catalogue:1.0.0</code>は、デプロイメントのポッドの<code>coherence</code>コンテナで使用されます。</span></li>
</ul>
<p><span class="merged" id="all.zUE64" title="原文 : The example above would assume that the catalogue:1.0.0 has a JVM on the PATH and all the required .jar files, or Java classes, in the default classpath locations used by the Operator.">前述の例では、<code>catalogue:1.0.0</code>に<code>PATH</code>上のJVMがあり、オペレータで使用されるデフォルトのクラスパスのロケーションで必要なすべての<code>.jar</code>ファイルまたはJavaクラスがあることを前提としています。</span></p>

</div>

<h3 id="_image_pull_secrets"><span class="merged" id="all.MUXab" title="原文 : Image Pull Secrets">イメージ・プル・シークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.4Scnoq" title="原文 : If your image needs to be pulled from a private registry you may need to provide image pull secrets for this.">イメージをプライベート・レジストリからプルする必要がある場合は、<a href="https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/" id="" target="_blank" >「イメージ・プル・シークレット」</a>を指定する必要があります。</span></p>

<p><span class="merged" id="all.1hqrXA.spl1" title="原文 : For example, supposing the application image is repo.acme.com/catalogue:1.0.0 and that repo.acme.com is a private registry; we might a Secret to the k8s namespace named repo-acme-com-secrets.">たとえば、アプリケーション・イメージの非表示は<code>repo.acme.com/catalogue:1.0.0</code>で、<code>repo.acme.com</code>はプライベート・レジストリです。<code>repo-acme-com-secrets</code>という名前のk8sネームスペースへの<code>Secret</code>の場合があります。</span> <span class="merged" id="all.1hqrXA.spl2" title="原文 : We can then specify that these secrets are used in the Coherence resource by setting the imagePullSecrets fields.">その後、<code>imagePullSecrets</code>フィールドを設定して、これらのシークレットを<code>Coherence</code>リソースで使用するように指定できます。</span> <span class="merged" id="all.1hqrXA.spl3" title="原文 : The imagePullSecrets field is a list of secret names, the same format as that used when specifying secrets for a Pod spec."><code>imagePullSecrets</code>フィールドは、Pod仕様のシークレットを指定するときに使用される形式と同じシークレット名のリストです。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: repo.acme.com/catalogue:1.0.0  <span class="conum" data-value="1" />
  imagePullSecrets:
    - name: repo-acme-com-secrets       <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Nkjot" title="原文 : The repo.acme.com/catalogue:1.0.0 image will be used for the application image"><code>repo.acme.com/catalogue:1.0.0</code>イメージがアプリケーション・イメージに使用されます</span></li>
<li data-value="2"><span class="merged" id="all.3s1HG4" title="原文 : The Secret named repo-acme-com-secrets will be used to pull images."><code>repo-acme-com-secrets</code>という名前の<code>Secret</code>は、イメージのプルに使用されます。</span></li>
</ul>
<p><span class="merged" id="all.4CDM26" title="原文 : Multiple secrets can be specified in the case where different images used by different containers are pulled from different registries.">異なるコンテナで使用される異なるイメージが異なるレジストリからプルされる場合、複数のシークレットを指定できます。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  image: repo.acme.com/catalogue:1.0.0
  imagePullSecrets:
    - name: repo-acme-com-secrets               <span class="conum" data-value="1" />
    - name: oracle-container-registry-secrets</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.260RMt" title="原文 : The example above has two image pull secrets, repo-acme-com-secrets and oracle-container-registry-secrets">前述の例では、2つのイメージ・プル・シークレット(<code>repo-acme-com-secrets</code>および<code>oracle-container-registry-secrets</code>)があります</span></li>
</ul>
</div>

<h3 id="_more_application_configuration"><span class="merged" id="all.pjNOR" title="原文 : More Application Configuration">その他のアプリケーション構成</span></h3>
<div class="section">
<p><span class="merged" id="all.3YVujC" title="原文 : Additional configuration can be added to specify other application settings, these include:">その他のアプリケーション設定を指定するために、次の追加構成を追加できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3UbO9B" title="原文 : setting the classpath"><router-link to="/docs/jvm/020_classpath">「クラスパス」</router-link>の設定</span></p>

</li>
<li>
<p><span class="merged" id="all.44vg9M" title="原文 : specifying the application main"><router-link to="/docs/applications/040_application_main">「アプリケーション」</router-link>の指定</span></p>

</li>
<li>
<p><span class="merged" id="all.2azu4P" title="原文 : specifying application arguments"><router-link to="/docs/applications/050_application_args">「アプリケーション引数」</router-link>の指定</span></p>

</li>
<li>
<p><span class="merged" id="all.m1HoL" title="原文 : specifying the working directory"><router-link to="/docs/applications/060_application_working_dir">「作業ディレクトリ」</router-link>の指定</span></p>

</li>
</ul>
</div>
</div>
</doc-view>
