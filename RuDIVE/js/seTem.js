let body = document.querySelector("body");
let swThm = document.querySelector(".swThm");
let swT;
function swTm() {
	swT = localStorage.getItem('dfR5q');
	if (swT == null) {localStorage.setItem('dfR5q', 0);
	}else{	if (body.classList.contains("mainPag")==false) {
			if (swT==1) {body.classList.add("liteSch");}else{body.classList.remove("liteSch");}	}	}	}
swTm();
swThm.onclick = function() {
	if (swT==1) {localStorage.setItem('dfR5q', 0);}else{localStorage.setItem('dfR5q', 1);}
	swTm();	};

