"use client";

import { useAppContext } from "../context/AppContext";
import { useLanguage } from "../i18n/LanguageContext";
import Link from "next/link";

export default function Directory() {
  const { city } = useAppContext();
  const { locale } = useLanguage();

  return (
    <section className="directory">
      <div className="directory-inner">
        <h2 className="section-title" style={{ fontSize: "32px", marginBottom: "8px" }}>
          {locale === "ru" ? `Профи в ${city === "Ташкент" ? "Ташкенте" : city}` : `${city}dagi mutaxassislar`}
        </h2>
        <p className="directory-subtitle">
          {locale === "ru" 
            ? "В вашем регионе работает 43 228 специалистов, ещё 38 113 готовы помочь дистанционно."
            : "Sizning hududingizda 43 228 mutaxassis ishlamoqda, yana 38 113 mutaxassis masofadan yordam berishga tayyor."}
        </p>

        <div className="directory-grid">
          <div className="directory-col">
            <div className="directory-col-header">
              <h3>{locale === "ru" ? "Репетиторы" : "Repetitorlar"}</h3>
              <span className="dir-count">222 458</span>
            </div>
            <ul>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Английский язык" : "Ingliz tili"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Математика" : "Matematika"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Русский язык" : "Rus tili"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Начальная школа" : "Boshlang'ich maktab"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Музыка" : "Musiqa"}</Link></li>
              <li><Link href="/search" className="directory-link directory-link-all">{locale === "ru" ? "Все 1920 предметов" : "Barcha 1920 fanlar"}</Link></li>
            </ul>
          </div>
          <div className="directory-col">
            <div className="directory-col-header">
              <h3>{locale === "ru" ? "Мастера по ремонту" : "Ta'mirlash ustalari"}</h3>
              <span className="dir-count">199 706</span>
            </div>
            <ul>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Сантехники" : "Santexniklar"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Электрики" : "Elektriklar"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Плиточники" : "Plitkachilar"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Штукатуры" : "Suvoqchilar"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Ремонт под ключ" : "Kalit taslim ta'mir"}</Link></li>
              <li><Link href="/search" className="directory-link directory-link-all">{locale === "ru" ? "Все 1993 услуги" : "Barcha 1993 xizmatlar"}</Link></li>
            </ul>
          </div>
          <div className="directory-col">
            <div className="directory-col-header">
              <h3>{locale === "ru" ? "Мастера красоты" : "Go'zallik ustalari"}</h3>
              <span className="dir-count">77 340</span>
            </div>
            <ul>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Макияж" : "Makiyaj"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Маникюр" : "Manikyur"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Причёски" : "Soch turmagi"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Эпиляция" : "Epilyatsiya"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Стилисты" : "Stilistlar"}</Link></li>
              <li><Link href="/search" className="directory-link directory-link-all">{locale === "ru" ? "Все 1992 услуги" : "Barcha 1992 xizmatlar"}</Link></li>
            </ul>
          </div>
          <div className="directory-col">
            <div className="directory-col-header">
              <h3>{locale === "ru" ? "Фрилансеры" : "Frilanserlar"}</h3>
              <span className="dir-count">119 564</span>
            </div>
            <ul>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Дизайнеры" : "Dizaynerlar"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Маркетинг" : "Marketing"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Системные администраторы" : "Tizim administratorlari"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "Работа с текстами" : "Matnlar bilan ishlash"}</Link></li>
              <li><Link href="/search" className="directory-link">{locale === "ru" ? "IT-аутсорсинг" : "IT-autsorsing"}</Link></li>
              <li><Link href="/search" className="directory-link directory-link-all">{locale === "ru" ? "Все 1110 услуг" : "Barcha 1110 xizmatlar"}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
