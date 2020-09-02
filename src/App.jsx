import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import CountryCards from './components/CountryCards';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={`main-container ${darkMode ? "" : "light"}`}>
            <ToastContainer />
            <Header darkModeData={[darkMode, setDarkMode]} />
            <CountryCards />
        </div>
    );
}

export default App;
