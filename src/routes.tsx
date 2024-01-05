import {Root} from './layouts/Root';

export const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('./pages/Home')).default,
        }),
      },
      {
        path: 'calculators/tip',
        lazy: async () => ({
          Component: (await import('./pages/calculators/Tip')).default,
        }),
      },
      {
        path: 'calculators/mortgage',
        lazy: async () => ({
          Component: (await import('./pages/calculators/Mortgage')).default,
        }),
      },
    ],
  },
];
