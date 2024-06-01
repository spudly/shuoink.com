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

  const prevWindowsLength = usePrevious(windows)?.length;
  const windowsLength = windows.length;
  const {killApp} = shellContext;
  useEffect(() => {
    if (prevWindowsLength && !windowsLength) {
      killApp(appContext.instanceId);
    }
  }, [prevWindowsLength, windowsLength, killApp, appContext.instanceId]);

  return [windows, openWindow, closeWindow] as const;
};
