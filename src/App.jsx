import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import "./App.css";
import Companies from "./components/companies/companies";
import Residencies from "./components/Residencies/residencies";
import Value from "./components/value/value";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/><Hero/>
      </div>
         <Companies/>
         <Residencies/>
         <Value/>
    </div>
  );
}








export default App;
