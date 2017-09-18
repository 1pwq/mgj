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
//-------------------------------------------------------------------------------------------------------------------------->
//scroll固定到top
  var node = document.getElementById("node"),
  H = 0,
  Y = node
  while (Y) {
    H += Y.offsetTop; Y = Y.offsetParent
  }
  window.onscroll = function(){
    var s = document.body.scrollTop || document.documentElement.scrollTop//(网页被卷去的高 获取滚动条位置)
    if(s>H) {
        node.style = "position:fixed;top:0;"    
    } else{
      node.style = "position:static;"
    }
  }
//------------------------------------------------------------------------------------------------------->
//shadow与快捷菜单
  var shadow = document.getElementById('shadow');
  var nav2 = document.getElementById('nav2');
  var test = document.getElementById('test');
  var back = document.getElementById('back');
  var word = document.getElementById('word');
  var replace = document.getElementById('replace');
  word.onclick = function(){
    disOrNone(true);     
  }
  replace.onclick = function(){
    disOrNone(false);      
  }
  shadow.onclick = function(){
    disOrNone(false);      
  }
  function disOrNone(a){
    if (a) {
      shadow.style.display = 'block';
      nav2.style.display = 'block';
      back.style.background = 'pink';
      word.style.display = 'none';
      replace.style.display = 'block';
    }else{
      shadow.style.display = 'none';
      nav2.style.display = 'none';
      back.style.background = 'black';
      replace.style.display = 'none';
      word.style.display = 'block';
    }
  }
//------------------------------------------------------------------------------------------->
//滚动出现置顶
  var a = window.onscroll;
  if(typeof a == 'function'){
    window.onscroll = function(){
      a.call(this);
       var st = document.documentElement.scrollTop || document.body.scrollTop;
      if (st > 400){
          document.getElementById("toTop").style.display = "block";
      } else{
           document.getElementById("toTop").style.display = "none";
      }
    }
  }
//------------------------------------------------------------------------------------------------>
//跳转页面
  var nav2In = document.getElementById('nav2In');
  nav2In.onclick = function(){
    self.location = 'index.html';
  }
  var nav2Sh = document.getElementById('nav2Sh');
  nav2Sh.onclick = function(){
    self.location = 'shopping.html';
  }
//---------------------------------------------------------------------------------------->
//服务说明出现或消失
  var ret = document.getElementById('ret');
  var serve = document.getElementById('serve');
  var ico = document.getElementById('ico');
  ico.onclick = function(){
    shadow.style.display = 'block';
    serve.style.display = 'block';
  }
  ret.onclick = function(){
    shadow.style.display = 'none';
    serve.style.display = 'none';
  }
//---------------------------------------------------------------------------------->
//选择出现阴影与内容
  var retu = document.getElementById('retu');
  var arrows = document.getElementById('arrows');
  var select = document.getElementById('select');
  arrows.onclick = function(){
    shadow.style.display = 'block';
    select.style.display = 'block';
  }
  retu.onclick = function(){
    shadow.style.display = 'none';
    select.style.display = 'none';
  }
//-------------------------------------------------------------------------->
//颜色与尺寸的选择
  var colo = document.getElementById('colo');
  var size = document.getElementById('size');
  var bla = document.getElementById('bla');
  var big = document.getElementById('big');
  var sub = document.getElementById('sub');
  var num = document.getElementById('num');
  var plus = document.getElementById('plus');
  var please = document.getElementById('please')
  var pri = document.getElementById('pri');
  var selCS = document.getElementById('selCS');
  var co = document.getElementById('CS');
  var cha = document.getElementById('cha');
  var count = 0;
  bla.onclick = function(){
    if(count == 0){
      please.innerHTML = '请选择：';
      bla.style.color='#333';       
      bla.style.border = '1px solid #ccc';
      colo.innerHTML = '颜色';
      colo.style.color = '#333';
      selCS.innerHTML = '请选择：';
      co.innerHTML = '颜色/尺寸';
      co.style.color = '#666';
      cha.src = 'img/selectR.webp';
      count++;
    }else{
      please.innerHTML = '已选择：';
      bla.style.color='#ff2255';
      bla.style.border = '1px solid #ff2255';
      colo.innerHTML = bla.innerHTML;
      colo.style.color = '#ff2255';
      selCS.innerHTML = '已选择：';
      co.innerHTML = '"气质黑"';
      co.style.color = '#ff2255';
      cha.src = 'img/select.webp';
      count = 0;
    }
  }
  big.onclick = function(){
    if(count==0){
      please.innerHTML = '请选择：';
      big.style.color='#333';       
      big.style.border = '1px solid #ccc';
      size.innerHTML = '尺寸';
      size.style.color = '#333';
      selCS.innerHTML = '请选择：';
      co.innerHTML = '颜色/尺寸';
      co.style.color = '#666';
      cha.src = 'img/selectR.webp';
      count++;
    }else{
      please.innerHTML = '已选择：';
      big.style.color='#ff2255';
      big.style.border = '1px solid #ff2255';
      size.innerHTML = big.innerHTML;
      size.style.color = '#ff2255';
      selCS.innerHTML = '已选择：';
      co.innerHTML = '"气质黑""大"';
      co.style.color = '#ff2255';
      cha.src = 'img/select.webp';
      count=0;
    }
  }
//------------------------------------------------------------------------>
//数量增加或减少
  var i = 1;
  plus.onclick = function(){
    i++;
    num.innerHTML = i;
    pri.innerHTML = parseFloat(2*pri.innerHTML);
  }
  sub.onclick = function(){
    i--;
    num.innerHTML = i;
    pri.innerHTML = parseFloat(pri.innerHTML/2);
  }

//--------------------------------------------------------------------------->
//优惠券 disappear
  var dis1 = document.getElementById('disappear1');
  var get1 = document.getElementById('get1');
  var dis2 = document.getElementById('disappear2');
  var get2 = document.getElementById('get2');
  var dis3 = document.getElementById('disappear3');
  var get3 = document.getElementById('get3');
  var dis4 = document.getElementById('disappear4');
  var get4 = document.getElementById('get4');
  dis1.onclick = function(){
    get1.style.display = 'block';
    dis1.style.background = '#ccc';
  }
  dis2.onclick = function(){
    get2.style.display = 'block';
    dis2.style.background = '#ccc';
  }
  dis3.onclick = function(){
    get3.style.display = 'block';
    dis3.style.background = '#ccc';
  }
  dis4.onclick = function(){
    get4.style.display = 'block';
    dis4.style.background = '#ccc';
  }
//----------------------------------------------------------------------->
//图文详情，商品参数，热卖推荐的变化
  var imag = document.getElementById('imag');
  var numb = document.getElementById('numb');
  var hot = document.getElementById('hot');
  var imag1 = document.getElementById('imag1');
  var numb1 = document.getElementById('numb1');
  var hot1 = document.getElementById('hot1');
  imag.onclick = function(){
    imag1.style = 'color:#ff5577;';
    numb1.style = 'color:#333;';
    hot1.style = 'color:#333;';
    this.style = 'border-bottom:1px solid red;'
    numb.style = 'border-bottom:none;';
    hot.style = 'border-bottom:none;';
  }
  numb.onclick = function(){
    imag1.style = 'color:#333;';
    hot1.style = 'color:#333;';
    numb1.style = 'color:#ff5577;';
    this.style = 'border-bottom:1px solid red;'
    imag.style = 'border-bottom:none;';
    hot.style = 'border-bottom:none;'
  }
  hot.onclick = function(){
    imag1.style = 'color:#333;';
    numb1.style = 'color:#333;';
    hot1.style = 'color:#ff5577;';
    this.style = 'border-bottom:1px solid red;'
    imag.style = 'border-bottom:none;';
    numb.style = 'border-bottom:none;';
  }