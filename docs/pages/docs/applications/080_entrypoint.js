<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_run_an_image_entry_point"><span class="merged" id="all.3NZ0ZU" title="原文 : Run an Image Entry Point">イメージ・エントリ・ポイントの実行</span></h2>
<div class="section">
<p><span class="merged" id="all.2tJ7HA.spl1" title="原文 : The default behaviour of the Coherence operator is to configure the entry point and arguments to use to run the Coherence container.">Coherenceオペレータのデフォルトの動作は、Coherenceコンテナの実行に使用するエントリ・ポイントと引数を構成することです。</span> <span class="merged" id="all.2tJ7HA.spl2" title="原文 : This command line is created from the various configuration elements in the Coherence resource yaml.">このコマンドラインは、<code>Coherence</code>リソースyamlの様々な構成要素から作成されます。</span> <span class="merged" id="all.2tJ7HA.spl3" title="原文 : Any entry point and arguments actually configured in the image being used will be ignored.">使用中のイメージで実際に構成されているエントリ・ポイントおよび引数は無視されます。</span> <span class="merged" id="all.2tJ7HA.spl4" title="原文 : The behaviour can be changed so that the images own entry point is used for the container.">動作は、イメージ独自のエントリ・ポイントがコンテナに使用されるように変更できます。</span> <span class="merged" id="all.2tJ7HA.spl5" title="原文 : This could be useful for example when an image contains a shell script that performs initialisation before running the Java Coherence application.">これは、たとえば、Java Coherenceアプリケーションを実行する前に初期化を実行するシェル・スクリプトがイメージに含まれている場合に役立ちます。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.2"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.NOS4P" title="原文 : Using an image entry point is only supported in images that use Java 11 or higher.">イメージ・エントリ・ポイントの使用は、Java 11以上を使用するイメージでのみサポートされます。</span></p>
</p>
</div>
<p><span class="merged" id="all.1GTDdr" title="原文 : To use an image’s entry point set the spec.application.useImageEntryPoint field in the Coherence resource to true.">イメージのエントリ・ポイントを使用するには、<code>Coherence</code>リソースの<code>spec.application.useImageEntryPoint</code>フィールドを<code>true</code>に設定します。</span></p>

<p><span class="merged" id="all.6vDv5.1"  title="原文:: For example:">例えば:</span></p>

<markup

title="storage.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  image: container-registry.oracle.com/middleware/coherence-ce:14.1.2-0-1
  application:
    useImageEntryPoint: true</markup>


<h3 id="_how_are_the_jvm_and_coherence_configured"><span class="merged" id="all.10tCF1" title="原文 : How are the JVM and Coherence Configured">JVMおよびCoherenceの構成方法</span></h3>
<div class="section">
<p><span class="merged" id="all.9rYi2.spl1" title="原文 : When the operator builds the container command line it can pass all the required JVM options and system properties to configure the application on the command line.">オペレータがコンテナ・コマンドラインを構築すると、必要なすべてのJVMオプションおよびシステム・プロパティを渡して、コマンドラインでアプリケーションを構成できます。</span> <span class="merged" id="all.9rYi2.spl2" title="原文 : But, when the image entry point it being used the operator needs to pass configuration another way.">ただし、イメージ・エントリ・ポイントが使用されている場合、オペレータは別の方法で構成を渡す必要があります。</span> </p>

<p><span class="merged" id="all.1sXDbz.spl1" title="原文 : All the Coherence configuration system properties can also be passed as environment variables, so the operator configures the container to have all the required environment variables to configure Coherence.">すべてのCoherence構成システム・プロパティも環境変数として渡すことができるため、オペレータは、Coherenceを構成するために必要なすべての環境変数を持つようにコンテナを構成します。</span> <span class="merged" id="all.1sXDbz.spl2" title="原文 : For example, the coherence.role system property is used to configure the role name of a Coherence process, but Coherence will also use the COHERENCE_ROLE environment variable for this.">たとえば、<code>coherence.role</code>システム・プロパティを使用してCoherenceプロセスのロール名を構成しますが、Coherenceでは<code>COHERENCE_ROLE</code>環境変数も使用されます。</span> <span class="merged" id="all.1sXDbz.spl3" title="原文 : If spec.role value is set in the Coherence resource, this is be used to set COHERENCE_ROLE environment variable in the Coherence container configuration in the Pod."><code>Coherence</code>リソースに<code>spec.role</code>値が設定されている場合、これはポッドのCoherenceコンテナ構成で<code>COHERENCE_ROLE</code>環境変数を設定するために使用されます。</span> </p>

<p><span class="merged" id="all.1Ps1G8.spl1" title="原文 : The operator then uses a combination of Java arguments files and the JDK_JAVA_OPTIONS environment variable to configure the JVM.">次に、オペレータは、Java引数ファイルと<code>JDK_JAVA_OPTIONS</code>環境変数を組み合せてJVMを構成します。</span> <span class="merged" id="all.1Ps1G8.spl2" title="原文 : This means that most of the features of the Coherence CRD can be used, even when running an image entry point.">つまり、イメージ・エントリ・ポイントを実行する場合でも、<code>Coherence</code> CRDのほとんどの機能を使用できます。</span> </p>


<h4 id="_java_argument_files"><span class="merged" id="all.2uRGt" title="原文 : Java Argument Files">Java引数ファイル</span></h4>
<div class="section">
<p><span class="merged" id="all.21n3WN.spl1" title="原文 : Various other environment variables are set by the Coherence operator to configure the container.">コンテナを構成するために、Coherenceオペレータによって他の様々な環境変数が設定されます。</span> <span class="merged" id="all.21n3WN.spl2" title="原文 : When the Pod starts an init-container that the operator has configured uses these environment variables to produce a number of Java command line argument files.">Podが起動されると、オペレータが構成したinitコンテナは、これらの環境変数を使用して多数のJavaコマンドライン引数ファイルを生成します。</span> <span class="merged" id="all.21n3WN.spl3" title="原文 : These files contain all the JVM command line options that the operator would have used in its custom command line if it was running the container.">これらのファイルには、オペレータがコンテナを実行していた場合にカスタム・コマンドラインで使用していたJVMコマンドライン・オプションがすべて含まれています。</span> <span class="merged" id="all.21n3WN.spl4" title="原文 : For more information on argument files see the Java Arguments Files documentation.">引数ファイルの詳細は、<a href="https://docs.oracle.com/en/java/javase/17/docs/specs/man/java.html#java-command-line-argument-files" id="" target="_blank" >「Java引数ファイル」</a>のドキュメントを参照してください。</span> </p>

<p><span class="merged" id="all.15rERC.spl1" title="原文 : The operator creates multiple arguments files for different purposes.">オペレータは、様々な目的で複数の引数ファイルを作成します。</span> <span class="merged" id="all.15rERC.spl2" title="原文 : The Java argument files are always created by the init-container as these are used in the command line that the operator normally configures for container.">Java引数ファイルは、オペレータがコンテナ用に通常構成するコマンドラインで使用されるため、常にinitコンテナによって作成されます。</span> <span class="merged" id="all.15rERC.spl3" title="原文 : There will be a file for the class path, a file for JVM options, a file for Spring Boot options if the application is Spring Boot, etc.">クラス・パスのファイル、JVMオプションのファイル、アプリケーションが「Spring Boot」の場合の「Spring Boot」オプションのファイルなどがあります。</span> </p>

</div>
</div>

<h3 id="_the_jdk_java_options_environment_variable"><span class="merged" id="all.1cE0Ky" title="原文 : The JDK_JAVA_OPTIONS Environment Variable"><code>JDK_JAVA_OPTIONS</code>環境変数</span></h3>
<div class="section">
<p><span class="merged" id="all.1p8kir.spl1" title="原文 : The JDK_JAVA_OPTIONS is a special environment variable recognised by the JVM."><code>JDK_JAVA_OPTIONS</code>は、JVMによって認識される特別な環境変数です。</span> <span class="merged" id="all.1p8kir.spl2" title="原文 : Any values in the JDK_JAVA_OPTIONS environment variable are effectively prepended to the JVM command line."><code>JDK_JAVA_OPTIONS</code>環境変数の値は、事実上JVMコマンドラインの前に付加されます。</span> <span class="merged" id="all.1p8kir.spl3" title="原文 : It is described fully in the https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#using-the-jdk_java_options-launcher-environment-variable [Java Command] documentation.">詳細は、<a href="https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#using-the-jdk_java_options-launcher-environment-variable" id="" target="_blank" >https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#using-the-jdk_java_options-launcher-environment-variable</a> [Java Command]のドキュメントを参照してください。</span> </p>

<p><span class="merged" id="all.3QHybd.spl1" title="原文 : There are limitations on the size of the value for an environment variable, so the operator could not specify all the options it needs in the JDK_JAVA_OPTIONS environment variable.">環境変数には値のサイズに制限があるため、オペレータは<code>JDK_JAVA_OPTIONS</code>環境変数で必要なすべてのオプションを指定できませんでした。</span> <span class="merged" id="all.3QHybd.spl2" title="原文 : This is why the operator uses argument files instead, so all it needs to set into the JDK_JAVA_OPTIONS environment variable are the names of the argument files to load.">このため、オペレータはかわりに引数ファイルを使用するため、<code>JDK_JAVA_OPTIONS</code>環境変数に設定する必要があるのは、ロードする引数ファイルの名前のみです。</span> </p>


<h4 id="_what_if_the_application_already_sets_jdk_java_options"><span class="merged" id="all.4UH8BY" title="原文 : What If The Application Already Sets JDK_JAVA_OPTIONS">アプリケーションがすでに<code>JDK_JAVA_OPTIONS</code>を設定している場合</span></h4>
<div class="section">
<p><span class="merged" id="all.2B0Og4" title="原文 : If the JDK_JAVA_OPTIONS environment variable is set in the Coherence resource then the operator will append its additional configuration onto the existing value."><code>Coherence</code>リソースで<code>JDK_JAVA_OPTIONS</code>環境変数が設定されている場合、オペレータは追加の構成を既存の値に追加します。</span></p>

</div>

<h4 id="_disabling_use_of_jdk_java_options"><span class="merged" id="all.HQrVm" title="原文 : Disabling Use of JDK_JAVA_OPTIONS"><code>JDK_JAVA_OPTIONS</code>の使用の無効化</span></h4>
<div class="section">
<p><span class="merged" id="all.1qfn8n.spl1" title="原文 : There may be occasions that the operator should not configure the JDK_JAVA_OPTIONS environment variable.">オペレータが<code>JDK_JAVA_OPTIONS</code>環境変数を構成しない場合があります。</span> <span class="merged" id="all.1qfn8n.spl2" title="原文 : For example, an image may run a shell script that runs various other Java commands before starting the main Coherence application.">たとえば、イメージでは、メインのCoherenceアプリケーションを起動する前に、他の様々なJavaコマンドを実行するシェル・スクリプトを実行できます。</span> <span class="merged" id="all.1qfn8n.spl3" title="原文 : If the JDK_JAVA_OPTIONS environment variable was set it would be applied to all these Java processes too."><code>JDK_JAVA_OPTIONS</code>環境変数が設定されている場合は、これらすべてのJavaプロセスにも適用されます。</span> </p>

<p><span class="merged" id="all.2zAffE" title="原文 : Setting the spec.application.useJdkJavaOptions field to false in the Coherence resource will disable the use of the JDK_JAVA_OPTIONS environment variable and the operator will not set it.">Coherenceリソースで<code>spec.application.useJdkJavaOptions</code>フィールドを<code>false</code>に設定すると、<code>JDK_JAVA_OPTIONS</code>環境変数の使用が無効になり、オペレータによって設定されません。</span></p>

<p><span class="merged" id="all.4RfuGc"  title="原文:: For example,">たとえば、</span></p>

<markup

title="storage.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  image: container-registry.oracle.com/middleware/coherence-ce:14.1.2-0-1
  application:
    useImageEntryPoint: true
    useJdkJavaOptions: false</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.3"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3SbhW6.spl1" title="原文 : When the spec.application.useJdkJavaOptions field is set to false the operator has no way to pass a number of configuration options to the JVM."><code>spec.application.useJdkJavaOptions</code>フィールドがfalseに設定されている場合、オペレータには多数の構成オプションをJVMに渡す方法がありません。</span> <span class="merged" id="all.3SbhW6.spl2" title="原文 : Coherence configurations that are passed as environment variables will still work.">環境変数として渡されるCoherence構成は引き続き機能します。</span> <span class="merged" id="all.3SbhW6.spl3" title="原文 : Anything passed as JVM options, such as memory configurations, system properties, etc cannot be configured.">メモリー構成、システム・プロパティなど、JVMオプションとして渡されるものは構成できません。</span> </p>

<p><span class="merged" id="all.46c2vj" title="原文 : As long as the application that the image runs is a Coherence application correctly configured to run in Kubernetes with the options required by the operator then it should still work.">イメージが実行されるアプリケーションが、オペレータで必要なオプションを指定してKubernetesで実行するように正しく構成されたCoherenceアプリケーションであるかぎり、引き続き動作します。</span></p>
</p>
</div>
</div>

<h4 id="_using_an_alternative_to_jdk_java_options"><span class="merged" id="all.3PDvOp" title="原文 : Using An Alternative To JDK_JAVA_OPTIONS"><code>JDK_JAVA_OPTIONS</code>の代替方法の使用</span></h4>
<div class="section">
<p><span class="merged" id="all.1SCROJ.spl1" title="原文 : In use cases where the JDK_JAVA_OPTIONS environment variable cannot be used and is disabled as described above, an alternative environment variable name can be specified that the operator will configure instead.">前述のとおり、<code>JDK_JAVA_OPTIONS</code>環境変数を使用できず、無効になっているユースケースでは、オペレータがかわりに構成する代替環境変数名を指定できます。</span> <span class="merged" id="all.1SCROJ.spl2" title="原文 : This allows an application to use this alternative environment variable at runtime to obtain all the configurations that the Operator would have applied to the JVM.">これにより、アプリケーションは実行時にこの代替環境変数を使用して、オペレータがJVMに適用したすべての構成を取得できます。</span> </p>

<p><span class="merged" id="all.1RlqgB" title="原文 : The name of the alternative environment variable is set in the spec.application.alternateJdkJavaOptions field of the Coherence resource.">代替環境変数の名前は、<code>Coherence</code>リソースの<code>spec.application.alternateJdkJavaOptions</code>フィールドに設定されます。</span></p>

<p><span class="merged" id="all.3JPNdY" title="原文 : For example, using the the yaml below will cause the operator to set the Java options values into the ALT_JAVA_OPTS environment variable.">たとえば、次のyamlを使用すると、オペレータはJavaオプションの値を<code>ALT_JAVA_OPTS</code>環境変数に設定します。</span></p>

<markup

title="storage.yaml"
>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  replicas: 3
  image: container-registry.oracle.com/middleware/coherence-ce:14.1.2-0-1
  application:
    useImageEntryPoint: true
    useJdkJavaOptions: false
    alternateJdkJavaOptions: "ALT_JAVA_OPTS"</markup>

<p><span class="merged" id="all.3s8LIt" title="原文 : In the Coherence container the application code can then access the The ALT_JAVA_OPTS environment variable to obtain the JVM options the Operator configured.">Coherenceコンテナでは、アプリケーション・コードが<code>ALT_JAVA_OPTS</code>環境変数にアクセスして、オペレータが構成したJVMオプションを取得できます。</span></p>

</div>

<h4 id="_use_java_argument_files_directly"><span class="merged" id="all.3Tab4n" title="原文 : Use Java Argument Files Directly">Java引数ファイルの直接使用</span></h4>
<div class="section">
<p><span class="merged" id="all.2ucy5r" title="原文 : In use cases where the JDK_JAVA_OPTIONS environment variable has been disabled application code could also directly access the Java argument files the operator configured and use those to configure the Coherence JVM."><code>JDK_JAVA_OPTIONS</code>環境変数が無効になっているユースケースでは、アプリケーション・コードによって、オペレータが構成したJava引数ファイルに直接アクセスし、それらを使用してCoherence JVMを構成することもできます。</span></p>

</div>
</div>
</div>
</doc-view>
