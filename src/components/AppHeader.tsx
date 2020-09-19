import React, { useRef } from "react";
import "../CSS/AppHeader.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";
import { HOME, GALLERY } from "../globals/Paths";

export default function AppHeader() {
    //Use location.pathname for active buttons.
    let path: string = useLocation().pathname;

    const headerRef = useRef<HTMLDivElement>(null);

    function expandResponsiveNavbar(isExpanded: boolean) {
        if (isExpanded) {
            if (headerRef.current !== null) {
                headerRef.current.className = "topnav responsive";
                console.log("if: " + headerRef.current.className);
            }
        } else {
            if (headerRef.current !== null) {
                headerRef.current.className = "topnav";
                console.log("else: " + headerRef.current.className);
            }
        }
    }

    return (
        <header ref={headerRef} className="topnav">
            <Link id="headerTitleText" to={HOME}>
                <h1 className="HeaderTitleText">Alvizo's Engravings</h1>
            </Link>

            <nav className="Flex">
                <Link
                    id="homeButton"
                    to={HOME}
                    className={path === HOME ? "activeButton" : ""}
                >
                    Home
                </Link>

                <Link
                    to={GALLERY}
                    className={path === GALLERY ? "activeButton" : ""}
                >
                    Gallery
                </Link>
                <HamburgerIcon expandedChanged={expandResponsiveNavbar} />
            </nav>
        </header>
    );
}
