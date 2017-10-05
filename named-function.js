//具名函数
//创建一个变量，内容为一个带有名称的函数
var fn1 = function xxcanghai() { };

//具名函数表达式的函数名只能在创建函数内部使用
//即采用此种方法创建的函数在函数外层只能使用fn1不能使用xxcanghai的函数名。xxcanghai的命名只能在创建的函数内部使用
var fn1 = function xxcanghai() {
    console.log("in:fn1<", typeof fn1, ">xxcanghai:<", typeof xxcanghai, ">");
};
console.log("out:fn1<", typeof fn1, ">xxcanghai:<", typeof xxcanghai, ">");
fn1();
  //out:fn1< function >xxcanghai:< undefined >
  //in:fn1< function >xxcanghai:< function >
 // 可以看到在函数外部（out）无法使用xxcanghai的函数名，为undefined