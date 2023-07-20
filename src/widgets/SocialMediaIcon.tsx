import {FC, ReactElement} from 'react';

const SocialMediaIcon: FC<{href: string; icon: ReactElement}> = ({
  href,
  icon,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="hover:scale-150 hover:rotate-12 duration-100 text-6xl"
  >
    {icon}
  </a>
);

export default SocialMediaIcon;
