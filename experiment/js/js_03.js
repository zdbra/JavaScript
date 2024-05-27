//1.思考如下代码的运行结果,通过实验进行验证，同时思考最后一段代码结果的原因。
let a1, b1, c1 = [1, 2, 3];//把数组赋给了c1
console.log(a1, b1, c1);

let [a2, b2, c2] = [1, 2, 3];
console.log(a2, b2, c2);

let [a3, b3, c3] = [1, , 3];
console.log(a3, b3, c3);

let [a4, b4] = [1];//只有a4获得了值
console.log(a4, b4);

let {y: a5, b5} = {x: 1, y: 2};
console.log(a5, b5);

let {a6, b6} = 123;//类型不匹配
console.log(a6, b6);

// 2.运行如下代码，写出实验结果。
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.delete(2);//往set集合里面添加3个值，并删掉了2

let i = set.values();
console.log(i.next());//遍历开始第一个值
console.log(i.next());
console.log(i.next());//因为删除了2，所以只有两个值，已经变遍历完了。


// 3. 运行以下代码，写出为什么最后一段代码没有输出任何结果的原因。
let map = new Map();
map.set(1, "a");
map.set(2, "b");
map.set(3, "c");
map.set(4, "d"); //设置map对象的值和键

for (let i = 1; i <= map.size; i++) {
    console.log(map.get(i)); 
}

map.forEach(function(value, key) {
    console.log(value); 
});

for(let v of map.values()){ 
    console.log(v);
}

for(var prop in map){ 
    console.log(prop);
}//for in不适用map

// 4.运行如下代码，验证运行结果，并简要阐述原因。
let arr1 = [1,2,3];
let arr2 = arr1;
console.log(arr1==arr2);
//内存中位置不同上true 下false
let arr3 = [...arr1];
console.log(arr1==arr3);

//5.用箭头函数改写如下代码，写出改写后的代码并运行验证。
let arr4 = [1,2,3];
arr4.forEach(function(v,k){
	console.log(v);
})
//改写后
arr4.forEach((v, k) => {
    console.log(v);
});

//6. 运行如下代码，写出这两句代码的作用。
//创建数组并过滤数组值遍历输出。
Array.of(1,2,3).filter(i => i > 1).forEach(i => console.log(i));
//递归调用
let fib = n => n > 1 ?fib(n-1) + fib(n - 2) : n;

//7.使用class和extends实现如下关系，编写代码实现并测试。
class Animal {
    constructor(name) {
        this.name = name; //构造函数
    }
    shout() {
        console.log(`${this.name}正在说话.`);
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name);//调用父类构造函数
        this.age = age;
    }
    eat() {
        console.log(`${this.name}正在吃东西,它今年${this.age}岁.`);
    }
}
//创建实例调用方法
let dog = new Dog("小罗", 18);
dog.shout(); 
dog.eat(); 
