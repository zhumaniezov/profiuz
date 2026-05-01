"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="logo-profi">PROFI</span>
              <span className="logo-dot">.</span>
              <span className="logo-uz">UZ</span>
            </a>
            <p className="footer-tagline">{t("madeInUzbekistan")}</p>
          </div>

          <div className="footer-columns">
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
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{t("copyright")}</p>
          <div className="footer-flag">🇺🇿</div>
        </div>
      </div>
    </footer>
  );
}
