// Tạo và thêm CSS vào trang
const css = `
    body {
        margin: 0;
    }
    #container {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .snow {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        background-image: url('https://sonpham307198.github.io/thaco-snowflake-effect/snow-2.png');
        background-size: cover;
        animation: animationSnow 4s ease-in-out infinite;
    }

    @keyframes animationSnow {
        0% {
            transform: translate(0, 0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translate(100px, 50vh);
        }
    }
`;

// Tạo và thêm thẻ style vào đầu tài liệu
const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

// Tạo và thêm phần tử container vào body (nếu chưa có)
if (!document.querySelector('#container')) {
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
}

// Tạo các bông tuyết và thêm vào container
let container = document.getElementById('container');
let count = 50;
for (let i = 0; i < count; i++) {
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let topSnow = Math.floor(Math.random() * container.clientHeight);
    let widthSnow = Math.floor(Math.random() * 50);
    let timeSnow = Math.floor((Math.random() * 5) + 5);
    let blurSnow = Math.floor(Math.random() * 10);

    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    container.appendChild(div);
}
