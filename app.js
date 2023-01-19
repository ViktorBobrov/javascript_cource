// ​const userArray = ['Василий','Пупкин',24];
// const user ={
	// name:'Вася',
	// surname:'Пупкин',
	// age: 24
	// skills:[
		// 'Программирование',
		// 'Готовка'
	// ]
// };

// console.log(user.name)//отдельно вывожу name:'Вася'
// console.log(user);//вывел всего пользователя в логи
// console.log(user.skills[0]);//вывел первый элемент массива skills
// console.log(user.['skills']);//вывод массива скилс если с ним надо работать. пример ниже
// const res = prompt('Введите свойство');
// console.log(user[res]);
//как задать обьекту новое свойство?
// user['City'] ='Москва';

//модифицировать существующее свойство обьекта
// user.age = 30

// const users = [
	// {name: 'Вася',age:30},
	// {name: 'Катя',age:18},
	// {name:'Аня',age:40},
	// {name:'Петя',age:25},
// ];
// console.log(users.sort((a,b)=>{
	// return a.age -b.age
// }));
// 
/*
преобразовать пользователей до вида 
{fullName:'Вася Пупкин',skillNum:2} 
*/ 
// const users = [
	// {name:'Вася',
	// surname: 'Пупкин',
	// age:30,
	// skills:['Разработка','DevOps']
// 
	// },
	// {
		// name:'Катя',
		// surname:'Белова',
		// age:18,
		// skills:['Дизаин']
	// }
// ];
// const userData = users.map(user=>{
// return {
	// fullName:`${user.name} ${user.surname}`
	// skillNum: `${user.skills.length}`
// }
// });
// console.log(userData);
// const user = {
	// name:'Вася',
	// surname:'Пупкин',
	// age:24,
	// getFullName:function (){
		// return this.name + ' ' +this.surname;
	// }
// };
// 
// const wallet ={
	// balanse:0,
	// operations:[],
	// increase:function(sum,reason){
		// this.balanse+=sum;
		// this.operations.push({
			// reason:reason,
			// sum:sum
		// })
		// return true;
	// },
	// decrease:function(sum,reason){
		// if(this.balanse < sum){
			// console.log('Недостаточно баланса');
			// return false
		// }
		// this.balanse-= sum;
		// this.operations.push({
			// reason:reason,
			// sum:-sum
		// })
		// return true;
	// },
	// getOperationLenght:function(
	// ){
		// return this.operations.length;
	// }
// }
// console.log(wallet.increase(1000,'Зарплата'));
// console.log(wallet.getOperationLenght());
// console.log(wallet.decrease(2000,'Покупка ноутбука'));
// console.log(wallet.getOperationLenght());
// console.log(wallet.decrease(500,'Покупка телефона'));
// console.log(wallet.balanse);

//итерация по обьектам
// const cities ={
	// msk:{
		// lt:200,
		// temp:25
	// }
	// spb:{
		// lt:100,
		// temp:20
	// }
// }

// let sumTemp = 0;
// let citiesCount=Object.keys(cities);//чтобы определить длинну обьекта у нас есть object.keys().он из ключей делает массив
// for(const key in cities){
	// console.log(key);
	// citiesCount++;
	// sumTemp+=cities[key].temp;
// }
// console.log(sumTemp/citiesCount)
// деструктуризация и Rest
// let user ={
// name:'Вася',
// age:40,
// city:'Moscow'
// };
// const {age,name} = user// в скопках показываем что хотим получить(например возраст и  имя)

//можно  использоать рест оператор
// const {age...userWithoutAge} = user;
// console.log(userWithoutAge)// тут выведутся остальные данные кроме возраста
// 
// const additionalData ={
	// skills:['Разработка ','Дизаин']
// };
// user.skills =additionalData.skills;// используется чтобы добавить инфу пользователю. но не очень удобно поэтому юзают спред оператор
// user ={
	// ...user,
	// ...additionalData
// };
// 
// а че такое optional chaining?
//как осуществляется доступ к свойствам (если этих свойств может и не быть)
// const cities ={
	// msk:{
		// temp:{
			// celsius:25
		// }
	// }
// }
// console.log(cities.msk.temp.celsius);

// const warehouse ={
	// goods:[],
	// findGoodById:function(id,product){
		// const existedGood = this.goods.find(g=>g.id == good.id);
		// return existedGood;
// ;
	// },
	// addGood:function(good){
		// this.goods.push({good});

	// },
	// getWeight:function(){
		// return this.product.kg
	// }
// };
// /*товары */
// const car ={
	// id:1,
	// weight:{
		// kg:1000
	// },
	// brand:'Ford'
// };
// const chair ={
	// id:2,
	// weight:{
		// kg:2
	// },
	// 
// };
// const paper ={
	// id:3,
	// color:'red'
/
