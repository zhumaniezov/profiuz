"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  city: string;
  setCity: (city: string) => void;
  isCityModalOpen: boolean;
  setCityModalOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setAuthModalOpen: (open: boolean) => void;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState("Ташкент");
  const [isCityModalOpen, setCityModalOpen] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    setAuthModalOpen(false);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider
      value={{
        city,
        setCity,
        isCityModalOpen,
        setCityModalOpen,
        isAuthModalOpen,
        setAuthModalOpen,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
