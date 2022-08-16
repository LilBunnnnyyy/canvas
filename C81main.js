canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

colour="powderblue";

ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(150,300,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",drawcircle);

function drawcircle(a){
colour=document.getElementById("colour").value;
console.log(colour);
mouse_x=a.clientX-canvas.offsetLeft;
mouse_y=a.clientY-canvas.offsetTop;
circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}