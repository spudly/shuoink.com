import {FC} from 'react';
import {AppContext} from '../contexts/AppContext';
import {
  AppContext as AppContextType,
  ApplicationInstance,
} from '../types/types';

export const AppInstance: FC<{
  appInstance: ApplicationInstance;
}> = ({appInstance}) => {
  const appContext: AppContextType = {
    ...appInstance,
  };

  return (
    <AppContext.Provider value={appContext}>
      <appInstance.component />
    </AppContext.Provider>
  );
};
