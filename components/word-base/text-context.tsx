import React, { createContext, useContext, useState } from "react";
//import infomation from ''
type TextContextType = {
  text_: string;
  setText_: (text: string) => void;
};

const TextContext = createContext<TextContextType | undefined>(undefined);

export const TextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [text_, setText_] = useState("");

  return (
    <TextContext.Provider value={{ text_, setText_ }}>
      {children}
    </TextContext.Provider>
  );
};

export const useTextContext = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error("There is nothing");
  }
  return context;
};
