import {navbar1} from "../component/navbar.js";
let nav=  navbar1()
// console.log(nav)
document.getElementById("navbar").innerHTML=nav;

var form=document.querySelector("form");
    var userDatas=JSON.parse(localStorage.getItem("userDatas"));

    console.log(userDatas)

    let remail = userDatas.email;
    let rpassword = userDatas.password;
    console.log(remail,rpassword)

   let  log= document.getElementById("submit")
    log.addEventListener("click",login)
function login(){
    let lemail=document.getElementById("email").value;
    let lpassword=document.getElementById("password").value;

    if(remail===lemail && rpassword===lpassword){
        alert("logged in")
        window.location.href="index.html"
    }
    else alert("try agian")
}
import {footer} from "../component/footer.js";
let foot = document.getElementById('footer')
foot.innerHTML=footer()




  document.getElementById('btn-back-to-top').addEventListener("click",func)
  function func(){
    window.location.reload()
  }