import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "会社概要",
    description: "VanNess株式会社の会社概要。AI × 営業 × 採用で企業成長の壁を突破する、プロフェッショナルファームです。",
    openGraph: {
        title: "会社概要 | VanNess株式会社",
        description: "VanNess株式会社の企業情報をご紹介します。",
    },
};

export default function CompanyPage() {
    return (
        <main style={{ paddingTop: "80px", minHeight: "100vh" }}>
            <div className="container section">
                <div className="text-center" style={{ marginBottom: "5rem" }}>
                    <h1 className="text-accent">Company</h1>
                </div>

                <div className="card" style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <dl className="company-info-grid">
                        {[
                            { label: "社名", value: "VanNess株式会社" },
                            { label: "代表取締役", value: "宮﨑 和樹" },
                            { label: "設立", value: "2021年11月" },
                            { label: "資本金", value: "200万円" },
                            { label: "住所", value: "〒107-0062\n東京都港区南青山3-1-36 青山丸竹ビル6F" },
                            { label: "登録番号", value: "T2010001222953" },
                            { label: "事業内容", value: "営業コンサルティング\n動画制作\nAIソリューション事業" },
                            { label: "関連会社", value: "VanNess ASIA Co., Ltd.(タイ王国）" }
                        ].map((item, index) => (
                            <div key={index} className="company-info-row">
                                <dt className="company-info-label">
                                    {item.label}
                                </dt>
                                <dd className="company-info-value">
                                    {item.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="text-center" style={{ marginTop: "4rem" }}>
                    <Link href="/" className="btn btn-outline">
                        TOPへ戻る
                    </Link>
                </div>
            </div>
        </main>
    );
}
