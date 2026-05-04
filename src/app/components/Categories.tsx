import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Modal } from "./Modal";

export default function Categories() {
  const { t, locale } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string | null>(null);

  const getCategoryTranslationKey = (key: string): keyof typeof import("../i18n/translations").translations.ru => key as any;

  return (
    <section className="categories" id="categories">
      <div className="categories-inner">
        <div className="categories-grid">
          {/* Row 1 */}
          <div className="category-card cat-bg-1" onClick={() => setSelectedCat("catRepair")} style={{ cursor: "pointer" }}>
            <h3 className="category-name">{locale === "ru" ? "Сантехника" : "Santexnika"}</h3>
            <div className="category-icon">
              {/* Simplified Faucet */}
              <svg viewBox="0 0 100 100" fill="none" stroke="#555" strokeWidth="4" style={{ position: "absolute", bottom: "-10px", right: "-10px", width: "80px", height: "80px" }}>
                <path d="M20 80 L20 40 Q20 20 40 20 L80 20 M60 20 L60 40" strokeLinecap="round"/>
                <circle cx="80" cy="20" r="5" fill="#f03e4d" stroke="none" />
              </svg>
            </div>
          </div>
          
          <div className="category-card cat-bg-2" onClick={() => setSelectedCat("catBeauty")} style={{ cursor: "pointer" }}>
            <h3 className="category-name">{locale === "ru" ? "Психология" : "Psixologiya"}</h3>
            <div className="category-icon">
              {/* Chair */}
              <svg viewBox="0 0 100 100" fill="#a493c8" style={{ position: "absolute", bottom: "0", right: "10px", width: "90px", height: "90px" }}>
                <rect x="20" y="20" width="60" height="80" rx="10" />
                <rect x="10" y="50" width="80" height="30" rx="5" fill="#8c78b3" />
              </svg>
            </div>
          </div>

          <div className="category-card cat-bg-3" onClick={() => setSelectedCat("catTutors")} style={{ cursor: "pointer" }}>
            <h3 className="category-name">{locale === "ru" ? "Математика" : "Matematika"}</h3>
            <div className="category-icon">
              {/* Protractor */}
              <svg viewBox="0 0 100 100" fill="none" stroke="#a0c8a0" strokeWidth="6" style={{ position: "absolute", bottom: "10px", right: "-20px", width: "100px", height: "100px" }}>
                <path d="M10 90 A 40 40 0 0 1 90 90 Z" fill="#d2ebd2" />
                <path d="M30 90 A 20 20 0 0 1 70 90" strokeWidth="2" />
                <line x1="50" y1="90" x2="50" y2="85" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="category-card cat-bg-4" onClick={() => setSelectedCat("catFreelance")} style={{ cursor: "pointer" }}>
            <h3 className="category-name">{locale === "ru" ? "Английский язык" : "Ingliz tili"}</h3>
            <div className="category-icon">
              {/* Scrabble tiles */}
              <svg viewBox="0 0 100 100" style={{ position: "absolute", bottom: "0", right: "0", width: "100px", height: "100px" }}>
                <rect x="20" y="50" width="30" height="30" fill="#f0d4b8" rx="4" transform="rotate(-15 35 65)" />
                <text x="25" y="75" fontSize="20" fill="#333" transform="rotate(-15 35 65)">A</text>
                
                <rect x="60" y="30" width="30" height="30" fill="#f0d4b8" rx="4" transform="rotate(10 75 45)" />
                <text x="65" y="55" fontSize="20" fill="#333" transform="rotate(10 75 45)">N</text>
              </svg>
            </div>
          </div>

          {/* Row 2 */}
          <div className="category-card cat-bg-5" onClick={() => setSelectedCat("catHome")} style={{ cursor: "pointer" }}>
            <h3 className="category-name">{locale === "ru" ? "Электрика" : "Elektrika"}</h3>
            <div className="category-icon">
              {/* Socket */}
              <svg viewBox="0 0 100 100" fill="#fff" style={{ position: "absolute", bottom: "-10px", right: "-10px", width: "80px", height: "80px", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}>
                <rect x="10" y="10" width="80" height="80" rx="10" />
                <circle cx="50" cy="50" r="30" fill="#f0e6d3" />
                <circle cx="35" cy="50" r="6" fill="#333" />
                <circle cx="65" cy="50" r="6" fill="#333" />
              </svg>
            </div>
          </div>

          <div className="category-card cat-bg-6" onClick={() => setSelectedCat("catRepair")} style={{ cursor: "pointer" }}>
            <h3 className="category-name">{locale === "ru" ? "Плиточники" : "Plitkachilar"}</h3>
            <div className="category-icon">
              {/* Tiles grid */}
              <svg viewBox="0 0 100 100" fill="#a8dcd5" stroke="#fff" strokeWidth="2" style={{ position: "absolute", bottom: "0", right: "0", width: "100px", height: "100px" }}>
                <rect x="10" y="10" width="20" height="20" />
                <rect x="30" y="10" width="20" height="20" />
                <rect x="50" y="10" width="20" height="20" fill="#88c8c0" />
                <rect x="70" y="10" width="20" height="20" />
                
                <rect x="10" y="30" width="20" height="20" />
                <rect x="30" y="30" width="20" height="20" fill="#88c8c0" />
                <rect x="50" y="30" width="20" height="20" />
                <rect x="70" y="30" width="20" height="20" />

                <rect x="10" y="50" width="20" height="20" fill="#88c8c0" />
                <rect x="30" y="50" width="20" height="20" />
                <rect x="50" y="50" width="20" height="20" />
                <rect x="70" y="50" width="20" height="20" fill="#88c8c0" />
              </svg>
            </div>
          </div>

          <div className="category-card cat-bg-7" onClick={() => setSelectedCat("catSport")} style={{ cursor: "pointer" }}>
            <h3 className="category-name">{locale === "ru" ? "Двери" : "Eshiklar"}</h3>
            <div className="category-icon">
              {/* Door */}
              <svg viewBox="0 0 100 100" fill="#fff" stroke="#ead6f0" strokeWidth="1" style={{ position: "absolute", bottom: "0", right: "10px", width: "90px", height: "100%" }}>
                <rect x="10" y="20" width="80" height="100" />
                <rect x="20" y="30" width="60" height="30" fill="#f8f2fa" />
                <rect x="20" y="70" width="60" height="50" fill="#f8f2fa" />
                <circle cx="75" cy="65" r="4" fill="#cca643" stroke="none" />
              </svg>
            </div>
          </div>

          <div className="category-card cat-bg-8" onClick={() => setSelectedCat("catTutors")} style={{ cursor: "pointer" }}>
            <h3 className="category-name">{locale === "ru" ? "Русский язык" : "Rus tili"}</h3>
            <div className="category-icon">
              {/* Pen */}
              <svg viewBox="0 0 100 100" fill="#444" style={{ position: "absolute", bottom: "10px", right: "10px", width: "90px", height: "90px" }}>
                <path d="M80 20 L20 80 L10 90 L20 90 L90 20 Z" />
                <path d="M10 90 L5 95 L15 95 Z" fill="#222" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedCat}
        onClose={() => setSelectedCat(null)}
        title={selectedCat ? t(getCategoryTranslationKey(selectedCat)) : ""}
      >
        <p style={{ marginBottom: "24px", color: "var(--fg-muted)" }}>
          {selectedCat ? t(getCategoryTranslationKey(`${selectedCat}Desc`)) : ""}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button className="btn-primary" onClick={() => setSelectedCat(null)}>
            {locale === "ru" ? "Найти специалиста" : "Mutaxassisni topish"}
          </button>
        </div>
      </Modal>
    </section>
  );
}
