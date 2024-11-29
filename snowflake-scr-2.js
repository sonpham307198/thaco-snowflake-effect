(function () {
    // Thêm CSS vào document
    const css = `
        body {
            margin: 0;
            overflow: hidden;
        }

        #container {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
        }

        .snow {
            position: absolute;
            top: 0;
            left: 0;
            width: 50px;
            height: 50px;
            background-image: url('https://sonpham307198.github.io/thaco-snowflake-effect/snow-3.png');
            background-size: cover;
            animation: animationSnow linear infinite;
        }

        @keyframes animationSnow {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) translateX(50px);
                opacity: 0;
            }
        }
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // Tạo container chứa tuyết
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);

    const maxSnowflakes = 50; // Số lượng tối đa bông tuyết

    // Hàm tạo bông tuyết
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snow');

        // Randomize các thuộc tính
        const size = Math.random() * 30 + 10; // Kích thước: 10px - 40px
        const left = Math.random() * window.innerWidth; // Vị trí ngang
        const animationDuration = Math.random() * 5 + 5; // Thời gian animation: 5 - 10 giây
        const blurChance = Math.random();
        const blur = blurChance > 0.7 ? Math.random() * 2 + 'px' : '0px'; // 30% có mờ

        // Áp dụng các thuộc tính cho bông tuyết
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${left}px`;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.filter = `blur(${blur})`;

        // Thêm bông tuyết vào container
        container.appendChild(snowflake);

        // Xóa bông tuyết sau khi animation kết thúc để tránh tích tụ DOM
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // Tạo bông tuyết định kỳ để duy trì hiệu ứng
    const snowflakeInterval = setInterval(() => {
        // Kiểm tra số lượng bông tuyết hiện tại
        const currentSnowflakes = container.getElementsByClassName('snow').length;
        if (currentSnowflakes < maxSnowflakes) {
            createSnowflake();
        }
    }, 300); // Tạo bông tuyết mới mỗi 300ms

    // Tạo các bông tuyết ban đầu
    for (let i = 0; i < maxSnowflakes; i++) {
        setTimeout(createSnowflake, Math.random() * 5000); // Tạo bông tuyết trong 5 giây đầu
    }
})();
