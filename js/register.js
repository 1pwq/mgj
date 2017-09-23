!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width / 320) + "px");
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false); 
}(document, window));
//------------------------------------------------------------------------------------------
//return login
var ret = document.getElementById('ret');
ret.onclick = function(){
	self.location = "login.html";
}
//account number login
var account = document.getElementById('account');
account.onclick = function(){
	self.location = "login.html";
}
//-------------------------------------------------------------------------->
var phone = document.getElementById('phone');
var ver = document.getElementById('ver');
//获取光标触发事件
phone.onfocus = function(){
	phone.value = '';
	phone.style.color = 'black'
}
ver.onfocus = function(){
	ver.value = '';
	ver.style.color = 'black'
}
//----------------------------------------------------------->
//校验
var btn = document.getElementById('btn');
var pat = /^1\d{10}$/;
btn.onclick = function(){
	if (!pat.test(phone.value)) {
		alert('手机号错误')
		return
	}
	if (ver.value != enter.innerHTML) {
		alert('验证码错误')
		return
	}
	self.location = "index.html";	
}
//========================================================
//验证码
var enter = document.getElementById('enter');
var res = '';
var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
for(var i = 1; i <= 4; i++){
	var a = parseInt(Math.random()*arr.length-1);
	res += arr[a];
}
enter.innerHTML = res;
enter.onclick = function(){
	var res = '';
	var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
	for(var i = 1; i <= 4; i++){
		var a = parseInt(Math.random()*arr.length-1);
		res += arr[a];
	}
	enter.innerHTML = res;
}