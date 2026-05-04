"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="cta" id="cta">
      <div className="cta-inner">
        <h2 className="cta-title" id="cta-title">{t("ctaTitle")}</h2>
        <p className="cta-subtitle">{t("ctaSubtitle")}</p>
        <div className="cta-buttons">
          <a href="#order" className="btn-primary" id="cta-order-btn">
            {t("ctaButton")}
          </a>
          <a href="#specialist-register" className="btn-outline" id="cta-specialist-btn">
            {t("ctaSpecialist")}
          </a>
        </div>
      </div>
    </section>
  );
}
