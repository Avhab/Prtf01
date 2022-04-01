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
		let rotDegMax = 55; //предельный угол поворота в градусах
		let transXMax = 80; //предельное смешщение в процентах от ширины картинки
		let transScalMax = 80;  //предельное уменьшение в процентах
		let opacPerMax = 0.3;  //предельная прозрачность
		function SwSliMod(slI, slTI) {//модуль прокрутки слайдов
			let transStr = 'transform: perspective(1000px) rotateY(' + slI + rotDegMax + 'deg) translateX(' + slI + transXMax + '%) scale(' + transScalMax + '%);opacity: ' + opacPerMax + ';transition-duration: 0.2s;';
			scrolImg[SlInd].style.cssText=transStr;
			scrolTxt[SlInd].style.cssText=transStr;
			setTimeout(function(){
				let transStr = 'transform: perspective(1000px) rotateY(' + slTI + rotDegMax + 'deg) translateX(' + slTI + transXMax + '%) scale(' + transScalMax + '%);opacity: ' + opacPerMax + ';';
				scrolImg[SlInd].style.cssText='display: none';
				scrolTxt[SlInd].style.cssText='display: none';
				scrolImg[SlToInd].style.cssText=transStr;
				scrolTxt[SlToInd].style.cssText=transStr;
			}, 200);
			setTimeout(function(){
				scrolImg[SlToInd].style.cssText='transform: rotateY(0deg) translateX(0) scale(100%);opacity: 1;transition-duration: 0.2s;';
				scrolTxt[SlToInd].style.cssText='transform: rotateY(0deg) translateX(0) scale(100%);opacity: 1;transition-duration: 0.2s;';
				SlInd = SlToInd;
			}, 225);	}
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
		function TouchMove(imG, e) {	//Получаем новую позицию
			touchPosition = { x: e.changedTouches[0].clientX };
			touchPosition = touchPosition.x; //запоминаем текущую позицию
			//отсюда до конца функции - смещение слайда с удержанием тачем - можно убрать
			let shfT = (touchStart - touchPosition)*-1; //текущее перемещение
			let fulShft = imG.clientWidth/2; //максимальное перемещение
			let percMov = shfT / fulShft; //доля от максимального перемещения
/*			if (Math.abs(percMov) > 1) {if (percMov < 0) {percMov = -1;} else {percMov = 1;};}*/
			if (percMov < 0) {
				if (Math.abs(percMov) > 1) {percMov = -1;} else {
					percMov = Math.sin((90*3.14/180)*Math.abs(percMov))*-1;	}
			} else {
				if (percMov > 1) {percMov = 1;} else {
					percMov = Math.sin((90*3.14/180)*percMov);	}	}
			
			let rotDeg = rotDegMax * percMov;
			let transX = transXMax * percMov;
			let opacPer = 1-((1-opacPerMax)*Math.abs(percMov));
			let transScal = 100-((100-transScalMax)*Math.abs(percMov));
			let trStr = 'transform: perspective(1000px) rotateY(' + rotDeg + 'deg) translateX(' + transX + '%) scale(' + transScal + '%);opacity: ' + opacPer + ';transition-duration: 0.2s;';
			scrolImg[SlInd].style.cssText=trStr;
			scrolTxt[SlInd].style.cssText=trStr;
			}
		function TouchEnd(imG)	{
			if (Math.abs(touchStart - touchPosition)>(imG.clientWidth/3)) { //порог смещения, выше которого происходит смена слайда
				if (touchStart > touchPosition) {SwRou(0);} else {SwRou(1);}
				} else { // либо возврат слайда на свое место
					scrolImg[SlToInd].style.cssText='transform: rotateY(0deg) translateX(0) scale(100%);opacity: 1;transition-duration: 0.4s;';
					scrolTxt[SlToInd].style.cssText='transform: rotateY(0deg) translateX(0) scale(100%);opacity: 1;transition-duration: 0.4s;';
				}
			touchStart = null; //Точка начала касания
			touchPosition = null;} //Текущая позиция
		for (let i=0; i < scrolImg.length; i++) {
			scrolImg[i].addEventListener("touchstart", function (e) { TouchStart(e); }); //Начало касания
			scrolImg[i].addEventListener("touchmove", function (e) { TouchMove(scrolImg[i], e); }); //Движение пальцем по экрану
			scrolImg[i].addEventListener("touchend", function (e) { TouchEnd(scrolImg[i]); });//Пользователь отпустил экран
			scrolImg[i].addEventListener("touchcancel", function (e) { TouchEnd(scrolImg[i]); });//Отмена касания
		}
//тачскрин
//		SwSlide();//стартовая установка видимости слайдов
		for (let i=0; i < scrolImg.length; i++) {
			if (i!=SlInd) {
				scrolImg[i].style.cssText='display: none';
				scrolTxt[i].style.cssText='display: none';}}
		
	}
}
