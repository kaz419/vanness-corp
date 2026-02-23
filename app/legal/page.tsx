import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "特定商取引法に基づく表記",
    description: "VanNess株式会社の特定商取引法に基づく表記。",
};

export default function LegalPage() {
    const rowStyle = {
        display: "grid" as const,
        gridTemplateColumns: "200px 1fr",
        gap: "1.5rem",
        padding: "1.25rem 0",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
    };
    const labelStyle = {
        fontSize: "0.9rem",
        color: "var(--gray-medium)",
        fontWeight: 600 as const,
    };
    const valueStyle = {
        fontSize: "0.95rem",
        color: "var(--gray-light)",
        lineHeight: 1.8,
    };

    return (
        <main style={{ paddingTop: "120px", paddingBottom: "5rem" }}>
            <div className="container" style={{ maxWidth: "800px" }}>
                <h1 style={{ marginBottom: "3rem" }}>
                    <span className="text-accent">特定商取引法に基づく表記</span>
                </h1>

                <div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>事業者名</div>
                        <div style={valueStyle}>VanNess株式会社</div>
                    </div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>代表者</div>
                        <div style={valueStyle}>代表取締役 宮崎 和樹</div>
                    </div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>所在地</div>
                        <div style={valueStyle}>〒107-0062 東京都港区南青山3-1-36 青山丸竹ビル6F</div>
                    </div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>連絡先</div>
                        <div style={valueStyle}>
                            当サイトのお問い合わせフォーム、またはメール（info@vanness.co.jp）よりご連絡ください。<br />
                            電話番号はご請求に応じて遅滞なく開示いたします。
                        </div>
                    </div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>サービス料金</div>
                        <div style={valueStyle}>
                            各サービスの料金は、料金表、申込画面または利用契約書において表示される金額とします。
                        </div>
                    </div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>料金以外の必要費用</div>
                        <div style={valueStyle}>
                            消費税、振込手数料（銀行振込の場合）
                        </div>
                    </div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>支払方法</div>
                        <div style={valueStyle}>
                            クレジットカード決済、銀行振込
                        </div>
                    </div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>支払時期</div>
                        <div style={valueStyle}>
                            年間契約の場合：契約締結後、当社が定める期日まで<br />
                            月額プランの場合：各利用期間の開始前まで
                        </div>
                    </div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>サービスの提供時期</div>
                        <div style={valueStyle}>
                            契約成立後、速やかに提供いたします。
                        </div>
                    </div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>解約・返金について</div>
                        <div style={valueStyle}>
                            年間契約を基本とし、利用規約の定めに従い中途解約が可能です。<br />
                            なお、理由の如何を問わず、支払済みの利用料金は返金いたしません。
                        </div>
                    </div>
                    <div style={{ ...rowStyle, borderBottom: "none" }}>
                        <div style={labelStyle}>その他</div>
                        <div style={valueStyle}>
                            その他の事項については、当サイトに掲載する利用規約の定めに従います。
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
