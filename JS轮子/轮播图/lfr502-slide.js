/*
参数：picswrap 图片盒子Id
     spans
     pre  上翻按钮ID
     next  下翻按钮ID
     number 轮播图片数量
     moveImg
*/

;(function(window,undefined){
  var LfrSlide=function(type,options){
    if (!(this instanceof LfrSlide)) {
      return LfrSlide(type,options);
    }
    console.log('success');
    this.options=this.extends({
        // self参数，扩大后可暴露出去
        moveTime:3000,
        index:0
    },options)

    // this.index=0;

    this.init(type,this.options);
    this.event(this.options);
  };
  LfrSlide.prototype={
    init(type,options){
      this.auto(options)
      this.changePic1(options)
      // switch (arg) {
      //   case 1:
      //
      //     break;
      //   case 2:
      //
      //     break;
      //   case 3:
      //
      //     break;
      //   case 4:
      //
      //     break;
      //   case 5:
      //
      //     break;
      //   case 6:
      //
      //     break;
      //   default:
      //
      // }
    },
    auto(options){
      var that=this;
      setInterval(function(){
        options.index++;
        options.index%=options.number;
        // console.log(that);
        that.changeColor(options);
      },options.moveTime)
    },
    event(options){
      console.log(options.number);
      var that=this;
      options.pre.addEventListener('click',()=>{
        that.changePic1()
      },false);
      options.next.addEventListener('click',()=>{
        that.changePic1()
      },false)
    },
    changePic1(options){
      // let picwidth=this.getStyle(document.getElementsByTagName('img')[1],'width');
      // console.log(picwidth);
      let picwidth=600;
      // let moveLength=options.number*picwidth;
      // if (parseInt(options.picswrap.style.left)<-moveLength) {
      //   options.picswrap.style.left=0+'px';
      // }else{
      //   options.picswrap.style.left=parseInt(options.picswrap.style.left)-picwidth+'px';
      // }


      options.picswrap.style.left=parseInt(options.picswrap.style.left)-picwidth+'px';

    },
    changeColor(options){
      var arrbu=document.getElementById('button').getElementsByTagName('span');
      console.log(arrbu);
      for (var i = 0; i < options.number; i++) {
        arrbu[i].className=''
      }
      arrbu[options.index].classList.add('on')
    },
    // 对象属性clone（伪冒复制）
    extends(obj1,obj2){
        for (var k in obj2) {
          // if (object.hasOwnProperty(k)) {
              if ((typeof obj2[k])==='string') {
                obj1[k]=document.getElementById(obj2[k]);
              }else {
                obj1[k]=obj2[k];
              }
          // }
        }
        console.log(obj1);
        return obj1;
    },
    getStyle(element,cssname){
      // 样式获取，做了兼容
      if (window.getComputedStyle) {
        return window.getComputedStyle(element)[cssname]
      }else {
        return element.currentStyle[cssname]
      }
    }
  };
  window.LfrSlide=LfrSlide;
})(window)
