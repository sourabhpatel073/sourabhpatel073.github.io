
import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Component/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { GithubStats } from './Pages/GithubStats';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import  Skills  from './Pages/Skills';

function App() {
  return (
    <Box color={"white"} bg="gray.800" className="App"> 
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <GithubStats />
      <Contact/>
    </Box>
  );
}

export default App;
