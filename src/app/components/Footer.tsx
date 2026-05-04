"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-col">
            <a href="/" className="header-logo" style={{ display: "inline-flex", marginBottom: "16px" }}>
              <span className="logo-profi" style={{ color: "var(--color-primary)" }}>профи</span>
              <span className="logo-dot" style={{ color: "var(--color-primary)", margin: "0 -1px", position: "relative", top: "-2px" }}>:</span>
              <span className="logo-uz" style={{ color: "var(--color-primary)", fontSize: "0.8em", marginLeft: "2px" }}>ру</span>
            </a>
            <p style={{ fontSize: "15px", color: "var(--color-muted)" }}>{t("madeInUzbekistan")}</p>
          </div>
          <div className="footer-col">
            <h4>{t("forClients")}</h4>
            <a href="#new-task">{t("newTask")}</a>
            <a href="#services">{t("allServices")}</a>
            <a href="#reviews">{t("allReviews")}</a>
            <a href="#terms">{t("termsOfUse")}</a>
          </div>
          <div className="footer-col">
            <h4>{t("forSpecialists")}</h4>
            <a href="#specialist-site">{t("specialistSite")}</a>
            <a href="#specialist-login">{t("specialistLogin")}</a>
            <a href="#specialist-work">{t("specialistWork")}</a>
          </div>
          <div className="footer-col">
            <h4>{t("company")}</h4>
            <a href="#about">{t("about")}</a>
            <a href="#blog">{t("blog")}</a>
            <a href="#press">{t("press")}</a>
            <a href="#vacancies">{t("vacancies")}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">{t("copyright")}</p>
          <span style={{ fontSize: "20px" }}>🇺🇿</span>
        </div>
      </div>
    </footer>
  );
}
