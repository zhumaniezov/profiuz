"use client";

import { useLanguage } from "../i18n/LanguageContext";
import { useState } from "react";
import Link from "next/link";

const mockSpecialists = [
  {
    id: 1,
    name: "Иван Смирнов",
    specialtyRu: "Мастер по ремонту квартир, Плиточник",
    specialtyUz: "Kvartira ta'mirlash ustasi, Plitkachi",
    rating: 4.9,
    reviewsCount: 124,
    descriptionRu: "Выполняю ремонт квартир под ключ любой сложности. Опыт работы более 10 лет. Гарантия на все виды работ.",
    descriptionUz: "Har qanday qiyinchilikdagi kvartiralarni kalit taslim ta'mirlayman. Ish tajribasi 10 yildan ortiq. Barcha turdagi ishlarga kafolat.",
    priceRu: "от 50 000 сум / кв.м",
    priceUz: "50 000 so'm / kv.m dan",
    avatarColor: "#A849EB"
  },
  {
    id: 2,
    name: "Дилноза Ахмедова",
    specialtyRu: "Репетитор по английскому языку",
    specialtyUz: "Ingliz tili repetitori",
    rating: 5.0,
    reviewsCount: 89,
    descriptionRu: "Подготовка к IELTS, CEFR. Индивидуальный подход к каждому ученику. Занятия онлайн и оффлайн.",
    descriptionUz: "IELTS, CEFR ga tayyorgarlik. Har bir o'quvchiga individual yondashuv. Onlayn va oflayn darslar.",
    priceRu: "100 000 сум / час",
    priceUz: "100 000 so'm / soat",
    avatarColor: "#FFA216"
  },
  {
    id: 3,
    name: "Рустам Алиев",
    specialtyRu: "Электрик, Сантехник",
    specialtyUz: "Elektrik, Santexnik",
    rating: 4.8,
    reviewsCount: 56,
    descriptionRu: "Срочный выезд во все районы Ташкента. Качественная работа по приемлемым ценам.",
    descriptionUz: "Toshkentning barcha tumanlariga shoshilinch chiqish. Maqbul narxlarda sifatli ish.",
    priceRu: "от 150 000 сум / услуга",
    priceUz: "150 000 so'm / xizmatdan",
    avatarColor: "#1bb577"
  },
  {
    id: 4,
    name: "Малика Каримова",
    specialtyRu: "Визажист, Стилист по волосам",
    specialtyUz: "Vizajist, Soch stilisti",
    rating: 4.95,
    reviewsCount: 210,
    descriptionRu: "Свадебный макияж, вечерние прически. Использую только профессиональную косметику люкс сегмента.",
    descriptionUz: "To'y makiyaji, kechki soch turmaklari. Faqat professional lyuks kosmetikasidan foydalanaman.",
    priceRu: "от 300 000 сум",
    priceUz: "300 000 so'mdan",
    avatarColor: "#fa2a48"
  }
];

export default function SearchPage() {
  const { locale } = useLanguage();
  const [sortBy, setSortBy] = useState("rating");

  return (
    <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "32px 20px" }}>
      
      {/* Search Header */}
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "8px" }}>
          {locale === "ru" ? "Специалисты в Ташкенте" : "Toshkentdagi mutaxassislar"}
        </h1>
        <p style={{ color: "var(--color-muted)", fontSize: "16px" }}>
          {locale === "ru" ? "Найдено 4 специалиста" : "4 ta mutaxassis topildi"}
        </p>
      </div>

      <div style={{ display: "flex", gap: "32px" }}>
        
        {/* Left Sidebar - Filters */}
        <aside style={{ width: "260px", flexShrink: 0 }}>
          <div style={{ position: "sticky", top: "80px" }}>
            
            {/* Sorting */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "16px" }}>
                {locale === "ru" ? "Сортировка" : "Saralash"}
              </h3>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                style={{ 
                  width: "100%", 
                  padding: "12px", 
                  borderRadius: "8px", 
                  border: "1px solid var(--border)",
                  fontSize: "15px",
                  cursor: "pointer",
                  backgroundColor: "#fff"
                }}
              >
                <option value="rating">{locale === "ru" ? "По рейтингу" : "Reyting bo'yicha"}</option>
                <option value="reviews">{locale === "ru" ? "По количеству отзывов" : "Sharhlar soni bo'yicha"}</option>
                <option value="price_asc">{locale === "ru" ? "Сначала дешевле" : "Avval arzonlari"}</option>
              </select>
            </div>

            {/* Filters */}
            <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "16px" }}>
              {locale === "ru" ? "Фильтры" : "Filtrlar"}
            </h3>
            
            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "12px" }}>
                {locale === "ru" ? "Место встречи" : "Uchrashuv joyi"}
              </h4>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", cursor: "pointer" }}>
                <input type="checkbox" style={{ width: "18px", height: "18px", accentColor: "var(--color-primary)" }} />
                <span style={{ fontSize: "15px" }}>{locale === "ru" ? "У клиента" : "Mijoznikida"}</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", cursor: "pointer" }}>
                <input type="checkbox" style={{ width: "18px", height: "18px", accentColor: "var(--color-primary)" }} />
                <span style={{ fontSize: "15px" }}>{locale === "ru" ? "У специалиста" : "Mutaxassisnikida"}</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", cursor: "pointer" }}>
                <input type="checkbox" style={{ width: "18px", height: "18px", accentColor: "var(--color-primary)" }} />
                <span style={{ fontSize: "15px" }}>{locale === "ru" ? "Дистанционно" : "Masofadan"}</span>
              </label>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "12px" }}>
                {locale === "ru" ? "Стоимость" : "Narxi"}
              </h4>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <input type="number" placeholder={locale === "ru" ? "От" : "Dan"} style={{ width: "50%", padding: "10px", borderRadius: "8px", border: "1px solid var(--border)" }} />
                <span>-</span>
                <input type="number" placeholder={locale === "ru" ? "До" : "Gacha"} style={{ width: "50%", padding: "10px", borderRadius: "8px", border: "1px solid var(--border)" }} />
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "12px" }}>
                {locale === "ru" ? "Рейтинг" : "Reyting"}
              </h4>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", cursor: "pointer" }}>
                <input type="radio" name="rating" style={{ width: "18px", height: "18px", accentColor: "var(--color-primary)" }} />
                <span style={{ fontSize: "15px" }}>4.5 и выше</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", cursor: "pointer" }}>
                <input type="radio" name="rating" style={{ width: "18px", height: "18px", accentColor: "var(--color-primary)" }} />
                <span style={{ fontSize: "15px" }}>4.0 и выше</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", cursor: "pointer" }}>
                <input type="radio" name="rating" defaultChecked style={{ width: "18px", height: "18px", accentColor: "var(--color-primary)" }} />
                <span style={{ fontSize: "15px" }}>Любой</span>
              </label>
            </div>

          </div>
        </aside>

        {/* Main Feed */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
          {mockSpecialists.map(specialist => (
            <div key={specialist.id} style={{ 
              backgroundColor: "#fff", 
              borderRadius: "16px", 
              padding: "24px",
              border: "1px solid var(--border)",
              display: "flex",
              gap: "24px"
            }}>
              
              {/* Avatar */}
              <div style={{ 
                width: "120px", 
                height: "120px", 
                borderRadius: "12px", 
                backgroundColor: specialist.avatarColor,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
                fontWeight: 700,
                flexShrink: 0
              }}>
                {specialist.name.charAt(0)}
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <div>
                    <h2 style={{ fontSize: "22px", fontWeight: 700, color: "var(--color-primary)", marginBottom: "4px" }}>
                      {specialist.name}
                    </h2>
                    <div style={{ fontSize: "15px", color: "var(--color-text)", fontWeight: 500 }}>
                      {locale === "ru" ? specialist.specialtyRu : specialist.specialtyUz}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "18px", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px", justifyContent: "flex-end" }}>
                      <span style={{ color: "#fa2a48" }}>★</span> {specialist.rating}
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--color-muted)", marginTop: "2px" }}>
                      {specialist.reviewsCount} {locale === "ru" ? "отзывов" : "sharhlar"}
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: "17px", fontWeight: 600, marginBottom: "16px", color: "var(--color-text)" }}>
                  {locale === "ru" ? specialist.priceRu : specialist.priceUz}
                </div>

                <p style={{ fontSize: "15px", lineHeight: "1.5", color: "#333", marginBottom: "24px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {locale === "ru" ? specialist.descriptionRu : specialist.descriptionUz}
                </p>

                <div style={{ display: "flex", gap: "12px" }}>
                  <Link href={`/create-order?specialist=${specialist.id}`} className="btn-primary" style={{ padding: "12px 24px", fontSize: "15px", textDecoration: "none" }}>
                    {locale === "ru" ? "Предложить заказ" : "Buyurtma taklif qilish"}
                  </Link>
                  <button className="btn-outline" style={{ padding: "12px 24px", fontSize: "15px", border: "1px solid var(--border)", color: "var(--color-text)" }}>
                    {locale === "ru" ? "Написать сообщение" : "Xabar yozish"}
                  </button>
                </div>
              </div>

            </div>
          ))}

          {/* Pagination mockup */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "16px", gap: "8px" }}>
            <button style={{ width: "40px", height: "40px", borderRadius: "8px", border: "none", backgroundColor: "var(--color-primary)", color: "#fff", fontWeight: 600, cursor: "pointer" }}>1</button>
            <button style={{ width: "40px", height: "40px", borderRadius: "8px", border: "1px solid var(--border)", backgroundColor: "#fff", cursor: "pointer" }}>2</button>
            <button style={{ width: "40px", height: "40px", borderRadius: "8px", border: "1px solid var(--border)", backgroundColor: "#fff", cursor: "pointer" }}>3</button>
          </div>
        </main>
      </div>
    </div>
  );
}
