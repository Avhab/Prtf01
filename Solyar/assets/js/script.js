let SlidS = new Array(); //массив групп слайдеров
let GreenTar = document.querySelectorAll(".GreenTar");
if (GreenTar.length==1) {SlidS.push(GreenTar[0]);}//помещаем в массив первую группу слайдеров
let OurCly = document.querySelectorAll(".OurCly");
if (OurCly.length==1) {SlidS.push(OurCly[0]);}//помещаем в массив вторую группу слайдеров
for (let i=0; i < SlidS.length; i++) {//программный модуль для каждой группы слайдеров
	let scrolImg = SlidS[i].querySelectorAll(".scrolImg");//изображения-слайды
	let scrolTxt = SlidS[i].querySelectorAll(".scrolTxt");//тексты-слайды
	let RadioBut = SlidS[i].querySelectorAll(".RadioBut");//группа радиокнопок
	let RadioInput;//если радиокнопки существуют
	if (RadioBut.length>0) {RadioInput = RadioBut[0].querySelectorAll("INPUT");}
	let ArrButS = SlidS[i].querySelectorAll(".ArrButS");//группа кнопок-стрелок
//	alert(`SlidS-${i}:   RadioBut-${RadioBut.length}  RadioInput-${RadioInput.length}`);
	let SlInd = 0; //индекс текущего слайда
	let SlToInd = 0; //новый индекс слайда
	if ((scrolImg.length==scrolTxt.length)&&(scrolTxt.length>1)) {//все работает только если количество слайдов более 1 и кол-во картинок равно кол-ву текстов
		function SwSliMod(slI, slTI) {//модуль прокрутки слайдов
			scrolImg[SlInd].style.cssText='transform: perspective(1000px) rotateY(' + slI + '70deg) translateX(' + slI + '100%) scale(60%);opacity: 0.1;transition-duration: 0.2s;';
			scrolTxt[SlInd].style.cssText='transform: perspective(1000px) rotateY(' + slI + '70deg) translateX(' + slI + '100%) scale(60%);opacity: 0.1;transition-duration: 0.2s;';
			setTimeout(function(){
				scrolImg[SlInd].style.cssText='display: none';
				scrolTxt[SlInd].style.cssText='display: none';
				scrolImg[SlToInd].style.cssText='transform: perspective(1000px) rotateY(' + slTI + '70deg) translateX(' + slTI + '100%) scale(60%);opacity: 0.1;';
				scrolTxt[SlToInd].style.cssText='transform: perspective(1000px) rotateY(' + slTI + '70deg) translateX(' + slTI + '100%) scale(60%);opacity: 0.1;';
			}, 200);
			setTimeout(function(){
				scrolImg[SlToInd].style.cssText='transform: rotateY(0deg) translateX(0) scale(100%);opacity: 1;transition-duration: 0.2s;';
				scrolTxt[SlToInd].style.cssText='transform: rotateY(0deg) translateX(0) scale(100%);opacity: 1;transition-duration: 0.2s;';
				SlInd = SlToInd;
			}, 210);	}
		function SwSlideLeft() {SwSliMod("-", "");}//прокрутка слайдов влево
		function SwSlideRight() {SwSliMod("", "-");}//прокрутка слайдов вправо

		function SwDir(TisInp) {//прямое переключение индекса текущего слайда
			SlToInd=TisInp;			//получает индекс слайда, на который нужно переключить
			if (SlToInd < SlInd){SwSlideLeft();} else {SwSlideRight();}			}
		
		function SwRou(TisInp) {//переключение индекса текущего слайда по кольцу
			//получает индекс кнопки 0 - левая  1 - правая
			if (TisInp==0){SlToInd = SlInd - 1;if (SlToInd<0) {SlToInd = scrolImg.length - 1;}
			} else {SlToInd = SlInd + 1;if (SlToInd==scrolImg.length) {SlToInd = 0;}}
			if ((RadioBut.length>0)&&(RadioInput.length>0)) {//если радиокнопки существуют
				for (let i=0; i < RadioInput.length; i++) {
					if (i==SlToInd) {RadioInput[i].checked = true;} else {RadioInput[i].checked = false;}	}	}
			if (TisInp==0){SwSlideLeft();} else {SwSlideRight();}	}

		if ((RadioBut.length>0)&&(RadioInput.length>0)) { //если радиокнопки существуют
				for (let i=0; i < RadioInput.length; i++) { //сброс и установка нулевой радиокнопки
					if (i==SlInd) {RadioInput[i].checked = true;} else {RadioInput[i].checked = false;}
					//на каждую радиокнопку вешаем переключение индекса текущего слайда
					RadioInput[i].addEventListener("change", function() { SwDir(i);});	}	}
					
		if (ArrButS.length>0) {//для каждой группы кнопок-стрелок
			for (let i=0; i < ArrButS.length; i++) {
				let ArrInput = ArrButS[i].querySelectorAll("INPUT");//получаем объект пара стрелок
				for (let i=0; i < ArrInput.length; i++) {
					for (let i=0; i < ArrInput.length; i++) {//на каждую кнопку-стрелку вешаем переключение индекса текущего слайда по кольцу
						ArrInput[i].addEventListener("click", function() { SwRou(i);});//передаем индекс кнопки 0 - левая  1 - правая
					}	}	}	}
//тачскрин
		let touchStart = null; //Точка начала касания
		let touchPosition = null; //Текущая позиция
		function TouchStart(e) {//Получаем текущую позицию касания
			touchStart = { x: e.changedTouches[0].clientX };
			touchStart = touchStart.x; //запоминаем точку старта
			touchPosition = touchStart;	}
		function TouchMove(e) {	//Получаем новую позицию
			touchPosition = { x: e.changedTouches[0].clientX };
			touchPosition = touchPosition.x;} //запоминаем текущую позицию
		function TouchEnd()	{
			if (touchStart != touchPosition){
			if (touchStart > touchPosition) {SwRou(0);} else {SwRou(1);}}
			touchStart = null; //Точка начала касания
			touchPosition = null;} //Текущая позиция
		for (let i=0; i < scrolImg.length; i++) {
			scrolImg[i].addEventListener("touchstart", function (e) { TouchStart(e); }); //Начало касания
			scrolImg[i].addEventListener("touchmove", function (e) { TouchMove(e); }); //Движение пальцем по экрану
			scrolImg[i].addEventListener("touchend", function (e) { TouchEnd(); });//Пользователь отпустил экран
			scrolImg[i].addEventListener("touchcancel", function (e) { TouchEnd(); });//Отмена касания
		}
//тачскрин
//		SwSlide();//стартовая установка видимости слайдов
		for (let i=0; i < scrolImg.length; i++) {
			if (i!=SlInd) {
				scrolImg[i].style.cssText='display: none';
				scrolTxt[i].style.cssText='display: none';}}
		
	}
}
