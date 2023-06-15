import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import "./App.css";
import Companies from "./components/companies/companies";
import Residencies from "./components/Residencies/residencies";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/><Hero/>
      </div>
         <Companies/>
         <Residencies/>
    </div>
  );
}








export default App;
