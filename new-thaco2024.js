jQuery(document).ready(function () {
  // Tạo canvas mới cho hiệu ứng bông tuyết PNG
  const canvas2 = document.createElement('canvas');
  canvas2.id = 'canvas-2';
  canvas2.style.position = 'fixed';
  canvas2.style.top = '0';
  canvas2.style.left = '0';
  canvas2.style.zIndex = '999999';
  canvas2.style.pointerEvents = 'none';
  document.body.appendChild(canvas2);

  const ctx2 = canvas2.getContext('2d');
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;

  const snowflakes = [];
  const snowCount = 50; // Số lượng bông tuyết PNG

  // Tạo danh sách bông tuyết PNG
  for (let i = 0; i < snowCount; i++) {
    const id = Math.floor(Math.random() * 10); // Chọn ảnh ngẫu nhiên từ snow-1 đến snow-10
    const img = new Image();
    img.src = `https://thaco.link/snow/snow-${id + 1}.png`;

    const blurValue = Math.floor(Math.random() * 10) / 3; // Giá trị mờ (0px - ~3px)
    const opacityDuration = Math.random() * 6 + 4; // Thời gian luân phiên trong suốt (4-10s)

    snowflakes.push({
      x: Math.random() * canvas2.width,
      y: Math.random() * canvas2.height,
      size: Math.random() * 20 + 30, // Kích thước bông tuyết
      speedY: Math.random() * 2 + 1, // Tốc độ rơi
      speedX: Math.random() * 1 - 0.5, // Tốc độ ngang
      opacity: 0, // Giá trị ban đầu cho trong suốt
      blur: blurValue, // Áp dụng hiệu ứng mờ
      rotation: Math.random() * 360, // Góc xoay ban đầu
      rotationSpeed: Math.random() * 2 - 1, // Tốc độ xoay
      opacityCycle: opacityDuration, // Chu kỳ luân phiên opacity
      opacityTime: Math.random() * opacityDuration, // Bắt đầu luân phiên từ thời điểm ngẫu nhiên
      img: img
    });
  }

  // Hàm vẽ bông tuyết
  function drawSnowflake(snowflake) {
    ctx2.save();
    ctx2.filter = `blur(${snowflake.blur}px)`; // Áp dụng hiệu ứng mờ
    ctx2.globalAlpha = snowflake.opacity; // Áp dụng giá trị trong suốt
    ctx2.translate(snowflake.x, snowflake.y);
    ctx2.rotate((snowflake.rotation * Math.PI) / 180); // Xoay bông tuyết
    ctx2.drawImage(
      snowflake.img,
      -snowflake.size / 2,
      -snowflake.size / 2,
      snowflake.size,
      snowflake.size
    );
    ctx2.restore();
  }

  // Hàm cập nhật trạng thái bông tuyết
  function updateSnowflake(snowflake, deltaTime) {
    // Cập nhật vị trí
    snowflake.y += snowflake.speedY;
    snowflake.x += snowflake.speedX;
    snowflake.rotation += snowflake.rotationSpeed;

    // Reset khi vượt màn hình
    if (snowflake.y > canvas2.height) {
      snowflake.y = -snowflake.size;
      snowflake.x = Math.random() * canvas2.width;
    }
    if (snowflake.x > canvas2.width || snowflake.x < -snowflake.size) {
      snowflake.x = Math.random() * canvas2.width;
    }

    // Tính toán giá trị opacity luân phiên
    snowflake.opacityTime += deltaTime / 1000; // Tăng thời gian dựa trên deltaTime
    const phase = (snowflake.opacityTime % snowflake.opacityCycle) / snowflake.opacityCycle;
    if (phase < 0.3) {
      snowflake.opacity = phase / 0.3; // Tăng từ 0 đến 1
    } else if (phase < 0.6) {
      snowflake.opacity = 1; // Giữ nguyên tại 1
    } else {
      snowflake.opacity = (1 - (phase - 0.6) / 0.4); // Giảm từ 1 về 0
    }
  }

  // Hàm cập nhật canvas
  let lastTimestamp = performance.now();
  function updateCanvas2(timestamp) {
    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    ctx2.clearRect(0, 0, canvas2.width, canvas2.height); // Xóa canvas
    snowflakes.forEach((snowflake) => {
      updateSnowflake(snowflake, deltaTime);
      drawSnowflake(snowflake);
    });
    requestAnimationFrame(updateCanvas2); // Lặp lại hiệu ứng
  }

  updateCanvas2(lastTimestamp); // Bắt đầu hiệu ứng

  // Cập nhật kích thước canvas khi thay đổi kích thước cửa sổ
  window.addEventListener('resize', function () {
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
  });
});
