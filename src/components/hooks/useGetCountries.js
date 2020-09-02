import { useEffect, useState } from "react";
import { loadCountries } from "../../services/countriesService";

export function useGetCountries(fields) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        loadCountries(fields, setCountries);
    }, []);

    return countries;
}
