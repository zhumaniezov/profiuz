"use client";

import { useAppContext } from "../context/AppContext";
import { useLanguage } from "../i18n/LanguageContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { isLoggedIn, logout } = useAppContext();
  const { t, locale } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null;

  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "48px 24px", minHeight: "60vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <h1 className="section-title" style={{ margin: 0 }}>
          {locale === "ru" ? "Личный кабинет" : "Shaxsiy kabinet"}
        </h1>
        <button className="btn-outline" onClick={logout}>
          {locale === "ru" ? "Выйти" : "Chiqish"}
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "32px" }}>
        {/* Sidebar */}
        <div style={{ background: "var(--search-bg)", padding: "24px", borderRadius: "16px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>
            {locale === "ru" ? "Меню" : "Menyu"}
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            <li>
              <a href="#" style={{ fontWeight: 600, color: "var(--primary)" }}>
                {locale === "ru" ? "Мои заказы" : "Mening buyurtmalarim"}
              </a>
            </li>
            <li>
              <a href="#">{locale === "ru" ? "Сообщения" : "Xabarlar"}</a>
            </li>
            <li>
              <a href="/settings">{locale === "ru" ? "Настройки" : "Sozlamalar"}</a>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div style={{ background: "#fff", border: "1px solid var(--border)", padding: "32px", borderRadius: "16px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>
            {locale === "ru" ? "У вас пока нет заказов" : "Sizda hozircha buyurtmalar yo'q"}
          </h2>
          <p style={{ color: "var(--fg-muted)", marginBottom: "24px" }}>
            {locale === "ru" 
              ? "Создайте свой первый заказ, чтобы найти специалиста." 
              : "Mutaxassisni topish uchun birinchi buyurtmangizni yarating."}
          </p>
          <a href="/" className="btn-primary" style={{ display: "inline-block" }}>
            {t("newTask")}
          </a>
        </div>
      </div>
    </div>
  );
}
