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





