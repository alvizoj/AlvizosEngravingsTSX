import React from "react";
import "../CSS/HomeScreen.css";

export default function PageDescription(pageName: string) {
    return (
        <div className="BusinessDescription">
            <p className="HeaderDescText">
                {PageDescriptions[pageName].pLine1}
                <br></br>
                {PageDescriptions[pageName].pLine2}
                <br></br>
                {PageDescriptions[pageName].pLine3}
            </p>
        </div>
    );
}

/*
--- PageDescriptions dictionary ---

Used to display PageDescription object on appropriate page based on key.
 - ID is a homepage string
 - Key is PD interface
     - PD interface = varying # of strings populating HeaderDescText paragraph class

 */
interface PD {
    pLine1: string;
    pLine2?: string;
    pLine3?: string;
    pLine4?: string;
    pLine5?: string;
}

// Creating Dictionary
let PageDescriptions: { [homePage: string]: PD } = {
    Home: {
        pLine1: "Metal Engraving Services",
        pLine2: "DESCRIPTION OF BUSINESS",
        pLine3: "Based in Delano California",
    },
};
