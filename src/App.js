import Home from "./components/ Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Projects from "./components/Projects";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
