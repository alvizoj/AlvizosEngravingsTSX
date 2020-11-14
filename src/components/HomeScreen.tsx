import React, { useEffect } from "react";
import "../CSS/HomeScreen.css";
// import { Link } from "react-router-dom";
// import GalleryEntry from "./GalleryEntry";
// import PageDescription from "./PageDescription";
// import StyledLink from "./StyledLink";
// import { DARKSLATEBLUE } from "../globals/HexColors";
// import { DropboxEngravingPhoto } from "../globals/Paths";
import { useWindowSize } from "../hooks/WindowSize";
import PageDescription from "./PageDescription";

export default function HomeScreen() {
    //Page title
    useEffect(() => {
        document.title = "Alvizo's Engravings";
    });

    const windowSize = useWindowSize();

    function setImageHeight(): number | undefined {
        if (windowSize.height) {
            return (windowSize.height - 65) as number;
        }
    }

    return (
        <>
            {/*{PageDescription("Home")}*/}
            <div
                className="HomeScreenImage"
                style={{ height: setImageHeight() }}
            >
                <div className="HomeScreenText">
                    <p className="HeaderDescText">
                        Metal Engraving Services
                        <br></br>
                        DESCRIPTION OF BUSINESS
                        <br></br>
                        Based in Delano California
                    </p>
                </div>
            </div>

            <main>
                {/*<GalleryEntry*/}
                {/*    description="Engraving of an AR-15. TEST TEST TEST"*/}
                {/*    imageSrc="https://www.atomicengraving.com/wp-content/uploads/2017/08/homemade80.png"*/}
                {/*/>*/}

                <section>
                    <h1>About Us</h1>
                    <h4>Lorem ipsum lorem ipsum lorem ipsum lorem</h4>
                    <h4>Lorem ipsum lorem ipsum lorem ipsum lorem</h4>
                </section>

                {/*<StyledLink*/}
                {/*    buttonText="See my Work"*/}
                {/*    toPage="/Gallery"*/}
                {/*    paddingBottom="1rem"*/}
                {/*    backgroundColor="darkslateblue"*/}
                {/*    textColor="black"*/}
                {/*    fontSize="120%"*/}
                {/*    borderColor={DARKSLATEBLUE}*/}
                {/*/>*/}

                {/*<Link to="/gallery">*/}
                {/*    <section className="ContactInfo">*/}
                {/*        <h2>See my Work</h2>*/}
                {/*    </section>*/}
                {/*</Link>*/}

                {/*<section className="ContactInfo">*/}
                {/*    <h2>Contact Information</h2>*/}
                {/*</section>*/}
            </main>
        </>
    );
}
