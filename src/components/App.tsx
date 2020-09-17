import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "../CSS/App.css";
import "react-image-lightbox/style.css";
import HomeScreen from "./HomeScreen";
import AppHeader from "./AppHeader";
import Footer from "./Footer";
import Gallery from "./Gallery";
import PageNotFound from "./PageNotFound";
import ScrollToTop from "./ScrollToTop";
import { HOME, GALLERY } from "../globals/Paths";

function App() {
    return (
        /*
        - if navbar stays constant within entire app,
        put it inside router
        */
        <div className="Site">
            <BrowserRouter>
                <ScrollToTop />
                <AppHeader />

                <div className="ContentWrap">
                    <Switch>
                        <Route component={HomeScreen} exact path={HOME} />
                        <Route component={Gallery} exact path={GALLERY} />

                        <Redirect exact from="/" to={HOME} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
