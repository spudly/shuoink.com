import {FC} from 'react';
import Tile from '../widgets/Tile';

const Projects: FC = () => (
  <div className="flex-1 flex flex-col gap-16 justify-center items-center">
    <h2 className="text-center text-4xl pb-4">
      The CMS system I built is used to create and host these public web sites:
    </h2>
    <ul className="flex flex-col md:flex-row gap-8 justify-around flex-wrap md:max-w-[75vw]">
      <Tile
        media={<img src="/images/ice.png" alt="ice.com" className="h-48" />}
        title="Intercontinental Exchange, Inc."
        href="https://www.ice.com/"
      />
      <Tile
        media={<img src="/images/nyse.png" alt="nyse.com" className="h-48" />}
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
        media={<img src="/images/esignal.png" alt="eSignal" className="h-48" />}
        title="eSignal"
        href="https://www.esignal.com"
      />
      <Tile
        media={
          <img src="/images/globalotc.png" alt="GlobalOTC" className="h-48" />
        }
        title="GlobalOTC"
        href="https://www.globalotc.com"
      />
      <Tile
        media={<img src="/images/mersinc.png" alt="Mers" className="h-48" />}
        title="Mers"
        href="https://www.mersinc.org"
      />
    </ul>
  </div>
);

export default Projects;
