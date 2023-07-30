let number = 0;

document.getElementById("btn1").onclick=function(){
    number +=1;
    document.getElementById("myLabel").innerHTML=number;
}

document.getElementById("btn2").onclick=function(){
    number =0;
    document.getElementById("myLabel").innerHTML=number;
}

document.getElementById("btn3").onclick=function(){
    number -=1;
    document.getElementById("myLabel").innerHTML=number;
}