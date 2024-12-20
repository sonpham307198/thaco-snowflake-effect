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

    // Tạo các bông tuyết
    let count = 50; // Số lượng bông tuyết
    for (let i = 0; i < count; i++) {
        let snowflake = document.createElement('div');
        let id = Math.floor(Math.random() * 10); // Chọn ảnh ngẫu nhiên từ 0-9
        snowflake.className = `mmis-snow-${id}`;
        snowflake.style.position = 'absolute';
        snowflake.style.top = `${Math.random() * 100}vh`; // Vị trí ngẫu nhiên
        snowflake.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên
        snowflake.style.width = `${Math.random() * 25 + 10}px`; // Kích thước ngẫu nhiên
        snowflake.style.height = snowflake.style.width;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Thời gian rơi ngẫu nhiên
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Độ trễ ngẫu nhiên
        snowflake.style.zIndex = '999999';
        snowContainer.appendChild(snowflake);
    }

    // Thêm CSS nếu chưa có
    var cssId = 'myCss';
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://thaco.link/snow/style25.css';
        link.media = 'all';
        head.appendChild(link);
    }
});
