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
import { Routes, Route } from 'react-router-dom';
import { Fragment } from "react";
import Addto from "./components/addto/addto";
import Timeline from "./components/timeline/timeline";
import Fade from 'react-reveal/Fade';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <Fragment>
            <div className="App">
              <div>
                <div className="white-gradient" />
                <Header />
                <Fade bottom distance="20%" duration={1500}>
                <Hero />
                </Fade>
                
              </div>
          <Fade bottom distance="10%" duration={1500}>
              <Companies />
          </Fade>
          <Fade right distance="10%" duration={1500}>
              <Residencies />
          </Fade>
              <Favour />
          <Fade bottom distance="10%" duration={1500}>
              <Value />
              <Timeline/>
              <Contact />
              <Getstarted />
              <Footer />
          </Fade>
             
          
              {/* <CustomCursor/> */}
            </div>

          </Fragment>
        } />

        <Route exact path='/addto' Component={Addto} />
        {/* <Route Component={Error}/> */}

      </Routes>
    </>
  );
}

export default App;
