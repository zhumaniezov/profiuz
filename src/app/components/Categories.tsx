"use client";

import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Modal } from "./Modal";
import { useRouter } from "next/navigation";

export default function Categories() {
  const { t, locale } = useLanguage();
  const router = useRouter();
  const [selectedCat, setSelectedCat] = useState<string | null>(null);

  const catKey = (k: string): any => k;

  const row1 = [
    { name: locale === "ru" ? "Сантехника" : "Santexnika", bg: "cat-bg-1", key: "catRepair" },
    { name: locale === "ru" ? "Психология" : "Psixologiya", bg: "cat-bg-2", key: "catBeauty", wide: true },
    { name: locale === "ru" ? "Математика" : "Matematika", bg: "cat-bg-3", key: "catTutors" },
    { name: locale === "ru" ? "Английский язык" : "Ingliz tili", bg: "cat-bg-4", key: "catFreelance" },
  ];

  const row2 = [
    { name: locale === "ru" ? "Электрика" : "Elektrika", bg: "cat-bg-5", key: "catHome" },
    { name: locale === "ru" ? "Плиточники" : "Plitkachilar", bg: "cat-bg-6", key: "catRepair" },
    { name: locale === "ru" ? "Двери" : "Eshiklar", bg: "cat-bg-7", key: "catSport", wide: true },
    { name: locale === "ru" ? "Русский язык" : "Rus tili", bg: "cat-bg-8", key: "catTutors" },
  ];

  return (
    <section className="categories" id="categories">
      <div className="categories-inner">
        <div className="categories-row">
          {row1.map((c, i) => (
            <div key={i} className={`category-card ${c.bg} ${c.wide ? "category-card-wide" : ""}`} onClick={() => setSelectedCat(c.key)}>
              <h3 className="category-name">{c.name}</h3>
            </div>
          ))}
        </div>
        <div className="categories-row">
          {row2.map((c, i) => (
            <div key={i} className={`category-card ${c.bg} ${c.wide ? "category-card-wide" : ""}`} onClick={() => setSelectedCat(c.key)}>
              <h3 className="category-name">{c.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedCat} onClose={() => setSelectedCat(null)} title={selectedCat ? t(catKey(selectedCat)) : ""}>
        <p style={{ marginBottom: 24, color: "var(--color-muted)" }}>
          {selectedCat ? t(catKey(`${selectedCat}Desc`)) : ""}
        </p>
        <button className="btn-primary btn-block" onClick={() => { setSelectedCat(null); router.push("/search"); }}>
          {locale === "ru" ? "Найти специалиста" : "Mutaxassisni topish"}
        </button>
      </Modal>
    </section>
  );
}
