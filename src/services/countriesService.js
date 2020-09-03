import http from "./httpService";
import config from "./config.json";
import error from "./errorService";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const { apiEndpoint } = config;

function createQueryString(fields) {
    const params = fields.join(";");
    return `?fields=${params}`;
}

export function getCountries(fields) {
    const apiAllEndpoint = `${apiEndpoint}/all`;

    if (!fields) return http.get(apiAllEndpoint);

    const queryString = createQueryString(fields);
    return http.get(apiAllEndpoint + queryString);
}

export function getCountry(name, fields) {
    const apiNameEndpoint = `${apiEndpoint}/name/${name}`;

    if (!fields) return http.get(apiNameEndpoint);

    const queryString = createQueryString(fields);
    return http.get(apiNameEndpoint + queryString);
}

export function getByAlphaCode(code, fields) {
    const apiCodeEndpoint = `${apiEndpoint}/alpha/${code}`;

    if (!fields) return http.get(apiCodeEndpoint);

    const queryString = createQueryString(fields);
    return http.get(apiCodeEndpoint + queryString);
}

export function getRegions() {
    return regions;
}

export async function loadCountries(fields, loadToCallBack) {
    try {
        const { data } = await getCountries(fields);
        loadToCallBack(data);
    } catch (ex) {
        error.handle(ex);
    }
}

export async function loadCountry(name, fields, loadToCallBack) {
    try {
        const { data } = await getCountry(name, fields);
        loadToCallBack(data[0]);
    } catch (ex) {
        error.handle(ex);
    }
}

export async function convertCountryCode(code, convertTo) {
    try {
        const { data } = await getByAlphaCode(code, [convertTo]);
        return data[0];
    } catch (ex) {
        error.handle(ex);
    }
}
