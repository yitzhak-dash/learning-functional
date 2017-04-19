import * as lib from '../lib/es6-functional';

const print = (arg) => console.log(arg);
const ___ = () => console.log(`************************************************************`);

var array = [1,2,3];
lib.foreach(array,(data) => console.log(data)); //refereing to imported forEach

const obj = {id:123, name: "moshe"};
lib.foreachObj(obj,(k,v) => console.log(`${k} -> ${v}`));

print(lib.every([NaN,NaN,NaN],isNaN));
print(lib.every([NaN, NaN, 4,NaN], isNaN));

var people = [
    {firstname: "aaFirstName", lastname: "cclastName"},
    {firstname: "ccFirstName", lastname: "aalastName"},
    {firstname:"bbFirstName", lastname:"bblastName"}
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
lib.foreach([1,2,3],(a) =>
    lib.tap(a)(() =>
        {
            console.log(a)
        }
    )
);

___();
const doPayment = lib.once(() => 'payment is done');
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
let testMem = lib.memorized((n) => {console.log('i am here');return n + 100});
print(testMem(1));
print(testMem(1));
