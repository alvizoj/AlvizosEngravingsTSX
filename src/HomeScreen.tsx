import React from "react";
import "./HomeScreen.css";

export default class HomeScreen extends React.Component<{
    HeaderTitleText: string;
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
        let { HeaderTitleText } = this.props;
        return (
            <div className="Site">
                <header className="Header">
                    <h1 className="HeaderTitleText">{HeaderTitleText}</h1>
                </header>

                <div className="BusinessDescription">
                    <p className="HeaderDescText">
                        Metal Engraving Services<br></br>
                        DESCRIPTION OF BUSINESS<br></br>
                        Based in Delano, CA
                    </p>
                </div>

                <main className="Gallery">
                    <PicAndDescr></PicAndDescr>
                    <PicAndDescr></PicAndDescr>
                    <PicAndDescr></PicAndDescr>
                    <PicAndDescr></PicAndDescr>
                    <PicAndDescr></PicAndDescr>
                    <PicAndDescr></PicAndDescr>
                    <PicAndDescr></PicAndDescr>
                    <h3>Hello Hello Hello</h3>
                </main>

                <footer className="Footer">
                    <b>{"\u00A9"} 2019 Joseph Alvizo. All rights reserved.</b>
                </footer>
            </div> /* Site Container */
        );
    }
}

function PicAndDescr() {
    return (
        <div>
            <img
                className="ResponsiveImage"
                src={
                    "https://www.atomicengraving.com/wp-content/uploads/2017/08/homemade80.png"
                }
                alt="pic"
            />
            <h4>
                Engraving of AR-15. Price is $50 per 5 square inch engraving.
            </h4>
        </div>
    );
}
