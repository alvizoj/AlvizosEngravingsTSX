import React from "react";

interface GalleryEntryProps {
    imageSrc: string;
    description: string;
}
export default function GalleryEntry(props: GalleryEntryProps) {
    let { imageSrc, description } = props;
    return (
        <section>
            <h4>{description}</h4>
            <img
                className="ResponsiveImage"
                src={imageSrc}
                alt="pic"
                style={{ cursor: "pointer" }}
            />
        </section>
    );
}
