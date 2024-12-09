jQuery(document).ready(function () {
  // Lấy canvas từ DOM hoặc tạo mới
  let canvas = document.querySelector('canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '999999';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const snowflakes = [];
  const snowCount = 50; // Số lượng bông tuyết

  // Tạo bông tuyết
  for (let i = 0; i < snowCount; i++) {
    const id = Math.floor(Math.random() * 10); // Chọn class tuyết ngẫu nhiên
    const img = new Image();
    img.src = `https://thaco.link/snow/snow-${id + 1}.png`; // Tạo URL tới ảnh
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      width: Math.random() * 25 + 25, // Kích thước bông tuyết
      height: Math.random() * 25 + 25,
      speedY: Math.random() * 2 + 1, // Tốc độ rơi
      speedX: Math.random() * 1 - 0.5, // Tốc độ ngang
      opacity: Math.random() * 0.8 + 0.2, // Độ trong suốt
      rotation: Math.random() * 360, // Góc xoay ban đầu
      rotationSpeed: Math.random() * 2 - 1, // Tốc độ xoay
      img: img
    });
  }

  // Hàm vẽ bông tuyết
  function drawSnowflake(snowflake) {
    ctx.save();
    ctx.globalAlpha = snowflake.opacity; // Độ trong suốt
    ctx.translate(snowflake.x, snowflake.y);
    ctx.rotate((snowflake.rotation * Math.PI) / 180); // Xoay ảnh
    ctx.drawImage(
      snowflake.img,
      -snowflake.width / 2,
      -snowflake.height / 2,
      snowflake.width,
      snowflake.height
    );
    ctx.restore();
  }

  // Hàm cập nhật vị trí bông tuyết
  function updateSnowflake(snowflake) {
    snowflake.y += snowflake.speedY; // Rơi dọc
    snowflake.x += snowflake.speedX; // Di chuyển ngang
    snowflake.rotation += snowflake.rotationSpeed; // Xoay

    // Nếu bông tuyết rơi ra khỏi màn hình, reset vị trí
    if (snowflake.y > canvas.height) {
      snowflake.y = -snowflake.height;
      snowflake.x = Math.random() * canvas.width;
    }
    if (snowflake.x > canvas.width || snowflake.x < -snowflake.width) {
      snowflake.x = Math.random() * canvas.width;
    }
  }

  // Hàm cập nhật canvas
  function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa canvas
    snowflakes.forEach((snowflake) => {
      updateSnowflake(snowflake);
      drawSnowflake(snowflake);
    });
    requestAnimationFrame(updateCanvas); // Lặp lại hiệu ứng
  }

  updateCanvas(); // Bắt đầu hiệu ứng

  // Cập nhật kích thước canvas khi thay đổi kích thước cửa sổ
  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
