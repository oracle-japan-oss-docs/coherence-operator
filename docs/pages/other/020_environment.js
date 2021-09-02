<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_environment_variables"><span class="merged" id="all.1cV2UY"  title="原文:: Environment Variables">環境変数</span></h2>
<div class="section">
<p><span class="merged" id="all.shIn7.spl1" title="原文 : Environment variables can be added to the Coherence container in the Pods managed by the Operator.">環境変数は、オペレータによって管理される<code>Pods</code>のCoherenceコンテナに追加できます。</span> <span class="merged" id="all.shIn7.spl2" title="原文 : Additional variables should be added to the env list in the Coherence CRD spec.">追加の変数は、<code>Coherence</code> CRD仕様の<code>env</code>リストに追加する必要があります。</span> <span class="merged" id="all.shIn7.spl3" title="原文 : The entries in the env list are Kubernetes EnvVar values, exactly the same as when adding environment variables to a container spec."><code>env</code>リストのエントリは、Kubernetes <a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#envvar-v1-core" id="" target="_blank" >EnvVar</a>値であり、環境変数をコンテナ仕様に追加する場合とまったく同じです。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  env:
    - name: VAR_ONE            <span class="conum" data-value="1" />
      value: VALUE_ONE
    - name: VAR_TWO            <span class="conum" data-value="2" />
      valueFrom:
        secretKeyRef:
          name: test-secret
          key: secret-key</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.6tflb" title="原文 : The VAR_ONE environment variable is a simple variable with a value of VALUE_ONE"><code>VAR_ONE</code>環境変数は、<code>VALUE_ONE</code>の値を持つ単純な変数です</span></li>
<li data-value="2"><span class="merged" id="all.2YYVf6" title="原文 : The VAR_TWO environment variable is variable that is loaded from a secret."><code>VAR_TWO</code>環境変数は、シークレットからロードされる変数です。</span></li>
</ul>
</div>
</doc-view>
