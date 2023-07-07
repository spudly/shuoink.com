import {FC, ReactElement, ReactNode} from 'react';
import Footer from './Footer';
import IceLogo from './logos/IceLogo';
import ShuoinkLogo from './logos/ShuoinkLogo';

const Tile: FC<{
  media: ReactElement;
  title: ReactNode;
  subtitle?: ReactNode;
  href: string;
  description?: ReactNode;
}> = ({media, title, subtitle, description, href}) => (
  <li className="w-96 flex flex-col">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex flex-col w-full bg-gray-100 hover:bg-gray-200 text-center hover:scale-110 duration-100 border border-gray-100 hover:border-gray-200"
    >
      <div className="bg-white w-full flex justify-center items-center">
        {media}
      </div>
      <div className="p-4 text-center flex-1 flex flex-col gap-4">
        <header className="font-bold">
          <h3>{title}</h3>
          <h4 className="text-sm">{subtitle}</h4>
        </header>
        <div className="text-left">{description}</div>
      </div>
    </a>
  </li>
);

const App: FC = () => (
  <div className="min-h-[100svh] flex flex-col gap-32">
    <main className="flex-1 flex flex-col justify-center items-center gap-32">
      <section>
        <h1 className="text-6xl text-center">Hey, I'm Stephen!</h1>
      </section>
      <section>
        <h2 className="text-center text-4xl pb-4">I work at:</h2>
        <ul className="flex gap-8 justify-around items-stretch">
          <Tile
            media={
              <div className="px-4 py-12">
                <IceLogo className="h-24" />
              </div>
            }
            title="Intercontinental Exchange, Inc."
            subtitle="Principal Engineer, Web Site Team"
            href="https://www.ice.com/"
            description="At ICE, I created (and continue to maintain) a CMS system used for multiple web sites & thousands of pages using TypeScript, React, and Node.js."
          />
          <Tile
            media={
              <div className="px-4 py-12">
                <ShuoinkLogo className="h-24" />
              </div>
            }
            title="Shuoink, LLC"
            subtitle="Founder, "
            description="At Shuoink, I do freelance JavaScript work, creating web sites for small businesses using TypeScript, React, and Node.js."
            href="https://www.shuoink.com"
          />
        </ul>
      </section>

      <section>
        <h2 className="text-center text-4xl pb-4">
          I help build these websites:
        </h2>
        <ul className="flex gap-8 justify-around flex-wrap md:max-w-[75vw]">
          <Tile
            media={<img src="/images/ice.png" alt="ice.com" className="h-48" />}
            title="Intercontinental Exchange, Inc."
            href="https://www.ice.com/"
          />
          <Tile
            media={
              <img src="/images/nyse.png" alt="nyse.com" className="h-48" />
            }
            title="New York Stock Exchange"
            href="https://www.nyse.com"
          />
          <Tile
            media={
              <img
                src="/images/ctaplan.png"
                alt="Consolidate Tape Association"
                className="h-48"
              />
            }
            title="Consolidated Tape Association"
            href="https://www.ctaplan.com"
          />
          <Tile
            media={
              <img src="/images/esignal.png" alt="eSignal" className="h-48" />
            }
            title="eSignal"
            href="https://www.esignal.com"
          />
          <Tile
            media={
              <img
                src="/images/globalotc.png"
                alt="GlobalOTC"
                className="h-48"
              />
            }
            title="GlobalOTC"
            href="https://www.globalotc.com"
          />
          <Tile
            media={
              <img src="/images/mersinc.png" alt="Mers" className="h-48" />
            }
            title="Mers"
            href="https://www.mersinc.org"
          />
        </ul>
      </section>
    </main>
    <Footer />
  </div>
);

export default App;
