import "./styles/all.scss";
import Menu from "./components/Menu";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
