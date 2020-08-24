// ↓ハンバーガーメニューバツ切り替え
$(function(){
	
	$('#menu-btn')
			.on('click',function(){
			$(this).find('#panel-btn-icon').toggleClass('close');
	})
});
//↑↑

//



//↓続きボタン
$(function(){
	var duration = 300;
	
	$('#readmore > a')
	.on('mouseover',function(){
		$(this).stop(true).animate({
			backgroundColor: '#1E2633',
			color: '#ffffff'
		},duration);
	})
	.on('mouseout',function(){
		$(this).stop(true).animate({
			backgroundColor: '#F8F4F4',
			color: '#1E2633'
		},duration);
	});
});