const input = document.querySelector(".input");
const password = document.querySelector(".password");
const reflesh = document.querySelector(".reflesh");
const gonder = document.querySelector(".gönder");

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

password.innerHTML = "";

const getPassword = () => {
  for (let x = 0; x < 6; x++) {
    password.innerHTML += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
};

getPassword();

reflesh.addEventListener("click", () => {
  password.innerHTML = "";
  getPassword();
});

gonder.addEventListener("click", () => {
  if (password.innerHTML === input.value) {
    input.style.border = "3px solid green";
    setTimeout(() => {
      password.innerHTML = "";
      getPassword();
      input.style.border = "";
      input.value = "";
    }, 1500);
  } else {
    input.style.border = "3px solid tomato";
    setTimeout(() => {
      input.style.border = "";
    }, 1500);
  }
});
