// Базовий рівень

// 1
const color = document.querySelector(".change-text-color-btn");

function changeTextColor() {
  color.style.color = "white";
}

color.onclick = changeTextColor;

// 2
const background = document.querySelector(".change-color-btn");

function changeBackgroundColor() {
  background.style.backgroundColor = "rgb(0, 255, 115)";
}

background.onclick = changeBackgroundColor;

// 3
const img = document.querySelector(".img");

function changeImg() {
  img.src = "./assets/img/img2.jpg";
}

img.onmouseout = changeImg;

// Розширена версія
const user = {
  firstName: "Test",
  lastName: "Testovych",
  profilePhoto:
    "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  birthday: new Date("2000-05-16"),
  nickname: "super dev",
  likesCount: 10,
};

const dowloadBtn = document.querySelector(".download-btn");

function createCard() {
  const cardWrapper = document.createElement("article");
  cardWrapper.classList.add("user-card-wrapper");

  const nameSurname = document.createElement("h1");
  nameSurname.classList.add("name-surname");
  nameSurname.textContent = `${user.firstName} ${user.lastName}`;

  const userPhoto = document.createElement("img");
  userPhoto.classList.add("user-photo");
  userPhoto.src = user.profilePhoto;
  userPhoto.alt = "User Photo";

  const birthday = document.createElement("p");
  birthday.classList.add("bth");
  birthday.textContent = `Birthday: ${user.birthday.toDateString()}`;

  const nickname = document.createElement("p");
  nickname.classList.add("nick");
  nickname.textContent = `Nickname: ${user.nickname}`;

  const likes = document.createElement("p");
  likes.classList.add("likes");
  likes.textContent = `Likes: ${user.likesCount}`;

  birthday.addEventListener("mouseenter", () => {
    const age = calculateAge(user.birthday);
    birthday.textContent = `Birthday: ${user.birthday.toDateString()} (Age: ${age})`;
  });

  birthday.addEventListener("mouseleave", () => {
    birthday.textContent = `Birthday: ${user.birthday.toDateString()}`;
  });

  cardWrapper.appendChild(nameSurname);
  cardWrapper.appendChild(userPhoto);
  cardWrapper.appendChild(birthday);
  cardWrapper.appendChild(nickname);
  cardWrapper.appendChild(likes);

  document.body.appendChild(cardWrapper);
}

function calculateAge(birthday) {
  const today = new Date();
  const birthDate = new Date(birthday);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

dowloadBtn.addEventListener("click", createCard);
