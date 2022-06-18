var pay =JSON.parse(localStorage.getItem("payment"))

var y1= document.querySelector("#sty");
y1.innerHTML="Pay INR "+pay;

    document.querySelector(".ps-3").addEventListener("click",shivam);
    function shivam(){

var val1 = document.querySelector("#value1");
var val2 = document.querySelector("#value2");

var val3 = document.querySelector("#value3");

var val4 = document.querySelector("#value4");

if(val1.value!="" && val2.value!="" && val3.value!=""&&val4.value!=""){

 
        window.location.href = "otp.html";

}
else{
    alert("Fll all the data correctly")
}

    }