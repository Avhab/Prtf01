let blur = document.querySelector(".blur");
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burgerMenu");

blur.style.transformOrigin = "center top";
blur.style.opasity = "0";
blur.style.transform = "scaleY(0)"; 
blur.style.transitionDuration = "0.3s";
burgerMenu.style.transformOrigin = "center top";
burgerMenu.style.opasity = "0";
burgerMenu.style.transform = "scaleY(0)"; 
burgerMenu.style.transitionDuration = "0.3s";
let flag = false;

if(blur&&burger&&burgerMenu){
		burger.onclick = function(){
			if (flag == false) {
				blur.style.display = "block";
				burgerMenu.style.display = "block";
				setTimeout( function() {
					blur.style.opasity = "1";
					blur.style.transform = "scaleY(1)";
					burgerMenu.style.opasity = "1";
					burgerMenu.style.transform = "scaleY(1)";
				}, 30);
				setTimeout( function() {flag = true; }, 350);}	}
		document.addEventListener("click", function (e) {
			if (flag == true) {
				setTimeout( function() {flag = false; }, 30);
				blur.style.opasity = "0";
				blur.style.transform = "scaleY(0)"; 
				burgerMenu.style.opasity = "0";
				burgerMenu.style.transform = "scaleY(0)"; 
				setTimeout( function() {
					blur.style.display=null;
					burgerMenu.style.display=null;
				}, 300);}});}

let hScrol = document.querySelectorAll(".hScrol");
for (let i = 0; i < hScrol.length; i++) {
	let scrolCont = hScrol[i].querySelector(".cont");
		let slide = scrolCont.querySelectorAll(".cont>*");
		let arrLeft = hScrol[i].querySelector(".leftArr");
		let arrRight = hScrol[i].querySelector(".rightArr");

		if (arrRight) {
			arrRight.onclick = function(){
				let contWidth = scrolCont.offsetWidth;
				let contCoord = scrolCont.getBoundingClientRect().left;
				let sclLeft = scrolCont.scrollLeft;
				let contLeft = contCoord-sclLeft;
				let scrlPlus = sclLeft + contWidth;
				let scrolRez;
				
				for (let j = 0; j < slide.length; j++) {
					let slideCoord = slide[j].getBoundingClientRect().left;
					scrolRez = (slideCoord-contLeft);
					if(((scrolRez + slide[j].offsetWidth)-scrlPlus)>10){
						break;}	}
				scrolCont.scrollTo({left: scrolRez, behavior: 'smooth'});
			}
		}

		if (arrLeft) {
			arrLeft.onclick = function(){
				let contWidth = scrolCont.offsetWidth;
				let contCoord = scrolCont.getBoundingClientRect().left;
				let sclLeft = scrolCont.scrollLeft;
				let contLeft = contCoord-sclLeft;
				let scrlPlus = sclLeft;
				let scrolRez;
				for (let j = (slide.length - 1); j >= 0; j--) {
					let slideCoord = slide[j].getBoundingClientRect().left;
					scrolRez = (slideCoord-contLeft)-(contWidth-slide[j].offsetWidth);
					if((scrlPlus-(slideCoord-contLeft))>5){
						break;}	}
				scrolCont.scrollTo({left: scrolRez, behavior: 'smooth'});
			}
		}
}



let videoFrame = document.querySelectorAll(".videoFrame");
for (let i = 0; i < videoFrame.length; i++) {
	let video = videoFrame[i].querySelector(".videoFrame video");
	let playButt = videoFrame[i].querySelector(".videoFrame .playButt");
	function setVideoReady(){
		playButt.style.opacity = '0';
		video.setAttribute('controls', 'controls');
		video.play();}
	playButt.onclick = function(){setVideoReady();}	}


let footer = document.querySelector("footer");
let swap = footer.querySelectorAll(".swap");
for (let i = 0; i < swap.length; i++) {
	let arrDown = swap[i].querySelector(".arrDown");
	let ul = swap[i].querySelector("ul");
	if(window.getComputedStyle(ul).display=="none"){
		ul.style.transformOrigin = "center top";
		ul.style.opasity = "0";
		ul.style.transform = "scaleY(0)"; 
		ul.style.transitionDuration = "0.3s";
		let flag = false;
		swap[i].onclick = function(){
			if (flag == false) {
				ul.style.display="block";
				setTimeout( function() {
					ul.style.opasity = "1";
					ul.style.transform = "scaleX(1)"; }, 30);
				setTimeout( function() {flag = true; }, 350);}	}
		document.addEventListener("click", function (e) {
			if (flag == true) {
				setTimeout( function() {flag = false; }, 30);
				ul.style.opasity = "0";
				ul.style.transform = "scaleY(0)"; 
				setTimeout( function() {	ul.style.display=null;	}, 300);	}	});	}	}

let goodCard = document.querySelectorAll(".goodCard");
for (let i = 0; i < goodCard.length; i++) {
	let like = goodCard[i].querySelector(".like");
	like.onclick = function(){like.classList.toggle("marked");	}
	
	let goodSlid = goodCard[i].querySelector(".goodSlid");
	let imgS = goodSlid.querySelectorAll(".goodSlid>*");
	let indicPanl = document.createElement("div");
	goodSlid.after(indicPanl);
	indicPanl.classList.add("indicPanl");
	if (imgS.length>1){
		for (let i = 0; i < imgS.length; i++) {
			let indic = document.createElement("div");
			indicPanl.append(indic);}
			
		let indicS = indicPanl.querySelectorAll(".indicPanl>*");
		indicS[0].classList.add("marked");
		
		goodSlid.onclick = function(){
			let onStep = goodSlid.scrollWidth / imgS.length;
			let j = Math.round(goodSlid.scrollLeft / onStep);
			goodSlid.scrollTo({left: (onStep*(j+1)), behavior: 'smooth'});	}
		
		function indSwch() {
			let onStep = goodSlid.scrollWidth / imgS.length;
			let j = Math.round(goodSlid.scrollLeft / onStep);
			for (let i = 0; i < indicS.length; i++) {indicS[i].classList.remove("marked");}
			indicS[j].classList.add("marked");	}

			goodSlid.addEventListener("scroll", indSwch);
	}}


let filtShow = document.querySelectorAll(".filtShow");
for (let i = 0; i < filtShow.length; i++) {
	let filtBut = filtShow[i].querySelector(".filtBut");
	let button = filtBut.querySelectorAll("button");
	let cont = filtShow[i].querySelector(".gcCont");
	let aCard = cont.querySelectorAll(".gcCont>*");
	let fitArr = [];
	for (let i = 0; i < button.length; i++) {
		for (let clName of button[i].classList) {
			if((clName.indexOf('filt'))==0){fitArr.push(clName);}
		}		
		button[i].onclick = function(){
			if(button[i].classList.contains("marked")){
				button[i].classList.remove("marked");
				for (let l = 0; l < aCard.length; l++) {
					aCard[l].style.display=null;}
			}else{
				for (let j = 0; j < button.length; j++) {
					button[j].classList.remove("marked");	}
				button[i].classList.add("marked");
				for (let l = 0; l < aCard.length; l++) {
					aCard[l].style.display="none";
					for (let clName of aCard[l].classList) {
						if(clName==fitArr[i]){
							aCard[l].style.display=null;
							break;}
					}
				}
			}
		}}}
