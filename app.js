/* Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?". Если ответ верен, выведите в консоли "Успех", если нет - "Вы робот!", а если он введёт "Я не робот", то тоже "Успех".*/
 const message = "Сколько будет 7 + или - 15?"
 const result = prompt(message);
 switch(result){
case'22':
case'-8':
case'я не робот':
alert('успех')
break;
default:alert("Вы робот")
break;
 }
 const a = 5;
switch(a) {
    case '5':
        console.log('1');
    case 5:
        console.log('2');
    case 4:
        console.log('2');
}