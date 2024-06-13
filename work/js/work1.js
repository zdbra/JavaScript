//底为5的三角形
var length1 =prompt("请输入生成图形的行数:");
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
for(var o = 1;o <= length1; o++){
	for(var p = o;p<=10;p++){
		document.write('&nbsp');//每行插入合适数量的空格,20是为了在浏览器中调整摆放位置
	}
	for(var q = 1;q<=5; q++){
		document.write('*&nbsp');//为每行插入星号
	}
		document.write('<br>');
}
//219971123罗举


// 定义菱形的边长

// 上半部分菱形
for (var i = 1; i <= length1; i++) {
    for (var j = 1; j <= 10+length1 -2*i; j++){
        document.write('&nbsp;');//每行插入合适数量的空格,0是为了在浏览器中调整摆放位置
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        document.write('*&nbsp;');//每行插入星号
    }
    document.write('<br>');
}
//下半部分菱形
for(var i = length1 - 1;i>0; i--){
	for(var j = 1;j <= 10+length1 -2*i; j++){
		document.write('&nbsp;');//每行插入合适数量的空格,10是为了在浏览器中调整摆放位置
	}
	for(var k = 1; k <= 2*i -1; k++){
		document.write('*&nbsp;');//为每行插入星号
	}
	document.write('<br>');
}
//219971123罗举



