import {FC} from 'react';
import Footer from './Footer';
import Section from './widgets/Section';
import Hello from './pages/Hello';

const App: FC = () => (
  <>
    <Section>
      <Hello />
    </Section>
    {/* <Section>
      <Work />
    </Section>
    <Section>
      <Projects />
    </Section> */}
    {/* <Section>
      <Interests />
    </Section>
    <Section>
      <Family />
    </Section>
    <Section>
      <Religion />
    </Section>
    <Section>
      <Location />
    </Section> */}
    <Footer />
  </>
);

export default App;
