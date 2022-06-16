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

/* const a = +prompt('Введите первое число которие хотите сравнить', ''),
      b = +prompt('Введите второе число которие хотите сравнить', '');

if (a == b){
    alert(`Number ${a} equals ${b}`);
} else {
    alert(`No, number ${a} noting equals number ${b}`);
} 

// еще один вариант сравнить что-то с чем-то, прри помощи строгого сравнения switch

const num = 100;

switch (num) {
    case 50:
        console.log('Wrong(');
        break;
    case 150:
        console.log('Wrong(');
        break;
    case 100: // если будет 101 будет ответ No all chance mised(((
        console.log('Yeah it right');
        break;
    default:
        console.log('No all chance mised(((');
        break;
} */

let a = 0;

while (a < 100) {
    console.log(a);
    a++;
}

do {
    console.log(a);
    a++;
}
while (a < 100);

let b = 1;

for (let i = 1; i < 100; i++) {
    if (i === 10){
        break;
    }
    console.log(i);
}