import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import laterlyLogo from "@/assets/laterly-logo-cropped.png";

const PrivacyPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div className="min-h-screen bg-gradient-paper">
    {/* Simple header */}
    <header className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={laterlyLogo} alt="Laterly" className="h-[26px] w-auto" />
          <span className="font-brand text-xl tracking-tight">Laterly</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> {t("privacy.back")}
        </Link>
      </div>
    </header>

    {/* Content */}
    <main className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16 md:py-20">
      {/* Title */}
      <h1 className="font-display text-[32px] leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
        {t("privacy.title")}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {t("privacy.lastUpdated")}
      </p>

      {/* Introduction */}
      <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-foreground sm:mt-12 sm:text-[17px]">
        <p>
          {t("privacy.intro1")}
        </p>
        <p>
          {t("privacy.intro2")}
        </p>
      </div>

      {/* What we collect */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          {t("privacy.collectTitle")}
        </h2>
        
        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-foreground sm:text-base">
          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">{t("privacy.collect1Title")}</h3>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.collect1Desc1")}
            </p>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.collect1Desc2")}
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">{t("privacy.collect2Title")}</h3>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.collect2Desc1")}
            </p>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.collect2Desc2")}
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">{t("privacy.collect3Title")}</h3>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.collect3Desc1")}
            </p>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.collect3Desc2")}
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">{t("privacy.collect4Title")}</h3>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.collect4Desc1")}
            </p>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.collect4Desc2")}
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">{t("privacy.collect5Title")}</h3>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.collect5Desc1")}
            </p>
          </div>
        </div>
      </section>

      {/* What we don't collect */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          {t("privacy.notCollectTitle")}
        </h2>
        
        <ul className="mt-8 space-y-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          <li className="flex gap-3">
            <span className="mt-1 text-primary">•</span>
            <span>{t("privacy.notCollect1")}</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-primary">•</span>
            <span>{t("privacy.notCollect2")}</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-primary">•</span>
            <span>{t("privacy.notCollect3")}</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-primary">•</span>
            <span>{t("privacy.notCollect4")}</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-primary">•</span>
            <span>{t("privacy.notCollect5")}</span>
          </li>
        </ul>
      </section>

      {/* Third-party services */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          {t("privacy.thirdPartyTitle")}
        </h2>
        
        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-foreground sm:text-base">
          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">{t("privacy.tp1Title")}</h3>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.tp1Desc1")}
            </p>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.tp1Desc2Prefix")}{" "}
              <a href="https://supabase.com/privacy" className="text-primary underline hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                {t("privacy.tp1Desc2Link")}
              </a>{t("privacy.tp1Desc2Suffix")}
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">{t("privacy.tp2Title")}</h3>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.tp2Desc1")}
            </p>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.tp2Desc2")}
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">{t("privacy.tp3Title")}</h3>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.tp3Desc1")}
            </p>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.tp3Desc2")}
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">{t("privacy.tp4Title")}</h3>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.tp4Desc1")}
            </p>
            <p className="mt-3 text-muted-foreground">
              {t("privacy.tp4Desc2")}
            </p>
          </div>
        </div>
      </section>

      {/* Future features */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          {t("privacy.futureTitle")}
        </h2>
        
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed sm:text-base">
          <p className="text-muted-foreground">
            {t("privacy.futureDesc1")}
          </p>
          <p className="text-muted-foreground">
            {t("privacy.futureDesc2")}
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>{t("privacy.futurePoint1")}</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>{t("privacy.futurePoint2")}</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>{t("privacy.futurePoint3")}</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>{t("privacy.futurePoint4")}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Your control */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          {t("privacy.controlTitle")}
        </h2>
        
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed sm:text-base">
          <p className="text-muted-foreground">
            {t("privacy.controlDesc1")}
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>{t("privacy.controlPoint1")}</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>{t("privacy.controlPoint2")}</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>{t("privacy.controlPoint3")}</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>{t("privacy.controlPoint4")}</span>
            </li>
          </ul>
          <p className="mt-5 text-muted-foreground">
            {t("privacy.controlDesc2")}
          </p>
        </div>
      </section>

      {/* Children */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          {t("privacy.childrenTitle")}
        </h2>
        
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          <p>
            {t("privacy.childrenDesc1")}
          </p>
          <p>
            {t("privacy.childrenDesc2")}
          </p>
          <p>
            {t("privacy.childrenDesc3Prefix")}{" "}
            <a href="mailto:getlaterly@gmail.com" className="text-primary underline hover:text-primary/80">
              {t("privacy.email")}
            </a>{t("privacy.childrenDesc3Suffix")}
          </p>
        </div>
      </section>

      {/* Updates */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          {t("privacy.updatesTitle")}
        </h2>
        
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          <p>
            {t("privacy.updatesDesc1")}
          </p>
          <p>
            {t("privacy.updatesDesc2")}
          </p>
          <p>
            {t("privacy.updatesDesc3")}
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          {t("privacy.questionsTitle")}
        </h2>
        
        <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-foreground sm:text-base">
          <p className="text-muted-foreground">
            {t("privacy.questionsDesc1")}
          </p>
          <p>
            <a href="mailto:getlaterly@gmail.com" className="font-medium text-primary underline hover:text-primary/80">
              getlaterly@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center sm:mt-20 sm:p-10">
        <p className="text-[15px] text-muted-foreground sm:text-base">
          {t("footer.tagline")}
        </p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4" /> {t("privacy.backHome")}
        </Link>
      </div>
    </main>
  </div>
  );
};

export default PrivacyPage;
