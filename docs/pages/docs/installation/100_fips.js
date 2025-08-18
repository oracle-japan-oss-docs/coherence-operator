<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_fips_compatibility"><span class="merged" id="all.3PDCcv" title="原文 : FIPS Compatibility">FIPSの互換性</span></h2>
<div class="section">
<p><span class="merged" id="all.2o8cWW.spl1" title="原文 : The Coherence Operator image uses an empty scratch image for its base image.">Coherence Operatorイメージは、ベース・イメージに空のスクラッチ・イメージを使用します。</span> <span class="merged" id="all.2o8cWW.spl2" title="原文 : This means that the Coherence Operator image is FIPS compatible and can be run in a FIPS compliant Kubernetes cluster.">つまり、Coherence OperatorイメージはFIPS互換であり、FIPS準拠のKubernetesクラスタで実行できます。</span> </p>

<p><span class="merged" id="all.38xLcQ.spl1" title="原文 : As the Coherence Operator is written in Go, it can use Go’s built in FIPS support.">Coherence OperatorはGoで記述されているため、Goの組込みFIPSサポートを使用できます。</span> <span class="merged" id="all.38xLcQ.spl2" title="原文 : To run the Coherence Operator in a FIPS compliant mode, it needs to be installed with the environment variable GODEBUG set to either fips140=on or fips140=only.">Coherence OperatorをFIPS準拠モードで実行するには、環境変数<code>GODEBUG</code>を<code>fips140=on</code>または<code>fips140=only</code>に設定してインストールする必要があります。</span> <span class="merged" id="all.38xLcQ.spl3" title="原文 : This is explained in the Golang FIPS-140 documentation.">詳細は、Golang <a href="https://go.dev/doc/security/fips140" id="" target="_blank" >「FIPS-140ドキュメント」</a>を参照してください。</span> </p>

<p><span class="merged" id="all.2rlSC9" title="原文 : How the GODEBUG environment variable is set depends on how the operator is installed."><code>GODEBUG</code>環境変数の設定方法は、オペレータのインストール方法によって異なります。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.17"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.1rDckg" title="原文 : Although the Coherence Operator image can easily be installed in a FIPS compliant mode, none of the default Oracle Coherence images used by the operator are FIPS compliant.">Coherence OperatorイメージはFIPS準拠モードで簡単にインストールできますが、オペレータが使用するデフォルトのOracle CoherenceイメージはいずれもFIPS準拠ではありません。</span></p>

<p><span class="merged" id="all.4QawPV.spl1" title="原文 : The Oracle Coherence team does not currently publish FIPS compliant Coherence images.">Oracle Coherenceチームは、現在、FIPS準拠のCoherenceイメージを公開していません。</span> <span class="merged" id="all.4QawPV.spl2" title="原文 : Customers must build their own FIPS complaint Java and Coherence images, which the operator will then manage.">お客様は、オペレータが管理する独自のFIPS準拠JavaおよびCoherenceイメージを構築する必要があります。</span> </p>

<p><span class="merged" id="all.1nozgU.spl1" title="原文 : Coherence is FIPS compatible so a correctly configured application running in an image that has a FIPS compliant JDK and FIPS compliant base O/S will be FIPS complaint.">CoherenceはFIPS <em>「互換性」</em>であるため、FIPS準拠のJDKおよびFIPS準拠のベースO/Sを持つイメージで実行されている正しく構成されたアプリケーションは、FIPS苦情になります。</span> <span class="merged" id="all.1nozgU.spl2" title="原文 : To be fully FIPS compliant these images must then be run in a container runtime on a FIPS compliant host.">完全にFIPSに準拠するには、これらのイメージをFIPS準拠ホスト上のコンテナ・ランタイムで実行する必要があります。</span> </p>
</p>
</div>

<h3 id="_install_using_yaml_manifests"><span class="merged" id="all.47A5gE.1" title="原文 : Install Using Yaml Manifests">Yamlマニフェストを使用したインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2Tffkh" title="原文 : If installing using the yaml manifests, the yaml must be edited to add the GODEBUG environment variable to the operator deployments environment variables:"><router-link to="/docs/installation/011_install_manifests">「yamlマニフェストを使用したインストール」</router-link>の場合、yamlを編集して、<code>GODEBUG</code>環境変数をオペレータ・デプロイメント環境変数に追加する必要があります:</span></p>

<p><span class="merged" id="all.1fQult" title="原文 : Find the env: section of the operator Deployment in the yaml file, it looks like this:">yamlファイルでオペレータ<code>Deployment</code>の<code>env:</code>セクションを見つけます。次のようになります:</span></p>

<markup
lang="yaml"

>        env:
        - name: OPERATOR_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace</markup>

<p><span class="merged" id="all.3ru9x4" title="原文 : then add the required GODEBUG value, for example">次に、必要な<code>GODEBUG</code>値を追加します。たとえば</span></p>

<markup
lang="yaml"

>        env:
        - name: OPERATOR_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        - name: GODEBUG
          value: fips140=on</markup>

</div>

<h3 id="_install_using_kustomize"><span class="merged" id="all.42E3lU.2" title="原文 : Install Using Kustomize">Kustomizeを使ってインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2qoWXG" title="原文 : If installing the operator using Kustomize (or using kubectl -k) the Coherence manifest yaml files contain a FIPS overlay that adds the GODEBUG environment variable to the Operator container."><router-link to="/docs/installation/013_install_kustomize">「Kustomizeを使用したオペレータのインストール」</router-link> (または<code>kubectl -k</code>を使用)の場合、Coherenceマニフェストyamlファイルには、<code>GODEBUG</code>環境変数をオペレータ・コンテナに追加するFIPSオーバーレイが含まれています。</span></p>

<p><span class="merged" id="all.3mdjqz" title="原文 : The following command will generate a yaml manifest that installs the operator with FIPS enabled:">次のコマンドは、FIPSが有効になっているオペレータをインストールするyamlマニフェストを生成します:</span></p>

<markup
lang="bash"

>kustomize build manifests/overlays/fips</markup>

</div>

<h3 id="_install_using_helm"><span class="merged" id="all.4g555R.5" title="原文 : Install Using Helm">Helmを使用したインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.39QpyP.spl1" title="原文 : If installing the operator using Helm The Coherence Operator Helm chart has a fips field in its values file."><router-link to="/docs/installation/012_install_helm">「Helmを使用したオペレータのインストール」</router-link>の場合、Coherence Operator Helmチャートの値ファイルに<code>fips</code>フィールドがあります。</span> <span class="merged" id="all.39QpyP.spl2" title="原文 : This value is used to set the GODEBUG environment variables.">この値は、<code>GODEBUG</code>環境変数を設定するために使用されます。</span> <span class="merged" id="all.39QpyP.spl3" title="原文 : The fips value is unset by default, if set it must be one of the values, &quot;off&quot;, &quot;on&quot; or &quot;only&quot;."><code>fips</code>値は、デフォルトで設定されていません。設定する場合は、値"off"、"on"または"only"のいずれかである必要があります。</span> <span class="merged" id="all.39QpyP.spl4" title="原文 : If fips is set to any other value the chart will fail to install."><code>fips</code>が他の値に設定されている場合、チャートのインストールは失敗します。</span> </p>

<p><span class="merged" id="all.3vZNhH" title="原文 : For example, to install the operator with fips set to &quot;on&quot;">たとえば、fipsをonに設定してオペレータをインストールする場合</span></p>

<markup
lang="bash"

>helm install  \
    --namespace &lt;namespace&gt; \
    --set fips=on
    coherence-operator \
    coherence/coherence-operator</markup>

</div>
</div>
</doc-view>
