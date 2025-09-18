let body = document.querySelector("body");
let swThem = document.querySelectorAll(".swThem");

function swTm() {
	let swT = localStorage.getItem('ja75evc');
	if (swT == null) {
		localStorage.setItem('ja75evc', 0);
	}else{
		if (swT==1) {
			body.classList.add("liteSch");
		}else{
			body.classList.remove("liteSch");}	}	}

for (let i = 0; i < swThem.length; i++) {
	swThem[i].onclick = function() {
		if ((localStorage.getItem('ja75evc'))==0) {
			localStorage.setItem('ja75evc', 1);
		}else{
			localStorage.setItem('ja75evc', 0);}
		swTm();	};
}

swTm();
