//print hello world
console.log("Hello World");



//variables
let a;
let name="subhath";
a= 5;

//window.alert("Hi "+ name);
console.log("number: ",a);
console.log("name", name);


//inner html 
//let fname="subhath";
//document.getElementById("myPara").innerHTML = "Hi "+fname;

//onclick
/**let username
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}**/

//conversion
let age;
//age=Number(age);


//if condition
/**age = 21;

if(age >=18){
    console.log("You are an adult");
}
else{
    console.log("you are not an adult");
}**/
document.getElementById("myButton").onclick=function(){
const checkBox=document.getElementById("myCheckBox");
if(checkBox.checked){
    window.alert("You are Subscribed!");
}
else{
    window.alert("You are not Subscribed!");
}
}