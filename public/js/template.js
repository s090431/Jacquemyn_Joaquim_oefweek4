function main() {
var bp = document.getElementById('bp');
var fb = document.getElementById('fb');
var ins = document.getElementById('ins');
var sc = document.getElementById('sc');
var tw = document.getElementById('tw');
var yt = document.getElementById('yt');

bp.onmouseover = function(){
  bp.setAttribute("src", "img/hovers/beatport2.png");
}
bp.onmouseout = function(){
  bp.setAttribute("src", "img/icons/beatport.png");
}

fb.onmouseover = function(){
  fb.setAttribute("src", "img/hovers/facebook2.png");

}
fb.onmouseout = function(){
  fb.setAttribute("src", "img/icons/facebook.png");
}

ins.onmouseover = function(){
  ins.setAttribute("src", "img/hovers/instagram2.png");
}
ins.onmouseout = function(){
  ins.setAttribute("src", "img/icons/instagram.png");
}

sc.onmouseover = function(){
  sc.setAttribute("src", "img/hovers/soundcloud2.png");
}
sc.onmouseout = function(){
  sc.setAttribute("src", "img/icons/soundcloud.png");
}

tw.onmouseover = function(){
  tw.setAttribute("src", "img/hovers/twitter2.png");
}
tw.onmouseout = function(){
  tw.setAttribute("src", "img/icons/twitter.png");
}

yt.onmouseover = function(){
  yt.setAttribute("src", "img/hovers/youtube2.png");
}
yt.onmouseout = function(){
  yt.setAttribute("src", "img/icons/youtube.png");
}
}

window.onload = function() {
       main();
}
