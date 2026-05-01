"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const { t, toggleLocale, locale } = useLanguage();

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="header-logo" id="header-logo">
          <span className="logo-profi">PROFI</span>
          <span className="logo-dot">.</span>
          <span className="logo-uz">UZ</span>
        </a>

        <nav className="header-nav" id="header-nav">
          <a href="#categories" className="header-nav-link" id="nav-services">
            {locale === "ru" ? "Услуги" : "Xizmatlar"}
          </a>
          <a href="#how-it-works" className="header-nav-link" id="nav-how-it-works">
            {locale === "ru" ? "Как это работает" : "Bu qanday ishlaydi"}
          </a>
          <a href="#reviews" className="header-nav-link" id="nav-reviews">
            {locale === "ru" ? "Отзывы" : "Sharhlar"}
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="lang-toggle"
            onClick={toggleLocale}
            id="lang-toggle-btn"
            aria-label="Toggle language"
          >
            <span className="lang-globe">🌐</span>
            <span>{t("language")}</span>
          </button>

          <a
            href="#specialist"
            className="header-specialist-link"
            id="specialist-link"
          >
            {t("siteForSpecialists")}
            <span className="arrow-icon">↗</span>
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
