import {FaFacebook, FaTwitter} from 'react-icons/fa';
import type {FC} from 'react';

const Footer: FC = () => (
  <footer className="text-center">
    <div className="flex justify-center items-center gap-2 p-2">
      <a href="https://www.facebook.com/stephenjohnsorensen/">
        <FaFacebook className="text-2xl text-[#4267B2]" />
      </a>
      <a href="https://twitter.com/shuoink">
        <FaTwitter className="text-2xl text-[#1DA1F2]" />
      </a>
    </div>
    <p className="p-2">Copyright &copy; Stephen Sorensen</p>
  </footer>
);

const App: FC = () => (
  <div className="flex flex-col justify-between min-h-screen">
    <main className="text-9xl text-center pt-48">Hello World!</main>
    <Footer />
  </div>
);

export default App;
