let timer;

window.onload = () => {
    document.querySelector("#calculate").onclick = calculate;
    document.querySelector("#stop").onclick = stopTimer;
    document.querySelector("#reset").onclick = resetTimer;
};

function calculate() {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const endTime = new Date(date + "T" + time);

    if (isNaN(endTime)) {
        alert("Please enter a valid date and time.");
        return;
    }

    clearInterval(timer); // Clear previous intervals
    timer = setInterval(() => calculateTime(endTime), 1000);
}

function calculateTime(endTime) {
    const currentTime = new Date();

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;

        const d = Math.floor(timeLeft / (24 * 60 * 60));
        const h = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
        const m = Math.floor((timeLeft % (60 * 60)) / 60);
        const s = Math.floor(timeLeft % 60);

        days.innerText = d;
        hours.innerText = h;
        minutes.innerText = m;
        seconds.innerText = s;
    } else {
        clearInterval(timer);
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
        alert("Countdown has ended!");
    }
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    document.querySelector('#countdown-days').innerText = 0;
    document.querySelector('#countdown-hours').innerText = 0;
    document.querySelector('#countdown-minutes').innerText = 0;
    document.querySelector('#countdown-seconds').innerText = 0;
    document.querySelector("#date").value = "";
    document.querySelector("#time").value = "";
}
