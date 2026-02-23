import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "事業内容 - 6つのプロフェッショナルサービス",
    description: "営業コンサルティング、動画制作、KOETE、AI研修、AI導入支援、採用支援。VanNessが提供する6つの事業で、企業の成長課題を解決します。",
    openGraph: {
        title: "事業内容 | VanNess株式会社",
        description: "営業コンサルティングからAI導入支援まで、6つの事業で企業の進化を支えます。",
    },
};

export default function ServicesPage() {
    const services: Array<{
        id: string;
        title: string;
        subtitle: string;
        desc: string;
        image: string;
        externalUrl?: string;
        features: Array<{ title: string; desc: string }>;
    }> = [
        {
            id: "sales",
            title: "営業コンサルティング",
            subtitle: "科学的アプローチで、勝てる営業組織へ。",
            desc: "「気合いと根性」の営業から脱却し、データとロジックに基づいた再現性の高い営業組織を構築します。戦略立案からインサイドセールスの立ち上げ、SFAの定着化まで、貴社のフェーズに合わせた支援を行います。",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
            features: [
                { title: "戦略から実行まで", desc: "絵に描いた餅で終わらせない。現場に入り込み、泥臭く数字を作るプロセスまで伴走します。" },
                { title: "データドリブン", desc: "感覚的な判断を排除。KPI/KGIを明確に設定し、数値に基づいた意思決定を支援します。" },
                { title: "属人化の解消", desc: "トップセールスのノウハウを言語化・仕組み化し、誰でも売れる組織を作ります。" }
            ]
        },
        {
            id: "video",
            title: "動画制作",
            subtitle: "心を動かし、行動を変えるクリエイティブ。",
            desc: "単にかっこいい動画を作るのではなく、「採用エントリー数を増やす」「商談獲得率を上げる」といったビジネスゴールを達成するための戦略的な動画制作を提供します。",
            image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
            features: [
                { title: "目的特化型", desc: "採用、販促、ブランディングなど、目的に応じて最適な構成・演出を設計します。" },
                { title: "ワンストップ制作", desc: "企画・構成から撮影、編集、ナレーションまで、社内チームが一気通貫で対応します。" },
                { title: "マルチユース", desc: "YouTube、SNS、展示会、商談用など、様々な媒体で活用できるフォーマットで納品します。" }
            ]
        },
        {
            id: "koete",
            title: "KOETE",
            subtitle: "言語の壁をなくし、現場の報・連・相を一元化する。",
            desc: "多国籍スタッフを抱える現場向けの「AI翻訳 × 日報 × 勤怠 × トラブル管理」統合プラットフォーム。7言語対応のAI翻訳で、外国人スタッフは母国語で入力し、管理者は自国語で即時確認。「1課題1スレッド」の構造化されたコミュニケーションで、現場の報・連・相を一元化します。",
            externalUrl: "https://koete.ai/",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            features: [
                { title: "AI翻訳（マイナー言語対応）", desc: "外国人スタッフが母国語で入力し、管理者は自国語で即時確認。コピペ不要で誤解を防止します。" },
                { title: "日報・勤怠管理", desc: "プッシュ通知で提出を促し、自動翻訳・集計。遅刻検知アラートで管理工数を大幅に削減します。" },
                { title: "トラブル報告・改善提案", desc: "カテゴリ・優先度付きで報告し、スレッド形式で履歴管理。現場の声を吸い上げ、改善スピードを向上させます。" }
            ]
        },
        {
            id: "ai-training",
            title: "AI研修",
            subtitle: "全メンバーがAIを使いこなす組織へ。",
            desc: "ChatGPTをはじめとする生成AIの活用は、もはやビジネスの必須スキルです。基礎的なリテラシーから、実務に直結するプロンプトエンジニアリングまで、階層別・職種別の研修プログラムを提供します。",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
            features: [
                { title: "実践的カリキュラム", desc: "座学だけでなく、実際の業務課題をAIで解決するワークショップ形式を重視しています。" },
                { title: "職種別カスタマイズ", desc: "営業、マーケ、エンジニア、バックオフィスなど、職種ごとの具体的な活用事例を学べます。" },
                { title: "継続的なアップデート", desc: "日進月歩のAI技術。最新のトレンドやツール情報を反映したコンテンツを提供し続けます。" }
            ]
        },
        {
            id: "ai-support",
            title: "AI導入支援",
            subtitle: "実務に定着する、真のDXパートナー。",
            desc: "「AIを導入したが使われない」という失敗を防ぎます。業務フローの深い理解に基づき、本当に効果が出るAI活用領域を特定。PoCから本番導入、社内ガイドライン策定までトータルで支援します。",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
            features: [
                { title: "業務フローの深い理解", desc: "現状の業務プロセスを詳細に可視化し、AIが代替・補助すべきボトルネックを特定します。" },
                { title: "セキュアな環境構築", desc: "Azure OpenAI Service等を用い、社内データが学習されないセキュアなAI環境を構築します。" },
                { title: "現場定着への伴走", desc: "マニュアル作成や説明会実施など、現場の社員が当たり前にAIを使う文化を醸成します。" }
            ]
        },
        {
            id: "recruitment",
            title: "採用支援",
            subtitle: "事業成長を加速させる、攻めの採用戦略。",
            desc: "待ちの採用から、攻めの採用へ。採用ブランディングの再構築から、ダイレクトリクルーティングの運用代行（RPO）、採用広報コンテンツの制作まで、欲しい人材を獲りに行くための施策を実行します。",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
            features: [
                { title: "採用ブランディング", desc: "自社の魅力を言語化・可視化し、ターゲット人材に刺さるメッセージを開発します。" },
                { title: "ダイレクトソーシング", desc: "スカウトメールの文面作成から送信、日程調整まで、工数のかかる業務をプロが代行します。" },
                { title: "候補者体験の向上", desc: "選考プロセスの最適化により、内定承諾率を高め、入社後のミスマッチを防ぎます。" }
            ]
        }
    ];

    return (
        <main style={{ paddingTop: "80px" }}>
            <div className="container section">
                <div className="text-center" style={{ marginBottom: "6rem" }}>
                    <h1 className="text-accent" style={{ marginBottom: "1rem" }}>Service</h1>
                    <p style={{ fontSize: "1.2rem", color: "var(--gray-medium)" }}>
                        攻めの「営業・マーケティング」と、守りと革新の「組織・技術」。<br />
                        6つの事業で企業の進化を支えます。
                    </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8rem" }}>
                    {services.map((service, index) => (
                        <section key={service.id} id={service.id}>
                            {/* Top Row: Image & Text */}
                            <div className={`flex-responsive ${index % 2 !== 0 ? 'reverse' : ''}`} style={{ marginBottom: "4rem" }}>
                                <div style={{ flex: 1, position: "relative", height: "400px", borderRadius: "16px", overflow: "hidden" }}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                    <div style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background: "linear-gradient(to bottom, rgba(2,6,23,0) 0%, rgba(2,6,23,0.2) 100%)"
                                    }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        color: "var(--cyan)",
                                        fontWeight: "bold",
                                        marginBottom: "1rem",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem"
                                    }}>
                                        <span style={{ width: "40px", height: "1px", background: "var(--cyan)" }}></span>
                                        0{index + 1}
                                    </div>
                                    <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>{service.title}</h2>
                                    <p style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1.5rem", color: "var(--white)" }}>
                                        {service.subtitle}
                                    </p>
                                    <p style={{ lineHeight: 1.8, color: "var(--gray-medium)" }}>
                                        {service.desc}
                                    </p>
                                    {service.externalUrl && (
                                        <a href={service.externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
                                            KOETE 公式サイトへ →
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Bottom Row: 3 Features */}
                            <div>
                                <h3 style={{
                                    textAlign: "center",
                                    fontSize: "1rem",
                                    color: "var(--gray-medium)",
                                    marginBottom: "2rem",
                                    position: "relative",
                                    display: "inline-block",
                                    left: "50%",
                                    transform: "translateX(-50%)"
                                }}>
                                    3つの特徴
                                    <span style={{ position: "absolute", bottom: "-5px", left: "0", width: "100%", height: "1px", background: "var(--gray-medium)", opacity: 0.3 }}></span>
                                </h3>
                                <div className="grid grid-cols-3" style={{ gap: "2rem" }}>
                                    {service.features.map((feature, i) => (
                                        <div key={i} style={{ padding: "1.5rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px" }}>
                                            <div style={{
                                                fontSize: "1.2rem",
                                                fontWeight: "bold",
                                                marginBottom: "1rem",
                                                color: "var(--white)",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                textAlign: "center"
                                            }}>
                                                <span style={{ fontSize: "3rem", color: "rgba(6, 182, 212, 0.2)", lineHeight: 1, marginBottom: "0.5rem" }}>0{i + 1}</span>
                                                {feature.title}
                                            </div>
                                            <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--gray-medium)", textAlign: "center" }}>
                                                {feature.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: "8rem" }}>
                    <Link href="/#contact" className="btn btn-primary">
                        お問い合わせ
                    </Link>
                </div>
            </div>
        </main>
    );
}
