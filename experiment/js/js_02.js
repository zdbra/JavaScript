// 219971123罗举
// 1.javaScript提供了一些内置函数，用以实现对数据类型的转换丶判断等效果，请运行如下代码，
//记录其结果，并思考原因。
// (1)Number()
console.log(Number(true),Number(null),+undefined);
// true 为1, null为0, undefined 没有有效数字NaN
// (2)Boolean()
console.log(Boolean('100'),Boolean(100),Boolean(null),!!undefined);
// !!转换布尔值

// (3)parseInt()
console.log(parseInt(123.6),parseInt(0b1011011),parseInt(0X2A),parseInt(0X2A,8));
// 转换为整数，0b二进制数  0x 16进制 parseInt(0X2A,8) 16进制转换为8进制

// (4)parseFloat()
console.log(parseFloat('123.6'),parseFloat('100px'),parseFloat(010));
// 解析为浮点数，100px 在p不为数学字符后停止， 010为八进制数 8

// (5)eval()
console.log(eval('87*99+2'));
// eval()函数会将传入的字符串当作JavaScript代码执行

// (6)isNaN()
console.log(isNaN(null),isNaN('123'),isNaN('abc'),isNaN('a1b2c3'));
// isNaN 判断是否是NaN 是则true,否false

// 2.Array在JavaScript中表示数组，可以使用字面量和构造函数两种方式创建。
// (1)运行如下代码，写出运行结果。
var arr1 = [];
console.log(arr1,arr1.length);
var arr2 = [1,2,3];
console.log(arr2[0],arr2.length);
var arr3 = new Array();
console.log(arr3[1],arr3.length);
// length数组长度  arr1 输出数组全部
// (2)现在需要将数组arr2的第一个元素去掉，请查询如下地址的资料，并写出实现的代码。
console.log("删除的元素为"+arr2.shift());

// 3.Date在JavaScript中表示日期和时间，使用new Date0即可获得当前的
// 日期和时间，Date 对象有很多与日期和时间相关的方法。
var time = new Date();
console.log(time);
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
// 设置小时和分钟
var formatTime = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);//为显示一位数时添加0, 两位数时间则不影响
console.log(formatTime);


// 4.RegExp在JavaScript中表示正则表达式
// (1)运行如下代码，体验使用字面量方式创建，写出运行结果
var reg1 = /^\d{4}$/;
console.log(reg1.test('1234'),
	reg1.test('1a34'),
	reg1.test('12345')
)

// (2)运行如下代码，体验使用构造函数方式创建，写出运行结果
var reg2 = new RegExp("^[sp]\\d{1,4}$","i");
console.log(reg2.test('p123'),
	reg2.test('1234'),
	reg2.test('S10')
)
//正则表达式不区分大小写

// (3)11位手机号码中,前面3位数字表示的是网络识别码，而往后的第4位数字开始到
// 第7位数字表示的是该号码所在地区的编码，而最后4位数字则是每一位用户随机分配
// 得到的号码。比如中国电信的常用号码段有133、153. 189、180, 查阅如下地址的资料,https://www.runoob.com/jsref/jsref-obj-regexp.html
// 编写一个能校验手机号是否是中国电信的正则表达式，写出代码和测试案例。
// 正则表达式校验中国电信手机号
const recognize = /^1(33|53|89|80)\d{8}$/; // 八位整数结尾，133 153 189 180 开头

// 测试案例
const phoneNumbers = [
  "13312345678", // 中国电信
  "12312345678", // 非中国电信号码
];

phoneNumbers.forEach(phoneNumber => {
  if (recognize.test(phoneNumber)) {
    console.log(`${phoneNumber} 是中国电信号码`);
  } else {
    console.log(`${phoneNumber} 不是中国电信号码`);
  }
});

// 5. String 在基本数据类型string的对象表达,它拥有更多的对字符串进行操
// 作的属性和方法。
// (1) 目前有一个QQ邮箱的字符串，需要提取其QQ号码，请查阅如下地
// 址的资料，https://www.runoob.com/jsrefjsref-obj-string.html, 编
// 写并写出代码和测试案例.
// 正则表达式提取QQ号码
const Email = "2213098180@qq.com";
const limit = /[1-9]\d{4,10}/;
const numbers = Email.match(limit)[0];//使用match方法将Email字符串与limit正则表达式进行对比。
console.log(`提取的QQ号码：${numbers}`); //``可以解析值

// 6. Math 对象有很多与数学相关的属性和方法，可以直接使用.请查阅如下
// 地址的资料，https://www.runoob.com/isrefjsref-obj-math.html,编写
// 代码实现随机产生1.2. 3中的任意-一个整数, 写出测试案例。
function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;// Math.floor 向下取整数，
  // Math.random 取随机数0到1之间 加一使范围为 1 到3，否则为0到2
}
// 测试案例
var i = getRandomNumber();
console.log('随机整数为:'+i);


//7. 思考如下代码的运行结果，运行验证。
var x = 1;
function A(y){
	var x = 2;
	function B(z){
		console.log(x+y+z);
	}
	return B;  //使函数B可以被函数A外部调用
}
var C = A(2);
C(3); //调用的是函数B,值为2+2+3