$(document).ready(function () {
    // Chọn container là body của trang
    let container = document.body;

    // Tạo phần tử ảnh
    let img = document.createElement('img');

    // Thiết lập thuộc tính cho ảnh
    img.src = "Cay-thong-noel-2024.gif"; // Đường dẫn ảnh từ hosting
    img.alt = "Cây thông Noel 2024";
    img.style.position = "fixed"; // Gắn cố định
    img.style.bottom = "10px"; // Cách đáy 10px
    img.style.right = "10px"; // Cách phải 10px
    img.style.width = "250px"; // Chiều ngang ảnh
    img.style.zIndex = 9999; // Hiển thị trên cùng

    // Gắn ảnh vào body
    container.appendChild(img);
});
