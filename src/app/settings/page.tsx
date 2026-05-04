"use client";

import { useAppContext } from "../context/AppContext";
import { useLanguage } from "../i18n/LanguageContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const { isLoggedIn, city, setCity } = useAppContext();
  const { locale } = useLanguage();
  const router = useRouter();
  
  const [name, setName] = useState("Иван Иванов");

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px", minHeight: "60vh" }}>
      <h1 className="section-title" style={{ marginBottom: "32px" }}>
        {locale === "ru" ? "Настройки" : "Sozlamalar"}
      </h1>

      <div style={{ background: "#fff", border: "1px solid var(--border)", padding: "32px", borderRadius: "16px" }}>
        
        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}>
            {locale === "ru" ? "Имя" : "Ism"}
          </label>
          <input 
            type="text" 
            className="input-field" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "32px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}>
            {locale === "ru" ? "Город" : "Shahar"}
          </label>
          <input 
            type="text" 
            className="input-field" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <button className="btn-primary" onClick={() => router.push("/profile")}>
          {locale === "ru" ? "Сохранить и вернуться" : "Saqlash va qaytish"}
        </button>
      </div>
    </div>
  );
}
