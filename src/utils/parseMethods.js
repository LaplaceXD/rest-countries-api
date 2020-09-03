import { filterByKey } from "./filterMethods";

export function getNestedDetails(obj, fields, keyToParse) {
    const parsedObj = {};

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const key = keyToParse[i];
        const objToParse = obj[field];

        parsedObj[field] = filterByKey(objToParse, key).join(", ");
    }

    return parsedObj;
}
