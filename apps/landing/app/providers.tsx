"use client";

import React, { createContext, useContext, useState, type ReactNode } from "react";
import { ToastProvider } from "@bayesforce/ui";

interface AppContextType {
  isBookingModalOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const AppContext = createContext<AppContextType>({
  isBookingModalOpen: false,
  openBookingModal: () => {},
  closeBookingModal: () => {},
});

export const useApp = () => useContext(AppContext);

export const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isBookingModalOpen,
        openBookingModal: () => setIsBookingModalOpen(true),
        closeBookingModal: () => setIsBookingModalOpen(false),
      }}
    >
      <ToastProvider>
        {children}
      </ToastProvider>
    </AppContext.Provider>
  );
};

