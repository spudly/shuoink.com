import {useEffect} from 'react';
import Footer from '../Footer';
import Section from '../widgets/Section';
import {Outlet, useLocation} from 'react-router-dom';
import ReactGA from 'react-ga';

export const Root = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <Section>
        <Outlet />
      </Section>
      <Footer />
    </>
  );
};
