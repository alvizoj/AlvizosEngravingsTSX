import React, { useEffect } from "react";
import "../CSS/HomeScreen.css";
import { Link } from "react-router-dom";
import GalleryEntry from "./GalleryEntry";
import PageDescription from "./PageDescription";
import StyledLink from "./StyledLink";

export default function HomeScreen() {
    useEffect(() => {
        document.title = "Alvizo's Engravings";
    });

    return (
        <>
            {PageDescription("Home")}

            <main>
                {/* <GalleryDesktop></GalleryDesktop>
                    <GalleryMobile></GalleryMobile> */}
                <GalleryEntry
                    description="Engraving of an AR-15. TEST TEST TEST"
                    imageSrc="https://www.atomicengraving.com/wp-content/uploads/2017/08/homemade80.png"
                />

                <StyledLink
                    buttonText="See my Work"
                    toPage="/Gallery"
                    paddingBottom="1rem"
                    backgroundColor="darkslateblue"
                    textColor="black"
                    fontSize="120%"
                />

                <Link to="/gallery">
                    <section className="ContactInfo">
                        <h2>See my Work</h2>
                    </section>
                </Link>

                <section className="ContactInfo">
                    <h2>Contact Information</h2>
                </section>
            </main>
        </>
    );
}

export function addNumbers(a: number, b: number): string {
    let total: number = a + b;
    return total.toString();
}
