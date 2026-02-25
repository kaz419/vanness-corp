import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "実績紹介 - Case Study",
    description: "VanNess株式会社の支援実績をご紹介。FinTechスタートアップの営業改革、不動産テックのAI導入、ITベンチャーの採用支援など。",
    openGraph: {
        title: "実績紹介 | VanNess株式会社",
        description: "営業コンサルティング・AI導入・採用支援の成功事例をご紹介します。",
    },
};

export const WORKS = [
    {
        id: "sales-fintech",
        title: "インサイドセールス組織の立ち上げとSFA構築",
        client: "FinTechスタートアップ（シリーズB）",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
        desc: "急成長中のFinTech企業。リード数は増加しているものの、商談化率が低迷し、営業プロセスも属人化していました。シリーズB調達後の更なる拡大に向け、筋肉質な営業組織の構築が急務でした。",
        challenges: [
            "リードへの対応遅れによる機会損失の発生",
            "営業メンバーごとの成果のバラつき（属人化）",
            "KPIが未設定で、プロセスのボトルネックが不明確"
        ],
        solutions: [
            "インサイドセールス（IS）部門の新規立ち上げ支援",
            "Salesforceの設計・導入とKPIダッシュボード構築",
            "トークスクリプトの作成とロールプレイング研修の実施"
        ],
        results: [
            "リードからの商談化率が5%から12%へ向上",
            "新人営業の立ち上がり期間を3ヶ月から1ヶ月に短縮",
            "受注予測の精度が向上し、経営判断が迅速化"
        ]
    },
    {
        id: "ai-realestate",
        title: "AIによる商談解析で成約率を大幅改善",
        client: "大手SIer",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        desc: "商談の録音・解析データを基に、生成AIが提案書の約7割を自動作成。さらにAIとの対話を通じて論理構成を練り上げることで、説得力のある提案書を効率的に作成し、受注率と単価の向上を実現しました。",
        challenges: [
            "提案書作成に膨大な時間がかかり、営業活動の時間を圧迫",
            "提案のロジックや質が担当者によってバラつきがある",
            "商談でのヒアリング内容が提案書に十分に反映されていない"
        ],
        solutions: [
            "商談の全件録音とAIによる内容解析",
            "生成AIを活用した提案書ドラフト（7割完成状態）の自動生成",
            "AIとの対話による論理構成のブラッシュアップと提案書の完成"
        ],
        results: [
            "受注率および受注単価の大幅な向上",
            "提案書作成工数の削減による顧客接点時間の増加",
            "提案内容の標準化と高品質化"
        ]
    },
    {
        id: "recruitment-it",
        title: "採用ブランディング動画でエンジニア採用を加速",
        client: "上場ITソリューション企業",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        desc: "エンジニア採用において、知名度はあるものの「堅い」「古い」というイメージが先行し、ターゲット層（WEB系エンジニア）からの応募が少ないことが課題でした。",
        challenges: [
            "ターゲット層からの認知・興味関心が低い",
            "実際の社風（挑戦的・フラット）が伝わっていない",
            "採用コストの高騰（エージェント依存）"
        ],
        solutions: [
            "「挑戦」をテーマにした採用コンセプトムービーの制作",
            "現場エンジニアのリアルな声を届けるインタビュー動画",
            "採用サイトのリニューアルと動画の埋め込み"
        ],
        results: [
            "エンジニア職のエントリー数が前年比180%増",
            "動画経由の応募者の内定承諾率が向上",
            "採用コスト（CPA）を30%削減"
        ]
    }
];

export default function WorksPage() {
    return (
        <main style={{ paddingTop: "80px", minHeight: "100vh" }}>
            <div className="container section">
                <div className="text-center" style={{ marginBottom: "5rem" }}>
                    <h1 className="text-accent">Works</h1>
                    <p style={{ fontSize: "1.2rem", color: "var(--gray-medium)" }}>
                        課題解決の事例をご紹介します。
                    </p>
                </div>

                <div className="grid gap-4">
                    {WORKS.map((work) => (
                        <Link href={`/works/${work.id}`} key={work.id} style={{ textDecoration: "none" }}>
                            <div className="card work-card">
                                <div className="work-card-image">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </div>
                                <div className="work-card-content">
                                    <p style={{ color: "var(--cyan)", fontWeight: "bold", marginBottom: "0.5rem" }}>{work.client}</p>
                                    <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--white)" }}>{work.title}</h2>
                                    <p style={{ color: "var(--gray-medium)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                        {work.desc}
                                    </p>
                                    <div style={{ marginTop: "1.5rem", color: "var(--accent)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        View Case Study <span>→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
