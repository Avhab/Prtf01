/*<----тестовый вывод размеров окна*/
let sizDisp = document.createElement("div");
let body = document.querySelector("body");
body.append(sizDisp);
sizDisp.style.cssText = "position:fixed;top:160px;left:2px;background:white;color:black;padding:0 5px;border: 1px solid red;";
function sdReN() {
	sizDisp.innerHTML = `${window.innerWidth} x ${window.innerHeight}`;
	if (window.innerWidth<900) {sizDisp.style.fontSize = `${window.innerWidth/20}px`;} else {
		sizDisp.style.fontSize = `${window.innerWidth/70}px`;}
	}
sdReN();
window.addEventListener("resize", function (e) {sdReN(); });
/*тестовый вывод размеров окна---->*/


/*<----тестовый вывод параметров скролла*/
/*
let scrolDisp = document.createElement("div");
body.append(scrolDisp);
scrolDisp.style.cssText = "position:fixed;top:100px;left:2px;background:white;color:black;padding:0 5px;border: 1px solid red;";
scrolDisp.style.fontSize = `${window.innerWidth/30}px`;
let strN01 = document.createElement("div");scrolDisp.append(strN01);
let strN02 = document.createElement("div");scrolDisp.append(strN02);
let strN03 = document.createElement("div");scrolDisp.append(strN03);
let strN04 = document.createElement("div");scrolDisp.append(strN04);
let strN05 = document.createElement("div");scrolDisp.append(strN05);
let strN06 = document.createElement("div");scrolDisp.append(strN06);
let strN07 = document.createElement("div");scrolDisp.append(strN07);
let strN08 = document.createElement("div");scrolDisp.append(strN08);
*/
/*
					strN01.innerHTML = 'Весь скролл  ' + scrolCont.scrollWidth;
					strN02.innerHTML = 'Окно  ' + scrolCont.clientWidth;
					strN03.innerHTML = 'Шаг скроллинга  ' + scrlStep;
					strN04.innerHTML = 'Сегмент точки   ' + (scrolCont.scrollWidth/dot.length).toFixed(2);
					strN05.innerHTML = 'scrollLeft   ' + scrolCont.scrollLeft.toFixed(2);
					strN06.innerHTML = 'Индекс   ' + indx + '  ' + (scrolCont.scrollLeft/(scrolCont.scrollWidth/dot.length)).toFixed(2);
					strN07.innerHTML = 'Текущий скролл  ' + (scrolCont.scrollLeft/(scrolCont.scrollWidth/dot.length)).toFixed(2);
					strN08.innerHTML = 'Осталось скролла  ' + (scrolCont.scrollWidth - (scrolCont.scrollLeft + scrolCont.offsetWidth)).toFixed(2);
*/


/*тестовый вывод параметров скролла---->*/
/* вывод  числа в корзину --->>>*/
let style = document.createElement('style');
let carQnt = 2;
style.innerHTML = `a.cart.cartOn::after {content:'${carQnt}';}`;
document.head.appendChild(style);
/*>>>--- вывод  числа в корзину*/

/* <<<---бургер-меню в заголовке  */

let blur = document.querySelector(".blur");
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burgerMenu");
//let closCr = burgerMenu.querySelector(".closCr");
let burgMOpn=true;
function burgMenClos() {
	if (burgMOpn==true) {
		burgMOpn=false;
		burgerMenu.style.transform = 'scaleY(0)';
		blur.style.opacity = '0';
		setTimeout(function(){
			burgerMenu.classList.add("dispNon");
			blur.classList.add("dispNon");
			}, 300);
		}
	}
burgMenClos();
burgerMenu.onmouseleave = function() { burgMenClos();}
burgerMenu.addEventListener("click", function (e) {	burgMenClos();});

burger.onclick = function() {
	burgerMenu.classList.remove("dispNon");
	blur.classList.remove("dispNon");
	setTimeout(function(){
		burgerMenu.style.transform = 'scaleY(1)';
		blur.style.opacity = '1';
	}, 30);
	setTimeout(function(){burgMOpn=true;}, 400);
}
/* >>>--- бургер-меню в заголовке*/

/* разворачивание текста --->>> */
let lsCont = document.querySelectorAll(".treiders .feedBk .vCont");
for (let i = 0; i < lsCont.length; i++) {
	let txtLst = lsCont[i].querySelector(".txt");
	if (txtLst.clientHeight < txtLst.scrollHeight) {
		let sHei = txtLst.offsetHeight;
		let fHei = txtLst.scrollHeight;
		let unFold = false;
		txtLst.style.overflowY = 'hidden';
		txtLst.style.position = 'relative';
		let blGrad = document.createElement("div");
		txtLst.append(blGrad);
		blGrad.style.cssText = "position:absolute;z-index:2;bottom:0;left:0;width:100%;height:4em;";
		blGrad.style.background = "linear-gradient(transparent, #15181D 70%)";
		let popDescr = document.createElement("div");
		txtLst.append(popDescr);
		popDescr.innerHTML = "развернуть...";
		popDescr.style.cssText = "position:absolute;z-index:3;bottom:0;left:0;color:#82EBC1;width:100%;text-align:right;padding:0 10px;cursor:pointer;";
		popDescr.onclick = function() {
			txtLst.style.height = fHei + 'px';
			blGrad.style.opacity = '0';
			popDescr.style.opacity = '0';
			txtLst.style.cursor = 'pointer';
			setTimeout(function(){
				blGrad.style.display = 'none';
				popDescr.style.display = 'none';
				unFold = true;	}, 300);	}
		function txtClos() {
			if (unFold == true) {
				unFold = false;
				blGrad.style.display = null;
				popDescr.style.display = null;
				txtLst.style.height = sHei + 'px';
				txtLst.style.cursor = null;
				setTimeout(function(){
					blGrad.style.opacity = '1';
					popDescr.style.opacity = '1';
				}, 20);	}	}
		txtLst.onclick = function() {txtClos();}
		txtLst.onmouseleave = function() { txtClos();}
	}
}
/* >>>--разворачивание текста*/


/* выпадающий список --->>> */
/*
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
*/
/*  --->>>выпадающий список */

let hScrol = document.querySelectorAll(".hScrol");//элемент с скролл-контейнером
for (let j = 0; j < hScrol.length; j++) {
	let scrolCont = hScrol[j].querySelector(".scrolCont");//контейнер элементов-скролла
	if (scrolCont.scrollWidth > scrolCont.clientWidth) {
		let goodCard = scrolCont.querySelectorAll(".scrolCont>*");//элементы переключения - слайды
		let arrLeft = hScrol[j].querySelector(".arrLeft");
		let arrRight = hScrol[j].querySelector(".arrRight");
		let dots = hScrol[j].querySelector(".dots");//индикаторные точки
		let dotArr = hScrol[j].querySelector(".dotArr");//одиночная стрелка
		let slidWhid = scrolCont.scrollWidth/goodCard.length; //реальная ширина слайда
		let scrlStep = scrolCont.clientWidth/slidWhid;
		if	((scrlStep - (Math.trunc(scrlStep)))>0.98) {scrlStep = Math.round(scrlStep);
			}else{	scrlStep = Math.trunc(scrlStep);}
		if (scrlStep<1) {scrlStep = 1;}
		scrlStep = scrlStep*slidWhid;	//шаг скроллинга в пикселах
		let oldScroll = 0;//величина предустановленного скролла
		let autoCentr=false; //флаг, разрешающий доводку скролла при отпускании тача
		let curNum = hScrol[j].querySelector(".curNum");//текущий слайд
		let allNum = hScrol[j].querySelector(".allNum");//число слайдов
		if (allNum) {allNum.innerHTML = goodCard.length.toString().padStart(2, '0');	}
		let acTime;
		let tStr = window.getComputedStyle(goodCard[0]).marginLeft;
		if(tStr.indexOf("px")== -1) {scrolCont.scrollLeft=0; //предустановка скролла
			}else{scrolCont.scrollLeft=tStr.slice(0, tStr.indexOf("px"));} //предустановка скролла
		if (dotArr) {dotArr.style.visibility = 'visible'};
		if (curNum) {curNum.style.visibility = 'visible'};
		if (allNum) {allNum.style.visibility = 'visible'};
//		if (arrLeft) {arrLeft.style.visibility = 'visible'};
//		if (arrRight) {arrRight.style.visibility = 'visible'};
//		if (arrLeft) {arrLeft.classList.add("arrStop");}
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
/*				if (arrLeft && arrRight) {
					if (scrolCont.scrollLeft==0) {
						arrLeft.classList.add("arrStop");
						arrRight.classList.remove("arrStop");
					}else{
						arrLeft.classList.remove("arrStop");
						if ((scrolCont.scrollWidth-scrolCont.scrollLeft-scrolCont.clientWidth)<50) {
							arrRight.classList.add("arrStop");}else{arrRight.classList.remove("arrStop");}	}	}*/
				//------------изменение цвета стрелок
				
				autoFit();	// автодоводка слайда в центр
				
				oldScroll = scrolCont.scrollLeft;	//по окончании обновляем текущее значение скролла
				ScrlFlag=true;	//по окончании разрешаем выполнение
				}, 50);
			}
		});
	//---> Функции, выполняемые во время скролла
	
		// автодоводка слайда в центр --->>
		function autoFit() {
			if (scrolCont.classList.contains("noAutoFit")==false) {
				if ((autoCentr==true)&&(Math.abs(scrolCont.scrollLeft - oldScroll)<30)){
					autoCentr = false;
					slidWhid = scrolCont.scrollWidth/goodCard.length; //коррекция реальной ширины слайда
					clearTimeout(acTime);
					acTime = setTimeout( function() {
						let indx = 0; //номер центруемого слайда
						if ((scrolCont.scrollWidth - scrolCont.scrollLeft - scrolCont.clientWidth)<(slidWhid/2)) {
							indx = scrolCont.scrollWidth;
						}else{
							if(Math.abs(scrlStep - scrolCont.clientWidth)<2){
								indx = (Math.round(scrolCont.scrollLeft/slidWhid))*slidWhid;
							}else{
								indx = (slidWhid * (Math.trunc((scrolCont.scrollLeft + scrolCont.offsetWidth/2)/slidWhid) + 0.5)) - (scrolCont.offsetWidth/2);
							}
						}	
						scrolCont.scrollTo({left: indx, behavior: 'smooth'});
					}, 200);
				}
			}
		}
		// --->> автодоводка слайда в центр
	
		scrolCont.addEventListener("touchstart", function (e) { clearTimeout(acTime); autoCentr = false; }); //Начало касания
		scrolCont.addEventListener("touchend", function (e) { autoCentr = true; });//Пользователь отпустил экран

		if (dotArr) {
			dotArr.onclick = function(){ //одиночная стрелка
				scrolCont.scrollTo({left: (scrolCont.scrollLeft + scrlStep), behavior: 'smooth'});	
				autoCentr = true;	}	}
			
		if (arrLeft) {
			arrLeft.onclick = function(){ //кнопка переключения влево
				scrolCont.scrollTo({left: (scrolCont.scrollLeft - scrlStep), behavior: 'smooth'});	
//				setTimeout( function() {autoCentr = true;autoFit();	}, 400);
				autoCentr = true;
				}	}
			
		if (arrRight) {
			arrRight.onclick = function(){ //кнопка переключения вправо
				scrolCont.scrollTo({left: (scrolCont.scrollLeft + scrlStep), behavior: 'smooth'});
//				setTimeout( function() {autoCentr = true;autoFit();}, 400);
				autoCentr = true;
				}	}
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
