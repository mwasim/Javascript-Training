var GenericsDemo;
(function (GenericsDemo) {
    function printArray(arr) {
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    GenericsDemo.main = function (numArr, strArr) {
        console.log("Numbers Array Demo:");
        printArray(numArr);
        console.log("\n");
        console.log("Strings Array Demo:");
        printArray(strArr);
        console.log("\n");
    };
})(GenericsDemo || (GenericsDemo = {}));
var numbersArr = [1, 3, 5, 6, 7];
var stringsArr = ["apple", "banana", "orange"];
GenericsDemo.main(numbersArr, stringsArr);
