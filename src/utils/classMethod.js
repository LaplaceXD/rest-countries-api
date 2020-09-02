export function classBlock(block) {
    return function (element) {
        return `${block}__${element}`;
    };
}
