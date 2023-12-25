let HorScrl = document.querySelectorAll(".HorScrl");
for (let i = 0; i < HorScrl.length; i++) {
	let butnL = HorScrl[i].querySelectorAll(".butnL");butnL=butnL[0];
	let butnR = HorScrl[i].querySelectorAll(".butnR");butnR=butnR[0];
	let ScrlCont = HorScrl[i].querySelectorAll(".ScrlCont");ScrlCont=ScrlCont[0];
	let ScrlElem = HorScrl[i].querySelectorAll(".ScrlElem");
	let scrlInd = HorScrl[i].querySelectorAll(".scrlInd");scrlInd=scrlInd[0];
	let IndPoint;
	let itmQan = ScrlElem.length;
	let itmOn = 0;
	let scrlStep = ScrlCont.scrollWidth/itmQan;

	function SwSl() {
		ScrlCont.scrollTo({left: scrlStep*itmOn, behavior: 'smooth'});}
					
	if (scrlInd) {
		for (let i = 0; i < ScrlElem.length; i++) {
			let IPnt = document.createElement("button");
			scrlInd.append(IPnt);
			IPnt.onclick = function(){itmOn=i;SwSl();};	}
		IndPoint = scrlInd.querySelectorAll("button");	}
		
	if (butnL) {butnL.onclick = function(){
		if(itmOn>0){--itmOn;SwSl();	}	};}
	if (butnR) {butnR.onclick = function(){
		if(itmOn<(itmQan - 1)){	++itmOn;SwSl();	}	};}
	let ScrlTime;
	let ScrlFlag = false;
	
	function AnScroll() {
		if (!ScrlFlag) {
			let tmp=Math.trunc((ScrlCont.scrollLeft/scrlStep)+0.5)		
			clearTimeout(ScrlTime);
			ScrlTime = setTimeout( function() {	itmOn = tmp;SwSl();	}, 100);
			if ((itmOn!=tmp )&&(scrlInd)) {
					IndPoint[tmp].style.background = '#0057B3';
					IndPoint[itmOn].style.background = null;}
			itmOn = tmp;}	}
	ScrlCont.addEventListener("scroll", function (e) { AnScroll(); });
	ScrlCont.addEventListener("touchstart", function (e) { ScrlFlag = true; });
	ScrlCont.addEventListener("touchend", function (e) { ScrlFlag = false; AnScroll(); });
	
	SwSl();
	IndPoint[itmOn].style.background = '#0057B3';
	}
let HorScrol = document.querySelectorAll(".HorScrol");
for (let i = 0; i < HorScrol.length; i++) {
	let modlScrol = HorScrol[i].querySelectorAll(".modlScrol");modlScrol=modlScrol[0];
	let windWidt = modlScrol.clientWidth;
	let framWidt = modlScrol.clientWidth;
	let framScrol = modlScrol.querySelectorAll(".modlScrol>div");
	let butScrol = HorScrol[i].querySelectorAll(".desc06>div");
	let marG = 30;
	let curNm = 0;
	let curShift = 0;
	for (let i = 0; i < butScrol.length; i++) {
		butScrol[i].onclick = function() {ScrlPos(i);};}

	function ScrlMov() {
		for (let i = 0; i < framScrol.length; i++) {
			framWidt = framScrol[i].clientWidth;
			let shiftSt = 0;
			if (windWidt>framWidt) {shiftSt = (windWidt - framWidt)/2;}
			shiftSt = shiftSt - curShift - ((framWidt + marG) * (i - curNm) - 8);
			framScrol[i].style.right = shiftSt + 'px';	}	}
	function ButLit() {
		for (let i = 0; i < framScrol.length; i++) {
			if (i==curNm) {butScrol[i].classList.add("Slctd");}else{butScrol[i].classList.remove("Slctd");}	}	}
	function ScrlPos(Nm) {
		curNm = Nm;
		ScrlMov();
		ButLit();}
	let touchStart = null;
	let touchPosition = null;
	function TouchStart(e) {
		touchStart = { x: e.changedTouches[0].clientX };
		touchStart = touchStart.x;
		touchPosition = touchStart;	
		for (let i = 0; i < framScrol.length; i++) {framScrol[i].style.transitionDuration = '0s';}		}
	function TouchMove(imG, e) {
		touchPosition = { x: e.changedTouches[0].clientX };
		touchPosition = touchPosition.x;
		curShift = (touchStart - touchPosition)*-1;
		ScrlMov(curNm);	}
	function TouchEnd(imG)	{ 
		for (let i = 0; i < framScrol.length; i++) {framScrol[i].style.transitionDuration = null;}
		let tSh = curShift;
		curShift = 0;
		if (Math.abs(tSh)>(imG.clientWidth/3)) {
			if (tSh<0) {if (curNm < (framScrol.length - 1)) {ScrlPos(curNm+1);}else{ScrlMov();}
			} else {if (curNm > 0) {ScrlPos(curNm - 1);}else{ScrlMov();}	}
		} else {ScrlMov();}
		touchStart = null;
		touchPosition = null;
	}	
	modlScrol.addEventListener("touchstart", function (e) { TouchStart(e); });
	modlScrol.addEventListener("touchmove", function (e) { TouchMove(modlScrol, e); });
	modlScrol.addEventListener("touchend", function (e) { TouchEnd(modlScrol); });
	modlScrol.addEventListener("touchcancel", function (e) { TouchEnd(modlScrol); });
	ScrlPos(0);
}


let QueS = document.querySelectorAll(".QueS");
for (let i = 0; i < QueS.length; i++) {
	let Qitem = QueS[i].querySelectorAll(".Qitem");
	for (let i = 0; i < Qitem.length; i++) {
		let Qhead = Qitem[i].querySelectorAll(".Qhead");
		Qhead = Qhead[0];
		let button = Qitem[i].querySelectorAll("button");
		button = button[0];
		let Qtxt = Qitem[i].querySelectorAll(".Qtxt");
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
