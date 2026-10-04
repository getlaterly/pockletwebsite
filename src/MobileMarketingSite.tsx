import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Bell, Heart, Pause, Play, Plus, Search, Tags } from "lucide-react";
import pockletLogo from "@/assets/pocklet-logo.png";
import mapScreenshot from "@/assets/pocklet-mobile-map.webp";
import demoPoster from "@/assets/pocklet-demo-poster.jpg";
import "./MobileMarketingSite.css";

const categories = [
  { key: "eat" },
  { key: "go" },
  { key: "buy" },
  { key: "do" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/getpocklet/" },
  { name: "Threads", href: "https://www.threads.com/@getpocklet" },
  { name: "TikTok", href: "https://www.tiktok.com/@getpocklet" },
  { name: "YouTube", href: "https://www.youtube.com/@GetPocklet" },
  { name: "RedNote", href: "https://www.xiaohongshu.com/user/profile/63ef043f000000000f012e97" },
] as const;

const MobileSocialIcon = ({ name }: { name: typeof socialLinks[number]["name"] }) => {
  if (name === "Threads") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="var(--pm-threads-ink)" d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z" />
      </svg>
    );
  }
  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="pm-instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--pm-instagram-yellow)" />
            <stop offset="25%" stopColor="var(--pm-instagram-orange)" />
            <stop offset="50%" stopColor="var(--pm-instagram-red)" />
            <stop offset="75%" stopColor="var(--pm-instagram-pink)" />
            <stop offset="100%" stopColor="var(--pm-instagram-purple)" />
          </linearGradient>
        </defs>
        <path fill="url(#pm-instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="var(--pm-youtube-red)" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <path fill="var(--pm-social-white)" d="M9.545 15.568V8.432L15.818 12z" />
      </svg>
    );
  }
  if (name === "TikTok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="var(--pm-tiktok-cyan)" transform="translate(-.6 -.3)" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        <path fill="var(--pm-tiktok-red)" transform="translate(.6 .3)" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        <path fill="var(--pm-tiktok-ink)" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <rect width="200" height="200" rx="40" fill="var(--pm-rednote-red)" />
      <text x="100" y="120" fontFamily="var(--font-ui-sc), sans-serif" fontSize="65" fontWeight="700" fill="var(--pm-social-white)" textAnchor="middle">小红书</text>
    </svg>
  );
};

const MobileHero = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [allowsMotion, setAllowsMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setAllowsMotion(!preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!allowsMotion || isPaused) return;
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    if (heroRef.current) observer.observe(heroRef.current);
    const timer = window.setInterval(() => {
      if (document.hidden || !isVisible) return;
      setActiveCategory(index => (index + 1) % categories.length);
    }, 2800);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [allowsMotion, isPaused]);

  return (
    <section ref={heroRef} className="pm-section pm-hero" aria-labelledby="mobile-hero-title">
      <h1 id="mobile-hero-title" aria-label={t("mobileHome.hero.accessibleTitle")}>
        <span className="pm-hero-first-line" aria-hidden="true">{t("mobileHome.hero.title1")}</span>
        <span className="pm-hero-second-line" aria-hidden="true">
          {t("mobileHome.hero.beforeCategory") && <span>{t("mobileHome.hero.beforeCategory")}</span>}
          <span className="pm-hero-word" data-category={categories[activeCategory].key}>
            {categories.map((category, index) => (
              <span key={category.key} className={`pm-hero-verb${index === activeCategory ? " is-active" : ""}`}>
                {t(`mobileHome.hero.verbs.${category.key}`)}
              </span>
            ))}
          </span>
          <span>{t("mobileHome.hero.afterCategory")}</span>
        </span>
      </h1>
      <p className="pm-muted">{t("mobileHome.hero.subtitle")}</p>
      <div className="pm-hero-actions">
        <a className="pm-button" href="#download">{t("nav.getPocklet")}</a>
        <a className="pm-button pm-button-outline" href="#how">{t("mobileHome.hero.seeHow")}</a>
      </div>
      {allowsMotion && (
        <button type="button" className="pm-hero-motion" aria-pressed={isPaused} onClick={() => setIsPaused(paused => !paused)}>
          {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          {t(isPaused ? "mobileHome.hero.resumeAnimation" : "mobileHome.hero.pauseAnimation")}
        </button>
      )}
    </section>
  );
};

const MobileDemo = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playFailed, setPlayFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
    }, { threshold: 0.25 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      return;
    }
    setPlayFailed(false);
    try {
      await video.play();
    } catch {
      setPlayFailed(true);
    }
  };

  return (
    <details className="pm-demo" id="video" onToggle={event => {
      if (!event.currentTarget.open) videoRef.current?.pause();
    }}>
      <summary>
        <span className="pm-demo-label">
          <Play aria-hidden="true" />
          {t("mobileHome.demo.title")}
          <small>{t("mobileHome.demo.duration")}</small>
        </span>
        <Plus className="pm-expand" aria-hidden="true" />
      </summary>
      <div className="pm-demo-body">
        <video
          ref={videoRef}
          src="/pocklet-mobile-demo-v5-optimized.mp4"
          poster={demoPoster}
          controls
          muted
          playsInline
          preload="metadata"
          aria-label={t("mobileHome.accessibility.demo")}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
        <button type="button" className="pm-button" onClick={togglePlayback}>
          {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          {t(playFailed ? "mobileHome.demo.error" : isPlaying ? "mobileHome.demo.pause" : "mobileHome.demo.play")}
        </button>
      </div>
    </details>
  );
};

export const MobileMarketingSite = ({ languageSelector }: { languageSelector: ReactNode }) => {
  const { t } = useTranslation();
  const features = [
    { key: "categories", icon: Tags },
    { key: "search", icon: Search },
    { key: "reminders", icon: Bell },
    { key: "favourites", icon: Heart },
  ];

  return (
    <div className="pm-page" id="top">
      <header className="pm-header">
        <a className="pm-brand" href="#top" aria-label={t("mobileHome.accessibility.home")}>
          <img src={pockletLogo} width="32" height="32" alt="" />
          Pocklet
        </a>
        <a className="pm-button pm-header-download" href="#download">{t("nav.getPocklet")}</a>
      </header>
      <main>
        <MobileHero />

        <section className="pm-section pm-pain" aria-labelledby="mobile-problem-title">
          <p className="pm-eyebrow">{t("mobileHome.problem.eyebrow")}</p>
          <h2 id="mobile-problem-title">{t("mobileHome.problem.title1")}</h2>
          <p className="pm-problem-copy">{t("mobileHome.problem.example1")}<br />{t("mobileHome.problem.example2")}</p>
          <p className="pm-problem-copy">{t("mobileHome.problem.pain")}</p>
          <p className="pm-problem-copy">{t("mobileHome.problem.solution").split(/(Pocklet)/g).map((part, index) => part === "Pocklet" ? <span className="pm-purple" key={index}>{part}</span> : part)}</p>
        </section>

        <section className="pm-section pm-how" id="how" aria-labelledby="mobile-how-title">
          <p className="pm-eyebrow">{t("mobileHome.how.eyebrow")}</p>
          <h2 id="mobile-how-title">{t("mobileHome.how.title")}</h2>
          <ol className="pm-steps">
            {[1, 2, 3].map(step => (
              <li key={step}>
                <h3>{step} — {t(`mobileHome.how.step${step}Title`)}</h3>
                <p>{t(`mobileHome.how.step${step}Desc`)}</p>
              </li>
            ))}
          </ol>
          <MobileDemo />
        </section>

        <section className="pm-section pm-map" id="map" aria-labelledby="mobile-map-title">
          <p className="pm-eyebrow">{t("mobileHome.map.eyebrow")}</p>
          <h2 id="mobile-map-title">{t("mobileHome.map.title")}</h2>
          <p className="pm-map-intro">{t("mobileHome.map.description")}</p>
          <figure className="pm-map-proof">
            <img src={mapScreenshot} width="303" height="371" loading="lazy" alt={t("mobileHome.accessibility.map")} />
          </figure>
        </section>

        <section className="pm-section pm-features" id="features" aria-labelledby="mobile-features-title">
          <p className="pm-eyebrow">{t("mobileHome.features.eyebrow")}</p>
          <h2 id="mobile-features-title">{t("mobileHome.features.title")}</h2>
          <div className="pm-feature-index">
            {features.map(({ key, icon: Icon }) => (
              <article key={key}>
                <div><Icon aria-hidden="true" /><h3>{t(`mobileHome.features.${key}Title`)}</h3></div>
                <p>{t(`mobileHome.features.${key}Desc`)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pm-section pm-plus" aria-labelledby="mobile-plus-title">
          <p className="pm-plus-label">{t("mobileHome.plus.eyebrow")}</p>
          <h2 id="mobile-plus-title"><span>{t("mobileHome.plus.title1")}</span>{" "}<span>{t("mobileHome.plus.title2")}</span></h2>
          <p>{t("mobileHome.plus.description")}</p>
          <p className="pm-plus-support">{t("mobileHome.plus.support")}</p>
        </section>

        <section className="pm-section pm-download" id="download" aria-labelledby="mobile-download-title">
          <h2 id="mobile-download-title">{t("mobileHome.download.title1")}<br />{t("mobileHome.download.title2")}</h2>
          <div className="pm-store-group">
            <a className="pm-store" href="#"><small>{t("mobileHome.download.appStorePrefix")}</small>App Store</a>
            <a className="pm-store" href="#"><small>{t("mobileHome.download.googlePlayPrefix")}</small>Google Play</a>
          </div>
        </section>
      </main>

      <footer className="pm-footer">
        <div className="pm-footer-main">
          <a className="pm-brand pm-footer-brand" href="#top" aria-label={t("mobileHome.accessibility.home")}>
            <img src={pockletLogo} width="32" height="32" alt="" />
            Pocklet
          </a>
          <p className="pm-footer-tagline">{t("footer.tagline")}</p>
          <nav className="pm-social-links" aria-label={t("mobileHome.accessibility.social")}>
            {socialLinks.map(link => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <MobileSocialIcon name={link.name} />
              </a>
            ))}
          </nav>
          <nav className="pm-footer-navigation" aria-label={t("mobileHome.accessibility.footerNavigation")}>
            <a href="#how">{t("nav.how")}</a>
            <a href="#map">{t("nav.map")}</a>
            <a href="mailto:support@getpocklet.com">{t("footer.contact")}</a>
          </nav>
        </div>
        <div className="pm-footer-bottom">
          <div className="pm-footer-meta"><span>© {new Date().getFullYear()} Pocklet</span>{languageSelector}</div>
          <nav className="pm-footer-links" aria-label={t("mobileHome.accessibility.legalLinks")}>
            <Link to="/privacy">{t("footer.privacy")}</Link>
            <Link to="/terms">{t("footer.terms")}</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};
