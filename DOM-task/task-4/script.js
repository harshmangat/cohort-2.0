let like = document.querySelector(".ri-heart-fill");
let likeCount = document.querySelector(".likes-Count");
let img = document.querySelector(".img");
let love = document.querySelector("#love");

let isLike = false;
count = 990;

function likeToggle() {
  isLike = !isLike;

  if (isLike) {
    count++;
    like.style.color = "red";
    like.style.webkitTextStroke = "1.5px red";
    likeCount.innerHTML = count + " likes";
  } else {
    count--;

    like.style.color = "white";
    like.style.webkitTextStroke = "1.5px black";

    likeCount.innerHTML = count + " likes";
  }
}

function likeEffect() {
  if (!isLike) {
    love.style.opacity = 1;
    love.style.transform = "translate(-50%,-50%) scale(1.5) rotate(0deg)";

    setTimeout(function () {
      love.style.transform = "translate(-50%,-190%) scale(1) rotate(60deg)";
    }, 800);
    setTimeout(function () {
      love.style.opacity = 0;
    }, 1000);
    setTimeout(function () {
      love.style.transform = "translate(-50%,-50%) scale(0) rotate(-60deg)";
    }, 1200);
  }
}

like.addEventListener("click", () => {
  likeEffect();
  likeToggle();
});

img.addEventListener("dblclick", () => {
  console.log(img);
  likeEffect();
  likeToggle();
});
