window.onload=function(){
	var canvas=document.querySelector('#canvas');
	var ctx=canvas.getContext('2d');
	ctx.beginPath();

	var x=20;
	var y=20;
	for(var i=0;i<16;i++){
		
		ctx.moveTo(20,y);
		ctx.lineTo(580,x);
		ctx.stroke();
		y+=40;
		x+=40;
	}
	

	ctx.beginPath();
	var x1=20;
	var y1=20;
	for(var i=0;i<16;i++){
		ctx.moveTo(x1,20);
		ctx.lineTo(y1,580);
		ctx.stroke();
		x1+=40;
		y1+=40;
	}
	
	ctx.beginPath();

	ctx.arc(300,300,5,0,Math.PI*2);
	ctx.moveTo(142.5,142.5);
	ctx.arc(140,140,5,0,Math.PI*2);

	ctx.moveTo(462.5,140);
	ctx.arc(460,140,5,0,Math.PI*2);

	ctx.moveTo(140,462.5);
	ctx.arc(140,460,5,0,Math.PI*2);

	ctx.moveTo(462.5,462.5);
	ctx.arc(460,460,5,0,Math.PI*2);
	ctx.fill();

}