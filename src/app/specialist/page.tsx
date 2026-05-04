"use client";

import { useLanguage } from "../i18n/LanguageContext";
import { useState } from "react";

// Mock data for orders
const mockOrders = [
  {
    id: 1,
    title: "Ремонт ванной комнаты под ключ",
    budget: "По договорённости",
    address: "Ташкент, Юнусабадский район",
    distance: "5 км от вас",
    date: "Начать в ближайшее время",
    description: "Требуется полный ремонт ванной комнаты: демонтаж старой плитки, укладка новой, замена труб и установка новой сантехники (унитаз, раковина, душевая кабина). Площадь 4 кв.м.",
    timePosted: "10 минут назад",
  },
  {
    id: 2,
    title: "Репетитор по английскому языку",
    budget: "100 000 сум / час",
    address: "Дистанционно",
    distance: "",
    date: "По выходным",
    description: "Нужен репетитор для подготовки к IELTS (цель 7.0). Занятия 2 раза в неделю по выходным. Текущий уровень Intermediate.",
    timePosted: "25 минут назад",
  },
  {
    id: 3,
    title: "Установка розеток и люстры",
    budget: "До 300 000 сум",
    address: "Ташкент, Мирзо-Улугбекский район",
    distance: "2 км от вас",
    date: "Завтра",
    description: "Нужно установить 4 новые розетки (проводка уже выведена) и повесить люстру на натяжной потолок.",
    timePosted: "1 час назад",
  }
];

export default function SpecialistDashboard() {
  const { locale } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "32px 20px" }}>
      <div style={{ display: "flex", gap: "32px" }}>
        
        {/* Left Sidebar - Filters */}
        <aside style={{ width: "280px", flexShrink: 0 }}>
          <h2 style={{ fontSize: "24px", marginBottom: "24px", fontWeight: 700 }}>
            {locale === "ru" ? "Поиск заказов" : "Buyurtmalar izlash"}
          </h2>
          
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "16px" }}>
              {locale === "ru" ? "Услуги" : "Xizmatlar"}
            </h3>
            
            <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", cursor: "pointer" }}>
              <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", accentColor: "var(--color-primary)" }} />
              <span style={{ fontSize: "15px" }}>Все мои услуги</span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", cursor: "pointer" }}>
              <input type="checkbox" style={{ width: "18px", height: "18px", accentColor: "var(--color-primary)" }} />
              <span style={{ fontSize: "15px" }}>Сантехника</span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", cursor: "pointer" }}>
              <input type="checkbox" style={{ width: "18px", height: "18px", accentColor: "var(--color-primary)" }} />
              <span style={{ fontSize: "15px" }}>Электрика</span>
            </label>

            <hr style={{ margin: "20px 0", border: "none", borderTop: "1px solid var(--border)" }} />

            <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "16px" }}>
              {locale === "ru" ? "Район" : "Tuman"}
            </h3>
            
            <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", cursor: "pointer" }}>
              <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", accentColor: "var(--color-primary)" }} />
              <span style={{ fontSize: "15px" }}>Весь Ташкент</span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", cursor: "pointer" }}>
              <input type="checkbox" style={{ width: "18px", height: "18px", accentColor: "var(--color-primary)" }} />
              <span style={{ fontSize: "15px" }}>Дистанционно</span>
            </label>
          </div>
        </aside>

        {/* Main Feed */}
        <main style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
            <button 
              onClick={() => setActiveTab("all")}
              style={{ 
                padding: "8px 16px", 
                borderRadius: "20px", 
                border: "none", 
                backgroundColor: activeTab === "all" ? "var(--color-text)" : "#fff", 
                color: activeTab === "all" ? "#fff" : "var(--color-text)",
                fontSize: "15px",
                fontWeight: 500,
                cursor: "pointer",
                boxShadow: activeTab === "all" ? "none" : "0 1px 2px rgba(0,0,0,0.05)"
              }}
            >
              Подходящие
            </button>
            <button 
              onClick={() => setActiveTab("new")}
              style={{ 
                padding: "8px 16px", 
                borderRadius: "20px", 
                border: "none", 
                backgroundColor: activeTab === "new" ? "var(--color-text)" : "#fff", 
                color: activeTab === "new" ? "#fff" : "var(--color-text)",
                fontSize: "15px",
                fontWeight: 500,
                cursor: "pointer",
                boxShadow: activeTab === "new" ? "none" : "0 1px 2px rgba(0,0,0,0.05)"
              }}
            >
              Новые
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {mockOrders.map(order => (
              <div key={order.id} style={{ 
                backgroundColor: "#fff", 
                borderRadius: "16px", 
                padding: "24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)" 
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: "var(--color-primary)" }}>{order.title}</h3>
                  <div style={{ fontSize: "14px", color: "var(--color-muted)" }}>{order.timePosted}</div>
                </div>
                
                <div style={{ fontSize: "17px", fontWeight: 500, marginBottom: "16px" }}>
                  {order.budget}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--color-muted)", width: "20px" }}>📍</span>
                    <span>
                      {order.address}
                      {order.distance && <span style={{ color: "var(--color-muted)", marginLeft: "8px" }}>· {order.distance}</span>}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--color-muted)", width: "20px" }}>🕒</span>
                    <span>{order.date}</span>
                  </div>
                </div>

                <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "24px", color: "#333" }}>
                  {order.description}
                </p>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button className="btn-primary" style={{ padding: "10px 24px", fontSize: "15px" }}>Откликнуться</button>
                  <button className="btn-outline" style={{ padding: "10px 24px", fontSize: "15px", border: "1px solid var(--border)", color: "var(--color-text)" }}>Скрыть</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
