import type { Metadata } from "next";
import Link from "next/link";
import { newsItems, getCategoryColor } from "../data/news";
import { ScrollFadeIn } from "../components/Animations";

export const metadata: Metadata = {
    title: "ニュース",
    description: "VanNess株式会社の最新ニュース・お知らせ・プレスリリース情報をお届けします。",
    openGraph: {
        title: "ニュース | VanNess株式会社",
        description: "VanNess株式会社の最新ニュース・お知らせ・プレスリリース情報。",
    },
};

export default function NewsPage() {
    return (
        <main style={{ paddingTop: "120px", paddingBottom: "5rem" }}>
            <div className="container" style={{ maxWidth: "900px" }}>
                <ScrollFadeIn>
                    <h1 style={{ marginBottom: "0.5rem" }}>
                        <span className="text-accent">News</span>
                    </h1>
                    <p style={{ color: "var(--gray-medium)", marginBottom: "3rem", fontSize: "1.1rem" }}>
                        お知らせ・プレスリリース
                    </p>
                </ScrollFadeIn>

                <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                    {newsItems.map((item, index) => (
                        <ScrollFadeIn key={item.id} delay={index * 80}>
                            <article style={{
                                padding: "2rem 0",
                                borderBottom: "1px solid rgba(255,255,255,0.06)",
                                transition: "background 0.2s",
                            }}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    marginBottom: "0.75rem",
                                    flexWrap: "wrap",
                                }}>
                                    <time style={{
                                        fontSize: "0.85rem",
                                        color: "var(--gray-medium)",
                                        fontFamily: "monospace",
                                    }}>
                                        {item.date}
                                    </time>
                                    <span style={{
                                        fontSize: "0.75rem",
                                        padding: "0.2rem 0.8rem",
                                        borderRadius: "50px",
                                        border: `1px solid ${getCategoryColor(item.category)}`,
                                        color: getCategoryColor(item.category),
                                        background: `${getCategoryColor(item.category)}10`,
                                    }}>
                                        {item.category}
                                    </span>
                                </div>
                                <h2 style={{
                                    fontSize: "1.15rem",
                                    fontWeight: 600,
                                    color: "var(--white)",
                                    marginBottom: "0.5rem",
                                    lineHeight: 1.6,
                                }}>
                                    {item.title}
                                </h2>
                                {item.summary && (
                                    <p style={{
                                        fontSize: "0.9rem",
                                        color: "var(--gray-light)",
                                        lineHeight: 1.7,
                                    }}>
                                        {item.summary}
                                    </p>
                                )}
                            </article>
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        </main>
    );
}
