import {FC} from 'react';
import Footer from './Footer';
import IceLogo from './logos/IceLogo';
import ShuoinkLogo from './logos/ShuoinkLogo';

const App: FC = () => (
  <div className="min-h-[100svh] flex flex-col">
    <header>
      <h1 className="text-6xl text-center">Stephen Sorensen</h1>
    </header>
    <main className="flex-1 flex flex-col justify-center items-center gap-16">
      <section>
        <img
          src="/under construction.gif"
          alt="under construction"
          className="w-[90%] max-h-full"
        />
      </section>

      <section>
        <p className="text-center pb-4">I work at:</p>
        <ul className="flex gap-8 justify-around">
          <li>
            <a
              href="https://www.ice.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IceLogo height={50} />
            </a>
          </li>
          <li>
            <a
              href="https://www.shuoink.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShuoinkLogo height={50} />
            </a>
          </li>
        </ul>
      </section>
    </main>
    <Footer />
  </div>
);

export default App;
