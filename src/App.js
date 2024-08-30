import './App.css';

import { Home } from './pages/Home.js'
import { About } from './pages/AboutMe.js'
import { Skills } from './pages/Skills.js'
import { Contact } from './pages/Contact.js'
import { ExpEd } from './pages/Exp&Ed.js'
import { Navbar } from './pages/components/Navbar.js'
import { Footer } from './pages/Footer.js'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <ExpEd />
      <Contact />
      <Footer/>
     
    </div>
  );
}

export default App;
