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
	let ArrBut = SlidS[i].querySelectorAll(".ArrBut");//группа кнопок-стрелок
	let ArrInput; //если кнопки-стрелки существуют
	if (ArrBut.length>0) {ArrInput = ArrBut[0].querySelectorAll("INPUT");}//кнопки-стрелки
//	alert(`SlidS-${i}:   RadioBut-${RadioBut.length}  RadioInput-${RadioInput.length}`);
	let SlInd = 0; //индекс текущего слайда
	let SlToInd = 0; //новый индекс слайда
	if ((scrolImg.length==scrolTxt.length)&&(scrolTxt.length>1)) {//все работает только если количество слайдов более 1 и кол-во картинок равно кол-ву текстов
		function SwSliMod(slI, slTI) {//модуль прокрутки слайдов
			scrolImg[SlInd].style.cssText='transform: translateX(' + slI + '80px) scale(70%);opacity: 0.1;transition-duration: 0.1s;';
			scrolTxt[SlInd].style.cssText='transform: translateX(' + slI + '80px) scale(70%);opacity: 0.1;transition-duration: 0.1s;';
			setTimeout(function(){
				scrolImg[SlInd].style.cssText='display: none';
				scrolTxt[SlInd].style.cssText='display: none';
				scrolImg[SlToInd].style.cssText='transform: translateX(' + slTI + '80px) scale(70%);opacity: 0.1;';
				scrolTxt[SlToInd].style.cssText='transform: translateX(' + slTI + '80px) scale(70%);opacity: 0.1;';
			}, 100);
			setTimeout(function(){
				scrolImg[SlToInd].style.cssText='transform: translateX(0) scale(100%);opacity: 1;transition-duration: 0.1s;';
				scrolTxt[SlToInd].style.cssText='transform: translateX(0) scale(100%);opacity: 1;transition-duration: 0.1s;';
				SlInd = SlToInd;
			}, 110);	}
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
		if ((ArrBut.length>0)&&(ArrInput.length>0)) { //если кнопки-стрелки существуют
				for (let i=0; i < ArrInput.length; i++) {//на каждую кнопку-стрелку вешаем переключение индекса текущего слайда по кольцу
					ArrInput[i].addEventListener("click", function() { SwRou(i);});	}	}
//		SwSlide();//стартовая установка видимости слайдов
		for (let i=0; i < scrolImg.length; i++) {
			if (i!=SlInd) {
				scrolImg[i].style.cssText='display: none';
				scrolTxt[i].style.cssText='display: none';}}
		
	}
}
