'use strict';

function showMassage(text){
    console.log(text);
}
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
} 

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


      *
     ***
    *****
   *******
  *********
 ***********
*************


let a = '';
const b = 9;
let c = 0;

for (let i = 0; i < b; i++) {

    for (let j = 8; j > i; j--) {
        a += '  ';
    }

    for (let k = -1; k < i; k++) {
        a += ' *';
    }

    for (let l = 0; l < i; l++) {
        a += ' *';
    }

    a += '\n';
}

console.log(a); 

firstCicle: for (let i = 0; i < 3; i++) {
    console.log(i);

    secondCicle: for (let j = 0; j < 4; j++) {
        console.log(j);
        if (j === 2) {continue firstCicle;}

        thirdCicle: for (let k = 0; k < 4; k++) {
            console.log(k);
            if (k === 2) {continue secondCicle;}
        }
    }
}

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = arr.length; i > 0; i--) {
    let a = arr[arr.length - i];
    result[arr.length - i] = a;
}

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(arr);
console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = data.length; i > 0; i--) {
    let b = 1;
    let a = data[data.length - i];
    if (typeof(a) === 'number') {
        b = a * 2;
        data[data.length - i] = b;
    } else if (typeof(a) === 'string') {
        a += ' - done';
        data[data.length - i] = a;
    }
}


for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
}
console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
let b = data.length - 1;

for (let i = data.length; i > 0; i--) {
    let a = data[b];
    result[data.length - i] = a;
    b--;
}

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i]
}

console.log(data);
console.log(result);


const lines = 5;
let result = '';
let result1 = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 5; j > i; j--) {
        result1 += ' ';
    }
    for (let k = -1; k < i; k++) {
        result1 += '*';
    }
    for (let l = 0; l < i; l++) {
        result1 += '*';
    }

    result1 += '\n';
}

console.log(result1);


for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);*/

showMassage('Hello my name Vitalii');

const calc = function(a, b){
    return a + b * 2;
};

showMassage( calc(2, 2));

const calc2 = (a, b , c) => (a + b) * c ;

showMassage(calc2(8, 10, 50));