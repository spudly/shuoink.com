import {FC, ReactElement, ReactNode} from 'react';

const Tile: FC<{
  media: ReactElement;
  title: ReactNode;
  subtitle?: ReactNode;
  href: string;
  description?: ReactNode;
  cta?: ReactNode;
}> = ({media, title, subtitle, description, href, cta}) => (
  <li className="w-96 flex flex-col">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex flex-col w-full bg-gray-100 hover:bg-gray-200 text-center hover:scale-110 duration-100 border border-gray-200 hover:border-gray-300"
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
        {cta != null && <div className="text-center">{cta}</div>}
      </div>
    </a>
  </li>
);

export default Tile;
