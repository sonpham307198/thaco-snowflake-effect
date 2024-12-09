jQuery(document).ready(function () {
  const canvas2 = document.createElement('canvas');
  canvas2.id = 'canvas-2';
  canvas2.style.position = 'fixed';
  canvas2.style.top = '0';
  canvas2.style.left = '0';
  canvas2.style.zIndex = '999999';
  canvas2.style.pointerEvents = 'none';
  canvas2.style.willChange = 'transform, opacity'; // Tối ưu GPU
  document.body.appendChild(canvas2);

  const ctx2 = canvas2.getContext('2d');
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;

  const snowflakeImages = [];
  for (let i = 1; i <= 10; i++) {
    const img = new Image();
    img.src = `https://thaco.link/snow/snow-${i}.png`;
    snowflakeImages.push(img);
  }

  const snowflakes = [];
  const snowCount = 25; // Giảm số lượng bông tuyết
  for (let i = 0; i < snowCount; i++) {
    const img = snowflakeImages[Math.floor(Math.random() * snowflakeImages.length)];
    snowflakes.push({
      x: Math.random() * canvas2.width,
      y: Math.random() * canvas2.height,
      size: Math.random() * 20 + 20, // Giảm kích thước bông tuyết
      speedY: Math.random() * 3 + 2, // Tăng tốc độ rơi
      speedX: Math.random() * 1 - 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 2 - 1,
      opacityCycle: Math.random() * 6 + 4,
      opacityTime: Math.random() * 10,
      blur: Math.floor(Math.random() * 10) / 3,
      img: img
    });
  }

  let lastTimestamp = performance.now();
  let frameCount = 0;

  function updateCanvas2(timestamp) {
    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;
    frameCount++;

    if (frameCount % 2 === 0) { // Giới hạn cập nhật khung hình
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
      snowflakes.forEach((snowflake) => {
        snowflake.y += snowflake.speedY;
        snowflake.x += snowflake.speedX;
        snowflake.rotation += snowflake.rotationSpeed;

        if (snowflake.y > canvas2.height) {
          snowflake.y = -snowflake.size;
          snowflake.x = Math.random() * canvas2.width;
        }
        if (snowflake.x > canvas2.width || snowflake.x < -snowflake.size) {
          snowflake.x = Math.random() * canvas2.width;
        }

        ctx2.save();
        ctx2.filter = `blur(${snowflake.blur}px)`;
        ctx2.globalAlpha = Math.sin((performance.now() / 1000) % Math.PI); // Opacity luân phiên
        ctx2.translate(snowflake.x, snowflake.y);
        ctx2.rotate((snowflake.rotation * Math.PI) / 180);
        ctx2.drawImage(
          snowflake.img,
          -snowflake.size / 2,
          -snowflake.size / 2,
          snowflake.size,
          snowflake.size
        );
        ctx2.restore();
      });
    }
    requestAnimationFrame(updateCanvas2);
  }

  updateCanvas2(lastTimestamp);

  window.addEventListener('resize', function () {
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
  });
});
