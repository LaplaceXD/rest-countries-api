import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { loadCountries } from "./services/countriesService";
import CountryCards from "./components/CountryCards";
import CountryProfile from "./components/CountryProfile";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const countryFields = ["name", "flag", "population", "region", "capital", "alpha3Code"];

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await loadCountries(countryFields);
            setCountries(data);
            setIsLoading(false);
        })();
    });

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
                        component={(props) => (
                            <CountryCards countries={countries} countriesLoading={isLoading} {...props} />
                        )}
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
