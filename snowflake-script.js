// Thêm CSS trực tiếp vào trang
const css = `
/* Nội dung từ style.css */
body {
    background-color: black;
}
#container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
}
.snow {
    position: absolute;
    top: -10px;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    opacity: 0.8;
    animation: fall 10s linear infinite;
}
@keyframes fall {
    to {
        transform: translateY(100vh);
    }
}
`;
const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

// JavaScript từ script.js
function createSnow() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snow';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 7 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.transform = `scale(${Math.random()})`;
    document.getElementById('container').appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 10000);
}

setInterval(createSnow, 100);
