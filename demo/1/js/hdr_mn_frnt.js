if(screen.width>800)
{

//瑕佽緭鍑虹殑"html浠ｇ爜"

document.write('<div class="The_total hdr_bck">');
document.write('<div class="hdr_con">');
document.write('<div>');
document.write('<div id="divLogin" class="lgn_a"></div>');
document.write('<div id="divLoginSuccess"></div>');
document.write('<div id="ExitCookies" class="lgn_a lgn_n"><a href="javascript:void(0);" onclick="$.cookie(&#39;userName&#39;,null,{ path: &#39;/&#39; ,domain: &#39;niceloo.com&#39; });$.cookie(&#39;Pwd&#39;,null,{path:&#39;/&#39;,domain: &#39;niceloo.com&#39; });$.cookie(&#39;UserId&#39;,null,{path: &#39;/&#39;,domain: &#39;niceloo.com&#39; });$.cookie(&#39;RealName&#39;,null,{path:&#39;/&#39;,domain: &#39;niceloo.com&#39; });window.location.reload();">退出</a></div>');
document.write('</div>');
document.write('<ul>');
document.write('<li class="hdr_con_l_n"><a href="http://www.niceloo.com/Audition/" target="_blank" class="hdr_con_a1">视频公开课</a></li>');
document.write('<li><a href="http://www.niceloo.com/OpenLesson/LessonItemChoose.aspx" target="_blank" class="hdr_con_a2">直播公开课</a></li>');
document.write('<li><a href="http://www.niceloo.com/exam/" target="_blank" class="hdr_con_a3">在线模考</a></li>');
document.write('<li><a href="http://www.niceloo.com/zhuanti/2014ydkt/" target="_blank" class="hdr_con_a4">移动APP</a></li>');
document.write('<li><a href="http://www.niceloo.com/zhuanti/wxpt/index.html" target="_blank" class="hdr_con_a5">微信</a></li>');
document.write('</ul>');
document.write('</div>');
document.write('<div class="dv_mn" id="nav">');
document.write('<div id="hdr_mn">');
document.write('<h1><a href="http://www.niceloo.com/" target="_blank"><img src="http://www.niceloo.com/Zhuanti/hdr_mn/images/logo.png" alt=""></a><span id="demo"></span>');
document.write('</h1>');
document.write('<div>');
	
	
	var addLink = document.createElement("script");
	var fotId = document.getElementById("Popup");
	var linkSrc = "http://www.niceloo.com/zhuanti/hdr_mn/demoHref.js";
		addLink.setAttribute("src",linkSrc);
	document.body.insertBefore(addLink,fotId);

};

