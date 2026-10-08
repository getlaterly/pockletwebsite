import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { POCKLET_LANG_KEY, getInitialLanguage } from "./i18n";
import {
  Link as LinkIcon,
  Bell,
  Layers,
  Search,
  Globe,
  Heart,
  ChevronDown,
  ArrowDown,
  History,
  Play,
  Pause,
  Image as ImageIcon,
} from "lucide-react";
import pockletLogo from "@/assets/pocklet-logo.png";
import demoPoster from "@/assets/pocklet-demo-poster.jpg";
import { desktopHomepageCopy } from "./desktopHomepageCopy";
import { GOOGLE_PLAY_URL } from "./downloadLinks";
import googlePlayQr from "@/assets/pocklet-google-play-qr.svg";
import problemInstagram from "@/assets/pocklet-problem-instagram.svg";
import problemWhatsapp from "@/assets/pocklet-problem-whatsapp.svg";
import "./DesktopMarketingSite.css";
import pockletMapSectionImg from "@/assets/pocklet-map-section.png";
import { MobileMarketingSite } from "./MobileMarketingSite";

/* ---------- Small primitives ---------- */

const languages = [
  { code: "en", label: "English" },
  { code: "zh-TW", label: "中文（繁體）" },
  { code: "zh-CN", label: "中文（简体）" },
];

/* ---------- Nav ---------- */

const Nav = () => {
  const { t } = useTranslation();

  return (
    <header className="pd-nav sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={pockletLogo} alt="Pocklet" className="h-[26px] w-auto" />
          <span className="pd-brand font-brand text-xl tracking-tight text-foreground">Pocklet</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden items-center gap-5 text-sm font-medium text-muted-foreground lg:flex">
            <a href="#how" className="transition-colors hover:text-foreground">
              {t("nav.how")}
            </a>
            <a href="#map" className="transition-colors hover:text-foreground">
              {t("nav.map")}
            </a>
          </nav>
          <a
            href="#download"
            className="pd-button"
          >
            {t("nav.getPocklet")}
          </a>
        </div>
      </div>
    </header>
  );
};

const useDesktopCopy = () => {
  const { i18n } = useTranslation();
  return desktopHomepageCopy[i18n.resolvedLanguage || i18n.language] || desktopHomepageCopy.en;
};

/* ---------- Hero ---------- */

const heroCategories = ["eat", "do", "buy"] as const;

const Hero = () => {
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
    const observer = new IntersectionObserver(([entry]) => { isVisible = entry.isIntersecting; });
    if (heroRef.current) observer.observe(heroRef.current);
    const timer = window.setInterval(() => {
      if (!document.hidden && isVisible) setActiveCategory(index => (index + 1) % heroCategories.length);
    }, 2800);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [allowsMotion, isPaused]);

  return (
    <section ref={heroRef} className="pd-section pd-hero" aria-labelledby="desktop-hero-title">
      <div className="pd-content pd-hero-copy">
        <h1 id="desktop-hero-title" aria-label={t("mobileHome.hero.accessibleTitle")}>
          <span className="pd-first-line" aria-hidden="true">{t("mobileHome.hero.title1")}</span>
          <span className="pd-second-line" aria-hidden="true">
            {t("mobileHome.hero.beforeCategory") && <span>{t("mobileHome.hero.beforeCategory")}</span>}
            <span className="pd-word" data-category={heroCategories[activeCategory]}>
              {heroCategories.map((category, index) => (
                <span key={category} className={`pd-verb${index === activeCategory ? " is-active" : ""}`}>
                  {t(`mobileHome.hero.verbs.${category}`)}
                </span>
              ))}
            </span>
            {t("mobileHome.hero.afterCategory") && <span>{t("mobileHome.hero.afterCategory")}</span>}
          </span>
        </h1>
        <p className="pd-lead">{t("mobileHome.hero.subtitle")}</p>
        <div className="pd-actions">
          <a className="pd-button" href="#download">{t("nav.getPocklet")}</a>
          <a className="pd-button pd-button-outline" href="#how">{t("mobileHome.hero.seeHow")}<ArrowDown aria-hidden="true" /></a>
        </div>
        {allowsMotion && <button className="pd-motion-toggle" type="button" aria-pressed={isPaused} onClick={() => setIsPaused(paused => !paused)}>
          {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          {t(isPaused ? "mobileHome.hero.resumeAnimation" : "mobileHome.hero.pauseAnimation")}
        </button>}
      </div>
    </section>
  );
};

/* ---------- Problem ---------- */

const Problem = () => {
  const { t } = useTranslation();
  const copy = useDesktopCopy();
  return (
    <section className="pd-section pd-problem" aria-labelledby="desktop-problem-title">
      <div className="pd-content pd-problem-grid">
        <ul className="pd-fragments">
          {copy.problemExamples.map((example, index) => (
            <li className="pd-scrap" key={example}>
              <p className="pd-scrap-label">
                {index === 0 ? <img src={problemInstagram} alt="Instagram" width="18" height="18" />
                  : index === 2 ? <img src={problemWhatsapp} alt="WhatsApp" width="18" height="18" />
                    : <ImageIcon aria-hidden="true" />}
                <span>{copy.problemSources[index]}</span>
              </p>
              <p>{example}</p>
            </li>
          ))}
        </ul>
        <div className="pd-problem-copy">
          <p className="pd-eyebrow">{t("mobileHome.problem.eyebrow")}</p>
          <h2 id="desktop-problem-title">{copy.problemTitle}</h2>
          <p className="pd-pain">{copy.problemPain}</p>
          <p className="pd-solution"><span className="pd-purple">Pocklet</span> {copy.problemSolution}</p>
        </div>
      </div>
    </section>
  );
};

/* ---------- Inline app demo ---------- */

const InlineDemo = () => {
  const { t, i18n } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playFailed, setPlayFailed] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
    }, { threshold: 0.25 });
    const pauseWhenHidden = () => { if (document.hidden) video.pause(); };
    observer.observe(video);
    document.addEventListener("visibilitychange", pauseWhenHidden);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", pauseWhenHidden);
      video.pause();
    };
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) { video.pause(); return; }
    setPlayFailed(false);
    try { await video.play(); } catch { setPlayFailed(true); }
  };

  return (
    <div className="pd-demo" id="video">
      <video id="desktop-demo-video" ref={videoRef} src="/pocklet-mobile-demo-v5-optimized.mp4" poster={demoPoster}
        controls muted playsInline preload="metadata" aria-label={t("mobileHome.accessibility.demo")}
        onLoadedMetadata={event => setDuration(Number.isFinite(event.currentTarget.duration) ? Math.ceil(event.currentTarget.duration) : null)}
        onPlay={() => { setIsPlaying(true); setPlayFailed(false); }}
        onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)} onError={() => setPlayFailed(true)} />
      <button className="pd-button pd-watch" type="button" onClick={togglePlayback} aria-controls="desktop-demo-video">
        {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        {t(playFailed ? "mobileHome.demo.error" : isPlaying ? "mobileHome.demo.pause" : "mobileHome.demo.title")}
        {!isPlaying && duration !== null && <small>{new Intl.NumberFormat(i18n.language, { style: "unit", unit: "second", unitDisplay: "short" }).format(duration)}</small>}
      </button>
    </div>
  );
};

/* ---------- How it works ---------- */

const HowItWorks = () => {
  const { t } = useTranslation();
  const copy = useDesktopCopy();
  return (
    <section id="how" className="pd-section pd-how" aria-labelledby="desktop-how-title">
      <div className="pd-content pd-how-grid">
        <div>
          <p className="pd-eyebrow">{t("how.eyebrow")}</p>
          <h2 id="desktop-how-title">{copy.howTitle}</h2>
          <ol className="pd-steps">{copy.steps.map((step, index) => (
            <li key={step.title}><h3>{index + 1} — {step.title}</h3><p>{step.description}</p></li>
          ))}</ol>
        </div>
        <InlineDemo />
      </div>
    </section>
  );
};

/* ---------- Features ---------- */

const Features = () => {
  const { t } = useTranslation();
  const copy = useDesktopCopy();
  const icons = [LinkIcon, Layers, Search, Bell, Heart, History];
  return (
    <section id="features" className="pd-section pd-features" aria-labelledby="desktop-features-title">
      <div className="pd-content">
        <p className="pd-eyebrow">{t("features.eyebrow")}</p>
        <h2 id="desktop-features-title">{copy.featuresTitle}</h2>
        <div className="pd-feature-grid">{copy.features.map((feature, index) => {
          const Icon = icons[index];
          return <article key={feature.title}>
            <Icon aria-hidden="true" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>;
        })}</div>
      </div>
    </section>
  );
};

/* ---------- Pocklet Plus ---------- */

const PlusSpotlight = () => {
  const { t } = useTranslation();
  const copy = useDesktopCopy();
  return (
    <section className="pd-section pd-plus" aria-labelledby="desktop-plus-title">
      <div className="pd-content pd-plus-grid">
        <div><p className="pd-plus-label">{t("plus.eyebrow")}</p><h2 id="desktop-plus-title">{copy.plusTitle}</h2><p>{copy.plusDescription}</p></div>
        <div className="pd-plus-features">
          <article><h3>{copy.plusAutoTitle}</h3><p>{copy.plusAutoDescription}</p></article>
          <article><h3>{copy.plusReminderTitle}</h3><p>{copy.plusReminderDescription}</p></article>
        </div>
      </div>
    </section>
  );
};

/* ---------- Map ---------- */

const MapSection = () => {
  const { t } = useTranslation();
  const copy = useDesktopCopy();
  return (
    <section id="map" className="pd-section pd-map" aria-labelledby="desktop-map-title">
      <div className="pd-content">
        <p className="pd-eyebrow">{t("map.eyebrow")}</p><h2 id="desktop-map-title">{copy.mapTitle}</h2>
        <p>{copy.mapLead}</p><p>{copy.mapDetail}</p>
        <figure><img src={pockletMapSectionImg} alt={copy.mapAlt} loading="lazy" /></figure>
      </div>
    </section>
  );
};

/* ---------- Final CTA ---------- */

const FinalCTA = () => {
  const { t } = useTranslation();
  const copy = useDesktopCopy();
  return (
    <section id="download" className="pd-section pd-download" aria-labelledby="desktop-download-title">
      <div className="pd-content">
        <h2 id="desktop-download-title">{t("mobileHome.download.title1")}<br />{t("mobileHome.download.title2")}</h2>
        <p>{copy.downloadDescription}</p>
        <div className="mt-12 hidden items-center justify-center gap-8 md:flex lg:gap-12">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-border bg-card shadow-card lg:h-44 lg:w-44">
              <div className="flex flex-col items-center text-center">
                <svg className="mb-3 h-20 w-20 text-foreground/20" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M0 0h30v30H0zM10 10h10v10H10zM70 0h30v30H70zM80 10h10v10H80zM0 70h30v30H0zM10 80h10v10H10zM40 0h20v10H40zM40 20h10v20H40zM60 20h10v10H60zM50 40h20v10H50zM30 40h10v20H30zM0 40h20v10H0zM0 50h10v10H0zM20 50h10v20H20zM80 40h20v10H80zM70 50h10v20H70zM90 60h10v20H90zM40 60h20v10H40zM40 80h10v20H40zM60 70h10v10H60zM70 80h20v20H70zM80 90h10v10H80z" />
                </svg>
                <span className="pd-store-pending">{copy.appStoreComingSoon}</span>
              </div>
            </div>
            <p className="pd-qr-label">{t("cta.appstore")}</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-border bg-card shadow-card lg:h-44 lg:w-44">
              <img className="pd-qr-image" src={googlePlayQr} alt={copy.googlePlayQrAlt} width="128" height="128" />
            </a>
            <p className="pd-qr-label">{t("cta.googleplay")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Language Selector ---------- */

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setIsOpen(false);
    localStorage.setItem(POCKLET_LANG_KEY, language.code);
    i18n.changeLanguage(language.code);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 p-2 -mr-2 text-xs text-muted-foreground/50 transition-colors hover:text-muted-foreground/70"
        aria-label="Select language"
      >
        <Globe className="h-3 w-3" />
        {currentLang.label}
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 z-50 mb-2 min-w-[180px] overflow-hidden rounded-lg border border-border bg-card shadow-card">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-secondary ${
                  currentLang.code === language.code
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {language.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ---------- Footer ---------- */

const ThreadsLink = () => (
  <a href="https://www.threads.com/@getpocklet" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 transition-opacity hover:opacity-80" aria-label="Threads">
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="#000000" d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z" />
    </svg>
  </a>
);

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border bg-gradient-paper">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:py-20">
        <div className="md:hidden">
          <div className="flex items-center gap-2">
            <img src={pockletLogo} alt="Pocklet" className="h-[26px] w-auto" />
            <span className="font-brand text-xl text-foreground">Pocklet</span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground/80">
            {t("footer.tagline")}
          </p>

          <div className="mt-6 flex items-center gap-5">
            <a href="https://www.instagram.com/getpocklet/" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 transition-opacity hover:opacity-80" aria-label="Instagram">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#f09433' }} />
                    <stop offset="25%" style={{ stopColor: '#e6683c' }} />
                    <stop offset="50%" style={{ stopColor: '#dc2743' }} />
                    <stop offset="75%" style={{ stopColor: '#cc2366' }} />
                    <stop offset="100%" style={{ stopColor: '#bc1888' }} />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagramGradient)"/>
              </svg>
            </a>
            <ThreadsLink />
            <a href="https://www.tiktok.com/@getpocklet" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 transition-opacity hover:opacity-80" aria-label="TikTok">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#000000"/>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#00F2EA" fillOpacity="0.5"/>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#FF0050" fillOpacity="0.5"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@GetPocklet" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 transition-opacity hover:opacity-80" aria-label="YouTube">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.xiaohongshu.com/user/profile/63ef043f000000000f012e97" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 transition-opacity hover:opacity-80" aria-label="RedNote">
              <svg className="h-5 w-5" viewBox="0 0 200 200" fill="none">
                <rect width="200" height="200" rx="40" fill="#FF2442"/>
                <text x="100" y="120" fontFamily="PingFang SC, Microsoft YaHei, sans-serif" fontSize="65" fontWeight="bold" fill="white" textAnchor="middle">小红书</text>
              </svg>
            </a>
          </div>

          <nav className="mt-10 space-y-1 text-sm text-muted-foreground">
            <div><a href="#how" className="inline-block py-1.5 transition-colors hover:text-foreground">{t("footer.how")}</a></div>
            <div><a href="#map" className="inline-block py-1.5 transition-colors hover:text-foreground">{t("footer.nearby")}</a></div>
            <div><a href="mailto:support@getpocklet.com" className="inline-block py-1.5 transition-colors hover:text-foreground">{t("footer.contact")}</a></div>
          </nav>
        </div>

        <div className="hidden md:flex md:items-start md:justify-between">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <img src={pockletLogo} alt="Pocklet" className="h-[26px] w-auto" />
              <span className="font-brand text-xl text-foreground">Pocklet</span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground/80">
              {t("footer.tagline")}
            </p>

            <div className="mt-6 flex items-center gap-5">
              <a href="https://www.instagram.com/getpocklet/" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 transition-opacity hover:opacity-80" aria-label="Instagram">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="instagramGradientDesktop" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#f09433' }} />
                      <stop offset="25%" style={{ stopColor: '#e6683c' }} />
                      <stop offset="50%" style={{ stopColor: '#dc2743' }} />
                      <stop offset="75%" style={{ stopColor: '#cc2366' }} />
                      <stop offset="100%" style={{ stopColor: '#bc1888' }} />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagramGradientDesktop)"/>
                </svg>
              </a>
              <ThreadsLink />
              <a href="https://www.tiktok.com/@getpocklet" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 transition-opacity hover:opacity-80" aria-label="TikTok">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#000000"/>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#00F2EA" fillOpacity="0.5"/>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#FF0050" fillOpacity="0.5"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@GetPocklet" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 transition-opacity hover:opacity-80" aria-label="YouTube">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.xiaohongshu.com/user/profile/63ef043f000000000f012e97" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 transition-opacity hover:opacity-80" aria-label="RedNote">
                <svg className="h-5 w-5" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="40" fill="#FF2442"/><text x="100" y="120" fontFamily="PingFang SC, Microsoft YaHei, sans-serif" fontSize="65" fontWeight="bold" fill="white" textAnchor="middle">小红书</text></svg>
              </a>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">{t("footer.explore")}</div>
            <nav className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground">
              <a href="#how" className="inline-block py-1.5 transition-colors hover:text-foreground">{t("footer.how")}</a>
              <a href="#map" className="inline-block py-1.5 transition-colors hover:text-foreground">{t("footer.nearby")}</a>
              <a href="mailto:support@getpocklet.com" className="inline-block py-1.5 transition-colors hover:text-foreground">{t("footer.contact")}</a>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-muted-foreground/60">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <span>© {new Date().getFullYear()} Pocklet</span>
            <div className="flex items-center gap-2">
              <Link to="/privacy" className="transition-colors hover:text-foreground">
                {t("footer.privacy")}
              </Link>
              <span>·</span>
              <Link to="/terms" className="transition-colors hover:text-foreground">
                {t("footer.terms", "Terms of Use")}
              </Link>
            </div>
          </div>
          <LanguageSelector />
        </div>
      </div>
    </footer>
  );
};

/* ---------- Page ---------- */

export const MarketingSite = () => {
  const { scrollY } = useScroll();
  const { i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  );

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(query.matches);
    updateViewport();
    query.addEventListener("change", updateViewport);
    return () => query.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    document.title = "Pocklet — Save what you want to come back to";
    const initialLang = getInitialLanguage();
    if (i18n.language !== initialLang) {
      i18n.changeLanguage(initialLang);
    }
  }, [i18n]);

  const y1 = useTransform(scrollY, [0, 2000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 80]);

  if (isMobile) {
    return <MobileMarketingSite languageSelector={<LanguageSelector />} />;
  }

  return (
    <div className="relative min-h-screen bg-[#FEF8F6] selection:bg-primary/20">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute -left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[hsl(var(--primary)/0.08)] blur-[120px]" />
        <motion.div style={{ y: y2 }} className="absolute top-[40%] -right-[10%] h-[800px] w-[800px] rounded-full bg-[hsl(var(--accent)/0.08)] blur-[120px]" />
        <motion.div style={{ y: y3 }} className="absolute -bottom-[20%] left-[20%] h-[700px] w-[700px] rounded-full bg-[hsl(var(--rose)/0.08)] blur-[120px]" />
        <div className="grain absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col">
        <Nav />
        <main className="flex-1">
          <Hero />
          <Problem />
          <HowItWorks />
          <MapSection />
          <Features />
          <PlusSpotlight />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MarketingSite;
