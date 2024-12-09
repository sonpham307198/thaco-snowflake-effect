// Hàm để gọi file CSS
function loadCSS(cssId, cssPath) {
  if (!document.getElementById(cssId)) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://sonpham307198.github.io/thaco-snowflake-effect/new-thaco2024.css'; // Đường dẫn tới file CSS
    link.media = 'all';
    head.appendChild(link);
  }
}

// Gọi file CSS trước khi chạy hiệu ứng
loadCSS('snowEffectCSS', 'https://sonpham307198.github.io/thaco-snowflake-effect/new-thaco2024.css'); // Thay bằng đường dẫn file CSS của bạn

// Hiệu ứng bông tuyết (thêm vào sau khi gọi file CSS)
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
