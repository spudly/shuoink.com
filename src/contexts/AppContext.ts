import {createContext, use} from 'react';
import {AppContext as AppContextType} from '../types/types';

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = use(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContext.Provider');
  }
  return context;
};
