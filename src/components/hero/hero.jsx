import React from "react";
import "./hero.css";
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from "react-countup";

const Hero = () => {
    return (

        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <h1>"Empowering<br/> services with<br/>श्रमिकMANTRA"</h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span  className="secondaryText">Unleashing Service Excellence with a team of skilled professionals,</span>
                        <span  className="secondaryText"> state-of-the-art techniques, and a commitment to integrity</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={30} />
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span> 
                            </span>
                            <span className="secondaryText">
                                    Users
                            </span>
                        </div>

                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={5950} end={6000} duration={4}/>
                                <span>+</span> 
                            </span>
                            <span  className="secondaryText">
                                    Happy Customers.
                            </span>
                        </div>
 
                        <div className="flexColStart stat">
                            <span>
                                <CountUp end={30} duration={4}/> 
                                <span>+</span>
                            </span>
                            <span  className="secondaryText">
                                    Award winnings.
                            </span>
                        </div>
                    </div>

                </div>

                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./construction.png" alt=""></img>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero;