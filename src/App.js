import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
