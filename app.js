//filter

// const operations = [100,-20,7,-20,50];
//через цикл for(отобразить только положительные приходы);
// 
// const positiveOperations =[];// массив что в начале пуст куда будет записываться  новый массив
// for(const operation of operations){
// if(operation>0){
// positiveOperations.push(operation);
// }
// }
// console.log(positiveOperations);
// const positiveOperations = operations.filter(operation => {
// return operation > 0;
// });
// console.log(positiveOperations);

//forEach
// const score = [5,10,0,15];//данно массив
// как сделать через цикл for
// for(const [i,el] of score.entries()){
// console.log(`Раунд ${i}:${el}`);
// }
// 
//как через фор ич
// score.forEach( (el,i)=>{
// console.log(`Раунд ${i+1}:${el}`);
// });
// частичная замена for  цикла удобно использовать когда не хотим что то прерывать, когда итерируясь по элементу использовать индекс

// метод map() массива в програмировании
// const transactionsInUSD = [10,-7,50,-10,100];
// const transactionsInRUB = [];
//нужно перевести стоимость транзакций из долларов  в рубли и заполнить массив  в рублях
// как сделать это все через обычный for
// for (const transaction of transactionsInUSD ){
// transactionsInRUB.push(transaction * 60)
// }
// console.log(transactionsInRUB);
// как это сделать через map()
// const transactionsInRUB2 = transactionsInUSD.map((transaction,i)=>{
// return transaction * 60;
// });
// map() по сути своей берет исходный массив и преобразовывает его и для каждого элемента выполняет функцию, при этом результат кладет в новый массив

//функция filter()
// const operations = [100,-20,7,-20,50];
// const positiveOperations =operations.filter(operation=>{
// return operation>0;
// });
// console.log(positiveOperations);
// 
//практика на операции
/*
имеется массив изменения цен prises,где внутри первый елемент  массива является ценой в момент X второй в момент Y
нужно преобразовать данные в макссив,где будут  отображаться только  положительные изменения цен: [100,150]
*/
// const prises =[[100,200],[120,100],[280,350]];
// const result =prises
// .map(product=>product[1] - product[0])
// .filter(price => price > 0);
// console.log(result);
// метод reduse
// последовательность чисел свернуть в одно число
// const operations =[100,-20,7,-30,50];
// 
// let balance = 0;
// for(const operation of operations){
// balance += operation;
// };
// console.log(balance);
// теперь решить эту задачу методом reduse
// const finalBalanse = operations.reduce((acc,value)=>{
// return acc += value;
// },0);

///практика
// const arr =[1,4,4,10];
// 
// const avg = arr.reduce((acc,el,i)=>{
// if(i != arr.length -1){
// return acc + el;
// }else{
// return (acc + el)/arr.length;
// }
// 
// },0);
// console.log(avg);

// const arr = [2,4,4,10];
// let elGT5;
// for (const el of arr){
// if(el > 5){
// elGT5 = el;
// break;
// }
// };
// console.log(elGT5);
// elGT5 = arr.find(el =>el > 5);
// console.log(elGT5);
// function some(arr,elem){
// const res = arr.find(el =>el===elem );
// return res == undefined ? false : true;
// }
// 
// console.log(arr.some(el =>el===elem));// метод some() проверяет на наличие  элемента в массиве. выводит тру или фалсе. является заменой функции indexof() только indexof выводит -1 и 1

//методы flat() flatMap()
/*
метод flat() нужен чтобы превратить массив содержащий массивы в 1 массив без внутренних массивов. при этом элементы подмассива становятся элементами массива */
// const prises = [[2, 4], [3, 4], [10, [20, 50]]];
// const res = prises.flat(2);// функция flat уберет внутренние массивы до 2й вложенности и оставит 1 массив.
// const res2 = prises.flatMap(el => el.concat(1));//в данном случае, функция ведет себя как flat приводя все к плоскому массиву а после как функция map() которая внутрь себя реализовала логику конкатенации подмассивов с помощью 1

//метод sort(),нужен для сортировки
// const users = ['Вася', 'Катя', 'Маша', 'Аня'];
// users.sort()// если использовать метод sort() на массив то он будет работать с ними как со строками
// const operations = [100, -300, -100, 50, 480];
// operations.sort((a, b) => {// данная логиа используется чтобы отсортировать по возрастанию
	// if (a > b) {
		// return 1;
	// }
	// if (a < b) {
		// return -1;
	// };
// });
// console.log(operations);

//методы создания массивов
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// const arr2 = new Array(5);
// arr2.fill(1);
// console.log(arr2);
// const arr3 = Array.from({ length: 5 }, (cur, i) => i + 1);

let arr = [1, 2, 10, 15];
arr.sort()
console.log(arr);