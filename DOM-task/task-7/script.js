const reelsData = [
  {
    userName: "TravelGuru_Aditi",
    likeCount: 15400,
    isLiked: true,
    commentCount: 212,
    shareCount: 45,
    isFollowed: true,
    caption: "Chasing the sunset glow over the Himalayas. Can you guess the spot? 🌄 #IndiaTravel #MountainVibes",
    video: "https://www.shutterstock.com/shutterstock/videos/3729942649/preview/stock-footage-vertical-sexy-woman-dancing-a-seductive-dance-twerking-black-attire-a-backdrop-of-a-clear-sky.webm",
    userprofile: "https://i.pinimg.com/736x/31/64/da/3164da74109cd95f1cf0d5c13a505eca.jpg"
  },
  {
    userName: "ChefRohanV",
    likeCount: 890,
    isLiked: false,
    commentCount: 34,
    shareCount: 11,
    isFollowed: false,
    caption: "The ultimate 5-minute pasta hack that tastes like fine dining! 🍝 #FoodHacks #EasyRecipes",
    video: "https://v.ftcdn.net/05/22/63/36/700_F_522633680_TMiiKd2T1UgdgDNPK06fKF3I0tyPTG5h_ST.mp4",
    userprofile: "https://i.pinimg.com/736x/31/64/da/3164da74109cd95f1cf0d5c13a505eca.jpg"
  },
  {
    userName: "CodingWizard_Karan",
    likeCount: 235000,
    isLiked: true,
    commentCount: 1540,
    shareCount: 678,
    isFollowed: true,
    caption: "Stop writing messy code! My top 3 tips for clean functions. Watch till the end! 💻 #Programming #CodeTips",
    video: "./reels/3.mp4",
    userprofile: "https://i.pinimg.com/736x/31/64/da/3164da74109cd95f1cf0d5c13a505eca.jpg"
  },
  {
    userName: "Art_by_Priya",
    likeCount: 4500,
    isLiked: false,
    commentCount: 98,
    shareCount: 23,
    isFollowed: true,
    caption: "A sneak peek at my latest watercolor mandala. Slow art is the best art. ✨ #MandalaArt #IndianArtist",
    video: "./reels/4.mp4",
    userprofile: "https://i.pinimg.com/736x/31/64/da/3164da74109cd95f1cf0d5c13a505eca.jpg"
  },
  {
    userName: "Gym_Freak_Vikram",
    likeCount: 7800,
    isLiked: true,
    commentCount: 155,
    shareCount: 30,
    isFollowed: false,
    caption: "Full chest day routine. Drop a 💪 if you hit the gym today! #FitnessIndia #WorkoutMotivation",
    video: "./reels/5.mp4",
    userprofile: "https://i.pinimg.com/736x/31/64/da/3164da74109cd95f1cf0d5c13a505eca.jpg"
  },
  {
    userName: "Bookworm_Neha",
    likeCount: 1200,
    isLiked: false,
    commentCount: 56,
    shareCount: 8,
    isFollowed: false,
    caption: "Just finished reading 'The Alchemist' for the third time. Still hits different. What should I read next? 📚 #BookReview #ReadingList",
    video: "./reels/6.mp4",
    userprofile: "https://i.pinimg.com/736x/31/64/da/3164da74109cd95f1cf0d5c13a505eca.jpg"
  },
  {
    userName: "Fashionista_Zoe",
    likeCount: 35000,
    isLiked: true,
    commentCount: 410,
    shareCount: 180,
    isFollowed: true,
    caption: "The viral 'Aesthetic Outfit' challenge! Which look is your favorite—1, 2, or 3? 💖 #FashionTrends #OOTD",
    video: "./reels/7.mp4",
    userprofile: "https://i.pinimg.com/736x/31/64/da/3164da74109cd95f1cf0d5c13a505eca.jpg"
  },
  {
    userName: "Vlog_with_Varun",
    likeCount: 650,
    isLiked: false,
    commentCount: 20,
    shareCount: 5,
    isFollowed: false,
    caption: "Trying street food in Mumbai! The vada pav vendor was the best! 🤤 #StreetFood #MumbaiDiaries",
    video: "./reels/8.mp4",
    userprofile: "https://i.pinimg.com/736x/31/64/da/3164da74109cd95f1cf0d5c13a505eca.jpg"
  },
  {
    userName: "DIY_Decor_Simran",
    likeCount: 9900,
    isLiked: true,
    commentCount: 110,
    shareCount: 55,
    isFollowed: true,
    caption: "Turned an old tire into a gorgeous patio table! Watch the full process. 🛠️ #DIYHome #Upcycling",
    video: "./reels/6.mp4",
    userprofile: "https://i.pinimg.com/736x/31/64/da/3164da74109cd95f1cf0d5c13a505eca.jpg"
  },
  {
    userName: "PetLover_Rajesh",
    likeCount: 11000,
    isLiked: true,
    commentCount: 305,
    shareCount: 70,
    isFollowed: true,
    caption: "My dog, Leo, meeting snow for the first time! Pure joy in a frame. 🐾❄️ #DogsofInstagram #CutePets",
    video: "./reels/2.mp4",
    userprofile: "https://i.pinimg.com/736x/31/64/da/3164da74109cd95f1cf0d5c13a505eca.jpg"
  }
];

// console.log(reelsData);

let allreels = document.querySelector('.all-reels')


let sum = ''

reelsData.forEach((elem) => {
  sum = sum + ` <div class="reels">
          <video autoplay loop muted class='main-img' src="${elem.video}" alt="" ></video>

          <div class="bottom">
            <div class="user">
              <img class='user-img' src="${elem.userprofile}" alt="">
              <h4>${elem.userName}</h4>
              <button>${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>

          <div class="right">
            <div class='like'>
              <h4 class='like-icon icon'>${elem.isLiked ? '<i class=" love ri-heart-fill"></i>' : '<i class="ri-heart-line">'}</i></h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class='comment'>
              <h4 class='comment-icon icon'><i class="ri-chat-1-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class='share'>
              <h4 class='share-icon icon'><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class='menu'>
              <h4 class='menu-icon icon'><i class="ri-more-2-line"></i></h4>
            </div>
          </div>
        </div>`
})

console.log(sum)

allreels.innerHTML = sum