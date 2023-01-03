/*
Задача
вывести  в консоль строку"я люблю JS !" из массива  проходя циклом в обратном порядке не используя метод реверс
*/ 
// const  arr = ['!','JS','люблю','Я'];
// 
// function reverse(arr) {
	// let rev = new Array;
	// for (let i = arr.length - 1; i >= 0; i--) {
		// rev.push(arr[i]);
//   }
//   return rev;
// }
// let re =reverse(arr);
// console.log(re.join(' '));
// 
// 
// const tasks =[[1,'Задача 1'],[2,'Задача 2']];
// for(let i=0;i<tasks.length;i++){
	// for(let j=0;j<tasks[i].length;j++){
		// console.log(tasks[i][j]);
	// }
// }
// 
// 

//
// let i = 1;
// while(i<5){
	// console.log(`вывод - ${i} `)
// i++;
// }
// Выведите с помощью цикла столбец чисел от 1 до 100.

// for(let i = 0;i = 100;i++){
	// console.log(`${i}`);
// }
// Выведите с помощью цикла столбец чисел от 100 до 1
// for(let i = 100;i >= 1;i--){
	// console.log(`${i}`);
// };
// Выведите с помощью цикла столбец четных чисел от 1 до 100
// for(let i = 0;i <= 100;i+=2){
	//  document.write(i + '<br>');
	// }
	// Заполните массив 10-ю иксами с помощью цикла
	// let  arrr = [];
	// for(let i = 0;i < 10;i++){
		// arrr[i] = 'x';
	// }
	// console.log(arrr);
	//Заполните массив числами от 1 до 10 с помощью цикла.
	// let  arrr = [];
	// for(let i = 0;i <= 10;i++){
		// arrr[i] = i;
	// }
	// console.log(arrr);
	//Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части
	// let  arrr = [];
// for(let i = 0;i <= 10;i++){
	// arrr.push(Math.random().toFixed(2));
// }
	// console.log(arrr);
	/* 
	Есть выгрузка операций пользователя 
	const operations =[1000,-700,300,-500,10000];
	а так же начальный баланс в 100$.
	необходимо сделать функции расчета:
	1) итогового баланса
	2)наличия отрицательного баланса( если при  очередной операции  баланс <0 )
	3)расчета среднего расхода и среднего дохода
	*/
	// const operations =[1000,-700,300,-500,
		// 10000];
//  const startingBalanse = 100;
// function getBalanse (arrayOfOperations,initailBalanse){
	// let balance = initailBalanse;
	// for(const element of arrayOfOperations){
		// balance+=element;
	// }
	// return balance;
// }
// console.log(getBalanse(operations,startingBalanse));
// 
// function checkOperation (arrayOfOperations,initailBalanse){
	// let isOK = true;
	// let balance = initailBalanse;
// for(const element of arrayOfOperations){
	// balance+=element;
	// if(balance<0 ){
		// isOK = false;
		// break;
	// }
// }
// return isOK;
// }
// console.log(checkOperation(operations,startingBalanse));
// 
// 
// function add (a,b){
	// return a+b;
// }
// function subtract (a,b){
	// return a-b;
// }
// функция высшего порядка
// function calculate (a,b,fn){
	// console.log(fn.name);
	// const res = fn(a,b);
	// return res;
// }
// const res = calculate(3,5,add);
// console.log(res);
// 
// возврат функции
// 
// function power(pow){
	// return function(num){
		// return num**pow;
	// }
// }
// 

// const power = pow => num =>num**pow;
// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));
// console.log(powerOfTwo(10));
// 
// let sq = x => y + x => z + y;
// sq(2)(2)(2);
// const score =[5,10,0,15];
// 
// score.forEach((scoreEl, i)=>{
// console.log(`Раунд ${i+1}:${scoreEl}`)
// });
// 

// const transactionInUSD =[10,-7,50,-10,100];
// const transactionInRUB2 =transactionInUSD.map((transaction,i)=>{
	// return transaction*60;
// });
// console.log(transactionInUSD);
// console.log(transactionInRUB2);
// 
// 