// ;(function(window,undefined){
//   var seeding=function(picwrap,pre,next){
//     // var that=this;
//     // for (var i = 0; i < arguments.length; i++) {
//     //   if (typeof arguments[i]==='string') {
//     //       that.arguments[i]=document.getElementById(that.arguments[i]);
//     //   }
//
//     this.picwrap=document.getElementById('picwrap');
//     this.pre=document.getElementById('pre');
//     this.next=document.getElementById('next');
//
//     }
//     this.moveLength=850;
//     this.index=0;
//
//     seeding.prototype.changePic = function () {
//       if (parseInt(picwrap.style.left)<=-moveLength) {
//           picwrap.style.left=0+'px';
//       }else {
//         picwrap.style.left=parseInt(picwrap.style.left)-moveLength+'px'
//       }
//     };
//
//     seeding.prototype.auto = function () {
//         index++;
//         this.changePic();
//       };
//       window.seeding=seeding
// }
//
// )(window)



// 第一版轮播插件：实现简单轮播案例的功能：点击下翻，自动轮播
// 所需参数，点击上，下翻元素ID，图片轮播区ID
// 本版插件的实现部分参照博客：https://blog.csdn.net/hj7jay/article/details/54310784
;(function(window,undefined){
  // 轮播对象Seeding
  var Seeding=function(picwrap,pre,next){
    // 判断调用方式，嗯详细点：函数使用new运算符调用为构造函数，直接传参调用函数为普通函数
    if(! (this instanceof Seeding) ){
      return new Seeding(picwrap,pre,next)
    }

// 判断传入参数是字符串还是dom元素
    if ((typeof picwrap)==='string') {
      this.picwrap=document.getElementById('picwrap')
    }else{
      this.picwrap=picwrap
    }
    if ((typeof pre)==='string') {
      this.pre=document.getElementById('pre')
    }else{
      this.pre=pre
    }
    if ((typeof next)==='string') {
      this.next=document.getElementById('next')
    }else{
      this.next=next
    }

// 轮播区长
    this.moveLength=850;
// 初始化
    this.init();
  };

//原型链上添加方法
    Seeding.prototype={
      // 初始化方法
        init(){
          this.event()
          this.auto()
        },
        // 自动播放方法
        auto(){
          let that=this;
          (function(){
            // console.log(that);
            setInterval(function(){
              // console.log(that);
              if (parseInt(that.picwrap.style.left)<=-that.moveLength) {
                        that.picwrap.style.left=0+'px';
              }else {
                      that.picwrap.style.left=parseInt(that.picwrap.style.left)-that.moveLength+'px'
                    }
            },3000)
          })()
        },
        // 图片改变，操作dom元素css实现轮播主方法
        changePic(){
          if (parseInt(this.picwrap.style.left)<=-this.moveLength) {
                    this.picwrap.style.left=0+'px';
          }else {
                  this.picwrap.style.left=parseInt(this.picwrap.style.left)-this.moveLength+'px'
                }
        },
        // 为上，下翻按钮绑定点击事件方法
        event(){
          var that=this;
          this.pre.addEventListener('click',()=>{
            that.changePic()
          },false)
          this.next.addEventListener('click',()=>{
            that.changePic()
          },false)

        }
    }
// 接口暴露，
  window.Seeding=Seeding;
})(window)
// 嗯，最后说明，这种立即执行的传参是JQuery过去版本的，具体为什么传window，参数有undefined百度，网上有很多。
