export function createObserver(entryCallback, config) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entryCallback);
    }, config);

    return observer;
}

export function observeItems(observer, items) {
    items.forEach((item) => {
        observer.observe(item);
    });
}

export function animationObserver(callback, config) {
    const observer = createObserver((item) => {
        if (item.intersectionRatio > 0) {
            callback(item)
        }
    }, config);

    return observer;
}

export default {
    createObserver,
    observeItems,
};
