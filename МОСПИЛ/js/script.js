let HorScrl = document.querySelectorAll(".HorScrl");//элемент переключения
for (let i = 0; i < HorScrl.length; i++) {
	let butnL = HorScrl[i].querySelectorAll(".butnL");butnL=butnL[0];//кнопка переключения влево
	let butnR = HorScrl[i].querySelectorAll(".butnR");butnR=butnR[0];//кнопка переключения вправо
	let ScrlCont = HorScrl[i].querySelectorAll(".ScrlCont");ScrlCont=ScrlCont[0];//контейнер элементов-скролла
	let ScrlElem = HorScrl[i].querySelectorAll(".ScrlElem");//элементы переключения - слайды
	let NmSld = ScrlElem.length;
	let scrlStep = Math.trunc(ScrlCont.scrollWidth / NmSld); //шаг скроллинга в пикселах
	let curSld = 0;
	let ScrlTime;
	let ScrlFlag = true;

	if (butnL) {butnL.onclick = function(){
		curSld = curSld-1;
		if (curSld<0) {curSld=0;};
		ScrlCont.scrollTo({left: (scrlStep * curSld), behavior: 'smooth'});	}	}//кнопка переключения влево
	if (butnR) {butnR.onclick = function(){
		if (scrlStep*(NmSld-curSld)>ScrlCont.clientWidth) {
			if (curSld<(NmSld - 1)) {curSld = curSld+1;}
			ScrlCont.scrollTo({left: (scrlStep * curSld), behavior: 'smooth'});	}	};	}//кнопка переключения вправо
	function AnScroll() {	//Обработка скролла
		if (ScrlFlag) {//выполняется, в состоянии движения скролла по инерции
			clearTimeout(ScrlTime);
			ScrlTime = setTimeout( function() {
				if (ScrlCont.scrollLeft+ScrlCont.clientWidth+5<=ScrlCont.scrollWidth) {
					let tmp=Math.trunc((ScrlCont.scrollLeft/scrlStep)+0.5);
					curSld = tmp;
					ScrlCont.scrollTo({left: (scrlStep * curSld), behavior: 'smooth'});	}	}, 100);}}
	ScrlCont.addEventListener("scroll", function (e) { AnScroll(); }); //Обработка скролла
	ScrlCont.addEventListener("touchstart", function (e) { ScrlFlag = false; }); //Начало касания
	ScrlCont.addEventListener("touchend", function (e) { ScrlFlag = true; AnScroll(); });//Пользователь отпустил экран
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
let ClsCrs = order.querySelectorAll(".ClosCrs");ClsCrs=ClsCrs[0];
order.style.transformOrigin = 'center top';
order.style.transitionDuration = '0.3s';
ordBut.onclick = function(){
	order.style.transform = 'scaleY(0)';
	setTimeout( function() {
		order.style.display='inline-block';
		document.location.href ="#order";
		setTimeout( function() {
			order.style.transform = 'scaleY(100%)';	}, 10);	}, 10);}
ClsCrs.onclick = function(){
	order.style.transform = 'scaleY(0)';
	setTimeout( function() {order.style.display=null;}, 300);}
formOrd.onsubmit = function(formOrd){
	order.style.transform = 'scaleY(0)';
	setTimeout( function() {
		order.style.display=null;}, 300);}
