import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
    const {
        response,
        response: { status },
    } = error;
    const errorConditions = response && status >= 400 && status < 500;

    if (errorConditions) {
        console.log("An unexpected error has occured");
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
};
