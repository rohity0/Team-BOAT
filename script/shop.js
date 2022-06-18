import { navbar1 } from "../component/navbar1.js";
let nav = navbar1();
// console.log(nav)
document.getElementById("navbar").innerHTML = nav;

let arr = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_b2052cb3-100a-45d6-9170-1512deb9138d_400x.png?v=1631167046",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "999",
    strprice: " 2,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
    id: "13",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_400x.png?v=1648723802",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "1,499",
    strprice: " 4,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
    id: "14",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-blue_50e2fdb3-7886-49af-a570-a083001946f6_400x.png?v=1614424769",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "1599",
    strprice: " 1,490",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
    id: "15",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_0c484c51-8b11-487b-bd27-c31b09780700_400x.png?v=1648723865",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "1999",
    strprice: " 5,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
    id: "16",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/336d66bb-60e6-4b02-831b-864ea4fada9e_400x.png?v=1625045731",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "1399",
    strprice: " 5,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
    id: "17",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/451v2_black_400x.png?v=1641801490",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "2,499",
    strprice: " 5,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
    id: "18",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-381-pink_9a1088cc-2e91-4acb-9d7c-841033532bfe_400x.png?v=1615468286",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "999",
    strprice: " 2,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
    id: "19",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_fa1c6ec3-93b7-443e-ae82-d5eeb34258f8_400x.png?v=1641206192",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "3,999",
    strprice: " 9,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
    id: "20",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-cornflowerblue_0c7ef29e-c038-4b24-b1fd-3fd289f7714e_400x.png?v=1614505072",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "2,099",
    strprice: " 5,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
    id: "21",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_6e1b5a7a-8f56-48c6-819d-24395393db81_400x.png?v=1624430639",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "1,399",
    strprice: " 2,999",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
    id: "22",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_48cc8647-d9cf-4961-b279-0d1de2c208fc_400x.png?v=1646308247",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "2,499",
    strprice: " 5,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
    id: "23",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_4defc6ba-35c9-4fcd-a1fc-3cbc4dc484e0_400x.png?v=1618567890",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "1,599",
    strprice: " 2,999",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
    id: 24,
  },
];

arr.forEach((ele) => {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let bag = document.createElement("div");
  bag.setAttribute("id", "sumbox");

  let name = document.createElement("h3");
  let price = document.createElement("h2");
  let strprice = document.createElement("strike");
  let rating = document.createElement("p");
  let dec = document.createElement("p");
  let id = document.createElement("p");
  let btn = document.createElement("button");

  img.src = ele.image;
  name.innerText = ele.pname;
  price.innerText = ele.price;
  strprice.innerText = ele.strprice;
  rating.innerText = ele.rating;
  dec.innerText = ele.dec;
  id.innerText = ele.id;
  btn.innerText = "Add to Cart";
  btn.addEventListener("click", function () {
    add(ele);
  });

  bag.append(name, price, strprice, rating, dec, btn);
  card.append(img, bag);
  let cont = document.querySelector("#earbud1");
  cont.append(card);
});

let bag = JSON.parse(localStorage.getItem("cart")) || [];

function add(ele) {
  let id = Number(ele.id);
  let x = checker(id);
  console.log(x);
  if (x) {
    bag.push(ele);
    localStorage.setItem("cart", JSON.stringify(bag));
    let counter = document.querySelector(".header__cart");
    counter.innerText = bag.length;
    swal("Good job!", "Product Added To Cart!", "success");
  } else {
    swal("Failed!", "Item Already Present To Cart!", "info");
  }
}
function checker(a) {
  console.log(a);
  for (let i = 0; i < bag.length; i++) {
    if (+bag[i].id == +a) {
      return false;
    }
  }
  return true;
}

import { footer } from "../component/footer1.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();
