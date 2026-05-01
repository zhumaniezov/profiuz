"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const { t, toggleLocale, locale } = useLanguage();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <a href="/" className="header-logo" id="header-logo">
            <span className="logo-profi">профи</span>
            <span className="logo-dot">:</span>
            <span className="logo-uz">уз</span>
          </a>

          <div className="header-city">
            {locale === "ru" ? "Ташкент" : "Toshkent"}
            <span className="header-city-arrow">▼</span>
          </div>
        </div>

        <div className="header-actions">
          <button className="lang-toggle" onClick={toggleLocale} id="lang-toggle-btn" aria-label="Toggle language">
            {t("language")}
          </button>

          <a href="#specialist" className="header-specialist-link" id="specialist-link">
            {t("siteForSpecialists")}
            <span className="arrow-icon"> ↗</span>
          </a>

          <a href="#login" className="header-login-btn" id="login-btn">
            {t("loginRegister")}
          </a>
        </div>

        <button className="mobile-menu-btn" id="mobile-menu-btn" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
