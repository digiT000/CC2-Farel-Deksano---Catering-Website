import { createContext, useContext, useState } from "react";

interface LanguageProviderProps {
  children: React.ReactNode;
}

interface LanguageProps {
  language: string;
  changeLanguage: (language: string) => void;
}

// Creating a context --> this context will accept a string
const LanguageContext = createContext<LanguageProps | undefined>(undefined);

// a function for we use to get the props of the provider

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("ThemeProvider must be used within a ThemeProvider");
  }
  return context;
}

// Wrap the component
function LanguageProvider({ children }: LanguageProviderProps) {
  //   Control the state of the language
  const [language, setLanguage] = useState<string>("en");

  //   To handle the changes of the language

  function changeLanguage(newLanguage: string) {
    setLanguage(newLanguage);
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
