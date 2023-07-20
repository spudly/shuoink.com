import {FC, useState, useEffect} from 'react';

const START_YEAR = 2023;

const Footer: FC = () => {
  const [year, setYear] = useState(START_YEAR);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="h-screen w-full flex flex-col bg-white even:bg-gray-100 snap-start">
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-6xl text-center">
          That's it. That's all there is. There ain't no more.
        </p>
        <p className="text-6xl text-center">¯\_(ツ)_/¯</p>
      </div>

      <p className="p-2 text-center">
        Copyright &copy;{' '}
        {year === START_YEAR ? year : `${START_YEAR} - ${year}`} Stephen
        Sorensen
      </p>
    </footer>
  );
};

export default Footer;
