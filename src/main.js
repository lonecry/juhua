import $ from "jquery";
import AOS from 'aos';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import 'swiper/dist/css/swiper.css'
import './assets/css/reset.css';
import './assets/css/animation.css';
import './assets/css/cssfromps.css';
import './assets/css/css.css';

var jQuery = require("jquery-easing");
// import {CountUp} from 'countup.js';
import {fenxiang} from "./lib/fenxiang"
// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
let index = 0
let air = 1 / 40;
let clickTimes = 0;
let score = 0;
let rem = document.documentElement.clientWidth / 750 * 100
let dheight = document.documentElement.clientHeight
console.log(dheight);
// console.log(`width is ${rem}`);
let play_now = true;
let music_now = true;
let playused = false;
let lastvideo = document.getElementById('lastvideo')
let firstvideo = document.getElementById('firstvideo')
let sandaivideo = document.getElementById('sandaivideo')
let sandaiaudio = document.getElementById('sandaiaudio')
let stagevideo = document.getElementById('stagevideo')
let hzmaudio = document.getElementById('hzmaudio')
lastvideo.addEventListener('play', function (){
	bgmusicpause()
})
sandaiaudio.addEventListener('play', function (){
	bgmusicpause()
})
sandaivideo.addEventListener('play', function (){
	bgmusicpause()
})
stagevideo.addEventListener('play', function (){
	bgmusicpause()
})
sandaivideo.addEventListener('ended', function (){
	musicreturn()
	$('.generationvideo').hide()
})
sandaiaudio.addEventListener('ended', function (){
	musicreturn()
})
stagevideo.addEventListener('ended', function (){
	musicreturn()
})
lastvideo.addEventListener('ended', function (){
	musicreturn()
})
sandaivideo.addEventListener('ended', function (){
	musicreturn()
})
firstvideo.addEventListener('ended', function (){
	// document.getElementById("musics").play();
	$('.shan').remove()
	$('.stage,.home').fadeIn()
})
$('.skip1').click(() =>{
	// document.getElementById("musics").play();
	$('.shan').remove()
	$('.stage,.home').fadeIn()
})
$('.skip2').click(() =>{
	sandaivideo.pause()
	// document.getElementById("musics").play();
	musicreturn()
	$('.generationvideo').hide()
})
hzmaudio.addEventListener('play', function (){
	bgmusicpause()
})
hzmaudio.addEventListener('ended', function (){
	musicreturn()
})
// document.addEventListener('aos:in:super-duper', ({ detail }) => {
// 	console.log('animated in', detail);
// });
//
// document.addEventListener('aos:out:super-duper', ({ detail }) => {
// 	console.log('animated out', detail);
// });
$(() =>{
	AOS.init({
		disable: 'false',
		duration: 1200,
	});
	// var vConsole = new VConsole();
	// console.log(vConsole);
	fenxiang("“巨”透“浙”家国企", "中国蓝融媒体中心出品", "“巨”透“浙”家国企", '', "http://o.cztvcloud.com/181/5708731/images/fenxiang.jpg")
	init()
	setTimeout(() =>{
		$('.loading').hide()
		$('.shan').fadeIn()
	}, 1000)
	//必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
	document.addEventListener("WeixinJSBridgeReady", function (){
		// document.getElementById("musics").load();
		document.getElementById("firstvideo").load();
		document.getElementById("sandaivideo").load();
		document.getElementById("hzmaudio").load();
		document.getElementById("firstvideo").play();
	}, false);
	document.getElementById("firstvideo").play();
	$(".music_play").click(function (){
		if (play_now) {
			$(".music_play").removeClass("music_pause");
			$(".music_play").addClass("music_pause");
			play_now = false;
			playused = false;
			$(".bgMusic")[0].pause();
			// $(".music").attr("src", "https://o.cztvcloud.com/181/4892748/images/music-off.png")
		} else {
			$(".music_play").removeClass("music_pause");
			play_now = true;
			playused = false;
			$(".bgMusic")[0].play();
			// $(".music").attr("src", "https://o.cztvcloud.com/181/4892748/images/music-on.png")
		}
	});
	$('.enter').click(() =>{
		$('.page1').hide()
		$('.page2').fadeIn()
	})
	$('.sp').click(function (){
		$('.sp').removeClass('spactive xuanren')
		$(this).addClass('spactive')
		document.getElementById('select').play()
	})
	console.log("rem is " + rem);
	var containertop = (14.48 * rem - dheight) / 2
	$('.stageContailer').css({
		"top": -containertop
	})
	// Entrance here
	var rokouclickable = true
	$('#rukou1').click(function (){
		$('.generationvideo').fadeIn()
		$('.generation').removeClass('clickable')
		$('.g1').addClass('clickable')
		$('.clickbox').animate({
			"left": "2.8rem",
			"top": "3.4rem"
		}, 1200)
		if (rokouclickable) {
			rokouclickable = false
			var id = $(this).attr('id').split('rukou')[1]
			console.log(id);
			$(".btnbg" + id).removeClass('btn' + id).addClass('rotate')
			setTimeout(() =>{
				$('.indexPage').hide()
				$('.stage1').fadeIn()
				sandaivideo.play()
				rokouclickable = true
				$(".btnbg1,.btnbg2,.btnbg3").removeClass('rotate')
			}, 2100)
		} else {
			console.log('Unclickable')
		}
	})
	$('#rukou2').click(function (){
		if (rokouclickable) {
			rokouclickable = false
			var id = $(this).attr('id').split('rukou')[1]
			console.log(id);
			$(".btnbg" + id).removeClass('btn' + id).addClass('rotate')
			setTimeout(() =>{
				$('.indexPage').hide()
				$('.stage2box').fadeIn()
				AOS.refresh()
				rokouclickable = true
				$(".btnbg1,.btnbg2,.btnbg3").removeClass('rotate')
			}, 2100)
		} else {
			console.log('Unclickable')
		}
	})
	$('#rukou3').click(function (){
		if (rokouclickable) {
			rokouclickable = false
			var id = $(this).attr('id').split('rukou')[1]
			console.log(id);
			$(".btnbg" + id).removeClass('btn' + id).addClass('rotate')
			setTimeout(() =>{
				$('.indexPage').hide()
				$('.stage4').fadeIn()
				mySwiper.update()
				mySwiper.slideTo(0)
				rokouclickable = true
				$(".btnbg1,.btnbg2,.btnbg3").removeClass('rotate')
			}, 2100)
		} else {
			console.log('Unclickable')
		}
	})
	var generationid = 0
	$(document).on('click', '.clickable,.clickbox', function (){
		var generation = $(".clickable").attr('stage')
		$('#sandaiaudio').attr('src', generationAudios[generation.split('-')[1] - 1])
		sandaiaudio.play()//播放三代人 音频
		$('.' + generation).fadeIn()
		generationid = $(".clickable").attr('id')
		$(".generation").removeClass('clickable')
		if (generationid == 1) {
			$('.g2').addClass('clickable')
		} else if (generationid == 2) {
			$('.g3').addClass('clickable')
		}
	})
	$('.substagecloses').click(() =>{
		sandaiaudio.pause()//播放三代人 音频
		$('.substage').fadeOut()
		if (generationid == 1) {
			$('.clickbox').animate({
				"left": "3.4rem",
				"top": "7.4rem"
			}, 1000)
		} else if (generationid == 2) {
			$('.clickbox').animate({
				"left": "3.2rem",
				"top": "11.4rem"
			}, 1000)
		} else {
			console.log("Watched Over")
			console.log("dheight" + dheight);
			console.log("rem" + rem);
			console.log(-(28.96 - dheight / rem))
			$('.stageContailer').animate({
				"top": -14.48 * rem
			}, 1500)
			$('#sandaiaudio').attr('src', generationAudios[3])
			sandaiaudio.play()//播放三代人 音频
		}
	})
	$('.close4').click(() =>{
		$('.stageContailer').animate({
			"top": -containertop
		}, 900)
		$(".generation").removeClass('clickable')
		$(".g1").addClass('clickable')
		$('.clickbox').animate({
			"left": "2.8rem",
			"top": "3.4rem"
		}, 1200)
	})
	$('.p3next').click(function (){
		$('.stage2box').hide()
		$('.stage4').fadeIn()
		stagevideo.pause()
		mySwiper.update()
		mySwiper.slideTo(0)
	})
	var mySwiper = new Swiper('.swiper', {
		initialSlide: 0,
		direction: 'vertical',
		on: {
			slideChangeTransitionEnd: function (swiper){
				if (this.activeIndex == 0) {
					$('.p6t2,.p5items').hide()
					lastvideo.pause()
					$('.arrow').show()
				} else if (this.activeIndex == 1) {
					$('.p6t2').hide()
					hzmaudio.pause()
					$('.p5items').fadeIn()
					swiperScrollbar.update()
					p5b6swiper.update()
					$('.arrow').show()
				} else if (this.activeIndex == 2) {
					lastvideo.pause()
					hzmaudio.play()
					$('.p6t2').fadeIn()
					$('.p5items,.arrow').hide()
				}
			},
		},
	});
	var swiperScrollbar = new Swiper('.swiper-container-scrollbar', {
		scrollbar: '.swiper-container-scrollbar .swiper-scrollbar',
		direction: 'vertical',
		slidesPerView: 'auto',
		mousewheelControl: true,
		freeMode: true,
		nested: true,
		onSlideChangeEnd: function (swiper){
		}
	});
	var p5b6swiper = new Swiper('.p5b6swiper', {
		initialSlide: 0,
		direction: 'horizontal',
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
	$('.home').click(() =>{
		$('.indexPage').fadeIn()
		$('.stage1,.substage,.stage2box,.stage4').hide()
		sandaivideo.pause()
		sandaiaudio.pause()
		stagevideo.pause()
		musicreturn()
	})
})
function miniAlert(w){
	$('.tipos').html(w).fadeIn()
	setTimeout(() =>{
		$('.tipos').fadeOut()
	}, 1500)
}
function throttle(fun, wait){//节流函数
	let pre = new Date().getTime()
	return function (){
		let context = this;
		let args = arguments;
		let now = new Date().getTime()
		if ((now - pre) > wait) {
			fun.apply(context, args)
			pre = new Date().getTime()
		}
	}
}
function init(){
	var w, h
	if (IsPC()) {
		var height = window.innerHeight
		var width = height * 414 / 799
		w = 414;
		h = 666;
		var pcw = 750 * (w / 750);//rem
		var pch = 1334 * (w / 750);//
		$("html").css({
			"width": width,
			"margin": "0 auto",
			"marginTop": "0",
			"height": height,
			"background": "#fff"
		});
		$("html").css({fontSize: w / 750 * 100 + "px"});
		$("html").css({minHeight: h});
	}
}
function IsPC(){
	var userAgentInfo = navigator.userAgent;
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}
function GetQueryString(name){
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}
function orient(){
	if (window.orientation == 0 || window.orientation == 180) {//竖屏;//ipad、iphone竖屏；Andriod横屏
		$(".loading").hide().removeClass("hp");
		return false;
	} else if (window.orientation == 90 || window.orientation == -90) {//横屏;//ipad、iphone横屏；Andriod竖屏
		$(".loading").show().addClass("hp");
		var video = document.getElementById("video");
		video.ended();
		video.addEventListener("ended", function (){
			$("#video,.mask").hide()
		})
		$("#video").hide()
		return false;
	} else {
		$(".loading").fadeOut();
	}
}
function isAndroid(){
	var u = navigator.userAgent;
	var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
	return isAndroid
}
//点击量
$.ajax({
	url: 'http://d.cztvcloud.com/media/news?data_id=5708731&terminal=web&channel_id=181', /*url     :'http://d.cztvcloud.com/media/news?data_id=764588&terminal=web&channel_id=192',*/
	type: 'get',
	dataType: 'jsonp',
	success: function (rlt){
		var hints = rlt.data.hits
		// console.log(hints);
		var analysisurl = "http://d.cztvcloud.com/visit/ie";
		var channelId = '181';
		var itemId = '5708731';
		var title = 'read';
		var editorId = '';
		var type = '';
		analysis(analysisurl, channelId, itemId, title, editorId, 1, type);
		function analysis(url, channelId, itemId, title, editorId, terminal, type){
			var data = {
				channel_id: channelId,
				item_id: itemId,
				title: title,
				editor_id: editorId,
				terminal: terminal,
				type: type
			}
			$.ajax({
				type: "GET",
				url: url,
				data: data,
				dataType: "jsonp",
				success: function (data){
					console.log(data);
				}
			});
		}
	}
})
function bgmusicpause(){
	// if (play_now) {
	// 	$(".music_play").removeClass("music_pause");
	// 	$(".music_play").addClass("music_pause");
	// 	play_now = false;
	// 	playused = true;
	// 	$(".bgMusic")[0].pause();
	// 	// $(".music").attr("src", "https://o.cztvcloud.com/181/4892748/images/music-off.png")
	// }
}
function musicreturn(){
	// if (playused) {
	// 	$(".music_play").removeClass("music_pause");
	// 	play_now = true;
	// 	playused = false;
	// 	$(".bgMusic")[0].play();
	// 	// $(".music").attr("src", "https://o.cztvcloud.com/181/4984956/images/musicon.png")
	// }
}
var generationAudios = [
	'http://v3.cztv.com/cztv/vod/2019/07/24/2342e921ec1b497f847be72609300cc1/h264_128k_mp3.mp3',
	'http://v3.cztv.com/cztv/vod/2019/07/26/32da3624c272400cb4019c8b3c072fa3/h264_128k_mp3.mp3',
	'http://v3.cztv.com/cztv/vod/2019/07/24/64b5ca79d40642ada3a25d99dec0ce8f/h264_128k_mp3.mp3',
	'http://v3.cztv.com/cztv/vod/2019/07/24/4978ed82d4c34c8da27a66bc569df87d/h264_128k_mp3.mp3'
]