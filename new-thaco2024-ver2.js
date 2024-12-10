jQuery(document).ready(function () {
    // Tạo container để chứa các bông tuyết
    let snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100vw';
    snowContainer.style.height = '100vh';
    snowContainer.style.pointerEvents = 'none'; // Cho phép click xuyên qua
    snowContainer.style.overflow = 'hidden'; // Giữ các bông tuyết trong màn hình
    snowContainer.style.zIndex = '999999';
    document.body.appendChild(snowContainer);

    // Thêm CSS động để định nghĩa hoạt ảnh
    let snowStyle = document.createElement('style');
    snowStyle.innerHTML = `
        @keyframes fall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }

        .snowflake {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0.8;
            animation: fall linear infinite;
        }
    `;
    document.head.appendChild(snowStyle);

    // Tạo các bông tuyết
    let count = 50; // Số lượng bông tuyết
    for (let i = 0; i < count; i++) {
        let snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.top = `${Math.random() * -50}vh`; // Xuất hiện ngẫu nhiên ngoài màn hình
        snowflake.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên trên chiều ngang
        snowflake.style.width = `${Math.random() * 10 + 5}px`; // Kích thước ngẫu nhiên
        snowflake.style.height = snowflake.style.width;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Thời gian rơi ngẫu nhiên
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Độ trễ ngẫu nhiên
        snowContainer.appendChild(snowflake);
    }
});
