let HorScrl = document.querySelectorAll(".HorScrl");//элемент переключения
for (let i = 0; i < HorScrl.length; i++) {
	let butnL = HorScrl[i].querySelectorAll(".butnL");butnL=butnL[0];//кнопка переключения влево
	let butnR = HorScrl[i].querySelectorAll(".butnR");butnR=butnR[0];//кнопка переключения вправо
	let ScrlCont = HorScrl[i].querySelectorAll(".ScrlCont");ScrlCont=ScrlCont[0];//контейнер элементов-скролла
	let ScrlElem = HorScrl[i].querySelectorAll(".ScrlElem");//элементы переключения - слайды
	let scrlStep = ScrlCont.scrollWidth/ScrlElem.length; //шаг скроллинга в пикселах
			
	if (butnL) {butnL.onclick = function(){
		ScrlCont.scrollBy({left: -scrlStep, behavior: 'smooth'});
		};}//кнопка переключения влево
	if (butnR) {butnR.onclick = function(){
		ScrlCont.scrollBy({left: scrlStep, behavior: 'smooth'});
		};}//кнопка переключения вправо
	}
	
//бургер меню
let wideMenu = document.querySelectorAll(".wideMenu");wideMenu=wideMenu[0];
let burgMenu = document.querySelectorAll(".burgMenu");burgMenu=burgMenu[0];
let burgBut = document.querySelectorAll(".burgBut");burgBut=burgBut[0];
let MenuItm = wideMenu.querySelectorAll(".wideMenu>div");
let ClosCrs = burgMenu.querySelectorAll(".ClosCrs");ClosCrs=ClosCrs[0];
for (let i = 0; i < MenuItm.length; i++) {
	let clone = MenuItm[i].cloneNode(true);
	burgMenu.appendChild(clone);}
burgMenu.style.transitionDuration = '0.3s';

burgBut.onclick = function(){
	burgMenu.style.display='block';
	setTimeout( function() {
		burgMenu.style.opacity='0.8';
		setTimeout( function() {
			burgBut.style.visibility='hidden';
		}, 300);
	}, 10);
	}
burgMenu.onclick = function(){
	burgMenu.style.opacity='0';
	setTimeout( function() {
		burgMenu.style.display=null;
		burgBut.style.visibility=null;
	}, 300);
	}
//бургер меню-----end

let header = document.querySelectorAll("header");header=header[0];
let ordBut = header.querySelectorAll(".ordBut");ordBut=ordBut[0];
let order = document.querySelectorAll(".order");order=order[0];
let formOrd = order.querySelectorAll("form");formOrd=formOrd[0];
let SubmBut = order.querySelectorAll("input[type='button']");SubmBut=SubmBut[0];
order.style.transformOrigin = 'center top';
order.style.transitionDuration = '0.3s';
ordBut.onclick = function(){
	order.style.transform = 'scaleY(0)';
	setTimeout( function() {
		order.style.display='inline-block';
		setTimeout( function() {
			order.style.transform = 'scaleY(100%)';
		}, 10);
	}, 10);
}
/*
SubmBut.onclick  = function(){
	order.style.transform = 'scaleY(0)';
	setTimeout( function() {
		order.style.display=null;
		formOrd.submit();
	}, 300);
}
*/

formOrd.onsubmit = function(formOrd){
/*	formOrd.preventDefault();*/
	order.style.transform = 'scaleY(0)';
	setTimeout( function() {
		order.style.display=null;
/*		formOrd.submit();*/
	}, 300);
}

