"use client";

import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useLanguage } from "../i18n/LanguageContext";
import { Modal } from "./Modal";
import { useRouter } from "next/navigation";

export function AppModals() {
  const {
    city,
    setCity,
    isCityModalOpen,
    setCityModalOpen,
    isAuthModalOpen,
    setAuthModalOpen,
    login,
  } = useAppContext();
  const { t, locale } = useLanguage();
  const router = useRouter();

  const [authPhone, setAuthPhone] = useState("");

  const cities = ["Ташкент", "Самарканд", "Бухара", "Наманган", "Андижан", "Фергана", "Хива"];

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    setCityModalOpen(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (authPhone.trim().length > 6) {
      login();
      router.push("/profile");
    }
  };

  return (
    <>
      <Modal
        isOpen={isCityModalOpen}
        onClose={() => setCityModalOpen(false)}
        title={locale === "ru" ? "Выберите город" : "Shaharni tanlang"}
      >
        <div className="modal-list">
          {cities.map((c) => (
            <div
              key={c}
              className={`modal-list-item ${city === c ? "active" : ""}`}
              onClick={() => handleCitySelect(c)}
            >
              {c}
            </div>
          ))}
        </div>
      </Modal>

      <Modal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
        title={locale === "ru" ? "Вход в кабинет" : "Kabinetga kirish"}
      >
        <form onSubmit={handleLogin}>
          <input
            type="tel"
            className="input-field"
            placeholder="+998"
            value={authPhone}
            onChange={(e) => setAuthPhone(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary btn-block">
            {locale === "ru" ? "Получить код" : "Kodni olish"}
          </button>
        </form>
      </Modal>
    </>
  );
}
