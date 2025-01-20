/*
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
*/
import React, { createContext, useContext, useState } from 'react';

// Create the Context
const TextContext = createContext({
  text: '', // Default value
  setText: (value: string) => {}, // Placeholder function
});

// Create a provider component
export const TextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [text, setText] = useState('');

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};

// Hook to use the context
export const useTextContext = () => {
  return useContext(TextContext);
};
