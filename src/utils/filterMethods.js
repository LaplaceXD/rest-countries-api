export function getAvailableKeys(obj, wantedKeys) {
    const keys = Object.keys(obj);

    return wantedKeys.filter((key) => keys.includes(key));
}

export function convertToKeyValue(objToConvert, keys) {
    const availableKeys = getAvailableKeys(objToConvert, keys);

    const filtered = availableKeys.reduce((items, key) => {
        items.push({
            key: key,
            value: objToConvert[key],
        });

        return items;
    }, []);

    return filtered;
}

export function filterByString(obj, key, searchString) {
    return obj.filter((item) => item[key].toLowerCase().startsWith(searchString.toLowerCase()));
}

export function filterByCriteria(obj, key, criteria) {
    if (!criteria) return obj;

    return obj.filter((item) => item[key] === criteria);
}

export function filterByKey(obj, key) {
    if (typeof key == "number") return obj;

    return obj.reduce((acc, obj) => [...acc, obj[key]], []);
}
