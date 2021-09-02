
function createConfig() {
    return {
        home: "about/01_overview",
        release: "3.2.1",
        releases: [
            "3.2.1"
        ],
        pathColors: {
            "*": "blue-grey"
        },
        theme: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
        },
        navTitle: 'Coherence Operator',
        navIcon: null,
        navLogo: 'images/logo.png'
    };
}
function createRoutes(){
    return [
        {
            path: '/about/01_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: 'Coherence Operator documentation',
                keywords: 'oracle coherence, kubernetes, operator, documentation',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-01_overview', '/about/01_overview', {})
        },
        {
            path: '/about/02_introduction',
            meta: {
                h1: 'Coherence Operatorの概要',
                title: 'Coherence Operatorの概要',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-02_introduction', '/about/02_introduction', {})
        },
        {
            path: '/about/03_quickstart',
            meta: {
                h1: 'クイック・スタート',
                title: 'クイック・スタート',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-03_quickstart', '/about/03_quickstart', {})
        },
        {
            path: '/about/04_coherence_spec',
            meta: {
                h1: 'Coherence Operator APIドキュメント',
                title: 'Coherence Operator APIドキュメント',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-04_coherence_spec', '/about/04_coherence_spec', {})
        },
        {
            path: '/about/05_upgrade',
            meta: {
                h1: 'バージョン2からのアップグレード',
                title: 'バージョン2からのアップグレード',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-05_upgrade', '/about/05_upgrade', {})
        },
        {
            path: '/installation/01_installation',
            meta: {
                h1: 'Coherence Operatorのインストール',
                title: 'Coherence Operatorのインストール',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('installation-01_installation', '/installation/01_installation', {})
        },
        {
            path: '/installation/02_pre_release_versions',
            meta: {
                h1: 'リリース前のバージョンへのアクセス',
                title: 'リリース前のバージョンへのアクセス',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('installation-02_pre_release_versions', '/installation/02_pre_release_versions', {})
        },
        {
            path: '/installation/04_obtain_coherence_images',
            meta: {
                h1: 'Coherenceイメージの取得',
                title: 'Coherenceイメージの取得',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('installation-04_obtain_coherence_images', '/installation/04_obtain_coherence_images', {})
        },
        {
            path: '/installation/05_private_repos',
            meta: {
                h1: 'プライベート・イメージ・レジストリの使用',
                title: 'プライベート・イメージ・レジストリの使用',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('installation-05_private_repos', '/installation/05_private_repos', {})
        },
        {
            path: '/installation/06_openshift',
            meta: {
                h1: 'OpenShiftでのCoherenceクラスタ',
                title: 'OpenShiftでのCoherenceクラスタ',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('installation-06_openshift', '/installation/06_openshift', {})
        },
        {
            path: '/installation/07_webhooks',
            meta: {
                h1: 'オペレータのWebフック',
                title: 'オペレータのWebフック',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('installation-07_webhooks', '/installation/07_webhooks', {})
        },
        {
            path: '/installation/08_networking',
            meta: {
                h1: 'O/Sネットワーキング構成',
                title: 'O/Sネットワーキング構成',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('installation-08_networking', '/installation/08_networking', {})
        },
        {
            path: '/installation/09_RBAC',
            meta: {
                h1: 'RBACの役割',
                title: 'RBACの役割',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('installation-09_RBAC', '/installation/09_RBAC', {})
        },
        {
            path: '/applications/010_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('applications-010_overview', '/applications/010_overview', {})
        },
        {
            path: '/applications/020_build_application',
            meta: {
                h1: 'アプリケーション・イメージの構築',
                title: 'アプリケーション・イメージの構築',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('applications-020_build_application', '/applications/020_build_application', {})
        },
        {
            path: '/applications/030_deploy_application',
            meta: {
                h1: 'Coherenceアプリケーションのデプロイ',
                title: 'Coherenceアプリケーションのデプロイ',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('applications-030_deploy_application', '/applications/030_deploy_application', {})
        },
        {
            path: '/applications/040_application_main',
            meta: {
                h1: 'アプリケーション・メインの設定',
                title: 'アプリケーション・メインの設定',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('applications-040_application_main', '/applications/040_application_main', {})
        },
        {
            path: '/applications/050_application_args',
            meta: {
                h1: 'アプリケーション引数の設定',
                title: 'アプリケーション引数の設定',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('applications-050_application_args', '/applications/050_application_args', {})
        },
        {
            path: '/applications/060_application_working_dir',
            meta: {
                h1: '作業ディレクトリの設定',
                title: '作業ディレクトリの設定',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('applications-060_application_working_dir', '/applications/060_application_working_dir', {})
        },
        {
            path: '/applications/070_spring',
            meta: {
                h1: 'Spring Bootアプリケーション',
                title: 'Spring Bootアプリケーション',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('applications-070_spring', '/applications/070_spring', {})
        },
        {
            path: '/coherence/010_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-010_overview', '/coherence/010_overview', {})
        },
        {
            path: '/coherence/020_cluster_name',
            meta: {
                h1: 'Coherenceクラスタ名',
                title: 'Coherenceクラスタ名',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-020_cluster_name', '/coherence/020_cluster_name', {})
        },
        {
            path: '/coherence/021_member_identity',
            meta: {
                h1: 'メンバー・アイデンティティ',
                title: 'メンバー・アイデンティティ',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-021_member_identity', '/coherence/021_member_identity', {})
        },
        {
            path: '/coherence/030_cache_config',
            meta: {
                h1: 'キャッシュ構成ファイル',
                title: 'キャッシュ構成ファイル',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-030_cache_config', '/coherence/030_cache_config', {})
        },
        {
            path: '/coherence/040_override_file',
            meta: {
                h1: '操作構成ファイル',
                title: '操作構成ファイル',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-040_override_file', '/coherence/040_override_file', {})
        },
        {
            path: '/coherence/050_storage_enabled',
            meta: {
                h1: 'ストレージが有効または無効',
                title: 'ストレージが有効または無効',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-050_storage_enabled', '/coherence/050_storage_enabled', {})
        },
        {
            path: '/coherence/060_log_level',
            meta: {
                h1: 'Coherenceログ・レベル',
                title: 'Coherenceログ・レベル',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-060_log_level', '/coherence/060_log_level', {})
        },
        {
            path: '/coherence/070_wka',
            meta: {
                h1: 'よく知られたアドレス指定',
                title: 'よく知られたアドレス指定',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-070_wka', '/coherence/070_wka', {})
        },
        {
            path: '/coherence/080_persistence',
            meta: {
                h1: 'Coherenceの永続性',
                title: 'Coherenceの永続性',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-080_persistence', '/coherence/080_persistence', {})
        },
        {
            path: '/coherence/090_ipmonitor',
            meta: {
                h1: 'Coherence IPMonitor',
                title: 'Coherence IPMonitor',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-090_ipmonitor', '/coherence/090_ipmonitor', {})
        },
        {
            path: '/jvm/010_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('jvm-010_overview', '/jvm/010_overview', {})
        },
        {
            path: '/jvm/020_classpath',
            meta: {
                h1: 'クラスパスの設定',
                title: 'クラスパスの設定',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('jvm-020_classpath', '/jvm/020_classpath', {})
        },
        {
            path: '/jvm/030_jvm_args',
            meta: {
                h1: '任意のJVM引数',
                title: '任意のJVM引数',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('jvm-030_jvm_args', '/jvm/030_jvm_args', {})
        },
        {
            path: '/jvm/040_gc',
            meta: {
                h1: 'ガベージ・コレクタ設定',
                title: 'ガベージ・コレクタ設定',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('jvm-040_gc', '/jvm/040_gc', {})
        },
        {
            path: '/jvm/050_memory',
            meta: {
                h1: 'ヒープ&メモリーの設定',
                title: 'ヒープ&メモリーの設定',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('jvm-050_memory', '/jvm/050_memory', {})
        },
        {
            path: '/jvm/070_debugger',
            meta: {
                h1: 'デバッガの構成',
                title: 'デバッガの構成',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('jvm-070_debugger', '/jvm/070_debugger', {})
        },
        {
            path: '/jvm/080_jmx',
            meta: {
                h1: 'JMXの使用',
                title: 'JMXの使用',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('jvm-080_jmx', '/jvm/080_jmx', {})
        },
        {
            path: '/jvm/090_container_limits',
            meta: {
                h1: 'コンテナ・リソース制限',
                title: 'コンテナ・リソース制限',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('jvm-090_container_limits', '/jvm/090_container_limits', {})
        },
        {
            path: '/ports/010_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('ports-010_overview', '/ports/010_overview', {})
        },
        {
            path: '/ports/020_container_ports',
            meta: {
                h1: '追加コンテナ・ポート',
                title: '追加コンテナ・ポート',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('ports-020_container_ports', '/ports/020_container_ports', {})
        },
        {
            path: '/ports/030_services',
            meta: {
                h1: 'ポートのサービスの構成',
                title: 'ポートのサービスの構成',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('ports-030_services', '/ports/030_services', {})
        },
        {
            path: '/ports/040_servicemonitors',
            meta: {
                h1: 'Prometheus ServiceMonitors',
                title: 'Prometheus ServiceMonitors',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('ports-040_servicemonitors', '/ports/040_servicemonitors', {})
        },
        {
            path: '/scaling/010_overview',
            meta: {
                h1: 'Coherenceデプロイメントのスケーリング',
                title: 'Coherenceデプロイメントのスケーリング',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('scaling-010_overview', '/scaling/010_overview', {})
        },
        {
            path: '/ordering/010_overview',
            meta: {
                h1: 'デプロイメント開始順序',
                title: 'デプロイメント開始順序',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('ordering-010_overview', '/ordering/010_overview', {})
        },
        {
            path: '/management/010_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('management-010_overview', '/management/010_overview', {})
        },
        {
            path: '/management/020_management_over_rest',
            meta: {
                h1: 'RESTを介した管理',
                title: 'RESTを介した管理',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('management-020_management_over_rest', '/management/020_management_over_rest', {})
        },
        {
            path: '/management/030_visualvm',
            meta: {
                h1: 'VisualVMの使用',
                title: 'VisualVMの使用',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('management-030_visualvm', '/management/030_visualvm', {})
        },
        {
            path: '/management/040_ssl',
            meta: {
                h1: 'RESTを介した管理でのSSL',
                title: 'RESTを介した管理でのSSL',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('management-040_ssl', '/management/040_ssl', {})
        },
        {
            path: '/management/100_tmb_test',
            meta: {
                h1: 'Coherenceネットワーク・テスト',
                title: 'Coherenceネットワーク・テスト',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('management-100_tmb_test', '/management/100_tmb_test', {})
        },
        {
            path: '/metrics/010_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('metrics-010_overview', '/metrics/010_overview', {})
        },
        {
            path: '/metrics/020_metrics',
            meta: {
                h1: 'メトリクスの公開',
                title: 'メトリクスの公開',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('metrics-020_metrics', '/metrics/020_metrics', {})
        },
        {
            path: '/metrics/030_importing',
            meta: {
                h1: 'Grafanaダッシュボードのインポート',
                title: 'Grafanaダッシュボードのインポート',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('metrics-030_importing', '/metrics/030_importing', {})
        },
        {
            path: '/metrics/040_dashboards',
            meta: {
                h1: 'Grafanaダッシュボード',
                title: 'Grafanaダッシュボード',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('metrics-040_dashboards', '/metrics/040_dashboards', {})
        },
        {
            path: '/metrics/050_ssl',
            meta: {
                h1: 'メトリクス付きSSL',
                title: 'メトリクス付きSSL',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('metrics-050_ssl', '/metrics/050_ssl', {})
        },
        {
            path: '/logging/010_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('logging-010_overview', '/logging/010_overview', {})
        },
        {
            path: '/logging/020_logging',
            meta: {
                h1: 'Fluentdによるログ取得',
                title: 'Fluentdによるログ取得',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('logging-020_logging', '/logging/020_logging', {})
        },
        {
            path: '/logging/030_kibana',
            meta: {
                h1: 'Kibanaダッシュボードの使用',
                title: 'Kibanaダッシュボードの使用',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('logging-030_kibana', '/logging/030_kibana', {})
        },
        {
            path: '/other/010_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('other-010_overview', '/other/010_overview', {})
        },
        {
            path: '/other/020_environment',
            meta: {
                h1: '環境変数',
                title: '環境変数',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('other-020_environment', '/other/020_environment', {})
        },
        {
            path: '/other/030_labels',
            meta: {
                h1: 'ポッド・ラベル',
                title: 'ポッド・ラベル',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('other-030_labels', '/other/030_labels', {})
        },
        {
            path: '/other/040_annotations',
            meta: {
                h1: 'ポッド注釈',
                title: 'ポッド注釈',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('other-040_annotations', '/other/040_annotations', {})
        },
        {
            path: '/other/050_configmap_volumes',
            meta: {
                h1: 'ConfigMapボリュームの追加',
                title: 'ConfigMapボリュームの追加',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('other-050_configmap_volumes', '/other/050_configmap_volumes', {})
        },
        {
            path: '/other/060_secret_volumes',
            meta: {
                h1: 'Secretsボリュームの追加',
                title: 'Secretsボリュームの追加',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('other-060_secret_volumes', '/other/060_secret_volumes', {})
        },
        {
            path: '/other/070_add_volumes',
            meta: {
                h1: 'ポッド・ボリュームの追加',
                title: 'ポッド・ボリュームの追加',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('other-070_add_volumes', '/other/070_add_volumes', {})
        },
        {
            path: '/other/080_add_containers',
            meta: {
                h1: '追加コンテナの構成',
                title: '追加コンテナの構成',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('other-080_add_containers', '/other/080_add_containers', {})
        },
        {
            path: '/other/090_pod_scheduling',
            meta: {
                h1: 'ポッド・スケジューリングの構成',
                title: 'ポッド・スケジューリングの構成',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('other-090_pod_scheduling', '/other/090_pod_scheduling', {})
        },
        {
            path: '/other/100_resources',
            meta: {
                h1: 'コンテナ・リソース制限',
                title: 'コンテナ・リソース制限',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('other-100_resources', '/other/100_resources', {})
        },
        {
            path: '/other/110_readiness',
            meta: {
                h1: 'レディネス&リブネス・プローブ',
                title: 'レディネス&リブネス・プローブ',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('other-110_readiness', '/other/110_readiness', {})
        },
        {
            path: '/examples/010_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('examples-010_overview', '/examples/010_overview', {})
        },
        {
            path: '/examples/020_deployment',
            meta: {
                h1: 'Coherenceデプロイメントの例',
                title: 'Coherenceデプロイメントの例',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('examples-020_deployment', '/examples/020_deployment', {})
        },
        {
            path: '/examples/030_federation',
            meta: {
                h1: 'Coherenceフェデレーションの例',
                title: 'Coherenceフェデレーションの例',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('examples-030_federation', '/examples/030_federation', {})
        },
        {
            path: '/examples/100_tls',
            meta: {
                h1: 'TLSを使用したセキュアなCoherence',
                title: 'TLSを使用したセキュアなCoherence',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('examples-100_tls', '/examples/100_tls', {})
        },
        {
            path: '/examples/500_autoscaler',
            meta: {
                h1: 'Coherenceクラスタの自動スケーリング',
                title: 'Coherenceクラスタの自動スケーリング',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('examples-500_autoscaler', '/examples/500_autoscaler', {})
        },
        {
            path: '/examples/800_istio',
            meta: {
                h1: 'Istioサポート',
                title: 'Istioサポート',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('examples-800_istio', '/examples/800_istio', {})
        },
        {
            path: '/examples/900_demo',
            meta: {
                h1: 'Coherenceデモ・アプリケーション',
                title: 'Coherenceデモ・アプリケーション',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('examples-900_demo', '/examples/900_demo', {})
        },
        {
            path: '/troubleshooting/01_trouble-shooting',
            meta: {
                h1: 'トラブルシューティング・ガイド',
                title: 'トラブルシューティング・ガイド',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('troubleshooting-01_trouble-shooting', '/troubleshooting/01_trouble-shooting', {})
        },
        {
            path: '/troubleshooting/02_heap_dump',
            meta: {
                h1: 'ヒープ・ダンプの取得',
                title: 'ヒープ・ダンプの取得',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('troubleshooting-02_heap_dump', '/troubleshooting/02_heap_dump', {})
        },
        {
            path: '/webhooks/01_introduction',
            meta: {
                h1: 'オペレータK8s Webフック',
                title: 'オペレータK8s Webフック',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: false
            },
            component: loadPage('webhooks-01_introduction', '/webhooks/01_introduction', {})
        },
        {
            path: '/performance/010_performance',
            meta: {
                h1: 'パフォーマンス・テスト',
                title: 'パフォーマンス・テスト',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: false
            },
            component: loadPage('performance-010_performance', '/performance/010_performance', {})
        },
        {
            path: '/', redirect: '/about/01_overview'
        },
        {
            path: '*', redirect: '/'
        }
    ];
}
function createNav(){
    return [
        { header: 'コア・ドキュメント' },
        {
            title: '概要',
            action: 'assistant',
            group: '/about',
            items: [
                { href: '/about/01_overview', title: '概要' },
                { href: '/about/02_introduction', title: 'Coherence Operatorの概要' },
                { href: '/about/03_quickstart', title: 'クイック・スタート' },
                { href: '/about/04_coherence_spec', title: 'Coherence Operator APIドキュメント' },
                { href: '/about/05_upgrade', title: 'バージョン2からのアップグレード' }
            ]
        },
        {
            title: 'インストール',
            action: 'fa-save',
            group: '/install',
            items: [
                { href: '/installation/01_installation', title: 'Coherence Operatorのインストール' },
                { href: '/installation/02_pre_release_versions', title: 'リリース前のバージョンへのアクセス' },
                { href: '/installation/04_obtain_coherence_images', title: 'Coherenceイメージの取得' },
                { href: '/installation/05_private_repos', title: 'プライベート・イメージ・レジストリの使用' },
                { href: '/installation/06_openshift', title: 'OpenShiftでのCoherenceクラスタ' },
                { href: '/installation/07_webhooks', title: 'オペレータのWebフック' },
                { href: '/installation/08_networking', title: 'O/Sネットワーキング構成' },
                { href: '/installation/09_RBAC', title: 'RBACの役割' }
            ]
        },
        {
            title: 'アプリケーションのデプロイ',
            action: 'cloud_upload',
            group: '/applications',
            items: [
                { href: '/applications/010_overview', title: '概要' },
                { href: '/applications/020_build_application', title: 'アプリケーション・イメージの構築' },
                { href: '/applications/030_deploy_application', title: 'Coherenceアプリケーションのデプロイ' },
                { href: '/applications/040_application_main', title: 'アプリケーション・メインの設定' },
                { href: '/applications/050_application_args', title: 'アプリケーション引数の設定' },
                { href: '/applications/060_application_working_dir', title: '作業ディレクトリの設定' },
                { href: '/applications/070_spring', title: 'Spring Bootアプリケーション' }
            ]
        },
        {
            title: 'Coherence設定',
            action: 'fa-cogs',
            group: '/coherence',
            items: [
                { href: '/coherence/010_overview', title: '概要' },
                { href: '/coherence/020_cluster_name', title: 'Coherenceクラスタ名' },
                { href: '/coherence/021_member_identity', title: 'メンバー・アイデンティティ' },
                { href: '/coherence/030_cache_config', title: 'キャッシュ構成ファイル' },
                { href: '/coherence/040_override_file', title: '操作構成ファイル' },
                { href: '/coherence/050_storage_enabled', title: 'ストレージが有効または無効' },
                { href: '/coherence/060_log_level', title: 'Coherenceログ・レベル' },
                { href: '/coherence/070_wka', title: 'よく知られたアドレス指定' },
                { href: '/coherence/080_persistence', title: 'Coherenceの永続性' },
                { href: '/coherence/090_ipmonitor', title: 'Coherence IPMonitor' }
            ]
        },
        {
            title: 'JVM設定',
            action: 'fa-cog',
            group: '/jvm',
            items: [
                { href: '/jvm/010_overview', title: '概要' },
                { href: '/jvm/020_classpath', title: 'クラスパスの設定' },
                { href: '/jvm/030_jvm_args', title: '任意のJVM引数' },
                { href: '/jvm/040_gc', title: 'ガベージ・コレクタ設定' },
                { href: '/jvm/050_memory', title: 'ヒープ&メモリーの設定' },
                { href: '/jvm/070_debugger', title: 'デバッガの構成' },
                { href: '/jvm/080_jmx', title: 'JMXの使用' },
                { href: '/jvm/090_container_limits', title: 'コンテナ・リソース制限' }
            ]
        },
        {
            title: 'ポートとサービスの公開',
            action: 'control_camera',
            group: '/ports',
            items: [
                { href: '/ports/010_overview', title: '概要' },
                { href: '/ports/020_container_ports', title: '追加コンテナ・ポート' },
                { href: '/ports/030_services', title: 'ポートのサービスの構成' },
                { href: '/ports/040_servicemonitors', title: 'Prometheus ServiceMonitors' }
            ]
        },
        {
            title: 'スケール・アップおよびスケール・ダウン',
            action: 'fa-balance-scale',
            group: '/scaling',
            items: [
                { href: '/scaling/010_overview', title: 'Coherenceデプロイメントのスケーリング' }
            ]
        },
        {
            title: '起動順序',
            action: 'line_weight',
            group: '/ordering',
            items: [
                { href: '/ordering/010_overview', title: 'デプロイメント開始順序' }
            ]
        },
        {
            title: '管理診断',
            action: 'fa-stethoscope',
            group: '/management',
            items: [
                { href: '/management/010_overview', title: '概要' },
                { href: '/management/020_management_over_rest', title: 'RESTを介した管理' },
                { href: '/management/030_visualvm', title: 'VisualVMの使用' },
                { href: '/management/040_ssl', title: 'RESTを介した管理でのSSL' },
                { href: '/management/100_tmb_test', title: 'Coherenceネットワーク・テスト' }
            ]
        },
        {
            title: 'メトリクス',
            action: 'speed',
            group: '/metrics',
            items: [
                { href: '/metrics/010_overview', title: '概要' },
                { href: '/metrics/020_metrics', title: 'メトリクスの公開' },
                { href: '/metrics/030_importing', title: 'Grafanaダッシュボードのインポート' },
                { href: '/metrics/040_dashboards', title: 'Grafanaダッシュボード' },
                { href: '/metrics/050_ssl', title: 'メトリクス付きSSL' }
            ]
        },
        {
            title: 'ロギング',
            action: 'find_in_page',
            group: '/logging',
            items: [
                { href: '/logging/010_overview', title: '概要' },
                { href: '/logging/020_logging', title: 'Fluentdによるログ取得' },
                { href: '/logging/030_kibana', title: 'Kibanaダッシュボードの使用' }
            ]
        },
        {
            title: 'その他のポッド設定',
            action: 'widgets',
            group: '/other',
            items: [
                { href: '/other/010_overview', title: '概要' },
                { href: '/other/020_environment', title: '環境変数' },
                { href: '/other/030_labels', title: 'ポッド・ラベル' },
                { href: '/other/040_annotations', title: 'ポッド注釈' },
                { href: '/other/050_configmap_volumes', title: 'ConfigMapボリュームの追加' },
                { href: '/other/060_secret_volumes', title: 'Secretsボリュームの追加' },
                { href: '/other/070_add_volumes', title: 'ポッド・ボリュームの追加' },
                { href: '/other/080_add_containers', title: '追加コンテナの構成' },
                { href: '/other/090_pod_scheduling', title: 'ポッド・スケジューリングの構成' },
                { href: '/other/100_resources', title: 'コンテナ・リソース制限' },
                { href: '/other/110_readiness', title: 'レディネス&リブネス・プローブ' }
            ]
        },
        {
            title: '例',
            action: 'explore',
            group: '/examples',
            items: [
                { href: '/examples/010_overview', title: '概要' },
                { href: '/examples/020_deployment', title: 'Coherenceデプロイメントの例' },
                { href: '/examples/030_federation', title: 'Coherenceフェデレーションの例' },
                { href: '/examples/100_tls', title: 'TLSを使用したセキュアなCoherence' },
                { href: '/examples/500_autoscaler', title: 'Coherenceクラスタの自動スケーリング' },
                { href: '/examples/800_istio', title: 'Istioサポート' },
                { href: '/examples/900_demo', title: 'Coherenceデモ・アプリケーション' }
            ]
        },
        {
            title: 'トラブルシューティング',
            action: 'fa-question-circle',
            group: '/troubleshooting',
            items: [
                { href: '/troubleshooting/01_trouble-shooting', title: 'トラブルシューティング・ガイド' },
                { href: '/troubleshooting/02_heap_dump', title: 'ヒープ・ダンプの取得' }
            ]
        },
        { divider: true },
        { header: 'その他のリソース' },
        {
            title: 'Slack',
            action: 'fa-slack',
            href: 'https://join.slack.com/t/oraclecoherence/shared_invite/enQtNzcxNTQwMTAzNjE4LTJkZWI5ZDkzNGEzOTllZDgwZDU3NGM2YjY5YWYwMzM3ODdkNTU2NmNmNDFhOWIxMDZlNjg2MzE3NmMxZWMxMWE',
            target: '_blank'
        },
        {
            title: 'Coherenceコミュニティ',
            action: 'people',
            href: 'https://coherence.java.net',
            target: '_blank'
        },
        {
            title: 'GitHub',
            action: 'fa-github-square',
            href: 'https://github.com/oracle/coherence-operator',
            target: '_blank'
        }
    ];
}
