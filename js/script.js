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
var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока
var allObj = $(".glob_mn,.smal_mn,.back_mn");

$(window).scroll(function () {
	var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

  if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
  	$("nav").parent().parent().fadeOut();
  	$(".logo-nav").addClass("logo-nav-width");
  	$(".logo").addClass("logo-width");
  	$(".click-logo").fadeIn();
  } 
  else {
  	$("nav").parent().parent().fadeIn();
  	$(".logo-nav").removeClass("logo-nav-width");
  	$(".logo").removeClass("logo-width");
  	$(".click-logo").fadeOut();
  };
});
/* Выезжающее меню */
function mnuslow(){
	$(".click-logo img").on('click', function(){
		$("nav").parent().parent().fadeIn();
		$(".logo-nav").removeClass("logo-nav-width");
		$(".logo").removeClass("logo-width");
		$(".click-logo").fadeOut();
	});
};
mnuslow();
/* перемещение по секциям */
/*function move(){
	var an = $('a[href*="#"]');
	var a0 = an[0];
	var a1 = an[1];
	var a2 = an[2];
	var a3 = an[3];
	var a4 = an[4];
	var a5 = an[5];
	var t0 = ($(a0).attr('href'));
	var t1 = ($(a1).attr('href'));
	var t2 = ($(a2).attr('href'));
	var t3 = ($(a3).attr('href'));
	var t4 = ($(a4).attr('href'));
	var t5 = ($(a5).attr('href'));
	$(window).scroll(function(){
		var s_top = $(window).scrollTop();
		if($(t0).offset().top == s_top){
		
		}
		else if($(t1).offset().top == s_top){

		}
		else if($(t2).offset().top == s_top){
			alert($(t2).offset().top);
		}
		else if($(t3).offset().top == s_top){
			alert($(t3).offset().top);
		}
		else if($(t4).offset().top == s_top){
			alert($(t4).offset().top);
		}
		else if($(t5).offset().top == s_top){
			alert($(t5).offset().top);
		}
		else{

		};
	});
};
move();*/
$(document).ready(function() {
			$('#fullpage').fullpage({
				scrollBar: true,
			});
		});  