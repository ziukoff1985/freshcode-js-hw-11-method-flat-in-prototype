'use strict';

function MyArray(...args) {
    this.length = args.length;
    for (let i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
}

const flattenArr = new MyArray(
    1,
    new MyArray(10, new MyArray(100)),
    new MyArray(10)
);
console.log(flattenArr);

MyArray.prototype.flat = function (depth = 1) {
    const result = new MyArray();

    function flatten(source, currentDepth) {
        for (let i = 0; i < source.length; i++) {
            if (source[i] instanceof MyArray && currentDepth > 0) {
                flatten(source[i], currentDepth - 1);
            } else {
                result[result.length] = source[i];
                result.length++;
            }
        }
    }

    flatten(this, depth);
    return result;
};

console.log(flattenArr.flat(2));
