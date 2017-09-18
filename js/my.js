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
//-------------------------------------------------------------------------------------------->
//跳转页面
	var index = document.getElementById('index');
	index.onclick = function(){
		self.location = 'index.html';
	}
	var shoppingCar = document.getElementById('shoppingCar');
	shoppingCar.onclick = function(){
		self.location = 'shopping.html';
	}
	var login = document.getElementById('login');
	login.onclick = function(){
		self.location = 'login.html';
	}
	var mine1 = document.getElementById('mine1');
	mine1.onclick = function(){
		self.location = 'shopping.html';
	}
	var mine2 = document.getElementById('mine2');
	mine2.onclick = function(){
		self.location = 'shopping.html';
	}
	var mine3 = document.getElementById('mine3');
	mine3.onclick = function(){
		self.location = 'shopping.html';
	}
