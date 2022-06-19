jQuery(function(){
	// 変数に要素を入れる
	var open = jQuery('.modal-open'),
		close = jQuery('.modal-close'),
		container = jQuery('.modal-container');

	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){	
		container.addClass('active');
		return false;
	});

	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){	
		container.removeClass('active');
	});

	//モーダルの外側をクリックしたらモーダルを閉じる
	jQuery(document).on('click',function(e) {
		if(!jQuery(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		}
	});
});

// 画面をスクロールをしたら動かしたい場合の記述
jQuery(window).scroll(function () {
    fadeAnime();//アニメーションの関数を呼ぶ
});

jQuery(window).on('load', function() {
    fadeAnime();
})


function fadeAnime(){
    
    // 左からめくれるアニメーション
    jQuery('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
        var elemPos = jQuery(this).offset().top-50;//要素より、50px上の
        var scroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        if (scroll >= elemPos - windowHeight){
            jQuery(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
        }else{
            jQuery(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
        }
    });	

    // めくれを遅らせる
    jQuery('.bgLRextendDelayTrigger').each(function(){ //bgLRextendTriggerというクラス名が
        var elemPos = jQuery(this).offset().top-50;//要素より、50px上の
        var scroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        if (scroll >= elemPos - windowHeight){
            jQuery(this).addClass('bgLRextendDelay');// 画面内に入ったらbgLRextendというクラス名を追記
        }else{
            jQuery(this).removeClass('bgLRextendDelay');// 画面外に出たらbgLRextendというクラス名を外す
        }
    });	

    jQuery('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
        var elemPos = jQuery(this).offset().top-50;//要素より、50px上の
        var scroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        if (scroll >= elemPos - windowHeight){
            jQuery(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
        }else{
            jQuery(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
        }
    });
    // ふわっ（下から）
    jQuery('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
        var elemPos = jQuery(this).offset().top-50;//要素より、50px上の
        var scroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        if (scroll >= elemPos - windowHeight){
        jQuery(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
        }else{
        jQuery(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
        }
    });
    
    // パタッ（左へ）
    jQuery('.flipLeftTrigger').each(function(){ //flipLeftTriggerというクラス名が
        var elemPos = jQuery(this).offset().top-50;//要素より、50px上の
        var scroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        if (scroll >= elemPos - windowHeight){
        jQuery(this).addClass('flipLeft');// 画面内に入ったらflipLeftというクラス名を追記
        }else{
        jQuery(this).removeClass('flipLeft');// 画面外に出たらflipLeftというクラス名を外す
        }
    });
    

    jQuery('.flipRightTrigger').each(function(){ //flipRightTriggerというクラス名が
        var elemPos = jQuery(this).offset().top-50;//要素より、50px上の
        var scroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        if (scroll >= elemPos - windowHeight){
        jQuery(this).addClass('flipRight');// 画面内に入ったらflipRightというクラス名を追記
        }else{
        jQuery(this).removeClass('flipRight');// 画面外に出たらflipRightというクラス名を外す
        }
    });

    jQuery('.slideLeftInTrigger').each(function(){ //slideLeftInTriggerというクラス名が
        var elemPos = jQuery(this).offset().top-50;//要素より、50px上の
        var scroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        if (scroll >= elemPos - windowHeight){
        jQuery(this).addClass('slideLeftIn');// 画面内に入ったらslideLeftInLeftというクラス名を追記
        }else{
        jQuery(this).removeClass('slideLeftIn');// 画面外に出たらslideLeftInというクラス名を外す
        }
    });
    
    jQuery('.slideRightInTrigger').each(function(){ //slideRightInTriggerというクラス名が
        var elemPos = jQuery(this).offset().top-50;//要素より、50px上の
        var scroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        if (scroll >= elemPos - windowHeight){
        jQuery(this).addClass('slideRightIn');// 画面内に入ったらslideRightInLeftというクラス名を追記
        }else{
        jQuery(this).removeClass('slideRightIn');// 画面外に出たらslideRightInというクラス名を外す
        }
    });


    //スライドdelay 
    jQuery('.slideLeftInDelayTrigger').each(function(){ //slideLeftInTriggerというクラス名が
        var elemPos = jQuery(this).offset().top-50;//要素より、50px上の
        var scroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        if (scroll >= elemPos - windowHeight){
        jQuery(this).addClass('slideLeftInDelay');// 画面内に入ったらslideLeftInLeftというクラス名を追記
        }else{
        jQuery(this).removeClass('slideLeftInDelay');// 画面外に出たらslideLeftInというクラス名を外す
        }
    });
    
    jQuery('.slideRightInDelayTrigger').each(function(){ //slideRightInTriggerというクラス名が
        var elemPos = jQuery(this).offset().top-50;//要素より、50px上の
        var scroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        if (scroll >= elemPos - windowHeight){
        jQuery(this).addClass('slideRightInDelay');// 画面内に入ったらslideRightInLeftというクラス名を追記
        }else{
        jQuery(this).removeClass('slideRightInDelay');// 画面外に出たらslideRightInというクラス名を外す
        }
    });

    jQuery('.floatUpTrigger').each(function(){ //floatUpTriggerというクラス名が
        var elemPos = jQuery(this).offset().top-50;//要素より、50px上の
        var scroll = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        if (scroll >= elemPos - windowHeight){
        jQuery(this).addClass('floatUp');// 画面内に入ったらfloatUpというクラス名を追記
        }else{
        jQuery(this).removeClass('floatUp');// 画面外に出たらfloatUpというクラス名を外す
        }
    });

}