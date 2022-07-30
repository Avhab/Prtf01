/*НАЧАЛО бургер-меню в хедере*/
let adres = document.querySelector(".logoMenu .adres");
let telph = document.querySelector(".logoMenu .telph");
let burger = document.querySelector(".logoMenu .burger");
let burgerMenu = document.querySelector(".logoMenu .burgerMenu");
let topMenu = document.querySelector(".topMenu");
if (adres && telph && burger && burgerMenu ) {
	if (document.documentElement.clientWidth < 750) {
		adres.before(telph);
		burgerMenu.style.display = "none";
		topMenu.style.boxShadow = "4px 4px 40px #555555";
		burgerMenu.style.opacity = "0";
		burgerMenu.prepend(topMenu);
		burger.onclick = function() {
			burgerMenu.style.display = null;
			setTimeout( function() {burgerMenu.style.opacity = "1";}, 25);
			event.stopPropagation();	}	
		document.addEventListener("click", function() {
			burgerMenu.style.opacity = "0";
			setTimeout( function() {burgerMenu.style.display = "none";}, 300);	});		
	} else {burger.style.display = "none";}	}
/*КОНЕЦ бургер-меню в хедере*/

/*НАЧАЛО слайды наверху страницы*/
let HScrol = document.querySelector(".HScrol");
if (HScrol){
	let img = HScrol.querySelectorAll("img");
	let dots = HScrol.querySelector(".dots");
	let dot = dots.querySelectorAll(".dots>div");
	let indI = 0;

	for (let i = 0; i < img.length; i++) {
		img[i].style.transitionDuration = '0.3s';
		if (indI==i) {
			dot[i].className='on';
		} else {img[i].style.display = 'none'; }	}

	for (let i = 0; i < dot.length; i++) {
		dot[i].onclick = function(){
			img[i].style.opacity = '0';
			img[indI].style.opacity = '0';
			setTimeout( function() {
				img[indI].style.display = 'none';
				dot[indI].className='';
				dot[i].className='on';
				img[i].style.display = null;
				setTimeout( function() {img[i].style.opacity = '1';indI = i;}, 25);	}, 300);	}	}	}
/*КОНЕЦ слайды наверху страницы*/

/*НАЧАЛО уборка модального окна с карты*/
let Nav = document.querySelector(".Nav");
if (Nav){
	let memN = Nav.querySelector(".memN");
	let blurHidd = Nav.querySelector(".blurHidd");
	blurHidd.onclick = function(){
		memN.style.display = "none";
		blurHidd.style.display = "none";}	}
/*КОНЕЦ уборка модального окна с карты*/

/*НАЧАЛО модальное окно после события формы submit*/
let form = document.querySelector('.Contacts form');
let blur = document.querySelector('.blur');
let thankY = document.querySelector('.thankY');
let bann = document.querySelector('.thankY .bann');
if (form && blur && thankY) {
	form.addEventListener("submit", function(e) {localStorage.setItem("submKey",JSON.stringify(true));});
	let blurOn = function() {
		blur.style.display = "none";
		thankY.style.display = "none";
		localStorage.setItem("submKey",JSON.stringify(false));}
	blur.onclick = function() { blurOn();}
	thankY.onclick = function() { blurOn();}
	let submOk = JSON.parse(localStorage.getItem("submKey"));
	if (submOk == true) {
		blur.style.display = "block";
		thankY.style.display = "block";
		let widt = document.documentElement.clientWidth - 30;
		if (widt<500) {
		thankY.style.width = widt + 'px';
		widt = widt / 2;
		thankY.style.marginLeft ='-' + widt + 'px';	}		}	}
/*КОНЕЦ модальное окно после события формы submit*/

/*НАЧАЛО коррекция таблицы в форме отправки сообщения из контактов*/
if (document.documentElement.clientWidth < 700) {
	let tbody = document.querySelector(".Contacts table tbody");
	if (tbody) {
		let tr = tbody.querySelectorAll("tr");
		let td = tr[0].querySelectorAll("td");
		let trNew = document.createElement("tr");tr[0].after(trNew);
		tr = tbody.querySelectorAll("tr");
		tr[1].append(td[1]);
		let td0 = tr[0].querySelector("td");
		let td1 = tr[1].querySelector("td");
		td0.setAttribute("colspan", 2);
		td1.setAttribute("colspan", 2);	}	}
/*КОНЕЦ коррекция таблицы в форме отправки сообщения из контактов*/
