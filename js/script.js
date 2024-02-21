/* eslint-disable indent */
/* eslint-disable semi */
"use strict";

// let number = 5;
// const letBorderWight = 1;

// const answers = [];

// answers[0] = prompt("Как Ваше имя?", "");
// answers[1] = prompt("Как Ваше фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// let incr = 10;
// let decr = 10;

// ++incr;
// --decr;

// console.log(incr);
// console.log(decr);

// console.log(5%2);

// console.log(2*4 == 8);

const numberOfFilms = +prompt("Cколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors:{},
	genres: [],
	privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
	  b = prompt("На сколько оцените его?", ""),
	  c = prompt("Один из последних просмотренных фильмов?", ""),
	  d = prompt("На сколько оцените его?", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


if ( 4 == 9 ) { 
	console.log("Ok!");
} else {
	console.log("Error");
}

// условие  if else
// const num = 50;
// if (num < 49) {
// 	console.log("Error");
// } else if (num > 100) {
// 	console.log("Много");
// } else {
// 	console.log("Ok!");
// }

// // тернарный оператор 

// (num === 50) ? console.log("Ok!") : console.log("Error");

//  Условие через switch

// const num = 51;
// switch (num) {
// case 49:
// 	console.log("Неверно");
// 	break;
// case 100:
// 	console.log("Неверно");
// 	break;
// case 50:
// 	console.log("В точку");
// 	break;
// default:
// 	console.log("Не в этот раз");
// 	break;
// }

console.log( NaN || 2 || undefined );

console.log( NaN && 2 && undefined );


console.log( 25 || null && !3 );

console.log( NaN || null || !3 || undefined || 5);

console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
// 	console.log("Done!");
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
	console.log("Done!");
}

let num = 50;

// while (num < 50) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);

for (let i = 2; i < 8; i++) {
	console.log(num);
	num++;
}

for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
	}
}

let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
	for (let j = 0; j < i; j++){
     result += "*";
	}
	
	result += "\n";
}
console.log(result);

first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`); 
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first;
			console.log(`Third level: ${k}`); 		
	    }
	}
}
/*
В этом коде используется вложенный цикл for, который выполняется три раза для переменной i, три раза для переменной j и три раза для переменной k.

    Строка for (let i = 0; i < 3; i++) { начинает первый уровень цикла, где переменная i инициализируется с 0 и увеличивается на 1 на каждой итерации, пока i < 3.
    Строка console.log(First level: ${i}); выводит значение переменной i на первом уровне цикла.
    Внутри первого уровня цикла есть вложенный цикл, начинающийся с for (let j = 0; j < 3; j++) {.
    Строка console.log(Second level: ${j}); выводит значение переменной j на втором уровне цикла.
    Внутри второго уровня цикла есть еще один вложенный цикл, начинающийся с for (let k = 0; k < 3; k++) {.
    Строка if (k === 2) continue first; проверяет, если значение переменной k равно 2, то происходит переход на следующую итерацию цикла на первом уровне.
    Строка console.log(Third level: ${k}); выводит значение переменной k на третьем уровне цикла.
*/




