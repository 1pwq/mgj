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
//------------------------------------------------------------------------------>
//跳转页面
  var retIn = document.getElementById('retIn');
  retIn.onclick = function(){
  	self.location = 'index.html';
  }
  var retDe = document.getElementById('retDe');
  var retDet = document.getElementById('retDet');
  retDe.onclick = function(){
    self.location = 'details.html';
  }
  retDet.onclick = function(){
    self.location = 'details.html';
  }
//------------------------------------------------------------------------------------->
//circle background change
  var cir = document.getElementById('cir');
  var cir2 = document.getElementById('cir2');
  var cir3 = document.getElementById('cir3');
  var zero = document.getElementById('zero');
  var price = document.getElementById('price');
  var price1 = document.getElementById('price1');
  cir.onclick = function(){
  	if (cir.style.background == 'white') {
          cir.style.background = '#ff5777';
          cir2.style.background = '#ff5777';
          cir3.style.background = '#ff5777';
          zero.innerHTML = '（1）';
          price.innerHTML = price1.innerHTML;
      } else{
          cir.style.background = 'white';
          cir2.style.background = 'white';
          cir3.style.background = 'white';
          zero.innerHTML = '（0）';
          price.innerHTML = '￥0.00';
      }
  }
  cir2.onclick = function(){
    if (cir2.style.background == 'white') {
      cir.style.background = '#ff5777';
      cir2.style.background = '#ff5777';
      cir3.style.background = '#ff5777';
      zero.innerHTML = '（1）';
      price.innerHTML = price1.innerHTML;
    } else{
      cir.style.background = 'white';
      cir2.style.background = 'white';
      cir3.style.background = 'white';
      zero.innerHTML = '（0）';
      price.innerHTML = '￥0.00';
    }
  }
  cir3.onclick = function(){
    if (cir3.style.background == 'white') {
      cir.style.background = '#ff5777';
      cir2.style.background = '#ff5777';
      cir3.style.background = '#ff5777';
      price.innerHTML = price1.innerHTML;
    } else{
      cir.style.background = 'white';
      cir2.style.background = 'white';
      cir3.style.background = 'white';
      price.innerHTML = '￥0.00';
    }
  }
//-------------------------------------------------------------------------------------->
//领券 消失或出现
  var sure = document.getElementById('sure');
  var shadow = document.getElementById('shadow');
  var cancel = document.getElementById('cancel');
  var hide = document.getElementById('hide');
  sure.onclick = function(){
    shadow.style.display = 'block';
    hide.style.display = 'block';
    hide.style.bottom = '0';
  }
  cancel.onclick = function(){
    shadow.style.display = 'none';
    hide.style.display = 'none';
  }
//------------------------------------------------------------------------------------------------->
//领券
  var get1 = document.getElementById('get1');
  var get2 = document.getElementById('get2');
  var get3 = document.getElementById('get3');
  get1.onclick = function(){
    get1.innerHTML = '已领取';
    get1.style.border = 'none';
    get1.style.color = '#333';
  }
  get2.onclick = function(){
    get2.innerHTML = '已领取';
    get2.style.border = 'none';
    get2.style.color = '#333';
  }
  get3.onclick = function(){
    get3.innerHTML = '已领取';
    get3.style.border = 'none';
    get3.style.color = '#333';
  } 