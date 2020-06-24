import React from "react";
import "./CSS/App.css";
import HomeScreen from "./HomeScreen";
import { AppHeader } from "./components/AppHeader";
import { GalleryDesktop } from "./components/Components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
    return (
        /*
        - if navbar stays constant within entire app,
        put it inside router
        */
        <BrowserRouter>
            <AppHeader />
            <Switch>
                <Route component={HomeScreen} path="/home" />

                <Route component={GalleryDesktop} path="/gallery" />
                <Redirect from="/" to="/home" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
