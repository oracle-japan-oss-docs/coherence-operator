<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_install_on_tanzu"><span class="merged" id="all.lQK65" title="原文 : Install On Tanzu">Tanzuにインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.V3aTg.spl1" title="原文 : If using VMWare Tanzu the Coherence Operator can be installed as a package."><a href="https://www.vmware.com/products/app-platform/tanzu" id="" target="_blank" >VMWare Tanzu</a>を使用する場合、Coherence Operatorをパッケージとしてインストールできます。</span> <span class="merged" id="all.V3aTg.spl2" title="原文 : Under the covers, Tanzu uses the Carvel tool set to deploy packages.">カバーの下では、Tanzuは<a href="https://carvel.dev" id="" target="_blank" >Carvel</a>ツール・セットを使用してパッケージをデプロイします。</span> <span class="merged" id="all.V3aTg.spl3" title="原文 : The Carvel tools can be used outside Tanzu, so the Coherence Operator repo and package images could also be deployed using a standalone Carvel kapp-controller.">CarvelはTanzu外部で使用できるため、Coherence Operatorリポジトリおよびパッケージ・イメージは、スタンドアロンのCarvel <a href="https://carvel.dev/kapp-controller/" id="" target="_blank" >kapp-controller</a>を使用してデプロイすることもできます。</span> </p>

<p><span class="merged" id="all.1QjwLD" title="原文 : The Coherence Operator release published two images required to deploy the Operator as a Tanzu package.">Coherence Operatorリリースでは、OperatorをTanzuパッケージとしてデプロイするために必要な2つのイメージが公開されました。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.IuigQ" title="原文 : ghcr.io/oracle/coherence-operator-package:3.5.0 - the Coherence Operator package"><code>ghcr.io/oracle/coherence-operator-package:3.5.0</code> - Coherence Operatorパッケージ</span></p>

</li>
<li>
<p><span class="merged" id="all.2rypZa" title="原文 : ghcr.io/oracle/coherence-operator-repo:3.5.0 - the Coherence Operator repository"><code>ghcr.io/oracle/coherence-operator-repo:3.5.0</code> - Coherence Operatorリポジトリ</span></p>

</li>
</ul>

<h3 id="_install_the_coherence_repository"><span class="merged" id="all.24VnWu" title="原文 : Install the Coherence Repository">Coherenceリポジトリをインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.4FL8kd.spl1" title="原文 : The first step to deploy the Coherence Operator package in Tanzu is to add the repository.">TanzuでCoherence Operatorパッケージをデプロイする最初のステップは、リポジトリを追加することです。</span> <span class="merged" id="all.4FL8kd.spl2" title="原文 : This can be done using the Tanzu CLI.">これは、Tanzu CLIを使用して実行できます。</span> </p>

<markup
lang="bash"

>tanzu package repository add coherence-repo \
    --url ghcr.io/oracle/coherence-operator-repo:3.5.1 \
    --namespace coherence \
    --create-namespace</markup>

<p><span class="merged" id="all.r5IJz" title="原文 : The installed repositories can be listed using the CLI:">インストールされたリポジトリは、CLIを使用して一覧表示できます:</span></p>

<markup
lang="bash"

>tanzu package repository list --namespace coherence</markup>

<p><span class="merged" id="all.3XKtX2" title="原文 : which should display something like the following">次のようなものを表示します</span></p>

<markup
lang="bash"

>NAME            REPOSITORY                              TAG  STATUS               DETAILS
coherence-repo  ghcr.io/oracle/coherence-operator-repo  1h   Reconcile succeeded</markup>

<p><span class="merged" id="all.Gxtib" title="原文 : The available packages in the Coherence repository can also be displayed using the CLI">Coherenceリポジトリで使用可能なパッケージは、CLIを使用して表示することもできます</span></p>

<markup
lang="bash"

>tanzu package available list --namespace coherence</markup>

<p><span class="merged" id="all.338Pby" title="原文 : which should include the Operator package, coherence-operator.oracle.github.com something like the following"><code>coherence-operator.oracle.github.com</code>というオペレータ・パッケージを含める必要があります</span></p>

<markup
lang="bash"

>NAME                                  DISPLAY-NAME               SHORT-DESCRIPTION                                             LATEST-VERSION
coherence-operator.oracle.github.com  Oracle Coherence Operator  A Kubernetes operator for managing Oracle Coherence clusters  3.5.1</markup>

</div>

<h3 id="_install_the_coherence_operator_package"><span class="merged" id="all.4ddwvV" title="原文 : Install the Coherence Operator Package">Coherence Operatorパッケージのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.38JRZy" title="原文 : Once the Coherence Operator repository has been installed, the coherence-operator.oracle.github.com package can be installed, which will install the Coherence Operator itself.">Coherence Operatorリポジトリがインストールされると、<code>coherence-operator.oracle.github.com</code>パッケージをインストールでき、Coherence Operator自体がインストールされます。</span></p>

<markup
lang="bash"

>tanzu package install coherence \
    --package-name coherence-operator.oracle.github.com \
    --version 3.5.1 \
    --namespace coherence</markup>

<p><span class="merged" id="all.HoaXg" title="原文 : The Tanzu CLI will display the various steps it is going through to install the package and if all goes well, finally display Added installed package &apos;coherence&apos; The packages installed in the coherence namespace can be displayed using the CLI.">Tanzu CLIでは、パッケージのインストールに使用する様々なステップが表示され、すべてうまくいけば<code>Added installed package 'coherence'</code>が表示されます。<code>coherence</code>ネームスペースにインストールされたパッケージは、CLIを使用して表示できます。</span></p>

<markup
lang="bash"

>tanzu package installed list --namespace coherence</markup>

<p><span class="merged" id="all.1NCzuP" title="原文 : which should display the Coherence Operator package.">Coherence Operatorパッケージを表示します。</span></p>

<markup
lang="bash"

>NAME       PACKAGE-NAME                          PACKAGE-VERSION  STATUS
coherence  coherence-operator.oracle.github.com  3.5.1            Reconcile succeeded</markup>

<p><span class="merged" id="all.3WbWXb" title="原文 : The Operator is now installed and ready to mage Coherence clusters.">オペレータがインストールされ、Coherenceクラスタを形成する準備ができました。</span></p>

</div>
</div>
</doc-view>
