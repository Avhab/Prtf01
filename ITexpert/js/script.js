/*let testData = document.getElementById("testData");
/*	testData.textContent = ScrlCont.scrollLeft + " --- " + itmOn;*/

let HorScrl = document.querySelectorAll(".HorScrl");//элемент переключения
for (let i = 0; i < HorScrl.length; i++) {
	let butnL = HorScrl[i].querySelectorAll(".butnL");butnL=butnL[0];//кнопка переключения влево
	let butnR = HorScrl[i].querySelectorAll(".butnR");butnR=butnR[0];//кнопка переключения вправо
	let ScrlCont = HorScrl[i].querySelectorAll(".ScrlCont");ScrlCont=ScrlCont[0];//контейнер элементов-скролла
	let ScrlElem = HorScrl[i].querySelectorAll(".ScrlElem");//элементы переключения - слайды
	let scrlInd = HorScrl[i].querySelectorAll(".scrlInd");scrlInd=scrlInd[0];//контейнер элементов-индикаторов
	let IndPoint;
	let itmQan = ScrlElem.length; //количество элементов переключения
	let itmOn = 0; //индекс включенного элемента
	let scrlStep = ScrlCont.scrollWidth/itmQan; //шаг скроллинга в пикселах

	function SwSl() {  //скроллинг слайдов
		ScrlCont.scrollTo({left: scrlStep*itmOn, behavior: 'smooth'});}
					
	if (scrlInd) { //если существует контейнер индикаторов-переключателей
		for (let i = 0; i < ScrlElem.length; i++) { //создаем в нем индикаторы-переключателей - для каждого слайда
			let IPnt = document.createElement("button");
			scrlInd.append(IPnt);
			IPnt.onclick = function(){itmOn=i;SwSl();};	} //клик на индикаторе вызов функции скроллинга
		IndPoint = scrlInd.querySelectorAll("button");	}
		
	if (butnL) {butnL.onclick = function(){
		if(itmOn>0){--itmOn;SwSl();	}	};}//кнопка переключения влево
	if (butnR) {butnR.onclick = function(){
		if(itmOn<(itmQan - 1)){	++itmOn;SwSl();	}	};}//кнопка переключения вправо
	let ScrlTime;
	let ScrlFlag = false;
	
	function AnScroll() {	//Обработка скролла
		if (!ScrlFlag) {//выполняется, в состоянии движения скролла по инерции
			let tmp=Math.trunc((ScrlCont.scrollLeft/scrlStep)+0.5)		
			clearTimeout(ScrlTime);
			ScrlTime = setTimeout( function() {	itmOn = tmp;SwSl();	}, 100);
			if ((itmOn!=tmp )&&(scrlInd)) { //если скролл соответствует другому индикатору, и существует контейнер индикаторов-переключателей
					IndPoint[tmp].style.background = '#0057B3';//корректируем индикаторы
					IndPoint[itmOn].style.background = null;}
			itmOn = tmp;}	}
	ScrlCont.addEventListener("scroll", function (e) { AnScroll(); }); //Обработка скролла
	ScrlCont.addEventListener("touchstart", function (e) { ScrlFlag = true; }); //Начало касания
	ScrlCont.addEventListener("touchend", function (e) { ScrlFlag = false; AnScroll(); });//Пользователь отпустил экран
	
	SwSl();
	IndPoint[itmOn].style.background = '#0057B3';
	}


/*
  	<div class="desc06">
		<div class="Slctd">Консультация</div>
		<div>Определение условий и стоимости</div>
		<div>Экспертиза</div>
		<div>Экспертное заключение</div>
		<div>Защита в суде</div>
	</div>
	<div class="modlScrol">
		<div>
			<img src="images/expOrd01.png">
			<div>КОНСУЛЬТАЦИЯ</div>
			<div>Наши специалисты проводят консультацию и предлагают решение задачи за 15 минут</div>
			<button>Записаться на консультацию</button>
		</div>
*/
let HorScrol = document.querySelectorAll(".HorScrol");//элемент горизонтального скроллинга
for (let i = 0; i < HorScrol.length; i++) {	//элемент горизонтального скроллинга
	/*alert(modlScrol[i].clientWidth);*/
	let modlScrol = HorScrol[i].querySelectorAll(".modlScrol");modlScrol=modlScrol[0];//окно горизонтального скроллинга
	let windWidt = modlScrol.clientWidth; //ширина окна скролления
	let framWidt = modlScrol.clientWidth; //ширина элемента скролления
	let framScrol = modlScrol.querySelectorAll(".modlScrol>div"); //элементы скролления
	let butScrol = HorScrol[i].querySelectorAll(".desc06>div"); //заголовки -кнопки-ссылки- элементы скролления
	let marG = 30; //промежуток между элементами скролления
	let curNm = 0; //текущий номер элемента скролления
	let curShift = 0; //текущее смещение тача
	for (let i = 0; i < butScrol.length; i++) {
		butScrol[i].onclick = function() {ScrlPos(i);};}

	function ScrlMov() { //смещение всех элементов скроллинга - получает индекс элемента показа
		for (let i = 0; i < framScrol.length; i++) {
			framWidt = framScrol[i].clientWidth;
			let shiftSt = 0;//смещение элемента скроллинга
			if (windWidt>framWidt) {shiftSt = (windWidt - framWidt)/2;}//если окно больше элемента, вычисляется смещение элемента скроллинга
			shiftSt = shiftSt - curShift - ((framWidt + marG) * (i - curNm) - 8);
			framScrol[i].style.right = shiftSt + 'px';	}	}
	function ButLit() { //подсветка текущего заголовка-кнопки-ссылки
		for (let i = 0; i < framScrol.length; i++) {
			if (i==curNm) {butScrol[i].classList.add("Slctd");}else{butScrol[i].classList.remove("Slctd");}	}	}
	function ScrlPos(Nm) { //переключение всех элементов скроллинга - получает индекс текущего элемента
		curNm = Nm;
		ScrlMov();
		ButLit();}
//тачскрин
	let touchStart = null; //Точка начала касания
	let touchPosition = null; //Текущая позиция
	function TouchStart(e) {//Получаем текущую позицию касания
		touchStart = { x: e.changedTouches[0].clientX };
		touchStart = touchStart.x; //запоминаем точку старта
		touchPosition = touchStart;	
		//на время тача устанавливаем скорость трансформации равной нулю
		for (let i = 0; i < framScrol.length; i++) {framScrol[i].style.transitionDuration = '0s';}		}
	function TouchMove(imG, e) {	//Получаем новую позицию
		touchPosition = { x: e.changedTouches[0].clientX };
		touchPosition = touchPosition.x; //запоминаем текущую позицию
		//отсюда до конца функции - смещение слайда с удержанием тачем - можно убрать
		curShift = (touchStart - touchPosition)*-1; //текущее перемещение в текущее смещение
		ScrlMov(curNm);	}
	function TouchEnd(imG)	{ 
		//отменяем обнуление скорости трансформации
		for (let i = 0; i < framScrol.length; i++) {framScrol[i].style.transitionDuration = null;}
		let tSh = curShift;//запоминаем текущее смещение тача
		curShift = 0; //обнуляем текущее смещение тача
		if (Math.abs(tSh)>(imG.clientWidth/3)) { //порог смещения, выше которого происходит смена слайда
			if (tSh<0) {if (curNm < (framScrol.length - 1)) {ScrlPos(curNm+1);}else{ScrlMov();}
			} else {if (curNm > 0) {ScrlPos(curNm - 1);}else{ScrlMov();}	}
		} else {ScrlMov();}// возврат слайда на свое место
		touchStart = null; //Точка начала касания
		touchPosition = null; //Текущая позиция
	}	
	modlScrol.addEventListener("touchstart", function (e) { TouchStart(e); }); //Начало касания
	modlScrol.addEventListener("touchmove", function (e) { TouchMove(modlScrol, e); }); //Движение пальцем по экрану
	modlScrol.addEventListener("touchend", function (e) { TouchEnd(modlScrol); });//Пользователь отпустил экран
	modlScrol.addEventListener("touchcancel", function (e) { TouchEnd(modlScrol); });//Отмена касания
//тачскрин
	ScrlPos(0);
}


let QueS = document.querySelectorAll(".QueS");//вопросы-ответы
for (let i = 0; i < QueS.length; i++) {
	let Qitem = QueS[i].querySelectorAll(".Qitem");//тема вопросы-ответы
	for (let i = 0; i < Qitem.length; i++) {
		let Qhead = Qitem[i].querySelectorAll(".Qhead");//заголовок
		Qhead = Qhead[0];
		let button = Qitem[i].querySelectorAll("button");//кнопка
		button = button[0];
		let Qtxt = Qitem[i].querySelectorAll(".Qtxt");//текст
		Qtxt = Qtxt[0];
		Qhead.onclick = function() {
			if (Qtxt.classList.contains("Qhidn")) {
				Qtxt.classList.toggle("Qhidn");
				setTimeout( function() { Qtxt.style.transform = 'scaleY(1)'; }, 10);
				setTimeout( function() { button.textContent = '-'; }, 300);
				event.stopPropagation();}	};
		Qitem[i].onclick = function() {
			Qtxt.style.transform = 'scaleY(0.01)';
			setTimeout( function() { Qtxt.classList.add("Qhidn"); button.textContent = '+';}, 300);	};
		Qtxt.classList.add("Qhidn");
		Qtxt.style.transformOrigin = 'left top';
		Qtxt.style.transform = 'scaleY(0.01)';
		Qtxt.style.transitionDuration = '0.3s';		}	}










