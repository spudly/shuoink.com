import {
  FcCalculator,
  FcDeleteDatabase,
  FcDocument,
  FcRightUp,
} from 'react-icons/fc';
import {Application} from '../../types/types';
import {lazy} from 'react';

export const APPS = {
  welcome: {
    id: 'welcome',
    name: 'Welcome',
    icon: <FcDocument />,
    component: lazy(() => import('./Welcome')),
  },

  calculator: {
    id: 'calculator',
    name: 'Calculator',
    icon: <FcCalculator />,
    component: lazy(() => import('./Calculator')),
  },
  launcher: {
    id: 'launcher',
    name: 'Launcher',
    icon: <FcRightUp />,
    component: lazy(() => import('./Launcher')),
  },
  appManager: {
    id: 'appManager',
    name: 'App Manager',
    icon: <FcDeleteDatabase />,
    component: lazy(() => import('./AppManager')),
  },
} satisfies Record<string, Application>;
