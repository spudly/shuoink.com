import {createContext, use} from 'react';
import {ApplicationInstance} from '../types/types';

export const ShellContext = createContext<{
  runningApps: ApplicationInstance[];
  launchApp: (id: string) => void;
  killApp: (instanceId: string) => void;
} | null>(null);

export const useShellContext = () => {
  const context = use(ShellContext);

  if (!context) {
    throw new Error(
      'useShellContext must be used within an ShellContext.Provider'
    );
  }

  return context;
};
