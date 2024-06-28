let div = document.createElement("div");
div.style.cssText = "border:2px solid red";

let h1 = document.createElement("h1");
let img = document.createElement("img");

h1.innerHTML = "Hello World";
img.src = "https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8113.jpg?t=st=1719540696~exp=1719544296~hmac=93a4babbc52e3a31d0e7e7eeb3777d8e7f71ca71bea18bbdcc6dc6d5e08fb46f&w=1060";

div.appendChild(img);
div.appendChild(h1);

document.body.appendChild(div);