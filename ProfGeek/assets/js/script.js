/* бургер-меню в заголовке*/

let burgerBut = document.getElementById('burgerBut');
burgerBut.onclick = function() {
		
	let blur = document.createElement("div");
	let header = document.getElementById('header');
	let burgerMenu = document.getElementById('burgerMenu');
	let burgerClos = document.getElementById('burgerClos');
	let burgMHead = document.getElementById('burgMHead');
	let burgMList = document.getElementById('burgMList');
	let selBut = document.getElementById('selBut');
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
/* бургер-меню в заголовке*/
let dWidth = 10000; /*заведомо большая ширина*/
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
					ArtTaskN.classList.add("Mob");
				}
			break;
			case (document.body.scrollWidth < 1040):
				if (!(ArtTaskN.classList.contains("tabLet"))) {
					div2Arr[1].prepend(Arr[2]);
					div2Arr[1].prepend(Arr[3]);
					div2Task[1].prepend(aTask[3]);
					div2Task[1].prepend(aTask[4]);
					div2Task[1].prepend(aTask[5]);
					ArtTaskN.classList.remove("Mob");
					ArtTaskN.classList.add("tabLet");
				}
			break;
			default:
				if ((ArtTaskN.classList.contains("tabLet"))||(ArtTaskN.classList.contains("Mob"))) {
					div2Arr[0].append(Arr[2]);
					div2Arr[0].append(Arr[3]);
					div2Task[0].append(aTask[3]);
					div2Task[0].append(aTask[4]);
					div2Task[0].append(aTask[5]);
					ArtTaskN.classList.remove("Mob");
					ArtTaskN.classList.remove("tabLet");
				}
			}
	}
	window.addEventListener('resize', function() { resAct();});
	resAct();
}
