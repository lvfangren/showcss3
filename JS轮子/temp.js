var Vehicle=function(){
  console.log(this);
};
var x1=new Vehicle();

var x2=new Vehicle();

function _new(constructor,params){
  var args=[].splice.call(arguments);
  var constructor=args.shift();
  var context=Object.create(constructor.prototype)
}


var person1={
  name:'LFR502',
  age:21,
  fun:function(){
    console.log('xsacsa');
  }
}
var person2=Object.create(person1);
person2.name
person2.fun()

var name='LFR502'
var person = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.prototype;
  }
};

person.describe()


// 继承
function Persion(name,age){
  this.name=name;
  this.age=age;
}
Persion.prototype.hi=function(){
  console.log('Hi my name is'+this.name+', I`m'+this.age+'years ols now.');
}
Persion.prototype.LEGS_NUM=2;
Persion.prototype.ARMS_NUM=2;
Persion.prototype.walk=function(){
  console.log(this.name+'is waking');
}
function Student(name,age,className){
  Persion.call(this,name,age);
  this.className=className;
}
Student.prototype=Object.create(Persion.prototype);
Student.prototype.construct=Student;

Student.prototype.hi=function(){
  console.log('Hi my name is'+this.name+', I`m'+this.age+'LVVF502'+this.className);
}
Student.prototype.learn=function(subject){
  console.log(this.name+'now is student'+this.subject);
}
var bosn=new Student('bosn',22,'4410');


// 模拟重载
function zz(){
  var arg=arguments;
  if(typeof arg[0]=='object'&&arg[0]){
    if(arg[0].name){
      this.name=arg[0].name;
    }
    if(arg[0].age){
      this.age=arg[0].age;
    }
  }else{
    if(arg[0]){
      this.name=arg[0];
    }
    if(arg[1]){
      this.age=arg[1];
    }
  }
}
zz.prototype.toString=function(){
  return 'my is zz';
}
var boss1=new zz({name:'LVF502',age:21})
var boss2=new zz('LVF123',22)

// 链式调用
function ClassManager(){}
ClassManager.prototype.addClass=function(arg){
  console.log('class'+arg+'addClass');
  return this;
}
var oop=new ClassManager();
oop.addClass('LF').addClass('2209')
oop.addClass('LF').addClass('2209').addClass('LF').addClass('2209')
// ...........一直加都可以
