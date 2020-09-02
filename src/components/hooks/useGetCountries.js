import { useEffect, useState } from "react";
import { getCountries } from "../../services/countriesService";

async function loadCountries(fields, setCallback) {
    const { data } = await getCountries(fields);
    setCallback(data);
}

export function useGetCountries(fields) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        loadCountries(fields, setCountries);
    }, []);

    return countries;
}