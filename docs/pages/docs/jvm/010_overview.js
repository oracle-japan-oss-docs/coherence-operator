<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_overview"><span class="merged" id="all.YrpRV.2"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3z6I4H.spl1" title="原文 : The Coherence Operator allows full control over the configuration of the JVM used to run the Coherence application.">Coherence Operatorでは、Coherenceアプリケーションの実行に使用されるJVMの構成を完全に制御できます。</span> <span class="merged" id="all.3z6I4H.spl2" title="原文 : The jvm section of the Coherence CRD spec has a number of fields to easily configure specific aspects of the JVM as well as a catch-all jvm.args list that allows any arbitrary argument to be passed to the JVM."><code>Coherence</code> CRD仕様の<code>jvm</code>セクションには、JVMの特定の側面を簡単に構成できるフィールドと、任意の引数をJVMに渡すことができるcatch-all <code>jvm.args</code>リストがあります。</span> </p>

<p><span class="merged" id="all.20X3jq.spl1" title="原文 : Whilst every configuration setting could, in theory, be set only by specifying JVM arguments in the jvm.args field of the Coherence CRD, the other configuration fields provide simpler means to set configuration without having to remember specific JVM argument names or system property names to set."><code>Coherence</code> CRDの<code>jvm.args</code>フィールドにJVM引数を指定することによってのみ、すべての構成設定を設定できますが、その他の構成フィールドは、設定する特定のJVM引数名またはシステム・プロパティ名を覚えることなく、構成を設定するより簡単な手段を提供します。</span> <span class="merged" id="all.20X3jq.spl2" title="原文 : You are, of course, free to use whichever approach best suits your requirements; but obviously it is better to choose one approach and be consistent.">もちろん、要件に最も適したアプローチは自由に使用できます。しかし、明らかに、1つのアプローチを選択して一貫性を保つことをお薦めします。</span> </p>


<h3 id="_guides_to_jvm_settings"><span class="merged" id="all.4JfkFL" title="原文 : Guides to JVM Settings">JVM設定へのガイド</span></h3>
<div class="section">
<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/jvm/020_classpath"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">クラスパス</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.ykx8d" title="原文 : Default classpath settings and options for setting a custom classpath.">カスタム・クラスパスを設定するためのデフォルトのクラスパス設定およびオプション。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/jvm/030_jvm_args"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">JVM引数</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3idciC" title="原文 : Adding arbitrary JVM arguments and system properties.">任意のJVM引数およびシステム・プロパティの追加。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/jvm/040_gc"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">ガベージ・コレクション</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1f2t1f" title="原文 : Configuring the garbage collector.">ガベージ・コレクタの構成。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/jvm/050_memory"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">ヒープとメモリーの設定</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.fbyWU" title="原文 : Configuring the heap size and other memory settings.">ヒープ・サイズおよびその他のメモリー設定の構成。</span></p>
</v-card-text> </v-card> </v-flex> </v-layout> </v-container> </v-flex> </v-layout> <v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/jvm/070_debugger"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">デバッガ</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4VSzwl" title="原文 : Using debugger settings.">デバッガ設定の使用。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/jvm/090_container_limits"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">コンテナ制限の使用</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1ZDhB" title="原文 : Configuring the JVM to respect container resource limits.">コンテナ・リソース制限を考慮するようにJVMを構成します。</span></p>
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
