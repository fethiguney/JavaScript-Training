function isPrime() {
  let num = document.querySelector(".num").value;
  let prime = true;

  if (num > 1 && Number.isInteger(num)) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        prime = false;
        break;
      }
    }

    document.querySelector(".result").innerHTML = prime
      ? `${num} sayısı asal sayıdır.`
      : `${num} sayısı asal sayı degildir.`;
  } else
    document.querySelector(".result").innerHTML = "Lütfen pozitif bir sayı giriniz.";
}
