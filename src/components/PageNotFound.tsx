import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/HomeScreen.css";
import StyledLink from "./StyledLink";
import { ReactComponent as AlertIcon } from "../resources/alert-circle-outline.svg";
import Yee from "../resources/Yee.svg";
import "../CSS/PageNotFound.css";

export default function PageNotFound() {
    useEffect(() => {
        document.title = "Page Not Found | Alvizo's Engravings";
    });

    return (
        <main>
            {/*<h1 style={{ fontSize: "4vw" }}>*/}
            {/*    Whoops! Pet the doggo to return Home*/}
            {/*</h1>*/}
            <img className="ErrorLogo" src={require("../resources/Yee.svg")} />

            {/*<Link to="/home">*/}
            {/*    <img*/}
            {/*        className="ResponsiveImage"*/}
            {/*        src={GiveDropboxImageLink(*/}
            {/*            "5ctzsnl05uxjpmn/20141026_091534.jpg"*/}
            {/*        )}*/}
            {/*        alt="pic"*/}
            {/*    />*/}
            {/*</Link>*/}

            <h3 className="NotFoundText">Sorry, this page doesn't exist.</h3>
            <br />
            <StyledLink
                buttonText="Return Home"
                toPage="/home"
                paddingBottom="1rem"
                backgroundColor="blue"
                textColor="gray"
                fontSize="3vw"
            />
            <h2 className="SecondaryText">
                Alternatively, you can also view my
                <Link to="/gallery"> GALLERY</Link>
            </h2>
        </main>
    );
}
