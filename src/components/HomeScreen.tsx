import React, { useEffect } from "react";
import "../CSS/HomeScreen.css";
import { Link } from "react-router-dom";
import GalleryEntry from "./GalleryEntry";
import PageDescription from "./PageDescription";

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
                <Link to="/gallery" className="">
                    See my Work
                </Link>

                <section className="ContactInfo">
                    <h2 style={{ width: "100%" }}>Contact Information</h2>
                </section>
            </main>
        </>
    );
}

export function addNumbers(a: number, b: number): string {
    let total: number = a + b;
    return total.toString();
}
