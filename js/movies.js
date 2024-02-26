/*
1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

"use strict";
//
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

function rememberMyFilms() {
	for (let i = 0; i < 2; i++){
	
		const a = prompt("Один из последних просмотренных фильмов?", "").trim(), //trim убираем пустые строки
	      b = prompt("На сколько оцените его?", "");
		if(a != null && b != null && a != "" && b != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
	  console.log("error");
			i--;og("Done!");
		} else {
			console.l;
		}
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Посмотрено довольно мало фильмов");	
	} else if (personalMovieDB > 10 && personalMovieDB < 30) {
		console.log("Вы класический зритель");
	} else if (personalMovieDB >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Ошибка");
	}	
}

detectPersonalLevel();

function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	} 
}
showMyDB();

//Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
//"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres

function writeYourGenres() {
	for (let i = 1; i <= 3; i++){
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genre;
	}
}
writeYourGenres();

console.log(personalMovieDB);