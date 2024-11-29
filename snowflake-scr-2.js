(function () {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '999999';
    canvas.style.pointerEvents = 'none';

    const ctx = canvas.getContext('2d');
    const snowflakes = [];
    const maxSnowflakes = 50;
    let lastTimestamp = 0;

    // Load snowflake image
    const snowflakeImage = new Image();
    snowflakeImage.src = 'https://sonpham307198.github.io/thaco-snowflake-effect/snow-2.png';

    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Create a snowflake
    function createSnowflake() {
        const isBlurred = Math.random() > 0.7;
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 30 + 10,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 50 + 50, // Speed in pixels per second
            opacity: 0,
            blur: isBlurred ? Math.random() * 10 : 0,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 2 - 1,
            animationProgress: 0
        };
    }

    // Initialize snowflakes
    for (let i = 0; i < maxSnowflakes; i++) {
        snowflakes.push(createSnowflake());
    }

    // Update snowflakes
    function updateSnowflakes(deltaTime) {
        snowflakes.forEach((snowflake) => {
            // Update animation progress
            snowflake.animationProgress += deltaTime / 2000;

            // Update opacity with keyframes
            if (snowflake.animationProgress <= 0.5) {
                snowflake.opacity = snowflake.animationProgress * 2;
            } else if (snowflake.animationProgress > 0.5 && snowflake.animationProgress <= 1) {
                snowflake.opacity = 1 - (snowflake.animationProgress - 0.5) * 2;
            }

            // Update position and rotation
            snowflake.x += snowflake.speedX * deltaTime / 1000;
            snowflake.y += snowflake.speedY * deltaTime / 1000;
            snowflake.rotation += snowflake.rotationSpeed * deltaTime / 1000;

            // Reset snowflake if it moves out of bounds
            if (snowflake.animationProgress > 1 || snowflake.y > canvas.height) {
                Object.assign(snowflake, createSnowflake());
                snowflake.y = -snowflake.size; // Reset to top of the screen
            }
        });
    }

    // Draw snowflakes
    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snowflakes.forEach((snowflake) => {
            ctx.save();
            ctx.filter = `blur(${snowflake.blur}px)`;
            ctx.translate(snowflake.x, snowflake.y);
            ctx.rotate((snowflake.rotation * Math.PI) / 180);
            ctx.globalAlpha = snowflake.opacity;
            ctx.drawImage(
                snowflakeImage,
                -snowflake.size / 2,
                -snowflake.size / 2,
                snowflake.size,
                snowflake.size
            );
            ctx.restore();
        });
    }

    // Animation loop
    function animate(timestamp) {
        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        updateSnowflakes(deltaTime);
        drawSnowflakes();

        requestAnimationFrame(animate);
    }

    // Start animation when image is loaded
    snowflakeImage.onload = () => {
        requestAnimationFrame(animate);
    };
})();
