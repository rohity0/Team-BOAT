import { navbar1 } from "../component/navbar1.js";
let nav = navbar1();
// console.log(nav)
document.getElementById("navbar").innerHTML = nav;

let data = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_500x.png?v=1642405569",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "999",
    strprice: " 2,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_400x.png?v=1625045114",
    pname: "boAt Rockerz 235 V2",
    price: "999",
    strprice: " 2,990",
    rating: " 4.8 | 1007 reviews",
    dec: "You Save: ₹ 1991 (67%)",
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_400x.png?v=1625046216",
    pname: "boAt Storm",
    price: "2499",
    strprice: " 2,990",
    rating: " 4.8 | 919 reviews",
    dec: "You Save: ₹ 349 (58%)",
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6af12e30-e6d0-43d3-afd2-500065309a3e_400x.png?v=1625552657",
    pname: "boAt Rockerz 255 Pro+",
    price: "1299",
    strprice: " 3,990",
    rating: " 4.8 | 309 reviews",
    dec: "You Save: ₹ 2691 (67%)",
  },
  {
    id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/402-main-img_400x.png?v=1630059242",
    pname: "boAt Airdopes 402 - Wireless Earbudss",
    price: "1699",
    strprice: " 5,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 4291 (72%)",
  },
  {
    id: 6,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_400x.png?v=1574927262",
    pname: "boAt BassHeads 103",
    price: "369",
    strprice: " 1,290",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 2791 (70%)",
  },
  {
    id: 7,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_400x.png?v=1625046386",
    pname: "boAt BassHeads 242",
    price: "449",
    strprice: " 1,490",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1041 (70%)",
  },
  {
    id: 8,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/336d66bb-60e6-4b02-831b-864ea4fada9e_400x.png?v=1625045731",
    pname: "boAt Airdopes 381 - In Ear Wireless Earbuds",
    price: "1599",
    strprice: " 4,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 3391 (67%)",
  },
  {
    id: 9,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3e35681e-bcb1-449c-a58a-2d43e8b00bf4_400x.png?v=1633518105",
    pname: "boAt Stone 1200",
    price: "3999",
    strprice: " 6,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 2991 (43%)",
  },
  {
    id: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-650-black_400x.png?v=1624968476",
    pname: "boAt Airdopes 131 - Wireless Earbuds",
    price: "1699",
    strprice: " 3,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 2291 (57%)",
  },
  {
    id: 11,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_c5f9fe7c-c012-4d93-ba0c-b25267c0560d_400x.png?v=1647426797",
    pname: "boAt Airdopes 411 ANC",
    price: "1899",
    strprice: " 4,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 3091 (62%)",
  },
  {
    id: 12,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_57e6221e-9677-434f-9175-f9051bc30c58_400x.png?v=1646027001",
    pname: "boAt Wave Pro 47 - Make in India",
    price: "999",
    strprice: " 2,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
  },
  {
    id: 13,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_400x.png?v=1625045743",
    pname: "boAt Wave Pro 47 - Make in India",
    price: "999",
    strprice: " 2,990",
    rating: " 4.8 | 932 reviews",
    dec: "You Save: ₹ 1991 (67%)",
  },
];

console.log(data.length);
let cont = document.querySelector("#container");

let show = (data) => {
  data.forEach((e) => {
    let box = document.createElement("div");
    box.setAttribute("class", "cards");
    let imge = document.createElement("img");
    let box2 = document.createElement("div");
    box2.setAttribute("class", "detail");
    let name = document.createElement("h3");

    let rating = document.createElement("p");
    let price = document.createElement("p");
    let strprice = document.createElement("span");
    let dec = document.createElement("p");
    let hr = document.createElement("hr");

    imge.src = e.image;
    name.innerText = e.pname;
    rating.innerText = e.rating;
    price.innerText = "₹ " + e.price;
    strprice.innerText = " ₹" + e.strprice;
    dec.innerText = e.dec;

    let btn = document.createElement("button");
    btn.innerText = "Add To Cart";
    btn.setAttribute("class", "add");
    btn.style.margin = "auto";
    btn.addEventListener("click", () => {
      addTocart(e);
    });
    price.append(strprice);
    box2.append(name, rating, hr, price, dec, btn);

    box.append(imge, box2);
    cont.append(box);
  });
};

show(data);

let arr = JSON.parse(localStorage.getItem("cart")) || [];
function addTocart(ele) {
  let id = ele.id;
  let x = checker(id);
  // console.log(x);
  if (x) {
    arr.push(ele);
    localStorage.setItem("cart", JSON.stringify(arr));
    swal("Good job!", "Product Added To Cart!", "success");
  } else {
    swal("Failed!", "Item Already Present To Cart!", "info");
  }
}

function checker(a) {
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i].id == +a) {
      return false;
    }
  }
  return true;
}

import { footer } from "../component/footer1.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();
