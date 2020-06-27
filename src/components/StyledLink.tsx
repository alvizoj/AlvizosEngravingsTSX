import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
    buttonText: string;
    toPage: string;
    stylePaddingBottom: string;
    styleTextColor: string;
}

export default function StyledLink(props: LinkProps) {
    let { buttonText, toPage, stylePaddingBottom, styleTextColor } = props;

    return (
        <Link
            to={toPage}
            className="Header"
            style={{ paddingBottom: stylePaddingBottom, color: styleTextColor }}
        >
            {buttonText}
        </Link>
    );
}
