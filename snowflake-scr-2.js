<style>
/* Tùy chỉnh toàn bộ trang */
body {
    margin: 0;
    overflow: hidden;
}

/* Các bông tuyết */
.snowflake {
    position: absolute;
    top: 0;
    pointer-events: none;
    transform-origin: center;
    animation: fall linear infinite, spin linear infinite;
}

/* Hiệu ứng rơi */
@keyframes fall {
    0% {
        transform: translateY(-10%);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    100% {
        transform: translateY(110%);
        opacity: 0.2;
    }
}

/* Hiệu ứng xoay */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", () => {
    const maxSnowflakes = 30; // Số lượng bông tuyết
    const snowflakeSrc = "https://sonpham307198.github.io/thaco-snowflake-effect/snow-3.png"; // Đường dẫn ảnh bông tuyết

    // Hàm tạo bông tuyết
    function createSnowflake() {
        const snowflake = document.createElement("img");
        snowflake.src = snowflakeSrc;
        snowflake.classList.add("snowflake");

        // Kích thước ngẫu nhiên
        const size = Math.random() * 30 + 10; // 10px - 40px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Vị trí ban đầu ngẫu nhiên
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Tốc độ rơi: 5-10s
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Độ trễ ban đầu
        snowflake.style.zIndex = "9999";
        snowflake.style.filter = Math.random() > 0.7 ? "blur(2px)" : "none"; // Hiệu ứng mờ ngẫu nhiên

        document.body.appendChild(snowflake);

        // Xóa bông tuyết sau khi hoàn tất
        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
        });
    }

    // Tạo bông tuyết định kỳ
    setInterval(() => {
        if (document.querySelectorAll(".snowflake").length < maxSnowflakes) {
            createSnowflake();
        }
    }, 300); // Tạo bông tuyết mới mỗi 300ms
});
</script>
