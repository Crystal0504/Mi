$(document).ready(function() {

	var cart = $(".topbar-cart");
	var CartLink = $(".topbar-cart a");
	var CartMenu = $(".cart-menu");

	var searchBtn = $(".search-btn");
	var search = $("#search");
	var searchHotWords = $(".search-hot-words");
	var keywordsList = $(".keywords-list");
	var headerNavMenu=$(".header-nav-menu");
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
			cartMenuArray.length=0;
			var timer = setTimeout(TopBarCart.prototype.showCartMenu, 100);
			cartMenuArray.push(timer);
		});
		
		//鼠标移出购物车
		cart.mouseleave(function() {
			cartMenuArray.forEach(function(one) {
				clearTimeout(one);
			});
			cartMenuArray.length=0
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
		}else if(key=="HomeHeroSlider"){
			return new HomeHeroSlider();
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
			"border": 1/16+"rem solid #bbb"
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
			"border": 1/16+"rem solid #e0e0e0"
		});
	}

	// 搜索框边框颜色变浅方法
	HeaderSearch.prototype.lightSearch = function() {
		var border = 1/16+"rem solid #e0e0e0";
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
		var border = 1/16+"rem solid #bbb";
		search.css({
			"transition-property": "all",
			"transition-duration": "0.2s",
			"transition-timing-function": "ease",
			"border-left": border,
			"border-bottom": border,
			"border-top": border
		});
}

	HeaderSearch.prototype.navMenuArray=[];

	// 显示标题栏弹出菜单
	HeaderSearch.prototype.showNavMenu=function(){
		var navMenuArray=HeaderSearch.prototype.navMenuArray;
		navMenuArray.forEach(function(one){
			clearTimeout(one);
		});
		navMenuArray.length=0;
		headerNavMenu.slideDown(300);
		var timer=setTimeout("$('.header-nav-menu').slideDown(300)",200);
		navMenuArray.push(timer);
	}
	
	// 隐藏标题栏弹出菜单
	HeaderSearch.prototype.hideNavMenu=function(){
		var navMenuArray=HeaderSearch.prototype.navMenuArray;
		navMenuArray.forEach(function(one){
			clearTimeout(one);
		});
		navMenuArray.length=0;
		headerNavMenu.slideDown(300);
		var timer=setTimeout("$('.header-nav-menu').slideUp(300)",200);
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
		var border = 1/16+"rem solid #ff6700";
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
	$(".nav-list .nav-item:lt(8) a,.header-nav-menu").mouseenter(function(){
		var menu=$(this).data("menu");
		if(menu!=null){
			for(var i=1;i<=8;i++){
				$("#menu-"+i).css("display","none");
			if(menu=="menu-"+i)	{
				$("#menu-"+i).css("display","block");
			}
			}
		}
		HeaderSearch.prototype.showNavMenu();
	});
	
	//鼠标移出标题栏隐藏弹出菜单
	$(".nav-list .nav-item:lt(8) a,.header-nav-menu").mouseleave(function(){
		HeaderSearch.prototype.hideNavMenu();
	});
	
	var headSearch = factory("HeaderSearch");
	headSearch.mouse();
	
	//大英雄区图片轮播效果
	function HomeHeroSlider(){
		
	}
	
	//记录大英雄区轮播图片序号	
	HomeHeroSlider.prototype.order=-1;
	
	//大英雄区轮播图片切换方法
	HomeHeroSlider.prototype.change=function(){
		var order= HomeHeroSlider.prototype.order;
		if(order==-1){
			HomeHeroSlider.prototype.order=1;
			return;
		}
		//查询所有轮播图片
		var img=$(".ui-viewport img");
		
		//图片淡出
		img.eq(order-1).css({
			"opacity":0,
			"z-index":-1
		});
		
		//图片淡入
		img.eq(order).css({
			"opacity":1,
			"z-index":50
		});
		
		HomeHeroSlider.prototype.order=(order==4)?0:order+1;
	}
	
	//设置大英雄区鼠标点击事件
	HomeHeroSlider.prototype.mouse=function(){
		var prev=$(".home-hero-container .ui-prev");
		prev.click(function(){
			clearInterval(heroSliderTimer);//取消大英雄区图片轮播定时器
		});
		var next=$(".home-hero-container .ui-next");
		next.click(function(){
			clearInterval(heroSliderTimer);//取消大英雄区图片轮播定时器
		});
	}
	
	//设置大英雄区图片轮播定时器
	var heroSlider=factory("HomeHeroSlider");
	var heroSliderTimer=setInterval(heroSlider.change,3000);
	
	//调用mouse函数
	heroSlider.mouse();
});
