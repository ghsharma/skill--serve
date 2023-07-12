import React, { useState } from "react";
    import { useAuth0 } from "@auth0/auth0-react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./header.css";


const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles = (menuOpened) => {
        if(document.documentElement.clientWidth <= 800)
        {
            return {right: !menuOpened && "-200%"}
        }
    }
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, logout } = useAuth0();

    return (


        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logonew.png" alt="logo" width={200} />

        <OutsideClickHandler 
        onOutsideClick={()=>
        {
            setMenuOpened(false);
        }}>

                <div className="flexCenter h-menu"
                style={getMenuStyles(menuOpened)}>
                    <a href="">Our Services</a>
                    <a href="">Values</a>
                    <a href="">get started</a>
                    <a>{isAuthenticated && <a>{user.name}</a>}</a>
                    {isAuthenticated ? (
                        < button className="button" onClick={() => logout({ returnTo: window.location.origin })}>
                            LOG OUT
                        </button>

                    ) : (
                        <button className="button">
                            <a href="">LOGIN</a>
                        </button>

                    )
                    }
                </div>
        </OutsideClickHandler>
                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>

        </section>
    );
};

export default Header;
