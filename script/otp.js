document.addEventListener("submit",compareData)
    function compareData(){
    event.preventDefault()
    
    if( form.OTP.value == 1234){
         alert("Congratulations! payment successful.OrderPlaced Successfully")
         alert("Thanks For Shopping From J.crew")
         window.location.href="index.html"
     }
     else{
         alert("Invalid OTP.")
     }
    }