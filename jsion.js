// JavaScript Document

$(document).ready(function() { 
  window.addEventListener('load',init,false);
	var canvas = null, ctx = null;
	var x = 0, x2 = 50, x4 = -100, x5 = -50, y = 630, x3 = -50;
	
	function init(){
		canvas	= document.getElementById('canvas');
		ctx		= canvas.getContext('2d');
		run();

	}				
	
	function run(){					
		setTimeout(run,40);
		x	+=10;
		x2 	+= 10;
		x4 	+= 6;
		x5 	+= 6;
		x3 	+= 5;
		if(x > canvas.width) x=0;
		if(x2> canvas.width) x2=0;
		if(x3> canvas.width) x3=0;
		paint();
	}
	
	function paint(){					
		ctx.clearRect(0,0,canvas.width,canvas.height);
		
		ctx.beginPath();
		ctx.moveTo(170, 80);
		ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
		ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
		ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
		ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
		ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
		ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
		ctx.closePath();
		ctx.fillStyle = '#8ED6FF';
		ctx.fill();

		ctx.fillStyle="96a7c1";
		ctx.beginPath();
		ctx.moveTo(200,100);
		ctx.lineTo(50,400);
		ctx.lineTo(800,300);
		ctx.closePath();
		ctx.fill();
		
		ctx.fillStyle="rgb(0,200,0)";
		ctx.beginPath();
		ctx.moveTo(600,100);
		ctx.lineTo(50,500);
		ctx.lineTo(900,500);
		ctx.closePath();
		ctx.fill();
		
		ctx.fillStyle="rgb(0,200,0)";
		ctx.beginPath();
		ctx.moveTo(0,100);
		ctx.lineTo(0,500);
		ctx.lineTo(900,500);
		ctx.closePath();
		ctx.fill();
		
		ctx.fillStyle="96a7c1";
		ctx.beginPath();
		ctx.moveTo(800,100);
		ctx.lineTo(50,400);
		ctx.lineTo(1000,300);
		ctx.closePath();
		ctx.fill();
		
		
		
		ctx.fillStyle='#eff';
		ctx.fillRect(200,200,500,450);
		ctx.fillStyle='#e0fffd';
		ctx.fillRect(0,200,200,450);
		ctx.fillStyle='#e0fffd';
		ctx.fillRect(700,200, 200,450);
		
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(0,200, 900,30);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(200,302,500,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(0,300,200,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(700,300,200,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(200,382,500,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(0,380,200,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(700,380,200,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(200,442,500,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(0,440,200,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(700,440,200,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(200,522,500,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(0,520,200,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(700,520,200,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(200,602,500,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(0,600,200,10);
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(700,600,200,10);
		
		ctx.fillStyle='#28221e';
		ctx.fillRect(720,540,160,60);
		ctx.fillStyle='#28221e';
		ctx.fillRect(720,460,160,60);
		ctx.fillStyle='#28221e';
		ctx.fillRect(720,400,160,40);
		ctx.fillStyle='#28221e';
		ctx.fillRect(720,320,160,60);
		ctx.fillStyle='#28221e';
		ctx.fillRect(720,240,160,60);
		ctx.fillStyle='#28221e';
		ctx.fillRect(20,320,160,60);
		ctx.fillStyle='#28221e';
		ctx.fillRect(20,240,160,60);
		
		ctx.fillStyle='#383222';
		ctx.fillRect(220,240,130,60);
		ctx.fillStyle='#383222';
		ctx.fillRect(370,240,130,60)
		ctx.fillStyle='#383222';
		ctx.fillRect(520,240,130,60);
		
		ctx.fillStyle='#383222';
		ctx.fillRect(220,320,130,60);
		ctx.fillStyle='#383222';
		ctx.fillRect(370,320,130,60)
		ctx.fillStyle='#383222';
		ctx.fillRect(520,320,130,60);
		
		//Frente
		ctx.fillStyle='#f2f2f2';
		ctx.fillRect(0,520,700,150);
		
		ctx.fillStyle='#1b3f99';
		ctx.fillRect(20,540,60,20);
		ctx.fillRect(20,570,60,20);
		ctx.fillRect(20,600,60,20);
		ctx.fillRect(20,630,60,20);
		ctx.fillRect(100,540,60,20);
		ctx.fillRect(100,570,60,20);
		ctx.fillRect(100,600,60,20);
		ctx.fillRect(100,630,60,20);
		ctx.fillRect(180,540,60,20);
		ctx.fillRect(180,570,60,20);
		ctx.fillRect(180,600,60,20);
		ctx.fillRect(180,630,60,20);
		ctx.fillRect(260,540,60,20);
		ctx.fillRect(260,570,60,20);
		ctx.fillRect(260,600,60,20);
		ctx.fillRect(260,630,60,20);
		ctx.fillRect(340,540,60,20);
		ctx.fillRect(340,570,60,20);
		ctx.fillRect(340,600,60,20);
		ctx.fillRect(340,630,60,20);
		
		ctx.fillStyle='#fff';
		ctx.fillRect(0,400,700,120);
		
		ctx.fillStyle="#004b85";
		ctx.font="bold 25px Arial";
		ctx.fillText("UNIVERSIDAD SANTIAGO DE CALI",180,470);
							
		var imagen = new Image();
		imagen.src = "http://smilelab.co/demos/usc.png";
		ctx.drawImage(imagen,70,420);				
		
		
		ctx.beginPath();
		ctx.moveTo(5,530);
		ctx.lineTo(5,650);
		ctx.lineTo(40,650);
		ctx.lineTo(40,530);
		ctx.lineTo(40,650);
		ctx.lineTo(75,650);
		ctx.lineTo(75,530);
		ctx.lineTo(75,650);
		ctx.lineTo(110,650);
		ctx.lineTo(110,530);
		ctx.lineTo(110,650);
		ctx.lineTo(145,650);
		ctx.lineTo(145,530);
		ctx.lineTo(145,650);
		ctx.lineTo(180,650);
		ctx.lineTo(180,530);
		ctx.lineTo(180,650);
		ctx.lineTo(215,650);
		ctx.lineTo(215,530);
		ctx.lineTo(215,650);
		ctx.lineTo(250,650);
		ctx.lineTo(250,530);
		ctx.lineTo(250,650);
		ctx.lineTo(285,650);
		ctx.lineTo(285,530);
		ctx.lineTo(285,650);
		ctx.lineTo(320,650);
		ctx.lineTo(320,530);
		ctx.lineTo(320,650);
		ctx.lineTo(355,650);
		ctx.lineTo(355,530);
		ctx.lineTo(355,650);
		ctx.lineTo(390,650);
		ctx.lineTo(390,530);
		ctx.lineTo(390,650);
		ctx.lineTo(425,650);
		ctx.lineTo(425,530);
		ctx.lineTo(425,650);
		ctx.lineTo(460,650);
		ctx.lineTo(460,530);
		ctx.lineTo(460,650);
		ctx.lineTo(495,650);
		ctx.lineTo(495,530);
		ctx.lineTo(495,650);
		ctx.lineTo(530,650);
		ctx.lineTo(530,530);
		ctx.lineTo(530,650);
		ctx.lineTo(565,650);
		ctx.lineTo(565,530);
		ctx.lineTo(565,650);
		ctx.lineTo(600,650);
		ctx.lineTo(600,530);
		ctx.lineTo(600,650);
		ctx.lineTo(635,650);
		ctx.lineTo(635,530);
		ctx.lineTo(635,650);
		ctx.lineTo(670,650);
		ctx.lineTo(670,530);
		ctx.lineTo(670,650);
		ctx.lineTo(705,650);
		ctx.lineTo(705,530);
		ctx.lineTo(705,650);
		ctx.lineTo(740,650);
		ctx.lineTo(740,530);
		ctx.lineTo(740,650);
		ctx.lineTo(775,650);
		ctx.lineTo(775,530);
		ctx.lineTo(775,650);
		ctx.lineTo(810,650);
		ctx.lineTo(810,530);
		ctx.lineTo(810,650);
		ctx.lineTo(845,650);
		ctx.lineTo(845,530);
		ctx.lineTo(845,650);
		ctx.lineTo(880,650);
		ctx.lineTo(880,530);
		ctx.lineTo(880,650);
		ctx.lineTo(905,650);
		ctx.lineTo(905,550);
		ctx.lineTo(0,550);
		
		ctx.strokeStyle = '#000';
		ctx.lineWidth = 5;
		ctx.stroke();
		
		ctx.fillStyle = "#496fee";
		ctx.fillRect(x3,550,250,100);
		ctx.fillStyle = colorion();
		ctx.fillRect(x,y,200,30);
		ctx.fillRect(x2,600,100,40);					
		ctx.fillRect(x4,y,200,30);
		ctx.fillRect(x5,600,100,40);
	}
	
	function colorion(){
		var hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
		var num1 = hex[Math.floor(Math.random()*( 14 + 1 ))];
		var num2 = hex[Math.floor(Math.random()*( 14 + 1 ))];
		var num3 = hex[Math.floor(Math.random()*( 14 + 1 ))];
		var num4 = hex[Math.floor(Math.random()*( 14 + 1 ))];
		var num5 = hex[Math.floor(Math.random()*( 14 + 1 ))];
		var num6 = hex[Math.floor(Math.random()*( 14 + 1 ))];
		return "#"+num1+num2+num3+num4+num5+num6;
	}
	
});  
