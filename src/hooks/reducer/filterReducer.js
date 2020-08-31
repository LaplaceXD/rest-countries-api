export function filterReducer(filter, action) {
    const state = { ...filter };

    switch (action.type) {
        case "search":
            state.search = action.value;
            state.region = "";
            break;
        case "region":
            state.region = action.value;
            state.search = "";
            break;
        default:
            break;
    }

    return state;
}
