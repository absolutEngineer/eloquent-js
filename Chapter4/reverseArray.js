function range(start, end) {
    let rangeArr = []
    for (let i = start; i <= end; i++) {
        rangeArr.push(i);
    };
    return rangeArr;
}

function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    };
    return reversedArr;
}

function reverseArrayInPlace(arr) {
    let tmp;
    for (let i = 0; i < Math.floor(arr.length/2); i++){
        tmp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = tmp;
    }
    return arr;
}

let startTime, endTime;
startTime = performance.now();
reverseArray(range(0,10000));
endTime = performance.now();
console.log(`Reverse array by copying took ${endTime - startTime} ms`);

startTime = performance.now();
reverseArrayInPlace(range(0,10000));
endTime = performance.now();
console.log(`Reverse array in place took ${endTime - startTime} ms`);