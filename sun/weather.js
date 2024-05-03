const SCREEN_WIDTH = 1536;
const SCREEN_HEIGHT = 868;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.style.backgroundColor = '#87CEEB';

const sunImg = new Image();
sunImg.src = 'sun.png';

function calculateSunPosition(sunrise, sunset) {
    const now = new Date();
    const totalDaytime = sunset - sunrise;
    const currentTime = now - sunrise;
    const progress = currentTime / totalDaytime;

    const sunX = SCREEN_WIDTH / 2 + 125;
    const sunY = SCREEN_HEIGHT * (1 - progress);
    return { x: sunX, y: sunY };
}

async function getSunriseSunset() {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=42.3893679&lng=-72.528655&formatted=0`);
    const data = await response.json();
    const sunrise = new Date(data.results.sunrise);
    const sunset = new Date(data.results.sunset);
    return { sunrise, sunset };
}

async function animateSun() {
    const { sunrise, sunset } = await getSunriseSunset();

    ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    const { x, y } = calculateSunPosition(sunrise, sunset);

    const sunWidth = sunImg.width / 2;
    const sunHeight = sunImg.height / 2;

    ctx.fillStyle = '#00BFFF';
    ctx.drawImage(sunImg, x - sunWidth / 2, y - sunHeight / 2, sunWidth, sunHeight);

    requestAnimationFrame(animateSun);
}

animateSun();
