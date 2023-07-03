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
import Cart from "./components/cart/cart";
// import {Route,Switch} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
       <Route exact path='/'/>
       <Route exact path='/cart' Component={Cart}/>
       {/* <Route Component={Error}/> */}

    </Routes>

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

    </div>
    </>
  );
}

export default App;
