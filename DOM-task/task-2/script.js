let quotes = [
  "The best way out is always through.",
  "Be the change that you wish to see in the world.",
  "Simplicity is the ultimate sophistication.",
  "Every moment is a fresh beginning.",
  "Where there is a will, there is a way.",
  "This too shall pass.",
  "To live is the rarest thing in the world.",
  "Do what you love, love what you do.",
  "Action is the foundational key to all success.",
  "Happiness is not by chance, but by choice.",
  "Today is the oldest you've ever been and the youngest you'll ever be.",
  "A journey of a thousand miles begins with a single step.",
];

let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let h1 = document.createElement("h1");
  let x = Math.random() * 80;
  let y = Math.random() * 80;
  let rotation = Math.random() * 360;
  let scl = Math.random() * 2;

  h1.style.color = "#FAF9F6";
  h1.style.position = "absolute";
  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = rotation + "deg";
  h1.style.scale = scl;

  let i = Math.floor(Math.random() * quotes.length);

  console.log(quotes[i]);

  h1.innerText = quotes[i];

  main.appendChild(h1);
});
