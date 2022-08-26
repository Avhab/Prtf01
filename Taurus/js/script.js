let blur = document.querySelector(".blur");
let logoMenu = document.querySelector(".logoMenu");
let icons = logoMenu.querySelector(".icons");
let topMenu = logoMenu.querySelector(".topMenu");
let telph = icons.querySelector(".telph");
let email = icons.querySelector(".email");
let globe = icons.querySelector(".globe");
let burger = logoMenu.querySelector(".burger");
let topMenuItm = topMenu.querySelectorAll(".topMenu>*");
let NavLib = document.querySelectorAll(".NavLib>div");
//загрузка в футер карты по умолчанию
let Nav = document.querySelector(".Nav");
Nav.append(NavLib[0].cloneNode(true));
//-----загрузка в футер карты по умолчанию

if (document.documentElement.clientWidth > 900) {
	burger.style.display = "none";
} else {
	let burgerMenu = logoMenu.querySelector(".burgerMenu");
	for (let i = 0; i < topMenuItm.length; i++) {burgerMenu.append(topMenuItm[i]);	}
	let icDiv = document.createElement("div");
	let iconDiv = document.createElement("div");
	iconDiv.classList.add("iconDiv");
	burgerMenu.prepend(icDiv);
	icDiv.prepend(iconDiv);
	let closeX = document.createElement("div");
	closeX.classList.add("closeX");
	closeX.style.float = "right";
	iconDiv.append(closeX);
	iconDiv.style.padding = "0";
	let iconsB = icons.cloneNode(true);
	iconsB.style.float = "left";
	iconDiv.prepend(iconsB);
	if (document.documentElement.clientWidth < 600) {icons.style.display = "none";}
	if (document.documentElement.clientWidth < 540) {
		burgerMenu.style.width = "100%";
		let lDiv = document.createElement("div");
		let logoDiv = document.createElement("div");
		logoDiv.classList.add("logoDiv");
		burgerMenu.prepend(lDiv);
		lDiv.prepend(logoDiv);
		logoDiv.append(closeX);
		
		closeX.style.marginTop = "14px";
		logoDiv.style.padding = "0";
		burgerMenu.classList.add("p100");

		let logo = logoMenu.querySelector(".Logo");
		logo = logo.cloneNode(false);
		logo.innerHTML = "<img src='images/logoWhite.png' alt='Логотип Таурус'>";
		logoDiv.prepend(logo);	}

	let globeB = burgerMenu.querySelector(".burgerMenu .globe");
	let globeInUl = globeB.querySelector("ul");
	
	let iconMenuArea = document.createElement("div");
	iconMenuArea.classList.add("iconMenuArea");
	iconMenuArea.style.display = "none";
	iconDiv.append(iconMenuArea);
	iconMenuArea.prepend(globeInUl);
	function offBurgMenuItm() {
		for (let i = 0; i < burgMenuItm.length; i++) {
			burgMenuItm[i].style.color = "";	}
			globeB.style.background =  "url(images/globeWhite.png) center center no-repeat";
			iconMenuArea.style.display="none";	}
	function offBurger() {
		burgerMenu.style.opacity = "0";
		setTimeout(function(){	burgerMenu.style.display = "none";	}, 300);	}
		
	burger.onclick = function(){
		if (blur.style.display == "block") {
			if (iconMenuArea) {iconMenuArea.style.display="none";}
			offUl();
			offBurgMenuItm();
			offBlur();
			offBurger();
		}else{
			onBlur();
			burgerMenu.style.display = "inline-block";
			setTimeout(function(){burgerMenu.style.opacity = "1";}, 20);	}
		event.stopPropagation();	}
	offBlur();
	offBurger();

	document.addEventListener("click", function(){
		if (iconMenuArea) {iconMenuArea.style.display="none";}
		offBurgMenuItm();
		offBurger();	});

	let burgMenuItm = burgerMenu.querySelectorAll(".burgerMenu>div>div");
	for (let i = 0; i < burgMenuItm.length; i++) {
		if (burgMenuItm[i].classList.contains("iconDiv")){
			//меню иконки globe в бургер-меню
			globeB.onclick = function(){
				if (iconMenuArea.style.display!="block") {
					offUl();
					offBurgMenuItm();
					iconMenuArea.style.display="block";
					globeB.style.background =  "url(images/globeBlu.png) center center no-repeat";
					globeInUl.style.display="block";
					setTimeout(function(){globeInUl.style.opacity = "1";}, 20);
					event.stopPropagation();
				}else{
					globeInUl.style.opacity = "0";
					globeB.style.background =  "";
					setTimeout(function(){
						globeInUl.style.display="none";
						iconMenuArea.style.display="none";
						}, 300);
					event.stopPropagation();}	}		
		}else{
			let inUl = burgMenuItm[i].querySelector("ul");
			if (inUl) {
				inUl.style.opacity="0";
				inUl.style.display = "none";
				burgMenuItm[i].addEventListener("click", function(){
					if (inUl.style.display!="block") {
						offUl();
						offBurgMenuItm();
						burgMenuItm[i].style.color = "#2D9CDB";
						inUl.style.display="block";
						setTimeout(function(){inUl.style.opacity = "1";}, 20);
						event.stopPropagation();
					}else{
						burgMenuItm[i].style.color = "";
						inUl.style.opacity = "0";
						setTimeout(function(){inUl.style.display="none";}, 300);
						event.stopPropagation();	}	});
				let li = inUl.querySelectorAll("li");
				for (let j = 0; j < li.length; j++) {
					li[j].addEventListener("click", function(){
						offUl();
						offBurgMenuItm();
						offBlur();
						offBurger();
						event.stopPropagation();	});	}	}	}	}
	//ссылка На карте в бургер-меню
	let globeLi = globeInUl.querySelectorAll("li>div");
	globMenu(globeLi);
}

logoMenu = document.querySelector(".logoMenu");
topMenu = logoMenu.querySelector(".topMenu");
topMenuItm = topMenu.querySelectorAll(".topMenu>div>div");

let inUl = globe.querySelector("ul");
globe.onclick = function(){
	if (inUl.style.display!="block") {
		offUl();
		offMenuItm();
		onBlur();
		inUl.style.right = (document.documentElement.clientWidth - globe.getBoundingClientRect().right) + "px";
		globe.style.background =  "url(images/globeBlu.png) center center no-repeat";
		inUl.style.display="block";
		setTimeout(function(){inUl.style.opacity = "1";}, 20);
		event.stopPropagation();
	}else{
		offBlur();
		inUl.style.opacity = "0";
		globe.style.background =  "";
		setTimeout(function(){	inUl.style.display="none";	}, 300);
		event.stopPropagation();}	}
//ссылка На карте
let globeLi = globe.querySelectorAll(".globe li>div");
globMenu(globeLi);

document.addEventListener("click", function(){
	offUl();
	offMenuItm();
	offBlur();	});

function onBlur() {
	blur.style.display="block";
	setTimeout(function(){blur.style.opacity = "1";}, 20);	}
function offBlur() {
	blur.style.opacity="0";
	setTimeout(function(){blur.style.display = "none";}, 300);	}
function offUl() {
	let inUl = logoMenu.querySelectorAll("ul");
	for (let i = 0; i < inUl.length; i++) {
		inUl[i].style.opacity = "0";
		inUl[i].style.display="none";	}	}
function offMenuItm() {
	for (let i = 0; i < topMenuItm.length; i++) {topMenuItm[i].style.color = "";	}
	globe.style.background =  "";	}

// функции меню globe
function globMenu(globeLi) {
	for (let j = 0; j < globeLi.length; j++) {
		let a = globeLi[j].querySelector("a");
		a.style.opacity = "0";
		globeLi[j].onmouseover = function(){a.style.opacity = "1";}
		globeLi[j].onmouseout = function(){a.style.opacity = "0";}
		globeLi[j].onclick = function(){offBlur();}
		if (j==0) {adresPast(globeLi[j]);}
		a.onclick = function(){
			adresPast(globeLi[j]);
			let Nav = document.querySelector(".Nav");
			let NavDiv = document.querySelector(".Nav>div");
			if (NavDiv) {NavDiv.remove()};
			Nav.append(NavLib[j].cloneNode(true));	}	}
	function adresPast(globeLi) {
		let tmpSt = globeLi.innerHTML;
		tmpSt = tmpSt.slice((tmpSt.indexOf("</b><br>", 0) + 8), (tmpSt.indexOf("<a href=", 0)))
		let adr = document.querySelector("footer .adres");
		adr.innerHTML = tmpSt;}
			}

for (let i = 0; i < topMenuItm.length; i++) {
	let inUl = topMenuItm[i].querySelector("ul");
	if (inUl) {
		inUl.style.opacity="0";
		inUl.style.display = "none";
		topMenuItm[i].onclick = function(){
			if (inUl.style.display!="block") {
				offUl();
				offMenuItm();
				onBlur();
				topMenuItm[i].style.color = "#2D9CDB";
				inUl.style.display="block";
				setTimeout(function(){inUl.style.opacity = "1";}, 20);
				event.stopPropagation();
			}else{				
				offBlur();
				topMenuItm[i].style.color = null;
				inUl.style.opacity = "0";
				setTimeout(function(){inUl.style.display="none";}, 300);
				event.stopPropagation();	}	}	}	}

/*==========*/

let News = document.querySelector(".News");
let newsImg = News.querySelector(".newsImg");
let img = newsImg.querySelectorAll("img");
let descr = News.querySelectorAll(".descr");
let swtch = News.querySelector(".swtch");
if (img.length==descr.length) {
	let lArr = document.createElement("div");
	swtch.append(lArr);
	lArr.className = 'lArr';
	for (let i = 0; i < img.length; i++) {
		let radBut = document.createElement("div");
		swtch.append(radBut);
		radBut.className = 'radBut';
		let inDiv = document.createElement("div");
		radBut.append(inDiv);
		radBut.onclick = function(){	NewTogg();	indx=i;	}	}
	let rArr = document.createElement("div");
	swtch.append(rArr);
	rArr.className = 'rArr';

	let radBut = swtch.querySelectorAll(".radBut");
	let indx;
	function NewTogg(){
		for (let i = 0; i < descr.length; i++) {
			if (radBut[i].classList.contains("On")){indx = i;}
			radBut[i].classList.remove("On");
			img[i].style.opacity="0";
			descr[i].style.opacity="0";	}
		setTimeout(function(){
			radBut[indx].classList.add("On");
			img[indx].style.opacity="1";
			descr[indx].style.opacity="1";}, 300);	}

	lArr.onclick = function(){	NewTogg();	indx--;	if (indx<0) {indx=descr.length-1;}	}
	rArr.onclick = function(){	NewTogg();	indx++;	if (indx==descr.length) {indx=0;}	}
	NewTogg();	indx = 0;
}

let portion = document.querySelectorAll(".portion");
for (let i = 0; i < portion.length; i++) {
	let elem = portion[i].querySelectorAll(".cont>div");
	for (let i = 0; i < elem.length; i++) {
		if (i>7){
			elem[i].style.display = "none";
			elem[i].style.transform = 'scaleY(0)';	}	}
	let button = portion[i].querySelector("button");
	button.onclick = function(){
		for (let i = 0; i < elem.length; i++) {
			elem[i].style.display = null;
			setTimeout(function(){ elem[i].style.transform = 'scaleY(1)';}, 20);	}	}	}

