import About from './Components/About';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
import Projects from './Components/Projects';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
