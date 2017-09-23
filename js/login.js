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
//------------------------------------------------------------------------------------------------>
//return index
var ret = document.getElementById('ret');
ret.onclick = function(){
	self.location = "index.html";
}
//register
var register = document.getElementById('register');
register.onclick = function(){
	self.location = "register.html";
}
//--------------------------------------------------------------->
//获取光标
var inp = document.getElementById('inp');
var pwd = document.getElementById('pwd');
inp.onfocus = function(){
	inp.value = '';
	inp.style.color = 'black';
}
pwd.onfocus = function(){
	pwd.value = '';
	pwd.style.color = 'black';
}
//---------------------------------------------------------->
//校验
var btn = document.getElementById('btn');
var pat = /^[a-zA-Z_]\w{5,18}$ || ^1\d{10}$ || ^\d{5,15}@qq.com$ || ^[A-Za-z]@qq.com$/;
var pat1 = /^[a-zA-Z]\w{6,18}$/;
btn.onclick = function(){
	if (!pat.test(inp.value)) {
		alert('用户名或手机号或邮箱输入错误')
		return
	}
	if (!pat1.test(pwd.value)) {
		alert('密码必须大写或小写字母开头，长度不低于6')
		return
	}
	self.location = 'index.html';
}