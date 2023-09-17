import "./App.css";
import Home from "./Components/Home";
import About from "./Components/about";
import Header from "./Components/header";
import Skills from "./Components/skills";
import Projects from "./Components/Projects";
import Github from "./Components/Github";
import Contact from "./Components/contact";
import End from "./Components/end";

function App() {
  return (
    <div className="body">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact />
      <End />
    </div>
  );
}

export default App;
