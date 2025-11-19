import Link from "next/link";
import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
    return (
        <main>
            {/* Main Visual (FV) */}
            <section className="hero" style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                overflow: "hidden",
                paddingTop: "80px" // Offset for fixed header
            }}>
                {/* Background Image with Overlay */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -2
                }} />
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, rgba(2,6,23,0.8) 0%, rgba(2,6,23,0.9) 100%)",
                    zIndex: -1
                }} />

                <div className="container animate-fade-in">
                    <h1 style={{ marginBottom: "2rem", lineHeight: 1.2 }}>
                        AI × 営業 × 採用 で、<br />
                        <span className="text-accent">企業成長の「壁」を突破する。</span>
                    </h1>
                    <p style={{ fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto 3rem", color: "var(--gray-light)" }}>
                        戦略コンサルティングから動画制作、AI導入、そして組織づくりまで。<br />
                        領域を超えたプロフェッショナルチームが、貴社の課題を一気通貫で解決します。
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="#contact" className="btn btn-primary">
                            サービス資料ダウンロード
                        </Link>
                        <Link href="#contact" className="btn btn-outline">
                            無料相談会を予約
                        </Link>
                    </div>
                </div>
            </section>

            {/* Scale & Team */}
            <section className="section">
                <div className="container text-center">
                    <h2>Our Professional Team</h2>
                    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                        <h3 style={{ fontSize: "2.5rem", marginBottom: "2rem", fontWeight: 400 }}>
                            ビジネスの複雑化に対し、<br />私たちは<span className="text-accent">「個の力」</span>と<span className="text-accent">「チームの知」</span><span style={{ whiteSpace: "nowrap" }}>で挑みます。</span>
                        </h3>
                        <p style={{ fontSize: "1.1rem", lineHeight: 2 }}>
                            戦略コンサルタント、AIエンジニア、映像クリエイター、採用スペシャリストなど、<br />
                            パートナーネットワークを含む<strong style={{ color: "var(--white)", fontSize: "1.2em" }}>70名規模の専門家</strong>が在籍。<br />
                            プロジェクトごとに最適なチームを編成し、多角的な視点から成果を創出します。
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Matrix */}
            <section className="section" style={{ background: "var(--navy-light)" }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: "5rem" }}>
                        <h2>Total Solution</h2>
                        <p style={{ fontSize: "1.1rem" }}>攻めの「営業・マーケティング」と、守りと革新の「組織・技術」。<br />6つの事業で企業の進化を支えます。</p>
                    </div>

                    <div className="grid grid-cols-3">
                        {[
                            { id: "sales", title: "営業コンサルティング", desc: "科学的アプローチで、勝てる営業組織へ。", detail: "インサイドセールスの立ち上げからKPI設計、トークスクリプト開発まで。属人化を排除し、売れる仕組みを構築します。", icon: "📈" },
                            { id: "video", title: "動画制作", desc: "心を動かし、行動を変えるクリエイティブ。", detail: "採用動画、サービス紹介、会社紹介など。企画・撮影・編集をワンストップで提供し、マーケティング成果に直結させます。", icon: "🎥" },
                            { id: "koete", title: "KOETE（リリース準備中）", desc: "言語の壁をなくし、現場の報・連・相を一元化する。", detail: "多国籍スタッフ向け「AI翻訳×日報×勤怠×トラブル管理」プラットフォーム。母国語入力・自国語確認で、現場管理の課題を解決します。", icon: "🌏" },
                            { id: "ai-training", title: "AI研修", desc: "全メンバーがAIを使いこなす組織へ。", detail: "ChatGPT活用から業務改革ワークショップまで。職種別（営業・開発・事務）の実践的カリキュラムで、組織の生産性を底上げします。", icon: "🎓" },
                            { id: "ai-support", title: "AI導入支援", desc: "実務に定着する、真のDXパートナー。", detail: "業務棚卸し、要件定義、PoC、プロンプトエンジニアリングまで。導入で終わらせず、現場に定着するまで伴走します。", icon: "⚙️" },
                            { id: "recruitment", title: "採用支援", desc: "事業成長を加速させる、攻めの採用戦略。", detail: "採用ブランディング、サイト制作、動画活用による母集団形成、選考プロセス改善まで。欲しい人材を逃さない採用フローを設計します。", icon: "🤝" }
                        ].map((service, index) => (
                            <Link key={index} href={`/services#${service.id}`} className="card" style={{ textDecoration: "none", display: "block", transition: "transform 0.2s" }}>
                                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{service.icon}</div>
                                <h3 style={{ color: "var(--white)", marginBottom: "0.5rem" }}>{service.title}</h3>
                                <p style={{ color: "var(--cyan)", fontWeight: "bold", marginBottom: "1rem", fontSize: "0.95rem" }}>{service.desc}</p>
                                <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--gray-light)" }}>{service.detail}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: "3rem" }}>
                        <Link href="/services" className="btn btn-outline">
                            事業内容詳細へ
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center">Why Us</h2>
                    <div className="grid grid-cols-2" style={{ gap: "4rem", marginTop: "3rem" }}>
                        {[
                            { title: "領域横断のシナジー", desc: "営業・採用・AI・クリエイティブを統合し、経営課題を同時並行で解決。" },
                            { title: "実行伴走型", desc: "戦略を描くだけでなく、現場に入り込み泥臭く数字を追うコミットメント。" },
                            { title: "再現性の担保", desc: "自社プロダクト「KOETE」やデータに基づいた、属人化しない科学的アプローチ。" },
                            { title: "プロフェッショナル規模", desc: "70名規模の専門家ネットワークにより、大規模プロジェクトにも即応。" }
                        ].map((item, index) => (
                            <div key={index} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                                <div style={{
                                    fontSize: "4rem",
                                    fontWeight: 900,
                                    color: "transparent",
                                    WebkitTextStroke: "2px var(--cyan)",
                                    lineHeight: 0.8,
                                    opacity: 0.5
                                }}>0{index + 1}</div>
                                <div>
                                    <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                                    <p style={{ fontSize: "1rem" }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="section" style={{ background: "var(--white)", color: "var(--navy-dark)" }}>
                <div className="container">
                    <h2 className="text-center" style={{ color: "var(--navy-dark)" }}>Case Study</h2>
                    <div style={{
                        maxWidth: "1000px",
                        margin: "0 auto",
                        background: "var(--white)",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                        borderRadius: "24px",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            background: "var(--gradient-accent)",
                            padding: "1.5rem 3rem",
                            color: "var(--white)",
                            fontWeight: "bold",
                            letterSpacing: "0.05em",
                            fontSize: "1.1rem"
                        }}>
                            Flagship Case: FinTechスタートアップ（シリーズB）様
                        </div>
                        <div style={{ padding: "4rem" }}>
                            <div className="grid grid-cols-2" style={{ marginBottom: "3rem" }}>
                                <div>
                                    <h4 style={{ color: "var(--gray-medium)", marginBottom: "1rem", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.1em" }}>Challenge</h4>
                                    <p style={{ fontWeight: "bold", fontSize: "1.25rem", lineHeight: 1.6 }}>リード対応の遅れによる機会損失と、<br />営業プロセスの属人化。</p>
                                </div>
                                <div>
                                    <h4 style={{ color: "var(--gray-medium)", marginBottom: "1rem", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.1em" }}>Solution</h4>
                                    <p style={{ fontSize: "1.1rem" }}>インサイドセールス部門の立ち上げ、<br />SFA導入によるKPI管理、<br />トークスクリプトの標準化。</p>
                                </div>
                            </div>
                            <div style={{ background: "var(--gray-light)", padding: "3rem", borderRadius: "16px", textAlign: "center" }}>
                                <h4 style={{ color: "var(--navy)", marginBottom: "1rem" }}>Result</h4>
                                <p style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--cyan)", lineHeight: 1.2 }}>
                                    商談化率 <span style={{ fontSize: "3rem" }}>2.4倍</span> (5%→12%)<br />
                                    <span style={{ fontSize: "1.5rem", color: "var(--navy)" }}>新人立ち上がり期間を1/3に短縮</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            import ContactForm from "./components/ContactForm";

            // ...

            {/* Contact / Footer */}
            <section id="contact" className="section" style={{ background: "var(--navy-dark)" }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: "4rem" }}>
                        <h2 className="text-accent" style={{ marginBottom: "1rem" }}>Contact</h2>
                        <p style={{ fontSize: "1.2rem", color: "var(--gray-medium)" }}>
                            事業に関するご相談・ご質問など、<br />お気軽にお問い合わせください。
                        </p>
                    </div>
                    <ContactForm />
                    <div style={{ textAlign: "center", marginTop: "6rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "4rem" }}>
                        <div style={{ marginBottom: "2rem" }}>
                            <Image
                                src="/logo.png"
                                alt="VanNess"
                                width={100}
                                height={33}
                                style={{ height: "33px", width: "auto" }}
                            />
                        </div>
                        <div style={{ color: "var(--gray-medium)", fontSize: "0.8rem" }}>
                            © {new Date().getFullYear()} VanNess Inc. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
