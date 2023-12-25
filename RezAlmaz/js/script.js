let burgerBut = document.getElementById("burger");
let burgerMenu = document.querySelector("header .burgerMenu");
let wideMenu = document.querySelectorAll("header .wideMenu>div");
for (let i = 1; i < wideMenu.length; i++) {	burgerMenu.append(wideMenu[i].cloneNode(true));	}

burgerBut.onclick = function() {
	function burgMenClos() {
		burgerMenu.style.transform = 'scale(0)';
		setTimeout(function(){burgerMenu.style.display = null;}, 300);		}
	burgerMenu.style.display = 'flex';
	setTimeout(function(){burgerMenu.style.transform = 'scale(1)';}, 10);
	burgerMenu.addEventListener("click", function (e) {	burgMenClos();});
	setTimeout(function(){burgerMenu.onmouseleave = function() { burgMenClos();}}, 200);
	}

let dropSel = document.querySelectorAll(".dropSel");
for (let i = 0; i < dropSel.length; i++) {
	let options = dropSel[i].querySelector(".options");
	options.style.display = 'none';
	options.style.transform = 'scaleY(0)';
	let flag = false;
	function dropSelClos() {
		setTimeout(function(){options.style.transform = 'scaleY(0)';}, 20);
		setTimeout(function(){options.style.display = 'none';flag = false;}, 300);}
		
	document.addEventListener("click", function (e) {	dropSelClos();	});
	dropSel[i].onclick = function() {
		event.stopPropagation();
		if (flag){	dropSelClos();
		}else{
			flag = true;
			options.style.display = null;
			setTimeout(function(){
				let c = dropSel[i].getBoundingClientRect();
				if (c.left + options.clientWidth < document.documentElement.clientWidth) {
					options.style.left = '-15px';
				}else{	
					options.style.right = '-25px';
					options.style.whiteSpace = 'normal';
					options.style.textAlign = 'right';
					options.style.width = document.documentElement.clientWidth + 'px';}
				options.style.transform = 'scaleY(1)';
				options.onmouseleave = function() {dropSelClos();}
				}, 20);	}	}	}

let hScrol = document.querySelectorAll(".hScrol");
for (let j = 0; j < hScrol.length; j++) {
	let scrolCont = hScrol[j].querySelector(".scrolCont");
	if (scrolCont.scrollWidth > scrolCont.clientWidth) {
		let goodCard = scrolCont.querySelectorAll(".scrolCont>div");
		let arrLeft = hScrol[j].querySelector(".arrLeft");
		let arrRight = hScrol[j].querySelector(".arrRight");
		let dots = hScrol[j].querySelector(".dots");
		let dotArr = hScrol[j].querySelector(".dotArr");
		let slidWhid = scrolCont.scrollWidth/goodCard.length;
		let scrlStep = Math.trunc(scrolCont.clientWidth/slidWhid);
		if (scrlStep > 0) {	scrlStep = 4 + (scrlStep*slidWhid);
		}else{	scrlStep = 4 + slidWhid; }
		let oldScroll = 0;
		let autoCentr=false;
		let curNum = hScrol[j].querySelector(".curNum");
		let allNum = hScrol[j].querySelector(".allNum");
		if (allNum) {allNum.innerHTML = goodCard.length.toString().padStart(2, '0');	}

		scrolCont.scrollLeft=0;
		if (dotArr) {dotArr.style.visibility = 'visible'};
		if (curNum) {curNum.style.visibility = 'visible'};
		if (allNum) {allNum.style.visibility = 'visible'};
		if (arrLeft) {arrLeft.style.visibility = 'visible'};
		if (arrRight) {arrRight.style.visibility = 'visible'};
		if (arrLeft) {arrLeft.classList.add("arrStop");}
		
		let dot = [];
		if (dots) {
			let quanDots=Math.round(scrolCont.scrollWidth/scrolCont.clientWidth);
			if (quanDots>7){quanDots=7;}else{
				if (quanDots<2){quanDots=2;}else{
					if ((quanDots*27 + 30)>scrolCont.clientWidth) {quanDots = Math.trunc((scrolCont.clientWidth - 30) / 27);}	}	}
			for (let i = 0; i < quanDots; i++) {
				dot[i] = document.createElement("div");
				dots.append(dot[i]);
				dot[i].classList.add("dot");
				if (i==0) {dot[i].classList.add("selected");}	}	}

		let ScrlFlag=true;
		let ScrlTime;

		scrolCont.addEventListener("scroll", function (e) {
			if (ScrlFlag) {
			ScrlFlag=false;
			clearTimeout(ScrlTime);
			ScrlTime = setTimeout( function() {
				
				if (curNum) {
					let tmp = Math.ceil(scrolCont.scrollLeft/slidWhid);
					if (tmp<goodCard.length){if (tmp<0){tmp=0;}}else{tmp = goodCard.length - 1; }
					curNum.innerHTML = (tmp + 1).toString().padStart(2, '0');			};
				
				if (dots) {
					for (let i = 0; i < dot.length; i++) {dot[i].classList.remove("selected");}
					let indx = Math.round(scrolCont.scrollLeft/(scrolCont.scrollWidth/dot.length))
					if (indx < dot.length) {if (indx < 0) {indx = 0;}}else{indx = (dot.length - 1);}
					if (oldScroll<scrolCont.scrollLeft){
						if (Math.abs(scrolCont.scrollWidth - (scrolCont.scrollLeft + scrolCont.offsetWidth)) > 20) {
							if (indx == (dot.length - 1)) {indx = (dot.length - 2);}
						}else{	indx = dot.length - 1;	}
					}else{	if (indx == 0) {if (scrolCont.scrollLeft>0) {indx = 1;}	}	}
					
					dot[indx].classList.add("selected");
				}
				
				if (arrLeft && arrRight) {
					if (scrolCont.scrollLeft==0) {
						arrLeft.classList.add("arrStop");
						arrRight.classList.remove("arrStop");
					}else{
						arrLeft.classList.remove("arrStop");
						if ((scrolCont.scrollWidth-scrolCont.scrollLeft-scrolCont.clientWidth)<50) {
							arrRight.classList.add("arrStop");}else{arrRight.classList.remove("arrStop");}	}	}
				
				if ((autoCentr)&&(Math.abs(scrolCont.scrollLeft - oldScroll)<20)){
					autoCentr = false;
					slidWhid = scrolCont.scrollWidth/goodCard.length;
					acTime = setTimeout( function() {
						let indx = 0;
						if ((scrolCont.scrollWidth - scrolCont.scrollLeft - scrolCont.clientWidth)<(slidWhid/2)) {	indx = scrolCont.scrollWidth;
						}else{	indx = (slidWhid * (Math.trunc((scrolCont.scrollLeft + scrolCont.offsetWidth/2)/slidWhid) + 0.5)) - (scrolCont.offsetWidth/2)	}
						scrolCont.scrollTo({left: indx, behavior: 'smooth'});
					}, 100);
				}
				
				oldScroll = scrolCont.scrollLeft;
				ScrlFlag=true;
				}, 50);
			}
		});

		scrolCont.addEventListener("touchstart", function (e) { autoCentr = false; });
		scrolCont.addEventListener("touchend", function (e) { autoCentr = true; });

		if (dotArr) {
			dotArr.onclick = function(){
				scrolCont.scrollTo({left: (scrolCont.scrollLeft + scrlStep), behavior: 'smooth'});	}	}
			
		if (arrLeft) {
			arrLeft.onclick = function(){
				scrolCont.scrollTo({left: (scrolCont.scrollLeft - scrlStep), behavior: 'smooth'});	}	}
			
		if (arrRight) {
			arrRight.onclick = function(){
				scrolCont.scrollTo({left: (scrolCont.scrollLeft + scrlStep), behavior: 'smooth'});	}	}
		}
}

let clrSel = document.querySelectorAll(".clrSel");
for (let i = 0; i < clrSel.length; i++) {
	let options = clrSel[i].querySelectorAll(".options>div");
	for (let i = 0; i < options.length; i++) {
		options[i].onclick = function(){
		for (let i = 0; i < options.length; i++) {options[i].classList.remove("selected");}
		options[i].classList.add("selected");
		}
	}
}

window.addEventListener("load", function() {
	let FAQ = document.querySelectorAll(".FAQ");
	for (let i = 0; i < FAQ.length; i++) {
		let qAns = FAQ[i].querySelectorAll(".qAns");
		for (let i = 0; i < qAns.length; i++) {
			let Que = qAns[i].querySelector(".Que");
			let Ans = qAns[i].querySelector(".Ans");
			let wrapArr = document.createElement("div");
			wrapArr.className = 'wrapArr';
			Que.append(wrapArr);
			let heigOn = Ans.clientHeight;
			Ans.style.height = "0";
			Ans.style.opacity = '0';
			Ans.style.paddingTop = "0";
			Ans.style.paddingBottom = "0";
			
			qAns[i].onclick = function() {
				wrapArr.classList.toggle("ArrUp");
				if (wrapArr.classList.contains("ArrUp")) {
						Ans.style.paddingTop = null;
						Ans.style.paddingBottom = null;
						Ans.style.height = heigOn + 'px';
					Ans.style.opacity = '1';
				} else {
					Ans.style.height = "0";
					Ans.style.paddingTop = "0";
					Ans.style.paddingBottom = "0";
					Ans.style.opacity = '0';
						}	}	}	}
});

