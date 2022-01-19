import config from "./config.json";
import error from "./errorService";
import http from "./httpService";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const { apiEndpoint } = config;

function createQueryString(query, params) {
    const joinedParams = params.join(",");
    return `?${query}=${joinedParams}`;
}

export function getCountries(fields) {
    const apiAllEndpoint = `${apiEndpoint}/all`;

    if (!fields) return http.get(apiAllEndpoint);

    const queryString = createQueryString("fields", fields);
    return http.get(apiAllEndpoint + queryString);
}

export function getCountry(id, fields) {
    const apiNameEndpoint = `${apiEndpoint}/alpha/${id}`;

    if (!fields) return http.get(apiNameEndpoint);

    const queryString = createQueryString("fields", fields);
    return http.get(apiNameEndpoint + queryString);
}

export function getByAlphaCode(code, fields) {
    const alphaEndpoint = `${apiEndpoint}/alpha`;

    const searchCode = Array.isArray(code) ? createQueryString("codes", code) : `/${code}`;
    const aplhaCodeEndPoint = alphaEndpoint + searchCode;

    if (!fields) return http.get(aplhaCodeEndPoint);

    const queryString = createQueryString("fields", fields);
    return http.get(aplhaCodeEndPoint + queryString);
}

export function getRegions() {
    return regions;
}

export async function loadCountries(fields) {
    try {
        const { data } = await getCountries(fields);
        return data;
    } catch (ex) {
        error.handle(ex);
    }
}

export async function loadCountry(id, fields, loadToCallBack) {
    try {
        const { data } = await getCountry(id, fields);
        loadToCallBack(data);
    } catch (ex) {
        error.handle(ex);
    }
}

export async function convertCountryCode(codes, convertTo) {
    try {
        const { data } = await getByAlphaCode(codes);

        let count = 0;
        const converted = data.reduce((arr, obj) => {
            const codeConvert = [codes[count], obj[convertTo]];
            count++;

            arr.push(codeConvert);
            return arr;
        }, []);
        return converted;
    } catch (ex) {
        error.handle(ex);
    }
}
