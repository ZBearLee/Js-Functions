//高阶函数 只是将函数作为参数或返回值的函数
//JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，
//那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。

var Moqi = function (p1) {
    this.add = function (p2) {
        return p1 + ' ' + p2;
    };
    return add;
};
console.log(Moqi('Hello')('World'));


//还原高阶函数
var Moqi = function (p1) {
    this.add = function (p2) {
        return function (p3) {
            return p1 + ',' + p2 + ' ' + p3;
        }
    };
    return this.add;
};
console.log(Moqi('Hello')('World')('two'));

//再创建一个新的函数
var Moqi = function (p1) {
    this.add = function (p2) {
        this.add1 = function (p3) {
            return p1 + ',' + p2 + ' ' + p3;
        };
        return this.add1;
    };
    return this.add;
};

//使用javascript中的call方法
var Moqi = function (p1) {
    var that = this;
    function fd(p2) {
        this.add1 = function (p3) {
            return p1 + ',' + p2 + ' ' + p3;
        };
    }
    that.add = function (p2) {
        fd.call(this, p2);
        return this.add1;
    };
    return that.add;
};

//高阶函数实例
//demo1
add = function(a,b){
    return a + b;
};
function math(func,array){
    return func(array[0],array[1]);
}
console.log(math(add,[1,2]));     //3
//传进去的add是一个参数，而在return的时候刚是一个函数


