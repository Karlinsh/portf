import './App.css';
import Cube from './Component/Cube/Cube';
import Test from './Component/Test/Test';
import Contact from './Page/Contact/Contact';
import Hero from './Page/Hero/Hero';
import Who from './Page/Who/Who';
import Works from './Page/Works/Works';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
