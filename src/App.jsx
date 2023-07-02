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
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div className="App">

  <BrowserRouter>
    
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

  </BrowserRouter>
    </div>
  );
}

export default App;
