"use strict";

const tontonGifs = [
  "https://media1.tenor.com/m/rgoD73OyZUEAAAAC/fat-dude.gif",
  "https://media1.tenor.com/m/8AuWgDmgPBIAAAAd/baongoc-dtbncuti.gif",
  "https://media1.tenor.com/m/wQeo-dOgL9QAAAAC/nailong-crying-nailong.gif",
  "https://media1.tenor.com/m/dKJ_vGqO9qgAAAAC/nailong-yellow-dragon.gif",
  "https://media.tenor.com/Lq0qD7ZUfBUAAAAi/qoo-bee-qoo-bee-agapi.gif",
  "https://media1.tenor.com/m/GVztjQirRZMAAAAC/seriously-qoobee.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

yesBtn.addEventListener("click", () => {
  title.innerHTML = "Yay! I Loveee Youuu Babbyyyyy!! 💛";
  btnContainer.classList.add("hidden");
  changeImage("yes");
});

noBtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeYesButton() {
  yesButtonSize *= 1.2;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
}

function shrinkNoButton() {
  noButtonSize *= 0.90;
  noBtn.style.transform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
  const messages = [
    "Nooo? 😔",
    "Naaaahh lainaaaa lagee ☹️☹️",
    "Sureee baaaa 🧍‍♂️🧍‍♂️🧍‍♂️",
    "Dili gyuuddd? 😭😭😭",
    "Sigee langgg in ana nakaaa 💔💔💔",
    "aynaaa oieee... 🥀🥀🥀",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  img.src =
    image === "yes"
      ? "https://media.tenor.com/6dBdEsXHESAAAAAi/kiss.gif"
      : tontonGifs[image];
}

function updateNoButtonText() {
  noBtn.innerHTML = generateMessage(noCount);
}