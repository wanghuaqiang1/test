alert("hello");
let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world";
let myVariable="李雷"

function multiply(num1,num2){
    let result = num1*num2;
    return result;
}

/*
document.querySelector("html").addEventListener("click",function(){
    alert("别戳我");

});*/

let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/test-image.jpg"){
        myImage.setAttribute("src","images/test-image2.jpg");


    }else{
        myImage.setAttribute("src","images/test-image3.jpg");
    
    }
};



let myButton = document.querySelector("button");


function setUserName(){
    let myName=prompt("please input your name");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent="酷毙了"+myName;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName=localStorage.getItem("name");
    myHeading.textContent="酷毙了"+storedName;
}

myButton.onclick = function(){
    setUserName();
};