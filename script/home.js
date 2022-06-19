import { navbar1 } from "../component/navbar1.js";
let nav = navbar1();
// console.log(nav)
document.getElementById("navbar").innerHTML = nav;

let img = document.createElement("img");
img.src = "./image/2.webp";
img.style.width = "100%";
document.querySelector("#firstdiv").append(img);

var array1 = [
  "./image/1.webp",
  "./image/2.webp",
  "./image/3.webp",
  "./image/4.webp",
];
var count = 1;
/* appendimg(array1) */
// console.log(array1)
function appendimg(array1) {
  if (count == array1.length) {
    count = 0;
  }
  document.getElementById("firstdiv").innerHTML = null;

  let img = document.createElement("img");

  img.src = array1[count];
  // console.log(array1)
  document.querySelector("#firstdiv").append(img);

  // count++;
}
setInterval(() => {
  appendimg(array1);
  count++;
}, 4000);

let arr = [
  {
    id: 25,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_500x.png?v=1642405569",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "₹ 999",
    strprice: "₹ 2,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
  },
  {
    id: 26,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_a08fff6a-7c3d-4663-9499-3421df127e94_400x.png?v=1641801688",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "₹ 999",
    strprice: "₹ 2,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
  },
  {
    id: 27,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_400x.png?v=1641801662",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "₹ 999",
    strprice: "₹ 2,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
  },
  {
    id: 28,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_400x.png?v=1650387008",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "₹ 999",
    strprice: "₹ 2,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
  },
];
funn(arr);

function funn(arr) {
  let cont2 = document.querySelector("#dynamic");
  let cont = document.createElement("div");

  // for(let i=0;i<arr.length;i++){

  arr.forEach((ele, ind) => {
    let card = document.createElement("div");
    // card.style.backgroundColor="white"
    card.setAttribute("class", "card");
    let img = document.createElement("img");
    let box = document.createElement("div");
    box.style.backgroundColor = "white";
    // box.setAttribute("id", "sumbox")

    let name = document.createElement("h3");
    let price = document.createElement("p");
    let strprice = document.createElement("strike");
    let rating = document.createElement("p");
    let dec = document.createElement("p");
    let btn = document.createElement("button");

    img.src = ele.image;
    name.innerText = ele.pname;
    price.innerText = ele.price;
    strprice.innerText = ele.strprice;
    rating.innerText = ele.rating;
    dec.innerText = ele.dec;
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", () => {
      clickfun(ind);
    });
    // btn.setAttribute("onclick",clickfun)

    // console.log(img, name, price, strprice, rating, dec, btn)

    box.append(name, price, strprice, rating, dec, btn);

    card.append(img, box);
    cont.append(card);
  });

  // }
  console.log(cont);
  cont2.append(cont);
}

let store = [] || "";

function clickfun(index) {
  console.log("sumone clickus", index);
  store.push(arr[index]);
  localStorage.setItem("cart", JSON.stringify(store));
  console.log(arr[index]);
}

import { footer } from "../component/footer1.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();
