$(function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    var a = 0;
    var b = 0;
    var cw = 490;
    var ch = 340;
    var color = 360/17;
    var hue = 360;
    
    for(var i = 0; i < 17; i++){
    context.fillStyle = 'hsla(' + hue + ', 50%, 45%, 1)';
    context.fillRect(a,b,cw,ch);
    a+=10;
    b+=10;
    hue-=color;
    cw-=(2*10);
    ch-=(2*10);
    }
    });
    