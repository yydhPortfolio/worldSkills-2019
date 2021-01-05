/*app.js*/
$(function(){
	let slider = $("#slider > div > div").eq(1);

	slider.css({
		position : "relative",
		overflow :"hidden"
	});

	slider.attr("id", "imgs");

//슬라이더 상단 버튼 조정
	$("#slider").append(`<button>1</button><button>2</button><button>3</button>`);

	$("#slider button").css({
		position : "absolute",
		top : "100px",
		border : "1px solid #black",
		background : "none",
		outline : "none"
	});

	$("#slider button").eq(0).css({
		left : "45%"
	});

	$("#slider button").eq(1).css({
		left : "50%"
	});

	$("#slider button").eq(2).css({
		left : "55%"
	});
//슬라이더 상단 버튼 조정끝

	for(let i = 1; i <= 3; i++){
		$("#imgs").append(`<img src="images/slide${i}.jpg">`);
	}

	let imgs = $("#imgs img");

	imgs.css({
		position : "absolute",
		width : "100%",
		height : "100%",
		right : "100%"
	});

	imgs.eq(0).css({right : 0});

	$("#slider > div > div").eq(0).append(`<button data-dir = '0'>&lt;</button>`).addClass("btn");
	$("#slider > div > div").eq(2).append(`<button data-dir = '1'>&gt;</button>`).addClass("btn");

	$(".btn > button").css({
		width : "100%",
		height : "100%",
		border : 0,
		background : "none",
		fontSize : "20px",
		fontWeight : "bold",
		cursor : "pointer",
		outline : "none"
	});

//버튼 호버효과

	$(".btn > button").hover(function(){
		$(this).css("background" , "black");
		$(this).css("color" , "white");
	}, function(){
		$(this).css("background" , "white");
		$(this).css("color" , "black");
	})

//호버효과 끝
	let now = 0;
	let isSliding = false;
//버튼 슬라이드 영역

	function auto() {
		let next = now < 2 ? now + 1 : 0;
		isSliding = true;

			$(imgs[now]).animate({"right" : "100%"}, 1500, function(){
				isSliding = false;
			});

			$(imgs[next]).css({"right" : "-100%"}).animate({"right" : 0}, 1500);

			now = next;
	}

	let autoSlide = setInterval(auto, 5000);

	$("#slider > button:nth-child(2)").on("click",function(e){
			clearInterval(autoSlide);
		if(now == 0){
			autoSlide = setInterval(auto, 5000);
			return;
		}

		if(isSliding) {
			autoSlide = setInterval(auto, 5000);
			return;
		}

		isSliding = true;

			$(imgs[now]).animate({"right" : "100%"}, 1500);
			// $(imgs).eq(1).css({"right" : "-100%"}, 1500);
			$(imgs).eq(0).css({"right" : "-100%"}).animate({"right" : 0}, 1500);
			
			now = 0;

			autoSlide = setInterval(auto, 5000);

			isSliding = false;
	});

	$("#slider > button:nth-child(3)").on("click",function(e){
		clearInterval(autoSlide);
		if(now == 1){
			autoSlide = setInterval(auto, 5000);
			return;
		}

		if(isSliding) {
			autoSlide = setInterval(auto, 5000);
			return;
		}

		isSliding = true;

			$(imgs[now]).animate({"right" : "100%"}, 1500);
			// $(imgs).eq(2).css({"right" : "-100%"}, 1500);
			$(imgs).eq(1).css({"right" : "-100%"}).animate({"right" : 0}, 1500);

			now = 1;

			autoSlide = setInterval(auto, 5000);

			isSliding = false;
	});

	$("#slider > button:nth-child(4)").on("click",function(e){
		clearInterval(autoSlide);
		if(now == 2){
			autoSlide = setInterval(auto, 5000);
			return;
		}

		if(isSliding) {
			autoSlide = setInterval(auto, 5000);
			return;
		}

		isSliding = true;

			$(imgs[now]).animate({"right" : "100%"}, 1500);
			// $(imgs).eq(1).css({"right" : "-100%"}, 1500);
			$(imgs).eq(2).css({"right" : "-100%"}).animate({"right" : 0}, 1500);
			
			now = 2;

			autoSlide = setInterval(auto, 5000);

			isSliding = false;
	});
//버튼 슬라이드 영역 끝


//슬라이드 영역
	$(".btn > button").on("click", function(e){
		clearInterval(autoSlide);
		let dir = $(e.target).data("dir");

		if(isSliding) {
			autoSlide = setInterval(auto, 5000);
			return;
		}

		isSliding = true;

		if(dir == 0){
			let next = now > 0 ? now - 1 : 2;

			$(imgs[now]).animate({"right" : "-100%"}, 1500, function(){
				isSliding = false;
			});

			$(imgs[next]).css({"right" : "100%"}).animate({"right" : 0}, 1500);

			now = next;
		} else {
			let next = now < 2 ? now + 1 : 0;

			$(imgs[now]).animate({"right" : "100%"}, 1500, function(){
				isSliding = false;
			});

			$(imgs[next]).css({"right" : "-100%"}).animate({"right" : 0}, 1500);

			now = next;
		}

		autoSlide = setInterval(auto, 5000);
	});

//슬라이드 영역 끝

//클릭시 자동으로 해당 섹션가기
	$("nav > ul li > a").on("click", function(e){
		e.preventDefault();

		let href = $(e.target).attr("href");

		let target = $(href).offset().top;

		$("html, body").animate({scrollTop : target}, 1500);
	});
//클릭시 자동으로 해당 섹션가기 끝

	$("<style>#webdesign {position : relative;} #worldskills {position : relative;} #photos img:hover {transform : scale(0.9);} #photos img {cursor : pointer; transition : 0.5s;}</style>").appendTo("head");

//이미지 클릭시 팝업 (Photo Section)
	$("body").append(`<div id="dark"><div id="click"></div><div class="img-container"><img src="#"/><div id="close">&times;</div></div></div>`);

	$("#dark").css({
		position : "fixed",
		width : "100%",
		height : "100%",
		top : 0,
		left : 0,
		background : "rgba(0, 0, 0, 0.5)"
	});

	$("#click").css({
		position : "absolute",
		width : "100%",
		height : "100%"
	});

	$("#dark").hide();

	$("#photos img").on("click", function(e){
		let src = $(e.target).attr("src");
		let alt = $(e.target).attr("alt");

		$("#dark").fadeIn();

		$("#dark > div > img").attr("src", `images/big_${alt}.jpg`);

		$(".img-container").css({
			position : "absolute",
			top : "50%",
			left : "50%",
			transform : "translate(-50%, -50%)",
			zIndex : "10"
		});

		$("#close").css({
			position : "absolute",
			fontSize : "30px",
			top : "15px",
			right : "15px",
			color : "gray",
			overflow : "hidden",
			cursor : "pointer"
		});
	});

	$("#close").on("click", function(){
		$("#dark").fadeOut();
	});

	$("#click").on("click", function(){
		$("#dark").fadeOut();
	});
//이미지 클릭시 팝업 (Photo Section) 끝

//숨겨진 텍스트 표시 및 숨기기
	$("#webdesign").append(`<button>Read More</button>`).addClass("btns");
	$("#webdesign").append(`<button>Hide</button>`).addClass("btns");

	$("#worldskills").append(`<button>Read More</button>`).addClass("btns");
	$("#worldskills").append(`<button>Hide</button>`).addClass("btns");

	$(".btns > button").css({
		position : "absolute",
		left : "30%",
		bottom : "15px"
	});

	$("#webdesign > button:nth-child(3)").hide();
	$("#worldskills > button:nth-child(3)").hide();

	$("#webdesign > button:nth-child(2)").on("click", function(e){

		$("#webdesign").animate({
			height : "900px"
		}, 1500);

		$("#webdesign > div > div > div").css({
			display : "block",
			float : "left",
			overflow : "hidden",
			height : "450px"
		}).animate({height : "450px"});

		$("#webdesign > button:nth-child(3)").fadeIn();
		$("#webdesign > button:nth-child(2)").fadeOut();

	});

	$("#webdesign > button:nth-child(3)").on("click", function(e){

		$("#webdesign").animate({
			height : "500px"
		}, 1500).css({overflow : "hidden"});

		$("#webdesign > div > div > div").animate({
			height : "0"
		}, 1500).css({overflow : "hidden"});

		$("#webdesign > button:nth-child(2)").fadeIn();
		$("#webdesign > button:nth-child(3)").fadeOut();

	});

	// $("#webdesign > div > div > div").css({
	// 		display : "none"
	// 	});

	$("#worldskills > button:nth-child(2)").on("click", function(e){

		$("#worldskills").animate({
			height : "700px"
		}, 1500);

		$("#worldskills > div > div > div").css({
			display : "block",
			float : "left",
			overflow : "hidden",
			height : "260px"
		}).animate({height : "260px"});

		$("#worldskills > button:nth-child(3)").fadeIn();
		$("#worldskills > button:nth-child(2)").fadeOut();

	});

	$("#worldskills > button:nth-child(3)").on("click", function(e){

		$("#worldskills").animate({
			height : "500px"
		}, 1500).css({overflow : "hidden"});

		$("#worldskills > div > div > div").animate({
			height : 0
		}, 1500).css({overflow : "hidden"});

		$("#worldskills > button:nth-child(2)").fadeIn();
		$("#worldskills > button:nth-child(3)").fadeOut();
	});

//숨겨진 텍스트 표시 및 숨기기 끝

//스크롤을 통해 화면에 보이는 페이지의 상단에 이를때 생기는 이미지 애니메이션효과
	// $("body").on("mousewheel", function (e){
	// 	let scrolling = $(e.originalEvent.wheelDelta);
	// 	// let scroll = $(window).scroll.scrollTop();
	// 	let scroll = $(document).scrollTop();
	// 	// console.log(e.originalEvent.wheelDelta);
	// 	console.log(scroll);

	// 	if(scrolling < 0){
	// 		if(scroll >= 572 && scroll <= 667){
	// 			$("#webdesign > div > img").css({
	// 				transform : "scale(1.1)",
	// 				transition : "all 1s"
	// 			});
	// 		}

	// 		if(scroll >= 1057){
	// 			$("#webdesign > div > img").css({
	// 				transform : "rotate(10deg)",
	// 				transition : "all 0s"
	// 			});
	// 		}
	
	// 		if(scroll >= 1057 && scroll <= 1223){
	// 			$("#worldskills > div > img").css({
	// 				transform : "scale(1.1)",
	// 				transition : "all 1s"
	// 			});
	// 		}
	
	// 		if(scroll >= 1112 && scroll <= 1152){
	// 			$("#worldskills > div > img").css({
	// 				transform : "scale(1.1)",
	// 				transition : "all 1s"
	// 			});
	// 		}
	
	// 		if(scroll >= 1660){
	// 			$("#worldskills > div > img").css({
	// 				transform : "rotate(-5deg)",
	// 				transition : "all 0s"
	// 			});
	// 		}
	
	// 		if(scroll <= 142){
	// 			$("#worldskills > div > img").css({
	// 				transform : "rotate(-5deg)",
	// 				transition : "all 0s"
	// 			});
	// 		}
	// 	}
	// });
	$(window).on("mousewheel", function(e){
		let scroll = $(document).scrollTop();
		// let clientHeight = document.body.clientWidth;
		// console.log(scroll);
		// console.log(clientHeight);
		let scrolling = $(e.originalEvent.wheelDelta);
		// let scrollingNum = $(e.originalEvent.wheelDelta);
		console.log(scrolling);

		if(scrolling < 0){

			if(scroll >= 572 && scroll <= 667){
				$("#webdesign > div > img").css({
					transform : "scale(1.1)",
					transition : "all 1s"
				});
			}
	
			if(scroll >= 1057){
				$("#webdesign > div > img").css({
					transform : "rotate(10deg)",
					transition : "all 0s"
				});
			}
	
			if(scroll >= 1057 && scroll <= 1223){
				$("#worldskills > div > img").css({
					transform : "scale(1.1)",
					transition : "all 1s"
				});
			}
	
			if(scroll >= 1112 && scroll <= 1152){
				$("#worldskills > div > img").css({
					transform : "scale(1.1)",
					transition : "all 1s"
				});
			}
	
			if(scroll >= 1660){
				$("#worldskills > div > img").css({
					transform : "rotate(-5deg)",
					transition : "all 0s"
				});
			}
	
			if(scroll <= 142){
				$("#worldskills > div > img").css({
					transform : "rotate(-5deg)",
					transition : "all 0s"
				});
			}
		}
	});
//스크롤을 통해 화면에 보이는 페이지의 상단에 이를때 생기는 이미지 애니메이션효과 끝

//이미지 클릭시 팝업 (Result Section)
	$("body").append(`<div id="dark1"><div id="click1"></div><div class="img-container1"><img src="#"/><div id="information"><div id="year"></div><div id="country">country : </div><div id="title">title : </div><div id="name">name : </div></div><div id="close1">&times;</div></div></div>`)

	$("#dark1").css({
		position : "fixed",
		width : "100%",
		height : "100%",
		top : 0,
		left : 0,
		background : "rgba(0, 0, 0, 0.5)"
	});

	$("#click1").css({
		position : "absolute",
		width : "100%",
		height : "100%"
	});

	$("#dark1").hide();

	$("#result > div > div > ul > li > ul > li").on("click", function(e){
		let name = $(e.target).html();
		let country = $(e.target).data("country");
		let picture = $(e.target).data("photo");
		let title = $(e.target).attr("title");
		let year = $("#result > div > div:nth-child(2) > h2").html();
		let year1 = $("#result > div > div:nth-child(3) > h2").html();

		$("#name").html("Name : " + name);
		$("#country").html("Country : " + country);
		$("#title").html("Title : " + title);

		if(picture == "medaillist-2013-1.jpg"){
			$("#year").html(year);
		}else if(picture == "medaillist-2013-2.jpg"){
			$("#year").html(year);
		}else if(picture == "medaillist-2013-3.jpg"){
			$("#year").html(year);
		} else {
			$("#year").html(year1);
		}

		$(".img-container1").css({
			position : "relative",
			background : "white",
			width : "40%",
			height : "200px",
			top : "50%",
			left : "50%",
			transform : "translate(-50%, -50%)",
			zIndex : "10"
		});

		$("#information").css({
			position : "absolute",
			right : "14%",
			top : "35px",
			lineHeight : "30px",
			fontSize : "20px",
			textAlign : "center"
		});

		$("#close1").css({
			position : "absolute",
			top : "15px",
			right : "15px",
			cursor : "pointer",
			fontSize : "30px",
			overflow : "hidden"
		});

		$("#dark1 > div.img-container1 > img").attr("src", `images/${picture}`);

		$("#dark1").fadeIn();
	}).css({cursor : "pointer"});

	$("#close1").on("click", function(){
		$("#dark1").fadeOut();
	});

	$("#click1").on("click", function(){
		$("#dark1").fadeOut();
	});
//이미지 클릭시 팝업 (Result Section) 끝

});