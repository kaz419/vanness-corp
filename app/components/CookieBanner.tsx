"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // 少し遅延してから表示（UX向上）
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: "fixed",
            bottom: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            width: "calc(100% - 2rem)",
            maxWidth: "600px",
            background: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(6, 182, 212, 0.2)",
            borderRadius: "16px",
            padding: "1.5rem 2rem",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            animation: "slideUp 0.4s ease-out",
        }}>
            <p style={{
                fontSize: "0.85rem",
                color: "var(--gray-light)",
                lineHeight: 1.7,
                marginBottom: "1rem",
            }}>
                当サイトでは、サービス向上とアクセス解析のためにCookieを使用しています。
                詳細は<Link href="/privacy" style={{ color: "var(--cyan)", textDecoration: "underline" }}>プライバシーポリシー</Link>をご覧ください。
            </p>
            <div style={{
                display: "flex",
                gap: "0.75rem",
                justifyContent: "flex-end",
            }}>
                <button
                    onClick={handleDecline}
                    style={{
                        padding: "0.5rem 1.25rem",
                        fontSize: "0.8rem",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.15)",
                        background: "transparent",
                        color: "var(--gray-medium)",
                        cursor: "pointer",
                        transition: "all 0.2s",
                    }}
                >
                    拒否
                </button>
                <button
                    onClick={handleAccept}
                    style={{
                        padding: "0.5rem 1.25rem",
                        fontSize: "0.8rem",
                        borderRadius: "8px",
                        border: "none",
                        background: "var(--gradient-accent)",
                        color: "var(--white)",
                        cursor: "pointer",
                        fontWeight: 600,
                        transition: "all 0.2s",
                    }}
                >
                    同意する
                </button>
            </div>
        </div>
    );
}
