//ES6标准新增了一种新的函数：Arrow Function（箭头函数）
x => x * x
//箭头函数相当于：
function (x) {
    return x * x;
}

//箭头函数相当于匿名函数，并且简化了函数定义。箭头函数有两种格式，一种像上面的，只包含一个表达式，连{ ... }和return都省略掉了。
//还有一种可以包含多条语句，这时候就不能省略{ ... }和return：
x => {
    if (x > 0) {
        return x * x;
    }
    else {
        return - x * x;
    }
}

//如果参数不是一个，就需要用括号()括起来：
// 两个参数:
(x, y) => x * x + y * y
    // 无参数:
    () => 3.14
        // 可变参数:
        (x, y, ...rest) => {
    var i, sum = x + y;
    for (i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}


//如果要返回一个对象，就要注意，如果是单表达式，这么写的话会报错：
// SyntaxError:
x => { foo: x }
//因为和函数体的{ ... }有语法冲突，所以要改为：
// ok:
x => ({ foo: x })


var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = function () {
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};
//箭头函数内部的this是词法作用域，由上下文确定
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
obj.getAge(); // 25
//现在，箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj
var obj = {
    birth: 1990,
    getAge: function (year) {
        var b = this.birth; // 1990
        var fn = (y) => y - this.birth; // this.birth仍是1990
        return fn.call({ birth: 2000 }, year);
    }
};
obj.getAge(2015); // 25
//由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，
//无法对this进行绑定，即传入的第一个参数被忽略：
