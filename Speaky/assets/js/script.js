	/* радиокнопки - подчерк*/
let RadioUnder = document.querySelectorAll(".RadioUnder");
function RadioUn(RadioUnder) {
	let Rdiv = RadioUnder.querySelectorAll("div");
	for (let j = 0; j < Rdiv.length; j++) {
		let inp = Rdiv[j].querySelectorAll("input");
		if (inp[0].checked) { Rdiv[j].style.borderBottom = '4px solid #236967';
		} else { Rdiv[j].style.borderBottom = '4px solid #94C6C4';	}	}	}
		
for (let i = 0; i < RadioUnder.length; i++) {
	let Rdiv = RadioUnder[i].querySelectorAll("div");
	for (let j = 0; j < Rdiv.length; j++) {
		let inp = Rdiv[j].querySelectorAll("input");
		inp[0].addEventListener("change", function() { RadioUn(RadioUnder[i]);});
		RadioUn(RadioUnder[i]);	}	}
	/* радиокнопки - подчерк*/

/* Выбор пакетов обучения LearnPack */
let LearnPack = document.querySelectorAll(".LearnPack");
for (let i = 0; i < LearnPack.length; i++) {
	function PackCh () {
		let LPackStr = "LPack"; /* создаем строку фильтра*/
		let LPack = LearnPack[i].getElementsByClassName(LPackStr); /* node со всеми паками*/
		for (let i=0; i < RowMX.length; i++) {/*перебор массива инпутов*/
			for (let j=0; j < RowMX[i].length; j++) {/* value инпутов в состоянии checked добавляем к строке фильтра*/
					if (RowMX[i][j].checked) {	LPackStr = LPackStr + " " + RowMX[i][j].value;}	}	}
		if (LearnPack[i].getElementsByClassName(LPackStr).length == 0) { /* если результат фильтрации нулевой*/
			/*начинаем новый перебор и подстановку value инпутов в состоянии unchecked*/
			LPackStr = "LPack"; /* снова создаем строку фильтра*/
			for (let j=0; j < RowMX.length; j++) {
				for (let g=0; g < RowMX[i].length; g++) {
					if ( RowMX[j][g].name != this.name) { /*если ряд не текущий - выполняем коррекцию */
						if (RowMX[j][g].checked) {/* найденные инпуты в состоянии checked - отключаем*/
							RowMX[j][g].checked = false;
						} else {				/*инпуты в состоянии checked проверяем*/
							if (LearnPack[i].getElementsByClassName(LPackStr + " " + RowMX[j][g].value).length != 0) {
								RowMX[j][g].checked = true;/* если фильтр с этим инпутом дал ненулевой результат - включаем его*/
								LPackStr = LPackStr + " " + RowMX[j][g].value /* вставляем его встроку фильтра*/
								for (let i=0; i < RadioUnder.length; i++) { 
									/* и для каждого RadioUnder вызываем прорисовку подчерков*/
									RadioUn(RadioUnder[i]);
									} /* проверка прекращается на первом удачном варианте*/
								/*break;*/	}	}
					} else {/*если ряд текущий - value инпута в состоянии checked добавляем к строке фильтра*/
						if (RowMX[j][g].checked) {	LPackStr = LPackStr + " " + RowMX[j][g].value;	}	}	}	}	}
		let LPackS = LearnPack[i].getElementsByClassName(LPackStr); /* node с паками с классами инпутов в состоянии checked*/
		for (let i=0; i < LPack.length; i++) { LPack[i].style.display = 'none'; }
		for (let i=0; i < LPackS.length; i++) { LPackS[i].style.display = null; }
	}

	let RadioUnder = LearnPack[i].querySelectorAll(".RadioUnder");
	let RowMX = [];/* создаем массив для рядов инпутов-радиокнопок */
	for (let i=0; i < RadioUnder.length; i++) {
		let inp = RadioUnder[i].querySelectorAll("input");
		let InpMX = [];/* создаем подмассив для инпутов ряда*/
		for (let i=0; i < inp.length; i++) {
			InpMX.push(inp[i]);/* заполняем подмассив объектами инпутов*/
			inp[i].addEventListener("change", PackCh);/*на каждый инпут вешаем обработку PackCh события change */
		}
		RowMX.push(InpMX);/* заносим подмассив в ряд */
	}
	PackCh();
}
/* Выбор пакетов обучения LearnPack */

/* Выбор пакетов обучения LearnPack2 */
let LearnPack2 = document.querySelectorAll(".LearnPack2");
for (let i = 0; i < LearnPack2.length; i++) {

	let blur = document.createElement("div");
	blur.className = "blur";
	document.body.prepend(blur);

	let LrPk2Chn = LearnPack2[i].querySelectorAll(".LrPk2Chn"); /* ГЛОБАЛЬНАЯ чекбоксы выбора формата обучения*/
	let ChkMenuGr = LearnPack2[i].querySelectorAll(".ChkMenuGr"); /* ГЛОБАЛЬНАЯ группа меню*/
	let LPacks = LearnPack2[i].querySelectorAll(".LPacks"); /* ГЛОБАЛЬНАЯ группа пакетов*/
	let LearnPack2Cur = LearnPack2[i];

	let inpF = LrPk2Chn[0].querySelectorAll("input");
	for (let j = 0; j < inpF.length; j++) { /* перебор инпутов-чекбоксов*/
		inpF[j].addEventListener("change", FormatCh);	}/* вешаем функцию на изменение состояния чекбокса выбора формата обучения*/
	FormatCh();

	let ChkMenu = ChkMenuGr[0].getElementsByClassName("ChkMenu"); 
	for (let i = 0; i < ChkMenu.length; i++) {
	let inp = ChkMenu[i].querySelectorAll("INPUT");
		for (let i = 0; i < inp.length; i++) {
			inp[i].addEventListener("click", MenuCh); /*выбор в ChkMenu */
		}		
	}
	MenuCh();

/*		alert (`type=${this.type}  name=${this.name}  checked=${this.checked}`);*/
/*
<div class="LearnPack2 clearFlow">
	<p class="NxArTit">пакеты обучения</p>
	<h2>Выбирайте удобный формат встреч</h2>
	<div class="LrPk2Chn">
		<label><input type="checkbox" name="LearTyp" value="LearTyp"><div><h2>Вид обучения</h2></div></label>
		<label><input type="checkbox" name="ClasTyp" value="ClasTyp"><div><h2>Вид занятия</h2></div></label>
		<label><input type="checkbox" name="Durat" value="Durat"><div><h2>Длительность</h2></div></label>
		<div class="DotLine"></div>
	</div>
	<div class="ChkMenuGr">
		<div class="ChkMenu LearTyp"><div>
			<label><input type="radio" name="LearTyp" value="OffLine">Офлайн-занятия</label>
			<label><input type="radio" name="LearTyp" value="OnLine">Онлайн-занятия</label>
		</div></div>
	<div class="LPacks rowBlock">
		<div class="LPack LPack4 OffLine IndvL Min60">
			<h2>4 занятия по 60 мин</h2>
			<h2 class="price">5400 Р</h2>
			<button class="buttn" value="Выбрать004">Выбрать</button>
		</div>
*/		
	function MenuCh() { /*выбор в ChkMenu */
/*		alert (`type=${this.type}  name=${this.name}  value=${this.value} текст=${this.parentNode.textContent} checked=${this.checked}`);*/
		if (this.tagName=="INPUT") {
			let inpF = LrPk2Chn[0].querySelectorAll(`input[name="${this.name}"]`);
			if (inpF[0].nextSibling.firstChild.innerHTML.indexOf(':') == -1) {
				inpF[0].nextSibling.firstChild.innerHTML = inpF[0].nextSibling.firstChild.innerHTML + ':<br>' + this.parentNode.textContent;
			} else {
				inpF[0].nextSibling.firstChild.innerHTML = inpF[0].nextSibling.firstChild.innerHTML.slice(0, (inpF[0].nextSibling.firstChild.innerHTML.indexOf(':'))) + ':<br>' + this.parentNode.textContent;
			}
		}
		let ChkMenu = ChkMenuGr[0].getElementsByClassName("ChkMenu"); 
		for (let i = 0; i < ChkMenu.length; i++) {
			setTimeout(function(){	ChkMenu[i].style.visibility = 'hidden';}, 500);
			ChkMenu[i].style.opacity = '0';
			setTimeout(function(){	blur.style.display = 'none';}, 500);
			blur.style.opacity = '0';
			}
		inpF = LrPk2Chn[0].querySelectorAll("input");
		let ChBFlag = true;/* проверка - все ли  инпуты-чекбоксы включены*/
		for (let i = 0; i < inpF.length; i++) {	ChBFlag = ChBFlag && inpF[i].checked;}
		let LPackStr = "LPack"; /* создаем строку фильтра*/
		let LPack = LPacks[0].getElementsByClassName(LPackStr); /* node со всеми паками*/
		if (ChBFlag == true) {/*если все чекбоксы включены, выводим пакеты*/
			/*=========================*/
			let inp = ChkMenuGr[0].querySelectorAll("input"); /*массив всех инпутов во всех меню*/
			for (let i=0; i < inp.length; i++) {/*перебор массива инпутов*/
				if (inp[i].checked == true) {/*если инпут выбран, добавляем его value в строку фильтра*/
					LPackStr = LPackStr + " " + inp[i].value;	}	}
			let LPackF = LPacks[0].getElementsByClassName(LPackStr); /* node с отфильтрованными паками*/
				
				for (let i=0; i < LPack.length; i++) {/*перебор массива пакетов*/
					LPack[i].style.display = "none";
				}
				for (let i=0; i < LPackF.length; i++) {/*перебор массива пакетов*/
					LPackF[i].style.display = null;
				}
			/*============================*/
		} else{/*если не все чекбоксы включены, выключаем пакеты*/
			for (let i=0; i < LPack.length; i++) {/*перебор массива пакетов*/
				LPack[i].style.display = "none";
			}
		}
	}

	function FormatCh() {  /* изменение состояния чекбокса выбора формата обучения*/
		let tmpStr = "ChkMenu"
		if (this.tagName == 'INPUT') {tmpStr = tmpStr + " " + this.name;}/* меню с группой == имя нажатого чекбокса*/
		let ChkMenu = ChkMenuGr[0].getElementsByClassName(tmpStr); 
		for (let i = 0; i < ChkMenu.length; i++) {
			if (this.tagName == 'INPUT') {
				this.checked = true;
				ChkMenu[i].style.visibility = 'visible';
				ChkMenu[i].style.opacity = '1';
				blur.style.display = 'block';
				setTimeout(function(){	blur.style.opacity = '0.5';}, 1);
			}
		}	}

}
/* Выбор пакетов обучения LearnPack2 */

/*История развития Speaky school*/
	let HistSp = document.querySelectorAll(".HistSp");
	if (HistSp) {
		function HisDotLit(HstSp) {
			let HistInp = HstSp.querySelectorAll("input");
			let HistYa = HstSp.querySelectorAll("label > div:nth-child(2)");
			let HistDot = HstSp.querySelectorAll(".HistDot");
			let HistImg = HstSp.querySelectorAll(".HistSpDscr > div:nth-child(1) > img");
			let HistDsc = HstSp.querySelectorAll(".HistSpDscr > div:nth-child(1n+2)");
			/*alert(`${HistImg.length}  ${HistDsc.length}`);*/
			
			for (var i = 0; i < HistInp.length; i++) {
				if (HistInp[i].type == "radio" && HistInp[i].checked) {
					HistDot[i].classList.remove("HistUnChkd");
					HistDot[i].classList.add("HistChkd");
					HistYa[i].style.fontSize = '18px'; 
					HistImg[i].style.display = 'inline-block';
					HistDsc[i].style.display = 'inline-block';
					/*TestInd.value = `Value: ${HistInp[i].value}` Тестовая команда - убрать*/					
				} else {
					HistDot[i].classList.add("HistUnChkd");
					HistDot[i].classList.remove("HistChkd");
					HistYa[i].style.fontSize = ''; 
					HistImg[i].style.display = 'none'; 
					HistDsc[i].style.display = 'none'; 
				}
			}
		}
		for (var i = 0; i < HistSp.length; i++) {
			HistSp[i].onclick = function() { HisDotLit(this);}
			HisDotLit(HistSp[i]);
		}
	}
/*История развития Speaky school*/
	

/* бургер-меню в заголовке*/
/*
let blur = document.querySelectorAll(".blur");
*/
let burger = document.querySelectorAll("header.dispN > div:nth-child(2) > img");
let burgerM = document.getElementById('burgerM');
burger[0].onclick = function() {
	let blur = document.createElement("div");
	blur.className = "blur";
	document.body.prepend(blur);
	blur.style.display = 'block';
	setTimeout(function(){	blur.style.opacity = '0.5';}, 1);
	burgerM.style.display = 'block';
	blur.onclick = function() {
		blur.style.opacity = '0';
		setTimeout(function(){	blur.remove();}, 500);
		burgerM.style.display = null;	}	}


/* бургер-меню в заголовке*/
