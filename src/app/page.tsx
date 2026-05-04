"use client";

import Hero from "./components/Hero";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import { AppModals } from "./components/AppModals";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <Reviews />
      <CTA />
      <AppModals />
    </>
  );
}
