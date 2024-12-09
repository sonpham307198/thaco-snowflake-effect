// Tải file CSS khi chạy JavaScript
function loadCSS(filename) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://sonpham307198.github.io/thaco-snowflake-effect/new-thaco2024.css'; // Đường dẫn đến file CSS
  document.head.appendChild(link);
}

// Gọi file CSS trước khi thực hiện hiệu ứng
loadCSS('https://sonpham307198.github.io/thaco-snowflake-effect/new-thaco2024.css'); // Thay bằng đường dẫn file CSS của bạn

// Sau đó, chạy tiếp các đoạn mã tạo hiệu ứng bông tuyết
jQuery(document).ready(function () {
  const snowflakeCount = 30; // Số lượng bông tuyết
  const snowContainer = document.createElement('div');
  snowContainer.id = 'snow-container';
  snowContainer.style.position = 'fixed';
  snowContainer.style.top = '0';
  snowContainer.style.left = '0';
  snowContainer.style.width = '100%';
  snowContainer.style.height = '100%';
  snowContainer.style.pointerEvents = 'none';
  snowContainer.style.overflow = 'hidden';
  snowContainer.style.zIndex = '9999';
  document.body.appendChild(snowContainer);

  // Danh sách ảnh PNG cho bông tuyết
  const snowflakeImages = [
    'https://thaco.link/snow/snow-1.png',
    'https://thaco.link/snow/snow-2.png',
    'https://thaco.link/snow/snow-3.png',
    'https://thaco.link/snow/snow-4.png',
    'https://thaco.link/snow/snow-5.png',
  ];

  // Tạo các bông tuyết
  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';

    const img = document.createElement('img');
    img.src = snowflakeImages[Math.floor(Math.random() * snowflakeImages.length)];

    // Gắn các CSS Variables để tuỳ chỉnh
    snowflake.style.setProperty('--size', `${Math.random() * 20 + 10}px`); // Kích thước
    snowflake.style.setProperty('--speed', `${Math.random()}`); // Tốc độ rơi
    snowflake.style.setProperty('--blur', `${Math.random() * 3}px`); // Độ mờ
    snowflake.style.setProperty('--opacity', `${Math.random()}`); // Độ trong suốt
    snowflake.style.left = `${Math.random() * 100}vw`; // Vị trí ngang ngẫu nhiên

    snowflake.appendChild(img);
    snowContainer.appendChild(snowflake);
  }
});
