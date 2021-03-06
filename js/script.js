/*Переход по якарям*/
$(document).ready(function(){
	$('a[href*="#"]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 700);
		e.preventDefault();
	});
	return false;
});
/*Прилипание блока к верхнему краю экрана 
при прокручивании до него, а так же описание поведения верхнего меню*/
var objToStick = $("nav"); //Получаем нужный объект
var topOfObjToStick = $(objToStick).scrollTop(); //Получаем начальное расположение нашего блока

$(window).scroll(function () {
	var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

  if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
  	$("nav").parent().parent().fadeOut();
  	$(".logo-nav").addClass("logo-nav-width");
  	$(".logo").addClass("logo-width");
  	$(".click-logo").fadeIn();
  	$(".phone-mail").fadeOut();
  } 
  else {
  	$("nav").parent().parent().fadeIn();
  	$(".logo-nav").removeClass("logo-nav-width");
  	$(".logo").removeClass("logo-width");
  	$(".click-logo").fadeOut();
  	$(".phone-mail").fadeIn();
  };
});
/* Выезжающее меню */
function mnuslow(){
	$(".click-logo img").on('click', function(){
		$("nav").parent().parent().fadeIn();
		$(".logo-nav").removeClass("logo-nav-width");
		$(".logo").removeClass("logo-width");
		$(".click-logo").fadeOut();
		$(".phone-mail").fadeIn();
	});
};
mnuslow();

/* ОТслеживание ширины и высоты окна браузера */
function windowSize(){
	if($(window).width() > 618 && $(window).height() > 520){
		$(document).ready(function() {
			$('#fullpage').fullpage({
				scrollBar: true,
				navigation: true,
				navigationPosition: 'right',
			});
		}); 
	}
	else if($(window).width() < 618 && $(window).height() < 520){
		$(window).on('load resize',windowSize);
	}
};
$(window).on('load resize',windowSize);


/* Главный slider */
function foolSlider(){
	var allSlide = $(".info-slide");
	$(".right-slide").on('click', function(){
		for(var n in allSlide){
			if($(allSlide[0]).hasClass("slide-activ")){
				$(allSlide[0]).animate({opacity: '0'}, 1000).removeClass("slide-activ");
				$(allSlide[1]).animate({opacity: '1'}, 1000).addClass("slide-activ");
				$(".abs-fon").fadeIn(1000);
				setTimeout(function (){
					$(".bgi").removeClass("bgi-sl2");
					$(".bgi").addClass("bgi-sl3");
				}, 1000);
				$(".abs-fon").fadeOut(1000);
			}
			else if($(allSlide[1]).hasClass("slide-activ")){
				$(allSlide[1]).animate({opacity: '0'}, 1000).removeClass("slide-activ");
				$(allSlide[2]).animate({opacity: '1'}, 1000).addClass("slide-activ");
				$(".abs-fon").fadeIn(1000);
				setTimeout(function (){
					$(".bgi").removeClass("bgi-sl3");
					$(".bgi").addClass("bgi-sl2");
				}, 1000);
				$(".abs-fon").fadeOut(1000);
			}
			else if($(allSlide[2]).hasClass("slide-activ")){
				$(allSlide[2]).animate({opacity: '0'}, 1000).removeClass("slide-activ");
				$(allSlide[0]).animate({opacity: '1'}, 1000).addClass("slide-activ");
				$(".abs-fon").fadeIn(1000);
				setTimeout(function (){
					$(".bgi").removeClass("bgi-sl3 bgi-sl2");
				}, 1000);
				$(".abs-fon").fadeOut(1000);
			}
			else{
				return false;
			};
			return false;
		};
	});
	$(".left-slide").on('click', function(){
		for(var n in allSlide){
			if($(allSlide[0]).hasClass("slide-activ")){
				$(allSlide[0]).animate({opacity: '0'}, 1000).removeClass("slide-activ");
				$(allSlide[2]).animate({opacity: '1'}, 1000).addClass("slide-activ");
				$(".abs-fon").fadeIn(1000);
				setTimeout(function (){
					$(".bgi").removeClass("bgi-sl3");
					$(".bgi").addClass("bgi-sl2");
				}, 1000);
				$(".abs-fon").fadeOut(1000);
			}
			else if($(allSlide[1]).hasClass("slide-activ")){
				$(allSlide[1]).animate({opacity: '0'}, 1000).removeClass("slide-activ");
				$(allSlide[0]).animate({opacity: '1'}, 1000).addClass("slide-activ");
				$(".abs-fon").fadeIn(1000);
				setTimeout(function (){
					$(".bgi").removeClass("bgi-sl3 bgi-sl2");
				}, 1000);
				$(".abs-fon").fadeOut(1000);
			}
			else if($(allSlide[2]).hasClass("slide-activ")){
				$(allSlide[2]).animate({opacity:'0'}, 1000).removeClass("slide-activ");
				$(allSlide[1]).animate({opacity:'1'}, 1000).addClass("slide-activ");
				$(".abs-fon").fadeIn(1000);
				setTimeout(function (){
					$(".bgi").removeClass("bgi-sl2");
					$(".bgi").addClass("bgi-sl3");
				}, 1000);
				$(".abs-fon").fadeOut(1000);
			}
			else{
				return false;
			};
			return false;
		};
	});
};
foolSlider();
//Слайдер уборок
var slideIndex=1;
showSlides(slideIndex);
function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	var i;
	var slides = $(".capab-text");
	var dots = $(".nmu-capab li");

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1){
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("activ-tab-room","");   
	}
	slides[slideIndex - 1].style.display = "flex";
	dots[slideIndex - 1].className += " activ-tab-room";
}
//Слайдер помещений
var roomIndex=1;
showRoomSlides(roomIndex);
function plusRoomSlides(n) {
	showSlides(roomIndex += n);
}
function roomSlide(n) {
	showRoomSlides(roomIndex = n);
}
function showRoomSlides(n) {
	var i;
	var slides = $(".centr-inf-room");
	var dots = $(".mnu-room li");

	if (n > slides.length) {
		roomIndex = 1
	}
	if (n < 1){
		roomIndex = slides.length
	}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("activ-tab-room","");   
	}
	slides[roomIndex - 1].style.display = "flex";
	dots[roomIndex - 1].className += " activ-tab-room";
}
//Анимация
$(window).load(function(){
	$("#work-other h2").animated("zoomIn", "zoomOut");
	$(".stage").animated("fadeInLeft", "fadeOutRight");
	$(".other").animated("fadeInRight","fadeOutLeft");
	$(".block-table").animated("zoomIn","zoomOut");
	$(".anim-l1, .anim-l2").animated("fadeInLeft","fadeOutRight");
	$(".anim-r").animated("fadeInRight","fadeOutLeft");
	$(".care-inf img").animated("bounceIn","bounceOut");
	$(".table-capab").animated("bounceInDown","bounceOutDown");
	$(".inf-cont").animated("bounceInLeft","bounceOutLeft");
	$(".foot-img").animated("fadeIn","fadeOut");
	$(".foot-form").animated("bounceInRight","bounceOutRight");
});
/* Прилоадер */
$(window).load(function(){
	$(".loader_inner").fadeOut();
	$(".loader").delay(250).fadeOut("slow");
});