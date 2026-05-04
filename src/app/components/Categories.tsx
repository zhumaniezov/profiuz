"use client";

import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Modal } from "./Modal";

const categories: { key: string; bgClass: string; iconKey: string }[] = [
  { key: "catTutors", bgClass: "cat-bg-1", iconKey: "tutors" },
  { key: "catRepair", bgClass: "cat-bg-2", iconKey: "repair" },
  { key: "catBeauty", bgClass: "cat-bg-3", iconKey: "beauty" },
  { key: "catFreelance", bgClass: "cat-bg-4", iconKey: "freelance" },
  { key: "catLaw", bgClass: "cat-bg-5", iconKey: "law" },
  { key: "catSport", bgClass: "cat-bg-6", iconKey: "sport" },
  { key: "catHome", bgClass: "cat-bg-7", iconKey: "home" },
  { key: "catEvents", bgClass: "cat-bg-8", iconKey: "events" },
];

export default function Categories() {
  const { t, locale } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string | null>(null);

  const getCategoryTranslationKey = (key: string): keyof typeof import("../i18n/translations").translations.ru => key as any;

  return (
    <section className="categories" id="categories">
      <div className="categories-inner">
        <div className="categories-grid">
          {categories.map((cat) => (
            <div
              className={`category-card ${cat.bgClass}`}
              key={cat.key}
              id={`category-${cat.iconKey}`}
              onClick={() => setSelectedCat(cat.key)}
              style={{ cursor: "pointer" }}
            >
              <h3 className="category-name">{t(getCategoryTranslationKey(cat.key))}</h3>
              <div className="category-icon">
                <svg viewBox="0 0 100 100" fill="currentColor" opacity="0.5">
                  <circle cx="50" cy="50" r="40" />
                </svg>
              </div>
            </div>
          ))}
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
