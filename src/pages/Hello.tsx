import {FC} from 'react';
import SocialMediaIcon from '../widgets/SocialMediaIcon';
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';

const Hello: FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-center min-w-0">
      <h1 className="text-6xl text-center">👋 Hey, I'm Stephen!</h1>
      <div className="flex justify-center items-center gap-8 p-8">
        <SocialMediaIcon
          href="https://www.facebook.com/stephenjohnsorensen/"
          icon={<FaFacebook className="text-[#4267B2]" />}
        />
        <SocialMediaIcon
          href="https://twitter.com/shuoink"
          icon={<FaXTwitter className="text-black" />}
        />
        <SocialMediaIcon
          href="https://www.linkedin.com/in/stephensorensen/"
          icon={<FaLinkedin className="text-[#0077B5]" />}
        />
        <SocialMediaIcon
          href="https://github.com/spudly"
          icon={<FaGithub className="text-[#000000]" />}
        />
        <SocialMediaIcon
          href="https://stackoverflow.com/users/163699/stephen-sorensen"
          icon={<FaStackOverflow className="text-[#F48024]" />}
        />
      </div>
    </div>
  );
};

export default Hello;
