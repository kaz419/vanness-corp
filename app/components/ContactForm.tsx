"use client";

import { useState } from "react";

const GAS_URL = "https://script.google.com/macros/s/AKfycbzMdhA-jAiatA6g4qqeXLJnJ5oHodqPphpd0NoM-bAyqvyLtSEmV2Khwfv75xUe0ScS/exec";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            // Google Apps Script usually requires 'no-cors' for client-side POST requests
            // This means we won't get a readable response, but the request will go through.
            await fetch(GAS_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Since we use no-cors, we assume success if no network error occurred
            setStatus("success");
            setFormData({ name: "", company: "", email: "", message: "" });
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    return (
        <div className="glass-card" style={{ padding: "3rem", maxWidth: "800px", margin: "0 auto" }}>
            {status === "success" ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✅</div>
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--white)" }}>送信完了</h3>
                    <p style={{ color: "var(--gray-medium)" }}>
                        お問い合わせありがとうございます。<br />
                        担当者より順次ご連絡させていただきます。
                    </p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="btn btn-outline"
                        style={{ marginTop: "2rem" }}
                    >
                        戻る
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2" style={{ gap: "2rem", marginBottom: "2rem" }}>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--gray-medium)", fontSize: "0.9rem" }}>
                                お名前 <span style={{ color: "var(--accent)" }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: "1rem",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "8px",
                                    color: "var(--white)",
                                    fontSize: "1rem",
                                    outline: "none"
                                }}
                                placeholder="山田 太郎"
                            />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--gray-medium)", fontSize: "0.9rem" }}>
                                会社名
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: "1rem",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "8px",
                                    color: "var(--white)",
                                    fontSize: "1rem",
                                    outline: "none"
                                }}
                                placeholder="株式会社VanNess"
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: "2rem" }}>
                        <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--gray-medium)", fontSize: "0.9rem" }}>
                            メールアドレス <span style={{ color: "var(--accent)" }}>*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "1rem",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "8px",
                                color: "var(--white)",
                                fontSize: "1rem",
                                outline: "none"
                            }}
                            placeholder="info@example.com"
                        />
                    </div>

                    <div style={{ marginBottom: "3rem" }}>
                        <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--gray-medium)", fontSize: "0.9rem" }}>
                            お問い合わせ内容 <span style={{ color: "var(--accent)" }}>*</span>
                        </label>
                        <textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            style={{
                                width: "100%",
                                padding: "1rem",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "8px",
                                color: "var(--white)",
                                fontSize: "1rem",
                                outline: "none",
                                resize: "vertical"
                            }}
                            placeholder="ご相談内容をご記入ください"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="btn btn-primary"
                            style={{
                                minWidth: "200px",
                                opacity: status === "submitting" ? 0.7 : 1,
                                cursor: status === "submitting" ? "wait" : "pointer"
                            }}
                        >
                            {status === "submitting" ? "送信中..." : "送信する"}
                        </button>
                        {status === "error" && (
                            <p style={{ color: "#ff4444", marginTop: "1rem" }}>
                                送信に失敗しました。時間をおいて再度お試しください。
                            </p>
                        )}
                    </div>
                </form>
            )}
        </div>
    );
}
