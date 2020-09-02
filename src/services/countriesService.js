import http from "./httpService";
import config from "./config.json";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const { apiEndpoint } = config;

function createQueryString(fields) {
    return fields.reduce((query, field) => query + field + ";", "?fields=");
}

export function getCountries(fields) {
    if(!fields) return http.get(apiEndpoint);

    const queryString = createQueryString(fields);
    return http.get(apiEndpoint + queryString);
}

export function getCountry(name, fields) {
    const apiNameEndpoint = `${apiEndpoint}/name/${name}`;

    if(!fields) return http.get(apiNameEndpoint)

    const queryString = createQueryString(fields);
    return http.get(apiNameEndpoint + queryString);
}

export function getRegions() {
    return regions;
}