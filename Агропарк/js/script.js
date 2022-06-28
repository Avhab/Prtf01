
let HorScrl = document.querySelectorAll(".HorScrl");//элемент переключения
for (let i = 0; i < HorScrl.length; i++) {
	let ScrlCont = HorScrl[i].querySelectorAll(".ScrlCont");ScrlCont=ScrlCont[0];
	let ScrlElem = ScrlCont.querySelectorAll(".ScrlElem");
	//НАЧАЛО - коррекция ширины элементов для мультиразмерного скроллинга
	let getCSt = getComputedStyle(ScrlCont);getCSt = getCSt.height;getCSt=getCSt.slice(0, (getCSt.length - 2));
	let minStep = 100000;//минимальный шаг скроллинга
			//по классу и высоте контейнера ScrlCont определяем, нужна ли коррекция ширины элементов
	if ((ScrlCont.classList.contains("multSize"))&&(getCSt<500)) {
		for (let i = 0; i < ScrlElem.length; i++) {
				subElem = ScrlElem[i].querySelectorAll(".ScrlElem>div");
				let wScEl=0;
				for (let i = 0; i < subElem.length; i++) {
					let getCSt = getComputedStyle(subElem[i]);getCSt = getCSt.margin;
					getCSt = subElem[i].clientWidth+(getCSt.slice(0, (getCSt.length - 2))*2);
					if (minStep>getCSt){minStep=getCSt};
					wScEl= wScEl+minStep;	}
				ScrlElem[i].style.width = wScEl+'px';	}	}
	//КОНЕЦ - коррекция ширины элементов для мультиразмерного скроллинга
	if (minStep === 100000){minStep = ScrlElem[0].clientWidth;}
	let scrlStep = Math.trunc(ScrlCont.scrollWidth / minStep); //количество шагов скроллинга
	let curSld = 0;
	//НАЧАЛО - кнопки вправо и влево
	let butnL = HorScrl[i].querySelectorAll(".butnL");butnL=butnL[0];//кнопка переключения влево
	let butnR = HorScrl[i].querySelectorAll(".butnR");butnR=butnR[0];//кнопка переключения вправо
	if (butnL) {butnL.onclick = function(){
		let tmp = ScrlCont.scrollLeft - minStep;if (tmp<0) {tmp=0;};
		curSld = curSld + 1;if (curSld>scrlStep) {curSld=scrlStep;};
		ScrlCont.scrollTo({left: (tmp), behavior: 'smooth'});}	}//кнопка переключения влево
	if (butnR) {butnR.onclick = function(){
		let tmp = ScrlCont.scrollLeft + minStep;
		if (tmp > (ScrlCont.scrollWidth-minStep)) {tmp=ScrlCont.scrollWidth-minStep;}
		curSld = curSld - 1;if (curSld<0) {curSld=0;};
		ScrlCont.scrollTo({left: (tmp), behavior: 'smooth'});}	}//кнопка переключения вправо
	//КОНЕЦ - кнопки вправо и влево	
	
/*	alert (`scrollWidth=${ScrlCont.scrollWidth} clientWidth=${ScrlElem[0].clientWidth} scrlStep=${scrlStep}`);*/
	let radioBtnBlock = HorScrl[i].querySelectorAll(".radioBtnBlock");radioBtnBlock=radioBtnBlock[0];//определение блока радиокнопок
	//если блок радиокнопок существует
	if (radioBtnBlock) {
		//создание блока радиокнопок
		for (let i = 0; i < scrlStep; i++) {
			let tmp = document.createElement("div");tmp.className = "radioBtn";
			if (i==0) {tmp.classList.add('rbOn');}
			radioBtnBlock.append(tmp);	}
		let rBtn = radioBtnBlock.querySelectorAll(".radioBtn");//определение радиокнопок
		 //Обработка скролла
		ScrlCont.addEventListener("scroll", function (e) {
			let tmp = Math.round(ScrlCont.scrollLeft / ScrlElem[0].clientWidth); //текущее смещение шагов
	/*			alert (`scrollLeft=${ScrlCont.scrollLeft} clientWidth=${ScrlElem[0].clientWidth} curSld=${curSld}`);*/
			if (tmp!=curSld) {
				rBtn[curSld].classList.remove('rbOn');
				rBtn[tmp].classList.add('rbOn');
				curSld=tmp;	}	}); //Обработка скролла
		//клик на радиокнопке
		function radAct(ind) {
			let tmp=ScrlElem[0].clientWidth*ind;
			ScrlCont.scrollTo({left: (tmp), behavior: 'smooth'});}
		for (let i = 0; i < rBtn.length; i++) {
			rBtn[i].onclick= function(){ radAct(i);	}	}
	}
}

let ShowPart = document.querySelectorAll(".ShowPart");//разделы с неполностью показываемыми элементами
for (let i = 0; i < ShowPart.length; i++) {
	let roundMark = ShowPart[i].querySelectorAll(".roundMark");roundMark=roundMark[0];//кнопка переключения
	let ShowP = true;
	function ShowPSw(ShPart) {
		let ProdS = ShPart.querySelectorAll(".ProdS");//контейнер элементов
		for (let i = 0; i < ProdS.length; i++) {
			let Prod = ProdS[i].querySelectorAll(".Prod");//элементы
			let ShowQn = Math.trunc(ProdS[i].clientWidth / Prod[0].clientWidth);//количество показываемых элементов
			if (ShowQn==0){ShowQn=1;};//коррекция количества показываемых элементов - если вдруг получится 0
			for (let i = 0; i < Prod.length; i++) {
				if (i>=ShowQn){	if (ShowP){	Prod[i].style.display = 'none';	} else {Prod[i].style.display = null;}	}	}	}
		if (ShowP){ShowP=false;}else{ShowP=true;}	}
	roundMark.onclick = function(){ ShowPSw(ShowPart[i]);}
	ShowPSw(ShowPart[i]);	}

//НАЧАЛО - Сезонный календарь
let seasCaln = document.querySelector(".seasCaln");
if (seasCaln) {
	let TitLarg = seasCaln.querySelectorAll(".TitLarg");
	let ScrlContFrut = seasCaln.querySelector(".ScrlCont.Frut");//скролл-контейнер календаря фруктов
	let ScrlContVeg = seasCaln.querySelector(".ScrlCont.Veg");//скролл-контейнер календаря овощей
	let DBFrut = seasCaln.querySelector(".DBFrut");//база данных календаря фруктов
	let DBVeg = seasCaln.querySelector(".DBVeg");//база данных календаря овощей

//заполнение таблицы календаря
	function DBfil(DB, ScrlCont) {
	let DBstr = DB.textContent;
	let DBindex = 0;
	let ScrlContDiv = ScrlCont.querySelectorAll(".ScrlCont>div");
	for (let i = 0; i < ScrlContDiv.length; i++) {
		let tmp = document.createElement("div");//создание столбца
		tmp.className = "status";
		ScrlContDiv[i].append(tmp);
		for (let Yind = 0; Yind < 12;) {
			let Stat = DBstr.substr(DBindex, 1);
			if (Stat==='0') {let tmp1 = document.createElement("div");tmp.append(tmp1);Yind++;
			}else{if (Stat==='1') {let tmp1 = document.createElement("div");tmp1.className = "On";tmp.append(tmp1);Yind++;}	}
			if (DBindex<DBstr.length){DBindex++;}else{break;}}	}	}
	DBfil(DBFrut, ScrlContFrut);//заполнение таблицы календаря фруктов
	DBfil(DBVeg, ScrlContVeg);//заполнение таблицы календаря овощей

	TitLarg[2].onclick = function(){
		if (TitLarg[2].classList.contains("Veg")){
			TitLarg[2].classList.remove("Veg");
			TitLarg[3].style.color='#00A649';
			TitLarg[1].style.color=null;
			ScrlContVeg.style.display='none';
			ScrlContFrut.style.display=null;
		}else{
			TitLarg[2].classList.add("Veg");
			TitLarg[1].style.color='#00A649';
			TitLarg[3].style.color=null;
			ScrlContVeg.style.display=null;
			ScrlContFrut.style.display='none';	}	}
	TitLarg[3].style.color='#00A649';
	ScrlContVeg.style.display='none';
	
	let ScrlCont = seasCaln.querySelectorAll(".ScrlCont");
	for (let i = 0; i < ScrlCont.length; i++) {
		let ScrlContDiv = ScrlCont[i].querySelectorAll(".ScrlCont>div");
		for (let i = 0; i < ScrlContDiv.length; i++) {
			ScrlContDiv[i].onmouseover = function(){
				let toolTip = this.querySelector(".toolTip");
				if (!toolTip) {
					let tmp = document.createElement("div");
					tmp.className = "toolTip";
					tmp.style.opacity = 0;
					tmp.style.transitionDuration = '0.2s';
					this.prepend(tmp);
					let Toc = this.querySelector(".Toc");
					let str = Toc.innerHTML;
					str = str.substring(0, (str.indexOf('.png')));
					str = str.slice((str.lastIndexOf("/")+1));
					let tmp1 = document.createElement("div");tmp1.textContent = str;
					tmp.prepend(tmp1);
					setTimeout( function() {tmp.style.opacity = 1;}, 10);
					tmp.style.left = (Math.trunc(ScrlContDiv[i].clientWidth - tmp.clientWidth)/2) + 'px';}	}
			ScrlContDiv[i].onmouseout = function(){
				let toolTip = this.querySelector(".toolTip");
				if (toolTip) {toolTip.style.opacity = 0;
					setTimeout( function() {toolTip.remove();}, 200);}	}
		}
	}
}
//КОНЕЦ - Сезонный календарь
	
//НАЧАЛО - бургер меню
let header = document.querySelector("header");
let wideMenu = header.querySelector(".wideMenu");
let burgMenu = header.querySelector(".burgMenu");
let burgBut = header.querySelector(".burgBut");
let Menu1 = wideMenu.querySelector(".Menu1");
let DropR = wideMenu.querySelector(".DropR");
let ClosCrs = burgMenu.querySelector(".ClosCrs");
let footDropR = document.querySelector(".footDropR");
	let clone = DropR.cloneNode(true);
	burgMenu.appendChild(clone);//копирование в бургер меню
	clone = Menu1.cloneNode(true);
	burgMenu.appendChild(clone);//копирование в бургер меню
	clone = DropR.cloneNode(true);
	footDropR.appendChild(clone);//копирование в футер
	
burgMenu.style.transitionDuration = '0.3s';

burgBut.onclick = function(){
	burgMenu.style.display='block';
	setTimeout( function() {burgMenu.style.opacity='1';}, 10);	}
burgMenu.onclick = function(){
	burgMenu.style.opacity='0';
	setTimeout( function() {
		burgMenu.style.display=null;
		burgBut.style.visibility=null;}, 300);	}
//КОНЕЦ - бургер меню

//НАЧАЛО - переключение картинок с радиокнопками и кнопками право лево
let switButt = document.querySelectorAll(".switButt");
for (let i = 0; i < switButt.length; i++) {
	let butnL = switButt[i].querySelector(".butnL");
	let butnR = switButt[i].querySelector(".butnR");
	let curN = switButt[i].querySelector(".curN");
	let allN = switButt[i].querySelector(".allN");
	let switchImg = switButt[i].querySelectorAll(".switchImg");
	let Btns = switButt[i].querySelector(".Btns");
	let currBut = 0; //текущий номер активной радиокнопки

	for (let i = 0; i < switchImg.length; i++) {if (i!=currBut) {switchImg[i].style.display = 'none';}} //отключение неактивных слайдов
	if (Btns.classList.contains("HeightCorr")) {Btns.style.height = (switchImg.length*32 + 28) + 'px';}//коррекция высоты блока радиокнопок - с классом HeightCorr
	for (let i = 0; i < switchImg.length; i++) { //создание радиокнопок
		let tmp = document.createElement("div");
		Btns.append(tmp);
		tmp.classList.add('rBtn');}
	let rBtn = switButt[i].querySelectorAll(".rBtn");
	for (let i = 0; i < rBtn.length; i++) {	if (i==currBut) {rBtn[i].classList.add('On');}}//класс для включенной радиокнопки
	
	function TwoNum(elem, numb) {	if ((elem)&&(numb)) {	if (numb>9) {elem.textContent = numb;} else {elem.textContent = '0'+numb;}	}	}
	function rBtnOff() {rBtn[currBut].classList.remove('On');switchImg[currBut].style.display = 'none';}
	function rBtnOn() {rBtn[currBut].classList.add('On');switchImg[currBut].style.display = null;}

	for (let i = 0; i < switchImg.length; i++) {	//клик по радиокнопке
		rBtn[i].onclick = function(){rBtnOff();currBut = i;rBtnOn();TwoNum(curN, (currBut + 1));	}}
	if (butnL) {butnL.onclick = function(){	if(currBut>0) {rBtnOff();	--currBut;rBtnOn();TwoNum(curN, (currBut + 1));}}}
	if (butnR) {butnR.onclick = function(){	if(currBut<(switchImg.length-1))  {rBtnOff();++currBut;rBtnOn();TwoNum(curN, (currBut + 1));}}}

	let shattleBtns = switButt[i].querySelector(".shattleBtns");//позиционирование радиокнопок по окружности - кольцу шаттла
	if (shattleBtns) {
		if (document.documentElement.clientWidth<1000) {
			let angleStep = 1.1 / switchImg.length; //шаг радиокнопок на шаттле в радианах
			let angleCurr = -0.5; //установка позиции первой радиокнопки на шаттле в радианах
			if (switchImg.length<4) {angleCurr = -0.5;angleStep = 0.4; }//коррекция в случае малого количества радиокнопок
			if (switchImg.length>9) {allN.textContent = '/'+(switchImg.length);} else {allN.textContent = '/0'+(switchImg.length);}
			for (let i = 0; i < switchImg.length; i++) {//позиционирование радиокнопок по окружности - кольцу шаттла
				let leftPos = 241 + Math.sin(angleCurr)*266;
				let topPos = 241 - Math.cos(angleCurr)*266;
				rBtn[i].style.left = leftPos + 'px';
				rBtn[i].style.top = topPos + 'px';
				angleCurr = angleCurr + angleStep;}
		} else {
			let angleStep = 1.3 / switchImg.length; //шаг радиокнопок на шаттле в радианах
			let angleCurr = -0.6; //установка позиции первой радиокнопки на шаттле в радианах
			if (switchImg.length<4) {angleCurr = 0;angleStep = 0.5; }//коррекция в случае малого количества радиокнопок
			if (switchImg.length>9) {allN.textContent = '/'+(switchImg.length);} else {allN.textContent = '/0'+(switchImg.length);}
			for (let i = 0; i < switchImg.length; i++) {//позиционирование радиокнопок по окружности - кольцу шаттла
				let leftPos = 724 - Math.cos(angleCurr)*750;
				let topPos = 725 + Math.sin(angleCurr)*(-750);
				rBtn[i].style.left = leftPos + 'px';
				rBtn[i].style.top = topPos + 'px';
				angleCurr = angleCurr + angleStep;}			
		}
	}
}
//КОНЕЦ - переключение картинок с радиокнопками и кнопками право лево


//НАЧАЛО - превращение набора div со ссылками в выпадающий список
let DropRefs = document.querySelectorAll(".DropRefs");//наборы с классом DropRefs
//функция разворачивания спискa
function DropListOn(ListHeader, DropList){
	DropList.style.display = null;
	ListHeader.classList.remove('arrDown');
	ListHeader.classList.add('arrUp');	}
//функция сворачивания спискa
function DropListOff(ListHeader, DropList){
	DropList.style.display ='none';
	ListHeader.classList.remove('arrUp');
	ListHeader.classList.add('arrDown');	}
//функция разворачивания и сворачивания списков
function DropListTog(DropRef){
	for (let i = 0; i < DropRefs.length; i++) {
		let ListHeader = DropRefs[i].querySelector(".ListHeader");//заголовок списка
		let DropList = DropRefs[i].querySelector(".DropList");//контейнер списка
		let RefS = DropRefs[i].querySelectorAll(".DropRefs>div");//члены списка
		if (RefS.length>1) {
			if (DropRefs[i]==DropRef) {
				if (DropList.style.display =='none') {DropListOn(ListHeader, DropList);}else{DropListOff(ListHeader, DropList);}
			} else {DropListOff(ListHeader, DropList);}
		}
	}	}

for (let i = 0; i < DropRefs.length; i++) {
	let RefS = DropRefs[i].querySelectorAll(".DropRefs>div");//члены списка
	if (RefS.length>1) {
		let ahRef = RefS[0].querySelector("a");
		let tmp = document.createElement("div");tmp.className = "arrDown ListHeader";//создание заголовка списка из первого члена
		tmp.textContent = ahRef.textContent;
		DropRefs[i].prepend(tmp);
		let ListHeader = DropRefs[i].querySelector(".ListHeader");//заголовок списка
		tmp = document.createElement("div");tmp.className = "DropList";//создание контейнера для списка
		DropRefs[i].append(tmp);
		let DropList = DropRefs[i].querySelector(".DropList");//контейнер списка
		for (let i = 0; i < RefS.length; i++) {	DropList.append(RefS[i]);}//перемещаем членов в контейнер
		DropList.style.display ='none';
		ListHeader.onclick = function(){ DropListTog(DropRefs[i]);	event.stopPropagation();}
		document.addEventListener("click", function() { DropListTog();});	}	}
//КОНЕЦ - превращение набора div со ссылками в выпадающий список

//изменяем порядок элементов в футере при размере экрана менее 700
if (document.documentElement.clientWidth<700) {
	let footDiv = document.querySelectorAll("footer .Menu2>div");
	if (footDiv.length==3) {footDiv[1].after(footDiv[0]);}
}
