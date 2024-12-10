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

    // Số lượng bông tuyết
    let count = 50;
    for (let i = 0; i < count; i++) {
        let leftSnow = Math.floor(Math.random() * snowContainer.clientWidth); // Vị trí ngang ngẫu nhiên
        let topSnow = Math.floor(Math.random() * snowContainer.clientHeight); // Vị trí dọc ngẫu nhiên
        let widthSnow = Math.floor(Math.random() * 25) + 10; // Kích thước ngẫu nhiên
        let timeSnow = Math.floor((Math.random() * 5) + 5); // Thời gian hoạt ảnh ngẫu nhiên
        let blurSnow = Math.floor(Math.random() * 10) / 3; // Hiệu ứng mờ ngẫu nhiên
        let id = Math.floor(Math.random() * 10); // Chọn hình ảnh ngẫu nhiên

        // Tạo bông tuyết
        let snowflake = document.createElement('div');
        snowflake.classList.add('mmis-snow-' + id); // Sử dụng class từ CSS
        snowflake.style.position = 'absolute';
        snowflake.style.left = leftSnow + 'px';
        snowflake.style.top = topSnow + 'px';
        snowflake.style.zIndex = 999999;
        snowflake.style.width = widthSnow + 'px';
        snowflake.style.height = widthSnow + 'px';
        snowflake.style.animationDuration = timeSnow + 's'; // Gán thời gian hoạt ảnh
        snowflake.style.filter = 'blur(' + blurSnow + 'px)'; // Hiệu ứng mờ
        snowContainer.appendChild(snowflake);
    }

    // Thêm CSS nếu chưa có
    let cssId = 'myCss';
    if (!document.getElementById(cssId)) {
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://thaco.link/snow/style25.css';
        link.media = 'all';
        head.appendChild(link);
    }
});
