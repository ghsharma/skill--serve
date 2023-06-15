import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import "./App.css";
import Companies from "./components/companies/companies";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/><Hero/>
      </div>
         <Companies/>
    </div>
  );
}








export default App;
