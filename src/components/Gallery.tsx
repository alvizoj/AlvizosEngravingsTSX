import React, { useEffect } from "react";
import GalleryEntry from "./GalleryEntry";
import StyledLink from "./StyledLink";

export default function Gallery() {
    const defaultImgSrc: string =
        "https://www.dropbox.com/s/5ctzsnl05uxjpmn/20141026_091534.jpg?raw=1";
    const defaultDesc: string =
        "Engraving of AR-15. Price is $50 per 5 square inch engraving.";

    useEffect(() => {
        document.title = "Gallery | Alvizo's Engravings";
    });

    return (
        <>
            {/* <Link
                to="/home"
                className="Header"
                style={{ paddingBottom: "1rem", color: "white" }}
            >
                Back
            </Link> 
            <div className="Header">
                <StyledLink
                    toPage="/home"
                    buttonText="Back"
                    paddingBottom="1rem"
                    textColor="white"
                    backgroundColor="black"
                />
            </div> */}

            <div className="Gallery">
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                ></GalleryEntry>
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                ></GalleryEntry>
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                ></GalleryEntry>
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                ></GalleryEntry>
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                ></GalleryEntry>
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                ></GalleryEntry>
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                ></GalleryEntry>
            </div>
        </>
    );
}

export function GalleryMobile() {
    return (
        <div className="Gallery" style={{}}>
            <button className="Button_Gallery">Show Gallery</button>
            <h3>Hello Hello Hello</h3>
        </div>
    );
}
