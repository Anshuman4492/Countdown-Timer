const newYears = '1 jan 2022';
const g = document.getElementById('Date').value;
document.getElementById('test').innerHTML = g;

console.log(g);

const daysEle = document.getElementById('days');
const hoursEle = document.getElementById('hours');
const minutesEle = document.getElementById('minutes');
const secEle = document.getElementById('seconds');

const button = document.getElementById('btn');
const introScreen = document.querySelector('.input-c');
const timer = document.querySelector('.countdown-c');

button.addEventListener("click", () => {
    introScreen.classList.add('fadeOut');
    timer.classList.add('fadeIn');
});

function countdown() {
    const newYearsDate = new Date(newYears);
    const currDate = new Date();
    const totalSeconds = (newYearsDate - currDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    // console.log(days, hours, minutes, seconds);
    daysEle.innerHTML = formatTime(days);
    hoursEle.innerHTML = formatTime(hours);
    minutesEle.innerHTML = formatTime(minutes);
    secEle.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial Call
countdown();
setInterval(countdown, 1000);