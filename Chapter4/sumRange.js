function range(start, end) {
    let rangeArr = []
    for (let i = start; i <= end; i++) {
        rangeArr.push(i);
    };
    return rangeArr;
}

function sum(arr) {
    let total = 0;
    for (elem of arr) {
        total += elem;
    };
    return total;
}

console.log(sum(range(0,10)));