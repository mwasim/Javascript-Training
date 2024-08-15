"use strict";
/*
    Task
    Write a single generic function named printArray; this function must take an array of generic elements as a parameter (the exception to this is C++, which takes a vector). The locked Solution class in your editor tests your function.

    Note: You must use generics to solve this challenge. Do not write overloaded functions.
*/
var GenericsDemo;
(function (GenericsDemo) {
    function printArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    GenericsDemo.main = (numArr, strArr) => {
        console.log("Numbers Array Demo:");
        printArray(numArr);
        console.log("\n");
        console.log("Strings Array Demo:");
        printArray(strArr);
        console.log("\n");
    };
})(GenericsDemo || (GenericsDemo = {}));
const numbersArr = [1, 3, 5, 6, 7];
const stringsArr = ["apple", "banana", "orange"];
GenericsDemo.main(numbersArr, stringsArr);
