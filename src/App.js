import About from './Components/About';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
