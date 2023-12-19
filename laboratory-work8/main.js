function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').innerHTML = timeString;
}
let timers = {}; 

function updateTimer(timerId) {
    const timerElement = document.getElementById(`timer${timerId}`);
    const time = timerElement.textContent.split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timers[timerId]);
        return;
    }

    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
    }

    timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer(timerId) {
    if (timers[timerId]) {
        clearInterval(timers[timerId]);
    }
    timers[timerId] = setInterval(() => updateTimer(timerId), 1000);
}

function stopTimer(timerId) {
    clearInterval(timers[timerId]);
}

function resetTimer(timerId) {
    clearInterval(timers[timerId]);
    const timerElement = document.getElementById(`timer${timerId}`);
    timerElement.textContent = timerElement.getAttribute('data-initial-value');
}

document.getElementById('timer1').setAttribute('data-initial-value', '00:10:00');
document.getElementById('timer2').setAttribute('data-initial-value', '01:30:00');
document.getElementById('timer3').setAttribute('data-initial-value', '00:05:00');

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);  // Змінюємо слайд кожні 2 секунди
}


const blocks = document.querySelectorAll('.block');

// Функція для генерації випадкового числа в заданому діапазоні
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функція для руху блоку
function moveBlock(block) {
    const maxWidth = window.innerWidth - block.clientWidth;
    const maxHeight = window.innerHeight - block.clientHeight;

    let left = getRandomInt(0, maxWidth);
    let top = getRandomInt(0, maxHeight);

    let directionX = getRandomInt(-1, 1);  // -1 для руху вліво, 1 для руху вправо
    let directionY = getRandomInt(-1, 1);  // -1 для руху вгору, 1 для руху вниз

    const speed = getRandomInt(1, 5);  // Випадкова швидкість

    const moveInterval = setInterval(() => {
        left += directionX * speed;
        top += directionY * speed;

        if (left <= 0 || left >= maxWidth || top <= 0 || top >= maxHeight) {
            // Зміна напрямку після досягнення границь
            if (left < 0 || left > maxWidth) {
                directionX *= -1;
            }
            if (top < 0 || top > maxHeight) {
                directionY *= -1;
            }
        }

        block.style.left = left + 'px';
        block.style.top = top + 'px';
    }, 30);
    return moveInterval;
}

blocks.forEach((block, index) => {
    const interval = moveBlock(block);
    block.setAttribute('data-interval', interval);
});



showSlides();  // Запускаємо слайд-шоу
setInterval(updateTime, 1000);
updateTime(); 