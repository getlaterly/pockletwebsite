import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import pockletLogo from "@/assets/pocklet-logo.png";
import { getInitialLanguage } from "./i18n";

const LAST_UPDATED = "17 May 2026";
const CONTACT_EMAIL = "support@getpocklet.com";

const termsSections = [
  {
    title: "1. Acceptance of terms",
    body: [
      "By downloading, accessing, or using Pocklet, you agree to these Terms of Use and our Privacy Policy. If you do not agree, please do not use the app.",
      "If you use Pocklet on behalf of someone else or an organization, you confirm that you have authority to accept these Terms for them.",
    ],
  },
  {
    title: "2. About Pocklet",
    body: [
      "Pocklet helps you save links, screenshots, photos, places, ideas, and reminders so you can revisit them later.",
      "Pocklet may include local storage, account login, link previews, AI-assisted Auto Details, map features, reminders, and paid Plus features. We may change, improve, suspend, or discontinue parts of the app over time.",
    ],
  },
  {
    title: "3. Accounts and guest use",
    body: [
      "You can use some parts of Pocklet in guest mode without creating an account. Guest mode may have limits, such as a maximum number of saved items or limited access to certain features.",
      "If you create an account, you are responsible for keeping your sign-in method secure and for activity under your account. You must provide accurate account information and update it when necessary.",
      "We may suspend or terminate access if we reasonably believe there has been misuse, fraud, a security risk, or a violation of these Terms.",
    ],
  },
  {
    title: "4. Saved content and your responsibility",
    body: [
      "You are responsible for the content you save in Pocklet, including links, screenshots, photos, notes, tags, places, and reminders.",
      "You confirm that you have the rights or permission needed to save and use the content you add to Pocklet. You should not use Pocklet to store or share illegal, harmful, abusive, infringing, or highly sensitive content.",
      "Pocklet is a personal organization tool. We do not endorse, verify, or take responsibility for content from websites, previews, maps, AI suggestions, or other third-party sources.",
    ],
  },
  {
    title: "5. Auto Details and AI-assisted features",
    body: [
      "Auto Details uses AI to help generate or improve saved item details, such as titles, notes, categories, tags, thumbnails, and place information.",
      "AI-assisted output may be wrong, outdated, incomplete, biased, or inappropriate. You are responsible for reviewing Auto Details results before relying on them.",
      "Do not use Auto Details for high-risk decisions, legal, medical, financial, safety-critical, or emergency purposes.",
    ],
  },
  {
    title: "6. Location, maps, and reminders",
    body: [
      "Pocklet’s map, place, geocoding, and directions features are provided for convenience. Location results, addresses, routes, map pins, and place matches may be inaccurate or incomplete.",
      "Reminders and notifications are also provided for convenience. Delivery may depend on your device settings, operating system, permissions, battery mode, time zone, and other factors.",
      "Do not rely on Pocklet for emergency alerts, safety-critical reminders, or time-critical obligations.",
    ],
  },
  {
    title: "7. Pocklet Plus subscriptions",
    body: [
      "Pocklet Plus is a paid subscription that may unlock additional features, such as unlimited Auto Details, custom reminders, and multi-nudge.",
      "Plus access is controlled by an active Plus entitlement. If your subscription expires, is canceled, fails to renew, is refunded, or cannot be verified, Plus features may become unavailable.",
      "We may change Plus features over time, but we will aim to keep the core paid experience useful and clear.",
    ],
  },
  {
    title: "8. Billing, renewal, cancellation, and refunds",
    body: [
      "Subscriptions are purchased through the Apple App Store or Google Play. Billing is handled by the app store associated with your device and account.",
      "Subscriptions may renew automatically unless canceled before the renewal date. You can manage or cancel your subscription through your Apple App Store or Google Play account settings.",
      "Refunds are handled by Apple or Google according to their policies, except where applicable law requires otherwise. Pocklet does not receive your full payment card details.",
      "Prices, trial availability, renewal periods, and subscription terms may vary by country, platform, offer, and app store account.",
    ],
  },
  {
    title: "9. Acceptable use",
    body: [
      "You agree not to use Pocklet for unlawful, harmful, abusive, fraudulent, or infringing purposes.",
      "You must not attempt to interfere with, reverse engineer, overload, or disrupt the app or backend services.",
      "You must not circumvent feature limits, subscription checks, entitlement checks, or security controls.",
      "You must not use automated systems to scrape, abuse, or excessively request Pocklet services, or upload/process content you do not have permission to use.",
    ],
  },
  {
    title: "10. Intellectual property",
    body: [
      "Pocklet, including the app design, software, name, branding, features, and related materials, is owned by Pocklet or its licensors.",
      "You keep ownership of the content you save in Pocklet. You grant us the limited permission needed to operate the app and provide features you choose to use, such as saving items, generating previews, processing Auto Details, showing maps, scheduling reminders, and managing subscriptions.",
    ],
  },
  {
    title: "11. Third-party services and content",
    body: [
      "Pocklet may use third-party services for authentication, AI processing, link previews, map/geocoding features, subscriptions, billing, notifications, and platform functionality.",
      "Third-party websites, previews, maps, AI providers, app stores, and services are not controlled by Pocklet. Their terms and privacy policies apply to their services.",
    ],
  },
  {
    title: "12. Disclaimers",
    body: [
      "Pocklet is provided “as is” and “as available”. To the maximum extent allowed by law, we do not make warranties that the app will be uninterrupted, error-free, secure, accurate, or available at all times.",
      "We do not guarantee that saved content, reminders, AI-generated details, link previews, maps, locations, subscription status, or third-party services will always be accurate, complete, or available.",
      "Some laws do not allow certain disclaimers, so parts of this section may not apply to you.",
    ],
  },
  {
    title: "13. Limitation of liability",
    body: [
      "To the maximum extent allowed by law, Pocklet will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of data, profits, goodwill, business, or opportunities arising from your use of Pocklet.",
      "To the maximum extent allowed by law, our total liability for claims relating to Pocklet will be limited to the amount you paid for Pocklet Plus in the 12 months before the claim, unless applicable law requires otherwise.",
      "Nothing in these Terms limits liability that cannot legally be limited, including rights you may have under consumer protection laws.",
    ],
  },
  {
    title: "14. Changes to these terms",
    body: [
      "We may update these Terms from time to time. If we make material changes, we will update the last updated date and, where appropriate, notify you in the app or through another reasonable method.",
      "Your continued use of Pocklet after changes become effective means you accept the updated Terms.",
    ],
  },
  {
    title: "15. Contact",
    body: [
      `If you have questions about these Terms, contact us at ${CONTACT_EMAIL}.`,
    ],
  },
];

const TermsPage = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pocklet | Terms";

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
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-foreground sm:mt-12 sm:text-[17px]">
          <p>
            These Terms of Use explain the rules for using Pocklet. By using Pocklet, you agree to these Terms.
            If you do not agree, please do not use the app.
          </p>
          <p>
            “Pocklet”, “we”, “us”, or “our” means Pocklet. You can contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline hover:text-primary/80">
              {CONTACT_EMAIL}
            </a>.
          </p>
        </div>

        <div className="mt-12 space-y-6 sm:mt-16">
          {termsSections.map((section) => (
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

export default TermsPage;
