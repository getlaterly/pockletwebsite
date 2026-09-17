import { Link } from 'react-router-dom';
export default function DeleteAccountPage() {
  return <div className="min-h-screen bg-gradient-paper"><main className="mx-auto max-w-3xl px-6 py-12">
    <Link to="/" className="font-brand text-xl">Pocklet</Link>
    <h1 className="mt-8 font-display text-4xl">Delete your Pocklet account</h1>
    <p className="mt-6 leading-relaxed">In the app, open Profile, choose Delete Account, and confirm. Keep Pocklet open while deletion completes. If it is interrupted, reopen the app and choose Retry.</p>
    <h2 className="mt-8 font-display text-2xl">If you cannot access the app</h2>
    <p className="mt-4 leading-relaxed">Request account deletion by emailing support@getpocklet.com from the email address associated with your Pocklet account. We may ask you to verify ownership before deleting the account. Do not send your password.</p>
    <a className="mt-6 inline-block rounded-full bg-primary px-6 py-4 text-primary-foreground" href="mailto:support@getpocklet.com?subject=Pocklet%20account%20deletion%20request">Request account deletion by email</a>
    <h2 className="mt-8 font-display text-2xl">What is deleted and what remains</h2>
    <p className="mt-4 leading-relaxed">Account deletion removes your Supabase account and linked Auto Details usage record. Deletion in the app also clears the Pocklet library, photos, settings, login session and reminders from that device. A request by email cannot remotely erase local data on your devices; clear the app data or uninstall Pocklet there. Exported backup files remain where you saved them until you delete them.</p>
    <p className="mt-4 leading-relaxed">Deleting your account does not cancel an App Store or Google Play subscription. Manage or cancel it through your store account. Payment providers may retain transaction records under their policies or legal requirements. A completed deletion receipt contains an opaque request hash and timestamps, without your account identifier, so interrupted deletion can be confirmed safely.</p>
    <p className="mt-8"><Link to="/privacy" className="underline">Read the Privacy Policy</Link></p>
  </main></div>;
}
