let zoomLens = document.querySelectorAll(".zoomLens");
for (let i = 0; i < zoomLens.length; i++) {
	window.addEventListener('scroll', function() {zoomLens[i].style.transform = "rotate(" + (window.pageYOffset/8) + "deg)";});		}

let videoFrame = document.querySelectorAll(".orderVideo .videoFrame");
for (let i = 0; i < videoFrame.length; i++) {
	let video = videoFrame[i].querySelector(".orderVideo .videoFrame video");
	let lookVideo = videoFrame[i].querySelector(".orderVideo .videoFrame .lookVideo");
	let playButt = videoFrame[i].querySelector(".orderVideo .videoFrame .playButt");
	function setVideoReady(){
		lookVideo.style.opacity = '0';
		playButt.style.opacity = '0';
		video.setAttribute('controls', 'controls');
		video.play();		}
	playButt.onclick = function(){setVideoReady();}
	lookVideo.onclick = function(){setVideoReady();}
}

let askQwe = document.querySelectorAll(".askQwe");
for (let i = 0; i < askQwe.length; i++) {
	let qwVars = askQwe[i].querySelector(".qwVars");
	let qwVar = qwVars.querySelectorAll(".qwVars>div");
	function clearMark(){
		for (let i = 0; i < qwVar.length; i++) {
			let chMark = qwVar[i].querySelector(".chMark");
			chMark.classList.remove("marked");	}	}
	for (let i = 0; i < qwVar.length; i++) {
		let chMark = qwVar[i].querySelector(".chMark");
		qwVar[i].onclick = function(){
			clearMark();
			chMark.classList.add("marked");	}	}	}


let phoneInput = document.querySelectorAll('input[type="tel"]');
for (let i = 0; i < phoneInput.length; i++) {
	let inputCode;
	function appMask(event) {
		if (((inputCode>=96)&&(inputCode<=105))||(inputCode==107)) {
			console.log('length END: ' + phoneInput[i].value.length);
			switch(phoneInput[i].value.length) {
				case 1:	if ((phoneInput[i].value=='8')||(phoneInput[i].value=='+')){phoneInput[i].value = '+7 ';
						}else{phoneInput[i].value = '+7 ' + phoneInput[i].value;}	break;
				case 2:
				case 3:	phoneInput[i].value = '+7 ' + phoneInput[i].value.slice(-1); break;
				case 6: phoneInput[i].value = phoneInput[i].value + '-';	break;
				case 7: phoneInput[i].value = phoneInput[i].value.slice(0, (phoneInput[i].value.length-1)) + '-' + phoneInput[i].value.slice(-1);	break;
				case 10: phoneInput[i].value = phoneInput[i].value + '-';	break;
				case 11: phoneInput[i].value = phoneInput[i].value.slice(0, (phoneInput[i].value.length-1)) + '-' + phoneInput[i].value.slice(-1);	break;
				case 16: phoneInput[i].value = phoneInput[i].value.slice(0, 15); break;	}	}	}
	phoneInput[i].addEventListener("input", appMask);
	phoneInput[i].addEventListener('keydown', function(event){
		inputCode = event.keyCode;
		if (((inputCode>=96)&&(inputCode<=105))||(inputCode==107)||(inputCode==8)||(inputCode==13)) {}else{	event.preventDefault();	}
	});
}
//    console.log('length END: ' + phoneInput[i].value.length);
