import React from 'react';
import "./cart.css";


const Cart = () => {
    return (
        <section className="cart-wrapper">
        <div className="padding innerWidth flexCenter c-container">

            <div className="flexColStart c-left">
                <span className='orangeText'>this is the cart</span>
                <span className='primaryText'>your orders</span>
                </div>
        </div>


            <div className="flexCenter cart-right">
                <div className="c-image-container">
                    {/* <img src="./contact.png" /> */}
                </div>
            </div>
    </section>
    );
};

export default Cart;
