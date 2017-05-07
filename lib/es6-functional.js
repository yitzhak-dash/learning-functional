const foreach = (array, fn) => {
    let i;
    for (i = 0; i < array.length; i++)
        fn(array[i]);
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
    (fn) => (typeof fn === 'function' && fn(val), console.log(val));

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

const arrayUtils = {
    map,
    filter,
    concatAll
};

export {foreach, foreachObj, unless, times, every, some, sortBy, tap, unary, once, memorized, arrayUtils};