var mouseevent="empty";
var lastpositionx ,lastpositiony;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="pink";
width=2;
canvas.addEventListener("mousedown" ,my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseevent="mouseDown";

}
canvas.addEventListener("mouseDown" ,my_mousemove);
    function my_mousemove(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseevent="mousemove";
}

canvas.addEventListener("mousemove" ,my_mousemove);
function my_mousemove(e)
{
    current_positionofmousex = e.clientX - canvas.offsetLeft;
    current_positionofmousey = e.clientY - canvas.offsetTop;

    if(mouseevent=="mouseDown"){
        console.log(current_positionofmousex_and_y_coordinates= "empty");
        console.log("x = "+ current_positionofmousex + "y ="+
        current_positionofmousey );

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewidth=width;
        ctx.arc( current_positionofmousex , current_positionofmousey , radius ,0 , 2 *Math.PI);

       ctx.stroke();}

    
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseevent="mouseup";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseevent="mouseleave";

    
}
function cleararea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    ctx.clearArc(250,210,40,0,2*Math.PI);
}
       
}