import Link from "next/link";
import ContactForm from "./components/ContactForm";
import { ScrollFadeIn, CountUp } from "./components/Animations";
import ParticleBackground from "./components/ParticleBackground";
import { TypeWriter } from "./components/TypeWriter";
import { GlowCard } from "./components/GlowCard";

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
                paddingTop: "80px"
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
                    background: "linear-gradient(to bottom, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.95) 100%)",
                    zIndex: -1
                }} />

                {/* Interactive Particle Network */}
                <ParticleBackground />

                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div className="animate-fade-in">
                        <div style={{
                            display: "inline-block",
                            padding: "0.5rem 1.5rem",
                            border: "1px solid rgba(6, 182, 212, 0.3)",
                            borderRadius: "50px",
                            fontSize: "0.9rem",
                            color: "var(--cyan)",
                            marginBottom: "2rem",
                            background: "rgba(6, 182, 212, 0.05)",
                            backdropFilter: "blur(4px)",
                        }}>
                            AI-Powered Business Transformation
                        </div>
                        <h1 style={{ marginBottom: "2rem", lineHeight: 1.2 }}>
                            AI &times; 営業 &times; 採用 で、<br />
                            <span className="text-accent">企業成長の「壁」を突破する。</span>
                        </h1>
                        <p style={{
                            fontSize: "1.25rem",
                            maxWidth: "800px",
                            margin: "0 auto 1.5rem",
                            color: "var(--gray-light)"
                        }}>
                            戦略コンサルティングから動画制作、AI導入、そして組織づくりまで。<br />
                            領域を超えたプロフェッショナルチームが、貴社の課題を一気通貫で解決します。
                        </p>
                        <div style={{
                            fontSize: "1.1rem",
                            color: "var(--cyan)",
                            marginBottom: "3rem",
                            minHeight: "1.6em",
                        }}>
                            <TypeWriter
                                texts={[
                                    "営業プロセスを科学する",
                                    "AIで業務を変革する",
                                    "最適な人材を採用する",
                                    "動画で心を動かす",
                                ]}
                            />
                        </div>
                        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="#contact" className="btn btn-primary">
                                サービス資料ダウンロード
                            </Link>
                            <Link href="#contact" className="btn btn-outline">
                                無料相談会を予約
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--gray-medium)", letterSpacing: "0.2em" }}>SCROLL</span>
                    <div style={{
                        width: "1px",
                        height: "40px",
                        background: "linear-gradient(to bottom, var(--cyan), transparent)",
                        animation: "float 2s ease-in-out infinite",
                    }} />
                </div>
            </section>

            {/* Numbers / Impact */}
            <section style={{
                padding: "5rem 0",
                background: "linear-gradient(180deg, var(--navy-dark) 0%, var(--navy) 100%)",
                borderTop: "1px solid rgba(6, 182, 212, 0.1)",
                borderBottom: "1px solid rgba(6, 182, 212, 0.1)",
            }}>
                <div className="container">
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "2rem",
                        textAlign: "center",
                    }}>
                        {[
                            { num: 70, suffix: "名+", label: "専門家ネットワーク" },
                            { num: 6, suffix: "事業", label: "トータルソリューション" },
                            { num: 2.4, suffix: "倍", label: "商談化率改善（実績）", decimals: 1 },
                            { num: 100, suffix: "%", label: "AI活用企業" },
                        ].map((item, i) => (
                            <ScrollFadeIn key={i} delay={i * 100}>
                                <div>
                                    <div style={{
                                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                        fontWeight: 700,
                                        background: "var(--gradient-accent)",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        lineHeight: 1.2,
                                    }}>
                                        <CountUp end={item.num} decimals={item.decimals || 0} />{item.suffix}
                                    </div>
                                    <div style={{ color: "var(--gray-medium)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                                        {item.label}
                                    </div>
                                </div>
                            </ScrollFadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scale & Team */}
            <section className="section">
                <div className="container text-center">
                    <ScrollFadeIn direction="scale">
                        <h2>Our Professional Team</h2>
                        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                            <h3 style={{ fontSize: "2.5rem", marginBottom: "2rem", fontWeight: 400 }}>
                                ビジネスの複雑化に対し、<br />私たちは<span className="text-accent">「個の力」</span>と<span className="text-accent">「チームの知」</span><span style={{ whiteSpace: "nowrap" }}>で挑みます。</span>
                            </h3>
                            <p style={{ fontSize: "1.1rem", lineHeight: 2 }}>
                                戦略コンサルタント、AIエンジニア、映像クリエイター、採用スペシャリストなど、<br />
                                パートナーネットワークを含む<strong style={{ color: "var(--white)", fontSize: "1.2em" }}><CountUp end={70} />名規模の専門家</strong>が在籍。<br />
                                プロジェクトごとに最適なチームを編成し、多角的な視点から成果を創出します。
                            </p>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>

            {/* Service Matrix */}
            <section className="section" style={{ background: "var(--navy-light)" }}>
                <div className="container">
                    <ScrollFadeIn>
                        <div className="text-center" style={{ marginBottom: "5rem" }}>
                            <h2>Total Solution</h2>
                            <p style={{ fontSize: "1.1rem" }}>攻めの「営業・マーケティング」と、守りと革新の「組織・技術」。<br />6つの事業で企業の進化を支えます。</p>
                        </div>
                    </ScrollFadeIn>

                    <div className="grid grid-cols-3">
                        {[
                            { id: "sales", title: "営業コンサルティング", desc: "科学的アプローチで、勝てる営業組織へ。", detail: "インサイドセールスの立ち上げからKPI設計、トークスクリプト開発まで。属人化を排除し、売れる仕組みを構築します。", icon: "📈" },
                            { id: "video", title: "動画制作", desc: "心を動かし、行動を変えるクリエイティブ。", detail: "採用動画、サービス紹介、会社紹介など。企画・撮影・編集をワンストップで提供し、マーケティング成果に直結させます。", icon: "🎥" },
                            { id: "koete", title: "KOETE（リリース準備中）", desc: "言語の壁をなくし、現場の報・連・相を一元化する。", detail: "多国籍スタッフ向け「AI翻訳×日報×勤怠×トラブル管理」プラットフォーム。母国語入力・自国語確認で、現場管理の課題を解決します。", icon: "🌏" },
                            { id: "ai-training", title: "AI研修", desc: "全メンバーがAIを使いこなす組織へ。", detail: "ChatGPT活用から業務改革ワークショップまで。職種別（営業・開発・事務）の実践的カリキュラムで、組織の生産性を底上げします。", icon: "🎓" },
                            { id: "ai-support", title: "AI導入支援", desc: "実務に定着する、真のDXパートナー。", detail: "業務棚卸し、要件定義、PoC、プロンプトエンジニアリングまで。導入で終わらせず、現場に定着するまで伴走します。", icon: "⚙️" },
                            { id: "recruitment", title: "採用支援", desc: "事業成長を加速させる、攻めの採用戦略。", detail: "採用ブランディング、サイト制作、動画活用による母集団形成、選考プロセス改善まで。欲しい人材を逃さない採用フローを設計します。", icon: "🤝" }
                        ].map((service, index) => (
                            <ScrollFadeIn key={index} delay={index * 80} direction={index % 2 === 0 ? 'up' : 'scale'}>
                                <GlowCard href={`/services#${service.id}`}>
                                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{service.icon}</div>
                                    <h3 style={{ color: "var(--white)", marginBottom: "0.5rem" }}>{service.title}</h3>
                                    <p style={{ color: "var(--cyan)", fontWeight: "bold", marginBottom: "1rem", fontSize: "0.95rem" }}>{service.desc}</p>
                                    <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--gray-light)" }}>{service.detail}</p>
                                </GlowCard>
                            </ScrollFadeIn>
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
                    <ScrollFadeIn direction="left">
                        <h2>Why Us</h2>
                    </ScrollFadeIn>
                    <div className="grid grid-cols-2" style={{ gap: "4rem", marginTop: "3rem" }}>
                        {[
                            { title: "領域横断のシナジー", desc: "営業・採用・AI・クリエイティブを統合し、経営課題を同時並行で解決。" },
                            { title: "実行伴走型", desc: "戦略を描くだけでなく、現場に入り込み泥臭く数字を追うコミットメント。" },
                            { title: "再現性の担保", desc: "自社プロダクト「KOETE」やデータに基づいた、属人化しない科学的アプローチ。" },
                            { title: "プロフェッショナル規模", desc: "70名規模の専門家ネットワークにより、大規模プロジェクトにも即応。" }
                        ].map((item, index) => (
                            <ScrollFadeIn key={index} delay={index * 150} direction={index % 2 === 0 ? 'left' : 'right'}>
                                <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
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
                            </ScrollFadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="section" style={{ background: "var(--white)", color: "var(--navy-dark)" }}>
                <div className="container">
                    <ScrollFadeIn>
                        <h2 className="text-center" style={{ color: "var(--navy-dark)" }}>Case Study</h2>
                    </ScrollFadeIn>
                    <ScrollFadeIn direction="scale">
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
                                        商談化率 <span style={{ fontSize: "3rem" }}><CountUp end={2.4} decimals={1} />倍</span> (<CountUp end={5} />%→<CountUp end={12} />%)<br />
                                        <span style={{ fontSize: "1.5rem", color: "var(--navy)" }}>新人立ち上がり期間を1/<CountUp end={3} />に短縮</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollFadeIn>
                    <div className="text-center" style={{ marginTop: "3rem" }}>
                        <Link href="/works" className="btn btn-primary" style={{ background: "var(--gradient-accent)" }}>
                            全ての実績を見る
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact / Footer */}
            <section id="contact" className="section" style={{ background: "var(--navy-dark)" }}>
                <div className="container">
                    <ScrollFadeIn>
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <h2 className="text-accent" style={{ marginBottom: "1rem" }}>Contact</h2>
                            <p style={{ fontSize: "1.2rem", color: "var(--gray-medium)" }}>
                                事業に関するご相談・ご質問など、<br />お気軽にお問い合わせください。
                            </p>
                        </div>
                    </ScrollFadeIn>
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}
