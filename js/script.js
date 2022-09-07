'use strict';

function showConsole(text){
    console.log(text);
}
// const ConsoleWOrD = 'Hello lika';

// console.log(ConsoleWOrD);

// const LikaAge = 1<18;

// console.log(LikaAge);

// const user = {
//     name: 'Lika',
//     isMarried: false,
//     age: 19
// };
// console.log(`імя користувача: ${user.name}, вік користувача: ${user.age}, чи одружений користувач: ${user.isMarried}`);
// console.log(user);

// //            0              1             2            3              4          5  6  7   8
// const fruit = ['orange.png', 'melon.png', 'cherry.png', 'apple.jpek', 'pear.png', 1, 0, 10, 20 ];
// console.log(fruit[4]);

// const result = confirm('Вам 18 років?');
// alert(result);

//  const age = +prompt('How old are you?', 'number'); // чтобы вивести число необходимо поставить +.
// // Если без плюса тогда строка!!!!
// alert(age);
// console.log(typeof(age)); 

//  let incr = 10,
//     decr = 10;

// console.log(incr++);
// console.log(decr--);

// console.log(incr);
// console.log(decr);

// console.log(++incr);
// console.log(--decr); 

// const negativeNumber = -25;

// console.log(negativeNumber);

//  const a = +prompt('Введите первое число которие хотите сравнить', ''),
//       b = +prompt('Введите второе число которие хотите сравнить', '');

// if (a == b){
//     alert(`Number ${a} equals ${b}`);
// } else {
//     alert(`No, number ${a} noting equals number ${b}`);
// } 

// // еще один вариант сравнить что-то с чем-то, прри помощи строгого сравнения switch

// const num = 100;

// switch (num) {
//     case 50:
//         console.log('Wrong(');
//         break;
//     case 150:
//         console.log('Wrong(');
//         break;
//     case 100: // если будет 101 будет ответ No all chance mised(((
//         console.log('Yeah it right');
//         break;
//     default:
//         console.log('No all chance mised(((');
//         break;
// } 

// let a = 0;

// while (a < 100) {
//     console.log(a);
//     a++;
// }

// do {
//     console.log(a);
//     a++;
// }
// while (a < 100);

// let b = 1;

// for (let i = 1; i < 100; i++) {
//     if (i === 10){
//         break;
//     }
//     console.log(i);
// } 


//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************


// let a = '';
// const b = 9;
// let c = 0;

// for (let i = 0; i < b; i++) {

//     for (let j = 8; j > i; j--) {
//         a += '  ';
//     }

//     for (let k = -1; k < i; k++) {
//         a += ' *';
//     }

//     for (let l = 0; l < i; l++) {
//         a += ' *';
//     }

//     a += '\n';
// }

// console.log(a); 

// firstCicle: for (let i = 0; i < 3; i++) {
//     console.log(i);

//     secondCicle: for (let j = 0; j < 4; j++) {
//         console.log(j);
//         if (j === 2) {continue firstCicle;}

//         thirdCicle: for (let k = 0; k < 4; k++) {
//             console.log(k);
//             if (k === 2) {continue secondCicle;}
//         }
//     }
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = arr.length; i > 0; i--) {
//     let a = arr[arr.length - i];
//     result[arr.length - i] = a;
// }

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(arr);
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = data.length; i > 0; i--) {
//     let b = 1;
//     let a = data[data.length - i];
//     if (typeof(a) === 'number') {
//         b = a * 2;
//         data[data.length - i] = b;
//     } else if (typeof(a) === 'string') {
//         a += ' - done';
//         data[data.length - i] = a;
//     }
// }


// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }
// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// let b = data.length - 1;

// for (let i = data.length; i > 0; i--) {
//     let a = data[b];
//     result[data.length - i] = a;
//     b--;
// }

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// console.log(data);
// console.log(result);


// const lines = 5;
// let result = '';
// let result1 = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 5; j > i; j--) {
//         result1 += ' ';
//     }
//     for (let k = -1; k < i; k++) {
//         result1 += '*';
//     }
//     for (let l = 0; l < i; l++) {
//         result1 += '*';
//     }

//     result1 += '\n';
// }

// console.log(result1);


// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// showMassage('Hello my name Vitalii');

// const calc = function(a, b){
//     return a + b * 2;
// };

// showMassage( calc(2, 2));

// const calc2 = (a, b , c) => (a + b) * c ;

// showMassage(calc2(8, 10, 50));

// const word = ('myNameVitaliiI`m 20');

// console.log(word.slice(20, 21));

// function calculateVolumeAndArea(length) {
//     if (typeof(length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// function getCoupeNumber(place) {
//     if (typeof(place) == 'string' || place < 0 || !Number.isInteger(place)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     } else if (place == 0 || place > 36) {
//         return "Таких мест в вагоне не существует";
//     } 

//     for (let i = 4; i <= 36; i = i + 4 ) {
//         if (place <= i) {
//             return Math.ceil(i / 4);
//         }
//     }
// }

// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) === 'string' || minutesTotal < 0 || !Number.isInteger(minutesTotal) ) {
//         return 'Ошибка, проверьте данные';
//     }

//     const hours = Math.floor(minutesTotal / 60),
//           minutes = minutesTotal % 60;
    
//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1: 
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4: 
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }
//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(180));

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return '';
//     }

//     let result = '',
//         first = 0,
//         second = 1;

//     for (let i = 0; i < num; i++){
//         if (i + 1 === num ){
//             result += `${first}`;
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     return result;
// }

// console.log(fib(100));

// const obj = {
//     position: 'centre',
//     width: 1920,
//     height: 1024,
//     name: 'test',
//     color: {
//         border: 'white',
//         backGround: 'black'
//     },
//     dsafdsaf:'sdfadsf',
//     dafsadsfda: 'dsafa',
//     showKeys: function(){
//         showMassage(Object.keys(obj).length);
//     }
// };

// for (let key in obj) {
//     if (typeof(obj[key]) === 'object') {
//         for (let i in obj[key]) {
//             showMassage(`Массив ${key} имеет свойство ${i} со значением ${obj[key][i]}`);
//         }
//     } else{
//     showMassage(`Свойство ${key} имеет значение ${obj[key]}`);
//     }
// }

// showMassage(Object.keys(obj).length);

// obj.showKeys();

// const {border, backGround} = obj.color;

// console.log(border);


// const arr = [1, 2, 5, 3, 4, 5, 7, 8, 8];
// arr[arr.length] = 1;


// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// // for(let value of arr){
// //     console.log(value);
// // }

// console.log(arr);

// const str = 'fasdfsad, dsfadsf, dsfasdad, fsdfdsfd, fsfsd, dsfasdf, sadfdasf, adsf ads, dsafs, fdsafa, as';

// const products = str.split(', ');

// showMassage(products);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = '';
//         str = `Мне ${age} и я владею языками:`;

//         languages.forEach(function(lang) {
//             str += ` ${lang.toUpperCase()}`;
//         });

//         return str;
//     }
// };

// // showConsole(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// // showMassage(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for ( let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }

//     return str;
// }

// // showMassage(showProgrammingLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из:';

//     arr.forEach(function(member){
//         str += ` ${member}`;
//     });

//     return str;
// }

// // showConsole(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(function(city){
//         console.log(city.toLowerCase());
//     });
// }

// // showConsole(standardizeStrings(favoriteCities));

// const someString = 1;

// function reverse(str) {
//     if (typeof(str) === 'string') {
//         const strModified = str.split('');
//         strModified.reverse();
//         str = strModified.join('');
//     } else {
//         return 'Ошибка!';
//     }
//     return str;
// }

// showConsole(reverse(someString));


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:';

//     arr.forEach(function(currencies) {
//         if (currencies !== missingCurr){
//         str += `\n${currencies}`;
//         }
//     });
//     return str;
// }

// showConsole(availableCurr([...baseCurrencies, ...additionalCurrencies], 'EUR'));


// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let square = 0,
//         volume = 0;
    
//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = square * data.height;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// console.log(isBudgetEnough(shoppingMallData));

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard',
//  'Takesi', 'Sam', 'Mark', 'Mark', 'Mark', 'Mark'];

// function sortStudentsByGroups(arr) {
//     arr.sort();

//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++){
//         if (i < 3){
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }

//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
// }

// showConsole(sortStudentsByGroups(students));

// console.log(+'sadsafadsfda');

// showConsole(parseInt('13px', 3));

// const a = 1;
// showConsole(!!a);

// console.log( typeof(+"Infinity") );

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if ((+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1))) < +average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors =[ {name: 'Mike', age: 32} ];
//     return copy;
// }

// transferWaitors(restorantData);

// const cube = document.getElementById('box'),
//       butn = document.getElementsByTagName('button');

// cube.style.alignItems = 'center';
// cube.style.border = '4mm ridge rgba(100,0,10,1)';

// butn[2].style.borderRadius = '150%';

// const evBtn = document.getElementById('btn'),
//       link = document.querySelector('a');

// let i = 0;

// const deleteElement = (event) =>{
//     console.log(event.target);
    // i++;
    // if (i === 1) {
    //     evBtn.removeEventListener('click', deleteElement);
    // }
// };

// evBtn.addEventListener('click', deleteElement, {once: true}); // тут зявдяки , {once: true} можна видалити всю умову відміни натискання

// link.addEventListener('click', event =>{
//     event.preventDefault();

//     console.log(event.target);
// });  // якщо тут буде , {once: true}, то ми перейдемо по посиланню 

// function degree(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return x * degree(x, n - 1);
//     }
// }

// console.log(degree(2, 50));


// function factorial(n) {
//     if( n === 'string' || !Number.isInteger(n) ) {
//         return 'любым сообщением на ваше усмотрение.';
//     } else if (n <= 0) {
//         return 1;   
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(4));