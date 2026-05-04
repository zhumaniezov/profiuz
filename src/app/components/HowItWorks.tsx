"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function HowItWorks() {
  const { t, locale } = useLanguage();

  return (
    <section className="how-it-works" id="how">
      <div className="how-inner">
        <h2 className="section-title" id="how-title">{t("howItWorksTitle")}</h2>
        
        <div className="how-steps">
          {/* Step 1 */}
          <div className="how-step" id="how-step-1">
            <div className="how-step-visual how-bg-1">
              <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <p style={{ fontWeight: 600, marginBottom: "16px", fontSize: "15px" }}>
                  {locale === "ru" ? "Где вам удобно встретиться" : "Qayerda uchrashish qulay"}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                    <input type="radio" checked readOnly /> {locale === "ru" ? "Дистанционно" : "Masofadan"}
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                    <input type="radio" disabled /> {locale === "ru" ? "У специалиста" : "Mutaxassisda"}
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                    <input type="radio" disabled /> {locale === "ru" ? "У меня" : "Menda"}
                  </label>
                </div>
              </div>
            </div>
            <h3 id="step-1-title">{t("step1Title")}</h3>
            <p id="step-1-desc">{t("step1Desc")}</p>
          </div>

          {/* Step 2 */}
          <div className="how-step" id="how-step-2">
            <div className="how-step-visual how-bg-2">
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ background: "#fff", padding: "16px", borderRadius: "12px", display: "flex", gap: "12px", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#a493c8", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>И</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "14px" }}>Ирина <span style={{ color: "#f59e0b", fontWeight: 400 }}>⭐ 5,0</span></div>
                    <div style={{ fontSize: "13px", color: "var(--fg-muted)" }}>Добрый день! Готова помочь</div>
                  </div>
                </div>
                <div style={{ background: "#fff", padding: "16px", borderRadius: "12px", display: "flex", gap: "12px", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#f59e0b", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>В</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "14px" }}>Василий <span style={{ color: "#f59e0b", fontWeight: 400 }}>⭐ 4,8</span></div>
                    <div style={{ fontSize: "13px", color: "var(--fg-muted)" }}>Здравствуйте! Живу недалеко</div>
                  </div>
                </div>
                <div style={{ background: "#fff", padding: "16px", borderRadius: "12px", display: "flex", gap: "12px", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#f03e4d", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>Н</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "14px" }}>Наиль <span style={{ color: "#f59e0b", fontWeight: 400 }}>⭐ 4,9</span></div>
                    <div style={{ fontSize: "13px", color: "var(--fg-muted)" }}>Здравствуйте! Когда нужна услуга</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 id="step-2-title">{t("step2Title")}</h3>
            <p id="step-2-desc">{t("step2Desc")}</p>
          </div>

          {/* Step 3 */}
          <div className="how-step" id="how-step-3">
            <div className="how-step-visual how-bg-3">
              <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", height: "100%", display: "flex", flexDirection: "column", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "auto" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#f59e0b", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>В</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "15px" }}>Василий</div>
                    <div style={{ fontSize: "13px", color: "var(--fg-muted)" }}>⭐ 4,8 · 57 отзывов</div>
                  </div>
                </div>
                <div style={{ alignSelf: "flex-end", background: "#f5f6f8", padding: "12px 16px", borderRadius: "16px", borderBottomRightRadius: "4px", fontSize: "14px", marginBottom: "12px" }}>
                  Все вместе 2000 рублей
                </div>
                <div style={{ alignSelf: "flex-start", border: "1px solid var(--border)", padding: "12px 16px", borderRadius: "16px", borderBottomLeftRadius: "4px", fontSize: "14px" }}>
                  Когда вам удобно?
                </div>
              </div>
            </div>
            <h3 id="step-3-title">{t("step3Title")}</h3>
            <p id="step-3-desc">{t("step3Desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
