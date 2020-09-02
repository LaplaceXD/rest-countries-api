import React, { useState } from "react";
import Header from "./components/Header";
import CountryCards from './components/CountryCards';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={`main-container ${darkMode ? "" : "light"}`}>
            <Header darkModeData={[darkMode, setDarkMode]} />
            <CountryCards />
        </div>
    );
}

export default App;
