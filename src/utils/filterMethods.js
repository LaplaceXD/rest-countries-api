export function filterDetails(objToFilter, keyFilter) {
    return Object.keys(objToFilter)
        .filter((key) => keyFilter.includes(key))
        .reduce((details, key) => {
            const newObj = {
                key: key,
                value: objToFilter[key],
            };

            details.push(newObj);
            return details;
        }, []);
}
