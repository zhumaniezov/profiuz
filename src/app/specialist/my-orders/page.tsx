"use client";

import { useLanguage } from "../../i18n/LanguageContext";

export default function MyOrdersPage() {
  const { locale } = useLanguage();

  return (
    <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "24px" }}>
        {locale === "ru" ? "Мои заказы" : "Mening buyurtmalarim"}
      </h1>

      <div style={{ 
        backgroundColor: "#fff", 
        borderRadius: "16px", 
        padding: "48px 24px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
      }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>📝</div>
        <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}>
          {locale === "ru" ? "У вас пока нет активных заказов" : "Sizda hozircha faol buyurtmalar yo'q"}
        </h2>
        <p style={{ color: "var(--color-muted)", fontSize: "15px", maxWidth: "400px", margin: "0 auto 24px" }}>
          {locale === "ru" 
            ? "Откликайтесь на новые заказы в разделе «Поиск заказов», чтобы начать работу с клиентами." 
            : "Mijozlar bilan ishlashni boshlash uchun «Buyurtmalar izlash» bo'limida yangi buyurtmalarga javob bering."}
        </p>
        <a href="/specialist" className="btn-primary" style={{ display: "inline-block", padding: "12px 24px", textDecoration: "none" }}>
          {locale === "ru" ? "Найти заказы" : "Buyurtma topish"}
        </a>
      </div>
    </div>
  );
}
