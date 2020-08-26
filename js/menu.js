// ↓ハンバーガーメニューバツ切り替え
$(function(){
	
	var duration = 400;
	var $js__open = $('#js__open');
	
	var $menubtn = $('#menu-btn')
	.on('click',function(){
		$(this).find('#panel-btn-icon').toggleClass('switch');
	})
	.on('click',function(){
		$js__open.stop(true).toggleClass('nav-open');

//↓menu,close表示切り替え
	if($menubtn.find('#panel-btn-icon').hasClass('switch')){
		$menubtn.find('p > img')
		.attr('src','images/close.svg');
	}else{
		$menubtn.find('p > img')
		.attr('src', 'images/menu.svg');
	};
//↑↑
	
	if($js__open.hasClass('nav-open')){
		$js__open.stop(true).animate({
			position: 'fixed',
			background: 'gray',
			display: 'block'
		},duration);
	}else{
		$js__open.stop(true).animate({
			display: 'none'
		},duration);
	};
});
});
//↑↑

//



//↓続きボタン
$(function(){
	var duration = 300;
	
	$('.main-content_wrapper').find('.readmore > a')
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