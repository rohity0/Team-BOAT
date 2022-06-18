var var1 = document.querySelector("#val1");
var var2 = document.querySelector("#val2");
var var3 = document.querySelector("#val3");
var var4 = document.querySelector("#val4");
var var5 = document.querySelector("#val5");
var var6 = document.querySelector("#val6");
var var7 = document.querySelector("#val7")
var butt1 = document.querySelector("#paybut");
butt1.addEventListener("click",shiv)

function shiv(){
if(var1.value==""){
    alert("fill at least adress line1");
}
else if(var2.value==""){
    alert("Enter Code")
}
else if(var3.value==""){
    alert("Enter City")
}
else if(var4.value==""||var4.value.length!=10){
    alert("Enter Correct Mobile Number")
}
else if(var5.value==""){
    alert("Enter Email")
}
else if(var6.value==""){
    alert("Enter Name")
}
else if(var7.value=="hi"){
    alert("Enter Country")
}
else{
window.location.href="payment.html";
}

}