let heading = document.getElementById("heading");
// donkey.style.color = "red";
// donkey.style.textDecoration = "underline";
// donkey.style.backgroundColor = "yellow";
heading.style.cssText = "color:red;text-decoration:underline;background-color:yellow";
heading.innerHTML = "Hello World";

let p = document.createElement("p");
p.innerHTML = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint necessitatibus ipsum magnam non nam, reprehenderit quam cupiditate minima saepe facilis sapiente totam ducimus aspernatur earum voluptas, commodi fuga inventore."
document.body.appendChild(p);