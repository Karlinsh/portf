import { ToastContainer } from 'react-toastify';
import './App.css';
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
