import React from 'react';
import "./navbar.css";
import logo from "../../src/assets/logo.png";
import contactImg from "../../src/assets/contact.png";
import {Link} from "react-scroll";

const Navbar = () => {

    return (

        <nav className={"navbar"}>

            <img src={logo} alt={logo} className={"logo"} />
            <div className={"desktopMenu"}>

                <Link className={"desktopMenuListItem"}>Home</Link>
                <Link className={"desktopMenuListItem"}>About</Link>
                <Link className={"desktopMenuListItem"}>Projects</Link>
            </div>
            <button className={"desktopMenuBtn"}>

                <img src={contactImg} alt={contactImg} className={"desktopMenuImg"}/> Contact me!

            </button>
        </nav>

    )

}

export default Navbar;