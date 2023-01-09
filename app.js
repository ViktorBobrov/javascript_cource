const userName = 'Вася Пупкин';
// console.log(userName[0]);//выведет в консоль нулевой элемент строки. то есть букву B
// отдельно для этого придумали  функцию charAt()
// console.log(userName.charAt(2));
// как получить длинну строки? с помощью метода length
// console.log(userName.length);
// как искать по строке? indexof
// console.log(userName.indexOf('П'));//возвращает индекс буквы когда она попадается первый раз
// console.log(userName.lastIndexOf('а'));//вернет последнее вхождение буквы
// console.log(userName.includes('уп'));//проверяет на наличие такого символа и выдает тру или фалсе
// console.log(userName.slice(5));

// практика
// const userName2 = 'Вася aka Terminator Пупкин';
// console.log(userName2.slice(0, 5) + userName2.slice(20, 26));

//преобразование строки
// const str = 'Вася Пупкин';
// console.log(str.includes('a'));// показывает есть ли буква а  и выводит true
// console.log(str.startsWith('В'));// проверяет начинается ли с буквы В и выводит true
// console.log(str.endsWith('В'));// тоже что и startsWith но с конца
// console.log(str.toLowerCase());// приведет всю строку к нижнему регистру
// console.log(str.toUpperCase());//приведет всю строку к верхнему регистру
// console.log(str.replace('В','Ф'));//Заменяют символ 
// console.log(str.replaceAll('В','Ф'));// заменяет вообще все символы В на Ф. новый метод не везде работает))
// console.log(str.replace(/В/g,'Ф'));//получим тоже самое что и replaceAll
// практика
// function isPhoneNumber(num){
	// num =num.trim();
	// num =num.replace('+7','8');
	// if(!num.startsWith('8')){
		// return false;
	// }
	// num = num.replaceAll('(','');
	// num = num.replaceAll(')','');
	// num = num.replaceAll(' ','');
	// num = num.replaceAll('-','');
	// if(num.length != 11){
		// return false;
	// }
	// let onlyNumber = true;
	// for(const char of num){
		// if(isNaN(Number(char))){
			// onlyNumber = false;
			// break
		// }
	// };
// return onlyNumber;
// };
// console.log(isPhoneNumber());

// строки и массивы

// const userFullName = 'Вася Пупкин Васильевич';
// console.log(userFullName.split(' '));// разбивка  строки на массив
// const [firstName,familyName,lastName] = userFullName.split(' ');
// console.log(firstName);
// console.log(familyName);
// console.log(lastName);
// 
// const arr = ['Ты', 'Знаешь', 'JS'];//обьединение массива в строку
// console.log(arr.join(' '));
// 
//дополнение строк
// const film = 'Звездные войны';
// console.log(film.padStart(50,'*'));// в начало  добавляет 50 символов и второй аргумент каким именно символом
// console.log(film.padEnd(50,'*'));//добавляет 50 символов в конец
// console.log(film.repeat(10));
// 
// упражнение макскировка карты
// const card ='2342834503458353'
// function safeCard (card){
// card = card.slice(12,16).padStart(12,'*');
// console.log(card);
// };
// safeCard(card);
let str = 'How are you?';
console.log(str.split(' ')[1]);​