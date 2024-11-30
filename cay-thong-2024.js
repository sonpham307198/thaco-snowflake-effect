document.addEventListener("DOMContentLoaded", function () {
    // Tạo một thẻ img
    let img = document.createElement("img");
    img.src = "Cay-thong-noel-2024.gif"; // Đường dẫn tới ảnh
    img.alt = "Cây thông Noel 2024";
    img.style.position = "fixed";
    img.style.bottom = "20px"; // Cách mép dưới 20px
    img.style.right = "20px"; // Cách mép phải 20px
    img.style.width = "250px"; // Chiều ngang của ảnh
    img.style.height = "auto"; // Tự động giữ tỷ lệ theo chiều ngang
    img.style.zIndex = "99999"; // Đặt trên các phần tử khác
    img.style.pointerEvents = "none"; // Không làm ảnh hưởng đến thao tác của người dùng

    // Gắn ảnh vào body
    document.body.appendChild(img);
});
