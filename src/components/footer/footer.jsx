import React from "react";
import "./footer.css";

const Footer = () => {

    return(
        <section className="fo-wrapper">
            <div className="paddings innerWidth flexCenter fo-container">

                {/* left side */}

                <div className="flexColStart fo-left">
                    <img src="logonew.png" alt="" width={180}/>

                    <span className="secondaryText">
                        Our vision is to make all people <br/>
                        the best place to love for them.
                    </span>
                </div>

                    <div className="flexColStart fo-right">
                        <span className="primaryText">Information & Adress</span>
                        <span className="secondaryText">145, india fl,delhi</span>

                        <div className="flexCenter fo-menu">
                            <span>services</span>
                            <span>factors</span>
                            <span>Contact</span>
                            <span>get started</span>
                        </div>
                    </div>
            </div>

        </section>
    );
}

export default Footer;