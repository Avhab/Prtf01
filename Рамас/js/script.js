let HScrol = document.querySelector(".HScrol");
let img = HScrol.querySelectorAll("img");
let dots = HScrol.querySelector(".dots");
let dot = dots.querySelectorAll(".dots>div");
let indI = 0;

for (let i = 0; i < img.length; i++) {
	if (indI==i) {
		img[i].style.transitionDuration = '0.2s';
		dot[i].className='on';
	} else {img[i].style.display = 'none';}	}

for (let i = 0; i < dot.length; i++) {
	dot[i].onclick = function(){
		img[indI].style.opacity = '0';
		img[i].style.opacity = '1';
		setTimeout( function() {
			img[indI].style.display = 'none';
			dot[indI].className='';
			dot[i].className='on';
			img[i].style.display = null;
			setTimeout( function() {img[i].style.opacity = '1';indI = i;}, 10);	}, 200);	}	}

