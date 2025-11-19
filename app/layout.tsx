import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
    title: "VanNess株式会社 | AI × 営業 × 採用",
    description: "AI × 営業 × 採用 で、企業成長の「壁」を突破する。VanNess株式会社のコーポレートサイトです。",
};

import Header from "./components/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={notoSansJP.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
