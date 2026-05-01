"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title" id="hero-title">
          {t("heroTitle")}
        </h1>

        <div className="hero-badge">
          <span className="hero-badge-count">{t("heroClientCount")} </span>
          <span className="hero-badge-text">{t("heroSubtitle")}</span>
        </div>

        <div className="hero-search" id="hero-search">
          <div className="search-input-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder={t("searchPlaceholder")}
              id="search-input"
            />
          </div>
          <button className="search-btn" id="search-btn">
            {t("searchButton")}
          </button>
        </div>

        <div className="hero-props">
          {/* Prop 1: Специалисты напишут сами */}
          <div className="hero-prop" id="prop-1">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
                <path d="M32 8c-4 0-6 2-6 4s2 4 4 3c2-1 1-3 4-3s4 2 4 0-2-4-6-4z" strokeWidth="1.5"/>
                <path d="M26 14c-2 2-4 6-4 10h24c0-4-2-8-4-10" strokeWidth="1.5"/>
                <path d="M22 24v4c0 2 2 4 4 4h12c2 0 4-2 4-4v-4" strokeWidth="1.5"/>
                <path d="M20 32l-4 20h6l2-10 4 6h8l4-6 2 10h6l-4-20" strokeWidth="1.5"/>
                <path d="M28 36l-2 8M36 36l2 8" strokeWidth="1"/>
              </svg>
            </div>
            <div className="hero-prop-text">
              <h3>{t("prop1Title")}</h3>
              <p>{t("prop1Desc")}</p>
            </div>
          </div>

          {/* Prop 2: Лучшая цена */}
          <div className="hero-prop" id="prop-2">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
                <rect x="12" y="20" width="40" height="28" rx="3" strokeWidth="1.5"/>
                <path d="M12 28h40" strokeWidth="1.5"/>
                <circle cx="32" cy="40" r="6" strokeWidth="1.5"/>
                <path d="M30 38v4M34 38v4M29 40h6" strokeWidth="1"/>
                <path d="M18 34h6M40 34h6" strokeWidth="1"/>
              </svg>
            </div>
            <div className="hero-prop-text">
              <h3>{t("prop2Title")}</h3>
              <p>{t("prop2Desc")}</p>
            </div>
          </div>

          {/* Prop 3: Проверенные профи */}
          <div className="hero-prop" id="prop-3">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
                <circle cx="32" cy="20" r="8" strokeWidth="1.5"/>
                <path d="M18 52c0-8 6-14 14-14s14 6 14 14" strokeWidth="1.5"/>
                <path d="M26 18c2-4 6-4 8-2" strokeWidth="1"/>
                <circle cx="44" cy="42" r="8" strokeWidth="1.5"/>
                <path d="M40 42l3 3 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="hero-prop-text">
              <h3>{t("prop3Title")}</h3>
              <p>{t("prop3Desc")}</p>
            </div>
          </div>

          {/* Prop 4: Настоящие отзывы */}
          <div className="hero-prop" id="prop-4">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
                <path d="M16 12h32v8H16z" strokeWidth="1.5"/>
                <path d="M20 20v32l12-8 12 8V20" strokeWidth="1.5"/>
                <path d="M28 30l4 4 8-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="hero-prop-text">
              <h3>{t("prop4Title")}</h3>
              <p>{t("prop4Desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
