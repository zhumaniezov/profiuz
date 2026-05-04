"use client";

import { useLanguage } from "../i18n/LanguageContext";

const reviewsData = [
  { nameRu: "Дилноза", nameUz: "Dilnoza", rating: 4.97, count: 49, serviceRu: "английский язык, подготовка к IELTS", serviceUz: "ingliz tili, IELTS tayyorgarlik" },
  { nameRu: "Бахтиёр", nameUz: "Baxtiyor", rating: 4.89, count: 31, serviceRu: "ремонт ванной комнаты, укладка плитки", serviceUz: "hammom ta'miri, plitka yotqizish" },
  { nameRu: "Малика", nameUz: "Malika", rating: 5.0, count: 67, serviceRu: "макияж на свадьбу, вечерний макияж", serviceUz: "to'y uchun makiyaj, kechki makiyaj" },
  { nameRu: "Азиз", nameUz: "Aziz", rating: 4.92, count: 85, serviceRu: "создание сайтов, веб-разработка", serviceUz: "sayt yaratish, veb-dasturlash" },
  { nameRu: "Нодира", nameUz: "Nodira", rating: 4.95, count: 123, serviceRu: "математика, подготовка к ЕНТ", serviceUz: "matematika, DTM tayyorgarlik" },
  { nameRu: "Шерзод", nameUz: "Sherzod", rating: 4.81, count: 44, serviceRu: "фитнес-тренировки, персональный тренер", serviceUz: "fitnes mashg'ulotlari, shaxsiy trener" },
];

export default function Reviews() {
  const { locale } = useLanguage();

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-inner">
        <h2 className="section-title" id="reviews-title">
          {locale === "ru" ? "Отзывы" : "Sharhlar"}
        </h2>
        <p className="reviews-subtitle">
          {locale === "ru" 
            ? "854 381 отзыв оставили клиенты за последние 12 месяцев. Из них 827 153 — положительные." 
            : "Oxirgi 12 oy ichida mijozlar 854 381 sharh qoldirdilar. Ulardan 827 153 tasi — ijobiy."}
        </p>

        <div className="reviews-grid">
          {reviewsData.map((review, i) => (
            <div className="review-card" key={i} id={`review-card-${i}`}>
              <div className="review-head">
                <div className="review-avatar">
                  {(locale === "ru" ? review.nameRu : review.nameUz).charAt(0)}
                </div>
                <div>
                  <div className="review-profile-name">{locale === "ru" ? review.nameRu : review.nameUz}</div>
                  <div className="review-profile-rating">
                    <span className="review-stars">{"★".repeat(Math.round(review.rating))}</span> {review.rating} · {review.count} {locale === "ru" ? "отзывов" : "sharh"}
                  </div>
                </div>
              </div>
              <p className="review-text">
                {locale === "ru" ? review.serviceRu : review.serviceUz}
              </p>
              <div className="review-meta">
                {locale === "ru" ? "Оценка: Пять с плюсом" : "Baho: A'lo"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
