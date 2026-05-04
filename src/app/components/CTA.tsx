"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function CTA() {
  const { locale } = useLanguage();

  return (
    <section className="cta" id="cta">
      <div className="cta-inner">
        <div className="cta-box">
          <h2 className="cta-title">
            {locale === "ru" ? (
              <>Попробуйте <br />новый <span>Профи.ру</span></>
            ) : (
              <>Yangi <br /><span>Profi.uz</span> ni sinab ko'ring</>
            )}
          </h2>
          <div className="cta-buttons">
            <button className="btn-light" style={{ padding: "18px 36px", fontSize: "17px" }}>
              {locale === "ru" ? "Скачать приложение" : "Ilovani yuklab olish"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
