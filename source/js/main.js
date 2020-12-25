$(function(){
    // 将首页 Banner 设为窗口的高度
    $('#index-banner').css('height', document.body.clientHeight);
});
$(function(){
    $('#page-banner').css('height', document.body.clientHeight/1.8);
});
var toggle = true;
 
//导航栏按钮
$('.btnImg').click(function() {
	if (toggle) {
		$('.btnImg').css("border", "1px solid #b0ccf3");
		toggle = false
	} else {
		$('.btnImg').css("border", "1px solid transparent");
		toggle = true;
	}
	$(".show").slideToggle(300);
})
 
//窗口大小发生改变
$(window).resize(function() {
	//获取窗口宽度
	var windSize = $(window).width();
 
	if (windSize > 885) {
		$(".show").slideDown(0);
	} else {
		$(".show").slideUp(0);
	}
});
