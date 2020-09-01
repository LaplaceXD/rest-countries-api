import React from "react";
import ModeSwitch from "./templates/common/ModeSwitch";

const defaultProps = {
    label: "Where in the world?",
};

const switchClassNames = {
    div: "dark",
    i: "dark__icon",
};

function Header({ label, darkModeData }) {
    const [darkMode, onDarkModeToggle] = darkModeData;

    return (
        <header>
            <div className="header-container l-flex-reversed">
                <h1>{label}</h1>
                <ModeSwitch
                    className={switchClassNames}
                    icon={`${darkMode ? "fas" : "far"} fa-moon`}
                    onToggle={() => onDarkModeToggle(!darkMode)}
                    label="Dark Mode"
                />
            </div>
        </header>
    );
}

Header.defaultProps = defaultProps;

export default Header;
