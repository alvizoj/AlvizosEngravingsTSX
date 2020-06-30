import React from "react";
import { Link } from "react-router-dom";
import "../CSS/StyledLink.css";

// Wrap component in div of whatever class I want link to be in
// See: Gallery.tsx

interface LinkProps {
    buttonText: string;
    toPage: string;
    paddingBottom: string;
    textColor?: string;
    backgroundColor?: string;
    fontSize?: string;
}

export default function StyledLink(props: LinkProps) {
    let {
        buttonText,
        toPage,
        paddingBottom,
        textColor,
        backgroundColor,
        fontSize,
    } = props;

    return (
        <Link
            to={toPage}
            style={{
                paddingBottom,
            }}
        >
            <button
                className="LinkButton"
                style={{ color: textColor, backgroundColor, fontSize }}
            >
                {buttonText}
            </button>
        </Link>
    );
}
