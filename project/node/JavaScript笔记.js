alert:���� ͨ��ִ����Ӧ�Ĳ������������Ի�������ԡ�
DOM:getElementById ��ȡһ�����ض�ID���ԵĽڵ㡣JavaScript���ִ�Сд��
document.getElementById("purchases")
getElementByTagName���ض�������

x = 42;��������һ��ȫ�ֱ���
var x=42; ����ͬʱ�����ֲ�������ȫ�ֱ���
let y = 13;�������������������εľֲ�������block scope local variable��.

parseInt()  ת����������� ת��ʧ�ܷ���NaN parseInt('FF','10') parseInt('FF','16') parseInt('FF','8')
�ײ�����0x��ͷ���ڶ�������Ĭ��Ϊ16����
�ײ�����0��ͷ���ڶ�������Ĭ��Ϊ8����

parseFloat(): ���ַ���ת��Ϊʮ���ƣ�

�����ں����ж��� �ں������ǲ��ɼ���  ���������if,for���ǿɼ���
ȫ�ֱ��������������к���֮��ı���
�ֲ������������ں�����ı���
�������һ������û��ʹ��var����ñ����ᱻĬ��Ϊȫ�ֱ���
������ʼ��������ȫ��������  ���Ծֲ�����a�Ḳ�ǵ���������ͬ����ȫ�ֱ���
����Ҳ��һ������

delete ������ͨ������ɾ����������ԣ��������Ǻ���������

�Ե�������
(
	function(){
		alert('boo');
	}
)();
�ڶ������ŵ����ã��������ã�

�ص�������
ʹ�õ������
�������������ڲ�������������´��ݺ���������ζ�ſ��Խ�ʡȫ�ֱ�������
���ǿ��Խ�һ���������ò���ί�и���һ������������ζ�ſ��Խ�ʡһЩ�����д��������
�������������ܡ�
ȱ�㣺�����޷��ظ�ִ��
�ʺ�ִ��һ���Ի��ʼ��������

function multiplyByTwo(a,b,c){
	var i,ar=[];
	for(i=0;i<3;i++)
	{
		ar[i]=arguments[i]*2;
	}
	return ar;
} 


��������β���a,b,c, ��a,b,c���������û�У�arguments��ʲô��
arguments �ǵ��ö����һ����������
����һ����ʽ���������ò����� Ҳ������arguments[]������ʽ������arguments[0]��ʾ��һ������
arguments.length���ԣ�
js�����ж��㵽�׸��������˶��ٸ�����������ഫ�˶���Ĳ��־�û�ã���js�Լ������жϡ�����Ҫ�Լ��ж�
arguments��callee���ԣ��������õ�ǰ����ִ�еĺ��������δ�����ĺ�������������кô�

.target.odd  ѡȡtargetΪ��������
.target.even ѡȡtargetΪż������
animated bounce ���»ζ�
animated shake ���һζ�
animated fadeOut ����
animated hinge �ң���

JavaScript�ṩ���ֲ�ͬ��data types(��������)��������
undefined��δ���壩, 
null���գ�, 
boolean�������ͣ�, 
string���ַ�����, 
symbol(����), 
number�����֣�, 
and object�����󣩡�

.push();
.pop();
.shift();�׳���һ��Ԫ��;
.unshift();��������ĵ�һ��




JavaScript Object Notation ��� JSON����ʹ��JavaScript����ĸ�ʽ���洢���ݡ�
JSON�����ģ���Ϊ������ ���ݽṹ �� �ַ��������֣�����ֵ���ַ������� ���� ��������ϡ�



Regular expressions ������ʽ����������ĳ��ƥ��ģʽ��Ѱ��strings�е�ĳЩ���ʡ�

���������������Ҫ�ҵ��ַ���The dog chased the cat�е��� the�����ǿ���ʹ�������������ʽ: /the/gi

���ǿ��԰����������ʽ�ֳɼ��Σ�

/ �����������ʽ��ͷ��

the ��������Ҫƥ���ģʽ

/ �����������ʽ��β��

g ������ global(ȫ��)����ζ�ŷ������е�ƥ����������ǵ�һ����

i �����ź��Դ�Сд����˼�ǵ�����Ѱ��ƥ����ַ�����ʱ����Ե���ĸ�Ĵ�Сд��

������ʽ��var expression = /and/gi;   g: global i: ignore


���ǿ�����������ʽ��ʹ������ѡ������ѡȡ�������͵�ֵ��

����ѡ�����е�һ�־�������ѡ����\d����˼�Ǳ�������ȡһ���ַ��������֡�

��JavaScript��, ����ѡ����������: /\d/g��

��ѡ�����������һ���Ӻű��(+)�����磺/\d+/g�����������������ʽƥ��һ����������֡�

β����g��'global'�ļ�д����˼���������������ʽ �ҵ����е�ƥ������ǽ����ҵ���һ��ƥ�䡣 
/\s/g   ѡ���ַ����еĿհ�  �հ��ַ��У��ո��("") �س���\r  ���з�(\n) �Ʊ��(/t) ��ҳ��(\f)

var testString = "How many spaces are there in this sentence?";

// Only change code below this line.

var expression = /\s+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;

var nonSpaceCount = testString.match(expression).length; 
��дΪȡ��

�������������ʽѡ�����Ĵ�д�汾 ��ת���κ�ƥ�䡣

�ٸ����ӣ�\s ƥ���κοհ��ַ���\S ƥ���κηǿհ��ַ���

��д/^[]/i���м��ټ�����Ҫ���Ե�
/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,""


Ӣ�ı����űȽ϶࣬�磬�����ţ���������ţ��������ʺţ�������ð�ţ��������ֺţ��������������ţ���������̾�ţ���������˫���ţ����������Ӻţ������������ۺţ���������ʡ�Ժţ���������С���ţ��������������ţ���{}�������ţ������ٺţ������������ŵȡ�����������ʽ�ܹ���֤Ӣ�ı����š�
[����������������������������]|(��{2})|(����)|(����)|({})|(����)           ��64��
����������ʽ��64�����ͣ�
      [����������������������������]ƥ�䣬�������������������������������������������������š�
      ��{2}ƥ�����ۺš�
      ����ƥ��ʡ�Ժ�С���š�
      ����ƥ�������š�
     {}ƥ������š�
      ����ƥ�������š�
Ӣ�ı����űȽ϶࣬��,�����ţ���.����ţ���?���ʺţ���:��ð�ţ���;���ֺţ���'�������ţ���!����̾�ţ���"��˫���ţ���-�����Ӻţ���--�����ۺţ�������ʡ�Ժţ���()��С���ţ���[]�������ţ���{}�������ţ���`�����и���ţ��ȡ�����������ʽ�ܹ���֤Ӣ�ı����š�
[-,.?:;'"!`]|(-{2})|(/.{3})|(/(/))|(/[/])|({})                          ��63��
����������ʽ��63�����ͣ�
      [-,.?:;'"!']����ƥ��-��,��.��?��:��'��"��!��`��
      -{2}ƥ�����ۺ�--��
      /.{3}ƥ��ʡ�Ժš���
      /(/)ƥ��С����()��
      /[/]ƥ�������š�
      {}ƥ������š�



'<img src = "'+images[slotThree-1]+ '">'

    $($(".slot")[2]).html('<img src = "'+images[slotThree-1]+ '">');
	$($(".slot")[2]).html(slotThree);
	
	Profile Lookup 243  228
	
	
 map �������Է���ĵ�������
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

// ֻ������һ������д����
var newArray = oldArray.map(function(val){
                            return (val+3);
                            });

							
							
							
���鷽�� reduce ��������һ�����飬���Ұ����ۻ���һ��ֵ�С�

ʹ�� reduce ����ʱ����Ҫ����һ���ص�����������ص������Ĳ�����һ�� �ۼ��� �����������е� previousVal) �͵�ǰֵ (currentVal����

reduce ������һ����ѡ�ĵڶ������������Ա����������ۼ����ĳ�ʼֵ�����û�����ⶨ���ʼֵ����ô��ʼֵ����������еĵ�һ��� currentVal ��������ĵڶ��ʼ��
var array = [4,5,6,7,8];
var singleVal = 0;

// ֻ������һ������д����
 singleVal = array.reduce(function add(num,array){
   num += array;
   return num;
 },0);

filter ������������һ�����飬���Ұ��������������˳����ϵ�Ԫ�ء�

filter ��������һ���ص�����������ص�������Я��һ������������Ϊ��ǰ����������ǽ��� val ����

�ص��������� true ����ᱣ���������У����� false ����ᱻ���˳����顣

����Ĵ���ʾ��չʾ��ʹ�� filter ���Ƴ�������ֵ����5���

 ע�⣺ ���Ǻ����˵ڶ������͵�����������Ϊ����������ֻ��Ҫ��һ�����͹��ˡ�
var oldArray = [1,2,3,4,5,6,7,8,9,10];

// ֻ������һ������д����
var newArray = oldArray.filter(function(val){
  return val < 6;
});

ʹ�� sort ����������Ժ����׵İ���ĸ˳�������˳��������е�Ԫ�ؽ�������

������֮ǰ�õ����鷽����������һ�������鲻ͬ�� sort �������ı�ԭ���飬���ر����������顣

sort ���԰ѱȽϺ�����Ϊ�������롣�ȽϺ����з���ֵ���� a С�� b������һ���������� a ���� b ������һ�����������ʱ����0��

���û�д���ȽϺ�����������ֵȫ��ת���ַ�������������ĸ˳���������
var array = [1, 12, 21, 2];

// ֻ������һ������д����

array.sort(function(val1,val2){
  return val2-val1;
});
toUpperCase  	ȫ��ɴ�д 
toLowerCase		ȫ���Сд

hasOwnProperty
hasOwnProperty()��������ָʾһ����������(������ԭ����)�Ƿ����ָ�����Ƶ����ԡ�����У�����true�����򷵻�false��

�÷�������Object�����������еĶ���"�̳�"��Object�Ķ���ʵ������˼������е�ʵ�����󶼿���ʹ�ø÷�����

concat ��������������������������ݺϲ���һ�������С�
newArray = oldArray.concat(otherArray);

�����ʹ�� split ������ָ���ָ������ַ����ָ�Ϊ���顣
var array = string.split('s');

���ǻ�����ʹ�� join ������������ת�����ַ����������ÿһ��Ԫ�ؿ�������ָ�������ӷ�������������������ӷ�������Ҫ����Ĳ�����
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


��ֵת��
Number();parseFloat();parseInt();

for-in;
һ�־�׼�ĵ�����䣬����ö�ٶ�������ԣ�
for(property in expression) statement;
eg: for(var propName in window){
	document.write(propName);
}
��ʾBOM��window��������ԡ�ÿ��ִ��ѭ������ʱ�����Ὣwindow�����д���һ����������ֵ������propName.
��for-in֮ǰ��Ӧ��ȷ�ϸö�����NULL����undefined.

with(){}
with(location){
	var qs = search.substring(1);
	var hostName = hostname;
	var url = href;
}
����withΪ
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;

with��������location������with���������ڲ���ÿ���������ȱ���Ϊ��һ���ֲ�������������ھֲ��������Ҳ����ñ����Ķ���
�ͻ��ѯlocation�������Ƿ���ͬ�������ԣ��������ͬ�������ԣ�����location��������ֵ��Ϊ������ֵ��
�ϸ�ģʽ�²�����ʹ��with��䣬������Ϊ�﷨����

�ϸ�ģʽ��  �����Ĳ�����������Ϊeval��arguments��
���ܰѺ���������Ϊeval��arguments��
���ܳ���������������ͬ���������
����δָ������ֵ�᷵��һ�������undefindֵ

instanceof ����ʲô���͵Ķ���
���е��������͵�ֵ����Object��ʵ��

������廪ͬ���Ƽ��㳡
��ͨ110 10վ  ������ҵ��ѧ�³�
κ����->�����ׯ(10)->֪��·(13)->�����
κ����->��ֱ�ţ�13��->�����

