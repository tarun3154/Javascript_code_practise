const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.mins-hand');
const hourHand = document.querySelector('.hour-hand');
const numbers = document.querySelectorAll('.number');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function updateNumbers() {
    const numbersRotation = 30; // Degrees between each number (360 degrees / 12 numbers)
    const clockCenterX = 50;
    const clockCenterY = 50;

    for (let i = 0; i < numbers.length; i++) {
        const angle = i * numbersRotation;
        const radians = (angle - 90) * (Math.PI /180);
        const x = clockCenterX + 40 * Math.cos(radians);
        const y = clockCenterY + 40 * Math.sin(radians);

        numbers[i].style.left = x + '%';
        numbers[i].style.top = y + '%';
    }
}

setDate();
setInterval(setDate, 1000);
updateNumbers();
