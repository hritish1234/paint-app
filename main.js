canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var last_postion_of_x, last_postion_of_y;
color="black" ;
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseevent="mousedown";

}

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


canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_positon_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_positon_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
         ctx.lineWidth=width_of_line;
         console.log("last postion of x and y= ");
        console.log("x= "+last_postion_of_x+" y= "+last_postion_of_y) ;
        ctx.moveTo(last_postion_of_x,last_postion_of_y);
        console.log("current position of x and y= ");
        console.log("x= "+current_positon_of_mouse_x+" y= "+current_positon_of_mouse_y) ;
        ctx.lineTo(current_positon_of_mouse_x,current_positon_of_mouse_y);
        ctx.stroke();

    }
last_postion_of_x=current_positon_of_mouse_x;
last_postion_of_y=current_positon_of_mouse_y;
}