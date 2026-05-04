import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources: Record<string, any> = {
  en: {
    translation: {
      nav: {
        getLaterly: "Get Laterly",
      },
      hero: {
        title1: "Save it now.",
        title2: "Make it a",
        desc1: "Save posts, places, and ideas you want to come back to — and actually find them when it matters.",
        desc2: "See what you saved nearby, when you need it.",
      },
      strip: {
        quote: "“The bookmark app I finally open.”",
        author: "— Side by Side",
        rating: "★ 4.9 · App Store",
        featured: "Featured · Designer Daily"
      },
      problem: {
        eyebrow: "Sound familiar",
        title: "You saved it for later.<br />But later never came.",
        ex1: "A restaurant from Instagram.",
        ex2: "A video from TikTok.",
        ex3: "A place you found on YouTube.",
        pain1: "You forgot it.",
        pain2: "Or forgot where you saved it.",
        sol1: "That's where Laterly comes in.",
        sol2: "One place to save. One place to come back."
      },
      how: {
        eyebrow: "How it works",
        title: "Simple.<br className='md:hidden' /><span className='hidden md:inline'> </span>Nothing to manage",
        step1Title: "Save",
        step1Desc: "Save from any app in a few taps.",
        step2Title: "Add what matters",
        step2Desc: "Name it, tag it, or pin a location.",
        step3Title: "Come back",
        step3Desc: "Get reminded and actually do it."
      },
      video: {
        eyebrow: "See it in motion",
        title: "Watch it happen",
        desc: "From saving to actually coming back to it.",
        demo: "30-second demo",
        demoSub: "Save → Find → Act"
      },
      features: {
        eyebrow: "What's inside",
        title: "The boring parts, handled.",
        f1Title: "Save from any app",
        f1Desc: "Share a link from Instagram, TikTok, or anywhere else. Laterly saves it in seconds.",
        f1DescMob: "Save from Instagram, TikTok, or anywhere in seconds.",
        f2Title: "Categories that fit life",
        f2Desc: "Eat, Go, Buy, Browse, Do — or invent your own labels with a colour and a glyph.",
        f2DescMob: "Eat, Go, Buy, Browse — or create your own.",
        f3Title: "Find it again, fast",
        f3Desc: "Search across titles, notes and the text inside your screenshots. Filter, switch, done.",
        f3TitleMob: "Find and keep what matters",
        f3DescMob: "Search to find what you need. Mark favorites to keep the best ones close.",
        f4Title: "Gentle reminders",
        f4Desc: "Nudge yourself for tonight, this weekend, or anytime you need.",
        f4DescMob: "A nudge at the right time.",
        f5Title: "Mark your favorites",
        f5Desc: "Keep the best ones easy to find. Favorites stay accessible even after you complete them.",
        f6Title: "Made your way",
        f6Desc: "Switch between light and dark themes, and choose your preferred language."
      },
      map: {
        eyebrow: "On the map",
        title: "See what's saved nearby",
        desc: "When you're out, open the map and see what you saved around you.",
        point1: "No digging through screenshots.",
        point2: "No jumping between apps.",
        point3: "Just decide and go.",
        eat: "Eat",
        go: "Go",
        buy: "Buy",
        browse: "Browse",
        do: "Do",
        directions: "Directions"
      },
      cta: {
        eyebrow: "Get started",
        title: "Make later happen",
        desc: "Start saving the things you actually want to come back to.",
        sub: "A calm pocket for the things you'll get to.",
        avail: "Available on",
        appstore: "App Store",
        googleplay: "Google Play",
        free: "Free to sign up",
        noads: "No ads or tracking",
        unlimited: "Unlimited saves"
      },
      footer: {
        tagline: "Built for real life — now and later.",
        explore: "Explore",
        how: "How it works",
        nearby: "Find things nearby",
        contact: "Contact",
        privacy: "Privacy"
      }
    }
  },
  "zh-TW": {
    translation: {
      nav: { getLaterly: "取得 Laterly" },
      hero: {
        title1: "現在儲存，",
        title2: "留給",
        desc1: "儲存你想回顧的貼文、地點與靈感——並且在真正需要時找到它們。",
        desc2: "隨時查看附近儲存的地點。",
      },
      strip: {
        quote: "「我終於會主動打開的書籤 App。」",
        author: "— Side by Side",
        rating: "★ 4.9 · App Store",
        featured: "精選推薦 · Designer Daily"
      },
      problem: {
        eyebrow: "似曾相識嗎？",
        title: "你存著想說晚點看。<br />但那個「晚點」從沒來過。",
        ex1: "Instagram 上的一家餐廳。",
        ex2: "TikTok 上的一段影片。",
        ex3: "YouTube 上發現的一個地方。",
        pain1: "你忘記了。",
        pain2: "或是忘記存去哪了。",
        sol1: "這就是 Laterly 派上用場的時候。",
        sol2: "一個專屬的儲存空間。一個讓你回顧的地方。"
      },
      how: {
        eyebrow: "運作方式",
        title: "簡單。<br className='md:hidden' /><span className='hidden md:inline'> </span>無需繁瑣管理",
        step1Title: "儲存",
        step1Desc: "點幾下即可從任何應用程式儲存。",
        step2Title: "加上重點",
        step2Desc: "命名、加上標籤或標記地點。",
        step3Title: "回顧",
        step3Desc: "獲得提醒並付諸行動。"
      },
      video: {
        eyebrow: "實際演示",
        title: "看看它是如何運作的",
        desc: "從儲存到實際回顧的過程。",
        demo: "30 秒展示",
        demoSub: "儲存 → 尋找 → 行動"
      },
      features: {
        eyebrow: "功能介紹",
        title: "瑣碎的事，我們包辦。",
        f1Title: "從任何 App 儲存",
        f1Desc: "分享 Instagram、TikTok 或任何地方的連結。Laterly 幾秒內幫你存好。",
        f1DescMob: "幾秒內從 Instagram、TikTok 或任何地方儲存。",
        f2Title: "貼近生活的分類",
        f2Desc: "吃、去、買、逛、做——或者用顏色和圖示發明你自己的標籤。",
        f2DescMob: "吃、去、買、逛——或者建立你自己的分類。",
        f3Title: "快速找回",
        f3Desc: "搜尋標題、筆記和截圖內的文字。篩選、切換，輕鬆完成。",
        f3TitleMob: "尋找並保留重要事物",
        f3DescMob: "搜尋你需要的事物。標記最愛，將最好的留在身邊。",
        f4Title: "溫柔提醒",
        f4Desc: "在今晚、這個週末或任何你需要的時候提醒自己。",
        f4DescMob: "在對的時間給予提醒。",
        f5Title: "標記最愛",
        f5Desc: "讓最棒的內容容易找到。最愛項目即使完成後依然可以存取。",
        f6Title: "隨心所欲",
        f6Desc: "在深色與淺色主題間切換，並選擇你偏好的語言。"
      },
      map: {
        eyebrow: "在地圖上",
        title: "查看附近儲存的事物",
        desc: "出門在外時，打開地圖看看周圍有哪些你存過的地點。",
        point1: "不用在截圖堆裡翻找。",
        point2: "不用在 App 之間切換。",
        point3: "決定好，直接出發。" ,
        eat: "吃",
        go: "去",
        buy: "買",
        browse: "逛",
        do: "做",
        directions: "導航"
      },
      cta: {
        eyebrow: "開始使用",
        title: "讓「晚點」成真",
        desc: "開始儲存那些你真正想回顧的事物。",
        sub: "為你想做的事留一個平靜的口袋。",
        avail: "支援平台",
        appstore: "App Store",
        googleplay: "Google Play",
        free: "免費註冊",
        noads: "無廣告或追蹤",
        unlimited: "無限儲存"
      },
      footer: {
        tagline: "為真實生活打造——現在與未來。",
        explore: "探索",
        how: "運作方式",
        nearby: "尋找附近事物",
        contact: "聯絡我們",
        privacy: "隱私權政策"
      }
    }
  },
  "zh-CN": {
    translation: {
      nav: { getLaterly: "获取 Laterly" },
      hero: {
        title1: "现在保存，",
        title2: "留给",
        desc1: "保存你想回顾的帖子、地点与灵感——并且在真正需要时找到它们。",
        desc2: "随时查看附近保存的地点。",
      },
      strip: {
        quote: "“我终于会主动打开的书签 App。”",
        author: "— Side by Side",
        rating: "★ 4.9 · App Store",
        featured: "精选推荐 · Designer Daily"
      },
      problem: {
        eyebrow: "似曾相识吗？",
        title: "你存着想说晚点看。<br />但那个“晚点”从没来过。",
        ex1: "Instagram 上的一家餐厅。",
        ex2: "TikTok 上的一段视频。",
        ex3: "YouTube 上发现的一个地方。",
        pain1: "你忘记了。",
        pain2: "或是忘记存去哪了。",
        sol1: "这就是 Laterly 派上用场的时候。",
        sol2: "一个专属的保存空间。一个让你回顾的地方。"
      },
      how: {
        eyebrow: "运作方式",
        title: "简单。<br className='md:hidden' /><span className='hidden md:inline'> </span>无需繁琐管理",
        step1Title: "保存",
        step1Desc: "点几下即可从任何应用程序保存。",
        step2Title: "加上重点",
        step2Desc: "命名、加上标签或标记地点。",
        step3Title: "回顾",
        step3Desc: "获得提醒并付诸行动。"
      },
      video: {
        eyebrow: "实际演示",
        title: "看看它是如何运作的",
        desc: "从保存到实际回顾的过程。",
        demo: "30 秒展示",
        demoSub: "保存 → 寻找 → 行动"
      },
      features: {
        eyebrow: "功能介绍",
        title: "琐碎的事，我们包办。",
        f1Title: "从任何 App 保存",
        f1Desc: "分享 Instagram、TikTok 或任何地方的链接。Laterly 几秒内帮你存好。",
        f1DescMob: "几秒内从 Instagram、TikTok 或任何地方保存。",
        f2Title: "贴近生活的分类",
        f2Desc: "吃、去、买、逛、做——或者用颜色和图标发明你自己的标签。",
        f2DescMob: "吃、去、买、逛——或者建立你自己的分类。",
        f3Title: "快速找回",
        f3Desc: "搜索标题、笔记和截图内的文字。筛选、切换，轻松完成。",
        f3TitleMob: "寻找并保留重要事物",
        f3DescMob: "搜索你需要的事物。标记最爱，将最好的留在身边。",
        f4Title: "温柔提醒",
        f4Desc: "在今晚、这个周末或任何你需要的时候提醒自己。",
        f4DescMob: "在对的时间给予提醒。",
        f5Title: "标记最爱",
        f5Desc: "让最棒的内容容易找到。最爱项目即使完成后依然可以访问。",
        f6Title: "随心所欲",
        f6Desc: "在深色与浅色主题间切换，并选择你偏好的语言。"
      },
      map: {
        eyebrow: "在地图上",
        title: "查看附近保存的事物",
        desc: "出门在外时，打开地图看看周围有哪些你存过的地点。",
        point1: "不用在截图堆里翻找。",
        point2: "不用在 App 之间切换。",
        point3: "决定好，直接出发。" ,
        eat: "吃",
        go: "去",
        buy: "买",
        browse: "逛",
        do: "做",
        directions: "导航"
      },
      cta: {
        eyebrow: "开始使用",
        title: "让“晚点”成真",
        desc: "开始保存那些你真正想回顾的事物。",
        sub: "为你想要做的事留一个平静的口袋。",
        avail: "支持平台",
        appstore: "App Store",
        googleplay: "Google Play",
        free: "免费注册",
        noads: "无广告或追踪",
        unlimited: "无限保存"
      },
      footer: {
        tagline: "为真实生活打造——现在与未来。",
        explore: "探索",
        how: "运作方式",
        nearby: "寻找附近事物",
        contact: "联系我们",
        privacy: "隐私政策"
      }
    }
  },
  "ja": {
    translation: {
      nav: { getLaterly: "Laterlyを入手" },
      hero: {
        title1: "今すぐ保存して、",
        title2: "後で楽しむ",
        desc1: "後で見返したい投稿、場所、アイデアを保存し、必要な時にすぐに見つけられます。",
        desc2: "必要な時に、近くで保存した場所を確認できます。",
      },
      strip: {
        quote: "「ついに開く気になったブックマークアプリ」",
        author: "— Side by Side",
        rating: "★ 4.9 · App Store",
        featured: "おすすめ · Designer Daily"
      },
      problem: {
        eyebrow: "心当たりはありませんか？",
        title: "後で見ようと保存したまま。<br />でもその「後で」は来なかった。",
        ex1: "Instagramで見つけたレストラン。",
        ex2: "TikTokの動画。",
        ex3: "YouTubeで見つけた場所。",
        pain1: "忘れてしまった。",
        pain2: "どこに保存したか忘れてしまった。",
        sol1: "そこでLaterlyの出番です。",
        sol2: "保存する場所も、見返す場所もひとつだけ。"
      },
      how: {
        eyebrow: "使い方",
        title: "シンプル。<br className='md:hidden' /><span className='hidden md:inline'> </span>管理は不要です",
        step1Title: "保存",
        step1Desc: "数回のタップでどのアプリからも保存。",
        step2Title: "情報を追加",
        step2Desc: "名前、タグ、場所を追加。",
        step3Title: "見返す",
        step3Desc: "リマインダーを受け取り、実際に行動する。"
      },
      video: {
        eyebrow: "実際の動き",
        title: "動作を見てみる",
        desc: "保存から実際に見返すまで。",
        demo: "30秒デモ",
        demoSub: "保存 → 見つける → 行動"
      },
      features: {
        eyebrow: "機能",
        title: "面倒なことはすべてお任せ。",
        f1Title: "どのアプリからも保存",
        f1Desc: "Instagram、TikTokなどからリンクを共有。Laterlyが数秒で保存します。",
        f1DescMob: "Instagram、TikTokなどから数秒で保存。",
        f2Title: "生活に合ったカテゴリー",
        f2Desc: "食べる、行く、買う、見る、する — 色とアイコンで独自のラベルも作成可能。",
        f2DescMob: "食べる、行く、買う、見る — 独自の分類も作成可能。",
        f3Title: "すぐに見つかる",
        f3Desc: "タイトル、メモ、スクリーンショット内のテキストを検索。フィルタリングも簡単です。",
        f3TitleMob: "大切なものを見つけて保存",
        f3DescMob: "必要なものを検索。お気に入りをマークして、常に手元に。",
        f4Title: "優しいリマインダー",
        f4Desc: "今夜、今週末、または必要な時にリマインド。",
        f4DescMob: "適切なタイミングでお知らせ。",
        f5Title: "お気に入りをマーク",
        f5Desc: "最高のものを見つけやすく。完了後もアクセス可能です。",
        f6Title: "あなた好みに",
        f6Desc: "ライト・ダークテーマの切り替え、お好みの言語を選択できます。"
      },
      map: {
        eyebrow: "マップ上で",
        title: "近くの保存済み項目を見る",
        desc: "外出先でマップを開き、周りに保存した場所がないか確認。",
        point1: "スクリーンショットを探し回る必要なし。",
        point2: "アプリ間を行ったり来たりする必要なし。",
        point3: "決めたら、すぐに出発。" ,
        eat: "食べる",
        go: "行く",
        buy: "買う",
        browse: "見る",
        do: "する",
        directions: "経路"
      },
      cta: {
        eyebrow: "はじめよう",
        title: "「後で」を実現する",
        desc: "本当に見返したいものを保存し始めましょう。",
        sub: "やりたいことのための、穏やかなポケット。",
        avail: "対応プラットフォーム",
        appstore: "App Store",
        googleplay: "Google Play",
        free: "無料登録",
        noads: "広告・トラッキングなし",
        unlimited: "無制限の保存"
      },
      footer: {
        tagline: "今とこれからの、リアルな生活のために。",
        explore: "探索",
        how: "使い方",
        nearby: "近くのものを探す",
        contact: "お問い合わせ",
        privacy: "プライバシーポリシー"
      }
    }
  }
};

// Aliases for UK English
resources['en-GB'] = resources['en-US'] = resources['en'];

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;