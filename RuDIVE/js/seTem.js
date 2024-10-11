let body = document.querySelector("body");
let swThm = document.querySelector(".swThm");

function swTm() {
	let swT = localStorage.getItem('ja75evc');
	if (swT == null) {
		localStorage.setItem('ja75evc', 0);
	}else{
		if (swT==1) {
			body.classList.add("liteSch");
		}else{
			body.classList.remove("liteSch");}	}	}

swThm.onclick = function() {
	if ((localStorage.getItem('ja75evc'))==0) {
		localStorage.setItem('ja75evc', 1);
	}else{
		localStorage.setItem('ja75evc', 0);}
	swTm();	};
swTm();
