import React from 'react';
import "./cart.css";


const Cart = () => {
    return (
        <section className="c-wrapper">
        <div className="padding innerWidth flexCenter c-container">

            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to Contact Us</span>
                </div>
        </div>


            <div className="flexCenter c-right">
                <div className="c-image-container">
                    <img src="./contact.png" alt='' />
                </div>
            </div>
    </section>
    );
};

export default Cart;
