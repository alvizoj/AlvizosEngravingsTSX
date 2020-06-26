import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./CSS/App.css";
import HomeScreen from "./HomeScreen";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import GalleryDesktop from "./components/Components";
import PageNotFound from "./components/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        /*
        - if navbar stays constant within entire app,
        put it inside router
        */
        <div className="Site">
            <div className="ContentWrap">
                <BrowserRouter>
                    <ScrollToTop />
                    <AppHeader />
                    <Switch>
                        <Route component={HomeScreen} exact path="/home" />
                        <Route
                            component={GalleryDesktop}
                            exact
                            path="/gallery"
                        />
                        <Redirect exact from="/" to="/home" />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );
}

export default App;
