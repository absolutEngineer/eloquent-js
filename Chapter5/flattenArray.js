function flatten(arrayOfArrays) {
    return arrayOfArrays.reduce((flattenedArr, subArr) => {
        return flattenedArr.concat(subArr);
    }, []);
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));