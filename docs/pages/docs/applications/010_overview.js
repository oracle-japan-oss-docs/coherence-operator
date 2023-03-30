<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_overview"><span class="merged" id="all.YrpRV"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.zsEjh.spl1" title="原文 : A typical Coherence deployment contains custom application code that runs with Coherence.">通常のCoherenceデプロイメントには、Coherenceで実行されるカスタム・アプリケーション・コードが含まれます。</span> <span class="merged" id="all.zsEjh.spl2" title="原文 : To run custom application code in a Coherence resource that code needs to be packaged into an image that the deployment will use."><code>Coherence</code>リソースでカスタム・アプリケーション・コードを実行するには、デプロイメントで使用するイメージにコードをパッケージ化する必要があります。</span> </p>


<h3 id="_building_and_deploying_applications"><span class="merged" id="all.2k71Z9" title="原文 : Building and Deploying Applications">アプリケーションのビルドおよびデプロイ</span></h3>
<div class="section">
<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/applications/020_build_application"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">カスタム・アプリケーション・イメージの作成</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.4Q8xiH" title="原文 : Building custom Coherence application images for use with the Coherence Operator.">Coherence Operatorで使用するカスタムCoherenceアプリケーション・イメージをビルドします。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/applications/030_deploy_application"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">カスタム・アプリケーション・イメージのデプロイ</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1nRk1C" title="原文 : Deploying custom application images using the Coherence Operator.">Coherence Operatorを使用してカスタム・アプリケーション・イメージをデプロイします。</span></p>
</v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-flex>
</v-layout>
</div>

<h3 id="_configuring_applications"><span class="merged" id="all.1jIGUZ" title="原文 : Configuring Applications">アプリケーションの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2qgfo4.spl1" title="原文 : There are many settings in a Coherence resource that control the behaviour of Coherence, the JVM and the application code."><code>Coherence</code>リソースには、Coherence、JVMおよびアプリケーション・コードの動作を制御する多くの設定があります。</span> <span class="merged" id="all.2qgfo4.spl2" title="原文 : Some of the application specific settings are shown below:">アプリケーション固有の設定の一部を次に示します:</span> </p>

<v-layout row wrap class="mb-5"> <v-flex xs12> <v-container fluid grid-list-md class="pa-0"> <v-layout row wrap class="pillars"> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/jvm/020_classpath"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">クラス・パスの設定</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3GLa0z" title="原文 : Setting a custom classpath for the application.">アプリケーションのカスタム・クラスパスの設定。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/applications/040_application_main"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">メイン・クラスの設定</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.2bJSsh" title="原文 : Setting a custom main class to run.">実行するカスタム・メイン・クラスの設定。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/applications/050_application_args"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">アプリケーション引数の設定</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.3fOTLf" title="原文 : Setting arguments to pass to the main class.">メイン・クラスに渡す引数を設定します。</span></p>
</v-card-text> </v-card> </v-flex> <v-flex xs12 sm4 lg3> <v-card> <router-link to="/docs/applications/060_application_working_dir"><div class="card__link-hover"/>
</router-link> <v-card-title primary class="headline layout justify-center"><span style="text-align:center">作業ディレクトリ</span></v-card-title> <v-card-text class="caption">
<p></p>
<p><span class="merged" id="all.1VT6Z6" title="原文 : Setting the application’s working directory.">アプリケーションの作業ディレクトリを設定します。</span></p>
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
