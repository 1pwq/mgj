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
//--------------------------------------------------------------------------------->
var inp = document.getElementById('inp');
var search = document.getElementById('search')
var chan = document.getElementById('chan');
var searchWord = document.getElementById('searchWord');
//onfocus
inp.onfocus = function(){
	inp.value = '';
	inp.style.color = 'black';
	search.style.border = '1px solid red';
	searchWord.style.display = 'block';
	chan.style.display = 'none';
}
//---------------------------------------------------------------->
//keyword onclick
searchWord.onclick = function(){
	if (inp.value != '') {
		if (inp.value == '超值购'||'超值'||'专享价') {
			self.location = 'list.html';
		}
	}	
	inp.onblur = function(){
		searchWord.style.display = 'none';
	}
}
//keyword onkeydown
inp.onkeydown = function(e){
	var evt = e || window.event;
	if (inp.value != '') {
		if (inp.value == '超值购'||'超值'||'专享价') {
			if (evt.keyCode == 13) {
				self.location = 'list.html';
			}
		}
	}	
}
//onblur
inp.onblur = function(){
	inp.value = '露背无袖连衣裙';
	inp.style.color = '#9e9e9e';
	search.style.border = 'none';
	chan.innerHTML = '&#xe603;'
	chan.style.display = 'block';
	// searchWord.style.display = 'none';
}
//----------------------------------------------------------------------------->
//距离2017.10.01的倒计时
var h = document.getElementById('h');	
var m = document.getElementById('m');	
var s = document.getElementById('s');	
function time(){
	var nowDate = new Date();//当前系统时间
	var futDate = new Date("2018/10/01");//设定将来时间
	
	var nms = nowDate.getTime(); //now ms
	var fms = futDate.getTime(); // future ms
	var ms = fms - nms; 

	var ds = 24*3600 *1000;//一天的毫秒数 a day is millsecond
  var hs = 3600*1000;//一个小时的毫秒数 a hours is millsecond
  var mins = 1000*60;//一分钟的毫秒数 a minutes is millisecond

	var day = parseInt(ms/ds);
	var hours = parseInt(ms%ds/hs);
	var min = parseInt(ms%ds%hs/mins);
	var sec = parseInt(ms%ds%hs%mins/1000);
	h.innerHTML = add0(hours);
	m.innerHTML = add0(min);
	s.innerHTML = add0(sec);
}
function add0(num){
	if (num<10) {
		return '0' + num
	} else{
		return num
	}
}
setInterval(time,1000)
//----------------------------------------------------------------->
//跳转页面
//shopping top car
chan.onclick = function(){
	self.location = 'shopping.html'
}
//list
var package = document.getElementById('package');
package.onclick = function(){
	self.location = "list.html";
}
//shopping bottom car
var shoppingCar = document.getElementById('shoppingCar');
shoppingCar.onclick = function(){
	shoppingCar.style.color = '#ff5f7e';
	self.location = "shopping.html";
}
//details
var skip = document.getElementById('skip');
skip.onclick = function(){
	self.location = 'details.html';
}
//my
	var my = document.getElementById('my');
	my.onclick = function(){
		self.location = 'my.html';
	}
//-------------------------------------------------------------------------->
//轮番图
window.onload = function(){
  var mylist = document.getElementById("mylist");  
  var num = document.getElementById("mylist").getElementsByTagName("li"); 
  var now = 0;  
  var left = 0;  
  function hello(){ 
    if (left <= -(num.length-1)*screen.width) {  
        now = 0;  
        left = now*screen.width;  
        // mylist.style.left = -left + "px";  
        // now = now - 1;  
    }else{  
        left = -now*screen.width;  
        mylist.style.left = left + "px";  
        now = now + 1;  
    }       
  }  
  var timer = setInterval(hello,2000);  
  //移动的位置  
  // function toCover(now1){  
  //   now = now1;  
  //   // left = -now*screen.width;  
  //   mylist.style.left = left + "px";  
  //   // clearInterval(timer);         
  // }  
  // var numli=document.getElementById("underNum").getElementsByTagName("li");  
  // for (var i = 0; i <=numli.length - 1; i++) {  
  //   numli[i].index=i;  
  //   numli[i].onmouseover=function(){  
  //       toCover(this.index);      
  //   }  
  //   numli[i].onmouseout=function(){  
  //       timer = setInterval(hello,1000);  
  //   }  
  // }
}

