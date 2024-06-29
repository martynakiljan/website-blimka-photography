import "./styles/all.scss";
import Menu from "./components/Menu";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Process from "./components/Process";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="wrapper">
        <Header />
        <AboutMe />
        <Services />
        <Process />
        <Projects />
        <Instagram />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
