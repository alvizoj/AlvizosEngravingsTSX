import React from "react";

interface IGalleryEntry {
    imageSrc: string;
    description: string;
    onClick?: () => {};
}
export default function GalleryEntry(props: IGalleryEntry) {
    let { imageSrc, description, onClick } = props;
    return (
        <section>
            <h4>{description}</h4>
            <img
                className="ResponsiveImage"
                src={imageSrc}
                alt="pic"
                style={{ cursor: "pointer" }}
                onClick={onClick}
            />
        </section>
    );
}
