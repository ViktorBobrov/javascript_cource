'use strict'


// const panelText = document.querySelector('.panel').innerText;
// console.log(panelText);
// document.querySelector('.panel').innerText = 'New Text';
// document.querySelector('.input').value = 'Text';

//реакция на события в браузере
//
// document.querySelector('.button',).addEventListener('click',function (){
	// const input = document.querySelector('.input').value;
	// if(!input){
		// return;
	// }
	// document.querySelector('.panel').innerText = input;// чтобы выводилось то что ты вводишь в импут
	// document.querySelector('.input').value = '';//чтобы после ввода было пустое поле
	// 
// });

function submitForm(){
	const input = document.querySelector('.input').value;
if(!input){
	return;
}
document.querySelector('.panel').innerText = input;
document.querySelector('.input').value = '';
// document.querySelector('.notification').classList.add('notification_active');
// document.querySelector('.notification').classList.remove('notification_hidden');
document.querySelector('.notification').getAttribute('class');// получаем атрибут(можно смотреть через консоль лог)
document.querySelector('.notification').setAttribute('class','notification');//добвляет класс(в первом параметре) и какой класс(нотификатион)
document.querySelector('.notification').setAttribute('key',1);// добавляет модификатор key  с атрибутом 1
document.querySelector('.notification').setAttribute('user-id',1);// добавляет в нотификейшн  user-id  причем  значение всегда строка
};

function imputChanged(e){
	if(e.code== 'Enter' ){
		submitForm();
	}
}




document.querySelector('.input').addEventListener('keydown',(e)=>{
	if(e.code== 'Enter' ){
		submitForm();
	}
});

const panelText ='Панель';
const panelClass = 'button';
const newElement =document.createElement('div');// создаю элемент див
newElement.setAttribute('user-id',1);// присваиваю ему user-id
newElement.classList.add('panel');//делаю панелью
// newElement.innerText ='Кнопка';
newElement.innerHTML =`<button class ="${panelClass}">${panelText}</button>`;//вручную прописываю что это кнопка,задаю все внтренности с помощью ${}

document.querySelector('.test').appendChild(newElement);


//localStorage 
localStorage.setItem('token','someString');//мы положили данные в локал стораг
localStorage.setItem('token1','1');
localStorage.setItem('token1','true');//при внесении в тот же токен новых данных стораг перезаписывается
console.log(localStorage.getItem('token1'));//вывели данные из локалстораги в консоль
localStorage.removeItem('token1');//удалить токен 1 из стораги
localStorage.clear();// чистит стораге


//JSON(нет не броди)
//JSON - это нотация описания обьектов  которые совместимы с JS
const obj =JSON.parse('{a:1}');//берет json обьект и преобразовывает его в обьект JS с которым можно работать
const str =JSON.stringify( obj);//делает строкой



