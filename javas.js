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
let fname="subhath";
document.getElementById("myPara").innerHTML = "Hi "+fname;

//onclick
let username
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}

//conversion
let age;
age=Number(age);