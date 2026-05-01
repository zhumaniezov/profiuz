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
  const { t, locale } = useLanguage();

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-inner">
        <div className="reviews-header">
          <h2 className="section-title" id="reviews-title">{t("reviewsTitle")}</h2>
          <div className="reviews-stats">
            <div className="reviews-stat-big">
              <span className="reviews-stat-number">{t("reviewsCount")}</span>
              <span className="reviews-stat-label">{t("reviewsSubtitle")}</span>
            </div>
            <div className="reviews-stat-positive">
              <span className="reviews-stat-percent">{t("positivePercent")}</span>
              <span className="reviews-stat-label">{t("positiveReviews")}</span>
            </div>
          </div>
        </div>
        <div className="reviews-grid">
          {reviewsData.map((review, i) => (
            <div className="review-card" key={i} id={`review-card-${i}`}>
              <div className="review-card-top">
                <div className="review-avatar">
                  {(locale === "ru" ? review.nameRu : review.nameUz).charAt(0)}
                </div>
                <div className="review-meta">
                  <span className="review-name">
                    {locale === "ru" ? review.nameRu : review.nameUz}
                  </span>
                  <div className="review-rating">
                    <span className="review-stars">
                      {"★".repeat(Math.floor(review.rating))}
                      {review.rating % 1 > 0 ? "☆" : ""}
                    </span>
                    <span className="review-rating-num">{review.rating}</span>
                    <span className="review-count">· {review.count} {locale === "ru" ? "отзывов" : "sharh"}</span>
                  </div>
                </div>
              </div>
              <p className="review-service">
                {locale === "ru" ? review.serviceRu : review.serviceUz}
              </p>
              <div className="review-badge">
                {locale === "ru" ? "Пять с плюсом" : "A'lo baho"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
