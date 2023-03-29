<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.YrpRV.1"  title="原文:: Overview">概要</span></dt>
<dd slot="desc"><p><span class="merged" id="all.47kOHL" title="原文 : The Coherence resource has a number of fields to configure the behaviour of Coherence, these fields are in the spec.coherence section of the CRD."><code>Coherence</code>リソースには、<code>Coherence</code>の動作を構成する多数のフィールドがあります。これらのフィールドは、CRDの<code>spec.coherence</code>セクションにあります。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_configuring_coherence"><span class="merged" id="all.3BH9YU"  title="原文:: Configuring Coherence"> Coherenceの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.4ToC2a.spl1" title="原文 : The Coherence CRD has specific fields to configure the most common Coherence settings."><code>Coherence</code> CRDには、最も一般的なCoherence設定を構成する特定のフィールドがあります。</span> <span class="merged" id="all.4ToC2a.spl2" title="原文 : Any other settings can be configured by adding system properties to the JVM Settings.">その他の設定は、システム・プロパティを<router-link to="/docs/jvm/010_overview">「JVM設定」</router-link>に追加することで構成できます。</span> </p>

<p><span class="merged" id="all.3PsKvJ" title="原文 : The following Coherence features can be directly specified in the Coherence spec.">次のCoherence機能は、<code>Coherence</code>仕様で直接指定できます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.WciPx" title="原文 : Cluster Name"><router-link to="/docs/coherence/020_cluster_name">クラスタ名</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3wL9WN" title="原文 : Cache Configuration File"><router-link to="/docs/coherence/030_cache_config">キャッシュ構成ファイル</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2ZEItA" title="原文 : Operational Configuration File (aka, the override file)"><router-link to="/docs/coherence/040_override_file">「操作構成ファイル」</router-link> (別名、オーバーライド・ファイル)</span></p>

</li>
<li>
<p><span class="merged" id="all.4Spa4v" title="原文 : Storage Enabled or disabled deployments"><router-link to="/docs/coherence/050_storage_enabled">「ストレージ有効」</router-link>または無効なデプロイメント</span></p>

</li>
<li>
<p><span class="merged" id="all.3WHDHk" title="原文 : Log Level"><router-link to="/docs/coherence/060_log_level">ログ・レベル</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1iK4ya" title="原文 : Well Known Addressing and cluster discovery"><router-link to="/docs/coherence/070_wka">「よく知られたアドレス指定」</router-link>およびクラスタ検出</span></p>

</li>
<li>
<p><span class="merged" id="all.1eWdYB" title="原文 : Persistence"><router-link to="/docs/coherence/080_persistence">永続性</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.DA8o7" title="原文 : Management over REST"><router-link to="/docs/management/010_overview">RESTを介した管理</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.22UHPw" title="原文 : Metrics"><router-link to="/docs/metrics/010_overview">メトリクス</router-link></span></p>

</li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2Q3ckK.spl1" title="原文 : The Coherence settings in the Coherence CRD spec typically set system property values that will be passed through to the Coherence JVM command line, which in turn configure Coherence."><code>Coherence</code> CRD仕様のCoherence設定では、通常、Coherence JVMコマンドラインに渡されるシステム・プロパティ値が設定され、これによってCoherenceが構成されます。</span> <span class="merged" id="all.2Q3ckK.spl2" title="原文 : This is the same behaviour that would occur when running Coherence outside of containers.">これは、コンテナの外部でCoherenceを実行する場合に発生する動作と同じです。</span> <span class="merged" id="all.2Q3ckK.spl3" title="原文 : Whether these system properties actually apply or not depends on the application code.">これらのシステム・プロパティが実際に適用されるかどうかは、アプリケーション・コードによって異なります。</span> <span class="merged" id="all.2Q3ckK.spl4" title="原文 : For example, it is simple to override the Coherence operational configuration file in a jar file deployed as part of an application&rsquo;s image in such a way that will cause all the normal Coherence system properties to be ignored.">たとえば、アプリケーションのイメージの一部としてデプロイされたjarファイル内のCoherence操作構成ファイルをオーバーライドすると、通常のCoherenceシステム・プロパティがすべて無視されるようになります。</span> <span class="merged" id="all.2Q3ckK.spl5" title="原文 : If that is done then the Coherence settings discussed in this documentation will not apply.">これを実行した場合、このドキュメントで説明するCoherence設定は適用されません。</span> <span class="merged" id="all.2Q3ckK.spl6" title="原文 :  For example, adding a tangosol-coherence-override.xml file to a jar on the application&rsquo;s classpath that contains an overridden &lt;configurable-cache-factory-config&gt; section with a hard coded cache configuration file name would mean that the Coherence CRD spec.coherence.cacheConfig field, that sets the coherence.cacheconfig system property, would be ignored."><br>たとえば、ハード・コード・キャッシュ構成ファイル名を持つオーバーライドされた<code>&lt;configurable-cache-factory-config></code>セクションを含むアプリケーション・クラスパスのjarに<code>tangosol-coherence-override.xml</code>ファイルを追加すると、<code>coherence.cacheconfig</code>システム・プロパティを設定する<code>Coherence</code> CRD <code>spec.coherence.cacheConfig</code>フィールドは無視されます。</span> <span class="merged" id="all.2Q3ckK.spl7" title="原文 :  It is, therefore, entirely at the application developer&rsquo;s discretion whether they use the fields of the Coherence CRD to configure Coherence, or they put those settings into configuration files, either hard coded into jar files or picked up at runtime from files mapped from Kubernetes volumes, config maps, secrets, etc."><br>したがって、アプリケーション開発者は、<code>Coherence</code> CRDのフィールドを使用してCoherenceを構成するか、これらの設定をJARファイルにハードコードするか、Kubernetesボリューム、構成マップ、シークレットなどからマップされたファイルから実行時にピック・アップするかに関係なく、完全にアプリケーション開発者の判断で判断します。</span> </p>
</div>
</div>
</doc-view>
