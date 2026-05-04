"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../i18n/LanguageContext";

export default function SpecialistHeader() {
  const pathname = usePathname();
  const { locale } = useLanguage();

  const navLinks = [
    { href: "/specialist", labelRu: "Новые заказы", labelUz: "Yangi buyurtmalar" },
    { href: "/specialist/my-orders", labelRu: "Мои заказы", labelUz: "Mening buyurtmalarim" },
    { href: "/specialist/profile", labelRu: "Анкета", labelUz: "Anketa" },
    { href: "/specialist/balance", labelRu: "Счёт", labelUz: "Hisob" },
  ];

  return (
    <header style={{ 
      backgroundColor: "#fff", 
      borderBottom: "1px solid var(--border)", 
      position: "sticky", 
      top: 0, 
      zIndex: 100 
    }}>
      <div style={{
        maxWidth: "1160px",
        margin: "0 auto",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <Link href="/specialist" className="header-logo" style={{ textDecoration: "none" }}>
            <span className="logo-profi" style={{ color: "var(--color-primary)" }}>профи</span>
            <span className="logo-dot" style={{ color: "var(--color-primary)", margin: "0 -1px", position: "relative", top: "-2px" }}>:</span>
            <span className="logo-uz" style={{ color: "var(--color-primary)", fontSize: "0.8em", marginLeft: "2px" }}>ру</span>
            <span style={{ marginLeft: "8px", color: "var(--color-muted)", fontSize: "14px", fontWeight: 400 }}>для специалистов</span>
          </Link>

          <nav style={{ display: "flex", gap: "24px", height: "64px" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: isActive ? "var(--color-primary)" : "var(--color-text)",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: "15px",
                    borderBottom: isActive ? "3px solid var(--color-primary)" : "3px solid transparent",
                    paddingTop: "3px", // to offset the border visually
                    transition: "color 0.2s"
                  }}
                >
                  {locale === "ru" ? link.labelRu : link.labelUz}
                </Link>
              );
            })}
          </nav>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "15px", fontWeight: 600 }}>0 сум</div>
            <div style={{ fontSize: "12px", color: "var(--color-muted)" }}>Пополнить</div>
          </div>
          
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "15px", fontWeight: 600 }}>5.0 ★</div>
            <div style={{ fontSize: "12px", color: "var(--color-muted)" }}>Рейтинг</div>
          </div>

          <div style={{ 
            width: "36px", 
            height: "36px", 
            borderRadius: "50%", 
            backgroundColor: "var(--color-light)", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            cursor: "pointer"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
