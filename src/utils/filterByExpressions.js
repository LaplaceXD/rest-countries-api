function searchString(key, searchString) {
    return function (item) {
        const itemToFilter = item[key].toLowerCase();
        const search = searchString.toLowerCase();

        return itemToFilter.startsWith(search);
    };
}

function criteria(key, criteria) {
    return function (item) {
        const itemToFilter = item[key];
        return itemToFilter === criteria;
    };
}

export default {
    searchString,
    criteria,
};
