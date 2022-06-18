import { navbar1 } from "../component/navbar1.js";
let nav = navbar1();
// console.log(nav)
document.getElementById("navbar").innerHTML = nav;

let data = JSON.parse(localStorage.getItem("cart"));
// console.log(data);
let counter = document.querySelector(".header__cart");
counter.innerText = data.length;
let item = document.querySelector("#items");
let pay = document.querySelector("#gtotal");
let gsum = 0;
cartItems(data);
function cartItems(data) {
  data.forEach((e, ind) => {
    gsum += +e.price;
    pay.innerText = "RS. " + gsum;

    let box = document.createElement("div");
    box.setAttribute("class", "box");
    let imgBox = document.createElement("div");
    imgBox.setAttribute("class", "img");
    let pic = document.createElement("img");
    //
    let imgBox2 = document.createElement("div");
    let name = document.createElement("h4");
    let price = document.createElement("p");
    pic.src = e.image;
    name.innerText = e.pname;
    price.innerText = "Rs " + e.price;

    imgBox2.append(name, price);
    imgBox.append(pic, imgBox2);
    //   quant
    let quant = document.createElement("div");
    quant.setAttribute("class", "quant");
    let countD = document.createElement("button");
    let int = document.createElement("input");
    int.setAttribute("type", "number");
    int.setAttribute("min", "1");
    int.setAttribute("max", "5");
    int.setAttribute("value", "1");
    let countI = document.createElement("button");
    countD.setAttribute("class", "decrease");
    countI.setAttribute("class", "increase");
    countD.innerText = "-";
    countI.innerText = "+";

    let rbtn = document.createElement("h4");
    rbtn.innerText = "Remove";
    rbtn.addEventListener("click", () => {
      remove(e, ind);
    });

    quant.append(countD, int, countI, rbtn);
    //   total---->>>>
    let total = document.createElement("div");
    total.setAttribute("class", "total");
    let sum = document.createElement("h3");
    sum.innerText = "RS." + e.price;
    total.append(sum);

    let hr = document.createElement("hr");

    box.append(imgBox, quant, total);

    item.append(box, hr);

    countD.addEventListener("click", () => {
      quantityD(int, e.price, sum);
    });
    countI.addEventListener("click", () => {
      quantityI(int, e.price, sum);
    });
  });
}

//

function quantityI(int, price, sum) {
  let count = +int.value;
  count += 1;

  if (count > 5) {
    swal("Failed!", "Limit Exceed", "warning");
  } else {
    int.value = count;
    let x = count * price;
    sum.innerText = "Rs " + x;
    gsum += x;
    pay.innerText = "RS. " + gsum;
  }
}

function quantityD(int, price, sum) {
  let count = +int.value;
  count -= 1;

  if (count > 0) {
    int.value = count;
    let x = count * price;
    sum.innerText = "Rs " + x;
    gsum -= x;
    pay.innerText = "RS. " + gsum;
  }
}

function remove(e, ind) {
  data.splice(ind, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  window.location.reload();
}

import { footer } from "../component/footer1.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();
