import Home from './pages/Home';
import {Root} from './layouts/Root';
import TipCalculator from './pages/calculators/Tip';

export const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'calculators/tip',
        element: <TipCalculator />,
      },
    ],
  },
];
