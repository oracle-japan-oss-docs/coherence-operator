<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_overview"><span class="merged" id="all.YrpRV.7"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.28JrWp" title="原文 : There are a number of miscellaneous configuration settings that can be added to containers and Pods controlled by the Coherence Operator.">コンテナに追加できるその他の構成設定と、Coherence Operatorによって制御される<code>Pods</code>が多数あります。</span></p>

<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/other/020_environment"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">環境変数</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2Xuief" title="原文 : Adding environment variables to the Coherence container.">Coherenceコンテナへの環境変数の追加。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/other/030_labels"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">ポッド・ラベル</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2uTnfp" title="原文 : Adding Pod labels.">ポッド・ラベルの追加。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/other/040_annotations"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">ポッド注釈</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2JaCzM" title="原文 : Adding Pod annotations.">ポッド注釈を追加しています。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>

<h3 id="_containers"><span class="merged" id="all.458FT9"  title="原文:: Containers">コンテナ</span></h3>
<div class="section">
<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/other/080_add_containers"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">コンテナの追加</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4BUCLH" title="原文 : Adding side-car containers and init-containers.">サイドカー・コンテナおよびinit-containersの追加。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>
</div>

<h3 id="_volumes"><span class="merged" id="all.3JwPk1"  title="原文:: Volumes">ボリューム</span></h3>
<div class="section">
<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/other/070_add_volumes"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">ボリュームの追加</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.sbLyh" title="原文 : Adding Volumes and volume mounts.">ボリュームおよびボリューム・マウントの追加。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/other/050_configmap_volumes"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">ConfigMapボリュームの追加</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.cAD0j" title="原文 : Adding Volumes and volume mounts using ConfigMaps.">ConfigMapsを使用してボリュームおよびボリューム・マウントを追加します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/other/060_secret_volumes"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">シークレット・ボリュームの追加</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.cmDJl" title="原文 : Adding Volumes and volume mounts using Secrets.">シークレットを使用したボリュームおよびボリューム・マウントの追加。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>
</div>

<h3 id="_pod_scheduling"><span class="merged" id="all.eaO02"  title="原文:: Pod Scheduling">ポッド・スケジューリング</span></h3>
<div class="section">
<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/other/090_pod_scheduling"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">ポッド・スケジューリング</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1rkP4u" title="原文 : Taints, Tolerations and node selectors.">Taints、Tolerationsおよびノード・セレクタ。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/other/100_resources"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">リソース</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1uQm5N" title="原文 : Configuring Coherence container resource constraints.">Coherenceコンテナ・リソース制約の構成。</span></p>
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
