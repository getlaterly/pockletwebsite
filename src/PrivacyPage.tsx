import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import pockletLogo from "@/assets/pocklet-logo.png";
import { getInitialLanguage } from "./i18n";

const LAST_UPDATED = "17 May 2026";
const CONTACT_EMAIL = "support@getpocklet.com";

const privacySections = [
  {
    title: "1. Who we are",
    body: [
      "Pocklet is a mobile app for saving links, screenshots, photos, places, ideas, and reminders so you can revisit them later.",
      "Pocklet is designed to be local-first. Many saved items stay on your device, but some features use online services to work properly, such as account login, Auto Details, link previews, map features, geocoding, and subscriptions.",
    ],
  },
  {
    title: "2. Information we collect or process",
    body: [
      "Depending on how you use Pocklet, we may collect or process account information, saved content, shared content, subscription information, device/app information, and location-related information.",
      "Saved content may include links, titles, notes, tags, categories, screenshots, photos, thumbnails, places, addresses, map coordinates, reminders, and nudge settings.",
      "If you share content into Pocklet from another app, that content may include URLs, text, captions, images, metadata, or other information provided by the source app.",
    ],
  },
  {
    title: "3. Local storage and saved content",
    body: [
      "Pocklet stores many saved items locally on your device. This can include saved links, notes, screenshots, photos, thumbnails, categories, tags, reminder settings, and app preferences.",
      "Some images and thumbnails may be cached locally so the app feels faster and can continue to work better offline.",
      "Local data may remain on your device until you delete it, delete your account through the app, clear app data, or uninstall Pocklet.",
    ],
  },
  {
    title: "4. Accounts and authentication",
    body: [
      "You can use some parts of Pocklet in guest mode or sign in with an account. Account login is provided through Supabase.",
      "Depending on your sign-in method, Supabase may process your email address, authentication tokens, provider identifiers, user ID, and account metadata. Pocklet stores session information on your device so you can stay signed in.",
    ],
  },
  {
    title: "5. Auto Details and AI processing",
    body: [
      "Auto Details is an optional AI-assisted feature that helps generate or improve item details such as title, notes, category, tags, thumbnails, and place information.",
      "When you use Auto Details, Pocklet may send relevant item information to a Supabase Edge Function. This may include the saved URL, shared text or captions, link preview metadata, page title, page description, extracted page content, existing item fields, app language, and technical identifiers needed to process the request.",
      "Our backend may send this information to Google AI/Gemini to generate suggestions. AI-generated results may be inaccurate, incomplete, or unsuitable, so you should review them before relying on them.",
      "We do not use your saved content to train our own AI models. Third-party AI providers process information according to their own terms and privacy practices.",
    ],
  },
  {
    title: "6. Link previews and metadata",
    body: [
      "When you save a link, Pocklet may fetch metadata to show a useful preview. This may include page titles, descriptions, images, icons, and social preview data.",
      "Preview fetching may involve our backend and third-party services such as the original website, Microlink, TikTok oEmbed, noembed, vxtwitter, and remote image or content delivery services. These services may receive the URL you saved and related request information.",
    ],
  },
  {
    title: "7. Location and map features",
    body: [
      "Pocklet can save place information and show saved places on a map. Saved place information may include place names, addresses, latitude, longitude, and related notes.",
      "If you use the current-location feature, Pocklet requests location permission from your device. Your current location is used to show or position the map and is not used for advertising.",
      "Place search and geocoding may send search terms, addresses, or place-related text to map/geocoding providers such as Photon and Nominatim/OpenStreetMap. If you open directions, your device may open Apple Maps, Google Maps, or another maps app, and that app will handle the request under its own policies.",
    ],
  },
  {
    title: "8. Reminders and notifications",
    body: [
      "Pocklet uses local notifications to remind you about saved items. Reminder information may include the saved item ID, reminder date and time, and notification text.",
      "Notifications are scheduled locally on your device. Your device operating system controls notification permissions and delivery.",
    ],
  },
  {
    title: "9. Purchases and subscriptions",
    body: [
      "Pocklet Plus subscriptions are managed through RevenueCat and the Apple App Store or Google Play, depending on your device.",
      "RevenueCat and the app stores may process purchase identifiers, subscription status, entitlement status, product identifiers, transaction metadata, renewal status, cancellation status, and device/app information needed to manage subscriptions.",
      "Pocklet uses this information to check whether your Plus entitlement is active. We do not receive your full payment card details.",
    ],
  },
  {
    title: "10. Third-party services",
    body: [
      "Pocklet may use third-party services for authentication, backend functions, AI processing, link previews, map/geocoding features, subscriptions, billing, notifications, and platform functionality.",
      "These services may include Supabase, Google AI/Gemini, RevenueCat, Apple App Store, Google Play, Expo services, Photon, Nominatim/OpenStreetMap, Apple Maps, Google Maps, Microlink, TikTok oEmbed, noembed, vxtwitter, source websites, and image/CDN providers.",
      "Third-party services process information according to their own terms and privacy policies.",
    ],
  },
  {
    title: "11. How we use information",
    body: [
      "We use information to provide and improve Pocklet’s saving, organizing, reminder, map, account, subscription, link preview, and Auto Details features.",
      "We may also use information to maintain app reliability, security, abuse prevention, support, and compliance with legal, platform, and payment obligations.",
      "We do not sell your personal information, and the reviewed app does not include third-party advertising or marketing tracking SDKs.",
    ],
  },
  {
    title: "12. Data retention and deletion",
    body: [
      "Local app data remains on your device until you delete it, delete your account through the app, clear app data, or uninstall Pocklet.",
      "Account information is retained while your account is active. Operational logs may be retained for a limited period for security, debugging, and service reliability.",
      "You can request account deletion in the app. When you delete your account through Pocklet, the app asks our backend to delete your Supabase account. The current app flow also clears local Pocklet data on that device, including saved items, screenshots, settings, and scheduled reminders.",
      "Deleting your account may not remove information already processed by third-party services, retained in backups for a limited time, or stored on another device where Pocklet is installed.",
    ],
  },
  {
    title: "13. Children’s privacy",
    body: [
      "Pocklet is not intended for children under 13, or under the minimum age required in your country. We do not knowingly collect personal information from children.",
      "If you believe a child has provided personal information to Pocklet, contact us so we can take appropriate action.",
    ],
  },
  {
    title: "14. International processing",
    body: [
      "Pocklet and its service providers may process information in countries other than where you live. These countries may have different data protection laws from your country.",
    ],
  },
  {
    title: "15. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. If we make material changes, we will update the last updated date and, where appropriate, notify you in the app or through another reasonable method.",
    ],
  },
  {
    title: "16. Contact",
    body: [
      `If you have questions about this Privacy Policy or your data, contact us at ${CONTACT_EMAIL}.`,
    ],
  },
];

const PrivacyPage = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pocklet | Privacy";

    const langParam = searchParams.get("lang");
    if (langParam) {
      const lowerLang = langParam.toLowerCase();
      let targetLang = "en";

      if (["zh-hant", "zh-tw", "zh-hk", "zh-mo"].some((code) => lowerLang.includes(code))) {
        targetLang = "zh-TW";
      } else if (["zh-hans", "zh-cn", "zh-sg"].some((code) => lowerLang.includes(code))) {
        targetLang = "zh-CN";
      } else if (lowerLang === "zh") {
        targetLang = "zh-CN";
      } else if (lowerLang.startsWith("ja")) {
        targetLang = "ja";
      } else if (lowerLang.startsWith("en")) {
        targetLang = "en";
      }

      if (i18n.language !== targetLang) {
        i18n.changeLanguage(targetLang);
      }
    } else {
      const initialLang = getInitialLanguage();
      if (i18n.language !== initialLang) {
        i18n.changeLanguage(initialLang);
      }
    }
  }, [searchParams, i18n]);

  return (
    <div className="min-h-screen bg-gradient-paper">
      <header className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={pockletLogo} alt="Pocklet" className="h-[26px] w-auto" />
            <span className="font-brand text-xl tracking-tight">Pocklet</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 p-2 -mr-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> {t("privacy.back", "Back")}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16 md:py-20">
        <h1 className="font-display text-[32px] leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-foreground sm:mt-12 sm:text-[17px]">
          <p>
            Pocklet helps you save links, screenshots, photos, places, ideas, and reminders so you can revisit them later.
            This Privacy Policy explains what information we collect or process, how we use it, and the choices you have.
          </p>
          <p>
            “Pocklet”, “we”, “us”, or “our” means Pocklet. You can contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline hover:text-primary/80">
              {CONTACT_EMAIL}
            </a>.
          </p>
        </div>

        <div className="mt-12 space-y-6 sm:mt-16">
          {privacySections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-[22px] leading-tight tracking-tight sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center sm:mt-20 sm:p-10">
          <p className="text-[15px] text-muted-foreground sm:text-base">
            {t("footer.tagline", "Save now. Come back later.")}
          </p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" /> {t("privacy.backHome", "Back home")}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
