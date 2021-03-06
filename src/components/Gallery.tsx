import React, { useEffect } from "react";
import Lightbox from "react-image-lightbox";
import GalleryEntry from "./GalleryEntry";

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
            <main className="Gallery">
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                />
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                />
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                />
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                />
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                />
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                />
                <GalleryEntry
                    description={defaultDesc}
                    imageSrc={defaultImgSrc}
                />
                {/* <Lightbox mainSrc={defaultImgSrc} onCloseRequest={() => {}} /> */}
            </main>
        </>
    );
}
