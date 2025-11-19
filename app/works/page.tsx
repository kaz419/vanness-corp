import Link from "next/link";
import Image from "next/image";

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
        client: "大手不動産デベロッパー",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
        desc: "住宅販売部門において、トップセールスとその他のメンバーの成績差が課題でした。商談がブラックボックス化しており、具体的な改善指導が難しい状況でした。",
        challenges: [
            "商談内容が記録されておらず、振り返りができない",
            "トップセールスのノウハウが共有されていない",
            "教育がOJT頼みで、品質が安定しない"
        ],
        solutions: [
            "商談解析AI「KOETE」の全店導入",
            "ハイパフォーマーのトーク分析と「勝ちパターン」の抽出",
            "商談後のAI自動フィードバック体制の構築"
        ],
        results: [
            "チーム全体の平均成約率が1.5倍に向上",
            "商談の録画・文字起こしにより、上司の同席工数を削減",
            "客観的なデータに基づく評価制度への移行"
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
