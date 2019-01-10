$(document).ready(function() {
	//animacion para el hamburger menu
	var abierto = false;

	function abrir_menu(){
		anime({
				targets: '.menu',
				width: '100%',
				easing: 'easeInOutQuad',
				direction: 'normal',
				loop: false
			});

			anime({
				targets: '.menu-izq',
				width: '50%',
				easing: 'easeInOutQuad',
				direction: 'normal',
				loop: false
			});

			anime({
				targets: '.menu-der',
				width: '50%',
				easing: 'easeInOutQuad',
				direction: 'normal',
				delay: 1000,
				loop: false
			});

			anime({
				targets: '.menu-der ul',
				fontSize: '2em',
				easing: 'linear',
				direction: 'normal',
				delay:1100,
				loop:false
			});
	}

	function cerrar_menu(){
			anime({
				targets: '.menu-der ul',
				fontSize: '0em',
				easing: 'linear',
				direction: 'normal',
				loop:false
			});

			anime({
				targets: '.menu-der',
				width: '0%',
				easing: 'easeInOutQuad',
				direction: 'normal',
				delay:200,
				loop: false
			});

			anime({
				targets: '.menu-izq',
				width: '0%',
				easing: 'easeInOutQuad',
				direction: 'normal',
				delay:1000,
				loop: false
			});

			anime({
				targets: '.menu',
				width: '0%',
				easing: 'easeInOutQuad',
				direction: 'normal',
				delay:1000,
				loop: false
			});
	}

	function animar_menu(cond){
		if (!cond) {
			abrir_menu();

			return true;
		} else{
			cerrar_menu();
			
			return false;
		}
	}

	$(".icono").click(function(){
		// console.log(abierto);
		$(this).toggleClass("active");
		abierto = animar_menu(abierto);
		
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

	//cerrar menu cuando se presiona un elemento del menu

	$(".menu-der li").click(function(){
		cerrar_menu();
		abierto = false;
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