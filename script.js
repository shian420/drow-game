var canvas1=document.getElementById('canvas1');
var ctx1=canvas1.getContext('2d');

const li=document.querySelectorAll('li');
const colors=document.getElementById('colors');
const larges=document.getElementById('larges');
const midle=document.getElementById('midle');
const smole=document.getElementById('smole');
const clear=document.getElementById('clear');
const largeclear=document.getElementById('largeclear');
const smoleclear=document.getElementById('smoleclear');
const colorbg=document.getElementById('colorbg');
const allclear=document.getElementById('allclear');


var n=1;
var x,y;
var mouseflg=false;
var cleanflg=false;
var bgflg=true;

canvas1.width=canvas1.clientWidth;
canvas1.height=canvas1.clientHeight;

canvas1.addEventListener('touchmove',function(e){
    var rect=e.target.getBoundingClientRect();
    e.preventDefault();//タッチしたときにブラウザスクロールを防ぐ
    x=e.tpuches[0].clientX-rect.left;//1本目の指
    y=e.tpuches[0].clientY-rect.top;
    
    ctxfunc(e);

    switch(n){
        case 2:
        ctx1.fillRect(x,y,25,25);
        break;

        case 1:
        ctx1.fillRect(x,y,12,12);
        break;
        case 0:
            ctx1.fillRect(x,y,5,5);
            break;
                case 3:
                ctx1.fillRect(x,y,80,80);
                break;
            }
});

canvas1.addEventListener('mousemove',function(e){
    var rect=e.target.getBoundingClientRect();
    x=e.clientX-rect.left;
    y=e.clientY-rect.top;

    ctxfunc(e);

    if(mouseflg){
        switch(n){
            case 2:
            ctx1.fillRect(x,y,25,25);
            break;

            case 1:
            ctx1.fillRect(x,y,12,12);
            break;
            case 0:
                ctx1.fillRect(x,y,5,5);
                break;
                case 3:
                ctx1.fillRect(x,y,80,80);
                break;
            }
        }
    
});

function ctxfunc(e){
    li[0].innerHTML="X座標("+Math.floor(x)+")";
    li[1].innerHTML="Y座標("+Math.floor(y)+")";

    if(cleanflg){
        if(bgflg){
        ctx1.fillStyle="white";
        }else{
        ctx1.fillStyle=colorbg.value;
        }
    }else{
        ctx1.fillStyle=colors.value;
    }

    larges.style.backgroundColor=colors.value;
    midle.style.backgroundColor=colors.value;
    smole.style.backgroundColor=colors.value;
}


canvas1.addEventListener('mousedown',function(e){
    mouseflg=true;
});

canvas1.addEventListener('mouseup',function(e){
    mouseflg=false;
});

larges.addEventListener('click',function(){
    n=2;
    cleanflg=false;
    larges.style.border="solid 4px yellow";
    midle.style.border="solid 2px white";
    smole.style.border="solid 2px white";
    largeclear.style.border="solid 2px white";
    clear.style.border="solid 2px white";
    smoleclear.style.border="solid 2px white";
});
midle.addEventListener('click',function(){
    n=1;
    cleanflg=false;

    larges.style.border="solid 2px white";
    midle.style.border="solid 4px yellow";
    smole.style.border="solid 2px white";
    largeclear.style.border="solid 2px white";
    clear.style.border="solid 2px white";
    smoleclear.style.border="solid 2px white";
});
smole.addEventListener('click',function(){
    n=0;
    cleanflg=false;

    larges.style.border="solid 2px white";
    midle.style.border="solid 2px white";
    smole.style.border="solid 4px yellow";
    largeclear.style.border="solid 2px white";
    clear.style.border="solid 2px white";
    smoleclear.style.border="solid 2px white";
});
largeclear.addEventListener('click',function(){
    n=3;
    cleanflg=true;

    larges.style.border="solid 2px white";
    midle.style.border="solid 2px white";
    smole.style.border="solid 2px white";
    largeclear.style.border="solid 4px yellow";
    clear.style.border="solid 2px white";
    smoleclear.style.border="solid 2px white";
});
clear.addEventListener('click',function(){
    n=1;
    cleanflg=true;

    larges.style.border="solid 2px white";
    midle.style.border="solid 2px white";
    smole.style.border="solid 2px white";
    largeclear.style.border="solid 2px white";
    clear.style.border="solid 4px yellow";
    smoleclear.style.border="solid 2px white";
});
smoleclear.addEventListener('click',function(){
    n=0;
    cleanflg=true;

    larges.style.border="solid 2px white";
    midle.style.border="solid 2px white";
    smole.style.border="solid 2px white";
    largeclear.style.border="solid 2px white";
    clear.style.border="solid 2px white";
    smoleclear.style.border="solid 4px yellow";
});
allclear.addEventListener('click',function(){
    canvas1.style.backgroundColor=colorbg.value;
    bgflg=false;
});
