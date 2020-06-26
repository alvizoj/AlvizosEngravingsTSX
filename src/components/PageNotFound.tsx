import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Box.css";

export default function PageNotFound() {
    useEffect(() => {
        document.title = "Page Not Found | Alvizo's Engravings";
    });

    return (
        <div>
            <h3>404 - Page Not Found</h3>
            <h3>
                Did you mean to go to
                <Link to="/home"> Home</Link>
            </h3>
        </div>
    );
}
