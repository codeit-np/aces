//Create div element with styles
let div = document.createElement("div");
div.style.cssText = "border:2px solid black;width:300px";

// Create H1 element with content
let h1 = document.createElement("h1");
h1.innerHTML = "Hello World";

// Create p Element with content
let p = document.createElement("p");
p.innerHTML = "I love coding. do you?";

//Add h1 and p to div
div.appendChild(h1);
div.appendChild(p);

//Add div to body
document.body.appendChild(div);
