"use strict";

const arr = [1, 6, 3, 6, 8];
arr.sort(compareNum);
function compareNum(a, b) {
    return a - b;
}
// console.log(arr.length);
// arr[99] = 0;

arr.forEach(function(item, i, arr) { // тут нельзя импользовать break and continue
   console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("", "");
const products =  str.split(", ");
products.sort();

console.log(products.join('; '));

//arr.pop(); //
arr.push(10);
arr.

console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

}

for (let value of arr) { //в такой комбинации можно использовать break and continue
    console.log(value);
}


