import {createContext, use} from 'react';
import {AppWindow} from '../types/types';

export const WindowContext = createContext<
  | (AppWindow & {
      minimize?: VoidFunction;
      maximize?: VoidFunction;
      isMaximized?: boolean;
      unmaximize?: VoidFunction;
      close?: VoidFunction;
    })
  | null
>(null);

export const useWindowContext = () => {
  const context = use(WindowContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContext.Provider');
  }
  return context;
};
