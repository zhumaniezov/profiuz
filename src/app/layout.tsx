import type { Metadata } from "next";
import { LanguageProvider } from "./i18n/LanguageContext";
import { AppProvider } from "./context/AppContext";
import LayoutWrapper from "./components/LayoutWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROFI.UZ — сервис поиска специалистов в Узбекистане",
  description:
    "Найдите проверенных специалистов для любой задачи: репетиторы, мастера по ремонту, мастера красоты, IT-фрилансеры и многое другое. PROFI.UZ — агрегатор услуг в Узбекистане.",
  keywords: "специалисты, услуги, Узбекистан, Ташкент, репетиторы, ремонт, красота, фриланс, profi.uz",
  openGraph: {
    title: "PROFI.UZ — найдите своего специалиста",
    description: "Агрегатор услуг в Узбекистане. Проверенные профи для любой задачи.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <LanguageProvider>
          <AppProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </AppProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
