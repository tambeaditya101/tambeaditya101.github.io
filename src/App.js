import AnimatedBackground from './Components/AnimatedBackground';
import CursorTrail from './Components/CursorTrail';
import Github from './Components/Github';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Tools from './Components/Tools';
import About from './Components/about';
import Contact from './Components/contact';
import End from './Components/end';
import Header from './Components/header';
import Skills from './Components/skills';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function AppContent() {
  const { isDarkMode, colors } = useTheme();
  const currentColors = isDarkMode ? colors.dark : colors.light;

  return (
    <>
      <CursorTrail />
      <AnimatedBackground />
      <Header />
      <div
        className={`min-h-screen bg-gradient-to-br ${currentColors.primary} transition-all duration-500 relative`}
      >
        <main>
          <Home />
          <About />
          <Skills />
          <Tools />
          <Projects />
          <Github />
          <Contact />
          <End />
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
