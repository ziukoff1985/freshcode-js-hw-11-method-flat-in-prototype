'use strict';

function MyArray(...args) {
    this.length = args.length;
    for (let i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
}

const flattenArr = new MyArray(
    1,
    2,
    new MyArray(1, 2, new MyArray(1, 2)),
    new MyArray(1, 2)
);
console.log(flattenArr);
