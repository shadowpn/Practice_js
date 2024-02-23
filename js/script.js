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

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Cколько фильмов вы уже посмотрели?", "");
	while (numberOfFilms == " " || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Cколько фильмов вы уже посмотрели?", "");
	}
}
start();

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

function rememberFilms() {
  for (let i = 0; i < 2; i++){
	
	const a = prompt("Один из последних просмотренных фильмов?", ""),
	      b = prompt("На сколько оцените его?", "");
	if(a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
	  console.log("error");
		i--;og("Done!")
	} else {
		console.l
	}
 }
}
rememberFilms();

function detectPersonalLevel() {
       if (personalMovieDB.count < 10) {
		console.log("Посмотрено довольно мало фильмов");	
	} else if (personalMovieDB > 10 && personalMovieDB < 30) {
		console.log("Вы класический зритель")
	} else if (personalMovieDB >= 30) {
		console.log("Вы киноман")
	} else {
		console.log("Ошибка")
	}	
}

detectPersonalLevel();


console.log(personalMovieDB);


// if ( 4 == 9 ) { 
// 	console.log("Ok!");
// } else {
// 	console.log("Error");
// }

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

// console.log( NaN || 2 || undefined );

// console.log( NaN && 2 && undefined );


// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);

// console.log( 5 === 5 && 3 > 1 || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
// 	console.log("Done!");
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
// 	console.log("Done!");
// }

// let num = 50;

// while (num < 50) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);

// for (let i = 2; i < 8; i++) {
// 	console.log(num);
// 	num++;
// }

// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(j);
// 	}
// }

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
// 	for (let j = 0; j < i; j++){
//      result += "*";
// 	}
	
// 	result += "\n";
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level: ${j}`); 
// 		for (let k = 0; k < 3; k++) {
// 			if (k === 2) continue first;
// 			console.log(`Third level: ${k}`); 		
// 	    }
// 	}
// }
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

//Task 1;

for (let i = 5; i < 11; i++){
	console.log(i)
}

//Task2;

for (let j = 20; j > 10; j--) {
	if (j ===13) break;
	console.log(j);
}
//Task 3;

for (let k = 2; k <= 10; k +=2) {
	console.log(k)
}
//Task 4;
for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 }
//Переписаный код 
let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}
//Task 5
let arr = []; // Создаем пустой массив
for (let i = 5; i <= 10; i++) {
    arr.push(i); // Добавляем каждое число от 5 до 10 в массив
}

console.log(arr); // Выводим массив в консоль

//Task
// Место для первой задачи - Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
//Должен получиться точно такой же массив
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    
    // Не трогаем
    return result;
}

// Место для второй задачи Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
//Для определения типа данных используйте typeof();
//Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, "Shopping", 20, "Homework"];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        // Проверяем, является ли текущий элемент числом
        if (typeof data[i] === "number") {
            // Увеличиваем число в 2 раза
            data[i] *= 2;
        } else if (typeof data[i] === "string") {
            // Добавляем к строке " - done"
            data[i] +=  "- done";
        }
    }
    
    // Не трогаем
    return data;
}

// Место для третьей задачи - Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
//Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, "Shopping", 20, "Homework"];
    const result = [];

    // Пишем решение вот тут
      for (let i = data.length - 1; i >= 0; i--) {
        // Добавляем текущий элемент массива data в начало массива result
        result.push(data[i]);
    }
    
    // Не трогаем
    return result;
}

const lines = 5;
let res = " ";
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        res += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        res += "*";
    }
    res += "\n";
}

console.log(res);
//В этом коде происходит построение треугольника из звездочек с помощью вложенных циклов. Каждая строка состоит из пробелов и звездочек. Первый внутренний цикл добавляет пробелы перед звездочками для выравнивания их вправо. Второй внутренний цикл добавляет звездочки в каждую строку. После завершения построения строки добавляется символ переноса строки \n, чтобы начать новую строку.



