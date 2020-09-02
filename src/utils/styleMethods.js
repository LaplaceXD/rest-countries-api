import themes from "./themes.json";

export function parseTheme(theme) {
    const style = document.documentElement.style;

    theme.forEach(({ variable, value }) => {
        style.setProperty(variable, value);
    });
}

export function classBlock(block) {
    return function (element) {
        return `${block}__${element}`;
    };
}

export default {
    ...themes,
    parseTheme,
};
