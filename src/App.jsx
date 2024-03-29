import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CountryCards from "./components/CountryCards";
import CountryProfile from "./components/CountryProfile";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

function App() {
    return (
        <div className="main-container">
            <ToastContainer />
            <Header />
            <main className="country-container">
                <Switch>
                    <Route path="/country/:id" component={CountryProfile} />
                    <Route path="/country" exact component={CountryCards} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect from="/" exact to="/country" />
                    <Redirect from="/" to="/not-found" />
                </Switch>
            </main>
        </div>
    );
}

export default App;
