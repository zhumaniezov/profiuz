"use client";

import { useLanguage } from "../i18n/LanguageContext";

const PersonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
    <path d="M15.5 5.5C15.5 7.99 13.49 10 11 10C8.51 10 6.5 7.99 6.5 5.5C6.5 3.01 8.51 1 11 1C13.49 1 15.5 3.01 15.5 5.5Z"/>
    <path d="M11 12C7.39 12 4.23 13.72 2.47 16.3C0.92 18.58 3.24 21 6 21H16C18.76 21 21.08 18.58 19.53 16.3C17.77 13.72 14.61 12 11 12Z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ display: "inline" }}>
    <path d="M1.14 5.7L2.93 6.83L2.15 8.8C1.72 9.86 3 10.79 3.87 10.06L5.5 8.7L7.13 10.06C8.01 10.79 9.28 9.86 8.85 8.8L8.07 6.83L9.86 5.7C10.83 5.1 10.34 3.6 9.2 3.68L7.09 3.82L6.57 1.76C6.29 0.66 4.71 0.66 4.43 1.76L3.91 3.82L1.8 3.68C0.66 3.6 0.17 5.1 1.14 5.7Z" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);

export default function HowItWorks() {
  const { t, locale } = useLanguage();

  return (
    <section className="how-it-works" id="how">
      <div className="how-inner">
        <h2 className="section-title">{t("howItWorksTitle")}</h2>
        
        <div className="how-steps">
          {/* Step 1: Describe task */}
          <div className="how-step">
            <div className="how-step-visual how-bg-1">
              <div className="how-card">
                <p style={{ fontSize: 17, fontWeight: 400, lineHeight: "22px", marginBottom: 16 }}>
                  {locale === "ru" ? "Где вам удобно встретиться" : "Qayerda uchrashish qulay"}
                </p>
                <div className="how-choice">
                  <label><input type="radio" name="location" defaultChecked /> {locale === "ru" ? "Дистанционно" : "Masofadan"}</label>
                  <label><input type="radio" name="location" /> {locale === "ru" ? "У специалиста" : "Mutaxassisda"}</label>
                  <label><input type="radio" name="location" /> {locale === "ru" ? "У меня" : "Menda"}</label>
                </div>
              </div>
            </div>
            <h3>{t("step1Title")}</h3>
            <p>{t("step1Desc")}</p>
          </div>

          {/* Step 2: Specialists write */}
          <div className="how-step">
            <div className="how-step-visual how-bg-2">
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div className="notif-card">
                  <div className="notif-avatar" style={{ background: "#A849EB" }}><PersonIcon /></div>
                  <div>
                    <div><span className="notif-name">Ирина</span> <span className="notif-star"><StarIcon /></span> <span className="notif-rating">5,0</span></div>
                    <div className="notif-msg">Добрый день! Готова помочь</div>
                  </div>
                </div>
                <div className="notif-card">
                  <div className="notif-avatar" style={{ background: "#FFA216" }}><PersonIcon /></div>
                  <div>
                    <div><span className="notif-name">Василий</span> <span className="notif-star"><StarIcon /></span> <span className="notif-rating">4,8</span></div>
                    <div className="notif-msg">Здравствуйте! Живу недалеко</div>
                  </div>
                </div>
                <div className="notif-card">
                  <div className="notif-avatar" style={{ background: "#EC7586" }}><PersonIcon /></div>
                  <div>
                    <div><span className="notif-name">Наиль</span> <span className="notif-star"><StarIcon /></span> <span className="notif-rating">4,9</span></div>
                    <div className="notif-msg">Здравствуйте! Когда нужна услуга</div>
                  </div>
                </div>
              </div>
            </div>
            <h3>{locale === "ru" ? "Специалисты напишут сами" : "Mutaxassislar o'zlari yozishadi"}</h3>
            <p>{t("step2Desc")}</p>
          </div>

          {/* Step 3: Choose */}
          <div className="how-step">
            <div className="how-step-visual how-bg-3">
              <div className="suitable-card">
                <div className="suitable-header">
                  <div className="notif-avatar" style={{ background: "#FFA216", width: 44, height: 44 }}><PersonIcon /></div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 400 }}>Василий</div>
                    <div style={{ fontSize: 13, color: "var(--color-muted)" }}><span style={{ color: "var(--color-disabled)" }}><StarIcon /></span> 4,8 · 57 отзывов</div>
                  </div>
                </div>
                <div className="suitable-messages">
                  <div className="suitable-bubble suitable-bubble-right">Все вместе 2000 сум</div>
                  <div className="suitable-bubble suitable-bubble-left">Когда вам удобно?</div>
                </div>
              </div>
            </div>
            <h3>{locale === "ru" ? "Выберите подходящего" : "Mosini tanlang"}</h3>
            <p>{t("step3Desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
