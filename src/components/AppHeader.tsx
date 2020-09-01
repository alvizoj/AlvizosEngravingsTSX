import React from "react";
import "../CSS/AppHeader.css";
import { Link } from "react-router-dom";
import StyledLink from "./StyledLink";
import { useLocation } from "react-router-dom";
import { stringify } from "querystring";

export default function AppHeader() {
    let path: string = useLocation().pathname;
    //Use location.pathname for active buttons.

    function openHamburgerMenu() {
        let x: HTMLElement = document.getElementById("myTopnav") as HTMLElement;
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    // function setActiveClass(): string {
    //     let result: string;
    //     if (path === "/home") {
    //         result
    //     }
    // }

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
                    id="galleryButton"
                    to="/gallery"
                    className={path === "/gallery" ? "activeButton" : ""}
                >
                    Gallery
                </Link>
            </div>

            <a
                href="javascript:void(0);"
                className="icon"
                onClick={openHamburgerMenu}
            >
                <i className="fa fa-bars"></i>
            </a>
        </header>
    );
}
