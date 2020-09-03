import http from "./httpService";
import config from "./config.json";
import error from "./errorService";
import { array } from "prop-types";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const { apiEndpoint } = config;

function createQueryString(query, params) {
    const joinedParams = params.join(";");
    return `?${query}=${joinedParams}`;
}

export function getCountries(fields) {
    const apiAllEndpoint = `${apiEndpoint}/all`;

    if (!fields) return http.get(apiAllEndpoint);

    const queryString = createQueryString("fields", fields);
    return http.get(apiAllEndpoint + queryString);
}

export function getCountry(name, fields) {
    const apiNameEndpoint = `${apiEndpoint}/name/${name}`;

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

export async function convertCountryCode(codes, convertTo) {
    try {
        const { data } = await getByAlphaCode(codes);

        const converted = data.reduce((arr, obj) => [...arr, obj[convertTo]], []);
        return converted;
    } catch (ex) {
        error.handle(ex);
    }
}
