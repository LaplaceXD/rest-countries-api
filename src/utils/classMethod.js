export function classBlock(block) {
    if(!block) return null;

    return function (element) {
        return `${block}__${element}`;
    };
}
