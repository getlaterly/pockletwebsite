import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  MapPin,
  Bookmark,
  Camera,
  Link as LinkIcon,
  Bell,
  Layers,
  Search,
  Moon,
  Globe,
  WifiOff,
  Compass,
  Navigation,
  Coffee,
  Utensils,
  ShoppingBag,
  Sparkles,
  Check,
  Star,
  Heart,
  Play,
  Upload,
  Instagram,
  Facebook,
  Mail,
  ChevronDown,
} from "lucide-react";
import cafeImg from "@/assets/save-cafe.jpg";
import pizzaImg from "@/assets/save-pizza.jpg";
import trailImg from "@/assets/save-trail.jpg";
import booksImg from "@/assets/save-books.jpg";
import vaseImg from "@/assets/save-vase.jpg";
import sofaImg from "@/assets/save-sofa.jpg";
import laterlyLogo from "@/assets/laterly-logo.png";

/* ---------- Small primitives ---------- */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
    <span className="h-px w-6 bg-foreground/30" />
    {children}
  </span>
);

const Pill = ({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "accent" | "sage" }) => {
  const tones = {
    default: "bg-secondary text-secondary-foreground",
    accent: "bg-accent/15 text-accent",
    sage: "bg-primary/10 text-primary",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
};

/* ---------- Nav ---------- */

const Nav = () => (
  <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link to="/" className="flex items-center gap-2">
        <img src={laterlyLogo} alt="Laterly" className="h-8 w-8" />
        <span className="font-display text-xl tracking-tight">Laterly</span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
        <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
        <a href="#map" className="transition-colors hover:text-foreground">Find things nearby</a>
      </nav>
      <a
        href="#download"
        className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-0.5"
      >
        Get Laterly <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  </header>
);

/* ---------- Hero ---------- */

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-paper" />
    <div className="grain absolute inset-0" />
    <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-8 sm:gap-12 sm:px-6 sm:py-12 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
      <div className="lg:col-span-7">
        <h1 className="font-display text-balance text-[32px] leading-[1.15] tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
          Save it now. Make it a <em className="text-accent">Laterly</em>
        </h1>
        <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-foreground sm:mt-5 sm:text-lg md:mt-6 md:text-xl">
          Save posts, places, and ideas you want to come back to — and actually find them when it matters.
        </p>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          See what you saved nearby, when you need it.
        </p>
        <div className="mt-6 sm:mt-8 md:mt-10">
          <a
            href="#download"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            Get Laterly <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>

      {/* Hero collage */}
      <div className="relative lg:col-span-5">
        <div className="absolute -left-6 top-8 hidden lg:block">
          <Pill tone="accent"><Sparkles className="h-3 w-3" /> Image grabbed from the link</Pill>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[300px] rounded-[1.5rem] border border-border bg-card p-2.5 shadow-phone sm:max-w-sm sm:rounded-[2rem] sm:p-3"
        >
          <div className="overflow-hidden rounded-[1.2rem] bg-gradient-paper sm:rounded-[1.6rem]">
            <div className="space-y-2.5 p-4 sm:space-y-3 sm:p-5">
              <div className="flex items-center justify-between">
                <span className="font-display text-xl sm:text-2xl">For later</span>
                <span className="text-[11px] text-muted-foreground sm:text-xs">28 saved</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {[cafeImg, pizzaImg, trailImg, booksImg].map((src, i) => (
                  <div key={i} className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                    <img src={src} alt="" className="aspect-[4/5] w-full object-cover" />
                    <div className="absolute inset-x-1.5 bottom-1.5 rounded-md bg-background/85 px-1.5 py-0.5 text-[9px] font-medium backdrop-blur sm:inset-x-2 sm:bottom-2 sm:rounded-lg sm:px-2 sm:py-1 sm:text-[10px]">
                      {["Eat", "Eat", "Go", "Browse"][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="absolute -bottom-6 -right-2 hidden w-56 rounded-2xl border border-border bg-card p-3 shadow-card md:block"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[hsl(var(--cat-go))]/15 text-[hsl(var(--cat-go))]">
              <MapPin className="h-4 w-4" />
            </span>
            <div className="text-xs">
              <div className="font-medium">Reminder · Saturday</div>
              <div className="text-muted-foreground">Try Café Linné nearby</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ---------- Logo / quote strip ---------- */

const Strip = () => (
  <section className="border-y border-border/60 bg-gradient-paper">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
      <span>“The bookmark app I finally open.”</span>
      <span className="hidden md:inline">— Side by Side</span>
      <span className="hidden md:inline">★ 4.9 · App Store</span>
      <span>Featured · Designer Daily</span>
    </div>
  </section>
);

/* ---------- Problem Section ---------- */

const Problem = () => (
  <section className="relative py-16 sm:py-20 md:py-28">
    <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
      {/* Title - Hook */}
      <h2 className="font-display text-[28px] leading-[1.2] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
        You saved it for later.<br />But later never came.
      </h2>
      
      {/* Examples */}
      <div className="mt-10 space-y-2 text-[16px] leading-[1.6] text-muted-foreground sm:mt-12 sm:space-y-2.5 sm:text-[17px] md:mt-14 md:text-lg">
        <p>A restaurant from Instagram.</p>
        <p>A video from TikTok.</p>
        <p>A place you found on YouTube.</p>
      </div>
      
      {/* Pain */}
      <div className="mt-10 space-y-1.5 text-[16px] leading-[1.6] text-foreground sm:mt-12 sm:text-[17px] md:mt-14 md:text-lg">
        <p>You forgot it.</p>
        <p>Or forgot where you saved it.</p>
      </div>
      
      {/* Transition - Emphasized */}
      <p className="mt-12 font-display text-[20px] leading-[1.4] tracking-tight text-foreground sm:mt-14 sm:text-[22px] md:mt-16 md:text-2xl lg:text-[26px]">
        That's where Laterly comes in.
      </p>
      
      {/* Solution */}
      <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-[1.6] text-foreground sm:mt-10 sm:text-lg md:text-xl md:leading-[1.5]">
        One place to save. One place to come back to.
      </p>
    </div>
  </section>
);

/* ---------- How it Works ---------- */

const HowItWorks = () => (
  <section id="how" className="relative py-16 sm:py-20 md:py-28">
    <div className="mx-auto max-w-5xl px-5 sm:px-6">
      <div className="text-center">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="font-display mt-4 text-[32px] leading-[1.25] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block sm:inline">
            Simple<span className="hidden sm:inline">.</span>
          </span>
          <br className="sm:hidden" />
          <span className="block sm:inline">
            {" "}Nothing to manage
          </span>
        </h2>
      </div>

      <div className="mt-12 grid gap-8 sm:mt-16 sm:gap-10 md:grid-cols-3 md:gap-8">
        {[
          { num: "1", title: "Save", desc: "Save from any app in a few taps." },
          { num: "2", title: "Add what matters", desc: "Name it, tag it, or pin a location." },
          { num: "3", title: "Come back", desc: "Get reminded and actually do it." },
        ].map((step) => (
          <div key={step.num} className="text-center md:text-left">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-soft md:mx-0">
              <span className="font-display text-xl">{step.num}</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-[1.6] text-muted-foreground sm:text-base">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Video showcase ---------- */

const VideoShowcase = () => (
  <section id="video" className="relative overflow-hidden py-16 sm:py-20 md:py-28">
    <div className="absolute inset-0 bg-gradient-paper" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="grain absolute inset-0" />

    {/* soft brand halos */}
    <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[hsl(var(--primary)/0.18)] blur-3xl" />
    <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[hsl(var(--accent)/0.18)] blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>See it in motion</Eyebrow>
        <h2 className="font-display mt-4 text-[32px] leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Watch it happen
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.7] text-foreground sm:mt-5 sm:text-[17px]">
          From saving to actually coming back to it.
        </p>
      </div>

      {/* Centered phone mockup */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 sm:mt-12 md:mt-16"
      >
        <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
          {/* Phone frame */}
          <div className="relative rounded-[2rem] border-[6px] border-foreground/90 bg-foreground shadow-phone sm:rounded-[2.5rem] sm:border-[8px]">
            {/* Screen */}
            <div className="relative overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[hsl(var(--primary)/0.12)] via-[hsl(var(--rose)/0.10)] to-[hsl(var(--accent)/0.14)] sm:rounded-[1.7rem]">
              {/* 9:16 vertical video */}
              <div className="relative aspect-[9/19.5] w-full">
                {/*
                  Drop your mobile MP4 here:
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/laterly-mobile-demo.mp4"
                    poster="/poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                */}

                {/* Placeholder */}
                <div className="absolute inset-0 grain" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center sm:gap-4">
                  <button
                    type="button"
                    className="group relative grid h-14 w-14 place-items-center rounded-full bg-card/90 text-foreground shadow-card backdrop-blur transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
                    aria-label="Play demo"
                  >
                    <span className="absolute inset-0 -z-10 rounded-full bg-gradient-brand opacity-60 blur-xl transition-opacity group-hover:opacity-90" />
                    <Play className="h-6 w-6 translate-x-0.5 fill-current sm:h-7 sm:w-7" />
                  </button>
                  <div className="text-xs text-foreground/70 sm:text-sm">
                    30-second demo
                    <div className="mt-0.5 text-[10px] text-foreground/50 sm:text-xs">Save → Find → Act</div>
                  </div>
                </div>

                {/* Time indicator */}
                <div className="absolute right-3 top-3 rounded-full bg-card/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                  0:30
                </div>
              </div>
            </div>
            {/* Notch */}
            <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-foreground sm:h-6 sm:w-32" />
          </div>
        </div>

      </motion.div>
    </div>
  </section>
);

/* ---------- Features ---------- */

// Desktop features (all 6)
const featuresDesktop = [
  { icon: LinkIcon, title: "Save from any app", body: "Share a link from Instagram, TikTok, or anywhere else. Laterly pulls in the preview—you add the rest in seconds." },
  { icon: Layers, title: "Categories that fit life", body: "Eat, Go, Buy, Browse, Do — or invent your own labels with a colour and a glyph." },
  { icon: Search, title: "Find it again, fast", body: "Search across titles, notes and the text inside your screenshots. Filter, switch, done." },
  { icon: Bell, title: "Gentle reminders", body: "Nudge yourself for tonight, this weekend, or the next time you're nearby." },
  { icon: Heart, title: "Mark your favorites", body: "Keep the best ones easy to find. Favorites stay accessible even after you complete them." },
  { icon: Globe, title: "Made your way", body: "Switch themes and use Laterly in your language." },
];

// Mobile features (only 4, simplified copy)
const featuresMobile = [
  { icon: LinkIcon, title: "Save from any app", body: "Save from Instagram, TikTok, or anywhere in seconds." },
  { icon: Layers, title: "Categories that fit life", body: "Eat, Go, Buy, Browse — or create your own." },
  { icon: Search, title: "Find and keep what matters", body: "Search to find what you need. Mark favorites to keep the best ones close." },
  { icon: Bell, title: "Gentle reminders", body: "A nudge at the right time." },
];

const Features = () => (
  <section id="features" className="relative py-16 sm:py-20 md:py-24 bg-gradient-paper">
    <div className="mx-auto max-w-7xl px-5 sm:px-6">
      {/* Desktop version */}
      <div className="hidden md:block">
        <div className="max-w-2xl">
          <Eyebrow>What's inside</Eyebrow>
          <h2 className="font-display mt-4 text-[26px] leading-tight tracking-tight sm:text-4xl md:text-5xl">
            The boring parts, handled.
          </h2>
        </div>
        <div className="mt-8 grid gap-3 overflow-hidden rounded-2xl border border-border bg-border sm:mt-12 sm:gap-px sm:rounded-3xl md:grid-cols-2 lg:grid-cols-3">
          {featuresDesktop.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card p-5 sm:p-6 md:p-8">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-foreground sm:h-10 sm:w-10">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <h3 className="font-display mt-3 text-base sm:mt-4 sm:text-lg md:mt-6 md:text-xl">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden">
        <div className="max-w-2xl">
          <Eyebrow>What's inside</Eyebrow>
          <h2 className="font-display mt-4 text-[26px] leading-tight tracking-tight">
            Everything you need, nothing you don't
          </h2>
        </div>
        <div className="mt-8 grid gap-3 overflow-hidden rounded-2xl border border-border bg-border">
          {featuresMobile.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card p-5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="font-display mt-3 text-base">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- THE MAP SECTION ---------- */

const mapPins = [
  { x: 22, y: 30, cat: "eat", icon: Coffee, label: "Café Linné" },
  { x: 64, y: 22, cat: "go", icon: Navigation, label: "Botanic walk" },
  { x: 78, y: 58, cat: "eat", icon: Utensils, label: "Pizzeria Otto" },
  { x: 38, y: 64, cat: "buy", icon: ShoppingBag, label: "Concept store" },
  { x: 52, y: 44, cat: "browse", icon: Bookmark, label: "Bookshop" },
];

const MapSection = () => (
  <section id="map" className="relative overflow-hidden bg-gradient-paper py-16 sm:py-20 md:py-28">
    <div className="grain absolute inset-0" />
    <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
      {/* Centered content */}
      <div className="text-center">
        <Eyebrow>That's where it gets useful.</Eyebrow>
        <h2 className="font-display mt-4 text-[32px] leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          See what's saved nearby
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.7] text-foreground sm:mt-6 sm:text-[17px] md:text-lg">
          When you're out, open the map and see what you saved around you.
        </p>
        
        <div className="mx-auto mt-4 max-w-xl space-y-1.5 text-[16px] leading-[1.6] text-muted-foreground sm:text-[17px]">
          <p>No digging through screenshots.</p>
          <p>No jumping between apps.</p>
        </div>
        
        <p className="mx-auto mt-6 max-w-xl text-[16px] font-medium leading-[1.6] text-foreground sm:mt-8 sm:text-[17px]">
          Just decide and go.
        </p>
      </div>

      {/* Map visual */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 sm:mt-14 md:mt-16"
      >
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-card sm:rounded-3xl">
            {/* Map canvas */}
            <div className="map-topo map-grid relative aspect-[4/3] w-full sm:aspect-[5/4]">
              {/* curved roads */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 80" preserveAspectRatio="none">
                <path d="M -5 60 C 20 50, 35 70, 55 55 S 90 35, 110 45" stroke="hsl(var(--border))" strokeWidth="0.6" fill="none" />
                <path d="M 10 -5 C 25 25, 50 20, 60 50 S 85 75, 95 95" stroke="hsl(var(--border))" strokeWidth="0.6" fill="none" />
                <path d="M -5 25 C 30 30, 55 10, 80 25 S 110 30, 120 20" stroke="hsl(var(--border))" strokeWidth="0.4" fill="none" strokeDasharray="1 1.5" />
              </svg>

              {/* park blob */}
              <div className="absolute left-[8%] top-[55%] h-32 w-40 rounded-[40%] bg-[hsl(var(--cat-do))]/15 blur-[2px]" />
              {/* water */}
              <div className="absolute right-[-10%] top-[5%] h-44 w-56 rounded-[45%] bg-[hsl(var(--cat-go))]/15 blur-[2px]" />

              {/* pins */}
              {mapPins.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.6, y: -6 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, type: "spring", stiffness: 220, damping: 18 }}
                    className="absolute -translate-x-1/2 -translate-y-full"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="grid h-10 w-10 place-items-center rounded-full text-white shadow-card ring-4 ring-background"
                        style={{ backgroundColor: `hsl(var(--cat-${p.cat}))` }}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div
                        className="mt-1 h-2 w-2 rotate-45"
                        style={{ backgroundColor: `hsl(var(--cat-${p.cat}))` }}
                      />
                    </div>
                  </motion.div>
                );
              })}

              {/* compass */}
              <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-card/90 text-xs font-semibold shadow-soft backdrop-blur">
                N
              </div>
              {/* scale */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-card/90 px-3 py-1 text-[10px] text-muted-foreground shadow-soft backdrop-blur">
                <span className="h-px w-8 bg-foreground/60" />
                200 m
              </div>

              {/* legend */}
              <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-card/90 px-3 py-1.5 text-[10px] shadow-soft backdrop-blur">
                {(["eat", "go", "buy", "browse", "do"] as const).map((c) => (
                  <span key={c} className="flex items-center gap-1 capitalize text-muted-foreground">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: `hsl(var(--cat-${c}))` }} />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Selected pin card */}
            <div className="grid gap-3 border-t border-border bg-card p-4 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-4 sm:p-5 md:grid-cols-[88px_1fr_auto]">
              <img src={cafeImg} alt="Café Linné" className="h-20 w-full rounded-xl object-cover sm:w-20 md:w-22" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "hsl(var(--cat-eat))" }} />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Eat · 0.4 km away</span>
                </div>
                <div className="font-display mt-1 text-lg sm:text-xl">Café Linné</div>
                <p className="text-xs text-muted-foreground sm:text-sm">Saved from Instagram</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
                  Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ---------- Final CTA ---------- */

const FinalCTA = () => (
  <section id="download" className="relative py-20 sm:py-24 md:py-32">
    <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
      <Eyebrow>Get started</Eyebrow>
      <h2 className="font-display mt-4 text-[32px] leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        Your future self<br className="md:hidden" /> will thank you
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.7] text-foreground sm:mt-6 sm:text-[17px] md:text-lg">
        Start saving the things you actually want to come back to.
      </p>
      <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        A calm pocket for the things you'll get to.
      </p>
      
      {/* Mobile: Buttons */}
      <div className="md:hidden">
        <p className="mt-10 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80 sm:mt-12">
          Available on
        </p>
        
        <div className="mt-3 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a 
            href="#" 
            className="inline-flex w-full items-center justify-center rounded-xl bg-foreground px-8 py-3.5 text-sm font-semibold text-background shadow-card transition-all hover:-translate-y-0.5 hover:shadow-glow sm:w-auto sm:px-10 sm:py-4"
          >
            App Store
          </a>
          <a 
            href="#" 
            className="inline-flex w-full items-center justify-center rounded-xl bg-foreground px-8 py-3.5 text-sm font-semibold text-background shadow-card transition-all hover:-translate-y-0.5 hover:shadow-glow sm:w-auto sm:px-10 sm:py-4"
          >
            Google Play
          </a>
        </div>
      </div>

      {/* Desktop: QR Codes */}
      <div className="mt-12 hidden items-center justify-center gap-8 md:flex lg:gap-12">
        {/* App Store QR */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-border bg-card shadow-card lg:h-44 lg:w-44">
            {/* TODO: Replace with actual App Store QR code image */}
            <div className="text-center">
              <div className="mb-2 text-4xl">📱</div>
              <p className="text-xs text-muted-foreground">App Store QR</p>
            </div>
          </div>
          <p className="text-sm font-medium text-foreground">App Store</p>
        </div>

        {/* Google Play QR */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-border bg-card shadow-card lg:h-44 lg:w-44">
            {/* TODO: Replace with actual Google Play QR code image */}
            <div className="text-center">
              <div className="mb-2 text-4xl">📱</div>
              <p className="text-xs text-muted-foreground">Google Play QR</p>
            </div>
          </div>
          <p className="text-sm font-medium text-foreground">Google Play</p>
        </div>
      </div>
      
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] text-muted-foreground/70 sm:gap-4 sm:text-xs">
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3 w-3 text-primary/80 sm:h-3.5 sm:w-3.5" /> Free to sign up
        </span>
        <span className="text-muted-foreground/40">·</span>
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3 w-3 text-primary/80 sm:h-3.5 sm:w-3.5" /> No ads or tracking
        </span>
        <span className="text-muted-foreground/40">·</span>
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3 w-3 text-primary/80 sm:h-3.5 sm:w-3.5" /> Unlimited saves
        </span>
      </div>
    </div>
  </section>
);

/* ---------- Language Selector ---------- */

const languages = [
  { code: "en-US", label: "English (US)" },
  { code: "en-GB", label: "English (UK)" },
  { code: "zh-TW", label: "中文（繁體）" },
  { code: "zh-CN", label: "中文（简体）" },
  { code: "ja", label: "日本語" },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
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
    setSelectedLanguage(language);
    setIsOpen(false);
    // TODO: Implement actual language switching logic here
    // Example: i18n.changeLanguage(language.code);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/50 transition-colors hover:text-muted-foreground/70"
        aria-label="Select language"
      >
        <Globe className="h-3 w-3" />
        {selectedLanguage.label}
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 min-w-[180px] rounded-lg border border-border bg-card shadow-card">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-secondary ${
                  selectedLanguage.code === language.code
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

const Footer = () => (
  <footer className="border-t border-border bg-gradient-paper">
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Mobile: vertical layout */}
      <div className="md:hidden">
        <div className="flex items-center gap-2">
          <img src={laterlyLogo} alt="Laterly" className="h-8 w-8" />
          <span className="font-display text-xl">Laterly</span>
        </div>
        <p className="mt-5 text-sm text-muted-foreground/80">
          Built for real life — now and later.
        </p>
        
        {/* Social icons */}
        <div className="mt-6 flex items-center gap-4">
          {/* Instagram */}
          <a 
            href="https://instagram.com/laterly" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="Instagram"
          >
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
          
          {/* TikTok */}
          <a 
            href="https://tiktok.com/@laterly" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="TikTok"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#000000"/>
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#00F2EA" fillOpacity="0.5"/>
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#FF0050" fillOpacity="0.5"/>
            </svg>
          </a>
          
          {/* YouTube */}
          <a 
            href="https://youtube.com/@laterly" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="YouTube"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FF0000">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          
          {/* RedNote (小紅書) */}
          <a 
            href="https://xiaohongshu.com/user/profile/laterly" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="RedNote"
          >
            <svg className="h-5 w-5" viewBox="0 0 200 200" fill="none">
              <rect width="200" height="200" rx="40" fill="#FF2442"/>
              <text x="100" y="120" fontFamily="PingFang SC, Microsoft YaHei, sans-serif" fontSize="65" fontWeight="bold" fill="white" textAnchor="middle">小红书</text>
            </svg>
          </a>
        </div>
        
        {/* Navigation */}
        <nav className="mt-10 space-y-2.5 text-sm text-muted-foreground">
          <div>
            <a href="#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
          </div>
          <div>
            <a href="#map" className="transition-colors hover:text-foreground">
              Find things nearby
            </a>
          </div>
          <div>
            <a href="mailto:getlaterly@gmail.com" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
          <div>
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
          </div>
        </nav>
      </div>

      {/* Desktop: horizontal layout */}
      <div className="hidden md:flex md:items-start md:justify-between">
        {/* Left: Brand + Tagline + Social */}
        <div className="flex-shrink-0">
          <div className="flex items-center gap-2">
            <img src={laterlyLogo} alt="Laterly" className="h-8 w-8" />
            <span className="font-display text-xl">Laterly</span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground/80">
            Built for real life — now and later.
          </p>
          
          {/* Social icons */}
          <div className="mt-6 flex items-center gap-4">
            <a 
              href="https://instagram.com/laterly" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="Instagram"
            >
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
            
            <a 
              href="https://tiktok.com/@laterly" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="TikTok"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#000000"/>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#00F2EA" fillOpacity="0.5"/>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#FF0050" fillOpacity="0.5"/>
              </svg>
            </a>
            
            <a 
              href="https://youtube.com/@laterly" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="YouTube"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            
            <a 
              href="https://xiaohongshu.com/user/profile/laterly" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="RedNote"
            >
              <svg className="h-5 w-5" viewBox="0 0 200 200" fill="none">
                <rect width="200" height="200" rx="40" fill="#FF2442"/>
                <text x="100" y="120" fontFamily="PingFang SC, Microsoft YaHei, sans-serif" fontSize="65" fontWeight="bold" fill="white" textAnchor="middle">小红书</text>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Navigation */}
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">Explore</div>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            <a href="#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="#map" className="transition-colors hover:text-foreground">
              Find things nearby
            </a>
            <a href="mailto:getlaterly@gmail.com" className="transition-colors hover:text-foreground">
              Contact
            </a>
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </div>
    
    {/* Bottom row */}
    <div className="border-t border-border/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-muted-foreground/60">
        <span>© {new Date().getFullYear()} Laterly</span>
        <LanguageSelector />
      </div>
    </div>
  </footer>
);

/* ---------- Page ---------- */

export const MarketingSite = () => (
  <div className="min-h-screen bg-gradient-paper">
    <Nav />
    <Hero />
    <Problem />
    <HowItWorks />
    <VideoShowcase />
    <MapSection />
    <Features />
    <FinalCTA />
    <Footer />
  </div>
);

export default MarketingSite;
