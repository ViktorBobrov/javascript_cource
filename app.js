
// управление элементами массива
const users = ['Аня','Вика','Катя'];
console.log(users);
users[2] = 'Кристина';// меняет элемент массива с индексом 2 на  Кристину.т.е. вместо кати теперь в массиве кристина
// console.log(users);
// users[3] = 'Никита';// добавляет  на индекс элемента 3 элемент 'Никита'
// console.log(users);
// users.push('Никита');// push() Добавляет в конец  массива элемент внутри скобок. 
// console.log(users);

// const arrLenght = users.push('Никита');
// console.log(arrLenght);// Возвращает длинну мутировавшего массива(вместе с никитой длина массива = 4)
//  users.unshift('Вася');// добавляет в начало массива элемент. Василий станет под индкс элемента = 0 . все остальные сместяться
//  users.pop();// удаляет  элементы из массива,удаляет последний элемент
//  const el =users.pop();
//  console.log(el);// выведет удаленный элемент

//  users.shift();// удаляет элемент массива с индексом 0. то есть самый первый
//  const el2 =users.shift();
//  console.log(el);// выведет удаленный элемент

 //ПОИСК ЭЛЕМЕНТА
//  const roles =['user','admin','manager'];
//  const elIndex = roles.indexOf('admin');
//  console.log(elIndex);// метод который ищет элемент в массиве, и если он есть выведет 1 в консоль,если не найдет -1.
//  console.log(roles.includes('admin')); //выводит true and false есть или нет  данный элемент в массиве

//  if(roles.includes('admin')){// если в массиве есть элемент 'admin'  то выведется в консоль 'доступ есть'
	// console.log('доступ есть');
//  }
// clise,cplise,concat,reverse
// const roles1 =['user','admin','manager','superuser'];
// const res = roles1.slice(2);// не модифицирует исходный массив, обрезает и показывает с элемента под индексом 2( в нашем случае это 'manager','superuser')
// console.log(roles1);
// console.log(res);
// 
// const res2 = roles1.slice(2,4);//  в качестве  первого аргумента начальный индекс в качестве второго конечный индекс. т .е. обрежентся часть с первого включительно по второй не включая второй. и то что между ними выведется в консоль
// console.log(roles1);
// console.log(res2);

// const res3 = roles1.slice(-1);// берет последний элемент массива
// console.log(res3);

// переходим к cplice
// const res5 =roles1.splice(2);// модифицирует исходный массив.clise не модифицирует массив
// console.log(res5);

// const res5 =roles1.splice(2,2);// со второго индекса  два элемента и выведется в консоль
// console.log(res5);

// reverse 
// const res8 =roles1.reverse();// переворачивает массив и модифицирует его.
// console.log(res8);
// 
//конкатенация(складывание массивов)

// const newRoles = ['sysadmin','developer'];
// let res9 = roles1.concat(newRoles);
// console.log(res9);


//  из строки в массив
// const roles1 =['user','admin','manager','superuser'];
// const url = 'auth/user/login';
// const res = url.split('/');// метод сплит split() принимает в себя символ по которым нам надо разбить строку на составные части и вернет массив
// console.log(res);

// console.log(roles1.join('-'));

/*
Дан список задач
const tasks = ['Задача 1'];

Сделать функции:
Добавление задачи в конец
Удаление задачи по названию
Перенос задачи в начало списка по названию
! Всегда меняем исходный массив 
*/

// let tasks = ['Задача 1'];
// 
//   function AddElement(elem) {
	// let addElem = tasks.push(`${elem}`);
	// console.log(tasks);
//  }
//  AddElement('Задача 2');
//  AddElement('Задача 3');
//  AddElement('Задача 4');
// 
// function deleteElem(elem){
	// const index = elem.indexOf(elem);
	// if( index === -1){
		// return;
	// }
	// return tasks.splise(index,1);
// }
// 
// 
// function migrateElem(elem){
// const result = deleteElem(elem)
// if(!result){
	// return;
// }
// tasks.unshift(result[0]);
// }
// 

//деструктуризация
const userData = ['Антон',18,'Москва'];
function getData(){
	return ['Антон',18,'Москва'];
}
const [userName,age,city] = getData();
// const userName = getData()[0];
// const age =getData()[1];
// const city =getData()[2];

console.log(userName,age,city);

// rest оператор

const data = [1,2,3,4,5,6,7];
const [one,two, ...others] = data;
console.log(one,two, others);