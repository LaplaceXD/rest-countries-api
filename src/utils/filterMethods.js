import { addCommas } from "./auxilliaryMethods";

export function getAvailableKeys(obj, wantedKeys) {
    const keys = Object.keys(obj);

    return wantedKeys.filter((key) => keys.includes(key));
}

export function convertToKeyValue(objToConvert, keys) {
    const availableKeys = getAvailableKeys(objToConvert, keys);

    const filtered = availableKeys.reduce((items, currentKey) => {
        const key = currentKey.split(/(?=[A-Z])/).join(" ");
        const value =
            typeof objToConvert[currentKey] === "number"
                ? addCommas(objToConvert[currentKey])
                : objToConvert[currentKey];

        items.push({ key, value });

        return items;
    }, []);

    return filtered;
}

export function filterByKey(obj, key) {
    if (typeof key === "number") return obj;

    return obj.reduce((acc, obj) => [...acc, obj[key]], []);
}

export function multiPassFilter(items, array) {
    let buffer = [...items];

    array.forEach((filters) => {
        const [value, filterBy] = filters;
        if (!value) return;

        buffer = buffer.filter(filterBy);
    });

    return buffer;
}
