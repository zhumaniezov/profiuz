"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-shapes">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-count">{t("heroClientCount")}</span>
          <span className="hero-badge-text">{t("heroSubtitle")}</span>
        </div>

        <h1 className="hero-title" id="hero-title">
          {t("heroTitle")}
        </h1>

        <div className="hero-search" id="hero-search">
          <div className="search-input-wrapper">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
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
          <div className="hero-prop" id="prop-1">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <div className="hero-prop-text">
              <h3>{t("prop1Title")}</h3>
              <p>{t("prop1Desc")}</p>
            </div>
          </div>
          <div className="hero-prop" id="prop-2">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="hero-prop-text">
              <h3>{t("prop2Title")}</h3>
              <p>{t("prop2Desc")}</p>
            </div>
          </div>
          <div className="hero-prop" id="prop-3">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4" />
                <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
              </svg>
            </div>
            <div className="hero-prop-text">
              <h3>{t("prop3Title")}</h3>
              <p>{t("prop3Desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
