"use client";

import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useRouter } from "next/navigation";

export default function CreateOrderPage() {
  const { locale } = useLanguage();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    details: "",
    address: "",
    date: ""
  });

  const categories = [
    { id: "tutor", ru: "Репетиторы", uz: "Repetitorlar", icon: "📚" },
    { id: "repair", ru: "Мастера по ремонту", uz: "Ta'mirlash ustalari", icon: "🔧" },
    { id: "beauty", ru: "Мастера красоты", uz: "Go'zallik ustalari", icon: "💅" },
    { id: "freelance", ru: "Фрилансеры", uz: "Frilanserlar", icon: "💻" },
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else {
      // Final submit
      alert(locale === "ru" ? "Заказ успешно создан!" : "Buyurtma muvaffaqiyatli yaratildi!");
      router.push("/profile");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else router.push("/profile");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "48px 20px", minHeight: "80vh" }}>
      
      {/* Progress Bar */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "32px" }}>
        {[1, 2, 3, 4].map(s => (
          <div 
            key={s} 
            style={{ 
              height: "4px", 
              flex: 1, 
              backgroundColor: s <= step ? "var(--color-primary)" : "var(--border)",
              borderRadius: "2px",
              transition: "background-color 0.3s"
            }} 
          />
        ))}
      </div>

      <div style={{ backgroundColor: "#fff", padding: "32px", borderRadius: "16px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
        
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px" }}>
              {locale === "ru" ? "Какая услуга вам нужна?" : "Sizga qanday xizmat kerak?"}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {categories.map(c => (
                <button 
                  key={c.id}
                  onClick={() => { setFormData({ ...formData, category: c.id }); handleNext(); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px",
                    borderRadius: "12px",
                    border: formData.category === c.id ? "2px solid var(--color-primary)" : "1px solid var(--border)",
                    backgroundColor: formData.category === c.id ? "var(--color-light)" : "transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: "16px",
                    fontWeight: 500,
                    transition: "all 0.2s"
                  }}
                >
                  <span style={{ fontSize: "24px" }}>{c.icon}</span>
                  {locale === "ru" ? c.ru : c.uz}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>
              {locale === "ru" ? "Опишите задачу" : "Vazifani tasvirlab bering"}
            </h2>
            <p style={{ color: "var(--color-muted)", marginBottom: "24px" }}>
              {locale === "ru" ? "Чем подробнее, тем точнее специалисты оценят работу." : "Qanchalik batafsil bo'lsa, mutaxassislar ishni shunchalik aniq baholaydilar."}
            </p>
            <textarea 
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              style={{
                width: "100%",
                height: "150px",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                fontSize: "16px",
                fontFamily: "inherit",
                resize: "vertical",
                marginBottom: "24px"
              }}
              placeholder={locale === "ru" ? "Например: Нужно поклеить обои в комнате 15 кв.м." : "Masalan: 15 kv.m xonaga gulqog'oz yopishtirish kerak."}
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px" }}>
              {locale === "ru" ? "Где нужно выполнить работу?" : "Ish qayerda bajarilishi kerak?"}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", border: "1px solid var(--border)", borderRadius: "12px", cursor: "pointer" }}>
                <input type="radio" name="location" onChange={() => setFormData({ ...formData, address: "remote" })} style={{ width: "20px", height: "20px", accentColor: "var(--color-primary)" }} />
                <span style={{ fontSize: "16px" }}>{locale === "ru" ? "Дистанционно" : "Masofadan"}</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", border: "1px solid var(--border)", borderRadius: "12px", cursor: "pointer" }}>
                <input type="radio" name="location" onChange={() => setFormData({ ...formData, address: "client" })} style={{ width: "20px", height: "20px", accentColor: "var(--color-primary)" }} />
                <span style={{ fontSize: "16px" }}>{locale === "ru" ? "У меня" : "Menda"}</span>
              </label>
            </div>
            {formData.address === "client" && (
              <input 
                type="text"
                placeholder={locale === "ru" ? "Улица, дом..." : "Ko'cha, uy..."}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  fontSize: "16px",
                  marginBottom: "24px"
                }}
              />
            )}
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px" }}>
              {locale === "ru" ? "Когда нужно начать?" : "Qachon boshlash kerak?"}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", border: "1px solid var(--border)", borderRadius: "12px", cursor: "pointer" }}>
                <input type="radio" name="date" onChange={() => setFormData({ ...formData, date: "asap" })} style={{ width: "20px", height: "20px", accentColor: "var(--color-primary)" }} />
                <span style={{ fontSize: "16px" }}>{locale === "ru" ? "Как можно скорее" : "Iloji boricha tezroq"}</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", border: "1px solid var(--border)", borderRadius: "12px", cursor: "pointer" }}>
                <input type="radio" name="date" onChange={() => setFormData({ ...formData, date: "exact" })} style={{ width: "20px", height: "20px", accentColor: "var(--color-primary)" }} />
                <span style={{ fontSize: "16px" }}>{locale === "ru" ? "Выбрать дату" : "Sanani tanlash"}</span>
              </label>
            </div>
            {formData.date === "exact" && (
              <input 
                type="date"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  fontSize: "16px",
                  marginBottom: "24px",
                  fontFamily: "inherit"
                }}
              />
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
          <button 
            onClick={handleBack}
            className="btn-outline"
            style={{ padding: "12px 24px" }}
          >
            {locale === "ru" ? "Назад" : "Orqaga"}
          </button>
          {step > 1 && (
            <button 
              onClick={handleNext}
              className="btn-primary"
              style={{ padding: "12px 32px" }}
              disabled={
                (step === 2 && !formData.details) || 
                (step === 3 && !formData.address) || 
                (step === 4 && !formData.date)
              }
            >
              {step === 4 
                ? (locale === "ru" ? "Опубликовать заказ" : "Buyurtmani e'lon qilish") 
                : (locale === "ru" ? "Далее" : "Keyingisi")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
