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
        let leftSnow = Math.floor(Math.random() * container.clientWidth);
        let topSnow = Math.floor(Math.random() * container.clientHeight);
        let widthSnow = Math.floor(Math.random() * 25)+10;
        let timeSnow = Math.floor((Math.random() * 5) + 5);
        let blurSnow = Math.floor(Math.random() * 10); blurSnow=blurSnow/3;
        let id=Math.floor(Math.random() * 10);
        
        let snowflake = document.createElement('div');
        div.classList.add('mmis-snow-'+id);
        snowflake.style.position = 'absolute';
        snowflake.style.left = leftSnow + 'px';
        snowflake.style.top = topSnow + 'px';
        snowflake.style.zIndex = 999999;
        snowflake.style.width = widthSnow + 'px';
        snowflake.style.height = widthSnow + 'px';
        snowflake.style.animationDuration = timeSnow + 's';
        snowflake.style.filter = "blur(" + blurSnow + "px)";
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
