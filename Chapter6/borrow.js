let obj = {
    hasOwnProperty: true,
    hasOtherProperties: false
}

console.log(Object.prototype.hasOwnProperty.call(obj, 'hasOwnProperty'));        // true
console.log(Object.prototype.hasOwnProperty.call(obj, 'hasOtherProperties'));    // true
console.log(Object.prototype.hasOwnProperty.call(obj, 'hasNoProperties'));       // false