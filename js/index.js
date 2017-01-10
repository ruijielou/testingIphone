KISSY.add('global', function(S, Node,D,E){
    var popEl = S.one('#jiathis_weixin_share');

    E.on('#weixin', 'click', function(e){
        e.halt();
        popEl.show();
    });
    E.on('.jiathis_weixin_close', 'click', function(e){
        e.halt();
        popEl.hide();
    });

    E.on('#sina', 'click', function(e){
        e.halt();
        window.open('http://v.t.sina.com.cn/share/share.php?title='+encodeURIComponent('最鲜到是提供短距离极速配送服务的平台。致力于生鲜即食配送，1小时内送达。')+'&url='+encodeURIComponent(location.href)+'&source=bookmark','_blank');
    });
    E.on('#tecent', 'click', function(e){
        e.halt();
        window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://fhl.zuixiandao.cn:8080&pics=&summary=','_blank');
    });
	
	// 如果可视区宽度小于1000px 那么底部的分享隐藏掉
	function viewport() {
		var viewportWidth = D.viewportWidth();
		if(viewportWidth < 1000) {
			if(D.query(".share").length > 0) {
				!D.hasClass(".share",'hidden') && 
				 D.addClass(".share",'hidden');
			}
		}else {
			D.removeClass(".share",'hidden');
		}
	}
	viewport();

	// 窗口缩小也顺便处理下
	E.on(window,'resize',function(){
		viewport();
	});

}, {requires: ['node','dom','event']});