/*
Васи положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада. И остаток после покупки.
Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/
const money = 12000;
const percents = 0.07;
const mounth = 24;
 const moneyAfterDepozite = money*(1+percents/12)**mounth;
const moneyAfterSale =moneyAfterDepozite - 13500;
console.log(percents);

 if(moneyAfterDepozite>=13500){
	console.log(` ДЕНЕГ ХВАТИТ НА ПОКУПКУ ДОМА
	 ОСТАНЕТСЯ ЕЩЕ ${moneyAfterSale} $`)
 }
 else{
	console.log("ДЕНЕГ НЕ ХВАТАЕТ НА ПОКУПКУ ДОМА")
 }