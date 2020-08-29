import React from "react";
import "../CSS/Footer.css";

export default function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <footer className="Footer">
            <b>
                {"\u00A9"} {currentYear} Joseph Alvizo. All rights reserved.
            </b>
        </footer>
    );
}
