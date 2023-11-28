/*<----тестовый вывод размеров окна*/
let sizDisp = document.createElement("div");
let body = document.querySelector("body");
body.append(sizDisp);
sizDisp.style.cssText = "position:fixed;top:2px;left:2px;background:white;color:black;padding:0 5px;border: 1px solid red;";
function sdReN() {
	sizDisp.innerHTML = `${window.innerWidth} x ${window.innerHeight}`;
	if (window.innerWidth<900) {sizDisp.style.fontSize = `${window.innerWidth/20}px`;} else {
		sizDisp.style.fontSize = `${window.innerWidth/70}px`;}
	}
sdReN();
window.addEventListener("resize", function (e) {sdReN(); });
/*тестовый вывод размеров окна---->*/


/* бургер-меню в заголовке--->>>  */
let burgerBut = document.getElementById("burger");
let burgerMenu = document.querySelector("header .burgerMenu");
let wideMenu = document.querySelectorAll("header .wideMenu>div");
for (let i = 1; i < wideMenu.length; i++) {	burgerMenu.append(wideMenu[i].cloneNode(true));	}

burgerBut.onclick = function() {
	function burgMenClos() {
		burgerMenu.style.transform = 'scale(0)';
		setTimeout(function(){burgerMenu.style.display = null;}, 300);		}
	burgerMenu.style.display = 'flex';
	setTimeout(function(){burgerMenu.style.transform = 'scale(1)';}, 10);
	burgerMenu.addEventListener("click", function (e) {	burgMenClos();});
	setTimeout(function(){burgerMenu.onmouseleave = function() { burgMenClos();}}, 200);
	}
/* >>>--- бургер-меню в заголовке*/


/* выпадающий список --->>> */
let dropSel = document.querySelectorAll(".dropSel");
for (let i = 0; i < dropSel.length; i++) {
	let options = dropSel[i].querySelector(".options");
	options.style.display = 'none';
	options.style.transform = 'scaleY(0)';
	let flag = false;
	function dropSelClos() {
		setTimeout(function(){options.style.transform = 'scaleY(0)';}, 20);
		setTimeout(function(){options.style.display = 'none';flag = false;}, 300);}
		
	document.addEventListener("click", function (e) {	dropSelClos();	});
	dropSel[i].onclick = function() {
		event.stopPropagation();
		if (flag){	dropSelClos();
		}else{
			flag = true;
			options.style.display = null;
			setTimeout(function(){
				let c = dropSel[i].getBoundingClientRect();
				if (c.left + options.clientWidth < document.documentElement.clientWidth) {	//коррекция положения выпадающего списка
					options.style.left = '-15px';
				}else{	
					options.style.right = '-25px';
					options.style.whiteSpace = 'normal';
					options.style.textAlign = 'right';
					options.style.width = document.documentElement.clientWidth + 'px';		}	//--->>>коррекция положения выпадающего списка
				options.style.transform = 'scaleY(1)';
				options.onmouseleave = function() {dropSelClos();}
				}, 20);	}	}	}
/*  --->>>выпадающий список */

let hScrol = document.querySelectorAll(".hScrol");//элемент с скролл-контейнером
for (let j = 0; j < hScrol.length; j++) {
	let scrolCont = hScrol[j].querySelector(".scrolCont");//контейнер элементов-скролла
	if (scrolCont.scrollWidth > scrolCont.clientWidth) {
		let goodCard = scrolCont.querySelectorAll(".scrolCont>div");//элементы переключения - слайды
		let arrLeft = hScrol[j].querySelector(".arrLeft");
		let arrRight = hScrol[j].querySelector(".arrRight");
		let dots = hScrol[j].querySelector(".dots");//индикаторные точки
		let dotArr = hScrol[j].querySelector(".dotArr");//одиночная стрелка
		let slidWhid = scrolCont.scrollWidth/goodCard.length; //реальная ширина слайда
		let scrlStep = Math.trunc(scrolCont.clientWidth/slidWhid); //шаг скроллинга в пикселах
		if (scrlStep > 0) {	scrlStep = 4 + (scrlStep*slidWhid);
		}else{	scrlStep = 4 + slidWhid; }
		let oldScroll = 0;//величина текущего скролла
		let autoCentr=false; //флаг, разрешающий доводку скролла при отпускании тача
		let curNum = hScrol[j].querySelector(".curNum");//текущий слайд
		let allNum = hScrol[j].querySelector(".allNum");//число слайдов
		if (allNum) {allNum.innerHTML = goodCard.length.toString().padStart(2, '0');	}

		scrolCont.scrollLeft=0;
		if (dotArr) {dotArr.style.visibility = 'visible'};
		if (curNum) {curNum.style.visibility = 'visible'};
		if (allNum) {allNum.style.visibility = 'visible'};
		if (arrLeft) {arrLeft.style.visibility = 'visible'};
		if (arrRight) {arrRight.style.visibility = 'visible'};
		if (arrLeft) {arrLeft.classList.add("arrStop");}
		
		let dot = [];	//индикаторные точки
	//создание индикаторных точек
		if (dots) {
			let quanDots=Math.round(scrolCont.scrollWidth/scrolCont.clientWidth);	//задаем количество индикаторных точек
			if (quanDots>7){quanDots=7;}else{
				if (quanDots<2){quanDots=2;}else{
					if ((quanDots*27 + 30)>scrolCont.clientWidth) {quanDots = Math.trunc((scrolCont.clientWidth - 30) / 27);}	}	}
			for (let i = 0; i < quanDots; i++) {
				dot[i] = document.createElement("div");
				dots.append(dot[i]);
				dot[i].classList.add("dot");
				if (i==0) {dot[i].classList.add("selected");}	}	}
	//создание индикаторных точек

	//Обработка скролла выполняется, если есть индикаторные точки
		let ScrlFlag=true; //флаг, разрешающий выполнение дополнительных действий во время скролла
		let ScrlTime;	//переменная для таймаута
	//Функции, выполняемые во время скролла --->
		scrolCont.addEventListener("scroll", function (e) {
			if (ScrlFlag) {	//если выполнение разрешено
			ScrlFlag=false; //запрещаем выполнение 
			clearTimeout(ScrlTime);	//удаляем таймер
			ScrlTime = setTimeout( function() {	//задаем новый таймер с действиями - через 100мс будет выполнен пакет дополнительных действий
				
				//переключение текущего номера слайда --->>
				if (curNum) {
					let tmp = Math.ceil(scrolCont.scrollLeft/slidWhid);
					if (tmp<goodCard.length){if (tmp<0){tmp=0;}}else{tmp = goodCard.length - 1; }
					curNum.innerHTML = (tmp + 1).toString().padStart(2, '0');			};
				// --->> переключение текущего номера слайда
				
				//переключение индикаторных точек --->>
				if (dots) {
					for (let i = 0; i < dot.length; i++) {dot[i].classList.remove("selected");} //гасим все точки
					let indx = Math.round(scrolCont.scrollLeft/(scrolCont.scrollWidth/dot.length))
					if (indx < dot.length) {if (indx < 0) {indx = 0;}}else{indx = (dot.length - 1);} //защита от некорректного индекса
					//коррекция крайних значений индекса
					if (oldScroll<scrolCont.scrollLeft){
						if (Math.abs(scrolCont.scrollWidth - (scrolCont.scrollLeft + scrolCont.offsetWidth)) > 20) {
							if (indx == (dot.length - 1)) {indx = (dot.length - 2);}
						}else{	indx = dot.length - 1;	}
					}else{	if (indx == 0) {if (scrolCont.scrollLeft>0) {indx = 1;}	}	}
					
					dot[indx].classList.add("selected");
				}//---->> переключение индикаторных точек

				//изменение цвета стрелок
				if (arrLeft && arrRight) {
					if (scrolCont.scrollLeft==0) {
						arrLeft.classList.add("arrStop");
						arrRight.classList.remove("arrStop");
					}else{
						arrLeft.classList.remove("arrStop");
						if ((scrolCont.scrollWidth-scrolCont.scrollLeft-scrolCont.clientWidth)<50) {
							arrRight.classList.add("arrStop");}else{arrRight.classList.remove("arrStop");}	}	}
				//------------изменение цвета стрелок
				
				// автодоводка слайда в центр --->>
				if ((autoCentr)&&(Math.abs(scrolCont.scrollLeft - oldScroll)<20)){
					autoCentr = false;
					slidWhid = scrolCont.scrollWidth/goodCard.length; //коррекция реальной ширины слайда
					acTime = setTimeout( function() {
						let indx = 0; //номер центруемого слайда
						if ((scrolCont.scrollWidth - scrolCont.scrollLeft - scrolCont.clientWidth)<(slidWhid/2)) {	indx = scrolCont.scrollWidth;
						}else{	indx = (slidWhid * (Math.trunc((scrolCont.scrollLeft + scrolCont.offsetWidth/2)/slidWhid) + 0.5)) - (scrolCont.offsetWidth/2)	}
						scrolCont.scrollTo({left: indx, behavior: 'smooth'});
					}, 100);
				}
				// --->> автодоводка слайда в центр
				
				oldScroll = scrolCont.scrollLeft;	//по окончании обновляем текущее значение скролла
				ScrlFlag=true;	//по окончании разрешаем выполнение
				}, 50);
			}
		});
	//---> Функции, выполняемые во время скролла

		scrolCont.addEventListener("touchstart", function (e) { autoCentr = false; }); //Начало касания
		scrolCont.addEventListener("touchend", function (e) { autoCentr = true; });//Пользователь отпустил экран

		if (dotArr) {
			dotArr.onclick = function(){ //одиночная стрелка
				scrolCont.scrollTo({left: (scrolCont.scrollLeft + scrlStep), behavior: 'smooth'});	}	}
			
		if (arrLeft) {
			arrLeft.onclick = function(){ //кнопка переключения влево
				scrolCont.scrollTo({left: (scrolCont.scrollLeft - scrlStep), behavior: 'smooth'});	}	}
			
		if (arrRight) {
			arrRight.onclick = function(){ //кнопка переключения вправо
				scrolCont.scrollTo({left: (scrolCont.scrollLeft + scrlStep), behavior: 'smooth'});	}	}
		}
}

let clrSel = document.querySelectorAll(".clrSel");
for (let i = 0; i < clrSel.length; i++) {
	let options = clrSel[i].querySelectorAll(".options>div");
	for (let i = 0; i < options.length; i++) {
		options[i].onclick = function(){
		for (let i = 0; i < options.length; i++) {options[i].classList.remove("selected");}
		options[i].classList.add("selected");
		}
	}
}

//раскрывающиеся списки FAQ ------------
window.addEventListener("load", function() {
	let FAQ = document.querySelectorAll(".FAQ");
	for (let i = 0; i < FAQ.length; i++) {
		let qAns = FAQ[i].querySelectorAll(".qAns");
		for (let i = 0; i < qAns.length; i++) {
			let Que = qAns[i].querySelector(".Que");
			let Ans = qAns[i].querySelector(".Ans");
			let wrapArr = document.createElement("div");
			wrapArr.className = 'wrapArr';
			Que.append(wrapArr);
			let heigOn = Ans.clientHeight;
			Ans.style.height = "0";
			Ans.style.opacity = '0';
			Ans.style.paddingTop = "0";
			Ans.style.paddingBottom = "0";
			
			qAns[i].onclick = function() {
				wrapArr.classList.toggle("ArrUp");
				if (wrapArr.classList.contains("ArrUp")) {
						Ans.style.paddingTop = null;
						Ans.style.paddingBottom = null;
						Ans.style.height = heigOn + 'px';
					Ans.style.opacity = '1';
				} else {
					Ans.style.height = "0";
					Ans.style.paddingTop = "0";
					Ans.style.paddingBottom = "0";
					Ans.style.opacity = '0';
						}	}	}	}
});
//---------------раскрывающиеся списки FAQ
