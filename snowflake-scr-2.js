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
    const maxSnowflakes = 35; // Số lượng bông tuyết

    // Tải ảnh bông tuyết
    const snowflakeImage = new Image();
    snowflakeImage.src = 'https://sonpham307198.github.io/thaco-snowflake-effect/snow-3.png';

    // Tạo một bông tuyết
    function createSnowflake() {
        const isBlurred = Math.random() > 0.7; // 30% bông tuyết bị mờ
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 25 + 10, // Kích thước ngẫu nhiên
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 6 + 3, // Tăng tốc độ rơi
            opacity: 0,
            blur: isBlurred ? Math.random() * 10 : 0, // Độ mờ ngẫu nhiên
            rotation: Math.random() * 360, // Góc quay ban đầu
            rotationSpeed: Math.random() * 2 - 1, // Tốc độ quay
            animationProgress: 0 // Theo dõi tiến trình animation
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
            // Tăng tiến trình animation
            snowflake.animationProgress += 0.01;

            // Tính toán opacity theo keyframes
            if (snowflake.animationProgress <= 0.5) {
                snowflake.opacity = snowflake.animationProgress * 2; // 0% -> 100% opacity
            } else if (snowflake.animationProgress > 0.5 && snowflake.animationProgress <= 1) {
                snowflake.opacity = 1 - (snowflake.animationProgress - 0.5) * 2; // 100% -> 0% opacity
            }

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

            // Nếu animation kết thúc, reset bông tuyết
            if (snowflake.animationProgress > 1 || snowflake.y > canvas.height) {
                Object.assign(snowflake, createSnowflake());
                snowflake.y = -snowflake.size; // Đưa về phía trên
            }
        });

        requestAnimationFrame(drawSnowflakes);
    }

    // Chờ ảnh tải xong rồi mới bắt đầu
    snowflakeImage.onload = drawSnowflakes;
})();
