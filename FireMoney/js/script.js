let Cred = document.querySelectorAll(".Cred");
for (let i = 0; i < Cred.length; i++) {
	let sumSlid = Cred[i].querySelectorAll("div.sumSlid");sumSlid = sumSlid[0];
	let timSlid = Cred[i].querySelectorAll("div.timSlid");timSlid = timSlid[0];
	let sumSlidInp = Cred[i].querySelectorAll("input.sumSlid");sumSlidInp = sumSlidInp[0];
	let timSlidInp = Cred[i].querySelectorAll("input.timSlid");timSlidInp = timSlidInp[0];
	sumSlidInp.value = '20000';timSlidInp.value = '8';
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
		Trak.style.width=((Inp.value-Inp.min)*Inp.scrollWidth)/(Inp.max-Inp.min)+'px';
		sumN.innerText = FormNum(sumSlidInp.value)+' ₽';
		timN.innerText = timSlidInp.value+' дней';}
	sumSlidInp.oninput = function() { TrakFl(sumSlidTrakFl, this);};	TrakFl(sumSlidTrakFl, sumSlidInp);
	timSlidInp.oninput = function() { TrakFl(timSlidTrakFl, this);};	TrakFl(timSlidTrakFl, timSlidInp);
}

let howGeTom = document.querySelectorAll(".howGet .wrap1>div:nth-child(3)>div>div");
let SlidFl = document.querySelectorAll(".howGet .wrap1>div.SlidFl"); SlidFl = SlidFl[0];
for (let i = 0; i < howGeTom.length; i++) {
	function howGeTomClk(ind) {
		for (let i = 0; i < 4; i++) {
			if (ind>=i) {
				let Flen = 12.5 + 25*i;
				if (ind==3) {Flen = 100;}
				SlidFl.style.width = Flen + '%';
				howGeTom[i].className='lited';
			} else {howGeTom[i].className='';}
		}
	}
	howGeTom[i].onclick = function() { howGeTomClk(i);	}
}
howGeTomClk(0);


let queAns = document.querySelectorAll(".queAns");
for (let i = 0; i < queAns.length; i++) {
	let qAns = queAns[i].querySelectorAll(".qAns");
	for (let i = 0; i < qAns.length; i++) {
		let Ans = qAns[i].querySelectorAll(".Ans");Ans = Ans[0];
		let ArrUp = qAns[i].querySelectorAll(".ArrUp");ArrUp = ArrUp[0];
		let ArrDn = qAns[i].querySelectorAll(".ArrDn");ArrDn = ArrDn[0];
		let qAnsN = qAns[i];
		ArrDn.onclick = function() {
			qAnsN.style.background = 'linear-gradient(269deg, #FFC83E -5%, #FF7347 52%)';
			ArrUp.style.display = 'inline-block';
			ArrDn.style.display = 'none';
			Ans.style.display = 'inline-block';
			setTimeout(function(){Ans.style.opacity = '1';Ans.style.transform = 'scaleY(1)';}, 20);
			qAnsN.style.color = 'white';}
		ArrUp.onclick = function() {
			ArrUp.style.display = 'none';
			ArrDn.style.display = null;
			Ans.style.opacity = '0';
			Ans.style.transform = 'scaleY(0.1)';
			setTimeout(function(){
				qAnsN.style.background = null;
				Ans.style.display = 'none';
				qAnsN.style.color = null;
				}, 300);
			}
		ArrUp.style.display = 'none';
		Ans.style.display = 'none';
		Ans.style.transform = 'scaleY(0.1)';
		Ans.style.opacity = '0';		
				}	}

