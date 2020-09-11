import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Redirect, Route } from "react-router-dom";
import { useGetCountries } from "./components/hooks/useGetCountries";
import Header from "./components/Header";
import CountryCards from "./components/CountryCards";
import CountryProfile from "./components/CountryProfile";
import NotFound from "./components/NotFound";

const countryFields = ["name", "flag", "population", "region", "capital", "alpha3Code"];

function App() {
    const countries = useGetCountries(countryFields);

    return (
        <div className="main-container">
            <ToastContainer />
            <Header />
            <main className="country-container">
                <Switch>
                    <Route path="/country/:id" component={CountryProfile} />
                    <Route
                        path="/country"
                        exact
                        component={(props) => <CountryCards countries={countries} {...props} />}
                    />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect from="/" exact to="/country" />
                    <Redirect from="/" to="/not-found" />
                </Switch>
            </main>
        </div>
    );
}

export default App;
