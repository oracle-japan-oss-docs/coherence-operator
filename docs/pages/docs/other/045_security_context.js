<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_pod_container_securitycontext"><span class="merged" id="all.2LKvoD" title="原文 : Pod &amp; Container SecurityContext">ポッド&amp;コンテナSecurityContext</span></h2>
<div class="section">
<p><span class="merged" id="all.35izJi.spl1" title="原文 : Kubernetes allows you to configure a Security Context for both Pods and Containers.">Kubernetesでは、ポッドとコンテナの両方に<a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/" id="" target="_blank" >「セキュリティ・コンテキスト」</a>を構成できます。</span> <span class="merged" id="all.35izJi.spl2" title="原文 : The Coherence CRD exposes both of these to allow you to set the security context configuration for the Coherence Pods and for the Coherence containers withing the Pods.">Coherence CRDでは、これらの両方を公開して、Coherenceポッドおよびポッドを含むCoherenceコンテナのセキュリティ・コンテキスト構成を設定できます。</span> </p>

<p><span class="merged" id="all.D75pT" title="原文 : For more details see the Kubernetes Security Context documentation.">詳細は、Kubernetes <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/" id="" target="_blank" >「セキュリティ・コンテキスト」</a>のドキュメントを参照してください。</span></p>


<h3 id="_setting_the_pod_security_context"><span class="merged" id="all.1967XU" title="原文 : Setting the Pod Security Context">ポッド・セキュリティ・コンテキストの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3hQoJR.spl1" title="原文 : To specify security settings for a Pod, include the securityContext field in the Coherence resource specification.">ポッドのセキュリティ設定を指定するには、Coherenceリソース仕様に<code>securityContext</code>フィールドを含めます。</span> <span class="merged" id="all.3hQoJR.spl2" title="原文 : The securityContext field is a PodSecurityContext object.">securityContextフィールドは<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#podsecuritycontext-v1-core" id="" target="_blank" >PodSecurityContext</a>オブジェクトです。</span> <span class="merged" id="all.3hQoJR.spl3" title="原文 : The security settings that you specify for a Pod apply to all Containers in the Pod.">ポッドに指定したセキュリティ設定は、ポッド内のすべてのコンテナに適用されます。</span> <span class="merged" id="all.3hQoJR.spl4" title="原文 : Here is a configuration file for a Pod that has a securityContext:">securityContextを持つポッドの構成ファイルを次に示します:</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  securityContext:
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000</markup>

</div>

<h3 id="_setting_the_coherence_container_security_context"><span class="merged" id="all.1wdIqL" title="原文 : Setting the Coherence Container Security Context">Coherenceコンテナ・セキュリティ・コンテキストの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3Lh64p.spl1" title="原文 : To specify security settings for the Coherence container within the Pods, include the containerSecurityContext field in the Container manifest.">ポッド内のCoherenceコンテナのセキュリティ設定を指定するには、コンテナ・マニフェストに<code>containerSecurityContext</code>フィールドを含めます。</span> <span class="merged" id="all.3Lh64p.spl2" title="原文 : The containerSecurityContext field is a SecurityContext object."><code>containerSecurityContext</code>フィールドは<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#securitycontext-v1-core" id="" target="_blank" >SecurityContext</a>オブジェクトです。</span> <span class="merged" id="all.3Lh64p.spl3" title="原文 : Security settings that you specify in the containerSecurityContext field apply only to the individual Coherence container and the Operator init-container, and they override settings made at the Pod level in the securityContext field when there is overlap."><code>containerSecurityContext</code>フィールドに指定するセキュリティ設定は、個々のCoherenceコンテナおよびOperator init-containerにのみ適用され、重複がある場合は、<code>securityContext</code>フィールドのポッド・レベルで行った設定をオーバーライドします。</span> <span class="merged" id="all.3Lh64p.spl4" title="原文 : Container settings do not affect the Pod&rsquo;s Volumes.">コンテナ設定はポッドのボリュームに影響しません。</span> </p>

<p><span class="merged" id="all.1wLX6L" title="原文 : Here is the configuration file for a Coherence resource that has both the Pod and the container security context:">Podとコンテナ・セキュリティ・コンテキストの両方を持つCoherenceリソースの構成ファイルは、次のとおりです:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: test
spec:
  securityContext:
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
  containerSecurityContext:
      runAsUser: 2000
      allowPrivilegeEscalation: false
      capabilities:
        add: ["NET_ADMIN", "SYS_TIME"]</markup>

</div>
</div>
</doc-view>
