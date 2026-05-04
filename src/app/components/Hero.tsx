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

        <p className="hero-subtitle">
          <span className="count">{t("heroClientCount")}</span>{" "}
          {t("heroSubtitle")}
        </p>

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
          <div className="hero-prop" id="prop-1">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 68 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 8c-8 0-14 4-16 10s0 14 6 18c-10 2-20 10-22 20h64c-2-10-12-18-22-20 6-4 8-12 6-18s-8-10-16-10z" fill="#181818" opacity="0.8"/>
                <circle cx="50" cy="20" r="8" fill="#fa2a48" opacity="0.6"/>
                <path d="M46 20h8M50 16v8" stroke="#fff" strokeWidth="2"/>
              </svg>
            </div>
            <h3>{t("prop1Title")}</h3>
            <p>{t("prop1Desc")}</p>
          </div>

          <div className="hero-prop" id="prop-2">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="16" width="57" height="40" rx="4" fill="#181818" opacity="0.1"/>
                <rect x="12" y="20" width="49" height="32" rx="2" fill="#181818" opacity="0.15"/>
                <circle cx="36" cy="36" r="12" fill="none" stroke="#181818" strokeWidth="2" opacity="0.5"/>
                <path d="M32 36h8M36 32v8" stroke="#181818" strokeWidth="1.5" opacity="0.5"/>
                <rect x="16" y="28" width="10" height="2" rx="1" fill="#181818" opacity="0.3"/>
                <rect x="47" y="28" width="10" height="2" rx="1" fill="#181818" opacity="0.3"/>
              </svg>
            </div>
            <h3>{t("prop2Title")}</h3>
            <p>{t("prop2Desc")}</p>
          </div>

          <div className="hero-prop" id="prop-3">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 87 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="24" r="14" fill="#181818" opacity="0.15"/>
                <path d="M14 64c0-12 10-22 21-22s21 10 21 22" fill="#181818" opacity="0.1"/>
                <circle cx="65" cy="50" r="14" fill="none" stroke="#1bb577" strokeWidth="3"/>
                <path d="M58 50l5 5 9-9" stroke="#1bb577" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>{t("prop3Title")}</h3>
            <p>{t("prop3Desc")}</p>
          </div>

          <div className="hero-prop" id="prop-4">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 48 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="36" height="10" rx="2" fill="#181818" opacity="0.15"/>
                <path d="M10 14v50l14-10 14 10V14" fill="#181818" stroke="#181818" strokeWidth="2" opacity="0.3"/>
                <path d="M18 34l6 6 10-10" stroke="#ffad0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>{t("prop4Title")}</h3>
            <p>{t("prop4Desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
