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

/*
let phoneInput = document.querySelectorAll('input[type="tel"]');
for (let i = 0; i < phoneInput.length; i++) {
	let inputCode;
	function appMask(event) {
		if (((inputCode>=96)&&(inputCode<=105))||(inputCode==107)) {
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
*/
//    console.log('length END: ' + phoneInput[i].value.length);


let phoneInput = document.querySelectorAll('input[type="tel"]');
for (let j = 0; j < phoneInput.length; j++) {
	function appMask(event) {
		let tmpStr = phoneInput[j].value;
		if (tmpStr.length>0) {
			let i = 0;
			function digCorr() {if (!tmpStr[i].match('[0-9]')){tmpStr = tmpStr.slice(0, (i)) + tmpStr.slice(i+1);}	}
			function symReplc(symb) {if (tmpStr.slice(i, (i+1))!=symb){tmpStr = tmpStr.slice(0, (i)) + symb + tmpStr.slice(i);}	}
			do { switch(i) {
					case 0: symReplc('+'); break;
					case 1: symReplc('7'); break;
					case 2: symReplc(' '); break;
					case 3:	case 4:	case 5: digCorr(); break;
					case 6: symReplc('-'); break;
					case 7:	case 8:	case 9: digCorr(); break;
					case 10: symReplc('-'); break;
					case 11: case 12: case 13: case 14: digCorr(); break;
					case 15: tmpStr = tmpStr.slice(0, 15); break;}
				i = i + 1;}
			while (i<tmpStr.length);
			phoneInput[j].value = tmpStr;	}	}

	phoneInput[j].addEventListener("input", appMask, false);
	phoneInput[j].addEventListener("focus", appMask, false);
	phoneInput[j].addEventListener("blur", appMask, false);
	phoneInput[j].addEventListener("keydown", appMask, false)
}


/*
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('input[type="tel"]'), function(input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
  });
});
*/
