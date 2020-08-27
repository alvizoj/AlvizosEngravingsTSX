import React from "react";
import "../CSS/AppHeader.css";
import { Link } from "react-router-dom";
import StyledLink from "./StyledLink";
import { useLocation } from "react-router-dom";

export default function AppHeader() {
    let location: string = useLocation().pathname;
    //Use location.pathname for active buttons.
    console.log(location);
    let isHome: boolean = location == "/home" ? true : false;

    console.log(isHome);

    return (
        <header className="Header">
            <h1 className="HeaderTitleText">
                <Link id="titleText" to="/home">
                    Alvizo's Engravings
                </Link>
            </h1>
            <Link
                to="/home"
                className={location == "/home" ? "activeButton" : ""}
                id="homeButton"
            >
                Home
            </Link>
            <Link
                className={location == "/gallery" ? "activeButton" : ""}
                to="/gallery"
                id="galleryButton"
            >
                Gallery
            </Link>
        </header>
    );
}
