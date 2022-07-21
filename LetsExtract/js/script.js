let HScrol = document.querySelectorAll(".HScrol");//элемент переключения
for (let i = 0; i < HScrol.length; i++) {
	let ScrlCont = HScrol[i].querySelector(".ScrlCont");
	let LArr = HScrol[i].querySelector(".LArr");
	let RArr = HScrol[i].querySelector(".RArr");
	let ScrlElem = ScrlCont.querySelectorAll(".ScrlCont>div");
	let scrolStep = ScrlCont.scrollWidth / ScrlElem.length;//шаг скроллинга
	//НАЧАЛО - стрелки вправо и влево	
	if (LArr) {LArr.onclick = function(){
		let tmp = (Math.trunc(ScrlCont.scrollLeft / scrolStep)) * scrolStep;
		ScrlCont.scrollTo({left: (tmp), behavior: 'smooth'});}	}//стрелка переключения влево

	if (RArr) {RArr.onclick = function(){
		let tmp = (Math.round(ScrlCont.scrollLeft / scrolStep)) * scrolStep + scrolStep;
		if (tmp > (ScrlCont.scrollWidth-scrolStep)) {tmp=ScrlCont.scrollWidth-scrolStep;}
		ScrlCont.scrollTo({left: (tmp), behavior: 'smooth'});}	}//стрелка переключения вправо
	//КОНЕЦ - стрелки вправо и влево	
}

//НАЧАЛО - коррекция таблицы - выполняется после загрузки страницы
window.addEventListener("load", function () {
let detCompare = document.querySelector(".detCompare");
let StatCont = detCompare.querySelector(".StatCont");
let ScrlCont = detCompare.querySelector(".ScrlCont");
let StatTr = StatCont.querySelectorAll("tr");
let ScrlTr = ScrlCont.querySelectorAll("tr");

if (StatTr.length==ScrlTr.length) {
	for (let i = 0; i < StatTr.length; i++) {
		let maxH = 0;
		if (maxH<StatTr[i].offsetHeight) {maxH = StatTr[i].offsetHeight;}
		if (maxH<ScrlTr[i].offsetHeight) {maxH = ScrlTr[i].offsetHeight};
		maxH++;
		StatTr[i].style.height = maxH + 'px';
		ScrlTr[i].style.height = maxH + 'px';}	}	})
//НАЧАЛО - коррекция таблицы - выполняется после загрузки страницы

