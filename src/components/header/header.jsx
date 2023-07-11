import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {BiMenuAltRight} from "react-icons/bi";
import "./header.css";


const Header = () => {
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, logout } = useAuth0();

    return (


        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logonew.png" alt="logo" width={200} />

                <div className="flexCenter h-menu">
                    <a href="">Our Services</a>
                    <a href="">Values</a>
                    <a href="">get started</a>
                    <a>{isAuthenticated && <a>{user.name}</a>}</a>
                    {isAuthenticated ? (
                        < button className="button" onClick={() => logout({ returnTo: window.location.origin })}>
                            LOG OUT
                        </button>

                    ) : (
                        <button className="button" onClick={() => loginWithRedirect()}>
                            <a href="">LOGIN</a>
                        </button>

                    )
                    }
                </div> 
            </div>
            <div className="menu-icon">
                <BiMenuAltRight size={30}/>
            </div>
        </section>
    );
};

export default Header;
