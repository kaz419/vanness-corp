export type NewsCategory = "お知らせ" | "プレスリリース" | "メディア掲載" | "イベント";

export interface NewsItem {
    id: string;
    date: string;
    category: NewsCategory;
    title: string;
    summary?: string;
    content?: string;
}

// CMS移行時はここをAPI取得に差し替えるだけでOK
export const newsItems: NewsItem[] = [
    {
        id: "2025-03-koete-launch",
        date: "2025-03-01",
        category: "プレスリリース",
        title: "多言語ビジネスコミュニケーションツール「KOETE」を正式リリース",
        summary: "7言語対応のAI翻訳機能を搭載した多言語ビジネスコミュニケーションツール「KOETE」を正式リリースしました。製造・建設・介護・物流など多国籍スタッフを抱える現場の報連相を一元化します。",
    },
    {
        id: "2025-02-launch",
        date: "2025-02-23",
        category: "お知らせ",
        title: "コーポレートサイトをリニューアルしました",
        summary: "より分かりやすく、当社のサービスや強みをお伝えできるよう、コーポレートサイトを全面リニューアルいたしました。",
    },
    {
        id: "2025-02-koete",
        date: "2025-02-15",
        category: "プレスリリース",
        title: "多言語コミュニケーションプラットフォーム「KOETE」のリリース準備を開始",
        summary: "多国籍スタッフ向けAI翻訳×業務管理プラットフォーム「KOETE」の開発を進めており、近日中のリリースを予定しています。",
    },
    {
        id: "2025-01-ai-training",
        date: "2025-01-20",
        category: "お知らせ",
        title: "法人向けAI研修プログラムの提供を開始",
        summary: "ChatGPT活用から業務改革ワークショップまで、職種別の実践的AI研修プログラムの提供を開始しました。",
    },
    {
        id: "2024-12-case",
        date: "2024-12-10",
        category: "お知らせ",
        title: "FinTechスタートアップ様の商談化率2.4倍改善の実績を公開",
        summary: "インサイドセールス立ち上げ支援により、商談化率を5%から12%へ改善した事例を実績ページに掲載しました。",
    },
];

export function getNewsById(id: string): NewsItem | undefined {
    return newsItems.find((item) => item.id === id);
}

export function getCategoryColor(category: NewsCategory): string {
    switch (category) {
        case "お知らせ":
            return "var(--cyan)";
        case "プレスリリース":
            return "#a78bfa";
        case "メディア掲載":
            return "#34d399";
        case "イベント":
            return "#fb923c";
        default:
            return "var(--cyan)";
    }
}
