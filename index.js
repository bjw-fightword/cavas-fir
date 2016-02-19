window.onload=function(){
	var canvas=document.querySelector('#canvas');
	var ctx=canvas.getContext('2d');
	ctx.beginPath();
	ctx.arc(300.5,300.5,10,0,Math.PI*2);
	ctx.fill();
var ROW=15;	
var huaqipan=function(){
 	ctx.strokeStyle='#333';
 	for(var i=0;i<15;i++){
		ctx.beginPath();
		ctx.moveTo(20,i*40+20.5);
		ctx.lineTo(580,i*40+20.5);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(i*40+20.5,20);
		ctx.lineTo(i*40+20.5,580);
		ctx.stroke();
 	}
 	var z=[140.5,460.5];
 	ctx.fillStyle='black';
	for(var i=0;i<z.length;i++){
		for(var j=0;j<z.length;j++){
			ctx.beginPath();
			ctx.arc(z[j],z[i],4,0,Math.PI*2);
			ctx.fill();
 		}
	}
 }
 huaqipan();
//黑点
	/*ctx.beginPath();
	ctx.arc(300.5,300.5,5,0,Math.PI*2);
	ctx.moveTo(143,143);
	ctx.arc(140.5,140.5,5,0,Math.PI*2);

	ctx.moveTo(463,140.5);
	ctx.arc(460.5,140.5,5,0,Math.PI*2);

	ctx.moveTo(140.5,463);
	ctx.arc(140.5,460.5,5,0,Math.PI*2);

	ctx.moveTo(463,463);
	ctx.arc(460.5,460.5,5,0,Math.PI*2);
	ctx.fill();*/

//线条渐变色
	/*var lingard=ctx.createLinearGradient(20,300,580,300);
	lingard.addColorStop(0,'#f00');
	lingard.addColorStop(0.2,'orange');
	lingard.addColorStop(0.4,'yellow');
	lingard.addColorStop(0.6,'green');
	lingard.addColorStop(0.8,'blue');
	lingard.addColorStop(1,'purple');
	ctx.lineWidth=8;
	ctx.lineCap='round'//圆角线
	ctx.strokeStyle=lingard;*/




	

//ctx.strokeStyle='#fa4'//颜色
	//ctx.beginPath();
	//ctx.moveTo(20.5,300);
	//ctx.lineTo(580,300);
	//ctx.stroke();
//矩形渐变
	//ctx.fillStyle=lingard;	
	//ctx.fillRect(0,0,600,300);

//落子
//x  number 落子x坐标
//y  number 落子y坐标
//color boolean  true代表黑子 false带百奥白子
var luozi=function(x,y,color){
	var zx=40*x+20.5;
	var zy=40*y+20.5;
	var black=ctx.createRadialGradient(zx,zy,1,zx,zy,18);
	black.addColorStop(0.1,'#555');
	black.addColorStop(1,'#000');
	var white=ctx.createRadialGradient(zx,zy,1,zx,zy,18);
	white.addColorStop(0.1,'#fff');
	white.addColorStop(1,'#ddd');

	ctx.beginPath();
	ctx.fillStyle=color?black:white;
	ctx.arc(zx,zy,18,0,Math.PI*2);
	ctx.fill();
	
}
//空对象做字典
var qizi={};
var kaiguan=localStorage.x?false:true;
//开关  ：该谁落子了
canvas.onclick=function(e){
	var x=Math.round((e.offsetX-20.5)/40);
	var y=Math.round((e.offsetY-20.5)/40);
	if(qizi[x+'_'+y]){return};
	//下划线作用：链接
	luozi(x,y,kaiguan);
	qizi[x+'_'+y]=kaiguan?'black':'white';
	kaiguan=!kaiguan;
	localStorage.data=JSON.stringify(qizi);
	if(!kaiguan){
		localStorage.x=1;
	}else{
		localStorage.removeItem('x');
	}
}
//如果本地存储中有棋盘数据，读取这些数据绘制到页面中
if(localStorage.data){
	qizi=JSON.parse(localStorage.data);
	for(var i in qizi){
		var x=i.split('_')[0];
		var y=i.split('_')[1];
		luozi(x,y,(qizi[i]=='black')?true:false);
	}
	
}
canvas.ondblclick=function(e){
		e.stopPropagation();
	}
document.ondblclick=function(){
	localStorage.clear();
	location.reload();
}



}
//localStorage.a='cc';