import {navbar1} from "../component/navbar.js"
let nav=  navbar1()
// console.log(nav)
document.getElementById("navbar").innerHTML=nav;


var userArr=JSON.parse(localStorage.getItem("userDatas")) || [];
    
    
    document.querySelector("#kis4").addEventListener("submit",function(){
        event.preventDefault();
        let email = document.getElementById("email").value;
        console.log(email);

        var data={
            userfname:fname,
            userlname:lname,
            email:kis4.email.value,
            password:kis4.password.value,
        }    
             console.log(data)
             

        
      
        localStorage.setItem("userDatas",JSON.stringify(data));
        window.location.href="login.html"
    })

    import {footer} from '../component/footer.js';
let foot = document.getElementById('footer')
foot.innerHTML=footer()




  document.getElementById('btn-back-to-top').addEventListener("click",func)
  function func(){
    window.location.reload()
  }