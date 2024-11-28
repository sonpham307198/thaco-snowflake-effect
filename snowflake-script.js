(function () {
    // Tạo phần tử canvas
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '999999';
    canvas.style.pointerEvents = 'none';

    const ctx = canvas.getContext('2d');

    // Thiết lập kích thước canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Mảng lưu các bông tuyết
    const snowflakes = [];
    const maxSnowflakes = 100;

    // Tạo một bông tuyết
    function createSnowflake() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 2,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.3,
        };
    }

    // Khởi tạo các bông tuyết ban đầu
    for (let i = 0; i < maxSnowflakes; i++) {
        snowflakes.push(createSnowflake());
    }

    // Vẽ và cập nhật vị trí các bông tuyết
    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        snowflakes.forEach((snowflake) => {
            ctx.beginPath();
            ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
            ctx.fill();

            // Cập nhật vị trí
            snowflake.x += snowflake.speedX;
            snowflake.y += snowflake.speedY;

            // Nếu bông tuyết ra khỏi màn hình, đưa nó về lại phía trên
            if (snowflake.y > canvas.height) {
                snowflake.y = -snowflake.radius;
                snowflake.x = Math.random() * canvas.width;
            }
            if (snowflake.x > canvas.width || snowflake.x < -snowflake.radius) {
                snowflake.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(drawSnowflakes);
    }

    drawSnowflakes();
})();
