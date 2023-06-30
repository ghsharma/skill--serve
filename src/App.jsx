import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import "./App.css";
import Companies from "./components/companies/companies";
import Residencies from "./components/Residencies/residencies";
import Value from "./components/value/value";
import Booking from "./components/booking/booking";
import Favour from "./components/Favour/favour";
import Contact from "./components/contact/contact";
import Getstarted from "./components/getstarted/getstarted";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/><Hero/>
      </div>
         <Companies/>
         <Residencies/>
         <Favour/>
         <Value/>
         <Contact/>
         <Getstarted/>
         <Footer/>

         {/* <Booking/> */}
    </div>
  );
}

export default App;
