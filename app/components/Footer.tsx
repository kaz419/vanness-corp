import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "4rem",
            paddingBottom: "2rem",
            background: "var(--navy-dark)",
        }}>
            <div className="container">
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "3rem",
                    marginBottom: "3rem",
                }}>
                    <div>
                        <Image
                            src="/logo.png"
                            alt="VanNess"
                            width={120}
                            height={40}
                            style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)", marginBottom: "1rem" }}
                        />
                        <p style={{ fontSize: "0.85rem", color: "var(--gray-medium)", lineHeight: 1.8 }}>
                            AI &times; 営業 &times; 採用 で、<br />企業成長の「壁」を突破する。
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: "0.85rem", color: "var(--cyan)", marginBottom: "1rem", letterSpacing: "0.1em" }}>SERVICE</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {[
                                { label: "営業コンサルティング", href: "/services#sales" },
                                { label: "動画制作", href: "/services#video" },
                                { label: "KOETE", href: "https://koete.ai/", external: true },
                                { label: "AI研修", href: "/services#ai-training" },
                                { label: "AI導入支援", href: "/services#ai-support" },
                                { label: "採用支援", href: "/services#recruitment" },
                            ].map((s) => (
                                s.external ? (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gray-medium)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}>
                                        {s.label} ↗
                                    </a>
                                ) : (
                                    <Link key={s.label} href={s.href} style={{ color: "var(--gray-medium)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}>
                                        {s.label}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: "0.85rem", color: "var(--cyan)", marginBottom: "1rem", letterSpacing: "0.1em" }}>COMPANY</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {[
                                { label: "会社概要", href: "/company" },
                                { label: "実績紹介", href: "/works" },
                                { label: "ニュース", href: "/news" },
                                { label: "採用情報", href: "/careers" },
                                { label: "お問い合わせ", href: "/#contact" },
                            ].map((item) => (
                                <Link key={item.label} href={item.href} style={{ color: "var(--gray-medium)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    paddingTop: "2rem",
                    textAlign: "center",
                    color: "var(--gray-medium)",
                    fontSize: "0.8rem",
                }}>
                    <div style={{ marginBottom: "0.75rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
                        <Link href="/privacy" style={{ color: "var(--gray-medium)", textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}>
                            プライバシーポリシー
                        </Link>
                        <Link href="/legal" style={{ color: "var(--gray-medium)", textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}>
                            特定商取引法に基づく表記
                        </Link>
                        <Link href="/security" style={{ color: "var(--gray-medium)", textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}>
                            情報セキュリティ方針
                        </Link>
                    </div>
                    &copy; {new Date().getFullYear()} VanNess Inc. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
