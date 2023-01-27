
// обьекты 
// /*Объекты же используются для хранения коллекций различных значений и более сложных сущностей. В JavaScript объекты используются очень часто, это одна из основ языка. 
// Объект может быть создан с помощью фигурных скобок {…} с необязательным списком свойств. Свойство – это пара «ключ: значение», где ключ – это строка (также называемая «именем свойства»), а значение может быть чем угодно.

// пример
// let user = {     // объект
	// name: "John",  // под ключом "name" хранится значение "John"
	// age: 30        // под ключом "age" хранится значение 30
//  };
// Для обращения к свойствам используется запись «через точку»:
// alert( user.name ); // John
// alert( user.age ); // 30
// добавление свойства обьекта
// user.isAdmin = true;
// console.log(user);//смотри консоль
// Для удаления свойства мы можем использовать оператор delete:
// delete user.age;
// Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
// "likes birds": true //но с эим есть ньюанс, при обращнии к нему через точку может вылезть ошибка чтобы обратится к нему надо заключать в квадрадны скобки[]
// присваивание значения свойству
// user["likes birds"] = true;

// получение значения свойства
// alert(user["likes birds"]); // true

// удаление свойства
// delete user["likes birds"];
// Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения. Например, имя свойства может храниться в переменной:
// let key = "likes birds";

// то же самое, что и user["likes birds"] = true;
// user[key] = true;

// Вычисляемые свойства
// мы моем использовать квадратные скобки для создания вычисляемого свойства
// let fruit = prompt("Какой фрукт купить?", "apple");
// 
// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// alert( bag.apple ); // 5, если fruit="apple"

// проверка сущевствования свойства. оператор 'in'.существует специальный оператор "in" для проверки существования свойства в объекте.
// Синтаксис оператора:
// "key" in object
// где "key" проверяемое свойство где object название обьекта
// пример 
// let user = { name: "John", age: 30 };// это обьект

// alert( "age" in user ); // true, user.age существует
// alert( "blabla" in user ); // false, user.blabla не существует
// Если мы опускаем кавычки, это значит, что мы указываем переменную, в которой находится имя свойства. Например:
// let user = { age: 30 };
// 
// let key = "age";
// alert( key in user ); // true, имя свойства было взято из переменной key

/*цикл for(...in...) 
СИНТАКСИС
for (key in object) {
//   тело цикла выполняется для каждого свойства объекта
}
*/
// пример
// let user = {
	// name: "John",
	// age: 30,
	// isAdmin: true
//  };
//  
//  for (let key in user) {
	// ключи
	// alert( key );  // name, age, isAdmin
	// значения ключей
	// alert( user[key] ); // John, 30, true
//  }
// let salaries = {
	// John: 100,
	// Ann: 160,
	// Pete: 130
//  };
//  let sum = 0;
//  for(key in salaries ){
	// sum+=salaries[key];
//  };
//  alert(sum);
// 'use strict'
// const audi={
	// make:'Audi',
	// model:'A3',
	// year:2021,
	// damages:[],
	// addDamage(part,rate){
		// console.log(`У авто ${this.make}${this.model} ${this.year} добавленно: - повреждение ${part} со степенью ${rate}`);
		// this.damages.push({
			// part,
			// rate
		// })
	// }
// };
// audi.addDamage('Капот',1);
// const BMW={
	// make:'BMW',
	// model:'X5',
	// year:2022,
	// damages:[],
// };
// BMW.addDamage= audi.addDamage;
// BMW.addDamage('Бампер',2);

// const addDamageFunc = audi.addDamage;
// addDamageFunc('Бампер',2);
// addDamageFunc.call(BMW,'Бампер',2);//вызывает функию с помощью аргумента bmw а вторым аргументом передает 'Бампер',2
// addDamageFunc.apply(BMW,['Бампер',2]);//вызывает функию с помощью аргумента bmw а вторым аргументом передает массив аргументов'Бампер',2

/*bind связывает наш this  с фунцией которую мы хотим вызвать*/ 
// 'use strict'
// const audi ={
	// make:'Audi',
	// model:'A3',
	// damages:[]
// };

// const carManipulation ={
	// addDamage(part,rate){
		// this.damages.push({part,rate});
		// console.log(`Добавить повреждение на ${this.make} ${this.model}`);
	// }
// };
// const addDamageAudi = carManipulation.addDamage.bind(audi);
// addDamageAudi('крыло',3);

// const addDamageAudiRoof = carManipulation.addDamage.bind(audi,'Крыша');
// addDamageAudiRoof(5);
// console.log(audi);


// const user ={
	// name:'Илья',
	// password:'12345'
// }



// function removePassword(reset){
	// if(reset){
		// this.password =undefined;
	// }else{
		// this.password ='1'
	// }
// };
//  const resetUserPasword = removePassword.bind(user,true);
//  resetUserPasword();
//  console.log(user);

 //intermediate inwoke function expression(IIFE)
// function init(){
	// console.log('start')
// };
// 
// (function (){
	// console.log('Start IIFO')
// })();
// 
// Замыкания
// function changeBalance () {
// let balance  = 0;
// return function(sum){
	// balance+= sum;
	// console.log(`Баланс:${balance}`)
// }
// };
// const change =changeBalance();
function a() {
	let c = 1;
	return function b() {
		 return c++;
	}
}
a()();
console.log(a()());