<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_overview"><span class="merged" id="all.YrpRV.7"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.TTPXD.spl1" title="原文 : Almost every application deployed into a Kubernetes cluster needs to communicate with other processes to provide services to other processes or consume services to other processes.">Kubernetesクラスタにデプロイされたほとんどのアプリケーションは、他のプロセスにサービスを提供したり、他のプロセスにサービスを利用したりするために、他のプロセスと通信する必要があります。</span> <span class="merged" id="all.TTPXD.spl2" title="原文 : This is achieved by exposing ports on containers in Pods and optionally exposing those same ports using Services and ingress.">これは、<code>Pods</code>内のコンテナにポートを公開し、オプションで<code>Services</code>とイングレスを使用してこれらの同じポートを公開することで実現されます。</span> <span class="merged" id="all.TTPXD.spl3" title="原文 : The Coherence CRD spec makes it simple to add ports to the Coherence container and configure Services to expose those ports."><code>Coherence</code> CRD仕様により、Coherenceコンテナにポートを追加し、それらのポートを公開するように<code>Services</code>を構成できます。</span> </p>

<p><span class="merged" id="all.1ETILf" title="原文 : Each additional port configured is exposed via its own Service.">構成された追加ポートは、それぞれ独自の<code>Service</code>を介して公開されます。</span></p>

<p><span class="merged" id="all.hyOeP" title="原文 : If the configuration of Services for ports provided by the Coherence CRD spec is not sufficient or cannot provide the required Service configuration then it is always possible to just create your own Services in Kubernetes."><code>Coherence</code> CRDスペックによって提供されるポートに対する<code>Services</code>の構成が不十分な場合や、必要な<code>Service</code>構成を提供できない場合は、Kubernetesに独自の<code>Services</code>のみを作成できます。</span></p>


<h3 id="_guides_to_adding_and_exposing_ports"><span class="merged" id="all.4Qv8qK" title="原文 : Guides to Adding and Exposing Ports">ポートの追加と公開に関するガイド</span></h3>
<div class="section">
<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/ports/020_container_ports"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">ポートの追加</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.dlVEr" title="原文 : Adding additional container ports to the Coherence container.">Coherenceコンテナへのコンテナ・ポートの追加。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/ports/030_services"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">サービスを介してポートを公開</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1TIXC8" title="原文 : Configuring Services used to expose ports.">ポートの公開に使用されるサービスの構成。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/ports/040_servicemonitors"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"> <span style="text-align:center">Prometheus ServiceMonitors</span> </v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2wN6WN" title="原文 : Adding Prometheus ServiceMonitors to expose ports to be scraped for metrics.">Prometheus ServiceMonitorsを追加して、メトリクスにまたがるポートを公開します。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>
</div>
</div>
</doc-view>
