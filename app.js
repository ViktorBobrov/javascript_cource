 //для рафаэлки
 let dog = {
    name: "Milo",
    sheds: true,
    size: "big",
    pottyTrained: true,
    likesSnuggles: true,
    likesFetch: true
 }
const canAdopt = dog.pottyTrained&&!dog.sheds&&((dog.likesSnuggles&&dog.likesFetch)||(dog.likesFetch||dog.likesSnuggles));
console.log(canAdopt);

 //для пенни 

	let name1= "Penny";
	let sheds1= false;
	let size1= "small";
	let pottyTrained1= true;
	let likesSnuggles1= true;
	let likesFetch1= false;
	const canAdopt1 = pottyTrained1&&!sheds1&&(likesFetch1||
		likesSnuggles1);
		console.log(canAdopt1);

	/* решение учителя dog.pottyTrained && (dog.likesSnuggles || dog.likesFetch) 
&& !dog.sheds*/


//для Эмми
let dog3 = {
	name3: "Floof",
	sheds3: true,
	size3: "small",
	pottyTrained3: true,
	likesSnuggles3: false,
	likesFetch3: true
}
 const canAdopt3 = (dog3.size3 !=="big"||dog3.sheds3)&&
 (dog3.pottyTrained3||!dog3.likesSnuggles3)&&
 dog3.likesFetch3;

 console.log(canAdopt3);

 /*
 Пользователь хочет приобрести игру в магазине. Он может это сделать только если:
Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
Он не забанен (isBanned)
Игра не куплена (isExist)
Игра в продаже (isSelling)
Напишите условие для покупки и выведите в консоль результат.
*/ 

const isBanned = true;
const isExist =true;
const isSelling = true;
const balance =1001;
const bonusBalance =100;

let canBuy = (balance>1000||bonusBalance>100 )&&isSelling&&isExist&&isBanned;
console.log(canBuy);

/*
Задание для упражнения:
Пользователь:
Возраст
Наличие работы
Деньги
Нужно проверить может ли он купить новый MacBook за 2000$? Он может брать не только свои деньги, но и взять кредит. Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае. Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.

*/
let buyMac ={
	age: 25,
	canWork:true,
	money: 1800,
	ageCredit:100,
	workKredit:500,
	hasJob:true,
	sale:2000,
}
function credit (age){
	if(age>24&&buyMac.hasJob){
		return 500;
	}else if(age>24){
		return 100;
	}else 
	return 0;
};
function buyThisMac (age,money,sale,hasJob){
const creditMoney  = credit(age,hasJob)
return sale<money+creditMoney;
};

console.log(buyThisMac(25,1080,2000,true));