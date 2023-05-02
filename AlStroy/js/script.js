let getPrice = document.querySelector(".getPrice .calc");
if (getPrice) {
	let indLineCont = getPrice.querySelector(".indLine");
	let indLine = [];
	
	let itmChk = getPrice.querySelectorAll(".itmChk");
	let button = getPrice.querySelector(".button");
	let phone = getPrice.querySelector("input.phone");
	let send = getPrice.querySelector("input.send");
	let hint = getPrice.querySelector(".hint");
	let Nquest = getPrice.querySelector(".Nquest");
	
	let blockSomeT = function (event) {  event.preventDefault();	};
	getPrice.addEventListener('submit', blockSomeT);
//	getPrice.removeEventListener('submit', blockSomeT);

	for (let i = 0; i < itmChk.length; i++) {
		let itm = itmChk[i].querySelectorAll(".itm");
		let chkBox = itmChk[i].querySelectorAll(".chkBox");
		let radioIn = itmChk[i].querySelectorAll("input");
		indLine[i] = document.createElement("div");
		indLineCont.append(indLine[i]);
		indLine[i].onclick = function() {
			if (indLine[i].classList.contains("checked")) {
				for (let j = 0; j < indLine.length; j++) {
					
					if (i<(indLine.length-1)) {
						hint.style.display = null;
						button.style.display = null;
						phone.style.display = "none";
						send.style.display = "none";
						getPrice.addEventListener('submit', blockSomeT);
						Nquest.innerHTML = String(i + 1);		}
					
					if (j < i) {
						itmChk[j].style.display = "none";
					}else{
						if (j == i) {
							itmChk[j].style.display = null;
						}else{
							itmChk[j].style.display = "none";
							indLine[j].classList.remove("checked");	}	}	}	}	}

		function itmClick(j) {
			for (let g = 0; g < itm.length; g++) {
			if (j==g) {	
				chkBox[g].classList.add("checked");
				if (radioIn.length>0) {	radioIn[g].checked = true;	}
			}else{
				chkBox[g].classList.remove("checked");		}	}	}
				
		for (let i = 0; i < itm.length; i++) {
			itm[i].onclick = function() { itmClick(i);}		}
		itmClick(0);

		if (i==0) {
			indLine[i].classList.add("checked");
			itmChk[i].style.display = null;
		} else {
			indLine[i].classList.remove("checked");
			itmChk[i].style.display = "none";
			if (i==(itmChk.length - 1)){
				phone.style.display = "none";
				send.style.display = "none";}
		}
	}
	button.onclick = function() {
		for (let i = 0; i < indLine.length; i++) {
			if (indLine[i].classList.contains("checked")) {
				if (i < (indLine.length -1)) {
					itmChk[i].style.display = "none";
				}
			}else{
				itmChk[i].style.display = null;
				indLine[i].classList.add("checked");
				if (i==(indLine.length - 1)) {		
					hint.style.display = "none";
					button.style.display = "none";
					phone.style.display = null;
					send.style.display = null;
					setTimeout(function(){	getPrice.removeEventListener('submit', blockSomeT); }, 200);
				}
				Nquest.innerHTML = String(i + 1);
				i = indLine.length;
			}
		}
	}
}



/*
//Обработка FORM ------------

let getPrice = document.querySelector(".getPrice .calc");
if (getPrice) {
	let indLine = getPrice.querySelectorAll(".indLine>div");
	let itmChk = getPrice.querySelectorAll(".itmChk");
	let button = getPrice.querySelector(".button");
	for (let i = 0; i < itmChk.length; i++) {
		let itm = itmChk[i].querySelectorAll(".itm");
		let chkBox = itmChk[i].querySelectorAll(".chkBox");
		let radioIn = itmChk[i].querySelectorAll("input");

 Клик по индикатору		
		indLine[i].onclick = function() {
			if (indLine[i].classList.contains("checked")) {
				for (let j = 0; j < indLine.length; j++) {
					if (j < i) {
						itmChk[j].style.display = null;
					}else{
						if (j == i) {
							itmChk[j].style.display = "flex";
						}else{
							itmChk[j].style.display = null;
							indLine[j].classList.remove("checked");	}	}	}	}	}

		function itmClick(j) {
			for (let g = 0; g < itm.length; g++) {
			if (j==g) {	
				chkBox[g].classList.add("checked");
				if (radioIn.length>0) {	radioIn[g].checked = true;	}
			}else{
				chkBox[g].classList.remove("checked");		}	}	}
				
		for (let i = 0; i < itm.length; i++) {
			itm[i].onclick = function() { itmClick(i);}		}
		itmClick(0);

	}
	button.addEventListener("click", function(){
		window.location.href = 'getPrice02.html';
		});
}
*/

/*
//раскрывающиеся списки FAQ ------------
let FAQ = document.querySelectorAll(".FAQ");
for (let i = 0; i < FAQ.length; i++) {
	let qAns = FAQ[i].querySelectorAll(".qAns");
	for (let i = 0; i < qAns.length; i++) {
		let Que = qAns[i].querySelector(".Que");
		let Ans = qAns[i].querySelector(".Ans");
		let wrapArr = document.createElement("div");
		wrapArr.className = 'wrapArr';
		Que.append(wrapArr);
		wrapArr.innerHTML = "<img src='images/faqClose.png'>"
		let heigOn = Ans.clientHeight + Ans.clientHeight*0.07;
		Ans.style.height = "0";
		Ans.style.opacity = '0';
		Ans.style.padding = "0";
		
		qAns[i].onclick = function() {
			wrapArr.classList.toggle("ArrUp");
			if (wrapArr.classList.contains("ArrUp")) {
				wrapArr.innerHTML = "<img src='images/faqOpen.png'>"
				Ans.style.height = heigOn + 'px';
				Ans.style.padding = null;
				Ans.style.opacity = '1';
			} else {
				wrapArr.innerHTML = "<img src='images/faqClose.png'>"
				Ans.style.height = "0";
				Ans.style.padding = "0";
				Ans.style.opacity = '0';
					}	}	}	}
//---------------раскрывающиеся списки FAQ

//мобильное меню---------------
if (document.documentElement.clientWidth < 600) {
	let mobMenu = document.querySelector("header .mobMenu");
	let burgerMenu = document.querySelector(".burgerMenu");
	let burger = mobMenu.querySelector(".rTopCor");
	
	let topMenu = document.querySelectorAll("header .topMenu>div");
	for (let i = 0; i < topMenu.length; i++) {
		let tmp = topMenu[i].cloneNode(true);
		burgerMenu.append(tmp);
		tmp.classList.remove('rowDiv');	}

	burgerMenu.style.transform = 'scaleY(0)';
	burgerMenu.style.transformOrigin = 'top';
	burgerMenu.style.opacity = '0'; 	
	
	burger.onclick = function() {
		burgerMenu.style.display = 'block';
		event.stopPropagation();
		setTimeout(function(){	burgerMenu.style.transform = null;	burgerMenu.style.opacity = null; }, 1);	}
		
	function burgerMenuOff() {
		burgerMenu.style.transform = 'scaleY(0)';
		burgerMenu.style.opacity = '0'; 	
		setTimeout(function(){	burgerMenu.style.display = 'none';	}, 300);	}
		
	burgerMenu.addEventListener("click", function(){burgerMenuOff();});

	document.addEventListener("click", function(){
		if (burgerMenu.style.display != 'none') {burgerMenuOff();}	});
}
//---------------мобильное меню




window.onload = function() {

let delivSchem = document.querySelector(".delivSchem");
let pLineS = delivSchem.querySelector(".pLineS");
let pLine = pLineS.querySelectorAll("div");
let delivChart = delivSchem.querySelector(".delivChart");
let karTag = delivChart.querySelector(".karTag");
//alert (`delivChart.offsetWidth = ${delivChart.offsetWidth} ---- delivChart.offsetHeight = ${delivChart.offsetHeight}`);
let delivCord = [24.7, 64.2, 57.0, 62.9, 26.3, 59.4, 27.3, 80.0, 48.0, 32.0, 45.5, 41.0, 56.6, 45.2];
let karCord = [56.3, 20];
for (let i = 0; i < delivCord.length; i++) {if (i % 2 != 0) {delivCord[i] = delivCord[i]*delivChart.offsetHeight/100;} else {delivCord[i] = delivCord[i]*delivChart.offsetWidth/100;}}
for (let i = 0; i < karCord.length; i++) {if (i % 2 != 0) {karCord[i] = karCord[i]*delivChart.offsetHeight/100;} else {karCord[i] = karCord[i]*delivChart.offsetWidth/100;}}
karTag.style.left = karCord[0] + "px";
karTag.style.top = karCord[1] + "px";
karCord[0] = karCord[0] + karTag.offsetWidth/2;
karCord[1] = karCord[1] + karTag.offsetHeight/2;
let deliv = [];
let geoTag = [];
let bluTag = [];
let whitTag = [];
let airPlane = [];
let airLine = [];
let correct = 492/987;

function pLineOn(i) {
	for (let j = 0; j < pLine.length; j++) {if (j!=i) {pLineOff(j);}}
	bluTag[i].style.display = "none";
	whitTag[i].style.display = null;
		whitTag[i].style.left = (delivCord[i*2] - whitTag[i].clientWidth*0.93/2) + "px";
		whitTag[i].style.top = (delivCord[i*2 + 1] - whitTag[i].clientHeight*0.95) + "px";
	airPlane[i].style.display = null;
	airLine[i].style.display = null;
	pLine[i].classList.add('selctd');	}
function pLineOff(i) {
	bluTag[i].style.display = null;
		bluTag[i].style.left = (delivCord[i*2] - bluTag[i].clientWidth/2) + "px";
		bluTag[i].style.top = (delivCord[i*2 + 1] - bluTag[i].clientHeight) + "px";
	whitTag[i].style.display = "none";
	airPlane[i].style.display = "none";
	airLine[i].style.display = "none";
	
	
	pLine[i].classList.remove('selctd');	}

for (let i = 0; i < pLine.length; i++) {
	geoTag[i] = document.createElement("div");
	delivChart.append(geoTag[i]);
	geoTag[i].classList.add('geoTag');
	geoTag[i].style.left = delivCord[i*2] + "px";
	geoTag[i].style.top = delivCord[i*2 + 1] + "px";

	whitTag[i] = document.createElement("img");
	delivChart.append(whitTag[i]);
	whitTag[i].classList.add('whitTag');
	whitTag[i].src = "images/geoTagWhite.svg";
	
	bluTag[i] = document.createElement("img");
	delivChart.append(bluTag[i]);
	bluTag[i].classList.add('bluTag');
	bluTag[i].src = "images/geoTagBlue.svg";
	airPlane[i] = document.createElement("img");
	delivChart.append(airPlane[i]);
	airPlane[i].classList.add('airPlane');
	airPlane[i].src = "images/airPlane.svg";
	airLine[i] = document.createElement("div");
	delivChart.append(airLine[i]);
	airLine[i].classList.add('airLine');
	let prilKat = karCord[0] - delivCord[i*2];
	let protKat = karCord[1] - delivCord[i*2 + 1];
	let angle = Math.atan(protKat/prilKat);
	let angCos = (Math.cos(angle));
	let linLenth = prilKat / (Math.cos(angle));
//	alert (`protKat: ${protKat}, prilKat: ${prilKat}, protKat/prilKat: ${protKat/prilKat}, Угол: ${angle}, Cos: ${angCos}, Гипот: ${linLenth}`);
	if (linLenth<0) {linLenth=linLenth*(- 1);}
	airLine[i].style.width = linLenth + "px";
	airLine[i].style.transform = "rotate(" + angle + "rad)";
	airPlane[i].style.left = (delivCord[i*2] + prilKat*0.4 - 12) + "px"		//корректировка положения по половине размеров изображения самолета
	airPlane[i].style.top = (delivCord[i*2 + 1] + protKat*0.4 - 9) + "px"		//--//--
	let tranStr = "rotate(" + angle + "rad)";
	if (karCord[0] < delivCord[i*2]) { tranStr = tranStr + " scale(-1, 1)"; }//корректировка направления самолета
	airPlane[i].style.transform = tranStr;
	airLine[i].style.left = (delivCord[i*2] - (linLenth - prilKat)/2) + "px";
	airLine[i].style.top = (delivCord[i*2 + 1] + protKat/2) + "px";
	pLine[i].onclick = function() {	pLineOn(i); };	
}
	setTimeout(function(){pLineOn(0);}, 100);
};
*/
