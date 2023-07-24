// 1) Задать объект с полем name.

// Задать переменную, которая будет хранить JSON упомянутого объекта.

// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

// let obj = {
//     name: "misha"
//   };
  
//   let json = JSON.stringify(obj);
  
//   let parsed = JSON.parse(json);
  
//   console.log(parsed); 


// 1.2) Создать переменную user, в которой хранится объект.

// Записать переменную в localStorage.

// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

// let user = {
//   name: "misha"
//   };
  
//   localStorage.setItem('user', JSON.stringify(user));
  
//   let newUser = JSON.parse(localStorage.getItem('user'));
  
//   console.log(newUser); 




// Задание 2 Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).


// document.querySelector('form').addEventListener('submit', function(e) {
//   e.preventDefault();

//   let inputValue = document.querySelector('input').value;

//   let li = document.createElement('li');

//   li.textContent = inputValue;

//   document.querySelector('ul').appendChild(li);

//   document.querySelector('input').value = '';
// });



// Задание 3 Добавить в таск-менеджер сохранение задач между перезагрузками страницы.

// localStorage.saveItem('tasks', JSON.stringify(tasks));

// let savedTasks = JSON.parse(localStorage.getItem('tasks'));

