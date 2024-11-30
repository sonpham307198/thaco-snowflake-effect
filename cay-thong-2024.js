$(document).ready(function () {
    // Chọn container là body của trang
    let container = document.body;

    // Tạo phần tử ảnh
    let img = document.createElement('img');

    // Thiết lập thuộc tính cho ảnh
    img.src = "https://sonpham307198.github.io/thaco-snowflake-effect/Cay-thong-noel-2024.gif"; // Đường dẫn ảnh từ hosting
    img.alt = "Cây thông Noel 2024";
    img.style.position = "fixed"; // Gắn cố định
    img.style.bottom = "10px"; // Cách đáy 10px
    img.style.left = "10px"; // Cách trái 10px
    img.style.width = "150px"; // Chiều ngang ảnh
    img.style.zIndex = 9999; // Hiển thị trên cùng
    img.style.pointerEvents = "none"; // Không làm ảnh hưởng đến thao tác của người dùng

    // Gắn ảnh vào body
    container.appendChild(img);
});
