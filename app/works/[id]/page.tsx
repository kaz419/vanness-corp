import Link from "next/link";
import { WORKS } from "../page";

export default async function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const work = WORKS.find((w) => w.id === id);

    if (!work) {
        return <div className="container section text-center">Case Study Not Found</div>;
    }

    return (
        <main style={{ paddingTop: "80px", minHeight: "100vh" }}>
            <div className="container section">
                {/* Breadcrumb */}
                <div style={{ marginBottom: "2rem", fontSize: "0.9rem", color: "var(--gray-medium)" }}>
                    <Link href="/works" style={{ color: "var(--gray-medium)", textDecoration: "none" }}>Works</Link>
                    <span style={{ margin: "0 0.5rem" }}>&gt;</span>
                    <span>{work.title}</span>
                </div>

                {/* Header */}
                <div style={{ marginBottom: "4rem" }}>
                    <p style={{ color: "var(--gray-medium)", marginBottom: "0.5rem" }}>2025/6/21</p>
                    <h1 style={{ fontSize: "2.5rem", marginBottom: "3rem" }}>{work.title}</h1>
                    <div style={{ width: "100%", height: "500px", borderRadius: "16px", overflow: "hidden", marginBottom: "3rem" }}>
                        <img
                            src={work.image}
                            alt={work.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>{work.client}</h2>
                    <p style={{ lineHeight: 2, color: "var(--gray-medium)" }}>{work.desc}</p>
                </div>

                {/* Content Sections */}
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    {/* Challenge */}
                    <section style={{ marginBottom: "4rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                            <div style={{ width: "4px", height: "24px", background: "var(--cyan)" }}></div>
                            <h3 style={{ fontSize: "1.5rem", margin: 0 }}>課題</h3>
                        </div>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {work.challenges.map((item, index) => (
                                <li key={index} style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative", lineHeight: 1.8 }}>
                                    <span style={{ position: "absolute", left: 0, top: "0.6em", width: "6px", height: "6px", background: "var(--gray-medium)", borderRadius: "50%" }}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Solution */}
                    <section style={{ marginBottom: "4rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                            <div style={{ width: "4px", height: "24px", background: "var(--cyan)" }}></div>
                            <h3 style={{ fontSize: "1.5rem", margin: 0 }}>開発・施策</h3>
                        </div>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {work.solutions.map((item, index) => (
                                <li key={index} style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative", lineHeight: 1.8 }}>
                                    <span style={{ position: "absolute", left: 0, top: "0.6em", width: "6px", height: "6px", background: "var(--gray-medium)", borderRadius: "50%" }}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Result */}
                    <section style={{ marginBottom: "6rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                            <div style={{ width: "4px", height: "24px", background: "var(--cyan)" }}></div>
                            <h3 style={{ fontSize: "1.5rem", margin: 0 }}>効果</h3>
                        </div>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {work.results.map((item, index) => (
                                <li key={index} style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative", lineHeight: 1.8 }}>
                                    <span style={{ position: "absolute", left: 0, top: "0.6em", width: "6px", height: "6px", background: "var(--gray-medium)", borderRadius: "50%" }}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className="text-center" style={{ marginBottom: "8rem" }}>
                        <Link href="/works" className="btn btn-outline" style={{ padding: "0.75rem 3rem" }}>
                            一覧ページに戻る
                        </Link>
                    </div>
                </div>

                {/* Pick Up */}
                <section style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "4rem" }}>
                    <h2 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Pick up</h2>
                    <p style={{ color: "var(--gray-medium)", marginBottom: "3rem" }}>おすすめ記事</p>
                    <div className="grid grid-cols-3">
                        {/* Just showing other works as pickup for now */}
                        {WORKS.filter(w => w.id !== id).map((w) => (
                            <Link href={`/works/${w.id}`} key={w.id} style={{ textDecoration: "none" }}>
                                <div className="card" style={{ padding: "0", overflow: "hidden", height: "100%" }}>
                                    <div style={{ height: "200px" }}>
                                        <img src={w.image} alt={w.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                    <div style={{ padding: "1.5rem" }}>
                                        <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--white)" }}>{w.title}</h3>
                                        <p style={{ fontSize: "0.9rem", color: "var(--gray-medium)" }}>{w.client}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
