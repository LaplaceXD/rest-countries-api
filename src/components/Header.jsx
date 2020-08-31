import React from "react";
import ModeSwitch from "./common/ModeSwitch";

const defaultProps = {
    label: "Where in the world?",
}

function Header({ label, toggleData }) {
    const [toggleValue] = toggleData;

    return (
        <header>
            <div className="header-container l-flex-reversed">
                <h1>{label}</h1>
                <ModeSwitch
                    toggleData={toggleData}
                    icon={`${toggleValue ? "fas" : "far"} fa-moon dark__icon`}
                    label="Dark Mode"
                    className="dark"
                />
            </div>
        </header>
    );
}

Header.defaultProps = defaultProps;

export default Header;
