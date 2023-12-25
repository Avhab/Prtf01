let style = document.createElement('style');
let carQnt = 2;
style.innerHTML = `a.cart.cartOn::after {content:'${carQnt}';}`;
document.head.appendChild(style);

let blur = document.querySelector(".blur");
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burgerMenu");
let burgMOpn=true;
function burgMenClos() {
	if (burgMOpn==true) {
		burgMOpn=false;
		burgerMenu.style.transform = 'scaleY(0)';
		blur.style.opacity = '0';
		setTimeout(function(){
			burgerMenu.classList.add("dispNon");
			blur.classList.add("dispNon");
			}, 300);
		}
	}
burgMenClos();
burgerMenu.onmouseleave = function() { burgMenClos();}
burgerMenu.addEventListener("click", function (e) {	burgMenClos();});

burger.onclick = function() {
	burgerMenu.classList.remove("dispNon");
	blur.classList.remove("dispNon");
	setTimeout(function(){
		burgerMenu.style.transform = 'scaleY(1)';
		blur.style.opacity = '1';
	}, 30);
	setTimeout(function(){burgMOpn=true;}, 400);
}

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

let hScrol = document.querySelectorAll(".hScrol");
for (let j = 0; j < hScrol.length; j++) {
	let scrolCont = hScrol[j].querySelector(".scrolCont");
	if (scrolCont.scrollWidth > scrolCont.clientWidth) {
		let goodCard = scrolCont.querySelectorAll(".scrolCont>*");
		let arrLeft = hScrol[j].querySelector(".arrLeft");
		let arrRight = hScrol[j].querySelector(".arrRight");
		let dots = hScrol[j].querySelector(".dots");
		let dotArr = hScrol[j].querySelector(".dotArr");
		let slidWhid = scrolCont.scrollWidth/goodCard.length;
		let scrlStep = scrolCont.clientWidth/slidWhid;
		if	((scrlStep - (Math.trunc(scrlStep)))>0.98) {	scrlStep = Math.round(scrlStep)*slidWhid;
			}else{	scrlStep = Math.trunc(scrlStep)*slidWhid;	}
		let oldScroll = 0;
		let autoCentr=false;
		let curNum = hScrol[j].querySelector(".curNum");
		let allNum = hScrol[j].querySelector(".allNum");
		if (allNum) {allNum.innerHTML = goodCard.length.toString().padStart(2, '0');	}

		scrolCont.scrollLeft=0;
		if (dotArr) {dotArr.style.visibility = 'visible'};
		if (curNum) {curNum.style.visibility = 'visible'};
		if (allNum) {allNum.style.visibility = 'visible'};
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

				autoFit();
				
				oldScroll = scrolCont.scrollLeft;
				ScrlFlag=true;
				}, 50);
			}
		});

		function autoFit() {
			if (scrolCont.classList.contains("noAutoFit")==false) {
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
			}
		}
	
		scrolCont.addEventListener("touchstart", function (e) { autoCentr = false; });
		scrolCont.addEventListener("touchend", function (e) { autoCentr = true; });

		if (dotArr) {
			dotArr.onclick = function(){
				scrolCont.scrollTo({left: (scrolCont.scrollLeft + scrlStep), behavior: 'smooth'});	
				setTimeout( function() {autoCentr = true;autoFit();}, 200);				}	}
			
		if (arrLeft) {
			arrLeft.onclick = function(){
				scrolCont.scrollTo({left: (scrolCont.scrollLeft - scrlStep), behavior: 'smooth'});	
				setTimeout( function() {autoCentr = true;autoFit();	}, 200);			}	}
			
		if (arrRight) {
			arrRight.onclick = function(){
				scrolCont.scrollTo({left: (scrolCont.scrollLeft + scrlStep), behavior: 'smooth'});
				setTimeout( function() {autoCentr = true;autoFit();}, 200);				}	}
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
