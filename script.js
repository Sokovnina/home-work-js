// Задание 1

// Задайте в коде переменную n с числовым значением.

// С помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.

// let n = 30;

// if (n >= 0 && n <= 100){
//     console.log("Переменная n находится в диапазоне от 0 до 100");
// } 

// Задание 2

// Дан объект с именами и заработными платами:
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:

// Заработная плата ххх составляет ххх рублей.

// ВНИМАНИЕ. Ваша программа должна работать для любого количества имён и зарплат!

// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
//     }

//     for(let key in engineers){
// console.log(`Заработная плата ${key} оставляет ${engineers[key]} рублей`);
//     }


// Задание 5

// Дан массив объектов, например:

// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// Добавить в каждый объект дополнительное поле usersAnswer со значением null.

// Решение должно работать для массива любой длины.








// Задание 8

// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;

// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.

// let nums = [5, 4, 3, 8, 0];
// let limit = 5;
// let newArray = [];

// for (let element of nums) {
//   if (element >= limit) {
//     newArray.push(element);
//   }
// }

// console.log(newArray);

// Задание 9

// Существует массив объектов, описывающих пользователей, например:
// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]

// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.

// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}];

// for(const element of users){
// if (element.age > 15){
//     console.log(element.name);
// }
// }

// Задание 10

// Задать массив слов. Например:

// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

// 1) Создать новый массив. С помощью цикла наполнить его объектами с ключами word (само слово), length (длина слова):

// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]

// Вывести этот массив в консоль.

// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)

// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"


// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
// let newArray = [];

// for (let i = 0; i < vegetables.length; i++) {
//     let word = vegetables[i];
//     let length = word.length;
//     newArray.push({ word: word, length: length });
//   }

// console.log(newArray);

// for (let i = 0; i < newArray.length; i++) {
//   let obj = newArray[i];
//   console.log(`${obj.word} - ${obj.length}`);
// }













