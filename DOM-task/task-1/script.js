const cricketTeams = [
  {
    teamName: "IND",
    primaryColor: "rgb(0, 48, 143)", // Dark Blue
    secondaryColor: "rgb(255, 153, 51)", // Orange
    fullName: "India National Cricket Team",
  },
  {
    teamName: "AUS",
    primaryColor: "rgb(0, 132, 61)", // Green
    secondaryColor: "rgb(255, 205, 0)", // Yellow
    fullName: "Australia National Cricket Team",
  },
  {
    teamName: "ENG",
    primaryColor: "rgb(11, 61, 145)", // Blue
    secondaryColor: "white",
    fullName: "England National Cricket Team",
  },
  {
    teamName: "NZ",
    primaryColor: "black",
    secondaryColor: "white",
    fullName: "New Zealand National Cricket Team",
  },
  {
    teamName: "PAK",
    primaryColor: "rgb(1, 65, 28)", // Dark Green
    secondaryColor: "white",
    fullName: "Pakistan National Cricket Team",
  },
  {
    teamName: "SA",
    primaryColor: "rgb(0, 122, 77)", // Green
    secondaryColor: "rgb(255, 199, 44)", // Yellow
    fullName: "South Africa National Cricket Team",
  },
  {
    teamName: "SL",
    primaryColor: "rgb(0, 34, 103)", // Navy Blue
    secondaryColor: "rgb(255, 183, 20)", // Gold
    fullName: "Sri Lanka National Cricket Team",
  },
  {
    teamName: "WI",
    primaryColor: "rgb(255, 130, 0)", // Orange
    secondaryColor: "rgb(0, 155, 58)", // Green
    fullName: "West Indies National Cricket Team",
  },
  {
    teamName: "BAN",
    primaryColor: "rgb(0, 106, 78)", // Green
    secondaryColor: "rgb(244, 42, 65)", // Red
    fullName: "Bangladesh National Cricket Team",
  },
  {
    teamName: "AFG",
    primaryColor: "rgb(0, 138, 69)", // Green
    secondaryColor: "rgb(229, 62, 62)", // Red
    fullName: "Afghanistan National Cricket Team",
  },
  {
    teamName: "IRE",
    primaryColor: "rgb(22, 155, 98)", // Green
    secondaryColor: "white",
    fullName: "Ireland National Cricket Team",
  },
  {
    teamName: "ZIM",
    primaryColor: "rgb(255, 199, 44)", // Yellow
    secondaryColor: "rgb(0, 122, 51)", // Green
    fullName: "Zimbabwe National Cricket Team",
  },
];

let div = document.querySelector("main");
let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let arr = cricketTeams[Math.floor(Math.random() * cricketTeams.length)];

  document.body.style.backgroundColor = arr.primaryColor;
  div.style.backgroundColor = arr.secondaryColor;
  h3.textContent = arr.teamName;
  h2.innerHTML = arr.fullName;
  console.log(arr);
});
