import React from "react";
import { stringify } from "querystring";
import { Link } from "react-router-dom";
import { GalleryEntry } from "./GalleryEntry";

export function GalleryDesktop() {
    const defaultImgSrc: string =
        "https://www.atomicengraving.com/wp-content/uploads/2017/08/homemade80.png";
    const defaultDesc: string =
        "Engraving of AR-15. Price is $50 per 5 square inch engraving.";
    return (
        <>
            <Link to="/home" className="whateverbruh">
                Back
            </Link>
            <div className="Gallery">
                <GalleryEntry
                    Description={defaultImgSrc}
                    ImageSrc={defaultImgSrc}
                ></GalleryEntry>
                <GalleryEntry
                    Description={defaultImgSrc}
                    ImageSrc={defaultImgSrc}
                ></GalleryEntry>
                <GalleryEntry
                    Description={defaultImgSrc}
                    ImageSrc={defaultImgSrc}
                ></GalleryEntry>
                <GalleryEntry
                    Description={defaultImgSrc}
                    ImageSrc={defaultImgSrc}
                ></GalleryEntry>
                <GalleryEntry
                    Description={defaultImgSrc}
                    ImageSrc={defaultImgSrc}
                ></GalleryEntry>
                <GalleryEntry
                    Description={defaultImgSrc}
                    ImageSrc={defaultImgSrc}
                ></GalleryEntry>
                <GalleryEntry
                    Description={defaultImgSrc}
                    ImageSrc={defaultImgSrc}
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
