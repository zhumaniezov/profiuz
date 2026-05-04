"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import SpecialistHeader from "./SpecialistHeader";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check if we are on the specialist dashboard route
  const isSpecialistRoute = pathname?.startsWith("/specialist");

  return (
    <>
      {isSpecialistRoute ? <SpecialistHeader /> : <Header />}
      <main className="page-enter" style={{ minHeight: "100vh", background: isSpecialistRoute ? "#f2f2f5" : "transparent" }}>
        {children}
      </main>
      {!isSpecialistRoute && <Footer />}
    </>
  );
}
