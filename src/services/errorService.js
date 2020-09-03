import { toast } from "react-toastify";

function handleExpectedError(error) {
    const { response } = error;

    if (response) {
        const { status } = response;

        switch (status) {
            case "400":
                toast.error("Bad Request");
                break;
            case "404":
                toast.error("Page not Found");
                break;
            default:
                toast.error("An error occured, please try again!");
                break;
        }
    }

    toast.error("Failed to fetch the data from the server.");
}

export default {
    handle: handleExpectedError,
};
