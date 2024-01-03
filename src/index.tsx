import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import reactGA from 'react-ga';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

reactGA.initialize('G-DEMCT5610Z');
