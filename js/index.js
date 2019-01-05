$(document).ready(function() {
	//animacion para el hamburger menu
	$(".icono").click(function(){
		$(".icono").toggleClass("active");
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		console.log(scroll);
		if(scroll >= 350 && scroll < 1600){
			$(":root").get(0).style.setProperty("--color-hamb","#111");
		} else if (scroll >= 0 && scroll < 350){
			$(":root").get(0).style.setProperty("--color-hamb","#fff");
		} else if(scroll >= 1600 && scroll < 2400){
			$(":root").get(0).style.setProperty("--color-hamb","#fff");
		} else if (scroll >= 2400) {
			$(":root").get(0).style.setProperty("--color-hamb","#111");
		}
	});

	//animacion texto-home
	$(".uno").hover(function(){

		$(this).css({
			transform:"translate(10vw,0)",
			color:"yellow"
		});

		$(".borde-uno").css({
			border:"0px solid white",
			transition:"0.5s"
		});

		$(".dos").css({
			transform:"translate(-10vw,0)",
			transition:"1s"
		});

		$(".borde-dos").css({
			border:"0px solid white",
			transition:"0.5s"
		});


	}, function(){

		$(this).css({
			transform:"translate(0,0)",
			color:"white"
		});

		$(".borde-uno").css({
			border:"5px solid white",
			transition:"0.5s"
		});

		$(".dos").css({
			transform:"translate(0,0)",
			transition:"1s"
		});

		$(".borde-dos").css({
			border:"5px solid white",
			transition:"0.5s"
		});
	});

	$(".dos").hover(function(){

		$(this).css({
			transform:"translate(10vw,-8vh)",
			color:"yellow"
		});

		$(".borde-dos").css({
			border:"0px solid white",
			transition:"0.5s"
		});

		$(".uno").css({
			transform:"translate(-10vw,7vh)",
			transition:"1s"
		});

		$(".borde-uno").css({
			border:"0px solid white",
			transition:"0.5s"
		});
	}, function(){

		$(this).css({
			transform:"translate(0,0)",
			color:"white"
		});

		$(".borde-dos").css({
			border:"5px solid white",
			transition:"0.5s"
		});

		$(".uno").css({
			transform:"translate(0,0)",
			transition:"1s"
		});

		$(".borde-uno").css({
			border:"5px solid white",
			transition:"0.5s"
		});
	});

	//animacion de portafolio
	$('.imagen').hover(function(){
		// $(".hola", this).css({
		// 	transform: "scale(1,1)"
		// });
		$(".hola", this).addClass("tracking-in-contract-bck");
		$(".hola", this).removeClass("tracking-out-expand-fwd");
	},function(){
		$(".hola", this).removeClass("tracking-in-contract-bck");
		$(".hola", this).addClass("tracking-out-expand-fwd");
		// $(".hola", this).css({
		// 	transform: "scale(0,0)"
		// });
	});
});