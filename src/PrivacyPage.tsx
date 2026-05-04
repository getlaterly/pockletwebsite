import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import laterlyLogo from "@/assets/laterly-logo.png";

const PrivacyPage = () => (
  <div className="min-h-screen bg-gradient-paper">
    {/* Simple header */}
    <header className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={laterlyLogo} alt="Laterly" className="h-8 w-8" />
          <span className="font-brand text-xl tracking-tight">Laterly</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
      </div>
    </header>

    {/* Content */}
    <main className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16 md:py-20">
      {/* Title */}
      <h1 className="font-display text-[32px] leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Last updated: April 25, 2026
      </p>

      {/* Introduction */}
      <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-foreground sm:mt-12 sm:text-[17px]">
        <p>
          Laterly is built around a simple principle: your data stays yours.
        </p>
        <p>
          Everything you save lives on your device. We don't sell your data, train AI models on it, 
          or use it for advertising.
        </p>
      </div>

      {/* What we collect */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          What we collect
        </h2>
        
        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-foreground sm:text-base">
          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">On your device (local only)</h3>
            <p className="mt-3 text-muted-foreground">
              Your saved links, screenshots, categories, notes, locations, reminders, and preferences 
              are stored locally using your device's secure storage.
            </p>
            <p className="mt-3 text-muted-foreground">
              This data never leaves your device unless you explicitly share a saved item.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">Account information (if you sign up)</h3>
            <p className="mt-3 text-muted-foreground">
              If you create an account, we store your email address and authentication credentials 
              through Supabase.
            </p>
            <p className="mt-3 text-muted-foreground">
              Currently, your saved content is <em>not</em> synced to our servers. Your account 
              unlocks unlimited saves beyond the guest experience.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">Links you save</h3>
            <p className="mt-3 text-muted-foreground">
              When you save a link, we fetch preview images and titles from the source website using 
              third-party services (noembed.com and our own Supabase function).
            </p>
            <p className="mt-3 text-muted-foreground">
              These requests are made directly from your device. We don't log or store which URLs you save.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">Location data</h3>
            <p className="mt-3 text-muted-foreground">
              When you add a location to a saved item or search for places, geocoding services 
              (Photon, Nominatim) resolve addresses and coordinates.
            </p>
            <p className="mt-3 text-muted-foreground">
              Location data is stored locally and never sent to Laterly's servers.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">Notifications</h3>
            <p className="mt-3 text-muted-foreground">
              Reminders are scheduled and managed entirely on your device. We don't collect or track 
              notification data.
            </p>
          </div>
        </div>
      </section>

      {/* What we don't collect */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          What we don't collect
        </h2>
        
        <ul className="mt-8 space-y-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          <li className="flex gap-3">
            <span className="mt-1 text-primary">•</span>
            <span>We don't track your browsing activity</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-primary">•</span>
            <span>We don't sell your data to third parties</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-primary">•</span>
            <span>We don't use your data to train AI models</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-primary">•</span>
            <span>We don't show ads</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 text-primary">•</span>
            <span>We don't access your photos unless you explicitly choose to import them</span>
          </li>
        </ul>
      </section>

      {/* Third-party services */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          Third-party services
        </h2>
        
        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-foreground sm:text-base">
          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">Authentication (Supabase)</h3>
            <p className="mt-3 text-muted-foreground">
              We use Supabase for secure authentication. When you sign up with email, Google, Apple, 
              or Facebook, Supabase stores your credentials.
            </p>
            <p className="mt-3 text-muted-foreground">
              Read Supabase's{" "}
              <a href="https://supabase.com/privacy" className="text-primary underline hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                privacy policy
              </a>.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">Link previews (noembed)</h3>
            <p className="mt-3 text-muted-foreground">
              When you save a link, we fetch preview images and titles using noembed.com and direct website fetching.
            </p>
            <p className="mt-3 text-muted-foreground">
              These requests are made from our secure Supabase servers. Noembed may log the URLs you request, but we have no control over their data practices.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">Place search (Photon, Nominatim)</h3>
            <p className="mt-3 text-muted-foreground">
              When you search for a location, we use open-source geocoding services.
            </p>
            <p className="mt-3 text-muted-foreground">
              These requests are made directly from your device and may be logged by the service providers.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold sm:text-lg">Maps (OpenStreetMap, Carto)</h3>
            <p className="mt-3 text-muted-foreground">
              Map tiles are loaded from OpenStreetMap and Carto. Your device makes requests directly 
              to these services when viewing the map.
            </p>
            <p className="mt-3 text-muted-foreground">
              We don't collect or store your map usage.
            </p>
          </div>
        </div>
      </section>

      {/* Future features */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          Future features
        </h2>
        
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed sm:text-base">
          <p className="text-muted-foreground">
            We're considering adding cloud sync in the future, which would allow you to access 
            your saved items across devices.
          </p>
          <p className="text-muted-foreground">
            If we add this feature:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>It will be entirely optional</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>You'll be notified and asked to opt in</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>Your data will remain encrypted and private</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>We'll update this policy with clear details</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Your control */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          Your control
        </h2>
        
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed sm:text-base">
          <p className="text-muted-foreground">
            Since your data is stored locally, you have complete control:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>Delete any saved item at any time</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>Clear all your data from the app settings</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>Delete your account and all associated data</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>Export your data (coming soon)</span>
            </li>
          </ul>
          <p className="mt-5 text-muted-foreground">
            If you delete the app, all locally stored data is permanently removed from your device.
          </p>
        </div>
      </section>

      {/* Children */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          Children's privacy
        </h2>
        
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Laterly is available to users of all ages. If you're under 13 (or under the age of consent 
            in your country), you should use Laterly with parental guidance.
          </p>
          <p>
            Since all data is stored locally and we don't collect personal information 
            beyond your email (if you create an account), Laterly is safe for younger users when 
            used responsibly.
          </p>
          <p>
            Parents: if your child has created an account and you'd like it removed, contact us at{" "}
            <a href="mailto:getlaterly@gmail.com" className="text-primary underline hover:text-primary/80">
              getlaterly@gmail.com
            </a>.
          </p>
        </div>
      </section>

      {/* Updates */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          Updates to this policy
        </h2>
        
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          <p>
            We may update this policy as Laterly evolves.
          </p>
          <p>
            If we make significant changes, we'll notify you through the app or via email (if you've 
            created an account).
          </p>
          <p>
            The "Last updated" date at the top of this page shows when we last revised this policy.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-[24px] leading-tight tracking-tight sm:text-3xl">
          Questions?
        </h2>
        
        <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-foreground sm:text-base">
          <p className="text-muted-foreground">
            If you have questions about this privacy policy or how Laterly handles your data, 
            email us at:
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
          Built for real life — now and later.
        </p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </main>
  </div>
);

export default PrivacyPage;
