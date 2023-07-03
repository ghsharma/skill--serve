import React from "react";
import "./favour.css";


const Favour = () => {
    return (

        <section className='f-wrapper'>
            <div className='paddings innerWidth f-container'>
                <h2 className='orangeText'>Our New Category launches >>>>> </h2>
                <div class="scrolling-text">
                    <h1>Consultations_Purification_ApplianceRepairs&more</h1>
                </div>

                {/* <h1 className='mainline'>Consultations_Purification_Repairs&more</h1> */}
                <button className="button"> <a href="mailto:" ></a>Know more </button>
            </div>
        </section>
    );
};

export default Favour;
