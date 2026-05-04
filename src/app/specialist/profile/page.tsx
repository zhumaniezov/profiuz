"use client";

import { useLanguage } from "../../i18n/LanguageContext";

export default function SpecialistProfilePage() {
  const { locale } = useLanguage();

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "24px" }}>
        {locale === "ru" ? "Анкета специалиста" : "Mutaxassis anketasi"}
      </h1>

      <div style={{ 
        backgroundColor: "#fff", 
        borderRadius: "16px", 
        padding: "32px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
      }}>
        <div style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
          <div style={{ 
            width: "100px", 
            height: "100px", 
            borderRadius: "50%", 
            backgroundColor: "var(--color-light)", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            fontSize: "40px"
          }}>
            👤
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "4px" }}>Имя Фамилия</h2>
            <p style={{ color: "var(--color-muted)", marginBottom: "16px" }}>+998 90 123 45 67</p>
            <button className="btn-outline" style={{ padding: "8px 16px", fontSize: "14px" }}>
              {locale === "ru" ? "Изменить фото" : "Rasmni o'zgartirish"}
            </button>
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", fontSize: "15px", fontWeight: 600, marginBottom: "8px" }}>
            {locale === "ru" ? "О себе" : "O'zim haqimda"}
          </label>
          <textarea 
            style={{ 
              width: "100%", 
              height: "120px", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid var(--border)",
              fontFamily: "inherit",
              resize: "vertical"
            }}
            placeholder={locale === "ru" ? "Расскажите о своем опыте..." : "Tajribangiz haqida so'zlab bering..."}
          />
        </div>

        <div style={{ marginBottom: "32px" }}>
          <label style={{ display: "block", fontSize: "15px", fontWeight: 600, marginBottom: "8px" }}>
            {locale === "ru" ? "Услуги и цены" : "Xizmatlar va narxlar"}
          </label>
          <div style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span>Сантехника</span>
              <button style={{ color: "var(--color-primary)", background: "none", border: "none", cursor: "pointer" }}>Редактировать</button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Электрика</span>
              <button style={{ color: "var(--color-primary)", background: "none", border: "none", cursor: "pointer" }}>Редактировать</button>
            </div>
          </div>
          <button style={{ marginTop: "12px", color: "var(--color-primary)", background: "none", border: "none", cursor: "pointer", fontWeight: 500 }}>
            + Добавить услугу
          </button>
        </div>

        <button className="btn-primary" style={{ width: "100%", padding: "14px" }}>
          {locale === "ru" ? "Сохранить изменения" : "O'zgarishlarni saqlash"}
        </button>
      </div>
    </div>
  );
}
