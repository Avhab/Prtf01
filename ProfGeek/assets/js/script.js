/*
let wrapRu = document.getElementById('wrapRu');
let wrapEng = document.getElementById('wrapEng');
let wrapTur = document.getElementById('wrapTur');
let wrapChina = document.getElementById('wrapChina');
*/
/* бургер-меню в заголовке --->>> */
let burgerBut = document.getElementById('burgerBut');
let selBut = document.getElementById('selBut');
burgerBut.onclick = function() {
		
	let blur = document.createElement("div");
	let header = document.getElementById('header');
	let burgerMenu = document.getElementById('burgerMenu');
	let burgerClos = document.getElementById('burgerClos');
	let burgMHead = document.getElementById('burgMHead');
	let burgMList = document.getElementById('burgMList');
	let heIt = document.getElementById('heIt');
	
	function burgMenClos() {
		blur.style.opacity = '0';
		burgerMenu.style.transform = 'scale(0.1)';
		setTimeout(function(){blur.remove(); burgerMenu.style.display = null;}, 300);
		burgerBut.style.display = null;
		header.append(selBut);
		header.append(heIt);
		selBut.style.display = null;
		heIt.style.display = null;}

	blur.className = "blur pnkGrad";
	document.body.prepend(blur);
	burgerBut.style.display = 'none';
	blur.style.display = 'block';
	burgerMenu.style.display = 'block';
	setTimeout(function(){burgerMenu.style.transform = 'scale(1)';blur.style.opacity = '0.8';}, 10);
	burgMHead.append(selBut);
	burgMList.prepend(heIt);
	selBut.style.display = 'block';
	heIt.style.display = 'block';
	burgerClos.onclick = function() { burgMenClos();}
	blur.onclick = function() { burgMenClos();}
	setTimeout(function(){blur.onmouseover = function() { burgMenClos();}}, 200);
	let aburdL = burgMList.querySelectorAll("a");
	for (var i = 0; i < aburdL.length; i++) {aburdL[i].onclick = function() { burgMenClos();}}
}
/* >>>--- бургер-меню в заголовке*/
/* выпадающее-меню в заголовке --->>> */
let selButMenu = document.createElement("div");
selBut.append(selButMenu);
let selButMenuItm1 = document.createElement("div");
let selButMenuItm2 = document.createElement("div");
let selButMenuItm3 = document.createElement("div");
let selButMenuItm4 = document.createElement("div");
let selButMenuItm11 = document.createElement("div");
let selButMenuItm21 = document.createElement("div");
let selButMenuItm31 = document.createElement("div");
let selButMenuItm41 = document.createElement("div");
selButMenuItm11.innerHTML = 'Ru';
selButMenuItm21.innerHTML = 'Eng';
selButMenuItm31.innerHTML = 'Tur';
selButMenuItm41.innerHTML = 'China';
selButMenu.append(selButMenuItm1);
selButMenu.append(selButMenuItm2);
selButMenu.append(selButMenuItm3);
selButMenu.append(selButMenuItm4);
selButMenuItm1.append(selButMenuItm11);
selButMenuItm2.append(selButMenuItm21);
selButMenuItm3.append(selButMenuItm31);
selButMenuItm4.append(selButMenuItm41);
let MenBut = selBut.querySelectorAll("button");
function selMeOff() {
	selButMenu.style.transform = 'scaleY(0.1)';
	setTimeout(function(){selButMenu.style.display = null;}, 300);}
function selMeOn() {
	selButMenu.style.display = 'block';
	setTimeout(function(){selButMenu.style.transform = 'scaleY(1)';}, 10);}
function selMeTogg() {if (selButMenu.style.display == 'block'){selMeOff();} else {selMeOn();}}
MenBut[0].onclick = function() { selMeTogg();event.stopPropagation();};	
function ChgSelButM(itm) {MenBut[0].innerHTML = MenBut[0].innerHTML.slice(0, (MenBut[0].innerHTML.indexOf('>', 0) + 1)) + itm.innerText;}
selButMenuItm1.onclick = function() {ChgSelButM(this);window.location.href = 'index.html';};
selButMenuItm2.onclick = function() {ChgSelButM(this);window.location.href = 'index-Eng.html';};
selButMenuItm3.onclick = function() {ChgSelButM(this);window.location.href = 'index-Tur.html';};
selButMenuItm4.onclick = function() {ChgSelButM(this);window.location.href = 'index-China.html';};
document.addEventListener("click", function() { selMeOff();});
/* >>>--- выпадающее-меню в заголовке*/
/* чат --->>> */
let BigBut = document.querySelectorAll('.BigBut');
let Chat = document.getElementById('Chat');
let ChatBody = document.getElementById('ChatBody');
let ChatMess = document.getElementById('ChatMess');
let button = ChatMess.querySelectorAll('button');
let input = ChatMess.querySelectorAll('input');
input = input[0];
input.value = '';
function OpnChat() {
	Chat.style.display = 'block';
	input.focus();
	setTimeout(function(){ Chat.style.transform = 'scale(1)';}, 10);}
function ClsChat() {
	setTimeout(function(){ Chat.style.display = null;}, 250);
	Chat.style.transform = null;}
for (let i = 0; i < BigBut.length; i++) {
	BigBut[i].onclick = function() {
		if (Chat.style.display == 'block') {ClsChat();} else {OpnChat();}
		event.stopPropagation();
		}	}
Chat.onclick = function() {event.stopPropagation();}

input.onchange = function() {
	let MesCli = document.createElement("div");
	MesCli.className = 'MesCli pnkGrad';
		MesCli.innerHTML = input.value;
		input.value = '';
		ChatBody.append(MesCli);
		ChatBody.scrollTop = ChatBody.scrollHeight - ChatBody.clientHeight;
		setTimeout(function(){input.focus();}, 100);
		/* тестовый ответ оператора --->>> */
			setTimeout(function(){ 
			let MesOpr = document.createElement("div");
			MesOpr.className = 'MesOpr bluGrad';
			MesOpr.innerHTML = "Здравствуйте, Вы всегда можете задать нам интересующий Вас вопрос.";
			ChatBody.append(MesOpr);
			ChatBody.scrollTop = ChatBody.scrollHeight - ChatBody.clientHeight;
				}, 400);
		/* >>>--- тестовый ответ оператора */
}
document.addEventListener("click", function() {if (Chat.style.display == 'block') {ClsChat();}});
/*  >>>--- чат */

let MainServ = document.querySelectorAll(".MainServ");
for (let i = 0; i < MainServ.length; i++) {
	let MainSer = MainServ[i];
	let MSLogi = document.getElementById('MSLogi');
	let MSBuy = document.getElementById('MSBuy');
	let MSLogist = document.getElementById('MSLogist');
	let MSBuyer = document.getElementById('MSBuyer');
	function MSLogiON() {
		MSLogi.style.background = '#1A1B20';
		MSBuy.style.background = null;
		MSLogist.style.display = null;
		MSBuyer.style.display = 'none';	}
	function MSBuyON() {
		MSLogi.style.background = null;
		MSBuy.style.background = '#1A1B20';
		MSLogist.style.display = 'none';
		MSBuyer.style.display = null;}
	MSLogi.onclick = function() { MSLogiON();}
	MSBuy.onclick = function() { MSBuyON();}
	MSLogiON()
}

let ArtTask = document.querySelectorAll(".LogTask .ArtTask");
for (var i = 0; i < ArtTask.length; i++) {
	let div1Cnt = ArtTask[i].querySelectorAll(".div1Cnt");
	let div2Arr = ArtTask[i].querySelectorAll(".div2Arr");
	let ArtTaskN = ArtTask[i];
	let div2Task = ArtTask[i].querySelectorAll(".div2Task");
	let Arr = ArtTask[i].querySelectorAll(".Arr");
	let aTask = ArtTask[i].querySelectorAll(".aTask");
	function resAct() {
		switch (true) {
			case (document.body.scrollWidth < 700):
				if (!(ArtTaskN.classList.contains("Mob"))) {
					div2Task[1].prepend(aTask[5]);
					div2Task[1].prepend(aTask[4]);
					div2Task[1].prepend(aTask[3]);
					ArtTaskN.classList.remove("tabLet");
					ArtTaskN.classList.add("Mob");	}
				break;
			case (document.body.scrollWidth < 1040):
				if (!(ArtTaskN.classList.contains("tabLet"))) {
					div2Arr[1].prepend(Arr[2]);
					div2Arr[1].prepend(Arr[3]);
					div2Task[1].prepend(aTask[3]);
					div2Task[1].prepend(aTask[4]);
					div2Task[1].prepend(aTask[5]);
					ArtTaskN.classList.remove("Mob");
					ArtTaskN.classList.add("tabLet");	}
				break;
			default:
				if ((ArtTaskN.classList.contains("tabLet"))||(ArtTaskN.classList.contains("Mob"))) {
					div2Arr[0].append(Arr[2]);
					div2Arr[0].append(Arr[3]);
					div2Task[0].append(aTask[3]);
					div2Task[0].append(aTask[4]);
					div2Task[0].append(aTask[5]);
					ArtTaskN.classList.remove("Mob");
					ArtTaskN.classList.remove("tabLet");	}
		}
	}
	window.addEventListener('resize', function() { resAct();});
	resAct();
}

let NewS = document.querySelectorAll(".NewS");
for (let i = 0; i < NewS.length; i++) {
	let flNoteS = NewS[i].querySelectorAll(".flNote");
	let NewsButtnS = NewS[i].querySelectorAll("button.pnkGrad");

	function flNotTog(thisNBut) {
		for (let i = 0; i <  NewsButtnS.length; i++) {
			if (NewsButtnS[i]==thisNBut) {
				thisNBut.classList.add("ClouTun");
				flNoteS[i].style.display = 'block';
				setTimeout(function(){ flNoteS[i].style.transform = 'scale(1)';}, 10);					
			} else {
				if (NewsButtnS[i].classList.contains("ClouTun")) {
					NewsButtnS[i].classList.remove("ClouTun");
					flNoteS[i].style.transform = 'scale(0.1)';
					setTimeout(function(){ flNoteS[i].style.display = null;}, 250);	}	}	}	}

	for (let i = 0; i <  NewsButtnS.length; i++) {
		NewsButtnS[i].onclick = function() {
			flNotTog(this);
			event.stopPropagation();}	}
	document.addEventListener("click", function() { flNotTog();});
}

/*
wrapEng.style.display = 'none';
wrapTur.style.display = 'none';
wrapChina.style.display = 'none';
*/
