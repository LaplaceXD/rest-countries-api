export function filterReducer(filter, action) {
    const { type, value } = action;
    const keys = Object.keys(filter);

    const state = keys.reduce((reset, key) => {
        reset[key] = "";
        return reset;
    }, {});

    state[type] = value;

    return state;
}
