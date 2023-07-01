
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./cart.css";

const Cart = () => {
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, logout } = useAuth0();

    return (

        <section className="c-wrapper">

            
        </section>

    );
};

export default Cart;
