$(document).ready(function() {

	var cart = $(".topbar-cart");
	var CartLink = $(".topbar-cart a");
	var CartMenu = $(".cart-menu");

	var searchBtn = $(".search-btn");
	var search = $("#search");
	var searchHotWords = $(".search-hot-words");
	var keywordsList = $(".keywords-list");
	var headerNavMenu = $(".header-nav-menu");

	var homeelecMore1=$(".homeelec .more .more1");
	var homeelecMore2=$(".homeelec .more .more2");
	var homeelecList1=$(".homeelec .raw .list1");
	var homeelecList2=$(".homeelec .raw .list2");

	var smartMore1=$(".smart .more .more1");
	var smartMore2=$(".smart .more .more2");
	var smartList1=$(".smart .raw .list1");
	var smartList2=$(".smart .raw .list2");

	var collocationMore1=$(".collocation .more .more1");
	var collocationMore2=$(".collocation .more .more2");
	var collocationList1=$(".collocation .raw .list1");
	var collocationList2=$(".collocation .raw .list2");

	var partsMore1=$(".parts .more .more1");
	var partsMore2=$(".parts .more .more2");
	var partsList1=$(".parts .raw .list1");
	var partsList2=$(".parts .raw .list2");

	var peripheralMore1=$(".peripheral .more .more1");
	var peripheralMore2=$(".peripheral .more .more2");
	var peripheralList1=$(".peripheral .raw .list1");
	var peripheralList2=$(".peripheral .raw .list2");
	// 购物车菜单弹出以及收回


	// 构建购物车对象
	function TopBarCart() {

	}

	// 显示
	TopBarCart.prototype.showCartMenu = function() {
		CartLink.css({
			"color": "#ff6700",
			"background-color": "#fff"
		});
		CartMenu.slideDown(100);
	}

	//隐藏
	TopBarCart.prototype.hideCartMenu = function() {
		CartMenu.slideUp(100);
		CartLink.css({
			"color": "#b0b0b0",
			"background-color": "#424242"
		});
	}

	//BUG修复
	TopBarCart.prototype.cartMenuArray = [];

	TopBarCart.prototype.mouse = function() {
		var cartMenuArray = TopBarCart.prototype.cartMenuArray;

		//鼠标移入购物车
		cart.mouseenter(function() {
			cartMenuArray.forEach(function(one) {
				clearTimeout(one);
			});
			cartMenuArray.length = 0;
			var timer = setTimeout(TopBarCart.prototype.showCartMenu, 100);
			cartMenuArray.push(timer);
		});

		//鼠标移出购物车
		cart.mouseleave(function() {
			cartMenuArray.forEach(function(one) {
				clearTimeout(one);
			});
			cartMenuArray.length = 0
			var timer = setTimeout(TopBarCart.prototype.hideCartMenu, 100);
			cartMenuArray.push(timer);
		});
	}

	// 工厂方法
	function factory(key) {
		if (key == "TopBarCart") {
			return new TopBarCart();
		} else if (key == "HeaderSearch") {
			return new HeaderSearch();
		} else if (key == "HomeHeroSlider") {
			return new HomeHeroSlider();
		} else if (key == "HomeStarGoods") {
			return new HomeStarGoods();
		}
	}
	// 调用方法
	var topbarcart = factory("TopBarCart");
	topbarcart.mouse();





	//鼠标移入移出搜索框，搜索按钮样式

	// 创建搜索栏对象
	function HeaderSearch() {

	}
	//按钮颜色变深方法
	HeaderSearch.prototype.orangeBtn = function() {

		searchBtn.css({
			"transition-property": "all",
			"transition-duration": "0.2s",
			"transition-timing-function": "ease",
			"background-color": "#ff6700",
			"color": "#fff",
			"border": "none"
		});
	}

	//按钮边框变深方法
	HeaderSearch.prototype.darkBtn = function() {
		searchBtn.css({
			"transition-property": "all",
			"transition-duration": "0.2s",
			"transition-timing-function": "ease",
			"background-color": "#fff",
			"color": "#616161",
			"border": 1 / 16 + "rem solid #bbb"
		});
	}

	// 按钮颜色变浅方法
	HeaderSearch.prototype.lightBtn = function() {
		searchBtn.css({
			"transition-property": "all",
			"transition-duration": "0.2s",
			"transition-timing-function": "ease-out",
			"background-color": "#fff",
			"color": "#616161",
			"border": 1 / 16 + "rem solid #e0e0e0"
		});
	}

	// 搜索框边框颜色变浅方法
	HeaderSearch.prototype.lightSearch = function() {
		var border = 1 / 16 + "rem solid #e0e0e0";
		search.css({
			"transition-property": "all",
			"transition-duration": "0.2s",
			"transition-timing-function": "ease-out",
			"border-left": border,
			"border-bottom": border,
			"border-top": border
		});
	}

	// 搜索框边框颜色变深方法
	HeaderSearch.prototype.darkSearch = function() {
		var border = 1 / 16 + "rem solid #bbb";
		search.css({
			"transition-property": "all",
			"transition-duration": "0.2s",
			"transition-timing-function": "ease",
			"border-left": border,
			"border-bottom": border,
			"border-top": border
		});
	}

	HeaderSearch.prototype.navMenuArray = [];

	// 显示标题栏弹出菜单
	HeaderSearch.prototype.showNavMenu = function() {
		var navMenuArray = HeaderSearch.prototype.navMenuArray;
		navMenuArray.forEach(function(one) {
			clearTimeout(one);
		});
		navMenuArray.length = 0;
		headerNavMenu.slideDown(300);
		var timer = setTimeout("$('.header-nav-menu').slideDown(300)", 200);
		navMenuArray.push(timer);
	}

	// 隐藏标题栏弹出菜单
	HeaderSearch.prototype.hideNavMenu = function() {
		var navMenuArray = HeaderSearch.prototype.navMenuArray;
		navMenuArray.forEach(function(one) {
			clearTimeout(one);
		});
		navMenuArray.length = 0;
		headerNavMenu.slideDown(300);
		var timer = setTimeout("$('.header-nav-menu').slideUp(300)", 200);
		navMenuArray.push(timer);
	}



	//搜索框，按钮方法合成为mouse方法
	HeaderSearch.prototype.mouse = function() {

		// 鼠标移入按钮方法
		searchBtn.mouseenter(function() {
			if (document.activeElement.id == "search") {
				return;
			}
			HeaderSearch.prototype.darkSearch();
			HeaderSearch.prototype.orangeBtn();
		});

		// 鼠标移出按钮方法
		searchBtn.mouseleave(function() {
			if (document.activeElement.id == "search") {
				return;
			}
			HeaderSearch.prototype.lightBtn();
			HeaderSearch.prototype.lightSearch();
		});

		//鼠标移入搜索框，热词方法
		var temp = $("#search,.search-hot-words");
		temp.mouseenter(function() {
			if (document.activeElement.id == "search") {
				return;
			}
			HeaderSearch.prototype.darkSearch();
			HeaderSearch.prototype.darkBtn();
		});

		//鼠标移出搜索框，热词方法
		$("#search,.search-hot-words").mouseleave(function() {
			if (document.activeElement.id == "search") {
				return;
			}
			HeaderSearch.prototype.lightSearch();
			HeaderSearch.prototype.lightBtn();
		});
	}

	//搜索框获取焦点
	search.focus(function() {
		var border = 1 / 16 + "rem solid #ff6700";
		search.css({
			"border-top": border,
			"border-left": border,
			"border-bottom": border
		});
		searchBtn.css({
			"border": border
		});

		searchHotWords.fadeOut(150);
		keywordsList.show();
	});

	// 搜索框失去焦点
	search.blur(function() {
		searchHotWords.fadeIn(150);
		keywordsList.hide();
		HeaderSearch.prototype.lightSearch();
		HeaderSearch.prototype.lightBtn();
	});

	//鼠标移入标题栏显示弹出菜单
	$(".nav-list .nav-item:lt(8) a,.header-nav-menu").mouseenter(function() {
		var menu = $(this).data("menu");
		if (menu != null) {
			for (var i = 1; i <= 8; i++) {
				$("#menu-" + i).css("display", "none");
				if (menu == "menu-" + i) {
					$("#menu-" + i).css("display", "block");
				}
			}
		}
		HeaderSearch.prototype.showNavMenu();
	});

	//鼠标移出标题栏隐藏弹出菜单
	$(".nav-list .nav-item:lt(8) a,.header-nav-menu").mouseleave(function() {
		HeaderSearch.prototype.hideNavMenu();
	});

	var headSearch = factory("HeaderSearch");
	headSearch.mouse();

	//大英雄区图片轮播效果
	function HomeHeroSlider() {

	}

	//检测按钮向前还是向后
	HomeHeroSlider.prototype.direction = "next";

	//记录大英雄区轮播图片序号	
	HomeHeroSlider.prototype.order = 0;

	//大英雄区轮播图片切换方法
	HomeHeroSlider.prototype.change = function() {
		// var order= HomeHeroSlider.prototype.order;
		// if(order==-1){
		// 	HomeHeroSlider.prototype.order=1;
		// 	return;
		// }
		// //查询所有轮播图片
		// var img=$(".ui-viewport img");
		// 
		// //图片淡出
		// img.eq(order-1).css({
		// 	"opacity":0,
		// 	"z-index":-1
		// });
		// 
		// //图片淡入
		// img.eq(order).css({
		// 	"opacity":1,
		// 	"z-index":50
		// });
		// 
		// HomeHeroSlider.prototype.order=(order==4)?0:order+1;

		//查询所有轮播图片
		var img = $(".home-hero-slider .ui-viewport img");
		var order = HomeHeroSlider.prototype.order;
		var direction = HomeHeroSlider.prototype.direction;

		//选中所有球形按钮
		var paperLink = $(".home-hero-slider .ui-paper-link");

		//取消球形按钮的选中样式
		paperLink.eq(order).removeClass("active");

		if (direction == "next") {
			order++;
			if (order > 4) {
				order = 0;
			}
		} else if (direction == "prev") {
			order--;
			if (order < 0) {
				order = 4;
			}
		}
		img.eq(order).siblings().css({
			"opacity": 0,
			"z-index": -1
		});
		img.eq(order).css({
			"opacity": 1,
			"z-index": 50
		});
		HomeHeroSlider.prototype.order = order;

		// 添加球形按钮样式
		paperLink.eq(order).addClass("active");
	}

	//图片轮播方法封装
	HomeHeroSlider.prototype.changeTo = function(index) {
		var img = $(".home-hero-slider .ui-viewport img");

		//选中所有球形按钮
		var paperLink = $(".home-hero-slider .ui-paper-link");

		//取消球形按钮的选中样式
		paperLink.removeClass("active");
		img.eq(index).siblings().css({
			"opacity": 0,
			"z-index": -1
		});
		img.eq(index).css({
			"opacity": 1,
			"z-index": 50
		});
		HomeHeroSlider.prototype.order = index;
		// 添加球形按钮样式
		paperLink.eq(index).addClass("active");
	}

	//设置大英雄区鼠标点击事件
	HomeHeroSlider.prototype.mouse = function() {
		var prev = $(".home-hero-container .ui-prev");
		prev.click(function() {
			clearInterval(heroSliderTimer); //取消大英雄区图片轮播定时器
			HomeHeroSlider.prototype.direction = "prev";
			HomeHeroSlider.prototype.change();
		});
		var next = $(".home-hero-container .ui-next");
		next.click(function() {
			clearInterval(heroSliderTimer); //取消大英雄区图片轮播定时器
			HomeHeroSlider.prototype.direction = "next";
			HomeHeroSlider.prototype.change();
		});

		//球形按钮点击事件
		$(".home-hero-slider .ui-paper-link").click(function() {
			clearInterval(heroSliderTimer); //取消大英雄区图片轮播定时器
			var index = $(this).data("slide-index");
			HomeHeroSlider.prototype.changeTo(index);
		});
	}

	//设置大英雄区图片轮播定时器
	var heroSlider = factory("HomeHeroSlider");
	var heroSliderTimer = setInterval(heroSlider.change, 3000);

	//调用mouse函数
	heroSlider.mouse();


	//小米闪购
	// $(".carousel-list").css("margin-left","-1226px");
	function HomeStarGoods() {

	}
	HomeStarGoods.prototype.direction = "prev"; //切换状态
	HomeStarGoods.prototype.tiemer = null; //定时器
	HomeStarGoods.prototype.change = function() {
		var direction = HomeStarGoods.prototype.direction;
		var temp = 0;
		if (direction == "prev") {
			temp = -1226 / 16 + "rem";
			HomeStarGoods.prototype.direction = "next";
			var control=$(".control-next");
			control.siblings().removeClass("control-active");
			control.addClass("control-active");
		} else {
			temp = 0
			HomeStarGoods.prototype.direction = "prev";
			var control=$(".control-prev");
			control.siblings().removeClass("control-active");
			control.addClass("control-active");
		}
		$(".carousel-list").css("margin-left", temp);
	}
	HomeStarGoods.prototype.mouse = function() {
		$(".control-prev").click(function() {
			var direction = HomeStarGoods.prototype.direction;
			if (direction == "next") {
				HomeStarGoods.prototype.change();
				HomeStarGoods.prototype.initTimer();
				$(this).siblings().removeClass("control-active");
				$(this).addClass("control-active");
			}
		});
		$(".control-next").click(function() {
			var direction = HomeStarGoods.prototype.direction;
			if (direction == "prev") {
				HomeStarGoods.prototype.change();
				HomeStarGoods.prototype.initTimer();
				$(this).siblings().removeClass("control-active");
				$(this).addClass("control-active");
			}
		});
	}

	HomeStarGoods.prototype.initTimer = function() {
		clearInterval(HomeStarGoods.prototype.timer);
		HomeStarGoods.prototype.timer = setInterval(function() {
			HomeStarGoods.prototype.change();
		}, 5000);
	}

	var starGoods = factory("HomeStarGoods");
	starGoods.mouse();
	starGoods.initTimer();


	homeelecMore1.mouseenter(function(){
		// alert("1");
		homeelecMore2.removeClass("more1");
		homeelecMore1.addClass("more1");
		homeelecList1.css({
			"display":"block"
		});
		homeelecList2.css({
			"display":"none"
		});
	});

	homeelecMore2.mouseenter(function(){
		// alert("2");
		homeelecMore1.removeClass("more1");
		homeelecMore2.addClass("more1");
		homeelecList1.css({
			"display":"none"
		});
		homeelecList2.css({
			"display":"block"
		});
	});


	smartMore1.mouseenter(function(){
		// alert("1");
		smartMore2.removeClass("more1");
		smartMore1.addClass("more1");
		smartList1.css({
			"display":"block"
		});
		smartList2.css({
			"display":"none"
		});
	});

	smartMore2.mouseenter(function(){
		// alert("2");
		smartMore1.removeClass("more1");
		smartMore2.addClass("more1");
		smartList1.css({
			"display":"none"
		});
		smartList2.css({
			"display":"block"
		});
	});


	collocationMore1.mouseenter(function(){
		// alert("1");
		collocationMore2.removeClass("more1");
		collocationMore1.addClass("more1");
		collocationList1.css({
			"display":"block"
		});
		collocationList2.css({
			"display":"none"
		});
	});

	collocationMore2.mouseenter(function(){
		// alert("2");
		collocationMore1.removeClass("more1");
		collocationMore2.addClass("more1");
		collocationList1.css({
			"display":"none"
		});
		collocationList2.css({
			"display":"block"
		});
	});

	partsMore1.mouseenter(function(){
		// alert("1");
		partsMore2.removeClass("more1");
		partsMore1.addClass("more1");
		partsList1.css({
			"display":"block"
		});
		partsList2.css({
			"display":"none"
		});
	});

	partsMore2.mouseenter(function(){
		// alert("2");
		partsMore1.removeClass("more1");
		partsMore2.addClass("more1");
		partsList1.css({
			"display":"none"
		});
		partsList2.css({
			"display":"block"
		});
	});

	peripheralMore1.mouseenter(function(){
		// alert("1");
		peripheralMore2.removeClass("more1");
		peripheralMore1.addClass("more1");
		peripheralList1.css({
			"display":"block"
		});
		peripheralList2.css({
			"display":"none"
		});
	});

	peripheralMore2.mouseenter(function(){
		// alert("2");
		peripheralMore1.removeClass("more1");
		peripheralMore2.addClass("more1");
		peripheralList1.css({
			"display":"none"
		});
		peripheralList2.css({
			"display":"block"
		});
	});
});
