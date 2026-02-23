import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "プライバシーポリシー",
    description: "VanNess株式会社のプライバシーポリシー。個人情報の取扱いについてご案内いたします。",
};

export default function PrivacyPage() {
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
                    <span className="text-accent">Privacy Policy</span>
                </h1>
                <p style={{ color: "var(--gray-medium)", marginBottom: "3rem", fontSize: "0.9rem" }}>
                    最終更新日: 2025年2月23日
                </p>

                <div style={sectionStyle}>
                    <p style={textStyle}>
                        VanNess株式会社（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、
                        以下のとおりプライバシーポリシーを定め、個人情報の適切な取扱いと保護に努めます。
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>1. 個人情報の定義</h2>
                    <p style={textStyle}>
                        本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報を指し、
                        生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレス、
                        その他の記述等により特定の個人を識別できるものを言います。
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>2. 個人情報の収集方法</h2>
                    <p style={textStyle}>
                        当社は、以下の方法により個人情報を取得することがあります。
                    </p>
                    <ul style={{ ...textStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                        <li>お問い合わせフォームからのご入力</li>
                        <li>メール、電話、書面等でのお問い合わせ</li>
                        <li>サービスのお申し込み</li>
                        <li>採用へのご応募</li>
                        <li>Cookie等の技術的手段による自動取得</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>3. 個人情報の利用目的</h2>
                    <p style={textStyle}>
                        当社は、収集した個人情報を以下の目的で利用いたします。
                    </p>
                    <ul style={{ ...textStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                        <li>お問い合わせへの回答・対応</li>
                        <li>当社サービスの提供・運営</li>
                        <li>サービスに関するご案内・情報提供</li>
                        <li>契約の履行・管理</li>
                        <li>採用選考・連絡</li>
                        <li>サービス改善・新サービス開発のための分析</li>
                        <li>法令に基づく対応</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>4. 個人情報の第三者提供</h2>
                    <p style={textStyle}>
                        当社は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。
                    </p>
                    <ul style={{ ...textStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                        <li>ご本人の同意がある場合</li>
                        <li>法令に基づく場合</li>
                        <li>人の生命、身体または財産の保護のために必要がある場合</li>
                        <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                        <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する場合</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>5. 個人情報の安全管理</h2>
                    <p style={textStyle}>
                        当社は、個人情報の漏洩、滅失またはき損を防止するため、適切なセキュリティ対策を講じ、
                        個人情報の安全管理に努めます。また、個人情報を取り扱う従業員に対して、
                        必要かつ適切な監督を行います。
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>6. Cookie（クッキー）の使用について</h2>
                    <p style={textStyle}>
                        当社のウェブサイトでは、サービスの利便性向上およびアクセス解析のためにCookieを使用しています。
                        Cookieはお客様のブラウザに保存される小さなデータファイルであり、個人を特定する情報は含まれません。
                        ブラウザの設定によりCookieの受け入れを拒否することができますが、
                        その場合、一部のサービスが正常に機能しない可能性があります。
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>7. アクセス解析ツールについて</h2>
                    <p style={textStyle}>
                        当社のウェブサイトでは、Googleによるアクセス解析ツール「Google Analytics」を使用しています。
                        Google Analyticsはデータの収集にCookieを使用しています。
                        このデータは匿名で収集されており、個人を特定するものではありません。
                        詳細については、Google Analyticsの利用規約およびGoogleのプライバシーポリシーをご確認ください。
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>8. 個人情報の開示・訂正・削除</h2>
                    <p style={textStyle}>
                        お客様ご本人から個人情報の開示、訂正、追加、削除、利用停止のご請求があった場合、
                        ご本人であることを確認のうえ、速やかに対応いたします。
                        下記のお問い合わせ窓口までご連絡ください。
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>9. プライバシーポリシーの変更</h2>
                    <p style={textStyle}>
                        当社は、必要に応じて本プライバシーポリシーを変更することがあります。
                        変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
                    </p>
                </div>

                <div style={{
                    ...sectionStyle,
                    background: "rgba(6, 182, 212, 0.05)",
                    border: "1px solid rgba(6, 182, 212, 0.15)",
                    borderRadius: "12px",
                    padding: "2.5rem 2rem",
                    textAlign: "center" as const,
                }}>
                    <h2 style={{ ...headingStyle, borderBottom: "none", paddingBottom: 0, textAlign: "center" as const }}>10. お問い合わせ窓口</h2>
                    <p style={{ ...textStyle, marginBottom: "1.5rem" }}>
                        個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
                    </p>
                    <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--white)", marginBottom: "0.5rem" }}>VanNess株式会社</p>
                    <p style={{ fontSize: "0.95rem", color: "var(--gray-light)" }}>
                        メール: <a href="mailto:info@vanness.co.jp" style={{ color: "var(--cyan)", textDecoration: "none" }}>info@vanness.co.jp</a>
                    </p>
                </div>
            </div>
        </main>
    );
}
