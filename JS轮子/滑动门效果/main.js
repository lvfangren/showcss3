(function(){
  var x=document.getElementById('door');
  var pic=document.getElementsByTagName('img');
  var picWidth=pic[0].offsetWidth;
  // console.log(picWidth);
  var moveWidth=160;

  var doorWidth=picWidth+(pic.length-1)*moveWidth;
  x.style.width=doorWidth+'px';
  function init(){
    for (var i = 1; i < pic.length; i++) {
      pic[i].style.left=picWidth+moveWidth*(i-1)+'px';
    }
  }
  init();
  var translate=picWidth-moveWidth;
  for (var i = 0; i < pic.length; i++) {
      (function(i){
        pic[i].onmouseover=function(){
          init();
          for (var j = 1; j <=i; j++) {
            pic[j].style.left=parseInt(pic[j].style.left,10)-translate+'px';
          }
        };
      })(i);
  }
  // function hourseEntry(){
  //
  // }
})();
