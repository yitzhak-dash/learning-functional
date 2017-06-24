const foreach = (array, fn) => {
    let i;
    for (i = 0; i < array.length; i++) {
        fn(array[i]);
    }
};

const foreachObj = (obj, fn) => {
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            fn(property, obj[property]);
        }
    }
};

const unless = (predicate, fn) => {
    if (!predicate) {
        fn();
    }
};

const times = (count, fn) => {
    for (let i = 0; i < count; i++) {
        fn(i);
    }
};

const every = (arr, fn) => {
    let result = true;
    for (let val of arr) {
        result = result && fn(val);
        if (!result) {
            return result;
        }
    }
    return result;
};

const some = (arr, fn) => {
    let result = false;
    for (let val of arr) {
        result = result || fn(val);
        if (result) {
            return result;
        }
    }
    return result;
};

const sortBy = (property) => {
    return (a, b) => {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    }
};

const tap = (val) =>
    (fn) => (typeof fn === "function" && fn(val), console.log(val));

const unary = (fn) => fn.length === 1 ? fn : (arg) => fn(arg);

const once = (fn) => {
    let done = false;

    return () =>
        done ?
            undefined
            :
            ((done = true), fn.apply(this, arguments));
};

const memorized = (fn) => {
    let lookupMap = {};
    return (arg) => (lookupMap[arg]) || (lookupMap[arg] = fn(arg));
};

const map = (array, fn) => {
    const result = [];
    for (let item in array) {
        result.push(fn(item));
    }
    return result;
};

const filter = (array, fn) => {
    const result = [];
    for (let item in array)
        (fn(item)) ? result.push(item) : undefined;
    return result;
};

const concatAll = (array) => {
    const result = [];
    for (let item in array) {
        // result.push.apply(result, item);
        result.push(...item);
    }
    return result;
};

const reduce = (array, fn, initVal) => {
    let accumulator = (initVal !== undefined) ? initVal : array[0];

    if (initVal)
        for (let val in array)
            accumulator = fn(accumulator, val);
    else
        for (let i = 1; i < array.length; i++)
            accumlator = fn(accumlator, array[i])
    return [accumulator];
};

/*
 ############### Currying functions ##############
 */

// unary function
const identity = (x) => x;

// binary function
const add = (x, y) => x + y;

// variadic function
// A variadic function is a function that takes a variable number of arguments

// function variadic(a) {
//     console.log(a);
//     console.log(arguments);
// }

function variadic(a, ...variadic) {
    console.log(a);
    console.log(variadic);
}

const addCurried = x => y => x + y;

// calling by addCurried(1)(2);

// const curry = (binaryFn) => {
//     return function (x) {
//         return function (y) {
//             return binaryFn(x, y);
//         }
//     }
// };

const curry = (fn) => {
    if (typeof fn !== "function") {
        throw new Error("No function provided");
    }
    return function curriedFn(...args) {
        if (args.length < fn.length) {
            return function () {
                return curriedFn.apply(null, args.concat([].slice.call(arguments)));
            }
        }
        return fn.apply(null, args);
    }
};

const arrayUtils = {
    map,
    filter,
    concatAll,
    reduce
};

export {
    foreach,
    foreachObj,
    unless,
    times,
    every,
    some,
    sortBy,
    tap,
    unary,
    once,
    memorized,
    arrayUtils,
    variadic,
    curry
};