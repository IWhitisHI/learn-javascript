'use strict';

/* const ConsoleWOrD = 'Hello lika';

console.log(ConsoleWOrD);

const LikaAge = 1<18;

console.log(LikaAge);

const user = {
    name: 'Lika',
    isMarried: false,
    age: 19
};
console.log(`імя користувача: ${user.name}, вік користувача: ${user.age}, чи одружений користувач: ${user.isMarried}`);
console.log(user);

//            0              1             2            3              4          5  6  7   8
const fruit = ['orange.png', 'melon.png', 'cherry.png', 'apple.jpek', 'pear.png', 1, 0, 10, 20 ];
console.log(fruit[4]); */
/*
const result = confirm('Вам 18 років?');
alert(result); */

/* const age = +prompt('How old are you?', 'number'); // чтобы вивести число необходимо поставить +.
// Если без плюса тогда строка!!!!
alert(age);
console.log(typeof(age)); */

/* let incr = 10,
    decr = 10;

/*console.log(incr++);
console.log(decr--);

console.log(incr);
console.log(decr);

console.log(++incr);
console.log(--decr); 

const negativeNumber = -25;

console.log(negativeNumber); */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);