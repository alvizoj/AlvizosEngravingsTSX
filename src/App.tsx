import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./CSS/App.css";
import HomeScreen from "./components/HomeScreen";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import PageNotFound from "./components/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import { HOME, GALLERY } from "./globals/Paths";

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
                        <Route component={HomeScreen} exact path={HOME} />
                        <Route component={Gallery} exact path={GALLERY} />
                        <Redirect exact from="/" to={HOME} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );
}

export default App;
