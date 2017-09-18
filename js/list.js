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

window.onload=function(){
  //
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
}
//------------------------------------------------------------------------------------------------------------------------------------>
//
var node = document.querySelectorAll('.nodeLi');
var boxs = document.querySelectorAll('.box');
var arrImg = ['img/like-pic2.png','img/like-pic3.png','img/like-pic4.png','img/like-pic5.png','img/like-pic6.png'];
for(var i = 0; i < node.length;i++){    
  node[i].index = i;
  node[i].onclick = function(){
    for(var j = 0; j < node.length; j++){
      node[j].style.color = 'white';
    }
    this.style.color = 'black';
    var imgIndex = this.index;
    for(var k = 0; k < boxs.length; k++){
      boxs[k].firstElementChild.src = arrImg[imgIndex];
    }
  }
//----------------------------------------------------------------------->
  var skip = document.getElementById('skip');
  skip.onclick = function(){
    self.location = 'details.html';
  }
}
