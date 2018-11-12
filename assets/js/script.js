var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(200, 105, 43, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(180, 90, 5, 0, 2 * Math.PI);
ctx.fillStyle = "gold";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(220, 90, 5, 0, 2 * Math.PI);
ctx.fillStyle = "gold";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth=4;
ctx.moveTo(185,115);
ctx.quadraticCurveTo(200, 100, 218, 115);
ctx.lineWidth=4;
ctx.moveTo(185,115);
ctx.quadraticCurveTo(200, 130, 218, 115);
ctx.fillStyle = "gold";
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.moveTo(170,90);
ctx.quadraticCurveTo(175, 70, 195, 90);
ctx.moveTo(200,90);
ctx.quadraticCurveTo(230, 70, 230, 90);
ctx.lineWidth=2;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(100,139,200,30);
ctx.fillStyle = "red";
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.rect(155,140,90,130);
ctx.fillStyle = "red";
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.rect(155,270,30,90);
ctx.fillStyle = "red";
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.rect(215,270,30,90);
ctx.fillStyle = "red";
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.moveTo(185,270);
ctx.quadraticCurveTo(200, 250, 215, 270);
ctx.fillStyle = "white";
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.moveTo(155,360);
ctx.quadraticCurveTo(170, 380, 185, 360);
ctx.fillStyle = "red";
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.moveTo(215,360);
ctx.quadraticCurveTo(230, 380, 245, 360);
ctx.fillStyle = "red";
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.moveTo(100,139);
ctx.quadraticCurveTo(60, 155, 100, 169);
ctx.fillStyle = "red";
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.moveTo(300,139);
ctx.quadraticCurveTo(340, 155, 300, 169);
ctx.fillStyle = "red";
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 180, 5, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 200, 5, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 220, 5, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();