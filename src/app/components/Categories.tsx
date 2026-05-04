"use client";

import { useLanguage } from "../i18n/LanguageContext";

const categories: { key: string; bgClass: string; iconKey: string }[] = [
  { key: "catTutors", bgClass: "cat-bg-1", iconKey: "tutors" },
  { key: "catRepair", bgClass: "cat-bg-2", iconKey: "repair" },
  { key: "catBeauty", bgClass: "cat-bg-3", iconKey: "beauty" },
  { key: "catFreelance", bgClass: "cat-bg-4", iconKey: "freelance" },
  { key: "catLaw", bgClass: "cat-bg-5", iconKey: "law" },
  { key: "catSport", bgClass: "cat-bg-6", iconKey: "sport" },
  { key: "catHome", bgClass: "cat-bg-7", iconKey: "home" },
  { key: "catEvents", bgClass: "cat-bg-8", iconKey: "events" },
];

export default function Categories() {
  const { t } = useLanguage();

  return (
    <section className="categories" id="categories">
      <div className="categories-inner">
        <div className="categories-grid">
          {categories.map((cat, idx) => (
            <a
              href={`#${cat.iconKey}`}
              className={`category-card ${cat.bgClass}`}
              key={cat.key}
              id={`category-${cat.iconKey}`}
            >
              <h3 className="category-name">{t(cat.key as any)}</h3>
              <div className="category-icon">
                {/* A generic shape to simulate the images in profi.ru category cards */}
                <svg viewBox="0 0 100 100" fill="currentColor" opacity="0.5">
                  <circle cx="50" cy="50" r="40" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
