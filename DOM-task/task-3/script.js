let grow = 0;
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let progressbar = document.querySelector(".inner");
let sec = document.querySelector(".span-2");

btn.addEventListener("click", () => {
  btn.style.pointerEvents = "none";
  let num = 50 + Math.floor(Math.random() * 50);

  let inetrval = setInterval(() => {
    grow++;
    progressbar.style.width = grow + "%";
    h1.innerHTML = grow + "%";
  }, num);

  setTimeout(() => {
    clearInterval(inetrval);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.5;
    sec.innerHTML = num / 10;
  }, num * 100);
});
