"use client";

import { useLanguage } from "../i18n/LanguageContext";
import { useAppContext } from "../context/AppContext";

export default function Header() {
  const { t, toggleLocale, locale } = useLanguage();
  const { city, setCityModalOpen, setAuthModalOpen, isLoggedIn } = useAppContext();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <a href="/" className="header-logo" id="header-logo">
            <span className="logo-profi" style={{ color: "var(--color-primary)" }}>профи</span>
            <span className="logo-dot" style={{ color: "var(--color-primary)", margin: "0 -1px", position: "relative", top: "-2px" }}>:</span>
            <span className="logo-uz" style={{ color: "var(--color-primary)", fontSize: "0.8em", marginLeft: "2px" }}>ру</span>
          </a>

          <div
            className="header-city"
            onClick={() => setCityModalOpen(true)}
            style={{ cursor: "pointer" }}
          >
            {city}
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

          {isLoggedIn ? (
            <a href="/profile" className="header-login-btn" id="profile-btn" style={{ fontWeight: 600, color: "var(--primary)" }}>
              {locale === "ru" ? "Личный кабинет" : "Shaxsiy kabinet"}
            </a>
          ) : (
            <button
              onClick={() => setAuthModalOpen(true)}
              className="header-login-btn"
              id="login-btn"
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
            >
              {t("loginRegister")}
            </button>
          )}
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
