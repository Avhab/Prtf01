let blur = document.querySelector(".blur");
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burgerMenu");
burgerMenu.style.transformOrigin = '0 0';
burgerMenu.style.transform = 'scaleY(0)';
burgerMenu.style.opacity = '0';
blur.style.opacity = '0';

let stopBlurOff = false;
function blurOff(){
	if (stopBlurOff == false) {
		setTimeout(function(){	blur.style.display = null;	}, 300);
		blur.style.opacity = '0';
	} else {stopBlurOff = false;}
}
		
function closBurgerMenu(){
	setTimeout(function(){
		burgerMenu.style.display = null;
	}, 300);
	burgerMenu.style.transform = 'scaleY(0)';
	burgerMenu.style.opacity = '0';
	blurOff();
	document.removeEventListener("click", closBurgerMenu);
}
		
burger.onclick = function(){
	blur.style.display = 'block';
	burgerMenu.style.display = 'block';
	setTimeout(function(){
		burgerMenu.style.transform = null;
		burgerMenu.style.opacity = null;
		blur.style.opacity = null;
		document.addEventListener("click", closBurgerMenu);
	}, 30);
}

let logInMenu = document.querySelector(".logInMenu");
let logInForm = logInMenu.querySelector("#logInForm");
let closCros = logInMenu.querySelector(".closCros");
logInMenu.style.transformOrigin = '0 0';
logInMenu.style.transform = 'scaleY(0)';
logInMenu.style.opacity = '0';
logInMenu.opacity = '0';

function closLogInMenu(){
	setTimeout(function(){	logInMenu.style.display = null;	}, 300);
	logInMenu.style.transform = 'scaleY(0)';
	logInMenu.style.opacity = '0';
	blurOff();
	logInForm.removeEventListener("onsubmit", closLogInMenu);	}

function logInMenuOn() {
	if (blur.style.display == 'block') {
		stopBlurOff = true;
		setTimeout(function(){stopBlurOff = false;}, 1000);
		}
	blur.style.display = 'block';
	logInMenu.style.display = 'block';
	setTimeout(function(){
		logInMenu.style.transform = null;
		logInMenu.style.opacity = null;
		blur.style.opacity = null;
	}, 30);
	logInForm.addEventListener("onsubmit", closLogInMenu);	}

closCros.onclick = function(){	closLogInMenu();}

let logIn = document.querySelectorAll(".logIn");
for (let i = 0; i < logIn.length; i++) { logIn[i].onclick = function(){ logInMenuOn();}	}

let catUnfold = document.querySelector(".catUnfold");
let popupCat = document.querySelector(".popupCat");
if (catUnfold&&popupCat) {
	let cont = popupCat.querySelector(".cont");
	popupCat.style.display = 'none';
	cont.style.transformOrigin = 'top';
	cont.style.transform = 'translateY(50px)';
	cont.style.opacity = '0'; 	

	function popupOff() {
		cont.style.transform = 'translateY(50px)';
		cont.style.opacity = '0'; 	
		setTimeout(function(){popupCat.style.display = 'none';}, 300);	}

	catUnfold.onclick = function(){
		if (popupCat.style.display == 'none'){
			popupCat.style.display = null;
			event.stopPropagation();
			setTimeout(function(){cont.style.transform = null;cont.style.opacity = null;}, 10);
		}else{	popupOff();	}	}
	document.addEventListener("click", function(){
		if (popupCat.style.display != 'none') {popupOff();}	});
}

let LikeH = document.querySelectorAll(".LikeH");
for (let i = 0; i < LikeH.length; i++) {LikeH[i].onclick = function() {LikeH[i].classList.toggle("Yes");	}}

let part = document.querySelectorAll("body>div");
for (let i = 0; i < part.length; i++) {
	CreateScroll(part[i]);
	let wrapCont = part[i].querySelector(".wrapCont");
	let cont = part[i].querySelector(".cont.partShow");
	if (wrapCont && cont){
		let wrapTxt = wrapCont.textContent;
		wrapCont.onclick = function() {
			if (cont.classList.contains("partShow")) {
				cont.classList.remove("partShow");
				wrapCont.textContent = "Свернуть";
				CreateScroll(part[i]);
			}else{
				cont.classList.add("partShow");
				wrapCont.textContent = wrapTxt;
				CreateScroll(part[i]);
			}	}	}	}

function CreateScroll(part) {
	let hScroll = part.querySelector(".hScroll");
	if (hScroll) {
		let leftArr = hScroll.querySelector(".leftArr");
		let rightArr = hScroll.querySelector(".rightArr");
		if (leftArr) {leftArr.remove();}
		if (rightArr) {rightArr.remove();}
		let ScrlCont = hScroll.querySelector(".cont");
		leftArr = document.createElement("div");
		rightArr = document.createElement("div");
		leftArr.className = "slideArr leftArr";
		rightArr.className = "slideArr rightArr";
		ScrlCont.before(leftArr);
		ScrlCont.after(rightArr);
		let goodCard = ScrlCont.querySelectorAll(".cont>div");
		let visibleCount = 0;
		for (let i = 0; i < goodCard.length; i++) {	if(goodCard[i].scrollWidth>0) {visibleCount++;}}
		let dots = hScroll.querySelector(".dots");
		let dot = [];
		if (dots) {
			for (let i = 0; i < visibleCount; i++) {
				dot[i] = document.createElement("div");
				dots.append(dot[i]);
				dot[i].classList.add("dot");	}
			dot[0].style.opacity = '1';
			function dotSwich() {
				for (let i = 0; i < dot.length; i++) {dot[i].style.opacity = null;				}
				dot[(Math.round(ScrlCont.scrollLeft / ScrlCont.clientWidth))].style.opacity = '1';
			}
		}

		if (leftArr) {
			leftArr.onclick = function(){
				let scrlStep = ScrlCont.scrollWidth/visibleCount;
				ScrlCont.scrollTo({left: ((Math.round(ScrlCont.scrollLeft/scrlStep))*scrlStep - scrlStep), behavior: 'smooth'});
				if (dots) { setTimeout( function(){dotSwich();}, 500);}
			}
		}
			
		if (rightArr) {
			rightArr.onclick = function(){
				let scrlStep = ScrlCont.scrollWidth/visibleCount;
				ScrlCont.scrollTo({left: ((Math.round(ScrlCont.scrollLeft/scrlStep))*scrlStep + scrlStep), behavior: 'smooth'});
				if (dots) { setTimeout( function(){dotSwich();}, 500);}
			}
		}

		if (dots) {
			let ScrlFlag=false;
			let ScrlTime;
			let curSld = 0;
			let scrlStep = Math.trunc(ScrlCont.scrollWidth / visibleCount);
			function AnScroll() {
				if (ScrlFlag) {
					clearTimeout(ScrlTime);
					ScrlTime = setTimeout( function() {
						ScrlCont.scrollTo({left: ((Math.round(ScrlCont.scrollLeft/ScrlCont.clientWidth))*(ScrlCont.scrollWidth/visibleCount)), behavior: 'smooth'});
						}, 100);
						dotSwich();
				}	}
			ScrlCont.addEventListener("scroll", function (e) { AnScroll(); });
			ScrlCont.addEventListener("touchstart", function (e) { ScrlFlag = false; });
			ScrlCont.addEventListener("touchend", function (e) { ScrlFlag = true; AnScroll(); });
		}
	}
}

let goodGroup = document.querySelectorAll(".goodGroup");
for (let i = 0; i < goodGroup.length; i++) {
	let viewType = goodGroup[i].querySelector(".viewType");
	if (viewType) {
		let viewTypeBlock = viewType.querySelector(".viewTypeBlock");
		let viewTypeLine = viewType.querySelector(".viewTypeLine");
		viewTypeLine.style.display = "none";
			goodGroup[i].classList.add("blockView");
			viewTypeBlock.onclick = function(){
				viewTypeBlock.style.display = "none";
				viewTypeLine.style.display = null;
				goodGroup[i].classList.add("lineView");
				goodGroup[i].classList.remove("blockView");
			}
			viewTypeLine.onclick = function(){
				viewTypeLine.style.display = "none";
				viewTypeBlock.style.display = null;
				goodGroup[i].classList.add("blockView");
				goodGroup[i].classList.remove("lineView");
			}
	}
}
