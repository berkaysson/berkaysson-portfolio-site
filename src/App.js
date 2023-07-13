import About from './Components/About';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import styled  from 'styled-components';

const AppWrapper = styled.main`

`;

const App = () => {
  return (
    <AppWrapper>
      <Navigation />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </AppWrapper>
  );
}

export default App;
