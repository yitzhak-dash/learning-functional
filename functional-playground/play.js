import * as lib from "../lib/es6-functional";
import * as _ from "lodash";

const print = (arg) => console.log(arg);

const ___ = (mes = "") => {
    const finalMessageLength = 70;
    const resultMessage = _.pad(mes.toUpperCase(), finalMessageLength, "*");
    console.log(`\n${resultMessage}`);
};

var array = [1, 2, 3];
lib.foreach(array, (data) => console.log(data)); //refereing to imported forEach

const obj = {id: 123, name: "moshe"};
lib.foreachObj(obj, (k, v) => console.log(`${k} -> ${v}`));

print(lib.every([NaN, NaN, NaN], isNaN));
print(lib.every([NaN, NaN, 4, NaN], isNaN));

var people = [
    {firstname: "aaFirstName", lastname: "cclastName"},
    {firstname: "ccFirstName", lastname: "aalastName"},
    {firstname: "bbFirstName", lastname: "bblastName"}
];

print(people.sort(lib.sortBy("firstname")));

___();
var fn = (arg) => {
    let outer = "Visible";
    let innerFn = () => {
        console.log(outer);
        console.log(arg)
    };
    return innerFn;
};

var closureFn = fn(5);
closureFn();

___();
lib.foreach([1, 2, 3], (a) =>
    lib.tap(a)(() => {
            console.log(a)
        }
    )
);

___();
const doPayment = lib.once(() => "payment is done");
print(doPayment());
print(doPayment());

___();
let fastFactorial = lib.memorized((n) => {
    if (n === 0) {
        return 1;
    }
    // This is it! Recursion!!
    return n * fastFactorial(n - 1);
});


print(fastFactorial(5));
print(fastFactorial(3));

___();
let testMem = lib.memorized((n) => {
    console.log("i am here");
    return n + 100
});
print(testMem(1));
print(testMem(1));

___("variadic");
lib.variadic(1, 2, 3);

___("carry");
const add = (x, y) => x + y;
const autoCurriedFn = lib.curry(add);
print(autoCurriedFn(1)(2));

___("Curring in Action");
___("Finding number in Array Contents");
const match = lib.curry((expr, str) => str.match(expr));
const hasNumber = match(/[0-9]+/);
const filter = lib.curry((predicate, arr) => arr.filter(predicate));
const findNumberInArray = filter(hasNumber);
print(findNumberInArray(['one', '456brrr', '1a2b3']));

___("squaring an Array");
const map = lib.curry((func, arr) => arr.map(func));
const squareAll = map((x => x * x));
print(squareAll([10000000000, 3, 4, 5, 6]));





___('end');