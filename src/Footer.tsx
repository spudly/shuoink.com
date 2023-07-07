import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from 'react-icons/fa';
import {FC} from 'react';

const Footer: FC = () => (
  <footer className="text-center">
    <div className="flex justify-center items-center gap-2 p-2">
      <a
        href="https://www.facebook.com/stephenjohnsorensen/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaFacebook className="text-2xl text-[#4267B2]" />
      </a>
      <a
        href="https://twitter.com/shuoink"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaTwitter className="text-2xl text-[#1DA1F2]" />
      </a>
      <a
        href="https://www.linkedin.com/in/stephensorensen/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaLinkedin className="text-2xl text-[#0077B5]" />
      </a>
      <a
        href="https://github.com/spudly"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-2xl text-[#000000]" />
      </a>
      <a
        href="https://stackoverflow.com/users/163699/stephen-sorensen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaStackOverflow className="text-2xl text-[#F48024]" />
      </a>
    </div>
    <p className="p-2">Copyright &copy; Stephen Sorensen</p>
  </footer>
);

export default Footer;
