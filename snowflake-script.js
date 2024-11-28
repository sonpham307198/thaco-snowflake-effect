// Tạo CSS và thêm vào <head>
(function () {
    const style = document.createElement("style");
    style.textContent = `
    body {
        margin: 0;
        overflow: hidden;
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
    document.head.appendChild(style);

    // Tạo HTML container
    const container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);

    // Tạo hiệu ứng tuyết rơi
    function createSnowflakes() {
        const count = 50; // Số lượng bông tuyết
        for (let i = 0; i < count; i++) {
            const leftSnow = Math.random() * window.innerWidth; // Vị trí ngang ngẫu nhiên
            const topSnow = Math.random() * window.innerHeight; // Vị trí dọc ngẫu nhiên
            const size = Math.random() * 50 + 10; // Kích thước ngẫu nhiên
            const duration = Math.random() * 5 + 3; // Thời gian animation
            const blur = Math.random() * 5; // Độ mờ

            const snowflake = document.createElement("div");
            snowflake.classList.add("snow");
            snowflake.style.left = `${leftSnow}px`;
            snowflake.style.top = `${topSnow}px`;
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            snowflake.style.animationDuration = `${duration}s`;
            snowflake.style.filter = `blur(${blur}px)`;

            container.appendChild(snowflake);
        }
    }

    // Khởi tạo hiệu ứng tuyết khi trang tải xong
    window.onload = createSnowflakes;
})();
