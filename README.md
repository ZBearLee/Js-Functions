# Js-Functions

Js中声明，创建函数的方式和类型

- **函数声名**

	最普通最标准的声明函数方法，包括函数名及函数体

- **函数表达式**

	使用function关键字声明一个函数，但未给函数命名，最后将匿名函数赋予一个变量，叫函数表达式，这是最常见的函数表达式语法形式
- **匿名函数**

	匿名函数就是没有实际名字的函数，可以通过输出 fn.name 来判断，没有name的就是匿名函数
- **具名函数**

	创建一个变量，内容为一个带有名称的函数，可以通过输出 fn.name 来判断，有name的就是具名函数
- **立即执行函数(自执行函数)**

	
 	 ```
	(function () {
  	})()
  	```

 	```
 	 (function () {
  	}())
  	```
  
	是两种javascript立即执行函数的常见写法
- **构造函数**

	构造函数通常通过new对函数进行实例化
	
- **箭头函数**
	
	x => x * x 带有箭头的函数
  
- **高阶函数**
	
	高阶函数只是将函数作为参数或返回值的函数
