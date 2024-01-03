import {FC} from 'react';
import clsx from 'clsx';

const Section: FC<JSX.IntrinsicElements['section']> = ({
  children,
  className,
}) => (
  <section
    className={clsx(
      'h-screen w-full flex flex-col bg-white even:bg-gray-100',
      className
    )}
  >
    {children}
  </section>
);

export default Section;
