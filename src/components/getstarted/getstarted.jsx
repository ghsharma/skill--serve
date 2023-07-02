import React from "react";
import "./getstarted.css";
import { Link } from "react-router-dom";


const Getstarted = () => {
    return(
        <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText">getstarted</span>
                <span className="secondaryText">"Start Your Journey: Discover Convenience and Quality in One Place."</span>

                <button className="button"> <a href="mailto:" ></a>Get Started</button>
                {/* <button className="button"> <Link to="">Get Started</Link></button> */}
            </div>
        </div>

        </section>
      
    );
};

export default Getstarted;