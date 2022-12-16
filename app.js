// при операторе ИЛИ(||) в строке будет выводиться первое значение true то есть Вася
console.log('вася' && 'олег')// при операнде И(&&)когда оба условия true будет выводится второе условие то есть Олег
// 
// оператор нулевого слияния
// // для пустой строки и нуля, бл придуман оператор ??  поскольку все операнды видят 0 и '' пустую строку как false

 /*
Пользователь хочет приобрести игру в магазине. Он может это сделать только если:
Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
Он не забанен (isBanned)
Игра не куплена (isExist)
Игра в продаже (isSelling)
Напишите условие для покупки и выведите в консоль результат.*/
let isBanned = false;
let isExist = false;
let isSelling = true;
let balance = 1001;
let bonusBalance = 101;
let buyGame = (balance > 1000 || bonusBalance > 100) && !isBanned && isSelling && !isExist;
console.log(buyGame);


// 
function logName(name,surname){
	console.log(`Моё имя ${name} ${surname}`);
}
logName('Anton' , 'Larichev');

function countDepositeSum(deposit,month,rate){
const sum = deposit *(1+ rate /12)**month;
return sum;
}
const example = countDepositeSum(1000,24,0.12);
console.log(example);

const example2 = countDepositeSum(1000,48,0.10);
console.log(example2);


function powerOfTwo(num){
return num*num;
}
console.log(powerOfTwo(5));

const toPowerArrow = (num,power)=>num**power;
console.log(toPowerArrow(5,3));

const KG_IN_USD = 7;
const KM_IN_USD = 5;
// 
function calculateW(present){
return present*KG_IN_USD;
}
// 
function calculateKM(distanse){
return distanse*KM_IN_USD;
}
// 
function getExchagePrise(present1,present2,distanse){
const prise1 =calculateW(present1);
const prise2 =calculateW(present2);
const distansePrice = calculateKM(distanse);
return prise1+prise2+distansePrice;

}
console.log(getExchagePrise(1,2,10));

// 

/*Задание для упражнения:
Пользователь:
Возраст
Наличие работы
Деньги
Нужно проверить может ли он купить новый MacBook за 2000$? Он может брать не только свои деньги, но и взять кредит. Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае. Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.*/ 
function computeCredit(age,hasJob= false){
	switch(true){
		case age>24&&hasJob:
			return 500;
		case age>24:
			return 100;
		default:
			return 0;
	}	
}

function canBuy(money,productPrice,age,hasJob = false){
const creditMoney = computeCredit(age,hasJob);
return productPrice < money + creditMoney;
}
console.log(canBuy(1000,2000,25));
