alert:提醒 通过执行相应的操作，所弹出对话框的语言。
DOM:getElementById 获取一个有特定ID属性的节点。JavaScript区分大小写，
document.getElementById("purchases")
getElementByTagName返回对象数组

x = 42;声明的是一个全局变量
var x=42; 可以同时声明局部变量和全局变量
let y = 13;可以用来声明语句块代码段的局部变量（block scope local variable）.

parseInt()  转换成整数输出 转换失败返回NaN parseInt('FF','10') parseInt('FF','16') parseInt('FF','8')
首参数以0x开头，第二个参数默认为16进制
首参数以0开头，第二个参数默认为8进制

parseFloat(): 将字符串转换为十进制；

变量在函数中定义 在函数外是不可见的  如果定义在if,for中是可见的
全局变量：声明在所有函数之外的变量
局部变量：声明在函数里的变量
如果声明一个变量没有使用var，则该变量会被默认为全局变量
函数域始终优先于全局作用域  所以局部变量a会覆盖掉所有与它同名的全局变量
函数也是一种数据

delete 操作符通常用来删除对象的属性（）而不是函数，变量

自调函数：
(
	function(){
		alert('boo');
	}
)();
第二个括号的作用：立即调用；

回调函数：
使用的情况：
它可以让我们在不做命名的情况下传递函数（这意味着可以节省全局变量）。
我们可以将一个函数调用操作委托给另一个函数（这意味着可以节省一些代码编写工作）。
有助于提升性能。
缺点：函数无法重复执行
适合执行一次性或初始化的任务。

function multiplyByTwo(a,b,c){
	var i,ar=[];
	for(i=0;i<3;i++)
	{
		ar[i]=arguments[i]*2;
	}
	return ar;
} 


这个函数形参是a,b,c, 但a,b,c函数体里就没有，arguments是什么？
arguments 是调用对象的一个特殊属性
引用一个形式参数可以用参数名 也可以用arguments[]数组形式，其中arguments[0]表示第一个参数
arguments.length属性：
js不会判断你到底给函数传了多少个参数，如果多传了多余的部分就没用，但js自己不会判断。所以要自己判断
arguments的callee属性：用来引用当前正在执行的函数，这对未命名的函数调用自身很有好处

.target.odd  选取target为奇数的类
.target.even 选取target为偶数的类
animated bounce 上下晃动
animated shake 左右晃动
animated fadeOut 淡出
animated hinge 挂，掉

JavaScript提供七种不同的data types(数据类型)，它们是
undefined（未定义）, 
null（空）, 
boolean（布尔型）, 
string（字符串）, 
symbol(符号), 
number（数字）, 
and object（对象）。

.push();
.pop();
.shift();抛出第一个元素;
.unshift();移入数组的第一个




JavaScript Object Notation 简称 JSON，它使用JavaScript对象的格式来存储数据。
JSON是灵活的，因为它允许 数据结构 是 字符串，数字，布尔值，字符串，和 对象 的任意组合。



Regular expressions 正则表达式被用来根据某种匹配模式来寻找strings中的某些单词。

举例：如果我们想要找到字符串The dog chased the cat中单词 the，我们可以使用下面的正则表达式: /the/gi

我们可以把这个正则表达式分成几段：

/ 是这个正则表达式的头部

the 是我们想要匹配的模式

/ 是这个正则表达式的尾部

g 代表着 global(全局)，意味着返回所有的匹配而不仅仅是第一个。

i 代表着忽略大小写，意思是当我们寻找匹配的字符串的时候忽略掉字母的大小写。

正则表达式：var expression = /and/gi;   g: global i: ignore


我们可以在正则表达式中使用特殊选择器来选取特殊类型的值。

特殊选择器中的一种就是数字选择器\d，意思是被用来获取一个字符串的数字。

在JavaScript中, 数字选择器类似于: /\d/g。

在选择器后面添加一个加号标记(+)，例如：/\d+/g，它允许这个正则表达式匹配一个或更多数字。

尾部的g是'global'的简写，意思是允许这个正则表达式 找到所有的匹配而不是仅仅找到第一个匹配。 
/\s/g   选择字符串中的空白  空白字符有：空格符("") 回车符\r  换行符(\n) 制表符(/t) 换页符(\f)

var testString = "How many spaces are there in this sentence?";

// Only change code below this line.

var expression = /\s+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;

var nonSpaceCount = testString.match(expression).length; 
大写为取反

你可以用正则表达式选择器的大写版本 来转化任何匹配。

举个例子：\s 匹配任何空白字符，\S 匹配任何非空白字符。

就写/^[]/i，中间再加上你要忽略的
/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,""


英文标点符号比较多，如，（逗号）、。（点号）、？（问号）、：（冒号）、；（分号）、‘’（单引号）、！（感叹号）、“”（双引号）、—（连接号）、——（破折号）、……（省略号）、（）（小括号）、【】（中括号）、{}（大括号）、（顿号）、《》书名号等。以下正则表达式能够验证英文标点符号。
[，。？：；‘’！“”—……、]|(－{2})|(（）)|(【】)|({})|(《》)           （64）
　　正则表达式（64）解释：
      [，。？：；‘’！“”—……、]匹配，、。、？、：、；、‘、’、！、“、”、—、……符号。
      －{2}匹配破折号。
      （）匹配省略号小括号。
      【】匹配中括号。
     {}匹配大括号。
      《》匹配书名号。
英文标点符号比较多，如,（逗号）、.（点号）、?（问号）、:（冒号）、;（分号）、'（单引号）、!（感叹号）、"（双引号）、-（连接号）、--（破折号）、…（省略号）、()（小括号）、[]（中括号）、{}（大括号）、`（所有格符号）等。以下正则表达式能够验证英文标点符号。
[-,.?:;'"!`]|(-{2})|(/.{3})|(/(/))|(/[/])|({})                          （63）
　　正则表达式（63）解释：
      [-,.?:;'"!']可以匹配-、,、.、?、:、'、"、!、`。
      -{2}匹配破折号--。
      /.{3}匹配省略号…。
      /(/)匹配小括号()。
      /[/]匹配中括号。
      {}匹配大括号。



'<img src = "'+images[slotThree-1]+ '">'

    $($(".slot")[2]).html('<img src = "'+images[slotThree-1]+ '">');
	$($(".slot")[2]).html(slotThree);
	
	Profile Lookup 243  228
	
	
 map 方法可以方便的迭代数组
 var newArray = oldArray.map(function(val){
                            return (val+3);
                            });
var singleVal = array.reduce(
								function(previousVal, currentVal) 
								{
									return previousVal - currentVal;
								},
								0
							);
var oldArray = [1,2,3,4,5];

// 只能在这一行下面写代码
var newArray = oldArray.map(function(val){
                            return (val+3);
                            });

							
							
							
数组方法 reduce 用来迭代一个数组，并且把它累积到一个值中。

使用 reduce 方法时，你要传入一个回调函数，这个回调函数的参数是一个 累加器 （比如例子中的 previousVal) 和当前值 (currentVal）。

reduce 方法有一个可选的第二参数，它可以被用来设置累加器的初始值。如果没有在这定义初始值，那么初始值将变成数组中的第一项，而 currentVal 将从数组的第二项开始。
var array = [4,5,6,7,8];
var singleVal = 0;

// 只能在这一行下面写代码
 singleVal = array.reduce(function add(num,array){
   num += array;
   return num;
 },0);

filter 方法用来迭代一个数组，并且按给出的条件过滤出符合的元素。

filter 方法传入一个回调函数，这个回调函数会携带一个参数，参数为当前迭代的项（我们叫它 val ）。

回调函数返回 true 的项会保留在数组中，返回 false 的项会被过滤出数组。

下面的代码示例展示了使用 filter 来移除数组中值等于5的项：

 注意： 我们忽略了第二参数和第三参数，因为例子中我们只需要第一参数就够了。
var oldArray = [1,2,3,4,5,6,7,8,9,10];

// 只能在这一行下面写代码
var newArray = oldArray.filter(function(val){
  return val < 6;
});

使用 sort 方法，你可以很容易的按字母顺序或数字顺序对数组中的元素进行排序。

与我们之前用的数组方法仅仅返回一个新数组不同， sort 方法将改变原数组，返回被排序后的数组。

sort 可以把比较函数作为参数传入。比较函数有返回值，当 a 小于 b，返回一个负数；当 a 大于 b ，返回一个正数；相等时返回0。

如果没有传入比较函数，它将把值全部转成字符串，并按照字母顺序进行排序。
var array = [1, 12, 21, 2];

// 只能在这一行下面写代码

array.sort(function(val1,val2){
  return val2-val1;
});
toUpperCase  	全变成大写 
toLowerCase		全变成小写

hasOwnProperty
hasOwnProperty()函数用于指示一个对象自身(不包括原型链)是否具有指定名称的属性。如果有，返回true，否则返回false。

该方法属于Object对象，由于所有的对象都"继承"了Object的对象实例，因此几乎所有的实例对象都可以使用该方法。

concat 方法可以用来把两个数组的内容合并到一个数组中。
newArray = oldArray.concat(otherArray);

你可以使用 split 方法按指定分隔符将字符串分割为数组。
var array = string.split('s');

我们还可以使用 join 方法来把数组转换成字符串，里面的每一个元素可以用你指定的连接符来连接起来，这个连接符就是你要传入的参数。
var veggies = ["Celery", "Radish", "Carrot", "Potato"];
var salad = veggies.join(" and ");
console.log(salad); // "Celery and Radish and Carrot and Potato" 


function findLongestWord(str) {
  var myStr = "";
  var i = 0,j =[],k =0 ,l=[];
  myStr = str.split(" ");
  j = myStr.length;
  for(i;i<j;i++){
   k[i] = myStr[i].length;
  }
  return k;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


name = 'aaa bbb ccc';
uw=name.replace(/\b\w+\b/g, function(word){
  return word.substring(0,1).toUpperCase()+word.substring(1);}
  );


  var myStr = [],result= [];
  var i = 0,j = 0;
  myStr = str.split(" ");
  j = myStr.length;
  for(i;i<j;i++)
    myStr[i][0]=myStr[i][0].toUpperCase();
  return myStr;


数值转换
Number();parseFloat();parseInt();

for-in;
一种精准的迭代语句，用来枚举对象的属性，
for(property in expression) statement;
eg: for(var propName in window){
	document.write(propName);
}
显示BOM中window对象的属性。每次执行循环操作时，都会将window对象中存在一个属性名赋值给变量propName.
在for-in之前，应先确认该对象不是NULL或者undefined.

with(){}
with(location){
	var qs = search.substring(1);
	var hostName = hostname;
	var url = href;
}
不用with为
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;

with语句关联了location对象，在with语句的语句块内部，每个变量首先被认为是一个局部变量，而如果在局部变量中找不到该变量的定义
就会查询location对象中是否有同名的属性，如果发现同名的属性，则以location对象属性值作为变量的值。
严格模式下不允许使用with语句，否则视为语法错误。

严格模式下  函数的参数不能命名为eval或arguments；
不能把函数名命名为eval或arguments；
不能出现两个命名参数同名的情况。
函数未指定返回值会返回一个特殊的undefind值

instanceof 返回什么类型的对象
所有的引用类型的值都是Object的实例

五道口清华同方科技广场
运通110 10站  北京林业大学下车
魏公村->海淀黄庄(10)->知春路(13)->五道口
魏公村->西直门（13）->五道口

