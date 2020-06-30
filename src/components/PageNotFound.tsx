import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/HomeScreen.css";
import PageDescription from "./PageDescription";
import GalleryEntry from "./GalleryEntry";
import StyledLink from "./StyledLink";

function GiveDropboxImageLink(id: string): string {
    return "https://www.dropbox.com/s/" + id + "?raw=1";
}

export default function PageNotFound() {
    useEffect(() => {
        document.title = "Page Not Found | Alvizo's Engravings";
    });

    return (
        <main>
            <h1 style={{ fontSize: "10vw" }}>Whoops!</h1>

            <img
                className="ResponsiveImage"
                src={GiveDropboxImageLink(
                    "5ctzsnl05uxjpmn/20141026_091534.jpg"
                )}
                alt="pic"
            />

            <h1 style={{ fontSize: "5vw" }}>Sorry, this page doesn't exist.</h1>
            <br />
            <StyledLink
                buttonText="Return Home"
                toPage="/home"
                paddingBottom="1rem"
                backgroundColor="blue"
                textColor="gray"
                fontSize="10vw"
            />
            <h2 style={{ fontSize: "2vw" }}>
                Alternatively, you can also view my
                <Link to="/gallery"> GALLERY</Link>
            </h2>
        </main>
    );
}
