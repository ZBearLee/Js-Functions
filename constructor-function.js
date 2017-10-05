//函数的构造语法有这三种：
function functionName(arg0, arg1, ... argN) { statements }//function语句 
var function_name = new Function(arg1, arg2, ... argN, function_body);//Function()构造函数 
var func = function(arg0, arg1, ... argN) { statements };//函数直接量 


//demo
function callAnotherFunc(fnFunction, vArgument) { 
    fnFunction(vArgument); 
    } 
    var doAdd = new Function("iNum", "alert(iNum + 10)"); 
    callAnotherFunc(doAdd, 10); //输出 "20"
    //尽管可以使用 Function 构造函数创建函数，但最好不要使用它，因为用它定义函数比用传统方式要慢得多
    //。不过，所有函数都应看作 Function 类的实例 。 