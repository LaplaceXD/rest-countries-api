import { useEffect, useState } from "react";
import { getCountries } from "../../services/countriesService";
import error from "../../services/errorService";

async function loadCountries(fields, setCallback) {
    try {
        const { data } = await getCountries(fields);
        setCallback(data);
    } catch (ex) {
        error.handle(ex);
    }
}

export function useGetCountries(fields) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        loadCountries(fields, setCountries);
    }, []);

    return countries;
}
