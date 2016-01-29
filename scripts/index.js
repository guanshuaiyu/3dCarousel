window.onload = function(){
	//基础部分的数据存储 逻辑操作
// ---------------------------------------

	//javascript特定用途部分  必须能做到的事  

	//能表达和页面中的任何元素
	//(所有的页面元素对象都定义在window这个对象中)

	//选取页面中的元素  
	// var el=	document.getElementById('test');
	// var els=document.getElementsByClassName('xiao');
	//els现在是一个类数组

	//获取元素的信息 
	//和浏览器配合通过对元素的属性进行操作改变元素的样式
	// el.style.border = '10px solid red';
	// var colors = [[-600,-400,0],[-300,-200,5],[0,0,10],[300,-200,5],[600,-400,0]];
	// var color = ['red','blue','yellow','green','orange'];
	// var draw = setInterval(function(){		
	// 	for (var i = 0; i < els.length; i++) {
	// 		els[i].style.webkitTransform ='translate3d('+colors[i][0] +'px,0,'+colors[i][1]+'px)' ;
	// 		els[i].style.backgroundColor=color[i];
	// 		els[i].style.zIndex=colors[i][2];
	// 	}
	// 		colors.push(colors.shift());
	// },2000);
	//并不是所有的对象都具有style这个属性
	//和浏览器配合监测用户行为(事件)


//
var 
els = document.getElementsByClassName('xiao'),
data = [
	{translateX:'-600px',translateZ:'-400px',zIndex:'0'},
	{translateX:'-300px',translateZ:'-200px',zIndex:'5'},
	{translateX:'0px',translateZ:'0px',zIndex:'10'},
	{translateX:'300px',translateZ:'-200px',zIndex:'5'},
	{translateX:'600px',translateZ:'-400px',zIndex:'0'}
];

// els[0].style.webkitTransform='translate3d('+data[0].translateX+',0,'+data[0].translateZ+')';
// els[1].style.webkitTransform='translate3d('+data[1].translateX+',0,'+data[1].translateZ+')';
// els[2].style.webkitTransform='translate3d('+data[2].translateX+',0,'+data[2].translateZ+')';
// els[3].style.webkitTransform='translate3d('+data[3].translateX+',0,'+data[3].translateZ+')';
// els[4].style.webkitTransform='translate3d('+data[4].translateX+',0,'+data[4].translateZ+')';
draw = function(){
	for (var i = 0; i < els.length; i++) {
		els[i].style.webkitTransform='translate3d('+data[i].translateX+',0,'+data[i].translateZ+')';
	}
	data.unshift(data.pop());
};


var tt = setInterval(draw,2000);
for (var i = 0; i < els.length; i++) {
	els[i].index= i;
	els[i].onclick = function(){
		clearInterval(tt);
		var o = this.index ;
		for (var k = 0; k < els.length; k++) {
			if (els[k].style.transform == 'translate3d(0px, 0px, 0px)') {
				for (var j = 0; j <els.length-k+o; j++) {
					draw();
				}
			}
		}
		setTimeout(function(){
			tt = setInterval(draw,2000);
		},2000);
	};
}
//程序=数据结构+算法
//这个函数接受两个东西.第一个参数是回调函数,第二个参数是时间
//这个函数的功能是 每个s就自动帮我们调用一次传入的回调函数




























	//选取元素的api
	//document.getElementById('')会得到单个元素
	//document.getElementsByClass('')会得到一个元素的集合,类似数组
	//给元素添加样式的api
	//xx.style.webkitTransform = 'translate3d(0,0,0)';
	// var dazi = [{x:-600,z:-200},{x:-300,z:-100},{x:0,z:0},{x:300,z:-100},{x:600,z:-200}];
	//利用document.getElementsByClassName 得到所有的面
	//写一个函数给他们按照顺序添加数组中的样式
	//面有5个,数组中正好也是5个数据
	//函数每调用一次,就把数组中的最后一个元素放在数组开头
	//再次调用一次,就会看到面的样式发生变化
	//设置成每个两秒调用该函数,就会自动轮播起来

	// var el=document.getElementById('da');
	// var els=document.getElementsByClassName('xiao');
	// var lunbo=function(){

	// }

// var el = document.getElementById()
// var els = document.getElementsByClassName();

// el.style.marginLeft = '';
// el.innerHTML = 'xx';

// setInterval(fn,1000);
// el.onclick = function(){console.log(this.innerHTML)};

//1.id='screen'
// 2.var sc = document.getElementById('screen');
//3.给所有的数字加class num
// 4.var nums = document.getElementsByClassName('nums');
// 5.给所有的nums加上一个onclick方法
// nums[0].onclick = function(){}
// for (var i = 0; i < nums.length; i++) {
// 		nums[i],onclick1 = function(){
// 		alert(this.innerHTML);
// };
// }
//6.把上一步函数中的alert(this.innerHTML)换成
// sc.innerHTML =this.innerHTML;
//-------------------------
// 给运算符加上class aprator
// var aps = document.getElementsByClassName('aprator');
// 定义两个变量  firstNumber = '' secondNumber = '';
// 给等号添加onclick
// 把nums[i].onclick 的那个function改成
// nums[i].onclick = function(){
// 	firstNumber = Number(this.innerHTML);
// }
// equl.onclick = function(){
// 	sc.innerHTML  = firstNumber + secondNumber;
// }




// var cc = document.getElementsByClassName('xiao');
// cc[0].style.width = '400px';
// cc[0].innerHTML = 'aaa';
// cc[0].onclick = function(){
// 	alert(this.innerHTML);
// }



















}
