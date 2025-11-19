import Link from "next/link";

export default function CareersPage() {
    return (
        <main style={{ paddingTop: "80px" }}>
            {/* Hero Section */}
            <section className="section" style={{ paddingBottom: "4rem" }}>
                <div className="container text-center">
                    <h1 className="text-accent" style={{ marginBottom: "2rem" }}>Recruitment</h1>
                    <p style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem", lineHeight: 1.4 }}>
                        新しい未知と模索を共にする<br />仲間を募集しています。
                    </p>
                    <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "2", fontSize: "1.1rem", color: "var(--gray-medium)" }}>
                        VanNessは、既存の枠組みにとらわれないプロフェッショナル・ギルドです。<br />
                        「個」の強みを最大限に活かし、チームとして最高の結果を出す。<br />
                        そんな環境で、あなたのキャリアを次のステージへ進めませんか。
                    </p>
                </div>
            </section>

            {/* Culture Section */}
            <section className="section" style={{ background: "var(--navy-light)" }}>
                <div className="container">
                    <h2 style={{ marginBottom: "4rem" }}>Culture</h2>
                    <div className="grid grid-cols-3">
                        {[
                            { title: "成果への執着", desc: "プロセスも大事ですが、何より「結果」にこだわります。クライアントの成長こそが私たちの価値です。" },
                            { title: "知の共有と深化", desc: "個人の知見をチームの資産へ。オープンなコミュニケーションで互いに学び合い、高め合います。" },
                            { title: "自律と共創", desc: "プロとして自律しつつ、チームとして共創する。自由と責任を両立させた働き方を推奨しています。" }
                        ].map((item, index) => (
                            <div key={index}>
                                <div style={{ fontSize: "3rem", color: "rgba(6, 182, 212, 0.2)", fontWeight: "bold", lineHeight: 1 }}>0{index + 1}</div>
                                <h3 style={{ fontSize: "1.25rem", margin: "1rem 0", color: "var(--white)" }}>{item.title}</h3>
                                <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Type Section */}
            <section className="section">
                <div className="container">
                    <h2 style={{ marginBottom: "4rem" }}>Job Type</h2>
                    <div className="grid gap-4">
                        {[
                            {
                                title: "AI Engineer / LLM Engineer",
                                subtitle: "最新技術でビジネスを変革する",
                                desc: "LLMを用いたアプリケーション開発、社内導入支援、RAG構築など、生成AIの社会実装をリードします。",
                                requirements: [
                                    "Pythonを用いた開発経験 (3年以上)",
                                    "LangChain / LlamaIndex 等のLLMフレームワーク使用経験",
                                    "AWS / GCP / Azure いずれかのクラウド環境での開発経験",
                                    "最新のAI技術に対する強い興味と学習意欲"
                                ],
                                welcome: [
                                    "AIモデルのファインチューニング経験",
                                    "大規模Webアプリケーションのアーキテクチャ設計経験"
                                ]
                            },
                            {
                                title: "Consultant (Sales / BizDev)",
                                subtitle: "クライアントの成長を科学する",
                                desc: "クライアントの営業課題解決、インサイドセールス立ち上げ、KPI設計から実行支援まで伴走します。",
                                requirements: [
                                    "法人営業経験 (3年以上)",
                                    "論理的思考力と課題解決能力",
                                    "チームでのプロジェクト推進経験",
                                    "SFA / CRMツールの使用経験 (Salesforce, HubSpot等)"
                                ],
                                welcome: [
                                    "コンサルティングファームでの実務経験",
                                    "インサイドセールス組織の立ち上げ・マネジメント経験"
                                ]
                            },
                            {
                                title: "Web / Video Creator",
                                subtitle: "心を動かすクリエイティブを創る",
                                desc: "採用動画、コーポレートサイト、サービス紹介動画など、企業のブランド価値を高めるクリエイティブを制作します。",
                                requirements: [
                                    "Premiere Pro / After Effects を用いた動画編集経験",
                                    "Figma / Adobe XD 等を用いたWebデザイン経験",
                                    "ポートフォリオの提出必須",
                                    "クライアントワークの経験"
                                ],
                                welcome: [
                                    "Webサイトのコーディング経験 (HTML/CSS/JS)",
                                    "ディレクション業務の経験"
                                ]
                            },
                            {
                                title: "Product Manager (PdM)",
                                subtitle: "自社プロダクト「KOETE」を育てる",
                                desc: "営業トーク解析AI「KOETE」の企画・開発ディレクション。ユーザーヒアリングから要件定義、ロードマップ策定まで担います。",
                                requirements: [
                                    "Webサービス・アプリのPM / PdM経験",
                                    "エンジニア・デザイナーとの協業経験",
                                    "データ分析に基づいた改善提案経験",
                                    "アジャイル / スクラム開発の経験"
                                ],
                                welcome: [
                                    "エンジニアリングのバックグラウンド",
                                    "SaaSビジネスの知見"
                                ]
                            }
                        ].map((job, index) => (
                            <div key={index} className="card" style={{ padding: "2rem" }}>
                                <div className="flex-responsive" style={{ gap: "2rem", alignItems: "start" }}>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", color: "var(--cyan)" }}>{job.title}</h3>
                                        <p style={{ fontWeight: "bold", marginBottom: "1.5rem", color: "var(--white)" }}>{job.subtitle}</p>
                                        <Link href="/#contact" className="btn btn-outline" style={{ fontSize: "0.9rem", padding: "0.75rem 2rem", width: "auto" }}>
                                            ENTRY
                                        </Link>
                                    </div>
                                    <div style={{ flex: 2 }}>
                                        <p style={{ marginBottom: "2rem", lineHeight: 1.8 }}>{job.desc}</p>

                                        <div style={{ marginBottom: "1.5rem" }}>
                                            <h4 style={{ fontSize: "1rem", color: "var(--gray-medium)", marginBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>必須スキル・経験</h4>
                                            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", lineHeight: 1.8 }}>
                                                {job.requirements.map((req, i) => (
                                                    <li key={i}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 style={{ fontSize: "1rem", color: "var(--gray-medium)", marginBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>歓迎スキル</h4>
                                            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", lineHeight: 1.8 }}>
                                                {job.welcome.map((wel, i) => (
                                                    <li key={i}>{wel}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flow Section */}
            <section className="section" style={{ background: "var(--navy-light)" }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: "4rem" }}>Selection Flow</h2>
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        {[
                            { step: "01", title: "書類選考", desc: "フォームよりエントリーいただいた内容をもとに選考を行います。" },
                            { step: "02", title: "一次面接", desc: "オンラインにて、これまでのご経験やキャリアビジョンについてお伺いします。" },
                            { step: "03", title: "課題選考 / 適性検査", desc: "職種により、実技課題や適性検査を実施する場合がございます。" },
                            { step: "04", title: "最終面接", desc: "代表または役員との面接を行います。相互のカルチャーマッチを確認します。" },
                            { step: "05", title: "内定・オファー", desc: "条件面等の調整を行い、オファーを提示させていただきます。" }
                        ].map((flow, index) => (
                            <div key={index} style={{
                                display: "flex",
                                gap: "2rem",
                                marginBottom: "2rem",
                                position: "relative",
                                paddingBottom: index !== 4 ? "2rem" : "0"
                            }}>
                                {index !== 4 && (
                                    <div style={{
                                        position: "absolute",
                                        left: "2rem",
                                        top: "3rem",
                                        bottom: "0",
                                        width: "1px",
                                        background: "rgba(255,255,255,0.1)"
                                    }} />
                                )}
                                <div style={{
                                    width: "4rem",
                                    height: "4rem",
                                    borderRadius: "50%",
                                    background: "var(--navy)",
                                    border: "1px solid var(--cyan)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                    color: "var(--cyan)",
                                    flexShrink: 0,
                                    zIndex: 1
                                }}>
                                    {flow.step}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{flow.title}</h3>
                                    <p style={{ color: "var(--gray-medium)" }}>{flow.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Entry CTA */}
            <section className="section" style={{ background: "linear-gradient(135deg, var(--cyan) 0%, #3B82F6 100%)", textAlign: "center" }}>
                <div className="container">
                    <h2 style={{ color: "var(--white)", marginBottom: "1rem" }}>ENTRY</h2>
                    <p style={{ color: "var(--white)", marginBottom: "3rem", opacity: 0.9 }}>
                        私たちと共に、新しい価値を創造しませんか。<br />
                        まずはカジュアルにお話ししましょう。
                    </p>
                    <Link href="/#contact" className="btn" style={{ background: "var(--white)", color: "var(--cyan)", padding: "1rem 4rem" }}>
                        応募フォームへ
                    </Link>
                </div>
            </section>
        </main>
    );
}
