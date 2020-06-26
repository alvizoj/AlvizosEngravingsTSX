import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Box.css";

export default function PageNotFound() {
    return (
        <div>
            <h3>404 - Page Not Found</h3>
            <h3>Did you mean to go to</h3>
            <h3>
                <Link to="/home" className="whateverbruh">
                    Home
                </Link>
            </h3>
        </div>
    );
}
