const clockItems = document.querySelectorAll("#clock li");
const clock = document.querySelector("#clock");

let timer = null;
let flag = true;

const startClock = () => {
	timer = setInterval(() => {
		const dateTime = new Date();
		const hour = dateTime.getHours();
		const minute = dateTime.getMinutes();

		clockItems[0].innerHTML = hour.toString().padStart(2, "0");
		clockItems[2].innerHTML = minute.toString().padStart(2, "0");
		clockItems[1].classList.toggle("hidden");

        // Ilk baslangictaki gecikmeden dolayi saatin icinin bos gozukmesini engelledik
		if (flag) {
			clock.classList.remove("hidden");
			flag = false;
		}
	}, 1000);
};

startClock();

const stopClock = () => {
	clearInterval(timer);
};

window.addEventListener("beforeunload", () => {
	stopClock();
	timer = null;
});