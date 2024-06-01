import {useEffect, useState} from 'react';
import {AppWindow} from '../types/types';
import {useAppContext} from '../contexts/AppContext';
import {usePrevious} from '@react-hookz/web';
import {useShellContext} from '../contexts/ShellContext';

export const useAppWindows = () => {
  const [windows, setWindows] = useState<AppWindow[]>([]);
  const shellContext = useShellContext();
  const appContext = useAppContext();

  const openWindow = () => {
    const id = crypto.randomUUID();
    setWindows(prev => [
      ...prev,
      {
        id,
        name: `${appContext.name}`,
      },
    ]);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(window => window.id !== id));
  };

  const prevWindows = usePrevious(windows);
  useEffect(() => {
    if (prevWindows?.length && !windows.length) {
      shellContext.killApp(appContext.instanceId);
    }
  }, [prevWindows, windows, shellContext.killApp]);

  return [windows, openWindow, closeWindow] as const;
};
