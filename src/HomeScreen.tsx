import React from "react";
import "./CSS/HomeScreen.css";
import { GalleryEntry } from "./components/GalleryEntry";

export default class HomeScreen extends React.Component<{
    HeaderTitleText: string;
    HomeLocation: string;
}> {
    componentDidMount() {
        document.title = "Alvizo's Engravings";
    }

    // constructor(props: HomeScreenProps) {
    //     super(props);
    // }

    // toggleImages = () => {
    //     const show = this.state;
    //     this.props.show = !this.props.show;
    //     if (this.props.buttonText === 'Show More')
    //         this.setState({buttonText: 'Show Less'})
    //     if (this.state.buttonText === 'Show Less')
    //         this.setState({buttonText: 'Show More'})
    // }

    render() {
        let { HeaderTitleText, HomeLocation } = this.props;
        return (
            <div className="Site">
                <header className="Header">
                    <h1 className="HeaderTitleText">{HeaderTitleText}</h1>
                </header>

                <div className="BusinessDescription">
                    <p className="HeaderDescText">
                        Metal Engraving Services<br></br>
                        DESCRIPTION OF BUSINESS<br></br>
                        {HomeLocation}
                    </p>
                    <h1>{addNumbers(5, 5)}</h1>
                </div>

                <main>
                    {/* <GalleryDesktop></GalleryDesktop>
                    <GalleryMobile></GalleryMobile> */}
                    <GalleryEntry
                        Description="Engraving of an AR-15. TEST TEST TEST"
                        ImageSrc="https://www.atomicengraving.com/wp-content/uploads/2017/08/homemade80.png"
                    ></GalleryEntry>
                    <button style={{ marginBottom: "10px" }}>
                        See my Work
                    </button>

                    <section className="ContactInfo">
                        <h2>Contact Information</h2>
                    </section>
                </main>

                <footer className="Footer">
                    <b>{"\u00A9"} 2019 Joseph Alvizo. All rights reserved.</b>
                </footer>
            </div> /* Site Container */
        );
    }
}

export function addNumbers(a: number, b: number): string {
    let total: number = a + b;
    return total.toString();
}
