import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources: Record<string, any> = {
  en: {
    translation: {
      nav: {
        getLaterly: "Get Laterly",
        how: "How it works",
        map: "Find things nearby",
        demo: "Demo",
      },
      hero: {
        title1: "Save it now.",
        title2: "Make it a",
        desc1: "Save posts, places, and ideas you want to come back to — and actually find them when it matters.",
        desc2: "See what you saved nearby, when you need it.",
        trust1: "No ads",
        trust2: "Private by default",
        trust3: "Your saves stay yours",
      },
      strip: {
        quote: "“The bookmark app I finally open.”",
        author: "— Side by Side",
        rating: "★ 4.9 · App Store",
        featured: "Featured · Designer Daily"
      },
      problem: {
        eyebrow: "Sound familiar",
        title: "You saved it for later.<br />But later never <em class='italic text-primary'>came</em>.",
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
        title: "Simple.<br class='md:hidden' /><span class='hidden md:inline'> </span>Nothing to <em class='italic text-primary'>manage</em>",
        step1Title: "Save",
        step1Desc: "Save from any app in a few taps.",
        step2Title: "Add what matters",
        step2Desc: "Name it, tag it, or pin a location.",
        step3Title: "Come back",
        step3Desc: "Get reminded and actually do it."
      },
      video: {
        eyebrow: "See it in motion",
        title: "Watch it <em class='italic text-primary'>happen</em>",
        desc: "From saving to actually coming back to it.",
        demo: "30-second demo",
        demoSub: "Save → Find → Act"
      },
      features: {
        eyebrow: "What's inside",
        title: "The boring parts, <em class='italic text-primary'>handled</em>.",
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
        f6Desc: "Choose your preferred language to make it feel like yours."
      },
      map: {
        eyebrow: "On the map",
        title: "See what's saved <em class='italic text-primary'>nearby</em>",
        desc: "When you're out, open the map and see what you saved around you.",
        point1: "No digging through screenshots.",
        point2: "No jumping between apps.",
        point3: "Just decide and go.",
        eat: "Eat",
        go: "Go",
        buy: "Buy",
        browse: "Browse",
        do: "Do",
        directions: "Directions",
        pinTitle: "Best Bakery In Town",
        pinSubtitle: "Bean Around Bakery-Café",
        pinAddress: "350 Queens Parade, Fitzroy North"
      },
      cta: {
        eyebrow: "Get started",
        title: "Make later <em class='italic text-primary'>happen</em>",
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
      },
      privacy: {
        back: "Back",
        title: "Privacy Policy",
        lastUpdated: "Last updated: April 25, 2026",
        intro1: "Laterly is built around a simple principle: your data stays yours.",
        intro2: "Everything you save lives on your device. We don't sell your data, train AI models on it, or use it for advertising.",
        collectTitle: "What we collect",
        collect1Title: "On your device (local only)",
        collect1Desc1: "Your saved links, screenshots, categories, notes, locations, reminders, and preferences are stored locally using your device's secure storage.",
        collect1Desc2: "This data never leaves your device unless you explicitly share a saved item.",
        collect2Title: "Account information (if you sign up)",
        collect2Desc1: "If you create an account, we store your email address and authentication credentials through Supabase.",
        collect2Desc2: "Currently, your saved content is <em>not</em> synced to our servers. Your account unlocks unlimited saves beyond the guest experience.",
        collect3Title: "Links you save",
        collect3Desc1: "When you save a link, we fetch preview images and titles from the source website using third-party services (including Microlink, noembed, vxtwitter, TikTok oEmbed, and our own Supabase function).",
        collect3Desc2: "These requests may involve sending the saved URL to these third-party services and source websites.",
        collect4Title: "Location data",
        collect4Desc1: "When you add a location to a saved item or search for places, geocoding services (Photon, Nominatim) resolve addresses and coordinates.",
        collect4Desc2: "Location data is stored locally and never sent to Laterly's servers.",
        collect5Title: "Notifications",
        collect5Desc1: "Reminders are scheduled and managed entirely on your device. We don't collect or track notification data.",
        notCollectTitle: "What we don't collect",
        notCollect1: "We don't track your browsing activity",
        notCollect2: "We don't sell your data to third parties",
        notCollect3: "We don't use your data to train AI models",
        notCollect4: "We don't show ads",
        notCollect5: "We don't access your photos unless you explicitly choose to import them",
        thirdPartyTitle: "Third-party services",
        tp1Title: "Authentication (Supabase, Google, Apple)",
        tp1Desc1: "We use Supabase for secure authentication. When you sign up with third-party providers (Google or Apple), we only receive your basic profile information (such as your name and email address) necessary to create your account.",
        tp1Desc2Prefix: "We do not share your saved items or app usage data with these providers. Read Supabase's",
        tp1Desc2Link: "privacy policy",
        tp1Desc2Suffix: ".",
        tp2Title: "Link previews (Microlink, noembed, vxtwitter, TikTok)",
        tp2Desc1: "When you save a link, we fetch preview images and titles using Microlink, noembed, vxtwitter, TikTok oEmbed, and direct website fetching.",
        tp2Desc2: "These requests are made from our secure Supabase servers. The URLs you save may be sent to these third-party services and source websites to extract metadata.",
        tp3Title: "Place search (Photon, Nominatim)",
        tp3Desc1: "When you search for a location, we use open-source geocoding services.",
        tp3Desc2: "These requests are made directly from your device and may be logged by the service providers.",
        tp4Title: "Maps (OpenStreetMap, Carto)",
        tp4Desc1: "Map tiles are loaded from OpenStreetMap and Carto. Your device makes requests directly to these services when viewing the map.",
        tp4Desc2: "We don't collect or store your map usage.",
        futureTitle: "Future features",
        futureDesc1: "We're considering adding cloud sync in the future, which would allow you to access your saved items across devices.",
        futureDesc2: "If we add this feature:",
        futurePoint1: "It will be entirely optional",
        futurePoint2: "You'll be notified and asked to opt in",
        futurePoint3: "Your data will remain encrypted and private",
        futurePoint4: "We'll update this policy with clear details",
        controlTitle: "Your control",
        controlDesc1: "Since your data is stored locally, you have complete control:",
        controlPoint1: "Delete any saved item at any time",
        controlPoint2: "Clear all your data from the app settings",
        controlPoint3: "Delete your account and all associated data",
        controlPoint4: "Export your data (coming soon)",
        controlDesc2: "If you delete the app, all locally stored data is permanently removed from your device.",
        deletionTitle: "Account deletion",
        deletionDesc1: "You have the right to delete your account and all associated data at any time.",
        deletionDesc2: "To delete your account, open the Laterly app, go to Settings > Account, and tap \"Delete Account\". This action is irreversible and will immediately remove your authentication credentials from our servers.",
        deletionDesc3: "Please note that since your saved items are stored locally on your device, deleting your account will not automatically delete the data stored on your device. To remove all local data, you must delete the app from your device.",
        childrenTitle: "Children's privacy",
        childrenDesc1: "Laterly is available to users of all ages. If you're under 13 (or under the age of consent in your country), you should use Laterly with parental guidance.",
        childrenDesc2: "Since all data is stored locally and we don't collect personal information beyond your email (if you create an account), Laterly is safe for younger users when used responsibly.",
        childrenDesc3Prefix: "Parents: if your child has created an account and you'd like it removed, contact us at",
        email: "support@getlaterly.com",
        childrenDesc3Suffix: ".",
        updatesTitle: "Updates to this policy",
        updatesDesc1: "We may update this policy as Laterly evolves.",
        updatesDesc2: "If we make significant changes, we'll notify you through the app or via email (if you've created an account).",
        updatesDesc3: "The \"Last updated\" date at the top of this page shows when we last revised this policy.",
        questionsTitle: "Questions?",
        questionsDesc1: "If you have questions about this privacy policy or how Laterly handles your data, email us at:",
        backHome: "Back to home"
      }
    }
  },
  "zh-TW": {
    translation: {
      nav: {
        getLaterly: "立刻體驗 Laterly",
        how: "怎麼玩",
        map: "探索附近",
        demo: "示範",
      },
      hero: {
        title1: "先存下來，",
        title2: "留給",
        desc1: "把 IG 上的絕美咖啡廳、脆上的爆笑短片、還有你想去的所有寶藏景點通通收進來——保證你下次真的找得到。",
        desc2: "滑開地圖，一秒解鎖你以前在附近存過的所有好料。",
        trust1: "零廣告",
        trust2: "預設保護隱私",
        trust3: "你的收藏還是你的",
      },
      strip: {
        quote: "「這是我這輩子唯一會主動打開的書籤 App。」",
        author: "— Side by Side",
        rating: "★ 4.9 · App Store",
        featured: "精選推薦 · Designer Daily"
      },
      problem: {
        eyebrow: "是不是很常這樣？",
        title: "每次都說「晚點看」，<br />然後就沒有<em class='italic text-primary'>然後了</em>。",
        ex1: "滑 IG 看到一家超美咖啡廳。",
        ex2: "看脆學到的神奇小撇步。",
        ex3: "YouTube 上介紹的秘境景點。",
        pain1: "你早就忘光了。",
        pain2: "或者根本忘了當初存在哪個 App 裡。",
        sol1: "這就是為什麼你需要 Laterly。",
        sol2: "通通存在同一個地方，想看隨時找得到。"
      },
      how: {
        eyebrow: "怎麼玩？",
        title: "超無腦。<br class='md:hidden' /><span class='hidden md:inline'> </span>完全不用費心<em class='italic text-primary'>整理</em>",
        step1Title: "一鍵收藏",
        step1Desc: "點兩下，各大 App 的內容無痛存入。",
        step2Title: "畫個重點",
        step2Desc: "隨手標記名稱、打上標籤或定位。",
        step3Title: "乖乖回來看",
        step3Desc: "時間到了自動提醒，這次一定會行動。"
      },
      video: {
        eyebrow: "眼見為憑",
        title: "看看我們怎麼<em class='italic text-primary'>做到的</em>",
        desc: "從無腦收藏，到真的把清單實現的超順暢體驗。",
        demo: "30 秒精華",
        demoSub: "收藏 → 找回 → 出發"
      },
      features: {
        eyebrow: "裡面有什麼料",
        title: "那些最麻煩的事，我們幫你<em class='italic text-primary'>搞定了</em>",
        f1Title: "什麼 App 都能存",
        f1Desc: "把 Instagram、脆還是任何地方的連結分享過來。Laterly 幾秒內幫你搞定。",
        f1DescMob: "管他是 IG 還是脆，幾秒內無痛收藏。",
        f2Title: "最懂你生活的分類",
        f2Desc: "吃、去、買、逛、做——或者自己選顏色跟圖示，發明你的專屬標籤。",
        f2DescMob: "吃喝玩樂通通包辦——或者自創你的專屬分類。",
        f3Title: "找東西快狠準",
        f3Desc: "連截圖裡的文字都能搜！標題、筆記隨便搜，篩選一下馬上找到。",
        f3TitleMob: "隨手找回你的寶藏",
        f3DescMob: "想找什麼隨便搜。標記最愛，把最心動的留在身邊。",
        f4Title: "剛剛好的溫柔提醒",
        f4Desc: "設定今晚、週末、或是隨便哪天，我們會在對的時間戳戳你。",
        f4DescMob: "在對的時間，給你最剛好的提醒。",
        f5Title: "把最愛打星號",
        f5Desc: "超心動的內容隨時置頂。就算打勾完成了，這些最愛還是隨時找得到。",
        f6Title: "你的 App 你做主",
        f6Desc: "語言你想用哪種就選哪種，打造你最順手的介面。"
      },
      map: {
        eyebrow: "打開地圖",
        title: "看看附近有什麼<em class='italic text-primary'>好料</em>",
        desc: "人在外面不知道要去哪？打開地圖，看看附近有沒有你以前存過的好地方。",
        point1: "不用再從幾萬張截圖裡大海撈針。",
        point2: "不用在各種 App 之間瘋狂切換。",
        point3: "看準了，直接出發！" ,
        eat: "吃爆",
        go: "出發",
        buy: "血拼",
        browse: "逛逛",
        do: "手作",
        directions: "帶我去",
        pinTitle: "巷口那家神級肉桂捲",
        pinSubtitle: "Bean Around Bakery-Café",
        pinAddress: "350 Queens Parade, Fitzroy North"
      },
      cta: {
        eyebrow: "還等什麼？",
        title: "讓「晚點」<em class='italic text-primary'>成真</em>",
        desc: "別再只存不看了，現在就把想去的地方、想買的東西通通收進來。",
        sub: "為你想做的事，留一個專屬的收納空間。",
        avail: "這裡都可以下載",
        appstore: "App Store",
        googleplay: "Google Play",
        free: "註冊完全免費",
        noads: "零廣告，不追蹤",
        unlimited: "收藏無上限"
      },
      footer: {
        tagline: "為你最真實的生活打造——現在存，晚點見。",
        explore: "到處逛逛",
        how: "怎麼玩？",
        nearby: "找附近好料",
        contact: "找我們聊聊",
        privacy: "隱私權政策"
      },
      privacy: {
        back: "回上一頁",
        title: "隱私權政策",
        lastUpdated: "最後更新：2026年4月25日",
        intro1: "Laterly 的原則超簡單：你的資料，就是你的。",
        intro2: "你存的所有東西都乖乖躺在你的手機裡。我們絕對不賣你的資料、不拿去訓練 AI，更不會塞廣告給你。",
        collectTitle: "我們收集了什麼",
        collect1Title: "只存在你手機裡的資料（本機專屬）",
        collect1Desc1: "你存的連結、截圖、分類、筆記、地點跟提醒，通通都安全地鎖在你手機的本機空間裡。",
        collect1Desc2: "除非你自己想把內容分享出去，不然這些資料絕對不會離開你的手機。",
        collect2Title: "你的帳號資訊（如果你有註冊的話）",
        collect2Desc1: "如果你辦了帳號，我們會透過 Supabase 安全地保存你的 Email 跟登入憑證。",
        collect2Desc2: "目前你存的寶藏們<em>不會</em>同步到我們的伺服器上。辦帳號只是為了讓你能無限制瘋狂收藏！",
        collect3Title: "你存下來的連結",
        collect3Desc1: "當你丟連結進來時，我們會透過第三方小幫手（包含 Microlink、noembed、vxtwitter、TikTok oEmbed 還有我們自己的 Supabase 程式）去抓預覽圖跟標題。",
        collect3Desc2: "在抓取資料的過程中，你儲存的網址可能會被傳送給這些第三方服務以及來源網站。",
        collect4Title: "位置資訊",
        collect4Desc1: "當你幫收藏加上地點或是搜尋好去處時，地理編碼服務（Photon、Nominatim）會幫忙把地址轉換成座標。",
        collect4Desc2: "這些位置資訊只會存在你手機裡，絕對不會傳到 Laterly 的伺服器上。",
        collect5Title: "推播通知",
        collect5Desc1: "所有的提醒排程都是你手機自己搞定的，我們完全不會收集或追蹤你的通知紀錄。",
        notCollectTitle: "我們「絕對不」收集的東西",
        notCollect1: "我們不追蹤你都在看什麼網站",
        notCollect2: "我們不把你的資料賣給任何第三方",
        notCollect3: "我們不拿你的心血去訓練 AI 模型",
        notCollect4: "我們不塞任何煩人的廣告給你",
        notCollect5: "除非你自己要匯入，不然我們絕對看不到你的相簿",
        thirdPartyTitle: "我們用到的第三方好幫手",
        tp1Title: "登入驗證 (Supabase, Google, Apple)",
        tp1Desc1: "我們靠 Supabase 把關你的登入安全。當你使用第三方服務（Google 或 Apple）註冊時，我們只會收到建立帳號所需的基本個人資料（例如你的名字和 Email）。",
        tp1Desc2Prefix: "我們絕對不會把你的收藏內容或使用紀錄分享給這些第三方服務商。想了解更多可以看看 Supabase 的",
        tp1Desc2Link: "隱私權政策",
        tp1Desc2Suffix: "。",
        tp2Title: "連結預覽 (Microlink, noembed, vxtwitter, TikTok)",
        tp2Desc1: "幫你抓網頁預覽圖和標題時，我們用到了 Microlink、noembed、vxtwitter、TikTok oEmbed 和直接抓取網頁內容的技術。",
        tp2Desc2: "這些請求會從我們安全的 Supabase 伺服器發出去。你儲存的網址可能會被傳送給這些第三方服務與來源網站，以擷取預覽資訊。",
        tp3Title: "找地點 (Photon, Nominatim)",
        tp3Desc1: "當你在搜尋要去哪時，我們用的是開源的地理編碼服務。",
        tp3Desc2: "這也是從你手機直接發送的請求，服務商那邊可能會留下紀錄喔。",
        tp4Title: "看地圖 (OpenStreetMap, Carto)",
        tp4Desc1: "地圖畫面是從 OpenStreetMap 和 Carto 載入的。你在看地圖時，你的手機會直接跟這些服務要資料。",
        tp4Desc2: "我們不會收集也不會記錄你怎麼使用地圖。",
        futureTitle: "未來可能會有的酷東西",
        futureDesc1: "我們有在想以後要不要加入雲端同步，讓你換手機也能看得到你存的心血。",
        futureDesc2: "如果哪天我們真的推出了這個功能：",
        futurePoint1: "要不要用完全看你心情",
        futurePoint2: "我們會提早通知你，問你要不要開啟",
        futurePoint3: "你的資料還是會被加密，絕對保密",
        futurePoint4: "我們會把這些規則寫得清清楚楚再來更新政策",
        controlTitle: "一切由你做主",
        controlDesc1: "因為資料都在你手機裡，你擁有 100% 的決定權：",
        controlPoint1: "看哪個收藏不爽，隨時可以刪",
        controlPoint2: "到設定裡一鍵清空所有資料",
        controlPoint3: "刪除帳號，連帶把所有資料帶走",
        controlPoint4: "把你的心血打包匯出（這個快推出了！）",
        controlDesc2: "如果你把 App 刪掉，所有存在手機裡的資料就會跟著永遠消失喔。",
        deletionTitle: "帳號刪除",
        deletionDesc1: "您有權隨時刪除您的帳號及所有相關資料。",
        deletionDesc2: "若要刪除帳號，請打開 Laterly App，前往「設定」>「帳號」，然後點擊「刪除帳號」。此操作無法復原，並會立即從我們的伺服器中移除您的登入憑證。",
        deletionDesc3: "請注意，由於您的收藏內容是儲存在您的裝置本地，刪除帳號並不會自動刪除裝置上的資料。若要移除所有本地資料，您必須從裝置上刪除此 App。",
        childrenTitle: "關於小朋友的隱私",
        childrenDesc1: "Laterly 誰都能用！但如果你還未滿 13 歲（或是你國家規定的年齡），記得要找爸媽陪你一起用喔。",
        childrenDesc2: "因為資料都存在你手機，而且除了 Email 之外我們不收其他個人資料，所以只要乖乖使用，對年輕朋友來說是很安全的。",
        childrenDesc3Prefix: "家長們看過來：如果你家寶貝自己辦了帳號，而你想把它刪掉，隨時 Email 到 ",
        email: "support@getlaterly.com",
        childrenDesc3Suffix: " 找我們。",
        updatesTitle: "這份政策的更新",
        updatesDesc1: "Laterly 會越來越好，所以這份政策可能也會跟著進化。",
        updatesDesc2: "如果有什麼超大的變動，我們會透過 App 或是 Email（如果你有註冊）通知你。",
        updatesDesc3: "頁面最上面的「最後更新」日期，就是我們上次修改的時間啦。",
        questionsTitle: "還有問題嗎？",
        questionsDesc1: "如果你對這份隱私權政策，或是 Laterly 怎麼保護你的資料有任何好奇，隨時寄信給我們：",
        backHome: "回首頁"
      }
    }
  },
  "zh-CN": {
    translation: {
      nav: {
        getLaterly: "立即体验 Laterly",
        how: "怎么玩",
        map: "探索附近",
        demo: "演示",
      },
      hero: {
        title1: "先码住，",
        title2: "留给",
        desc1: "把小红书上的宝藏店铺、抖音的搞笑视频、还有你想去的所有打卡地通通装进来——保证你下次真的能翻出来。",
        desc2: "滑开地图，一秒解锁你以前在附近码过的所有好店。",
        trust1: "零广告",
        trust2: "默认保护隐私",
        trust3: "你的收藏还是你的",
      },
      strip: {
        quote: "“这辈子唯一会主动打开的收藏夹 App。”",
        author: "— Side by Side",
        rating: "★ 4.9 · App Store",
        featured: "编辑推荐 · Designer Daily"
      },
      problem: {
        eyebrow: "是不是你的真实写照？",
        title: "每次都说“码了等于看了”，<br />然后就放到<em class='italic text-primary'>吃灰</em>",
        ex1: "刷小红书看到一家绝美咖啡店。",
        ex2: "看抖音学到的神仙小妙招。",
        ex3: "B站上刷到的宝藏旅游地。",
        pain1: "你早就忘到九霄云外了。",
        pain2: "或者根本忘了当时存在哪个 App 里。",
        sol1: "这就是为什么你需要 Laterly。",
        sol2: "一键收纳，想看的时候随时能找到。"
      },
      how: {
        eyebrow: "怎么玩？",
        title: "超省心。<br class='md:hidden' /><span class='hidden md:inline'> </span>完全不需要费力<em class='italic text-primary'>整理</em>",
        step1Title: "一键无脑存",
        step1Desc: "点两下，各大 App 的内容无痛装进来。",
        step2Title: "划个重点",
        step2Desc: "随手打个标签、标个位置，或者起个好记的名字。",
        step3Title: "乖乖回来看",
        step3Desc: "时间到了自动提醒，这次绝对不鸽。"
      },
      video: {
        eyebrow: "眼见为实",
        title: "看看我们怎么<em class='italic text-primary'>做到的</em>",
        desc: "从无脑收藏，到真的把心愿单挨个打卡的丝滑体验。",
        demo: "30 秒极速看懂",
        demoSub: "收藏 → 找回 → 出发"
      },
      features: {
        eyebrow: "里面有什么大招",
        title: "那些最烦人的事，我们帮你<em class='italic text-primary'>搞定了</em>",
        f1Title: "万物皆可存",
        f1Desc: "把小红书、抖音还是任何地方的链接分享过来。Laterly 几秒内帮你搞定。",
        f1DescMob: "管他是小红书还是抖音，几秒内无痛收藏。",
        f2Title: "最懂你生活的分类",
        f2Desc: "吃、去、买、逛、做——或者自己挑颜色和图标，DIY 你的专属标签。",
        f2DescMob: "吃喝玩乐通通包办——或者自创你的专属分类。",
        f3Title: "找东西快准狠",
        f3Desc: "连截图里的文字都能搜！标题、笔记随便搜，筛选一下马上找到。",
        f3TitleMob: "随手找回你的宝藏",
        f3DescMob: "想找什么随便搜。标记星标，把最心动的留在身边。",
        f4Title: "刚刚好的温柔提醒",
        f4Desc: "设定今晚、周末、或者随便哪天，我们会在对的时间戳戳你。",
        f4DescMob: "在对的时间，给你最刚好的提醒。",
        f5Title: "把最爱打上星号",
        f5Desc: "超心动的内容随时置顶。就算打钩完成了，这些最爱还是随时找得到。",
        f6Title: "你的 App 你做主",
        f6Desc: "语言你想用哪种就选哪种，打造你最顺手的界面。"
      },
      map: {
        eyebrow: "打开地图",
        title: "看看附近有什么<em class='italic text-primary'>好店</em>",
        desc: "人在外面不知道去哪？打开地图，看看附近有没有你以前码过的宝藏地点。",
        point1: "不用再从几万张截图里大海捞针。",
        point2: "不用在各种 App 之间疯狂切屏。",
        point3: "看准了，直接冲！" ,
        eat: "干饭",
        go: "打卡",
        buy: "剁手",
        browse: "闲逛",
        do: "搞事",
        directions: "带我去",
        pinTitle: "巷口那家神级面包店",
        pinSubtitle: "Bean Around Bakery-Café",
        pinAddress: "350 Queens Parade, Fitzroy North"
      },
      cta: {
        eyebrow: "还等什么？",
        title: "让“晚点”<em class='italic text-primary'>成真</em>",
        desc: "别再只码不看了，现在就把想去的地方、想买的东西通通收进来。",
        sub: "为你想要做的事，留一个专属的自留地。",
        avail: "支持各大平台",
        appstore: "App Store",
        googleplay: "Google Play",
        free: "注册完全免费",
        noads: "零广告，不乱收集数据",
        unlimited: "收藏无上限"
      },
      footer: {
        tagline: "为你最真实的生活打造——现在存，晚点见。",
        explore: "到处逛逛",
        how: "怎么玩？",
        nearby: "找附近好店",
        contact: "找我们聊聊",
        privacy: "隐私政策"
      },
      privacy: {
        back: "返回",
        title: "隐私政策",
        lastUpdated: "最后更新：2026年4月25日",
        intro1: "Laterly 的原则超简单：你的数据，就是你的。",
        intro2: "你存的所有东西都乖乖躺在你的手机里。我们绝对不卖你的数据、不拿去训练 AI，更不会塞广告给你。",
        collectTitle: "我们收集了什么",
        collect1Title: "只存在你手机里的数据（本地专属）",
        collect1Desc1: "你存的链接、截图、分类、笔记、地点和提醒，通通都安全地锁在你手机的本地空间里。",
        collect1Desc2: "除非你自己想把内容分享出去，不然这些数据绝对不会离开你的手机。",
        collect2Title: "你的账号信息（如果你有注册的话）",
        collect2Desc1: "如果你注册了账号，我们会通过 Supabase 安全地保存你的 Email 和登录凭证。",
        collect2Desc2: "目前你存的宝藏们<em>不会</em>同步到我们的服务器上。办账号只是为了让你能无限制疯狂收藏！",
        collect3Title: "你存下来的链接",
        collect3Desc1: "当你丢链接进来时，我们会通过第三方小助手（包含 Microlink、noembed、vxtwitter、TikTok oEmbed 还有我们自己的 Supabase 程序）去抓预览图和标题。",
        collect3Desc2: "在抓取资料的过程中，你保存的网址可能会被发送给这些第三方服务以及来源网站。",
        collect4Title: "位置信息",
        collect4Desc1: "当你帮收藏加上地点或是搜索好去处时，地理编码服务（Photon、Nominatim）会帮忙把地址转换成坐标。",
        collect4Desc2: "这些位置信息只会存在你手机里，绝对不会传到 Laterly 的服务器上。",
        collect5Title: "推送通知",
        collect5Desc1: "所有的提醒日程都是你手机自己搞定的，我们完全不会收集或追踪你的通知记录。",
        notCollectTitle: "我们“绝对不”收集的东西",
        notCollect1: "我们不追踪你都在看什么网站",
        notCollect2: "我们不把你的数据卖给任何第三方",
        notCollect3: "我们不拿你的心血去训练 AI 模型",
        notCollect4: "我们不塞任何烦人的广告给你",
        notCollect5: "除非你自己要导入，不然我们绝对看不到你的相册",
        thirdPartyTitle: "我们用到的第三方好帮手",
        tp1Title: "登录验证 (Supabase, Google, Apple)",
        tp1Desc1: "我们靠 Supabase 把关你的登录安全。当你使用第三方服务（Google 或 Apple）注册时，我们只会收到创建账号所需的基本个人资料（例如你的名字和 Email）。",
        tp1Desc2Prefix: "我们绝对不会把你的收藏内容或使用记录分享给这些第三方服务商。想了解更多可以看看 Supabase 的",
        tp1Desc2Link: "隐私政策",
        tp1Desc2Suffix: "。",
        tp2Title: "链接预览 (Microlink, noembed, vxtwitter, TikTok)",
        tp2Desc1: "帮你抓网页预览图和标题时，我们用到了 Microlink、noembed、vxtwitter、TikTok oEmbed 和直接抓取网页内容的技术。",
        tp2Desc2: "这些请求会从我们安全的 Supabase 服务器发出去。你保存的网址可能会被发送给这些第三方服务与来源网站，以提取预览信息。",
        tp3Title: "找地点 (Photon, Nominatim)",
        tp3Desc1: "当你在搜索要去哪时，我们用的是开源的地理编码服务。",
        tp3Desc2: "这也是从你手机直接发送的请求，服务商那边可能会留下记录哦。",
        tp4Title: "看地图 (OpenStreetMap, Carto)",
        tp4Desc1: "地图画面是从 OpenStreetMap 和 Carto 载入的。你在看地图时，你的手机会直接跟这些服务要数据。",
        tp4Desc2: "我们不会收集也不会记录你怎么使用地图。",
        futureTitle: "未来可能会有的酷东西",
        futureDesc1: "我们有在想以后要不要加入云端同步，让你换手机也能看得到你存的心血。",
        futureDesc2: "如果哪天我们真的推出了这个功能：",
        futurePoint1: "要不要用完全看你心情",
        futurePoint2: "我们会提前通知你，问你要不要开启",
        futurePoint3: "你的数据还是会被加密，绝对保密",
        futurePoint4: "我们会把这些规则写得清清楚楚再来更新政策",
        controlTitle: "一切由你做主",
        controlDesc1: "因为数据都在你手机里，你拥有 100% 的决定权：",
        controlPoint1: "看哪个收藏不爽，随时可以删",
        controlPoint2: "到设置里一键清空所有数据",
        controlPoint3: "删除账号，连带把所有数据带走",
        controlPoint4: "把你的心血打包导出（这个快推出了！）",
        controlDesc2: "如果你把 App 删掉，所有存在手机里的数据就会跟着永远消失哦。",
        deletionTitle: "账号删除",
        deletionDesc1: "您有权随时删除您的账号及所有相关数据。",
        deletionDesc2: "若要删除账号，请打开 Laterly App，前往“设置”>“账号”，然后点击“删除账号”。此操作无法恢复，并会立即从我们的服务器中移除您的登录凭证。",
        deletionDesc3: "请注意，由于您的收藏内容是存储在您的设备本地，删除账号并不会自动删除设备上的数据。若要移除所有本地数据，您必须从设备上删除此 App。",
        childrenTitle: "关于小朋友的隐私",
        childrenDesc1: "Laterly 谁都能用！但如果你还未满 13 岁（或是你国家规定的年龄），记得要找爸妈陪你一起用哦。",
        childrenDesc2: "因为数据都存在你手机，而且除了 Email 之外我们不收其他个人资料，所以只要乖乖使用，对年轻朋友来说是很安全的。",
        childrenDesc3Prefix: "家长们看过来：如果你家宝贝自己办了账号，而你想把它删掉，随时 Email 到 ",
        email: "support@getlaterly.com",
        childrenDesc3Suffix: " 找我们。",
        updatesTitle: "这份政策的更新",
        updatesDesc1: "Laterly 会越来越好，所以这份政策可能也会跟着进化。",
        updatesDesc2: "如果有什么超大的变动，我们会通过 App 或是 Email（如果你有注册）通知你。",
        updatesDesc3: "页面最上面的“最后更新”日期，就是我们上次修改的时间啦。",
        questionsTitle: "还有问题吗？",
        questionsDesc1: "如果你对这份隐私政策，或是 Laterly 怎么保护你的数据有任何好奇，随时寄信给我们：",
        backHome: "回首页"
      }
    }
  },
  "ja": {
    translation: {
      nav: {
        getLaterly: "Laterlyを入手",
        how: "使い方",
        map: "近くを探す",
        demo: "デモ",
      },
      hero: {
        title1: "今すぐ保存して、",
        title2: "後で楽しむ",
        desc1: "後で見返したい投稿、場所、アイデアを保存し、必要な時にすぐに見つけられます。",
        desc2: "必要な時に、近くで保存した場所を確認できます。",
        trust1: "広告なし",
        trust2: "プライバシー重視",
        trust3: "保存したものはあなたのもの",
      },
      strip: {
        quote: "「ついに開く気になったブックマークアプリ」",
        author: "— Side by Side",
        rating: "★ 4.9 · App Store",
        featured: "おすすめ · Designer Daily"
      },
      problem: {
        eyebrow: "心当たりはありませんか？",
        title: "後で見ようと保存したまま。<br />でもその「後で」は<em class='italic text-primary'>来なかった</em>。",
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
        title: "シンプル。<br class='md:hidden' /><span class='hidden md:inline'> </span><em class='italic text-primary'>管理</em>は不要です",
        step1Title: "保存",
        step1Desc: "数回のタップでどのアプリからも保存。",
        step2Title: "情報を追加",
        step2Desc: "名前、タグ、場所を追加。",
        step3Title: "見返す",
        step3Desc: "リマインダーを受け取り、実際に行動する。"
      },
      video: {
        eyebrow: "実際の動き",
        title: "<em class='italic text-primary'>動作</em>を見てみる",
        desc: "保存から実際に見返すまで。",
        demo: "30秒デモ",
        demoSub: "保存 → 見つける → 行動"
      },
      features: {
        eyebrow: "機能",
        title: "面倒なことはすべて<em class='italic text-primary'>お任せ</em>。",
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
        f6Desc: "お好みの言語を選択して、あなたらしい使い心地に。"
      },
      map: {
        eyebrow: "マップ上で",
        title: "<em class='italic text-primary'>近く</em>の保存済み項目を見る",
        desc: "外出先でマップを開き、周りに保存した場所がないか確認。",
        point1: "スクリーンショットを探し回る必要なし。",
        point2: "アプリ間を行ったり来たりする必要なし。",
        point3: "決めたら、すぐに出発。" ,
        eat: "食べる",
        go: "行く",
        buy: "買う",
        browse: "見る",
        do: "する",
        directions: "経路",
        pinTitle: "街で最高のベーカリー",
        pinSubtitle: "Bean Around Bakery-Café",
        pinAddress: "350 Queens Parade, Fitzroy North"
      },
      cta: {
        eyebrow: "はじめよう",
        title: "「後で」を<em class='italic text-primary'>実現する</em>",
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
      },
      privacy: {
        back: "戻る",
        title: "プライバシーポリシー",
        lastUpdated: "最終更新日：2026年4月25日",
        intro1: "Laterlyはシンプルな原則に基づいて構築されています：あなたのデータはあなたのものです。",
        intro2: "保存したものはすべてデバイス上に保存されます。データを販売したり、AIモデルのトレーニングに使用したり、広告に使用したりすることはありません。",
        collectTitle: "収集する情報",
        collect1Title: "デバイス上（ローカルのみ）",
        collect1Desc1: "保存したリンク、スクリーンショット、カテゴリー、メモ、場所、リマインダー、設定は、デバイスの安全なストレージを使用してローカルに保存されます。",
        collect1Desc2: "保存した項目を明示的に共有しない限り、このデータがデバイスから送信されることはありません。",
        collect2Title: "アカウント情報（登録した場合）",
        collect2Desc1: "アカウントを作成した場合、Supabaseを通じてメールアドレスと認証情報を保存します。",
        collect2Desc2: "現在、保存したコンテンツはサーバーに同期<em>されません</em>。アカウントはゲスト体験を超えて無制限の保存を解除します。",
        collect3Title: "保存したリンク",
        collect3Desc1: "リンクを保存すると、サードパーティのサービス（Microlink、noembed、vxtwitter、TikTok oEmbed、および独自のSupabase関数など）を使用してソースウェブサイトからプレビュー画像とタイトルを取得します。",
        collect3Desc2: "これらのリクエストにおいて、保存したURLがこれらのサードパーティサービスおよびソースウェブサイトに送信される場合があります。",
        collect4Title: "位置データ",
        collect4Desc1: "保存した項目に場所を追加したり場所を検索したりすると、ジオコーディングサービス（Photon、Nominatim）が住所と座標を解決します。",
        collect4Desc2: "位置データはローカルに保存され、Laterlyのサーバーに送信されることはありません。",
        collect5Title: "通知",
        collect5Desc1: "リマインダーのスケジュールと管理は完全にデバイス上で行われます。通知データを収集または追跡することはありません。",
        notCollectTitle: "収集しない情報",
        notCollect1: "閲覧活動を追跡しません",
        notCollect2: "データを第三者に販売しません",
        notCollect3: "データをAIモデルのトレーニングに使用しません",
        notCollect4: "広告を表示しません",
        notCollect5: "明示的にインポートを選択しない限り、写真にアクセスしません",
        thirdPartyTitle: "サードパーティサービス",
        tp1Title: "認証 (Supabase, Google, Apple)",
        tp1Desc1: "安全な認証のためにSupabaseを使用しています。サードパーティプロバイダー（GoogleまたはApple）で登録する場合、アカウントの作成に必要な基本的なプロフィール情報（名前やメールアドレスなど）のみを受け取ります。",
        tp1Desc2Prefix: "保存した項目やアプリの使用データをこれらのプロバイダーと共有することはありません。Supabaseの",
        tp1Desc2Link: "プライバシーポリシー",
        tp1Desc2Suffix: "をお読みください。",
        tp2Title: "リンクプレビュー (Microlink, noembed, vxtwitter, TikTok)",
        tp2Desc1: "リンクを保存すると、Microlink、noembed、vxtwitter、TikTok oEmbed、および直接のウェブサイト取得を使用してプレビュー画像とタイトルを取得します。",
        tp2Desc2: "これらのリクエストは安全なSupabaseサーバーから行われます。メタデータを抽出するために、保存したURLがこれらのサードパーティサービスおよびソースウェブサイトに送信される場合があります。",
        tp3Title: "場所検索 (Photon, Nominatim)",
        tp3Desc1: "場所を検索する際、オープンソースのジオコーディングサービスを使用します。",
        tp3Desc2: "これらのリクエストはデバイスから直接行われ、サービスプロバイダーによって記録される場合があります。",
        tp4Title: "マップ (OpenStreetMap, Carto)",
        tp4Desc1: "マップタイルはOpenStreetMapとCartoから読み込まれます。マップを表示する際、デバイスはこれらのサービスに直接リクエストを行います。",
        tp4Desc2: "マップの利用状況を収集または保存することはありません。",
        futureTitle: "今後の機能",
        futureDesc1: "将来、複数のデバイス間で保存した項目にアクセスできるクラウド同期の追加を検討しています。",
        futureDesc2: "この機能を追加する場合：",
        futurePoint1: "完全にオプションになります",
        futurePoint2: "通知され、参加するかどうか尋ねられます",
        futurePoint3: "データは暗号化され、プライベートに保たれます",
        futurePoint4: "明確な詳細を記載してこのポリシーを更新します",
        controlTitle: "コントロール",
        controlDesc1: "データはローカルに保存されるため、完全にコントロールできます：",
        controlPoint1: "いつでも保存した項目を削除",
        controlPoint2: "アプリの設定からすべてのデータを消去",
        controlPoint3: "アカウントと関連するすべてのデータを削除",
        controlPoint4: "データをエクスポート（近日公開）",
        controlDesc2: "アプリを削除すると、ローカルに保存されているすべてのデータがデバイスから永久に削除されます。",
        deletionTitle: "アカウントの削除",
        deletionDesc1: "お客様は、いつでもご自身のアカウントおよび関連するすべてのデータを削除する権利を有します。",
        deletionDesc2: "アカウントを削除するには、Laterlyアプリを開き、「設定」>「アカウント」に移動して「アカウントを削除」をタップしてください。この操作は取り消すことができず、サーバーから認証情報が即座に削除されます。",
        deletionDesc3: "保存されたアイテムはデバイスのローカルに保存されているため、アカウントを削除してもデバイスに保存されているデータは自動的には削除されません。すべてのローカルデータを削除するには、デバイスからアプリを削除する必要があります。",
        childrenTitle: "子供のプライバシー",
        childrenDesc1: "Laterlyはすべての年齢のユーザーが利用できます。13歳（または居住国の同意年齢）未満の場合は、保護者の指導のもとでLaterlyを使用してください。",
        childrenDesc2: "すべてのデータはローカルに保存され、メール（アカウントを作成した場合）以外の個人情報を収集しないため、責任を持って使用すればLaterlyは若いユーザーにとって安全です。",
        childrenDesc3Prefix: "保護者の方へ：子供がアカウントを作成し、削除したい場合は、",
        email: "support@getlaterly.com",
        childrenDesc3Suffix: "までご連絡ください。",
        updatesTitle: "このポリシーの更新",
        updatesDesc1: "Laterlyの進化に伴い、このポリシーを更新する場合があります。",
        updatesDesc2: "重大な変更を行う場合は、アプリまたはメール（アカウントを作成した場合）を通じて通知します。",
        updatesDesc3: "このページの上部にある「最終更新日」は、このポリシーを最後に改訂した日を示しています。",
        questionsTitle: "ご質問ですか？",
        questionsDesc1: "このプライバシーポリシーやLaterlyのデータ処理について質問がある場合は、メールでお問い合わせください：",
        backHome: "ホームに戻る"
      }
    }
  }
};

// Aliases for UK English
resources['en-GB'] = resources['en-US'] = resources['en'];

export const LATERLY_LANG_KEY = 'laterly_lang_pref_v2';

export const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'en';

  const savedLang = localStorage.getItem(LATERLY_LANG_KEY);
  if (savedLang && resources[savedLang]) {
    return savedLang;
  }

  const browserLangs = (typeof navigator !== 'undefined' && navigator.languages) 
    ? navigator.languages 
    : (typeof navigator !== 'undefined' && navigator.language) 
      ? [navigator.language] 
      : [];
  
  for (const lang of browserLangs) {
    if (!lang) continue;
    
    const lowerLang = lang.toLowerCase();
    
    if (['zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'].some(code => lowerLang.includes(code))) {
      return 'zh-TW';
    }
    
    if (['zh-hans', 'zh-cn', 'zh-sg'].some(code => lowerLang.includes(code))) {
      return 'zh-CN';
    }
    
    if (lowerLang === 'zh') {
      return 'zh-CN';
    }
    
    if (lowerLang.startsWith('ja')) {
      return 'ja';
    }
    
    if (lowerLang.startsWith('en')) {
      return 'en';
    }
  }
  
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: getInitialLanguage(), // Default language
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    document.documentElement.lang = lng;
  }
});

if (typeof window !== 'undefined') {
  document.documentElement.lang = i18n.language;
}

export default i18n;
