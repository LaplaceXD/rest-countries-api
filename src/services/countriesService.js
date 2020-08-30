import http from "./httpService";
import config from "./config.json";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export function getCountries() {
    return http.get(config.apiEndpoint);
}

export function getRegions() {
    return regions;
}
