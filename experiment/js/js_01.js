// 1.编写代码调用如下函数，将函数调用的代码和结果记录在实验报告中。
// var num1 = prompt('请输入第一个数');
// var num2 = prompt('请输入第二个数');
// function getSum(num1, num2) {
//     var sum = num1 + num2;
//     console.log(num1 + "+" + num2 + "=" + (parseInt(num1) + parseInt(num2)));  //转换输入的字符串类型为整数类型
// };
// getSum(num1, num2);
//219971123罗举

// 2.运行如下代码，如果运行正确则记录运行结果;如果报错，则修改代码，记录下错误原因。
// var getProduct = function (num1,num2) {
// 	console.log(num1 + "*" + num2 + "=" + num1 * num2);
// };
// getProduct(2,4);
// 报错原因：变量式需要先声明再调用
//219971123罗举

// 3.先阅读如下代码，思考输出的结果是什么？运行并记录输出结果
// var a = 100;
// function test() {
// 	console.log(a);
// 	a = 10;//修改了全局变量a的值，所以最后的输出改变为当前值
// 	console.log(a);
// }
// test();
// console.log(a);
//219971123罗举

// 4.先阅读如下代码，思考输出的结果是什么？运行并记录输出结果
// var a = 10;
// fun1();
// function fun1() {
// 	var b = 20;
// 	console.log(a);
// 	console.log(b);
// 	var a = 30;//a的声明被提到函数内部顶部，但是a的值不会提上来，这也导致全局变量a不能在该函数使用。
// }
//219971123罗举

// //5.运行如下代码，看看是否报错。
// function fun2(a,b) {
// 	console.log(arguments[0]);
// 	console.log(arguments[1]);
// 	console.log(arguments[2]);//arguments 对象中存储了传递的所有实参，不用考虑传入的参数数量，所以可以正常运行。
// }
// fun2(1,2,3);
//219971123罗举

// //6.尝试用for in 的循环语句打印输出第5步中fun2调用时的参数，并记录实验代码。
// function fun2(a,b) {
// 	console.log(arguments[0]);
// 	console.log(arguments[1]);
// 	console.log(arguments[2]);//arguments 对象中存储了传递的所有实参，不用考虑传入的参数数量，所以可以正常运行。
// 	for (var i in arguments) {
// 	    console.log(arguments[i]);
// 	};
// }
// fun2(1,2,3);
//219971123罗举

// //7.运行如下代码，并记录输出结果和原因。
// "use strict"
// num = 10;  //严格模式下参数需要声明
//219971123罗举

// //8.自行编写一段严格模式下报错的代码,记录代码并说明报错原因。
function sum(a, a, b) { 
  "use strict";
  return a + a + b; //严格模式参数名不能相同
}
//219971123罗举

// //9.为第8步中的错误代码添加try catch语句块，友好显示错误信息。
// "use strict";
// try {
//      p = 14;
// } catch (error) {
//     console.error("错误信息:", error);//程序出现错误依旧可以执行后续代码。
// }
// var a = 10; //验证程序是否终止。
// console.log(a)
//219971123罗举

