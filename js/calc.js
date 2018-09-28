/*Подгрузка первой страницы комнат*/
$(document).ready(function(){
	var textPost = $(".tepo .press-w");
	textPost.eq(0).load( "/enot/file/ex-room.txt" );
	textPost.eq(1).load( "/enot/file/ex-kitchen.txt" );
	textPost.eq(2).load( "/enot/file/ex-bath.txt" );
});
/*Переключение между видами уборки*/
$(".zagl .wach").bind("click", function(e){
	$(".selw").removeClass("selw");
	$(this).addClass("selw");
	/*$(".roomza").removeClass("roomza");*/
	var childP = String($(this).children().text());
	var textPost = $(".tepo .press-w");
	if(childP == "Экспресс"){
		textPost.eq(0).load( "/enot/file/ex-room.txt" );
		textPost.eq(1).load( "/enot/file/ex-kitchen.txt" );
		textPost.eq(2).load( "/enot/file/ex-bath.txt" );
	};
	if(childP == "Ежедневная"){
		textPost.eq(0).load( "/enot/file/ed-room.txt" );
		textPost.eq(1).load( "/enot/file/ed-kitchen.txt" );
		textPost.eq(2).load( "/enot/file/ed-bath.txt" );
	};
	if(childP == "Генеральная"){
		textPost.eq(0).load( "/enot/file/gm-room.txt" );
		textPost.eq(1).load( "/enot/file/gm-kitchen.txt" );
		textPost.eq(2).load( "/enot/file/gm-bath.txt" );
	};
	if (childP == "После ремонта"){
		textPost.eq(0).load( "/enot/file/rp-room.txt" );
		textPost.eq(1).load( "/enot/file/rp-kitchen.txt" );
		textPost.eq(2).load( "/enot/file/rp-bath.txt" );
	};
});
/*Plus room*/
$(".roomza .posr").bind("click", function(e){
	var numberRoom = Number($(this).siblings(".inc").text());
 	var mnoz = String(numberRoom + 1);
 	$(this).siblings(".inc").text(mnoz);
 	$(this).parent().addClass("wrfoc");
	var naraz = String($(this).siblings("p[class != inc]").text());
 	if( naraz == "Комната"){
 		if(numberRoom == 0){
 			$(".press-w").eq(0).children(".price").addClass("selp");
 		};
 		if(numberRoom >> 0){
 			return;
 		};
 	};
});
/*Minus room*/
$(".roomza .posl").bind("click", function(e){
	var numberRoom = Number($(this).siblings(".inc").text());
	if(numberRoom == 1){
		$(this).parent().removeClass("wrfoc");
	}
	else{
		var mnoz = String(numberRoom - 1);
		$(this).siblings(".inc").text(mnoz);
	}
});