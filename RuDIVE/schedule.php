<!DOCTYPE HTML>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RuDIVE</title>

  <link type = "text/css" rel="stylesheet" href="css/reset.css">
  <link type = "text/css" rel="stylesheet" href="css/styles.css">

</head>

<body>

<header>
	<?php include "rudive-header.php"; ?>
</header>

<script type="text/javascript" src="js/seTem.js"></script>

<div class="txt1">
	<div class="wrapG">Клубные поездки — групповые путешествия во главе с клубным турлидером под флагом RuDIVE. Мы заранее выбираем направление поездки, лучший сезон, яхту или отель с дайвинг-центром и рассчитываем программу, исходя из нашего многолетнего опыта в дайвинг-путешествиях по всему миру.
	<br><br>
	Плюсы поездок с клубом: выверенная программа, интересная компания, новые и старые друзья, участие турлидера — инструктора PADI, который обеспечивает безопасность, учебный процесс, клубную атмосферу, решение проблем на суше и под водой. Расписание клубных дайвинг-туров динамично меняется в силу новых идей и возможностей, в него постоянно добавляются новые поездки. Мы стараемся планировать расписание групповых туров на год вперед.
	</div>
</div>

<div class="wrapG">
	<form class="filtr hCont">
		<div class="mnUnt">
			<div class="nam">Вид тура</div>
			<div class="dropSel">
				<input type="text" name="Вид_тура" value="Любой">
				<div class="lsOpt">
					<div>Вид тура 1</div>
					<div>Вид тура 2</div>
					<div>Вид тура 3</div>
					<div>Вид тура 4</div>
				</div>
			</div>
		</div>
		<div class="mnUnt">
			<div class="nam">Регион</div>
			<div class="dropSel">
				<input type="text" name="Регион" value="Любой">
				<div class="lsOpt">
					<div>Регион 1</div>
					<div>Регион 2</div>
					<div>Регион 3</div>
					<div>Регион 4</div>
				</div>
			</div>
		</div>
		<div class="mnUnt">
			<div class="nam">Суда, отели, базы</div>
			<div class="dropSel">
				<input type="text" name="отели" value="Любой">
				<div class="lsOpt">
					<div>Вид тура 1</div>
					<div>Вид тура 2</div>
					<div>Вид тура 3</div>
					<div>Вид тура 4</div>
				</div>
			</div>
		</div>
		<div class="mnUnt">
			<div class="nam">Турлидер</div>
			<div class="dropSel">
				<input type="text" name="Турлидер" value="Любой">
				<div class="lsOpt">
					<div>Турлидер 1</div>
					<div>Турлидер 2</div>
					<div>Турлидер 3</div>
					<div>Турлидер 4</div>
				</div>
			</div>
		</div>
		<div class="mnUnt">
			<div class="nam">Месяц</div>
			<div class="dropSel">
				<input type="text" name="Месяц" value="Любой">
				<div class="lsOpt">
					<div>январь</div>
					<div>февраль</div>
					<div>март</div>
					<div>апрель</div>
					<div>май</div>
					<div>июнь</div>
					<div>июль</div>
					<div>август</div>
					<div>сентябрь</div>
					<div>октябрь</div>
					<div>ноябрь</div>
					<div>декабрь</div>
				</div>
			</div>
		</div>
		<div class="mnUnt">
			<div class="nam">Сортировать по</div>
			<div class="dropSel">
				<input type="text" name="Сортировать" value="Любой">
				<div class="lsOpt">
					<div>Вид тура</div>
					<div>Регион</div>
					<div>Суда, отели, базы</div>
					<div>Турлидер</div>
					<div>Месяц</div>
				</div>
			</div>
		</div>
		<div class="mnUnt">
			<div class="nam">Порядок</div>
			<div class="dropSel">
				<input type="text" name="Порядок" value="Любой">
				<div class="lsOpt">
					<div>по возрастанию</div>
					<div>по убыванию</div>
				</div>
			</div>
		</div>
		<div class="mnUnt">
			<div class="nam"></div>
			<input class="button redBut" type="submit" value="Применить фильтр">
		</div>
	</form>
</div>

<div>
	<div class="wrapG">
		<div class="shedList vCont">
			<div class="mnUnt hCont">
				<div class="imgCont"><img src="images/ride001.jpg"></div>
				<div class="nPrice vCont">
					<div class="nam bottLine">Дайвинг с мантами и акулами на Мальдивах</div>
					<div class="leftIcon price bottLine">от 1900 $</div>
				</div>
				<div class="butCont vCont">
					<a class="button bigBut redBut" href="#">Записаться</a>
					<a class="button bigBut whiteBut" href="rideCard001.php">Подробнее</a>
				</div>
				<div class="anDat hContSt">
					<div class="leftIcon calendar">21 сентября - 1 октября</div>
					<div class="leftIcon leader">Турлидер: Екатерина Кусачева</div>
					<div class="leftIcon tourguide">Инструктор: Екатерина Кусачева</div>
				</div>
			</div>
			<div class="mnUnt mnUnt hCont">
				<div class="imgCont"><img src="images/ride002.jpg"></div>
				<div class="nPrice vCont">
					<div class="nam bottLine">Дайвинг с мантами и акулами на Мальдивах</div>
					<div class="leftIcon price bottLine">от 1900 $</div>
				</div>
				<div class="butCont vCont">
					<a class="button bigBut redBut" href="#">Записаться</a>
					<a class="button bigBut whiteBut" href="rideCard001.php">Подробнее</a>
				</div>
				<div class="anDat hContSt">
					<div class="leftIcon calendar">21 сентября - 1 октября</div>
					<div class="leftIcon leader">Турлидер: Екатерина Кусачева</div>
					<div class="leftIcon tourguide">Инструктор: Екатерина Кусачева</div>
				</div>
			</div>
			<div class="mnUnt mnUnt hCont">
				<div class="imgCont"><img src="images/ride003.jpg"></div>
				<div class="nPrice vCont">
					<div class="nam bottLine">Дайвинг с мантами и акулами на Мальдивах</div>
					<div class="leftIcon price bottLine">от 1900 $</div>
				</div>
				<div class="butCont vCont">
					<a class="button bigBut redBut" href="#">Записаться</a>
					<a class="button bigBut whiteBut" href="rideCard001.php">Подробнее</a>
				</div>
				<div class="anDat hContSt">
					<div class="leftIcon calendar">21 сентября - 1 октября</div>
					<div class="leftIcon leader">Турлидер: Екатерина Кусачева</div>
					<div class="leftIcon tourguide">Инструктор: Екатерина Кусачева</div>
				</div>
			</div>
			<div class="mnUnt mnUnt hCont">
				<div class="imgCont"><img src="images/ride004.jpg"></div>
				<div class="nPrice vCont">
					<div class="nam bottLine">Дайвинг с мантами и акулами на Мальдивах</div>
					<div class="leftIcon price bottLine">от 1900 $</div>
				</div>
				<div class="butCont vCont">
					<a class="button bigBut redBut" href="#">Записаться</a>
					<a class="button bigBut whiteBut" href="rideCard001.php">Подробнее</a>
				</div>
				<div class="anDat hContSt">
					<div class="leftIcon calendar">21 сентября - 1 октября</div>
					<div class="leftIcon leader">Турлидер: Екатерина Кусачева</div>
					<div class="leftIcon tourguide">Инструктор: Екатерина Кусачева</div>
				</div>
			</div>
			<div class="mnUnt mnUnt hCont">
				<div class="imgCont"><img src="images/ride005.jpg"></div>
				<div class="nPrice vCont">
					<div class="nam bottLine">Дайвинг с мантами и акулами на Мальдивах</div>
					<div class="leftIcon price bottLine">от 1900 $</div>
				</div>
				<div class="butCont vCont">
					<a class="button bigBut redBut" href="#">Записаться</a>
					<a class="button bigBut whiteBut" href="rideCard001.php">Подробнее</a>
				</div>
				<div class="anDat hContSt">
					<div class="leftIcon calendar">21 сентября - 1 октября</div>
					<div class="leftIcon leader">Турлидер: Екатерина Кусачева</div>
					<div class="leftIcon tourguide">Инструктор: Екатерина Кусачева</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="loadSpin"></div>

<div class="disCount">
	<div class="wrapG">
		<h3>Дисконтно-бонусная система RuDIVE</h3>
		<div class="txt1">Дисконтная 5-уровневая накопительная система группы RuDIVE успешно работает уже много лет. Суммы, оплаченные за курсы, клубные, индивидуальные и семейные туры в дайвинг-центрах RuDIVE, фиксируются на персональном накопительном счете.</div>
		<div class="txt1">По достижении определенной суммы, автоматизированная система присваивает новый уровень скидки на услуги группы RuDIVE*. Соотношение уплаченных сумм, дисконтного уровня и размера скидки отражено в таблице.</div>
		<div class="tabl">
			<div class="hCont">
				<div class="nam">Сумма на дисконтном счете</div>
				<div class="valus hCont">
					<div>500 $</div>
					<div>2000 $</div>
					<div>9000 $</div>
					<div>20 000 $</div>
					<div>40 000 $</div>
				</div>
			</div>
			<div class="hCont">
				<div class="nam">Уровень дисконта</div>
				<div class="valus hCont">
					<div>Стандарт</div>
					<div>Бронза</div>
					<div>Серебро</div>
					<div>Золото</div>
					<div>Платина</div>
				</div>
			</div>
			<div class="hCont">
				<div class="nam">Скидка на обучение</div>
				<div class="valus hCont">
					<div>2%</div>
					<div>4%</div>
					<div>6%</div>
					<div>8%</div>
					<div>10%</div>
				</div>
			</div>
			<div class="hCont">
				<div class="nam">Скидка на поездки</div>
				<div class="valus hCont">
					<div>1%</div>
					<div>2%</div>
					<div>3%</div>
					<div>4%</div>
					<div>5%</div>
				</div>
			</div>
		</div>

		<div class="txt2">С 1 сентября 2021 г. при достижении высшего уровня дисконта «Платина» в дополнение к максимальным скидкам начинается накопление бонусных баллов: 1% от всех оплат за туристические услуги и курсы поступает на персональный накопительный счет в виде бонусов (в рублях). При накоплении на счету суммы, составляющей стоимость места в клубной поездке или учебного курса, клиенту может предоставляться премиальное место в данной поездке при наличии мест, или проводиться желаемый учебный курс. Состояние персонального счета, скидки и накопленные баллы можно отслеживать <span>в личном кабинете на сайте www.dive.ru</span>, для чего нужно зарегистрироваться. Для этого сообщите любому менеджеру RuDIVE о своем желании завести личный кабинет, и вам придет письмо со ссылкой, логином и паролем для регистрации.**</div>
		<div class="txt2 ital">*Скидки не распространяются на пробные погружения <span>(PADI Discover Scuba Diving)</span>, разовые занятия, на <span>ремонт и аренду дайвинг-оборудования</span>, погружения в <span>океанариумах</span>, книги, учебные материалы и дайвинг-сертификаты.</div>
		<div class="txt2 ital">**Информация актуализируется после оформления заявки</div>
	</div>
</div>

<div class="siteIn">
	<div class="wrapG">
		<div class="vCont">
			<div class="mainCont">
				<h3>Подписывайтесь на наши социальные сети</h3>
				<div>И первым узнавайте о новых турах, акциях, скидках и подарках нашего клуба.</div>
				<div class="hCont">
					<a class="button bigBut whiteBut" href="#"><img src="images/telegram1.svg">Telegram</a>
					<a class="button bigBut whiteBut" href="#"><img src="images/vk1.svg">Vkontakte</a>
				</div>
			</div>
			<div class="confAg">При переходе в одну из указанных социальных сетей, вы автоматически соглашаетесь с политикой конфидециальности</div>
		</div>
	</div>
</div>

<?php include "rudive-footer.html"; ?>

<script type="text/javascript" src="js/script.js"></script>

</body>
</html>
