import {FC} from 'react';
import Footer from './Footer';

const App: FC = () => (
  <div className="min-h-screen flex flex-col">
    <header>
      <h1 className="text-6xl text-center">
        Stephen Sorensen's Personal Web Portal
      </h1>
    </header>
    <main className="flex-1 flex flex-col justify-center items-center">
      <img
        src="/under construction.gif"
        alt="under construction"
        className="w-[90%] max-h-full"
      />
      <caption>Under Construction</caption>
    </main>
    <Footer />
  </div>
);

export default App;
