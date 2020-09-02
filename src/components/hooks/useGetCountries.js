import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { getCountries } from "../../services/countriesService";

async function loadCountries(fields, setCallback) {
    try {
        const { data } = await getCountries(fields);
        setCallback(data);
    } catch (ex) {
        const {
            response,
            response: { status },
        } = ex;

        if (response) {
            switch (status) {
                case "400":
                    toast.error("Bad Request");
                    break;
                case "404":
                    toast.error("Page not Found");
                    break;
            }
        }
    }
}

export function useGetCountries(fields) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        loadCountries(fields, setCountries);
    }, []);

    return countries;
}
