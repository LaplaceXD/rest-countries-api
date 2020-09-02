export function convertToKeyValue(objToFilter, wantedKeys) {
    const availableKeys = Object.keys(objToFilter).filter((key) => wantedKeys.includes(key));
    const filtered = availableKeys.reduce((items, key) => {
        items.push({
            key: key,
            value: objToFilter[key],
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
