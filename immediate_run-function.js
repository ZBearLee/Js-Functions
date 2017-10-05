//立即执行函数(自执行函数)
(function () {

})()
和(function () {

}())
    //是两种javascript立即执行函数的常见写法

    (function () { alert(1); })();
(function fn1() { alert(1); })();
//自执行函数属于“函数表达式”，规则相同