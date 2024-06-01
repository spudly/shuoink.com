import {FC, useEffect, useRef, useState} from 'react';
import {AppContext} from '../contexts/AppContext';
import {WindowContext} from '../contexts/WindowContext';
import {
  AppContext as AppContextType,
  AppWindow,
  Application,
  ApplicationInstance,
} from '../types/types';
import {Window} from './Window';
import {usePrevious} from '@react-hookz/web';

export const AppInstance: FC<{
  appInstance: ApplicationInstance;
  kill: VoidFunction;
}> = ({appInstance, kill}) => {
  const appContext: AppContextType = {
    ...appInstance,
  };

  return (
    <AppContext.Provider value={appContext}>
      <appInstance.component />
    </AppContext.Provider>
  );
};
