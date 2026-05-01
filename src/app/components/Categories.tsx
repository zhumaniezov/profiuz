"use client";

import { useLanguage } from "../i18n/LanguageContext";

const categoryIcons: Record<string, React.ReactNode> = {
  tutors: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="url(#grad-tutors)" />
      <path d="M24 14l-10 6 10 6 10-6-10-6z" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M14 26v6l10 6 10-6v-6" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M34 20v12" stroke="#fff" strokeWidth="2" />
      <defs><linearGradient id="grad-tutors" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#667eea" /><stop offset="1" stopColor="#764ba2" /></linearGradient></defs>
    </svg>
  ),
  repair: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="url(#grad-repair)" />
      <path d="M28 16l-4 4-6-6-4 4 6 6-4 4 14 14 4-4L20 24l4-4 4 4z" stroke="#fff" strokeWidth="2" fill="none" />
      <defs><linearGradient id="grad-repair" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#f093fb" /><stop offset="1" stopColor="#f5576c" /></linearGradient></defs>
    </svg>
  ),
  beauty: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="url(#grad-beauty)" />
      <path d="M24 34c-5.523 0-10-4.477-10-10S18.477 14 24 14s10 4.477 10 10-4.477 10-10 10z" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M24 18v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="2" fill="#fff" />
      <defs><linearGradient id="grad-beauty" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#ff9a9e" /><stop offset="1" stopColor="#fecfef" /></linearGradient></defs>
    </svg>
  ),
  freelance: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="url(#grad-freelance)" />
      <rect x="14" y="18" width="20" height="14" rx="2" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M18 18v-2a2 2 0 012-2h8a2 2 0 012 2v2" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M14 24h20" stroke="#fff" strokeWidth="2" />
      <defs><linearGradient id="grad-freelance" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#4facfe" /><stop offset="1" stopColor="#00f2fe" /></linearGradient></defs>
    </svg>
  ),
  law: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="url(#grad-law)" />
      <path d="M24 12v24M16 16h16M18 36h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 16l-4 8h8l-4-8zM32 16l-4 8h8l-4-8z" stroke="#fff" strokeWidth="2" fill="none" />
      <defs><linearGradient id="grad-law" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#a18cd1" /><stop offset="1" stopColor="#fbc2eb" /></linearGradient></defs>
    </svg>
  ),
  sport: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="url(#grad-sport)" />
      <circle cx="24" cy="17" r="3" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M20 24l4-3 4 3M18 34l6-10 6 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
      <defs><linearGradient id="grad-sport" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#43e97b" /><stop offset="1" stopColor="#38f9d7" /></linearGradient></defs>
    </svg>
  ),
  home: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="url(#grad-home)" />
      <path d="M14 24l10-10 10 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M18 22v12h12V22" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M22 34v-6h4v6" stroke="#fff" strokeWidth="2" fill="none" />
      <defs><linearGradient id="grad-home" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#fa709a" /><stop offset="1" stopColor="#fee140" /></linearGradient></defs>
    </svg>
  ),
  events: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="url(#grad-events)" />
      <path d="M24 14l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" stroke="#fff" strokeWidth="2" fill="none" />
      <defs><linearGradient id="grad-events" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#f6d365" /><stop offset="1" stopColor="#fda085" /></linearGradient></defs>
    </svg>
  ),
};

type CategoryKey =
  | "catTutors"
  | "catRepair"
  | "catBeauty"
  | "catFreelance"
  | "catLaw"
  | "catSport"
  | "catHome"
  | "catEvents";

type CategoryDescKey =
  | "catTutorsDesc"
  | "catRepairDesc"
  | "catBeautyDesc"
  | "catFreelanceDesc"
  | "catLawDesc"
  | "catSportDesc"
  | "catHomeDesc"
  | "catEventsDesc";

const categories: { key: CategoryKey; descKey: CategoryDescKey; iconKey: string; count: string }[] = [
  { key: "catTutors", descKey: "catTutorsDesc", iconKey: "tutors", count: "2 459" },
  { key: "catRepair", descKey: "catRepairDesc", iconKey: "repair", count: "3 517" },
  { key: "catBeauty", descKey: "catBeautyDesc", iconKey: "beauty", count: "1 386" },
  { key: "catFreelance", descKey: "catFreelanceDesc", iconKey: "freelance", count: "1 575" },
  { key: "catLaw", descKey: "catLawDesc", iconKey: "law", count: "920" },
  { key: "catSport", descKey: "catSportDesc", iconKey: "sport", count: "680" },
  { key: "catHome", descKey: "catHomeDesc", iconKey: "home", count: "1 274" },
  { key: "catEvents", descKey: "catEventsDesc", iconKey: "events", count: "810" },
];

export default function Categories() {
  const { t, locale } = useLanguage();

  return (
    <section className="categories" id="categories">
      <div className="categories-inner">
        <h2 className="section-title" id="categories-title">{t("categoriesTitle")}</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <a
              href={`#${cat.iconKey}`}
              className="category-card"
              key={cat.key}
              id={`category-${cat.iconKey}`}
            >
              <div className="category-icon">{categoryIcons[cat.iconKey]}</div>
              <div className="category-info">
                <h3 className="category-name">{t(cat.key)}</h3>
                <p className="category-desc">{t(cat.descKey)}</p>
              </div>
              <div className="category-count">
                <span>{cat.count}</span>
                <span className="category-count-label">
                  {locale === "ru" ? "профи" : "profi"}
                </span>
              </div>
              <div className="category-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
