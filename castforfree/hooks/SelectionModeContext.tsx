// SelectionModeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface SelectionModeContextType {
  selectionMode: number;
  setSelectionMode: (mode: number) => void;
}

// Create the context with a default value
const SelectionModeContext = createContext<SelectionModeContextType | undefined>(undefined);

export const SelectionModeProvider = ({ children }: { children: ReactNode }) => {
  const [selectionMode, setSelectionMode] = useState(0); // Default to "Wireless"

  return (
    <SelectionModeContext.Provider value={{ selectionMode, setSelectionMode }}>
      {children}
    </SelectionModeContext.Provider>
  );
};

// Custom hook to use the SelectionModeContext
export const useSelectionMode = () => {
  const context = useContext(SelectionModeContext);
  if (context === undefined) {
    throw new Error('useSelectionMode must be used within a SelectionModeProvider');
  }
  return context;
};

// Default export of the provider
export default SelectionModeProvider;