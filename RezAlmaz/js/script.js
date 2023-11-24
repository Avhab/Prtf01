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


/* <<<---бургер-меню в заголовке  */
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
//	alert (`scrollWidth: ${scrolCont.scrollWidth}   clientWidth: ${scrolCont.clientWidth}`);
	if (scrolCont.scrollWidth > (100 + scrolCont.clientWidth)) {
		
		let goodCard = scrolCont.querySelectorAll(".scrolCont>div");//элементы переключения - слайды
		let arrLeft = hScrol[j].querySelector(".arrLeft");
		let arrRight = hScrol[j].querySelector(".arrRight");
		let dots = hScrol[j].querySelector(".dots");//индикаторные точки
		let dotArr = hScrol[j].querySelector(".dotArr");//одиночная стрелка
//		let lookAll = hScrol[j].querySelector(".lookAll");//Посмотреть все
		let scrlStep = Math.trunc(scrolCont.clientWidth/goodCard[0].offsetWidth); //шаг скроллинга в пикселах
		if (scrlStep > 0) {	scrlStep = 4 + (scrlStep*goodCard[0].offsetWidth);
		}else{	scrlStep = 4 + goodCard[0].offsetWidth; }
		let visibleCount = Math.ceil(scrolCont.scrollWidth/scrlStep); //количество элементов скроллинга
		let currNum = hScrol[j].querySelector(".currNum");//текущий слайд
		let allNum = hScrol[j].querySelector(".allNum");//число слайдов
		
		if (allNum) {
			allNum.innerHTML = goodCard.length.toString().padStart(2, '0');	}
		scrolCont.scrollLeft=0;
		if (arrLeft) {arrLeft.classList.add("arrStop");}
		
		let dot = [];	//индикаторные точки

	//создание индикаторных точек
		if (dots) {

			for (let i = 0; i < visibleCount; i++) {
				dot[i] = document.createElement("div");
				dots.append(dot[i]);
				dot[i].classList.add("dot");
				if (i==0) {dot[i].classList.add("selected");}
			}
		}			
	//Обработка скролла выполняется, если есть индикаторные точки

		let ScrlFlag=true;
		let ScrlTime;
	//Функции, выполняемые во время скролла
		scrolCont.addEventListener("scroll", function (e) {
			if (ScrlFlag) {
			ScrlFlag=false;
			clearTimeout(ScrlTime);
			ScrlTime = setTimeout( function() {
				ScrlFlag=true;
				//переключение индикаторных точек
				if (dot) {
					for (let i = 0; i < dot.length; i++) {dot[i].classList.remove("selected");}
					let indx = scrolCont.scrollLeft/scrlStep;
					let ind = Math.round(scrolCont.scrollLeft/scrlStep);
					if ((indx-ind)>0.07) {ind = Math.ceil(indx);}
					dot[ind].classList.add("selected");
				}//-----------переключение индикаторных точек
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
				}, 100);
			}
		}); //Обработка скролла


	/*
			let ScrlFlag=false;
			let ScrlTime;
			let curSld = 0;
	//		let scrlStep = Math.trunc(scrolCont.scrollWidth / visibleCount); //шаг скроллинга в пикселах
			function AnScroll() {	//Обработка скролла
				if (ScrlFlag) {//выполняется, в состоянии движения скролла по инерции
					clearTimeout(ScrlTime);
					ScrlTime = setTimeout( function() {
						scrolCont.scrollTo({left: ((Math.round(scrolCont.scrollLeft/scrolCont.clientWidth))*(scrolCont.scrollWidth/visibleCount)), behavior: 'smooth'});
						}, 100);
						dotSwich("Rt");
				}	}
			scrolCont.addEventListener("scroll", function (e) { AnScroll(); }); //Обработка скролла
			scrolCont.addEventListener("touchstart", function (e) { ScrlFlag = false; }); //Начало касания
			scrolCont.addEventListener("touchend", function (e) { ScrlFlag = true; AnScroll(); });//Пользователь отпустил экран
		*/



/*		
		if (lookAll) {
			lookAll.onclick = function(){ //Посмотреть все
				scrolCont.scrollTo({left: (scrolCont.scrollWidth), behavior: 'smooth'});	}	}
*/
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

let FAQ = document.querySelectorAll(".FAQ");
for (let i = 0; i < FAQ.length; i++) {
	let qAns = FAQ[i].querySelectorAll(".qAns");
	for (let i = 0; i < qAns.length; i++) {
		let Que = qAns[i].querySelector(".Que");
		let Ans = qAns[i].querySelector(".Ans");
		let wrapArr = document.createElement("div");
		wrapArr.className = 'wrapArr';
		Que.append(wrapArr);
		let heigOn = Ans.clientHeight*1.07;
		Ans.style.height = "0";
		Ans.style.opacity = '0';
		Ans.style.padding = "0";
		
		qAns[i].onclick = function() {
			wrapArr.classList.toggle("ArrUp");
			if (wrapArr.classList.contains("ArrUp")) {
				Que.style.borderRadius = '10px 10px 0 0';
				Ans.style.padding = null;
				Ans.style.height = heigOn + 'px';
				Ans.style.opacity = '1';
			} else {
				Ans.style.height = "0";
				Ans.style.padding = "0";
				Ans.style.opacity = '0';
				Que.style.borderRadius = null;
					}	}	}	}

//---------------раскрывающиеся списки FAQ
