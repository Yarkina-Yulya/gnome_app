import logo from "./logo.svg";
import sleep from "./assets/images/sleep.jpg";
import "./App.css";

const Logo = () => {
  return <img src={logo} className="App-logo" alt="logo" />;
};

const Title = () => {
  return (
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
};
const Link = () => {
  return (
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Learn React
    </a>
  );
};

const Header = () => {
  return <a href="/">Hi</a>;
};

const Img = () => {
  return <img src={sleep} alt="sleep" />;
};
export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Title />
        <Link />
        <Header />
        <Img />
      </header>
    </div>
  );
}

//export default App;
