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
		thankY.style.display = "block";	}	}
/*КОНЕЦ модальное окно после события формы submit*/
