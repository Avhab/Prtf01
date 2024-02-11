/* <<<---бургер-меню в заголовке  */
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burgerMenu");
let wideMenu = document.querySelector(".wideMenu");
let options = wideMenu.querySelector(".options");
let telph = wideMenu.querySelector(".telph");
burgerMenu.append(options.cloneNode(true));
burgerMenu.append(telph.cloneNode(true));

burgerMenu.style.transitionDuration = '0.3s';
burgerMenu.style.transformOrigin = 'center top';
burgerMenu.style.transform = 'scaleY(0)';
burgerMenu.style.opacity = '0';

function burgMenClos(){
	setTimeout(function(){	burgerMenu.style.display = null;	}, 300);
	burgerMenu.style.transform = 'scaleY(0)';
	burgerMenu.style.opacity = '0';
	document.removeEventListener("click", burgMenClos);
	burgerMenu.removeEventListener("mouseleave", burgMenClos);	}
burger.onclick = function(){
	burgerMenu.style.display = 'block';
	setTimeout(function(){
		burgerMenu.style.transform = null;
		burgerMenu.style.opacity = null;
		document.addEventListener("click", burgMenClos);
		burgerMenu.addEventListener("mouseleave", burgMenClos);	}, 30);	}
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


//блокировка формы по чекбоксу соглашения =======================
let forms = document.querySelectorAll("form");
for (let i = 0; i < forms.length; i++) {
	let inSubm = forms[i].querySelector("input[type='submit']");
	let agrChk = forms[i].querySelector(".agrChk");
	if (agrChk) {
		forms[i].addEventListener('submit', function(evt) {
			evt.preventDefault();
			if(!agrChk.checked) {return;	}
			this.submit();	});	}	}
//=======================

let phoneInput = document.querySelectorAll('input[type="tel"]');
for (let j = 0; j < phoneInput.length; j++) {
	function appMask(event) {
		let tmpStr = phoneInput[j].value;
		if (tmpStr.length>0) {
			let i = 0;
			function digCorr() {if (!tmpStr[i].match('[0-9]')){tmpStr = tmpStr.slice(0, (i)) + tmpStr.slice(i+1);}	}
			function symReplc(symb) {if (tmpStr.slice(i, (i+1))!=symb){tmpStr = tmpStr.slice(0, (i)) + symb + tmpStr.slice(i);}	}
			do { switch(i) {
					case 0: symReplc('+'); break;
					case 1: symReplc('7'); break;
					case 2: symReplc(' '); break;
					case 3:	case 4:	case 5: digCorr(); break;
					case 6: symReplc('-'); break;
					case 7:	case 8:	case 9: digCorr(); break;
					case 10: symReplc('-'); break;
					case 11: case 12: case 13: case 14: digCorr(); break;
					case 15: tmpStr = tmpStr.slice(0, 15); break;}
				i = i + 1;}
			while (i<tmpStr.length);
			phoneInput[j].value = tmpStr;	}	}

	phoneInput[j].addEventListener("input", appMask, false);
	phoneInput[j].addEventListener("focus", appMask, false);
	phoneInput[j].addEventListener("blur", appMask, false);
	phoneInput[j].addEventListener("keydown", appMask, false)
}


let hScrol = document.querySelectorAll(".hScrol");//элемент с скролл-контейнером
for (let i = 0; i < hScrol.length; i++) {
	let scrolCont = hScrol[i].querySelector(".scrolCont");//контейнер элементов-скролла
	if (scrolCont.scrollWidth > scrolCont.clientWidth) {
		let slide = scrolCont.querySelectorAll(".scrolCont>*");//элементы переключения - слайды
		let arrLeft = hScrol[i].querySelector(".arrLeft");
		let arrRight = hScrol[i].querySelector(".arrRight");
		let dots = hScrol[i].querySelector(".dots");//индикаторные точки
		let dotArr = hScrol[i].querySelector(".dotArr");//одиночная стрелка
		let slidWidth = scrolCont.scrollWidth/slide.length; // ширина слайда - простое вычисление
		let scrlStep = scrolCont.clientWidth/slidWidth;
		if	((scrlStep - (Math.trunc(scrlStep)))>0.9) {scrlStep = Math.round(scrlStep);
			}else{	scrlStep = Math.trunc(scrlStep);}
		if (scrlStep<1) {scrlStep = 1;}
		scrlStep = scrlStep*slidWidth;	//шаг скроллинга в пикселах
		let oldScroll = 0;//величина предустановленного скролла
		let autoCentr=false; //флаг, разрешающий доводку скролла при отпускании тача
		let curNum = hScrol[i].querySelector(".curNum");//текущий слайд
		let allNum = hScrol[i].querySelector(".allNum");//число слайдов
		if (allNum) {allNum.innerHTML = slide.length.toString().padStart(2, '0');	}
		let acTime;
		let tStr = window.getComputedStyle(slide[0]).marginLeft;
		if(tStr.indexOf("px")== -1) {scrolCont.scrollLeft=0; //предустановка скролла
			}else{scrolCont.scrollLeft=tStr.slice(0, tStr.indexOf("px"));} //предустановка скролла


		if (dotArr) {dotArr.style.visibility = 'visible'};
		if (curNum) {curNum.style.visibility = 'visible'};
		if (allNum) {allNum.style.visibility = 'visible'};
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
					let tmp = Math.ceil(scrolCont.scrollLeft/slidWidth);
					if (tmp<slide.length){if (tmp<0){tmp=0;}}else{tmp = slide.length - 1; }
					curNum.innerHTML = (tmp + 1).toString().padStart(2, '0');			};
				// --->> переключение текущего номера слайда
				
				if (arrLeft && arrRight) {
					if (scrolCont.scrollLeft==0) {
						arrLeft.classList.remove("act");
						arrRight.classList.add("act");
					}else{
						arrLeft.classList.add("act");
						if ((scrolCont.scrollWidth-scrolCont.scrollLeft-scrolCont.clientWidth)<50) {
							arrRight.classList.remove("act");}else{arrRight.classList.add("act");}	}	}
				
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
				}
				//---->> переключение индикаторных точек

				autoFit();	// автодоводка слайда в центр
				
				oldScroll = scrolCont.scrollLeft;	//по окончании обновляем текущее значение скролла
				ScrlFlag=true;	//по окончании разрешаем выполнение
				}, 100);
			}
		});
	//---> Функции, выполняемые во время скролла
	
		// автодоводка слайда в центр --->>
		function autoFit() {
			if (scrolCont.classList.contains("noAutoFit")==false) {
				if ((autoCentr==true)&&(Math.abs(scrolCont.scrollLeft - oldScroll)<10)){
				if (Math.abs(scrolCont.scrollLeft - oldScroll)<10){
					let tmp1 = scrolCont.scrollLeft;
					let tmp2 = oldScroll;
					autoCentr = false;
						let indx = 0; //размер вычисляемого скролла scrollLeft
						if ((scrolCont.scrollWidth - scrolCont.scrollLeft - scrolCont.clientWidth)<(slidWidth/2)) {
						//если до конца осталось менее половины слайда, прокручиваем до конца
							indx = scrolCont.scrollWidth;
						}else{
							if(Math.abs(scrlStep - scrolCont.clientWidth)<5){
		//если шаг скролла и ширина окна различаются не более чем на 5px доводка "слайд по левому краю окна"
								indx = (Math.round(scrolCont.scrollLeft/slidWidth))*slidWidth;
							}else{
								//в противном случае "слайд по центру окна"
								indx = (slidWidth * (Math.trunc((scrolCont.scrollLeft + scrolCont.offsetWidth/2)/slidWidth) + 0.5)) - (scrolCont.offsetWidth/2);
							}
						}	
						scrolCont.scrollTo({left: indx, behavior: 'smooth'});
				}
			}
		}
	}
		// --->> автодоводка слайда в центр
	
		scrolCont.addEventListener("touchstart", function (e) { /*clearTimeout(acTime);*/ autoCentr = false; }); //Начало касания
		scrolCont.addEventListener("touchend", function (e) { autoCentr = true; });//Пользователь отпустил экран
		
		if (arrRight) {
			arrRight.onclick = function(){ //кнопка переключения вправо
				let scLft = (Math.round((scrolCont.scrollLeft + scrlStep)/slidWidth))*slidWidth;
				scrolCont.scrollTo({left: scLft, behavior: 'smooth'});
				autoCentr = false;
					}
			}
		if (arrLeft) {
			arrLeft.onclick = function(){ //кнопка переключения влево
				let scLft = (Math.round((scrolCont.scrollLeft - scrlStep)/slidWidth))*slidWidth;
				scrolCont.scrollTo({left: scLft, behavior: 'smooth'});
				autoCentr = false;
					}
			}
		}
	}

