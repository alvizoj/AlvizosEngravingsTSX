import React from "react";
import "../CSS/HamburgerIcon.css";

interface IHamburgerIcon {
    expandedChanged: (isExpanded: boolean) => void;
}

export default function HamburgerIcon(props: IHamburgerIcon) {
    const [isExpanded, setExpanded] = React.useState(false);

    return (
        <button
            className={isExpanded ? "IconContainer expanded" : "IconContainer"}
            onClick={() => {
                setExpanded(!isExpanded);
                props.expandedChanged(!isExpanded);
            }}
        >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
        </button>
    );
}
