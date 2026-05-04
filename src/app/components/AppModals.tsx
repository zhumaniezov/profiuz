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
  const [authStep, setAuthStep] = useState<"phone" | "otp">("phone");
  const [otpCode, setOtpCode] = useState("");

  const cities = ["Ташкент", "Самарканд", "Бухара", "Наманган", "Андижан", "Фергана", "Хива"];

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    setCityModalOpen(false);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authPhone.trim().length >= 9) {
      setAuthStep("otp");
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode.length === 4) {
      login();
      setAuthModalOpen(false);
      setAuthStep("phone");
      setAuthPhone("");
      setOtpCode("");
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
        onClose={() => {
          setAuthModalOpen(false);
          setAuthStep("phone");
          setAuthPhone("");
          setOtpCode("");
        }}
        title={locale === "ru" 
          ? (authStep === "phone" ? "Вход и регистрация" : "Введите код") 
          : (authStep === "phone" ? "Kirish va ro'yxatdan o'tish" : "Kodni kiriting")}
      >
        {authStep === "phone" ? (
          <form onSubmit={handlePhoneSubmit}>
            <p style={{ color: "var(--color-muted)", fontSize: "15px", marginBottom: "16px", textAlign: "center" }}>
              {locale === "ru" 
                ? "Введите номер телефона, чтобы войти или зарегистрироваться" 
                : "Kirish yoki ro'yxatdan o'tish uchun telefon raqamingizni kiriting"}
            </p>
            <input
              type="tel"
              className="input-field"
              placeholder="+998"
              value={authPhone}
              onChange={(e) => setAuthPhone(e.target.value)}
              required
              autoFocus
            />
            <button type="submit" className="btn-primary btn-block" disabled={authPhone.length < 9}>
              {locale === "ru" ? "Продолжить" : "Davom etish"}
            </button>
            <p style={{ fontSize: "12px", color: "var(--color-muted)", marginTop: "16px", textAlign: "center" }}>
              {locale === "ru" 
                ? "Продолжая, вы соглашаетесь с условиями использования" 
                : "Davom etish orqali siz foydalanish shartlariga rozilik bildirasiz"}
            </p>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <p style={{ color: "var(--color-text)", fontSize: "15px", marginBottom: "8px", textAlign: "center" }}>
              {locale === "ru" ? "Код отправлен на номер" : "Kod quyidagi raqamga yuborildi"}
            </p>
            <p style={{ fontWeight: 600, fontSize: "17px", marginBottom: "24px", textAlign: "center" }}>
              {authPhone}
            </p>
            <input
              type="text"
              className="input-field"
              placeholder={locale === "ru" ? "Код из СМС" : "SMS kod"}
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value)}
              maxLength={4}
              required
              autoFocus
              style={{ textAlign: "center", fontSize: "24px", letterSpacing: "8px" }}
            />
            <button type="submit" className="btn-primary btn-block" disabled={otpCode.length < 4} style={{ marginTop: "16px" }}>
              {locale === "ru" ? "Войти" : "Kirish"}
            </button>
            <button 
              type="button" 
              onClick={() => setAuthStep("phone")}
              style={{ 
                background: "none", 
                border: "none", 
                color: "var(--color-primary)", 
                width: "100%", 
                marginTop: "16px", 
                cursor: "pointer",
                fontSize: "15px"
              }}
            >
              {locale === "ru" ? "Изменить номер" : "Raqamni o'zgartirish"}
            </button>
          </form>
        )}
      </Modal>
    </>
  );
}
