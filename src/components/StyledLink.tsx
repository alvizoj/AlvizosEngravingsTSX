import React from "react";
import { Link } from "react-router-dom";
import "../CSS/StyledLink.css";

// Wrap component in div of whatever class I want link to be in
// See: Gallery.tsx

interface ILinkProps {
    buttonText: string;
    toPage: string;
    paddingBottom: string;
    textColor?: string;
    backgroundColor?: string;
    fontSize?: string;
    borderColor?: string;
}

export default function StyledLink(props: ILinkProps) {
    let {
        buttonText,
        toPage,
        paddingBottom,
        textColor,
        backgroundColor,
        fontSize,
        borderColor,
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
                style={{
                    color: textColor,
                    backgroundColor,
                    fontSize,
                    borderColor,
                }}
            >
                {buttonText}
            </button>
        </Link>
    );
}
