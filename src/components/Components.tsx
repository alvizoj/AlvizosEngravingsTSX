import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GalleryEntry } from "./GalleryEntry";

export default function GalleryDesktop() {
    const defaultImgSrc: string =
        "https://www.atomicengraving.com/wp-content/uploads/2017/08/homemade80.png";
    const defaultDesc: string =
        "Engraving of AR-15. Price is $50 per 5 square inch engraving.";

    useEffect(() => {
        document.title = "Gallery | Alvizo's Engravings";
    });
    return (
        <>
            <Link to="/home" className="">
                Back
            </Link>
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
