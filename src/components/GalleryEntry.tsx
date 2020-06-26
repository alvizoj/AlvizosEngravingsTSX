import React from "react";

// export class GalleryEntry extends React.Component<{
//     ImageSrc: string;
//     Description: string;
// }> {
//     render() {
//         let { ImageSrc, Description } = this.props;

//         return (
//             <section /*className="GalleryEntry"*/>
//                 <h4>{Description}</h4>
//                 <img className="ResponsiveImage" src={ImageSrc} alt="pic" />
//             </section>
//         );
//     }
// }

interface GalleryEntryProps {
    imageSrc: string;
    description: string;
}
export function GalleryEntry(props: GalleryEntryProps) {
    let { imageSrc, description } = props;
    return (
        <section /*className="GalleryEntry"*/>
            <h4>{description}</h4>
            <img className="ResponsiveImage" src={imageSrc} alt="pic" />
        </section>
    );
}

export function PicAndDescr() {
    return (
        <section /*className="GalleryEntry"*/>
            <h4>
                Engraving of AR-15. Price is $50 per 5 square inch engraving.
            </h4>
            <img
                className="ResponsiveImage"
                src="https://www.atomicengraving.com/wp-content/uploads/2017/08/homemade80.png"
                alt="pic"
            />
        </section>
    );
}
