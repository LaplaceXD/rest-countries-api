import React, { useState, useEffect } from "react";
import ModeSwitch from "./templates/common/ModeSwitch";
import theme from "../utils/styleMethods";

const defaultProps = {
    label: "Where in the world?",
};

function Header({ label }) {
    const { darkTheme, lightTheme, parseTheme } = theme;
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) parseTheme(darkTheme);
        else parseTheme(lightTheme);
    }, [darkMode]);

    return (
        <header>
            <div className="header-container l-flex-reversed">
                <h1>{label}</h1>
                <ModeSwitch
                    classBlock="dark"
                    icon={`${darkMode ? "fas" : "far"} fa-moon`}
                    onToggle={() => setDarkMode(!darkMode)}
                    label="Dark Mode"
                />
            </div>
        </header>
    );
}

Header.defaultProps = defaultProps;

export default Header;
