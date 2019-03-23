$(document).ready(function() {
	
	// 购物车菜单弹出以及收回
	
	//弹出
	function showCartMenu() {
		$(".topbar-cart a").css({
			"color":"#ff6700",
			"background-color":"#fff"
		});
		$(".cart-menu").slideDown(100);
	}
	
	//隐藏
	function hideCartMenu() {
		$(".cart-menu").slideUp(100);
		$(".topbar-cart a").css({
			"color":"#b0b0b0",
			"background-color":"#424242"
		});
	}
	
	//BUG修复
	var cartMenuArray = [];
	$(".topbar-cart").mouseenter(function() {
		cartMenuArray.forEach(function(one){
			clearTimeout(one);
		});
		cartMenuArray=[];
		var timer = setTimeout(showCartMenu, 100);
		cartMenuArray.push(timer);
	});
	
	$(".topbar-cart").mouseleave(function() {
		cartMenuArray.forEach(function(one){
			clearTimeout(one);
		});
		cartMenuArray=[];
		var timer = setTimeout(hideCartMenu, 100);
		cartMenuArray.push(timer);
	});
	
	//鼠标移入移出搜索框，搜索按钮样式
	// 按钮移入
	$(".search-btn").mouseenter(function(){
		if(document.activeElement.id=="search"){
			return;
		}
		this.style.transitionProperty="all";
		this.style.transitionDuration="0.2s";
		this.style.transitionTimingFunction="ease";
		this.style.backgroundColor="#ff6700";
		this.style.color="#fff";
		this.style.border="none";
		var search=$("#search")[0];
		search.style.transitionDuration="0.2s";
		search.style.transitionProperty="all";
		search.style.transitionTimingFunction="ease";
		search.style.borderLeft="1px solid #bbb";
		search.style.borderBottom="1px solid #bbb";
		search.style.borderTop="1px solid #bbb";
	});
	
	// 按钮移出
	$(".search-btn").mouseleave(function(){
		if(document.activeElement.id=="search"){
			return;
		}
		this.style.transitionProperty="all";
		this.style.transitionDuration="0.2s";
		this.style.transitionTimingFunction="linear";
		this.style.backgroundColor="#fff";
		this.style.color="#616161";
		this.style.border="1px solid #e0e0e0";
		var search=$("#search")[0];
		search.style.transitionDuration="0.2s";
		search.style.transitionProperty="all";
		search.style.transitionTimingFunction="ease";
		search.style.borderLeft="1px solid #e0e0e0";
		search.style.borderBottom="1px solid #e0e0e0";
		search.style.borderTop="1px solid #e0e0e0";
	});
	
	//搜索框移入
	$("#search,.search-hot-words").mouseenter(function(){
		if(document.activeElement.id=="search"){
			return;
		}
		var search=$("#search")[0];
		search.style.transitionProperty="all";
		search.style.transitionDuration="0.2s";
		search.style.transitionTimingFunction="ease";
		search.style.borderTop="1px solid #bbb";
		search.style.borderBottom="1px solid #bbb";
		search.style.borderLeft="1px solid #bbb";
		var btn=$(".search-btn")[0];
		btn.style.border="1px solid #bbb";
		btn.style.transitionDuration="0.2s";
		btn.style.transitionProperty="all";
		btn.style.transitionTimingFunction="ease";
	});
	
	//搜索框移出
	$("#search,.search-hot-words").mouseleave(function(){
		if(document.activeElement.id=="search"){
			return;
		}
		var search=$("#search")[0];
		search.style.transitionProperty="all";
		search.style.transitionDuration="0.2s";
		search.style.transitionTimingFunction="ease";
		search.style.borderTop="1px solid #e0e0e0";
		search.style.borderBottom="1px solid #e0e0e0";
		search.style.borderLeft="1px solid #e0e0e0";
		var btn=$(".search-btn")[0];
		btn.style.transitionDuration="0.2s";
		btn.style.transitionProperty="all";
		btn.style.transitionTimingFunction="ease";
		btn.style.border="1px solid #e0e0e0";
	});
	
	/* 搜索框获取焦点 */
	$("#search").focus(function(){
		var border="1px solid #ff6700";
		this.style.borderTop=border;
		this.style.borderLeft=border;
		this.style.borderBottom=border;
		var btn=$(".search-btn")[0];
		btn.style.borderTop=border;
		btn.style.borderBottom=border;
		btn.style.borderLeft=border;
		btn.style.borderRight=border;
		$(".search-hot-words").fadeOut(150);
		$(".keywords-list").show();
	});
	
	/* 搜索框失去焦点 */
	$("#search").blur(function(){
		$(".search-hot-words").fadeIn(150);
		$(".keywords-list").hide();
		var search=$("#search")[0];
		search.style.transitionProperty="all";
		search.style.transitionDuration="0.2s";
		search.style.transitionTimingFunction="ease";
		search.style.borderTop="1px solid #e0e0e0";
		search.style.borderBottom="1px solid #e0e0e0";
		search.style.borderLeft="1px solid #e0e0e0";
		var btn=$(".search-btn")[0];
		btn.style.transitionDuration="0.2s";
		btn.style.transitionProperty="all";
		btn.style.transitionTimingFunction="ease";
		btn.style.border="1px solid #e0e0e0";
	});
});