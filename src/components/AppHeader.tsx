import React from "react";
import "../CSS/AppHeader.css";
import { Link } from "react-router-dom";

export function AppHeader() {
    return (
        <header className="Header">
            <h1 className="HeaderTitleText">
                <Link to="/home">Alvizo's Engravings</Link>
            </h1>
        </header>
    );
}
