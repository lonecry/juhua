webpackJsonp([0],{"4jdx":function(e,n){},"991W":function(e,n){},AhPL:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("7t+N"),i=t.n(a),o=t("RInU"),c=t.n(o),s=t("DNVT"),d=(t("v2ns"),t("AhPL"),t("991W"),t("4jdx"),t("dkTG"),t("v4pY"),t("fxnj"));function l(e,n,t,a,o){var c={android:!1,android2:!1,iphone:!1,ipad:!1,pc:!1,wechat:!1,chinabluenews:!1},s=window.navigator.userAgent.toLowerCase();if(/micromessenger/.test(s)&&(c.wechat=!0,c.chinabluenews=!1),c.wechat){i.a.getJSON("http://sso.cztvcloud.com/weixin_share/share?channel_id=181&callback=?",{url:location.href.split("#")[0]},function(i){i.success&&d.config({debug:!1,appId:i.appId,timestamp:i.timestamp,nonceStr:i.nonceStr,signature:i.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]}),d.ready(function(){var i=e,c=a||function(){for(var e=location.search,n=(e=e.substr(1)).split("&"),t=n.length,a=!1,i=0;i<t;i++)"play"==n[i].split("=")[0]&&(a=!0);var o=location.href;return a?o:o+(o.indexOf("?")<0?"?":"&")+"play=1"}(),s=o,l=n,r=t;d.onMenuShareTimeline({title:r,link:c,imgUrl:s}),d.onMenuShareAppMessage({title:i,desc:l,link:c,imgUrl:s}),d.onMenuShareQQ({title:i,desc:l,link:c,imgUrl:s}),d.onMenuShareWeibo({title:i,desc:l,link:c,imgUrl:s}),window.wxIsReady||(window.wxIsReady=!0)})})}}t("avZI");var r=document.documentElement.clientWidth/750*100,u=document.documentElement.clientHeight;console.log(u);var m=!0,p=document.getElementById("lastvideo"),g=document.getElementById("firstvideo"),f=document.getElementById("sandaivideo"),v=document.getElementById("sandaiaudio"),h=document.getElementById("stagevideo"),b=document.getElementById("hzmaudio");p.addEventListener("play",function(){}),v.addEventListener("play",function(){}),f.addEventListener("play",function(){}),h.addEventListener("play",function(){}),f.addEventListener("ended",function(){i()(".generationvideo").hide()}),v.addEventListener("ended",function(){}),h.addEventListener("ended",function(){}),p.addEventListener("ended",function(){}),f.addEventListener("ended",function(){}),g.addEventListener("ended",function(){i()(".shan").remove(),i()(".stage,.home").fadeIn()}),i()(".skip1").click(function(){i()(".shan").remove(),i()(".stage,.home").fadeIn()}),i()(".skip2").click(function(){f.pause(),i()(".generationvideo").hide()}),b.addEventListener("play",function(){}),b.addEventListener("ended",function(){}),i()(function(){c.a.init({disable:"false",duration:1200}),l("“巨”透“浙”家国企","中国蓝融媒体中心出品","“巨”透“浙”家国企","","http://o.cztvcloud.com/181/5708731/images/fenxiang.jpg"),function(){var e,n;if(function(){for(var e=navigator.userAgent,n=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),t=!0,a=0;a<n.length;a++)if(e.indexOf(n[a])>0){t=!1;break}return t}()){var t=window.innerHeight,a=414*t/799;n=666;e=414;i()("html").css({width:a,margin:"0 auto",marginTop:"0",height:t,background:"#fff"}),i()("html").css({fontSize:e/750*100+"px"}),i()("html").css({minHeight:n})}}(),setTimeout(function(){i()(".loading").hide(),i()(".shan").fadeIn()},1e3),document.addEventListener("WeixinJSBridgeReady",function(){document.getElementById("firstvideo").load(),document.getElementById("sandaivideo").load(),document.getElementById("hzmaudio").load(),document.getElementById("firstvideo").play()},!1),document.getElementById("firstvideo").play(),i()(".music_play").click(function(){m?(i()(".music_play").removeClass("music_pause"),i()(".music_play").addClass("music_pause"),m=!1,!1,i()(".bgMusic")[0].pause()):(i()(".music_play").removeClass("music_pause"),m=!0,!1,i()(".bgMusic")[0].play())}),i()(".enter").click(function(){i()(".page1").hide(),i()(".page2").fadeIn()}),i()(".sp").click(function(){i()(".sp").removeClass("spactive xuanren"),i()(this).addClass("spactive"),document.getElementById("select").play()}),console.log("rem is "+r);var e=(14.48*r-u)/2;i()(".stageContailer").css({top:-e});var n=!0;i()("#rukou1").click(function(){if(i()(".generationvideo").fadeIn(),i()(".generation").removeClass("clickable"),i()(".g1").addClass("clickable"),i()(".clickbox").animate({left:"2.8rem",top:"3.4rem"},1200),n){n=!1;var e=i()(this).attr("id").split("rukou")[1];console.log(e),i()(".btnbg"+e).removeClass("btn"+e).addClass("rotate"),setTimeout(function(){i()(".indexPage").hide(),i()(".stage1").fadeIn(),f.play(),n=!0,i()(".btnbg1,.btnbg2,.btnbg3").removeClass("rotate")},2100)}else console.log("Unclickable")}),i()("#rukou2").click(function(){if(n){n=!1;var e=i()(this).attr("id").split("rukou")[1];console.log(e),i()(".btnbg"+e).removeClass("btn"+e).addClass("rotate"),setTimeout(function(){i()(".indexPage").hide(),i()(".stage2box").fadeIn(),c.a.refresh(),n=!0,i()(".btnbg1,.btnbg2,.btnbg3").removeClass("rotate")},2100)}else console.log("Unclickable")}),i()("#rukou3").click(function(){if(n){n=!1;var e=i()(this).attr("id").split("rukou")[1];console.log(e),i()(".btnbg"+e).removeClass("btn"+e).addClass("rotate"),setTimeout(function(){i()(".indexPage").hide(),i()(".stage4").fadeIn(),a.update(),a.slideTo(0),n=!0,i()(".btnbg1,.btnbg2,.btnbg3").removeClass("rotate")},2100)}else console.log("Unclickable")});var t=0;i()(document).on("click",".clickable,.clickbox",function(){var e=i()(".clickable").attr("stage");i()("#sandaiaudio").attr("src",k[e.split("-")[1]-1]),v.play(),i()("."+e).fadeIn(),t=i()(".clickable").attr("id"),i()(".generation").removeClass("clickable"),1==t?i()(".g2").addClass("clickable"):2==t&&i()(".g3").addClass("clickable")}),i()(".substagecloses").click(function(){v.pause(),i()(".substage").fadeOut(),1==t?i()(".clickbox").animate({left:"3.4rem",top:"7.4rem"},1e3):2==t?i()(".clickbox").animate({left:"3.2rem",top:"11.4rem"},1e3):(console.log("Watched Over"),console.log("dheight"+u),console.log("rem"+r),console.log(-(28.96-u/r)),i()(".stageContailer").animate({top:-14.48*r},1500),i()("#sandaiaudio").attr("src",k[3]),v.play())}),i()(".close4").click(function(){i()(".stageContailer").animate({top:-e},900),i()(".generation").removeClass("clickable"),i()(".g1").addClass("clickable"),i()(".clickbox").animate({left:"2.8rem",top:"3.4rem"},1200)}),i()(".p3next").click(function(){i()(".stage2box").hide(),i()(".stage4").fadeIn(),h.pause(),a.update(),a.slideTo(0)});var a=new s.a(".swiper",{initialSlide:0,direction:"vertical",on:{slideChangeTransitionEnd:function(e){0==this.activeIndex?(i()(".p6t2,.p5items").hide(),p.pause(),i()(".arrow").show()):1==this.activeIndex?(i()(".p6t2").hide(),b.pause(),i()(".p5items").fadeIn(),o.update(),d.update(),i()(".arrow").show()):2==this.activeIndex&&(p.pause(),b.play(),i()(".p6t2").fadeIn(),i()(".p5items,.arrow").hide())}}}),o=new s.a(".swiper-container-scrollbar",{scrollbar:".swiper-container-scrollbar .swiper-scrollbar",direction:"vertical",slidesPerView:"auto",mousewheelControl:!0,freeMode:!0,nested:!0,onSlideChangeEnd:function(e){}}),d=new s.a(".p5b6swiper",{initialSlide:0,direction:"horizontal",autoplay:{delay:3e3},pagination:{el:".swiper-pagination",clickable:!0}});i()(".home").click(function(){i()(".indexPage").fadeIn(),i()(".stage1,.substage,.stage2box,.stage4").hide(),f.pause(),v.pause(),h.pause()})}),i.a.ajax({url:"http://d.cztvcloud.com/media/news?data_id=5708731&terminal=web&channel_id=181",type:"get",dataType:"jsonp",success:function(e){e.data.hits;!function(e,n,t,a,o,c,s){var d={channel_id:n,item_id:t,title:a,editor_id:o,terminal:c,type:s};i.a.ajax({type:"GET",url:e,data:d,dataType:"jsonp",success:function(e){console.log(e)}})}("http://d.cztvcloud.com/visit/ie","181","5708731","read","",1,"")}});var k=["http://v3.cztv.com/cztv/vod/2019/07/24/2342e921ec1b497f847be72609300cc1/h264_128k_mp3.mp3","http://v3.cztv.com/cztv/vod/2019/07/26/32da3624c272400cb4019c8b3c072fa3/h264_128k_mp3.mp3","http://v3.cztv.com/cztv/vod/2019/07/24/64b5ca79d40642ada3a25d99dec0ce8f/h264_128k_mp3.mp3","http://v3.cztv.com/cztv/vod/2019/07/24/4978ed82d4c34c8da27a66bc569df87d/h264_128k_mp3.mp3"]},dkTG:function(e,n){},v2ns:function(e,n){},v4pY:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.js.map