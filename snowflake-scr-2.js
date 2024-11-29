(function () {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '999999';
    canvas.style.pointerEvents = 'none';

    const ctx = canvas.getContext('2d');

    let snowflakes = [];
    const maxSnowflakes = 50;
    let lastScrollY = window.scrollY;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const snowflakeImage = new Image();
    snowflakeImage.src = 'https://sonpham307198.github.io/thaco-snowflake-effect/snow-3.png';

    function createSnowflake() {
        const isBlurred = Math.random() > 0.7;
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 30 + 10,
            speedY: Math.random() * 3 + 1, // Tốc độ ổn định
            speedX: Math.random() * 1 - 0.5,
            opacity: 0,
            blur: isBlurred ? Math.random() * 5 : 0,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 2 - 1,
            lifeProgress: 0,
        };
    }

    while (snowflakes.length < maxSnowflakes) {
        snowflakes.push(createSnowflake());
    }

    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        snowflakes.forEach((snowflake) => {
            snowflake.lifeProgress += 0.01;
            if (snowflake.lifeProgress <= 0.5) {
                snowflake.opacity = snowflake.lifeProgress * 2; // Tăng opacity
            } else if (snowflake.lifeProgress > 0.5) {
                snowflake.opacity = 1 - (snowflake.lifeProgress - 0.5) * 2; // Giảm opacity
            }

            ctx.save();
            ctx.globalAlpha = snowflake.opacity;
            ctx.filter = `blur(${snowflake.blur}px)`;
            ctx.translate(snowflake.x, snowflake.y);
            ctx.rotate((snowflake.rotation * Math.PI) / 180);

            ctx.drawImage(
                snowflakeImage,
                -snowflake.size / 2,
                -snowflake.size / 2,
                snowflake.size,
                snowflake.size
            );

            ctx.restore();

            snowflake.y += snowflake.speedY;
            snowflake.x += snowflake.speedX;
            snowflake.rotation += snowflake.rotationSpeed;

            // Nếu tuyết ra khỏi màn hình, tái tạo lại
            if (snowflake.y > canvas.height || snowflake.lifeProgress > 1) {
                Object.assign(snowflake, createSnowflake());
                snowflake.y = -snowflake.size;
            }
        });

        requestAnimationFrame(drawSnowflakes);
    }

    snowflakeImage.onload = () => {
        drawSnowflakes();
    };

    window.addEventListener('scroll', () => {
        const scrollDelta = lastScrollY - window.scrollY;
        lastScrollY = window.scrollY;

        snowflakes.forEach((snowflake) => {
            snowflake.y -= scrollDelta * 0.2; // Điều chỉnh hiệu ứng khi cuộn
        });
    });
})();
