import {FC} from 'react';
import Tile from '../widgets/Tile';
import IceLogo from '../logos/IceLogo';
import ShuoinkLogo from '../logos/ShuoinkLogo';

const Work: FC = () => (
  <div className="flex-1 flex flex-col gap-16 justify-center items-center">
    <h2 className="text-center text-4xl pb-4">I work at:</h2>
    <ul className="flex flex-col md:flex-row gap-16 justify-around items-stretch">
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
        cta={
          <button
            className="border bg-blue-900 duration-100 hover:scale-105 py-2 px-4 text-lg rounded text-white"
            onClick={() => {
              const go = confirm(
                "Oops, I haven't implemented this yet. For now, just send me a message on LinkedIn."
              );
              if (go) {
                window.open('https://www.linkedin.com/in/stephensorensen/');
              }
            }}
          >
            Let's Talk
          </button>
        }
      />
    </ul>
    <p>
      I'm always open to new opportunities.{' '}
      <a
        href="https://www.linkedin.com/in/stephensorensen/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-bold text-blue-900 underline inline-block"
      >
        Hit me up on LinkedIn
      </a>{' '}
      and we can chat!
    </p>
  </div>
);

export default Work;
