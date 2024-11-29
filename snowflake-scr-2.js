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

    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const snowflakeImage = new Image();
    snowflakeImage.src = 'https://sonpham307198.github.io/thaco-snowflake-effect/snow-3.png';

    // Create snowflake
    function createSnowflake() {
        const isBlurred = Math.random() > 0.7; // 30% blurred
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 30 + 10,
            speedY: Math.random() * 2 + 1, // Reduce speed to 1-3 for stability
            speedX: Math.random() * 1 - 0.5,
            opacity: 0,
            blur: isBlurred ? Math.random() * 5 : 0,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 2 - 1,
            animationProgress: 0,
        };
    }

    // Populate snowflakes
    while (snowflakes.length < maxSnowflakes) {
        snowflakes.push(createSnowflake());
    }

    // Draw snowflakes
    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        snowflakes.forEach((snowflake) => {
            // Calculate opacity based on progress
            snowflake.animationProgress += 0.01;
            if (snowflake.animationProgress <= 0.5) {
                snowflake.opacity = snowflake.animationProgress * 2;
            } else if (snowflake.animationProgress > 0.5) {
                snowflake.opacity = 1 - (snowflake.animationProgress - 0.5) * 2;
            }

            // Save state
            ctx.save();
            ctx.globalAlpha = snowflake.opacity;
            ctx.filter = `blur(${snowflake.blur}px)`;
            ctx.translate(snowflake.x, snowflake.y);
            ctx.rotate((snowflake.rotation * Math.PI) / 180);

            // Draw snowflake
            ctx.drawImage(
                snowflakeImage,
                -snowflake.size / 2,
                -snowflake.size / 2,
                snowflake.size,
                snowflake.size
            );

            // Restore state
            ctx.restore();

            // Update snowflake position
            const scrollDelta = lastScrollY - window.scrollY;
            snowflake.y += snowflake.speedY - scrollDelta * 0.05; // Adjust speed during scroll
            snowflake.x += snowflake.speedX;
            snowflake.rotation += snowflake.rotationSpeed;

            // Reset snowflake if it moves out of bounds
            if (snowflake.y > canvas.height || snowflake.animationProgress > 1) {
                Object.assign(snowflake, createSnowflake());
                snowflake.y = -snowflake.size;
            }
        });

        // Smooth animation frame
        requestAnimationFrame(drawSnowflakes);
    }

    snowflakeImage.onload = () => {
        drawSnowflakes();
    };

    // Update last scroll position after each scroll event
    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
    });
})();
