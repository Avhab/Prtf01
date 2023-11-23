let hScrol = document.querySelectorAll(".hScrol");
for (let j = 0; j < hScrol.length; j++) {
	let arrLeft = hScrol[j].querySelector(".arrLeft");
	let arrRight = hScrol[j].querySelector(".arrRight");
	let scrolCont = hScrol[j].querySelector(".scrolCont");//контейнер элементов-скролла
	let dots = hScrol[j].querySelector(".dots");//индикаторные точки

	let goodCard = scrolCont.querySelectorAll(".scrolCont>div");//элементы переключения - слайды
	let scrlStep = (Math.trunc(scrolCont.clientWidth/goodCard[0].offsetWidth))*goodCard[0].offsetWidth //шаг скроллинга в пикселах
	let visibleCount = Math.ceil(scrolCont.scrollWidth/scrlStep); //количество элементов скроллинга

	if (dots) {
		let dot = [];//индикаторные точки
		for (let i = 0; i < visibleCount; i++) {
			dot[i] = document.createElement("div");
			dots.append(dot[i]);
			dot[i].classList.add("dot");	}
//		dot = dots.querySelectorAll(".dots .dot");//индикаторные точки
		dot[0].classList.add("selected");
		function dotSwich(dirkt) {
			for (let i = 0; i < dot.length; i++) {
				 if (dot[i].classList.contains("selected")) {
					 dot[i].classList.remove("selected")
					 if (dirkt=="Lf"){
						 if(i>0){--i;}
					 }else{
						 if(i < (dot.length-1)){++i;}
					 }
					 dot[i].classList.add("selected")
					 i = dot.length;
				 }
			}
//			alert(`scrlLeft:${scrlLeft}  scrolCont.scrollWidth:${scrolCont.scrollWidth}`);
		}
	}//индикаторные точки

	if (arrLeft) {
		arrLeft.onclick = function(){ //кнопка переключения влево
			scrolCont.scrollTo({left: (scrolCont.scrollLeft - scrlStep), behavior: 'smooth'});
//			scrolCont.scrollTo({left: ((Math.round(scrolCont.scrollLeft/scrlStep))*scrlStep - scrlStep), behavior: 'smooth'});
			if (dots) {
				 setTimeout(
					function(){dotSwich("Lf");}
					, 500 );
			}
		}
	}
		
	if (arrRight) {
		arrRight.onclick = function(){ //кнопка переключения вправо
			scrolCont.scrollTo({left: (scrolCont.scrollLeft + scrlStep), behavior: 'smooth'});
//			scrolCont.scrollTo({left: ((Math.round(scrolCont.scrollLeft/scrlStep))*scrlStep + scrlStep), behavior: 'smooth'});
			if (dots) {
				 setTimeout(
					function(){dotSwich("Rt");}
					, 500 );

				 }
		}
	}

	if (dots) {//Обработка скролла выполняется, если есть индикаторные точки
		let ScrlFlag=false;
		let ScrlTime;
		let curSld = 0;
		let scrlStep = Math.trunc(scrolCont.scrollWidth / visibleCount); //шаг скроллинга в пикселах
		function AnScroll() {	//Обработка скролла
			if (ScrlFlag) {//выполняется, в состоянии движения скролла по инерции
				clearTimeout(ScrlTime);
				ScrlTime = setTimeout( function() {
					scrolCont.scrollTo({left: ((Math.round(scrolCont.scrollLeft/scrolCont.clientWidth))*(scrolCont.scrollWidth/visibleCount)), behavior: 'smooth'});
					}, 100);
					dotSwich();
			}	}
		scrolCont.addEventListener("scroll", function (e) { AnScroll(); }); //Обработка скролла
		scrolCont.addEventListener("touchstart", function (e) { ScrlFlag = false; }); //Начало касания
		scrolCont.addEventListener("touchend", function (e) { ScrlFlag = true; AnScroll(); });//Пользователь отпустил экран
	}
}
