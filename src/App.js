import Home from "./components/ Home"
import Navbar from "./components/Navbar"
import './App.css';
import Projects from "./components/Projects";
import { About } from "./components/About";
function App() {
  return (
    <div className="App">
         <Navbar/>
       <Home/>
       <Projects/>
       <About/>
       
    </div>
  );
}

export default App;
