let burgBut = document.querySelectorAll("header .burgBut");burgBut=burgBut[0];
let wideMenu = document.querySelectorAll("header .wideMenu");wideMenu=wideMenu[0];
burgBut.onclick = function() {
	if (wideMenu.style.display == 'inline-block'){	wideMenu.style.display = null;
	}else{	wideMenu.style.display = 'inline-block';}	
	event.stopPropagation();}
document.addEventListener("click", function() { wideMenu.style.display = null;});


let Cred = document.querySelectorAll(".Cred");
for (let i = 0; i < Cred.length; i++) {
	let sumSlid = Cred[i].querySelectorAll("div.sumSlid");sumSlid = sumSlid[0];
	let timSlid = Cred[i].querySelectorAll("div.timSlid");timSlid = timSlid[0];
	let sumSlidInp = Cred[i].querySelectorAll("input.sumSlid");sumSlidInp = sumSlidInp[0];
	let timSlidInp = Cred[i].querySelectorAll("input.timSlid");timSlidInp = timSlidInp[0];
	sumSlidInp.value = '65000';timSlidInp.value = '8';
	let sumN = Cred[i].querySelectorAll(".sumN");sumN = sumN[0];
	let timN = Cred[i].querySelectorAll(".timN");timN = timN[0];
	
	let sumSlidTrak = document.createElement("div");sumSlidTrak.className = "slTrak";sumSlid.append(sumSlidTrak);
	let timSlidTrak = document.createElement("div");timSlidTrak.className = "slTrak";timSlid.append(timSlidTrak);
	let sumSlidTrakFl = document.createElement("div");sumSlidTrakFl.className = "slTrakFl";sumSlid.append(sumSlidTrakFl);
	let timSlidTrakFl = document.createElement("div");timSlidTrakFl.className = "slTrakFl";timSlid.append(timSlidTrakFl);
	function FormNum(Nm) {
		if (Nm>999){
			let oldG = Math.trunc(Nm/1000);
			let lowG = Nm-(oldG*1000);
			if (lowG<100){if (lowG<10){if(lowG==0){lowG='000';}else{lowG='00'+lowG;}}else{lowG='0'+lowG;}}
			return FormNum(oldG)+' '+lowG;
		} else {return Nm;}	}
	function TrakFl(Trak, Inp){
		Trak.style.width=(((Inp.value-Inp.min)*(Inp.scrollWidth-21))/(Inp.max-Inp.min))+10 +'px';
		sumN.innerText = FormNum(sumSlidInp.value)+' ₽';
		timN.innerText = timSlidInp.value+' дней';}
	sumSlidInp.oninput = function() { TrakFl(sumSlidTrakFl, this);};	TrakFl(sumSlidTrakFl, sumSlidInp);
	timSlidInp.oninput = function() { TrakFl(timSlidTrakFl, this);};	TrakFl(timSlidTrakFl, timSlidInp);
}




let howGet = document.querySelectorAll(".howGet");
for (let i = 0; i < howGet.length; i++) {
	let howGeTom = howGet[i].querySelectorAll(".wrap1>div:nth-child(3)>div>div");
	let img = howGet[i].querySelectorAll(".imG img");
	let SlidFl = howGet[i].querySelectorAll(".SlidFl"); SlidFl = SlidFl[0];
	for (let i = 0; i < howGeTom.length; i++) {
		function howGeTomClk(ind) {
			for (let i = 0; i < 4; i++) {
				if (ind>=i) {
					let Flen = 12.5 + 25*i;
					if (ind==3) {Flen = 100;}
					if (SlidFl.offsetWidth>SlidFl.offsetHeight) {
						SlidFl.style.width = Flen + '%';
					} else {
						SlidFl.style.height = Flen + '%';
					}
					howGeTom[i].className='lited';
					img[i].src="images/howGet" + (i + 1) + "or.png";
				} else {
					howGeTom[i].className='';
					img[i].src="images/howGet" + (i + 1) + "g.png";	}
			}
		}
		howGeTom[i].onclick = function() { howGeTomClk(i);	}
	}
	howGeTomClk(0);
}



let queAns = document.querySelectorAll(".queAns");
for (let i = 0; i < queAns.length; i++) {
	let qAns = queAns[i].querySelectorAll(".qAns");
	for (let i = 0; i < qAns.length; i++) {
		let qAnsN = qAns[i];
		let Ans = qAnsN.querySelector(".Ans");
		let ArrUp = qAnsN.querySelector(".ArrUp");
		let ArrDn = qAnsN.querySelector(".ArrDn");

		qAnsN.onclick = function() {
			qAnsN.classList.toggle("qAnsOpen");
			if (qAnsN.classList.contains("qAnsOpen")) {	Ans.style.height = heiAns + 'px';
			}else{	Ans.style.height = '0';	}	}

		let heiAns = 0;
		setTimeout(function(){heiAns = Ans.clientHeight;}, 100);
		setTimeout(function(){Ans.style.height = '0';}, 150);
				}	}
