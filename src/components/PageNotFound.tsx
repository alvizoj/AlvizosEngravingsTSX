import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/HomeScreen.css";
import StyledLink from "./StyledLink";
import "../CSS/PageNotFound.css";
import { /*DIMGRAY, JET, */ BLACK, DARKSLATEBLUE } from "../globals/HexColors";

export default function PageNotFound() {
    useEffect(() => {
        document.title = "Page Not Found | Alvizo's Engravings";
    });

    return (
        <main>
            {/*<h1 style={{ fontSize: "4vw" }}>*/}
            {/*    Whoops! Pet the doggo to return Home*/}
            {/*</h1>*/}
            <img
                className="ErrorLogo"
                src={require("../resources/CloudErrorIcon.svg")}
                alt="Error Icon"
            />

            <h3 className="NotFoundText">Sorry, this page doesn't exist.</h3>
            <br />
            <StyledLink
                buttonText="Return Home"
                toPage="/home"
                paddingBottom="1rem"
                backgroundColor={DARKSLATEBLUE}
                textColor={BLACK}
                fontSize="2rem"
                borderColor={DARKSLATEBLUE}
            />
            <h2 className="SecondaryText">
                Alternatively, you can also view my
                <Link to="/gallery"> GALLERY</Link>
            </h2>
        </main>
    );
}
