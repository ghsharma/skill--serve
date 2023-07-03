import React from 'react';
import "./cart.css";

const Cart = () => {

    return (
        <section className="cart-wrapper">
            <div className="padding innerWidth flexCenter c-container">

                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contact</span>
                    <span className='primaryText'>Easy to Contact Us</span>
                    <span className='secondaryText'>We are always ready to help you by providing the best services<br />
                        believe a good balance to live can make your life better.</span>
</div>
                    <div className="flexCenter c-right">
                        <div className="c-image-container">
                            <img src="./contact.png"/>
                        </div>
                    </div>
                </div>
            </section>


    );
};

export default Cart;