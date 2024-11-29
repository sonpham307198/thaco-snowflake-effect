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
    const maxSnowflakes = 50; // Số lượng bông tuyết

    // Tải ảnh bông tuyết
    const snowflakeImage = new Image();
    snowflakeImage.src = 'https://sonpham307198.github.io/thaco-snowflake-effect/snow-3.png';

    // Tạo một bông tuyết
    function createSnowflake() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 30 + 10, // Kích thước ngẫu nhiên
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.3,
            blur: Math.random() * 10, // Độ mờ ngẫu nhiên
            rotation: Math.random() * 360, // Góc quay ban đầu
            rotationSpeed: Math.random() * 2 - 1 // Tốc độ quay
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
            // Lưu trạng thái gốc
            ctx.save();

            // Thiết lập hiệu ứng mờ
            ctx.filter = `blur(${snowflake.blur}px)`;

            // Đặt vị trí và xoay hình ảnh
            ctx.translate(snowflake.x, snowflake.y);
            ctx.rotate((snowflake.rotation * Math.PI) / 180);
            ctx.globalAlpha = snowflake.opacity;

            // Vẽ hình ảnh bông tuyết
            ctx.drawImage(
                snowflakeImage,
                -snowflake.size / 2,
                -snowflake.size / 2,
                snowflake.size,
                snowflake.size
            );

            // Khôi phục trạng thái gốc
            ctx.restore();

            // Cập nhật vị trí
            snowflake.x += snowflake.speedX;
            snowflake.y += snowflake.speedY;
            snowflake.rotation += snowflake.rotationSpeed;

            // Thay đổi độ trong suốt để tạo hiệu ứng mờ dần
            if (snowflake.y > canvas.height / 2) {
                snowflake.opacity -= 0.005;
                if (snowflake.opacity <= 0) {
                    snowflake.opacity = Math.random() * 0.5 + 0.3;
                }
            }

            // Nếu bông tuyết ra khỏi màn hình, đưa nó về lại phía trên
            if (snowflake.y > canvas.height) {
                snowflake.y = -snowflake.size;
                snowflake.x = Math.random() * canvas.width;
            }
            if (snowflake.x > canvas.width || snowflake.x < -snowflake.size) {
                snowflake.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(drawSnowflakes);
    }

    // Chờ ảnh tải xong rồi mới bắt đầu
    snowflakeImage.onload = drawSnowflakes;
})();
