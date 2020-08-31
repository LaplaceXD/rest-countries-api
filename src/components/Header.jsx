import React from "react";
import ModeSwitch from "./templates/common/ModeSwitch";

const defaultProps = {
    label: "Where in the world?",
};

function Header({ label, darkModeData }) {
    const [darkMode, onDarkModeToggle] = darkModeData;

    return (
        <header>
            <div className="header-container l-flex-reversed">
                <h1>{label}</h1>
                <ModeSwitch
                    value={darkMode}
                    onToggle={onDarkModeToggle}
                    icon={`${darkMode ? "fas" : "far"} fa-moon dark__icon`}
                    label="Dark Mode"
                    className="dark"
                />
            </div>
        </header>
    );
}

Header.defaultProps = defaultProps;

export default Header;
