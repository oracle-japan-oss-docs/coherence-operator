![logo](docs/images/logo-with-name.png)

![オペレータCI [「ライセンス」](https://oss.oracle.com/licenses/upl/) [「Report Cardに移動」](https://goreportcard.com/report/github.com/oracle/coherence-operator) GitHubリリース(最新日付)](https://github.com/oracle/coherence-operator/workflows/Operator%20CI/badge.svg?branch=master)![](http://img.shields.io/badge/license-UPL%201.0-blue.svg)![](https://goreportcard.com/badge/github.com/oracle/coherence-operator)![](https://img.shields.io/github/v/release/oracle/coherence-operator)

# Coherence Operator

Oracleを使用すると、[Coherence](https://oracle.github.io/coherence)を使用する組織は、DockerやKubernetesなどの業界標準をサポートすることで、クラウドにクラスタを移動でき、Oracleはクラウドに依存しないインフラストラクチャでのCoherenceの実行を容易にします。また、OracleにはオープンソースのCoherence Operatorが用意されています。これは、Kubernetes環境でのCoherenceクラスタの切替えおよび管理を支援する機能を実装します。次のことができます:

* Coherenceクラスタのメンバーに対してDockerコンテナを使用して、業界標準のKubernetesコンテナ・オーケストレーション・フレームワーク内でCoherenceを実行します。
* `Coherence`カスタム・リソース定義を使用して、クラスタ構成を柔軟にオーバーライドおよびカスタマイズします。
* Kubernetes動詞または更新を使用して、Coherenceクラスタのロールを安全にスケーリングします。
* ポートの公開 (例、Coherence*Extend)して、様々なクライアントを使用してクラスタにアクセスします。
* サーバー側クラスのカスタム・コードをデプロイします。
* Coherenceのディスク・ベース・ストレージ機能であるエラスティック・データまたは永続性を使用する場合は、Kubernetes永続ボリュームを使用します。
* Kubernetesゾーン情報を使用して、Coherenceに格納されているデータがゾーンの損失に対して回復性があることを確認します。Coherenceでは、プロセス、マシン、ラックおよびサイト間でデータの安全性を確保するための優れた取り組みが得られます。Coherence Operatorを使用してCoherenceをKubernetesにデプロイすると、この基礎となる原則がサポートされていることを確認するために、データがゾーン間で分散されます。したがって、デフォルトでは、ゾーンの損失は許容される障害モードです。これは、関連付けられたポッドのkubernetesゾーン・ラベルに相当するメンバー・レベルのサイト情報に加えて、パーティション化されたサービスのStatusHAvalue (SITE-SAFE)に反映されます。
* Grafana、ELK (またはより具体的にはElasticsearch、Fluentd and Kibana (EFK)スタック)、Prometheusなどの一般的な業界標準ツールを使用して、クラスタのパフォーマンス、ログおよびヘルスを監視します。

-------
Coherence Operator向けのドキュメントは、[こちら](https://oracle-japan-oss-docs.github.io/coherence-operator/docs/)で入手できます。

オペレータを最も速く体験するには、[「クイック・スタート・ガイド」](https://oracle-japan-oss-docs.github.io/coherence-operator/docs/#/about/03_quickstart)を参照します。
-------

# さらにサポートが必要ですか? 提案がありますか?

**「パブリックSlackチャネル」**では、オペレータの使用について質問したり、表示する機能や改善点に関するフィードバックや提案を提供することができます。私たちはあなたからの便りが大好きです。チャネルに参加するには、[招待を取得するには、このサイトにアクセスしてください](https://join.slack.com/t/oraclecoherence/shared_invite/enQtNzcxNTQwMTAzNjE4LTJkZWI5ZDkzNGEzOTllZDgwZDU3NGM2YjY5YWYwMzM3ODdkNTU2NmNmNDFhOWIxMDZlNjg2MzE3NmMxZWMxMWE)。  招待メールには、Slackworkspaceへのアクセス方法の詳細が記載されています。ログイン後、`#operator`に移動して「こんにちは。」と言ってください

