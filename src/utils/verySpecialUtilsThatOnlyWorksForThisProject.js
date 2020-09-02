import { filterByKey } from "./filterMethods";

export function getDetails(obj, fields, keys) {
    const parsedObject = {};
    console.log(obj);

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const key = keys[i];
        const detail = obj[field];

        const arrayValue = filterByKey(detail, key);
        console.log(arrayValue);
        const stringValue = arrayValue.join(",")

        parsedObject[field] = stringValue;
    }

    return parsedObject;
}
