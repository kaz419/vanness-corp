import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
    title: {
        default: "VanNess株式会社 | AI × 営業 × 採用 で企業成長の壁を突破",
        template: "%s | VanNess株式会社",
    },
    description: "VanNess株式会社は、AI導入支援・営業コンサルティング・採用支援・動画制作を一気通貫で提供。70名規模の専門家チームが、戦略立案から実行まで伴走し、企業成長の「壁」を突破します。",
    keywords: ["AI導入", "営業コンサルティング", "採用支援", "動画制作", "DX推進", "インサイドセールス", "AI研修", "VanNess"],
    authors: [{ name: "VanNess株式会社" }],
    creator: "VanNess株式会社",
    metadataBase: new URL("https://vanness.co.jp"),
    openGraph: {
        type: "website",
        locale: "ja_JP",
        url: "https://vanness.co.jp",
        siteName: "VanNess株式会社",
        title: "VanNess株式会社 | AI × 営業 × 採用 で企業成長の壁を突破",
        description: "AI導入支援・営業コンサルティング・採用支援・動画制作を一気通貫で提供。70名規模の専門家チームが企業成長を加速させます。",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "VanNess株式会社 - AI × 営業 × 採用",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "VanNess株式会社 | AI × 営業 × 採用",
        description: "AI導入支援・営業コンサルティング・採用支援・動画制作を一気通貫で提供。",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://vanness.co.jp",
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180" },
        ],
    },
};

import Header from "./components/Header";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieBanner from "./components/CookieBanner";
import MicrosoftClarity from "./components/MicrosoftClarity";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "VanNess株式会社",
        url: "https://vanness.co.jp",
        logo: "https://vanness.co.jp/logo.png",
        description: "AI導入支援・営業コンサルティング・採用支援・動画制作を一気通貫で提供",
        address: {
            "@type": "PostalAddress",
            addressCountry: "JP",
        },
        sameAs: [],
    };

    return (
        <html lang="ja" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={notoSansJP.className}>
                <GoogleAnalytics />
                <MicrosoftClarity />
                <Header />
                {children}
                <Footer />
                <CookieBanner />
            </body>
        </html>
    );
}
