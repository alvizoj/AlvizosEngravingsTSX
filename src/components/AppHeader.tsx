import React from "react";
import "../CSS/AppHeader.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AppHeader() {
    let path: string = useLocation().pathname;
    //Use location.pathname for active buttons.

    function openHamburgerMenu() {
        let NavbarElement: HTMLElement = document.getElementById(
            "myTopnav"
        ) as HTMLElement;
        if (NavbarElement.className === "topnav") {
            NavbarElement.className += " responsive";
        } else {
            NavbarElement.className = "topnav";
        }
    }

    return (
        <header className="topnav" id="myTopnav">
            <Link id="headerTitleText" to="/home">
                <h1 className="HeaderTitleText">Alvizo's Engravings</h1>
            </Link>
            <div className="Flex">
                <Link
                    id="homeButton"
                    to="/home"
                    className={path === "/home" ? "activeButton" : ""}
                >
                    Home
                </Link>

                <Link
                    to="/gallery"
                    className={path === "/gallery" ? "activeButton" : ""}
                >
                    Gallery
                </Link>
            </div>

            <a className="icon" onClick={openHamburgerMenu}>
                <i className="fa fa-bars"></i>
            </a>
        </header>
    );
}
