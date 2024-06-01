import {FC} from 'react';
import {useEffectOnce} from '../../hooks/useEffectOnce';
import {useAppWindows} from '../../hooks/useAppWindows';
import {Window} from '../Window';
import SocialMediaIcon from '../SocialMediaIcon';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';

const Welcome: FC = () => {
  const [windows, openWindow, closeWindow] = useAppWindows();

  useEffectOnce(openWindow);

  return (
    <div>
      {windows.map(window => (
        <Window
          key={window.id}
          appWindow={window}
          close={() => closeWindow(window.id)}
        >
          <div className="flex-1 flex flex-col justify-center w-full h-screen gap-8">
            <h1 className="text-6xl text-center">👋 Hey, I&rsquo;m Stephen!</h1>
            <p className="text-center">
              I made this. I think it&rsaquo;s kinda cool. Have a look around.
            </p>
            <div className="flex justify-center items-center gap-8 p-8">
              <SocialMediaIcon
                href="https://www.facebook.com/stephenjohnsorensen/"
                icon={<FaFacebook className="text-[#4267B2]" />}
              />
              <SocialMediaIcon
                href="https://twitter.com/shuoink"
                icon={
                  <div className="relative">
                    <FaTwitter className="text-[#1DA1F2] absolute left-0 top-0 scale-75 -z-10" />
                    <FaXTwitter className="text-black" />
                  </div>
                }
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
              <SocialMediaIcon
                href="https://www.instagram.com/stephenjohnsorensen/"
                icon={<FaInstagram className="text-[#E4405F]" />}
              />
              <SocialMediaIcon
                href="https://www.tiktok.com/@stephenjohnsorensen"
                icon={<FaTiktok className="text-[#000000]" />}
              />
            </div>
          </div>
        </Window>
      ))}
    </div>
  );
};

export default Welcome;
