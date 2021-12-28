function deepEqual(elem1, elem2) {
    if (elem1 === elem2) return true;

    if (typeof elem1 != "object" || elem1 == null || 
        typeof elem2 != "object" || elem2 == null) return false;

    const props1 = Object.keys(elem1);
    const props2 = Object.keys(elem2);
    if (props1.length != props2.length) return false;
    for (let prop of props1) {
        if (!props2.includes(prop) || !deepEqual(elem1[prop], elem2[prop])) return false;
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // true
console.log(deepEqual(obj, {here: 1, object: 2})); // false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // true