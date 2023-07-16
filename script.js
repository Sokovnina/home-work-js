// Задание 1

// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.

// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.

// Выведите в консоль строку:

// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 

// (необходимые значения добавьте с помощью BOM)

// console.log(navigator.userAgent);

// console.log(location.href);

// console.log('На компьютере с ОС', 'с помощью браузера', navigator.userAgent, 'я открыл страничку', location.href);


// В файле html есть разметка (добавьте ее в свой файл html):

/* <ul id="list">
<li>Джон</li>
<li>Пит</li>
<li>Джессика</li>
<li>Сара</li>
</ul> */

// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).

// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

// const listItems = document.querySelectorAll('#list li');
// for (let i = 0; i < listItems.length; i++){
//     console.log(listItems[i].textContent);
// }

// let listItems = document.querySelectorAll('#list li');
// for (var i = 0; i < listItems.length; i++) {
//     console.log(listItems[i].textContent = i);
// }

// Задание 3

// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.

// const elementsRemove = document.querySelectorAll('.forRemove');
// console.log(elementsRemove);


// elementsRemove.remove();

// Задание 4

// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

// const paragraph = document.createElement('p');
// paragraph.textContent = ('Hello');
// paragraph.style.fontSize = ('36px');
// paragraph.style.fontWeight = ('bolt');
// document.body.appendChild(paragraph);


// Задание 5
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.


// function tagName (tag, color, content){
//     const item = document.createElement(tag);
//     item.style.color = color;
//     item.textContent = content;
//     console.log(item);
//     document.body.appendChild(item);

// }

// tagName('h1', 'yelow', 'Заголовок 1');
// tagName('p', 'red', 'Параграф');


// Задание 6
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

// const select = document.querySelector('select');
// for (let year = 1960; year <= 2020; year++) {
//     let option = document.createElement('option');
//     option.value = year;
//     option.textContent = year;
//     select.appendChild(option);
//   }

// Задание 7

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом


// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.


// const clients = [

// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}

// ]

// const ordersUl = document.querySelector('ul');

// clients.forEach(item => {
//     const li = document.createElement('li');
//     const status = item.order ? 'оплатил' : 'отменил';
//     li.textContent = `Клиент ${item.name} ${status} заказ`;
//     ordersUl.appendChild(li);

// })


// Задание 8

// Есть массив ссылок:

// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// Вам нужно:

// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)

// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")

// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// const div = document.createElement('div');
// div.style.backgroundColor = 'yellow';
// div.style.padding = '10px';


// for (let i = 0; i < linksArr.length; i++){
// let link = document.createElement('a');
// link.href = linksArr[i];
//   link.textContent = linksArr[i];
//   link.target = '_blank';
//   div.appendChild(link);
// }

// document.body.appendChild(div);