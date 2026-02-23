import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "情報セキュリティ方針",
    description: "VanNess株式会社の情報セキュリティ方針。情報資産の保護と適切な管理に関する基本方針をご案内します。",
};

export default function SecurityPage() {
    const sectionStyle = {
        marginBottom: "2.5rem",
    };
    const headingStyle = {
        fontSize: "1.25rem",
        fontWeight: 700 as const,
        color: "var(--white)",
        marginBottom: "1rem",
        paddingBottom: "0.5rem",
        borderBottom: "1px solid rgba(6, 182, 212, 0.2)",
    };
    const textStyle = {
        fontSize: "0.95rem",
        lineHeight: 1.9,
        color: "var(--gray-light)",
    };

    return (
        <main style={{ paddingTop: "120px", paddingBottom: "5rem" }}>
            <div className="container" style={{ maxWidth: "800px" }}>
                <h1 style={{ marginBottom: "1rem" }}>
                    <span className="text-accent">情報セキュリティ方針</span>
                </h1>
                <p style={{ color: "var(--gray-medium)", marginBottom: "3rem", fontSize: "0.9rem" }}>
                    制定日: 2025年1月5日
                </p>

                <div style={sectionStyle}>
                    <p style={textStyle}>
                        VanNess株式会社（以下「当社」）は、事業活動を通じて取得する全ての情報資産を重要な経営資源と認識し、
                        その保護と適切な管理を経営上の責務として、以下の方針に基づき情報セキュリティの確保に取り組みます。
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>情報セキュリティの定義</h2>
                    <p style={textStyle}>
                        当社における「情報セキュリティ」とは、情報の<strong style={{ color: "var(--white)" }}>機密性</strong>、
                        <strong style={{ color: "var(--white)" }}>完全性</strong>、
                        <strong style={{ color: "var(--white)" }}>可用性</strong>を維持することと定義します。
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>基本目的</h2>
                    <ul style={{ ...textStyle, paddingLeft: "1.5rem" }}>
                        <li>お客様および取引先からお預かりした情報資産の保護</li>
                        <li>情報セキュリティ事故の予防および万が一の被害最小化</li>
                        <li>サービス利用者に対する安全な利用環境の提供</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>基本方針</h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1rem" }}>
                        {[
                            { num: "01", title: "法令遵守", desc: "情報セキュリティに関する法令、規制、契約上の義務を遵守します。" },
                            { num: "02", title: "組織体制の整備", desc: "情報セキュリティ管理のための責任体制を明確にし、適切な組織運営を行います。" },
                            { num: "03", title: "教育・啓発", desc: "全従業員に対し、情報セキュリティの重要性に関する継続的な教育・啓発を実施します。" },
                            { num: "04", title: "アクセス管理", desc: "情報資産へのアクセス権限を必要最小限に制限し、適切な認証管理を実施します。" },
                            { num: "05", title: "技術的・物理的対策", desc: "暗号化、ログ管理、脆弱性管理等の技術的対策、および物理的な保護措置を講じます。" },
                            { num: "06", title: "委託先管理", desc: "クラウドサービス提供者等の外部委託先に対し、適切な監督を実施します。" },
                            { num: "07", title: "インシデント対応", desc: "情報セキュリティ事故に対する対応手順を整備し、被害の最小化と迅速な復旧に努めます。" },
                            { num: "08", title: "継続的改善", desc: "情報セキュリティに関する取り組みを定期的に見直し、新たな脅威や事業環境の変化に対応します。" },
                        ].map((item) => (
                            <div key={item.num} style={{
                                display: "flex",
                                gap: "1.25rem",
                                alignItems: "flex-start",
                            }}>
                                <div style={{
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "var(--cyan)",
                                    minWidth: "2rem",
                                    opacity: 0.7,
                                }}>
                                    {item.num}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, color: "var(--white)", marginBottom: "0.25rem", fontSize: "1rem" }}>
                                        {item.title}
                                    </div>
                                    <p style={{ ...textStyle, fontSize: "0.9rem" }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{
                    background: "rgba(6, 182, 212, 0.05)",
                    border: "1px solid rgba(6, 182, 212, 0.15)",
                    borderRadius: "12px",
                    padding: "2.5rem 2rem",
                    textAlign: "center" as const,
                }}>
                    <p style={{ fontSize: "0.85rem", color: "var(--gray-medium)", marginBottom: "1.5rem" }}>制定日: 2025年1月5日</p>
                    <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--white)", marginBottom: "0.5rem" }}>VanNess株式会社</p>
                    <p style={{ fontSize: "0.95rem", color: "var(--gray-light)" }}>代表取締役 宮崎 和樹</p>
                </div>
            </div>
        </main>
    );
}
