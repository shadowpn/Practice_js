"use strict"

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));


console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier);


// const jonh = {
//     health: 100

// };

//jonh.__proto__ = soldier;
//console.log(jonh.armor);
Object.setPrototypeOf(jonh, soldier); // это новый формат вмеcто старого аналога jonh.__proto__ = soldier;

jonh.sayHello();