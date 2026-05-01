"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-inner">
        <h2 className="section-title" id="how-it-works-title">{t("howItWorksTitle")}</h2>
        <div className="how-steps">
          <div className="how-step" id="step-1">
            <div className="how-step-number">1</div>
            <div className="how-step-visual">
              <div className="step-card">
                <div className="step-card-lines">
                  <div className="step-line step-line-long"></div>
                  <div className="step-line step-line-medium"></div>
                  <div className="step-line step-line-short"></div>
                </div>
              </div>
            </div>
            <h3 className="how-step-title">{t("step1Title")}</h3>
            <p className="how-step-desc">{t("step1Desc")}</p>
          </div>

          <div className="how-step-connector">
            <svg viewBox="0 0 60 24" fill="none">
              <path d="M0 12h50m-8-8l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="how-step" id="step-2">
            <div className="how-step-number">2</div>
            <div className="how-step-visual">
              <div className="step-messages">
                <div className="step-message step-message-1">
                  <div className="step-msg-avatar"></div>
                  <div className="step-msg-bubble">
                    <div className="step-line step-line-medium"></div>
                    <div className="step-msg-price">150 000 сўм</div>
                  </div>
                </div>
                <div className="step-message step-message-2">
                  <div className="step-msg-avatar"></div>
                  <div className="step-msg-bubble">
                    <div className="step-line step-line-short"></div>
                    <div className="step-msg-price">120 000 сўм</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="how-step-title">{t("step2Title")}</h3>
            <p className="how-step-desc">{t("step2Desc")}</p>
          </div>

          <div className="how-step-connector">
            <svg viewBox="0 0 60 24" fill="none">
              <path d="M0 12h50m-8-8l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="how-step" id="step-3">
            <div className="how-step-number">3</div>
            <div className="how-step-visual">
              <div className="step-profile">
                <div className="step-profile-stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="step-star">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="step-profile-badge">✓</div>
              </div>
            </div>
            <h3 className="how-step-title">{t("step3Title")}</h3>
            <p className="how-step-desc">{t("step3Desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
