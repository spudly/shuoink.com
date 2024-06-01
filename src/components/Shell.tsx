'use client';
import {useState} from 'react';
import {ApplicationInstance} from '../types/types';
import {AppInstance} from './AppInstance';
import {APPS} from './apps';
import {ShellContext} from '../contexts/ShellContext';
import {ZContextProvider} from '../contexts/ZContext';
import {Desktop} from './Desktop';
import {TaskBar} from './TaskBar';
import {useEffectOnce} from '../hooks/useEffectOnce';

export const Shell = () => {
  const [runningApps, setRunningApps] = useState<ApplicationInstance[]>([]);

  const launchApp = (appId: string) => {
    const instanceId = crypto.randomUUID();
    const app = APPS[appId as keyof typeof APPS];
    if (!app) {
      return;
    }
    setRunningApps(prev => [
      ...prev,
      {
        ...app,
        instanceId,
      },
    ]);
  };

  const killApp = (instanceId: string) => {
    setRunningApps(apps => apps.filter(app => app.instanceId !== instanceId));
  };

  const shellContext = {
    runningApps,
    launchApp,
    killApp,
  };

  useEffectOnce(() => {
    launchApp('welcome');
  });

  return (
    <ShellContext.Provider value={shellContext}>
      <Desktop />
      <TaskBar />
      <ZContextProvider>
        {runningApps.map(appInstance => (
          <AppInstance key={appInstance.instanceId} appInstance={appInstance} />
        ))}
      </ZContextProvider>
    </ShellContext.Provider>
  );
};
