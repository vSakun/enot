/*JS & JQ*/
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
	$(".inc").text(0);
	$(".rm").removeClass("wrfoc");
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
$(".roomza .posr").bind("click", function(){
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
 			var znaRoom = $(".press-w").eq(0).children(".price").text();
 			var n;
 			var arr = Number(znaRoom.replace(/[^0-9.]/gi,''));
 			var onelove = arr/Number(mnoz);
 			var priceR = onelove*Number(mnoz);
 			console.log(arr, arr*mnoz, arr*numberRoom);
 			$(".press-w").eq(1).children(".selp").text(`${priceR}р`);
 		};
 	};
 	if( naraz == "Кухня"){
 		if(numberRoom == 0){
 			$(".press-w").eq(1).children(".price").addClass("selp");
 		};
 		if(numberRoom >> 0){
 			var znaRoom = $(".press-w").eq(1).children(".price").text();
 			var n;
 			var arr = Number(znaRoom.replace(/[^0-9.]/gi,''));
 			var onelove = arr/Number(mnoz);
 			var priceR = onelove*Number(mnoz);
 			console.log(arr, arr*mnoz, arr*numberRoom);
 			$(".press-w").eq(1).children(".selp").text(`${priceR}р`);
 		};
 	};
 	if( naraz == "Санузел"){
 		if(numberRoom == 0){
 			$(".press-w").eq(2).children(".price").addClass("selp");
 		};
 		if(numberRoom >> 0){
 			var znaRoom = $(".press-w").eq(2).children(".price").text();
 			var n;
 			var arr = Number(znaRoom.replace(/[^0-9.]/gi,''));
 			var onelove = arr/Number(mnoz);
 			var priceR = onelove*Number(mnoz);
 			console.log(arr, arr*mnoz, arr*numberRoom);
 			$(".press-w").eq(1).children(".selp").text(`${priceR}р`);
 		};
 	};
});
/*Minus room*/
$(".roomza .posl").bind("click", function(){
	var numberRoom = Number($(this).siblings(".inc").text());
	if(numberRoom < 1){
		return;
	};
	if(numberRoom >= 1){
		var mnoz = String(numberRoom - 1);
		if(Number(mnoz) >> 0){
			var naraz = String($(this).siblings("p[class != inc]").text());
			if( naraz == "Комната"){
				var znaRoom = $(".press-w").eq(0).children(".price").text();
 				var n;
 				var arr = znaRoom.replace(/[^0-9 ]/gi,'').split(' ').filter((e)=>{ return n != '' });
 				var priceK = (arr[1]/numberRoom) * mnoz;
			};
			if( naraz == "Кухня"){

			};
			if( naraz == "Санузел"){

			};
		};
		if(Number(mnoz) == 0){
			$(this).parent().removeClass("wrfoc");
			var naraz = String($(this).siblings("p[class != inc]").text());
		 	if( naraz == "Комната"){
		 		$(".press-w").eq(0).children(".price").removeClass("selp");
		 	};
		 	if( naraz == "Кухня"){
		 		$(".press-w").eq(1).children(".price").removeClass("selp");
		 	};
		 	if( naraz == "Санузел"){
		 		$(".press-w").eq(2).children(".price").removeClass("selp");
		 	};
		};
		$(this).siblings(".inc").text(mnoz);
	}
});