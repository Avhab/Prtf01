let HScrol = document.querySelectorAll(".HScrol");
if (HScrol){
for (let i = 0; i < HScrol.length; i++) {
	let ScrlCont = HScrol[i].querySelector(".ScrlCont");
	let LArr = HScrol[i].querySelector(".LArr");
	let RArr = HScrol[i].querySelector(".RArr");
	let ScrlElem = ScrlCont.querySelectorAll(".ScrlCont>div");
	let marg = getComputedStyle(ScrlElem[0]).marginLeft;
	marg = marg.slice(0, (marg.length-2));
	if (LArr && RArr) {
		if ((document.documentElement.clientWidth > 525)
		&& ((ScrlCont.clientWidth-ScrlElem[0].clientWidth*ScrlElem.length-marg*2*(ScrlElem.length))<0))
		 {
		//позиционирование стрелок скроллинга--------
			let shftV = (ScrlCont.clientHeight/2+LArr.clientHeight/2-8)+"px";
			LArr.style.bottom = shftV;
			RArr.style.bottom = shftV;
			let shftH = ScrlCont.clientWidth + 120 - document.documentElement.clientWidth;
//			alert (`Докум=${document.documentElement.clientWidth} Скрол=${ScrlCont.clientWidth} shftH=${shftH}`);		
			if (shftH>0) {
				ScrlCont.style.marginLeft = "auto";
				ScrlCont.style.marginRight = "auto";
				ScrlCont.style.width = (ScrlCont.clientWidth - shftH)+"px";
				shftH = 55-(shftH/2); //55 - ширина стрелки + пробел
				if (shftH>0) {shftH="-"+shftH+"px";}else{shftH=0;}
			} else { shftH="-55px";}
			LArr.style.left = shftH;
			RArr.style.right = shftH;
		//----------позиционирование стрелок скроллинга
		// стрелки скроллинга вправо и влево ------------
			setTimeout( function() {
				let scrolStep = ScrlCont.scrollWidth / ScrlElem.length;//шаг скроллинга
				if (LArr) {LArr.onclick = function(){
					let tmp = ScrlCont.scrollLeft / scrolStep;
					let hl = Math.floor(tmp);
					if ((tmp-hl)<0.05) {tmp=hl-1;}else{tmp=hl;}
					tmp = tmp * scrolStep;
					ScrlCont.scrollTo({left: (tmp), behavior: 'smooth'});}	}//стрелка скроллинга влево
				if (RArr) {RArr.onclick = function(){
					let tmp = ScrlCont.scrollLeft / scrolStep;
					let hl = Math.floor(tmp);
					if ((tmp-hl)>0.95) {tmp=hl+2;}else{tmp=hl+1;}
					tmp = tmp * scrolStep;
					ScrlCont.scrollTo({left: (tmp), behavior: 'smooth'});}	}//стрелка скроллинга вправо
			}, 600);
		//------------- стрелки скроллинга вправо и влево
		} else {
			LArr.style.display = "none";
			RArr.style.display = "none";
		}	}
//копирование картинки со слайда скролла в окно видео ------------
	let videoScr = HScrol[i].querySelector(".videoScr");
	for (let i = 0; i < ScrlElem.length; i++) {
		ScrlElem[i].onclick = function(){
			let scrlImg = this.querySelector("img");
			let vidImg = videoScr.querySelector(".videoScr img");
			scrlImg = scrlImg.cloneNode(true);
			scrlImg.style.width = "100%";
			vidImg.style.opacity = "0";
			scrlImg.style.opacity = "0";
			videoScr.style.height = videoScr.clientHeight + "px";
			setTimeout( function() {
				vidImg.remove();
				videoScr.prepend(scrlImg);
				setTimeout( function() {scrlImg.style.opacity = "1";}, 25);	}, 300);}	}
	//----------копирование картинки со слайда скролла в окно видео
		}	}

//отражение заголовков Tit2 ------------
let Tit2 = document.querySelectorAll(".Tit2");
if (Tit2){
for (let i = 0; i < Tit2.length; i++) {
	let Prnt = Tit2[i].parentNode;
	let Sibl = Tit2[i].nextElementSibling;
	if (Sibl) {Sibl.style.position = 'relative';Sibl.style.zIndex = '2';}
	Prnt.style.position = 'relative';
	Tit2[i].style.position = 'relative';
	let reflect = document.createElement("div");
	reflect.textContent=Tit2[i].textContent;
	Prnt.prepend(reflect);
	reflect.className = 'reflect';
	reflect.style.position = 'absolute';
	Tit2[i].style.zIndex = '3';
	reflect.style.zIndex = '1';
	let titCoords = Tit2[i].getBoundingClientRect();
	let prntCoords = Prnt.getBoundingClientRect();
	reflect.style.left = (titCoords.left-prntCoords.left+30) + "px";
	reflect.style.top=(titCoords.top-prntCoords.top-20) + "px";	}	}
//--------------отражение заголовков Tit2

//раскрывающиеся списки FAQ ------------
let FAQ = document.querySelectorAll(".FAQ");
for (let i = 0; i < FAQ.length; i++) {
	let qAns = FAQ[i].querySelectorAll(".qAns");
	for (let i = 0; i < qAns.length; i++) {
		let Que = qAns[i].querySelector(".Que");
		let Ans = qAns[i].querySelector(".Ans");
		let wrapArr = document.createElement("div");
		wrapArr.className = 'wrapArr';
		qAns[i].append(wrapArr);

		let heigOn;
		let heigOff;
		Ans.style.transform = 'scaleY(0)';
		Ans.style.opacity = '0';	
		Ans.style.display = "none";

		qAns[i].onclick = function() {
			wrapArr.classList.toggle("ArrUp");
			if (wrapArr.classList.contains("ArrUp")) {
				if (!heigOn) {
					heigOff = qAns[i].clientHeight;
					Ans.style.display = null;
					heigOn = qAns[i].clientHeight;
					qAns[i].style.height = heigOff+"px";	}
				setTimeout(function(){
					qAns[i].style.height = heigOn+"px";
					setTimeout(function(){
						Ans.style.display = null;
						setTimeout(function(){
							Que.style.color = '#EA8F41';
							Ans.style.opacity = '1';
							Ans.style.transform = 'scaleY(1)';
						}, 50);
					}, 50);
				}, 50);				
			} else {
				Que.style.color = null;
				Ans.style.opacity = '0';
				Ans.style.transform = 'scaleY(0)';
				qAns[i].style.height = heigOff+"px";}		}		}	}
//---------------раскрывающиеся списки FAQ
/*
let FAQ = document.querySelectorAll(".FAQ");
for (let i = 0; i < FAQ.length; i++) {
	let qAns = FAQ[i].querySelectorAll(".qAns");
	for (let i = 0; i < qAns.length; i++) {
		let Que = qAns[i].querySelector(".Que");
		let Ans = qAns[i].querySelector(".Ans");
		let wrapArr = document.createElement("div");
		wrapArr.className = 'wrapArr';
		qAns[i].append(wrapArr);

		Ans.style.transform = 'scaleY(0)';
		Ans.style.opacity = '0';	
		Ans.style.display = "none";

		qAns[i].onclick = function() {
			wrapArr.classList.toggle("ArrUp");
			if (wrapArr.classList.contains("ArrUp")) {
				Ans.style.display = null;
				setTimeout(function(){
					Que.style.color = '#EA8F41';
					Ans.style.opacity = '1';
					Ans.style.transform = 'scaleY(1)';
				}, 50);
			} else {
				Que.style.color = null;
				Ans.style.opacity = '0';
				Ans.style.transform = 'scaleY(0)';
				setTimeout(function(){
					Ans.style.display = "none";
				}, 300);			}	}		}	}
				*/
