import React, { useEffect, useState } from "react";
import { getCountries } from "./services/countriesService";
import Header from "./components/Header";
import CountryCards from './components/CountryCards';

function App() {
    const [countries, setCountries] = useState([]);
    const [darkMode, setDarkMode] = useState(true);

    async function loadCountries() {
        const { data } = await getCountries();
        setCountries(data);
    }

    useEffect(() => {
        loadCountries();
    }, []);

    return (
        <div className={`main-container ${darkMode ? "" : "light"}`}>
            <Header toggleData={[darkMode, setDarkMode]} />
            <CountryCards countries={countries}/>
        </div>
    );
}

export default App;
