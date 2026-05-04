"use client";

import { useLanguage } from "../i18n/LanguageContext";
import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const { locale } = useLanguage();
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "32px" }}>
        {locale === "ru" ? "Личный кабинет" : "Shaxsiy kabinet"}
      </h1>

      <div style={{ display: "flex", gap: "32px" }}>
        {/* Sidebar */}
        <aside style={{ width: "240px", flexShrink: 0 }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <button
              onClick={() => setActiveTab("orders")}
              style={{
                textAlign: "left",
                padding: "12px 16px",
                borderRadius: "8px",
                background: activeTab === "orders" ? "var(--color-light)" : "transparent",
                color: activeTab === "orders" ? "var(--color-primary)" : "var(--color-text)",
                fontWeight: activeTab === "orders" ? 600 : 400,
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background 0.2s"
              }}
            >
              {locale === "ru" ? "Мои заказы" : "Mening buyurtmalarim"}
            </button>
            <button
              onClick={() => setActiveTab("chats")}
              style={{
                textAlign: "left",
                padding: "12px 16px",
                borderRadius: "8px",
                background: activeTab === "chats" ? "var(--color-light)" : "transparent",
                color: activeTab === "chats" ? "var(--color-primary)" : "var(--color-text)",
                fontWeight: activeTab === "chats" ? 600 : 400,
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background 0.2s"
              }}
            >
              {locale === "ru" ? "Сообщения" : "Xabarlar"}
            </button>
            <Link
              href="/settings"
              style={{
                textAlign: "left",
                padding: "12px 16px",
                borderRadius: "8px",
                color: "var(--color-text)",
                textDecoration: "none",
                fontSize: "16px"
              }}
            >
              {locale === "ru" ? "Настройки" : "Sozlamalar"}
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1 }}>
          {activeTab === "orders" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 700 }}>
                  {locale === "ru" ? "Мои заказы" : "Mening buyurtmalarim"}
                </h2>
                <Link href="/create-order" className="btn-primary" style={{ textDecoration: "none", padding: "10px 20px" }}>
                  {locale === "ru" ? "Создать заказ" : "Buyurtma yaratish"}
                </Link>
              </div>

              {/* Empty state */}
              <div style={{ 
                backgroundColor: "#fff", 
                borderRadius: "16px", 
                padding: "64px 24px",
                textAlign: "center",
                border: "1px solid var(--border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
              }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>📝</div>
                <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}>
                  {locale === "ru" ? "У вас пока нет заказов" : "Sizda hozircha buyurtmalar yo'q"}
                </h3>
                <p style={{ color: "var(--color-muted)", fontSize: "15px", maxWidth: "400px", margin: "0 auto 24px" }}>
                  {locale === "ru" 
                    ? "Создайте заказ, опишите задачу, и специалисты сами откликнутся на вашу заявку." 
                    : "Buyurtma yarating, vazifani tasvirlab bering, va mutaxassislar o'zlari arizangizga javob berishadi."}
                </p>
                <Link href="/create-order" className="btn-primary" style={{ textDecoration: "none", padding: "12px 24px", display: "inline-block" }}>
                  {locale === "ru" ? "Создать первый заказ" : "Birinchi buyurtmani yaratish"}
                </Link>
              </div>
            </div>
          )}

          {activeTab === "chats" && (
            <div>
              <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px" }}>
                {locale === "ru" ? "Сообщения" : "Xabarlar"}
              </h2>
              <div style={{ 
                backgroundColor: "#fff", 
                borderRadius: "16px", 
                padding: "48px 24px",
                textAlign: "center",
                border: "1px solid var(--border)"
              }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>💬</div>
                <p style={{ color: "var(--color-muted)", fontSize: "15px" }}>
                  {locale === "ru" ? "У вас пока нет сообщений." : "Sizda hozircha xabarlar yo'q."}
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
