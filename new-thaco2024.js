$(document).ready(function() {
    // Tạo một div chứa hiệu ứng tuyết
    let snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100vw';
    snowContainer.style.height = '100vh';
    snowContainer.style.pointerEvents = 'none'; // Cho phép click xuyên qua
    snowContainer.style.overflow = 'hidden'; // Ngăn không cho bông tuyết vượt ra ngoài màn hình
    document.body.appendChild(snowContainer);

    // Số lượng bông tuyết
    let count = 50;
    for (let i = 0; i < count; i++) {
        let leftSnow = Math.floor(Math.random() * snowContainer.clientWidth);
        let topSnow = Math.floor(Math.random() * snowContainer.clientHeight);
        let widthSnow = Math.floor(Math.random() * 25) + 10;
        let timeSnow = Math.floor(Math.random() * 5) + 5;
        let blurSnow = Math.floor(Math.random() * 10) / 3;
        let id = Math.floor(Math.random() * 10);

        let div = document.createElement('div');
        div.classList.add('mmis-snow-' + id);
        div.style.left = leftSnow + 'px';
        div.style.top = topSnow + 'px';
        div.style.width = widthSnow + 'px';
        div.style.height = widthSnow + 'px';
        div.style.animationDuration = timeSnow + 's';
        div.style.filter = "blur(" + blurSnow + "px)";
        snowContainer.appendChild(div);
    }

    // Thêm file CSS nếu chưa có
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
