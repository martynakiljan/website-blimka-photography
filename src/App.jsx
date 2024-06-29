import "./styles/all.scss";
import Menu from "./components/Menu";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Process from "./components/Process";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="wrapper">
        <Header />
        <AboutMe />
        <Services />
        <Process />
      </div>
    </div>
  );
}

export default App;
