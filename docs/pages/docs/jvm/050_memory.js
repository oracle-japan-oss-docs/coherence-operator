<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_heap_memory_settings"><span class="merged" id="all.4AYjY9" title="原文 : Heap &amp; Memory Settings">ヒープ&amp;メモリー設定</span></h2>
<div class="section">
<p><span class="merged" id="all.189xsW.spl1" title="原文 : The JVM has a number of arguments that set the sizes of different memory regions; the most commonly set is the heap size but there are a number of others.">JVMには様々なメモリー・リージョンのサイズを設定する多数の引数があります。最も一般的にはヒープ・サイズですが、他にも数多くあります。</span> <span class="merged" id="all.189xsW.spl2" title="原文 : The Coherence CRD spec has fields that allow some of these to sizes to be set."><code>Coherence</code> CRD仕様には、これらのいくつかのサイズを設定できるフィールドがあります。</span> </p>

<p><span class="merged" id="all.3QI5xO.spl1" title="原文 : The Coherence CRD also has settings to control the behaviour of the JVM if an out of memory error occurs."><code>Coherence</code> CRDには、メモリー不足エラーが発生した場合にJVMの動作を制御する設定もあります。</span> <span class="merged" id="all.3QI5xO.spl2" title="原文 : For example, killing the container, creating a heap dump etc.">たとえば、コンテナの強制終了、ヒープ・ダンプなどの作成などです。</span> </p>


<h3 id="_max_ram"><span class="merged" id="all.2ryOsR" title="原文 : Max RAM">最大RAM</span></h3>
<div class="section">
<p><span class="merged" id="all.1v9KYJ" title="原文 : The JVM has an option -XX:MaxRAM=N the maximum amount of memory used by the JVM to n, where n is expressed in terms of megabytes (for example, 100m) or gigabytes (for example 2g).">JVMには、オプション<code>-XX:MaxRAM=N</code>があり、JVMに使用されるメモリーの最大量が<code>n</code>になります。<code>n</code>は、メガバイト(たとえば、<code>100m</code>)またはギガバイト(たとえば、<code>2g</code>)の用語で表現されます。</span></p>

<p><span class="merged" id="all.1HKHG" title="原文 : When using resource limited containers it is useful to set the max RAM option to avoid the JVM exceeding the container limits.">リソース制限コンテナを使用する場合、JVMがコンテナ制限を超えないように最大RAMオプションを設定しておくと便利です。</span></p>

<p><span class="merged" id="all.2s10xd" title="原文 : The Coherence CRD allows the max RAM option to be set using the jvm.memory.maxRAM field, for example:"><code>Coherence</code> CRDでは、<code>jvm.memory.maxRAM</code>フィールドを使用して最大RAMオプションを設定できます。次に例を示します:</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    memory:
      maxRAM: 10g</markup>

</div>

<h3 id="_heap_size_as_a_percentage_of_container_memory"><span class="merged" id="all.DGpYR" title="原文 : Heap Size as a Percentage of Container Memory">コンテナ・メモリーの割合としてのヒープ・サイズ</span></h3>
<div class="section">
<p><span class="merged" id="all.2eK64I.spl1" title="原文 : There are three JVM options that can be used to control the JVM heap as a percentage of the available memory.">JVMヒープを使用可能なメモリーの割合として制御するために使用できる3つのJVMオプションがあります。</span> <span class="merged" id="all.2eK64I.spl2" title="原文 : These options can be useful when controlling memory as a percentage of container memory in combination with resource limits on containers.">これらのオプションは、コンテナのリソース制限と組み合せて、メモリーをコンテナ・メモリーの割合として制御する場合に役立ちます。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 20%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4aWXsE"  title="原文:: JVM Option">JVMオプション</span></th>
<th><span class="merged" id="all.4JM9z7.40"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2xctqM"  title="原文: -XX:InitialRAMPercentage=N"><code>-XX:InitialRAMPercentage=N</code></span></td>
<td class=""><span class="merged" id="all.K1LBD.spl1"  title="原文: Sets the initial amount of memory that the JVM will use for the Java heap before applying ergonomics heuristics as a percentage of the maximum amount determined as described in the -XX:MaxRAM option.">-XX:MaxRAMオプションで説明されているとおり、人間工学に基づくヒューリスティックを最大量の割合として適用する前に、JVMがJavaヒープに使用する初期のメモリー量を設定します。</span> <span class="merged" id="all.K1LBD.spl2"  title="原文: The default value is 1.5625 percent.">デフォルト値は1.5625%です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3nnCkS"  title="原文: &apos;-XX:MaxRAMPercentage=N&apos;">'-XX:MaxRAMPercentage=N'</span></td>
<td class=""><span class="merged" id="all.poywI.spl1"  title="原文: Sets the maximum amount of memory that the JVM may use for the Java heap before applying ergonomics heuristics as a percentage of the maximum amount determined as described in the -XX:MaxRAM option."><code>-XX:MaxRAM</code>オプションで説明されているとおり、人間工学に基づくヒューリスティックを最大量の割合として適用する前に、JVMがJavaヒープに使用できるメモリーの最大量を設定します。</span> <span class="merged" id="all.poywI.spl2"  title="原文: The default value is 25 percent.">デフォルト値は25%です。</span> </td><td class=""><span class="merged" id="all.1lMv2x"  title="原文: Specifying this option disables automatic use of compressed oops if the combined result of this and other options influencing the maximum amount of memory is larger than the range of memory addressable by compressed oops.">このオプションを指定すると、このオプションと、メモリーの最大量に影響する他のオプションを組み合せた結果が、圧縮oopsでアドレス指定されたメモリーの範囲よりも大きい場合に、圧縮oopsの自動使用が無効になります。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ul6iv"  title="原文: &apos;-XX:MinRAMPercentage=N&apos;">'-XX:MinRAMPercentage=N'</span></td>
<td class=""><span class="merged" id="all.4j8Hz.spl1"  title="原文: Sets the maximum amount of memory that the JVM may use for the Java heap before applying ergonomics heuristics as a percentage of the maximum amount determined as described in the -XX:MaxRAM option for small heaps.">小さいヒープ用の-XX:MaxRAMオプションで説明されているとおり、人間工学に基づくヒューリスティックを最大量の割合として適用する前に、JVMがJavaヒープに使用できるメモリーの最大量を設定します。</span> <span class="merged" id="all.4j8Hz.spl2"  title="原文: A small heap is a heap of approximately 125 MB.">小さいヒープは、約125 MBのヒープです。</span> <span class="merged" id="all.4j8Hz.spl3"  title="原文: The default value is 50 percent.">デフォルト値は50%です。</span> </td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.2AzHbt.spl1" title="原文 : Where N is a decimal value between 0 and 100.">ここで、<code>N</code>は0から100までの10進値です。</span> <span class="merged" id="all.2AzHbt.spl2"  title="原文:: For example, 12.3456.">次に例を示します。 12.3456</span> </p>

<p><span class="merged" id="all.3HsvP3" title="原文 : When running in a container, and the -XX:+UseContainerSupport is set (which it is by default for the Coherence container), both the default heap size for containers, the -XX:InitialRAMPercentage option, the -XX:MaxRAMPercentage option, and the -XX:MaxRAMPercentage option, will be based on the available container memory.">コンテナで実行していて、<code>-XX:+UseContainerSupport</code>が設定されている場合(デフォルトでCoherenceコンテナ用)、コンテナのデフォルトのヒープ・サイズ、<code>-XX:InitialRAMPercentage</code>オプション、<code>-XX:MaxRAMPercentage</code>オプションおよび<code>-XX:MaxRAMPercentage</code>オプションは、使用可能なコンテナ・メモリーに基づきます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.IdXI8" title="原文 : Some JVMs may not support these options.">一部のJVMでは、これらのオプションがサポートされない場合があります。</span></p>
</div>
<p><span class="merged" id="all.4HADFQ" title="原文 : The Coherence CRD allows these options to be set with the jvm.memory.initialRAMPercentage, jvm.memory.minRAMPercentage, and jvm.memory.maxRAMPercentage fields."><code>Coherence</code> CRDでは、<code>jvm.memory.initialRAMPercentage</code>、<code>jvm.memory.minRAMPercentage</code>および<code>jvm.memory.maxRAMPercentage</code>フィールドを使用してこれらのオプションを設定できます。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    memory:
      initialRAMPercentage: 10
      minRAMPercentage: 5.75
      maxRAMPercentage: 75</markup>


<h4 id="_set_heap_percentages_from_a_single_value"><span class="merged" id="all.1VElfm" title="原文 : Set Heap Percentages From a Single Value">単一値からのヒープ率の設定</span></h4>
<div class="section">
<p><span class="merged" id="all.MJ0O1.spl1" title="原文 : Typically, with Coherence storage members the initial and maximum heap values will be set to the same value so that the JVM runs with a fixed size heap.">通常、Coherenceストレージ・メンバーでは、初期ヒープ値と最大ヒープ値が同じ値に設定されるため、JVMは固定サイズのヒープで実行されます。</span> <span class="merged" id="all.MJ0O1.spl2" title="原文 : The Coherence CRD provides the jvm.memory.percentage field for this use-case."><code>Coherence</code> CRDは、このユースケースの<code>jvm.memory.percentage</code>フィールドを提供します。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    memory:
      percentage: 10  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1ue9r" title="原文 : In this case the percentage field has been set to 10, so the options passed to the JVM will be -XX:InitialRAMPercentage=10 -XX:MinRAMPercentage=10 -XX:MaxRAMPercentage=10 meaning the heap size will be fixed at 10% of max RAM.">この場合、<code>percentage</code>フィールドは<code>10</code>に設定されているため、JVMに渡されるオプションは<code>-XX:InitialRAMPercentage=10 -XX:MinRAMPercentage=10 -XX:MaxRAMPercentage=10</code>となり、ヒープ・サイズは最大RAMの10%に固定されます。</span></li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.c6Aml" title="原文 : Setting the jvm.memory.percentage field will cause individual RAM percentage fields to be ignored."><code>jvm.memory.percentage</code>フィールドを設定すると、個々のRAM率フィールドが無視されます。</span></p>
</div>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.bJDhw.spl1" title="原文 : The JVM documentation states that &quot;If you set a value for -Xms, the -XX:InitialRAMPercentage, -XX:MinRAMPercentage and -XX:MaxRAMPercentage options will be ignored&quot;.">JVMドキュメントには、<em>「<code>-Xms</code>の値を設定すると、<code>-XX:InitialRAMPercentage</code>、<code>-XX:MinRAMPercentage</code>および<code>-XX:MaxRAMPercentage</code>オプションは無視されます」</em>と記述されています。</span> <span class="merged" id="all.bJDhw.spl2" title="原文 : So if the Coherence CRD fields detailed below for explictly setting the heap size as a bytes value are used then we can assume that the RAM percentage fields detailed here will be ignored by the JVM.">したがって、ヒープ・サイズをバイト値として明示的に設定するために次に説明する<code>Coherence</code> CRDフィールドが使用される場合、ここで説明するRAMの割合フィールドはJVMによって無視されます。</span> <span class="merged" id="all.bJDhw.spl3" title="原文 : The Coherence Operator will pass both the percentage and explicit values to the JVM.">Coherence Operatorは、パーセンテージと明示的な値の両方をJVMに渡します。</span> </p>
</div>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2EddBm" title="原文 : Due to CRDs not supporting decimal fields the RAM percentage fields are of type resource.Quantity, see the Kubernetes Quantity API docs for details of the different number formats allowed.">CRDが10進フィールドをサポートしていないため、RAMパーセント・フィールドはresource.Quantity型です。許可される様々な数値書式の詳細は、Kubernetes <a href="https://godoc.org/k8s.io/apimachinery/pkg/api/resource#Quantity" id="" target="_blank" >「数量」</a> APIドキュメントを参照してください。</span></p>
</div>
</div>
</div>

<h3 id="_set_heap_size_explicitly"><span class="merged" id="all.1FSpMX" title="原文 : Set Heap Size Explicitly">ヒープ・サイズを明示的に設定</span></h3>
<div class="section">
<p><span class="merged" id="all.2geaCK.spl1" title="原文 : There are two JVM options that can be used to control the JVM heap as an explicit size in bytes value.">JVMヒープをバイト値の明示的なサイズとして制御するために使用できる2つのJVMオプションがあります。</span> <span class="merged" id="all.2geaCK.spl2" title="原文 : These options can be useful when controlling memory of container memory in combination with resource limits on containers.">これらのオプションは、コンテナのリソース制限と組み合せてコンテナ・メモリーのメモリーを制御する場合に役立ちます。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4aWXsE.1"  title="原文:: JVM Option">JVMオプション</span></th>
<th><span class="merged" id="all.4JM9z7.41"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.gClxo"  title="原文: -XX:InitialHeapSize=&lt;size&gt;"><code>-XX:InitialHeapSize=&lt;size></code></span></td>
<td class=""><span class="merged" id="all.46s9Uf" title="原文 : Set initial heap size">初期ヒープ・サイズの設定</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1GtVo7"  title="原文: -XX:MaxHeapSize=&lt;size&gt;"><code>-XX:MaxHeapSize=&lt;size></code></span></td>
<td class=""><span class="merged" id="all.19xLxx" title="原文 : Set maximum heap size">最大ヒープ・サイズの設定</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.2PYNEu" title="原文 : The &lt;size&gt; parameter is a numeric integer followed by a suffix to the size value: &quot;k&quot; or &quot;K&quot; to indicate kilobytes, &quot;m&quot; or &quot;M&quot; to indicate megabytes, &quot;g&quot; or &quot;G&quot; to indicate gigabytes, or, &quot;t&quot; or &quot;T&quot; to indicate terabytes."><code>&lt;size></code>パラメータは数値整数で、その後にサイズ値のサフィクスが続きます: キロバイトを示す"k"または"K"、メガバイトを示す"m"または"M"、ギガバイトを示す"g"または"G"、テラバイトを示す"t"または"T"です。</span></p>

<p><span class="merged" id="all.6vDv5.11"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    memory:
      initialHeapSize: 5g  <span class="conum" data-value="1" />
      maxHeapSize: 10g     <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2XOETb" title="原文 : The initial heap size to 5g, passing the -XX:InitialHeapSize=5g option to the JVM."><code>5g</code>への初期ヒープ・サイズで、<code>-XX:InitialHeapSize=5g</code>オプションをJVMに渡します。</span></li>
<li data-value="2"><span class="merged" id="all.i1iU7" title="原文 : The max heap size to 10g, passing the -XX:MaxHeapSize=10g option to the JVM."><code>10g</code>への最大ヒープ・サイズで、<code>-XX:MaxHeapSize=10g</code>オプションをJVMに渡します。</span></li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3V5lLV" title="原文 : Setting the jvm.memory.heapSize field will cause individual jvm.memory.initialHeapSize and jvm.memory.maxHeapSize fields to be ignored."><code>jvm.memory.heapSize</code>フィールドを設定すると、個々の<code>jvm.memory.initialHeapSize</code>および<code>jvm.memory.maxHeapSize</code>フィールドは無視されます。</span></p>
</div>

<h4 id="_set_initial_and_max_heap_size_with_a_single_value"><span class="merged" id="all.3ykbQJ" title="原文 : Set Initial and Max Heap Size With a Single Value">初期ヒープ・サイズと最大ヒープ・サイズを1つの値に設定</span></h4>
<div class="section">
<p><span class="merged" id="all.2WxjZq.spl1" title="原文 : Typically, with Coherence storage members the initial and maximum heap values will be set to the same value so that the JVM runs with a fixed size heap.">通常、Coherenceストレージ・メンバーでは、初期ヒープ値と最大ヒープ値が同じ値に設定されるため、JVMは固定サイズのヒープで実行されます。</span> <span class="merged" id="all.2WxjZq.spl2" title="原文 : The Coherence CRD provides the jvm.memory.heapSize field for this use-case."><code>Coherence</code> CRDは、このユースケースの<code>jvm.memory.heapSize</code>フィールドを提供します。</span> </p>

<p><span class="merged" id="all.3pnVcl.spl1" title="原文 : To set the JVM both the initial amd max heap sizes to the same value, set the jvm.memory.heapSize field.">初期値および最大ヒープ・サイズの両方のJVMを同じ値に設定するには、<code>jvm.memory.heapSize</code>フィールドを設定します。</span> <span class="merged" id="all.3pnVcl.spl2" title="原文 : The value of the field can be any value that can be used with the JVM -XX:InitialHeapSize and -XX:MaxHeapSize (or -Xmx and -Xms) arguments.">フィールドの値は、JVM <code>-XX:InitialHeapSize</code>および<code>-XX:MaxHeapSize</code> (または<code>-Xmx</code>および<code>-Xms</code>)引数で使用できる任意の値です。</span> <span class="merged" id="all.3pnVcl.spl3" title="原文 : The value of the jvm.memory.heapSize field will be used to set both the -XX:InitialHeapSize, and the -XX:MaxHeapSize arguments to the same value, so the heap will be a fixed size."><code>jvm.memory.heapSize</code>フィールドの値は、<code>-XX:InitialHeapSize</code>引数と<code>-XX:MaxHeapSize</code>引数の両方を同じ値に設定するために使用されるため、ヒープは固定サイズになります。</span> </p>

<p><span class="merged" id="all.6vDv5.12"  title="原文:: For example:">次に例を示します。</span></p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    memory:
      heapSize: 10g  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1DF6Js" title="原文 : Setting jvm.memory.heapSize to 10g will effectively pass -XX:InitialHeapSize=10g -XX:MaxHeapSize=10g to the JVM."><code>jvm.memory.heapSize</code>を<code>10g</code>に設定すると、<code>-XX:InitialHeapSize=10g -XX:MaxHeapSize=10g</code>がJVMに事実上渡されます。</span></li>
</ul>
</div>
</div>

<h3 id="_direct_memory_size_nio_memory"><span class="merged" id="all.2nNSPg" title="原文 : Direct Memory Size (NIO Memory)">直接メモリー・サイズ(NIOメモリー)</span></h3>
<div class="section">
<p><span class="merged" id="all.1nEH5d.spl1" title="原文 : Direct memory size is used to limit on memory that can be reserved for all Direct Byte Buffers.">ダイレクト・メモリー・サイズは、すべてのDirect Byte Buffers用に予約できるメモリーの制限に使用されます。</span> <span class="merged" id="all.1nEH5d.spl2" title="原文 : If a value is set for this option, the sum of all Direct Byte Buffer sizes cannot exceed the limit.">このオプションに値を設定すると、すべてのダイレクト・バイト・バッファ・サイズの合計が制限を超えることはできません。</span> <span class="merged" id="all.1nEH5d.spl3" title="原文 : After the limit is reached, a new Direct Byte Buffer can be allocated only when enough old buffers are freed to provide enough space to allocate the new buffer.">制限に達した後、新しいバッファを割り当てるための十分な領域を提供するために十分な古いバッファが解放された場合にのみ、新しいダイレクト・バイト・バッファを割り当てることができます。</span> </p>

<p><span class="merged" id="all.csZAe" title="原文 : By default, the VM limits the amount of heap memory used for Direct Byte Buffers to approximately 85% of the maximum heap size.">デフォルトでは、VMはダイレクト・バイト・バッファに使用されるヒープ・メモリーの量を、最大ヒープ・サイズの約85%に制限します。</span></p>

<p><span class="merged" id="all.3P4nVK.spl1" title="原文 : To set a value for the direct memory size use the jvm.memory.directMemorySize field.">ダイレクト・メモリー・サイズの値を設定するには、<code>jvm.memory.directMemorySize</code>フィールドを使用します。</span> <span class="merged" id="all.3P4nVK.spl2" title="原文 : This wil set the value of the -XX:MaxDirectMemorySize JVM option.">これにより、<code>-XX:MaxDirectMemorySize</code> JVMオプションの値が設定されます。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    memory:
      directMemorySize: 10g  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4J3CV7" title="原文 : The direct memory size is set to 10g which will pass -XX:MaxDirectMemorySize=10g to the JVM.">ダイレクト・メモリー・サイズは<code>10g</code>に設定され、JVMに<code>-XX:MaxDirectMemorySize=10g</code>を渡します。</span></li>
</ul>
</div>

<h3 id="_metaspace_size"><span class="merged" id="all.hzQJR" title="原文 : Metaspace Size">メタ・スペース・サイズ</span></h3>
<div class="section">
<p><span class="merged" id="all.2GQCO.spl1" title="原文 : Metaspace is memory the VM uses to store class metadata.">Metaspaceは、VMがクラス・メタデータを格納するために使用するメモリーです。</span> <span class="merged" id="all.2GQCO.spl2" title="原文 : Class metadata are the runtime representation of java classes within a JVM process - basically any information the JVM needs to work with a Java class.">クラス・メタデータは、JVMプロセス内のjavaクラスのランタイム表現です - JVMがJavaクラスで機能するために必要な基本情報。</span> <span class="merged" id="all.2GQCO.spl3" title="原文 : That includes, but is not limited to, runtime representation of data from the JVM class file format.">これには、JVMクラス・ファイル形式のデータの実行時表現が含まれますが、これに限定されません。</span> </p>

<p><span class="merged" id="all.1F6tpy.spl1" title="原文 : To set the size of the metaspace use the jvm.memory.metaspaceSize field in the Coherence CRD.">メタ・スペースのサイズを設定するには、<code>Coherence</code> CRDの<code>jvm.memory.metaspaceSize</code>フィールドを使用します。</span> <span class="merged" id="all.1F6tpy.spl2" title="原文 : Setting this field sets both the -XX:MetaspaceSize and -XX:MaxMetaspaceSize JVM options to this value giving a fixed size metaspace.">このフィールドを設定すると、<code>-XX:MetaspaceSize</code>と<code>-XX:MaxMetaspaceSize</code>の両方のJVMオプションがこの値に設定され、固定サイズのメタ・スペースが提供されます。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    memory:
      metaspaceSize: 100m  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1ggfiq" title="原文 : Set the metaspace size to 100m which will pass -XX:MetaspaceSize=100m -XX:MaxMetaspaceSize=100m to the JVM."><code>-XX:MetaspaceSize=100m -XX:MaxMetaspaceSize=100m</code>をJVMに渡すメタ領域サイズを<code>100m</code>に設定します。</span></li>
</ul>
</div>

<h3 id="_stack_size"><span class="merged" id="all.22s44q"  title="原文:: Stack Size">スタック・サイズ</span></h3>
<div class="section">
<p><span class="merged" id="all.LHav9.spl1"  title="原文: Thread stacks are memory areas allocated for each Java thread for their internal use.">スレッド・スタックは、各Javaスレッドが内部的に使用するために割り当てられるメモリー領域です。</span> <span class="merged" id="all.LHav9.spl2"  title="原文: This is where the thread stores its local execution state.">ここにスレッドのローカルの実行状態が格納されます。</span> <span class="merged" id="all.LHav9.spl3" title="原文 : The current default size for a linux JVM is 1MB.">linux JVMの現在のデフォルト・サイズは1MBです。</span> </p>

<p><span class="merged" id="all.42fCc5.spl1" title="原文 : To set the stack size use the jvm.memory.stackSize field in the Coherence CRD.">スタック・サイズを設定するには、<code>Coherence</code> CRDの<code>jvm.memory.stackSize</code>フィールドを使用します。</span> <span class="merged" id="all.42fCc5.spl2" title="原文 : Setting this value sets the -Xss JVM option.">この値を設定すると、<code>-Xss</code> JVMオプションが設定されます。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    memory:
      stackSize: 500k  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1czLmk" title="原文 : The stack size will be set to 500k, passing -Xss500k to the JVM.">スタック・サイズは<code>500k</code>に設定され、JVMに<code>-Xss500k</code>を渡します。</span></li>
</ul>
</div>

<h3 id="_out_of_memory_behaviour"><span class="merged" id="all.2NfUDR" title="原文 : Out Of Memory Behaviour">メモリー不足動作</span></h3>
<div class="section">
<p><span class="merged" id="all.15cwOH" title="原文 : The Coherence CRD allows two optional behaviours to be specified if the JVM throws an out of memory error."><code>Coherence</code> CRDを使用すると、JVMがメモリー不足エラーをスローした場合に2つのオプションの動作を指定できます。</span></p>

<p><span class="merged" id="all.2MKcbk.spl1" title="原文 : The jvm.memory.onOutOfMemory.heapDump is a bool field that when set to true will pass the -XX:+HeapDumpOnOutOfMemoryError option to the JVM."><code>jvm.memory.onOutOfMemory.heapDump</code>は、trueに設定すると<code>-XX:+HeapDumpOnOutOfMemoryError</code>オプションがJVMに渡されるブール・フィールドです。</span> <span class="merged" id="all.2MKcbk.spl2" title="原文 : The default value of the field when not specified is true, hence to turn off heap dumps on OOM set the specifically field to be false.">指定しない場合のフィールドのデフォルト値は<code>true</code>であるため、OOMのヒープ・ダンプをオフにすると、特にフィールドが<code>false</code>に設定されます。</span> </p>

<p><span class="merged" id="all.3Xk3sm.spl1" title="原文 : The jvm.memory.onOutOfMemory.exit is a bool field that when set to true will pass the -XX:+ExitOnOutOfMemoryError option to the JVM."><code>jvm.memory.onOutOfMemory.exit</code>は、trueに設定すると<code>-XX:+ExitOnOutOfMemoryError</code>オプションがJVMに渡されるブール・フィールドです。</span> <span class="merged" id="all.3Xk3sm.spl2" title="原文 : The default value of the field when not specified is true, hence to turn off killing the JVM on OOM set the specifically field to be false.">指定しない場合のフィールドのデフォルト値は<code>true</code>であるため、OOMのJVMを強制終了すると、特にフィールドが<code>false</code>に設定されます。</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    memory:
      onOutOfMemory:
        heapDump: true   <span class="conum" data-value="1" />
        exit: true       <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1cTRXE" title="原文 : The JVM will create a heap dump on OOM">JVMはOOMにヒープ・ダンプを作成</span></li>
<li data-value="2"><span class="merged" id="all.1cfIrM" title="原文 : The JVM will exit on OOM">JVMはOOMで終了</span></li>
</ul>
</div>

<h3 id="_native_memory_tracking"><span class="merged" id="all.2Gl7W"  title="原文:: Native Memory Tracking">ネイティブ・メモリー・トラッキング</span></h3>
<div class="section">
<p><span class="merged" id="all.3fO5i.spl1" title="原文 : The Native Memory Tracking (NMT) is a Java VM feature that tracks internal memory usage for a JVM.">ネイティブ・メモリー・トラッキング(NMT)は、JVMの内部メモリー使用状況を追跡するJava VM機能です。</span> <span class="merged" id="all.3fO5i.spl2" title="原文 : The Coherence CRD allows native memory tracking to be configured using the jvm.memory.nativeMemoryTracking field."><code>Coherence</code> CRDを使用すると、<code>jvm.memory.nativeMemoryTracking</code>フィールドを使用してネイティブ・メモリー・トラッキングを構成できます。</span> <span class="merged" id="all.3fO5i.spl3" title="原文 : Setting this field sets the -XX:NativeMemoryTracking JVM option.">このフィールドを設定すると、<code>-XX:NativeMemoryTracking</code> JVMオプションが設定されます。</span> <span class="merged" id="all.3fO5i.spl4" title="原文 : There are three valid values, off, summary or detail.">有効な値は、<code>off</code>、<code>summary</code>または<code>detail</code>の3つです。</span> <span class="merged" id="all.3fO5i.spl5" title="原文 : If not specified the default value used by the operator is summary">指定しない場合、オペレータで使用されるデフォルト値は<code>summary</code>です</span> </p>

<markup
lang="yaml"

>apiVersion: coherence.oracle.com/v1
kind: Coherence
metadata:
  name: storage
spec:
  jvm:
    memory:
      nativeMemoryTracking: detail <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2hF2GB" title="原文 : Native memory tracking is set to detail which will pass the -XX:NativeMemoryTracking=detail option to the JVM.">ネイティブ・メモリー・トラッキングは<code>detail</code>に設定され、<code>-XX:NativeMemoryTracking=detail</code>オプションがJVMに渡されます。</span></li>
</ul>
</div>
</div>
</doc-view>
