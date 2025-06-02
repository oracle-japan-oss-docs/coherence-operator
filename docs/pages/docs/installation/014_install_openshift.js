<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_install_on_openshift"><span class="merged" id="all.2KbhJu" title="原文 : Install on OpenShift">OpenShiftにインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.1ZeuC9" title="原文 : The Coherence Operator can be installed into OpenShift using either the web console or manually using yaml manifests.">Coherence Operatorは、webコンソールを使用するか、yamlマニフェストを使用して手動でOpenShiftにインストールできます。</span></p>

<p><span class="merged" id="all.P7avV.spl1" title="原文 : The OpenShift documentation covers operators in great detail along with how to install them."><a href="https://docs.redhat.com/en/documentation/openshift_container_platform/4.18/html/operators/index" id="" target="_blank" >「OpenShiftドキュメント」</a>では、オペレータのインストール方法とともにオペレータの詳細を説明します。</span> <span class="merged" id="all.P7avV.spl2" title="原文 : It is advisable to check this documentation for the version of OpenShift being used.">このドキュメントで、使用されているOpenShiftのバージョンを確認することをお勧めします。</span> </p>

<p><span class="merged" id="all.3rld5e" title="原文 : There are two methods to install an operator in OpenShift.">OpenShiftにオペレータをインストールするには、2つのメソッドがあります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3Dl728" title="原文 : Manually using a subscription yaml">サブスクリプションyamlを使用した<router-link @click.native="this.scrollFix('#manual')" to="#manual">「手動」</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1pM83G" title="原文 : Automatically from the OpenShift web console">OpenShift webコンソールからの<router-link @click.native="this.scrollFix('#console')" to="#console">「自動」</router-link></span></p>

</li>
</ul>

<h3 id="manual"><span class="merged" id="all.3C8Tze"  title="原文:: Manual Installation">手動インストール</span></h3>
<div class="section">
<p><span class="merged" id="all.15Pdff" title="原文 : Create a subscription yaml">サブスクリプションYAMLの作成</span></p>

<markup

title="coherence-operator-subscription.yaml"
>apiVersion: operators.coreos.com/v1alpha1
kind: Subscription
metadata:
  name: coherence-operator
  namespace: openshift-operators
spec:
  channel: stable
  installPlanApproval: Automatic
  name: coherence-operator
  source: coherence-operator-catalog
  sourceNamespace: openshift-marketplace
  startingCSV: coherence-operator.v3.5.1</markup>

<p><span class="merged" id="all.q9tFn" title="原文 : Apply the subscription yaml:">サブスクリプションYAMLを適用します:</span></p>

<markup
lang="bash"

>oc apply -f coherence-operator-subscription.yaml</markup>

<p><span class="merged" id="all.GhY8C" title="原文 : The Coherence Operator will be installed into the openshift-operators namespace.">Coherence Operatorは、<code>openshift-operators</code>ネームスペースにインストールされます。</span></p>

<p><span class="merged" id="all.1yiQft" title="原文 : The Coherence operator pods have a label app.kubernetes.io/name=coherence-operator and can be listed with the following command:">Coherenceオペレータ・ポッドにはラベル<code>app.kubernetes.io/name=coherence-operator</code>があり、次のコマンドでリストできます:</span></p>

<markup
lang="bash"

>oc -n openshift-operators get pod -l app.kubernetes.io/name=coherence-operator</markup>

<markup


>NAME                                                     READY   STATUS    RESTARTS      AGE
coherence-operator-controller-manager-859675d947-llmvd   1/1     Running   1 (14h ago)   14h
coherence-operator-controller-manager-859675d947-mk765   1/1     Running   3 (14h ago)   14h
coherence-operator-controller-manager-859675d947-z5m2x   1/1     Running   2 (14h ago)   14h</markup>

</div>

<h3 id="console"><span class="merged" id="all.gbs9d" title="原文 : Install from the Web Console">Webコンソールからのインストール</span></h3>
<div class="section">
<p><span class="merged" id="all.2Yqbyk" title="原文 : Using the OpenShift console, the Coherence operator can be installed in a few clicks.">OpenShiftコンソールを使用すると、数回のクリックでCoherenceオペレータをインストールできます。</span></p>

<p><span class="merged" id="all.MLuJV.spl1" title="原文 : In the web-console, expand &quot;Operators&quot; on the left-hand menu, select &quot;OperatorHub&quot; and then type &quot;coherence&quot; into the search box.">webコンソールで、左側のメニューの「オペレータ」を展開し、「OperatorHub」を選択して、検索ボックスに「coherence」と入力します。</span> <span class="merged" id="all.MLuJV.spl2" title="原文 : The Coherence Operator panel should be displayed.">Coherence Operatorパネルが表示されます。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="OpenShift OperatorHub" src="./images/openshift-operatorhub-coherence.png" width="1024" /> </v-card-text> </v-card>

<p><span class="merged" id="all.1vbFlO" title="原文 : Click on the Coherence Operator panel, which will display the Coherence Operator install page.">Coherence Operatorパネルをクリックすると、Coherence Operatorインストール・ページが表示されます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="OpenShift Coherence Operator" src="./images/openshift-coherence.png" width="1024" /> </v-card-text> </v-card>

<p><span class="merged" id="all.4H3uRx" title="原文 : Typically, the latest version will be installed so click on the &quot;Install&quot; button which will display the installation options panel.">通常、最新バージョンがインストールされますので、インストール・オプション・パネルを表示する「インストール」ボタンをクリックします。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="OpenShift Coherence Operatorインストール" src="./images/openshift-coherence-install.png" width="1024" /> </v-card-text> </v-card>

<p><span class="merged" id="all.eqlu1.spl1" title="原文 : Click on the &quot;Install&quot; button to start the installation.">「インストール」ボタンをクリックしてインストールを開始します。</span> <span class="merged" id="all.eqlu1.spl2" title="原文 : The installation progress will be displayed.">インストールの進行状況が表示されます。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="OpenShift Coherenceインストールの進行状況" src="./images/openshift-coherence-install-progress.png" width="1024" /> </v-card-text> </v-card>

<p><span class="merged" id="all.3U0HSd" title="原文 : The display will change to show when installation is complete.">インストールが完了すると表示が変わり、表示されます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="OpenShift Coherenceインストール完了" src="./images/openshift-coherence-install-done.png" width="1024" /> </v-card-text> </v-card>

<p><span class="merged" id="all.20Xbj9" title="原文 : Click on the &quot;View Operator&quot; button to see the details page for the Coherence Operator installation">「オペレータの表示」ボタンをクリックして、Coherence Operatorインストールの詳細ページを表示</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="OpenShift Coherence詳細" src="./images/openshift-coherence-operator-details.png" width="1024" /> </v-card-text> </v-card>

<p><span class="merged" id="all.2vMcfh" title="原文 : The Coherence Operator is now installed and ready to manage Coherence workloads.">Coherence Operatorがインストールされ、Coherenceワークロードを管理する準備ができました。</span></p>

</div>
</div>
</doc-view>
