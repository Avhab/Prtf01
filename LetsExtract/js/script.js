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
