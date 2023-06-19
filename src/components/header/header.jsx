import React from "react";
import "./header.css";

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logonew.png" alt="logo" width={200} />

                <div className="flexCenter h-menu">
                    <a href="">Our Services</a>
                    <a href="">Values</a>
                    <a href="">get started</a>
                    <button className="button">
                        <a href="">LOGIN</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Header;
