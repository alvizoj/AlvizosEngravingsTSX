import React from "react";
import "../CSS/HamburgerIcon.css";

interface HamburgerIconProps {
    expandedChanged: (isExpanded: boolean) => void;
}

export default function HamburgerIcon(props: HamburgerIconProps) {
    const [isExpanded, setExpanded] = React.useState(false);

    return (
        <button
            className={isExpanded ? "IconContainer expanded" : "IconContainer"}
            onClick={() => {
                setExpanded(!isExpanded);
                props.expandedChanged(!isExpanded);
            }}
        >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </button>
    );
}
