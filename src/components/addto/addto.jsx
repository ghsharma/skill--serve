import React from 'react';
import { BsFillChatDotsFill, BsFillHeartFill, BsFillStarFill } from "react-icons/bs";

import "./addto.css";

const Addto = () => {

    return (

        <>
            <section className="addto-wrapper">
                <div className="padding innerWidth flexCenter addto-container">

                    <div className="flexCenter a-top">

                        <div className="a-topleft">
                            <h1 className='head'>heading</h1>
                            <br />
                            <span className='secondaryText'>
                                <BsFillStarFill size={15} />million bookings
                            </span>
                            <br />
                            <div className=' guide'>
                                <button className='guidebtn'><BsFillHeartFill size={15} /> professional guide to</button>
                            </div>
                        </div>

                        <div className="flexColStart a-topright">
                            <div className="a-image-container">
                                <img src="./newlogo.png" />
                            </div>
                        </div>
                    </div>

                </div>

            </section>


            <div className='flexColStart deals'>

            <div className='deal card'>

                <div className='flexStart d-img-container'>

                </div>
                <div className='tag'>
                    <p>detail</p>
            </div>
                </div>
            </div>


        </>


    );
};

export default Addto;