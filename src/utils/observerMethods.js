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

export function lazyLoadImages(items, config) {
    const observer = createObserver((img) => {
        if (img.intersectionRatio > 0) {
            const src = img.target.dataset.src;
            img.target.setAttribute("src", src);
        }
    }, config);

    observeItems(observer, items);
}

export default {
    lazyLoadImages,
    createObserver,
    observeItems
}