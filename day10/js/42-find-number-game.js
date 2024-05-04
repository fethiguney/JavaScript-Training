let numberInput = document.querySelector("#num");
let startButton = document.querySelector(".btn-start");
let guessButton = document.querySelector(".btn-guess");
let message = document.querySelector("#result");



const createRandomNumber = (min, max) => {
 return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(createRandomNumber(1, 100));

let randomNumber;
const startGame = () => {
    randomNumber = createRandomNumber(1, 100);
    startButton.style.display = "none";
    numberInput.style.display = "inline";
    guessButton.style.display = "inline";
}


const guessNumber = () => {
  let num = Number(numberInput.value);
  if (num >= 1 && num <= 100 && Number.isInteger(num)) {
    if (num < randomNumber) {
      message.innerHTML = "Küçük sayı girdiniz. Tekrar deneyiniz.";
    } else if (num > randomNumber) {
      message.innerHTML = "Buyuk sayı girdiniz. Tekrar deneyiniz.";
    } else {
      message.innerHTML = `Tebrikler, ${num} sayisini buldunuz.`;
      startButton.style.display = "inline";
      numberInput.style.display = "none";
      guessButton.style.display = "none";
    }
    numberInput.value = "";
    numberInput.focus();
  } else {
    message.innerHTML = "Lütfen 1 ile 100 arasında bir sayı giriniz.";
    startButton.style.display = "inline";
    numberInput.style.display = "none";
    guessButton.style.display = "none";
    numberInput.value = "";
    numberInput.focus();
  }
};
