function arrayToList(arr) {
    let list = null;
    for (let i = arr.length-1; i >= 0; i--) {
        let newList = {
            value: arr[i],
            rest: list
        };
        list = newList;
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    while (list != null) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

function prepend(value, list) {
    let newList = {
        value: value,
        rest: list
    };
    return newList;
}

function nth(list, n) {
    if (n === 0) return list.value;
    if (list.rest == null) return null;
    return nth(list.rest, n-1);
}

let list = arrayToList([1,2,3]);
list = prepend(0, list);        
let arr = listToArray(list);
console.log(arr); // [0,1,2,3]

console.log(nth(list, 1)); // 1
console.log(nth(list, 3)); // 3
console.log(nth(list, 100)); // null