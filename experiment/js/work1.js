//底为5的三角形
var length1 =prompt("请输入三角形的行数:");
for (var i = 1; i <= length1; i++){
	for(var j = 1;j <= 10-i; j++){
		document.write('&nbsp');//每行插入合适数量的空格
	}
	for(var k = 1;k<=i; k++){
		document.write('*&nbsp');//为每行插入星号
	}
	    document.write('<br>');  //换行
}
//219971123罗举
//底为5的平行四边形
var length2 = 5;
for(var o = 1;o <= length2; o++){
	for(var p = o;p<=20;p++){
		document.write('&nbsp');//每行插入合适数量的空格,20是为了在浏览器中调整摆放位置
	}
	for(var q = 1;q<=5; q++){
		document.write('*&nbsp');//为每行插入星号
	}
		document.write('<br>');
}
//219971123罗举


// 定义菱形的边长
var length3 = 3;
// 上半部分菱形
for (var i = 1; i <= length3; i++) {
    for (var j = 1; j <= 20+length3 -2*i; j++){
        document.write('&nbsp;');//每行插入合适数量的空格,20是为了在浏览器中调整摆放位置
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        document.write('*&nbsp;');//每行插入星号
    }
    document.write('<br>');
}
//下半部分菱形
for(var i = length3 - 1;i>0; i--){
	for(var j = 1;j <= 20+length3 -2*i; j++){
		document.write('&nbsp;');//每行插入合适数量的空格,20是为了在浏览器中调整摆放位置
	}
	for(var k = 1; k <= 2*i -1; k++){
		document.write('*&nbsp;');//为每行插入星号
	}
	document.write('<br>');
}
//219971123罗举



