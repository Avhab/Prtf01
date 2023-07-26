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
let catUnfold = document.querySelectorAll(".catUnfold");
let popupCat = document.querySelector(".popupCat");
for (let i = 0; i < catUnfold.length; i++) {
	if (popupCat) {
		let cont = popupCat.querySelector(".cont");
		popupCat.style.display = 'none';
		cont.style.transformOrigin = 'top';
		cont.style.transform = 'translateY(50px)';
		cont.style.opacity = '0'; 	

		function popupOff() {
			if (popupCat.style.display != 'none') {
				cont.style.transform = 'translateY(50px)';
				cont.style.opacity = '0'; 	
				setTimeout(function(){popupCat.style.display = 'none';}, 300);
				document.removeEventListener("click", popupOff);
			}
		}

		catUnfold[i].onclick = function(){
			if (popupCat.style.display == 'none'){
				popupCat.style.display = null;
/*				event.stopPropagation();*/
				setTimeout(function(){
					cont.style.transform = null;cont.style.opacity = null;
					document.addEventListener("click", popupOff);
				}, 10);
			}	
		}
	}
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

let goodGroup = document.querySelectorAll(".goodGroup");//группы карточек
for (let i = 0; i < goodGroup.length; i++) {
	let viewType = goodGroup[i].querySelector(".viewType");//переключатель отображения карточек
	if (viewType) {
		let viewTypeBlock = viewType.querySelector(".viewTypeBlock");//переключатель на блоки
		let viewTypeLine = viewType.querySelector(".viewTypeLine");//переключатель на линии
		viewTypeLine.style.display = "none";
			goodGroup[i].classList.add("blockView");
			viewTypeBlock.onclick = function(){
				viewTypeBlock.style.display = "none";
				viewTypeLine.style.display = null;
				goodGroup[i].classList.add("lineView");
				goodGroup[i].classList.remove("blockView");
			}
			viewTypeLine.onclick = function(){
				viewTypeLine.style.display = "none";
				viewTypeBlock.style.display = null;
				goodGroup[i].classList.add("blockView");
				goodGroup[i].classList.remove("lineView");
			}
	}
}



let bets = document.querySelector(".bets");
if (bets) {
	let tagFilter = bets.querySelector(".tagFilter");
	let goodCards = bets.querySelector(".goodCards");
	let goodCard = goodCards.querySelectorAll(".goodCard");
	let FiltrTag = tagFilter.querySelectorAll(".Tag");

	function cardOn(thisCard){
		setTimeout(function(){
			thisCard.style.display = null;
			setTimeout(function(){
				thisCard.style.transform = 'scaleY(1)';
				thisCard.style.opacity = '1'; 	
			}, 20);
		}, 330);
	}
	function cardOff(thisCard){
		thisCard.style.transformOrigin = 'center top';
		thisCard.style.transform = 'scaleY(0)';
		thisCard.style.opacity = '0'; 	
		setTimeout(function(){thisCard.style.display = 'none';}, 300);
	}
	function swFiltr(){
		let TagOn = tagFilter.querySelectorAll(".Tag.tagOn"); //включенные теги на панели фильтра
		if (TagOn.length>0) {//если включенные теги на панели фильтра присутствуют, перебираем все карточки
			for (let i = 0; i < goodCard.length; i++) {
				cardOff(goodCard[i]);//сначала выключаем карточку
				let Tag = goodCard[i].querySelectorAll(".Tag"); //теги на карточке товара
				for (let g = 0; g < Tag.length; g++) {
					let goodList = Tag[g].classList; //для каждого тега на карточке товара анализируем его классы
					for (let j = 0; j < goodList.length; j++) {
						if ((goodList[j]!="Tag")&&(goodList[j]!="tagOn")){//вычленяем класс вида тега
							for (let k = 0; k < TagOn.length; k++) {//перебираем включенные теги фильтра
								if (TagOn[k].classList.contains(goodList[j])){//если тег фильтра содержит искомый вид тега
									cardOn(goodCard[i]);//включаем карточку
								}
							}
						}
					}
				}
			}
		}else{ //если включенные теги на панели фильтра отсутствуют, перебираем и включаем все карточки
			for (let i = 0; i < goodCard.length; i++) {	
				cardOff(goodCard[i]);
				cardOn(goodCard[i]);
			}
		}
	}

	for (let i = 0; i < FiltrTag.length; i++) {
		FiltrTag[i].onclick = function(){
			if (FiltrTag[i].classList.contains("tagOn")) {
				FiltrTag[i].classList.remove("tagOn");
			}else{
				FiltrTag[i].classList.add("tagOn");
			}
			swFiltr();
		}
	}
}


