import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import policies from './privacy-copy.json';

export default function PrivacyPage() {
  const [params] = useSearchParams();
  const { i18n } = useTranslation();
  const lang = params.get('lang') || i18n.language || 'en';
  const key = /^zh-(tw|hant)/i.test(lang) ? 'zh-TW' : /^zh/i.test(lang) ? 'zh-CN' : 'en';
  const copy = policies[key];
  return <div className="min-h-screen bg-gradient-paper">
    <header className="border-b border-border/60 px-6 py-5"><Link to="/" className="font-brand text-xl">Pocklet</Link></header>
    <main lang={key} className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-4xl leading-tight">{copy.screenTitle}</h1>
      <p className="mt-4 text-sm text-muted-foreground">{copy.updated}</p>
      <nav aria-label="Language" className="mt-6 flex flex-wrap gap-5">
        <Link to="?lang=en" lang="en">English</Link><Link to="?lang=zh-TW" lang="zh-TW">繁體中文</Link><Link to="?lang=zh-CN" lang="zh-CN">简体中文</Link>
      </nav>
      <p className="mt-8 leading-relaxed">{copy.notice}</p>
      {copy.sections.map(section => <section key={section.title} className="border-b border-border py-8">
        <h2 className="font-display text-2xl">{section.title}</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{section.body}</p>
      </section>)}
      <p className="mt-8"><Link to="/delete-account" className="underline">{key === 'zh-TW' ? '要求刪除帳號' : key === 'zh-CN' ? '请求删除账号' : 'Request account deletion'}</Link></p>
    </main>
  </div>;
}
