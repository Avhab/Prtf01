/* бургер меню */
let blur = document.querySelector(".blur");
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burgerMenu");
burgerMenu.style.transformOrigin = '0 0';
burgerMenu.style.transform = 'scaleY(0)';
burgerMenu.style.opacity = '0';
blur.style.opacity = '0';

let stopBlurOff = false; //включить в true, чтобы предотвратить выключение blur
function blurOff(){
	if (stopBlurOff == false) {
		setTimeout(function(){	blur.style.display = null;	}, 300);
		blur.style.opacity = '0';
	} else {stopBlurOff = false;}
}
		
function closBurgerMenu(){
	setTimeout(function(){
		burgerMenu.style.display = null;
	}, 300);
	burgerMenu.style.transform = 'scaleY(0)';
	burgerMenu.style.opacity = '0';
	blurOff();
	document.removeEventListener("click", closBurgerMenu);
}
		
burger.onclick = function(){
/*	event.stopPropagation();*/
	blur.style.display = 'block';
	burgerMenu.style.display = 'block';
	setTimeout(function(){
		burgerMenu.style.transform = null;
		burgerMenu.style.opacity = null;
		blur.style.opacity = null;
		document.addEventListener("click", closBurgerMenu);
	}, 30);
}
/* бургер меню */

let logInMenu = document.querySelector(".logInMenu");
let logInForm = logInMenu.querySelector("#logInForm");
let closCros = logInMenu.querySelector(".closCros");
logInMenu.style.transformOrigin = '0 0';
logInMenu.style.transform = 'scaleY(0)';
logInMenu.style.opacity = '0';
logInMenu.opacity = '0';

function closLogInMenu(){
	setTimeout(function(){	logInMenu.style.display = null;	}, 300);
	logInMenu.style.transform = 'scaleY(0)';
	logInMenu.style.opacity = '0';
	blurOff();
	logInForm.removeEventListener("onsubmit", closLogInMenu);	}

function logInMenuOn() {
/*	event.stopPropagation();*/
	if (blur.style.display == 'block') {//если blur включен
		stopBlurOff = true;		//предотвращаем его выключение при запуске blurOff из процедуры закрытия другого меню
		setTimeout(function(){stopBlurOff = false;}, 1000); //для гарантии работоспособности blurOff в дальнейшем, через 1с возвращаем флаг в false
		}
	blur.style.display = 'block';
	logInMenu.style.display = 'block';
	setTimeout(function(){
		logInMenu.style.transform = null;
		logInMenu.style.opacity = null;
		blur.style.opacity = null;
	}, 30);
	logInForm.addEventListener("onsubmit", closLogInMenu);	}

closCros.onclick = function(){	closLogInMenu();}

let logIn = document.querySelectorAll(".logIn");
for (let i = 0; i < logIn.length; i++) { logIn[i].onclick = function(){ logInMenuOn();}	}

/* всплывающий каталог */
let catUnfold = document.querySelector(".catUnfold");
let popupCat = document.querySelector(".popupCat");
if (catUnfold&&popupCat) {
	let cont = popupCat.querySelector(".cont");
	popupCat.style.display = 'none';
	cont.style.transformOrigin = 'top';
	cont.style.transform = 'translateY(50px)';
	cont.style.opacity = '0'; 	

	function popupOff() {
		cont.style.transform = 'translateY(50px)';
		cont.style.opacity = '0'; 	
		setTimeout(function(){popupCat.style.display = 'none';}, 300);	}

	catUnfold.onclick = function(){
		if (popupCat.style.display == 'none'){
			popupCat.style.display = null;
			event.stopPropagation();
			setTimeout(function(){cont.style.transform = null;cont.style.opacity = null;}, 10);
		}else{	popupOff();	}	}
	document.addEventListener("click", function(){
		if (popupCat.style.display != 'none') {popupOff();}	});
}
/* всплывающий каталог */

/* установить / снять лайк */
let LikeH = document.querySelectorAll(".LikeH");
for (let i = 0; i < LikeH.length; i++) {LikeH[i].onclick = function() {LikeH[i].classList.toggle("Yes");	}}
/* установить / снять лайк */

/* показ всех / сокрытие лишних goodCard в cont */
let part = document.querySelectorAll("body>div");
for (let i = 0; i < part.length; i++) {
	CreateScroll(part[i]);//проверка наличия и обработка элемента со скролл-контейнером
	let wrapCont = part[i].querySelector(".wrapCont");
	let cont = part[i].querySelector(".cont.partShow");
	if (wrapCont && cont){
		let wrapTxt = wrapCont.textContent;
//		alert(i);
//		alert(wrapTxt);
		wrapCont.onclick = function() {
			if (cont.classList.contains("partShow")) {
				cont.classList.remove("partShow");
				wrapCont.textContent = "Свернуть";
				CreateScroll(part[i]);//количество показываемых goodCard изменено - обновляем элемент со скролл-контейнером
			}else{
				cont.classList.add("partShow");
				wrapCont.textContent = wrapTxt;
				CreateScroll(part[i]);//количество показываемых goodCard изменено - обновляем элемент со скролл-контейнером
			}	}	}	}
/* показ всех / сокрытие лишних goodCard в cont */


function CreateScroll(part) {
	let hScroll = part.querySelector(".hScroll");//элемент с скролл-контейнером
	if (hScroll) {
		let leftArr = hScroll.querySelector(".leftArr");
		let rightArr = hScroll.querySelector(".rightArr");
		if (leftArr) {leftArr.remove();}//если кнопка уже создана - удаляем
		if (rightArr) {rightArr.remove();}//если кнопка уже создана - удаляем
		let ScrlCont = hScroll.querySelector(".cont");//контейнер элементов-скролла
		leftArr = document.createElement("div");
		rightArr = document.createElement("div");
		leftArr.className = "slideArr leftArr";
		rightArr.className = "slideArr rightArr";
		ScrlCont.before(leftArr);//кнопка переключения влево
		ScrlCont.after(rightArr);//кнопка переключения вправо
		let goodCard = ScrlCont.querySelectorAll(".cont>div");//элементы переключения - слайды
		let visibleCount = 0; //количество элементов скроллинга
		for (let i = 0; i < goodCard.length; i++) {	if(goodCard[i].scrollWidth>0) {visibleCount++;}}
		let dots = hScroll.querySelector(".dots");//индикаторные точки
		let dot = [];
		if (dots) {
			for (let i = 0; i < visibleCount; i++) {
				dot[i] = document.createElement("div");
				dots.append(dot[i]);
				dot[i].classList.add("dot");	}
			dot[0].style.opacity = '1';
			function dotSwich() {
				for (let i = 0; i < dot.length; i++) {dot[i].style.opacity = null;				}
				dot[(Math.round(ScrlCont.scrollLeft / ScrlCont.clientWidth))].style.opacity = '1';
			}
		}//индикаторные точки

		if (leftArr) {
			leftArr.onclick = function(){ //кнопка переключения влево
				let scrlStep = ScrlCont.scrollWidth/visibleCount; //шаг скроллинга в пикселах
				ScrlCont.scrollTo({left: ((Math.round(ScrlCont.scrollLeft/scrlStep))*scrlStep - scrlStep), behavior: 'smooth'});
				if (dots) { setTimeout( function(){dotSwich();}, 500);}
			}
		}
			
		if (rightArr) {
			rightArr.onclick = function(){ //кнопка переключения вправо
				let scrlStep = ScrlCont.scrollWidth/visibleCount; //шаг скроллинга в пикселах
				ScrlCont.scrollTo({left: ((Math.round(ScrlCont.scrollLeft/scrlStep))*scrlStep + scrlStep), behavior: 'smooth'});
				if (dots) { setTimeout( function(){dotSwich();}, 500);}
			}
		}

		if (dots) {//Обработка скролла выполняется, если есть индикаторные точки
			let ScrlFlag=false;
			let ScrlTime;
			let curSld = 0;
			let scrlStep = Math.trunc(ScrlCont.scrollWidth / visibleCount); //шаг скроллинга в пикселах
			function AnScroll() {	//Обработка скролла
				if (ScrlFlag) {//выполняется, в состоянии движения скролла по инерции
					clearTimeout(ScrlTime);
					ScrlTime = setTimeout( function() {
						ScrlCont.scrollTo({left: ((Math.round(ScrlCont.scrollLeft/ScrlCont.clientWidth))*(ScrlCont.scrollWidth/visibleCount)), behavior: 'smooth'});
						}, 100);
						dotSwich();
				}	}
			ScrlCont.addEventListener("scroll", function (e) { AnScroll(); }); //Обработка скролла
			ScrlCont.addEventListener("touchstart", function (e) { ScrlFlag = false; }); //Начало касания
			ScrlCont.addEventListener("touchend", function (e) { ScrlFlag = true; AnScroll(); });//Пользователь отпустил экран
		}
	}
}
/*



	let hScroll = document.querySelectorAll(".hScroll");//элемент с скролл-контейнером
	for (let i = 0; i < hScroll.length; i++) {
		let leftArr = hScroll[i].querySelector(".leftArr");
		let rightArr = hScroll[i].querySelector(".rightArr");
		if (leftArr) {leftArr.remove();}//если кнопка уже создана - удаляем
		if (rightArr) {rightArr.remove();}//если кнопка уже создана - удаляем
		let ScrlCont = hScroll[i].querySelector(".cont");//контейнер элементов-скролла
		leftArr = document.createElement("div");
		rightArr = document.createElement("div");
		leftArr.className = "slideArr leftArr";
		rightArr.className = "slideArr rightArr";
		ScrlCont.before(leftArr);//кнопка переключения влево
		ScrlCont.after(rightArr);//кнопка переключения вправо
		let goodCard = ScrlCont.querySelectorAll(".goodCard");//элементы переключения - слайды
		let NmSld = goodCard.length;
		let scrlStep = Math.trunc(ScrlCont.scrollWidth / NmSld); //шаг скроллинга в пикселах
		let curSld = 0;
		let ScrlTime;
		let ScrlFlag = true;

		if (leftArr) {leftArr.onclick = function(){
			curSld = curSld-1;
			if (curSld<0) {curSld=0;};
			ScrlCont.scrollTo({left: (scrlStep * curSld), behavior: 'smooth'});	}	}//кнопка переключения влево
		if (rightArr) {rightArr.onclick = function(){
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


let getPrice = document.querySelector(".getPrice .calc");
if (getPrice) {
	let indLineCont = getPrice.querySelector(".indLine");
	let indLine = [];
	
	let itmChk = getPrice.querySelectorAll(".itmChk");
	let button = getPrice.querySelector(".button");
	let phone = getPrice.querySelector("input.phone");
	let send = getPrice.querySelector("input.send");
	let hint = getPrice.querySelector(".hint");
	let Nquest = getPrice.querySelector(".Nquest");
	
	let blockSomeT = function (event) {  event.preventDefault();	};
	getPrice.addEventListener('submit', blockSomeT);
//	getPrice.removeEventListener('submit', blockSomeT);

	for (let i = 0; i < itmChk.length; i++) {
		let itm = itmChk[i].querySelectorAll(".itm");
		let chkBox = itmChk[i].querySelectorAll(".chkBox");
		let radioIn = itmChk[i].querySelectorAll("input");
		indLine[i] = document.createElement("div");
		indLineCont.append(indLine[i]);
		indLine[i].onclick = function() {
			if (indLine[i].classList.contains("checked")) {
				for (let j = 0; j < indLine.length; j++) {
					
					if (i<(indLine.length-1)) {
						hint.style.display = null;
						button.style.display = null;
						phone.style.display = "none";
						send.style.display = "none";
						getPrice.addEventListener('submit', blockSomeT);
						Nquest.innerHTML = String(i + 1);		}
					
					if (j < i) {
						itmChk[j].style.display = "none";
					}else{
						if (j == i) {
							itmChk[j].style.display = null;
						}else{
							itmChk[j].style.display = "none";
							indLine[j].classList.remove("checked");	}	}	}	}	}

		function itmClick(j) {
			for (let g = 0; g < itm.length; g++) {
			if (j==g) {	
				chkBox[g].classList.add("checked");
				if (radioIn.length>0) {	radioIn[g].checked = true;	}
			}else{
				chkBox[g].classList.remove("checked");		}	}	}
				
		for (let i = 0; i < itm.length; i++) {
			itm[i].onclick = function() { itmClick(i);}		}
		itmClick(0);

		if (i==0) {
			indLine[i].classList.add("checked");
			itmChk[i].style.display = null;
		} else {
			indLine[i].classList.remove("checked");
			itmChk[i].style.display = "none";
			if (i==(itmChk.length - 1)){
				phone.style.display = "none";
				send.style.display = "none";}
		}
	}
	button.onclick = function() {
		for (let i = 0; i < indLine.length; i++) {
			if (indLine[i].classList.contains("checked")) {
				if (i < (indLine.length -1)) {
					itmChk[i].style.display = "none";
				}
			}else{
				itmChk[i].style.display = null;
				indLine[i].classList.add("checked");
				if (i==(indLine.length - 1)) {		
					hint.style.display = "none";
					button.style.display = "none";
					phone.style.display = null;
					send.style.display = null;
					setTimeout(function(){	getPrice.removeEventListener('submit', blockSomeT); }, 200);
				}
				Nquest.innerHTML = String(i + 1);
				i = indLine.length;
			}
		}
	}
}




//Обработка FORM ------------

let getPrice = document.querySelector(".getPrice .calc");
if (getPrice) {
	let indLine = getPrice.querySelectorAll(".indLine>div");
	let itmChk = getPrice.querySelectorAll(".itmChk");
	let button = getPrice.querySelector(".button");
	for (let i = 0; i < itmChk.length; i++) {
		let itm = itmChk[i].querySelectorAll(".itm");
		let chkBox = itmChk[i].querySelectorAll(".chkBox");
		let radioIn = itmChk[i].querySelectorAll("input");

 Клик по индикатору		
		indLine[i].onclick = function() {
			if (indLine[i].classList.contains("checked")) {
				for (let j = 0; j < indLine.length; j++) {
					if (j < i) {
						itmChk[j].style.display = null;
					}else{
						if (j == i) {
							itmChk[j].style.display = "flex";
						}else{
							itmChk[j].style.display = null;
							indLine[j].classList.remove("checked");	}	}	}	}	}

		function itmClick(j) {
			for (let g = 0; g < itm.length; g++) {
			if (j==g) {	
				chkBox[g].classList.add("checked");
				if (radioIn.length>0) {	radioIn[g].checked = true;	}
			}else{
				chkBox[g].classList.remove("checked");		}	}	}
				
		for (let i = 0; i < itm.length; i++) {
			itm[i].onclick = function() { itmClick(i);}		}
		itmClick(0);

	}
	button.addEventListener("click", function(){
		window.location.href = 'getPrice02.html';
		});
}
*/

/*
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
		wrapArr.innerHTML = "<img src='images/faqClose.png'>"
		let heigOn = Ans.clientHeight + Ans.clientHeight*0.07;
		Ans.style.height = "0";
		Ans.style.opacity = '0';
		Ans.style.padding = "0";
		
		qAns[i].onclick = function() {
			wrapArr.classList.toggle("ArrUp");
			if (wrapArr.classList.contains("ArrUp")) {
				wrapArr.innerHTML = "<img src='images/faqOpen.png'>"
				Ans.style.height = heigOn + 'px';
				Ans.style.padding = null;
				Ans.style.opacity = '1';
			} else {
				wrapArr.innerHTML = "<img src='images/faqClose.png'>"
				Ans.style.height = "0";
				Ans.style.padding = "0";
				Ans.style.opacity = '0';
					}	}	}	}
//---------------раскрывающиеся списки FAQ

//мобильное меню---------------
if (document.documentElement.clientWidth < 600) {
	let mobMenu = document.querySelector("header .mobMenu");
	let burgerMenu = document.querySelector(".burgerMenu");
	let burger = mobMenu.querySelector(".rTopCor");
	
	let topMenu = document.querySelectorAll("header .topMenu>div");
	for (let i = 0; i < topMenu.length; i++) {
		let tmp = topMenu[i].cloneNode(true);
		burgerMenu.append(tmp);
		tmp.classList.remove('rowDiv');	}

	burgerMenu.style.transform = 'scaleY(0)';
	burgerMenu.style.transformOrigin = 'top';
	burgerMenu.style.opacity = '0'; 	
	
	burger.onclick = function() {
		burgerMenu.style.display = 'block';
		event.stopPropagation();
		setTimeout(function(){	burgerMenu.style.transform = null;	burgerMenu.style.opacity = null; }, 1);	}
		
	function burgerMenuOff() {
		burgerMenu.style.transform = 'scaleY(0)';
		burgerMenu.style.opacity = '0'; 	
		setTimeout(function(){	burgerMenu.style.display = 'none';	}, 300);	}
		
	burgerMenu.addEventListener("click", function(){burgerMenuOff();});

	document.addEventListener("click", function(){
		if (burgerMenu.style.display != 'none') {burgerMenuOff();}	});
}
//---------------мобильное меню




window.onload = function() {

let delivSchem = document.querySelector(".delivSchem");
let pLineS = delivSchem.querySelector(".pLineS");
let pLine = pLineS.querySelectorAll("div");
let delivChart = delivSchem.querySelector(".delivChart");
let karTag = delivChart.querySelector(".karTag");
//alert (`delivChart.offsetWidth = ${delivChart.offsetWidth} ---- delivChart.offsetHeight = ${delivChart.offsetHeight}`);
let delivCord = [24.7, 64.2, 57.0, 62.9, 26.3, 59.4, 27.3, 80.0, 48.0, 32.0, 45.5, 41.0, 56.6, 45.2];
let karCord = [56.3, 20];
for (let i = 0; i < delivCord.length; i++) {if (i % 2 != 0) {delivCord[i] = delivCord[i]*delivChart.offsetHeight/100;} else {delivCord[i] = delivCord[i]*delivChart.offsetWidth/100;}}
for (let i = 0; i < karCord.length; i++) {if (i % 2 != 0) {karCord[i] = karCord[i]*delivChart.offsetHeight/100;} else {karCord[i] = karCord[i]*delivChart.offsetWidth/100;}}
karTag.style.left = karCord[0] + "px";
karTag.style.top = karCord[1] + "px";
karCord[0] = karCord[0] + karTag.offsetWidth/2;
karCord[1] = karCord[1] + karTag.offsetHeight/2;
let deliv = [];
let geoTag = [];
let bluTag = [];
let whitTag = [];
let airPlane = [];
let airLine = [];
let correct = 492/987;

function pLineOn(i) {
	for (let j = 0; j < pLine.length; j++) {if (j!=i) {pLineOff(j);}}
	bluTag[i].style.display = "none";
	whitTag[i].style.display = null;
		whitTag[i].style.left = (delivCord[i*2] - whitTag[i].clientWidth*0.93/2) + "px";
		whitTag[i].style.top = (delivCord[i*2 + 1] - whitTag[i].clientHeight*0.95) + "px";
	airPlane[i].style.display = null;
	airLine[i].style.display = null;
	pLine[i].classList.add('selctd');	}
function pLineOff(i) {
	bluTag[i].style.display = null;
		bluTag[i].style.left = (delivCord[i*2] - bluTag[i].clientWidth/2) + "px";
		bluTag[i].style.top = (delivCord[i*2 + 1] - bluTag[i].clientHeight) + "px";
	whitTag[i].style.display = "none";
	airPlane[i].style.display = "none";
	airLine[i].style.display = "none";
	
	
	pLine[i].classList.remove('selctd');	}

for (let i = 0; i < pLine.length; i++) {
	geoTag[i] = document.createElement("div");
	delivChart.append(geoTag[i]);
	geoTag[i].classList.add('geoTag');
	geoTag[i].style.left = delivCord[i*2] + "px";
	geoTag[i].style.top = delivCord[i*2 + 1] + "px";

	whitTag[i] = document.createElement("img");
	delivChart.append(whitTag[i]);
	whitTag[i].classList.add('whitTag');
	whitTag[i].src = "images/geoTagWhite.svg";
	
	bluTag[i] = document.createElement("img");
	delivChart.append(bluTag[i]);
	bluTag[i].classList.add('bluTag');
	bluTag[i].src = "images/geoTagBlue.svg";
	airPlane[i] = document.createElement("img");
	delivChart.append(airPlane[i]);
	airPlane[i].classList.add('airPlane');
	airPlane[i].src = "images/airPlane.svg";
	airLine[i] = document.createElement("div");
	delivChart.append(airLine[i]);
	airLine[i].classList.add('airLine');
	let prilKat = karCord[0] - delivCord[i*2];
	let protKat = karCord[1] - delivCord[i*2 + 1];
	let angle = Math.atan(protKat/prilKat);
	let angCos = (Math.cos(angle));
	let linLenth = prilKat / (Math.cos(angle));
//	alert (`protKat: ${protKat}, prilKat: ${prilKat}, protKat/prilKat: ${protKat/prilKat}, Угол: ${angle}, Cos: ${angCos}, Гипот: ${linLenth}`);
	if (linLenth<0) {linLenth=linLenth*(- 1);}
	airLine[i].style.width = linLenth + "px";
	airLine[i].style.transform = "rotate(" + angle + "rad)";
	airPlane[i].style.left = (delivCord[i*2] + prilKat*0.4 - 12) + "px"		//корректировка положения по половине размеров изображения самолета
	airPlane[i].style.top = (delivCord[i*2 + 1] + protKat*0.4 - 9) + "px"		//--//--
	let tranStr = "rotate(" + angle + "rad)";
	if (karCord[0] < delivCord[i*2]) { tranStr = tranStr + " scale(-1, 1)"; }//корректировка направления самолета
	airPlane[i].style.transform = tranStr;
	airLine[i].style.left = (delivCord[i*2] - (linLenth - prilKat)/2) + "px";
	airLine[i].style.top = (delivCord[i*2 + 1] + protKat/2) + "px";
	pLine[i].onclick = function() {	pLineOn(i); };	
}
	setTimeout(function(){pLineOn(0);}, 100);
};
*/
