export function addCommas(num) {
    let count = 0;
    const reversedDigits = num.toString().split("");

    const separatedDigits = reversedDigits.reduce((acc, digit) => {
        count++;
        const { length } = reversedDigits;
        let addSeperator = "";
        if (length - count !== 0 && (length - count) % 3 === 0) addSeperator = ", ";

        return acc + digit + addSeperator;
    }, "");

    return separatedDigits;
}

export function shorten(phrase, char) {
    if (phrase.length > char) {
        const words = phrase.split(" ");
        return words[0];
    }

    return phrase;
}

export function shouldAddCommas(item) {
    const isNumber = typeof item === "number";
    return isNumber ? addCommas(item) : item;
}
