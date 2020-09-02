import http from "./httpService";
import config from "./config.json";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export function getCountries(fields) {
    if(!fields) return http.get(config.apiEndpoint);

    const queryString = fields.reduce((query, field) => query + field + ";", "?fields=");
    return http.get(config.apiEndpoint + queryString);
}

export function getRegions() {
    return regions;
}