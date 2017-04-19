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
    return (arg) => (lookupMap[arg])|| (lookupMap[arg] = fn(arg));
};

export {foreach, foreachObj, unless, times, every, some, sortBy, tap, unary, once, memorized};